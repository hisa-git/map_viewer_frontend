import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

export function createControls(camera: THREE.PerspectiveCamera, domElement: HTMLCanvasElement) {
  const controls = new OrbitControls(camera, domElement);

  controls.enablePan = true;
  controls.enableZoom = true;
  controls.enableRotate = true;

  controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE,
  };

  controls.panSpeed = 1;
  controls.rotateSpeed = 0.2;
  controls.zoomSpeed = 1.5;

  controls.minPolarAngle = 0.1;
  controls.maxPolarAngle = Math.PI / 2;

  controls.addEventListener("wheel", (event: any) => {
    const delta = event.deltaY * 0.01;
    camera.position.addScaledVector(
      camera.getWorldDirection(new THREE.Vector3()),
      delta
    );
    event.preventDefault();
  });

  return controls;
}
