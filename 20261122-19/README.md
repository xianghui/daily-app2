# Restore Trail

A local-first **backup chain planning** worksheet for operators preparing a restore-drill manifest. Rough archive descriptions often obscure which system they belong to; the newest incremental file alone may not restore anything. Real local neural matching reconciles those descriptions, then exact dependency analysis finds minimum-transfer complete chains or missing-base witnesses. No storage access, uploads, shell commands or restoration.

## Workflow
1. Choose either synthetic example or import/paste JSON. Provide 2–8 systems with exact target versions and 2–32 archive records (`id`, `systemNote`, `from`, `to`, `size`). `from:null` means a full snapshot; other bases are exact integer versions. Sizes are positive integer MB.
2. Explicitly click **Load AI & reconcile**. Download progress and chunk progress appear; cancel terminates the worker. First use requires internet: about 23 MB model weights plus 27 MB WASM and smaller JS/config/tokenizer files.
3. Inspect each original note and cosine-ranked catalog evidence. Verify/edit system, base, destination and supplied size; approve each archive or hold uncertainty. Any identity/dependency edit resets approval. Reviewer notes support multiline text. Undo is available. Targets are edited in source JSON and require a fresh run.
4. Apply reviewed metadata. Any hold withholds the whole plan. Exact forward-version DAG relaxation minimizes total supplied MB from a full snapshot to each exact target. Source order breaks equal-cost ties. Gapped targets get no fictional chain. Every unused archive remains in the audit.
5. Download JSON, archive CSV, plan CSV or Markdown, or copy the worksheet. Review edits invalidate exports immediately. Audit JSON reimport restores originals only, requiring fresh inference and reviews. There are no external actions.

The computed **newest-file-only baseline** chooses greatest destination ≤target (source-order ties). It is complete only if that single file is itself a full snapshot at the exact target. This comparison exposes ignored dependencies, not measured productivity gains. Transfer totals cover complete targets only; they do not estimate restore duration or cost. No confidence percentages.

## Real AI / licenses / assets
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, approximately 23 MB. Real normalized mean-pooled 384-dimensional embeddings compare archive notes to system descriptions. Cosine similarity is not identity or confidence; unknown and negated notes can still select a nearest system. No generative model or instruction execution.
- Transformers.js 4.3.2, Apache-2.0; ONNX Runtime Web, MIT. Single-thread WASM CPU SIMD. No WebGPU or API key; GPU-disabled desktop Chrome is tested.
- Immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; binary: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those published dependency apps. Verified hashes are in `runtime-dependency-audit.json`. Sharing avoids a duplicate 27 MB runtime in the nearly full collection.
- Four texts per chunk. Tokenizer model context is 512 tokens; the feature-extraction pipeline ignores its passed 256 max-length option. Notes/descriptions ≤200 characters bound each text but unusual tokenization may still truncate. Host model revision is not pinned; future upstream changes can affect matches.

## Privacy, caching and requirements
Only explicit loading downloads public model/runtime files from this site and Hugging Face/CDN. No content is sent to a provider; network capture checks GET-only downloads without input in URLs/bodies. No credentials, remote provider integration, telemetry or real archive files. Inputs, reviews and applied outputs stay in page memory. Cache API stores worker/runtime/model assets, not source metadata. Eviction or inaccessible cache storage requires internet again. Cancellation and run IDs guard late worker messages, delayed worker fetches and file reads. Errors and a 180-second timeout produce no fabricated results.

Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM. Offline reuse requires Cache API. Tested desktop Chrome with GPU disabled; responsive layouts at 1440, 390 and 320 CSS pixels. Physical phones, Safari, Firefox and low-memory hardware are untested. Tested offline scope is **fresh-worker inference in an already-open warmed page** with browser networking disabled. Cold offline navigation/reload is not promised.

## Validation, formats and limits
Source JSON ≤60,000 characters; `.json` import ≤4 MB accommodates full audit envelopes. Unique IDs ≤50; title/system descriptions/archive notes ≤200; reviewer notes ≤2,000. Integer versions 0–1,000,000; deltas strictly forward; size 1–1,000,000 MB. Finite normalized 384-value vectors checked before recommendations. Full snapshots start from empty, not from snapshot zero. Every approved chain is checked for continuity, exact target and summed size.

JSON is the lossless round-trip format and preserves all originals/reviews/evidence and held records. CSV quotes commas, quotes and line breaks, and prefixes formula-like string cells with an apostrophe. Plan CSV has ordered steps for complete targets and explicit gap rows for unreachable targets. Markdown embeds the full JSON audit. Exports always use the current applied review.

Observed fixtures: 12/12 simple system labels across two different synthetic inventories, with expected 102/48 MB workshop routes and an editorial missing-link plus 75 MB image route. This is not a general accuracy estimate. Optimizer compared with independent exhaustive enumeration on 120 random DAGs. Tests cover maximum batches, holds, undo/edits, exports/reimport, privacy, fresh-worker offline inference, network failure/retry, unsupported runtime, malformed outputs, cancellation/races/timeouts and narrow layouts. See [VALIDATION.md](VALIDATION.md).

## Limitations
Metadata planning only, not actual restorability verification. Assumes independent systems, exact-base forward deltas, additive transfer sizes and no shared file deduplication. No reverse deltas, multi-base merges, partial restore, vendor compatibility, archive integrity/checksum inspection, encryption keys, timestamp parsing, retention, storage speed or real restore drills. AI can confuse similar systems; inspect exact identities and hold uncertainty. Missing-base witnesses indicate unreachable bases in this supplied inventory, not proof of what exists in storage.

## Build / publishing
`npm install`, `npm run predeploy`; React + Vite base `/daily-app2/20261122-19/`. Required per-app `predeploy`/`deploy` scripts and gh-pages dependency retained. Publish only via the root combined-site workflow, never the individual app's deploy command. Existing source trees and the 1 GB guard remain unchanged. No digest sent.
