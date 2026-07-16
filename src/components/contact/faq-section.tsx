import { faqs } from "./contact-data";
import { FAQItem } from "./faq-item";

export function FaqSection() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="container-page grid lg:grid-cols-3 gap-12">
        <div>
          <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">Answers before you ask.</h2>
          <p className="mt-4 text-muted-foreground text-sm">Still curious? Our team is happy to jump on a quick call.</p>
        </div>
        <div className="lg:col-span-2">
          {faqs.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
