"use client";

import { ChevronDown } from "lucide-react";
import type { ContactForm } from "./contact-data";

interface FieldProps {
  id: keyof ContactForm;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}

export function Field({
  id, label, value, onChange, type = "text", error, required, autoComplete,
}: FieldProps) {
  const filled = value.length > 0;
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className={`peer w-full rounded-xl bg-card px-4 pt-5 pb-2 text-sm text-foreground ring-1 transition-all outline-none placeholder-transparent focus:ring-2 ${
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
      {error && <p className="mt-1.5 text-xs text-accent">{error}</p>}
    </div>
  );
}

interface SelectProps {
  id: keyof ContactForm;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
  required?: boolean;
}

export function Select({
  id, label, value, onChange, options, error, required,
}: SelectProps) {
  const filled = value.length > 0;
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={`peer w-full appearance-none rounded-xl bg-card px-4 pt-5 pb-2 text-sm ring-1 transition-all outline-none focus:ring-2 ${
          error ? "ring-accent focus:ring-accent" : "ring-border focus:ring-primary/40"
        } ${filled ? "text-foreground" : "text-transparent"}`}
      >
        {/* Placeholder option: kept invisible on purpose, but only this one */}
        <option value="" hidden className="text-foreground" />
        {options.map((o) => (
          <option key={o} value={o} className="text-foreground">
            {o}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all ${
          filled ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
        {required && <span className="text-accent">*</span>}
      </label>
      <ChevronDown className="pointer-events-none absolute right-4 top-4 w-4 h-4 text-muted-foreground" />
      {error && <p className="mt-1.5 text-xs text-accent">{error}</p>}
    </div>
  );
}