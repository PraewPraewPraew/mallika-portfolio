# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A UX/UI designer portfolio site originally scaffolded by Figma Make, now hand-edited. React 18 + TypeScript, Vite build, React Router v7 (`createBrowserRouter`), Tailwind CSS v4. No backend, no tests, no linter — all content is local static data.

## Commands

```bash
npm install     # install dependencies
npm run dev     # start Vite dev server
npm run build   # production build (vite build)
```

There is no test suite, no lint script, and no tsconfig.json in this repo — type checking happens implicitly through the Vite/esbuild transform, not via `tsc`.

## Architecture

- **Entry:** `src/main.tsx` mounts `src/app/App.tsx`, which renders `RouterProvider` from `src/app/routes.tsx`.
- **Routing:** all routes are declared in `src/app/routes.tsx` and nest under `Root` (`src/app/pages/root.tsx`), which wraps every page with `Navigation`, `Footer`, and `ScrollToTop`. Case studies for two projects (`freshcart-ecommerce`, `lego-design-system`) have dedicated page components with hardcoded routes that are matched *before* the generic `case-study/:id` route — new case studies should follow this same pattern (either add a dedicated route above the `:id` catch-all, or extend the data-driven `case-study.tsx`).
- **Data:** `src/app/data/projects.ts` is the single source of truth for the project list (id, title, category, tags, image) rendered on the Work page and used to resolve `case-study/:id`.
- **Components:**
  - `src/app/components/*.tsx` — hand-built portfolio-specific components (Button, Navigation, Footer, ProjectCard, SectionHeader, Tag, background-patterns, loading-spinner, scroll-to-top). Re-exported via `src/app/components/index.ts`.
  - `src/app/components/ui/*.tsx` — shadcn/ui primitives (Radix-based). Treat these as vendored library code; prefer composing them rather than rewriting.
  - `src/app/components/figma/ImageWithFallback.tsx` — wraps `<img>` with an inline SVG error fallback; used for externally-hosted (Unsplash) images that may fail to load.
- **Styling:** design tokens (colors, font families, type scale, spacing, radius) live in `src/styles/theme.css` as CSS custom properties, then re-exposed to Tailwind v4 via `@theme inline`. `src/styles/index.css` is the entry point that imports `fonts.css`, `tailwind.css`, and `theme.css` in that order, plus global scrollbar/selection/focus styles. See `DESIGN_SYSTEM.md` for the full color/type/spacing/component spec (background `#F7F5F1`, foreground `#0A0A0A`, accent `#C8FF00`, muted `#7A7570`; Playfair Display for headings, DM Sans for body, JetBrains Mono for labels/tags).
- **Path alias:** `@` resolves to `src/` (configured in `vite.config.ts`).
- **Figma asset imports:** `vite.config.ts` defines a custom `figma-asset-resolver` plugin that resolves `figma:asset/<filename>` imports to files in `src/assets`. Some older/generated code may still use this import scheme — new code should just import from `src/assets` directly (or reference `/src/assets/...` paths as `projects.ts` does).
- **`src/imports/`** contains the raw, unedited output from the original Figma Make export (large generated `.tsx`/`.ts` files). Nothing under `src/app` currently imports from this directory — treat it as reference/legacy only, not live code.
- **Vite config note:** the React and Tailwind Vite plugins must both stay enabled even if a change appears not to use Tailwind directly — required by the Figma Make tooling. Do not add `.css`, `.tsx`, or `.ts` to `assetsInclude` in `vite.config.ts`.
- **Never set `scroll-behavior: smooth` globally on `html`** (e.g. in `src/styles/index.css`). `root.tsx` renders React Router's `<ScrollRestoration />`, which resets/restores scroll via plain `window.scrollTo`; a global smooth-scroll rule makes the browser animate that call instead of jumping instantly, so navigating to a new route lands mid-scroll and back/forward restoration misses its target. If smooth scrolling is needed for a specific interaction, trigger it explicitly in JS (see `scroll-to-top.tsx`, which already passes `behavior: "smooth"` per-call) rather than applying it globally in CSS.

## Conventions

- Before recommending any third-party service, library, or tool (form backends, APIs, npm packages, etc.), verify current details from the official site/docs first — do not rely on memory. This applies especially to signup steps, free-tier limits, pricing, and current API syntax.
- If the web can't be reached to verify, say so explicitly and tell the user the information may be outdated and should be double-checked before they act on it.
