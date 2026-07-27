import { test, expect } from "@playwright/test";
import { crawlSite, guardPage } from "./utils/audit-helpers";

const MAX_PAGES = 60;

test("seo: title, meta description, canonical, and OG tags on every page", async ({ page, context, baseURL }) => {
  test.setTimeout(5 * 60 * 1000);
  const origin = new URL(baseURL!).origin;
  guardPage(page, context);

  const pages = await crawlSite(page, origin, "/", MAX_PAGES);
  console.log(`Auditing SEO tags across ${pages.length} pages`);

  const findings: string[] = [];

  for (const path of pages) {
    try {
      await page.goto(path, { waitUntil: "domcontentloaded", timeout: 15000 });

      const title = await page.title();
      if (!title || title.trim().length === 0) {
        findings.push(`${path}: missing <title>`);
      } else if (title.length > 60) {
        findings.push(`${path}: title is ${title.length} chars (recommended <= 60): "${title.slice(0, 40)}..."`);
      }

      const metaDescription = await page
        .locator('meta[name="description"]')
        .getAttribute("content")
        .catch(() => null);
      if (!metaDescription || metaDescription.trim().length === 0) {
        findings.push(`${path}: missing meta description`);
      } else if (metaDescription.length > 160) {
        findings.push(`${path}: meta description is ${metaDescription.length} chars (recommended <= 160)`);
      }

      const canonical = await page
        .locator('link[rel="canonical"]')
        .getAttribute("href")
        .catch(() => null);
      if (!canonical) {
        findings.push(`${path}: missing canonical link`);
      }

      const ogTags = ["og:title", "og:description", "og:image", "og:url"];
      for (const tag of ogTags) {
        const content = await page
          .locator(`meta[property="${tag}"]`)
          .getAttribute("content")
          .catch(() => null);
        if (!content) findings.push(`${path}: missing ${tag}`);
      }

      const h1Count = await page.locator("h1").count();
      if (h1Count === 0) findings.push(`${path}: no <h1> found`);
      if (h1Count > 1) findings.push(`${path}: ${h1Count} <h1> tags found (should be exactly 1)`);

      const imgsWithoutAlt = await page.locator("img:not([alt])").count();
      if (imgsWithoutAlt > 0) findings.push(`${path}: ${imgsWithoutAlt} <img> without alt text`);
    } catch (e: any) {
      findings.push(`${path}: SEO check failed to load — ${e.message.split("\n")[0]}`);
    }
  }

  console.log("\n========== SEO Findings ==========");
  console.log(findings.length ? findings.join("\n") : "No SEO issues detected 🎉");
  expect.soft(findings).toEqual([]);
});
