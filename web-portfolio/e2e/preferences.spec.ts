import { test, expect } from "@playwright/test";

const enHeroTitle = "Maccrey builds what does not exist yet";

test.describe("환경 설정 UI", () => {
  test("테마 토글이 data-theme 값을 전환한다", async ({ page }) => {
    await page.goto("/");
    const themeButton = page.getByRole("button", { name: "Toggle theme" });
    const before = await page.evaluate(() => document.documentElement.dataset.theme || "dark");

    await themeButton.click();

    await expect.poll(async () => {
      const next = await page.evaluate(() => document.documentElement.dataset.theme || "dark");
      return next;
    }).not.toBe(before);
  });

  test("로케일 스위처로 영어 Hero 카피가 보인다", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "EN" }).click();
    await expect(page.getByRole("heading", { name: enHeroTitle })).toBeVisible();
  });
});
