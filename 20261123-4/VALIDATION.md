# Observed validation — Segment Post

## Production bundle, local browser

- `npm run predeploy` passed. Real Chrome with GPU disabled used the built app and actual shared WASM worker/model.
- Two materially different fixtures: Visits & parcels (appointment/delivery), Classes & maintenance (training/water outage). **8/8** intended template links across these tiny examples. Each fixture's same four records changed from **8 original segments to 4 reviewed segments**. These are conditional encoding counts, not a general accuracy/savings estimate.
- Unknown/negated/instruction-like input still produced a nearest candidate, pending human review. Holding it excluded it from the message body worksheet while preserving all originals. This model does not understand every negation or establish consent/intent equivalence.
- All 8 templates/32 near-limit original drafts (40 embeddings in ten chunks) completed, audited and reimported without losing records.
- Review/body/template changes, pending gates, keep-original over-budget blocking, exact-value missing blocking, Unicode encoding changes, held-aware exports, undo, clipboard and export invalidation passed.
- GSM 160/161 and 306/307 boundaries, all tested extension pairs, 70/71 Unicode units, repeated emoji and unpaired-surrogate rejection passed deterministic tests. Pair-safe extension packing was checked explicitly (153 carets → 3 parts).
- Online warmup followed by network-blocked fresh-worker real inference passed in the already-open page. Offline cold navigation/reload is not claimed.
- Network/model download abort with successful real retry, worker download failure, unavailable WebAssembly, worker-construction failure, malformed vectors/envelopes, worker error, accelerated timeout, late cancelled/input-changed messages and delayed file/worker fetch races passed defensive checks. Fault injection was used only for error paths.
- Download progress was observed and cold model loading cancelled; retry completed real inference. No cancelled work overwrote newer input.
- A file-size guard defect discovered in the first browser pass was fixed; the complete workflow suite reran successfully, including unsupported and >16 MB files.
- Independent Python parsing reopened downloaded JSON, CSV and Markdown (23 artifact/invariant checks), preserving all records, held IDs, current reviewed text, multiline edits, commas/quotes and formula guards. Max audit import recovered originals exactly.
- Request audit from startup through inference: GET-only app/runtime/model downloads; no bodies or draft content in URLs; no model download before explicit loading. Stored request evidence removes signed query values. Credential-pattern scan plus integration inspection is recorded separately, not treated as an exhaustive security proof.
- Desktop 1440 and narrow 390/320 layouts: no document overflow, every input label attached, focus action working, visible controls ≥44 px high. Normal-viewport input/review/result screenshots were inspected. Physical phone hardware/other browser engines/carriers remain untested.

Reports: `core-validation.json`, `browser-validation.json`, `defensive-validation.json`, `cold-cancel-validation.json`, `async-race-validation.json`, `artifact-validation.json`. Assembly/public verification is added only after its actual completion.

## Combined collection preflight

Root `npm run predeploy` assembled 809 app shells, zero failures/skips. All 808 prior gallery entries are unchanged; the new entry appears once under the first AI Utilities category. Every inline gallery script compiled with `new Function`. Gallery rendering/search/links and older STL/game categories passed real-browser checks. Assembled new-app bytes and shared runtime hashes match production builds.

The first root assembly exceeded the existing 1,000,000,000-byte guard (1,000,164,931 bytes). The guard was retained. One additional byte-identical 541,470-byte legacy WASM (`20261029-18`, Ray & Box) now reuses the existing immutable `20261028-24` runtime through the deploy-only rule. All source builds and old JS compatibility URLs remain intact. The assembled site is **999,623,666 bytes**. Actual dedupe report inclusion/removal, preserved source WASM, older app real worker, PNG/STL imports, parsed STL downloads and portable JSON reopening were checked; all affected legacy assets byte-match the assembled tree. No earlier app was removed or recategorized.

The complete Segment Post workflow/browser suite was rerun against the assembled production tree, including real model inference and warmed-page offline fresh-worker inference. Public checks follow publication and are recorded separately.

Legacy asset audit scope: the existing Node-only `__vite-browser-external` shim returns 404 under Jekyll underscore filtering. Inspection confirmed its import is gated by `globalThis.process?.versions?.node` in the legacy geometry factory, absent in the tested browser worker; the browser entry does not reference it. Browser-reachable entry/CSS/worker/shared-WASM assets are audited separately. No browser runtime file was omitted because of a failed normal workflow.

## Public verification — completed

GitHub Pages commit `0ba6b0d5adb57e56926e8d92360b4e3e4265d70e` reached `built`; matching workflow [45059272063](https://github.com/xianghui/daily-app2/actions/runs/45059272063) completed successfully. Public gallery/app/runtime assets byte-match the assembled site (9 files). The complete public workflow suite passed both real-model fixtures (8/8 tiny known-answer links), warmed-page fresh-worker offline inference, maximum batching, reviews/edits/holds/undo, current downloaded artifacts, defensive input checks and responsive layout checks. Public gallery renders all 809 cards with prior categories/search intact. Ray & Box browser-reachable assets byte-match, and its real worker, image/STL import/export and portable saved-design reopen passed publicly.

See `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-validation.json`, `public-legacy-asset-validation.json`, `public-legacy-runtime-validation.json` and `publication-status.json`. Source-only tests and fault injection are not represented as physical phone or carrier validation.
