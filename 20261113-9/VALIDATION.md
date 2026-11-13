# Observed validation — 2026-11-13

## Production bundle, local Chrome CPU

- `npm run predeploy` passed. Actual MiniLM q8 inference runs in emitted worker/WASM; GPU disabled. Latest two fixtures: breaking API `[major, minor, patch, none]` 4/4 intended labels; editor `[minor, patch, none, minor]` 4/4. Category prototype descriptions were tuned after observed errors on these examples, so these are not independent evaluation data or a general accuracy claim.
- Reviewed breaking release: `2.7.9 → 3.0.0` vs patch-only `2.7.10`; compatible editor: `1.4.8 → 1.5.0` vs `1.4.9`. These are policy comparisons on supplied notes, not real measured benefits. AI materially determines proposed compatibility classes; human review explicitly corrects/approves before deterministic calculation.
- Unrelated instruction-like text still receives `major`; remains pending and can be held, blocking candidate. No instruction execution or credential requests. Earlier prototype wording missed a breaking change, another overcalled additive changes; limitation remains prominent.
- 12,000 independent version arithmetic cases and 3,000 precedence/held-record/original-conservation cases passed (`core-test.mjs`). Invalid versions and candidate overflow rejected. Internal-only produces no tag; a held record blocks final candidate.
- Real production browser tests: 40-note inference/chunking, pending blocks apply, all-held, source changes mid-run, cancel/retry, reviewed class/owner/multiline-note edits, undo, export invalidation, audit reimport, empty/invalid/oversized/duplicate IDs/unsupported format, overflow and internal-only paths passed.
- Fault injection separately tests malformed vectors, missing Worker, worker error and accelerated timeout; network abort tests actual downloads and then real retry. Delayed import and worker download cancellation, late old valid vectors after ignored terminate, and actual worker with unavailable WebAssembly tested. Successful inference tests never mock the model.
- Online model inference followed by network-disabled fresh-worker real inference passed. Claim limited to already-open warmed page, not offline startup. No model downloads before explicit loading; captured requests are GETs with no body, static app/runtime/model only. Built text credential-pattern scan passed (not a mathematical proof); integrations contain no providers, keys or content upload calls.
- Actual downloaded JSON/CSV independently parsed with Python; every original source record/current reviewed field preserved, including 40 rows, quoted commas, Unicode, multiline text and formula-like owner/review note. Markdown and clipboard match current review content. Reimport restores originals and requires fresh review; it does not silently restore approvals.
- Widths 1440, 390, 320: no page overflow, labels/IDs, focus and ≥44px buttons checked. Normal-viewport input/review/result screenshots saved and inspected. Emulated touch tests real model, review/apply/download. Physical devices and other browser engines untested.

Reports: `browser-validation.json`, `defensive-validation.json`, `core-validation.json`, `artifact-validation.json`, `asset-validation.json`, `stale-import-validation.json`, `stale-result-validation.json`, `model-cancel-validation.json`, `touch-validation.json`.

## Publication

Combined-root and public results are recorded after deployment in `combined-browser-validation.json`, `gallery-validation.json`, `gallery-ui-validation.json`, `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-validation.json` and `publication-status.json`. Do not infer public success from this local section alone.

## Additional wording probe

Six fresh synthetic notes, not used to retune category descriptions, matched 5/6 intended labels. Mandatory argument and deleted response-field changes matched major; optional sorting, rounding repair and documentation-only matched their intended classes. A negated “No endpoints are removed” optional-feature note misclassified as major. Human correction produced the expected `3.9.12 → 4.0.0` worksheet while preserving all six notes. See `probe-validation.json`; this tiny probe is not broad accuracy evidence.

## Final public outcome

Combined root predeploy and deploy passed with 634 apps, zero failed/skipped. GitHub Pages built `339fb66c5f392ddcae486766c122f55926d898c0` successfully. All seven app files plus shared WASM matched production bytes; public gallery matched the preserved working-tree gallery and all old categories remained visible. The full nine-check public suite passed in installed Playwright bundled Chromium with GPU disabled: both real fixtures matched 8/8 tuned labels, offline fresh-worker inference, max batch, review/undo/hold, invalid inputs, artifacts and responsive UI. Public downloaded artifacts independently reparsed.

System-Chrome public automation stalled on its first inference test despite correct page/assets; diagnostic role lookup timed out. Switching the test runner to bundled Chromium completed real public inference and the full suite without changing app/model/runtime or faking responses. Local/combined system-Chrome suites passed. See `public-test-notes.md`, diagnostic scripts/logs and `public-browser-bundled-test.log`; do not claim all browsers were verified.
