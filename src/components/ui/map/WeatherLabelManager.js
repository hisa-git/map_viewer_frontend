import * as THREE from "three";
import { WEATHER_CONFIG, COLOR_PALETTES } from "../../../constants/constants";

export function createWeatherLabelManager(scene) {
  const labelsByMode = new Map();
  let nightMode = false;

  const box = new THREE.Box3();
  const center = new THREE.Vector3();

  function disposeSprite(sprite) {
    if (!sprite) return;
    if (sprite.material?.map) sprite.material.map.dispose();
    if (sprite.material) sprite.material.dispose();
    scene.remove(sprite);
  }

  function clear(modeId = null) {
    if (modeId) {
      const map = labelsByMode.get(modeId);
      if (!map) return;
      map.forEach(disposeSprite);
      map.clear();
      labelsByMode.delete(modeId);
      return;
    }

    labelsByMode.forEach((map) => {
      map.forEach(disposeSprite);
      map.clear();
    });
    labelsByMode.clear();
  }

  function setNightMode(value) {
    nightMode = value === true;
  }

  function createSprite(text) {
    const S = WEATHER_CONFIG.SPRITE;

    const canvas = document.createElement("canvas");
    canvas.width = S.WIDTH * S.SCALE;
    canvas.height = S.HEIGHT * S.SCALE;

    const ctx = canvas.getContext("2d");

    drawText(ctx, canvas, text);

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
    drawText(ctx, canvas, text);

    sprite.material.map.needsUpdate = true;
  }

  function drawText(ctx, canvas, text) {
    const S = WEATHER_CONFIG.SPRITE;

    ctx.fillStyle = nightMode
      ? COLOR_PALETTES.dark.labelText
      : COLOR_PALETTES.light.labelText;

    ctx.strokeStyle = nightMode
      ? COLOR_PALETTES.dark.labelStroke
      : COLOR_PALETTES.light.labelStroke;

    ctx.font = `bold ${S.FONT_SIZE * S.SCALE}px ${S.FONT_FAMILY}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = S.LINE_WIDTH * S.SCALE;

    const x = canvas.width / 2;
    const y = canvas.height / 2;

    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
  }

  function getCenter(mesh) {
    box.setFromObject(mesh);
    box.getCenter(center);
    return center.clone();
  }

  /**
   * @param {Object} params
   * @param {string} params.id
   * @param {THREE.Mesh[]} params.meshes
   * @param {(mesh: THREE.Mesh) => number|null|undefined} params.getValue
   * @param {(value: number|null|undefined) => string} params.format
   */
  
  function render({ id, meshes, getValue, format }) {
    if (!id || !Array.isArray(meshes)) return;

    let labelMap = labelsByMode.get(id);
    if (!labelMap) {
      labelMap = new Map();
      labelsByMode.set(id, labelMap);
    }

    const S = WEATHER_CONFIG.SPRITE;

    for (const mesh of meshes) {
      const value = getValue(mesh);
      const text = format(value);

      let sprite = labelMap.get(mesh.uuid);

      if (!sprite) {
        sprite = createSprite(text);
        labelMap.set(mesh.uuid, sprite);
        scene.add(sprite);
      } else {
        updateSprite(sprite, text);
      }

      const pos = getCenter(mesh);
      sprite.position.set(pos.x, pos.y + S.Y_OFFSET, pos.z);

      sprite.scale.set(
        S.SPRITE_SCALE.x * S.SCALE,
        S.SPRITE_SCALE.y * S.SCALE,
        S.SPRITE_SCALE.z,
      );
    }
  }

  return {
    render,
    clear,
    setNightMode,
  };
}
