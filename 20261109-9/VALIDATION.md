# Screening Harbor — observed validation, 2026-11-09

## Production bundle and real AI

- `npm run predeploy`: passed React/Vite production build. Locally bundled worker/factory and shared immutable WASM, no backend or keys.
- Actual Chrome (headless desktop on builder Mac) ran the real downloaded q8 MiniLM model in WASM; successful cases never use mocks. Two materially different synthetic reviews: workplace trial eligibility and urban bird field-study eligibility.
- Both produced `[include, exclude/C1, exclude/C2, include]`, matching 8/8 tiny known-answer records and all intended reasons. Exact-anchor baseline resolved 0/4 and 1/4 respectively. Those counts are fixture observations, not general accuracy or saved-time claims.
- Negated-trial challenge incorrectly proposed inclusion; missing-design snippet incorrectly proposed exclusion. Mandatory human review/unresolved decisions are essential. Similarity does not establish entailment or eligibility.
- All 32 texts at the 4-criterion/24-paper maximum were processed in four-text batches. Record identities and totals survived; JSON audit reimport restored every original and required new human decisions.
- Terminated the model worker, blocked all network, and performed another real inference in the already-open page. Passed. Offline reload/navigation is NOT claimed. Download caches contain runtime/model, not papers.

## Workflow, defensive and artifact checks

- Pending decisions block apply; changing a reason resets its decision; notes, full-text/excluded/unresolved changes, undo and snapshot invalidation passed. Every record remains in the audit; counts conserve originals and each excluded record has exactly one supplied reason.
- Downloaded actual JSON/CSV/Markdown and read clipboard. Python's independent CSV/JSON parsers verified every paper, reviewed decisions, reasons, Unicode, comma/quote and multiline formula-like note escaping. JSON preserves raw strings; CSV intentionally adds apostrophe to formula-like cells. Reimport round-trip passed.
- Invalid JSON, null/object without schema fields, empty arrays, oversized batch/snippet/workflow, duplicate IDs, identical opposing anchors and unsupported CSV import: rejected, no fake result.
- Cancellation during an intercepted real model-weight request followed by successful real inference retry, source change during run, and delayed cancelled callbacks did not replace newer results. Model-host failure and worker-file failure were actual browser network aborts; retry recovered real inference.
- Actual worker with WebAssembly disabled returned the actionable WASM requirement. Worker construction failure handled. Malformed vectors, timeout, and stale-result faults exercised with explicit fault injection; these are defensive tests, not inference evidence.
- Instruction-like text remained inert; HTML-like titles rendered escaped. Context request audit recorded only GET asset downloads with no content request body; input text did not appear in request URLs. No model-host request before explicit Load AI. Bundled text scanned for common credential patterns; code has no provider integration or private credentials.
- Desktop screenshot and 390/320 px phone-width screenshots checked; no horizontal overflow, keyboard focus, labels, touch-sized controls and export actions passed. Emulation only: no physical-phone or Firefox/Safari performance guarantee.

## Gallery and publication

- Every inline gallery script compiled with Node `new Function`; missing scripts fail the test. New `20261109-9` AI utility entry exactly once; all 547 previous entries unchanged/in order. Existing AI Utilities/STL/Games/SaaS categories preserved.
- Root `npm run predeploy`: 548 built/copied, 0 failed, 0 skipped. Root index, new app and shared runtime present in combined `deploy/`.
- Local assembled-gallery browser render and asset-byte comparisons recorded in `local-deploy-validation.json`.
- Root `npm run deploy` published combined site; GitHub Pages commit `f133f2fca0b09654426e7b377b15bc4bafc12202` reached `built` with a successful Pages workflow. The first gallery probe before build completion saw the old gallery and timed out; waiting for the matching build resolved that timing issue without republishing.
- Public gallery and app/worker/runtime/shared-WASM bytes match source/build hashes. The complete browser suite reran at the public URL: both real-inference fixtures, offline fresh-worker inference, 24-paper batching, review/undo/copy/downloads, JSON reimport, bad inputs, cancellation/stale protection, mobile layouts and injected defensive faults all passed. Reports: `public-validation.json`, `public-browser-validation.json`, `publication-status.json`.

Machine-readable reports: `browser-validation.json`, `network-validation.json`, `edge-validation.json`, `additional-validation.json`, `cancel-download-validation.json`, `gallery-validation.json`. Fixtures and downloaded artifacts are synthetic. Runtime-download URLs are logged without signed query values. Unit checks: `node core-test.mjs`; independent artifact check: `python3 artifact-test.py`.
