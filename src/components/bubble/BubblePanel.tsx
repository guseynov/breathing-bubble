import type { PropsWithChildren } from "react";
import clsx from "clsx";

type BubblePanelProps = PropsWithChildren<{
  variant: "copy" | "experience";
  className?: string;
}>;

const VARIANT_CLASSES = {
  copy: "justify-start bg-[radial-gradient(circle_at_top_left,rgba(0,153,255,0.12),transparent_34%),rgba(255,255,255,0.02)]",
  experience:
    "items-center justify-center bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(0,153,255,0.09),transparent_34%),rgba(255,255,255,0.015)]",
} as const;

export function BubblePanel({ variant, className, children }: BubblePanelProps) {
  return (
    <div
      className={clsx(
        "flex min-h-full flex-col gap-6 overflow-hidden rounded-[1.45rem] border border-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
