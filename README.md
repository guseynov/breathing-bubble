# Breathing Bubble

Minimal guided breathing experience with a single animated focal point.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 for styling
- `clsx` for conditional class composition
- PWA manifest assets in [`public/manifest.json`](/home/alexg/development/breathing_bubble/public/manifest.json)

## Structure

- [`src/App.tsx`](/home/alexg/development/breathing_bubble/src/App.tsx) owns the page shell.
- [`src/components/bubble/`](/home/alexg/development/breathing_bubble/src/components/bubble/Bubble.tsx) contains the breathing experience split into small typed components.
- [`src/styles.css`](/home/alexg/development/breathing_bubble/src/styles.css) holds the Tailwind entrypoint and base styling.

## Scripts

- `npm install` installs project dependencies.
- `npm run dev` starts the local Vite dev server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.

## Assets

- [`public/favicon.ico`](/home/alexg/development/breathing_bubble/public/favicon.ico), [`public/logo192.png`](/home/alexg/development/breathing_bubble/public/logo192.png), and [`public/logo512.png`](/home/alexg/development/breathing_bubble/public/logo512.png) are used by the manifest and browser chrome.
- The app is intentionally minimal and centered on one calming interaction.
- Production output is written to `dist/` for standard static hosting and Vercel deployments.
