import clsx from "clsx";

type BubbleIntroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  className?: string;
};

export function BubbleIntro({ eyebrow, title, lede, className }: BubbleIntroProps) {
  return (
    <header className={clsx("grid max-w-[22rem] gap-3 text-center lg:text-left", className)}>
      <p className="text-[0.78rem] font-medium uppercase tracking-[0.12em] text-zinc-400">
        {eyebrow}
      </p>
      <h1 className="text-balance text-[clamp(2.25rem,12vw,3.5rem)] font-medium leading-[0.9] tracking-[-0.08em] text-white sm:text-[clamp(3.2rem,5.2vw,4.7rem)] sm:leading-[0.84]">
        {title}
      </h1>
      <p className="max-w-[20rem] text-pretty text-sm leading-6 text-zinc-400 sm:max-w-[19rem] sm:text-base">
        {lede}
      </p>
    </header>
  );
}
