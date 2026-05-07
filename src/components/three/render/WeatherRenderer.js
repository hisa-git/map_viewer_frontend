import * as THREE from "three";
import { lonLatToWebMercator } from "../scene/projection";

export class WeatherRenderer {
  constructor(projectionHelpers, opts = {}) {
    this.toLocal = projectionHelpers.toLocal;
    this.elevationAboveGround = opts.elevationAboveGround ?? 20;
    this.opacity = opts.opacity ?? 0.25;
  }

  _getTileSize(lon, lat, step) {
    const half = step / 2;
    const [x1, z1] = lonLatToWebMercator(lon - half, lat - half);
    const [x2, z2] = lonLatToWebMercator(lon + half, lat + half);
    return {
      sizeX: Math.abs(x2 - x1),
      sizeZ: Math.abs(z2 - z1),
    };
  }

  _createTile({ lat, lon, step, point, layer }) {
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      console.warn("[WeatherRenderer] Invalid coords:", { lat, lon });
      return null;
    }

    const value = layer.getValue(point);
    const color = layer.toColor(value);
    const { sizeX, sizeZ } = this._getTileSize(lon, lat, step);
    const [x, z] = this.toLocal(lon, lat);

    const geometry = new THREE.PlaneGeometry(sizeX, sizeZ);
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: this.opacity,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, this.elevationAboveGround, z);
    mesh.userData = { ...point, layerId: layer.id };
    mesh.renderOrder = 100;

    return mesh;
  }

  renderWeatherData(data, step, layer) {
    if (!data?.points?.length) {
      console.warn("[WeatherRenderer] No points:", data);
      return [];
    }

    return data.points
      .map((point) =>
        this._createTile({
          lat: point.lat,
          lon: point.lon,
          step,
          point,
          layer,
        })
      )
      .filter(Boolean);
  }

  updateMeshColors(meshes, layer) {
    for (const mesh of meshes) {
      const value = layer.getValue(mesh.userData);
      mesh.material.color.copy(layer.toColor(value));
      mesh.userData.layerId = layer.id;
    }
  }
}