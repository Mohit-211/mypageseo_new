# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> accessibility: axe-core scan on every page
- Location: tests/accessibility.spec.ts:9:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 13

- Array []
+ Array [
+   "/: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/about: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/services: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/software: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/industries: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/pricing: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/blog: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/contact: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/checkout: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/privacy-policy: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+   "/terms-conditions: accessibility scan failed — page.evaluate: Target page, context or browser has been closed",
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=f21e1]:
  - generic [ref=f21e2]:
    - banner [ref=f21e3]:
      - generic [ref=f21e4]:
        - link [ref=f21e5] [cursor=pointer]:
          - /url: /
          - img "MyPageSEO" [ref=f21e6]
        - navigation [ref=f21e7]:
          - link "Home" [ref=f21e8] [cursor=pointer]:
            - /url: /
          - link "About" [ref=f21e10] [cursor=pointer]:
            - /url: /about
          - link "Services" [ref=f21e12] [cursor=pointer]:
            - /url: /services
          - link "Software" [ref=f21e14] [cursor=pointer]:
            - /url: /software
          - link "Industries" [ref=f21e16] [cursor=pointer]:
            - /url: /industries
          - link "Pricing" [ref=f21e18] [cursor=pointer]:
            - /url: /pricing
          - link "Blog" [ref=f21e20] [cursor=pointer]:
            - /url: /blog
          - link "Contact Us" [ref=f21e22] [cursor=pointer]:
            - /url: /contact
        - link "Get Started" [ref=f21e25] [cursor=pointer]:
          - /url: /checkout
    - main [ref=f21e26]:
      - main [ref=f21e27]:
        - heading "Terms & Conditions" [level=1] [ref=f21e28]
        - paragraph [ref=f21e29]: "Last updated: July 28, 2026"
        - generic [ref=f21e30]:
          - generic [ref=f21e31]:
            - heading "1. Acceptance of Terms" [level=2] [ref=f21e32]
            - paragraph [ref=f21e33]: By accessing or using MyPageSEO's website, services, or software, you agree to be bound by these Terms & Conditions.
          - generic [ref=f21e34]:
            - heading "2. Services" [level=2] [ref=f21e35]
            - paragraph [ref=f21e36]: MyPageSEO provides Local SEO services and proprietary software tools. Features, pricing, and availability may change and are described on our Services and Pricing pages.
          - generic [ref=f21e37]:
            - heading "3. Payment & Billing" [level=2] [ref=f21e38]
            - paragraph [ref=f21e39]: Subscription fees are billed according to the plan selected at checkout. All fees are non-refundable except where required by law.
          - generic [ref=f21e40]:
            - heading "4. Acceptable Use" [level=2] [ref=f21e41]
            - paragraph [ref=f21e42]: You agree not to misuse our services, attempt unauthorized access to our systems, or use our platform for unlawful purposes.
          - generic [ref=f21e43]:
            - heading "5. Limitation of Liability" [level=2] [ref=f21e44]
            - paragraph [ref=f21e45]: MyPageSEO is not liable for indirect, incidental, or consequential damages arising from the use of our services, to the maximum extent permitted by law.
          - generic [ref=f21e46]:
            - heading "6. Changes to Terms" [level=2] [ref=f21e47]
            - paragraph [ref=f21e48]: We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the revised terms.
          - generic [ref=f21e49]:
            - heading "7. Contact Us" [level=2] [ref=f21e50]
            - paragraph [ref=f21e51]: Questions about these terms can be directed to us through our contact page.
    - contentinfo [ref=f21e52]:
      - generic [ref=f21e53]:
        - generic [ref=f21e54]:
          - img "MyPageSEO logo" [ref=f21e56]
          - paragraph [ref=f21e57]: The Local Growth ecosystem — expert Local SEO services and proprietary software for businesses across the United States and Canada.
        - generic [ref=f21e58]:
          - generic [ref=f21e59]: Explore
          - list [ref=f21e60]:
            - listitem [ref=f21e61]:
              - link "Services" [ref=f21e62] [cursor=pointer]:
                - /url: /services
            - listitem [ref=f21e63]:
              - link "Software" [ref=f21e64] [cursor=pointer]:
                - /url: /software
            - listitem [ref=f21e65]:
              - link "Industries" [ref=f21e66] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=f21e67]:
              - link "Pricing" [ref=f21e68] [cursor=pointer]:
                - /url: /pricing
        - generic [ref=f21e69]:
          - generic [ref=f21e70]: Company
          - list [ref=f21e71]:
            - listitem [ref=f21e72]:
              - link "About Us" [ref=f21e73] [cursor=pointer]:
                - /url: /about
            - listitem [ref=f21e74]:
              - link "Blog" [ref=f21e75] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=f21e76]:
              - link "Contact" [ref=f21e77] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=f21e78]:
              - link "Get Started" [ref=f21e79] [cursor=pointer]:
                - /url: /checkout
        - generic [ref=f21e80]:
          - generic [ref=f21e81]: Legal
          - list [ref=f21e82]:
            - listitem [ref=f21e83]:
              - link "Privacy Policy" [ref=f21e84] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=f21e85]:
              - link "Terms & Conditions" [ref=f21e86] [cursor=pointer]:
                - /url: /terms-conditions
      - generic [ref=f21e88]:
        - paragraph [ref=f21e89]: © 2026 MyPageSEO. All rights reserved.
        - paragraph [ref=f21e90]: Local Growth technology for US & Canada.
  - button "Open Next.js Dev Tools" [ref=f21e99] [cursor=pointer]
  - alert [ref=f21e103]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import AxeBuilder from "@axe-core/playwright";
  3  | import { crawlSite, guardPage } from "./utils/audit-helpers";
  4  | 
  5  | // Requires: npm install -D @axe-core/playwright
  6  | 
  7  | const MAX_PAGES = 60;
  8  | 
  9  | test("accessibility: axe-core scan on every page", async ({ page, context, baseURL }) => {
  10 |   test.setTimeout(5 * 60 * 1000);
  11 |   const origin = new URL(baseURL!).origin;
  12 |   guardPage(page, context);
  13 | 
  14 |   const pages = await crawlSite(page, origin, "/", MAX_PAGES);
  15 |   console.log(`Running accessibility scan across ${pages.length} pages`);
  16 | 
  17 |   const findings: string[] = [];
  18 | 
  19 |   for (const path of pages) {
  20 |     try {
  21 |       await page.goto(path, { waitUntil: "domcontentloaded", timeout: 15000 });
  22 |       await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  23 | 
  24 |       const results = await new AxeBuilder({ page })
  25 |         .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
  26 |         .analyze();
  27 | 
  28 |       for (const violation of results.violations) {
  29 |         findings.push(
  30 |           `${path}: [${violation.impact}] ${violation.id} — ${violation.help} (${violation.nodes.length} element(s))`
  31 |         );
  32 |       }
  33 |     } catch (e: any) {
  34 |       findings.push(`${path}: accessibility scan failed — ${e.message.split("\n")[0]}`);
  35 |     }
  36 |   }
  37 | 
  38 |   console.log("\n========== Accessibility Findings ==========");
  39 |   console.log(findings.length ? findings.join("\n") : "No accessibility violations detected 🎉");
> 40 |   expect.soft(findings).toEqual([]);
     |                         ^ Error: expect(received).toEqual(expected) // deep equality
  41 | });
  42 | 
```