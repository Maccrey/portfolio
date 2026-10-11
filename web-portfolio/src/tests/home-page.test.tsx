import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/(default)/page";
import { dictionaries } from "@/i18n/locales";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/providers/locale-provider", () => ({
  useLocale: () => ({
    dictionary: dictionaries.ko,
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
    expect(screen.getAllByText("Study Duck").length).toBeGreaterThan(0);
    expect(screen.getAllByText("점자 도서 작업 관리 대시보드").length).toBeGreaterThan(0);
  });
});
