import { useEffect, useRef, useState } from "react";
import { getBoundaryProgresses, getCycleState, getTotalCycleDuration } from "./breathing";
import { PRESETS } from "./presets";

export function useBreathingCycle() {
  const [activePresetId, setActivePresetId] = useState<string>(PRESETS[0].id);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsedInCycle, setElapsedInCycle] = useState(0);

  const frameRef = useRef<number | null>(null);
  const cycleStartRef = useRef<number | null>(null);
  const pausedElapsedRef = useRef(0);

  const activePreset = PRESETS.find((preset) => preset.id === activePresetId) ?? PRESETS[0];
  const steps = activePreset.steps;
  const totalCycleDuration = getTotalCycleDuration(steps);
  const boundaryProgresses = getBoundaryProgresses(steps);
  const cycleState = getCycleState(steps, elapsedInCycle);
  const rotationAngle = totalCycleDuration === 0 ? 0 : (elapsedInCycle / totalCycleDuration) * 360;

  useEffect(() => {
    pausedElapsedRef.current = elapsedInCycle;
  }, [elapsedInCycle]);

  useEffect(() => {
    pausedElapsedRef.current = 0;
    cycleStartRef.current = null;
    setElapsedInCycle(0);
  }, [activePresetId]);

  useEffect(() => {
    if (totalCycleDuration === 0) {
      return undefined;
    }

    if (isPaused) {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      pausedElapsedRef.current = elapsedInCycle;
      cycleStartRef.current = null;
      return undefined;
    }

    const tick = (timestamp: number) => {
      if (cycleStartRef.current === null) {
        cycleStartRef.current = timestamp - pausedElapsedRef.current;
      }

      const nextElapsed = (timestamp - cycleStartRef.current) % totalCycleDuration;
      setElapsedInCycle(nextElapsed);
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [isPaused, totalCycleDuration]);

  return {
    activePreset,
    activePresetId,
    boundaryProgresses,
    cycleState,
    isPaused,
    rotationAngle,
    setActivePresetId,
    setIsPaused,
  };
}
