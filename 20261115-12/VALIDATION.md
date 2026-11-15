# Observed validation — 2026-11-15

## Local production bundle

- `npm run predeploy`: passed React/Vite production build.
- Real browser: installed Chrome, headless WASM CPU with `--disable-gpu`; actual quantized MiniLM inference, not mocks, on two different synthetic inputs.
- Cooling outage: power/fan/pump matches 3/3; exact top-event probability 0.154, naive leaf-independent baseline 0.1036; minimal cut sets `[power]`, `[fan,pump]`.
- Archive access: lock/water/heat matches 3/3; exact probability 0.069, baseline 0.0348; minimal cut sets `[lock]`, `[water,heat]`.
- These are tiny known-answer fixtures, not accuracy guarantees. Unrelated instruction-like text still receives a nearest event. It was held manually, stayed inert, and could not produce a calculation or upload content.
- Independent closed-form arithmetic checked 125 probability triples including 0/1 boundaries. Three tree shapes checked against all 24 Boolean assignments; every cut set checked for minimality. Duplicate/missing evidence blocks calculation. Prototype-like event IDs are treated as literal data (a regression assertion covers `__proto__`).
- Real 58-text inference processed the maximum 10 events/48 records in chunks. Maximum audit reimport preserved all records; all-held blocks calculation. A separate boundary suite reviews ten event mappings, holds the other 38 evidence records, enumerates all 1,024 states and checks a closed-form probability oracle.
- Review required, event/probability edits, hold, undo, missing/duplicate detection, empty probability, multiline note, stale-export invalidation, clipboard and audit reimport passed.
- Downloaded CSV/JSON/cut-set CSV/Markdown independently parsed with Python CSV/JSON; all source IDs/descriptions, reviewed probabilities/decisions, escaped quote/comma/newline notes and final row survive. Formula-leading textual notes use a disclosed leading apostrophe in CSV only. No stale defaults in exports.
- Offline: successful online model/runtime loading followed by browser offline mode and a **fresh worker** with real inference passed. Scope is already-open warmed page, not offline navigation/reload.
- Empty/malformed/oversized source, invalid probability, duplicate IDs, unknown events, unsupported XOR and file formats, and oversized import rejected. Cancel/retry and source changes tested. Fault injection independently tested late import, late worker download, old result after input changes and old result after a newer completed run.
- Defensive-only fault injection (not used for successful inference): network/model download failure with real retry; absent WASM; worker download failure; unsupported module Worker; malformed vector dimensions/values and null message; worker errors; accelerated 180-second timeout. All failures leave no suggestions/exports. See defensive-validation.json.
- Requests captured from startup through inference: GET-only file downloads from same origin/Hugging Face/CDN; no content in request bodies or URLs, no model-host request before explicit load. Built text/shared runtime scanned for credential patterns and provider endpoints. This is a focused audit, not general security certification.
- 1440px desktop, 390px and 320px phone viewport emulation: no horizontal overflow, every field labeled, controls ≥44px, keyboard focus and downloads/copy working. Overview/review/results screenshots inspected; header contrast corrected, production bundle rebuilt. Physical phones/other browsers untested.

## Gallery and publication

Source gallery script compilation, exactly one new AI Utilities entry, all 684 prior entries preserved, category order, old categories, search and phone gallery layouts passed. The original `/Volumes/ExternalHD/daily_app` gallery was only read. Closest prior utilities concern independent redundancy and diagnostic check allocation, not repeated-basic-event truth tables/minimal cut sets; see original-gallery-distinctness.json.

Combined assembly includes all 685 gallery folders and byte-matches app assets, shared worker, factory and WASM. The root predeploy/deploy workflow passed with zero failed/skipped apps. A legacy maker app also passed real shared-worker geometry generation and valid STL export. Public results are appended below after final checks. No publication claim is based solely on a branch push.

## Public release — passed

GitHub Pages built gh-pages commit `12d2e822dc5ae608ef5c674fb80ec8b7f5978c14`. Public app HTML/JS/CSS, shared embedding worker, factory/WASM, root gallery and checked legacy runtime assets byte-matched local production assets. Full public browser suite passed: both real MiniLM fixtures, maximum chunked inputs, manual review/undo/holds, invalid inputs, stale-run cancellation, warmed-page offline fresh-worker inference, clipboard/downloads and 1440/390/320px layouts. Independently parsed the actual public downloads. Public gallery renders all 685 cards, AI Utilities first, old categories/search intact. Public legacy geometry worker/import/STL export smoke test also passed.

The first deployment was superseded by the final build after hardening literal prototype-like event IDs; only the final built commit is counted as the release. No external content actions or digest were sent. Physical devices, other browsers, offline page reload and correctness for real-world dependent-event models remain untested/out of scope.
