import { Page, BrowserContext, APIRequestContext } from "@playwright/test";

export type Findings = string[];

/**
 * Attach console/pageerror/response listeners scoped to whatever page we're
 * currently checking. Returns a cleanup function — always call it in a
 * `finally` block so listeners don't pile up across pages.
 */
export function attachListeners(page: Page, label: string, findings: Findings) {
  const onConsole = (msg: any) => {
    if (msg.type() === "error")
      findings.push(`[${label}] Console: ${msg.text()}`);
  };
  const onPageError = (err: Error) => {
    findings.push(`[${label}] JS Error: ${err.message.split("\n")[0]}`);
  };
  const onResponse = (res: any) => {
    if (res.status() >= 400)
      findings.push(`[${label}] ${res.status()} ${res.url()}`);
  };

  page.on("console", onConsole);
  page.on("pageerror", onPageError);
  page.on("response", onResponse);

  return () => {
    page.off("console", onConsole);
    page.off("pageerror", onPageError);
    page.off("response", onResponse);
  };
}

/** Close stray popups and auto-dismiss JS dialogs so tests never hang. */
export function guardPage(page: Page, context: BrowserContext) {
  context.on("page", (p) => {
    if (p !== page) p.close().catch(() => {});
  });
  page.on("dialog", (d) => d.dismiss().catch(() => {}));
}

export interface DiscoveredLinks {
  internal: string[];
  external: string[];
}

/** Pull every href off the current page and split into internal vs external. */
export async function discoverLinks(
  page: Page,
  origin: string,
  currentPath: string
): Promise<DiscoveredLinks> {
  const hrefs = await page.$$eval("a[href]", (as) =>
    as.map((a) => (a as HTMLAnchorElement).getAttribute("href")).filter(Boolean)
  );

  const internal = new Set<string>();
  const external = new Set<string>();

  for (const href of hrefs) {
    if (!href) continue;
    if (
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:") ||
      href.startsWith("#")
    ) {
      continue;
    }
    try {
      const abs = new URL(href, origin + currentPath);
      if (abs.origin === origin) {
        internal.add(abs.pathname + abs.search);
      } else {
        external.add(abs.href);
      }
    } catch {
      // malformed href, skip
    }
  }

  return { internal: [...internal], external: [...external] };
}

/** HEAD (falling back to GET) every external link so we catch dead ones without opening a browser tab for each. */
export async function checkExternalLinks(
  request: APIRequestContext,
  links: string[],
  label: string,
  findings: Findings
) {
  for (const link of links) {
    try {
      let res = await request.head(link, {
        timeout: 8000,
        failOnStatusCode: false,
      });
      if (res.status() === 405 || res.status() === 501) {
        res = await request.get(link, {
          timeout: 8000,
          failOnStatusCode: false,
        });
      }
      if (res.status() >= 400) {
        findings.push(`[${label}] External link ${res.status()}: ${link}`);
      }
    } catch (e: any) {
      findings.push(
        `[${label}] External link unreachable: ${link} (${
          e.message.split("\n")[0]
        })`
      );
    }
  }
}

/**
 * Click every visible button matching a locator, tolerating navigation,
 * detachment, or the page closing mid-loop. Restores the original URL
 * after any navigating click so the caller's context stays intact.
 */
export async function clickAllButtons(
  page: Page,
  buttonsSelector: string,
  label: string,
  findings: Findings,
  returnToPath?: string
) {
  const buttons = page.locator(buttonsSelector);
  const count = await buttons.count();

  for (let i = 0; i < count; i++) {
    if (page.isClosed()) {
      findings.push(`[${label}] Page closed unexpectedly before button ${i}`);
      break;
    }

    const button = buttons.nth(i);
    try {
      if (!(await button.isVisible({ timeout: 1000 }))) continue;
    } catch {
      continue;
    }

    const urlBefore = page.url();
    try {
      await button.click({ timeout: 2000, force: true });
      await page.waitForTimeout(250);

      if (!page.isClosed() && page.url() !== urlBefore) {
        // Navigating is expected for CTAs and nav links — log it, don't fail the test on it.
        // Real problems (404s, JS errors, console errors) are still caught by the listeners.
        console.log(`  [${label}] Button ${i} navigated to ${page.url()}`);
        if (returnToPath) {
          const back = await page
            .goto(returnToPath, {
              waitUntil: "domcontentloaded",
              timeout: 15000,
            })
            .catch((e) => e);
          if (back instanceof Error) {
            findings.push(
              `[${label}] Couldn't return to ${returnToPath} after button ${i}: ${
                back.message.split("\n")[0]
              }`
            );
          }
        }
      }
    } catch (e: any) {
      findings.push(
        `[${label}] Couldn't click button ${i}: ${e.message.split("\n")[0]}`
      );
    }

    if (page.isClosed()) {
      findings.push(`[${label}] Page closed after clicking button ${i}`);
      break;
    }
  }
}

/** Breadth-first crawl of internal links starting from a path, capped at maxPages. */
export async function crawlSite(
  page: Page,
  origin: string,
  startPath: string,
  maxPages: number
): Promise<string[]> {
  const visited = new Set<string>();
  const toVisit = [startPath];

  while (toVisit.length > 0 && visited.size < maxPages) {
    const path = toVisit.shift()!;
    if (visited.has(path)) continue;
    visited.add(path);

    try {
      await page.goto(path, { waitUntil: "domcontentloaded", timeout: 15000 });
      await page
        .waitForLoadState("networkidle", { timeout: 8000 })
        .catch(() => {});
      const { internal } = await discoverLinks(page, origin, path);
      for (const link of internal) {
        if (!visited.has(link) && !toVisit.includes(link)) toVisit.push(link);
      }
    } catch {
      // page failed to load — leave it out of the crawl result, other specs will catch loading errors
    }
  }

  return [...visited];
}
