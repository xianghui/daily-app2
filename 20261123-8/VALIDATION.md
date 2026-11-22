# Observed validation — 2026-11-23

## Local production bundle

- `npm run predeploy`: passed; React/Vite base `/daily-app2/20261123-8/`.
- Chrome real default MiniLM q8 inference, GPU disabled: library batch **3/3** expected purpose profiles; materially different workshop batch **3/3**. Cosine vectors actually came from the WASM model, not mocks. Known-answer synthetic total 6/6, not a general accuracy claim.
- Balanced layout objectives under identical reviewed constraints: library **686 → 448**, workshop **363 → 245**. Word sequences and hard width/line constraints conserved. No fabricated timing/accuracy improvements.
- 220 small layouts checked against independent exhaustive line-break enumeration: minimum line counts/costs all matched; 92 strictly improved objective versus greedy. Explicit blank/hard newlines and oversized words checked.
- Actual downloads parsed independently: JSON, Python CSV reader, Markdown embedded JSON and XML SVG. Reviewed copy containing quotes/comma/newlines/blank line/ampersand and multiline formula-like notes survived. Every original/review remained in audit artifacts; ready SVG text lines matched current applied layouts; held/blocked cards excluded. Clipboard copied current reviewed output.
- Maximum 8 profiles/24 records/1,200-character copy, 32 embeddings in eight chunks executed with full record preservation. Deliberately over-capacity copy blocked every printable card; maximum audit reimport restored originals exactly.
- Empty/invalid/oversized source; unsupported CSV and oversized JSON import; unsupported copy characters; pending review blocking; copy/profile approval reset; undo; export invalidation; hold and unbreakable-word blocking exercised.
- Model downloads only after explicit load. Captured requests were GET public asset/model downloads with no request bodies and no synthetic content in URLs. No external inference integration or credentials. Request reports persist host/path/query-key names only, never temporary CDN signed values.
- Warmed production page, all network blocked, fresh worker: actual new inference succeeded. Offline navigation/reload and cache eviction persistence are **not claimed**.
- Fault injection only for defensive tests: download/network failures, no WASM, worker constructor/error, malformed vector/envelope, timeout, cancelled/input-invalidated late results. No fake results escaped. Real model network retry and cold-download cancel/retry succeeded. Delayed file read/worker fetch and stale first worker could not overwrite newer input/real inference.
- Desktop 1440 and narrow 390/320 layouts: no horizontal overflow; labels, keyboard focus, ≥44px button/input/select/summary controls; actual viewport screenshots inspected. Physical phones/other browsers/printers untested.
- Negation/instruction-like purpose probe still proposed `arrival` and remained pending. Similarity does not understand all negation; hold uncertainty. Imported text never gains tool authority.

## Collection/publication

Gallery/assembly/Pages/public-AI checks are appended below only after observed completion. `runtime-dependency-audit.json` records immutable shared worker/factory/WASM and new bundle hashes. Synthetic fixtures only; no private datasets or provider credentials.

### Assembled collection

- Root predeploy initially failed the unchanged conservative 1 GB guard at **1,000,143,144 bytes**. Verified `20261029-20`'s geometry WASM byte-identical to immutable `20261028-24`; extended only the existing deploy-only reuse list. Source dist trees and existing JS compatibility URLs retained. Guard not raised.
- Root predeploy then passed: **813 built, zero failed/skipped; 999,601,879 bytes**. All original gallery entries retained; new AI entry exactly once/newest, inline JavaScript compiled and gallery/browser search/categories passed (AI Utilities, STL Generators, Mini Games).
- Full production-browser suite repeated against assembled `deploy/`, not a dev server. Additional maximum 24-ready-card batch produced a parseable full SVG plus every audit row. Over-capacity maximum-length batch retained all 24 blocked rows. Independent artifact parser passed all sets.
- Affected older Corner & Return `20261029-20` real geometry worker loaded the shared WASM, imported a local synthetic ring SVG and exported actual binary STLs with correct triangle-length structure, distinct before/after SHA-256 and no page errors. Old duplicate WASM URL was not requested. Source builds unmodified. See `legacy-runtime-validation.json`.
- Desktop hero and narrow review/results viewport screenshots visually inspected in addition to automated layout checks. No known clipped controls. Monospaced plain-text preview may wrap to screen width on narrow devices; actual SVG preserves fixed-column line breaks.

### Final export hardening

A concrete metadata edge case was identified before final release: JSON permits NUL/unpaired-surrogate strings, but XML SVG does not. Source metadata now rejects XML-invalid code points while retaining valid Unicode and the tested multiline IDs. Explicit rejection tests passed; the app was rebuilt and its actual real-model/browser/artifact suite rerun. Narrow-screen text-preview wrapping versus exact SVG grid behavior is now stated in the UI. Card copy remains ASCII/newline bounded as before.

Final hardened build root deploy lifecycle reran root predeploy successfully: 813 apps, zero failed/skipped, **999,602,114 bytes**, unchanged 1 GB limit. An earlier successful Pages deployment was allowed to finish before publishing the hardened bundle; no active deployment was cancelled or spuriously retriggered.

### Final public release


Linecraft Desk public release verified: matching built Pages commit `6a0c5cbc7d6ab5e6180ccdbfab4a4cc78a1b02fc`, 10 byte-matched public gallery/app/runtime/legacy assets, both real-model fixtures, full 24-card reviewed/export/maximum-batch/offline/privacy/responsive suite, independently parsed public JSON/CSV/Markdown/SVG and all 813 gallery entries passed. Affected legacy worker/import/STL outputs match local hashes. Final combined size **999,602,122 bytes** remains below the unchanged guard. Unrelated pre-existing recovery work is preserved and excluded from the release commit. Physical phones, printers and cold offline startup remain untested. No digest sent.

Reports: `public-browser-validation.json`, `public-asset-audit.json`, `public-gallery-validation.json`, `public-legacy-runtime-validation.json`, `artifact-validation.json`, `pages-build.json`, `publication-status.json`. All remote download requests in persisted privacy reports are sanitized host/path/query-key metadata; no signed query values or user-content requests are stored. The first-use internet requirement is explicit next to the model/runtime download sizes.
