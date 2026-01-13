import { useEffect, useState } from "react";
import * as THREE from "three";

export function useThreeRenderer(containerRef) {
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const r = new THREE.WebGLRenderer({ antialias: true });
    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;
    r.setSize(width, height);
    containerRef.current.appendChild(r.domElement);

    setRenderer(r);

    return () => {
      r.dispose();
      if (containerRef.current && containerRef.current.contains(r.domElement)) {
        containerRef.current.removeChild(r.domElement);
      }
    };
  }, [containerRef]);

  return renderer;
}
