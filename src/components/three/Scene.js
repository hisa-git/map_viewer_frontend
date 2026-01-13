import * as THREE from "three";
import { buildingMaterial } from "./Materials";

export function createScene() {
  const scene = new THREE.Scene();

  const cube = new THREE.Mesh(new THREE.BoxGeometry(), buildingMaterial);
  scene.add(cube);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 2, 2);
  scene.add(light);

  return { scene, cube };
}
