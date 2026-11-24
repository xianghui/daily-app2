# Observed validation — 2026-11-24

## Local production build
- `npm run predeploy`: passed. React/Vite base `/daily-app2/20261124-15/`.
- Chrome headless, actual production bundle and real q8 MiniLM on CPU: **8/8 intended profile links** across two materially different four-case synthetic batches. These are known-answer fixtures, not estimated general accuracy.
- Context-only experiment kept names fixed: billing context yielded attachment; gallery context yielded inline. Actual neural inference changed a relevant exported field.
- Negation challenge **failed**: an artwork note explicitly excluding invoices was routed to billing. Human review remains mandatory; this limitation is not hidden.
- Baseline unsafe/lossy names: three differences in fixture one, one in fixture two. CRLF injection name in fixture two blocked (not counted as a valid baseline comparison); valid cases round-tripped.
- `core-test.mjs`: 26 checks covering literal expected extended encodings, astral Unicode, apostrophes/parentheses, quotes, dangerous controls, traversal, bidi formatting, lone surrogates, malformed schema and complete-record counts.
- `artifact-test.py`: 284 independent Python CSV/JSON/standard-library email-parameter assertions. Downloaded UTF-8 filename* and quoted ASCII fallback decoded exactly. Formula-like multiline reviewer notes, quoted/multiline IDs and all original records survived. Full 24-record batch exported and originals reimported.
- Real fresh-worker inference with browser network fully offline passed in warmed open page. Cold offline navigation is not claimed.
- Review edit invalidation, approve/hold, invalid-name blocking, undo, clipboard, downloads and 24-row/four-text chunking passed.
- Real worker-download and model-host network aborts surfaced errors with no canned outputs; model-host unblock and real retry passed.
- Fault injection (defensive checks only): missing Worker/WebAssembly, constructor/worker failure, malformed vectors, timeout, stale errors, cancellation during pending fetch passed. Delayed *valid* injected success could not overwrite a newer real inference. Delayed file read could not overwrite newer source.
- Desktop 1440 and narrow 390/320 CSS-pixel screens: no horizontal overflow, all forms labeled, interactive controls at least 44px. Keyboard review focus order passed; hero/review/results screenshots visually inspected at desktop and narrow widths. Physical phones and non-Chrome engines not tested.
- Request capture: no model-host request before explicit loading; all captured requests GET without bodies and no source contexts in URLs. Built assets pattern-scanned for credentials; source has no provider credentials, remote inference or analytics. This is a bounded scan, not a formal security audit.
- Shared worker/runtime bytes match runtime-provenance.json; installed Transformers.js version 4.3.2 and downloaded tokenizer config model_max_length 512 verified.

## Limits
Model semantic similarity can misroute negations. HTTP destination/browser behavior, filesystem-specific names, MIME/content policies and cold offline startup are outside scope. All content is synthetic. A generated header is a reviewable fixture, not a security certification or a live server test.

## Collection and public checks
Recorded separately in assembled/public reports after the root combined-site deployment. Only completed checks are reported as passed.

## Assembled collection results
- Root predeploy: 843 apps copied, zero failed or skipped. Existing 842 entries/categories preserved; all inline scripts compiled with Node new Function. Browser gallery card/link and narrow-layout checks passed.
- Combined deployed bytes: 999,978,682, below the unchanged 1,000,000,000-byte guard. No new deduplication changes.
- Assembled real-inference workflow suite and 284 independent artifact assertions passed. Final built app/shared runtime/root index bytes fetched and matched hashes (assembled-asset-validation.json).

## Public GitHub Pages results
- Remote gh-pages head `e8feb835b259c5a80f0aa303134203499d2be611` matched Pages `built` status. Public app returned HTTP 200.
- Full public real-inference workflow suite passed: both known-answer batches, context-only attachment/inline change, 24 records, downloads, edits/undo/hold, clipboard, invalid cases, input changes, cancellation/retry and warmed-page offline inference. Negation challenge again failed (billing instead of gallery), as documented.
- Public artifacts passed 284 independent Python assertions. Public app/worker/factory/WASM/root gallery fetched and byte-matched assembled outputs (nine paths). All 843 gallery cards and prior categories rendered with no page errors or narrow overflow.
- Final public screenshots and request-path-only logs are retained; no signed CDN query values recorded.
