# Supplier Prism

Purchasing teams can reconcile differently worded spend entries into supplied, verified business groups and inspect concentration hidden by split labels. This is a standalone React + Vite static utility, not a supplier database or automatic corporate-ownership lookup.

## Workflow and formats

1. Paste/import JSON or load either synthetic fixture. Set `name`, `capPercent` (explicit chosen per-supplier spend-share cap, 1–100), `catalog` (2–8 groups with unique `id`, `title`, `description`) and `records` (1–24 lines with unique `id`, `text`, `cents`). Use a single currency and period. Positive integer cents only; no refunds. Groups must be disjoint and ownership verified externally.
2. Explicitly load AI. Inspect ranked source profiles and cosine similarities, then correct supplier links, verify amounts and approve/hold every line. Similarity is not confidence. Add follow-up notes; undo restores the last review state.
3. Apply the worksheet. Exact-cent aggregation shows group spend, largest exposure and chosen-cap breaches. HHI is the sum of squared shares; effective equally-sized supplier count is its reciprocal. Compare with a baseline that groups identical source text on exactly the same approved spend. This baseline is fragmentation, not ground truth or measured accuracy. All held spend is excluded and visibly provisional.
4. Export the current reviewed JSON audit, complete CSV, Markdown or clipboard worksheet. Edits invalidate applied exports. Original input remains untouched; audit reimport restores originals and requires fresh inference/review. JSON is the lossless round-trip format. CSV escapes formula-like text and preserves numeric cents.

## Real AI, runtime and privacy

**Xenova/all-MiniLM-L6-v2**, https://huggingface.co/Xenova/all-MiniLM-L6-v2, Apache-2.0. Transformers.js **4.3.2** (Apache-2.0; https://github.com/huggingface/transformers.js), ONNX Runtime Web (MIT; https://github.com/microsoft/onnxruntime), q8 ONNX, WASM CPU. Mean-pooled normalized 384-dimensional embeddings rank each source description against supplied profiles using cosine similarity. No canned responses, heuristics or remote inference replace failures. AI materially reconciles paraphrases; all subsequent arithmetic and review are deterministic. It cannot establish legal identities or ownership. Related services, negation and unrelated inputs can force incorrect matches; hold uncertainty.

First load requires internet: roughly 23 MB model/tokenizer from huggingface.co / hf.co and their CDN, plus roughly 27 MB local runtime. App code, worker and WASM module factory are local. The binary reuses immutable collection asset `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`; preserve that older asset when publishing. Only downloads occur; content stays on-device. No API keys, analytics, external provider or external actions.

Requires module workers and WebAssembly SIMD, several hundred MB RAM recommended; no WebGPU needed. Desktop Chrome tested. Other browsers and physical phones not tested. Weights use the browser model cache; worker/factory/binary use Cache API. After a successful online run, fresh-worker inference works offline **within an already-open warmed page**. Offline navigation/reload is not promised. Private mode/eviction may require redownload. Download progress, cancellation, actionable errors and retry are shown. Cancellation terminates workers; run IDs also guard late worker/download/import responses.

## Limits and interpretation

Descriptions 1–400 characters, titles ≤80, original input ≤18,000 characters, audit import ≤1 MB. Amounts 1–1,000,000,000 cents per line; batch size four texts with 256-token context; 180-second timeout. Output requires finite normalized 384-dimensional vectors with the expected count. Imported instructions remain inert text, never tool authority. No user data persisted except browser-managed model/runtime caches.

HHI is descriptive supplied-spend concentration, **not outage likelihood, market power, a competition-law threshold or continuity certification**. A large group may still be operationally diversified. Missing suppliers/spend or inaccurate ownership can invalidate conclusions. The user-defined cap is not a recognized industry standard. Suggestions to review alternatives are follow-ups, not purchase orders.

## Build / collection publication

`npm install`, `npm run predeploy`. Vite base `/daily-app2/20261112-8/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained, but publish ONLY from repository root using its combined `deploy/` workflow; individual deployment replaces the gallery.

See [VALIDATION.md](VALIDATION.md) for observed inference, arithmetic, artifact and defensive checks and explicitly untested behavior. Fixtures contain only synthetic data.
