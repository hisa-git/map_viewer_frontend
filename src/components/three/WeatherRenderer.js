import * as THREE from "three";
import { tempToColor, humidityToColor } from "../constants/temperaturecolors";
import {
  lonLatToWebMercator,
  computeTileSizeFromStep,
} from "../modules/projection";

export class WeatherRenderer {
  constructor(projectionHelpers, opts = {}) {
    this.toLocal = projectionHelpers.toLocal;
    this.elevationAboveGround = opts.elevationAboveGround ?? 20;
    this.mode = opts.mode ?? "temperature";
    this.minTemp = opts.minTemp ?? -30;
    this.maxTemp = opts.maxTemp ?? 40;
    this.minHumidity = opts.minHumidity ?? 0;
    this.maxHumidity = opts.maxHumidity ?? 100;
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

  _createTile({ lat, lon, temperature, humidity, step }) {
    if (
      typeof lat !== "number" ||
      typeof lon !== "number" ||
      !Number.isFinite(lat) ||
      !Number.isFinite(lon)
    ) {
      return null;
    }

    const { sizeX, sizeZ } = this._getTileSize(lon, lat, step);
    const [x, z] = this.toLocal(lon, lat);

    let color;
    if (this.mode === "temperature") {
      color = tempToColor(temperature, this.minTemp, this.maxTemp);
    } else {
      color = humidityToColor(humidity, this.minHumidity, this.maxHumidity);
    }

    const geometry = new THREE.PlaneGeometry(sizeX, sizeZ);
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, this.elevationAboveGround, z);
    mesh.userData = { lat, lon, temperature, humidity };

    return mesh;
  }

  renderWeatherData(data, step) {
    if (!data?.points) return [];
    return data.points
      .map((p) => this._createTile({ ...p, step }))
      .filter(Boolean);
  }

  // Новый метод для обновления цветов существующих мешей
  updateMeshColors(mesh) {
    const { temperature, humidity } = mesh.userData;

    let color;
    if (this.mode === "temperature") {
      color = tempToColor(temperature, this.minTemp, this.maxTemp);
    } else {
      color = humidityToColor(humidity, this.minHumidity, this.maxHumidity);
    }

    mesh.material.color.copy(color);
  }
}

export function createWeatherLoader(scene, options) {
  const {
    url,
    centerOffset = [0, 0],
    minTemp = -30,
    maxTemp = 40,
    minHumidity = 0,
    maxHumidity = 100,
    mode: initialMode = "temperature",
    step = 0.05,
    elevationAboveGround = 20,
    opacity = 0.5,
    onProgress,
  } = options;

  const loaded = new Map();
  const meshGroups = new Map();

  const projectionHelpers = {
    toLocal: (lon, lat) => {
      const [x, z] = lonLatToWebMercator(lon, lat);
      return [x - centerOffset[0], z - centerOffset[1]];
    },
  };

  const renderer = new WeatherRenderer(projectionHelpers, {
    mode: initialMode,
    minTemp,
    maxTemp,
    minHumidity,
    maxHumidity,
    elevationAboveGround,
  });

  function _chunkKey(minLon, minLat, maxLon, maxLat) {
    return `${minLon.toFixed(4)}_${minLat.toFixed(4)}_${maxLon.toFixed(
      4
    )}_${maxLat.toFixed(4)}`;
  }

  async function loadChunk(minLon, minLat, maxLon, maxLat, opts = {}) {
    const key = opts.keyHint || _chunkKey(minLon, minLat, maxLon, maxLat);

    if (loaded.has(key)) {
      return;
    }

    const params = new URLSearchParams({
      min_lat: minLat.toString(),
      max_lat: maxLat.toString(),
      min_lon: minLon.toString(),
      max_lon: maxLon.toString(),
      step: step.toString(),
    });

    try {
      const baseUrl = url || `${process.env.NEXT_PUBLIC_API_BASE}/weather/area`;
      const res = await fetch(`${baseUrl}?${params}`, { signal: opts.signal });

      if (!res.ok) {
        console.warn(`Weather fetch failed: ${res.status}`);
        return;
      }

      const data = await res.json();

      if (!data?.points || data.points.length === 0) {
        return;
      }

      _renderChunk(key, data);
      loaded.set(key, data);

      if (onProgress) {
        onProgress({ rendered: meshGroups.size, key });
      }
    } catch (e) {
      if (e?.name !== "AbortError") {
        console.error("Weather load error:", e);
      }
    }
  }

  function _renderChunk(key, data) {
    if (meshGroups.has(key)) {
      removeChunk(key);
    }

    const group = new THREE.Group();
    const meshes = renderer.renderWeatherData(data, step);

    for (const mesh of meshes) {
      group.add(mesh);
    }

    if (group.children.length > 0) {
      scene.add(group);
      meshGroups.set(key, group);
    }
  }

  function removeChunk(key) {
    const group = meshGroups.get(key);
    if (!group) return;

    scene.remove(group);
    group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });

    meshGroups.delete(key);
    loaded.delete(key);
  }

  function setMode(newMode) {
    if (newMode === renderer.mode) return;

    renderer.mode = newMode;

    // Обновляем цвета всех существующих мешей
    for (const group of meshGroups.values()) {
      group.traverse((obj) => {
        if (obj.isMesh && obj.userData.temperature !== undefined) {
          renderer.updateMeshColors(obj);
        }
      });
    }
  }

  function clearAll() {
    for (const key of Array.from(meshGroups.keys())) {
      removeChunk(key);
    }
  }

  return {
    loadChunk,
    setMode,
    clearAll,
    removeChunk,
    get mode() {
      return renderer.mode;
    },
    get meshGroups() {
      return meshGroups;
    },
  };
}

export { tempToColor, humidityToColor };
