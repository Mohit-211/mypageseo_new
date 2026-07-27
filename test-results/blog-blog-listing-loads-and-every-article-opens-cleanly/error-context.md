# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blog.spec.ts >> blog: listing loads and every article opens cleanly
- Location: tests/blog.spec.ts:4:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- Array []
+ Array [
+   "No article links found under /blog/* — check that posts are rendering, or update the URL prefix in blog.spec.ts",
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - link [ref=e5] [cursor=pointer]:
          - /url: /
          - img "MyPageSEO" [ref=e6]
        - navigation [ref=e7]:
          - link "Home" [ref=e8] [cursor=pointer]:
            - /url: /
          - link "About" [ref=e10] [cursor=pointer]:
            - /url: /about
          - link "Services" [ref=e12] [cursor=pointer]:
            - /url: /services
          - link "Software" [ref=e14] [cursor=pointer]:
            - /url: /software
          - link "Industries" [ref=e16] [cursor=pointer]:
            - /url: /industries
          - link "Pricing" [ref=e18] [cursor=pointer]:
            - /url: /pricing
          - link "Blog" [ref=e20] [cursor=pointer]:
            - /url: /blog
          - link "Contact Us" [ref=e22] [cursor=pointer]:
            - /url: /contact
        - link "Get Started" [ref=e25] [cursor=pointer]:
          - /url: /checkout
    - main [ref=e26]:
      - generic [ref=e27]:
        - generic [ref=e31]:
          - generic [ref=e32]: MyPageSEO Insights
          - heading "Insights for businesses that want to win local search." [level=1] [ref=e35]
          - paragraph [ref=e36]: Practical Local SEO knowledge, Google Business Profile strategies, software updates, case studies, industry news, and actionable guides — written for business owners, marketers, and agencies across the U.S. and Canada.
          - textbox "Search articles by title or keyword…" [ref=e41]
        - generic [ref=e44]:
          - button "All" [ref=e45]
          - button "Local SEO" [ref=e46]
          - button "Google Business Profile" [ref=e47]
          - button "Citations" [ref=e48]
          - button "Reviews & Reputation" [ref=e49]
          - button "Local Rankings" [ref=e50]
          - button "Marketing Strategy" [ref=e51]
          - button "Case Studies" [ref=e52]
          - button "Software Updates" [ref=e53]
          - button "Industry News" [ref=e54]
          - button "Guides" [ref=e55]
        - generic [ref=e57]:
          - generic [ref=e58]: Featured
          - article [ref=e63]:
            - generic [ref=e108]:
              - generic [ref=e109]:
                - generic [ref=e110]: Local SEO
                - generic [ref=e111]: Jul 12, 2026
                - generic [ref=e114]: 12 min read
              - 'heading "The 2026 Local SEO Playbook: What''s Working in Google Maps Right Now" [level=2] [ref=e118]'
              - paragraph [ref=e119]: A field-tested breakdown of the ranking signals, GBP tactics, and reporting habits that separate top-performing local businesses from the rest heading into 2026.
              - generic [ref=e120]:
                - generic [ref=e121]:
                  - generic [ref=e122]: PR
                  - generic [ref=e123]:
                    - generic [ref=e124]: Priya Ramesh
                    - generic [ref=e128]: Head of Local Strategy
                - button "Read Article" [ref=e129]
        - generic [ref=e133]:
          - generic [ref=e134]:
            - generic [ref=e135]:
              - generic [ref=e136]: Latest articles
              - heading "Fresh from the team" [level=2] [ref=e140]
            - generic [ref=e141]: Showing 9 of 9
          - generic [ref=e142]:
            - article [ref=e143]:
              - img [ref=e146]:
                - generic [ref=e150]: B
              - generic [ref=e162]:
                - generic [ref=e163]:
                  - generic [ref=e164]: Google Business Profile
                  - generic [ref=e165]: 8 min
                - heading "The 2026 Google Business Profile Checklist" [level=3] [ref=e169]
                - paragraph [ref=e170]: Every field, category, and post type that actually influences local rankings — with real examples.
                - generic [ref=e172]:
                  - generic [ref=e173]: MC
                  - generic [ref=e174]:
                    - generic [ref=e175]: Marcus Chen
                    - generic [ref=e176]: Jul 08, 2026
            - article [ref=e179]:
              - generic [ref=e191]:
                - generic [ref=e192]:
                  - generic [ref=e193]: Local Rankings
                  - generic [ref=e194]: 6 min
                - 'heading "Geo-Grid Ranking vs. Average Rank: Why It Matters" [level=3] [ref=e198]'
                - paragraph [ref=e199]: Why one number hides the truth about how nearby customers actually see your business on Google Maps.
                - generic [ref=e201]:
                  - generic [ref=e202]: PR
                  - generic [ref=e203]:
                    - generic [ref=e204]: Priya Ramesh
                    - generic [ref=e205]: Jul 04, 2026
            - article [ref=e208]:
              - generic [ref=e243]:
                - generic [ref=e244]:
                  - generic [ref=e245]: Reviews & Reputation
                  - generic [ref=e246]: 7 min
                - heading "Review Velocity Is the Signal Most Owners Miss" [level=3] [ref=e250]
                - paragraph [ref=e251]: The pace of reviews often outweighs volume. Here's how to build a program that keeps momentum.
                - generic [ref=e253]:
                  - generic [ref=e254]: EV
                  - generic [ref=e255]:
                    - generic [ref=e256]: Elena Vasquez
                    - generic [ref=e257]: Jun 28, 2026
            - article [ref=e260]:
              - img [ref=e263]:
                - generic [ref=e266]: NAP
              - generic [ref=e289]:
                - generic [ref=e290]:
                  - generic [ref=e291]: Citations
                  - generic [ref=e292]: 9 min
                - 'heading "Citation Cleanup: The Underrated Local Ranking Boost" [level=3] [ref=e296]'
                - paragraph [ref=e297]: A pragmatic approach to auditing directory listings without paying for every 'top 100 sites' service.
                - generic [ref=e299]:
                  - generic [ref=e300]: DP
                  - generic [ref=e301]:
                    - generic [ref=e302]: David Park
                    - generic [ref=e303]: Jun 22, 2026
            - article [ref=e306]:
              - generic [ref=e320]:
                - generic [ref=e321]:
                  - generic [ref=e322]: Case Studies
                  - generic [ref=e323]: 10 min
                - heading "How a Multi-Location Dental Group Grew Calls 62%" [level=3] [ref=e327]
                - paragraph [ref=e328]: The exact GBP, citation, and review workflow that lifted qualified calls across 14 locations in six months.
                - generic [ref=e330]:
                  - generic [ref=e331]: MC
                  - generic [ref=e332]:
                    - generic [ref=e333]: Marcus Chen
                    - generic [ref=e334]: Jun 18, 2026
            - article [ref=e337]:
              - generic [ref=e353]:
                - generic [ref=e354]:
                  - generic [ref=e355]: Marketing Strategy
                  - generic [ref=e356]: 11 min
                - 'heading "Local SEO for Home Services: A Practical Framework" [level=3] [ref=e360]'
                - paragraph [ref=e361]: Service-area businesses have unique constraints. Here's a framework built for them, not for brick-and-mortar.
                - generic [ref=e363]:
                  - generic [ref=e364]: PR
                  - generic [ref=e365]:
                    - generic [ref=e366]: Priya Ramesh
                    - generic [ref=e367]: Jun 12, 2026
            - article [ref=e370]:
              - img [ref=e373]:
                - generic [ref=e383]: NEW
              - generic [ref=e384]:
                - generic [ref=e385]:
                  - generic [ref=e386]: Industry News
                  - generic [ref=e387]: 5 min
                - heading "What Google's Latest Local Update Actually Changed" [level=3] [ref=e391]
                - paragraph [ref=e392]: Cutting through the noise on the most recent local search algorithm update — with data from real accounts.
                - generic [ref=e394]:
                  - generic [ref=e395]: EV
                  - generic [ref=e396]:
                    - generic [ref=e397]: Elena Vasquez
                    - generic [ref=e398]: Jun 05, 2026
            - article [ref=e401]:
              - img [ref=e404]:
                - generic [ref=e408]: B
              - generic [ref=e420]:
                - generic [ref=e421]:
                  - generic [ref=e422]: Google Business Profile
                  - generic [ref=e423]: 6 min
                - heading "The Anatomy of a Perfect GBP Post" [level=3] [ref=e427]
                - paragraph [ref=e428]: Length, media, offers, and CTAs — what makes GBP posts drive profile actions instead of ignored impressions.
                - generic [ref=e430]:
                  - generic [ref=e431]: DP
                  - generic [ref=e432]:
                    - generic [ref=e433]: David Park
                    - generic [ref=e434]: May 30, 2026
            - article [ref=e437]:
              - generic [ref=e472]:
                - generic [ref=e473]:
                  - generic [ref=e474]: Reviews & Reputation
                  - generic [ref=e475]: 9 min
                - 'heading "Reputation Recovery: Turning a 3.6 into a 4.7" [level=3] [ref=e479]'
                - paragraph [ref=e480]: A step-by-step reputation recovery plan for businesses climbing out of a rough patch of reviews.
                - generic [ref=e482]:
                  - generic [ref=e483]: EV
                  - generic [ref=e484]:
                    - generic [ref=e485]: Elena Vasquez
                    - generic [ref=e486]: May 24, 2026
        - generic [ref=e490]:
          - generic [ref=e491]:
            - generic [ref=e492]: Popular guides
            - heading "Deep, evergreen education for local businesses." [level=2] [ref=e496]
          - generic [ref=e497]:
            - generic [ref=e498]:
              - img [ref=e500]:
                - generic [ref=e504]: B
              - generic [ref=e516]:
                - generic [ref=e517]: Guide · 24 min read
                - heading "The Complete Guide to Google Business Profile Optimization" [level=3] [ref=e518]
                - paragraph [ref=e519]: Everything you need to configure, maintain, and grow your GBP from foundation to advanced tactics.
                - generic [ref=e520]: Read the guide
            - generic [ref=e567]:
              - generic [ref=e568]: Guide · 18 min read
              - heading "Local SEO Fundamentals for Business Owners" [level=3] [ref=e569]
              - paragraph [ref=e570]: A plain-English introduction to how local search works and where your effort actually moves the needle.
              - generic [ref=e571]: Read the guide
            - generic [ref=e585]:
              - generic [ref=e586]: Guide · 16 min read
              - heading "A Practical Guide to Local Ranking Reporting" [level=3] [ref=e587]
              - paragraph [ref=e588]: How to read grid-based rankings, competitor overlays, and trend data to make sharper decisions.
              - generic [ref=e589]: Read the guide
            - generic [ref=e626]:
              - generic [ref=e627]: Guide · 20 min read
              - 'heading "Reviews & Reputation: A Framework That Actually Scales" [level=3] [ref=e628]'
              - paragraph [ref=e629]: Requesting, responding, monitoring, and measuring reviews across every location and platform.
              - generic [ref=e630]: Read the guide
        - generic [ref=e634]:
          - generic [ref=e635]:
            - generic [ref=e636]:
              - generic [ref=e637]: Latest software updates
              - heading "A platform that keeps improving." [level=2] [ref=e641]
            - link "Explore the platform →" [ref=e642] [cursor=pointer]:
              - /url: /software
          - generic [ref=e643]:
            - generic [ref=e644]:
              - generic [ref=e645]:
                - generic [ref=e646]: v4.6
                - generic [ref=e647]: Jul 09, 2026
              - heading "Enhanced Geo-Grid Overlays" [level=3] [ref=e648]
              - paragraph [ref=e649]: Compare up to 4 competitors simultaneously across any grid density.
            - generic [ref=e650]:
              - generic [ref=e651]:
                - generic [ref=e652]: v4.5
                - generic [ref=e653]: Jun 24, 2026
              - heading "Review Sentiment Themes" [level=3] [ref=e654]
              - paragraph [ref=e655]: Automatic keyword-theme extraction across every connected review platform.
            - generic [ref=e656]:
              - generic [ref=e657]:
                - generic [ref=e658]: v4.4
                - generic [ref=e659]: Jun 10, 2026
              - heading "White-label Domain Support" [level=3] [ref=e660]
              - paragraph [ref=e661]: Serve reports from your own subdomain with automatic SSL.
            - generic [ref=e662]:
              - generic [ref=e663]:
                - generic [ref=e664]: v4.3
                - generic [ref=e665]: May 27, 2026
              - heading "Multi-location Rollups" [level=3] [ref=e666]
              - paragraph [ref=e667]: Portfolio-level dashboards for franchises and multi-brand organizations.
            - generic [ref=e668]:
              - generic [ref=e669]:
                - generic [ref=e670]: v4.2
                - generic [ref=e671]: May 13, 2026
              - heading "Citation Duplicate Detection" [level=3] [ref=e672]
              - paragraph [ref=e673]: Smarter matching for near-duplicate listings across major directories.
            - generic [ref=e674]:
              - generic [ref=e675]:
                - generic [ref=e676]: v4.1
                - generic [ref=e677]: Apr 29, 2026
              - heading "Scheduled Report Delivery" [level=3] [ref=e678]
              - paragraph [ref=e679]: Weekly and monthly report emails with fully branded PDF exports.
        - generic [ref=e681]:
          - generic [ref=e682]:
            - generic [ref=e683]: Featured topics
            - heading "Browse insights by the topics that matter most." [level=2] [ref=e684]
          - generic [ref=e685]:
            - button "Google Business Profile Explore articles" [ref=e686]:
              - generic [ref=e692]: Google Business Profile
              - generic [ref=e693]: Explore articles
            - button "Local SEO Strategy Explore articles" [ref=e696]:
              - generic [ref=e701]: Local SEO Strategy
              - generic [ref=e702]: Explore articles
            - button "Citation Management Explore articles" [ref=e705]:
              - generic [ref=e710]: Citation Management
              - generic [ref=e711]: Explore articles
            - button "Local Rankings Explore articles" [ref=e714]:
              - generic [ref=e719]: Local Rankings
              - generic [ref=e720]: Explore articles
            - button "Customer Reviews Explore articles" [ref=e723]:
              - generic [ref=e727]: Customer Reviews
              - generic [ref=e728]: Explore articles
            - button "Maps Visibility Explore articles" [ref=e731]:
              - generic [ref=e735]: Maps Visibility
              - generic [ref=e736]: Explore articles
            - button "Reporting Explore articles" [ref=e739]:
              - generic [ref=e743]: Reporting
              - generic [ref=e744]: Explore articles
            - button "Software Updates Explore articles" [ref=e747]:
              - generic [ref=e752]: Software Updates
              - generic [ref=e753]: Explore articles
        - generic [ref=e758]:
          - generic [ref=e759]: Newsletter
          - heading "Local SEO insights, delivered." [level=2] [ref=e763]
          - paragraph [ref=e764]: One thoughtful email each month with practical local search tactics, platform updates, and case studies. No spam, no fluff — unsubscribe anytime.
          - generic [ref=e765]:
            - textbox "you@company.com" [ref=e766]
            - button "Subscribe" [ref=e767]
        - generic [ref=e773]:
          - generic [ref=e774]:
            - heading "Turn knowledge into measurable Local SEO growth." [level=2] [ref=e775]
            - paragraph [ref=e776]: Reading is one thing. Ranking is another. Explore our services or request a free Local SEO analysis and see exactly where your local presence stands.
          - generic [ref=e777]:
            - link "Explore Services" [ref=e778] [cursor=pointer]:
              - /url: /services
            - link "Request Analysis" [ref=e779] [cursor=pointer]:
              - /url: /contact
    - contentinfo [ref=e782]:
      - generic [ref=e783]:
        - generic [ref=e784]:
          - img "MyPageSEO logo" [ref=e786]
          - paragraph [ref=e787]: The Local Growth ecosystem — expert Local SEO services and proprietary software for businesses across the United States and Canada.
        - generic [ref=e788]:
          - generic [ref=e789]: Explore
          - list [ref=e790]:
            - listitem [ref=e791]:
              - link "Services" [ref=e792] [cursor=pointer]:
                - /url: /services
            - listitem [ref=e793]:
              - link "Software" [ref=e794] [cursor=pointer]:
                - /url: /software
            - listitem [ref=e795]:
              - link "Industries" [ref=e796] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e797]:
              - link "Pricing" [ref=e798] [cursor=pointer]:
                - /url: /pricing
        - generic [ref=e799]:
          - generic [ref=e800]: Company
          - list [ref=e801]:
            - listitem [ref=e802]:
              - link "About Us" [ref=e803] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e804]:
              - link "Blog" [ref=e805] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e806]:
              - link "Contact" [ref=e807] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e808]:
              - link "Get Started" [ref=e809] [cursor=pointer]:
                - /url: /checkout
        - generic [ref=e810]:
          - generic [ref=e811]: Legal
          - list [ref=e812]:
            - listitem [ref=e813]:
              - link "Privacy Policy" [ref=e814] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e815]:
              - link "Terms & Conditions" [ref=e816] [cursor=pointer]:
                - /url: /terms-conditions
      - generic [ref=e818]:
        - paragraph [ref=e819]: © 2026 MyPageSEO. All rights reserved.
        - paragraph [ref=e820]: Local Growth technology for US & Canada.
  - button "Open Next.js Dev Tools" [ref=e829] [cursor=pointer]
  - alert [ref=e833]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { attachListeners, guardPage, discoverLinks } from "./utils/audit-helpers";
  3  | 
  4  | test("blog: listing loads and every article opens cleanly", async ({ page, context, baseURL }) => {
  5  |   test.setTimeout(3 * 60 * 1000);
  6  |   const origin = new URL(baseURL!).origin;
  7  |   guardPage(page, context);
  8  |   const findings: string[] = [];
  9  | 
  10 |   const detachList = attachListeners(page, "/blog listing", findings);
  11 |   await page.goto("/blog", { waitUntil: "domcontentloaded" });
  12 |   await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  13 |   detachList();
  14 | 
  15 |   const { internal } = await discoverLinks(page, origin, "/blog");
  16 |   // Heuristic: article links usually live under /blog/... — adjust the prefix if your routing differs.
  17 |   const articleLinks = internal.filter((l) => l.startsWith("/blog/") && l !== "/blog");
  18 |   console.log(`Found ${articleLinks.length} article links on /blog`);
  19 | 
  20 |   if (articleLinks.length === 0) {
  21 |     findings.push("No article links found under /blog/* — check that posts are rendering, or update the URL prefix in blog.spec.ts");
  22 |   }
  23 | 
  24 |   for (const articlePath of articleLinks) {
  25 |     const detach = attachListeners(page, articlePath, findings);
  26 |     try {
  27 |       await page.goto(articlePath, { waitUntil: "domcontentloaded", timeout: 15000 });
  28 |       await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  29 | 
  30 |       const title = await page.locator("h1").first().textContent().catch(() => null);
  31 |       if (!title || !title.trim()) {
  32 |         findings.push(`${articlePath}: no <h1> title found`);
  33 |       }
  34 |     } catch (e: any) {
  35 |       findings.push(`${articlePath} failed to load: ${e.message.split("\n")[0]}`);
  36 |     } finally {
  37 |       detach();
  38 |     }
  39 |   }
  40 | 
  41 |   // Check pagination if present
  42 |   const nextPageBtn = page.locator('a:has-text("Next"), button:has-text("Next")').first();
  43 |   if (await nextPageBtn.count().catch(() => 0)) {
  44 |     console.log("Pagination control found on blog — consider extending this test to walk all pages");
  45 |   }
  46 | 
  47 |   console.log(findings.length ? findings.join("\n") : "Blog OK 🎉");
> 48 |   expect.soft(findings).toEqual([]);
     |                         ^ Error: expect(received).toEqual(expected) // deep equality
  49 | });
  50 | 
```