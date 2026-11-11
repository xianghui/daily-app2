# Observed validation — Flow Balance / 2026-11-11

## Production app and actual AI

Real desktop Chrome (Playwright, not mocked inference) loaded production Vite output and the actual q8 MiniLM model on WASM CPU. Two materially different known-answer fixtures:

| Fixture | Real suggested identities | Before extras | Same-budget first-station baseline | Optimized |
|---|---:|---:|---:|---:|
| Community help day | 9/9 match fixture key | 125 | 45 | 40 |
| Repair pop-up | 7/7 match fixture key | 50 | 20 | 20 |

Last three columns are computed historical excess occupancy person-minutes, not measured future waiting times. Budgets are respectively two and one extra seats. Full-title lexical coverage was 0/9 and 0/7; this is coverage, not a routing accuracy comparison. Both input changes caused actual new embedding inference and domain-specific station assignments. `browser-validation.json` records vectors-derived proposals, exact intervals and metrics. A negated note linked to the intended technology desk in the challenge, but an unrelated instruction-like note still linked to the application desk: there is no reliable out-of-domain detector. Both challenge records were held; no capacity allocation was released. These tiny English fixtures do not establish general accuracy.

## Deterministic correctness

`node core-test.mjs` passed fixture schemas, half-open boundary ties, unique records, visit-minute conservation, budget bounds, holds and malformed-vector rejection. On 120 generated cases, the exact allocation objective matched an independent per-minute exhaustive oracle. Mean occupancy × window equals total visit minutes, and throughput × mean duration / 60 equals mean occupancy. This finite dataset identity is checked without claiming steady-state validation.

## Actual end-to-end browser checks

- Real model inference for both fixtures; 4-station/24-visit multi-chunk inference, no lost records; exported-original reimport and fresh approvals.
- Human edits, undo, approve/hold, times, existing seats and spare budget; every change invalidates exports. Pending rows block apply; holds block complete comparisons but remain exportable as an explicitly blocked audit.
- Empty/malformed JSON, invalid schema, oversized input/file, unsupported CSV, invalid time order/bounds, empty/noninteger/out-of-range controls.
- Cancel/retry and input-change cancellation. Fault injection delivered an old result after terminate: run-ID guard preserved the newer input. Delayed file reads and delayed worker-source downloads also could not overwrite a newer input.
- Fresh worker real inference after browser network was disabled in the already-open page passed. Offline reload/navigation is not implemented or claimed.
- Forced model-network failure followed by successful real retry, worker-download failure, worker construction error, worker runtime error, malformed vectors and accelerated 180-second timeout all failed closed. Actual worker with WebAssembly removed gave a device requirement. Mock workers were used only for defensive failure/race checks, never successful AI quality checks.
- Downloaded actual reviewed JSON/CSV/Markdown. Independent Python CSV parser verified every source and current reviewed field, counts and multiline/comma/quote escaping. Formula-like multiline review notes receive an apostrophe in CSV. JSON preserves exact text. Clipboard equals current downloaded Markdown. CSV is the complete visit audit, JSON additionally includes station statistics/segments, and Markdown is the usable complete handoff.
- Desktop 1440 and narrow 390/320 CSS widths: no document overflow; labels present, input focus works; actual review/results/export work. Physical phones, touch hardware, screen-reader behavior and browsers other than Chrome remain untested.

## Privacy, runtime and collection

Captured production requests from startup through inference: no model-host request before explicit load; all were GET requests without bodies; URLs did not contain synthetic visit content. Hosts were the app origin, blob URLs, huggingface.co and us.aws.cdn.hf.co. Source inspection confirms no remote provider or telemetry integration. Built text assets passed credential-pattern scanning, complemented by source/network inspection; this is not an exhaustive mathematical guarantee about every possible credential.

The worker and runtime factory are locally bundled; shared WASM SHA-256 is checked against the documented immutable asset. Gallery inline scripts compile with Node `new Function`; new entry appears exactly once as `ai-utility`, every prior entry remains identical and ordered, and AI Utilities precedes legacy categories. Root assembly passed with 587 app builds, zero failures/skips, total 922,792,606 bytes. `assembly-validation.json` checks app files byte-for-byte and worker/runtime paths. `combined-browser-validation.json` and `combined-gallery-validation.json` record assembled-site checks. Legacy gallery at `/Volumes/ExternalHD/daily_app/index.html` was read only to check distinctness: a historical desk booking SaaS is not this real-AI occupancy reconciliation workflow.

## Publishing

Publication and public browser checks are recorded in `publication-status.json`, `public-validation.json`, `public-browser-validation.json` and `public-gallery-validation.json` once complete. A branch push alone does not count as public verification. All sample/export artifacts in this directory are synthetic.

Public verification completed: Pages run `42936732737` succeeded for gh-pages commit `88011487009322a9a0c3eb6aba7f773fc5f7b301`; Pages API reported `built`. Every app file and shared WASM matched local SHA-256, the public gallery was byte-identical with 587 entries, and the full public workflow suite passed including both real inference fixtures, fresh-worker offline reuse, 24 visits, review/export/clipboard, cancellation, validation and 1440/390/320 layouts. Source commit excludes the unrelated pre-existing workspace edits noted in STAGING-NOTE.md.
