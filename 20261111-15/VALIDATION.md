# Observed validation — 2026-11-11

## Real AI, not mocked successes

Production-bundle browser checks use installed desktop Chrome through Playwright. Furniture and print workflows executed real q8 MiniLM inference via the bundled worker and WASM CPU. All **8/8 tiny known-answer pool links** matched (4/4 each); a naive first-pool baseline matches 4/8. This small constructed fixture set is not an accuracy estimate.

Furniture activity overhead: chairs 60,001 cents, tables 120,001; output-volume baseline 150,002 / 30,000. Largest product difference 90,001 cents. Print activity overhead 69,001 / 51,001 versus 96,002 / 24,000, largest difference 27,001 cents. Differences describe alternative allocations, not savings. All amounts reconcile exactly.

Negation challenge **failed**: “No machine setup or tool changeovers. Only quality inspection and product testing.” was linked to setup. An unrelated instruction-like Jupiter note also received setup. Both were held; all affected costs stayed blocked, allocated total zero. Similarity is neither accounting certification nor calibrated confidence.

## Arithmetic and artifacts

`node core-test.mjs`: **2,400** independent quotient/residual allocation-oracle cases and full worksheet conservation cases, plus known-answer product allocations, zero/tie/zero-weight boundaries, held-pool blocking and schema guards. All passed. `node allocation-boundary-test.mjs` additionally verified 24 maximum-driver rows, maximum pool costs/output, exact nested source-row remainders, zero weights and full-pool blocking at the boundary. BigInt allocation is compared to an independently structured number-arithmetic oracle within safe exact integer bounds.

`node browser-test.cjs`: both real fixtures, required review gating; pool/product/driver/note edits and undo; snapshot invalidation; partial and all-held pools; zero costs; bad numeric values; downloads/copy; JSON original-input round trip; maximum 6 pools/6 products/24 usage rows (30 texts, four-text chunks); empty/malformed/oversized JSON and wrong file formats; cancel/retry and changed-input protection. All passed. Unused maximum-fixture pools visibly blocked 210,004 cents; no rows lost.

`python3 artifact-test.py`: independently parsed downloaded JSON, usage CSV (reviewed, 24-row max and phone), product CSV and Markdown. Current reviewed product/driver/notes, all records, exact totals and quoted comma/newline formula-like note survived. Copied Markdown equaled the downloaded artifact.

## Runtime, privacy and defensive paths

`node defensive-test.cjs`: actual model-host network failure followed by real retry; worker download failure; unavailable module workers; injected malformed vectors, timeout and worker error. Defensive injections are only failure-path tests, never evidence of real inference. All yielded no fake rows or exports.

`node stale-import-test.cjs`: delayed file read discarded, wrong/large files rejected, cancel during delayed worker fetch then real retry, and actual worker with WebAssembly disabled. `node late-result-test.cjs`: a fault-injected worker deliberately delivered after terminate; its stale result could not replace newer print input/results. Passed.

Real online inference then browser-wide offline mode with a **new worker** successfully processed the data again. Worker, WASM factory/binary and model cache reuse verified. Scope is an already-open warmed page only; offline reload not claimed.

Production-browser request capture began at page startup: no model-host request before explicit load; all observed requests were GET with no bodies, limited to local app/runtime, blob modules and Hugging Face model/CDN downloads. Content never appeared in external request URLs. No credentials/provider integration exists. A built-asset pattern scan supplements code/data-flow inspection; it is not a universal security guarantee.

## Layout and scope

Widths 1440, 390 and 320 px: no document horizontal overflow; all input/select/textarea controls had labels; focus and touch-sized actions, downloads and full reviewed flow exercised. Screenshots saved. These are emulated viewports on desktop Chrome, **not physical-device tests**. Other browsers, low-memory devices, screen-reader behavior, offline navigation/reload and model-host future revision changes are unverified.

Build/combined deployment, root gallery script/entry conservation, public byte hashes and public real-AI checks are recorded in accompanying validation JSON and publication status. Publication is complete only after those checks pass.

## Public release

Combined root predeploy assembled 592 apps with zero failures/skips; deploy-only immutable WASM reuse kept the deployed tree at 927,134,158 bytes. Root gh-pages publish succeeded on its first attempt, release `0c7ece9fd57cafbfd0dc3bf07b4460b68d5ee5c5`. Initial probing before Pages deployment completed returned 404 as expected; no rebuild was requested. Pages workflow `42970369863` completed successfully. Public app/runtime/worker/shared-WASM files were downloaded and SHA-256/byte matched. Both public real-AI fixtures and the complete 10-check public browser suite (including offline fresh worker, maximum batching and reviewed exports) passed, as did the public 592-entry gallery/category/layout checks. Prior gallery entries and order are preserved. Unrelated pre-existing source changes remain outside this release commit.
