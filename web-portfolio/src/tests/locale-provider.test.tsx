import { renderHook, act } from "@testing-library/react";
import { LocaleProvider, useLocale } from "@/providers/locale-provider";
import { describe, expect, it } from "vitest";

function renderUseLocale() {
  return renderHook(() => useLocale(), {
    wrapper: ({ children }) => <LocaleProvider>{children}</LocaleProvider>,
  });
}

describe("LocaleProvider", () => {
  it("updates dictionary when locale changes", () => {
    const { result } = renderUseLocale();
    expect(result.current.dictionary.hero.title).toContain("실제 제품으로 완성");

    act(() => {
      result.current.setLocale("en");
    });

    expect(result.current.dictionary.hero.title).toBe(
      "Maccrey turns ideas into products people can use",
    );
  });
});
