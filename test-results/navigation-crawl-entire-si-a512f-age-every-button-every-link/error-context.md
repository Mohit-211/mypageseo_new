# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> crawl entire site: every page, every button, every link
- Location: tests/navigation.spec.ts:12:5

# Error details

```
Error: Found 11 issue(s) across 11 pages:
[/services] Couldn't click button 1: locator.click: Test ended.
[/services] Page closed after clicking button 1
[/services] Failed to load: locator.count: Target page, context or browser has been closed
[/software] Failed to load: page.goto: Target page, context or browser has been closed
[/industries] Failed to load: page.goto: Target page, context or browser has been closed
[/pricing] Failed to load: page.goto: Target page, context or browser has been closed
[/blog] Failed to load: page.goto: Target page, context or browser has been closed
[/contact] Failed to load: page.goto: Target page, context or browser has been closed
[/checkout] Failed to load: page.goto: Target page, context or browser has been closed
[/privacy-policy] Failed to load: page.goto: Target page, context or browser has been closed
[/terms-conditions] Failed to load: page.goto: Target page, context or browser has been closed

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 13

- Array []
+ Array [
+   "[/services] Couldn't click button 1: locator.click: Test ended.",
+   "[/services] Page closed after clicking button 1",
+   "[/services] Failed to load: locator.count: Target page, context or browser has been closed",
+   "[/software] Failed to load: page.goto: Target page, context or browser has been closed",
+   "[/industries] Failed to load: page.goto: Target page, context or browser has been closed",
+   "[/pricing] Failed to load: page.goto: Target page, context or browser has been closed",
+   "[/blog] Failed to load: page.goto: Target page, context or browser has been closed",
+   "[/contact] Failed to load: page.goto: Target page, context or browser has been closed",
+   "[/checkout] Failed to load: page.goto: Target page, context or browser has been closed",
+   "[/privacy-policy] Failed to load: page.goto: Target page, context or browser has been closed",
+   "[/terms-conditions] Failed to load: page.goto: Target page, context or browser has been closed",
+ ]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import {
  3  |   attachListeners,
  4  |   guardPage,
  5  |   discoverLinks,
  6  |   checkExternalLinks,
  7  |   clickAllButtons,
  8  | } from "./utils/audit-helpers";
  9  | 
  10 | const MAX_PAGES = 60;
  11 | 
  12 | test("crawl entire site: every page, every button, every link", async ({ page, context, baseURL, request }) => {
  13 |   test.setTimeout(10 * 60 * 1000);
  14 | 
  15 |   const origin = new URL(baseURL!).origin;
  16 |   guardPage(page, context);
  17 | 
  18 |   const findings: string[] = [];
  19 |   const visited = new Set<string>();
  20 |   const toVisit: string[] = ["/"];
  21 |   const checkedExternal = new Set<string>();
  22 | 
  23 |   while (toVisit.length > 0 && visited.size < MAX_PAGES) {
  24 |     const path = toVisit.shift()!;
  25 |     if (visited.has(path)) continue;
  26 |     visited.add(path);
  27 | 
  28 |     const detach = attachListeners(page, path, findings);
  29 |     try {
  30 |       console.log(`\nChecking ${path}`);
  31 |       await page.goto(path, { waitUntil: "domcontentloaded", timeout: 15000 });
  32 |       await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  33 | 
  34 |       // Discover links before clicking anything (clicking can navigate us away)
  35 |       const { internal, external } = await discoverLinks(page, origin, path);
  36 |       for (const link of internal) {
  37 |         if (!visited.has(link) && !toVisit.includes(link)) toVisit.push(link);
  38 |       }
  39 |       const newExternal = external.filter((l) => !checkedExternal.has(l));
  40 |       newExternal.forEach((l) => checkedExternal.add(l));
  41 |       if (newExternal.length) {
  42 |         await checkExternalLinks(request, newExternal, path, findings);
  43 |       }
  44 | 
  45 |       // Click every nav/header link and every button on the page
  46 |       await clickAllButtons(page, "nav a, header a", path, findings, path);
  47 |       await clickAllButtons(page, "button", path, findings, path);
  48 | 
  49 |       console.log(`  ${internal.length} internal links, ${external.length} external links found`);
  50 |     } catch (e: any) {
  51 |       findings.push(`[${path}] Failed to load: ${e.message.split("\n")[0]}`);
  52 |     } finally {
  53 |       detach();
  54 |     }
  55 |   }
  56 | 
  57 |   console.log(`\n========== Crawled ${visited.size} pages ==========`);
  58 |   console.log([...visited].join("\n"));
  59 |   console.log("\n========== Findings ==========");
  60 |   console.log(findings.length ? findings.join("\n") : "No problems detected 🎉");
  61 | 
> 62 |   expect.soft(findings, `Found ${findings.length} issue(s) across ${visited.size} pages:\n${findings.join("\n")}`).toEqual([]);
     |                                                                                                                    ^ Error: Found 11 issue(s) across 11 pages:
  63 | });
  64 | 
```