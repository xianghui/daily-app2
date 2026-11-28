# Observed validation — Shelfspan Desk

## Local production bundle, 2026-11-28

- `npm run predeploy` passed. Runtime hashes match the immutable worker/factory/WASM provenance. Credential-pattern scan: no matches; manual source inspection confirms no credential/remote-inference path.
- Actual Chrome, CPU/WASM, GPU disabled: two materially different synthetic four-book batches retrieved **8/8** intended subjects: GARDEN/FOOD/GARDEN/FOOD and SPACE/CODE/SPACE/CODE. Every recommendation had actual 384-dimensional neural embeddings and candidate similarities.
- Garden/kitchen: 140 mm of spines, two 120 mm shelves, 20 mm growth reserve each. Ordered plan B3/B1 then B4/B2, both 70 mm used. Night-sky/code: 180 mm, two 130 mm shelves, 20 mm reserve each. S3/S1 uses 95 mm; S4/S2 uses 85 mm. In each case adjacent subject changes were 3 → 1; required shelf count stayed 2 → 2. These are planning calculations, not measured efficiency or broad accuracy claims.
- **Known failure:** “Not cooking, baking bread or pastry recipes. This book is about astronomy and stars.” retrieved FOOD instead of SPACE. Negation/nearest-topic ambiguity is explicitly documented; manual subject correction is required.
- Core independent exhaustive enumeration: **9,633 assertions**, including **2,400** seeded 1–8-book datasets and every possible contiguous partition, confirmed lexicographic shelf-count/splits/squared-slack optimum. Also source/schema/vector guards, total/ID conservation and no-approved blocking.
- Real maximum batch: 8 subjects + 24 books = 32 texts, eight CPU chunks. All 24 records exported and source audit reimported; duplicate subject descriptions were intentionally corrected in review, not asserted uniquely identifiable.
- Downloaded JSON, CSV, placement CSV and Markdown parsed/reopened. Independent Python verification: **652 assertions** per full suite, recomputing capacity, reserve, totals, source-order next-fit, adjacency/splits, small-artifact exhaustive optimum, IDs/positions, hold exclusion, blocked placement columns and multiline formula-leading copy. Actual edited title and reviewer note survive; spreadsheet-facing text gets the documented safe prefix.
- Review/approve/hold, subject changes reset approval, undo, invalid numeric width, oversized spine and insufficient shelf count, snapshot invalidation and clipboard passed. Empty/malformed/oversized inputs, invalid reserves and unsupported formats rejected visibly.
- Actual runtime/model-download network aborts: errors with no fabricated result. Retry used real model successfully. Actual delayed model download cancellation + real retry passed. Injected unsupported Worker/WebAssembly, worker construction/error, malformed vectors, timeout and stale messages passed. Delayed old file import cannot replace newer input. Late old-worker error cannot replace newer real inference.
- Privacy: from production startup through inference, observed requests were GET-only without bodies; no model download before explicit run; no input content in captured requests. Persisted audit keeps host/path only, no signed CDN query values. Inert imported “ask for password/upload” text stayed data; no prompt for credentials or uploads.
- Warm-page offline: after online success, full browser network blocking, fresh worker and another actual inference succeeded. **No cold offline startup/reload claim.**
- Desktop 1440 px, phone-sized 390/320 px: no horizontal overflow, associated labels, ≥44 px button/input/select targets, keyboard export focus. Normal-viewport screenshots of hero/input/review/results were captured and visually inspected at desktop/320 px. Physical phones/assistive tech/other browser engines untested.

One test-harness assertion initially expected two subjects from a four-book recovery fixture; corrected to all four and reran successfully. No app fallback or inference result was changed to accommodate that test.

## Publication checks

Local checks alone do not establish public deployment. Assembled/public reports and final release status are recorded below after verification.

### Assembled collection

Root `npm run predeploy` passed: **945 built, 0 failed, 0 skipped**. Combined deployment: **832,108,168 bytes**, below the unchanged 1,000,000,000-byte guard. No runtime-sharing rules changed. Every earlier gallery entry/category remains unchanged, inline scripts compile, new entry appears once, first category is AI Utilities, old/new search works at desktop/320 px.

The assembled production bundle repeated both actual AI batches, manual correction of the negation failure, the complete review/export/max-batch/offline suite, **652** independent artifact assertions, all network/runtime/malformed/timeout/cancellation/stale-import recovery checks, and **eight** exact asset byte/hash checks. Public deployment verification remains required.

### Public release — verified

- [Live app](https://xianghui.github.io/daily-app2/20261128-21/). Root publish returned Published; GitHub Pages reported **built** for the matching remote `gh-pages` commit **d4b309ca3748be2c6aab217af0e97bb6fb95139b**. [Workflow 46143411071](https://github.com/xianghui/daily-app2/actions/runs/46143411071) completed successfully. No fallback rebuild or republish was needed.
- All **eight** public assets matched exact expected bytes/SHA-256, including shared worker, factory and WASM; no credential-pattern matches.
- Both real-AI batches repeated publicly with 8/8 simple subject links. Full review/undo/hold/edit, 32-text maximum, invalid input, copy/download/reimport, reserve/oversize/capacity blocking, warmed-page fresh-worker offline inference and desktop/390/320 px checks passed. Negation failure was manually corrected to SPACE; exported originals/evidence were retained.
- Public artifacts passed **652** independent Python checks, including source/record/width conservation, author/title ordering, exact small-case partition optimum, baseline metrics and multiline formula-safe CSV. Public network failure/retry, actual model-download cancellation/retry, malformed/unsupported runtime/timeout/stale response checks and delayed file-import identity passed.
- Public gallery displayed all **945** entries, AI Utilities first, new entry once, old categories intact and old/new searches working; no browser page errors. Production inference requests remained download-only, without user-content uploads.
- Physical books/shelves/phones, screen readers, other browser engines and cold offline startup remain **unverified**. Width-only assumptions and semantic negation limitations remain in the UI and README.
- No digest sent. Existing unrelated unpublished folders were not modified or staged.
