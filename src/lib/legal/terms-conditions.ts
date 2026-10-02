import { COMPANY, companyContactBlocks } from "./company";
import type { LegalDocument } from "./types";

const E = COMPANY.email;

export const termsConditions: LegalDocument = {
  title: "Terms & Conditions",
  description:
    "The terms governing your access to and use of the Mypageseo website, software, reports, integrations, and related services.",
  path: "/terms-conditions",
  // TODO: confirm both dates before going live (YYYY-MM-DD).
  effectiveDate: null,
  lastUpdated: null,
  intro: [
    {
      type: "p",
      text: `These Terms & Conditions ("**Terms**") govern your access to and use of the Mypageseo website, software, reports, integrations, and related services.`,
    },
    { type: "p", text: "The Services are operated by:" },
    {
      type: "address",
      lines: [
        `**${COMPANY.legalName}**`,
        `CIN: **${COMPANY.cin}**`,
        `Registered Office: **${COMPANY.registeredOffice.join(" ")}**`,
      ],
    },
    { type: "p", text: "Mypageseo is the brand under which the Services are provided." },
    { type: "p", text: "The Canadian mailing address associated with Mypageseo is:" },
    { type: "address", lines: [`**${COMPANY.canadianMailingAddress}**`] },
    { type: "p", text: "This address does not represent a separately incorporated Canadian entity." },
    {
      type: "p",
      text: "By accessing the website, creating an account, starting a trial, purchasing a subscription or token, connecting a third-party service, or otherwise using the Services, you agree to these Terms.",
    },
    { type: "note", text: "If you do not agree to these Terms, do not use the Services." },
  ],
  sections: [
    {
      id: "definitions",
      title: "Definitions",
      blocks: [
        { type: "p", text: "For these Terms:" },
        { type: "p", text: `**"Mypageseo," "we," "us," or "our"** means ${COMPANY.legalName}.` },
        {
          type: "p",
          text: `**"Services"** means the Mypageseo website, SaaS application, reporting tools, GBP management tools, AI features, reports, integrations, APIs, white-label reporting features, and related services.`,
        },
        { type: "p", text: `**"Customer," "you," or "your"** means the individual or legal entity using the Services.` },
        { type: "p", text: `**"Business Account"** means an account used to manage one or more business locations.` },
        { type: "p", text: `**"Agency Account"** means an account used by an agency to manage locations or clients.` },
        {
          type: "p",
          text: `**"Customer Data"** means information, files, content, business information, client information, instructions, keywords, posts, or other material submitted, connected, uploaded, or authorized by you for processing through the Services.`,
        },
        {
          type: "p",
          text: `**"Tokens"** means prepaid usage credits used for certain report refreshes or other usage-based functionality.`,
        },
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility",
      blocks: [
        { type: "p", text: "You must be at least **18 years old** to use the Services." },
        { type: "p", text: "By using Mypageseo, you represent that:" },
        {
          type: "list",
          ordered: true,
          items: [
            "You are at least 18 years old.",
            "You have authority to enter into these Terms on behalf of yourself or the business you represent.",
            "The information you provide is accurate.",
            "You will use the Services lawfully.",
            "You will comply with these Terms and applicable laws.",
          ],
        },
        {
          type: "p",
          text: "If you are using Mypageseo on behalf of a company, agency, or other organization, you represent that you are authorized to do so.",
        },
      ],
    },
    {
      id: "account-creation",
      title: "Account creation",
      blocks: [
        { type: "p", text: "Certain Services require an account." },
        { type: "p", text: "You may currently create an account by providing:" },
        { type: "list", items: ["Name", "Email", "Password", "Other information requested during registration"] },
        { type: "p", text: "Mypageseo may introduce additional authentication methods, including Google-based login." },
        { type: "p", text: "You are responsible for:" },
        {
          type: "list",
          items: [
            "Maintaining accurate account information", "Protecting your password",
            "Protecting authentication credentials", "Restricting unauthorized access",
            "All activity conducted through your account",
          ],
        },
        { type: "p", text: "You must promptly notify Mypageseo if you suspect unauthorized access." },
      ],
    },
    {
      id: "business-and-agency-accounts",
      title: "Business and agency accounts",
      blocks: [
        { type: "p", text: "Mypageseo may provide different account types, including Business and Agency accounts." },
        { type: "p", text: "Account permissions may vary by plan and account type." },
        { type: "p", text: "Account owners are responsible for activities performed by authorized team members." },
        {
          type: "p",
          text: "If you provide access to team members, you represent that those individuals are authorized to access the account.",
        },
      ],
    },
    {
      id: "agency-client-authorization",
      title: "Agency accounts and client authorization",
      blocks: [
        {
          type: "p",
          text: "If you operate an agency account, you may use Mypageseo to manage reporting or Google Business Profile information belonging to your clients.",
        },
        { type: "p", text: "You represent and warrant that:" },
        {
          type: "list",
          ordered: true,
          items: [
            "You have authorization from each client whose information you submit.",
            "You have authority to connect or manage the client's Google Business Profile.",
            "You have authority to provide the relevant client information to Mypageseo.",
            "You will comply with your agreements with your clients.",
            "You will obtain any permissions required by applicable privacy or data-protection laws.",
            "You will not use Mypageseo to access a client's Google account or business information without authorization.",
          ],
        },
        { type: "p", text: "Mypageseo is not responsible for disputes between an agency and its clients." },
        {
          type: "p",
          text: "The agency remains responsible for its relationship with its clients and for obtaining any required authorization.",
        },
      ],
    },
    {
      id: "google-business-profile-integration",
      title: "Google Business Profile integration",
      blocks: [
        { type: "p", text: "Mypageseo provides integration with Google Business Profile." },
        {
          type: "p",
          text: "By connecting Google, you authorize Mypageseo to access the Google Business Profile information and functionality necessary to provide the features you request.",
        },
        { type: "p", text: "Depending on the features enabled, Mypageseo may:" },
        {
          type: "list",
          items: [
            "Read GBP information", "Read reviews", "Publish GBP posts", "Schedule GBP posts",
            "Delete GBP posts", "Reply to reviews", "Automatically reply to reviews",
            "Generate reports", "Refresh reports", "Perform other authorized GBP actions",
          ],
        },
        {
          type: "p",
          text: "You may disconnect Google at any time through Mypageseo where supported or through your Google Account settings.",
        },
        {
          type: "p",
          text: "You are responsible for ensuring that you have authority to connect and manage the relevant Google Business Profile.",
        },
        {
          type: "p",
          text: "Mypageseo does not guarantee that Google will approve, maintain, display, rank, publish, or continue to support any content or functionality.",
        },
        {
          type: "p",
          text: "Google may change its APIs, policies, permissions, functionality, or availability at any time.",
        },
      ],
    },
    {
      id: "google-api-data",
      title: "Google API data",
      blocks: [
        {
          type: "p",
          text: "Mypageseo's use of information received from Google APIs is subject to Google's applicable terms and policies, including the Google API Services User Data Policy and its Limited Use requirements.",
        },
        {
          type: "p",
          text: "Mypageseo does not sell Google API data, use it for advertising, or use it to train general-purpose AI models.",
        },
        {
          type: "p",
          text: "Google API data is used only for the user-facing functionality for which the relevant authorization was provided, subject to applicable Google policies.",
        },
        {
          type: "p",
          text: "You acknowledge that Google is an independent third-party service provider and that Google may impose additional requirements on your use of Google services.",
        },
      ],
    },
    {
      id: "google-maps-and-places",
      title: "Google Maps and Places",
      blocks: [
        { type: "p", text: "Mypageseo uses Google Places and related Google Maps Platform services for local business and competitor reporting." },
        { type: "p", text: "Place IDs may be stored by Mypageseo as permitted by Google." },
        {
          type: "p",
          text: "Other Google Places information is subject to Google's applicable storage, caching, attribution, and display requirements.",
        },
        { type: "p", text: "Google Maps and Places information may change without notice." },
        {
          type: "p",
          text: "Mypageseo does not guarantee the accuracy, completeness, availability, or continued availability of information obtained from Google.",
        },
        { type: "p", text: "Your use of Google services is also subject to Google's applicable terms." },
      ],
    },
    {
      id: "reporting-and-ranking-data",
      title: "Reporting and ranking data",
      blocks: [
        { type: "p", text: "Mypageseo provides reporting and optimization tools." },
        { type: "p", text: "The Services may provide:" },
        {
          type: "list",
          items: [
            "Local ranking information", "Keyword tracking", "Map/grid results",
            "GBP audit information", "Competitor information", "Citation information",
            "Review information", "AI visibility information", "Historical comparisons",
            "Other reports and analytics",
          ],
        },
        { type: "p", text: "These reports are informational and analytical." },
        { type: "note", text: "Mypageseo is not a ranking guarantee service." },
        {
          type: "p",
          text: "Using Mypageseo does not automatically increase a business's rankings, traffic, leads, calls, conversions, GBP visibility, AI visibility, or revenue.",
        },
        {
          type: "p",
          text: "The Services provide tools and information that may help customers implement optimization processes.",
        },
        {
          type: "p",
          text: "Search-engine rankings and other visibility metrics depend on numerous factors outside Mypageseo's control.",
        },
        {
          type: "p",
          text: "Google and other third parties may change their algorithms, ranking systems, APIs, policies, data, or functionality without notice.",
        },
      ],
    },
    {
      id: "report-accuracy",
      title: "Report accuracy",
      blocks: [
        { type: "p", text: "Mypageseo attempts to provide useful and accurate reporting but does not guarantee that reports will always be:" },
        {
          type: "list",
          items: [
            "Accurate", "Complete", "Current", "Error-free", "Available",
            "Identical to results obtained directly from Google or another third party",
          ],
        },
        { type: "p", text: "Differences may occur due to:" },
        {
          type: "list",
          items: [
            "Google API behavior", "Search personalization", "Geographic differences",
            "Data refresh timing", "API limitations", "Third-party outages", "Algorithm changes",
            "Technical errors", "Changes in business information",
          ],
        },
        { type: "p", text: "You should use professional judgment when interpreting reports." },
      ],
    },
    {
      id: "artificial-intelligence-features",
      title: "Artificial intelligence features",
      blocks: [
        { type: "p", text: "Mypageseo may provide AI-generated:" },
        {
          type: "list",
          items: [
            "GBP posts", "Images", "Review analysis", "Review responses", "Business analysis",
            "AI visibility analysis", "Other content or recommendations",
          ],
        },
        { type: "p", text: "AI output is generated using third-party AI providers." },
        { type: "p", text: "AI output may be inaccurate, incomplete, inappropriate, or unsuitable for your intended use." },
        { type: "p", text: "You are responsible for reviewing AI-generated content before publishing or relying upon it." },
        {
          type: "p",
          text: "If you enable automatic publishing, you acknowledge that content may be published automatically according to the settings you configured.",
        },
        { type: "p", text: "You remain responsible for content published through your account, including content generated by AI." },
        { type: "p", text: "Mypageseo does not guarantee that AI-generated content will:" },
        {
          type: "list",
          items: [
            "Improve rankings", "Increase engagement", "Generate leads",
            "Comply with every platform guideline", "Be factually accurate",
            "Produce a particular commercial result",
          ],
        },
      ],
    },
    {
      id: "customer-content-and-data-ownership",
      title: "Customer content and data ownership",
      blocks: [
        { type: "p", text: "You retain ownership of Customer Data that you submit to Mypageseo, subject to rights belonging to third parties." },
        { type: "p", text: "Mypageseo does not claim ownership of your:" },
        {
          type: "list",
          items: [
            "Business information", "Customer/client information", "Uploaded files", "Logos",
            "Business descriptions", "Keywords", "Posts", "Review information",
            "Other Customer Data",
          ],
        },
        {
          type: "p",
          text: "You grant Mypageseo a limited, non-exclusive, worldwide license to host, store, process, transmit, reproduce, modify where technically necessary, display, and otherwise use Customer Data solely as reasonably necessary to:",
        },
        {
          type: "list",
          items: [
            "Provide the Services", "Generate reports", "Perform authorized integrations",
            "Provide customer support", "Maintain security", "Prevent abuse", "Maintain backups",
            "Comply with legal obligations",
            "Improve the Services where legally permitted and where such use does not conflict with third-party restrictions applicable to the data",
          ],
        },
        {
          type: "p",
          text: "This license ends when the relevant data is deleted, except to the extent retention is required or reasonably necessary for legal, security, backup, or other legitimate operational purposes.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Mypageseo intellectual property",
      blocks: [
        {
          type: "p",
          text: `Mypageseo and ${COMPANY.legalName} retain all rights, title, and interest in the Services and related intellectual property.`,
        },
        { type: "p", text: "This includes:" },
        {
          type: "list",
          items: [
            "Software", "Source code", "Object code", "Algorithms", "Systems", "Architecture", "UI",
            "UX", "Databases and database structures", "Report templates", "Scoring systems",
            "Methodologies", "Documentation", "Designs", "Branding", "Logos", "Trademarks",
            "Trade names", "Proprietary processes", "Proprietary technology",
          ],
        },
        { type: "p", text: "Except for the limited rights expressly granted under these Terms, no rights are transferred to you." },
        {
          type: "p",
          text: "Your subscription gives you a limited right to access and use the Services during the applicable subscription period.",
        },
        { type: "p", text: "You may not:" },
        {
          type: "list",
          items: [
            "Copy the software", "Resell the software unless expressly permitted",
            "Reverse engineer the software", "Decompile or disassemble the software",
            "Extract source code", "Circumvent technical restrictions",
            "Reproduce proprietary systems",
            "Build a competing product using proprietary Mypageseo technology",
            "Remove proprietary notices",
          ],
        },
      ],
    },
    {
      id: "ai-generated-output-ownership",
      title: "AI-generated output ownership",
      blocks: [
        { type: "p", text: "Mypageseo does not claim ownership of individual AI responses generated through third-party AI services." },
        { type: "p", text: "AI output may be subject to:" },
        {
          type: "list",
          items: [
            "The terms of the underlying AI provider", "Third-party intellectual-property rights",
            "Copyright law", "Other applicable legal restrictions",
          ],
        },
        { type: "p", text: "You are responsible for determining whether AI-generated output is appropriate for your intended use." },
      ],
    },
    {
      id: "user-responsibility-for-content",
      title: "User responsibility for content",
      blocks: [
        {
          type: "p",
          text: "You are responsible for Customer Data and content submitted, generated, approved, or published through your account.",
        },
        { type: "p", text: "You represent that you have the necessary rights and permissions to use that content." },
        { type: "p", text: "You must not use Mypageseo to:" },
        {
          type: "list",
          items: [
            "Infringe intellectual-property rights", "Violate privacy rights",
            "Defame or harass others", "Publish unlawful content", "Submit malware",
            "Attempt unauthorized access", "Conduct fraud", "Manipulate reviews unlawfully",
            "Create deceptive or fraudulent business information", "Abuse Google APIs",
            "Abuse Mypageseo APIs", "Circumvent usage limits", "Attack or compromise the Services",
            "Inject malicious code", "Conduct security attacks",
            "Scrape or extract the Services in an unauthorized manner",
            "Reverse engineer the Services", "Spam users or third parties",
            "Access another person's Google Business Profile without authorization",
            "Use the Services to facilitate illegal activity",
          ],
        },
        { type: "p", text: "Mypageseo may take action against accounts that violate these requirements." },
      ],
    },
    {
      id: "reviews-and-reputation-management",
      title: "Reviews and reputation management",
      blocks: [
        { type: "p", text: "Mypageseo may provide review-management features." },
        { type: "p", text: "You remain responsible for:" },
        {
          type: "list",
          items: [
            "The legitimacy of review-related actions", "The content of responses",
            "Compliance with applicable laws", "Compliance with Google's policies",
            "Avoiding deceptive or fraudulent review practices",
          ],
        },
        {
          type: "p",
          text: "Mypageseo does not guarantee that a review will be removed, changed, suppressed, or otherwise affected by any action taken through the Services.",
        },
        { type: "p", text: "AI-generated review responses must be reviewed by customers where appropriate." },
      ],
    },
    {
      id: "automated-actions",
      title: "Automated actions",
      blocks: [
        { type: "p", text: "Certain features may perform actions automatically based on settings configured by the customer." },
        { type: "p", text: "Examples include:" },
        {
          type: "list",
          items: [
            "Scheduled GBP posts", "Automated report refreshes", "Automated review responses",
            "Other scheduled operations",
          ],
        },
        {
          type: "p",
          text: "By enabling an automated feature, you authorize Mypageseo to perform the relevant action according to your configuration.",
        },
        {
          type: "p",
          text: "You are responsible for reviewing your configuration and ensuring that automated actions are appropriate.",
        },
        {
          type: "p",
          text: "Mypageseo is not responsible for consequences resulting from settings configured or enabled by the customer, except to the extent caused by Mypageseo's own breach of these Terms or applicable law.",
        },
      ],
    },
    {
      id: "subscriptions",
      title: "Subscriptions",
      blocks: [
        { type: "p", text: "Mypageseo offers subscription-based Services." },
        { type: "p", text: "The current standard model is:" },
        {
          type: "list",
          items: [
            "Monthly billing", "Pricing based on the number of locations", "Seven-day free trial",
            "No payment method required to begin the free trial",
            "Additional pricing for additional locations",
            "Enterprise/custom plans may be offered separately",
          ],
        },
        { type: "p", text: "Pricing may change in the future, subject to appropriate notice and applicable law." },
      ],
    },
    {
      id: "free-trial",
      title: "Free trial",
      blocks: [
        { type: "p", text: "Mypageseo may provide a seven-day free trial." },
        { type: "p", text: "No payment method is currently required to begin the trial." },
        { type: "p", text: "At the end of the trial, the account may require a paid subscription to continue using paid features." },
        {
          type: "p",
          text: "Mypageseo may modify, limit, suspend, or discontinue free trials where reasonably necessary to prevent abuse.",
        },
        {
          type: "p",
          text: "A customer may generally receive only one promotional trial unless Mypageseo expressly provides otherwise.",
        },
      ],
    },
    {
      id: "cancellation",
      title: "Cancellation",
      blocks: [
        { type: "p", text: "You may cancel your subscription at any time." },
        { type: "p", text: "Cancellation prevents the subscription from renewing for the next billing period." },
        { type: "p", text: "Cancellation does **not** normally terminate access immediately." },
        { type: "p", text: "You will generally retain access until the end of the already-paid subscription period." },
        { type: "p", text: "After the subscription ends:" },
        {
          type: "list",
          items: [
            "Paid subscription features may become unavailable.", "Remaining tokens are forfeited.",
            "The account enters the cancellation/deletion process.",
          ],
        },
      ],
    },
    {
      id: "refunds",
      title: "Refunds",
      blocks: [
        { type: "p", text: "Unless required by applicable law, subscription payments are **non-refundable**." },
        {
          type: "p",
          text: "Cancelling a subscription does not create a right to a refund for the unused portion of the current billing period.",
        },
        { type: "p", text: "Token purchases are also **non-refundable**, except where required by applicable law." },
        {
          type: "p",
          text: "If PayPal reverses, disputes, charges back, or otherwise invalidates a payment, Mypageseo may take reasonable action to recover amounts properly owed, including suspending or restricting the relevant account, subject to applicable law and PayPal's applicable procedures.",
        },
      ],
    },
    {
      id: "tokens",
      title: "Tokens",
      blocks: [
        { type: "p", text: "Certain report-refresh or usage-based functions may require Tokens." },
        { type: "p", text: "Tokens:" },
        {
          type: "list",
          items: [
            "Are purchased separately where offered", "Are non-refundable",
            "Do not expire while the subscription remains active",
            "Carry forward from month to month", "Are forfeited when the subscription ends",
          ],
        },
        {
          type: "p",
          text: "Mypageseo may change token pricing, usage requirements, or the functions that consume Tokens in the future, subject to appropriate notice where required.",
        },
      ],
    },
    {
      id: "location-changes-and-proration",
      title: "Location changes and proration",
      blocks: [
        { type: "p", text: "Subscription pricing may depend on the number of business locations associated with an account." },
        {
          type: "p",
          text: "When a customer adds a location during an active billing period, Mypageseo may apply a prorated charge for the additional location based on the remaining portion of the billing period.",
        },
        {
          type: "p",
          text: "When a customer removes a location, the reduced location count will generally be reflected in the next billing period.",
        },
        { type: "p", text: "Mypageseo may refine its exact proration calculations and billing mechanics over time." },
      ],
    },
    {
      id: "paypal",
      title: "PayPal",
      blocks: [
        { type: "p", text: "Payments are processed through PayPal." },
        { type: "p", text: "Mypageseo does not store your full card or bank-account credentials." },
        { type: "p", text: "Your use of PayPal is also subject to PayPal's applicable terms and policies." },
        { type: "p", text: "Mypageseo is not responsible for PayPal's:" },
        {
          type: "list",
          items: [
            "Availability", "Payment processing decisions", "Currency conversion", "Fraud decisions",
            "Account restrictions", "Chargeback procedures", "Payment delays", "Technical failures",
          ],
        },
      ],
    },
    {
      id: "white-label-services",
      title: "White-label services",
      blocks: [
        { type: "p", text: "Where white-label functionality is available, agencies may present reports under their own branding." },
        { type: "p", text: "Agencies may be permitted to configure:" },
        {
          type: "list",
          items: [
            "Agency name", "Agency website", "Agency logo", "Brand colors", "Header/footer text",
            "Report access controls", "External links",
          ],
        },
        {
          type: "p",
          text: "White-label reports remain hosted on infrastructure controlled by Mypageseo and may use a generic Mypageseo-controlled domain.",
        },
        {
          type: "p",
          text: "White-label functionality does not transfer ownership of Mypageseo software or infrastructure to the agency.",
        },
        {
          type: "p",
          text: "The agency is solely responsible for its relationship with its customers and for representations made through white-label reports.",
        },
      ],
    },
    {
      id: "third-party-services",
      title: "Third-party services",
      blocks: [
        { type: "p", text: "The Services depend on third-party services including, among others:" },
        {
          type: "list",
          items: [
            "Google", "Google Maps Platform", "PayPal", "OpenAI", "Google Gemini",
            "Anthropic Claude", "Email providers", "Hosting providers", "Infrastructure providers",
          ],
        },
        { type: "p", text: "Third-party services may change or become unavailable without notice." },
        {
          type: "p",
          text: "Mypageseo may modify the Services where necessary because of third-party API changes, restrictions, pricing, outages, or discontinuation.",
        },
        {
          type: "p",
          text: "Mypageseo is not responsible for failures caused solely by third-party services beyond its reasonable control.",
        },
      ],
    },
    {
      id: "no-guarantee-of-google-results",
      title: "No guarantee of Google results",
      blocks: [
        { type: "p", text: "Mypageseo does not guarantee:" },
        {
          type: "list",
          items: [
            "Google rankings", "Google Maps rankings", "Google Business Profile rankings",
            "Local Pack placement", "Search visibility", "AI visibility", "Website traffic",
            "Calls", "Leads", "Sales", "Revenue", "Reviews", "Review ratings", "GBP approval",
            "GBP suspension avoidance", "Any particular commercial outcome",
          ],
        },
        { type: "p", text: "Mypageseo provides tools, reporting, analysis, and optimization functionality." },
        { type: "p", text: "Actual results depend on factors outside Mypageseo's control." },
      ],
    },
    {
      id: "service-availability",
      title: "Service availability",
      blocks: [
        {
          type: "p",
          text: "Mypageseo does not provide a guaranteed uptime commitment or service-level agreement unless a separate written agreement expressly provides one.",
        },
        { type: "p", text: "The Services may be unavailable or degraded because of:" },
        {
          type: "list",
          items: [
            "Maintenance", "Server problems", "Security incidents", "Network failures",
            "Google outages", "PayPal outages", "AI provider outages", "API changes",
            "Internet failures", "Force majeure events",
            "Other technical or operational circumstances",
          ],
        },
        { type: "p", text: "Mypageseo may perform maintenance without advance notice where reasonably necessary." },
      ],
    },
    {
      id: "security-and-abuse",
      title: "Security and abuse",
      blocks: [
        { type: "p", text: "You must not attempt to compromise the security or integrity of the Services." },
        { type: "p", text: "Prohibited activities include:" },
        {
          type: "list",
          items: [
            "Unauthorized access", "Credential theft", "Brute-force attacks", "Malware",
            "Code injection", "Denial-of-service attacks", "API abuse",
            "Rate-limit circumvention", "Unauthorized scraping", "Exploitation of vulnerabilities",
            "Reverse engineering", "Circumvention of access controls",
          ],
        },
        {
          type: "p",
          text: "Mypageseo may investigate suspected abuse and may suspend accounts where reasonably necessary to protect the Services or other users.",
        },
      ],
    },
    {
      id: "suspension-and-termination",
      title: "Suspension and termination",
      blocks: [
        {
          type: "p",
          text: "Mypageseo may suspend or terminate an account where reasonably necessary, including where we believe the customer:",
        },
        {
          type: "list",
          items: [
            "Violated these Terms", "Engaged in fraud", "Engaged in illegal activity",
            "Abused Mypageseo APIs", "Abused Google APIs", "Created a security threat",
            "Attempted unauthorized access", "Misused the Services", "Failed to pay amounts due",
            "Provided materially false information", "Created risk to Mypageseo or another user",
            "Violated applicable law",
          ],
        },
        { type: "p", text: "Where appropriate, we may provide notice and an opportunity to resolve the issue." },
        {
          type: "p",
          text: "However, immediate suspension may occur where necessary to protect security, prevent abuse, comply with law, or protect the Services or other users.",
        },
      ],
    },
    {
      id: "account-deletion",
      title: "Account deletion",
      blocks: [
        { type: "p", text: "When a subscription is cancelled, the account may remain available until the end of the paid period." },
        {
          type: "p",
          text: "Following cancellation, Mypageseo currently intends to permanently delete account-related data approximately **one month after the cancellation date**, subject to the retention provisions in the Privacy Policy.",
        },
        { type: "p", text: "Google OAuth credentials are intended to be revoked when the account is deleted." },
        { type: "p", text: "Some information may be retained where required or reasonably necessary for:" },
        {
          type: "list",
          items: [
            "Legal compliance", "Accounting", "Security", "Fraud prevention",
            "Dispute resolution", "Enforcement of these Terms", "Backup systems",
          ],
        },
      ],
    },
    {
      id: "customer-support-and-access",
      title: "Customer support and access",
      blocks: [
        { type: "p", text: "Mypageseo personnel may access limited customer information when necessary to:" },
        {
          type: "list",
          items: [
            "Provide support", "Investigate technical problems", "Review reports",
            "Investigate abuse", "Maintain security", "Comply with law",
          ],
        },
        {
          type: "p",
          text: "Access to Google-derived information is restricted and handled in accordance with applicable Google API policies.",
        },
        {
          type: "p",
          text: "Mypageseo does not access unrelated Google services such as Gmail, Calendar, or Drive merely because a user connects a Google Business Profile.",
        },
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      blocks: [
        { type: "p", text: "Your use of the Services is also subject to the Mypageseo Privacy Policy." },
        {
          type: "p",
          text: "The Privacy Policy describes how Mypageseo collects, uses, stores, and discloses information.",
        },
        { type: "p", text: "The Privacy Policy is incorporated into these Terms by reference." },
      ],
    },
    {
      id: "customer-responsibility-for-privacy",
      title: "Customer responsibility for privacy and authorization",
      blocks: [
        {
          type: "p",
          text: "You are responsible for determining whether you have the legal authority and appropriate permissions to provide information to Mypageseo.",
        },
        { type: "p", text: "This is particularly important for agencies managing information belonging to their clients." },
        {
          type: "p",
          text: "You must not provide personal information to Mypageseo unless you have a lawful basis or other authorization required by applicable law.",
        },
        {
          type: "p",
          text: "Where you use Mypageseo as an agency or service provider for another business, you remain responsible for complying with your obligations to that business.",
        },
      ],
    },
    {
      id: "disclaimer-of-warranties",
      title: "Disclaimer of warranties",
      blocks: [
        {
          type: "p",
          text: `To the maximum extent permitted by applicable law, the Services are provided on an **"as is" and "as available"** basis.`,
        },
        { type: "p", text: "Mypageseo does not warrant that the Services will:" },
        {
          type: "list",
          items: [
            "Always be available", "Be uninterrupted", "Be error-free", "Be completely secure",
            "Be completely accurate", "Meet every business requirement",
            "Produce a particular result", "Produce a particular ranking", "Increase revenue",
            "Increase leads", "Increase traffic", "Increase visibility",
          ],
        },
        {
          type: "p",
          text: "Mypageseo disclaims warranties to the maximum extent permitted by law, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement, except where such disclaimers are prohibited by applicable law.",
        },
        { type: "p", text: "Nothing in these Terms excludes rights that cannot legally be excluded." },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of liability",
      blocks: [
        {
          type: "p",
          text: `To the maximum extent permitted by applicable law, Mypageseo and ${COMPANY.legalName} will not be liable for:`,
        },
        {
          type: "list",
          items: [
            "Indirect losses", "Consequential losses", "Incidental losses", "Special damages",
            "Lost profits", "Lost revenue", "Lost business opportunities", "Lost goodwill",
            "Loss of anticipated savings", "Loss resulting from search-engine algorithm changes",
            "Loss resulting from Google actions", "Loss resulting from third-party API failures",
            "Loss resulting from AI-generated content", "Loss resulting from customer configuration",
            "Loss resulting from unauthorized account access caused by the customer's failure to protect credentials",
          ],
        },
        {
          type: "p",
          text: "To the maximum extent permitted by law, Mypageseo's aggregate liability arising out of or relating to the Services will not exceed the total amount actually paid by the customer to Mypageseo for the Services during the **12 months immediately preceding the event giving rise to the claim**.",
        },
        { type: "p", text: "This limitation does not apply to liabilities that cannot legally be limited or excluded under applicable law." },
      ],
    },
    {
      id: "indemnification",
      title: "Indemnification",
      blocks: [
        {
          type: "p",
          text: `To the extent permitted by applicable law, you agree to defend, indemnify, and hold harmless Mypageseo and ${COMPANY.legalName}, together with their directors, officers, employees, contractors, and representatives, from claims, damages, liabilities, losses, and expenses arising from:`,
        },
        {
          type: "list",
          items: [
            "Your violation of these Terms", "Your misuse of the Services", "Your Customer Data",
            "Your violation of another person's rights",
            "Your unauthorized use of Google or another third-party service",
            "Your relationship with your clients", "Your violation of applicable law",
            "Content published through your account",
            "Your unauthorized use of another person's data or account",
          ],
        },
        { type: "p", text: "This section applies only to the extent permitted by applicable law." },
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      blocks: [
        { type: "p", text: "These Terms are governed by the laws of **India**, without regard to conflict-of-law principles." },
        {
          type: "p",
          text: `Subject to any mandatory rights or jurisdictional protections that cannot lawfully be excluded, disputes arising out of or relating to these Terms or the Services will be subject to the jurisdiction of the courts having jurisdiction over the registered office of ${COMPANY.legalName} in **Noida, Uttar Pradesh, India**.`,
        },
        {
          type: "p",
          text: "Nothing in this section is intended to deprive a consumer of mandatory rights or protections that cannot legally be waived under the laws applicable to that consumer.",
        },
      ],
    },
    {
      id: "dispute-resolution",
      title: "Dispute resolution",
      blocks: [
        {
          type: "p",
          text: "Before initiating formal legal proceedings, the parties should attempt in good faith to resolve a dispute by contacting:",
        },
        { type: "address", lines: [E] },
        {
          type: "p",
          text: "Nothing in this provision prevents either party from seeking urgent injunctive or other equitable relief where necessary to protect intellectual property, confidential information, security, or other rights.",
        },
      ],
    },
    {
      id: "changes-to-the-services",
      title: "Changes to the Services",
      blocks: [
        { type: "p", text: "Mypageseo may modify, add, remove, or discontinue features from time to time." },
        { type: "p", text: "Changes may occur because of:" },
        {
          type: "list",
          items: [
            "Product development", "Security improvements", "Third-party API changes",
            "Google policy changes", "AI provider changes", "Infrastructure changes",
            "Legal requirements", "Commercial decisions",
          ],
        },
        { type: "p", text: "We do not guarantee that every feature will remain available indefinitely." },
      ],
    },
    {
      id: "changes-to-these-terms",
      title: "Changes to these Terms",
      blocks: [
        { type: "p", text: "Mypageseo may update these Terms from time to time." },
        {
          type: "p",
          text: "If changes are material, we may provide notice through the Services, by email, or through another reasonable method.",
        },
        {
          type: "p",
          text: "Your continued use of the Services after the effective date of updated Terms constitutes acceptance of the updated Terms, to the extent permitted by applicable law.",
        },
        {
          type: "p",
          text: "If you do not agree with the updated Terms, you should stop using the Services and cancel your subscription.",
        },
      ],
    },
    {
      id: "assignment",
      title: "Assignment",
      blocks: [
        {
          type: "p",
          text: "You may not transfer or assign your rights or obligations under these Terms without Mypageseo's prior written consent, except where applicable law permits otherwise.",
        },
        { type: "p", text: "Mypageseo may assign or transfer these Terms in connection with:" },
        {
          type: "list",
          items: [
            "Merger", "Acquisition", "Corporate restructuring", "Sale of substantially all assets",
            "Financing", "Reorganization",
          ],
        },
        { type: "p", text: "subject to applicable law and any restrictions imposed by third-party platforms." },
      ],
    },
    {
      id: "severability",
      title: "Severability",
      blocks: [
        {
          type: "p",
          text: "If any provision of these Terms is determined to be invalid, unlawful, or unenforceable, the remaining provisions will remain in effect to the maximum extent permitted by law.",
        },
        {
          type: "p",
          text: "The invalid provision will be interpreted or replaced to the minimum extent necessary to make it enforceable while preserving its original purpose as closely as possible.",
        },
      ],
    },
    {
      id: "no-waiver",
      title: "No waiver",
      blocks: [
        {
          type: "p",
          text: "Failure by Mypageseo to enforce a provision of these Terms does not constitute a waiver of the right to enforce that provision later.",
        },
      ],
    },
    {
      id: "entire-agreement",
      title: "Entire agreement",
      blocks: [
        {
          type: "p",
          text: "These Terms, together with the Mypageseo Privacy Policy and any additional terms expressly incorporated into the Services, constitute the agreement governing your use of the Services.",
        },
        {
          type: "p",
          text: "For enterprise customers, a separately signed agreement may supplement or override these Terms where expressly stated.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      blocks: [
        { type: "p", text: "Questions concerning these Terms may be sent to:" },
        ...companyContactBlocks,
      ],
    },
    {
      id: "third-party-terms",
      title: "Third-party terms",
      blocks: [
        { type: "p", text: "Certain features of Mypageseo depend on third-party services." },
        {
          type: "p",
          text: "Your use of those services may also be governed by their respective terms, policies, and requirements.",
        },
        { type: "p", text: "This includes, where applicable:" },
        {
          type: "list",
          items: [
            "Google API Services", "Google Maps Platform", "Google Business Profile", "PayPal",
            "OpenAI", "Google Gemini", "Anthropic Claude",
            "Other third-party services integrated into Mypageseo",
          ],
        },
        {
          type: "p",
          text: "You agree to comply with applicable third-party requirements when using the corresponding integrations.",
        },
      ],
    },
  ],
};
