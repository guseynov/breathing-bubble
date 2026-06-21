import type { BreathingStep, CycleState } from "./types";

export function getTotalCycleDuration(steps: readonly BreathingStep[]) {
  return steps.reduce((total, step) => total + step.duration, 0);
}

export function getBoundaryProgresses(steps: readonly BreathingStep[]) {
  const totalDuration = getTotalCycleDuration(steps);

  if (totalDuration === 0 || steps.length === 0) {
    return [0];
  }

  const progresses = [0];
  let elapsedCursor = 0;

  for (let index = 0; index < steps.length - 1; index += 1) {
    elapsedCursor += steps[index].duration;
    progresses.push(elapsedCursor / totalDuration);
  }

  return progresses;
}

export function getCycleState(
  steps: readonly [BreathingStep, ...BreathingStep[]],
  elapsed: number,
): CycleState {
  let elapsedCursor = 0;
  let previousScale = steps[steps.length - 1].scale;

  for (let index = 0; index < steps.length; index += 1) {
    const step = steps[index];
    const stepEnd = elapsedCursor + step.duration;

    if (elapsed < stepEnd || index === steps.length - 1) {
      const stepElapsed = elapsed - elapsedCursor;
      const progress =
        step.duration === 0 ? 1 : Math.min(Math.max(stepElapsed / step.duration, 0), 1);
      const scale = previousScale + (step.scale - previousScale) * progress;

      return {
        stepIndex: index,
        step,
        nextStep: steps[(index + 1) % steps.length],
        stepElapsed,
        progress,
        scale,
      };
    }

    elapsedCursor = stepEnd;
    previousScale = step.scale;
  }

  return {
    stepIndex: 0,
    step: steps[0],
    nextStep: steps[1] ?? steps[0],
    stepElapsed: 0,
    progress: 0,
    scale: steps[0].scale,
  };
}
