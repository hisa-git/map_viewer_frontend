import proj4 from "proj4";

const WGS84 = "EPSG:4326";
const WEB_MERCATOR = "EPSG:3857";

export function lonLatToWebMercator(
  lon: number,
  lat: number
): [number, number] {
  const res = proj4(WGS84, WEB_MERCATOR, [lon, lat]);
  return [res[0], res[1]];
}

export function computeTileSizeFromStep(step, lat = 0) {
  const [x1, z1] = lonLatToWebMercator(0, lat);
  const [x2, z2] = lonLatToWebMercator(step, lat);
  const [x3, z3] = lonLatToWebMercator(0, lat + step);

  return {
    sizeX: Math.abs(x2 - x1),
    sizeZ: Math.abs(z3 - z1),
  };
}
