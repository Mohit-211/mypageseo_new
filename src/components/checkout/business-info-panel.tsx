import { Panel } from "./panel";
import { Field } from "./form-field";
import type { BusinessDetails } from "@/api/subscription.api";

export function BusinessInfoPanel({
  values,
  onChange,
}: {
  values: BusinessDetails;
  onChange: (patch: Partial<BusinessDetails>) => void;
}) {
  return (
    <Panel step="2" title="About your business" subtitle="This helps us tailor your Local SEO strategy.">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Business name" name="business_name" required value={values.business_name} onChange={(v) => onChange({ business_name: v })} />
        <Field label="Website URL" name="website_url" type="url" placeholder="https://" value={values.website_url} onChange={(v) => onChange({ website_url: v })} />
        <Field label="Primary business location" name="primary_business_location" placeholder="City, State" value={values.primary_business_location} onChange={(v) => onChange({ primary_business_location: v })} />
        <Field label="Additional locations (optional)" name="additional_locations" placeholder="e.g. 3 more locations" value={values.additional_locations} onChange={(v) => onChange({ additional_locations: v })} />
        <Field label="Industry category" name="industry_category" placeholder="Dental, HVAC, Legal…" value={values.industry_category} onChange={(v) => onChange({ industry_category: v })} />
        <Field label="Company size" name="company_size" placeholder="1–10, 11–50, 51–200…" value={values.company_size} onChange={(v) => onChange({ company_size: v })} />
        <Field label="Full name" name="full_name" value={values.full_name} onChange={(v) => onChange({ full_name: v })} />
        <Field label="Business email" name="business_email" type="email" required value={values.business_email} onChange={(v) => onChange({ business_email: v })} />
        <Field label="Phone number" name="phone_number" type="tel" value={values.phone_number} onChange={(v) => onChange({ phone_number: v })} />
      </div>
    </Panel>
  );
}