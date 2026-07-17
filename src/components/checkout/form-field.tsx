"use client";

import { useState } from "react";

export function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value: valueProp,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}) {
  const [internalValue, setInternalValue] = useState("");
  const [focused, setFocused] = useState(false);

  const value = valueProp !== undefined ? valueProp : internalValue;
  const active = focused || value.length > 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    if (onChange) onChange(v);
    else setInternalValue(v);
  }

  return (
    <label className="relative block">
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full rounded-xl border border-border bg-background px-4 pt-5 pb-2 text-sm text-foreground placeholder:text-transparent transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
      <span
        className={`pointer-events-none absolute left-4 transition-all ${
          active
            ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-accent"
            : "top-3.5 text-sm text-muted-foreground"
        }`}
      >
        {label}
        {required && !active && <span className="text-accent"> *</span>}
      </span>
    </label>
  );
}