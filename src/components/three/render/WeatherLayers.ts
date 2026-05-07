import {
  tempToColor,
  humidityToColor,
  pressureToColor,
} from "../../../constants/temperaturecolors";

import { LAYER_OFFSETS } from "@/constants/constants";

type WeatherPoint = {
  temperature?: number;
  humidity?: number;
  pressure?: number;
};

type WeatherLayerSpec<TKey extends keyof WeatherPoint> = {
  id: string;
  dataKey: TKey;
  defaultElevation: number;
  defaultMin: number;
  defaultMax: number;

  color: (value: number, min: number, max: number) => string;
  format: (value: number | undefined) => string;
};

type WeatherLayerOptions = {
  elevation?: number;
  min?: number;
  max?: number;
};

function createWeatherLayer<TKey extends keyof WeatherPoint>(
  spec: WeatherLayerSpec<TKey>,
  opts: WeatherLayerOptions = {}
) {
  return {
    id: spec.id,
    elevation: opts.elevation ?? spec.defaultElevation,

    getValue: (point: WeatherPoint) => point[spec.dataKey],

    toColor: (value: number | undefined) =>
      spec.color(
        value ?? spec.defaultMin,
        opts.min ?? spec.defaultMin,
        opts.max ?? spec.defaultMax
      ),

    formatLabel: spec.format,
  };
}

export function createTemperatureLayer(opts: WeatherLayerOptions = {}) {
  return createWeatherLayer(
    {
      id: "temperature",
      dataKey: "temperature",
      defaultElevation: LAYER_OFFSETS.weather,
      defaultMin: -30,
      defaultMax: 40,
      color: tempToColor,
      format: (v) =>
        typeof v === "number" && isFinite(v)
          ? `${v.toFixed(1)}°C`
          : "–°C",
    },
    opts
  );
}

export function createHumidityLayer(opts: WeatherLayerOptions = {}) {
  return createWeatherLayer(
    {
      id: "humidity",
      dataKey: "humidity",
      defaultElevation: LAYER_OFFSETS.weather + 50,
      defaultMin: 0,
      defaultMax: 100,
      color: humidityToColor,
      format: (v) =>
        v == null || isNaN(v) ? "-%" : `${Math.round(v)}%`,
    },
    opts
  );
}

export function createPressureLayer(opts: WeatherLayerOptions = {}) {
  return createWeatherLayer(
    {
      id: "pressure",
      dataKey: "pressure",
      defaultElevation: LAYER_OFFSETS.weather + 50,
      defaultMin: 950,
      defaultMax: 1050,
      color: pressureToColor,
      format: (v) =>
        v == null || isNaN(v) ? "– hPa" : `${Math.round(v)} hPa`,
    },
    opts
  );
}