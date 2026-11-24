# Observed validation — Merge Lantern, 2026-11-25

## Local production bundle

- `npm run predeploy`: passed (React + Vite production build).
- Real installed Chrome, headless, WASM CPU with GPU disabled: both synthetic batches matched **6/6 intended snapshot links**. No mocks in successful inference checks. 24-record batch matched all repeated fixture links across four-text chunks; all 24 records survived review/export/reimport.
- A context-only intervention left patch bytes unchanged but selected different snapshots and produced different actual merged output. Semantic inference materially drives the workflow.
- Tiny negation probe selected the intended shipping snapshot; this is one observation, not evidence of general negation understanding or accuracy.
- Both fixture batches produced three shallow-merge disagreements each, calculated from actual reviewed object/object cases.
- 15 RFC 7396 Appendix A examples passed. 500 seeded recursive target/patch cases matched independent `json-merge-patch` library 1.0.2; originals remained unchanged. Root null, member deletion, full array replacement, empty objects, unsafe keys, depth/node/size limits and malformed vectors checked. See `oracle-validation.json` for installed oracle version.
- Actual downloaded JSON/CSV/Markdown/fixtures parsed with Python: **356 assertions**, including every source/review row, exact comma/quote/newline strings, formula-leading note protection, held/blocked retention and context-only intervention. **33 downloaded fixture cases** also matched the independent merge-patch library. See artifact reports and actual `export-*` files.
- Review/correct/edit/approve/hold, undo, pending-decision blocking, malformed reviewed patch blocking, stale-export invalidation, clipboard, downloads and original-audit reimport passed. Reviewed multiline text survived in results and all audits.
- Real worker/model-host network failures surfaced without fake results; removing each block and retrying real inference succeeded. Ten defensive checks cover network failure, missing Worker/WebAssembly, construction/worker failures, malformed output, shortened injected timeout, stale messages and fetch cancellation. Delayed file import cannot overwrite newer text. Fault injection is used only for defensive checks.
- Empty/malformed/oversized input, too many records, invalid plans/types, unsupported import extension and oversized file rejected. Cancellation followed by real inference retry passed.
- **Offline: fresh worker, already-open warmed page**, all network disabled, real inference completed. Cold offline reload/navigation is not claimed.
- Request capture began before loading; no initial model requests, only documented GET downloads, no bodies and no source content in URLs. Browser errors: zero. Audit logs sanitize signed URL values. No API provider integration or key fields exist.
- 1440, 390 and 320px layouts: no horizontal overflow, all input/select/textarea labels present, rendered buttons/inputs/selects/summary targets ≥44px. Normal viewport hero/review/results screenshots captured; phone hero and review screenshots visually inspected.

## Assembled and public checks

Combined-site `npm run predeploy` assembled 853 apps, zero failures/skips, with root gallery and all apps under deploy/. Existing runtime sharing rules and the 1,000,000,000-byte guard are unchanged. Site size: **999,925,934 bytes**. No new legacy sharing rules were needed.

The assembled production bundle repeated the complete real-inference/workflow/offline/privacy/batch/export/layout suite, 356 independently parsed artifact assertions and seven exact HTTP-served asset-byte matches (new HTML/CSS/JS, shared worker/factory/WASM, root gallery). All 853 gallery cards render, AI Utilities comes first, prior folders/categories remain and the phone-width gallery has no overflow. Inline scripts compile with Node `new Function`; the new entry appears exactly once.

Public verification passed at https://xianghui.github.io/daily-app2/20261125-1/ . Pages build commit **6ccb5cad50ebda204cf1c1fdbcb0d98ec28e3307** matches remote gh-pages; workflow **45433638380** completed successfully. All seven public asset byte comparisons passed, including shared worker/factory/WASM. The full real-model browser suite repeated both 6/6 known-answer links, 24-record chunks, review/edit/hold/undo, real offline fresh-worker inference, privacy/network checks, invalid inputs and responsive layouts against the public production bundle. Public downloads passed the same **356 independent Python assertions** and **33 independent-library merge-patch fixture checks**. All **853 public gallery cards** render; older folders/categories remain intact. No app/runtime/build/inference failure required a fake fallback or scope reduction.

Screenshots and sanitized request reports are stored with this source. Pre-existing unrelated root/recovery edits were preserved in the working tree and excluded from this source commit; gallery reports describe the actual published working-tree snapshot.

## Known limitations / untested

Physical phones, actual touch hardware, non-Chrome engines, cold offline startup, concurrent live-server patching, exact large-integer preservation, duplicate-key detection, schema/business-rule validation and real systems are not tested or supported. Embedding similarity is not identity proof; every target is human reviewed. These synthetic fixtures are deliberately small, not a benchmark. No public data, private content or credentials in fixtures; no digest sent.
