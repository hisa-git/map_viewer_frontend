import * as THREE from "three";

export function createCamera(width: number, height: number) {
  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 150000);
  camera.lookAt(0, 0, 0);
  return camera;
}
