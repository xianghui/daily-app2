# Observed validation — Commit Cove, 2026-11-22

## Actual local production-bundle checks
- `npm run predeploy` passed. Real Chrome (GPU disabled) executed shared MiniLM q8/WASM inference, not mocks.
- Inventory example: 6/6 simple resource matches; one dirty read and early reader-commit witness; not recoverable, cascadeless or strict.
- Editorial example: 6/6 matches; committed-source reads; recoverable, cascadeless and strict. 12/12 tiny-fixture matches is not general accuracy.
- Seven known-answer recovery scenarios plus parser/schema checks: 17 core checks passed. Source count and all commit events conserved. Same-boundary array order, latest writer, initial values, own reads and dirty overwrites covered.
- Maximum batch: 8 records, 8 transactions, 32 accesses; actual 40 embeddings / 10 chunks. Export includes 40 R/W/C events. Audit-envelope import restores all 32 originals.
- Eight actual JSON artifacts independently parsed with Python; available access/event CSV companions parsed with stdlib csv. Counts, reviewed identities, multiline formula-like notes and quoted/newline IDs survived; CSV formula guards verified. JSON retains lossless originals.
- Mandatory review, reject/hold, undo, edited resource/mode, invalid transaction-after-commit edits, export invalidation, clipboard and downloads passed. Reviewed identity changes alter recovery output.
- Fresh worker ran actual inference with all network disabled after warming the same open page. Cold offline startup is NOT claimed.
- Real network-block/retry and weight-download cancellation/retry passed. Fault injection tests only: unsupported Worker/WASM, malformed vectors/envelopes, worker errors, accelerated timeout, delayed cancelled/input-invalidated messages. No fake output. Delayed file reads/worker downloads cannot overwrite new input; newer real results survive old delayed errors.
- Request capture: public asset GETs only; no request bodies or source content in URLs. No model host requests before explicit loading. Persisted audit strips signed URL query values. Built asset credential-pattern scan and integration source inspection are also required in assembly validation.
- Unknown/negated adversarial note selects nearest `price`, pending. Reviewer hold suppresses analysis. This explicitly demonstrates the semantic identity limitation; no prompt can request credentials or acquire tool authority.
- Desktop 1440 and phone-width 390/320 layouts: no horizontal overflow; labels, focus and ≥44px controls verified. Hero/review/result screenshots saved and narrow hero/result visually inspected. Physical devices and other browsers untested.

## Publication
Combined assembly passed: all 797 older published entries retained, 798 total cards, every app present, new app production bytes and immutable worker/factory/WASM hashes verified, credential-pattern scan clean. Assembled real-AI workflow suite passed. Extended deploy-only sharing was regression-tested with the older app’s actual worker, PNG/STL imports, parsed binary STL exports and portable JSON. Combined size remains below the unchanged 1,000,000,000-byte guard.

Public release verified: matching Pages `a163aca93c8b87b09eaf67043bcfd8693a735f41` and workflow `45006112836` succeeded. Nine public gallery/app/worker/factory/WASM assets byte-match the combined site. Both public real-AI fixtures (12/12 simple record notes), full reviewed/export/maximum-batch/offline/privacy suite, independently parsed artifacts, all 798 gallery cards and the affected older app’s real worker/image/STL import/export regression passed. Combined size 998,792,100 bytes is below the unchanged 1 GB guard. Source staging excludes and preserves unrelated recovery work. No digest sent.
