import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "@/app/page";
import { AppProviders } from "@/providers";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Hero } from "@/components/home/hero";

const originalMatchMedia = window.matchMedia;

describe("Theme & locale interactions", () => {
  beforeEach(() => {
    vi.resetModules();
    window.matchMedia =
      originalMatchMedia ||
      ((query: string) => ({
        matches: query.includes("prefers-color-scheme: light"),
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));
    window.localStorage.clear();
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it("toggles data-theme attribute via ThemeToggle", async () => {
    render(
      <AppProviders>
        <ThemeToggle />
        <HomePage />
      </AppProviders>,
    );

    const html = document.documentElement;
    const button = screen.getByRole("button", { name: "Toggle theme" });
    const initial = html.getAttribute("data-theme");

    await userEvent.click(button);

    expect(html.getAttribute("data-theme")).not.toBe(initial);
  });

  it("switches hero text when EN locale is selected", async () => {
    render(
      <AppProviders>
        <LocaleSwitcher />
        <Hero />
      </AppProviders>,
    );

    await userEvent.click(screen.getByRole("button", { name: "EN" }));

    expect(
      screen.getByRole("heading", { name: "Maccrey builds what does not exist yet" }),
    ).toBeInTheDocument();
  });
});
