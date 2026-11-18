# Pool Bench

A local-AI worksheet for nonclinical teaching/QA workshops that repeatedly reconcile informal sample batches to a defined assay register and compare two-stage pooling workload. Not clinical, safety, assay authorization or production-release software.

## Workflow

1. Choose a synthetic example or paste/import JSON containing `context`, `items` (protocol `id`, `label`, `description`, experimentally supplied `maxPool`) and `observations` (batch `id`, `description`, `samples`, `positiveRate`). Set assumptions in the source JSON before loading.
2. Explicitly load AI. Inspect neural protocol suggestions, cosine evidence and exact source descriptions. Correct the protocol, sample count or assumed positivity, add notes and approve or hold every batch. Corrections reset approval. Undo review edits; originals never change.
3. Apply reviewed plan. Holds block a full plan but remain in audit exports. Inspect individual-assay baseline, modeled expected assays, worst-case assays and sample-conserving full pools plus remainder.
4. Download current reviewed JSON, CSV or Markdown; copy the worksheet. Any edit invalidates applied exports. Reimport audit JSON to restore originals only, requiring new inference and review.

## Real AI / dependencies / privacy

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 neural sentence embeddings, normalized mean pooling, 384 dimensions, real WASM CPU inference through Transformers.js 4.3.2 / ONNX Runtime Web. AI ranks protocol meanings, not feasibility, detection sensitivity or positivity. Cosine similarity is not confidence. No fabricated fallback or remote provider integration. All numerical planning, schemas, comparisons and exports are deterministic.

Same-origin immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating app builds in collection deployments. This reuses the existing tested runtime instead of duplicating 27 MB. Model weights/tokenizer/config download from Hugging Face and its CDN, roughly 23 MB; CPU runtime roughly 27 MB. First load needs internet, module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. No WebGPU or API key required. CPU Chrome desktop tested; physical phones/other browsers unverified.

Text remains in browser memory and worker messages. No user content upload, URL serialization, document persistence, telemetry or credential use. Downloading weights is not uploading input. Imported instruction-like text cannot change authority. Worker, WASM factory/binary and model use Cache API/runtime caching. Tested scope: fresh-worker inference with network disabled in an already-open warmed production page. Offline reload/navigation is **not** promised; eviction/private browsing can require redownload. Cancellation terminates the worker, input/import changes invalidate in-flight work, late results are ignored. Timeout: 180 seconds; per-file loading and four-text batch progress. Retry failures without fake results.

## Method / bounds

2–8 protocols, 1–24 batches, 1–10,000 samples per batch, positivity probability 0–1, pool cap 1–32, 300 characters per description, 50,000 source characters, import under 2 MB. Up to 32 embedding texts in batches of four. Actual tokenizer ceiling is 512 tokens: pipeline truncation uses tokenizer `model_max_length`; a worker `max_length:256` option is ignored by this runtime and is not a 256-token promise. Finite normalized vector shape validated before ranking.

Two-stage Dorfman plan: for nonsingleton size s, expected assays = `1 + s*(1-(1-p)^s)`; singleton costs one. For each uniform pool size k up to min(cap,n), evaluate full pools plus the actual final remainder. A positive nonsingleton pool causes individual retesting of every member. Enumerate k, minimize expected assays and prefer smaller k on numerical ties. Not an optimization over arbitrary mixed pool sizes. Baseline is n individual assays, always a feasible candidate; worst-case counts include every nonsingleton retest. Expected counts can be fractional: these are repeated-experiment assumptions, not measured savings, accuracy or executable integer counts. JSON retains full precision; display rounds to two decimals. Every batch and sample survives.

Assumes independent identically distributed positivity within each batch, disjoint batches, perfect pooled/individual detection and a validated dilution cap. Does not model correlation, false positives/negatives, sensitivity loss, instrument limits, time, costs or volume. AI cannot validate assay equivalence or suitability; it returns a nearest candidate even for irrelevant text. Human hold is essential. Do not use for diagnoses, safety decisions or release. No external actions.

## Export / development / validation

CSV quotes commas/newlines/double quotes and prefixes spreadsheet formula-like text with an apostrophe. JSON is lossless for originals and reviews; source/audit import restores originals, not approvals. Markdown contains the plan, sources, review notes and assumptions checklist.

`npm install`, `npm run dev`, `npm run predeploy`. Per-app deploy script is retained as required, but **publish only through the root combined-site workflow**, not this app's deploy. Vite base `/daily-app2/20261119-1/`. React 18 keeps the existing collection below its 1 GB guard.

See [VALIDATION.md](VALIDATION.md), reproducible browser/core/artifact tests and JSON reports. Only synthetic data is committed. No mandatory paid service, external inference or shared API key.
