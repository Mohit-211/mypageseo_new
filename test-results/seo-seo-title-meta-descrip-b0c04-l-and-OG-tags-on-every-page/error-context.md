# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> seo: title, meta description, canonical, and OG tags on every page
- Location: tests/seo.spec.ts:6:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 22

- Array []
+ Array [
+   "/: title is 67 chars (recommended <= 60): \"Local SEO Experts for Businesses Across ...\"",
+   "/: meta description is 273 chars (recommended <= 160)",
+   "/about: title is 78 chars (recommended <= 60): \"About MyPageSEO — Local SEO Specialists ...\"",
+   "/about: meta description is 188 chars (recommended <= 160)",
+   "/about: missing og:image",
+   "/services: missing og:image",
+   "/services: missing og:url",
+   "/software: title is 72 chars (recommended <= 60): \"MyPageSEO Software — Local SEO Reporting...\"",
+   "/software: missing og:image",
+   "/software: missing og:url",
+   "/industries: title is 67 chars (recommended <= 60): \"Industries We Serve — Local SEO by Indus...\"",
+   "/industries: missing og:image",
+   "/industries: missing og:url",
+   "/pricing: missing og:image",
+   "/pricing: missing og:url",
+   "/blog: title is 76 chars (recommended <= 60): \"Insights — Local SEO, Google Business Pr...\"",
+   "/blog: missing og:image",
+   "/blog: missing og:url",
+   "/contact: missing og:image",
+   "/contact: missing og:url",
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
  2  | import { crawlSite, guardPage } from "./utils/audit-helpers";
  3  | 
  4  | const MAX_PAGES = 60;
  5  | 
  6  | test("seo: title, meta description, canonical, and OG tags on every page", async ({ page, context, baseURL }) => {
  7  |   test.setTimeout(5 * 60 * 1000);
  8  |   const origin = new URL(baseURL!).origin;
  9  |   guardPage(page, context);
  10 | 
  11 |   const pages = await crawlSite(page, origin, "/", MAX_PAGES);
  12 |   console.log(`Auditing SEO tags across ${pages.length} pages`);
  13 | 
  14 |   const findings: string[] = [];
  15 | 
  16 |   for (const path of pages) {
  17 |     try {
  18 |       await page.goto(path, { waitUntil: "domcontentloaded", timeout: 15000 });
  19 | 
  20 |       const title = await page.title();
  21 |       if (!title || title.trim().length === 0) {
  22 |         findings.push(`${path}: missing <title>`);
  23 |       } else if (title.length > 60) {
  24 |         findings.push(`${path}: title is ${title.length} chars (recommended <= 60): "${title.slice(0, 40)}..."`);
  25 |       }
  26 | 
  27 |       const metaDescription = await page
  28 |         .locator('meta[name="description"]')
  29 |         .getAttribute("content")
  30 |         .catch(() => null);
  31 |       if (!metaDescription || metaDescription.trim().length === 0) {
  32 |         findings.push(`${path}: missing meta description`);
  33 |       } else if (metaDescription.length > 160) {
  34 |         findings.push(`${path}: meta description is ${metaDescription.length} chars (recommended <= 160)`);
  35 |       }
  36 | 
  37 |       const canonical = await page
  38 |         .locator('link[rel="canonical"]')
  39 |         .getAttribute("href")
  40 |         .catch(() => null);
  41 |       if (!canonical) {
  42 |         findings.push(`${path}: missing canonical link`);
  43 |       }
  44 | 
  45 |       const ogTags = ["og:title", "og:description", "og:image", "og:url"];
  46 |       for (const tag of ogTags) {
  47 |         const content = await page
  48 |           .locator(`meta[property="${tag}"]`)
  49 |           .getAttribute("content")
  50 |           .catch(() => null);
  51 |         if (!content) findings.push(`${path}: missing ${tag}`);
  52 |       }
  53 | 
  54 |       const h1Count = await page.locator("h1").count();
  55 |       if (h1Count === 0) findings.push(`${path}: no <h1> found`);
  56 |       if (h1Count > 1) findings.push(`${path}: ${h1Count} <h1> tags found (should be exactly 1)`);
  57 | 
  58 |       const imgsWithoutAlt = await page.locator("img:not([alt])").count();
  59 |       if (imgsWithoutAlt > 0) findings.push(`${path}: ${imgsWithoutAlt} <img> without alt text`);
  60 |     } catch (e: any) {
  61 |       findings.push(`${path}: SEO check failed to load — ${e.message.split("\n")[0]}`);
  62 |     }
  63 |   }
  64 | 
  65 |   console.log("\n========== SEO Findings ==========");
  66 |   console.log(findings.length ? findings.join("\n") : "No SEO issues detected 🎉");
> 67 |   expect.soft(findings).toEqual([]);
     |                         ^ Error: expect(received).toEqual(expected) // deep equality
  68 | });
  69 | 
```