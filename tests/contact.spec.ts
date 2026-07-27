import { test, expect } from "@playwright/test";
import { attachListeners, guardPage } from "./utils/audit-helpers";

// NOTE: adjust these selectors to match your actual form field names/ids.
const SELECTORS = {
  form: "form",
  name: 'input[name="name"], #name',
  email: 'input[name="email"], #email',
  message: 'textarea[name="message"], #message',
  submit: 'button[type="submit"], input[type="submit"]',
};

test.describe("contact page", () => {
  test.beforeEach(async ({ page, context }) => {
    guardPage(page, context);
    await page.goto("/contact", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  });

  test("form is present with expected fields", async ({ page }) => {
    await expect(page.locator(SELECTORS.form).first()).toBeVisible();
    await expect(page.locator(SELECTORS.email).first()).toBeVisible();
  });

  test("rejects empty submission with validation, not a crash", async ({ page, context }) => {
    const findings: string[] = [];
    const detach = attachListeners(page, "/contact empty submit", findings);

    await page.locator(SELECTORS.submit).first().click({ force: true });
    await page.waitForTimeout(500);

    const stillOnContact = page.url().includes("/contact");
    expect(stillOnContact, "Empty submit should not navigate away from /contact").toBeTruthy();

    detach();
    expect.soft(findings).toEqual([]);
  });

  test("rejects invalid email format", async ({ page }) => {
    const emailField = page.locator(SELECTORS.email).first();
    if (await emailField.count()) {
      await emailField.fill("not-an-email");
      await page.locator(SELECTORS.submit).first().click({ force: true });
      await page.waitForTimeout(500);

      // Prefer native/ARIA validation signal; fall back to "did it actually navigate/succeed"
      const validationMessage = await emailField.evaluate((el: any) => el.validationMessage || "");
      const stillOnContact = page.url().includes("/contact");
      expect(
        validationMessage.length > 0 || stillOnContact,
        "Invalid email was accepted without any validation feedback"
      ).toBeTruthy();
    }
  });

  test("accepts a valid submission end-to-end", async ({ page }) => {
    const findings: string[] = [];
    const detach = attachListeners(page, "/contact valid submit", findings);

    if (await page.locator(SELECTORS.name).count()) {
      await page.locator(SELECTORS.name).first().fill("Playwright Test");
    }
    await page.locator(SELECTORS.email).first().fill("playwright-test@example.com");
    if (await page.locator(SELECTORS.message).count()) {
      await page.locator(SELECTORS.message).first().fill("Automated test submission — please ignore.");
    }

    await page.locator(SELECTORS.submit).first().click({ force: true });
    await page.waitForTimeout(1000);

    // Look for a success indicator — adjust this to match your actual confirmation UI/copy.
    const successVisible = await page
      .getByText(/thank you|message sent|we.?ll be in touch|success/i)
      .first()
      .isVisible()
      .catch(() => false);

    if (!successVisible) {
      findings.push("No success confirmation detected after valid submit — verify manually, selector may need updating");
    }

    detach();
    console.log(findings.length ? findings.join("\n") : "Contact form OK 🎉");
    expect.soft(findings).toEqual([]);
  });
});
