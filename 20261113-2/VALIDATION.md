# Observed validation — Sample Signal

## Production bundle / real inference
Desktop Chrome headless, actual bundled worker, Transformers.js q8 MiniLM on WASM CPU, no inference mock. See `browser-test.cjs` and `browser-validation.json`.

- Packaging fixture: bottle/carton/bottle/carton, 4/4 intended links. Both pooled rates 2.5%; unweighted lot baselines 5.8333% and 5.5%. Wilson intervals approximately 1.0725–5.7178% and 0.8538–7.0930%, both crossing the supplied 5% threshold. No claims of measured savings.
- Textile fixture: shirt/bag/shirt/bag, 4/4 intended links. Rates 0.5% and 13%, unweighted baselines 0.3333% and 15%. Wilson intervals approximately 0.0883–2.7774% and 7.7572–20.9804%, respectively below/above the supplied 4% threshold.
- Exact-title matching baseline recognizes 0/4 in each fixture; these tiny hand-authored cases do not establish general accuracy. Unrelated instruction-like ocean text still maps to bottle, illustrating mandatory review/holds.
- Actual AI-generated product assignments drive which reviewed samples are pooled. AI does not infer counts or sampling quality.

## Arithmetic / schemas / exports
`core-test.mjs`: 3,000 independent score-equation root/symmetry/range checks (not implementation-mirroring center/half-width code); source conservation and schema/count/decision guards. Zero defects yields positive upper limit; all defective yields lower limit below one.

Actual browser downloads independently parsed by Python csv/json (`artifact-test.py`). Reviewed count edits, all 24 max-batch records and totals preserved. Quotes, commas, multiline formula-leading note escaping checked. Markdown/copy reflects current review. Reimport restores originals and pending decisions, not old approvals. Holds preserve originals/audit rows and block statistical release; editing disables old exports, undo restores review then requires reapply.

## Defensive and privacy checks
`defensive-test.cjs`: model network failure then real retry; missing worker; unavailable module workers; malformed result; accelerated timeout; worker error. Fault injection is defensive ONLY, not evidence of successful inference. No fabricated output or enabled exports in failure modes.

`stale-result-test.cjs`: valid old injected vectors arriving after a newer input/run cannot overwrite it even if termination is ignored. `stale-import-test.cjs`: delayed file read/download discard, unsupported CSV/oversized file, cancel then real retry, actual-worker WebAssembly unavailable. `model-cancel-test.cjs`: actual model-host download observed, cancelled, different-input real inference retry succeeded. Main suite additionally covers empty/invalid/oversized JSON, impossible counts, 24-record chunking and offline inference.

Browser network observations from production startup through inference: no model requests before explicit load; all requests GET with no bodies; no source content in URLs. Only same-origin code/runtime, blob URLs and Hugging Face/CDN model downloads. Built JS/MJS credential-pattern scan passed; implementation has no credential/provider integration. Pattern scan alone is not a universal secret audit.

Offline: after successful online run, all network disabled, fresh worker runs actual inference within the already-open warmed page. Model, worker, runtime factory and WASM caches exercised. No claim for offline navigation/reload or persistence under cache eviction/private mode.

## UI / scope
Desktop 1440 and narrow 390/320 CSS-pixel layouts: no page overflow, all form fields labeled, keyboard focus checked, screenshots retained. Touch-emulated Chrome: visible buttons/inputs/selects/summaries at least 44 px, example selection and actual inference tap work. Overview visually inspected. Physical phones, low-memory hardware, screen readers and non-Chrome engines untested.

Public checks and combined-gallery evidence are stored separately after deployment. No universal sampling validity, accuracy, compliance or time-saving claim.

## Public release
GitHub Pages workflow `43265800754` completed successfully for gh-pages commit `5d56b65a5328206feb492e5b58b0206a538f468f`. Public app, worker, runtime factory, shared WASM and gallery byte-matched local production files. The entire real-AI workflow suite (both fixtures, review/undo/exports, offline fresh-worker inference, batch limits and layout checks), public gallery category checks and touch-emulated actual inference passed at https://xianghui.github.io/daily-app2/20261113-2/ . All 627 assembled apps include 626 preserved prior working-tree gallery entries. Local defensive fault-injection suites were not separately repeated on the public host.
