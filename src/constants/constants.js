export const PROJECTIONS = {
  WGS84: "EPSG:4326",
  WEB_MERCATOR: "EPSG:3857",
};

export const LIGHTING = {
  DAY: {
    skyColor: 0xcfd8e5,
    dirIntensity: 1.0,
    dirColor: 0xffffff,
    ambIntensity: 0.5,
    ambColor: 0xf0f0f0,
  },
  NIGHT: {
    skyColor: 0x10121b,
    dirIntensity: 0.2,
    dirColor: 0xaaaaee,
    ambIntensity: 0.15,
    ambColor: 0x555577,
  },
};

export const DEFAULTS = {
  TILE_SIZE: 0.05,
  VIEW_RADIUS: 5,
  CAMERA_FOV: 60,
  CAMERA_HEIGHT: 1200,
  CAMERA_DISTANCE: 1200,
  UPDATE_DEBOUNCE: 250,
  HIDE_BUILDINGS_HEIGHT: 15000,
};

export const ROAD_VISIBILITY = {
  MAJOR: { types: ["motorway", "trunk", "primary"], distance: Infinity },
  MINOR: { types: ["footway", "path", "service"], distance: 1000 },
  DEFAULT: { distance: Infinity },
};

export const WEATHER_CONFIG = {
  MIN_TEMP: -20,
  MAX_TEMP: 40,
  MIN_HUMIDITY: 0,
  MAX_HUMIDITY: 100,
  TILE_SIZE: 50,
  ELEVATION: 0.2,
  OPACITY: 0.5,
  STEP: 0.05,
  SPRITE: {
    SCALE: 8,
    WIDTH: 256,
    HEIGHT: 128,
    FONT_SIZE: 28,
    FONT_FAMILY: "monospace",
    LINE_WIDTH: 4,
    SPRITE_SCALE: { x: 180, y: 90, z: 1 },
    Y_OFFSET: 200,
  },
};

export const GROUND_CONFIG = {
  SIZE: 200000,
  COLOR: 0xe0e0e0,
  Y_OFFSET: -1,
};

export const COLOR_PALETTES = {
  light: {
    background: 0xe8ecf0,
    ground: 0xc4c8cc,
    buildings: 0xa8b0b8,
    roads: 0x909090,
    water: 0x6b9db0,
    labelText: "rgba(0,0,0,0.95)",
    labelStroke: "white",
  },
  dark: {
    background: 0x0a0c12,
    ground: 0x1a1d24,
    buildings: 0x2c3240,
    roads: 0x383e4c,
    water: 0x2a3d52,
    labelText: "rgba(255,255,255,0.95)",
    labelStroke: "black",
  },
};

export const LAYER_OFFSETS = {
  ground: -5,
  water: 0,
  roads: 1,
  buildings: 5,
  weather: 10,
};
