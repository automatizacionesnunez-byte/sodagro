import { test, expect } from "@playwright/test";

test("corporate expone navegación y contacto honesto", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator('a[href*="wa.me"]').first()).toBeVisible();
  await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
});
