import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = ["/", "/projects", "/skills", "/contact"];

test.describe("접근성 체크", () => {
  for (const route of pages) {
    test(`${route} 페이지에서 접근성 위반이 없어야 한다`, async ({ page }) => {
      await page.goto(route);
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
