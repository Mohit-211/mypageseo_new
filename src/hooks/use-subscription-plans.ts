"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { getSubscriptionPlansAPI } from "@/api/subscription.api";
import type { Plan } from "@/components/checkout/plans-data";

// NOTE: `icon` here is the plan's icon *name* (string) coming from the API,
// e.g. "credit-card". It's resolved to an actual component via
// `getPlanIcon()` at render time (see icon-map.ts), not here in the hook.
// This keeps a single source of truth for the plan shape (`Plan` from
// plans-data.ts) instead of a parallel `SubscriptionPlan` interface that
// can silently drift out of sync with it.

export function useSubscriptionPlans(country: string) {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const requestIdRef = useRef(0);

    const fetchPlans = useCallback(() => {
        const requestId = ++requestIdRef.current;

        setLoading(true);
        setError(null);

        getSubscriptionPlansAPI(country)
            .then((apiPlans) => {
                if (requestId !== requestIdRef.current) return;

                if (!Array.isArray(apiPlans)) {
                    throw new Error("Unexpected response shape from plans API");
                }

                setPlans(
                    apiPlans
                        .filter((p) => p.is_active !== false)
                        .map((p): Plan => ({
                            id: p._id,
                            name: p.name,
                            tagline: p.description,
                            badge: p.badge ?? null,
                            price: p.monthly_price, // number | null — matches Plan.price
                            setup: p.setup_fee,
                            icon: p.name, // resolved to a LucideIcon via getPlanIcon() at render time
                        }))
                );
            })
            .catch((err: any) => {
                if (requestId !== requestIdRef.current) return;

                setError(
                    err?.response?.data?.message ??
                    err?.message ??
                    "Failed to load plans"
                );

                setPlans([]);
            })
            .finally(() => {
                if (requestId !== requestIdRef.current) return;

                setLoading(false);
            });
    }, [country]);

    useEffect(() => {
        fetchPlans();
    }, [fetchPlans]);

    return {
        plans,
        loading,
        error,
        refetch: fetchPlans,
    };
}