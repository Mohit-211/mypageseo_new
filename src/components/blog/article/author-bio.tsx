import { BookOpen, MapPin, Building2, Star, TrendingUp } from "lucide-react";

const expertise = [
  { i: MapPin, t: "Local SEO" },
  { i: Building2, t: "Google Business Profile" },
  { i: Star, t: "Reviews" },
  { i: TrendingUp, t: "Reporting" },
];

export function AuthorBio() {
  return (
    <section className="py-16 bg-surface">
      <div className="container-page max-w-4xl">
        <div className="rounded-3xl bg-card ring-soft p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
            <BookOpen className="w-9 h-9 text-primary-foreground" />
            <div aria-hidden className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-accent/30 blur-xl" />
          </div>
          <div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Written by</div>
            <h3 className="text-2xl font-display text-foreground">MyPageSEO Editorial Team</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A team of Local SEO specialists focused entirely on how businesses grow through Google Business Profile optimization, local rankings, citations, reputation, and reporting. Everything we publish comes from work we do every day with local businesses across the U.S. and Canada.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {expertise.map((x) => (
                <span key={x.t} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-soft text-xs text-primary font-medium">
                  <x.i className="w-3 h-3" /> {x.t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
