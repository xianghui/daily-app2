# Burst Ledger — observed validation

Production Vite bundle, real installed Chrome (headless CPU, GPU disabled), 2026-11-19. No successful inference test uses a mock. See `browser-validation.json` and test scripts for observed evidence. Public verification is recorded separately below once completed.

## Observed results
- Storefront: actual MiniLM matches checkout, checkout, image, image (4/4 known identities). All average-only checks pass; checkout rejects 8 of 16 units with capacity 10 and requires observed capacity 16 at refill 5. Image rejects 0 of 10 and needs capacity 6.
- Media intake: matches index, index, video, video (4/4). Index rejects 4 of 9 and needs capacity 8 at refill 1; video rejects 5 of 8 and needs capacity 5 at refill .5. Both average-only checks pass. These eight tiny handpicked links do not establish general accuracy.
- 1,200 seeded independent contiguous-interval demand oracle cases matched minimum capacity. Replaying that capacity accepted all units; reducing by .01 caused rejection. Token bounds/count conservation checked. Both known numeric fixtures passed.
- Maximum 8 streams/24 arrival records (32 texts in four-text chunks) ran real inference; all 24 originals, reviewed mappings, final multiline note and numeric fields survived actual JSON/CSV downloads and original-only audit reimport.
- Browser-downloaded JSON/CSV independently reopened with Python json/csv. Every ID, original/review number, mapping, note and conservation invariant matched. Formula-like multiline strings were safely apostrophe-prefixed in CSV; quotes/commas/newlines preserved. Markdown download and clipboard reflect current reviewed output.
- Pending approvals block apply. Holds block whole replay; undo restores. Numeric edits require approval and preserve originals; mapping edits recompute groups. Review edits invalidate prior export snapshots. Source edits invalidate suggestions. Cancel and real retry passed.
- Offline: terminate previous worker, disable all context networking, create fresh worker, execute real inference in already-open warmed production page. Passed. Offline reload/navigation not claimed.
- Empty/malformed/oversized JSON, unsupported PDF, oversized file, empty/duplicate records, out-of-horizon times and invalid amounts/goals rejected.
- Defensive-only injection: blocked model host plus successful actual retry; unavailable WASM; worker download failure; unsupported Worker constructor; malformed vector/envelope; timeout; worker error. All expose error, no fabricated rows, disabled exports. These mocks only test failure handling.
- Delayed cancelled-run output cannot replace a newer completed run. Delayed file read cannot overwrite new source. Fault injection reports separate from actual model runs.
- Desktop 1440px and 390/320px phone viewport: no horizontal overflow, form labels present, touch controls >=44px, keyboard source→import focus, no page errors. Overview/review/results screenshots captured; 390px overview and 320px results visually inspected. Physical phones, screen readers and other browser engines untested.
- Requests captured from startup through inference: no model-host traffic before explicit Load; GET downloads only, no bodies or fixture text in URLs; only app origin, Hugging Face/CDN and blob workers. No provider integration. Built-assets credential-pattern scan and served-byte audit recorded with deployment.

## Limitations revealed
Irrelevant instruction-like purple-dragon text still gets a nearest stream (see browser report). It remains inert, cannot upload/request credentials, and needs a human hold. Semantic similarity is not identity or confidence. No automated production settings, safety guarantees, future forecasts, measured time savings or universal accuracy claims.

Shared worker/factory/WASM protocol, CPU q8 pooling and source tokenizer ceiling inspected. Preserve immutable dependencies documented in README. Tests target the actual production base paths, not just a development origin.

## Assembled collection
Root predeploy assembled all 712 apps with zero failures/skips. The root inline script compiled and all 711 prior gallery entries were unchanged, with AI Utilities first and older categories/search intact. Actual assembled-bundle Chrome suite repeated both real-AI fixtures, offline fresh-worker inference, review/export/maximum-batch/privacy checks. All app, worker, factory and WASM bytes matched local build; built text credential-pattern scan passed. Existing deploy-only runtime deduplication is unchanged; assembled size 999,887,057 bytes, under the existing conservative 1 GB guard. No older geometry/runtime source was modified.

Original collection gallery was inspected read-only for name/token-bucket/burst-capacity overlap; no matching workflow found. The full AI utility gallery was inspected before selecting this workflow; average-rate policing is distinct from earlier Erlang sizing, weighted queue ordering and histogram percentile pooling.

## Public release
Pages commit `526595b3a20ef75d9aad7c52e681f7380e598313` reached `built`; workflow `44366261976` completed successfully. All public app assets plus the shared embedding worker, module factory and 26,861,777-byte WASM matched assembled bytes. Public Chrome repeated both real MiniLM fixtures, real fresh-worker offline inference, current reviewed downloads, maximum batch, cancellation, source invalidation, input errors, clipboard and responsive/privacy assertions. The public 712-card gallery preserved all 711 prior entries/categories. Actual public downloads reopened with independent Python parsers. No digest sent.

The first public run completed all assertions and wrote its report, but its browser shutdown hung after Chrome exited; the harness now bounds post-validation shutdown to 10 seconds. The public suite was rerun with that cleanup fix; app/runtime assets were unchanged.
