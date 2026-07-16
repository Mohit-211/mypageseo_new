import { contactMethods } from "./contact-data";

export function ContactInfoCards() {
  return (
    <div className="space-y-4">
      <div className="mb-2">
        <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">More ways to connect</div>
        <h2 className="text-2xl md:text-3xl font-display text-foreground leading-tight">Reach us however feels easiest.</h2>
      </div>
      {contactMethods.map((c) => (
        <div key={c.t} className="rounded-2xl bg-card ring-soft p-5 hover:shadow-lift transition-all">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center flex-shrink-0">
              <c.i className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">{c.t}</div>
              <div className="text-base font-semibold text-foreground truncate">{c.v}</div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
