# Observed validation — 2026-11-11

## Production-bundle local checks

- `npm run predeploy` passed. Real Chrome (headless channel `chrome`) served `dist` at its actual `/daily-app2/20261111-5/` base, using the bundled worker, local WASM factory and shared collection WASM asset.
- **Outdoor festival:** real AI matched 2/2 intended templates (`tent`, `bus`). Supplied costs 600/400 and likelihoods 30%/20% give expected loss 260, baseline coverage 56%, 90%-target reserve 600 with 94% coverage, maximum 1,000.
- **Community screening:** matched 3/3 intended templates (`projector`, `food`, `power`). Expected loss 137.5, baseline 138 with 45.9% coverage, 95%-target reserve 500 with 98.5% coverage, maximum 750. These tiny hand-authored examples are not general accuracy estimates.
- Modified cost 250→300 changed current exports; target 95→99 changed reserve to 650 under edited assumptions. A first test incorrectly expected 800; inspecting the actual 650-loss cumulative mass (99.4%) corrected that test oracle. Production math agreed with the independent enumeration, not the erroneous test expectation.
- Actual inference repeated with a fresh worker and fully blocked network in the same warmed page. No offline page reload/navigation claim.
- 12-record chunking, original-only audit reimport and pending-review reset passed. Additional maximum-dimensional fixture: six templates / twelve risks / 18 texts (five batches) processed by the real model; see `max-validation.json`.
- Empty/malformed/oversized/unsupported imports, invalid numeric domains, review/hold/undo/edit, unchecked confirmation, target edits, cancel/retry, input-change stale guards and delayed import/worker-fetch races exercised.
- Fresh-context model-host network abort, worker-download abort, unavailable module workers, malformed vectors, worker error and accelerated timeout produced actionable errors and no fake output. Network recovery retried with the real model. Actual bundled worker with WebAssembly removed reported device failure. Fault injection is ONLY for defensive checks; successful AI checks use real inference.
- Schema/vector bounds checked; independent exhaustive bitmask enumeration agreed with convolution on 100 generated scenarios. Zero/certain/equal-cost outcomes and 12-risk limits checked; total mass and minimal quantile constraints verified.
- Browser-downloaded CSV/JSON/Markdown independently reopened using Python `csv`/`json`; edited costs, source identity, every hold and source record, multiline quoted notes and formula-safe CSV preserved. Clipboard equals current Markdown. JSON restores exact originals, not reviews. Additional maximum fixture includes a quoted multiline source field.
- Captured requests from initial load through inference: file GETs only, no request bodies, no incident text in URLs; no model-host requests before explicit load. Built text assets scanned for common credential patterns and source integrations inspected. Pattern scanning alone is not exhaustive proof against all secret types.
- Desktop 1440px and phone widths 390/320px: no page overflow, working labels/focus, responsive input/review/results, download/copy actions. Screenshots retained. Physical phones, non-Chrome engines, offline navigation and real-world calibration are NOT tested.

## Known AI/decision limitations

The negated mixed-topic challenge mentioning no need for shelters and an engine failure matched `bus`, consistent with replacement transport in this one example; this does not establish general negation understanding. An unrelated instruction-like astronomy sentence received a nearest-template `bus` proposal with low similarity. Both stayed inert data and were held; no budget was computed. The model is not a relevance gate. Human review is essential. Most importantly, none of these tests establishes real-world probability calibration or independent incidents.

## Evidence and publication

`core-validation.json`, `browser-validation.json`, `defensive-validation.json`, `stale-import-validation.json`, `max-validation.json`, `artifact-validation.json`, `secret-scan.json` record local observed checks. Gallery conservation/syntax, assembled paths/hashes and public real inference checks are recorded separately after publication. See `publication-status.json` for final status; a branch push alone is not runtime verification.


## Published verification

Root `npm run predeploy`: 582 built, zero failed/skipped. Root `npm run deploy`: Published. Pages commit `a0afa6a21bd47ec12c95452528132d97d7569c9f`, workflow `42892316383` completed build/report/deploy successfully; deployment status `succeed`, app HTTP 200. Public app code, worker, factory and shared WASM hashes match local production assets, and public gallery is byte-identical to the preserved 582-entry source. All earlier 581 entries/categories and order survive; every inline script compiles.

The FULL real-inference browser suite then passed at the public URL: both fixture sets, 12-risk batching, review/undo/hold, actual downloads/copy, cancellation/input stale guards, fully offline fresh-worker inference, phone/desktop widths, and file-only GET network/privacy checks. Additional public six-template/twelve-risk run matched 12/12 simple known-answer template links with 18 embedded texts. Public artifact outputs were independently reopened again. See `public-*-validation.json`, `public-validation.json`, `hosting-attempts.json` and logs. No digest/announcement was sent.
