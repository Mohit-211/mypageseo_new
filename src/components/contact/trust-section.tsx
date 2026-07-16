import { ShieldCheck, Star } from "lucide-react";
import { trust } from "./contact-data";
import { RevealCard } from "./reveal-card";

export function TrustSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Why teams choose MyPageSEO</div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            Focused specialists. Real reporting. Software that helps.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trust.map((t, i) => (
            <RevealCard key={t.t} i={i} delayGroup={3}>
              <div className="rounded-2xl bg-card ring-soft p-6 h-full hover:shadow-lift transition-all">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <t.i className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{t.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.d}</p>
              </div>
            </RevealCard>
          ))}
          <div className="rounded-2xl bg-primary text-primary-foreground p-6 relative overflow-hidden">
            <div aria-hidden className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-accent/25 blur-2xl" />
            <ShieldCheck className="w-6 h-6 mb-3" />
            <h3 className="font-semibold">Local SEO, done right.</h3>
            <p className="mt-1.5 text-sm text-primary-foreground/80 leading-relaxed">
              Every conversation with our team is grounded in real Local SEO data — never guesswork.
            </p>
          </div>
          <RevealCard i={0} delayGroup={1}>
            <div className="rounded-2xl bg-card ring-soft p-6 h-full">
              <Star className="w-5 h-5 text-accent mb-3" />
              <h3 className="font-semibold text-foreground">Client retention that speaks for us.</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                The majority of our clients stay with us year after year — because Local SEO is a long game and we play it well.
              </p>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
}
