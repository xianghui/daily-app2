# Validation — 2026-11-08

Production React/Vite bundle tested in real headless Chrome using actual MiniLM q8 WASM inference, not mocks for successful inference. CPU only; no WebGPU dependency.

- Facilities fixture: 4/4 expected crew assignments; design/data fixture: 4/4 expected crew assignments. Tiny synthetic known-answer fixtures, not a general accuracy benchmark. Actual cosine values and baseline metrics in `browser-validation.json`.
- All 24 batch jobs survive; capacity-constrained assignments valid. Four-description chunks execute real inference.
- Review hold, edit, undo, invalid capacity block, applied export invalidation; actual downloaded JSON/CSV independently parsed including quoted multiline note. Clipboard output verified. JSON original-input import round trip verified.
- Empty/invalid/oversized inputs, schemas/IDs/durations, malformed vectors, unsupported worker/runtime, worker errors and accelerated timeout tested. Fault injection only for defensive error paths, not successful AI results.
- Cancellation, changed input while running, no stale UI, retry; blocked worker download and fresh-context blocked model-host download fail visibly with no fabricated result.
- Offline fresh-worker real inference passed with all networking disabled after online caching. Does not claim offline reload/navigation.
- Recorded production startup/inference requests are GET downloads with no bodies. No eager model requests; no content upload found. Built assets scanned for common credential patterns; source includes no key/provider path. This is not a proof against every possible secret format.
- Desktop and 320/390-pixel phone-width layouts have no horizontal overflow; editable controls/export tested. Screenshots saved. Physical devices and screen-reader operation are untested.
- Greedy dispatch is not globally optimal; capacity, preservation and schema are hard checks. Similarity is not qualification/safety clearance.

Public deployment and runtime hash/inference evidence are recorded separately only after successful verification.

## Public verification

Pages built commit `740170c7c591dff070ce556623905d66f87b0dca` matches remote gh-pages. Every app/runtime asset hash matches the production build, including shared WASM. Public Chrome repeated all 13 browser check groups and both 4/4 real-inference fixtures, offline fresh-worker inference, exports, failure paths, privacy requests and narrow layouts. Cold model-host failure passed separately. Live gallery renders 517 cards, AI Utilities first, preserves older categories and supports search. See `deployment-validation.json`, `public-gallery-validation.json` and `public-evidence/`.
