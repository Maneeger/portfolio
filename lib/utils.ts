// src/lib/utils.ts
// This utility function helps combine Tailwind CSS classes conditionally
// and resolves potential class conflicts.

import { type ClassValue, clsx } from "clsx"; // For conditional class names
import { twMerge } from "tailwind-merge"; // For merging Tailwind classes

/**
 * Combines multiple class names into a single string,
 * resolving conflicts and providing a clean class list.
 * @param inputs - An array of class values (strings, objects, arrays).
 * @returns A single string of combined and merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}