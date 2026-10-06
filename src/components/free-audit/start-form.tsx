"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Building2, Map } from "lucide-react";
import { startAudit, type AuditView } from "@/api/free-audit.api";
import { PlaceAutocomplete, type PickedPlace } from "./place-autocomplete";
import { ErrorNotice, FormTerms, PrimaryButton, TextField, useTurnstileToken } from "./audit-ui";
import { friendlyError, type FriendlyError } from "./free-audit-data";

export interface StartInput {
  business: PickedPlace | null;
  centerSource: "business" | "city";
  city: PickedPlace | null;
  keyword: string;
}

export const emptyStart: StartInput = { business: null, centerSource: "business", city: null, keyword: "" };

type FieldErrors = Partial<Record<"business" | "city" | "keyword", string>>;

export function StartForm({
  initial,
  notice,
  onStarted,
}: {
  initial: StartInput;
  notice?: string | null;
  onStarted: (view: AuditView & { access_token: string }, input: StartInput) => void;
}) {
  const [input, setInput] = useState<StartInput>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<FriendlyError | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const turnstile = useTurnstileToken();

  const update = (patch: Partial<StartInput>) => {
    setInput((v) => ({ ...v, ...patch }));
    setErrors((e) => ({ ...e, ...Object.fromEntries(Object.keys(patch).map((k) => [k === "centerSource" ? "city" : k, undefined])) }));
    setSubmitError(null);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const keyword = input.keyword.trim();
    const next: FieldErrors = {};
    if (!input.business) next.business = "Pick your business from the list.";
    if (input.centerSource === "city" && !input.city) next.city = "Pick a city or ZIP code from the list.";
    if (keyword.length < 2 || keyword.length > 80) next.keyword = "Enter a keyword between 2 and 80 characters.";
    setErrors(next);
    if (Object.keys(next).length || !input.business) return;
    if (!turnstile.token) {
      setSubmitError({ message: "Please wait for the security check to finish." });
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const view = await startAudit({
        turnstile_token: turnstile.token,
        place_id: input.business.place_id,
        session: input.business.session,
        keyword,
        center:
          input.centerSource === "city" && input.city
            ? { source: "city", place_id: input.city.place_id, session: input.city.session }
            : { source: "business" },
      });
      onStarted(view, { ...input, keyword });
    } catch (err) {
      const friendly = friendlyError(err);
      if (friendly.reason === "no_location") {
        setInput((v) => ({ ...v, centerSource: "city" }));
        setErrors({ city: friendly.message });
      } else if (friendly.reason === "city_not_found") {
        setErrors({ city: friendly.message });
      } else {
        setSubmitError(friendly);
      }
      setSubmitting(false);
    } finally {
      turnstile.reset();
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-card p-6 shadow-card ring-soft md:p-10">
      <div className="mb-6">
        <h2 className="font-display text-2xl text-foreground md:text-3xl">Run your free audit</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Three quick details. Results in about 20 seconds. No sign-up needed to see the preview.
        </p>
      </div>

      {notice && <ErrorNotice error={{ message: notice }} className="mb-6" />}

      <div className="space-y-6">
        <PlaceAutocomplete
          id="audit-business"
          kind="business"
          label="1. Your business"
          placeholder="Start typing your business name"
          value={input.business}
          onChange={(business) => update({ business })}
          error={errors.business}
        />

        <fieldset>
          <legend className="mb-1.5 text-sm font-medium text-foreground">2. Where do you want to rank?</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            <CenterOption
              checked={input.centerSource === "business"}
              onSelect={() => update({ centerSource: "business" })}
              icon={<Building2 className="h-4 w-4" />}
              title="Around my business"
              hint="Uses your Google Maps address"
            />
            <CenterOption
              checked={input.centerSource === "city"}
              onSelect={() => update({ centerSource: "city" })}
              icon={<Map className="h-4 w-4" />}
              title="Another city / ZIP"
              hint="e.g. a town you serve"
            />
          </div>
          {input.centerSource === "city" && (
            <div className="mt-3">
              <PlaceAutocomplete
                id="audit-city"
                kind="city"
                label="City or ZIP / postal code"
                placeholder="e.g. Brantford, ON"
                value={input.city}
                onChange={(city) => update({ city })}
                error={errors.city}
              />
            </div>
          )}
        </fieldset>

        <div>
          <p className="mb-1.5 text-sm font-medium text-foreground">3. The search your customers make</p>
          <TextField
            id="audit-keyword"
            label="Keyword, e.g. emergency plumber"
            value={input.keyword}
            onChange={(keyword) => update({ keyword })}
            error={errors.keyword}
            maxLength={80}
            required
          />
        </div>
      </div>

      {submitError && <ErrorNotice error={submitError} className="mt-6" />}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="min-h-[65px]">{turnstile.widget}</div>
        <PrimaryButton busy={submitting} busyLabel="Starting…" disabled={!turnstile.token}>
          Run my free audit
        </PrimaryButton>
      </div>
      <FormTerms />
    </form>
  );
}

function CenterOption({
  checked,
  onSelect,
  icon,
  title,
  hint,
}: {
  checked: boolean;
  onSelect: () => void;
  icon: React.ReactNode;
  title: string;
  hint: string;
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-xl p-4 ring-1 transition-all has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary ${
        checked ? "bg-primary-soft ring-2 ring-primary/50" : "bg-card ring-border hover:ring-primary/30"
      }`}
    >
      <input type="radio" name="audit-center" checked={checked} onChange={onSelect} className="sr-only" />
      <span
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          checked ? "bg-primary text-primary-foreground" : "bg-surface-muted text-muted-foreground"
        }`}
      >
        {icon}
      </span>
      <span>
        <span className="block text-sm font-medium text-foreground">{title}</span>
        <span className="block text-xs text-muted-foreground">{hint}</span>
      </span>
    </label>
  );
}
