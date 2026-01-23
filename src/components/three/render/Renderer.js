import * as THREE from "three";

export function createRenderer(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.sortObjects = true;
  container.appendChild(renderer.domElement);
  return renderer;
}
