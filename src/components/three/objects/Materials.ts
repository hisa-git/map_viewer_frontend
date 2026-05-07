import * as THREE from "three";

const MATERIAL_CONFIG = {
  building: {
    color: 0xcccccc,
    roughness: 0.8,
    metalness: 0.2,
  },
  river: {
    color: 0xaaddff,
    roughness: 0.6,
    metalness: 0.1,
  },
  road: {
    color: 0xdddddd,
    roughness: 0.9,
    metalness: 0.0,
  },
} as const;

export const materials = {
  building: new THREE.MeshStandardMaterial(MATERIAL_CONFIG.building),
  river: new THREE.MeshStandardMaterial(MATERIAL_CONFIG.river),
  road: new THREE.MeshStandardMaterial(MATERIAL_CONFIG.road),
};

export const buildingMaterial = materials.building;
export const riverMaterial = materials.river;
export const defaultRoadMaterial = materials.road;