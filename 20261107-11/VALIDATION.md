# Mention Atlas — validation

## Local production-bundle checks: passed

- React/Vite `npm run predeploy`; production worker/factory and shared WASM paths, not dev-server inference.
- **Real BERT q8 WASM CPU**, no mock model or deterministic fallback. Two materially different synthetic datasets: Newsroom (6 expected spans/types) and Science desk (8), **14/14 exact spans/types** observed across four excerpts. This is fixture performance only.
- Repeated-name fixture: two Sarah mentions retain distinct source offsets and consolidate into one index entry; reviewed canonical alias changes preserve both references. A third real-model input, “Sarah Jones visited London. Sarah works at Microsoft.”, detects distinct full/short surfaces; reviewer merge produces 3 index entries from 4 mentions, preserves both aliases and both references. Manual missed-phrase addition remains explicitly non-neural.
- Maximum batch: 12 inference chunks / 36 mentions, all preserved. No-entity excerpt remains in lossless JSON and Markdown sources. CRLF source separators retained.
- Empty, oversized excerpt, >12 chunks, >8 KB total, unsupported extension and oversized file rejected. Strict raw-token schema, wordpiece joining and full-source alignment tested independently in `core-check.mjs`.
- Review gating; canonical/type/note edits; reject and undo; stale export invalidation; applied JSON copy. Source edits cancel old inference. Stale file reads and late cancelled responses cannot overwrite new state.
- Cancellation/retry during download and processing; blocked model-host network, blocked WASM, worker construction/error, missing Worker/WASM, malformed output and accelerated timeout: visible error/no fake suggestions; actual-model retry succeeds after removing download/runtime faults. Fault injection used only for defensive cases.
- **Offline fresh worker in already-open tab after online run**: passed real inference with all browser network disabled. Worker/factory/WASM/weights/tokenizer cache dependencies therefore exercised. Offline navigation/reload is not claimed or tested.
- Network recording from page startup through inference: no external request before explicit Run; observed external traffic was only GET/HEAD downloads from Hugging Face/CDN, with no request body or source-content URLs. Source inspection: no external AI/telemetry/backend integration. No credential-pattern matches in production assets; scan alone is not exhaustive proof.
- Browser-downloaded JSON/CSV/Markdown artifacts reopened with Python JSON/CSV and source/offset comparisons. Reviewed label/note edits, all rejected mentions, index reference counts and original sources preserved. Formula-like/quoted fields escaped in CSV. Core artifact test preserves embedded newlines. Copy JSON parsed from actual browser clipboard.
- Desktop 1440px and narrow 390/320px: no horizontal overflow; review/edit/apply/export work on narrow layout; labels, keyboard focus and >=44px button touch targets checked. Screenshots inspected. No browser page errors.
- Gallery: every inline script compiled with Node `new Function` (missing/syntax failures nonzero); new entry exactly once and area `ai-utility`; existing 504 entries preserved; total 505; AI Utilities before legacy categories; browser search works.
- Root `npm run predeploy`: 505 builds copied, 0 failed, 0 skipped. Combined output has root gallery plus every published app; new app assets byte-identical to its validated dist.

## Evidence

`browser-validation.json`, `alias-validation.json`, `core-validation.json`, `export-roundtrip-validation.json`, `asset-audit.json`, `gallery-validation.json`, `local-gallery-validation.json`, `combined-validation.json`, screenshots and downloaded `export-*` synthetic artifacts. Test sources are included for reproducibility.

## Limitations

Headless desktop Chrome only; phone sizes are emulation, not physical phone performance. Other browser engines, low-memory devices and screen readers are unverified. Model may miss/mistype entities; exact same-name grouping is not proof of identity. No fact verification or general accuracy claim. Model uses upstream `main`, so future updates may change outputs. Offline app-shell startup not promised. User content is not persisted by the app; downloads/clipboard/browser restore are outside its control.

## Public publication

**Passed.** Pages reports `built` for gh-pages commit `2768c323e380a5b08155eec63cc100ba4ac8b925`, matching the remote branch. Public gallery renders 505 cards with AI Utilities first. Every app asset (including worker/factory) and shared WASM was fetched from the public host and SHA-256 compared with the local production assets. Real public BERT inference passed both known-answer datasets (14 exact spans/types), maximum-batch conservation, alias review, cancellation/stale-source checks, reviewed exports/copy, narrow layouts and offline fresh-worker inference. Public downloaded artifacts were independently reparsed. See `deployment-validation.json`, `pages-status.json`, `public-gallery-validation.json` and `public-evidence/`.
