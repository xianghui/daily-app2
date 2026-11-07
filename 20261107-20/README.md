# Rewrite Guard

A paired-copy release review desk for support-content editors. Import existing English original/revision pairs, check for semantic drift, review release decisions, and download a reversible copy register. This does not generate copy or publish anything.

## Workflow

1. Paste/import UTF-8 CSV with exactly `id,original,revision` headers, or load either synthetic example. Quote commas, quotes and newlines with standard CSV quoting.
2. Choose the cosine flag threshold (0.10–0.95, default 0.65). Read the download/privacy panel before pressing **Load AI & check edits**.
3. Review both source texts, actual cosine, numeric warning and proposed hold/revision decision. Assign an owner and note. Choose hold, original restored or revision approved. Every row needs explicit review.
4. Changed numeric literals block revision release. Restore the original or hold it, fix the source CSV and rerun. Low similarity can be overridden with a decision note. Undo restores earlier review states; reject-all restores original text choices. No original source is mutated.
5. Apply the reviewed register, then download JSON, CSV or Markdown; or copy JSON. Every edit invalidates the applied export snapshot. Held rows have null JSON output / blank CSV output and a Markdown hold notice. All records remain in every format; JSON/CSV include both source texts. CSV protects formula-leading text with an apostrophe, including multiline fields; JSON preserves exact values.

## Actual AI, not a heuristic substitute

Default inference uses `Xenova/all-MiniLM-L6-v2`, quantized q8 ONNX, Apache-2.0, via Transformers.js 4.3.2 and ONNX Runtime Web WASM CPU. Source: https://huggingface.co/Xenova/all-MiniLM-L6-v2 (derived from sentence-transformers/all-MiniLM-L6-v2). The model produces mean-pooled normalized 384-dimensional embeddings. Each original and revision is embedded separately; cosine compares the supplied pair. No LLM-generated assertions or canned responses. Failed inference never yields substitute results.

Deterministic steps: schema/bounds checks, cosine dot product, threshold warning, numeric-literal **multiset** comparison, review/release gates, count metrics, serialization. Shared numbers in a different order do not warn; changed formatting can warn. Signs, number words, currencies, units, negation, named entities and factual correctness are NOT validated by the number check. The semantic model is not an entailment detector and can consider contradictions similar. Review remains mandatory for all rows, including high similarity. Source text is always treated as data; no tools, credentials or remote actions exist.

The exact-change baseline flags any pair with different characters. Assisted warning count combines low cosine and numeric changes, with overlapping reason counts shown separately. These are computed counts, not saved time, measured quality, confidence percentages or permission to skip review. No performance improvement is claimed.

## Downloads, privacy and runtime

First use needs internet and approximately 23 MB model/tokenizer files plus a 26,861,777-byte (~27 MB) WASM binary, module factory and app/worker JavaScript. Model host: Hugging Face and its public asset redirect host. No model requests occur before explicit loading. User text stays in memory in the browser; only public asset GET/HEAD requests leave the device. No API keys, backend, analytics, remote-provider integration or real private fixtures.

Worker and WASM factory are bundled with the app; the byte-identical WASM binary reuses the existing immutable collection path `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve that older app when deploying. Vite rewrites emitted references; no runtime CDN is required. See third-party notices/licenses.

Requires Web Workers, WebAssembly and enough memory. Cache API retains public model/runtime/worker assets; user copy is not cached by the app. Current desktop Chrome/Edge recommended. No WebGPU requirement: CPU WASM is the default, not an untested fallback. After a successful online run, offline inference with a **fresh worker in the already open page** is tested. Offline startup/navigation/reload is **not promised**. Private-mode restrictions, cache eviction and disabled storage can require redownloading; clear site data to remove caches. Errors tell users to retry after checking network, storage and runtime support. Cancel terminates workers; partial asset caches may remain.

## Limits and accessibility

1–24 pairs; ≤24 KB input; unique nonempty ID ≤50 characters; each original/revision 1–350 characters. At most 48 texts / 12 inference batches of four; model context capped at 256 tokens per text. No PDF, DOCX or arbitrary file parsing. Runtime timeout 180 seconds. Run IDs, file-read identity and worker termination prevent cancelled/changed-source results from applying. Worker constructor/errors, malformed embeddings and download/runtime errors fail visibly. Review history retains the latest 80 edits. Desktop and 390/320 CSS-pixel layouts, labels, keyboard focus and touch-size controls are tested; physical phone inference and other browser engines are not certified.

## Validation

See `VALIDATION.md`, `browser-validation.json`, export round-trip checks, asset hashes and publication status for actual results. Eight curated pairs cover two unrelated domains. Numeric changes intentionally have high semantic similarity: these demonstrate a model limitation and why the independent hard gate matters. One acceptable negated paraphrase is a known false positive at the default threshold. This small fixture is not a representative accuracy benchmark. Not suitable as sole legal, medical, factual or safety review.

## Build and publish

React + Vite. `npm install`, `npm run predeploy`; base `/daily-app2/20261107-20/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` remain present, but **publish only through the collection root**: root `npm run predeploy` and root `npm run deploy`. Individual deployment would overwrite the gallery. Local production browser suite: `python3 serve-test.py`, then `node browser-test.cjs` (uses this machine's installed Playwright/Chrome). Core guards: `node core-test.mjs`; downloaded CSV/JSON: `python3 export-roundtrip.py`. Defensive injected workers only test failure handling; successful workflow tests use the actual model.
