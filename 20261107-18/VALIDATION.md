# Observed validation — 2026-11-07

Production Vite bundle in headless installed desktop Chrome, real q8 MiniLM on WASM CPU; no mock or deterministic substitute on successful paths.

## AI fixture quality

- Support queue: eight synthetic records, budget four; selected B1 (duplicate bill), A2 (access), D1 (damaged delivery), T1 (data export). All four intended topic families represented versus two in first-K baseline.
- Facilities queue: eight synthetic records, budget four; selected H1 (heating), L1 (lighting), W1 (leak), S1 (exit blockage). All four intended families represented versus two in first-K baseline.
- Mean nearest-selected cosine (includes selected originals): support baseline 0.658991 → proposal 0.810568; facilities 0.663285 → proposal 0.759565. These are computed semantic-coverage indicators, **not confidence, accuracy, risk coverage, representativeness or measured time savings**. Only two curated fixtures were checked; no broad accuracy claim.
- 40-record input, ten embedding batches of four: exactly four selected spanning the four repeated fixture topics; all 40 rows/order/text retained.

## Browser workflow and boundaries

`browser-test.cjs` / `browser-validation.json` record the complete run. Tested real model inference on both fixtures, model/cache progress, online reload without further external requests after caching, fresh worker with networking disabled (still-open app), quoted/multiline imports and synthetic data only.

Review decisions/owner/notes, reject to first-K baseline, undo, explicit review requirement, apply and export snapshot invalidation passed. Over-budget sample blocked; baseline/reviewed metrics independently recomputed from the exported matrix. JSON downloaded and copied; CSV downloaded and independently parsed by Python; Markdown reopened and matched selected IDs. Formula-like multiline CSV fields safely apostrophe-prefixed; JSON preserves exact originals. `export-roundtrip-validation.json` records observed fields.

Nine invalid source cases, three invalid budgets, unsupported/oversized file handling, 40-record batch, input-change cancellation, explicit cancel/retry, model-download cancellation/retry and file-read generation guard passed. Real aborted model-host downloads and real aborted WASM fetches produced errors without results and recovered after retry. Defensive injections separately verified unavailable Worker/WASM, constructor error, worker error, malformed vectors, 180-second timeout branch (clock shortened in test), and ignored late cancelled-worker response. Fault injections are **not** used as AI functionality proof.

Privacy network observation from startup through inference found no off-origin traffic before explicit load; model downloads only GET/HEAD with no content bodies, to documented Hugging Face hosts/CDN. Production asset scan found no credential-pattern hits. Source has no remote-provider integration or content-upload code. Scan alone is not exhaustive proof; source/data flow were inspected.

Desktop 1440 px and narrow 390/320 px layouts had no horizontal overflow; labels, keyboard focus, ≥44px buttons, touch-friendly checks, mobile-width edits/apply/export passed. Screenshots retained. Physical phone inference, Safari/Firefox, screen-reader sessions and offline app-shell startup are **untested** and not promised. Cache eviction is not simulated; documented recovery requires internet.

## Publishing evidence

Root gallery inline scripts compiled with `new Function`, exactly one new AI utility entry checked; previous 510 entries/categories preserved, AI Utilities first. Root assembly, public byte hashes, Pages commit and public real inference results are recorded separately after deployment in `deployment-validation.json`, `public-gallery-validation.json` and `public-evidence/`. A branch push alone is not accepted as proof. See `publication-status.json` for final completion status.

## Hosted checks

Pages built gh-pages commit `6e0ddabfea97a5d205d74d09e498fb261fd4cc19`. Every app asset plus the shared WASM was fetched publicly and matched SHA-256. The public gallery rendered all 511 cards and categories with working search. The complete hosted browser suite passed real inference on both fixtures, 40-row batching, cache/offline fresh-worker inference, review/export and defensive checks. A first hosted harness run changed a budget before an asynchronous file import completed; its expected imported ID assertion failed because the valid stale-read guard retained the newer state. The harness now explicitly waits for the import before modifying controls, and the full hosted suite is rerun. No application or deployed bundle change was required.
