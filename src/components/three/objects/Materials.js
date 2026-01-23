import * as THREE from "three";

export const buildingMaterial = new THREE.MeshStandardMaterial({
  color: 0xcccccc,
  roughness: 0.8,
  metalness: 0.2,
});

export const riverMaterial = new THREE.MeshStandardMaterial({
  color: 0xaaddff,
  roughness: 0.6,
  metalness: 0.1,
});

export const defaultRoadMaterial = new THREE.MeshStandardMaterial({
  color: 0xdddddd,
  roughness: 0.9,
  metalness: 0.0,
});
