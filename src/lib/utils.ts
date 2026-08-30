import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Optional Sections pattern for case study templates (case-study.tsx,
 * case-study-ecommerce.tsx): pass an ordered list of section definitions,
 * each with its `data`. Sections with no data are dropped, and the
 * remaining ones get a 0-based `index` and zero-padded `number` computed
 * from their position in the FILTERED list — so numbering and any
 * index-based animation delay always reflect what's actually on screen,
 * not the full declared list. Section order itself still comes from the
 * order you pass `defs` in; this does not reorder anything.
 */
export function resolveSections<T extends { data: unknown }>(
  defs: T[]
): (T & { index: number; number: string })[] {
  return defs
    .filter((def) => Boolean(def.data))
    .map((def, index) => ({
      ...def,
      index,
      number: String(index + 1).padStart(2, "0"),
    }));
}

/**
 * Walks a "next project" chain one hop at a time via `getNext(id)`, skipping
 * any id that isn't published, and returns the first published id found.
 * Guards against loops (including looping back to `startId`) by tracking
 * visited ids. Returns null if no published project is reachable — callers
 * should hide their "Next Project" UI in that case rather than show a
 * broken or self-referential link.
 */
export function findPublishedNext(
  startId: string,
  getNext: (id: string) => string | undefined,
  isPublished: (id: string) => boolean
): string | null {
  const visited = new Set([startId]);
  let candidate = getNext(startId);

  while (candidate && !visited.has(candidate)) {
    if (isPublished(candidate)) return candidate;
    visited.add(candidate);
    candidate = getNext(candidate);
  }
  return null;
}
