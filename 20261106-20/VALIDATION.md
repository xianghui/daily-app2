# Validation — 2026-11-06

## Production bundle, real local model

Built with `npm run predeploy` and served under `/daily-app2/20261106-20/`, not the development server. Headless installed desktop Chrome, Playwright, real MiniLM q8 ONNX on single-thread WASM CPU. No successful-inference tests use mocks. Detailed observed results: browser-validation.json, browser-test.log, browser screenshots and actual downloaded artifacts.

Known-answer synthetic fixtures:

| Fixture | Expected/observed stock IDs | Reuse quantities | Fully covered vs exact-description baseline |
|---|---|---|---|
| Workshop setup | S1, S2, S3, S4 | 1, 4, 2, 1 | 2/4 vs 0/4 |
| Community kitchen | I1, I2, I3, I4 | 2, 1, 2, 2 | 3/4 vs 0/4 |

Eight expected semantic sources matched; similarities approximately 0.402–0.843. This tiny synthetic set is not a general accuracy claim. AI does not validate physical equivalence. Workshop leaves two lines needing purchase; kitchen leaves one. These are computed line counts, not monetary/time savings. The baseline uses exact case-insensitive descriptions with the same quantity/unit rules.

## Workflow and resilience

- Actual 30-request + 30-stock batch: 60 embedded texts in groups of four; 30 distinct stocks allocated exactly once, no missing rows.
- Unit mismatch rejects otherwise equivalent descriptions; no silent unit conversion.
- Over-allocation after manual editing shows an error and disables approval; undo restores valid quantities.
- Reject a semantic suggestion; edit notes; apply reviewed snapshot; downloaded JSON/CSV reflect the current review. Later edit hides exports; undo restores the review, not an obsolete applied snapshot.
- Independent Python csv/json parsers reopen both browser-downloaded artifacts; all requests, notes, quoted comma/doubled quote/newline text, pick/buy quantities, stock usage and remaining totals survive. Formula-like notes escaped; multiline formula escaping additionally tested in core-test.mjs. A Papa Parse default-regex newline edge was fixed with an explicit leading-character regex before final validation.
- Clipboard CSV byte-for-byte equals the current CSV download.
- Ten invalid/empty/oversized/duplicate/noninteger/bad-unit input cases rejected; invalid format and oversized file rejected.
- Cancel/retry and input changes tested on real runs. Injected late responses after termination do not overwrite state. A delayed file read cannot overwrite a newer example. Normal result handlers validate run IDs and vector schema/count/dimension/norm.
- A semantic non-match (hotel booking vs protective glasses) remains a purchase, rather than forcing a weak match.
- Cold model-download cancellation and retry also passed. Both missing Worker and missing WebAssembly produce actionable requirements.
- Model-host network abort produces an error with no fabricated suggestions; retry succeeds after downloads are allowed.
- Fault injection (only for defensive paths): missing Worker, malformed model output, worker failure, accelerated 180s timeout, delayed cancelled response and delayed file read. Actionable errors with no generated substitute suggestions. WebGPU not required because WASM CPU is the actual default.
- Desktop 1440px and narrow 390/320px browser viewports: screenshots captured, no horizontal overflow, keyboard focus works, controls remain usable. Physical mobile inference, Safari/Firefox, screen readers and memory-constrained devices remain untested.

## Privacy, cache and production paths

No remote request before the explicit AI action. Recorded successful-path external requests are GET/HEAD public file downloads from huggingface.co and us.aws.cdn.hf.co, without user request bodies or sample text in URLs. Worker text is local. Source integrations inspected: no remote inference/API/provider credentials. Built text assets scanned for common secret patterns (asset-audit.json); this is a bounded scan, not a universal secret detector.

After successful online inference, disabled **all network**, terminated the worker, then ran another fixture using a newly created real worker. Cached inference passed. Online reload + run needed no new external requests. Worker/factory/WASM caches are explicit Cache API; model cache is Transformers.js. Offline reopening/navigation is deliberately not claimed (no shell service worker). Cache eviction/storage-blocked operation and real device low-memory failures are not certified.

## Publication evidence

Gallery inline scripts compiled with Node new Function; new AI entry exactly once; all 490 previous entries preserved; AI Utilities first. Both local and public gallery/search rendered with 491 cards and no page errors. Root predeploy copied all 491 applications with zero failures/skips; combined-validation.json verifies every app folder, root index and this app's production assets.

Published at https://xianghui.github.io/daily-app2/20261106-20/ through the root combined deployment. GitHub Pages reports built for `a9474c36953efa22034bc7ac43d031fe7ac67799`, equal to the remote gh-pages head. Every production file was fetched and verified byte-for-byte against dist, including worker, WASM, factory and license files (deployment-validation.json).

The entire browser suite was rerun successfully at the public URL (live-browser-validation.json): both real-model fixtures, max batch, semantic no-match, unit constraint, reviewed exports, clipboard, cached offline fresh-worker inference, online cached reload, model-download failure/retry, cold-download cancellation/retry, invalid inputs, runtime/malformed-output/timeout faults, late-response/file guards and desktop/narrow layouts. The public-run downloads were independently reparsed with Python and conserve all requests and stock quantities. No page errors. No remote content submissions were observed; only documented model GET/HEAD downloads. Physical mobile hardware and non-Chrome browsers remain untested as stated above.

The unrelated pre-existing untracked 20261105-7 folder was left untouched and excluded from this app's source commit. The original daily_app collection was read only for duplicate-idea checking.
