# Observed validation — Address Quilt

## Real inference and process quality

- Production Vite bundle in desktop Chrome, GPU disabled, real default MiniLM q8 / CPU WASM inference. Studio segments: 4/4 intended purposes. Lab overlap: 4/4. Tiny synthetic fixtures only, **not general accuracy**. Negated/unknown instruction-like notes still select a nearest purpose and remain pending; holding is necessary. No fake fallback.
- Studio worksheet: 22 distinct reviewed addresses, seven exact CIDRs; the single-encompassing-subnet baseline adds ten unrequested addresses (eight for print, two for guest). Exact reconstructed CIDR intervals equal reviewed unions.
- Lab fixture: different-purpose overlap of `10.10.0.6`–`10.10.0.7` blocks Plan CSV, with source-pair witness. Human correction of sensor start to `10.10.0.8` resets approval; after renewed review, the plan has 14 distinct addresses. Same-purpose duplicate archive range merges without lost source records.
- Independent dynamic-programming minimum-block oracle and exact per-address enumeration pass **2,080** small integer intervals. Full IPv4 `/0`, upper-end `/32`, canonical syntax and arithmetic boundaries pass. Downloaded plans also agree with Python standard-library `ipaddress.summarize_address_range`, independently of the JS implementation.
- Real neural counterfactual: changing only one range note from printing to guest wireless changes its model proposal `print` → `guest`; after review the unchanged CIDR moves to the guest worksheet. The assembled production bundle passes the full real workflow/export/offline suite.
- Maximum batch: eight purposes / 32 ranges, 40 actual embeddings in ten chunks. Deliberately indistinguishable synthetic numeric labels are **human corrected**, not counted as AI accuracy. All 32 originals/reviews preserved; exact 192 addresses / 128 CIDRs; complete JSON reimport restores originals for fresh review.

## Review, artifacts and defenses

- Mandatory pending review blocks apply; a hold withholds the entire plan and retains all originals/reviews. Boundary and purpose edits reset approval, all edits invalidate exports, undo restores prior values. Invalid reviewed endpoints block apply. No stale defaults exported.
- Real downloaded JSON, audit CSV, CIDR CSV and Markdown parsed independently in Python; original and reviewed records, address counts, CIDR coverage and source links survive. Multiline formula-like note with quotes/commas survives lossless JSON and escaped quoted CSV. Maximum-batch multiline formula-like IDs survive audit/plan export. Clipboard contains current reviewed worksheet. Reimport is originals-only, not hidden approval reuse.
- Real cancellation/retry passes, including initial model-download progress/cancel followed by successful real inference. Run IDs ignore late cancelled/input-changed messages and prior errors after a newer real run. Delayed file reads and worker-source fetches cannot overwrite new input.
- Fault injection only for defensive tests: malformed vectors/envelopes, missing WASM, unsupported worker construction, worker error, model/worker download failure and shortened timeout. No fabricated output. Network error followed by genuine inference retry passes.
- Empty, invalid, oversized source, unsupported file and >4 MB JSON handled. Input limits and normalization schema checked.
- Fresh-worker real inference succeeds with all network offline in an already-open warmed production page. **Cold offline page navigation/reload not tested or promised.**
- Captured requests from startup through real inference contain download GETs only, no content bodies or source text in URLs. No model requests before explicit loading. Saved network audit strips signed query values. Built text credential-pattern scan clean; source has no key/provider/upload integration. This is observed behavior plus integration review, not a general security proof.

## Presentation / collection

- 1,440 / 390 / 320 px viewport checks: no horizontal document overflow, labeled forms, ≥44 px button/input/select/summary targets and visible keyboard focus. Normal hero/review/results screenshots visually inspected. Physical phones, other browsers and low-memory devices untested.
- Every inline gallery script compiles via Node `new Function`; all 795 old entries preserved, new `ai-utility` entry exactly once; 796 rendered cards. AI Utilities first; older STL/game categories and legacy search retained.
- Root predeploy assembles all 796 app paths. New production and shared runtime hashes match; collection **999,972,808 bytes**, below unchanged 1,000,000,000-byte guard. No new deployment runtime-sharing rules or source-build rewrites. Previously existing unrelated working changes are preserved and excluded from this app's source commit.

See machine-readable reports beside each test. Publication and public asset/inference checks are recorded separately; build success is not publication proof. No digest sent.

## Public release

Public release verified: matching Pages `d8ab9c2f7bb4687b00d85271ab1be37579af0fc8` and workflow `44992505741` succeeded. Nine public gallery/app/worker/factory/WASM assets byte-match the combined site. Both public real-AI fixtures (8/8 simple purposes), full reviewed/export/maximum-batch/offline/privacy suite and all 796 gallery cards pass. Combined size 999,972,808 bytes below the unchanged guard. Source staging preserves and excludes unrelated recovery work. No digest sent. Physical devices and cold offline page reload remain untested.
