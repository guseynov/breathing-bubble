---
name: Breathing Bubble
description: A browser-based breathing reset guided by a single animated orb.
colors:
  primary: "#0099ff"
  primary-soft: "#7dd3fc"
  canvas: "#010203"
  shell: "#02070c"
  surface: "#0b1118"
  surface-strong: "#060c11"
  text: "#ffffff"
  muted: "#a1a1aa"
  border: "#ffffff1a"
typography:
  display:
    fontFamily: "Mona Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 12vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.08em"
  title:
    fontFamily: "Mona Sans, Segoe UI, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Mona Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Mona Sans, Segoe UI, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  sm: "16px"
  md: "24px"
  lg: "32px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  shell-frame:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  panel-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-selected:
    backgroundColor: "{colors.text}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  chip-tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  technique-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
---

# Design System: Breathing Bubble

## Overview

**Creative North Star: "The Quiet Beacon"**

Breathing Bubble treats recovery as a small, precise ritual: one dark stage, one bright signal, one clear action at a time. The interface should feel calm, measured, and immediately legible. It is not trying to impress the user; it is trying to steady them.

The current system is built from a nocturnal shell, a concentrated blue accent, and a single animated orb that carries the whole experience. Depth comes from layering and inset light, not from ornamental chrome. The result should read like a calibrated instrument rather than an app trying to be therapeutic.

It explicitly rejects gamified wellness UIs, neon sci-fi atmospheres, noisy dashboard metaphors, and meditation-app clichés. Copy should stay direct and uninflated. The design should make the next breath obvious.

**Key Characteristics:**
- One focal point, not a busy page.
- Dark, low-noise surroundings with a concentrated blue signal.
- Calm but technical voice.
- Motion that marks state and rhythm.
- Controls that disappear into the task.

## Colors

The palette is a cool nocturne: near-black surfaces, cool neutral text, and a single sky-blue accent that only becomes loud when the user needs guidance.

### Primary
- **Breath Blue** (#0099ff): the accent used for the orb, active selection, focus-adjacent cues, and the smallest amount of emphasis needed to guide the eye.

### Secondary
- **Sky Tint** (#7dd3fc): a softer highlight for boundary markers, subtle glows, and secondary emphasis.

### Neutral
- **Void Black** (#010203): the page backdrop and the deepest layer of the system.
- **Deep Night** (#02070c): the outer shell that frames the experience.
- **Midnight Surface** (#0b1118): the main panel and card surface.
- **Inner Depth** (#060c11): the darker core used behind the orb and in denser inset regions.
- **Frost White** (#ffffff): primary text and the selected-tab contrast state.
- **Zinc Mist** (#a1a1aa): supporting labels and body copy that should recede without disappearing.
- **Fog Border** (#ffffff1a): the faint structural line that keeps surfaces readable.

**The One Accent Rule.** Breath Blue is a signal, never wallpaper. If it appears everywhere, it stops guiding the user.

**The Layered Night Rule.** Depth comes from stacked dark surfaces and gentle inset light, not from loud gradients or decorative glow.

## Typography

**Display Font:** Mona Sans, Segoe UI, sans-serif
**Body Font:** Mona Sans, Segoe UI, sans-serif

**Character:** One family carries the whole product. The result should feel crisp, modern, and calm, with enough technical clarity to trust at a glance. Nothing ornamental, nothing fussy.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 12vw, 3.5rem)`, 0.9): the main title in the intro block and the largest moment on screen.
- **Title** (600, `1.1rem`, 1.2): technique names and other compact emphatic labels.
- **Body** (400, `1rem`, 1.5): explanatory copy and descriptions. Keep prose within 65-75ch when possible.
- **Label** (600, `0.78rem`, `0.14em`, uppercase): section kickers and tab-like labels that need to read as controls.

**The Single Family Rule.** Mona Sans carries headlines, controls, labels, and body copy. There is no need for a second face.

## Elevation

Depth is tonal, not theatrical. The system uses a dark outer shell, softer inner panels, and a single elevated orb core. Shadows are tight and diffuse. The default feeling is flat, with depth reserved for hierarchy and active state.

### Shadow Vocabulary
- **ambient-shell** (`0 30px 80px rgba(0,0,0,0.45)`): the outer stage wrapper that anchors the whole composition.
- **inner-glow** (`inset 0 1px 0 rgba(255,255,255,0.08)`): the subtle sheen on panel surfaces.
- **panel-depth** (`inset 0 1px 0 rgba(255,255,255,0.06)`): the quieter inset treatment used on utility cards.
- **active-chip** (`0 2px 10px rgba(0,153,255,0.15)`): the selected tab lift.
- **orb-core** (`0 10px 30px rgba(0,0,0,0.25), 0 0.5px 0 0.5px rgba(255,255,255,0.1)`): the center lens that holds the breathing label.

**The Flat-By-Default Rule.** Surfaces stay restrained unless the breathing state needs a stronger cue.

## Components

Buttons and tabs share one pill-based family. The difference is state, not style vocabulary. Cards stay softly rounded and lightly bordered so they support the breathing experience instead of competing with it.

### Buttons
- **Shape:** pill radius (`9999px`) with 56px minimum height.
- **Primary:** translucent dark fill with a faint blue border, 16px/28px padding, and semibold 16px type.
- **Hover / Focus:** slight lift, brighter fill, and a clear focus outline. Keep the transition short and quiet.
- **Playback Toggle:** the action button should feel like part of the breathing system, not a generic media control.

### Chips / Tabs
- **Style:** full-width on mobile, auto-width on larger screens, with the same pill geometry as buttons.
- **State:** selected tabs flip to a white surface with black text; inactive tabs stay translucent with muted text and a blue-tinted border.
- **Behavior:** the current pattern should be obvious at a glance without needing extra labels.

### Cards / Containers
- **Corner Style:** 32px for the outer shell, 24px for primary panels, and 16px for smaller utility cards.
- **Background:** nearly black to deep slate, with subtle radial highlights instead of loud gradients.
- **Shadow Strategy:** use inset light for structure and only one outer shadow when the surface needs to lift.
- **Border:** 1px structural lines in translucent white, never heavy outlines.

### Navigation
- **Style:** the preset tabs act as the navigation vocabulary. They should remain calm, consistent, and easy to scan.
- **Mobile Treatment:** stack vertically and keep the tap targets large enough to feel effortless.

### Signature Component: Breathing Orb
- **Character:** the orb is the product. Everything else is supporting structure.
- **Shape:** a large circular stage with a bright perimeter, boundary markers, and a centered label.
- **Behavior:** scale and label state communicate inhale, hold, and exhale. Paused state should dim, not disappear.
- **Treatment:** the orb should feel luminous and deliberate, never cartoonish.

## Do's and Don'ts

### Do:
- **Do** keep the orb as the dominant focal point.
- **Do** use Breath Blue (`#0099ff`) sparingly for active states, boundary cues, and focus-adjacent emphasis.
- **Do** keep copy short, direct, and easy to parse in one glance.
- **Do** preserve reduced-motion fallbacks and strong contrast.
- **Do** let the controls feel like part of one calm instrument.

### Don't:
- **Don't** use gamified wellness UIs, neon sci-fi atmospheres, noisy dashboard metaphors, or meditation-app clichés.
- **Don't** add extra metrics, charts, streak counters, or dashboard chrome.
- **Don't** turn secondary controls into competing hero elements.
- **Don't** let panels accumulate both heavy borders and soft, wide shadows.
- **Don't** use vague or inflated copy that tries to sound profound.
