import { BubbleIntro } from "./BubbleIntro";
import { BubblePanel } from "./BubblePanel";
import { BubbleTechnique } from "./BubbleTechnique";
import { BreathingOrb } from "./BreathingOrb";
import { PlaybackToggle } from "./PlaybackToggle";
import { PRESETS } from "./presets";
import { PresetTabs } from "./PresetTabs";
import { useBreathingCycle } from "./useBreathingCycle";

export function Bubble() {
  const {
    activePreset,
    activePresetId,
    boundaryProgresses,
    cycleState,
    isPaused,
    rotationAngle,
    setActivePresetId,
    setIsPaused,
  } = useBreathingCycle();

  return (
    <section
      className="relative z-10 grid gap-5 lg:grid-cols-[minmax(18rem,24rem)_minmax(22rem,1fr)]"
      aria-label="Breathing Bubble"
    >
      <BubblePanel variant="copy" className="gap-6">
        <BubbleIntro
          eyebrow="Focused Reset"
          title="Breathing Bubble"
          lede="A minimal breathing loop tuned for a short reset. Follow the bubble and let the pace stay steady."
        />

        <BubbleTechnique preset={activePreset} />
      </BubblePanel>

      <BubblePanel variant="experience" className="gap-5">
        <div className="flex w-full justify-center py-1 sm:py-2">
          <BreathingOrb
            cycleState={cycleState}
            boundaryProgresses={boundaryProgresses}
            activePresetId={activePresetId}
            rotationAngle={rotationAngle}
            isPaused={isPaused}
          />
        </div>

        <div className="grid w-full justify-items-center gap-4">
          <PresetTabs
            presets={PRESETS}
            activePresetId={activePresetId}
            onPresetChange={setActivePresetId}
          />

          <PlaybackToggle isPaused={isPaused} onToggle={() => setIsPaused((current) => !current)} />
        </div>
      </BubblePanel>
    </section>
  );
}
