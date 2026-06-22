import clsx from "clsx";
import type { CSSProperties } from "react";
import type { CycleState } from "./types";

type BreathingOrbProps = {
  cycleState: CycleState;
  boundaryProgresses: readonly number[];
  activePresetId: string;
  rotationAngle: number;
  isPaused: boolean;
};

export function BreathingOrb({
  cycleState,
  boundaryProgresses,
  activePresetId,
  rotationAngle,
  isPaused,
}: BreathingOrbProps) {
  const rootStyle: CSSProperties = {
    transform: `scale(${cycleState.scale})`,
    willChange: "transform",
  };

  return (
    <div className="flex w-full justify-center">
      <div
        className={clsx(
          "relative size-[min(78vw,20.5rem,36vh)] transition-opacity duration-300 motion-reduce:transition-none sm:size-[min(68vw,24rem,27rem)] lg:size-[min(56vw,28rem)]",
          isPaused && "opacity-80",
        )}
        style={rootStyle}
      >
        <div className="absolute inset-0 rounded-full border-4 border-sky-500 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.16),transparent_56%),rgba(3,10,16,0.78)] shadow-[0_0_0_1px_rgba(0,153,255,0.15),inset_0_0_0_1px_rgba(255,255,255,0.1)]" />

        <span
          className="absolute inset-0 block"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
          aria-hidden="true"
        >
          <span
            className="absolute left-1/2 top-0 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_1rem_rgba(0,153,255,0.35)] sm:size-5"
          />
        </span>

        {boundaryProgresses.map((progress, index) => (
          <span
            key={`${activePresetId}-${progress}`}
            className="absolute inset-0 block"
            style={{ transform: `rotate(${progress * 360}deg)` }}
            aria-hidden="true"
          >
            <span
              className={clsx(
                "absolute left-1/2 top-0 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_1rem_rgba(0,153,255,0.25)] sm:size-5",
                index === 0 ? "bg-white/95" : "bg-white/90",
              )}
            />
          </span>
        ))}

        <div
          className="absolute inset-7 flex items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.22),transparent_58%),rgba(6,12,17,0.82)] p-6 text-center shadow-[0_0_0_1px_rgba(0,153,255,0.15),0_10px_30px_rgba(0,0,0,0.25),0_0.5px_0_0.5px_rgba(255,255,255,0.1)] sm:inset-6 sm:p-8"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="grid gap-2">
            <p className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-sky-400">
              Now
            </p>
            <p
              key={`${activePresetId}-${cycleState.stepIndex}`}
              className="m-0 animate-[bubble-step-in_220ms_cubic-bezier(0.16,1,0.3,1)] text-[clamp(1.25rem,8vw,2.1rem)] font-medium leading-[0.96] tracking-[-0.06em] text-white motion-reduce:animate-none"
            >
              {cycleState.step.label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
