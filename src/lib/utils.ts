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
