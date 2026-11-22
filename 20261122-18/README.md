# Commit Cove

A React + Vite local-first transaction recovery worksheet for developers and database instructors. It answers **who read whose value, and did the reader commit too early?** It does not compute serializability or repair a schedule.

## Workflow
1. Paste/import JSON, or load either synthetic example. Supply 2–8 exact resource descriptions, 2–8 transaction IDs, 2–32 R/W operations and one commit per transaction.
2. Set commit `after` values to 1-based operation boundaries. Commits happen immediately after that operation; same-boundary commits execute in their array order. A transaction cannot operate after its commit.
3. Click **Load AI & reconcile**. Actual neural embeddings reconcile each informal access note to the record catalog. Inspect cosine evidence, not confidence.
4. Review every resource, transaction, mode and commit timeline. Change suggestions or hold uncertain accesses. Notes are multiline, undoable. Any edit invalidates exports; holds withhold all analysis without dropping records.
5. Apply. Exact latest-preceding-write replay computes read-from sources, dirty reads, dirty overwrites and writer-after-reader commit witnesses. Compare with the terminal-only baseline that merely counts committed transactions.
6. Download JSON (lossless original + reviews + evidence + analysis), CSV (all reviewed accesses), Plan CSV (every reviewed R/W/C event, not a repaired plan), or Markdown (worksheet + complete audit). Copy current results. Reimport JSON restores originals only; review again.

## Real AI, runtime and licenses
- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, approximately 23 MB. Normalized mean-pooled 384-dimensional embeddings and cosine ranking; no generative tool authority or instructions. It links paraphrases, not just identical strings. Unknown or negated notes still choose a nearest record; human review is essential.
- Transformers.js 4.3.2, Apache-2.0; ONNX Runtime Web, MIT. CPU single-thread WASM SIMD, approximately 27 MB binary plus JS/runtime assets. No WebGPU or API key needed.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps. See runtime-dependency-audit.json for verified hashes.
- Worker processes four texts per chunk. The underlying tokenizer has a 512-token context (the pipeline does not reliably enforce its passed 256 option); bounded notes/descriptions ≤200 characters reduce truncation risk. Model host revision is not pinned; future upstream changes may alter embeddings.

## Privacy, cache and devices
Default processing is local. Only the explicit load button downloads public runtime/model files from the same origin and Hugging Face/CDN. Input never leaves the worker, including malicious-looking imported strings. No credentials, remote provider, telemetry or database connection. Files and reviews are in memory; Cache API persists model/runtime assets, not user input. Cache eviction or unavailable storage requires downloads again. Cancellation terminates the worker; run identities guard late messages and file reads. A 180-second timeout, network/runtime errors and malformed vectors produce an actionable error, never a fake result.

Requires HTTPS/localhost, module workers, WebAssembly SIMD, Cache API for tested offline reuse, and several hundred MB RAM. Desktop Chrome with GPU disabled tested. Physical phones, Safari, Firefox and low-memory devices untested. Responsive layouts tested in desktop Chrome at 1440, 390 and 320 CSS pixels. Offline claim is limited to **fresh-worker inference in an already-open warmed page**. No service worker/cold offline navigation promise.

## Validation and bounds
Source JSON ≤60,000 characters; import `.json` ≤4 MB (audit envelope can be larger than original source). IDs ≤50; descriptions/access notes ≤200; title ≤200; review notes ≤2,000. Unique IDs, integer commit boundaries, complete commit sets, valid modes and finite normalized 384-element embeddings are validated. Inputs are data, not code. CSV quotes embedded commas/quotes/newlines and prefixes formula-like strings; numeric event positions remain numeric. JSON is the lossless round-trip format.

Actual real browser fixtures matched 12/12 simple resource notes across inventory and editorial examples; this is not general model accuracy. Known-answer recovery fixtures check early reader commits, dirty-but-recoverable reads, committed sources, dirty overwrites, own writes, latest writers and initial values. See VALIDATION.md and machine-readable reports for observed outcomes. Maximum 32-access/8-commit conservation, exported artifact parsing, undo/holds/edits, failure recovery, cancellation/stale runs, privacy requests, offline fresh workers and narrow layouts are exercised.

## Scope and limitations
All transactions commit. Latest preceding write is visible even if uncommitted. No aborts, undo/rollback, snapshots/MVCC, range reads, values, locks or real database behavior. Broad resource descriptions can conflate distinct items. Recoverability requires each source writer to commit before its reader. Cascadelessness prohibits reading another uncommitted writer. Strictness also prohibits overwriting another uncommitted writer. These are properties of the supplied worksheet under the stated semantics, not safety certification or conflict serializability. No changes are sent or executed.

## Build and deployment
`npm install`, `npm run predeploy`; Vite base `/daily-app2/20261122-18/`. Per-app deploy script is retained as required but **do not use it to publish the collection**. Root `npm run predeploy` assembles the entire collection; root `npm run deploy` publishes it. The existing 1 GB guard is unchanged. One additional byte-identical legacy geometry runtime is shared deploy-only (`20261029-13` → `20261028-24`), retaining source dist trees and compatibility URLs; regression-tested separately. No digest sent by this builder.
