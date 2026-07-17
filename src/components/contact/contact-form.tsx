"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Field, Select } from "./form-fields";
import {
  contactSchema,
  initialContactForm,
  companySizeOptions,
  interestOptions,
  type ContactForm as ContactFormValues,
} from "./contact-data";
import { contactUsAPI } from "@/api/contact.api";


export function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(initialContactForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = (k: keyof ContactFormValues) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
    if (submitError) setSubmitError(null);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof ContactFormValues;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    const result = await contactUsAPI({
      full_name: form.name,
      business_name: form.business,
      email: form.email,
      phone_number: form.phone || undefined,
      business_website: form.website || undefined,
      business_location: form.location || undefined,
      company_size: form.size,
      primary_interest: form.interest,
      goals_or_challenges: form.message,
    });

    setSubmitting(false);

    if (!result.success) {
      setSubmitError(result.message || "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
    setForm(initialContactForm);
  };

  return (
    <div className="rounded-3xl bg-card ring-soft shadow-card p-6 md:p-10">
      {submitted ? (
        <div className="text-center py-10">
          <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7 text-emerald-600" />
          </div>
          <h3 className="mt-5 text-2xl font-display text-foreground">Thanks — message received.</h3>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            A member of the MyPageSEO team will be in touch within one business day. Watch your inbox.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Send another message <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">Start the conversation</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">Tell us about your business — we&apos;ll take it from there.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field id="name" label="Full name" value={form.name} onChange={set("name")} error={errors.name} required autoComplete="name" />
            <Field id="business" label="Business name" value={form.business} onChange={set("business")} error={errors.business} required autoComplete="organization" />
            <Field id="email" label="Email address" type="email" value={form.email} onChange={set("email")} error={errors.email} required autoComplete="email" />
            <Field id="phone" label="Phone number" type="tel" value={form.phone ?? ""} onChange={set("phone")} error={errors.phone} autoComplete="tel" />
            <Field id="website" label="Business website" type="url" value={form.website ?? ""} onChange={set("website")} error={errors.website} autoComplete="url" />
            <Field id="location" label="Business location (city, state)" value={form.location ?? ""} onChange={set("location")} error={errors.location} />
            <Select
              id="size" label="Company size" value={form.size} onChange={set("size")} required error={errors.size}
              options={companySizeOptions}
            />
            <Select
              id="interest" label="Primary interest" value={form.interest} onChange={set("interest")} required error={errors.interest}
              options={interestOptions}
            />
          </div>
          <div className="mt-4">
            <div className="relative">
              <textarea
                id="message" rows={5} value={form.message} required
                onChange={(e) => set("message")(e.target.value)}
                className={`peer w-full rounded-xl bg-card px-4 pt-6 pb-3 text-sm text-foreground ring-1 transition-all outline-none placeholder-transparent focus:ring-2 resize-none ${
                  errors.message ? "ring-accent focus:ring-accent" : "ring-border focus:ring-primary/40"
                }`}
                placeholder="Tell us about your Local SEO goals or challenges"
              />
              <label
                htmlFor="message"
                className={`pointer-events-none absolute left-4 transition-all ${
                  form.message.length > 0
                    ? "top-2 text-[10px] font-semibold uppercase tracking-wider text-primary"
                    : "top-4 text-sm text-muted-foreground peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary"
                }`}
              >
                Your goals or current Local SEO challenges<span className="text-accent">*</span>
              </label>
            </div>
            {errors.message && <p className="mt-1.5 text-xs text-accent">{errors.message}</p>}
          </div>

          {submitError && (
            <div className="mt-4 rounded-lg bg-accent/10 px-4 py-3 text-sm text-accent">
              {submitError}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
            <p className="text-xs text-muted-foreground">
              By submitting, you agree to be contacted by MyPageSEO. We never share your information.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-95 transition shadow-lift disabled:opacity-70"
            >
              {submitting ? "Sending…" : "Start the Conversation"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}