import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { crawlSite, guardPage } from "./utils/audit-helpers";

// Requires: npm install -D @axe-core/playwright

const MAX_PAGES = 60;

test("accessibility: axe-core scan on every page", async ({ page, context, baseURL }) => {
  test.setTimeout(5 * 60 * 1000);
  const origin = new URL(baseURL!).origin;
  guardPage(page, context);

  const pages = await crawlSite(page, origin, "/", MAX_PAGES);
  console.log(`Running accessibility scan across ${pages.length} pages`);

  const findings: string[] = [];

  for (const path of pages) {
    try {
      await page.goto(path, { waitUntil: "domcontentloaded", timeout: 15000 });
      await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      for (const violation of results.violations) {
        findings.push(
          `${path}: [${violation.impact}] ${violation.id} — ${violation.help} (${violation.nodes.length} element(s))`
        );
      }
    } catch (e: any) {
      findings.push(`${path}: accessibility scan failed — ${e.message.split("\n")[0]}`);
    }
  }

  console.log("\n========== Accessibility Findings ==========");
  console.log(findings.length ? findings.join("\n") : "No accessibility violations detected 🎉");
  expect.soft(findings).toEqual([]);
});
