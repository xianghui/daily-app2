# Validation — Outcome Map / 20261107-12

## Production bundle, real browser

Local production bundle served at `/daily-app2/20261107-12/`, Chrome/Playwright. Actual MiniLM q8 CPU inference, not a mock:

- Digital skills: Q1→L1 (account recovery), Q2→L2 (spreadsheet export), Q3 unassigned (basketball). 2 AI candidates versus 0 exact-text baseline matches. 13 original/reviewed marks, 1/3 minimum targets met; uncovered phishing outcome remains visible.
- Food safety: T1→F1, T2→F2, T3→F1. 3 AI candidates versus 0 exact matches. Many-to-one coverage preserved; F1 receives 5 marks against target 4, F2 receives 5 against target 6, F3 receives 0 against target 4.
- Additional exact-match single-outcome fixture: all targets met, no unnecessary acknowledgement, baseline count 1, valid export; empty reviewed marks rejected and corrected successfully.
- Six expected primary-outcome decisions matched six observations on these two authored synthetic fixtures. This is not universal accuracy or pedagogical validity.
- Full limit: 12 outcomes + 12 questions, six embedding batches; all 12 questions retained; 24 reviewed marks reconcile exactly between assigned coverage and unassigned marks. Identical outcomes intentionally demonstrate ambiguity; not a semantic-quality benchmark.
- Normalized finite 384-vector validation, 21 core defensive/coverage checks. No lost question rows; original inputs preserved even after review mark changes.

## Review and artifacts

Rejected mapping, undo restoration, mark editing, pedagogical note editing, review gating, gap acknowledgement, apply/export, stale snapshot invalidation, clipboard parse and phone export passed. Actual JSON/CSV downloads parsed independently with Python; quotes, commas, multiline source/notes and formula-like strings round-trip with documented spreadsheet-safety apostrophe. Edited mark sum changed to 16 from original 13, accurately reflected in JSON/CSV. No implied mark conservation across intentional mark edits; reconciliation applies to the reviewed mark total.

## Defensive checks

Empty/bad headers, missing fields, duplicate IDs, invalid/oversized texts and excessive rows; invalid floor, high-floor deferral, invalid file format/size; full batch/chunking; inference cancellation/retry; model-download cancellation/retry; changed-input cancellation; late cancelled response and stale async file import; offline model-network failure/retry; aborted WASM download/retry; unavailable Worker/WebAssembly; construction/worker error; malformed vectors; timeout. All passed. Defensive faults were injected; successful inference tests used the real model. No fabricated fallback output.

## Runtime, privacy and layout

No remote request before explicit load. Inference request observation: only GET/HEAD, no request bodies; Hugging Face/model CDN downloads, no source text uploads. Source reviewed for network paths; built assets scanned for common credential/private-key patterns with zero hits. This is bounded evidence, not a general security proof.

Online model load → terminate worker → completely offline browser context → fresh-worker inference passed. Cached online reload caused no additional model-host requests. Only open-page offline inference is claimed, not offline page navigation. Locally bundled worker/factory and shared WASM used with production base paths.

Desktop 1440px, phone viewports 390px and 320px: no horizontal overflow; labeled controls, visible keyboard focus, review/export/notes working. Screenshots retained; desktop and 320px screenshots visually inspected. No physical-device, Firefox/Safari, screen-reader, storage-eviction or hostile-browser testing claimed.

Reports: browser-validation.json, core-validation.json, export-roundtrip-validation.json, asset-audit.json. Public production verification is recorded separately in public-evidence/ and deployment-validation.json after successful publication.

## Public publication — passed

Published at https://xianghui.github.io/daily-app2/20261107-12/ . Pages built commit `62e4a1005b68c568c8713318c7bb3661e66d1c60`, matching the remote gh-pages head. Eight app/runtime assets (including shared WASM) match the local production hashes. The public root gallery is byte-identical to the combined root and renders 506 cards, AI Utilities first; older categories and search remain intact.

The full production browser suite was repeated on the public URL: both real-model synthetic fixtures, full 12+12 batch, review/undo/mark edits, actual downloads/copy, fresh-worker fully offline inference, caching/reload, cancellation/retry, invalid input, runtime/network errors, malformed output, timeouts, stale work and layouts all passed. Additional public single-outcome all-targets-met and empty-mark correction checks passed. Public downloaded CSV/JSON artifacts were independently parsed and reconciled again. See public-evidence/browser-validation.json, public-evidence/export-roundtrip-validation.json, public-evidence/gallery-validation.json and deployment-validation.json.
