# Rate Terrace — local-AI volume-rate review

For small studio/workshop quote owners reconciling inconsistent service names and uphill volume unit rates. Paste/import JSON → explicitly load real local AI → review service assignments and numbers → approve every record → apply a monotone worksheet → export current JSON, audit CSV, unrounded Rates CSV or Markdown/copy. Synthetic Print quotes and Studio quotes are included. No catalog is changed.

## Distinct workflow

MiniLM sentence embeddings semantically reconcile informal quote descriptions to 2–8 supplied service definitions. This is neural inference, not string matching or hard-coded fixture answers. Human confirmation matters: similarity cannot prove comparable specification, currency or commercial suitability. Nearest-candidate retrieval always returns a candidate, including unrelated input. No generated text is interpreted as instructions; no credentials or external actions exist.

Deterministic weighted pool-adjacent-violators algorithm minimizes Σ weight × (fitted unit rate − reviewed unit rate)² subject to non-increasing unit rates as batch quantity rises, separately for each service. Running-minimum baseline uses the same constraint. Compare weighted squared adjustment, not profit, accuracy or observed savings. All supplied tiers remain represented. No interpolation/extrapolation, margin bounds, tax, automatic price rounding, or total-order-cost monotonicity: unit discounts can cause total-price cliffs. Review those separately. Prices are unrounded proposals; the UI displays four decimals while exports preserve full precision.

## Model/runtime and device requirements

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 encoder, normalized mean pooling, 384-dimensional embeddings.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread. No WebGPU required.
- Approximately 23 MB initial model files plus 27 MB WASM and the approximately 0.9 MB bundled worker/runtime glue. First inference needs internet and several hundred MB RAM. Downloads use Hugging Face/CDN; runtime assets use same-origin GitHub Pages.
- Immutable shared worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; binary: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. These older builds must remain deployed. No agent credentials or provider API integration.
- Requires WebAssembly SIMD, module workers and Cache API. Desktop Chrome CPU validated. Physical phones, Safari, Firefox and low-memory devices are untested. Failure yields actionable retry/device advice, never fake output.
- Four-text batches. Shared worker passes `max_length:256` but the installed feature-extraction pipeline/tokenizer ceiling is 512; the app additionally bounds every description to 300 characters. Do not interpret that pipeline option as a strict 256-token cap.

## Privacy, loading and offline scope

Explicit Load AI initiates file downloads, not user-content uploads. Content, edits and review history stay in memory; model/runtime files are cached via Cache API and Transformers browser model cache. Network request audit checks GET-only file traffic and absence of fixture descriptions from URLs. No remote inference option exists. No persistence of user documents, keys or accounts. Clear the page to discard review state (download an audit first).

Worker source and runtime factory/WASM use explicit Cache API storage. After a successful online run, fresh-worker inference works fully offline **in an already-open warmed page**. Offline startup/reload is not promised. Cache eviction/private mode can force downloads. Download progress, cancellation and a 180-second timeout are visible; cancellation terminates the worker. Run identity guards source changes, slow imports and late worker replies. Schema-invalid embeddings fail closed.

## Input and review contract

JSON object: `context` (1–300 chars), `items` (2–8 `{id,label,description}` services), `observations` (1–24 `{id,description,quantity,rate,weight}` records). IDs must be unique letter-led ASCII word/hyphen strings up to 30 chars. Description/label length ≤300. Source ≤50,000 chars; `.json` import ≤2 MB, allowing larger audit metadata envelopes. Quantity integer 1–1,000,000; rate 0–100,000; importance weight 0.01–10,000. Use one currency and comparable units/specification within each service.

Review every service match, quantity, rate and weight. Numeric/service edits reset approval. Any review edit invalidates applied exports; undo restores the prior review but requires reapplying. Holds block the whole fit, not silently excluded rows. Duplicate quantities within a service and fewer than two quotes per service block fitting. Original records are immutable in the audit. To intentionally change source membership, edit source and rerun AI.

## Artifacts

JSON contains originals, all reviews/evidence/notes, issues and applied tiers/metrics. Importing an exported audit restores originals only; AI and approvals must be renewed. Audit CSV preserves every record; Rates CSV provides one row per fitted tier with full precision and baseline. CSV quotes commas/newlines and prefixes formula-like text with an apostrophe; genuine numeric fields remain numeric. Markdown/copy reflects the latest applied review. Holds remain exportable in audit/Markdown but disable fitted Rates CSV. Editing disables all stale export snapshots.

## Development and deployment

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261116-11/`. Required per-app `deploy: gh-pages -d dist` exists but **do not run it** for the collection. Publish with root `npm run predeploy` and root `npm run deploy`; preserve all shared paths. See VALIDATION.md and machine-readable reports for observed checks and known limits.
