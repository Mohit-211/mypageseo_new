import Link from "next/link";
import { ArrowRight, Navigation, Phone, Trophy, Users2 } from "lucide-react";

const outcomeIcons = [
  { icon: Phone, k: "Calls, not clicks" },
  { icon: Navigation, k: "Directions & visits" },
  { icon: Users2, k: "Real customers" },
];

export function AboutFinalCta() {
  return (
    <section className="container-page pb-24">
      <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-primary-foreground">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-[oklch(0.28_0.04_225)]" aria-hidden />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" aria-hidden />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
              <Trophy className="h-3 w-3 text-accent" /> Ready when you are
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight leading-tight">
              How visible is your business in local search — really?
            </h2>
            <p className="mt-4 text-primary-foreground/75 text-lg max-w-lg leading-relaxed">
              Discover where you stand today and what it would take to become the obvious choice in your market.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/software"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition"
            >
              Explore the Software
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-95 transition"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-2 mt-6 grid grid-cols-3 gap-4 text-center border-t border-white/10 pt-6">
            {outcomeIcons.map((i) => (
              <div key={i.k} className="flex flex-col items-center gap-2 text-primary-foreground/80 text-xs sm:text-sm">
                <i.icon className="h-4 w-4 text-accent" />
                {i.k}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
