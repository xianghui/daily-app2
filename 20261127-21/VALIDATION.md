# Delayfield Desk — observed validation

## Local production bundle

- `npm run predeploy`: passing React/Vite build, real `/daily-app2/20261127-21/` base.
- Chrome desktop with GPU disabled, actual MiniLM q8 ONNX on WASM CPU: known-answer fixture 1 MAIN/FILL, fixture 2 WIRELESS/MAIN, **4/4** expected retrievals across two different synthetic stage layouts. This small easy set does not establish general accuracy.
- Hall: reviewed arrival spread 0.001000961 ms versus distance-only baseline 5.001000961 ms. Courtyard: 0.009078081 ms versus 14.000007786 ms. Both computed from reviewed inputs, not measured acoustic performance. Continuous target is earliest before quantization; no discrete optimality claim.
- Maximum 8 profiles + 12 paths, five actual neural chunks; all 12 records retained. Full audit reimport restores original input and requires rerun/review.
- Every numeric field and multiline reviewer note edited; current applied snapshots invalidated; download artifacts reflect edits. Relink resets latency and approval. Hold/reject preserves all records and blocks Delay CSV; undo restores review. Capacity zero and too-tight sample-grid tolerance both block the worksheet without clamping.
- Clipboard read back; actual browser-downloaded JSON, quoted CSV and Markdown reopened. Independent Python CSV parser and independent forward timing replay validate every saved scenario, retained row, numeric field and formula-safe multiline note. Formula-like strings receive a CSV-only apostrophe; JSON retains exact values.
- 160 core assertions/check cases including 150 deterministic-seeded random layouts, identity/schema checks, nonnegative whole-sample delays and half-sample quantization bounds. These do not substitute for real inference.
- 16 empty/malformed/oversized/invalid source variants and 3 file error cases; unsupported runtime/device API, worker construction/runtime errors, malformed AI output and 180-second timeout fault injection fail visibly, no fake outputs. Actual worker and model-host network aborts fail visibly; real retry recovers.
- Actual model download held/cancelled before settlement, no late output, successful real retry. Delayed worker fetch cancellation, delayed imported file, and a schema-valid stale synthetic result/error after a newer REAL inference cannot overwrite newer input/results/status. Fault injection is defensive-only; successful AI checks use real model.
- Warmed open production page: worker terminated, browser network disabled, fresh worker successfully re-runs real model. Cold offline navigation/reload NOT promised or tested. Cache eviction/private-mode retention unverified.
- Browser request capture from startup through inference: no model requests before explicit click; only GET downloads with no request bodies; no source notes in URLs; external traffic limited to Hugging Face/CDN. Reports save paths/query-key names only, not signed URL query values. No optional remote-provider integration or API key storage exists.
- 1440/390/320 CSS-pixel layouts: no document overflow, all controls labelled, touch controls ≥44 px, export keyboard focus traversal. Normal viewport screenshots of input/review/results inspected at 320/390; not a full accessibility audit. Physical phones and non-Chrome browsers untested.

## Limits and challenge probes

The negated routing probe and prompt-injection-like text are recorded with actual nearest candidates in `local-browser-validation.json`. These are always unapproved proposals. Imported text never executes tools, requests credentials or controls network behavior. Similarity is not routing verification; absent or ambiguous chains still yield a nearest candidate. Human measurement/review is mandatory. Air model ignores humidity, wind, reflections, phase/polarity/crossover and audience variation. No hardware validation performed.

## Collection and publication

Gallery snapshots and inline-script compilation verify exact preservation of older entries/categories and one new AI Utilities entry, newest first. Combined-tree/public results are recorded in the corresponding `assembled-*` / `public-*` reports and `publication-status.json`; only a built matching Pages commit plus public byte equality and actual public inference establish successful publication. No announcements/digest are sent by this builder.

### Final publication outcome

Published and verified: matching Pages commit `2339d22483cd448041a23f2d6377afd6cbad9816` is **built** and workflow succeeded. Root assembled **921 apps**, 0 failed, **825,757,507 bytes**, below the preserved guard. All 920 preceding gallery entries remained identical and old categories remained intact. Public app/gallery/worker/factory/WASM and app assets are byte-identical to tested production files (9 assets). Full real-AI, warmed fresh-worker offline, 12-path batch, review/undo/edit, capacity/tolerance blocking, export/clipboard, privacy, defensive and 1440/390/320px suites passed on the public URL. Independent Python parsed/replayed 18 downloaded public scenarios. Public real network failure/retry, stale valid result versus a newer real run and delayed-import identity checks also passed.

A public byte check made while deployment was still in progress saw the previous root index; it was not accepted as success. After the existing deployment completed, the repeated byte check passed. No republish or Pages configuration change was needed. An initial gallery test ran before the intended root-index edit; the path was corrected and the exact-preservation/script checks passed before publication.
