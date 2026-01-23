"use client";
/*
LEGACY
*/

import React, { useEffect, useState } from "react";

export function OverlayInfo({ camera, loader }) {
  const [info, setInfo] = useState({
    camX: 0,
    camY: 0,
    camZ: 0,
    visibleBuildings: 0,
  });

  useEffect(() => {
    let frame;
    const update = () => {
      setInfo({
        camX: camera.position.x.toFixed(2),
        camY: camera.position.y.toFixed(2),
        camZ: camera.position.z.toFixed(2),
        visibleBuildings: loader.meshGroups.size,
      });
      frame = requestAnimationFrame(update);
    };
    update();

    return () => cancelAnimationFrame(frame);
  }, [camera, loader]);

  return (
    <div
      style={{
        position: "absolute",
        left: 12,
        top: 12,
        background: "rgba(0,0,0,0.6)",
        color: "white",
        padding: "8px 12px",
        fontSize: 13,
        borderRadius: 6,
        maxWidth: 300,
      }}
    >
      <div>
        <b>Camera:</b> X: {info.camX}, Y: {info.camY}, Z: {info.camZ}
      </div>
      <div>{/*<b>Visible buildings:</b> {info.visibleBuildings}*/}</div>
    </div>
  );
}
