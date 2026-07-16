import { faqs } from "@/components/industries/industries-data";
import { FaqItem } from "@/components/services/faq-item";

export function FaqSection() {
  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Common questions.</h2>
        </div>
        <div className="divide-y divide-border/60 rounded-2xl border border-border/70 bg-background shadow-card">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
