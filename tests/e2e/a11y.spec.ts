import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("corporate no tiene violaciones axe críticas", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations.filter((item) => item.impact === "critical")).toEqual([]);
});
