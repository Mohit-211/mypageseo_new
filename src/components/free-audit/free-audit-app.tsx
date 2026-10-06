"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCcw, XCircle } from "lucide-react";
import { getAudit, type AuditView } from "@/api/free-audit.api";
import { StartForm, emptyStart, type StartInput } from "./start-form";
import { UnlockPanel, emptyLead, type LeadDetails } from "./unlock-panel";
import { AuditProgress, BusinessHeader, FullReport, PreviewReport } from "./audit-report";
import { ErrorNotice } from "./audit-ui";
import {
  POLL_MS,
  clearSaved,
  friendlyError,
  readSaved,
  writeSaved,
  type FriendlyError,
  type SavedAudit,
} from "./free-audit-data";

const EXPIRED_NOTICE = "Your audit has expired. Start a new one.";

function setAuditParam(id: string | null) {
  const url = new URL(window.location.href);
  if (id) url.searchParams.set("audit", id);
  else url.searchParams.delete("audit");
  window.history.replaceState(window.history.state, "", url);
}

/** A reload resumes only when the URL's audit matches the one saved in this tab. */
function initialState(): { auth: SavedAudit | null; notice: string | null } {
  const param = new URLSearchParams(window.location.search).get("audit");
  const saved = readSaved();
  if (param && saved?.id === param) return { auth: saved, notice: null };
  return { auth: null, notice: param ? EXPIRED_NOTICE : null };
}

/** Rendered client-only (see free-audit-loader.tsx): it reads sessionStorage and the URL on first render. */
export function FreeAuditApp() {
  const [initial] = useState(initialState);
  const [auth, setAuth] = useState<SavedAudit | null>(initial.auth);
  const [view, setView] = useState<AuditView | null>(null);
  const [notice, setNotice] = useState<string | null>(initial.notice);
  const [pollError, setPollError] = useState<FriendlyError | null>(null);
  const [retry, setRetry] = useState(0);
  const [lastStart, setLastStart] = useState<StartInput>(emptyStart);
  const [startKey, setStartKey] = useState(0);
  const [lead, setLead] = useState<LeadDetails | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // An audit id in the URL that this tab can't open: drop it.
  useEffect(() => {
    if (!initial.auth && initial.notice) setAuditParam(null);
  }, [initial]);

  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const reset = useCallback((message: string | null) => {
    clearSaved();
    setAuditParam(null);
    setAuth(null);
    setView(null);
    setPollError(null);
    setLead(null);
    setNotice(message);
    setStartKey((k) => k + 1);
  }, []);

  const refresh = useCallback(async () => {
    if (!auth) return;
    try {
      setView(await getAudit(auth.id, auth.token));
    } catch {
      setRetry((n) => n + 1);
    }
  }, [auth]);

  /** Errors that concern the whole audit, from any call. Returns true when handled here. */
  const handleAuditError = useCallback(
    (err: FriendlyError) => {
      if (err.reason === "audit_not_found") {
        reset(EXPIRED_NOTICE);
        return true;
      }
      if (err.reason === "already_verified" || err.reason === "audit_failed") {
        void refresh();
        return true;
      }
      return false;
    },
    [reset, refresh],
  );

  // Poll every 2.5 s while the server says so (and, defensively, until a verified audit is done).
  const awaitingFull = !!view && view.lead.verified && view.stage !== "done" && view.stage !== "failed";
  useEffect(() => {
    if (!auth || (view && !view.polling && !awaitingFull)) return;
    let cancelled = false;
    const timer = setTimeout(
      async () => {
        try {
          const next = await getAudit(auth.id, auth.token);
          if (cancelled) return;
          setView(next);
          setPollError(null);
        } catch (err) {
          if (cancelled) return;
          const friendly = friendlyError(err);
          if (!handleAuditError(friendly)) {
            setPollError(friendly);
            setRetry((n) => n + 1);
          }
        }
      },
      view || retry ? POLL_MS : 0,
    );
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [auth, view, awaitingFull, retry, handleAuditError]);

  const onStarted = (started: AuditView & { access_token: string }, input: StartInput) => {
    const { access_token, ...rest } = started;
    writeSaved(started.id, access_token);
    setAuditParam(started.id);
    setAuth({ id: started.id, token: access_token });
    setView(rest);
    setLastStart(input);
    setNotice(null);
    setLead(null);
    scrollToTop();
  };

  const runAgain = () => {
    reset(null);
    // Prefill with the last inputs; autocomplete sessions end with the start call, so take new ones.
    setLastStart((s) => ({
      ...s,
      business: s.business && { ...s.business, session: crypto.randomUUID() },
      city: s.city && { ...s.city, session: crypto.randomUUID() },
    }));
    scrollToTop();
  };

  return (
    <div ref={topRef} className="scroll-mt-24">
      {!auth ? (
        <StartForm key={startKey} initial={lastStart} notice={notice} onStarted={onStarted} />
      ) : !view ? (
        pollError ? <ErrorNotice error={pollError} /> : <AuditProgress title="Loading your audit…" detail="One moment." />
      ) : (
        <AuditBody
          view={view}
          auth={auth}
          lead={lead ?? { ...emptyLead, business_name: view.business.name ?? "" }}
          onLeadChange={setLead}
          onView={setView}
          onError={handleAuditError}
          pollError={pollError}
          onRunAgain={runAgain}
          onNewAudit={() => {
            reset(null);
            setLastStart(emptyStart);
            scrollToTop();
          }}
        />
      )}
    </div>
  );
}

function AuditBody({
  view,
  auth,
  lead,
  onLeadChange,
  onView,
  onError,
  pollError,
  onRunAgain,
  onNewAudit,
}: {
  view: AuditView;
  auth: SavedAudit;
  lead: LeadDetails;
  onLeadChange: (lead: LeadDetails) => void;
  onView: (view: AuditView) => void;
  onError: (err: FriendlyError) => boolean;
  pollError: FriendlyError | null;
  onRunAgain: () => void;
  onNewAudit: () => void;
}) {
  const centre = view.center.label ?? "your business";

  if (view.stage === "failed") {
    return (
      <div className="rounded-3xl bg-card p-8 text-center shadow-card ring-soft md:p-12">
        <XCircle className="mx-auto h-10 w-10 text-accent" />
        <h2 className="mt-4 font-display text-2xl text-foreground md:text-3xl">We couldn&apos;t finish this audit.</h2>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our side. It usually works on a second try.</p>
        <button
          type="button"
          onClick={onRunAgain}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-accent-foreground shadow-lift transition hover:opacity-95"
        >
          <RotateCcw className="h-4 w-4" /> Run again
        </button>
      </div>
    );
  }

  const done = view.stage === "done" && !view.locked;
  const previewRunning = view.stage === "preview_queued" || view.stage === "preview_running";

  return (
    <div className="space-y-6">
      <BusinessHeader view={view} />
      {pollError && <ErrorNotice error={pollError} />}

      {done ? (
        <FullReport view={view} token={auth.token} />
      ) : (
        <>
          {previewRunning ? (
            <AuditProgress
              title={`Checking 49 points around ${centre}…`}
              detail="This takes about 20 seconds. You can fill in the form below while you wait."
            />
          ) : (
            <PreviewReport view={view} />
          )}
          {view.lead.verified ? (
            <AuditProgress title="Unlocking your full report…" detail="About 10 more seconds." />
          ) : (
            <UnlockPanel
              auditId={auth.id}
              token={auth.token}
              view={view}
              onView={onView}
              onError={onError}
              lead={lead}
              onLeadChange={onLeadChange}
            />
          )}
        </>
      )}

      <p className="text-center text-sm text-muted-foreground">
        <button type="button" onClick={onNewAudit} className="font-medium text-primary hover:underline">
          Start a new audit
        </button>
      </p>
    </div>
  );
}
