import { z } from "zod";
import {
  MapPin, Building2, Sparkles, Layers, BarChart3, Link2, Handshake,
  HelpCircle, MessageSquare, Compass, LineChart, Rocket, Mail, Phone,
  Clock, CheckCircle2, type LucideIcon,
} from "lucide-react";

/* -------------------- form schema -------------------- */

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  business: z.string().trim().min(1, "Business name is required").max(120),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  size: z.string().min(1, "Please choose a company size"),
  interest: z.string().min(1, "Please choose a primary interest"),
  message: z.string().trim().min(10, "Tell us a little about your goals (min 10 characters)").max(1500),
});

export type ContactForm = z.infer<typeof contactSchema>;

export const initialContactForm: ContactForm = {
  name: "", business: "", email: "", phone: "", website: "", location: "",
  size: "", interest: "", message: "",
};

export const companySizeOptions = ["Just me", "2–10", "11–50", "51–200", "201–1000", "1000+"];

export const interestOptions = [
  "Local SEO Services", "Google Business Profile Optimization", "Software Demo",
  "Multi-location SEO", "Reporting & Audits", "Citation Management",
  "Partnership Opportunities", "General Question",
];

/* -------------------- static content -------------------- */

export type IconCard = { i: LucideIcon; t: string; d: string };

export const helpCards: IconCard[] = [
  { i: MapPin, t: "Local SEO Services", d: "Full-service Local SEO strategy, execution, and reporting." },
  { i: Building2, t: "Google Business Profile Optimization", d: "Audit, fix, and grow your most important local surface." },
  { i: Sparkles, t: "Local SEO Software Demo", d: "See MyPageSEO Software in action with a guided walkthrough." },
  { i: Layers, t: "Multi-location SEO", d: "Consistent visibility across every location you operate." },
  { i: BarChart3, t: "Reporting & Audits", d: "Independent Local SEO audits and reporting reviews." },
  { i: Link2, t: "Citation Management", d: "Directory clean-up, monitoring, and NAP consistency." },
  { i: Handshake, t: "Partnership Opportunities", d: "For agencies and consultants wanting to white-label." },
  { i: HelpCircle, t: "General Questions", d: "Not sure what fits? Start here and we'll point the way." },
];

export const process: IconCard[] = [
  { i: MessageSquare, t: "Tell Us About Your Business", d: "Share your goals, locations, and current Local SEO picture." },
  { i: Compass, t: "Initial Review", d: "We evaluate your GBP, rankings, citations, and reviews." },
  { i: LineChart, t: "Strategy Discussion", d: "A 30-minute call to walk through findings and next steps." },
  { i: Rocket, t: "Start Growing Locally", d: "You approve the plan. We get to work. You watch the results." },
];

export const trust: IconCard[] = [
  { i: MapPin, t: "Local SEO specialization", d: "Local search is the only thing we do — every hire, every tool, every process." },
  { i: BarChart3, t: "Transparent reporting", d: "Real numbers, real trends, real recommendations — not marketing dashboards." },
  { i: Sparkles, t: "Proprietary software", d: "MyPageSEO Software powers every engagement with tools built specifically for local." },
  { i: LineChart, t: "Measurable results", d: "We report on outcomes — calls, direction requests, and qualified leads." },
  { i: Handshake, t: "Long-term partnerships", d: "Most clients stay with us for years. That's the metric we care about most." },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  { q: "How quickly does the team respond?", a: "Most inquiries receive a response within one business day, Monday through Friday. Urgent requests submitted during business hours are typically answered the same day." },
  { q: "Are consultations free?", a: "Yes. The initial conversation, discovery call, and preliminary Local SEO review are complimentary. There's no obligation to move forward." },
  { q: "Do you work with businesses of all sizes?", a: "We work with single-location businesses, growing multi-location brands, franchises, and agencies. If Local SEO is part of your growth plan, we can help." },
  { q: "Are services available for multiple locations?", a: "Absolutely. Multi-location and franchise Local SEO is one of our specialties, with rollup reporting and per-location strategies designed for scale." },
  { q: "Can I schedule a software demonstration?", a: "Yes. Choose 'Local SEO Software Demo' as your interest and we'll book a guided walkthrough tailored to your business or client base." },
  { q: "Can you review our existing Local SEO reports?", a: "Bring what you have. We're happy to review current reports, audits, or rankings and share an independent perspective during your consultation." },
];

export type ContactMethod = { i: LucideIcon; t: string; v: string; d: string };

export const contactMethods: ContactMethod[] = [
  { i: Mail, t: "Email us", v: "hello@mypageseo.com", d: "The fastest way to reach our team for detailed questions." },
  { i: Phone, t: "Call the team", v: "+1 (888) 555-0142", d: "Speak directly with a Local SEO specialist during business hours." },
  { i: Clock, t: "Office hours", v: "Mon–Fri · 9:00 AM – 6:00 PM ET", d: "We're here every business day across U.S. and Canadian time zones." },
  { i: CheckCircle2, t: "Response time", v: "Within 1 business day", d: "Most inquiries receive a thoughtful reply within a few hours." },
];
