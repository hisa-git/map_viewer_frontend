import * as THREE from "three";
import { useEffect, useRef } from "react";

export function useTopCamera(containerRef, zoom = 1) {
  const cameraRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5 / zoom, 0);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [containerRef, zoom]);

  return cameraRef;
}
