import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-10 md:p-16 shadow-lift">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display leading-tight">
              See what your Local SEO data is really saying.
            </h2>
            <p className="mt-5 text-primary-foreground/80 text-lg">
              Experience the platform firsthand — the reports, the
              recommendations, the clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-95 transition"
              >
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/checkout"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card text-primary font-medium hover:opacity-95 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
