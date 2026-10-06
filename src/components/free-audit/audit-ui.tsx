"use client";

import { useCallback, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Turnstile, { type BoundTurnstileObject } from "react-turnstile";
import { AlertCircle, ArrowRight, Loader2, RotateCcw } from "lucide-react";
import { TURNSTILE_SITE_KEY, type FriendlyError } from "./free-audit-data";

/** One Turnstile widget per form: a token works once, so reset after every request. */
export function useTurnstileToken() {
  const [token, setToken] = useState<string | null>(null);
  const bound = useRef<BoundTurnstileObject | null>(null);

  const reset = useCallback(() => {
    setToken(null);
    bound.current?.reset();
  }, []);

  const widget = (
    <AuditTurnstile
      onToken={(t, b) => {
        if (b) bound.current = b;
        setToken(t);
      }}
    />
  );

  return { token, reset, widget };
}

function AuditTurnstile({ onToken }: { onToken: (token: string | null, bound?: BoundTurnstileObject) => void }) {
  if (!TURNSTILE_SITE_KEY) {
    return <p className="text-xs text-accent">Security check is not configured (NEXT_PUBLIC_TURNSTILE_SITE_KEY).</p>;
  }
  return (
    <Turnstile
      sitekey={TURNSTILE_SITE_KEY}
      action="free_audit"
      theme="light"
      refreshExpired="auto"
      onLoad={(_id, b) => onToken(null, b)}
      onVerify={(t, b) => onToken(t, b)}
      onExpire={(_t, b) => onToken(null, b)}
      onError={(_e, b) => onToken(null, b)}
    />
  );
}

export function ErrorNotice({
  error,
  onRunAgain,
  className = "",
}: {
  error: FriendlyError;
  onRunAgain?: () => void;
  className?: string;
}) {
  return (
    <div role="alert" className={`rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent ${className}`}>
      <div className="flex items-start gap-2">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="min-w-0">
          <p>{error.message}</p>
          {error.action === "contact" && (
            <Link
              href={error.contactUrl ?? "/contact"}
              className="mt-2 inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              Contact us <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
          {error.action === "run_again" && onRunAgain && (
            <button
              type="button"
              onClick={onRunAgain}
              className="mt-2 inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Run again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function PrimaryButton({
  children,
  busy,
  busyLabel,
  disabled,
  type = "submit",
  onClick,
  className = "",
}: {
  children: ReactNode;
  busy?: boolean;
  busyLabel?: string;
  disabled?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || busy}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-accent-foreground shadow-lift transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {busy ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" /> {busyLabel ?? children}
        </>
      ) : (
        <>
          {children} <ArrowRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}

export function GoogleAttribution({ text = "Google Maps", className = "" }: { text?: string; className?: string }) {
  return <p className={`text-[11px] text-muted-foreground ${className}`}>{text}</p>;
}

/** Floating-label input in the same style as the contact form's fields. */
export function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  required,
  autoComplete,
  inputMode,
  maxLength,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
}) {
  const filled = value.length > 0;
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`peer w-full rounded-xl bg-card px-4 pt-5 pb-2 text-sm text-foreground ring-1 outline-none transition-all placeholder-transparent focus:ring-2 ${
          error ? "ring-accent focus:ring-accent" : "ring-border focus:ring-primary/40"
        }`}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all ${
          filled
            ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary"
            : "top-4 text-sm text-muted-foreground peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary"
        }`}
      >
        {label}
        {required && <span className="text-accent">*</span>}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-accent">
          {error}
        </p>
      )}
    </div>
  );
}

/** Shown under each submit button. Links open in a new tab so a half-filled form isn't lost. */
export function FormTerms() {
  const link = "font-medium text-primary underline-offset-2 hover:underline";
  return (
    <p className="mt-3 text-right text-xs text-muted-foreground">
      By submitting, you agree to our{" "}
      <Link href="/terms-conditions" target="_blank" className={link}>
        Terms &amp; Conditions
      </Link>{" "}
      and{" "}
      <Link href="/privacy-policy" target="_blank" className={link}>
        Privacy Policy
      </Link>
      .
    </p>
  );
}
