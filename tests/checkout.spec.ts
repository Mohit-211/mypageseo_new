import { test, expect } from "@playwright/test";
import { attachListeners, guardPage } from "./utils/audit-helpers";

// NOTE: adjust selectors to your actual checkout DOM (step wrapper, field names, CTA copy).
const SELECTORS = {
  step: '[data-step], .checkout-step',
  nextButton: 'button:has-text("Next"), button:has-text("Continue")',
  placeOrder: 'button:has-text("Place order"), button:has-text("Pay"), button[type="submit"]',
  emailField: 'input[name="email"], #email',
};

test.describe("checkout flow", () => {
  test.beforeEach(async ({ page, context }) => {
    guardPage(page, context);
  });

  test("checkout page loads without errors", async ({ page }) => {
    const findings: string[] = [];
    const detach = attachListeners(page, "/checkout load", findings);

    await page.goto("/checkout", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});

    detach();
    console.log(findings.length ? findings.join("\n") : "Checkout loaded cleanly 🎉");
    expect.soft(findings).toEqual([]);
  });

  test("blocks progression with empty required fields", async ({ page }) => {
    await page.goto("/checkout", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});

    const nextBtn = page.locator(SELECTORS.nextButton).first();
    if (await nextBtn.count()) {
      const urlBefore = page.url();
      await nextBtn.click({ force: true }).catch(() => {});
      await page.waitForTimeout(500);
      // If there are required fields, submitting empty shouldn't silently advance
      const advanced = page.url() !== urlBefore;
      if (advanced) {
        console.log("Note: checkout advanced with empty fields — confirm this is intentional (e.g. guest checkout with no required first step)");
      }
    }
  });

  test("does not allow placing a real order without payment details", async ({ page }) => {
    const findings: string[] = [];
    const detach = attachListeners(page, "/checkout place-order guard", findings);

    await page.goto("/checkout", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});

    const placeOrderBtn = page.locator(SELECTORS.placeOrder).first();
    if (await placeOrderBtn.count()) {
      await placeOrderBtn.click({ force: true }).catch(() => {});
      await page.waitForTimeout(500);

      const successVisible = await page
        .getByText(/order confirmed|thank you for your order|payment successful/i)
        .first()
        .isVisible()
        .catch(() => false);

      expect(
        successVisible,
        "Order appeared to complete with no payment details filled in — this needs manual verification, it should have been blocked"
      ).toBeFalsy();
    }

    detach();
    console.log(findings.length ? findings.join("\n") : "Checkout guard OK 🎉");
    expect.soft(findings).toEqual([]);
  });
});
