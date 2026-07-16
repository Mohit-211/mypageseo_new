"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-xs font-medium text-primary mb-5">
            <Mail className="w-3.5 h-3.5" /> Newsletter
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            Local SEO insights, delivered.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            One thoughtful email each month with practical local search tactics, platform updates, and case studies. No spam, no fluff — unsubscribe anytime.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) {
                setSubbed(true);
                setEmail("");
              }
            }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-5 py-3.5 rounded-xl bg-card ring-soft focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm placeholder:text-muted-foreground"
            />
            <button className="px-6 py-3.5 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:opacity-95 transition shadow-lift whitespace-nowrap">
              Subscribe
            </button>
          </form>
          {subbed && (
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-700 animate-fade-up">
              <CheckCircle2 className="w-4 h-4" /> You&apos;re on the list. Watch your inbox.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
