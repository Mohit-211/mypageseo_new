import { faqs } from "@/components/software/software-data";
import { SoftwareFaqItem } from "@/components/software/software-faq-item";

export function FaqSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid lg:grid-cols-3 gap-12">
        <div>
          <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
            Answers before you ask.
          </h2>
        </div>
        <div className="lg:col-span-2">
          {faqs.map((f) => (
            <SoftwareFaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
