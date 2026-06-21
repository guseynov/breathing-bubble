import type { CSSProperties } from "react";

export type BreathingStep = {
  label: string;
  duration: number;
  scale: number;
};

export type BreathingPreset = {
  id: string;
  name: string;
  description: string;
  steps: readonly [BreathingStep, ...BreathingStep[]];
};

export type CycleState = {
  stepIndex: number;
  step: BreathingStep;
  nextStep: BreathingStep;
  stepElapsed: number;
  progress: number;
  scale: number;
};

export type CSSVariableStyle = CSSProperties & {
  [key: `--${string}`]: string | number;
};
