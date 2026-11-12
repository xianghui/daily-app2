# Observed validation — Echo Canopy

## Production-bundle local checks

- `npm run predeploy` passed. Actual bundled worker + WASM CPU inference, no WebGPU or API key.
- Real Reading room inference matched `glass, plaster, carpet, curtain`; real Rehearsal studio inference matched `concrete, wood, foam, seat`: **8/8 tiny intended labels**. These are synthetic examples, not an accuracy estimate.
- Reading room required 16 modules across all bands versus 6 for the 500-Hz-only baseline; baseline missed one band. Rehearsal studio required 30 versus 13; cap 20 correctly leaves a target unmet. These are computed Sabine scenarios with synthetic coefficients, not measured performance or recommendations to buy.
- Negated glass/drape challenge incorrectly selected glass, and an unrelated instruction-like note selected curtain. Both remained pending; hold blocked all acoustic results. Semantic similarity is not physical identity or instruction authority.
- **3,000 independent BigInt rational-oracle cases** verified minimum whole-panel counts, capacity constraints, per-band absorption and estimate consistency. Zero absorption yields null/undefined, not Infinity. Strict invalid schemas, duplicate IDs, bad coefficients and malformed/unnormalized AI vectors rejected.
- Browser suite: mandatory decisions, material/coefficient reset, edited area/note, invalidated snapshot, undo, hold blocking, clipboard, actual JSON/audit CSV/band CSV/Markdown downloads and originals reimport with approvals reset passed.
- Independent Python parsers checked every reviewed field, multiline formula-like note escaping, unrounded band values and Markdown. Maximum 24-row inference batched all 28 profile/note texts with no lost rows; original JSON and audit CSV retained all 24 rows.
- Empty, invalid, >1 MB text, unsupported CSV, invalid/empty/fractional/oversized numeric inputs rejected. Actual model download cancellation, input change, delayed file read and delayed worker download guards passed. Fault-injected worker ignoring terminate could not overwrite newer valid results.
- Network/model download abort and real retry, worker download failure, absent module workers, actual worker WebAssembly removal, malformed vectors, accelerated timeout and worker error all produced errors without fake outputs. Defensive fault injection is not counted as successful AI inference.
- Fresh worker ran real inference with browser network completely offline after online warmup. Scope is ONLY an already-open warmed page; offline reload/navigation untested and not claimed.
- Request capture from initial page load through all AI workflows found no model downloads before explicit loading, only GET downloads, no request bodies and no source text in URLs. Hosts were localhost, Hugging Face/CDN and local blobs. Supplementary built-asset credential scan clean; source integration has no provider credentials or upload endpoint.
- Desktop 1440 px and narrow 390/320 px layouts: no document overflow; all inputs had labels; focus reachable. Physical phones, other browsers, real acoustics and acoustic measurements untested.

## Collection/public release

Final assembly, preserved gallery, Pages status, runtime hashes and public inference results are recorded in the adjacent `combined-*`, `gallery-*`, `public-*` and `publication-status.json` reports once completed. A successful branch push alone is not public verification.


## Verified public result

First combined publication succeeded: Pages commit `7386024dd40fc1cbadf0783afe507a84685027da` reached `built`, and workflow `43173089705` completed successfully. Public app, emitted worker, local runtime factory and shared WASM matched local SHA-256 hashes. Both real-AI fixtures and the complete workflow/exports/offline/layout suite passed again on the public URL. Public gallery matched the working-tree gallery byte-for-byte, with 617 preserved entries and AI Utilities first; older categories remained intact. No rebuild trigger or provider retry was needed. See `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json` and `publication-status.json`.

A test adaptation initially expected the old `units-0` focus ID; correcting it to this app’s `area-0` resolved the test. No mocked inference was substituted. Acoustic predictions were not validated against physical measurements.
