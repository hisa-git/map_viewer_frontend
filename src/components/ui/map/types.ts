export type LegendMode = "temperature" | "humidity" | "pressure";

export interface LegendItem {
  value: number;
  label: string;
  color: string;
}

export interface MapLegendProps {
  mode: LegendMode;
  className?: string;
}

export interface MapSettings {
  buildings: boolean;
  temperature: boolean;
  humidity: boolean;
  pressure: boolean;
  nightMode: boolean;
}

export interface ConsoleLog {
  id: number;
  timestamp: string;
  message: string;
}