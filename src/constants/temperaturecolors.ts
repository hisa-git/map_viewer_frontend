import * as THREE from "three";

type GradientPoint = {
  t: number;
  color: THREE.Color;
};

function isNoData(value: number | null | undefined): value is null | undefined {
  return value === null || value === undefined || Number.isNaN(value);
}

function normalize(value: number, min: number, max: number) {
  return THREE.MathUtils.clamp((value - min) / (max - min), 0, 1);
}

function getGradientColor(t: number, gradient: GradientPoint[]) {
  for (let i = 0; i < gradient.length - 1; i++) {
    const a = gradient[i];
    const b = gradient[i + 1];

    if (t >= a.t && t <= b.t) {
      const localT = (t - a.t) / (b.t - a.t);
      return a.color.clone().lerp(b.color, localT);
    }
  }

  return gradient.at(-1)!.color.clone();
}

const temperatureGradient: GradientPoint[] = [
  { t: 0.0, color: new THREE.Color("#1b2c7a") },
  { t: 0.15, color: new THREE.Color("#2458b3") },
  { t: 0.3, color: new THREE.Color("#2fa4d9") },
  { t: 0.45, color: new THREE.Color("#6bd6a8") },
  { t: 0.6, color: new THREE.Color("#f2e85c") },
  { t: 0.75, color: new THREE.Color("#f5a142") },
  { t: 0.9, color: new THREE.Color("#e4572e") },
  { t: 1.0, color: new THREE.Color("#b31217") },
];

export function tempToColor(
  temp: number | undefined | null,
  minTemp = -30,
  maxTemp = 45,
): THREE.Color | null {
  if (isNoData(temp)) return null;

  const t = normalize(temp, minTemp, maxTemp);
  return getGradientColor(t, temperatureGradient);
}

const humidityGradient: GradientPoint[] = [
  { t: 0.0, color: new THREE.Color("#ffefcc") },
  { t: 0.5, color: new THREE.Color("#66b3ff") },
  { t: 1.0, color: new THREE.Color("#0033aa") },
];

export function humidityToColor(
  humidity: number | undefined | null,
  minHumidity = 0,
  maxHumidity = 100,
): THREE.Color | null {
  if (isNoData(humidity)) return null;

  const t = normalize(humidity, minHumidity, maxHumidity);
  return getGradientColor(t, humidityGradient);
}

const pressureGradientLow: GradientPoint[] = [
  { t: 0.0, color: new THREE.Color("#3a0ca3") },
  { t: 1.0, color: new THREE.Color("#4cc9f0") },
];

const pressureGradientHigh: GradientPoint[] = [
  { t: 0.0, color: new THREE.Color("#f1faee") },
  { t: 1.0, color: new THREE.Color("#e63946") },
];

export function pressureToColor(
  pressure: number | undefined | null,
  minPressure = 980,
  maxPressure = 1040,
  normalPressure = 1013,
): THREE.Color | null {
  if (isNoData(pressure)) return null;

  const clamped = THREE.MathUtils.clamp(pressure, minPressure, maxPressure);

  if (clamped < normalPressure) {
    const t = normalize(clamped, minPressure, normalPressure);
    return getGradientColor(t, pressureGradientLow);
  } else {
    const t = normalize(clamped, normalPressure, maxPressure);
    return getGradientColor(t, pressureGradientHigh);
  }
}
