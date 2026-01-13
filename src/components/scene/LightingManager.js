// LightingManager.js
import * as THREE from "three";
import { LIGHTING } from "./constants";

export class LightingManager {
  constructor(scene) {
    this.scene = scene;
    this.dirLight = null;
    this.ambLight = null;
    this.isNightMode = false;

    this.init();
  }

  init() {
    this.dirLight = new THREE.DirectionalLight(
      LIGHTING.DAY.dirColor,
      LIGHTING.DAY.dirIntensity
    );
    this.dirLight.position.set(1000, 2000, 1000);

    this.ambLight = new THREE.AmbientLight(
      LIGHTING.DAY.ambColor,
      LIGHTING.DAY.ambIntensity
    );

    this.scene.add(this.dirLight);
    this.scene.add(this.ambLight);
  }

  setNightMode(enabled) {
    if (this.isNightMode === enabled) return;
    this.isNightMode = enabled;

    const config = enabled ? LIGHTING.NIGHT : LIGHTING.DAY;

    this.scene.background = new THREE.Color(config.skyColor);
    this.dirLight.intensity = config.dirIntensity;
    this.dirLight.color.setHex(config.dirColor);
    this.ambLight.intensity = config.ambIntensity;
    this.ambLight.color.setHex(config.ambColor);
  }

  updateDirectionalLight(cameraPosition) {
    this.dirLight.position.set(cameraPosition.x, 2000, cameraPosition.z);
  }

  dispose() {
    if (this.dirLight) {
      this.scene.remove(this.dirLight);
      this.dirLight = null;
    }
    if (this.ambLight) {
      this.scene.remove(this.ambLight);
      this.ambLight = null;
    }
  }
}
