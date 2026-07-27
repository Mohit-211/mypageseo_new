import { test, expect } from "@playwright/test";
import { attachListeners, guardPage, discoverLinks } from "./utils/audit-helpers";

test("blog: listing loads and every article opens cleanly", async ({ page, context, baseURL }) => {
  test.setTimeout(3 * 60 * 1000);
  const origin = new URL(baseURL!).origin;
  guardPage(page, context);
  const findings: string[] = [];

  const detachList = attachListeners(page, "/blog listing", findings);
  await page.goto("/blog", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  detachList();

  const { internal } = await discoverLinks(page, origin, "/blog");
  // Heuristic: article links usually live under /blog/... — adjust the prefix if your routing differs.
  const articleLinks = internal.filter((l) => l.startsWith("/blog/") && l !== "/blog");
  console.log(`Found ${articleLinks.length} article links on /blog`);

  if (articleLinks.length === 0) {
    findings.push("No article links found under /blog/* — check that posts are rendering, or update the URL prefix in blog.spec.ts");
  }

  for (const articlePath of articleLinks) {
    const detach = attachListeners(page, articlePath, findings);
    try {
      await page.goto(articlePath, { waitUntil: "domcontentloaded", timeout: 15000 });
      await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});

      const title = await page.locator("h1").first().textContent().catch(() => null);
      if (!title || !title.trim()) {
        findings.push(`${articlePath}: no <h1> title found`);
      }
    } catch (e: any) {
      findings.push(`${articlePath} failed to load: ${e.message.split("\n")[0]}`);
    } finally {
      detach();
    }
  }

  // Check pagination if present
  const nextPageBtn = page.locator('a:has-text("Next"), button:has-text("Next")').first();
  if (await nextPageBtn.count().catch(() => 0)) {
    console.log("Pagination control found on blog — consider extending this test to walk all pages");
  }

  console.log(findings.length ? findings.join("\n") : "Blog OK 🎉");
  expect.soft(findings).toEqual([]);
});
