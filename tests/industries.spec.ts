import { test, expect } from "@playwright/test";
import { attachListeners, guardPage } from "./utils/audit-helpers";

// NOTE: adjust this selector to match your actual card markup (class name, data-testid, etc.)
const CARD_SELECTOR = '[data-testid="industry-card"], .industry-card, a[href^="/industries/"]';

test("industries: every card opens its detail page without error", async ({ page, context }) => {
  test.setTimeout(2 * 60 * 1000);
  guardPage(page, context);
  const findings: string[] = [];

  const detachList = attachListeners(page, "/industries listing", findings);
  await page.goto("/industries", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  detachList();

  const cards = page.locator(CARD_SELECTOR);
  const count = await cards.count();
  console.log(`Found ${count} industry cards`);

  if (count === 0) {
    findings.push("No industry cards matched the selector — update CARD_SELECTOR in industries.spec.ts");
  }

  const hrefs: string[] = [];
  for (let i = 0; i < count; i++) {
    const card = cards.nth(i);
    const href = await card.getAttribute("href").catch(() => null);
    if (href) hrefs.push(href);
  }

  for (const href of [...new Set(hrefs)]) {
    const detach = attachListeners(page, href, findings);
    try {
      await page.goto(href, { waitUntil: "domcontentloaded", timeout: 15000 });
      await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
      const heading = await page.locator("h1").first().textContent().catch(() => null);
      if (!heading || !heading.trim()) {
        findings.push(`${href}: no <h1> found on industry detail page`);
      }
    } catch (e: any) {
      findings.push(`${href} failed to load: ${e.message.split("\n")[0]}`);
    } finally {
      detach();
    }
  }

  console.log(findings.length ? findings.join("\n") : "Industries OK 🎉");
  expect.soft(findings).toEqual([]);
});
