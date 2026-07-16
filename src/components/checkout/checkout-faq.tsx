"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "When does onboarding begin?",
    a: "Your specialist reaches out within one business day to kick off the 14-day onboarding sprint.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. Upgrades are prorated and take effect at the start of your next billing cycle.",
  },
  {
    q: "How do setup fees work?",
    a: "The one-time fee covers your audit, technical foundation, citation cleanup, and dashboard setup.",
  },
  {
    q: "Can I add locations later?",
    a: "Absolutely. You can add locations mid-cycle and we'll adjust your plan tier if needed.",
  },
  {
    q: "What happens right after payment?",
    a: "You'll get an email confirmation, dashboard access, and a scheduling link for your kickoff call.",
  },
  {
    q: "How quickly will your team reach out?",
    a: "Within one business day — usually the same day if you check out before 3pm ET.",
  },
];

export function CheckoutFaq() {
  return (
    <section className="container-page pb-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Checkout questions</h2>
        <p className="mt-3 text-muted-foreground">Quick answers to what happens after you complete your order.</p>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {faqs.map((f) => (
          <FaqRow key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border/70 bg-background shadow-card">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`grid overflow-hidden px-5 transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
