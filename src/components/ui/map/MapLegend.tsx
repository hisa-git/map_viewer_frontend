"use client";

import { LegendItem, LegendMode } from "./types";
import { tempToColor, humidityToColor } from "../../../constants/temperaturecolors";
import { cn } from "@/components/three/scene/utils";

interface MapLegendProps {
  mode: LegendMode;
  className?: string;
}

function buildTemperatureLegend(): LegendItem[] {
  const points = [-30, -10, 0, 10, 20, 30, 40];
  return points.map((t) => ({
    value: t,
    label: `${t}°C`,
    color: `#${tempToColor(t).getHexString()}`,
  }));
}

function buildHumidityLegend(): LegendItem[] {
  const points = [0, 20, 40, 60, 80, 100];
  return points.map((h) => ({
    value: h,
    label: `${h}%`,
    color: `#${humidityToColor(h).getHexString()}`,
  }));
}

export function MapLegend({ mode, className }: MapLegendProps) {
  const items =
    mode === "temperature" ? buildTemperatureLegend() : buildHumidityLegend();

  return (
    <div
      className={cn(
        "w-full bottom-4 left-4 z-20 rounded-lg bg-neutral-900/90 backdrop-blur p-3",
        className
      )}
    >
      <div className="mb-2 text-xs font-medium text-neutral-300">
        {mode === "temperature" ? "Температура" : "Вологість"}
      </div>

      <div className="flex items-center gap-1">
        {items.map((item) => (
          <div key={item.value} className="flex flex-col items-center">
            <div
              className="w-6 h-4 rounded-sm border border-black/30"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[10px] text-neutral-400 mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
