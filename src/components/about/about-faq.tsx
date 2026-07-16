"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { faqs } from "./about-data";

export function AboutFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-14">
        <Reveal>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">FAQ</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Questions people ask before starting.</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Have a different one? Reach out — a specialist will answer within one business day.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              Ask a question <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`rounded-2xl border bg-card overflow-hidden transition-all ${open ? "border-primary/30 shadow-lift" : "border-border shadow-card"}`}>
                  <button onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                    <span className="text-[15px] font-semibold text-foreground">{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                        open ? "bg-primary text-primary-foreground" : "bg-surface-muted text-muted-foreground"
                      }`}
                    >
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div className="grid transition-all duration-300" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
