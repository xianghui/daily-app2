# Observed validation — 2026-11-15

## Local production bundle

- `npm run predeploy`: passed. Real browser Chrome headless, GPU disabled; production assets served with the actual `/daily-app2/20261115-20/` base.
- Two materially different real MiniLM fixtures: **Community reference desk** (three object meanings, 12 ordered accesses) and **Volunteer knowledge shelf** (four meanings, 12 accesses). All 24 expected semantic links matched. Exact-name baseline covered 0/24. This is tiny synthetic-fixture coverage, not a general accuracy estimate.
- At supplied capacities 5 / 6 KiB: LRU 4/12 hits in each; FIFO 3/12 in each. First fixture LRU miss volume 18 KiB vs FIFO 21; second 22 vs 24 KiB. Observed-target minimum capacities 7 / 11 KiB. Cold-start ceilings 75% / 66.67%. All values computed from the reviewed trace, not predicted workload improvements.
- Independent timestamp-based eviction oracle: 100 generated traces × 36 capacities × 2 policies = **7,200** exact hit/miss-volume/resident-order comparisons passed. Also checked both fixture capacity searches against that independent oracle. Zero capacity, full-fit and oversized bypass covered. Every replay conserves accesses, enforces byte capacity and reconciles resident sizes.
- Maximum 8 objects, 48 accesses, 56 embedded texts, four-text chunks, 1024 KiB/object, 8192 KiB capacity: real inference completed; deliberately ambiguous numbered maximum-fixture identities manually reviewed. Replays preserved every approved access; 40 hits / 8 cold misses; minimum target capacity 8192 KiB. Complete audit reimport succeeded and reset approvals.
- Online then **all-network-blocked fresh-worker real inference** passed in the already-open warmed page. This does not claim offline reload/navigation/app-shell startup.
- Explicit model-host download failure followed by actual inference retry passed. Worker download failure, unavailable WASM, unavailable worker construction, worker error, malformed vectors/envelope and timeout yielded errors and no fake results. Defensive fault injection only; successful inference checks used the real model.
- Cancellation/retry and source-change invalidation passed. Separate delayed-worker-download, delayed-file-read and late-old-result-after-completed-new-run checks passed.
- Empty/invalid/oversized JSON; duplicate IDs; invalid target/capacity/object size; oversized text; unsupported PDF; oversized/malformed JSON imports rejected.
- Mandatory pending review blocks apply. Holds create partial-trace warnings; all-held gives no recommendation. Reviewed identity edits reset approval; undo restores prior review. Every edit disables stale exports.
- Real browser-downloaded JSON/CSV/Markdown independently parsed with Python. All fixture/max records and reviews preserved, including embedded quotes, comma, newline and formula-leading multiline notes. Clipboard text checked. Complete max audit original-source reimport passed.
- Browser request audit: GET-only public file downloads; no request bodies or synthetic user text in URLs. No model-host request before explicit load. Request logs sanitize query values; built text credential-pattern scan passed. There is no provider integration. This is code/traffic evidence, not a formal security audit.
- Desktop 1440px and 390/320px layouts: no horizontal overflow; labeled forms, ≥44px buttons, keyboard focus. Normal viewport overview/review/result screenshots captured; phone overview/results visually inspected. No physical phone inference tested.

## Limits / unverified scope

Unrelated instruction-like text still received a nearest object and was manually held. Similarity is not relevance or identity verification; negation/near-duplicates require review. No automatic content upload or instruction execution. Cache assumptions intentionally omit expiry, invalidation, latency, compression, prefetch, partial reads and concurrency. Historical replay is not a forecast. Physical phones, low-memory devices and non-Chrome browsers unverified.

## Publication checks

Local checks passed. Combined production and public verification results are recorded in `combined-browser-validation.json`, `public-browser-validation.json`, `public-asset-validation.json`, gallery reports, and `publication-status.json` when available. Do not infer successful publication solely from a branch push.


Public release verified: first matching Pages build `c242335dc9ffdce721faa9c0000162abaff8323a` reached `built`. All 693 gallery cards (692 prior working entries) and legacy categories remain intact. Public app/worker/factory/WASM bytes matched local production assets. The complete public real-AI workflow suite passed, including both fixtures, reviewed remapping affecting replay, maximum batch/audit reimport, fully offline fresh-worker inference, browser downloads/clipboard and responsive layouts. Public GET-only traffic privacy audit and independent artifact parses passed. Root combined build: 693 built, zero failed/skipped; 999,908,368 deployed bytes under the existing guard. No shared runtime or legacy app source was modified.
