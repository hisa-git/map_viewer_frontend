"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import proj4 from "proj4";

import { ChunkLoader } from "../three/ChunkLoader";
import { createRenderer } from "../three/Renderer";
import { createCamera } from "../three/Camera";
import { createScene } from "../three/Scene";
import { createControls } from "../three/Controls";
import { setupRaycast } from "../three/Raycast";
import { createWeatherLoader } from "../three/WeatherRenderer";
import { LightingManager } from "./LightingManager";

import {
  setLayerVisibility,
  cleanupUnusedChunks,
  createGround,
  updateRoadVisibility,
  generateTilesToLoad,
} from "./sceneUtils";

import {
  PROJECTIONS,
  DEFAULTS,
  ROAD_VISIBILITY,
  WEATHER_CONFIG,
  GROUND_CONFIG,
} from "./constants";

const COLOR_PALETTES = {
  light: {
    background: 0xe6eef5,
    ground: 0xd4dce3,
    buildings: 0xc8d0d8,
    roads: 0xa0a8b0,
    water: 0x88c0d0,
  },
  dark: {
    background: 0x0a0e1a,
    ground: 0x1a1e2a,
    buildings: 0x2a2e3a,
    roads: 0x3a3e4a,
    water: 0x4a5e6a,
  },
};

const LAYER_OFFSETS = {
  ground: 0,
  water: 0.1,
  roads: 0.2,
  buildings: 0.3,
};

export default function ThreeScene({ settings = {} }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const lightingRef = useRef(null);
  const groundRef = useRef(null);
  const loadersRef = useRef(new Map());
  const frameRef = useRef(null);
  const controllerRef = useRef(null);
  const updateTimeoutRef = useRef(null);
  const isLoadingRef = useRef(false);
  const weatherLabelsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const envBase = process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000";
    const startLon = Number(process.env.NEXT_PUBLIC_STARTLON || 0);
    const startLat = Number(process.env.NEXT_PUBLIC_STARTLAT || 0);
    const [centerX, centerZ] = proj4(
      PROJECTIONS.WGS84,
      PROJECTIONS.WEB_MERCATOR,
      [startLon, startLat]
    );

    const palette = settings.nightMode
      ? COLOR_PALETTES.dark
      : COLOR_PALETTES.light;

    const renderer = createRenderer(container);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    rendererRef.current = renderer;

    const camera = createCamera(container.clientWidth, container.clientHeight);
    camera.position.set(0, 400, 600);
    cameraRef.current = camera;

    const controls = createControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.minPolarAngle = Math.PI / 6;
    controls.maxPolarAngle = Math.PI / 2.2;
    controls.update();
    controlsRef.current = controls;

    const { scene } = createScene();
    scene.background = new THREE.Color(palette.background);
    sceneRef.current = scene;

    const lighting = new LightingManager(scene);
    lighting.setNightMode(settings.nightMode === true);
    lightingRef.current = lighting;

    const ground = createGround(
      GROUND_CONFIG.SIZE,
      palette.ground,
      LAYER_OFFSETS.ground
    );
    scene.add(ground);
    groundRef.current = ground;

    const cleanupRaycast = setupRaycast(
      renderer.domElement,
      camera,
      scene,
      controls,
      container
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
      ...WEATHER_CONFIG,
      onDataLoaded: (points) => {
        weatherLabelsRef.current.forEach((label) => scene.remove(label));
        weatherLabelsRef.current = [];

        if (!settings.temperature && !settings.humidity) return;

        points.forEach((point) => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 128;
          canvas.height = 64;

          ctx.fillStyle = settings.nightMode
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(0, 0, 0, 0.9)";
          ctx.font = "bold 16px monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          const value = settings.temperature
            ? point.temperature
            : point.humidity;
          const unit = settings.temperature ? "°C" : "%";
          ctx.fillText(`${value.toFixed(1)}${unit}`, 64, 32);

          const texture = new THREE.CanvasTexture(canvas);
          const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
          const sprite = new THREE.Sprite(spriteMaterial);
          sprite.position.set(point.x, point.y + 20, point.z);
          sprite.scale.set(40, 20, 1);
          scene.add(sprite);
          weatherLabelsRef.current.push(sprite);
        });
      },
    });

    loadersRef.current.set("buildings", buildingsLoader);
    loadersRef.current.set("roads", roadsLoader);
    loadersRef.current.set("water", waterLoader);
    loadersRef.current.set("weather", weatherLoader);

    settings.onLoadersReady?.({
      buildings: buildingsLoader,
      roads: roadsLoader,
      water: waterLoader,
      weather: weatherLoader,
    });

    const updateChunks = async () => {
      if (isLoadingRef.current) return;
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

        const tileSize = settings.tileSize || DEFAULTS.TILE_SIZE;
        const viewRadius =
          typeof settings.viewRadius === "number"
            ? settings.viewRadius
            : DEFAULTS.VIEW_RADIUS;
        const { tilesToLoad, activeTiles } = generateTilesToLoad(
          lon,
          lat,
          tileSize,
          viewRadius
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
                { ...opts, simplify: 2 }
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
                opts
              ),
            ];

            if (settings.temperature || settings.humidity) {
              jobs.push(
                weatherLoader.loadChunk(
                  t.minLon,
                  t.minLat,
                  t.maxLon,
                  t.maxLat,
                  opts
                )
              );
            }

            return Promise.all(jobs);
          })
        );

        cleanupUnusedChunks(buildingsLoader, "buildings", activeTiles);
        cleanupUnusedChunks(roadsLoader, "roads", activeTiles);
        cleanupUnusedChunks(waterLoader, "water", activeTiles);

        if (settings.temperature || settings.humidity) {
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
        DEFAULTS.UPDATE_DEBOUNCE
      );
    };

    controls.addEventListener("change", onControlsChange);
    updateChunks();

    const loop = () => {
      lighting.updateDirectionalLight(camera.position);
      updateRoadVisibility(roadsLoader, camera, ROAD_VISIBILITY);

      ground.position.x = camera.position.x;
      ground.position.z = camera.position.z;

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

      weatherLabelsRef.current.forEach((label) => scene.remove(label));
      weatherLabelsRef.current = [];

      loadersRef.current.forEach((l) => l.clearAll?.());
      lighting.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const lighting = lightingRef.current;
    const scene = sceneRef.current;
    const ground = groundRef.current;
    const buildingsLoader = loadersRef.current.get("buildings");
    const roadsLoader = loadersRef.current.get("roads");
    const waterLoader = loadersRef.current.get("water");

    const palette = settings.nightMode
      ? COLOR_PALETTES.dark
      : COLOR_PALETTES.light;

    if (lighting) {
      lighting.setNightMode(settings.nightMode === true);
    }

    if (scene) {
      scene.background = new THREE.Color(palette.background);
    }

    if (ground?.material) {
      ground.material.color.setHex(palette.ground);
    }

    if (buildingsLoader?.updateColor) {
      buildingsLoader.updateColor(palette.buildings);
    }

    if (roadsLoader?.updateColor) {
      roadsLoader.updateColor(palette.roads);
    }

    if (waterLoader?.updateColor) {
      waterLoader.updateColor(palette.water);
    }
  }, [settings.nightMode]);

  useEffect(() => {
    const buildingsLoader = loadersRef.current.get("buildings");
    if (buildingsLoader?.meshGroups) {
      const visible = settings.buildings !== false;
      setLayerVisibility(buildingsLoader.meshGroups, visible);
    }
  }, [settings.buildings]);

  useEffect(() => {
    const weatherLoader = loadersRef.current.get("weather");
    const scene = sceneRef.current;
    if (!weatherLoader || !scene) return;

    const enabled = settings.temperature || settings.humidity;

    if (!enabled) {
      weatherLoader.clearAll();
      weatherLabelsRef.current.forEach((label) => scene.remove(label));
      weatherLabelsRef.current = [];
    } else {
      weatherLoader.setMode(settings.temperature ? "temperature" : "humidity");
    }
  }, [settings.temperature, settings.humidity]);

  return (
    <div className="w-full h-full relative">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
