import * as THREE from "three";

export class Ground {
  constructor({ size, color, yOffset }) {
    this.geometry = new THREE.PlaneGeometry(size, size, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      color,
      side: THREE.DoubleSide,
      depthWrite: false,
      depthTest: false,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.y = yOffset;
    this.mesh.renderOrder = -1;
  }

  addTo(scene) {
    scene.add(this.mesh);
  }

  followCamera(camera) {
    this.mesh.position.x = camera.position.x;
    this.mesh.position.z = camera.position.z;
  }

  setColor(color) {
    this.material.color.setHex(color);
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
