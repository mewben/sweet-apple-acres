import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should show product list", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("list")).toBeVisible();
  });
});
