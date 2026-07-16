import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArticleCTA() {
  return (
    <section className="pb-20">
      <div className="container-page">
        <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-10 md:p-14 shadow-lift">
          <div aria-hidden className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-accent/25 blur-3xl" />
          <div aria-hidden className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display leading-tight">
                Ready to put this into practice?
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Whether you&apos;d like our team to run the playbook for you or prefer to use the software yourself, we can help you turn what you just read into measurable local growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/services" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card text-primary text-sm font-semibold hover:opacity-95 transition">
                Explore Our Services
              </Link>
              <Link href="/software" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:opacity-95 transition">
                Try the Software <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
