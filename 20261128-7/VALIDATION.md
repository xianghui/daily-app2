# Observed validation — Cadence Atlas / 20261128-7

## Local production bundle

- `npm run predeploy`: passed; React + Vite production assets with the required collection base. No development-runtime inference stand-in.
- Real installed headless Chrome, GPU disabled: MiniLM q8 WASM inference executed on both materially different fixtures. Hill/town matched CLIMB/TOWN; distance/sprint matched ENDURANCE/SPRINT: 4/4 tiny known-answer profile matches, not universal accuracy.
- All four automatically selected gears passed the reviewed cadence endpoints and explicit blocked list. Hill chose 34/28; endurance and sprint both chose 50/19 but produced different cadence intervals and bands. Current-gear violations were 2 → 0 in each two-row fixture. These are computed kinematic checks, not measured cycling outcomes.
- 74 core assertions/cases, including 60 independently enumerated speed-window cases, schema rejection, malformed embeddings, blocked override and unresolved full-range cases.
- Negation challenge (“Do not use a sprint racing cadence…rejects high cadence track training”) retrieved SPRINT anyway. Similarity does not understand intent reliably. Every match requires human approval or hold.
- Offline: after a successful online run, blocked all network and performed real inference with a freshly created worker in the open page. Passed. No claim for offline page reload/navigation.
- Full 8-profile/12-segment batch (20 texts, five four-text chunks) passed, preserving all 12 rows and reimporting exported originals.
- Review/edit/hold/undo, explicit gear override, profile correction, export invalidation, invalid numeric fields, infeasible speed intervals and gated card release passed. Multiline `=SUM(1,2)` plus quotes/comma preserved in JSON/Markdown and formula-sanitized CSV.
- Actual artifact downloads parsed with Python's independent CSV/JSON parsers; every required row, note, chosen gear and cadence endpoint survived. Clipboard matched current reviewed Markdown.
- Empty, malformed, empty-array, >12-row, >30,000-character source and malformed/unsupported/>1 MB import checks passed.
- Defensive suite: actual worker/model-host network aborts, unsupported Worker/WebAssembly, construction/error, malformed model output, timeout, stale messages and cancellation during pending worker fetch all failed visibly without fake results.
- Additional actual model-download cancellation/retry passed. Worker download failure/recovery followed by real inference passed. A delayed schema-valid old result plus error could not replace a newer real run. Delayed file read could not overwrite a newer example.
- Desktop 1440 px and narrow 390/320 px screenshots: no horizontal overflow; all form controls labeled, touch controls ≥44 px and export keyboard traversal passed. Representative hero/review/results screenshots visually inspected. Physical phones and other browsers remain untested.
- Network capture from production page startup through inference: no model-host traffic before explicit load; all observed requests GET with no body, no fixture text in URLs. Only runtime/model downloads, no content upload or remote inference.
- Shared worker, factory, WASM and app assets passed byte-length/SHA-256 verification. Built JS/CSS credential-pattern scan had no matches; code inspection confirms no credential input/provider integration. A pattern scan is not a universal secret detector.

## Collection/publication

Root `npm run predeploy` passed: 931 apps built/copied, zero failures/skips. Combined deployed bytes: 828,411,687, below the preserved conservative 1,000,000,000-byte limit. Inline gallery scripts compiled; new entry appears once in AI Utilities; all 930 previous entries remain exactly intact. Gallery renders/searches at desktop and 320 px, with old categories preserved.

The actual assembled production tree passed the full real-inference/export/offline/maximum-batch browser suite, independent artifact parsing, shared runtime byte audits, defensive suite, review/override guards, delayed import, actual model cancellation and recovery/stale-new-run tests. See `assembled-*` reports.

Public publication verification pending; a branch push is not proof of working Pages.

Pages build `d1fe3f44fd75ed6df2142af8b3575aa0d6d8c0ec` reached `built`; matching workflow [46074858777](https://github.com/xianghui/daily-app2/actions/runs/46074858777) completed successfully. Public browser verification is running against the deployed URL, not the local server.
