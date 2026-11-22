# Cascade Folio

A bounded **database-stewardship retirement worksheet**, not a database client. A record manifest and rough reference notes become a mandatory reviewed graph, candidate retirement closure, restriction witnesses, nullable-reference changes and a hypothetical integrity-checked snapshot. No SQL is generated or executed. This is different from join/key/schema-mapping utilities: its objective is referential-action impact before retirement.

## Workflow

1. Start with Customer retirement (a downstream restriction blocks release) or Project archive (a nullable surviving discussion link). All examples and tests are synthetic.
2. Paste JSON, or import source/audit `.json` (≤4 MB). Define `title`, 2–16 `records` (`id`, `description`), 1–16 existing unique `seeds`, and 1–32 `references` (`id`, rough `child`, rough `parent`, explicit `action`). Actions are `cascade`, `restrict`, `set-null`. IDs ≤50 characters, descriptions/title ≤200, source ≤60,000 characters. Audit import restores originals only, never old approvals.
3. Explicitly choose **Load AI & reconcile**. Download/progress/cancel are visible. MiniLM embeds manifest descriptions and both endpoints, using actual neural inference and normalized cosine ranking. Each endpoint is compared with all supplied records; top three similarity scores are shown, not confidence. There are no hardcoded answers or deterministic fake fallbacks. Unknown descriptions still have a nearest record: hold them.
4. Verify every child, parent, action and nullable assumption. Correct links/policy as appropriate or hold to withhold the whole preview. Endpoint/action edits reset approval. Notes ≤2,000 characters support multiline text. Undo reverses review edits. Source edits cancel running work and clear suggestions/results.
5. Apply reviews. Deterministic fixed-point closure retires children with CASCADE when their parents retire. Surviving RESTRICT children block release. Surviving SET NULL links become null only in an unblocked hypothetical snapshot. Cycles terminate. Every candidate retirement has a source-reference witness chain. A blocked plan releases no snapshot, but its audit remains exportable.
6. Inspect baseline and impacts. Direct-only baseline leaves all unseeded records and links unchanged; it counts dangling references across that boundary. The closure counts actual candidate records, retained records, blockers and nullings. Exact-ID baseline counts literal endpoint matches, not accuracy. No time-saving percentages or performance claims.
7. Download current reviewed JSON (lossless complete source/reviews/analysis/snapshot), reference audit CSV, one-row-per-original-record Plan CSV, or complete Markdown worksheet. Copy Markdown also works. CSV quotes commas/newlines and prefixes formula-like strings with an apostrophe. Plan CSV labels blocked candidates explicitly, not executable deletions. JSON retains original strings. Input/review edits invalidate exports; reimport requires fresh AI and review. Closing the tab loses unsaved work.

## Real local AI and runtime

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0. Mean pooled, normalized 384-dimensional embeddings; finite vector count/dimension/norm validated before ranking.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web, MIT; WASM CPU single-thread execution. No WebGPU dependency. Shared worker processes four texts per chunk. At most 80 texts per manifest / 20 chunks. Runtime tokenizer `model_max_length=512` bounds context; the feature-extraction pipeline's nominal max_length=256 option is not asserted as the effective cap. Each source description is additionally bounded to 200 characters.
- First explicit run needs internet: ≈23 MB weights plus ≈27 MB CPU runtime, tokenizer/config and a ≈0.55 MB worker. Allow several hundred MB RAM. Requires HTTPS/localhost, module workers, WebAssembly SIMD, Blob module workers and Cache API for the documented offline scope. Desktop Chrome with GPU disabled tested. Physical phones, other browsers, cold offline reload and low-memory performance untested.
- Runtime code is same-origin. To avoid duplicate model runtimes in the nearly-full collection, this app reuses the immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating apps/assets. `runtime-dependency-audit.json` records verified bytes and hashes.
- Model/config/tokenizer downloads use Hugging Face and its CDN. Runtime/model data are cached with Cache API when supported; eviction needs internet again. Tested offline scope: **fresh worker inference in an already-open warmed page**, with all network disabled. Offline shell startup/reload is not promised. No service worker/offline navigation claim.
- Model progress and batch counts are visible; cancellation terminates the worker. 180-second timeout, download/runtime errors, malformed result/message checks and run identity guards prevent fake or stale results. Worker-source fetches and async file imports are also guarded. Error paths provide retry/device guidance. No automatic remote fallback.

## Privacy, assumptions and limitations

Content is passed only to a local worker. Network requests are public model/runtime file GETs, not user-content uploads. No API keys, agent provider integration, backend, analytics or external actions. No credential fields. Imported instructions are data for embeddings, never tool authority. The app does not save content to a server or browser persistent storage (only runtime/model assets). Browser cache may be evicted.

The manifest must be complete, and records individually distinguishable by their supplied descriptions. AI cannot infer true database identities from vague or similar descriptions, verify nullable schema, detect missing references or decide legal retention. Negation/unknown text can mislink. Review every link.

The model treats each child→parent reference as a separate field. RESTRICT is checked after the full cascade closure: **deferred final-state semantics**, not immediate constraint-check ordering for a particular SQL engine. No triggers, composite keys, transactions, execution ordering, hidden references or concurrent writes. SET NULL requires the user to verify nullability. An intact hypothetical snapshot only proves integrity within this bounded reviewed manifest, not real-world deletion safety. No SQL export or destructive execution.

## Build and deployment

React 18.3.1 + Vite. React 18 keeps this small shell inside the unchanged collection size budget; the UI still uses actual React, not a compatibility substitute. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261122-13/`. Per-app `predeploy` and `deploy` scripts plus gh-pages remain present as required. **Publish only from the repository root** using its combined-site workflow, never the per-app deploy command.

See [observed validation](VALIDATION.md) for actual fixture matches, artifacts, defensive checks and release status. Test scripts use the existing local Playwright installation. Fault injection is restricted to defensive tests; successful inference uses actual model downloads and real CPU inference.

Public app: https://xianghui.github.io/daily-app2/20261122-13/ — public real inference, artifacts, runtime bytes and collection verified. See `publication-status.json`.
