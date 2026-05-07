import * as THREE from "three";
import { ExtrudeGeometry } from "three";
import proj4 from "proj4";
import { DEFAULTS } from "../../../constants/defaults";
import { _lineToMesh, ensureClosed, coordsToShape } from "./GeometryRenderers";
import {
  buildingMaterial,
  riverMaterial,
} from "../objects/Materials";

const WGS84 = "EPSG:4326";
const WEB_MERCATOR = "EPSG:3857";
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

class LayerRenderer {
  constructor(centerOffset = [0, 0]) {
    this.centerOffset = centerOffset;
    this._projFrom = WGS84;
    this._projTo = WEB_MERCATOR;
  }

  toLocal(lon, lat) {
    const [x0, z0] = proj4(this._projFrom, this._projTo, [lon, lat]);
    return [x0 - this.centerOffset[0], z0 - this.centerOffset[1]];
  }

  renderFeature() {
    throw new Error("renderFeature must be implemented by subclass");
  }
}

class PolygonRendererBase extends LayerRenderer {
  _ensureClosed(ring = []) {
    return ensureClosed.call(this, ring);
  }

  _coordsToShape(polygonCoords = []) {
    return coordsToShape.call(this, polygonCoords);
  }
}

class BuildingsRenderer extends PolygonRendererBase {
  renderFeature(feature) {
    const { geometry, properties = {} } = feature;
    if (!geometry) return [];

    const height = properties.height ?? DEFAULTS.buildingHeight;
    const meshes = [];

    const handleCoords = (coords) => {
      const shape = this._coordsToShape(coords);
      if (!shape) return;

      const geom = new ExtrudeGeometry(shape, {
        depth: height,
        bevelEnabled: false,
      });

      geom.rotateX(-Math.PI / 2);

      const mesh = new THREE.Mesh(geom, buildingMaterial);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      meshes.push(mesh);
    };

    if (geometry.type === "Polygon") handleCoords(geometry.coordinates);
    else if (geometry.type === "MultiPolygon")
      for (const poly of geometry.coordinates) handleCoords(poly);

    return meshes;
  }
}

class RiversRenderer extends PolygonRendererBase {
  renderFeature(feature) {
    const { geometry } = feature;
    if (!geometry) return [];

    const meshes = [];

    const handleCoords = (coords) => {
      const shape = this._coordsToShape(coords);
      if (!shape) return;

      const geom = new THREE.ShapeGeometry(shape);
      geom.rotateX(-Math.PI / 2);

      const mesh = new THREE.Mesh(geom, riverMaterial);
      mesh.receiveShadow = true;

      meshes.push(mesh);
    };

    if (geometry.type === "Polygon") handleCoords(geometry.coordinates);
    else if (geometry.type === "MultiPolygon")
      for (const poly of geometry.coordinates) handleCoords(poly);

    return meshes;
  }
}

class RoadsRenderer extends LayerRenderer {
  constructor(centerOffset) {
    super(centerOffset);
    this._materialCache = new Map();
  }

  _getRoadType(props = {}) {
    return props.fclass ?? "residential";
  }

  _getRoadColor(props = {}) {
    const type = this._getRoadType(props);
    return DEFAULTS.roadColors[type] ?? DEFAULTS.roadColors.residential;
  }

  _getRoadWidth(props = {}) {
    const type = this._getRoadType(props);
    return DEFAULTS.roadWidths[type] ?? DEFAULTS.roadWidths.residential;
  }

  _getRoadMaterial(props = {}) {
    const roadType = props.highway || "residential";

    if (this._materialCache.has(roadType)) {
      return this._materialCache.get(roadType);
    }

    const color = this._getRoadColor(props);

    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.9,
      metalness: 0.0,
    });

    this._materialCache.set(roadType, mat);
    console.log(JSON.stringify(props, null, 2));

    return mat;
  }

  renderFeature(feature) {
    const { geometry, properties = {} } = feature;
    if (!geometry) return [];

    const meshes = [];
    const material = this._getRoadMaterial(properties);

    const handleLine = (coords) => {
      const mesh = _lineToMesh.call(this, coords, properties, material);
      if (mesh) meshes.push(mesh);
    };

    if (geometry.type === "LineString") handleLine(geometry.coordinates);
    else if (geometry.type === "MultiLineString")
      for (const ls of geometry.coordinates) handleLine(ls);

    return meshes;
  }
}

const RENDERERS = {
  buildings: BuildingsRenderer,
  roads: RoadsRenderer,
  rivers: RiversRenderer,
};

export class ChunkLoader {
  constructor(scene, opts = {}) {
    this.scene = scene;
    this.loaded = new Map();
    this.meshGroups = new Map();

    this.url = opts.url || `${process.env.NEXT_PUBLIC_API_BASE}/chunk`;
    this.onProgress = opts.onProgress || (() => {});
    this.centerOffset = opts.centerOffset || [0, 0];
    this.layerType = opts.layerType || "buildings";
    this.yOffset = opts.yOffset || 0;
    this.color = opts.color || 0xcccccc;

    const Renderer = opts.customRenderer || RENDERERS[this.layerType];
    this.renderer = new Renderer(this.centerOffset);
  }

  _chunkKey(a, b, c, d) {
    return `${a.toFixed(6)}_${b.toFixed(6)}_${c.toFixed(6)}_${d.toFixed(6)}`;
  }

  clampLatLon(lon, lat) {
    return [clamp(lon, -180, 180), clamp(lat, -85.0511, 85.0511)];
  }

  async loadChunk(minLon, minLat, maxLon, maxLat, opts = {}) {
    const {
      simplify = 1,
      signal = null,
      useCache = true,
      keyHint = null,
    } = opts;

    const [minx, miny] = this.clampLatLon(minLon, minLat);
    const [maxx, maxy] = this.clampLatLon(maxLon, maxLat);
    const key = keyHint || this._chunkKey(minx, miny, maxx, maxy);

    if (useCache && this.loaded.has(key)) return this.loaded.get(key);
    this.loaded.set(key, null);

    const qs = new URLSearchParams({
      minx,
      miny,
      maxx,
      maxy,
      simplify,
    });

    try {
      const r = await fetch(`${this.url}?${qs}`, { signal });
      if (!r.ok) throw new Error(r.status);

      const data = await r.json();
      this.loaded.set(key, data);
      this._renderData(data, key);
      return data;
    } catch {
      this.loaded.delete(key);
      return null;
    }
  }

  _renderData(data, key) {
    if (!data) return 0;

    if (this.meshGroups.has(key)) this.removeChunk(key);

    const group = new THREE.Group();
    let rendered = 0;

    for (const feature of data.features || []) {
      const meshes = this.renderer.renderFeature(feature) || [];
      for (const m of meshes) {
        group.add(m);
        rendered++;
      }
    }

    if (rendered) {
      this.scene.add(group);
      this.meshGroups.set(key, group);
    }

    return rendered;
  }

  removeChunk(key) {
    const g = this.meshGroups.get(key);
    if (!g) return;

    this.scene.remove(g);
    g.traverse((n) => n.geometry?.dispose());
    this.meshGroups.delete(key);
    this.loaded.delete(key);
  }

  clearAll() {
    for (const key of this.meshGroups.keys()) this.removeChunk(key);
  }
}