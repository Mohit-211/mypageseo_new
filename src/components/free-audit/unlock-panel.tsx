"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { Lock, MailCheck } from "lucide-react";
import { resendCode, submitLead, verifyCode, type AuditView } from "@/api/free-audit.api";
import { ErrorNotice, FormTerms, PrimaryButton, TextField, useTurnstileToken } from "./audit-ui";
import { CODE_TTL_S, RESEND_COOLDOWN_S, friendlyError, type FriendlyError } from "./free-audit-data";

export interface LeadDetails {
  business_name: string;
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

/** Kept in memory only (never stored), so "Change email" can reopen a filled form. */
export const emptyLead: LeadDetails = { business_name: "", name: "", email: "", phone: "", consent: false };

type Common = {
  auditId: string;
  token: string;
  view: AuditView;
  onView: (view: AuditView) => void;
  onError: (err: FriendlyError) => boolean;
};

/**
 * Everything between the preview and the full report: the lead form, then the emailed code.
 * `onError` lets the parent handle audit-wide errors (expired audit, already verified) first.
 */
export function UnlockPanel({
  lead,
  onLeadChange,
  ...common
}: Common & { lead: LeadDetails; onLeadChange: (lead: LeadDetails) => void }) {
  const [editing, setEditing] = useState(false);
  const showCode = common.view.lead.submitted && !editing;

  return (
    <section aria-labelledby="unlock-heading" className="rounded-3xl bg-card p-6 shadow-card ring-soft md:p-10">
      {showCode ? (
        <CodeStep {...common} onChangeEmail={() => setEditing(true)} />
      ) : (
        <LeadStep {...common} lead={lead} onLeadChange={onLeadChange} onSent={() => setEditing(false)} />
      )}
    </section>
  );
}

const PHONE_DIGITS = /^\+?1?\d{10}$/;

function LeadStep({
  auditId,
  token,
  onView,
  onError,
  lead,
  onLeadChange,
  onSent,
}: Common & { lead: LeadDetails; onLeadChange: (lead: LeadDetails) => void; onSent: () => void }) {
  const [errors, setErrors] = useState<Partial<Record<keyof LeadDetails, string>>>({});
  const [submitError, setSubmitError] = useState<FriendlyError | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const turnstile = useTurnstileToken();

  const form = lead;

  const set = <K extends keyof LeadDetails>(k: K) => (v: LeadDetails[K]) => {
    onLeadChange({ ...form, [k]: v });
    setErrors((e) => ({ ...e, [k]: undefined }));
    setSubmitError(null);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!form.business_name.trim()) next.business_name = "Enter your business name.";
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!PHONE_DIGITS.test(form.phone.replace(/[\s().-]/g, ""))) next.phone = "Enter a US or Canadian phone number.";
    if (!form.consent) next.consent = "Please tick the box so we can send your report.";
    setErrors(next);
    if (Object.keys(next).length) return;
    if (!turnstile.token) {
      setSubmitError({ message: "Please wait for the security check to finish." });
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const updated = await submitLead(auditId, token, {
        turnstile_token: turnstile.token,
        business_name: form.business_name.trim(),
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        consent: true,
      });
      onView(updated);
      onSent();
    } catch (err) {
      const friendly = friendlyError(err);
      if (!onError(friendly)) {
        if (friendly.reason === "invalid_phone") setErrors({ phone: friendly.message });
        else setSubmitError(friendly);
      }
    } finally {
      setSubmitting(false);
      turnstile.reset();
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mb-6 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Lock className="h-5 w-5" />
        </span>
        <div>
          <h2 id="unlock-heading" className="font-display text-2xl text-foreground md:text-3xl">
            Unlock your full report — free
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            See your exact rank at every point, who ranks above you, your profile checklist and how you compare
            with the top 3. We&apos;ll email you a code to confirm, then send the PDF.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="lead-business" label="Business name" value={form.business_name} onChange={set("business_name")} error={errors.business_name} required autoComplete="organization" />
        <TextField id="lead-name" label="Your name" value={form.name} onChange={set("name")} error={errors.name} required autoComplete="name" />
        <TextField id="lead-email" label="Email address" type="email" value={form.email} onChange={set("email")} error={errors.email} required autoComplete="email" />
        <TextField id="lead-phone" label="Phone (US or Canada)" type="tel" value={form.phone} onChange={set("phone")} error={errors.phone} required autoComplete="tel" />
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => set("consent")(e.target.checked)}
            aria-invalid={errors.consent ? true : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-[var(--primary)]"
          />
          <span>
            I agree to receive my audit and occasional emails from MyPageSEO about improving my local visibility. I
            can unsubscribe at any time. See our{" "}
            <Link href="/privacy-policy" target="_blank" className="font-medium text-primary underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && <p className="mt-1.5 text-xs text-accent">{errors.consent}</p>}
      </div>

      {submitError && <ErrorNotice error={submitError} className="mt-5" />}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="min-h-[65px]">{turnstile.widget}</div>
        <PrimaryButton busy={submitting} busyLabel="Sending code…" disabled={!turnstile.token}>
          Email me the code
        </PrimaryButton>
      </div>
      <FormTerms />
    </form>
  );
}

/** Ticks once a second while mounted, for the resend and expiry countdowns. */
function useNow() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function CodeStep({
  auditId,
  token,
  view,
  onView,
  onError,
  onChangeEmail,
}: Common & { onChangeEmail: () => void }) {
  const now = useNow();
  const [code, setCode] = useState("");
  const [error, setError] = useState<FriendlyError | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  // The server enforces the cooldown too; this mirrors it (and any retry_after_seconds it sends).
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);

  const expiresAt = view.lead.code_expires_at ? Date.parse(view.lead.code_expires_at) : null;
  const sentAt = expiresAt ? expiresAt - CODE_TTL_S * 1000 : null;
  const resendAt = cooldownUntil ?? (sentAt ? sentAt + RESEND_COOLDOWN_S * 1000 : 0);
  const resendIn = Math.max(0, Math.ceil((resendAt - now) / 1000));
  const expired = expiresAt !== null && now >= expiresAt;

  const onVerify = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!/^\d{6}$/.test(code)) {
      setError({ message: "Enter the 6-digit code from the email." });
      return;
    }
    setVerifying(true);
    setError(null);
    setInfo(null);
    try {
      onView(await verifyCode(auditId, token, code));
    } catch (err) {
      const friendly = friendlyError(err);
      if (!onError(friendly)) setError(friendly);
      setVerifying(false);
    }
  };

  const onResend = async () => {
    setResending(true);
    setError(null);
    setInfo(null);
    try {
      const updated = await resendCode(auditId, token);
      setCooldownUntil(null);
      setCode("");
      setInfo("We've sent a new code.");
      onView(updated);
    } catch (err) {
      const friendly = friendlyError(err);
      if (friendly.reason === "code_resend_too_soon") {
        const wait = Number((err as { data?: { retry_after_seconds?: number } }).data?.retry_after_seconds) || RESEND_COOLDOWN_S;
        setCooldownUntil(Date.now() + wait * 1000);
      } else if (!onError(friendly)) {
        setError(friendly);
      }
    } finally {
      setResending(false);
    }
  };

  const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <form onSubmit={onVerify} noValidate>
      <div className="mb-6 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <MailCheck className="h-5 w-5" />
        </span>
        <div>
          <h2 id="unlock-heading" className="font-display text-2xl text-foreground md:text-3xl">
            Check your inbox
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            We sent a 6-digit code to <span className="font-medium text-foreground">{view.lead.email_masked}</span>.{" "}
            <button type="button" onClick={onChangeEmail} className="font-medium text-primary hover:underline">
              Change email
            </button>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-3">
        <div>
          <label htmlFor="audit-code" className="sr-only">
            6-digit code
          </label>
          <input
            id="audit-code"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            value={code}
            onChange={(e) => {
              setCode(e.target.value.replace(/\D/g, "").slice(0, 6));
              setError(null);
            }}
            placeholder="••••••"
            aria-invalid={error ? true : undefined}
            className="w-48 rounded-xl bg-card px-4 py-3 text-center font-mono text-2xl tracking-[0.4em] text-foreground ring-1 ring-border outline-none placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/40"
          />
          {expiresAt && (
            <p className="mt-1.5 text-xs text-muted-foreground">
              {expired ? "This code has expired." : `Code expires in ${mmss(Math.ceil((expiresAt - now) / 1000))}`}
            </p>
          )}
        </div>
        <PrimaryButton busy={verifying} busyLabel="Checking…" disabled={code.length !== 6}>
          Unlock my report
        </PrimaryButton>
      </div>

      {error && <ErrorNotice error={error.action === "resend" ? { ...error, message: `${error.message} Send a new code below.` } : error} className="mt-5" />}
      {info && !error && <p className="mt-4 text-sm text-emerald-700">{info}</p>}

      <p className="mt-5 text-sm text-muted-foreground">
        Didn&apos;t get it? Check your spam folder, or{" "}
        <button
          type="button"
          onClick={onResend}
          disabled={resendIn > 0 || resending}
          className="font-medium text-primary hover:underline disabled:cursor-not-allowed disabled:text-muted-foreground disabled:no-underline"
        >
          {resending ? "sending…" : resendIn > 0 ? `send a new code in ${resendIn}s` : "send a new code"}
        </button>
        .
      </p>
    </form>
  );
}
