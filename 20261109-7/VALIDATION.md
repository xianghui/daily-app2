# Packet Seam — observed validation, 2026-11-09

## Real production-bundle inference

Desktop Chrome, actual q8 MiniLM model in bundled worker, WASM CPU (no mocked success). `browser-validation.json` records request metadata and checks. Two materially different synthetic batches:

| Fixture | Expected gaps | Observed | Append cost | Reviewed cost |
| --- | --- | --- | --- | --- |
| Coastal briefing | 1, 2, 3 | 1, 2, 3 | 1.985550 | 0.629374 |
| Community clinic | 1, 2, 3 | 1, 2, 3 | 2.224113 | 1.009722 |

Six intended placements matched on these tiny easy fixtures; no general accuracy claim. Both append baselines violate capacity and are explicitly labeled infeasible in the app. Costs are sums of individual learned-distance increments, not measured reading quality or elapsed-time gains. Exact original order and every record were conserved.

`variation-validation.json`: reordering incoming summaries changed observed real-model gaps to 3,1,2. A three-in-one-gap fixture with only gap 2 available preserved incoming order and every protected seam. Full-size production run processed 12 existing + 10 incoming summaries in four-text inference batches; all 22 records survived reviewed JSON and reimport. Core tests independently exhaust all gap combinations for 20 generated solver cases and verify DP optimality for its stated additive objective.

Negation probe: “Solar panels and wind turbines do not supply renewable electricity.” still placed next to the renewable-energy item (gap 2). This is topical retrieval, **not agreement/contradiction detection or factual validation**. Unrelated content is not reliably abstained; human hold/review is required. Multiple new documents in the same gap are kept in incoming order, not globally reordered for optimum pairwise continuity.

## Workflow and resilience

Passed real browser checks: mandatory review gate, changing gap resets approval, hold, reviewer notes, undo, export invalidation after edits, copy/MD equality, protected gaps and capacity rejection, input replacement, empty/invalid/oversized JSON, duplicate IDs, unsupported import, maximum batch, input cancellation, cancellation/retry, stale callbacks, timeout, malformed vectors and unsupported runtime message. Defensive failures use explicit injected worker responses; successful inference never does. `network-validation.json` aborted actual model-host requests, observed a fetch error with no rows, then retried real inference successfully. `edge-validation.json` covers worker download abort and constructor failure.

After online load and terminating the worker, fully offline context reran actual inference with a fresh worker on the already-open production page. **Offline reload/navigation not tested or promised.** Model/runtime caching may be evicted. Public production rerun repeats the same offline scope.

Captured startup/inference requests were GET with no request bodies; no model-host requests before explicit invocation. Source inspection shows no provider integrations, credentials or analytics. Asset pattern scan found no token patterns; this is not an exhaustive security audit. Model/runtime downloads do not upload user content. Shared WASM bytes match installed runtime and source path is documented.

Independent Python CSV parser reopened actual browser downloads: every original/incoming row, final position/hold and reviewed note survives. Quoted multiline formula-leading Unicode note escaped correctly. JSON original input round-trip passed at maximum batch. Markdown includes all record IDs, held list and reviewed notes; clipboard is byte-equivalent. No external documents/files are modified.

Desktop and 390/320px viewports passed no-overflow/focus/label/export checks; screenshots retained. Physical mobile hardware, Safari, Firefox, screen readers, memory-constrained devices and cache eviction are not tested. No universal browser/accuracy claims.

## Collection and deployment

Gallery inline scripts compiled with `new Function`; new entry exactly once, correct category; all 545 older entries preserved. Browser rendered 546 cards, AI Utilities first, older STL Generators/Mini Games and legacy/new searches intact. One local gallery read raced the root deployment directory rebuild and initially saw zero cards; rerun after assembly passed. Root predeploy assembled all 546 app builds with zero failures. Publishing uses the root combined collection, never per-app gh-pages.

See `publication-status.json`, `public-asset-validation.json`, `public-browser-validation.json`, and `public-gallery-validation.json` for final public build, byte-hash, browser inference and gallery results. Source commit/push is checked after these complete.

Final public verification: Pages commit `e5209b2ae84be404e972b6e94851e1fecd3a7067`, workflow `42528494213` completed successfully; Pages API built the matching commit. Public gallery/app/worker/factory/shared WASM hashes match local production bytes. The entire real-browser suite passed at the public URL, including both fixtures, fresh-worker offline inference, review/export roundtrips, full 22-record batch, phone widths and stale **result** callback rejection. Public gallery shows 546 cards with legacy categories/search intact. An early public asset request during the still-running Pages build returned 404; after the matching build completed, all assets passed without republishing.
