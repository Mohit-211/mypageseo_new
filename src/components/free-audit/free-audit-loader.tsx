"use client";

import dynamic from "next/dynamic";

/** The audit tool reads sessionStorage and the URL on first render, so it never renders on the server. */
export const FreeAuditLoader = dynamic(() => import("./free-audit-app").then((m) => m.FreeAuditApp), {
  ssr: false,
  loading: () => <div className="h-[560px] animate-pulse rounded-3xl bg-card shadow-card ring-soft" aria-hidden />,
});
