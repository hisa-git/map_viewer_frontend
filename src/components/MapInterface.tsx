"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ACCENT_COLORS } from "./constants/uicolors";
import { MapLegend } from "./interface/MapLegend";

import {
  Settings,
  Info,
  X,
  Terminal,
  Palette,
  RefreshCw,
  Download,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeScene from "./scene/ThreeScene";

interface MapSettings {
  buildings: boolean;
  temperature: boolean;
  humidity: boolean;
  nightMode: boolean;
}

interface ConsoleLog {
  id: number;
  timestamp: string;
  message: string;
}

function ConsolePanel({ logs }: { logs: ConsoleLog[] }) {
  return (
    <ScrollArea className="bg-black/40 border border-neutral-700 rounded-lg p-3 h-full">
      <div className="text-xs font-mono space-y-1">
        {logs.length === 0 ? (
          <div className="text-neutral-500 italic">Консоль порожня...</div>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="flex gap-2 text-emerald-400">
              <span className="text-neutral-600">{log.timestamp}</span>
              <span>{log.message}</span>
            </div>
          ))
        )}
      </div>
    </ScrollArea>
  );
}

export default function MapInterface() {
  const [settings, setSettings] = useState<MapSettings>({
    buildings: true,
    humidity: false,
    temperature: false,
    nightMode: false,
  });

  const [activeTab, setActiveTab] = useState("settings");
  const [showConsole, setShowConsole] = useState(false);
  const [accentColor, setAccentColor] = useState(ACCENT_COLORS[0]);
  const [logs, setLogs] = useState<ConsoleLog[]>([]);
  const [logCounter, setLogCounter] = useState(0);

  useEffect(() => {
    const original = console.log;
    console.log = (...args: any[]) => {
      const timestamp = new Date().toLocaleTimeString("uk-UA", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setLogs((prev) => [
        ...prev.slice(-99),
        {
          id: logCounter,
          timestamp,
          message: args.join(" "),
        },
      ]);
      setLogCounter((c) => c + 1);
      original(...args);
    };
    return () => {
      console.log = original;
    };
  }, [logCounter]);

  const updateSetting = <K extends keyof MapSettings>(
    key: K,
    value: MapSettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    console.log(`${key} змінено на ${value}`);
  };

  const resetSettings = () => {
    setSettings({
      buildings: true,
      humidity: false,
      temperature: false,
      nightMode: false,
    });
    console.log("Налаштування скинуто");
  };

  return (
    <div className="flex h-full bg-neutral-950 text-neutral-100">
      <aside className="w-80 border-r border-neutral-800 flex flex-col">
        <div
          className="px-4 py-4 border-b border-neutral-800 flex items-center gap-3"
          style={{ borderLeftColor: accentColor.value, borderLeftWidth: 3 }}
        >
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${accentColor.value}20` }}
          >
            <Settings
              className="w-5 h-5"
              style={{ color: accentColor.value }}
            />
          </div>
          <div>
            <h1 className="font-semibold text-base">Керування картою</h1>
            <p className="text-xs text-neutral-500">Конфігурація сцени</p>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 flex flex-col overflow-hidden"
        >
          <TabsList className="grid grid-cols-3 m-3 bg-neutral-900 p-1">
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-100 text-neutral-400"
            >
              <Settings className="w-4 h-4 mr-1" />
              Опції
            </TabsTrigger>
            <TabsTrigger
              value="theme"
              className="data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-100 text-neutral-400"
            >
              <Palette className="w-4 h-4 mr-1" />
              Тема
            </TabsTrigger>
            <TabsTrigger
              value="info"
              className="data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-100 text-neutral-400"
            >
              <Info className="w-4 h-4 mr-1" />
              Інфо
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto">
            <TabsContent value="settings" className="px-4 pb-4 space-y-6 mt-0">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                  Шари карти
                </h3>
                {(
                  [
                    ["buildings", "Будівлі", "3D моделі об'єктів"],
                    [
                      "temperature",
                      "Температура",
                      "Метеорологічні дані OpenMeteoAPI",
                    ],
                    [
                      "humidity",
                      "Вологість",
                      "Метеорологічні дані OpenMeteoAPI",
                    ],

                    ["nightMode", "Нічний режим", "Темна схема"],
                  ] as const
                ).map(([key, label, desc]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-3 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/30"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-neutral-200">
                        {label}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5">{desc}</p>
                    </div>
                    <div className="relative">
                      <Switch
                        checked={settings[key]}
                        onCheckedChange={(v) => updateSetting(key, v)}
                        className="data-[state=unchecked]:bg-neutral-700 data-[state=checked]:bg-neutral-600"
                        style={
                          settings[key]
                            ? {
                                backgroundColor: accentColor.value,
                              }
                            : {}
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Дії */}
              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-neutral-100 transition-colors"
                  onClick={resetSettings}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Скинути налаштування
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="theme" className="px-4 pb-4 space-y-6 mt-0">
              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                  Акцентний колір
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {ACCENT_COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setAccentColor(color);
                        console.log(`Колір змінено на ${color.name}`);
                      }}
                      className="relative p-4 rounded-lg border-2 transition-all hover:scale-105 bg-neutral-900/30"
                      style={{
                        backgroundColor: `${color.value}15`,
                        borderColor:
                          accentColor.name === color.name
                            ? color.value
                            : "rgb(38, 38, 38)",
                      }}
                    >
                      <div
                        className="w-full h-8 rounded"
                        style={{ backgroundColor: color.value }}
                      />
                      <p className="text-xs mt-2 text-neutral-300">
                        {color.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Обраний колір застосовується до всіх акцентних елементів
                  інтерфейсу: іконок, повзунків, активних станів та індикаторів.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="info" className="px-4 pb-4 space-y-4 mt-0">
              <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                <h3 className="text-sm font-medium mb-3 text-neutral-200">
                  Поточна конфігурація
                </h3>

                <div className="space-y-2 text-xs font-mono">
                  {Object.entries(settings).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-1"
                    >
                      <span className="text-neutral-400">{key}:</span>
                      <span
                        className="px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: `${accentColor.value}15`,
                          color: accentColor.value,
                        }}
                      >
                        {String(value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                <MapLegend mode="temperature"></MapLegend>
              </div>
              <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                <MapLegend mode="humidity"></MapLegend>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </aside>
      <div className="flex-1 relative">
        <ThreeScene settings={settings} />
        <Button
          onClick={() => setShowConsole(!showConsole)}
          className="absolute top-4 right-4 z-10 border transition-all"
          style={{
            backgroundColor: `${accentColor.value}20`,
            borderColor: accentColor.value,
            color: accentColor.value,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${accentColor.value}30`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${accentColor.value}20`;
          }}
        >
          <Terminal className="w-4 h-4 mr-2" />
          <span>Консоль</span>
        </Button>
      </div>

      <AnimatePresence>
        {showConsole && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 w-96 h-full bg-neutral-900 border-l border-neutral-800 flex flex-col z-20 shadow-2xl"
          >
            <div
              className="px-4 py-4 border-b border-neutral-800 flex items-center justify-between"
              style={{ borderLeftColor: accentColor.value, borderLeftWidth: 3 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${accentColor.value}20` }}
                >
                  <Terminal
                    className="w-5 h-5"
                    style={{ color: accentColor.value }}
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-base">Консоль</h2>
                  <p className="text-xs text-neutral-500">
                    {logs.length} записів
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowConsole(false)}
                className="hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 p-4">
              <ConsolePanel logs={logs} />
            </div>

            <div className="p-4 border-t border-neutral-800">
              <Button
                variant="outline"
                className="w-full border-neutral-700 bg-neutral-950 hover:bg-neutral-800 text-neutral-300 hover:text-neutral-100 transition-colors"
                onClick={() => {
                  setLogs([]);
                  console.log("Консоль очищено");
                }}
              >
                Очистити консоль
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
