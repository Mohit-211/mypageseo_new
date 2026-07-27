import { test, expect } from "@playwright/test";
import {
  attachListeners,
  guardPage,
  discoverLinks,
  checkExternalLinks,
  clickAllButtons,
} from "./utils/audit-helpers";

const MAX_PAGES = 60;

test("crawl entire site: every page, every button, every link", async ({ page, context, baseURL, request }) => {
  test.setTimeout(10 * 60 * 1000);

  const origin = new URL(baseURL!).origin;
  guardPage(page, context);

  const findings: string[] = [];
  const visited = new Set<string>();
  const toVisit: string[] = ["/"];
  const checkedExternal = new Set<string>();

  while (toVisit.length > 0 && visited.size < MAX_PAGES) {
    const path = toVisit.shift()!;
    if (visited.has(path)) continue;
    visited.add(path);

    const detach = attachListeners(page, path, findings);
    try {
      console.log(`\nChecking ${path}`);
      await page.goto(path, { waitUntil: "domcontentloaded", timeout: 15000 });
      await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});

      // Discover links before clicking anything (clicking can navigate us away)
      const { internal, external } = await discoverLinks(page, origin, path);
      for (const link of internal) {
        if (!visited.has(link) && !toVisit.includes(link)) toVisit.push(link);
      }
      const newExternal = external.filter((l) => !checkedExternal.has(l));
      newExternal.forEach((l) => checkedExternal.add(l));
      if (newExternal.length) {
        await checkExternalLinks(request, newExternal, path, findings);
      }

      // Click every nav/header link and every button on the page
      await clickAllButtons(page, "nav a, header a", path, findings, path);
      await clickAllButtons(page, "button", path, findings, path);

      console.log(`  ${internal.length} internal links, ${external.length} external links found`);
    } catch (e: any) {
      findings.push(`[${path}] Failed to load: ${e.message.split("\n")[0]}`);
    } finally {
      detach();
    }
  }

  console.log(`\n========== Crawled ${visited.size} pages ==========`);
  console.log([...visited].join("\n"));
  console.log("\n========== Findings ==========");
  console.log(findings.length ? findings.join("\n") : "No problems detected 🎉");

  expect.soft(findings, `Found ${findings.length} issue(s) across ${visited.size} pages:\n${findings.join("\n")}`).toEqual([]);
});
