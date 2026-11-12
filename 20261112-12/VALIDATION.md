# Observed validation — 2026-11-12

## Real AI / quality
Production-bundle Chrome, actual q8 MiniLM WASM inference, no mock on success paths:
- Help desk: all six intended queue links matched. Weighted order `a,d,e,b,c,f` differs from FIFO `a,b,c,d,e,f`. Access mean start 16.67→30 min, billing 50→40, delivery 50→30. No claim of across-the-board improvement.
- Campus workshop: all six intended links matched. Weighted order `d,f,a,e,b,c`. Bicycle mean start 15→48.33 min, garden 55→5, computer 50→35. Higher garden entitlement deliberately delays bicycle work.
- Tiny fixture success is not population accuracy. Challenge: negated-login billing request correctly proposed billing; unrelated instruction-like text incorrectly proposed access instead of hold. Outcomes recorded in `challenge-validation.json`; unrelated content still gets a candidate because this is closed-set retrieval. Mandatory approval/hold is necessary.

## Deterministic checks
3,000 varied scheduling cases compared with an independent eligible-queue-head BigInt rational oracle. All requests conserved, minutes conserved, no overlaps, queue-internal order and computed mean-start metrics verified. Shared finish-tag comparisons use exact bounded integer cross-products. Holds block scheduling but preserve the complete review and originals.

## Production-browser checks
Two examples, pending-review guard, edits invalidating exports, undo, holds, copied Markdown, downloaded JSON/CSV/Markdown, original-only reimport, 24-request multi-batch processing, full audit reimport, empty/invalid/oversized input, unsupported file formats, missing/fractional/out-of-bound durations. Desktop 1440 and phone widths 390/320: no horizontal overflow, labels and focus verified; physical mobile devices untested.

Offline: after real online inference, fully disabled network and a fresh worker successfully performed real inference in the same open page. Does not establish offline reload/startup. GET-only/no-body asset requests, no source content in URLs, no model host contact before explicit loading. No provider integration or credentials. Built text assets scanned for common credential patterns; no secrets detected. Source/runtime paths inspected.

Isolated defensive fault injection: network/worker download failure, missing workers, malformed vector payload, timeout and worker errors produce no fake results. Network recovery uses real inference. A worker ignoring termination cannot replace newer valid results. Delayed file/worker-source completion is discarded after edits/cancel. Actual worker with WebAssembly removed reports requirement. Real model download cancellation followed by new-input retry succeeds.

Independent Python CSV parsing confirms all 24 maximum-batch records and reviewed edits survive; formula-like multiline note escaping and current schedule positions verified. Markdown contains every reviewed request; JSON preserves originals, holds and plans. Build alone is not counted as AI validation.

Public verification is recorded separately after root combined deployment; no offline reload, physical mobile or cross-browser claim.

## Public release
Root combined deployment succeeded on first attempt. Pages workflow 43146115742 completed successfully at gh-pages commit `7fddb28c0e92cfd83e6232bfe733afedf223dab8`. Public app/index/worker/runtime-factory/shared-WASM hashes matched local production files. Both real-AI fixtures, complete workflow/export/offline/phone-width suite and 613-entry gallery passed at the public URLs. See public validation reports and publication status. Pre-existing unrelated root edits/drafts were preserved and excluded from the new source commit.
