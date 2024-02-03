import { test, expect } from "@playwright/test";

const PRODUCT_ID = "4b524181-6bfa-476d-a736-99bf08bdb2b7";

test.describe("Product Page", () => {
  test("should show product name in h1", async ({ page }) => {
    await page.goto(`/product/${PRODUCT_ID}`);

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
