"use client";

export function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  setValue,
  suffix,
  prefix,
}: {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  setValue: (n: number) => void;
  suffix: string;
  prefix?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-muted-foreground">{label}</label>
        <span className="text-sm font-semibold text-foreground">
          {prefix && suffix}
          {value.toLocaleString()}
          {!prefix && suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--color-accent)]"
      />
    </div>
  );
}
