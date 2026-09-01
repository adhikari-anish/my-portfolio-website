# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 15 portfolio site using the App Router and TypeScript. Application entry points live in `src/app`, with the main page in `src/app/page.tsx` and shared styles in `src/app/globals.css`. Reusable UI lives in `src/components`, while shared config, data, fonts, and utilities live in `src/lib`. Custom hooks belong in `src/hooks`. Static assets such as images, icons, and the resume PDF live in `public/`.

## Build, Test, and Development Commands
- `npm run dev`: starts the local dev server with Turbopack at `http://localhost:3000`.
- `npm run build`: creates the production build and catches type or route-level issues.
- `npm run start`: serves the production build locally after `npm run build`.
- `npm run lint`: runs Next.js ESLint rules (`next/core-web-vitals` and TypeScript checks).

## Coding Style & Naming Conventions
Use TypeScript throughout `src/`. Follow the existing style: 2-space indentation is not used here; prefer tabs/spaces exactly as enforced by the file you are editing, and keep imports grouped cleanly. Component files use lowercase kebab-style names such as `theme-toggle.tsx`, and exported React components use PascalCase. Keep utility functions in `src/lib/utils.ts` or a focused companion file. Prefer Tailwind utility classes for styling and keep shared tokens in config or global CSS.

## Testing Guidelines
There is no dedicated test framework committed yet. Until one is added, treat `npm run lint` and `npm run build` as the required validation steps before opening a PR. If you add tests, place them near the feature or in a small `src/__tests__` area, and use names like `component-name.test.tsx`.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit messages such as `Highlight active navbar item on scroll and click`. Keep commits focused on one change. Pull requests should include a brief summary, note any UI-visible changes, and attach screenshots or a short screen recording for layout, animation, or responsive updates.

## Configuration Tips
Environment validation is handled through `src/env.mjs`. Do not hardcode secrets in components or config files. When adding assets, place optimized files in `public/` and reference them with root-relative paths such as `/me.jpeg`.
