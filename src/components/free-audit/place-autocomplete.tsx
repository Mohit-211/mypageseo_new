"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Loader2, MapPin, Search, X } from "lucide-react";
import { autocompletePlaces, AuditApiError, type Suggestion } from "@/api/free-audit.api";
import { friendlyError } from "./free-audit-data";

export interface PickedPlace {
  place_id: string;
  main_text: string;
  secondary_text: string;
  description: string;
  /** The autocomplete session the pick came from; sent with the start call. */
  session: string;
}

const DEBOUNCE_MS = 300;
const MIN_CHARS = 2;
const RATE_LIMIT_PAUSE_MS = 30_000;

export function PlaceAutocomplete({
  id,
  kind,
  label,
  placeholder,
  value,
  onChange,
  error,
}: {
  id: string;
  kind: "business" | "city";
  label: string;
  placeholder: string;
  value: PickedPlace | null;
  onChange: (place: PickedPlace | null) => void;
  error?: string;
}) {
  const listId = useId();
  const [text, setText] = useState(value?.description ?? "");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [attribution, setAttribution] = useState("Google Maps");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [lookupError, setLookupError] = useState<string | null>(null);
  const session = useRef<string | null>(null);
  const pausedUntil = useRef(0);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep the text in sync when the parent sets or clears the pick (e.g. "Run again" prefill).
  const [prevValue, setPrevValue] = useState(value);
  if (value !== prevValue) {
    setPrevValue(value);
    if (value) setText(value.description);
  }

  const query = value ? "" : text.trim();

  useEffect(() => {
    if (query.length < MIN_CHARS || Date.now() < pausedUntil.current) return;
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      session.current ??= crypto.randomUUID();
      setLoading(true);
      try {
        const res = await autocompletePlaces(query, session.current, kind, controller.signal);
        setSuggestions(res.suggestions);
        setAttribution(res.attribution?.text || "Google Maps");
        setActive(-1);
        setLookupError(null);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setSuggestions([]);
        if (err instanceof AuditApiError && err.reason === "rate_limited") {
          pausedUntil.current = Date.now() + RATE_LIMIT_PAUSE_MS;
        } else {
          setLookupError(friendlyError(err).message);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, DEBOUNCE_MS);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, kind]);

  const pick = (s: Suggestion) => {
    onChange({
      place_id: s.place_id,
      main_text: s.main_text,
      secondary_text: s.secondary_text,
      description: s.description,
      session: session.current ?? crypto.randomUUID(),
    });
    setText(s.description);
    setOpen(false);
    setSuggestions([]);
  };

  const clear = () => {
    onChange(null);
    setText("");
    setSuggestions([]);
    session.current = null;
  };

  const showList = open && !value && query.length >= MIN_CHARS && suggestions.length > 0;

  return (
    <div className="relative">
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="relative">
        {kind === "business" ? (
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        ) : (
          <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        )}
        <input
          id={id}
          type="text"
          role="combobox"
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={showList}
          aria-controls={listId}
          aria-activedescendant={showList && active >= 0 ? `${listId}-${active}` : undefined}
          aria-invalid={error ? true : undefined}
          placeholder={placeholder}
          value={text}
          onFocus={() => {
            session.current ??= crypto.randomUUID();
            setOpen(true);
          }}
          onBlur={() => {
            blurTimer.current = setTimeout(() => setOpen(false), 150);
          }}
          onChange={(e) => {
            setText(e.target.value);
            setOpen(true);
            setLookupError(null);
            if (value) onChange(null);
          }}
          onKeyDown={(e) => {
            if (!showList) return;
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => (i + 1) % suggestions.length);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
            } else if (e.key === "Enter" && active >= 0) {
              e.preventDefault();
              pick(suggestions[active]);
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          className={`w-full rounded-xl bg-card py-3.5 pl-11 pr-11 text-sm text-foreground ring-1 outline-none transition-all placeholder:text-muted-foreground focus:ring-2 ${
            error ? "ring-accent focus:ring-accent" : value ? "ring-emerald-500/50 focus:ring-emerald-500/60" : "ring-border focus:ring-primary/40"
          }`}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          ) : text ? (
            <button
              type="button"
              onClick={clear}
              aria-label={`Clear ${label.toLowerCase()}`}
              className="rounded-md p-1 text-muted-foreground hover:bg-surface-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>

      {showList && (
        <div
          className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-border/70 bg-background shadow-lift"
          onMouseDown={() => blurTimer.current && clearTimeout(blurTimer.current)}
        >
          <ul id={listId} role="listbox" aria-label={label} className="max-h-72 overflow-y-auto p-1.5">
            {suggestions.map((s, i) => (
              <li
                key={s.place_id}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === active}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => pick(s)}
                onMouseEnter={() => setActive(i)}
                className={`cursor-pointer rounded-xl px-3.5 py-2.5 text-sm ${i === active ? "bg-surface-muted" : ""}`}
              >
                <span className="font-semibold text-foreground">{s.main_text}</span>
                {s.secondary_text && <span className="ml-1.5 text-muted-foreground">{s.secondary_text}</span>}
              </li>
            ))}
          </ul>
          <p className="border-t border-border/70 px-4 py-2 text-right text-[11px] text-muted-foreground">{attribution}</p>
        </div>
      )}

      {(error || lookupError) && <p className="mt-1.5 text-xs text-accent">{error ?? lookupError}</p>}
    </div>
  );
}
