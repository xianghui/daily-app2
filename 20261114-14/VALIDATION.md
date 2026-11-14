# Observed validation — 2026-11-14

Production Vite bundle tested in real headless desktop Chrome with CPU WASM and the actual downloaded q8 MiniLM model (no mock successful inference).

- Both distinct fixtures: 12/12 known-answer mappings (six dimensional/mass notes, six temperature/humidity notes); outputs differ with input. This small synthetic set is not general accuracy.
- All eight browser workflow groups passed: fixture inference; review/edit/undo/reject/hold/copy; original-only audit import; warmed-page offline fresh-worker inference; invalid/empty/oversized inputs; cancellation/retry/stale input; 32-row chunking; inert instruction-like text; desktop/390/320 widths and labels/focus/44px controls. Browser screenshots inspected at 320px; no horizontal overflow.
- Defensive fault injection separately tests seven failures: model network, worker download, unavailable workers, malformed vectors, malformed message, timeout, worker error. No fabricated outputs; real network recovery succeeds. A deliberately misbehaving cancelled worker cannot overwrite the newer run.
- Independent known-answer 25-reading series: 24 readings at 100 then 103, mean 100.12, MR mean .125, individuals limits 99.7875–100.4525, MR upper .408375. Both signals identify p24 despite all readings lying in supplied 100±5 specs. Constant series zero-range, reverse-source order, duplicate sequence and fractional sequence defenses tested. Additional browser real-AI 25-reading spike check recorded in edge-validation.json.
- Independent Python parses actual browser-downloaded JSON/CSV/Markdown and summary CSV. Every original and reviewed record, 32-row maximum, multiline/quoted fields and formula-like text survives. Numeric readings/sequence remain numeric; leading formula-like text escaped in CSV.
- Requests captured from startup through inference were GET-only without request bodies; only app/model asset hosts. No model requests before explicit load. Built text credential-pattern scan passed; source has no credential/provider integration. This scan is not a universal secret detector.
- Runtime factory byte-matches installed package; shared WASM hash and production base paths verified. Cache test promises ONLY fresh-worker inference in an already-open warmed page, not offline reload.

Limitations: tiny synthetic known-answer set, no representative field accuracy, no measured time savings, no physical-phone/other-browser tests, no established process stability or capability. Holds bridge retained observations. Unrelated text still gets a semantic candidate and must be held.

Local tests and artifacts: browser-validation.json, defensive-validation.json, stale-validation.json, core-validation.json, edge-validation.json, artifact-validation.json, asset-validation.json and export-*. Public verification appended after deployment.

Harness setup corrections: an initial raw-source HTTP route could not render Vite production assets; a second incorrectly nested combined route failed runtime resolution. Correct base-root production routes were used for the successful dist and assembled-deploy suites. A premature concurrent deployment/test attempt was discarded; the final combined suite ran after assembly and deployment completed. No application fallback or mocked successful inference was used.

## Public verification

Combined root predeploy assembled 663 apps with zero failed/skipped builds; root deploy published `75b42e6c365583e1389460a8f95956c5f201bd46`. Pages reports that exact commit built. Public app/worker/factory/shared WASM and root gallery byte-matched production files. All eight live-URL browser workflow groups passed, including both real MiniLM fixtures, reviewed exports and offline fresh-worker inference. The public 25-reading spike check and 663-card preserved gallery/search/responsive checks also passed. Python re-parsed the live-browser downloaded artifacts successfully. See public-*-validation.json, pages-build.json and gh-pages-head.txt.
