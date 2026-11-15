# Observed validation — 2026-11-16

Production Vite bundle, real desktop Chrome, WASM CPU with GPU disabled. No fake inference on successful AI paths. Fault injection is restricted to defensive/stale-result checks.

## Real known-answer inputs

| Fixture | Operation links | Budgeted replay | Uniform one retry |
|---|---:|---|---|
| Storefront services: images, receipt email, inventory | 9/9 intended links | 70 extra calls, 43 recovered; caps 1/2/0 | 65 calls, 36 recovered |
| Publishing pipeline: PDF reports, archive uploads | 6/6 intended links | 90 extra calls under 95 budget, 45 recovered; caps 0/2 | 80 calls, 28 recovered |

These are tiny synthetic examples, not universal accuracy or future productivity claims. The model actually executes and changes identity-dependent chain assembly; incorrect cross-operation review blocks the coherent chain. An unrelated instruction-like challenge still returns a nearest candidate and is deliberately held. Semantic identity and retry safety always require human review.

## Completed checks

- Per-app `npm run predeploy`; real model download, progress and inference; no model requests before explicit action.
- Maximum 30-text inference (six operations × four attempts plus definitions), all 24 identity suggestions correct on exact-description stress fixture, complete audit reimport and renewed pending approvals.
- 1,000 generated coherent closed-cohort cases independently checked by budget-indexed dynamic programming, verifying maximum recovery, least-call ties and count conservation. Zero budget, over-budget baseline, all-held, duplicate/gapped/incorrectly linked chains and incomplete cohorts exercised.
- Every observation requires approval or hold. Operation/count/attempt edits reset pending; held suffix, undo, notes and result-snapshot invalidation tested. All-held keeps all originals and excludes all operations explicitly.
- Downloaded actual JSON/audit CSV/policy CSV/Markdown; independent Python CSV/JSON parsing verified every row and count, source IDs, held/excluded operations, multiline quoted notes, spreadsheet formula escaping and last maximum-batch row. Clipboard readback passed. Audit import restores originals only.
- Empty/malformed/oversized inputs, invalid budget/counts/attempts/duplicate IDs, oversized descriptions, unsupported files and malformed file JSON rejected.
- Model-host network abort followed by successful real retry; missing WASM support, worker download/construction/error, malformed vectors/envelope and timeout yielded visible errors and no fake outputs.
- Cancel/retry and changing input during inference; delayed worker-source download, delayed file read and an intentionally late old result cannot replace newer input/results.
- Fully offline fresh-worker real inference passed after warming an already-open page. No offline startup claim.
- Request audit from production startup through all successful inference: downloads only, GET without bodies; full in-memory URLs contained no fixture text. Only same-origin, Hugging Face/CDN and blob assets. Persisted audit removes signed query values. No provider integration; credential-pattern scan of built text assets passed (not a universal secret-detection guarantee).
- Desktop 1440px and narrow 390/320px layouts: no document overflow, visible labels, ≥44px buttons, source-to-import keyboard focus, functioning input/review/results/export. Normal-viewport screenshots inspected.

Machine-readable evidence: `browser-validation.json`, `defensive-validation.json`, `arithmetic-validation.json`, `artifact-validation.json`, stale-result reports and `asset-audit.json`. Combined and public verification results are added separately after publication.

## Not tested / limitations

Physical phones, non-Chrome browsers, low-memory devices, offline reload, live production workloads, retry side effects and causal/future recovery. Runtime asset caches may be evicted. Embedding ranking always produces a candidate, even for unrelated or negated text; no confidence percentage is fabricated. Replay cannot justify retry safety, deadline compliance or a live service change.

## Combined and public release

Root `npm run predeploy` assembled all 699 apps: zero failed/skipped. Published collection is 999,867,932 bytes under the existing conservative size guard. The assembled deployment-directory bundle passed the full real-AI/workflow/offline/export suite before publishing.

Root `npm run deploy` published Pages commit `b8a6168156a9cdf9d2d8d694a9207eea7cd1b7ba`; the matching Pages build reached **built** without a fallback trigger. Public app files and worker/factory/WASM byte-matched local builds. Both real-AI fixtures, maximum batching, reviewed JSON/CSV/policy CSV/Markdown and clipboard, privacy audit, fresh-worker offline inference and phone-width checks passed at the public HTTPS URL. The 699-card public gallery retained all 698 earlier entries, categories and working search. A gh-pages commit comparison confirms that no older app asset changed. See public/combined report JSON files, `preserved-legacy-assets.json`, `pages-build.json` and `publication-status.json`.
