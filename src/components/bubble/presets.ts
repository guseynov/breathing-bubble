import type { BreathingPreset } from "./types";

export const PRESETS = [
  {
    id: "balanced",
    name: "Balanced",
    description: "A steady, even rhythm for a calm reset.",
    steps: [
      { label: "breathe in", duration: 4000, scale: 1.08 },
      { label: "hold", duration: 2000, scale: 1.08 },
      { label: "breathe out", duration: 4000, scale: 0.86 },
    ],
  },
  {
    id: "box",
    name: "Box",
    description: "Equal phases for focus and regulation.",
    steps: [
      { label: "breathe in", duration: 4000, scale: 1.08 },
      { label: "hold", duration: 4000, scale: 1.08 },
      { label: "breathe out", duration: 4000, scale: 0.86 },
      { label: "hold low", duration: 4000, scale: 0.86 },
    ],
  },
  {
    id: "unwind",
    name: "Unwind",
    description: "Longer exhales to bring the tempo down.",
    steps: [
      { label: "breathe in", duration: 4000, scale: 1.08 },
      { label: "hold", duration: 2000, scale: 1.08 },
      { label: "breathe out", duration: 6000, scale: 0.86 },
    ],
  },
] as const satisfies readonly BreathingPreset[];
