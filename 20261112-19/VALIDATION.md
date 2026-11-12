# Signal Loom — observed validation

## Local production bundle

- `npm run predeploy` passed. Local app/worker/runtime served at the real `/daily-app2/20261112-19/` base, not Vite dev paths.
- `browser-test.cjs`: actual Chrome WASM MiniLM inference on Repair desk and Print studio matched **16/16** intended links across two tiny synthetic sets. Each retained all eight records and detected exactly two signalled observations versus zero outside-spec observations. These are fixtures, not population accuracy or a causal diagnosis.
- Run after fully disabling network with a new worker succeeded in the already-open cached page. No claim about offline reload/navigation.
- Reviewed measurement edit to **-17**, quoted/comma/multiline formula-like note, undo, mapping correction, hold/release, clipboard, actual downloads, and exported-original reimport passed. Imports reset approvals.
- Empty/invalid/oversized JSON, unsupported file, bad numbers, duplicate within-stream order, cancel/retry, input invalidation and 24-record inference batching passed. A 24-record same-side fixture triggered configured run signals. Every record survived exports/reimport.
- No model download before explicit loading; captured requests were public GET downloads, without bodies or input text in URLs. Credential-pattern scan of built text assets found none; implementation has no remote content-upload path.
- Desktop 1440px and narrow 390/320px layouts: no document overflow, associated form labels, focus and real actions passed. Screenshots visually inspected. Physical mobile hardware/other browser engines untested.
- `defensive-test.cjs`: blocked model downloads with real retry, worker-download failure, unsupported worker construction, malformed vectors, accelerated timeout and worker error all produced actionable failures without fabricated output.
- `stale-result-test.cjs`: defensive-only injected worker ignoring terminate sent old valid vectors late; new inputs/results were preserved. This is not evidence of real inference (real inference is independently tested above).
- `stale-import-test.cjs`: delayed file read and worker-source fetch cannot overwrite newer inputs; unsupported/oversized files rejected; actual bundled worker with WebAssembly disabled fails explicitly.
- `model-cancel-test.cjs`: held a real model-host request, cancelled it, changed input, then retried real inference successfully without stale output.
- Challenge: negated repair description mapped to laptop as intended; an unrelated credential-seeking ocean-weather sentence still mapped to bike. This demonstrates that nearest similarity cannot establish process identity or reject unknowns; pending review/hold prevents automatic release.

- `edge-browser-test.cjs`: real inference with maximum 8 streams × 50 reference values, 24 observations, 400-char texts, 80-char titles and signed ±1,000,000 values; inclusive spec edges, reviewed exports and large-envelope reimport passed. Independent Python parsing preserved all 24 edge records and escaped formula-like multiline source/note fields.

## Deterministic and artifact checks

- `core-test.mjs`: **30,022 assertions**, including **1,200** independent random formula/point-signal oracle cases; known fixtures, shuffled-order sorting, record conservation, same-side run/reset, exact individuals boundary, duplicate-order blocking, constant/short/invalid references, malformed vectors, signed numbers and CSV escaping.
- `artifact-test.py`: independent Python CSV/JSON parsing verified every edited field and all 8 reviewed / 24 maximum-batch records; chart CSV exact current values/reasons; safe formula-like multiline notes; numeric -17 unchanged; Markdown contains current reviewed values and every ID.
- Shared WASM byte-identity verified against installed runtime; SHA-256 and asset scan in `asset-validation.json`.

## Publication

Published and publicly validated on the first attempt. Root predeploy/deploy assembled **620 entries with 0 failures/skips**, preserving previous entries and categories. Every inline script compiled, the new entry occurs exactly once under AI Utilities, and the gallery rendered at desktop/320px with legacy categories intact.

GitHub Pages workflow **43197765927** completed successfully; the Pages API reported **built** at gh-pages head **9134bbaf5e04b7b7a660860963c12bbb8801c4cc**. All deployed app files, local worker/runtime factory and shared WASM were fetched from the public site and byte-matched to production files. The public gallery byte-matched source.

The full real-model production-browser suite passed again at https://xianghui.github.io/daily-app2/20261112-19/: both fixtures (**16/16** intended links), all reviewed artifacts, cached fresh-worker offline inference, invalid inputs, duplicate-sequence guards, cancellation/retry/stale-input prevention, maximum batch, desktop/phone layouts, clipboard and challenge holds. See public-browser-validation.json, public-asset-validation.json and public-gallery-validation.json. These tests do not establish physical-phone performance, other-engine support, offline page startup or universal matching/statistical validity.
