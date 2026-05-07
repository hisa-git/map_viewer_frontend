import * as THREE from "three";
import { lonLatToWebMercator } from "../scene/projection";
import { WeatherRenderer } from "./WeatherRenderer";

export function createWeatherLoader(scene, options) {
  const {
    url,
    centerOffset = [0, 0],
    layer,
    step = 0.05,
    elevationAboveGround = 20,
    opacity = 0.25,
    onProgress,
    onDataLoaded,
  } = options;

  const loaded = new Map();
  const meshGroups = new Map();

  let activeLayer = layer;

  const projectionHelpers = {
    toLocal: (lon, lat) => {
      const [x, z] = lonLatToWebMercator(lon, lat);
      return [x - centerOffset[0], z - centerOffset[1]];
    },
  };

  const renderer = new WeatherRenderer(projectionHelpers, {
    elevationAboveGround,
    opacity,
  });

  function _chunkKey(minLon, minLat, maxLon, maxLat) {
    return `weather_${minLon.toFixed(4)}_${minLat.toFixed(4)}_${maxLon.toFixed(4)}_${maxLat.toFixed(4)}`;
  }

  async function loadChunk(minLon, minLat, maxLon, maxLat, opts = {}) {
    const key = opts.keyHint || _chunkKey(minLon, minLat, maxLon, maxLat);
    if (loaded.has(key)) return;

    const params = new URLSearchParams({
      min_lat: minLat,
      max_lat: maxLat,
      min_lon: minLon,
      max_lon: maxLon,
      step,
    });

    try {
      const res = await fetch(`${url}?${params}`, { signal: opts.signal });
      if (!res.ok) return;

      const data = await res.json();
      if (!data?.points?.length) return;

      loaded.set(key, data);
      const meshes = _renderChunk(key, data);

      onDataLoaded?.(meshes);
      onProgress?.({ rendered: meshGroups.size, key });
    } catch (e) {
      if (e?.name !== "AbortError") console.error("[WeatherLoader] Load error:", e);
    }
  }

  function _renderChunk(key, data) {
    if (meshGroups.has(key)) removeChunk(key);

    const group = new THREE.Group();
    const meshes = renderer.renderWeatherData(data, step, activeLayer);

    for (const mesh of meshes) group.add(mesh);

    if (group.children.length > 0) {
      scene.add(group);
      meshGroups.set(key, group);
    }

    return meshes;
  }

  function removeChunk(key) {
    const group = meshGroups.get(key);
    if (!group) return;

    scene.remove(group);
    group.traverse((obj) => {
      obj.geometry?.dispose();
      obj.material?.dispose();
    });

    meshGroups.delete(key);
    loaded.delete(key);
  }

  function setLayer(newLayer) {
    if (newLayer.id === activeLayer?.id) return;
    activeLayer = newLayer;

    for (const group of meshGroups.values()) {
      const meshes = [];
      group.traverse((obj) => {
        if (obj.isMesh) meshes.push(obj);
      });
      renderer.updateMeshColors(meshes, activeLayer);
    }
  }

const elevation = options.elevationAboveGround ?? layer.elevation ?? 20;

  function rerender() {
    for (const [key, data] of loaded.entries()) {
      _renderChunk(key, data);
    }
  }

  function clearAll() {
    for (const key of Array.from(meshGroups.keys())) removeChunk(key);
  }

  return {
    loadChunk,
    setLayer,
    rerender,
    clearAll,
    removeChunk,
    get activeLayer() { return activeLayer; },
    get meshGroups() { return meshGroups; },
  };
}