import React from "react";
import { render, screen } from "@testing-library/react";
import SkillsPage from "@/app/skills/page";
import { dictionaries } from "@/i18n/locales";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/providers/locale-provider", () => ({
  useLocale: () => ({
    dictionary: dictionaries.ko,
  }),
}));

describe("SkillsPage", () => {
  it("renders skill categories", () => {
    render(<SkillsPage />);
    expect(screen.getByText("현재 배우는 기술")).toBeInTheDocument();
    expect(screen.getByText("강점 기술")).toBeInTheDocument();
    expect(screen.getByText("사용 가능 기술")).toBeInTheDocument();
  });

  it("shows a specific skill description", () => {
    render(<SkillsPage />);
    expect(screen.getByText("상태 관리, 모듈화, CI/CD까지 경험한 메인 모바일 스택")).toBeInTheDocument();
  });
});
