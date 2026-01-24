import * as THREE from "three";
import { WEATHER_CONFIG, COLOR_PALETTES } from "../../../constants/constants";

export function createWeatherLabelManager(scene) {
  const labels = {
    temperature: new Map(),
    humidity: new Map(),
  };
  let nightMode = false;

  const box = new THREE.Box3();
  const center = new THREE.Vector3();

  function disposeLabel(sprite) {
    if (!sprite) return;
    if (sprite.material?.map) sprite.material.map.dispose();
    if (sprite.material) sprite.material.dispose();
    scene.remove(sprite);
  }

  function clear(mode = null) {
    if (mode) {
      labels[mode].forEach(disposeLabel);
      labels[mode].clear();
    } else {
      Object.values(labels).forEach((map) => {
        map.forEach(disposeLabel);
        map.clear();
      });
    }
  }

  function setNightMode(value) {
    nightMode = value === true;
  }

  function createSprite(text) {
    const S = WEATHER_CONFIG.SPRITE;
    const canvasWidth = S.WIDTH * S.SCALE;
    const canvasHeight = S.HEIGHT * S.SCALE;

    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = nightMode
      ? COLOR_PALETTES.dark.labelText
      : COLOR_PALETTES.light.labelText;
    ctx.font = `bold ${S.FONT_SIZE * S.SCALE}px ${S.FONT_FAMILY}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = nightMode
      ? COLOR_PALETTES.dark.labelStroke
      : COLOR_PALETTES.light.labelStroke;
    ctx.lineWidth = S.LINE_WIDTH * S.SCALE;
    ctx.strokeText(text, canvasWidth / 2, canvasHeight / 2);
    ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;

    const material = new THREE.SpriteMaterial({
      map: texture,
      depthTest: false,
      depthWrite: false,
    });

    const sprite = new THREE.Sprite(material);
    sprite.renderOrder = 1000;
    return sprite;
  }

  function updateSprite(sprite, text) {
    const canvas = sprite.material.map.image;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const S = WEATHER_CONFIG.SPRITE;
    ctx.fillStyle = nightMode
      ? COLOR_PALETTES.dark.labelText
      : COLOR_PALETTES.light.labelText;
    ctx.font = `bold ${S.FONT_SIZE * S.SCALE}px ${S.FONT_FAMILY}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = nightMode
      ? COLOR_PALETTES.dark.labelStroke
      : COLOR_PALETTES.light.labelStroke;
    ctx.lineWidth = S.LINE_WIDTH * S.SCALE;
    ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    sprite.material.map.needsUpdate = true;
  }

  function getCenter(mesh) {
    box.setFromObject(mesh);
    box.getCenter(center);
    return center.clone();
  }

  function render(meshes, mode) {
    if (!mode || !Array.isArray(meshes)) return;

    const S = WEATHER_CONFIG.SPRITE;
    const activeUUIDs = new Set();

    for (const mesh of meshes) {
      const value =
        mode === "temperature"
          ? mesh.userData.temperature
          : mesh.userData.humidity;

      if (typeof value !== "number" || !isFinite(value)) continue;

      activeUUIDs.add(mesh.uuid);

      const unit = mode === "temperature" ? "°C" : "%";
      const text = `${value.toFixed(1)}${unit}`;

      let sprite = labels[mode].get(mesh.uuid);

      if (!sprite) {
        sprite = createSprite(text);
        labels[mode].set(mesh.uuid, sprite);
        scene.add(sprite);
      } else {
        updateSprite(sprite, text);
      }

      const pos = getCenter(mesh);
      sprite.position.set(pos.x, mesh.position.y + S.Y_OFFSET, pos.z);
      sprite.scale.set(
        S.SPRITE_SCALE.x * S.SCALE,
        S.SPRITE_SCALE.y * S.SCALE,
        S.SPRITE_SCALE.z,
      );
    }

    labels[mode].forEach((sprite, uuid) => {
      if (!activeUUIDs.has(uuid)) return;
      if (!meshes.find((m) => m.uuid === uuid)) {
        disposeLabel(sprite);
        labels[mode].delete(uuid);
      }
    });
  }

  return {
    render,
    clear,
    setNightMode,
  };
}
