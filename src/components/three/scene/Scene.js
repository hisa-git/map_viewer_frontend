import * as THREE from "three";

export function createScene({
  background,
  environment = null,
  debug = false,
} = {}) {
  const scene = new THREE.Scene();

  if (background !== undefined) {
    scene.background = new THREE.Color(background);
  }

  if (environment) {
    scene.environment = environment;
  }

  if (debug) {
    scene.add(new THREE.AxesHelper(200));
    scene.add(new THREE.GridHelper(1000, 20));
  }

  return scene;
}
