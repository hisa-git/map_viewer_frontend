import * as THREE from "three";

export function createWeatherLabelManager(scene) {
  let labels = [];
  let mode = null;
  let nightMode = false;

  const clear = () => {
    labels.forEach((l) => scene.remove(l));
    labels = [];
  };

  const setMode = (newMode) => {
    mode = newMode;
  };

  const setNightMode = (value) => {
    nightMode = value;
  };

  const render = (meshes) => {
    clear();
    if (!mode || !meshes?.length) return;

    meshes.forEach((mesh) => {
      const { x, y, z } = mesh.position;
      const { temperature, humidity } = mesh.userData;

      const value = mode === "temperature" ? temperature : humidity;

      if (typeof value !== "number" || isNaN(value)) {
        console.warn(`[WeatherLabel] Invalid ${mode} value:`, value);
        return;
      }

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = 256;
      canvas.height = 128;

      ctx.fillStyle = nightMode ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.95)";
      ctx.font = "bold 28px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const unit = mode === "temperature" ? "°C" : "%";
      ctx.fillText(`${value.toFixed(1)}${unit}`, 128, 64);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;

      const material = new THREE.SpriteMaterial({
        map: texture,
        depthTest: false,
        depthWrite: false,
      });

      const sprite = new THREE.Sprite(material);
      sprite.position.set(x, y + 120, z);
      sprite.scale.set(180, 90, 1);

      scene.add(sprite);
      labels.push(sprite);
    });

    console.log(
      `[WeatherLabel] Rendered ${labels.length} labels in ${mode} mode`,
    );
  };

  return {
    render,
    clear,
    setMode,
    setNightMode,
  };
}
