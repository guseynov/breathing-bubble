import clsx from "clsx";
import type { BreathingPreset } from "./types";

type PresetTabsProps = {
  presets: readonly BreathingPreset[];
  activePresetId: string;
  onPresetChange: (presetId: string) => void;
  className?: string;
};

export function PresetTabs({
  presets,
  activePresetId,
  onPresetChange,
  className,
}: PresetTabsProps) {
  return (
    <div
      className={clsx("flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center", className)}
      role="tablist"
      aria-label="Breathing patterns"
    >
      {presets.map((preset) => {
        const isActive = preset.id === activePresetId;

        return (
          <button
            key={preset.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={clsx(
              "min-h-14 w-full rounded-full border px-6 py-4 text-base font-semibold tracking-[-0.01em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02070c] active:scale-[0.98] motion-reduce:active:scale-100 sm:w-auto sm:min-w-[9.5rem]",
              isActive
                ? "border-sky-300/40 bg-white text-black shadow-[0_2px_10px_rgba(0,153,255,0.15)]"
                : "border-sky-400/20 bg-white/10 text-zinc-300 hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-white/15 hover:text-white",
            )}
            onClick={() => onPresetChange(preset.id)}
          >
            {preset.name}
          </button>
        );
      })}
    </div>
  );
}
