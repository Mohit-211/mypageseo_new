"use client";

import { useState } from "react";
import { Phone, LineChart, BarChart3 } from "lucide-react";
import { Slider } from "./slider";
import { ResultTile } from "./result-tile";

export function RoiCalculator() {
  const [leads, setLeads] = useState(80);
  const [value, setValue] = useState(450);
  const [lift, setLift] = useState(35);

  const extraLeads = Math.round(leads * (lift / 100));
  const extraRevenue = extraLeads * value;
  const annual = extraRevenue * 12;

  return (
    <section className="container-page py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">ROI Calculator</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Think in growth, not monthly cost.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Local SEO is an investment in demand. Estimate the additional calls, appointments, and revenue stronger
            local visibility could unlock for your business.
          </p>
        </div>

        <div className="rounded-3xl border border-border/70 bg-background p-8 shadow-lift">
          <div className="grid gap-6 sm:grid-cols-3">
            <Slider label="Monthly leads" min={10} max={500} value={leads} setValue={setLeads} suffix="" />
            <Slider label="Avg customer value" min={50} max={2000} step={50} value={value} setValue={setValue} suffix="$" prefix />
            <Slider label="Local visibility lift" min={5} max={100} value={lift} setValue={setLift} suffix="%" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <ResultTile icon={Phone} label="Extra leads / mo" value={`+${extraLeads}`} />
            <ResultTile icon={LineChart} label="Extra revenue / mo" value={`$${extraRevenue.toLocaleString()}`} />
            <ResultTile icon={BarChart3} label="Annual impact" value={`$${annual.toLocaleString()}`} highlight />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Illustrative estimate. Actual results depend on market, category, and campaign scope.
          </p>
        </div>
      </div>
    </section>
  );
}
