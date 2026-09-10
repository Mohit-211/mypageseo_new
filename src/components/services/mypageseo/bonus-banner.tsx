import { CheckCircle2, Sparkles } from "lucide-react";
import { bonusPoints } from "./mypageseo-extras-data";

export function BonusBanner() {
  return (
    <section className="container-page py-4 md:py-8">
      <div
        className="relative overflow-hidden rounded-3xl px-6 py-14 md:px-14 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent) 0%, color-mix(in oklab, var(--color-accent) 75%, var(--color-primary) 25%) 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Included with every plan
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-accent-foreground">
              Two things most agencies charge extra for — we don&apos;t.
            </h2>

            <div className="mt-8 space-y-5">
              {bonusPoints.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 text-accent-foreground">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-semibold text-accent-foreground">
                      {p.title}
                    </p>
                    <p className="mt-1 text-sm text-accent-foreground/80 leading-relaxed">
                      {p.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock preview card */}
          <div className="rounded-2xl bg-white/95 p-5 shadow-lift backdrop-blur">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <p className="text-sm font-semibold text-foreground">
                Lakeside Plumbing Co.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                <CheckCircle2 className="h-3.5 w-3.5" /> Active
              </span>
            </div>

            <div className="mt-4">
              <p className="text-xs font-medium text-muted-foreground">
                Posts this month
              </p>
              <div className="mt-2 grid grid-cols-7 gap-1.5">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded ${
                      i % 6 === 0 ? "bg-accent" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-surface/60 p-3">
              <p className="text-xs font-medium text-foreground">
                New review reply — auto-sent
              </p>
              <p className="mt-1 text-xs italic text-muted-foreground">
                &quot;Thank you so much for the kind words — we&apos;re thrilled
                you had a great experience!&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
