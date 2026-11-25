# Absence Desk — observed validation

Date: 2026-11-25. All fixtures synthetic. See machine-readable reports; failures are injected only for defensive tests, never used as successful inference evidence.

## Production bundle and actual AI

- Individual `npm run predeploy` passed (React/Vite). `asset-audit.json` validates immutable worker/runtime/WASM hashes and scans bundled text for known credential patterns; source and network were also inspected.
- Real installed Chrome via Playwright, **GPU disabled**, served production dist at correct collection base. Two materially different synthetic workflows executed real q8 MiniLM WASM inference: customer handoff and workshop returns. Each had three requests; all **6/6** simple expected policies matched. First-profile baseline: 2/6. `browser-validation.json` records actual rankings/cosines and network paths.
- Four harder negation/paraphrase probes: **1/4** matched expected labels, vs first-profile baseline 2/4. See `quality-probe.json`. Mandatory correction/review and this limitation are visible in the UI/README. No universal accuracy claim.
- Computed selected counts: customer 4/1/1, workshop 2/2/2. Reviewed-vs-baseline candidate differences: customer 5, workshop 2. No invented improvement/time/confidence numbers.
- No external requests before explicit AI loading. Observed requests throughout startup/inference were GET without bodies; URLs contained no source contexts. Only same-origin assets and documented model delivery hosts. Reports remove signed query values.
- After warming, networking blocked and worker terminated/recreated: **real fresh-worker inference passed offline in the same open page**. Offline navigation/reload/startup is not claimed.

## Workflow and artifacts

- Mandatory review; profile edit changes selected rows; hold/reject; undo; multiline reviewer note with formula prefix, comma, quotes, markup and emoji; edits invalidate exports; clipboard reflects current applied output.
- Actual JSON/CSV/Markdown/selected-CSV downloads reopened and parsed. Independent Python csv + SQLite checks selected IDs, reference witnesses and SQL IN/NOT IN three-valued truth. All candidate/reference rows preserved, including holds/exclusions/duplicates.
- Max batch: 8 profiles + 24 requests = 32 texts/eight real model chunks; 40 candidates + 40 reference rows/request = **1,920** originals retained. Full JSON audit successfully reimported, restoring originals for fresh inference. Unicode, blank/null keys, repeated values, quotes/newlines and formula-like strings covered.
- Independent SQLite oracle: **195 cases** — all 64 reference subsets of six nullable/empty/case-sensitive/Unicode keys, duplicate candidate and reference occurrences, three policies, plus empty candidates. Exact selection and baseline truth matched. `oracle-validation.json`.

## Defensive and UI checks

- Empty/malformed/oversized JSON, unknown/malformed row values, too many requests, unsupported import format and oversized import visibly rejected.
- Actual worker-download and model-host network aborts produce errors/no fabricated results; worker abort followed by **real inference retry in the same page** passed.
- Fault injection: unavailable Worker/WebAssembly, construction error, worker error, malformed vectors, shortened timeout, stale result/error; all produce expected visible errors or ignore obsolete messages, never fake AI.
- Cancellation during pending worker fetch and actual inference; retry succeeds. Delayed old callback cannot overwrite a newer **real** inference result. Import/source changes invalidate runs.
- 1440/390/320 CSS-pixel browser widths: readable labelled forms, ≥44px controls, no document overflow, working input/review/results/export. Mobile result tables render as labelled stacked rows. Screenshots visually inspected. Physical phones not tested.

## Combined deployment and public verification

Root assembly passed: **873 built, 0 failed, 0 skipped; 812,931,946 bytes** after existing deploy-only deduplication. No size guard or old entries/categories changed. Gallery inline scripts compile with Node new Function; the new entry appears once as AI Utilities, first; all 872 prior entries remain identical. Gallery browser checks include newest app/search and oldest entry.

Assembled-bundle and public checks are recorded in `assembled-*` and `public-*` reports after running the same real-inference/workflow/export suite at each actual URL. Public byte hashes cover app HTML/JS/CSS, worker, runtime factory, WASM and gallery. `publication-status.json` records the actual Pages commit/status after verification. No claim of successful publication is made from a branch push alone.

## Not tested / limitations

Other physical devices/browser engines, cache eviction recovery on every browser, denied-storage offline operation, offline app-shell startup, arbitrary real-world classification accuracy, real database integration and external actions. No remote inference/provider integration. Model revision is not pinned. The default AI is a semantic policy retrieval aid and struggles with negation; exact reconciliation is only as appropriate as the human-reviewed matching policy.

## Publication result

GitHub Pages reports **built** for gh-pages commit `28e6e2ec5d4c1edfaeff1bca364d9d978860429f`. Public URL: https://xianghui.github.io/daily-app2/20261125-20/ . Public HTML/JS/CSS and all three shared AI dependencies matched local SHA-256/bytes. The public gallery matched root source. Public Chrome reran both real-model fixtures (6/6 simple matches), full reviewed workflow, 1,920-record batch, cancellation/retry, offline fresh worker, privacy checks, exports and 1440/390/320 layouts. Independent SQLite/csv reopened all eight public JSON artifact scenarios and associated CSVs/selected exports. Public gallery and keyboard interaction checks passed. See public-browser-validation.json, public-artifact-validation.json, public-asset-validation.json, public-gallery-browser-validation.json and public-keyboard-validation.json.
