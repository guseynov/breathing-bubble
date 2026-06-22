# Breathing Bubble

A browser-based breathing app for quick reset sessions.

## Overview

Breathing Bubble is a calm, browser-based breathing exercise built around a single animated orb. It supports preset breathing patterns, pause/resume control, and a responsive layout that works on desktop and mobile.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 for styling
- `clsx` for conditional class composition
- `lucide-react` for UI icons
- PWA manifest assets in [`public/manifest.json`](/home/alexg/development/breathing_bubble/public/manifest.json)

## Project Layout

- [`src/App.tsx`](/home/alexg/development/breathing_bubble/src/App.tsx) owns the page shell and backdrop.
- [`src/components/bubble/`](/home/alexg/development/breathing_bubble/src/components/bubble/Bubble.tsx) contains the breathing experience split into small typed components.
- [`src/components/bubble/useBreathingCycle.ts`](/home/alexg/development/breathing_bubble/src/components/bubble/useBreathingCycle.ts) handles the animation loop and preset state.
- [`src/styles.css`](/home/alexg/development/breathing_bubble/src/styles.css) holds the Tailwind entrypoint and base styling.
- [`public/manifest.json`](/home/alexg/development/breathing_bubble/public/manifest.json) defines the app metadata and install icons.

## Getting Started

```bash
npm install
npm run dev
```

Open the Vite dev server URL printed in the terminal.

## Scripts

```bash
npm run dev      # start the local dev server
npm run build    # type-check and build production assets into dist/
npm run preview  # serve the production build locally
```

## Assets

- [`public/favicon.ico`](/home/alexg/development/breathing_bubble/public/favicon.ico), [`public/logo192.png`](/home/alexg/development/breathing_bubble/public/logo192.png), and [`public/logo512.png`](/home/alexg/development/breathing_bubble/public/logo512.png) are referenced by the manifest and browser chrome.
- The app is intentionally minimal and centered on one calming interaction.
- Production output is written to `dist/` for standard static hosting and Vercel deployments.
