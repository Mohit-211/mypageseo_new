import { test, expect } from "@playwright/test";
import { attachListeners, guardPage, discoverLinks, checkExternalLinks } from "./utils/audit-helpers";

test("footer: every link resolves and internal targets render cleanly", async ({ page, context, baseURL, request }) => {
  const origin = new URL(baseURL!).origin;
  guardPage(page, context);
  const findings: string[] = [];

  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});

  const footer = page.locator("footer");
  await expect(footer, "No <footer> element found on homepage — update the selector in footer.spec.ts if your footer uses a different tag/class").toBeVisible();

  const hrefs = await footer.locator("a[href]").evaluateAll((as) =>
    as.map((a) => (a as HTMLAnchorElement).getAttribute("href")).filter(Boolean)
  );
  console.log(`Found ${hrefs.length} footer links`);
  expect(hrefs.length, "Footer has zero links — check the selector").toBeGreaterThan(0);

  const internal: string[] = [];
  const external: string[] = [];
  for (const href of hrefs) {
    if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) continue;
    try {
      const abs = new URL(href, origin);
      if (abs.origin === origin) internal.push(abs.pathname + abs.search);
      else external.push(abs.href);
    } catch {
      findings.push(`Malformed footer href: ${href}`);
    }
  }

  await checkExternalLinks(request, [...new Set(external)], "footer", findings);

  for (const path of new Set(internal)) {
    const detach = attachListeners(page, `footer -> ${path}`, findings);
    try {
      await page.goto(path, { waitUntil: "domcontentloaded", timeout: 15000 });
      await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
    } catch (e: any) {
      findings.push(`Footer link ${path} failed to load: ${e.message.split("\n")[0]}`);
    } finally {
      detach();
    }
  }

  console.log(findings.length ? findings.join("\n") : "Footer OK 🎉");
  expect.soft(findings).toEqual([]);
});
