import * as THREE from "three";
import {
  tempToColor,
  humidityToColor,
} from "../../../constants/temperaturecolors";
import { lonLatToWebMercator } from "../scene/projection";

export class WeatherRenderer {
  constructor(projectionHelpers, opts = {}) {
    this.toLocal = projectionHelpers.toLocal;
    this.elevationAboveGround = opts.elevationAboveGround ?? 20;
    this.mode = opts.mode ?? "temperature";
    this.minTemp = opts.minTemp ?? -30;
    this.maxTemp = opts.maxTemp ?? 40;
    this.minHumidity = opts.minHumidity ?? 0;
    this.maxHumidity = opts.maxHumidity ?? 100;
    this.opacity = opts.opacity ?? 0.5;

    console.log("[WeatherRenderer] Created:", {
      mode: this.mode,
      elevation: this.elevationAboveGround,
      opacity: this.opacity,
    });
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
      console.warn("[WeatherRenderer] Invalid coords:", { lat, lon });
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
      opacity: this.opacity,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, this.elevationAboveGround, z);
    mesh.userData = { lat, lon, temperature, humidity };
    mesh.renderOrder = 100;

    return mesh;
  }

  renderWeatherData(data, step) {
    if (!data?.points) {
      console.warn("[WeatherRenderer] No points in data:", data);
      return [];
    }

    console.log("[WeatherRenderer] Rendering", data.points.length, "tiles");

    const meshes = data.points
      .map((p) => this._createTile({ ...p, step }))
      .filter(Boolean);

    console.log("[WeatherRenderer] Created", meshes.length, "meshes");

    return meshes;
  }

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
    onDataLoaded,
  } = options;

  console.log("[WeatherLoader] Initializing with:", {
    mode: initialMode,
    step,
    elevation: elevationAboveGround,
    opacity,
    url,
  });

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
    opacity,
  });

  function _chunkKey(minLon, minLat, maxLon, maxLat) {
    return `weather_${minLon.toFixed(4)}_${minLat.toFixed(4)}_${maxLon.toFixed(
      4,
    )}_${maxLat.toFixed(4)}`;
  }

  async function loadChunk(minLon, minLat, maxLon, maxLat, opts = {}) {
    const key = opts.keyHint || _chunkKey(minLon, minLat, maxLon, maxLat);

    if (loaded.has(key)) {
      console.log("[WeatherLoader] Chunk already loaded:", key);
      return;
    }

    const params = new URLSearchParams({
      min_lat: minLat.toString(),
      max_lat: maxLat.toString(),
      min_lon: minLon.toString(),
      max_lon: maxLon.toString(),
      step: step.toString(),
    });

    const baseUrl = url || `${process.env.NEXT_PUBLIC_API_BASE}/weather/area`;
    const fetchUrl = `${baseUrl}?${params}`;

    console.log("[WeatherLoader] Fetching:", fetchUrl);

    try {
      const res = await fetch(fetchUrl, { signal: opts.signal });

      if (!res.ok) {
        console.warn(`[WeatherLoader] Fetch failed: ${res.status}`);
        return;
      }

      const data = await res.json();

      console.log("[WeatherLoader] Received data:", {
        pointsCount: data?.points?.length,
        samplePoint: data?.points?.[0],
      });

      if (!data?.points || data.points.length === 0) {
        console.warn("[WeatherLoader] No points received");
        return;
      }

      const meshes = _renderChunk(key, data);
      loaded.set(key, data);

      if (onDataLoaded && meshes && meshes.length > 0) {
        console.log(
          "[WeatherLoader] Calling onDataLoaded with",
          meshes.length,
          "meshes",
        );
        onDataLoaded(meshes);
      }

      if (onProgress) {
        onProgress({ rendered: meshGroups.size, key });
      }

      console.log(
        "[WeatherLoader] Successfully loaded chunk:",
        key,
        "Total meshGroups:",
        meshGroups.size,
      );
    } catch (e) {
      if (e?.name !== "AbortError") {
        console.error("[WeatherLoader] Load error:", e);
      }
    }
  }

  function _renderChunk(key, data) {
    if (meshGroups.has(key)) {
      console.log("[WeatherLoader] Removing old chunk:", key);
      removeChunk(key);
    }

    const group = new THREE.Group();
    const meshes = renderer.renderWeatherData(data, step);

    console.log("[WeatherLoader] Adding", meshes.length, "meshes to group");

    for (const mesh of meshes) {
      group.add(mesh);
    }

    if (group.children.length > 0) {
      scene.add(group);
      meshGroups.set(key, group);
      console.log(
        "[WeatherLoader] Group added to scene:",
        key,
        "Children:",
        group.children.length,
      );
    } else {
      console.warn(
        "[WeatherLoader] Group has no children, not adding to scene",
      );
    }

    return meshes;
  }

  function removeChunk(key) {
    const group = meshGroups.get(key);
    if (!group) return;

    console.log("[WeatherLoader] Removing chunk:", key);

    scene.remove(group);
    group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });

    meshGroups.delete(key);
    loaded.delete(key);
  }

  function setMode(newMode) {
    if (newMode === renderer.mode) {
      console.log("[WeatherLoader] Mode already set to:", newMode);
      return;
    }

    console.log(
      "[WeatherLoader] Changing mode from",
      renderer.mode,
      "to",
      newMode,
    );
    renderer.mode = newMode;

    let updatedCount = 0;
    for (const group of meshGroups.values()) {
      group.traverse((obj) => {
        if (obj.isMesh && obj.userData.temperature !== undefined) {
          renderer.updateMeshColors(obj);
          updatedCount++;
        }
      });
    }

    console.log("[WeatherLoader] Updated", updatedCount, "meshes to new mode");
  }

  function clearAll() {
    console.log("[WeatherLoader] Clearing all chunks");
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
