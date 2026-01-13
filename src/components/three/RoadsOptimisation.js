export function applyRoadWidth(mesh, widthFactor) {
  const geom = mesh.geometry;
  const pos = geom.attributes.position;

  if (!geom.userData.originalPositions) {
    geom.userData.originalPositions = pos.array.slice();
  }

  const orig = geom.userData.originalPositions;

  for (let i = 0; i < pos.array.length; i += 3) {
    const ox = orig[i];
    const oz = orig[i + 2];

    pos.array[i] = ox * widthFactor;
    pos.array[i + 2] = oz * widthFactor;
  }

  pos.needsUpdate = true;
}

export function updateRoadWidth(mesh, multiplier) {
  const geom = mesh.geometry;
  const pos = geom.attributes.position;
  const count = pos.count;

  for (let i = 0; i < count; i++) {
    const ix = i * 3 + 0;
    const iz = i * 3 + 2;

    pos.array[ix] *= multiplier;
    pos.array[iz] *= multiplier;
  }

  pos.needsUpdate = true;
  geom.computeVertexNormals();
}
export function ensureOriginalPositions(mesh) {
  const geom = mesh.geometry;
  if (!geom.userData.originalPositions) {
    geom.userData.originalPositions = geom.attributes.position.array.slice();
  }
}
