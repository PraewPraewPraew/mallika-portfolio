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
- **Routing:** all routes are declared in `src/app/routes.tsx` and nest under `Root` (`src/app/pages/root.tsx`), which wraps every page with `Navigation`, `Footer`, and `ScrollToTop`. Case study routes are generated from `data/projects.ts`: projects with a non-`"data-driven"` `layoutType` (currently `"ecommerce"` → `case-study-ecommerce.tsx`, `"lego"` → `case-study-lego-design-system.tsx`) get a dedicated route built from `layoutComponents[project.layoutType]`, registered *before* the generic `case-study/:id` catch-all that handles every `"data-driven"` project via `case-study.tsx`. See "Adding a new case study" below for the full walkthrough.
- **Data:** `src/app/data/projects.ts` is the single source of truth for the project list — `work.tsx` and `home.tsx` both import and filter it (`published`, and `featured` for Home) rather than keeping their own copies. Each entry also carries `layoutType`, which drives routing (see above). This file only holds card-level data (id, title, description, category, tags, image, published, featured, layoutType); the actual case study *content* lives in per-layout data files that the template components import: `data/case-studies.ts` (`"data-driven"` projects, consumed by `case-study.tsx`) and `data/case-studies-ecommerce.ts` (`"ecommerce"` projects, consumed by `case-study-ecommerce.tsx`). All three data files are plain data with Thai comments explaining where each field renders — see "Adding a new case study" below.
- **Optional Sections pattern:** `case-study.tsx` and `case-study-ecommerce.tsx` both build their section list through `resolveSections()` (`src/lib/utils.ts`): pass an ordered array of `{key, data}` (plus whatever else a section needs), and it drops any entry whose `data` is falsy, then returns the rest with an `index`/`number` computed from their position in the *filtered* list. This is what makes a section "disappear automatically when its data is missing" and what makes `case-study-ecommerce.tsx`'s "01–05" labels, per-section animation delay, and alternating background renumber themselves correctly when a section is hidden — none of that is hardcoded to a fixed slot. Both templates call the same helper on purpose, so a future move to a full Section Registry (block-based, data-declared order — see "Known improvements") only has to happen once instead of being reinvented per template. Important: this only makes sections *optional*, not *reorderable* — the order sections can appear in is still whatever order they're listed in each template's `resolveSections([...])` call; data can hide a section, not move it.
- **Components:**
  - `src/app/components/*.tsx` — hand-built portfolio-specific components (Button, Navigation, Footer, ProjectCard, SectionHeader, Tag, background-patterns, loading-spinner, scroll-to-top). Re-exported via `src/app/components/index.ts`.
  - `src/app/components/ui/*.tsx` — shadcn/ui primitives (Radix-based). Treat these as vendored library code; prefer composing them rather than rewriting.
  - `src/app/components/figma/ImageWithFallback.tsx` — wraps `<img>` with an inline SVG error fallback; used for externally-hosted (Unsplash) images that may fail to load.
- **Styling:** design tokens (colors, font families, type scale, spacing, radius) live in `src/styles/theme.css` as CSS custom properties, then re-exposed to Tailwind v4 via `@theme inline`. `src/styles/index.css` is the entry point that imports `fonts.css`, `tailwind.css`, and `theme.css` in that order, plus global scrollbar/selection/focus styles. See `DESIGN_SYSTEM.md` for the full color/type/spacing/component spec (background `#F7F5F1`, foreground `#0A0A0A`, accent `#C8FF00`, muted `#7A7570`; Playfair Display for headings, DM Sans for body, JetBrains Mono for labels/tags).
- **Path alias:** `@` resolves to `src/` (configured in `vite.config.ts`).
- **Figma asset imports:** `vite.config.ts` defines a custom `figma-asset-resolver` plugin that resolves `figma:asset/<filename>` imports to files in `src/assets`. Some older/generated code may still use this import scheme — new code should just import from `src/assets` directly (or reference `/src/assets/...` paths as `projects.ts` does).
- **Vite config note:** the React and Tailwind Vite plugins must both stay enabled even if a change appears not to use Tailwind directly — required by the Figma Make tooling. Do not add `.css`, `.tsx`, or `.ts` to `assetsInclude` in `vite.config.ts`.
- **`Button` (`src/app/components/button.tsx`) cannot render a real external link (`mailto:`, `https://...`).** Its `asChild + href` path always wraps `href` in React Router's `<Link>`, which mis-resolves external URLs as internal routes; using `asChild` alone (the pattern seen in `home.tsx`) nests a real `<a>` inside a `<button>`, creating two separate focusable elements for what looks like one control. `contact.tsx`'s Email/LinkedIn buttons work around this by hand-writing an `<a>` styled to match `Button`'s `ghost` variant instead of using the component. If `Button`'s visual styles change, update those `<a>` tags in `contact.tsx` by hand to match — see the "Known improvements" note below for the real fix.
- **Never set `scroll-behavior: smooth` globally on `html`** (e.g. in `src/styles/index.css`). `root.tsx` renders React Router's `<ScrollRestoration />`, which resets/restores scroll via plain `window.scrollTo`; a global smooth-scroll rule makes the browser animate that call instead of jumping instantly, so navigating to a new route lands mid-scroll and back/forward restoration misses its target. If smooth scrolling is needed for a specific interaction, trigger it explicitly in JS (see `scroll-to-top.tsx`, which already passes `behavior: "smooth"` per-call) rather than applying it globally in CSS.

## Conventions

- Before recommending any third-party service, library, or tool (form backends, APIs, npm packages, etc.), verify current details from the official site/docs first — do not rely on memory. This applies especially to signup steps, free-tier limits, pricing, and current API syntax.
- If the web can't be reached to verify, say so explicitly and tell the user the information may be outdated and should be double-checked before they act on it.

## Adding a new case study

Every project card (Work grid, Home featured section) and its case study page are driven by one entry in `src/app/data/projects.ts`. What else you need to touch depends on that entry's `layoutType`.

**Which files are safe to hand-edit vs. need Claude Code, in one place:**

| File | Type | Who edits it |
|---|---|---|
| `data/projects.ts` | data | You — see caveats below |
| `data/case-studies.ts` | data | You — see caveats below |
| `data/case-studies-ecommerce.ts` | data | You — see caveats below |
| `case-study.tsx`, `case-study-ecommerce.tsx`, `case-study-lego-design-system.tsx` | template code | Claude Code |
| `routes.tsx`, `lib/utils.ts` | code | Claude Code |

Caveat on the data files: plain text/field edits (strings, numbers, array items) are safe to hand-edit — keep commas/quotes/brackets matching or the build breaks silently. The `import ... from "figma:asset/..."` lines at the top of `case-studies.ts` and `case-studies-ecommerce.ts` are marked with a ⚠️ comment and always need Claude Code, since adding a local image means placing the file in `src/assets/` and getting the resolver-scheme import right.

### Showing/hiding or re-featuring an existing project

**You can do this yourself in `projects.ts`, no code changes needed:**
- `published: false` → hides the project from Work and Home. The case study page still exists and is reachable if someone has the direct URL — nothing 404s, it's just unlisted.
- `featured: true/false` → controls whether it shows in Home's Featured Projects section (only takes effect if `published` is also `true`).
- Editing `title`, `description`, `category`, `tags`, or `image` (as a URL string) on an existing entry is also safe to hand-edit.

### Hiding/showing a section within an existing case study

Both `"data-driven"` and `"ecommerce"` case studies use the Optional Sections pattern (see the Architecture note above): **delete the whole field for a section in the data file, and it disappears from the page automatically** — no template changes needed.
- Data-driven (`case-studies.ts`): the optional fields are `problem`, `research`, `solution`, `screenshots`, `impact`. (`overview` always shows — it's not optional.)
- Ecommerce (`case-studies-ecommerce.ts`): the optional fields are `challenge`, `approach`, `solution`, `collaboration`, `reflection`. (The hero section always shows.)

Two things this pattern can't do: it can't **reorder** sections (the order is fixed by the template file, not the data), and it can't add a **new kind** of section that doesn't already exist in the template — both of those need Claude Code (see below).

### Adding a new project with layoutType: "data-driven"

This is the easy, reusable path — use it unless the project truly needs a one-of-a-kind layout.

1. **(You can do this yourself)** Add a new entry to the `projects` array in `projects.ts`: `id` (must be a unique URL-safe slug — this becomes `/case-study/<id>`), `title`, `description`, `category` (must match one of the `filters` in `work.tsx`: `App`, `Web`, or `Design System`, or `All`), `tags`, `image`, `published: true`, `featured: true/false`, `layoutType: "data-driven"`.
2. **(You can do this yourself, carefully)** Add a matching object to the `caseStudies` record in `data/case-studies.ts`, keyed by the *same* `id` you used in step 1. It needs: `title`, `subtitle`, `category`, `tags`, `year`, `client`, `role`, `duration`, `hero`, `screenshots` (optional — array of image URLs or `{src, caption}` objects), `overview`, `problem: {title, description, challenges[]}`, `research: {title, description, insights[]}`, `solution: {title, description, features: [{title, description}]}`, `impact: {title, metrics: [{value, label}]}`, and `nextProject` (the `id` of another entry — powers the "Next Project" link at the bottom of the page). Omit any of `problem`/`research`/`solution`/`screenshots`/`impact` to hide that section.
3. **(Ask Claude Code)** If any images are local uploads rather than external URLs: add the files to `src/assets/`, then `import` them at the top of `case-studies.ts` using the `figma:asset/<filename>` scheme and reference the imported variable instead of a raw string.
4. No `routes.tsx` change needed — `case-study/:id` picks up any `"data-driven"` project automatically.
5. Optional: update the `nextProject` chain so the new project is included in the rotation (point an existing entry's `nextProject` at the new `id`, and set the new entry's `nextProject` to continue the chain).

### Adding a new project with layoutType: "ecommerce"

`case-study-ecommerce.tsx` is a reusable template (not hardcoded to FreshCart) as of the Optional Sections conversion — adding a second `"ecommerce"`-layout project is data-only, same shape as the data-driven path above:

1. **(You can do this yourself)** Add a new entry to `projects.ts` with `layoutType: "ecommerce"`.
2. **(You can do this yourself, carefully)** Add a matching object to `ecommerceCaseStudies` in `data/case-studies-ecommerce.ts`, keyed by the same `id`. It needs: `hero: {label, headline, intro[], tags[], image}`, and any of `challenge`, `approach` (includes `decisionTable`), `solution` (includes `features[]`), `collaboration` (includes `beforeAfter`), `reflection` (includes `quote`) — omit any of these five to hide that section — plus `nextProjectId`.
3. **(Ask Claude Code)** Same as above if using local images instead of URLs.
4. No `routes.tsx` change needed — it already generates one route per project from `layoutType` (see Architecture above), so a second `"ecommerce"` project gets wired up automatically. `case-study-ecommerce.tsx` reads the id straight from the URL path (not `useParams()`, since these are literal per-project routes, not a shared `:id` route — see the comment at the top of that component) so no code change is needed there either.

### Adding a new project with a bespoke layout (like "lego")

`layoutType: "lego"` still maps to one hardcoded file (`case-study-lego-design-system.tsx`) that has not yet been converted to a data-driven template — it needs the same kind of conversion `case-study-ecommerce.tsx` just went through before a second `"lego"`-layout project can be added via data alone. Until then, a genuinely new bespoke layout always needs code work:

1. **(Ask Claude Code)** Duplicate the closest existing custom case study file as a starting point, rename the component and file, and rewrite its content for the new project.
2. **(Ask Claude Code)** Register the new component in `layoutComponents` in `routes.tsx` under a new key (e.g. `"newproject"`).
3. **(You can do this yourself once the above exists)** Add the project's entry to `projects.ts` with `layoutType` set to that new key.

## Known improvements

- `Button` should support external links natively: when `href` doesn't look like an internal route (i.e. not starting with `/`), render a plain `<a href>` instead of routing it through React Router's `<Link>`. This would remove the need for the hand-styled `<a>` workaround in `contact.tsx` (see the Architecture note above) and let any future external-link button reuse `Button` directly instead of duplicating its styles.
- If it turns out the same kind of section (e.g. a quote block, a comparison table, a feature-card list) needs to be written more than once across different layout templates, that's the signal to stop copy-pasting per-template JSX and move to a **Section Registry**: data declares an ordered `sections: [{type, data}]` array, and a shared registry of block components (`Text`, `Table`, `Quote`, `FeatureList`, ...) renders whichever `type` each entry asks for. This is strictly more powerful than the current Optional Sections pattern — it also allows *reordering*, not just hiding — but it's a much bigger lift (new block-component library, rewritten data schema for every existing case study, higher regression risk on real content like `smart-living`). Don't build it speculatively; wait until at least 2-3 real cross-layout repeats actually show up, and convert one layout at a time starting with whichever has the least real content at stake.
