// constants.js
export const PROJECTIONS = {
  WGS84: "EPSG:4326",
  WEB_MERCATOR: "EPSG:3857",
};

export const LIGHTING = {
  DAY: {
    skyColor: 0xbfd9ff,
    dirIntensity: 1.2,
    dirColor: 0xffffff,
    ambIntensity: 0.35,
    ambColor: 0xffffff,
  },
  NIGHT: {
    skyColor: 0x0a0a1a,
    dirIntensity: 0.15,
    dirColor: 0x9999bb,
    ambIntensity: 0.08,
    ambColor: 0x4444aa,
  },
};

export const DEFAULTS = {
  TILE_SIZE: 0.05,
  VIEW_RADIUS: 5,
  CAMERA_FOV: 60,
  CAMERA_HEIGHT: 800,
  CAMERA_DISTANCE: 800,
  UPDATE_DEBOUNCE: 250,
  HIDE_BUILDINGS_HEIGHT: 15000,
};

export const ROAD_VISIBILITY = {
  MAJOR: { types: ["motorway", "trunk", "primary"], distance: Infinity },
  MINOR: { types: ["footway", "path", "service"], distance: 800 },
  DEFAULT: { distance: Infinity },
};

export const WEATHER_CONFIG = {
  MIN_TEMP: -20,
  MAX_TEMP: 40,
  MIN_HUMIDITY: 0,
  MAX_HUMIDITY: 100,
  TILE_SIZE: 50,
  ELEVATION: 0.2,
  OPACITY: 0.7,
  STEP: 0.05,
};

export const GROUND_CONFIG = {
  SIZE: 500000,
  COLOR: 0xf0f0f0,
  Y_OFFSET: -0.5,
};
