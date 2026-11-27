# Observed validation — Swatchform Desk

2026-11-27. Production React/Vite bundle; desktop Chrome headless with GPU disabled for actual WASM CPU inference. Synthetic data only. Public status is recorded separately in publication-status.json when verified.

## AI, workflow and quality

- Two materially different fixture batches run with real MiniLM: Winter panel samples → GARTER / RIB; Shawl and textured sampler → LACE / GARTER. Four simple known-answer links matched; this is not a representative accuracy study.
- Fixture 1 yields 54 stitches / 128 rows (garter), 74 / 104 (rib); both size-compatible, 137 g total estimated yarn. Round-only baseline repeat-valid: 1 of 2.
- Fixture 2 yields lace and garter plans, 73 g total estimated yarn; round-only baseline repeat-valid: 1 of 2. All originals retained.
- Negation probe “Not lace. Knit two purl two vertical cotton ribbing for a cuff.” linked RIB. Unrelated instruction-like prose linked LACE rather than abstaining. This limitation is explicit: a nearest swatch is not suitability, every panel requires approval/correction/hold. Text never gains authority or triggers uploads/credential requests.
- Maximum 12 panels + 8 swatches executes five real model chunks; all 12 records survive apply/export/reimport. Audit import restores originals only; approvals are deliberately not trusted.

## Deterministic independent checks

- `node core-test.mjs` produces 603 plans; `python3 core-replay.py` independently exhausts integer stitch and row counts using exact Fraction arithmetic. **5,427 assertions** pass: minimum errors/ties, repeat congruences, 2,000-count cap, dimensions, whole-gram yarn, stock gaps and feasibility. Five malformed profile boundaries rejected.
- Python standard CSV parser independently reopens JSON/Audit CSV/Panel CSV/Markdown downloaded from the browser: **570 assertions** per complete suite. Every ID, original note, profile, decision, all 11 numeric parameters, multiline reviewer note, formula-like string escaping, signed numeric size errors, repeat-safe counts, yarn/stock and summary metrics checked. Panel exports contain all records when permitted. Held panels remain in complete audits.
- Yarn-short, zero-tolerance nonrepresentable dimension and 2,000-row limit scenarios block operational Panel CSV; audits preserve the failure. These are worksheet checks, not physical knitting/yarn validation.

## Review, safety and failure handling

- Every numeric field and multiline reviewer-note edit invalidates results/exports; reapply reflects current edits. Undo restores previous summary. Relink resets measurements and approval; holds retain records and block operational cards. Current Markdown copies successfully.
- 17 empty/invalid/oversized source variants rejected without result. Import extension, malformed JSON and >8 MB file errors handled. Maximum audit reimports losslessly.
- Actual network aborts for worker and model-host downloads give actionable no-result errors. Fault-injected unsupported Worker/WASM, construction error, worker error, malformed result, timeout, stale event and pending-fetch cancellation all pass; mocks establish only defensive behavior, never successful inference.
- Actual worker network failure then successful real-AI retry passes. Delayed schema-valid old worker result/error cannot replace a newer real run; delayed file read cannot overwrite newer input. Cancellation followed by real retry passes.

## Static hosting, privacy, cache and UI

- Model downloads begin only after explicit Load action; no model requests on initial page load. Captured traffic consists entirely of GET asset downloads, no request bodies, no fixture notes in URLs and no content uploads. Only documented Hugging Face/CDN external paths allowed. Persisted audit contains host/path/query-key names, not signed CDN tokens.
- A warmed already-open page with every network request disabled creates a fresh worker and completes real inference. Worker, factory, WASM and model caches all exercised. Cold offline navigation/reload NOT implemented/tested/promised.
- Shared worker/factory/WASM paths hash-verified; local assembled application files byte-identical to app dist. Built text scanned for common credential patterns (no matches); source inspected: no provider/credential integrations. This is not an exhaustive secret detector.
- 1440/390/320px viewport tests: no horizontal overflow, all inputs have labels, keyboard export traversal works, controls ≥44px. Normal viewport screenshots visually inspected for desktop hero and narrow-phone input/review/results; text/forms readable.
- Gallery inline scripts compiled with Node new Function; all 916 prior entry objects retained in exact order, new entry exactly once at head with ai-utility area. All old categories/styles retained. Combined assembly: 917 apps, 0 failures/skips; 824,678,382 bytes below unchanged 950 MB guard. Existing runtime sharing unchanged.

## Not established

Physical knitting, washed dimensions, fit, real yarn consumption, physical phones, other browser engines, low-memory devices, cold offline startup, broad semantic accuracy and arbitrary catalog suitability are unverified. No universal accuracy, time-saving or consumption-reduction claim is made. All sample swatch values are synthetic. Separate per-stage JSON reports and artifacts are the reproducible evidence; public release requires the matching built Pages commit and real public inference/assets checks.

## Completed public release

Matching built Pages commit `913973402101bff70de64ac478f9dce4c2fdf632`; successful workflow `45963429508`. Nine public app/gallery/runtime files match the assembled tree exactly. Complete real-model workflow suites passed locally, assembled and publicly, each with 570 independently parsed artifact assertions. Public fresh-worker fully offline inference, two known-answer batches, all 11 numeric edits/undo, multiline/formula exports, 12-panel/8-swatch batching, source/audit imports, cancellation/retry, actual worker/model network aborts, recovery/stale-result/import safeguards, unsupported/malformed/timeout injections and 917-card gallery checks passed. No user-content uploads observed. These checks do not establish physical yarn use, fit, phone inference or representative model accuracy.
