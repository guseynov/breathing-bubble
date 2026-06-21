import clsx from "clsx";
import { Wind } from "lucide-react";
import type { BreathingPreset } from "./types";

type BubbleTechniqueProps = {
  preset: BreathingPreset;
  className?: string;
};

export function BubbleTechnique({ preset, className }: BubbleTechniqueProps) {
  return (
    <section
      className={clsx(
        "grid max-w-[18rem] gap-2 rounded-[1rem] border border-white/10 bg-white/5 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:text-left",
        className,
      )}
    >
      <p className="inline-flex items-center justify-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-sky-400 lg:justify-start">
        <Wind className="size-4 shrink-0" aria-hidden="true" />
        Technique
      </p>
      <div className="grid gap-1">
        <p className="text-[1.1rem] font-semibold leading-tight text-white">{preset.name}</p>
        <p className="max-w-[16rem] text-sm leading-6 text-zinc-400 lg:max-w-[16rem]">
          {preset.description}
        </p>
      </div>
    </section>
  );
}
