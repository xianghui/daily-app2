# Observed validation — Capacity Commons

2026-11-14. Production Vite bundle, headless installed desktop Chrome, WASM CPU with GPU disabled for the main suite. Synthetic data only. Successful inference uses the real default MiniLM, never test substitutes.

## Local checks passed

- `npm run predeploy`: Vite production build passes; correct deployment base; byte-identical shared WASM and local factory paths. Built text assets scanned for common credential patterns with no hits; implementation contains no provider keys/integrations.
- `node core-test.mjs` and `python3 oracle-test.py`: 1,000 seeded 2–6-team cases match independent exhaustive team-permutation / Python Fraction exact shares and largest-remainder cents. Allocation conservation, equal-split conservation, dummy zero-demand teams, tier caps, malformed vector schemas and review requirements pass. Exact arithmetic cases, not representative real billing data.
- `node browser-test.cjs`: eight workflow groups pass. Real CPU model inference matches **6/6 studio notes** and **6/6 community-facility notes**. Costs are 6,700 and 14,000 cents, respectively. Inspect `browser-validation.json` for exact proposed IDs and allocations. Literal-label coverage is computed from source text, not called accuracy.
- Actual review edits, rejection by reassignment, undo, hold/partial flag, quantity changes, multiline reviewer/note, stale export invalidation, copy-to-clipboard, audit reimport and all four actual artifact downloads pass.
- Empty/null/invalid/oversized inputs, unsupported PDF import, bad tier order/cost, negative/fractional quantity, maximum-capacity overrun, cancel/retry and source changes during an active run pass; no stale results replace changed input. 32-record chunking and maximum audit import retain every record.
- Instruction-like irrelevant text still gets a nearest candidate. It remains pending and was held, not obeyed. No semantic identity, unit, completeness, negation or general-accuracy guarantee is made.
- An already-open warmed production page successfully starts a **fresh worker offline** and performs new real inference. Offline reload/navigation and browser cache eviction are NOT supported/tested claims.
- Requests captured from startup through inference/export were GET-only, no request bodies, and only same-origin app assets or documented model-host/CDN file paths. No model request before explicit load. Content did not appear in requests. No remote inference or analytics integration.
- `node defensive-test.cjs`: seven injected failure modes (model-host download failure, worker download failure, unavailable module workers, malformed embedding vectors, malformed envelope, timeout and worker error) yield actionable errors and no fabricated/exportable classifications. Removing the network fault allows real inference retry. Fault injection used only for these defensive checks.
- `node stale-test.cjs`: a defensive-only synthetic worker deliberately delivers an invalid old callback after cancellation and a newer run; the old callback cannot overwrite the new rows or inject an error. This is not counted as successful real inference.
- `node edge-test.cjs`: actual real inference matches all 32 descriptions across six resource pools and six teams; all 64 coalition costs/pool balance; full audit reimport passes. A non-subadditive pricing fixture displays both expected above-stand-alone warnings.
- `python3 artifact-test.py`: independently parse actual downloaded usage CSV/JSON and allocation CSV; preserve source IDs, all rows, quantities and multiline/quoted/formula-leading reviewed text. Every fixture's exact allocation independently matches Fraction/permutation calculations. Markdown preserves complete reviewed register. JSON import intentionally restores originals, not approvals.
- Desktop 1440px and narrow 390px/320px viewport checks pass: no horizontal overflow, labeled controls, visible focus, touch-sized buttons (≥44px), input/review/results actions. Normal viewport screenshots saved and inspected for desktop overview and phone overview/review/results. Physical touch devices and other browsers unverified; not a full accessibility conformance audit.
- Gallery inline scripts compile with Node `new Function`; missing scripts fail. New utility exactly once, AI Utilities first; every prior working-tree entry unchanged, including old categories. Gallery search and older card rendering pass.

Reports and synthetic downloaded artifacts are alongside this document. Upstream model revision is not pinned; dependency versions are locked. Shapley is an explicit allocation convention and non-subadditive tiers may allocate above stand-alone cost. Sources must be complete and units/pricing reviewed; no invoice or real savings/fairness claims.

## Publication

Root `npm run predeploy` and root `npm run deploy` passed: **661 apps, zero failed or skipped**. The assembled production site passed the full eight-group browser suite before deployment. The first Pages workflow succeeded with matching gh-pages commit `6a6e40f747cbb7fec41819dca5162e807837ec1c` (`built`).

Public byte comparisons pass for HTML, JS/CSS, AI worker, runtime factory, shared WASM and full gallery. Both real-model public fixtures matched 12/12 intended links and all eight public workflow groups passed, including fresh-worker offline inference, reviewed downloads, edits/undo, maximum batching and phone-width layouts. Public artifact round-trips and 661-card gallery/search/category rendering passed. `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-ui-validation.json` and `publication-status.json` record observed checks. No rebuild fallback or model simplification was needed.

The pre-existing unrelated working-tree gallery/README edits and older untracked folders were preserved and excluded from this job’s source commit. All 660 prior working-tree gallery entries remain in the deployed collection.
