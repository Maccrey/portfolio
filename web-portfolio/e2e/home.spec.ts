import { test, expect } from "@playwright/test";

const heroTitle = "아이디어를 실제 제품으로 완성하는 개발자, Maccrey";

test.describe("Maccrey portfolio", () => {
  test("홈 히어로, 대표 프로젝트, 네비게이션이 렌더링된다", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: heroTitle })).toBeVisible();
    await expect(page.getByRole("link", { name: "만든 제품 살펴보기 →" })).toBeVisible();

    const featuredCards = page.locator("section:has-text('대표 프로젝트') ul > li");
    await expect(featuredCards).toHaveCount(3);

    const nav = page.getByRole("navigation");
    await expect(nav.getByRole("link", { name: "Projects" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Skills" })).toBeVisible();
  });

  test("Projects/Contact 페이지에서 핵심 섹션을 확인할 수 있다", async ({ page }) => {
    await page.goto("/projects");
    const projectCards = page.locator("article:has-text('Study Duck')");
    await expect(projectCards.nth(0)).toBeVisible();

    await page
      .locator("article")
      .filter({ hasText: "Study Duck" })
      .getByRole("link")
      .first()
      .click();
    await expect(page.getByRole("heading", { name: "Study Duck" })).toBeVisible();

    await page.goto("/contact");
    await expect(page.getByRole("heading", { name: "연락하기" })).toBeVisible();
    await expect(page.getByRole("link", { name: "이메일 보내기" })).toHaveAttribute("href", /^mailto:/);
  });
});
