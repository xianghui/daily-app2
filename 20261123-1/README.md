# TTL Harbor

A local-first release-coordinator worksheet for a recurring bottleneck: scattered DNS record notes use different service names, and “we lowered the TTL” checklists can miss earlier long-lived answers. This is a distinct TTL-history process, not the collection’s byte-LRU/FIFO cache simulator or IPv4 routing auditor.

## Workflow

1. Start with **Late TTL reduction** or **Waited before switching**, paste source JSON, or import a `.json` source/audit file. All fixtures are synthetic `.example.test` names. An audit import restores originals only, deliberately requiring fresh inference/review.
2. Edit the supplied service descriptions, record notes, publication offsets, TTL values and `retireAt` target. All times are integer seconds relative to history start, not dates or live observations.
3. Explicitly choose **Load AI & reconcile**. The first run downloads public files, then the actual neural network embeds notes/catalog descriptions in a local worker. Progress, cancel, retry and a 180-second timeout are provided. There is no fake fallback.
4. Inspect source-linked similarity rankings. Correct the service, check every timing revision and assumption, approve each record or hold it. A hold withholds the entire computed worksheet, preserving all originals. Identity edits reset approval. Notes are multiline; undo restores the previous review edit. Changes invalidate exports.
5. **Apply reviewed scenario** to compare latest-old-TTL-only checks with complete-history bounds and service checkpoints.
6. Export the current applied JSON audit, complete record CSV, old-revision Timeline CSV, or Markdown audit/checklist. Copy the current worksheet/audit. No DNS queries, provider updates or retirement actions occur.

## Exactly what is AI

Real normalized mean-pooled 384-dimensional embeddings from [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0. Cosine rankings reconcile paraphrased service notes to the user’s catalog. This reduces repeated manual alias lookup; it is not identity verification, generation, DNS reasoning or confidence. Unknown/negated text always has a nearest candidate: mandatory holds/human review matter. No accuracy guarantee.

Runtime: Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU is needed; CPU inference with GPU disabled was tested. Requires a current browser with WebAssembly SIMD, module workers, Cache API for offline reuse, HTTPS/localhost, several hundred MB RAM and initial internet. Physical phones, Safari/Firefox and weak devices were not tested.

First load is approximately **23 MB model/tokenizer/config + 27 MB WASM**, plus app/worker/module code. Files come only from this static site and Hugging Face/CDN (including redirect storage hosts). The model revision is not pinned; future model-host changes are a reproducibility limitation. No API key, remote AI provider or mandatory paid service.

### Shared immutable runtime dependencies

To preserve the existing collection and 1 GB deployment guard, this app references byte-audited same-origin assets already deployed:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

See `runtime-dependency-audit.json` for sizes/SHA-256. Preserve those apps and URLs. The worker uses groups of four texts, normalized mean pooling and q8 WASM. The tokenizer model context is 512 tokens (the pipeline’s supplied max_length is not an enforced 256-token contract); this app separately limits each text to 200 characters. Every result count/dimension/norm/finite value is validated. Worker source, factory and WASM are explicitly Cache-API cached; Transformers caches model downloads.

## Deterministic bounds and limitations

Each record supplies 2–8 strictly increasing revisions, beginning at second 0 with `old`, ending with `new`; each revision is the answer available until the next revision. `old` and `new` refer to that record’s old/new endpoint, not a globally shared answer. Return-to-old revisions before the final permanent switch are supported.

For every old revision: a cache can fetch arbitrarily close to its replacement time, then retain its own TTL. Its conservative expiry bound is **next revision time + old revision TTL**. History safe-after is the maximum of those bounds and permanent-switch time. Equality meets the modeled bound. TTL 0 still requires the authoritative old interval to end. The baseline uses permanent-switch time + the *last old* revision TTL. `extraWait` compares the two bounds; a plan is flagged if `retireAt` falls before its bound. Service checkpoints are maxima over records assigned to that reviewed service; omitted records are not covered. These are exact conditional arithmetic checks, not live propagation measurements, outage predictions or measured time savings.

Assumptions: simultaneous authoritative updates, caches honor TTL, **no cache fills before second 0**, permanent final new endpoint, positive answers only. No serve-stale, negative caching, CNAME chains, clock skew, propagation lag between authoritative servers, connection lifetime or actual resolver inventory. Missing prior history invalidates conclusions. This is not permission to turn off systems. Model identity review cannot establish history completeness.

## Privacy and resilience

Default content stays in page memory and a local worker. No uploads, telemetry, external AI integration, credentials or accounts. Network audit checks file GETs and verifies fixture content does not appear in request URLs/bodies. Content is not persisted by this app except user-initiated artifacts/clipboard. Model/runtime caches hold public files only. Imported text is data, never executable instructions or authority.

Cancellation terminates the worker; run IDs guard late messages, async file reads and worker-source fetches. Input changes clear old results. Unsupported devices, missing files, network/model/worker errors, malformed vectors/envelopes and timeout produce visible errors, not sample responses. Retry requires another explicit click.

**Tested offline scope:** a fresh worker performing actual inference in an already-open page after an online warm run, with browser networking disabled. Cold offline navigation/reload is not supported or claimed. Cache eviction, disabled storage or model-host revision changes may require internet again.

## Source and output contracts

Source JSON has only `title` (≤200 chars), `services` (2–8 objects with unique `id` ≤50 and `description` ≤200), `records` (1–32 objects with unique `id` ≤100, `serviceNote` ≤200, `retireAt`, `revisions`). Each revision has only `at` 0–604800, `ttl` 0–86400 and `target` old/new. Times/TTLs/retirement are integers; retirement 0–777600. Source ≤60,000 characters; `.json` file/envelope ≤4 MB; reviewer notes ≤2,000. At most 40 embedding texts in 10 chunks and 256 revisions. Unknown keys, empty/oversized inputs, duplicate IDs, malformed timelines and other file types are rejected.

- JSON: `ttl-harbor/1`, complete `originalInput`, complete reviews/evidence and ready/held analysis.
- CSV: one row per source record, revision JSON, original note, AI/reviewed identities, decision/note. Formula-like text is apostrophe-guarded; numeric values remain numeric.
- Timeline CSV: one row per old revision, fetch interval, TTL, expiry bound, switch/checkpoint and retirement gap. Disabled for holds.
- Markdown: human checklist plus full JSON audit. Clipboard: current worksheet plus full audit.

## Build / validation / publication

React + Vite; `npm install`, `npm run predeploy`. Base `/daily-app2/20261123-1/`. Required per-app deploy script exists, but **publish only from the collection root** using `npm run predeploy` and `npm run deploy`, never this app’s gh-pages command.

See [VALIDATION.md](VALIDATION.md) and observed JSON/log reports for exact checks. Tests use actual production-bundle inference; fault injection is confined to defensive failure checks. 500 independent quarter-second cache-fill simulations check the arithmetic. Actual browser downloads are independently parsed with Python csv/json. Known-answer matching is only six simple service notes, not general accuracy. Collection assembly additionally shares byte-identical legacy geometry for `20261029-15`, retaining original source build/compatibility paths and checking its real worker/image/STL workflow locally/publicly. No new geometry features are part of TTL Harbor.
