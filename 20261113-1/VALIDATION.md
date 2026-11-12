# Observed validation

## Actual model and known-answer smoke fixtures

Production Vite bundle, real MiniLM q8 WASM CPU, headless installed Chrome with GPU disabled:

- Repair bench: bike/laptop/bike/laptop, **4/4** intended matches. Pooled estimates 2.6667 and 3 days; period-average baseline 3 and 4 days. Targets 3 and 4 days.
- Creative studio: video/print/video/print, **4/4** intended matches. Pooled estimates 1.5 and 3.2 days; baseline 2 and 5 days. Print exceeds its 3-day target.
- Exact-title matching recognized 0/4 descriptions in each fixture. This is computed coverage on tiny synthetic examples, not an accuracy estimate or measured benefit.
- An unrelated instruction-like note still received a nearest stream. It remained pending, could be held, and did not gain authority. This limitation is disclosed.

## Passed local checks

- `npm run predeploy` and production bundle paths.
- `core-test.mjs`: 1,500 independent BigInt numerator/denominator oracle cases; record conservation, overlap blocking, pending/hold behavior and invalid-vector schema guards.
- `browser-test.cjs`: actual inference on both fixtures, 24-record chunking; numeric edit, note, hold, undo, export invalidation; JSON original-only reimport; empty/invalid/oversized input; invalid numbers, overlap and zero-completion guards; clipboard and browser downloads.
- Independent Python CSV/JSON parser checked all 4 reviewed and 24 max-batch records, numeric/identity fields, commas/quotes/newlines and spreadsheet-formula escaping. Markdown includes current edited values.
- Real online inference followed by full offline fresh-worker inference in the same warmed page. Offline navigation/reload is **not claimed**.
- Network observation: no model requests before explicit load; every observed request GET with no body; no source content in URLs. Default processing is local. Bundled JS/MJS scanned for common credential patterns, no matches; integration source has no remote inference or credential path. Pattern scan is not a universal secret detector.
- Defensive fault injection: model-host network failure with real retry, worker download failure, unsupported worker, malformed output, timeout and worker error. No fake results or exports appeared.
- Late old valid vectors from a worker ignoring termination could not overwrite newer input. Delayed file reads/downloads were discarded; unsupported format and oversized file errors passed. Actual worker with WebAssembly disabled failed actionably.
- Real model-host download cancellation followed by changed-input real-inference retry passed.
- Desktop 1440px and narrow 390px/320px: no document overflow; numeric/select/text fields have associated labels and focus works. Touch-emulated Chrome controls and example/load actions tested. Physical phones, screen-reader interaction, non-Chrome inference and low-memory devices remain untested.
- Final style audit removed scaffold dark-mode overrides. Explicit light-scheme contrast/layout checks passed under both light and dark OS preferences at 1440/390/320px; the full model/workflow suite passed again on the corrected build. The corrected CSS/JS bundle was republished as a new revision, not an unchanged deployment retry.

Public/combined validation is recorded separately in the generated `combined-*`, `public-*` and publication-status files after publishing. A local pass alone does not establish Pages availability.

## Public release verified

Final Pages commit `d95e09a028c826159e542448a7548f920ddfb6d4` reached `built`. Public app, JS/CSS, worker, runtime factory and shared WASM were fetched and byte-matched to the final production build; gallery HTML also byte-matched. Both real WASM fixture inferences, the full public workflow/export/offline/defensive-input suite, gallery categories/order, touch-emulated real inference and light/dark-preference layout checks passed at the HTTPS public URL. See `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`, `touch-validation.json`, `theme-validation.json` and `publication-status.json`. First publication also built; second publication corrected the discovered scaffold theme interaction, not a hosting failure. No Pages fallback trigger was needed.
