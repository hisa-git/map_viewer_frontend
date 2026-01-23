import * as THREE from "three";

export function setVisibleRecursive(object, visible) {
  if (!object) return;

  object.visible = visible;

  if (object.children && object.children.length > 0) {
    object.children.forEach((child) => setVisibleRecursive(child, visible));
  }
}

export function setLayerVisibility(meshGroups, visible) {
  if (!meshGroups) return;

  for (const group of meshGroups.values()) {
    setVisibleRecursive(group, visible);
  }
}

export function cleanupUnusedChunks(loader, layerName, activeTiles) {
  if (!loader?.meshGroups) return;

  for (const key of loader.meshGroups.keys()) {
    const re = new RegExp(`^${layerName}_(-?\\d+)_(-?\\d+)$`);
    const match = key.match(re);

    if (match && !activeTiles.has(`${match[1]}_${match[2]}`)) {
      loader.removeChunk?.(key);
    }
  }
}

export function updateRoadVisibility(roadsLoader, camera, roadConfig) {
  if (!roadsLoader?.meshGroups) return;

  for (const group of roadsLoader.meshGroups.values()) {
    group.traverse((obj) => {
      if (!obj.isLine) return;

      const roadType = obj.userData.roadType || "unknown";
      const dist = camera.position.distanceTo(obj.position);

      if (roadConfig.MAJOR.types.includes(roadType)) {
        const k = THREE.MathUtils.clamp(2000 / dist, 0.4, 2.5);
        obj.material.color.setScalar(0.4 + k * 0.6);
        obj.scale.set(k, k, k);
        obj.visible = true;
      } else if (roadConfig.MINOR.types.includes(roadType)) {
        obj.visible = dist < roadConfig.MINOR.distance;
        if (obj.visible) {
          const k = THREE.MathUtils.clamp(900 / dist, 0.2, 1.0);
          obj.material.color.setScalar(0.25 + k * 0.3);
          obj.scale.set(k, k, k);
        }
      } else {
        const k = THREE.MathUtils.clamp(1200 / dist, 0.3, 1.3);
        obj.material.color.setScalar(0.3 + k * 0.4);
        obj.scale.set(k, k, k);
        obj.visible = true;
      }
    });
  }
}

export function generateTilesToLoad(
  centerLon,
  centerLat,
  tileSize,
  viewRadius,
) {
  const centerTileX = Math.floor(centerLon / tileSize);
  const centerTileY = Math.floor(centerLat / tileSize);

  const tilesToLoad = [];
  const activeTiles = new Set();

  for (let dx = -viewRadius; dx <= viewRadius; dx++) {
    for (let dy = -viewRadius; dy <= viewRadius; dy++) {
      const tileX = centerTileX + dx;
      const tileY = centerTileY + dy;

      const minLon = tileX * tileSize;
      const minLat = tileY * tileSize;
      const maxLon = (tileX + 1) * tileSize;
      const maxLat = (tileY + 1) * tileSize;

      const tileKey = `${tileX}_${tileY}`;
      activeTiles.add(tileKey);

      tilesToLoad.push({ minLon, minLat, maxLon, maxLat, key: tileKey });
    }
  }

  return { tilesToLoad, activeTiles };
}
