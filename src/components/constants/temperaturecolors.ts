import * as THREE from "three";

const temperatureGradient = [
  { t: 0.0, color: new THREE.Color("#1b2c7a") }, // очень холодно (глубокий синий)
  { t: 0.15, color: new THREE.Color("#2458b3") },
  { t: 0.3, color: new THREE.Color("#2fa4d9") },
  { t: 0.45, color: new THREE.Color("#6bd6a8") },
  { t: 0.6, color: new THREE.Color("#f2e85c") },
  { t: 0.75, color: new THREE.Color("#f5a142") },
  { t: 0.9, color: new THREE.Color("#e4572e") },
  { t: 1.0, color: new THREE.Color("#b31217") }, // экстремальный жар
];

export function tempToColor(temp: number, minTemp = -30, maxTemp = 45) {
  const t = THREE.MathUtils.clamp((temp - minTemp) / (maxTemp - minTemp), 0, 1);

  for (let i = 0; i < temperatureGradient.length - 1; i++) {
    const a = temperatureGradient[i];
    const b = temperatureGradient[i + 1];

    if (t >= a.t && t <= b.t) {
      const localT = (t - a.t) / (b.t - a.t);
      return a.color.clone().lerp(b.color, localT);
    }
  }

  return temperatureGradient.at(-1)!.color.clone();
}

export function humidityToColor(humidity, minHumidity = 0, maxHumidity = 100) {
  const t = Math.max(
    0,
    Math.min(1, (humidity - minHumidity) / (maxHumidity - minHumidity))
  );
  const color = new THREE.Color();
  if (t < 0.33) {
    color.lerpColors(
      new THREE.Color(0xffeecc),
      new THREE.Color(0xaaddff),
      t / 0.33
    );
  } else if (t < 0.66) {
    color.lerpColors(
      new THREE.Color(0xaaddff),
      new THREE.Color(0x4488ff),
      (t - 0.33) / 0.33
    );
  } else {
    color.lerpColors(
      new THREE.Color(0x4488ff),
      new THREE.Color(0x0033aa),
      (t - 0.66) / 0.34
    );
  }
  return color;
}
