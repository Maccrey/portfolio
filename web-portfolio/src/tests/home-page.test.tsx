import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/(default)/page";
import { dictionaries } from "@/i18n/locales";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/providers/locale-provider", () => ({
  useLocale: () => ({
    dictionary: dictionaries.ko,
    locale: "ko",
  }),
}));

vi.mock("@/components/home/blog-section", () => ({
  BlogSection: () => <div data-testid="blog-section">Blog Section</div>,
}));

describe("HomePage", () => {
  it("renders hero copy and CTA", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: "아이디어를 실제 제품으로 완성하는 개발자, Maccrey" }),
    ).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: "만든 제품 살펴보기 →" });
    expect(cta).toHaveAttribute("href", "/projects");
  });

  it("lists featured projects", () => {
    render(<HomePage />);
    expect(screen.getAllByRole("link", { name: "모두의 박물관: 서비스 바로가기" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "KINORA: 서비스 바로가기" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Loglingo: 서비스 바로가기" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "모두의 박물관: 서비스 바로가기" })[0]).toHaveAttribute("href", "https://maccrey.com");
    expect(screen.getAllByRole("link", { name: "KINORA: 서비스 바로가기" })[0]).toHaveAttribute("href", "https://www.kinora.date");
    expect(screen.getAllByRole("link", { name: "Loglingo: 서비스 바로가기" })[0]).toHaveAttribute("href", "https://www.loglingo.com");
  });
});
