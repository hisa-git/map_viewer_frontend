import { DEFAULTS } from "../constants/defaults";
import * as THREE from "three";

export function _lineToMesh(coords = [], props = {}) {
  if (!Array.isArray(coords) || coords.length < 2) return null;

  const y = DEFAULTS.roadY;
  const pts = coords.map(([lon, lat]) => {
    const [x, z] = this.toLocal(lon, lat);
    return new THREE.Vector3(x, y, z);
  });

  const width = this._getRoadWidth(props);
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let i = 0; i < pts.length - 1; i++) {
    const p1 = pts[i],
      p2 = pts[i + 1];
    const dir = new THREE.Vector3().subVectors(p2, p1);
    const len = dir.length();
    if (len === 0) continue;
    dir.normalize();
    const perp = new THREE.Vector3(-dir.z, 0, dir.x).multiplyScalar(width / 2);

    const v1 = p1.clone().add(perp);
    const v2 = p1.clone().sub(perp);
    const v3 = p2.clone().add(perp);
    const v4 = p2.clone().sub(perp);
    const baseIdx = i * 4;

    positions.push(
      v1.x,
      v1.y,
      v1.z,
      v2.x,
      v2.y,
      v2.z,
      v3.x,
      v3.y,
      v3.z,
      v4.x,
      v4.y,
      v4.z
    );

    const u = i / (pts.length - 1);
    const du = 1 / (pts.length - 1);
    uvs.push(u, 0, u, 1, u + du, 0, u + du, 1);

    indices.push(
      baseIdx,
      baseIdx + 1,
      baseIdx + 2,
      baseIdx + 1,
      baseIdx + 3,
      baseIdx + 2
    );
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    color: this._getRoadColor(props),
    roughness: 1.0,
    metalness: 0.0,
    polygonOffset: true,
    polygonOffsetFactor: -3,
    polygonOffsetUnits: -3,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI;
  return mesh;
}

export function ensureClosed(ring = []) {
  if (!Array.isArray(ring) || ring.length === 0) return ring;
  const first = ring[0];
  const last = ring[ring.length - 1];
  if (first[0] === last[0] && first[1] === last[1]) return ring;
  return [...ring, first];
}

export function coordsToShape(polygonCoords = []) {
  if (!Array.isArray(polygonCoords) || polygonCoords.length === 0) return null;

  const outer = ensureClosed.call(this, polygonCoords[0]);
  if (!outer || outer.length < 3) return null;

  const shape = new THREE.Shape();
  for (let i = 0; i < outer.length; i++) {
    const [lon, lat] = outer[i];
    const [x, z] = this.toLocal(lon, lat);
    if (i === 0) shape.moveTo(x, z);
    else shape.lineTo(x, z);
  }

  for (let i = 1; i < polygonCoords.length; i++) {
    const hole = ensureClosed.call(this, polygonCoords[i]);
    if (!hole || hole.length < 3) continue;
    const pts = hole.map(([lon, lat]) => {
      const [x, z] = this.toLocal(lon, lat);
      return new THREE.Vector2(x, z);
    });
    shape.holes.push(new THREE.Path(pts));
  }

  return shape;
}
