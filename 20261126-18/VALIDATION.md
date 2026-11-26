# Observed validation — Clearing Bridge

2026-11-26. React/Vite production build on this macOS host; installed headless Chrome, GPU disabled for successful inference checks. Synthetic inputs only. Source: `20261126-18`.

## Real AI and quality

Both materially different four-item fixtures executed real MiniLM q8 ONNX inference through the shared WASM CPU runtime. **8/8 simple labels matched**: deposits in transit, outstanding payments, bank-credited receipts absent from books and statement charges absent from books. Every initial suggestion was pending, with source notes and ranked reference/cosine evidence. No fake model or deterministic fallback powered successful workflow tests.

Workshop: adjusted bank **110,000**, books **110,000**, difference **0** minor units. All-to-books shortcut difference **−20,000**. Studio: adjusted bank **252,000**, books **251,000**, unresolved difference **1,000** minor units; shortcut difference **−3,000**. The app did not insert a balancing plug. In both, two timing items were excluded from book-entry drafts. These are computed fixture outcomes, not measured savings or representative accuracy.

Harder real-model probes **failed**: a note explicitly saying “not a deposit in transit” was nevertheless classified as transit instead of book receipt; an unrelated strawberry note was forced into outstanding payment. See `challenge-validation.json`. Mandatory human correction/holds and the bounded four-event scope are essential. No universal accounting-accuracy claim.

## Deterministic and artifact checks

- `core-validation.json`: **43** schema/review/vector/error assertions, including missing rows, invalid type/decision/IDs, zero/negative/fractional/oversized amounts, invalid dates/balances, malformed and non-normalized vectors, audit reimport and formula-like multiline text.
- `independent-core-validation.json`: **400 synthetic cases / 12,272 assertions** with a separately implemented Python integer two-sided ledger. Checks exact signed balances, source conservation, every running trail, all-to-books differences, draft book-only IDs and balanced/difference status. Cases cover 1–24 rows, signed balances and amounts up to the stated bound.
- `artifact-test.py`: actual browser-downloaded JSON, CSV, Book CSV and Markdown parsed/reopened with independent Python JSON/CSV parsers and arithmetic. **602 assertions per full artifact set**. Every original row survives; reviewed type/amount/notes match current edits; holds preserve audit rows but suppress the complete bridge/book export; quotes, commas, Unicode and multiline spreadsheet-formula-like text survive with CSV sanitization; negative numeric charges remain numeric.
- JSON maximum-batch audit reimport restores every original and clears approvals. Source/export envelope bounds are separate. Export snapshots invalidate on review changes.

## Production browser checks

`browser-test.cjs` exercises the individual and combined production bundles, and is reused against the public app:

- Real explicit model loading, two fixtures, maximum 24-item batch (28 texts / 7 embedding chunks), source changes and current applied results.
- Mandatory approval, edited amount/type, undo, source/evidence inspection, multiline reviewer note, hold/reject, undo hold, clipboard, JSON/CSV/Markdown/Book CSV downloads and audit reimport.
- Invalid/empty/malformed/oversized sources, invalid dates/balances/amounts, unsupported imports and >8 MB files fail visibly with no stale reviews.
- Cancel and real retry. A separate real model-download cancellation test saw a model request before cancellation, no late results, and successful real retry.
- 1440/390/320 CSS-pixel viewport checks: no horizontal overflow, associated form labels, ≥44px button/input/select targets, keyboard export-tab order. Normal viewport screenshots inspected for desktop hero and narrow-phone review/results; physical touch devices remain untested.
- Real **fresh-worker offline inference in the already-open warmed page**, GPU disabled, matched the online result with context networking disabled. Cold offline startup/reload, persistence after eviction/private browsing and other engines are not claimed.

## Failure/race checks

`defensive-validation.json`: real worker-download and model-host aborts; fault-injected unavailable Worker/WebAssembly, constructor failure, worker error, malformed result, 180-second timeout accelerated only for test, stale response after input changes and cancellation during pending worker fetch. All fail visibly or ignore stale messages without fabricated classifications.

`network-retry-validation.json`: actual model-host abort, no result and real model inference after unblocking. `extra-defensive-validation.json`: old cancelled run cannot replace a newer run; delayed file read cannot replace newly edited source. Only this race harness uses injected success vectors, explicitly not a successful AI/quality test.

## Privacy, assets and collection

Observed successful-flow requests are GET-only without bodies; no source notes in request URLs and no model-host requests before explicit loading. External requests are limited to documented Hugging Face/CDN file downloads. Reports persist paths/query names, never temporary signed CDN values. No API/provider integration exists; source/review content stays in memory. Built bundle credential-pattern scan passed; runtime worker/factory/WASM hashes match `runtime-provenance.json`. Pattern scans are evidence alongside code/network inspection, not exhaustive secret-detection guarantees.

Shared worker code was inspected: four-text chunks, feature extraction, mean pooling and normalization. Actual tokenizer model_max_length is 512; feature-extraction does not forward the apparent max_length override. `tokenizer-audit.json` records this distinction.

Gallery scripts compile via Node `new Function`; the new ai-utility entry appears once, all prior **893** entries and categories remain unchanged and ordered with AI Utilities first. Root assembly has **894** apps, zero failures/skips, **818,570,470 bytes**, below the unchanged 1,000,000,000-byte guard. Runtime-sharing rules and previous source builds are unchanged. Unrelated existing drafts remain excluded.

## Release state

Local validation complete. Combined-site/public validation and deployment evidence are recorded below after observed completion. Do not treat a branch push alone as public workflow verification.

## Not tested / known limitations

Representative bank-close corpora, actual financial correctness, missing/duplicate-item detection, bank/book errors and reversals, cold offline startup, physical phones, other browser engines, memory thresholds and assistive-technology user studies. The model uses an upstream main revision and can change. This is a bounded human-review worksheet, not an autonomous close, journal importer, bank integration or accounting policy authority.

### Combined production bundle

Full assembled workflow suite passed (`assembled-browser-validation.json`), including both real-AI fixtures, current edited/held exports, 24-item batch, warmed offline fresh worker, defensive input checks, no-content-upload request audit and 1440/390/320 layouts. Independent parsing passed **602 artifact assertions**. Gallery browser checked all **894** cards, every earlier link, AI Utilities first, search and narrow overflow. Seven root/app/shared-runtime public-path assets matched the assembled bytes exactly at the local production origin (`assembled-assets.json`). Root deployment lifecycle reassembled successfully before publishing; checks were not run during directory cleanup.

### Public release verified

- Combined-site Pages head **`f1b524c065d49f5760062d9d3de7283d52b1b933`** exactly matches the latest **built** Pages commit. [Workflow 45789425074](https://github.com/xianghui/daily-app2/actions/runs/45789425074) completed successfully; no fallback rebuild request was needed.
- [Public app](https://xianghui.github.io/daily-app2/20261126-18/) returns HTTP 200. **Seven** public root/app/worker/factory/WASM assets match the assembled SHA-256 hashes (`public-assets.json`), including the shared immutable runtime and actual production JS/CSS.
- The complete public browser suite passed: both real-model fixtures (8/8 simple labels), reviewed type/amount edits and undo, holds/export invalidation, actual downloads/clipboard, maximum 24-row batch and audit reimport, invalid-input handling, cancellation/retry, warmed-page fresh-worker offline inference, desktop/narrow layouts and privacy request checks. No page errors.
- Public downloaded artifacts passed **602 independent parsing/arithmetic assertions**. Public gallery shows **894** cards with every older link/category intact, AI Utilities first, working search and no narrow overflow.
- Combined deployed tree remains **818,570,470 bytes**. Existing deployment guard/sharing rules unchanged. Main source commit/push is verified as the final builder action. Unrelated pre-existing drafts preserved/excluded; no digest sent.
