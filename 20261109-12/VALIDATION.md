# Observed validation — 2026-11-09

- React/Vite production build and credential-pattern scan passed. No embedded credentials were found; scan is not an exhaustive secret guarantee. Runtime/worker locally bundled with shared immutable WASM.
- Real browser Chrome WASM MiniLM: library 4/4 expected checkpoint matches, workshop 3/3. Tiny synthetic known-answer fixtures are not universal accuracy claims. Library route 55 m equals baseline; workshop route 46 m vs 59 m baseline, 13 planned metres avoided.
- Independent exhaustive permutation verification confirms optimality; expanded walks use supplied corridors, depot return and every approved check exactly once; held checks conserved. 11 core/input/invariant checks passed.
- 8-location/24-check full limit, four-text batches, JSON original-input roundtrip passed. All-held roundtrip yielded zero-distance plan.
- Human approve/hold, checkpoint change resetting approval, note edits, undo, snapshot invalidation, current artifact downloads and clipboard passed. Independent Python CSV/JSON/Markdown parser confirmed multiline quoted Unicode formula-like notes and all held/approved checks survived.
- No model-host requests before explicit load. Captured default inference requests were GET-only with no bodies; user text did not leave the browser. Offline fresh-worker real inference with network disabled passed, only in already-open page; reload/navigation not claimed.
- Empty/invalid/oversized input, duplicate IDs, disconnected maps, negative/duplicate edges, missing depot, wrong format passed. Model-host abort/retry and actual ONNX-download cancellation/retry passed (separate reports).
- Cancel/change/retry and explicitly delivered stale callbacks could not replace newer state. Malformed vector, runtime error and timeout were fault-injected with visible failures and real-inference recovery; successful outputs were never mocked.
- 1280 desktop and 390/320 CSS-pixel layouts, focus, touch-sized controls, no horizontal overflow and exports checked. Screenshots saved. Physical phones, other engines, denied-storage devices and offline cold navigation untested.
- Challenge: “Do not visit the cafe...” still ranked cafe first (cosine 0.471). Semantic similarity ignores negation here; do not approve without verifying applicability.

Publication verification is recorded separately in publication-status.json and public validation reports after root deployment.

## Public publication verified

Root predeploy and root deploy assembled 551 apps, zero failed/skipped. GitHub Pages commit `3b0ca168b318d57b6f084cc4faba5229baef9e2d`, workflow `42554521766`, completed successfully. Public gallery rendered with AI Utilities and older categories/apps; all 550 prior entries preserved. Public index, bundled JS/CSS, worker, runtime factory and shared WASM byte hashes match local production output. Public real inference again matched all seven fixture checks, confirmed 55/46 m optimal routes, and passed the complete ten-group browser suite including offline fresh-worker inference, review/export, max-batch, defensive and responsive checks. Independent artifact/route parsers passed again against the public-run downloads. See public-validation.json, public-browser-validation.json and publication-status.json. Original read-only gallery inspection found no similar AI utility among 3,595 parsed historical entries.
