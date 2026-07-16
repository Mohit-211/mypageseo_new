export function CredibilitySection() {
  return (
    <section className="border-y border-border/60 bg-surface/60">
      <div className="container-page py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <p className="text-sm text-muted-foreground max-w-sm">
            Helping local businesses improve their visibility across North
            America — one Google Business Profile at a time.
          </p>
          <div className="flex-1 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center opacity-70">
            {[
              "Northline Dental",
              "Kessler Law",
              "Summit HVAC",
              "Coastal Auto",
              "Meridian Clinic",
              "Cedar & Oak",
            ].map((n) => (
              <div
                key={n}
                className="text-center text-xs md:text-sm font-semibold tracking-tight text-muted-foreground whitespace-nowrap"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
