# Free audit: rank competitors across the whole grid, not just the centre (2026-10-06)

For the backend (`mps-backend-merged`, Phase 20 free audit). From the marketing site.

## The problem

"Who ranks higher" and the top-3 comparison come from the named search at the **centre** of the grid. When the
centre is the business's own address (the default), Google nearly always ranks it **#1** there. So for most
visitors:

- `result.higher` is `[]`: "Nobody ranks higher", which tells them they have no problem.
- `summary.center_rank` is `1`.
- `result.competitors` are the businesses at #2–#4 at the address, and the visitor is "#1" in the comparison.

That is the opposite of what the audit should show. A business that is #1 at its door but outside the top 3
in 47 of 49 spots has a real problem, and the report hides it. Example: Lakeshore Canine, "Dog Trainer",
Oakville: #1 at the centre, top 3 in only 43% of the area, and "Who ranks higher" was empty.

## What we'd like: an area ranking

`runGridStage` already gets the ordered place IDs at every point (`createRankingEngine` … `rankKeywordAtPoints`)
but keeps only the target's rank. Please keep the ordered IDs per point (top 30), then for **every place seen**:

- `avg_rank`: the mean over the points that didn't fail, with "not in the top 30" counted as 31. This is the
  same rule as `summarise`.
- `top3_rate`: the share of those points where it's in the top 3, rounded to 2 decimals.
- `found_rate`: optional; the share of those points where it's in the top 30.

Sort by `avg_rank` (lower is better), with ties broken by `top3_rate` (higher first). That order is the **area
ranking**. Store only the aggregates on the audit, not the 49 raw ID lists.

## API changes (all additive; the page already reads them and falls back when they're missing)

### Both views (preview and full)

| Field | Notes |
|---|---|
| `center.lat`, `center.lng` | The grid centre. The page draws a Google Static Map behind the heatmap. The full report can take it from the centre cell, but the **preview has no coordinates** today. |
| `preview.summary.area_rank` / `result.summary.area_rank` | The client's position in the area ranking (1-based). `null` if it wasn't found anywhere. |

### Preview only (still locked, so counts only and no names)

| Field | Notes |
|---|---|
| `preview.businesses_ahead` | How many businesses have a better area average than the client. The page shows "3 businesses outrank you in your area" above the blurred list, which is a strong reason to fill in the form. |

### Full report

| Field | Notes |
|---|---|
| `result.basis` | `"area"` once `higher` and `competitors` below use the area ranking. Without it the page keeps today's centre wording. |
| `result.higher` | Every business with a better area average than the client, in area order, **plus the client's own row last** (`is_self: true`). Cap it around 10 above the client. Each row: `{ rank, name, address, is_self, avg_rank, top3_rate }`, where `rank` is the area position. |
| `result.competitors` | The **top 3 others by area ranking** (not by centre). The existing `facts`, `score` and `checklist` stay, and `avg_rank` and `top3_rate` are added. |
| `summary.center_rank` | Keep it, but the page no longer shows it as a headline. |

The PDF should use the same area basis, so the emailed report matches the page.

## Names

The IDs-only grid search has no names. The centre's named search (`searchTextWithNames`, about 20 names) will
cover most of the leaders. Any of the top ~10 it doesn't cover need a lookup for `displayName` and
`formattedAddress`. That is a Places cost per lookup, so cap it at the top 10. If the lookups fail, send
`higher: null` with the existing `names_unavailable` warning, and the page handles it.

## Not needed from the backend

- **Map:** the page uses its own referrer-restricted Google Maps Static API key
  (`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`). The backend only needs to add `center.lat` and `center.lng`. If you'd
  rather not expose a browser key, the alternative is to return a signed Static Maps URL as `map_url`; tell us
  and we'll switch to it.
- **Metrics:** the page's new metrics (top 3 %, top 10 %, "hard to find") are counted from the cell buckets the
  API already sends.
