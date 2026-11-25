# Patch Ledger — observed validation (2026-11-24)

## Local production build

- Required React + Vite scaffold, gh-pages dependency and exact predeploy/deploy scripts; app build passed. No collection guard or runtime-sharing rule changed.
- Actual headless desktop Chrome, WASM CPU, real default q8 MiniLM inference: two materially different synthetic batches returned **8/8 intended target fields** (`delivery, contact, label, delivery` and `label, contact, delivery, label`). This tiny descriptive fixture is not an accuracy estimate.
- Context-only impact: holding the case JSON constant and changing only the natural-language context moved the selected pointer between `/shipping/address` and `/customer/email`, so the suggestion is genuinely driven by the text rather than by the document structure.
- Negation challenge intended the delivery address but the model selected `contact`. Human approval is mandatory; ambiguity/negation are explicit limitations, not concealed by deterministic fallback.
- **162 core assertions**, including **150 property-based independent `fast-json-patch` oracle cases** over deep JSON targets with unchanged and concurrently modified documents. The oracle applies the produced patch and the result must equal the projected document and the guard outcome. Pointer, schema and parse constraints are checked in the same suite (`PASS core 162`).
- Complete UI: mandatory approve/hold before apply; editable target field, case document and note; edits invalidate exports; target/case edits reset approval; hold/reject, undo, blocked invalid cases, clipboard and actual JSON/CSV/Markdown/Release JSON downloads. Independent parsing confirmed reviewed notes survive verbatim, including formula-leading `=SUM(1,2)` and embedded quotes/newlines.
- Four-text chunking processes 24 records. Cancel/retry, pending worker-fetch cancellation, delayed import-file race and a late injected result cannot replace a newer real inference.
- Defensive fault injection: missing Worker, missing WebAssembly, construction error, worker error, malformed vectors, unsupported WASM fault, accelerated 180-second timeout and a stale run. Every fault fails closed with no fabricated suggestions.
- Input checks cover empty/malformed/oversized JSON, 25 records, invalid pointer, bad `~2` escape, non-string raw case and imports >1 MB.
- Offline: terminate the online worker, disable all network in the browser context, create a fresh worker and complete another real inference in the already-open warmed page (`PASS offline`). Cold offline navigation/reload remains untested/not promised.
- Request capture from page startup through inference: all requests GET with no body; no model request before explicit action; no synthetic source strings in request URLs. No provider integration, analytics, API credentials or content persistence.
- Responsive 1440/390/320 CSS-pixel layouts: no horizontal overflow, visible labeled forms, ≥44px actionable controls. Screenshots visually reviewed. Physical phones and other browser engines are untested.

## Publication status

This app was built and validated locally but was **omitted from the gallery index and the assembled deployment**, so `https://xianghui.github.io/daily-app2/20261124-12/` returned 404 while every sibling `20261124-*` URL returned 200. The root cause was a gallery-index omission, not a broken build: the core suite passed, real browser inference worked offline, and the negation probe behaved exactly as documented.

The gallery entry and this README section were added, and the app was included in the assembled deployment. Public URL verification is recorded in the root `README.md` release notes and the publication-status files. Combined-site size is governed by the unchanged 1 GB guard; no sharing rule or guard value changed.

Limits: this is an intentionally bounded fixture generator. The `test` guard proves only that a target value was unchanged, never that a change request was understood, authorized or correctly targeted. Negation and ambiguous notes misroute. No live server, endpoint, concurrency or transaction semantics are tested. No content uploads, external writes, account changes or digest.
