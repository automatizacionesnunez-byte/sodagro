import { test, expect } from "@playwright/test";

test("corporate expone navegación y contacto honesto", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator('a[href="/contacto"]').first()).toHaveAttribute("href", "/contacto");
  await expect(page.getByRole("note")).toContainText("No se enviarán datos");
});
