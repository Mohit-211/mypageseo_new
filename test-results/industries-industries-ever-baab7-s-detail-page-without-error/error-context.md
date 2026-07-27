# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: industries.spec.ts >> industries: every card opens its detail page without error
- Location: tests/industries.spec.ts:7:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- Array []
+ Array [
+   "No industry cards matched the selector — update CARD_SELECTOR in industries.spec.ts",
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
          - generic [ref=e32]:
            - generic [ref=e33]: Industry-specific Local SEO
            - heading "Local SEO built around your industry." [level=1] [ref=e37]
            - paragraph [ref=e38]: No two industries compete the same way in local search. A law firm, dental clinic, restaurant, HVAC company, and real estate brokerage all require different Local SEO strategies — because customer intent, competition, and Google Business Profile signals vary dramatically. We build campaigns that respect those differences.
            - generic [ref=e39]:
              - link "Explore Plans" [ref=e40] [cursor=pointer]:
                - /url: /checkout
              - link "Talk to a Local SEO Expert" [ref=e43] [cursor=pointer]:
                - /url: /contact
          - generic [ref=e96]:
            - generic [ref=e97]:
              - generic [ref=e98]: Reviews
              - paragraph [ref=e102]: "4.9"
              - paragraph [ref=e103]: "+38"
            - generic [ref=e104]:
              - generic [ref=e105]: Map rank
              - paragraph [ref=e110]: "#2"
              - paragraph [ref=e111]: "+6"
            - generic [ref=e112]:
              - generic [ref=e113]: Calls
              - paragraph [ref=e117]: "482"
              - paragraph [ref=e118]: +63%
        - generic [ref=e119]:
          - generic [ref=e120]:
            - img "Restaurant" [ref=e122]
            - img "Healthcare clinic" [ref=e125]
            - img "Home services" [ref=e128]
            - img "Legal services" [ref=e131]
            - img "Retail" [ref=e134]
            - img "Hospitality" [ref=e137]
          - paragraph [ref=e139]: Recognizable environments. Real customers. The kind of businesses we help grow every day.
        - generic [ref=e140]:
          - generic [ref=e141]:
            - generic [ref=e142]:
              - paragraph [ref=e143]: Industries
              - heading "The categories we know inside and out." [level=2] [ref=e144]
            - generic [ref=e145]:
              - button "All" [ref=e146]
              - button "Medical" [ref=e147]
              - button "Professional" [ref=e148]
              - button "Hospitality" [ref=e149]
              - button "Personal" [ref=e150]
              - button "Home Services" [ref=e151]
              - button "Automotive" [ref=e152]
              - button "Retail" [ref=e153]
              - button "Education" [ref=e154]
              - button "Events" [ref=e155]
              - button "Logistics" [ref=e156]
              - button "Real Estate" [ref=e157]
              - button "B2B" [ref=e158]
          - generic [ref=e159]:
            - link "Medical Dentists & Dental Clinics New-patient acquisition through Maps, reviews, and neighborhood-level intent. Learn more" [ref=e160] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e161]: Medical
              - heading "Dentists & Dental Clinics" [level=3] [ref=e168]
              - paragraph [ref=e169]: New-patient acquisition through Maps, reviews, and neighborhood-level intent.
              - generic [ref=e170]: Learn more
            - link "Medical Doctors & Medical Practices Trust-first Local SEO for family, specialist, and urgent care practices. Learn more" [ref=e173] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e174]: Medical
              - heading "Doctors & Medical Practices" [level=3] [ref=e180]
              - paragraph [ref=e181]: Trust-first Local SEO for family, specialist, and urgent care practices.
              - generic [ref=e182]: Learn more
            - link "Medical Plastic Surgeons & Cosmetic Clinics High-intent, high-value keyword strategy with reputation depth. Learn more" [ref=e185] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e186]: Medical
              - heading "Plastic Surgeons & Cosmetic Clinics" [level=3] [ref=e192]
              - paragraph [ref=e193]: High-intent, high-value keyword strategy with reputation depth.
              - generic [ref=e194]: Learn more
            - link "Medical Veterinarians & Animal Hospitals Community-driven visibility and review programs pet owners actually read. Learn more" [ref=e197] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e198]: Medical
              - heading "Veterinarians & Animal Hospitals" [level=3] [ref=e206]
              - paragraph [ref=e207]: Community-driven visibility and review programs pet owners actually read.
              - generic [ref=e208]: Learn more
            - link "Medical Chiropractors & Physiotherapists Service-radius targeting with condition- and technique-specific keywords. Learn more" [ref=e211] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e212]: Medical
              - heading "Chiropractors & Physiotherapists" [level=3] [ref=e217]
              - paragraph [ref=e218]: Service-radius targeting with condition- and technique-specific keywords.
              - generic [ref=e219]: Learn more
            - link "Professional Law Firms & Attorneys Compete for premium local keywords with authority-grade content and citations. Learn more" [ref=e222] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e223]: Professional
              - heading "Law Firms & Attorneys" [level=3] [ref=e230]
              - paragraph [ref=e231]: Compete for premium local keywords with authority-grade content and citations.
              - generic [ref=e232]: Learn more
            - link "Professional Accountants & Tax Professionals Seasonal-intent aware campaigns for CPA, tax prep, and advisory firms. Learn more" [ref=e235] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e236]: Professional
              - heading "Accountants & Tax Professionals" [level=3] [ref=e241]
              - paragraph [ref=e242]: Seasonal-intent aware campaigns for CPA, tax prep, and advisory firms.
              - generic [ref=e243]: Learn more
            - link "Professional Financial Advisors & Insurance Agencies Trust-signal-heavy Local SEO built for regulated categories. Learn more" [ref=e246] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e247]: Professional
              - heading "Financial Advisors & Insurance Agencies" [level=3] [ref=e253]
              - paragraph [ref=e254]: Trust-signal-heavy Local SEO built for regulated categories.
              - generic [ref=e255]: Learn more
            - link "Professional Real Estate Agents & Brokerages Neighborhood-level ranking and Google Business Profile authority. Learn more" [ref=e258] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e259]: Professional
              - heading "Real Estate Agents & Brokerages" [level=3] [ref=e265]
              - paragraph [ref=e266]: Neighborhood-level ranking and Google Business Profile authority.
              - generic [ref=e267]: Learn more
            - link "Professional Mortgage Brokers Rate-sensitive local intent captured across service areas. Learn more" [ref=e270] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e271]: Professional
              - heading "Mortgage Brokers" [level=3] [ref=e276]
              - paragraph [ref=e277]: Rate-sensitive local intent captured across service areas.
              - generic [ref=e278]: Learn more
            - link "Hospitality Restaurants & Cafés Directions, photos, and reviews — the levers that fill tables. Learn more" [ref=e281] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e282]: Hospitality
              - heading "Restaurants & Cafés" [level=3] [ref=e290]
              - paragraph [ref=e291]: Directions, photos, and reviews — the levers that fill tables.
              - generic [ref=e292]: Learn more
            - link "Hospitality Hotels, Resorts & Vacation Rentals Destination and micro-market visibility for direct bookings. Learn more" [ref=e295] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e296]: Hospitality
              - heading "Hotels, Resorts & Vacation Rentals" [level=3] [ref=e302]
              - paragraph [ref=e303]: Destination and micro-market visibility for direct bookings.
              - generic [ref=e304]: Learn more
            - link "Personal Salons, Spas & Barbershops Style-specific keywords and hyperlocal booking intent. Learn more" [ref=e307] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e308]: Personal
              - heading "Salons, Spas & Barbershops" [level=3] [ref=e317]
              - paragraph [ref=e318]: Style-specific keywords and hyperlocal booking intent.
              - generic [ref=e319]: Learn more
            - link "Personal Gyms, Yoga Studios & Fitness Centers Neighborhood-first campaigns for classes, memberships, and trials. Learn more" [ref=e322] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e323]: Personal
              - heading "Gyms, Yoga Studios & Fitness Centers" [level=3] [ref=e332]
              - paragraph [ref=e333]: Neighborhood-first campaigns for classes, memberships, and trials.
              - generic [ref=e334]: Learn more
            - link "Home Services Contractors & Construction Companies Service-area SEO for GCs, remodelers, and specialty trades. Learn more" [ref=e337] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e338]: Home Services
              - heading "Contractors & Construction Companies" [level=3] [ref=e346]
              - paragraph [ref=e347]: Service-area SEO for GCs, remodelers, and specialty trades.
              - generic [ref=e348]: Learn more
            - link "Home Services HVAC Companies Emergency-intent Local SEO across seasonal demand curves. Learn more" [ref=e351] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e352]: Home Services
              - heading "HVAC Companies" [level=3] [ref=e359]
              - paragraph [ref=e360]: Emergency-intent Local SEO across seasonal demand curves.
              - generic [ref=e361]: Learn more
            - link "Home Services Plumbing Companies 24/7 service-area visibility built for lead-generation. Learn more" [ref=e364] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e365]: Home Services
              - heading "Plumbing Companies" [level=3] [ref=e370]
              - paragraph [ref=e371]: 24/7 service-area visibility built for lead-generation.
              - generic [ref=e372]: Learn more
            - link "Home Services Electricians Residential and commercial local search built around trade specialties. Learn more" [ref=e375] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e376]: Home Services
              - heading "Electricians" [level=3] [ref=e381]
              - paragraph [ref=e382]: Residential and commercial local search built around trade specialties.
              - generic [ref=e383]: Learn more
            - link "Home Services Roofing Companies Storm-response and service-area campaigns tuned for high-ticket jobs. Learn more" [ref=e386] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e387]: Home Services
              - heading "Roofing Companies" [level=3] [ref=e394]
              - paragraph [ref=e395]: Storm-response and service-area campaigns tuned for high-ticket jobs.
              - generic [ref=e396]: Learn more
            - link "Home Services Landscaping & Lawn Care Seasonal local intent with neighborhood-level targeting. Learn more" [ref=e399] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e400]: Home Services
              - heading "Landscaping & Lawn Care" [level=3] [ref=e406]
              - paragraph [ref=e407]: Seasonal local intent with neighborhood-level targeting.
              - generic [ref=e408]: Learn more
            - link "Home Services Cleaning Services Recurring-service Local SEO for residential and commercial. Learn more" [ref=e411] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e412]: Home Services
              - heading "Cleaning Services" [level=3] [ref=e417]
              - paragraph [ref=e418]: Recurring-service Local SEO for residential and commercial.
              - generic [ref=e419]: Learn more
            - link "Home Services Pest Control Companies Pest-specific keywords across service radius and seasonality. Learn more" [ref=e422] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e423]: Home Services
              - heading "Pest Control Companies" [level=3] [ref=e435]
              - paragraph [ref=e436]: Pest-specific keywords across service radius and seasonality.
              - generic [ref=e437]: Learn more
            - link "Automotive Auto Repair Shops & Mechanics Trust and proximity — the two things drivers search for. Learn more" [ref=e440] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e441]: Automotive
              - heading "Auto Repair Shops & Mechanics" [level=3] [ref=e448]
              - paragraph [ref=e449]: Trust and proximity — the two things drivers search for.
              - generic [ref=e450]: Learn more
            - link "Automotive Car Dealerships Inventory-aware Local SEO for new, used, and service departments. Learn more" [ref=e453] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e454]: Automotive
              - heading "Car Dealerships" [level=3] [ref=e460]
              - paragraph [ref=e461]: Inventory-aware Local SEO for new, used, and service departments.
              - generic [ref=e462]: Learn more
            - link "Automotive Towing Companies Immediate-intent visibility across the entire service radius. Learn more" [ref=e465] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e466]: Automotive
              - heading "Towing Companies" [level=3] [ref=e474]
              - paragraph [ref=e475]: Immediate-intent visibility across the entire service radius.
              - generic [ref=e476]: Learn more
            - link "Retail Retail Stores & Boutiques Foot-traffic driven Local SEO with product-aware search. Learn more" [ref=e479] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e480]: Retail
              - heading "Retail Stores & Boutiques" [level=3] [ref=e486]
              - paragraph [ref=e487]: Foot-traffic driven Local SEO with product-aware search.
              - generic [ref=e488]: Learn more
            - link "Retail Jewelers High-consideration purchases won through trust and local authority. Learn more" [ref=e491] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e492]: Retail
              - heading "Jewelers" [level=3] [ref=e498]
              - paragraph [ref=e499]: High-consideration purchases won through trust and local authority.
              - generic [ref=e500]: Learn more
            - link "Retail Furniture Stores Showroom visibility across broader metro service areas. Learn more" [ref=e503] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e504]: Retail
              - heading "Furniture Stores" [level=3] [ref=e510]
              - paragraph [ref=e511]: Showroom visibility across broader metro service areas.
              - generic [ref=e512]: Learn more
            - link "Retail Pharmacies Neighborhood convenience and specialty-service visibility. Learn more" [ref=e515] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e516]: Retail
              - heading "Pharmacies" [level=3] [ref=e522]
              - paragraph [ref=e523]: Neighborhood convenience and specialty-service visibility.
              - generic [ref=e524]: Learn more
            - link "Education Childcare Centers & Daycares Trust-heavy Local SEO for parents researching close to home. Learn more" [ref=e527] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e528]: Education
              - heading "Childcare Centers & Daycares" [level=3] [ref=e534]
              - paragraph [ref=e535]: Trust-heavy Local SEO for parents researching close to home.
              - generic [ref=e536]: Learn more
            - link "Education Schools & Educational Institutions Enrollment-focused campaigns across catchment areas. Learn more" [ref=e539] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e540]: Education
              - heading "Schools & Educational Institutions" [level=3] [ref=e546]
              - paragraph [ref=e547]: Enrollment-focused campaigns across catchment areas.
              - generic [ref=e548]: Learn more
            - link "Events Event Venues Occasion-specific intent tuned for weddings, corporate, and social. Learn more" [ref=e551] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e552]: Events
              - heading "Event Venues" [level=3] [ref=e561]
              - paragraph [ref=e562]: Occasion-specific intent tuned for weddings, corporate, and social.
              - generic [ref=e563]: Learn more
            - link "Events Wedding Services High-consideration category with review-driven decisions. Learn more" [ref=e566] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e567]: Events
              - heading "Wedding Services" [level=3] [ref=e572]
              - paragraph [ref=e573]: High-consideration category with review-driven decisions.
              - generic [ref=e574]: Learn more
            - link "Events Photographers & Videographers Portfolio-first Local SEO with style- and occasion-based keywords. Learn more" [ref=e577] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e578]: Events
              - heading "Photographers & Videographers" [level=3] [ref=e584]
              - paragraph [ref=e585]: Portfolio-first Local SEO with style- and occasion-based keywords.
              - generic [ref=e586]: Learn more
            - link "Logistics Moving Companies Origin/destination Local SEO for local and long-distance moves. Learn more" [ref=e589] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e590]: Logistics
              - heading "Moving Companies" [level=3] [ref=e603]
              - paragraph [ref=e604]: Origin/destination Local SEO for local and long-distance moves.
              - generic [ref=e605]: Learn more
            - link "Logistics Storage Facilities Radius-based visibility and unit-type-aware campaigns. Learn more" [ref=e608] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e609]: Logistics
              - heading "Storage Facilities" [level=3] [ref=e615]
              - paragraph [ref=e616]: Radius-based visibility and unit-type-aware campaigns.
              - generic [ref=e617]: Learn more
            - link "Real Estate Property Management Companies Owner-acquisition and tenant-facing Local SEO across markets. Learn more" [ref=e620] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e621]: Real Estate
              - heading "Property Management Companies" [level=3] [ref=e628]
              - paragraph [ref=e629]: Owner-acquisition and tenant-facing Local SEO across markets.
              - generic [ref=e630]: Learn more
            - link "Real Estate Home Inspection Services Realtor-referral and homeowner search intent, mapped together. Learn more" [ref=e633] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e634]: Real Estate
              - heading "Home Inspection Services" [level=3] [ref=e641]
              - paragraph [ref=e642]: Realtor-referral and homeowner search intent, mapped together.
              - generic [ref=e643]: Learn more
            - link "Home Services Security System Providers Residential and commercial security intent by service area. Learn more" [ref=e646] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e647]: Home Services
              - heading "Security System Providers" [level=3] [ref=e653]
              - paragraph [ref=e654]: Residential and commercial security intent by service area.
              - generic [ref=e655]: Learn more
            - link "B2B IT & Managed Service Providers B2B Local SEO across metros and industry verticals served. Learn more" [ref=e658] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e659]: B2B
              - heading "IT & Managed Service Providers" [level=3] [ref=e665]
              - paragraph [ref=e666]: B2B Local SEO across metros and industry verticals served.
              - generic [ref=e667]: Learn more
            - link "B2B Marketing Agencies (White-Label) White-label Local SEO delivery for agency partners. Learn more" [ref=e670] [cursor=pointer]:
              - /url: /contact
              - generic [ref=e671]: B2B
              - heading "Marketing Agencies (White-Label)" [level=3] [ref=e677]
              - paragraph [ref=e678]: White-label Local SEO delivery for agency partners.
              - generic [ref=e679]: Learn more
        - generic [ref=e683]:
          - generic [ref=e684]:
            - paragraph [ref=e685]: Why industry matters
            - heading "Every industry has different local search challenges." [level=2] [ref=e686]
            - paragraph [ref=e687]: The Local SEO playbook is the same. The plays are not. Category dictates which levers matter most, which keywords are worth pursuing, and which profile signals your customers actually care about.
          - generic [ref=e688]:
            - generic [ref=e689]:
              - heading "Restaurants" [level=3] [ref=e696]
              - paragraph [ref=e697]: Live on directions, photos, and review velocity. Ranking matters, but decision-making happens on the profile.
            - generic [ref=e698]:
              - heading "Law firms" [level=3] [ref=e704]
              - paragraph [ref=e705]: Compete for the most expensive local keywords in every market — authority, citations, and content depth win.
            - generic [ref=e706]:
              - heading "Medical practices" [level=3] [ref=e711]
              - paragraph [ref=e712]: Trust is the ranking factor. Reviews, credentials, and consistent NAP data outperform aggressive tactics.
            - generic [ref=e713]:
              - heading "Contractors & trades" [level=3] [ref=e720]
              - paragraph [ref=e721]: Service-area Local SEO across radius, seasonality, and emergency-vs-planned intent — profiles must adapt.
            - generic [ref=e722]:
              - heading "Multi-location brands" [level=3] [ref=e728]
              - paragraph [ref=e729]: "Consistency at scale: citations, GBPs, reviews, and reporting standardized across every location."
            - generic [ref=e730]:
              - heading "Retail & boutiques" [level=3] [ref=e735]
              - paragraph [ref=e736]: Foot traffic depends on hyperlocal visibility, product-aware search, and picture-perfect profiles.
        - generic [ref=e737]:
          - generic [ref=e738]:
            - paragraph [ref=e739]: Our approach
            - heading "How we customize every Local SEO campaign." [level=2] [ref=e740]
            - paragraph [ref=e741]: A repeatable methodology, tuned to your industry's realities. Every campaign moves through the same seven steps. The depth and emphasis change based on category.
          - list [ref=e744]:
            - listitem [ref=e745]:
              - generic [ref=e746]: Step 01
              - heading "Industry research" [level=3] [ref=e752]
              - paragraph [ref=e753]: Map how customers actually search in your category.
            - listitem [ref=e754]:
              - generic [ref=e755]: Step 02
              - heading "Competitor analysis" [level=3] [ref=e761]
              - paragraph [ref=e762]: Benchmark local rivals across visibility and reviews.
            - listitem [ref=e763]:
              - generic [ref=e764]: Step 03
              - heading "GBP audit" [level=3] [ref=e770]
              - paragraph [ref=e771]: Score profiles against category best practices.
            - listitem [ref=e772]:
              - generic [ref=e773]: Step 04
              - heading "Keyword opportunity" [level=3] [ref=e780]
              - paragraph [ref=e781]: Prioritize local intent by revenue potential.
            - listitem [ref=e782]:
              - generic [ref=e783]: Step 05
              - heading "Citations & authority" [level=3] [ref=e789]
              - paragraph [ref=e790]: Fix NAP, build local links, strengthen trust.
            - listitem [ref=e791]:
              - generic [ref=e792]: Step 06
              - heading "Rank monitoring" [level=3] [ref=e797]
              - paragraph [ref=e798]: Geo-grid tracking across your service area.
            - listitem [ref=e799]:
              - generic [ref=e800]: Step 07
              - heading "Continuous optimization" [level=3] [ref=e806]
              - paragraph [ref=e807]: Software-guided iteration on what's working.
        - generic [ref=e810]:
          - generic [ref=e811]:
            - paragraph [ref=e812]: Services adapted per industry
            - heading "Same services. Different execution." [level=2] [ref=e813]
            - paragraph [ref=e814]: Our service catalog stays consistent. How each service is scoped, prioritized, and delivered depends on your category, competitive landscape, and business model.
            - link "See all services" [ref=e815] [cursor=pointer]:
              - /url: /services
          - generic [ref=e818]:
            - generic [ref=e819]: Google Business Profile Optimization
            - generic [ref=e825]: Local Landing Pages
            - generic [ref=e832]: Citation Management
            - generic [ref=e838]: Local Keyword Research
            - generic [ref=e844]: Review Growth
            - generic [ref=e849]: Local Content Strategy
            - generic [ref=e854]: Reporting & Dashboards
            - generic [ref=e860]: Reputation Management
            - generic [ref=e866]: Multi-location SEO
        - generic [ref=e873]:
          - generic [ref=e874]:
            - paragraph [ref=e875]: Coverage
            - heading "Local SEO for businesses across North America." [level=2] [ref=e876]
            - paragraph [ref=e877]: We work with independent businesses, multi-location brands, and franchise systems across the United States and Canada.
          - generic [ref=e928]:
            - generic [ref=e929]: Active service markets
            - generic [ref=e931]: United States & Canada
        - generic [ref=e935]:
          - generic [ref=e936]:
            - paragraph [ref=e937]: FAQ
            - heading "Common questions." [level=2] [ref=e938]
          - generic [ref=e939]:
            - generic [ref=e940]:
              - button "Do you work with businesses outside these industries?" [ref=e941]
              - paragraph [ref=e945]: Yes. If your customers search locally, we can build a Local SEO campaign for you. These are the categories we serve most often — not a limit.
            - generic [ref=e946]:
              - button "Do you support businesses with multiple locations?" [ref=e947]
              - paragraph [ref=e951]: Absolutely. Multi-location Local SEO — with per-location profiles, citations, and reporting — is a core specialty.
            - generic [ref=e952]:
              - button "Do franchises need a different strategy?" [ref=e953]
              - paragraph [ref=e957]: Yes. Franchise programs balance corporate standards with local franchisee visibility. We coordinate both.
            - generic [ref=e958]:
              - button "Are service-area businesses eligible?" [ref=e959]
              - paragraph [ref=e963]: Yes. Home services, mobile businesses, and multi-radius operators are a large share of our client base.
            - generic [ref=e964]:
              - button "Can Local SEO campaigns be fully customized?" [ref=e965]
              - paragraph [ref=e969]: Every campaign is built around your industry's search behavior, competitive landscape, and business goals — never off a template.
        - generic [ref=e971]:
          - heading "See what Local SEO looks like for your industry." [level=2] [ref=e974]
          - paragraph [ref=e975]: We'll walk through category-specific opportunities, competitor gaps, and a plan tailored to your business.
          - generic [ref=e976]:
            - link "Get Started" [ref=e977] [cursor=pointer]:
              - /url: /checkout
            - link "Talk to a Local SEO Expert" [ref=e980] [cursor=pointer]:
              - /url: /contact
    - contentinfo [ref=e981]:
      - generic [ref=e982]:
        - generic [ref=e983]:
          - img "MyPageSEO logo" [ref=e985]
          - paragraph [ref=e986]: The Local Growth ecosystem — expert Local SEO services and proprietary software for businesses across the United States and Canada.
        - generic [ref=e987]:
          - generic [ref=e988]: Explore
          - list [ref=e989]:
            - listitem [ref=e990]:
              - link "Services" [ref=e991] [cursor=pointer]:
                - /url: /services
            - listitem [ref=e992]:
              - link "Software" [ref=e993] [cursor=pointer]:
                - /url: /software
            - listitem [ref=e994]:
              - link "Industries" [ref=e995] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e996]:
              - link "Pricing" [ref=e997] [cursor=pointer]:
                - /url: /pricing
        - generic [ref=e998]:
          - generic [ref=e999]: Company
          - list [ref=e1000]:
            - listitem [ref=e1001]:
              - link "About Us" [ref=e1002] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e1003]:
              - link "Blog" [ref=e1004] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e1005]:
              - link "Contact" [ref=e1006] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e1007]:
              - link "Get Started" [ref=e1008] [cursor=pointer]:
                - /url: /checkout
        - generic [ref=e1009]:
          - generic [ref=e1010]: Legal
          - list [ref=e1011]:
            - listitem [ref=e1012]:
              - link "Privacy Policy" [ref=e1013] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e1014]:
              - link "Terms & Conditions" [ref=e1015] [cursor=pointer]:
                - /url: /terms-conditions
      - generic [ref=e1017]:
        - paragraph [ref=e1018]: © 2026 MyPageSEO. All rights reserved.
        - paragraph [ref=e1019]: Local Growth technology for US & Canada.
  - button "Open Next.js Dev Tools" [ref=e1028] [cursor=pointer]
  - alert [ref=e1032]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { attachListeners, guardPage } from "./utils/audit-helpers";
  3  | 
  4  | // NOTE: adjust this selector to match your actual card markup (class name, data-testid, etc.)
  5  | const CARD_SELECTOR = '[data-testid="industry-card"], .industry-card, a[href^="/industries/"]';
  6  | 
  7  | test("industries: every card opens its detail page without error", async ({ page, context }) => {
  8  |   test.setTimeout(2 * 60 * 1000);
  9  |   guardPage(page, context);
  10 |   const findings: string[] = [];
  11 | 
  12 |   const detachList = attachListeners(page, "/industries listing", findings);
  13 |   await page.goto("/industries", { waitUntil: "domcontentloaded" });
  14 |   await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  15 |   detachList();
  16 | 
  17 |   const cards = page.locator(CARD_SELECTOR);
  18 |   const count = await cards.count();
  19 |   console.log(`Found ${count} industry cards`);
  20 | 
  21 |   if (count === 0) {
  22 |     findings.push("No industry cards matched the selector — update CARD_SELECTOR in industries.spec.ts");
  23 |   }
  24 | 
  25 |   const hrefs: string[] = [];
  26 |   for (let i = 0; i < count; i++) {
  27 |     const card = cards.nth(i);
  28 |     const href = await card.getAttribute("href").catch(() => null);
  29 |     if (href) hrefs.push(href);
  30 |   }
  31 | 
  32 |   for (const href of [...new Set(hrefs)]) {
  33 |     const detach = attachListeners(page, href, findings);
  34 |     try {
  35 |       await page.goto(href, { waitUntil: "domcontentloaded", timeout: 15000 });
  36 |       await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  37 |       const heading = await page.locator("h1").first().textContent().catch(() => null);
  38 |       if (!heading || !heading.trim()) {
  39 |         findings.push(`${href}: no <h1> found on industry detail page`);
  40 |       }
  41 |     } catch (e: any) {
  42 |       findings.push(`${href} failed to load: ${e.message.split("\n")[0]}`);
  43 |     } finally {
  44 |       detach();
  45 |     }
  46 |   }
  47 | 
  48 |   console.log(findings.length ? findings.join("\n") : "Industries OK 🎉");
> 49 |   expect.soft(findings).toEqual([]);
     |                         ^ Error: expect(received).toEqual(expected) // deep equality
  50 | });
  51 | 
```