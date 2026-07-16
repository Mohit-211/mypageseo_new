import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="container-page py-24">
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-20 md:px-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, color-mix(in oklab, var(--color-primary) 80%, var(--color-accent) 20%) 100%)",
        }}
      >
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "var(--color-accent)" }} />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl bg-white" />
        <h2 className="relative text-3xl md:text-5xl font-semibold tracking-tight text-primary-foreground max-w-3xl mx-auto">
          See what Local SEO looks like for your industry.
        </h2>
        <p className="relative mt-5 text-primary-foreground/80 max-w-xl mx-auto">
          We'll walk through category-specific opportunities, competitor gaps, and a plan tailored to your business.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/15"
          >
            Talk to a Local SEO Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
