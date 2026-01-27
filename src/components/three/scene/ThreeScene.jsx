"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import proj4 from "proj4";

import { ChunkLoader } from "../render/ChunkLoader";
import { createRenderer } from "../render/Renderer";
import { createCamera } from "../objects/Camera";
import { createScene } from "./Scene";
import { createControls } from "../objects/Controls";
import { setupRaycast } from "../objects/Raycast";
import { createWeatherLoader } from "../render/WeatherRenderer";
import { createWeatherLabelManager } from "../../ui/map/WeatherLabelManager";
import { LightingManager } from "./LightingManager";
import { Ground } from "../objects/Ground";

import {
  setLayerVisibility,
  cleanupUnusedChunks,
  updateRoadVisibility,
  generateTilesToLoad,
} from "./sceneUtils";

import {
  PROJECTIONS,
  DEFAULTS,
  ROAD_VISIBILITY,
  WEATHER_CONFIG,
  GROUND_CONFIG,
  COLOR_PALETTES,
  LAYER_OFFSETS,
} from "../../../constants/constants";

export default function ThreeScene({ settings = {} }) {
  const containerRef = useRef(null);

  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const lightingRef = useRef(null);
  const groundRef = useRef(null);

  const loadersRef = useRef(new Map());
  const weatherLabelManagerRef = useRef(null);

  const frameRef = useRef(null);
  const controllerRef = useRef(null);
  const updateTimeoutRef = useRef(null);
  const isLoadingRef = useRef(false);
  const settingsRef = useRef(settings);

  useEffect(() => {
    settingsRef.current = settings;
  }, [settings]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const envBase = process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000";

    const startLon = Number(process.env.NEXT_PUBLIC_STARTLON || 0);
    const startLat = Number(process.env.NEXT_PUBLIC_STARTLAT || 0);

    const [centerX, centerZ] = proj4(
      PROJECTIONS.WGS84,
      PROJECTIONS.WEB_MERCATOR,
      [startLon, startLat],
    );

    const palette = settings.nightMode
      ? COLOR_PALETTES.dark
      : COLOR_PALETTES.light;

    const renderer = createRenderer(container);
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.toneMappingExposure = 1;
    rendererRef.current = renderer;

    const camera = createCamera(container.clientWidth, container.clientHeight);
    camera.position.set(0, DEFAULTS.CAMERA_HEIGHT, DEFAULTS.CAMERA_DISTANCE);
    cameraRef.current = camera;

    const controls = createControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.minPolarAngle = Math.PI / 6;
    controls.maxPolarAngle = Math.PI / 2.2;
    controls.update();
    controlsRef.current = controls;

    const scene = createScene({
      background: palette.background,
      debug: settings.debug === true,
    });
    scene.background = new THREE.Color(palette.background);
    sceneRef.current = scene;

    const lighting = new LightingManager(scene);
    lighting.setNightMode(settings.nightMode === true);
    lightingRef.current = lighting;

    const ground = new Ground({
      size: GROUND_CONFIG.SIZE,
      color: palette.ground,
      yOffset: LAYER_OFFSETS.ground,
    });

    ground.addTo(scene);
    groundRef.current = ground;

    const weatherLabelManager = createWeatherLabelManager(scene);
    weatherLabelManager.setNightMode(settings.nightMode === true);
    weatherLabelManagerRef.current = weatherLabelManager;

    const cleanupRaycast = setupRaycast(
      renderer.domElement,
      camera,
      scene,
      controls,
      container,
    );

    const endpoints = {
      buildings: settings.endpoints?.buildings || `${envBase}/chunk/buildings`,
      roads: settings.endpoints?.roads || `${envBase}/chunk/roads`,
      water: settings.endpoints?.water || `${envBase}/chunk/water`,
    };

    const createLayerLoader = (key, opts) =>
      settings.loaders?.[key] || new ChunkLoader(scene, opts);

    const buildingsLoader = createLayerLoader("buildings", {
      url: endpoints.buildings,
      centerOffset: [centerX, centerZ],
      layerType: "buildings",
      yOffset: LAYER_OFFSETS.buildings,
      color: palette.buildings,
    });

    const roadsLoader = createLayerLoader("roads", {
      url: endpoints.roads,
      centerOffset: [centerX, centerZ],
      layerType: "roads",
      yOffset: LAYER_OFFSETS.roads,
      color: palette.roads,
      nightMode: settings.nightMode === true,
    });

    const waterLoader = createLayerLoader("water", {
      url: endpoints.water,
      centerOffset: [centerX, centerZ],
      layerType: "rivers",
      yOffset: LAYER_OFFSETS.water,
      color: palette.water,
    });

    const weatherLoader = createWeatherLoader(scene, {
      url: `${envBase}/weather/area`,
      centerOffset: [centerX, centerZ],
      mode: settings.temperature
        ? "temperature"
        : settings.humidity
          ? "humidity"
          : "temperature",
      minTemp: WEATHER_CONFIG.MIN_TEMP,
      maxTemp: WEATHER_CONFIG.MAX_TEMP,
      minHumidity: WEATHER_CONFIG.MIN_HUMIDITY,
      maxHumidity: WEATHER_CONFIG.MAX_HUMIDITY,
      step: WEATHER_CONFIG.STEP,
      elevationAboveGround: LAYER_OFFSETS.weather,
      opacity: WEATHER_CONFIG.OPACITY,
      onDataLoaded: (points) => {
        const manager = weatherLabelManagerRef.current;
        if (!manager) return;

        const settings = settingsRef.current;

        if (settings.temperature) {
          manager.render({
            id: "temperature",
            meshes: points,
            getValue: (mesh) => mesh.userData.temperature,
            format: (value) =>
              typeof value === "number" && isFinite(value)
                ? `${value.toFixed(1)}°C`
                : "–°C",
          });
        } else {
          manager.clear("temperature");
        }

        if (settings.humidity) {
          manager.render({
            id: "humidity",
            meshes: points,
            getValue: (mesh) => mesh.userData.humidity,
            format: (value) => {
              if (value === null || value === undefined || isNaN(value))
                return "-%";
              return `${Math.round(value)}%`;
            },
          });
        } else {
          manager.clear("humidity");
        }

        rendererRef.current?.render(sceneRef.current, cameraRef.current);
      },
    });

    loadersRef.current.set("buildings", buildingsLoader);
    loadersRef.current.set("roads", roadsLoader);
    loadersRef.current.set("water", waterLoader);
    loadersRef.current.set("weather", weatherLoader);

    const updateChunks = async () => {
      if (isLoadingRef.current) {
        console.log("[ThreeScene] updateChunks blocked - already loading");
        return;
      }
      isLoadingRef.current = true;

      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const tx = controls.target.x + centerX;
        const tz = controls.target.z + centerZ;

        const [lon, lat] = proj4(PROJECTIONS.WEB_MERCATOR, PROJECTIONS.WGS84, [
          tx,
          tz,
        ]);

        const currentSettings = settingsRef.current;
        const tileSize = currentSettings.tileSize || DEFAULTS.TILE_SIZE;
        const viewRadius =
          typeof currentSettings.viewRadius === "number"
            ? currentSettings.viewRadius
            : DEFAULTS.VIEW_RADIUS;

        const { tilesToLoad, activeTiles } = generateTilesToLoad(
          lon,
          lat,
          tileSize,
          viewRadius,
        );

        const weatherEnabled =
          currentSettings.temperature || currentSettings.humidity;
        console.log(
          "[ThreeScene] Loading",
          tilesToLoad.length,
          "tiles. Weather enabled:",
          weatherEnabled,
        );

        await Promise.all(
          tilesToLoad.map((t) => {
            const opts = { signal: controller.signal, useCache: true };

            const jobs = [
              buildingsLoader.loadChunk(
                t.minLon,
                t.minLat,
                t.maxLon,
                t.maxLat,
                { ...opts, simplify: 2 },
              ),
              roadsLoader.loadChunk(t.minLon, t.minLat, t.maxLon, t.maxLat, {
                ...opts,
                simplify: 0.5,
              }),
              waterLoader.loadChunk(
                t.minLon,
                t.minLat,
                t.maxLon,
                t.maxLat,
                opts,
              ),
            ];

            if (weatherEnabled) {
              console.log(
                "[ThreeScene] Adding weather job for tile:",
                t.minLon,
                t.minLat,
                t.maxLon,
                t.maxLat,
              );
              jobs.push(
                weatherLoader.loadChunk(
                  t.minLon,
                  t.minLat,
                  t.maxLon,
                  t.maxLat,
                  opts,
                ),
              );
            }

            return Promise.all(jobs);
          }),
        );

        cleanupUnusedChunks(buildingsLoader, "buildings", activeTiles);
        cleanupUnusedChunks(roadsLoader, "roads", activeTiles);
        cleanupUnusedChunks(waterLoader, "water", activeTiles);

        if (weatherEnabled) {
          cleanupUnusedChunks(weatherLoader, "weather", activeTiles);
        }
      } finally {
        isLoadingRef.current = false;
      }
    };

    const onControlsChange = () => {
      clearTimeout(updateTimeoutRef.current);
      updateTimeoutRef.current = setTimeout(
        updateChunks,
        DEFAULTS.UPDATE_DEBOUNCE,
      );
    };

    controls.addEventListener("change", onControlsChange);
    updateChunks();

    const loop = () => {
      lighting.updateDirectionalLight(camera.position);
      updateRoadVisibility(roadsLoader, camera, ROAD_VISIBILITY);

      ground.followCamera(camera);

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(loop);
    };

    loop();

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);
    container.appendChild(renderer.domElement);

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(updateTimeoutRef.current);
      controls.removeEventListener("change", onControlsChange);
      window.removeEventListener("resize", onResize);
      cleanupRaycast();
      controllerRef.current?.abort();

      weatherLabelManagerRef.current?.clear();
      loadersRef.current.forEach((l) => l.clearAll?.());
      lighting.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    lightingRef.current?.setNightMode(settings.nightMode === true);
    weatherLabelManagerRef.current?.setNightMode(settings.nightMode === true);

    const palette = settings.nightMode
      ? COLOR_PALETTES.dark
      : COLOR_PALETTES.light;

    groundRef.current?.setColor(palette.ground);

    if (sceneRef.current) {
      sceneRef.current.background = new THREE.Color(palette.background);
    }

    loadersRef.current
      .get("buildings")
      ?.setNightMode?.(settings.nightMode === true);
    loadersRef.current
      .get("roads")
      ?.setNightMode?.(settings.nightMode === true);
    loadersRef.current
      .get("water")
      ?.setNightMode?.(settings.nightMode === true);
  }, [settings.nightMode]);

  useEffect(() => {
    const buildings = loadersRef.current.get("buildings");
    if (buildings?.meshGroups) {
      setLayerVisibility(buildings.meshGroups, settings.buildings !== false);
    }
  }, [settings.buildings]);

  useEffect(() => {
    const manager = weatherLabelManagerRef.current;
    const weatherLoader = loadersRef.current.get("weather");
    const controls = controlsRef.current;

    if (!manager || !weatherLoader) return;

    const enabledTemperature = settings.temperature;
    const enabledHumidity = settings.humidity;

    if (!enabledTemperature && !enabledHumidity) {
      weatherLoader.clearAll();
      manager.clear();
      return;
    }

    if (enabledTemperature) {
      weatherLoader.setMode("temperature");
    } else {
      manager.clear("temperature");
    }

    if (enabledHumidity) {
      weatherLoader.setMode("humidity");
    } else {
      manager.clear("humidity");
    }

    controls?.dispatchEvent({ type: "change" });
  }, [settings.temperature, settings.humidity]);

  return (
    <div className="w-full h-full relative">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
