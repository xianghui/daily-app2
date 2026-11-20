# Joint Signal — observed validation

2026-11-21; production Vite bundle served under `/daily-app2/20261121-7/`, real desktop Chrome WASM CPU (GPU disabled in primary suite).

- Both distinct synthetic fixtures ran real default MiniLM inference: workshop press/oven and packing parcel/paper. All 24 supplied group keys matched; first-group baseline matches 12/24. These easy tiny fixtures are not an accuracy estimate. Four planted opposite-direction check combinations received joint-only flags, while four along-reference checks did not; all eight passed marginal radius 3 checks. Example opposite-direction D² ≈26.733 versus threshold 9, marginal |z| ≈0.822 versus 3. Values are computed from four reference pairs per group.
- A negation challenge expected oven but received press. Unrelated lunch text still received oven. This is not entailment or out-of-domain detection. Every proposal requires manual approval or hold. `input-review-validation.json` records actual outputs.
- `core-test.mjs`: 1,000 independently calculated full covariance-inverse oracles match standardized regularized distances; positive rescaling/translation invariance checked for each. Short/constant references, bounded schema/vector failures, all-held conservation and strict check/reference separation pass.
- `browser-test.cjs`: actual downloaded JSON/CSV/Markdown, clipboard equality, multiline quoted comma/formula-like review text, hold/undo, post-edit export invalidation, 48-row/12-group batching and source-only audit round-trip pass. `artifact-test.py` independently parses all artifacts and checks every original row, signed readings, count conservation and check flags. Browser-generated fixtures are synthetic only.
- Cancel/retry uses real inference; fresh-worker fully offline inference passes in an already-open warmed page. This does not establish offline reload/app-shell startup. Shared worker/runtime hashes and actual model revision rechecked in `runtime-dependency-audit.json`.
- `defensive-test.cjs`: aborted model downloads with real retry, worker-download failure, missing WASM, module-worker constructor failure, malformed envelope/vectors, timeout, worker error and delayed responses after cancel/input changes all produce explicit no-output errors or are ignored. Fault injection is limited to defensive checks; successful inference is never mocked. `stale-retry-test.cjs` verifies a delayed old malformed result cannot replace a newer successful real run.
- Empty, invalid JSON, oversized source, no records, invalid shrinkage, unsupported import format and pending reviews blocked. Numeric edits preserve originals, reset approval and survive export; role edits reset approval and undo correctly. All-held audit retains all 12 rows with no fake available group.
- Context network tracing observes only model-file GET requests with no body; no model-host request before explicit loading. Source dataflow inspected: text only enters local worker postMessage; no provider integration or upload calls. Built text credential-pattern scan finds no matches; a pattern scan alone is not a proof against every possible secret.
- Chrome viewport checks at 1440, 390 and 320 pixels: no horizontal overflow, every form control has a label. Normal viewport hero/review/results screenshots inspected. Touch-size controls and focus styles included; physical phone engines, assistive technologies and performance on low-memory devices untested.

See individual JSON reports and test sources. Public release/collection checks are recorded separately after root deployment; do not infer public success from local build tests.

## Public release


Joint Signal public release: matching Pages `3467e10c41dd676e5e72a6abe93d41922cf7a211` and workflow `44826356867` succeeded. Seven public gallery/app/AI asset byte matches, both real neural fixtures, reviewed artifacts, maximum batching, warmed-page fresh-worker offline inference and all 764 gallery cards passed. Combined site 999,998,845 bytes under the unchanged 1 GB guard. No new legacy runtime rules; unrelated existing edits/drafts excluded from source staging. No digest sent.

Reports: `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`, `publication-status.json`. Production bundle source/build hashes stayed unchanged after local preflight; no app changes were made for publication.
