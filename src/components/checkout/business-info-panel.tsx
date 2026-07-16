import { Panel } from "./panel";
import { Field } from "./form-field";

export function BusinessInfoPanel() {
  return (
    <Panel step="2" title="About your business" subtitle="This helps us tailor your Local SEO strategy.">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Business name" name="business" required />
        <Field label="Website URL" name="website" type="url" placeholder="https://" required />
        <Field label="Primary business location" name="location" placeholder="City, State" required />
        <Field label="Additional locations (optional)" name="locations" placeholder="e.g. 3 more locations" />
        <Field label="Industry category" name="industry" placeholder="Dental, HVAC, Legal…" required />
        <Field label="Company size" name="size" placeholder="1–10, 11–50, 51–200…" />
        <Field label="Full name" name="name" required />
        <Field label="Business email" name="email" type="email" required />
        <Field label="Phone number" name="phone" type="tel" required />
      </div>
    </Panel>
  );
}
