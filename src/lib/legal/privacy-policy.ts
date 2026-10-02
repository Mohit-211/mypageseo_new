import { COMPANY, companyContactBlocks } from "./company";
import type { LegalDocument } from "./types";

const E = COMPANY.email;

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description:
    "How Mypageseo collects, uses, stores, discloses, and protects information across our website, app, and services.",
  path: "/privacy-policy",
  // TODO: confirm both dates before going live (YYYY-MM-DD).
  effectiveDate: null,
  lastUpdated: null,
  intro: [
    {
      type: "p",
      text: `Mypageseo is a brand and service operated by **${COMPANY.legalName}**, a company incorporated in India.`,
    },
    {
      type: "p",
      text: `This Privacy Policy explains how ${COMPANY.legalName} ("**Mypageseo**", "**we**", "**us**", or "**our**") collects, uses, stores, discloses, and protects information when you use:`,
    },
    {
      type: "list",
      items: [
        "https://mypageseo.com",
        "https://app.mypageseo.com",
        `the Mypageseo software, dashboards, reports, APIs, integrations, and related services (collectively, the "**Services**").`,
      ],
    },
    {
      type: "p",
      text: "Our primary customers are businesses and agencies located in the United States and Canada, although the Services may be accessible from other jurisdictions.",
    },
  ],
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        { type: "p", text: "The legal entity responsible for the Services is:" },
        {
          type: "address",
          lines: [
            `**${COMPANY.legalName}**`,
            `CIN: **${COMPANY.cin}**`,
            `Registered Office: **${COMPANY.registeredOffice.join(" ")}**`,
            `GSTIN: **${COMPANY.gstin}**`,
            `Privacy Contact: ${E}`,
          ],
        },
        { type: "p", text: "Mypageseo also uses the following Canadian mailing address for business correspondence:" },
        { type: "address", lines: [`**${COMPANY.canadianMailingAddress}**`] },
        {
          type: "p",
          text: `This Canadian address is a mailing address and does not represent a separately incorporated Canadian entity. Mypageseo's Services are operated by ${COMPANY.legalName}.`,
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      blocks: [
        {
          type: "p",
          text: "We collect information directly from you, automatically through your use of the Services, and from third-party services that you intentionally connect to Mypageseo.",
        },
        { type: "h3", text: "2.1 Account information" },
        { type: "p", text: "When you create a Mypageseo account, we may collect:" },
        {
          type: "list",
          items: [
            "Email address", "Username", "Name", "Password",
            "Account type, such as Business or Agency", "User role", "Account status",
            "Trial status", "Subscription status", "Current subscription plan",
            "Credit or token balance", "Notification preferences", "Referral code",
          ],
        },
        { type: "p", text: "Passwords are stored in hashed form rather than as readable passwords." },
        { type: "h3", text: "2.2 Business and profile information" },
        { type: "p", text: "Depending on the features you use, we may collect:" },
        {
          type: "list",
          items: [
            "Full name", "Mobile number", "Business name", "Business address", "City",
            "State or province", "Country", "ZIP or postal code", "Website URL",
            `Business description or "About" information`, "Business category", "Locations",
            "Keywords", "Report configuration",
            "Other information you voluntarily enter into the Services",
          ],
        },
        { type: "h3", text: "2.3 Team members" },
        { type: "p", text: "Agency and business accounts may allow account owners to add authorized team members." },
        { type: "p", text: "Information relating to team members may include:" },
        {
          type: "list",
          items: ["Name", "Email address", "Mobile number", "Account credentials", "Role and permissions", "Account status"],
        },
        {
          type: "p",
          text: "The account owner is responsible for ensuring that team members are authorized to access the account and that information provided about team members is accurate.",
        },
        { type: "h3", text: "2.4 Agency client information" },
        { type: "p", text: "Agency accounts may store information relating to the agency's customers or clients, including:" },
        {
          type: "list",
          items: [
            "Client company name", "Client website", "Internal client ID",
            "Business/location information", "GBP-related information",
            "Reports and reporting configuration", "Other information entered by the agency",
          ],
        },
        {
          type: "p",
          text: "Agencies are responsible for ensuring that they have the necessary authorization to provide client information to Mypageseo and to connect or manage their clients' Google Business Profiles through the Services.",
        },
        { type: "h3", text: "2.5 Uploaded files" },
        { type: "p", text: "Where the Services permit uploads, we may process:" },
        {
          type: "list",
          items: [
            "Images", "Videos", "Attachments", "File names", "File types", "File sizes",
            "Storage paths", "Other technical metadata associated with uploaded files",
          ],
        },
        {
          type: "p",
          text: "You retain your rights in content that you upload, subject to the limited rights necessary for us to operate the Services.",
        },
      ],
    },
    {
      id: "authentication-and-security",
      title: "Authentication and security information",
      blocks: [
        { type: "p", text: "To operate, secure, and authenticate accounts, we may collect and process:" },
        {
          type: "list",
          items: [
            "Session information", "Access tokens", "Refresh tokens", "Email verification codes",
            "Password-reset codes", "IP addresses", "Timezone", "Login times", "Logout times",
            "Authentication events", "Push notification tokens",
            "Real-time connection identifiers, where applicable", "Browser and device information",
            "Security and abuse-prevention information",
          ],
        },
        {
          type: "p",
          text: "Authentication information is used to authenticate users, maintain sessions, provide account security, prevent unauthorized access, and investigate security incidents.",
        },
      ],
    },
    {
      id: "google-business-profile-data",
      title: "Google account and Google Business Profile data",
      blocks: [
        {
          type: "p",
          text: "Mypageseo provides functionality that allows users to connect Google accounts to manage and report on Google Business Profiles.",
        },
        {
          type: "p",
          text: "When you choose to connect a Google account, you authorize Mypageseo to access the Google services and information necessary to provide the functionality you requested.",
        },
        { type: "h3", text: "4.1 Google permissions" },
        {
          type: "p",
          text: "Mypageseo currently uses Google Business Profile authorization, including the relevant `business.manage` permission.",
        },
        {
          type: "p",
          text: "The Google Search Console integration previously used by Mypageseo has been discontinued and is not part of the current Services.",
        },
        { type: "h3", text: "4.2 Google information we access" },
        { type: "p", text: "Depending on the features you use, Mypageseo may access Google Business Profile information including:" },
        {
          type: "list",
          items: [
            "Google Business Profile account identifiers", "Google Business Profile location identifiers",
            "Business profile information", "Business categories", "Business information", "Reviews",
            "Review ratings", "Review text", "GBP posts", "GBP-related performance information",
            "Other information made available through the authorized Google Business Profile APIs",
          ],
        },
        {
          type: "p",
          text: "We store the Google Business Profile account ID and location ID and may store the OAuth access and refresh tokens necessary to maintain the connection and provide automated functionality.",
        },
        {
          type: "p",
          text: "Other Google Business Profile information is generally retrieved when needed to generate or refresh reports or perform an authorized action rather than being maintained as a permanent copy in our database.",
        },
        { type: "h3", text: "4.3 What we do with Google data" },
        { type: "p", text: "Google data may be used to:" },
        {
          type: "list",
          items: [
            "Generate reports", "Refresh reports", "Audit Google Business Profiles", "Analyze reviews",
            "Manage GBP posts", "Publish GBP posts", "Schedule GBP posts", "Delete GBP posts",
            "Generate or assist with review responses",
            "Perform other Google Business Profile functionality explicitly provided by the Services",
          ],
        },
        { type: "p", text: "Mypageseo does not use Google user data for unrelated purposes." },
        { type: "h3", text: "4.4 Actions performed on your behalf" },
        { type: "p", text: "If you authorize the relevant functionality, Mypageseo may act on your behalf to:" },
        {
          type: "list",
          items: [
            "Publish GBP posts", "Schedule GBP posts", "Delete GBP posts", "Reply to reviews",
            "Perform other authorized Google Business Profile actions",
          ],
        },
        {
          type: "p",
          text: "You remain responsible for reviewing and controlling the content and actions associated with your Google Business Profile.",
        },
        { type: "h3", text: "4.5 Disconnecting Google" },
        {
          type: "p",
          text: "You may disconnect Google from Mypageseo through the Services where that functionality is provided, or revoke Mypageseo's access through your Google Account settings.",
        },
        {
          type: "p",
          text: "When you disconnect Google or delete your Mypageseo account, we will revoke or delete the applicable OAuth credentials associated with the connection as part of the disconnection process.",
        },
        {
          type: "p",
          text: "Google OAuth tokens are intended to be revoked immediately when an account is deleted or Google is disconnected.",
        },
        { type: "h3", text: "4.6 Google API Services Limited Use" },
        {
          type: "p",
          text: "Mypageseo's use and transfer of information received from Google APIs will comply with the **Google API Services User Data Policy**, including its Limited Use requirements.",
        },
        { type: "p", text: "Specifically:" },
        {
          type: "list",
          items: [
            "We use Google API data only to provide the user-facing features and functionality of Mypageseo.",
            "We do not sell Google API data.",
            "We do not use Google API data for advertising or retargeting.",
            "We do not use Google API data to train or improve general-purpose artificial intelligence or machine-learning models.",
            "We do not transfer Google API data to advertising platforms, data brokers, or information resellers.",
            "Human access to Google API data is restricted to circumstances permitted by applicable Google policies, including where necessary for security, legal compliance, or where the user has provided appropriate consent or authorization.",
            "We do not access unrelated Google services, such as Gmail, Google Calendar, or Google Drive, unless a separate feature expressly requests and receives the necessary authorization.",
          ],
        },
        { type: "p", text: "Google API data is not used as a general-purpose data source for Mypageseo." },
      ],
    },
    {
      id: "google-maps-and-places",
      title: "Google Maps and Places data",
      blocks: [
        {
          type: "p",
          text: "Mypageseo uses Google Maps Platform and/or Google Places APIs to provide business and competitor reporting features.",
        },
        { type: "p", text: "When generating reports, we may retrieve information such as:" },
        {
          type: "list",
          items: [
            "Business name", "Business address", "Business category", "Ratings", "Reviews",
            "Photos", "Other Place information", "Competitor information",
          ],
        },
        { type: "p", text: "We do not intend to maintain a permanent database of Google Places content." },
        {
          type: "p",
          text: "We store **Google Place IDs** for locations and competitors. Place IDs may be retained as permitted by Google.",
        },
        {
          type: "p",
          text: "Other Google Places information is retrieved when required for the relevant report or feature and is handled subject to Google's applicable terms, policies, caching restrictions, and attribution requirements.",
        },
        {
          type: "p",
          text: "Where required, Google attribution, links, and other notices will be displayed with Google-provided information.",
        },
        {
          type: "p",
          text: "Your use of Google-provided information through Mypageseo is also subject to applicable Google terms and policies.",
        },
      ],
    },
    {
      id: "reporting-and-user-created-data",
      title: "Reporting and user-created data",
      blocks: [
        { type: "p", text: "Mypageseo allows customers to configure local search and GBP reporting." },
        { type: "p", text: "We may store:" },
        {
          type: "list",
          items: [
            "Locations", "Google Place IDs", "GBP location IDs", "Business categories", "Keywords",
            "Report schedules", "Report frequency", "Report run times", "Timezones",
            "Map and grid settings", "Competitor selections", "Citation lists and statuses",
            "GBP posts", "Post schedules", "Post publication status", "Call-to-action links",
            "Event and offer information",
          ],
        },
        { type: "p", text: "Mypageseo may also generate and store its own calculated information, including:" },
        {
          type: "list",
          items: [
            "Rank positions", "Ranking averages", "Ranking changes over time", "GBP audit scores",
            "Report results", "Other calculations generated by the Services",
          ],
        },
        {
          type: "p",
          text: "Reports may automatically refresh according to the customer's selected schedule. Customers may also manually refresh certain reports using purchased tokens.",
        },
      ],
    },
    {
      id: "artificial-intelligence-features",
      title: "Artificial intelligence features",
      blocks: [
        { type: "p", text: "Mypageseo uses third-party artificial intelligence providers, which currently include:" },
        { type: "list", items: ["OpenAI", "Google Gemini", "Anthropic Claude"] },
        { type: "p", text: "Additional providers may be introduced in the future." },
        { type: "p", text: "AI features may include:" },
        {
          type: "list",
          items: [
            "AI-generated GBP post text", "AI-generated images", "AI-assisted review analysis",
            "AI-generated review responses", "AI visibility checks",
            "Other AI-assisted reporting and content features",
          ],
        },
        { type: "p", text: "Depending on the feature, information sent to an AI provider may include:" },
        {
          type: "list",
          items: [
            "Business name", "Business category", "Business location", "Website URL", "Keywords",
            "User instructions", "User prompts", "Review text",
            "Other information necessary to perform the requested AI feature",
          ],
        },
        { type: "p", text: "We do not use Google user data to train our own AI models." },
        {
          type: "p",
          text: "We configure and use third-party AI services through their applicable APIs and commercial terms. Third-party AI providers may process information according to their own privacy policies and service terms.",
        },
        {
          type: "p",
          text: "For example, OpenAI currently states that data submitted through its API is not used to train or improve its models by default, although certain API operational or abuse-monitoring data may be retained under OpenAI's applicable policies.",
        },
        {
          type: "p",
          text: "We do not represent that every future AI provider will have identical data practices. When providers change or new providers are introduced, this Privacy Policy may be updated accordingly.",
        },
        { type: "h3", text: "AI-generated information" },
        {
          type: "p",
          text: "AI-generated content and analysis may be inaccurate, incomplete, outdated, inappropriate, or unsuitable for a particular business.",
        },
        { type: "p", text: "Mypageseo does not guarantee the accuracy of AI-generated content." },
        {
          type: "p",
          text: "Customers are responsible for reviewing AI-generated material before publication and for the consequences of publishing or relying upon AI-generated information.",
        },
        {
          type: "p",
          text: "If a customer enables automated publishing, the customer remains responsible for the content published through that feature.",
        },
      ],
    },
    {
      id: "billing-and-payment",
      title: "Billing and payment information",
      blocks: [
        { type: "p", text: "Payments for Mypageseo subscriptions and token purchases are processed through **PayPal**." },
        {
          type: "p",
          text: "Mypageseo does not store customers' credit-card numbers, debit-card numbers, bank-account credentials, or full payment credentials.",
        },
        { type: "p", text: "We may receive and store information provided by PayPal necessary to administer billing, including:" },
        {
          type: "list",
          items: [
            "PayPal subscription ID", "Plan ID", "Payer name", "Payer email", "Subscription status",
            "Billing dates", "Coupon information", "Payment history", "Token purchase history",
            "Subscription and payment status",
          ],
        },
        { type: "p", text: "Customers are responsible for maintaining accurate billing information with PayPal." },
        {
          type: "p",
          text: "Payments may be charged in USD for US customers and CAD for Canadian customers. PayPal may convert and settle amounts in accordance with its applicable processes and currency-conversion rules.",
        },
        {
          type: "p",
          text: "Mypageseo ultimately receives settlement through PayPal into the company's Indian banking arrangements.",
        },
      ],
    },
    {
      id: "contact-forms-and-sales",
      title: "Contact forms and sales information",
      blocks: [
        { type: "p", text: "Visitors who contact Mypageseo may voluntarily provide:" },
        {
          type: "list",
          items: [
            "Full name", "Business name", "Email address", "Phone number", "Website",
            "Business location", "Company size", "Area of interest", "Business goals",
            "Business challenges", "Other information included in the inquiry",
          ],
        },
        { type: "p", text: "We use this information to:" },
        {
          type: "list",
          items: [
            "Respond to inquiries", "Provide requested information",
            "Communicate with prospective customers", "Conduct sales follow-up",
            "Provide product information",
            "Send newsletters and promotional communications where permitted",
            "Announce products, features, offers, or other business information",
          ],
        },
        {
          type: "p",
          text: "You may unsubscribe from promotional communications using the unsubscribe mechanism provided in the relevant communication.",
        },
        {
          type: "p",
          text: "We do not treat an unsubscribe request as a request to stop necessary transactional communications such as password resets, account-security notices, billing notices, or other service communications.",
        },
        {
          type: "p",
          text: "For recipients in Canada, commercial electronic messages will be sent in accordance with applicable anti-spam requirements, including consent, identification, and unsubscribe requirements where applicable.",
        },
      ],
    },
    {
      id: "email-and-transactional-communications",
      title: "Email and transactional communications",
      blocks: [
        { type: "p", text: "Mypageseo uses email services to send transactional communications such as:" },
        {
          type: "list",
          items: [
            "Email verification", "Password-reset messages", "Billing receipts", "Subscription notices",
            "Account notifications", "Security notifications", "Other service-related communications",
          ],
        },
        { type: "p", text: "We may use more than one email delivery mechanism depending on the type of communication." },
      ],
    },
    {
      id: "white-label-reporting",
      title: "White-label reporting",
      blocks: [
        { type: "p", text: "Mypageseo may provide or introduce white-label functionality for agencies." },
        { type: "p", text: "Where enabled, an agency may provide:" },
        {
          type: "list",
          items: [
            "Agency branding", "Agency name", "Agency logo", "Agency website", "Brand colors",
            "Header and footer text", "Report access passwords", "External report links",
          ],
        },
        {
          type: "p",
          text: "White-label reports may be hosted on a generic Mypageseo-controlled domain rather than on the agency's own server.",
        },
        { type: "p", text: "An agency may present a white-label report to its customer as part of the agency's own service." },
        { type: "p", text: "The agency remains responsible for:" },
        {
          type: "list",
          items: [
            "Its relationship with its customers",
            "Obtaining appropriate authorization from its customers",
            "The information it provides to Mypageseo",
            "The reports and representations it makes to its customers",
            "Complying with applicable privacy and data-protection requirements in its relationship with those customers",
          ],
        },
      ],
    },
    {
      id: "technical-logs",
      title: "Technical logs",
      blocks: [
        { type: "p", text: "Our servers and systems may automatically record technical information, including:" },
        {
          type: "list",
          items: [
            "IP address", "Browser or user-agent information", "Requested URL", "Timestamp",
            "Login/logout activity", "Error information", "Security events",
            "Abuse-prevention information",
          ],
        },
        { type: "p", text: "We use technical logs for:" },
        {
          type: "list",
          items: [
            "Security", "Debugging", "Troubleshooting", "Fraud and abuse prevention",
            "System reliability", "Service administration", "Legal and regulatory compliance",
          ],
        },
        // TODO: confirm final production log-retention period and backup deletion period.
        {
          type: "p",
          text: "System and error logs are currently intended to be retained for no longer than approximately six months, subject to operational requirements, security needs, legal obligations, backups, and technical limitations.",
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies and similar technologies",
      blocks: [
        {
          type: "p",
          text: "At the time this Privacy Policy was prepared, Mypageseo does not intentionally operate advertising cookies or behavioral tracking cookies on the website.",
        },
        { type: "p", text: "The Services may nevertheless use technically necessary mechanisms required for:" },
        { type: "list", items: ["Authentication", "Sessions", "Security", "Account functionality", "Service operation"] },
        {
          type: "p",
          text: "If Mypageseo introduces analytics cookies, advertising technologies, pixels, behavioral tracking, or similar technologies in the future, this Privacy Policy and, where appropriate, a separate Cookie Policy will be updated.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "How we use information",
      blocks: [
        { type: "p", text: "Depending on the circumstances, we use information to:" },
        {
          type: "list",
          ordered: true,
          items: [
            "Create and administer accounts.", "Authenticate users.", "Provide the Mypageseo Services.",
            "Generate reports.", "Manage Google Business Profiles.", "Generate and publish GBP posts.",
            "Analyze and respond to reviews.", "Perform AI-assisted features.",
            "Process subscriptions and token purchases.", "Provide customer support.",
            "Send transactional communications.", "Send marketing communications where permitted.",
            "Maintain security.", "Detect and prevent fraud, abuse, and unauthorized access.",
            "Debug and improve the Services.", "Maintain technical records.",
            "Comply with legal obligations.", "Enforce our Terms and policies.",
            "Protect Mypageseo, our users, and third parties.",
            "Perform other purposes disclosed to you when information is collected.",
          ],
        },
        { type: "p", text: "We do not sell customer personal information as a business model." },
        { type: "p", text: "We do not use Google API user data for advertising." },
      ],
    },
    {
      id: "how-we-share-information",
      title: "How we share information",
      blocks: [
        { type: "p", text: "We may disclose information to third parties where necessary to operate the Services, including:" },
        { type: "h3", text: "Google" },
        { type: "p", text: "For Google OAuth, Google Business Profile, and Google Places functionality." },
        { type: "h3", text: "PayPal" },
        { type: "p", text: "For payment processing, subscription management, billing, and payment-related records." },
        { type: "h3", text: "AI providers" },
        {
          type: "p",
          text: "OpenAI, Google Gemini, Anthropic Claude, and future AI providers may receive information necessary to perform AI features requested or enabled by customers.",
        },
        { type: "h3", text: "Hosting and infrastructure providers" },
        {
          type: "p",
          text: "Mypageseo currently operates its principal application infrastructure using a **Contabo VPS**, with MongoDB and file storage hosted on that infrastructure.",
        },
        { type: "p", text: "Infrastructure providers may change over time." },
        { type: "h3", text: "Email providers" },
        { type: "p", text: "We use SMTP/email infrastructure to send transactional and other permitted communications." },
        { type: "h3", text: "Professional advisers and authorities" },
        {
          type: "p",
          text: "We may disclose information to professional advisers, regulators, courts, law-enforcement authorities, or other parties where reasonably necessary to:",
        },
        {
          type: "list",
          items: [
            "Comply with law", "Respond to lawful requests", "Protect rights or property",
            "Investigate fraud or abuse", "Protect security", "Enforce agreements",
          ],
        },
        { type: "h3", text: "Business transfers" },
        {
          type: "p",
          text: "If Mypageseo or substantially all of its assets are involved in a merger, acquisition, restructuring, financing, sale, or similar transaction, information may be transferred as part of that transaction, subject to applicable law and any requirements imposed by Google or other providers.",
        },
        { type: "p", text: "We do not sell personal information to data brokers." },
      ],
    },
    {
      id: "international-data-transfers",
      title: "International data transfers",
      blocks: [
        { type: "p", text: "Mypageseo operates from India, while many customers are located in the United States and Canada." },
        { type: "p", text: "Information may therefore be collected in one country and processed, stored, or accessed in another." },
        { type: "p", text: "Data may be processed in:" },
        {
          type: "list",
          items: [
            "India", "The United States", "Canada",
            "Other jurisdictions where our service providers or infrastructure operate",
          ],
        },
        { type: "p", text: "Third-party providers may process information under their own privacy policies and contractual arrangements." },
        {
          type: "p",
          text: "Where applicable privacy law requires additional safeguards for international transfers, Mypageseo will use measures required by that law.",
        },
      ],
    },
    {
      id: "data-retention",
      title: "Data retention",
      blocks: [
        { type: "p", text: "We generally retain account information while your account remains active." },
        {
          type: "p",
          text: "When you delete your account, our current policy is to permanently delete account-related data within approximately **30 days**, subject to:",
        },
        {
          type: "list",
          items: [
            "Legal retention requirements", "Fraud/security investigations", "Outstanding disputes",
            "Backup systems", "Technical limitations", "Information that must be retained by law",
          ],
        },
        { type: "p", text: "Account data scheduled for deletion may include:" },
        {
          type: "list",
          items: [
            "Profile data", "Locations", "Reports", "Posts", "OAuth tokens", "Login records",
            "Other account-specific information",
          ],
        },
        {
          type: "p",
          text: "Google OAuth credentials are intended to be revoked immediately when an account is deleted or Google is disconnected.",
        },
        { type: "p", text: "Google Place IDs may be retained where permitted by Google's policies." },
        {
          type: "p",
          text: "Certain operational, billing, legal, accounting, security, or audit records may be retained longer where reasonably necessary or legally required.",
        },
      ],
    },
    {
      id: "security",
      title: "Security",
      blocks: [
        {
          type: "p",
          text: "We use reasonable technical and organizational measures intended to protect information from unauthorized access, alteration, disclosure, loss, or destruction.",
        },
        { type: "p", text: "These measures may include:" },
        {
          type: "list",
          items: [
            "Password hashing", "Authentication controls", "Access controls",
            "Restricted administrative access", "Server security", "Token management",
            "Monitoring and logging", "Security testing and maintenance",
            "Backup and recovery measures",
          ],
        },
        { type: "p", text: "No internet-based service can guarantee absolute security." },
        {
          type: "p",
          text: "You are responsible for protecting your account credentials and notifying Mypageseo if you believe your account has been compromised.",
        },
      ],
    },
    {
      id: "your-privacy-rights",
      title: "Your privacy rights",
      blocks: [
        {
          type: "p",
          text: "Depending on your location and applicable law, you may have rights concerning your personal information, including rights to:",
        },
        {
          type: "list",
          items: [
            "Access personal information", "Request correction", "Request deletion",
            "Request information about how data is used", "Request a copy or export of information",
            "Withdraw consent where processing is based on consent", "Disconnect Google",
            "Object to or restrict certain processing", "Opt out of certain marketing communications",
            "Exercise other rights provided by applicable law",
          ],
        },
        { type: "p", text: "These rights are subject to legal exceptions and limitations." },
        { type: "p", text: "To request access, correction, deletion, export, or other privacy assistance, contact:" },
        { type: "address", lines: [E] },
        { type: "p", text: "We may need to verify your identity before completing certain requests." },
      ],
    },
    {
      id: "california-privacy-rights",
      title: "California privacy rights",
      blocks: [
        {
          type: "p",
          text: `If the California Consumer Privacy Act, as amended by the California Privacy Rights Act ("CCPA"), applies to you and to Mypageseo's processing, you may have rights including:`,
        },
        {
          type: "list",
          items: [
            "Right to know about personal information collected and used",
            "Right to access certain personal information", "Right to request deletion",
            "Right to request correction", "Right to opt out of sale or sharing where applicable",
            "Right to limit certain uses of sensitive personal information where applicable",
            "Right to non-discrimination for exercising applicable privacy rights",
          ],
        },
        { type: "p", text: "Mypageseo does **not sell personal information**." },
        {
          type: "p",
          text: "Mypageseo does not use personal information for cross-context behavioral advertising and does not intend to share personal information for that purpose.",
        },
        {
          type: "p",
          text: "Because the CCPA applies only to businesses and circumstances within its statutory scope, these rights are provided where the CCPA is legally applicable.",
        },
        { type: "p", text: "We do not discriminate against users for exercising privacy rights available to them under applicable law." },
        { type: "p", text: "Requests may be submitted to:" },
        { type: "address", lines: [E] },
      ],
    },
    {
      id: "canadian-privacy-rights",
      title: "Canadian privacy rights",
      blocks: [
        {
          type: "p",
          text: `Mypageseo recognizes the importance of Canadian privacy requirements, including the Personal Information Protection and Electronic Documents Act ("PIPEDA") and applicable provincial privacy legislation.`,
        },
        {
          type: "p",
          text: "Where applicable, we will handle personal information in accordance with relevant Canadian privacy requirements concerning:",
        },
        {
          type: "list",
          items: [
            "Accountability", "Identifying purposes", "Consent", "Limiting collection",
            "Limiting use, disclosure, and retention", "Accuracy", "Safeguards", "Openness",
            "Access", "Challenging compliance",
          ],
        },
        { type: "p", text: "If you have a privacy concern, please contact us first at:" },
        { type: "address", lines: [E] },
        { type: "p", text: "We will investigate and respond to privacy requests and complaints in accordance with applicable law." },
      ],
    },
    {
      id: "marketing-communications",
      title: "Marketing communications",
      blocks: [
        { type: "p", text: "You may receive promotional communications from Mypageseo where permitted by applicable law." },
        { type: "p", text: "These may include:" },
        {
          type: "list",
          items: [
            "Product announcements", "Newsletters", "Offers", "Feature announcements",
            "Educational content", "Sales communications",
          ],
        },
        { type: "p", text: "Every applicable commercial electronic message will include an unsubscribe mechanism." },
        { type: "p", text: "You may unsubscribe at any time." },
        {
          type: "p",
          text: "Unsubscribing from marketing communications does not prevent us from sending necessary transactional or service-related communications.",
        },
      ],
    },
    {
      id: "children",
      title: "Children",
      blocks: [
        {
          type: "p",
          text: "Mypageseo is intended for businesses and professional users and is not directed toward children.",
        },
        { type: "p", text: "You must be at least **18 years old** to use the Services." },
        {
          type: "p",
          text: "We do not knowingly collect personal information from children under 18 for the purpose of providing the Services.",
        },
        { type: "p", text: "If you believe a child has provided personal information to us, contact:" },
        { type: "address", lines: [E] },
      ],
    },
    {
      id: "customer-controlled-business-data",
      title: "Customer-controlled business data",
      blocks: [
        { type: "p", text: "Customers retain ownership and control of their business data and content submitted to Mypageseo." },
        { type: "p", text: "Mypageseo does not claim ownership of:" },
        {
          type: "list",
          items: [
            "Customer business information", "Customer-provided text", "Customer-uploaded files",
            "Customer logos", "Customer-created GBP content", "Customer keywords",
            "Customer client information", "Customer reports or business-specific information",
          ],
        },
        {
          type: "p",
          text: "Mypageseo receives only the rights reasonably necessary to host, process, transmit, analyze, display, and otherwise provide the Services.",
        },
        { type: "p", text: "This does not transfer ownership of customer data to Mypageseo." },
        {
          type: "p",
          text: "Mypageseo retains ownership of its own account records, billing records, technical records, security information, software, systems, algorithms, methodologies, and intellectual property.",
        },
      ],
    },
    {
      id: "ai-generated-output",
      title: "AI-generated output",
      blocks: [
        {
          type: "p",
          text: "Mypageseo does not claim ownership over individual AI responses merely because they were generated through the Services.",
        },
        {
          type: "p",
          text: "AI-generated output may be subject to the rights, licenses, terms, or restrictions of the underlying AI provider and applicable law.",
        },
        { type: "p", text: "Customers are responsible for determining whether generated material is suitable for their intended use." },
      ],
    },
    {
      id: "third-party-services",
      title: "Third-party services",
      blocks: [
        { type: "p", text: "The Services depend on third-party services, APIs, infrastructure, and platforms." },
        { type: "p", text: "These may include:" },
        {
          type: "list",
          items: [
            "Google", "PayPal", "OpenAI", "Google Gemini", "Anthropic Claude", "Email providers",
            "Hosting providers", "Database/infrastructure providers",
            "Other providers introduced in the future",
          ],
        },
        {
          type: "p",
          text: "Third-party services are subject to their own terms, policies, availability, and technical limitations.",
        },
        { type: "p", text: "Mypageseo does not control third-party services and cannot guarantee their continuous availability." },
      ],
    },
    {
      id: "changes-to-this-policy",
      title: "Changes to this Privacy Policy",
      blocks: [
        { type: "p", text: "We may update this Privacy Policy from time to time." },
        { type: "p", text: "Changes may be made to reflect:" },
        {
          type: "list",
          items: [
            "New features", "New data practices", "Changes in law", "Changes in service providers",
            "Security improvements", "Business changes", "Regulatory requirements",
          ],
        },
        { type: "p", text: "The updated Privacy Policy will be posted on the applicable Mypageseo website or application." },
        { type: "p", text: "Where required by law, we will provide additional notice or obtain consent." },
      ],
    },
    {
      id: "contact-us",
      title: "Contact us",
      blocks: [
        { type: "p", text: "For privacy questions, requests, complaints, or concerns:" },
        ...companyContactBlocks,
      ],
    },
    {
      id: "third-party-policy-links",
      title: "Important third-party policy links",
      blocks: [
        {
          type: "p",
          text: "Mypageseo's use of third-party services may also be governed by their respective policies and terms, including Google's applicable API policies, Google's Privacy Policy, Google Maps Platform terms, PayPal's policies, and applicable AI provider terms.",
        },
        { type: "p", text: "Users should review the applicable third-party policies when using an integration." },
      ],
    },
  ],
};
