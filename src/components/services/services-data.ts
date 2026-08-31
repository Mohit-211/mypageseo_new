import {
  MapPin,
  Building2,
  ShieldCheck,
  Layers,
  Search,
  Star,
  Globe,
  BarChart3,
  Wrench,
  Megaphone,
  Share2,
  MessageSquare,
  PenLine,
  Target,
  FileSearch,
  Users,
  Gauge,
  Link2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  intro: string;
  personality: string;
  features: { icon: LucideIcon; title: string; copy: string }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  accent: string;
};

export const services: Service[] = [
  {
    slug: "mypageseo",
    name: "MyPageSEO",
    icon: MapPin,
    tagline: "Local SEO that puts your business on the map.",
    intro:
      "Our complete Local SEO service helps businesses improve their visibility across Google Search, Google Maps, and the local results that matter most. From Google Business Profile optimization and citation management to local keyword targeting, rankings, reviews, and ongoing strategy, we handle the work required to strengthen your local search presence.",
    personality:
      "A hands-on Local SEO service built around visibility, consistency, and measurable local growth.",
    features: [
      {
        icon: Building2,
        title: "Google Business Profile Management",
        copy: "We optimize and actively manage your Google Business Profile to improve relevance, completeness, engagement, and local visibility.",
      },
      {
        icon: Search,
        title: "Local Keyword Strategy",
        copy: "We identify the searches your customers actually use and build your Local SEO strategy around the locations and services that matter.",
      },
      {
        icon: Link2,
        title: "Citation Management",
        copy: "We build, correct, and monitor business listings across relevant directories to strengthen NAP consistency and local authority.",
      },
      {
        icon: BarChart3,
        title: "Local Ranking Tracking",
        copy: "We monitor your visibility across Google Maps and organic local results so you can see how rankings improve across your target areas.",
      },
    ],
    useCases: [
      "Single-location businesses",
      "Multi-location companies",
      "Home service businesses",
      "Medical and professional practices",
      "Businesses competing in local search",
    ],
    faqs: [
      {
        q: "What does your Local SEO service include?",
        a: "Our Local SEO work can include Google Business Profile optimization, local keyword research, citation management, local landing page recommendations, review strategy, competitor analysis, ranking tracking, and ongoing optimization.",
      },
      {
        q: "How long does Local SEO take to show results?",
        a: "Some improvements can appear within weeks, while stronger ranking gains usually build over several months. The timeline depends on competition, your current visibility, website authority, location, and the condition of your existing local presence.",
      },
    ],
    accent: "primary",
  },

  {
    slug: "mypageads",
    name: "MyPageAds",
    icon: Megaphone,
    tagline: "Paid advertising built around profitable local growth.",
    intro:
      "Our paid advertising service helps businesses generate calls, leads, bookings, and sales through highly targeted campaigns across platforms such as Google and Meta. We manage strategy, targeting, campaign structure, creative direction, optimization, and reporting with a sharp focus on the locations and customers most valuable to your business.",
    personality:
      "Performance advertising managed by people who understand that every click needs a business reason.",
    features: [
      {
        icon: Target,
        title: "Campaign Strategy",
        copy: "We build campaigns around your goals, services, locations, margins, audience, and competitive landscape instead of using generic templates.",
      },
      {
        icon: MapPin,
        title: "Local Audience Targeting",
        copy: "Campaigns are geographically focused to reach potential customers in the cities, neighborhoods, and service areas you actually want.",
      },
      {
        icon: PenLine,
        title: "Ad Creative & Copy",
        copy: "We create and refine ad messaging designed to attract qualified customers and give them a clear reason to choose your business.",
      },
      {
        icon: BarChart3,
        title: "Ongoing Optimization",
        copy: "We monitor campaigns, search terms, audiences, conversions, costs, and performance to continuously improve the efficiency of your ad spend.",
      },
    ],
    useCases: [
      "Lead generation",
      "Local service businesses",
      "Multi-location businesses",
      "Franchises",
      "Businesses entering new markets",
    ],
    faqs: [
      {
        q: "Which advertising platforms do you manage?",
        a: "We primarily manage campaigns across Google Ads and Meta, with additional channels used where they make strategic sense for the business.",
      },
      {
        q: "Is advertising spend included in your service fee?",
        a: "No. Advertising spend is paid directly to the advertising platform and is separate from our campaign management fee.",
      },
    ],
    accent: "accent",
  },

  {
    slug: "mypagesmo",
    name: "MyPageSMO",
    icon: Share2,
    tagline: "Social media management with an actual business purpose.",
    intro:
      "Our Social Media Optimization and management service helps businesses build a consistent, credible, and engaging presence across the platforms their customers use. We plan content, create posts, maintain publishing consistency, support audience engagement, and align your social presence with your wider marketing goals.",
    personality:
      "Social media managed as part of your marketing strategy — not a daily race to post something.",
    features: [
      {
        icon: PenLine,
        title: "Content Creation",
        copy: "We create branded social content around your services, expertise, offers, customer needs, and local market.",
      },
      {
        icon: Layers,
        title: "Content Planning",
        copy: "A structured content calendar keeps your communication consistent and gives every post a clear role in your broader marketing strategy.",
      },
      {
        icon: MessageSquare,
        title: "Audience Engagement",
        copy: "We help maintain an active social presence through thoughtful engagement with comments, messages, mentions, and customer interactions.",
      },
      {
        icon: BarChart3,
        title: "Performance Review",
        copy: "We track engagement, reach, audience response, and content performance to understand what deserves more attention.",
      },
    ],
    useCases: [
      "Local businesses",
      "Professional service companies",
      "Multi-location brands",
      "Restaurants and hospitality",
      "Businesses without an internal social media team",
    ],
    faqs: [
      {
        q: "Which social media platforms do you manage?",
        a: "Depending on your business, we can manage channels such as Facebook, Instagram, LinkedIn, and Google Business Profile content.",
      },
      {
        q: "Do you create the social media content too?",
        a: "Yes. Content planning and creation are central parts of the service. We develop content around your brand, services, market, and campaign priorities.",
      },
    ],
    accent: "primary",
  },

  {
    slug: "mypagereputation",
    name: "MyPageReputation",
    icon: MessageSquare,
    tagline: "Build a reputation customers can trust before they call.",
    intro:
      "Our reputation management service helps businesses generate more genuine customer reviews, monitor their online reputation, respond professionally to feedback, and strengthen the trust signals customers see before making a decision. We focus particularly on the review platforms that influence local search visibility and customer confidence.",
    personality:
      "A proactive reputation strategy designed to build trust before a bad review becomes the loudest voice in the room.",
    features: [
      {
        icon: Star,
        title: "Review Generation Strategy",
        copy: "We help create a consistent process for asking satisfied customers for genuine reviews at the right point in their journey.",
      },
      {
        icon: MessageSquare,
        title: "Review Response Management",
        copy: "We help craft professional, brand-appropriate responses to positive and negative reviews across important platforms.",
      },
      {
        icon: ShieldCheck,
        title: "Reputation Monitoring",
        copy: "We keep track of new reviews and important reputation signals so issues can be addressed before they grow.",
      },
      {
        icon: BarChart3,
        title: "Review Performance Tracking",
        copy: "We monitor review volume, ratings, trends, and location-level performance to identify where your reputation is improving and where attention is needed.",
      },
    ],
    useCases: [
      "Local businesses",
      "Medical and dental practices",
      "Restaurants",
      "Home service companies",
      "Multi-location brands",
    ],
    faqs: [
      {
        q: "Can you remove negative reviews?",
        a: "Legitimate reviews generally cannot simply be removed. We can help identify reviews that may violate platform policies, guide dispute options where appropriate, and build a stronger overall reputation through better review generation and response management.",
      },
      {
        q: "Do you respond to reviews on our behalf?",
        a: "Yes. Review response support can be included in the service, with responses written to match your brand voice and escalation rules.",
      },
    ],
    accent: "accent",
  },

  {
    slug: "mypagecontent",
    name: "MyPageContent",
    icon: PenLine,
    tagline: "Search-focused content written for people first.",
    intro:
      "Our SEO content service creates useful, locally relevant content designed to strengthen search visibility and help potential customers understand why they should choose your business. We produce service pages, location pages, landing pages, blog content, Google Business Profile posts, and supporting website copy with strategy and human editorial oversight behind every piece.",
    personality:
      "Content that earns its place on the website instead of existing merely to feed keywords to Google.",
    features: [
      {
        icon: FileSearch,
        title: "SEO Content Strategy",
        copy: "We map topics, services, locations, and search intent before writing so content supports a broader organic growth strategy.",
      },
      {
        icon: Layers,
        title: "Service & Location Pages",
        copy: "We create useful service-area and location-specific pages that target relevant searches without producing thin or repetitive doorway content.",
      },
      {
        icon: PenLine,
        title: "Blog & Website Content",
        copy: "We create articles and supporting website content that answer real customer questions while building topical relevance and authority.",
      },
      {
        icon: ShieldCheck,
        title: "Human Editorial Review",
        copy: "Every piece is reviewed for accuracy, readability, relevance, brand fit, and SEO quality before it is considered finished.",
      },
    ],
    useCases: [
      "Local SEO campaigns",
      "Website expansions",
      "Multi-location businesses",
      "Businesses targeting additional services",
      "Companies building long-term organic visibility",
    ],
    faqs: [
      {
        q: "Do you use AI to create content?",
        a: "We may use AI as part of the research and production workflow, but it does not replace strategy or editorial judgment. Final content is reviewed and refined by humans before delivery or publication.",
      },
      {
        q: "What types of content can you create?",
        a: "We can create service pages, location pages, landing pages, blogs, Google Business Profile posts, FAQs, supporting website copy, and other search-focused content based on your strategy.",
      },
    ],
    accent: "primary",
  },

  {
    slug: "mypagesites",
    name: "MyPageSites",
    icon: Globe,
    tagline: "Web development built for visibility and conversion.",
    intro:
      "Our web design and development service creates fast, modern, search-friendly websites built around your business goals. We combine design, development, technical SEO, conversion strategy, mobile usability, and local search fundamentals to create websites that do more than simply look polished.",
    personality:
      "Websites designed to become business assets — not expensive digital brochures.",
    features: [
      {
        icon: Wrench,
        title: "Custom Web Development",
        copy: "We build modern, responsive websites around your business requirements instead of forcing your brand into a generic one-size-fits-all template.",
      },
      {
        icon: Search,
        title: "SEO-Ready Architecture",
        copy: "Site structure, metadata, internal linking, crawlability, schema, redirects, and technical foundations are considered from the beginning.",
      },
      {
        icon: Gauge,
        title: "Performance Optimization",
        copy: "We optimize websites for speed, mobile usability, Core Web Vitals, and a smoother experience across devices.",
      },
      {
        icon: Smartphone,
        title: "Conversion-Focused Design",
        copy: "Layouts, navigation, calls-to-action, forms, and key landing pages are designed to make it easier for visitors to become customers.",
      },
    ],
    useCases: [
      "New business websites",
      "Website redesigns",
      "Local business websites",
      "Multi-location websites",
      "Businesses with outdated or underperforming websites",
    ],
    faqs: [
      {
        q: "Do you build custom websites or use templates?",
        a: "Our approach depends on the project, but every website is tailored to the business, its brand, content, conversion goals, and SEO requirements rather than being treated as a simple template installation.",
      },
      {
        q: "Can you redesign or migrate my existing website?",
        a: "Yes. We can rebuild or migrate an existing website while preserving important content, URLs, SEO signals, redirects, analytics, and other critical elements of the current site.",
      },
    ],
    accent: "accent",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
