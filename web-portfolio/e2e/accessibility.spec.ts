import type { AxeResults } from "axe-core";
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = ["/", "/projects", "/skills", "/contact"];

function formatViolations(violations: AxeResults["violations"]) {
  return violations
    .map(({ id, impact, help, nodes }) => {
      const targets = nodes.map((node) => node.target.join(" ")).join("\n  - ");
      return `${id} (${impact ?? "no-impact"}) ${help}\n  - ${targets}`;
    })
    .join("\n\n");
}

test.describe("접근성 체크", () => {
  for (const route of pages) {
    test(`${route} 페이지에서 접근성 위반이 없어야 한다`, async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        .include(["main", "header", "footer"])
        .exclude(["#nextjs-portal", "nextjs-portal", "[data-nextjs-toast]", ".nextjs-toast-errors-parent", ".nextjs-toast"])
        .analyze();
      expect(accessibilityScanResults.violations, formatViolations(accessibilityScanResults.violations)).toEqual([]);
    });
  }
});
