import * as THREE from "three";
import { ExtrudeGeometry } from "three";
import proj4 from "proj4";
import { DEFAULTS } from "../constants/defaults";
import { _lineToMesh, ensureClosed, coordsToShape } from "./GeometryRenderers";

const WGS84 = "EPSG:4326";
const WEB_MERCATOR = "EPSG:3857";
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ---------- Base Renderer ---------- */
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

  renderFeature(/* feature */) {
    throw new Error("renderFeature must be implemented by subclass");
  }
}

/* ---------- Polygon Base ---------- */

class PolygonRendererBase extends LayerRenderer {
  _ensureClosed(ring = []) {
    return ensureClosed.call(this, ring);
  }

  _coordsToShape(polygonCoords = []) {
    return coordsToShape.call(this, polygonCoords);
  }
}

/* ---------- Buildings ---------- */
class BuildingsRenderer extends PolygonRendererBase {
  renderFeature(feature) {
    const { geometry, properties = {} } = feature;
    if (!geometry) return [];

    const height = properties.height ?? DEFAULTS.buildingHeight;
    const meshes = [];

    const handleCoords = (coords) => {
      const shape = this._coordsToShape(coords);
      if (!shape) return;
      const extrude = new ExtrudeGeometry(shape, {
        depth: height,
        bevelEnabled: false,
      });
      extrude.rotateX(-Math.PI / 2);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        roughness: 0.8,
        metalness: 0.2,
      });
      const mesh = new THREE.Mesh(extrude, mat);
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

/* ---------- Rivers ---------- */
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
      const mat = new THREE.MeshStandardMaterial({
        color: 0xaaddff,
        roughness: 0.6,
        metalness: 0.1,
      });
      const mesh = new THREE.Mesh(geom, mat);
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
  renderFeature(feature) {
    const { geometry, properties = {} } = feature;
    if (!geometry) return [];

    const meshes = [];
    const handleLine = (coords) => {
      const mesh = _lineToMesh.call(this, coords, properties);
      if (mesh) meshes.push(mesh);
    };

    if (geometry.type === "LineString") handleLine(geometry.coordinates);
    else if (geometry.type === "MultiLineString")
      for (const ls of geometry.coordinates) handleLine(ls);

    return meshes;
  }

  _getRoadWidth(props = {}) {
    const t = props.fclass || props.highway || props.type || "residential";
    return DEFAULTS.roadWidths[t] ?? 5;
  }

  _getRoadColor(props = {}) {
    const t = props.fclass || props.highway || props.type || "residential";
    return DEFAULTS.roadColors[t] ?? 0xdddddd;
  }
}
/* ---------- Renderer Registry ---------- */
const RENDERERS = {
  buildings: BuildingsRenderer,
  roads: RoadsRenderer,
  rivers: RiversRenderer,
};

/* ---------- ChunkLoader ---------- */
export class ChunkLoader {
  constructor(scene, opts = {}) {
    this.scene = scene;
    this.loaded = new Map();
    this.meshGroups = new Map();

    this.url = opts.url || `${process.env.NEXT_PUBLIC_API_BASE}/chunk`;
    this.onProgress = opts.onProgress || (() => {});
    this.centerOffset = opts.centerOffset || [0, 0];
    this.layerType = opts.layerType || "buildings";

    if (opts.customRenderer) {
      this.renderer = opts.customRenderer;
    } else {
      const Renderer = RENDERERS[this.layerType] || BuildingsRenderer;
      this.renderer = new Renderer(this.centerOffset);
    }
  }

  _chunkKey(a, b, c, d) {
    return `${a.toFixed(6)}_${b.toFixed(6)}_${c.toFixed(6)}_${d.toFixed(6)}`;
  }

  clampLatLon(lon, lat) {
    lon = clamp(lon, -180, 180);
    lat = clamp(lat, -85.0511, 85.0511);
    return [lon, lat];
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
      minx: String(minx),
      miny: String(miny),
      maxx: String(maxx),
      maxy: String(maxy),
      simplify: String(simplify),
    });

    const url = `${this.url}?${qs.toString()}`;

    try {
      const t0 = performance.now();
      const r = await fetch(url, { signal });
      if (!r.ok) throw new Error(`server ${r.status}`);
      const data = await r.json();
      this.loaded.set(key, data);

      const rendered = this._renderData(data, key);

      this.onProgress({
        key,
        featuresTotal: data.features?.length || data.points?.length || 0,
        rendered,
        meshesTotal: this.meshGroups.size,
        queryTimeMs: Math.round(performance.now() - t0),
        bounds: { minx, miny, maxx, maxy },
      });

      return data;
    } catch (e) {
      this.loaded.delete(key);
      if (e.name !== "AbortError") console.error("ChunkLoader error:", e);
      return null;
    }
  }

  _renderData(data, key) {
    if (!data) return 0;

    if (this.meshGroups.has(key)) {
      const old = this.meshGroups.get(key);
      this.scene.remove(old);
      old.traverse((n) => {
        if (n.geometry) n.geometry.dispose();
        if (n.material) n.material.dispose();
      });
      this.meshGroups.delete(key);
    }

    const group = new THREE.Group();
    let rendered = 0;

    if (typeof this.renderer.renderWeatherData === "function" && data.points) {
      const meshes = this.renderer.renderWeatherData(data) || [];
      for (const m of meshes) {
        if (!m) continue;
        group.add(m);
        rendered++;
      }
    } else if (data.features) {
      for (const feature of data.features) {
        if (!feature?.geometry) continue;
        const meshes = this.renderer.renderFeature(feature) || [];
        for (const m of meshes) {
          if (!m) continue;
          group.add(m);
          rendered++;
        }
      }
    }

    if (rendered > 0) {
      this.scene.add(group);
      this.meshGroups.set(key, group);
    }

    return rendered;
  }

  removeChunk(key) {
    const g = this.meshGroups.get(key);
    if (!g) return;
    this.scene.remove(g);
    g.traverse((n) => {
      if (n.geometry) n.geometry.dispose();
      if (n.material) n.material.dispose();
    });
    this.meshGroups.delete(key);
    this.loaded.delete(key);
  }

  clearAll() {
    for (const key of Array.from(this.meshGroups.keys())) this.removeChunk(key);
    this.loaded.clear();
  }
}

export function createProjectionHelpers(centerOffset) {
  return {
    toLocal: (lon, lat) => {
      const [x0, z0] = proj4(WGS84, WEB_MERCATOR, [lon, lat]);
      return [x0 - centerOffset[0], z0 - centerOffset[1]];
    },
  };
}
