import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/locales";



function collectKeys(obj: unknown, prefix = ""): string[] {
  if (obj === null || typeof obj !== "object") {
    return [prefix];
  }
  return Object.keys(obj as Record<string, unknown>).flatMap((key) =>
    collectKeys((obj as Record<string, unknown>)[key], prefix ? `${prefix}.${key}` : key),
  );
}

describe("locale dictionaries", () => {
  it("share the same key structure", () => {
    const locales = Object.entries(dictionaries);
    const [, baseDict] = locales[0];
    const baseKeys = collectKeys(baseDict).sort();

    for (const [, dict] of locales.slice(1)) {
      const keys = collectKeys(dict).sort();
      expect(keys).toEqual(baseKeys);
    }
  });
});
