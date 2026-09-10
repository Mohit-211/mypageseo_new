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
        <Field label="Business email" name="business_email" type="email" required value={values.business_email} onChange={(v) => onChange({ business_email: v })} />
        <Field label="Full name" name="full_name" value={values.full_name} onChange={(v) => onChange({ full_name: v })} />
        <Field label="Phone number" name="phone_number" type="tel" value={values.phone_number} onChange={(v) => onChange({ phone_number: v })} />
      </div>
    </Panel>
  );
}