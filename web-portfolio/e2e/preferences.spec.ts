import { test, expect } from "@playwright/test";

const enHeroTitle = "Maccrey builds what does not exist yet";

test.describe("환경 설정 UI", () => {
  test("테마 토글이 data-theme 값을 전환한다", async ({ page }) => {
    await page.goto("/");
    const themeButton = page.getByRole("button", { name: "Toggle theme" });
    const html = page.locator("html").first();
    const initial = await html.getAttribute("data-theme");

    await themeButton.click();

    await expect
      .poll(async () => html.getAttribute("data-theme"), { timeout: 7000 })
      .not.toBe(initial);
  });

  test("로케일 스위처로 영어 Hero 카피가 보인다", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "EN" }).click();
    await expect
      .poll(async () => {
        const text = await page.locator("h1").first().innerText();
        return text;
      }, { timeout: 7000 })
      .toBe(enHeroTitle);
  });
});
