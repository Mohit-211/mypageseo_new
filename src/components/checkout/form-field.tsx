"use client";

import { useState } from "react";

export function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <label className="relative block">
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
