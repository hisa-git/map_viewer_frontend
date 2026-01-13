import * as THREE from "three";

export function setupRaycast(dom, camera, scene, controls, container) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onMouseDown(event) {
    if (event.button !== 2) return;

    mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(scene.children, true);

    if (hits.length > 0) controls.target.copy(hits[0].point);
  }

  dom.addEventListener("mousedown", onMouseDown);

  return () => {
    dom.removeEventListener("mousedown", onMouseDown);
  };
}
