import type { Metadata } from "next";
import { CheckCircle2, Grid3x3, MailCheck, Search, Zap } from "lucide-react";
import { FreeAuditLoader } from "@/components/free-audit/free-audit-loader";
import { FAQItem } from "@/components/contact/faq-item";

export const metadata: Metadata = {
  title: "Free Local Visibility Audit — See Where You Rank on Google Maps",
  description:
    "Check how your business ranks on Google Maps across 49 points in your area for the search your customers make. Free, in about 20 seconds, for businesses in the US and Canada.",
  alternates: {
    canonical: "/free-audit",
  },
  openGraph: {
    title: "Free Local Visibility Audit | MyPageSEO",
    description: "See where your business shows up on Google Maps — and who ranks above you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const steps = [
  { i: Search, t: "Pick your business", d: "Find it from Google, choose where you want to rank and the search your customers make." },
  { i: Grid3x3, t: "We check 49 points", d: "We search Google Maps from a 7×7 grid around your business or city, the way a nearby customer would." },
  { i: MailCheck, t: "Get the full report", d: "Confirm your email to unlock exact ranks, who's above you, your profile checklist and a PDF." },
];

const faqs = [
  {
    q: "Is the audit really free?",
    a: "Yes. There's no payment and no account. You see a preview straight away; confirming your email unlocks the full report and the PDF.",
  },
  {
    q: "What does the map show?",
    a: "Each square is one point within about 5 km (3 miles) of the centre. Its colour shows where your business ranks on Google Maps when someone searches your keyword from that spot, from the top 3 down to not in the top 30.",
  },
  {
    q: "Which businesses can I check?",
    a: "Any business on Google Maps in the United States or Canada. You can centre the map on your own address or on another city or ZIP code you serve.",
  },
  {
    q: "How many audits can I run?",
    a: "Each business, email and phone number gets 2 free full reports every 90 days. For more keywords or regular tracking, talk to our team.",
  },
  {
    q: "What do you do with my details?",
    a: "We use them to send your report and, if you agree, occasional emails about improving your local visibility. You can unsubscribe at any time.",
  },
];

export default function FreeAuditPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-hero pt-14 pb-10 md:pt-20 md:pb-14">
        <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
        <div className="container-page relative max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-soft">
            <Zap className="h-3.5 w-3.5 text-accent" /> Free local visibility audit
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] text-foreground md:text-6xl">
            Where does your business <span className="text-gradient">really rank</span> on Google Maps?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Your rank changes from street to street. See it across 49 points around you, for the search your
            customers actually make — free, in about 20 seconds.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {["No sign-up for the preview", "US & Canada businesses", "PDF report by email"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-page -mt-2 max-w-5xl">
          <FreeAuditLoader />
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <div className="mb-12 max-w-2xl">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">How it works</div>
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-5xl">
              The view your customers get, in one map.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.t} className="h-full rounded-2xl bg-card p-6 ring-soft">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card shadow-card ring-soft">
                    <s.i className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-xs font-bold text-accent">STEP {i + 1}</div>
                </div>
                <h3 className="font-semibold text-foreground">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">FAQ</div>
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">About the free audit.</h2>
          </div>
          <div className="lg:col-span-2">
            {faqs.map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
