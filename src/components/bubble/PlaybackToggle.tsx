import clsx from "clsx";
import { Pause, Play } from "lucide-react";

type PlaybackToggleProps = {
  isPaused: boolean;
  onToggle: () => void;
  className?: string;
};

export function PlaybackToggle({ isPaused, onToggle, className }: PlaybackToggleProps) {
  return (
    <button
      type="button"
      aria-pressed={isPaused}
      className={clsx(
        "inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border px-7 py-4 text-base font-semibold tracking-[-0.01em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02070c] active:scale-[0.98] motion-reduce:active:scale-100 sm:w-auto sm:min-w-[12rem]",
        isPaused
          ? "border-sky-300/30 bg-white/10 text-white hover:bg-white/15"
          : "border-sky-400/20 bg-white/10 text-white hover:border-sky-300/40 hover:bg-white/15",
        className,
      )}
      onClick={onToggle}
    >
      {isPaused ? (
        <Play className="size-[1.05rem] stroke-[2.2]" aria-hidden="true" />
      ) : (
        <Pause className="size-[1.05rem] stroke-[2.2]" aria-hidden="true" />
      )}
      {isPaused ? "Resume" : "Pause"}
    </button>
  );
}
