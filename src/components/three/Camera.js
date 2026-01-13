import * as THREE from "three";

export function createCamera(width, height) {
  const camera = new THREE.PerspectiveCamera(
    0.1,
    width / height,
    120,
    100000000
  );
  camera.position.set(0, 10, 10);
  camera.lookAt(0, 0, 0);
  return camera;
}
