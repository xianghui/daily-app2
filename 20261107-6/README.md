# Split Sentinel

A local-AI training/evaluation leakage **review** utility for dataset curators. Unlike retrieval benchmarking or generic similarity search, it compares two dataset splits, surfaces nearest cross-split paraphrases and produces a reversible quarantine decision plus a usable kept dataset.

## Workflow

1. Paste/import a synthetic or your own `id,split,text` CSV. Include at least one `train` and one `eval` record; unique IDs, max 80 total rows, IDs ≤80 characters, text ≤300 characters, file ≤40,000 UTF-8 bytes. Quoted commas, quotes and multiline text are supported. Use short excerpts, not documents.
2. Set a cosine flag threshold (0.50–0.95; default 0.70). Explicitly click **Load AI & audit split**. No weights download before this action. Progress includes model files/download percentage and completed record batches. Cancel terminates the worker; retry uses cached assets.
3. Inspect each evaluation text and its closest original training text. Real AI embeds meaning; deterministic cosine ranking and thresholding propose quarantine. Reject by keeping the row, annotate, and explicitly mark every eval row reviewed. Undo restores the previous review (last 30 edits). Training references cannot be quarantined or edited.
4. **Apply reviewed split** becomes available only when every eval row is reviewed. The applied in-app result shows kept/quarantined totals and the review report; changing any review invalidates exports. Original inputs are never rewritten or deleted.
5. Download **kept dataset CSV** (all training records plus kept eval records), **audit JSON** or **audit CSV** (all originals, closest match IDs, actual cosine scores, exact-baseline flags, decisions and notes), or copy the Markdown review report. JSON is the lossless master. Formula-leading CSV cells receive an apostrophe to prevent spreadsheet execution; JSON retains their original values. Re-import ordinary kept CSV with both splits for another audit; an all-quarantined kept set intentionally has no eval rows and is not valid as a new two-split audit.

## Genuine AI and deterministic boundaries

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, derived from sentence-transformers/all-MiniLM-L6-v2. Transformers.js 4.3.2 and ONNX Runtime Web perform neural feature extraction in a browser worker with **WASM CPU**, mean pooling and normalization, 384-dimensional output. Four records per inference batch, 256-token context cap (unusual tokenization can truncate a 300-character input). No generative or instruction-following model and no remote API integration.
- Model host: huggingface.co and its download CDN. ~23 MB model/tokenizer plus ~27 MB same-origin WASM and ~1 MB JS. Initial internet required. Model revision observed in `model-source-validation.json`; runtime follows the public model's default revision, not a promise of immutable future weights.
- Static bundle: Vite worker + WASM factory locally bundled; byte-identical WASM is reused from the collection's `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve this older app/path when deploying. No server-only inference.
- Deterministic: validate normalized finite vectors and count; compare every eval with every train record (≤1,600 pairs); choose nearest cosine (source order breaks ties); flag if score ≥ threshold. Exact baseline trims, lowercases and collapses whitespace. Decision application, conservation counts and export are deterministic. No canned classification fallback.
- Metrics compare exact duplicate flags against extra semantic candidates. They measure review workload/signals, **not** verified contamination, confidence, accuracy improvement or time saved. No fabricated percentage improvements.

## Privacy, cache and device requirements

User content stays in page/worker memory. No content POSTs, external actions, keys, telemetry or document persistence. Asset downloads contain only public model/runtime paths, not imported text. Imported instructions have no authority. Downloaded files and clipboard text are user-initiated local artifacts.

Use a current browser with Workers and WebAssembly SIMD, around 300 MB free memory. Current desktop Chrome was tested; Safari, Firefox and physical phones remain unverified. WebGPU is neither required nor used; CPU is the default, not an untested fallback. Unsupported WASM/workers, download errors, malformed vectors, worker construction/errors and a 180-second timeout show actionable errors without fabricating results. Slow devices may need a smaller batch.

Cache API stores public model/runtime/worker assets, not documents. **Tested offline scope:** after successful online inference, with all network disabled, a fresh worker can run another audit in the already-open page. Offline navigation/reload/app-shell startup is not promised. Cache eviction, denied storage and private browsing can require internet. Run IDs invalidate asynchronous worker downloads, responses and file reads on cancel/input changes, preventing stale outputs from applying.

## Quality limits

This is a triage aid, not a leakage detector with calibrated precision. English short prose works best. Near-identical wording can hide opposing meanings, changed numbers or negation; different topics can share templates. Related subject matter alone does not establish leakage, and missing a flag does not prove independence. An observed negation fixture scored 0.897 despite opposing permission (see validation), so do not auto-delete on similarity. Only the nearest training record per eval is shown, not exhaustive provenance. The tool does not compare within a split, detect shared images/code, trace upstream corpus origins or certify benchmark validity. Review all rows; use domain-specific tests and human judgment.

## Build and publishing

React + Vite. `npm install`, `npm run predeploy`. Base `/daily-app2/20261107-6/`. Per-app `deploy` script exists as required, but **do not run it to publish the collection**. From the parent use `npm run predeploy` and `npm run deploy`; deploy/ preserves the gallery and all listed apps. Source commit/push follows the root README. No mandatory paid service or API key.

## Validation

See `VALIDATION.md`, real-browser JSON reports and independent export round-trip checks. Browser tests load the actual production bundle with genuine weights on materially different fixtures, verify known answers, 80-row/1,600-pair bounds, reviewed output, cancellation/retry/stale events, failure paths, cache/offline inference and 1440/390/320 px layouts. Defensive fault injection is explicitly separate from successful real-AI evidence. Public Pages verification passed: both real-inference fixtures, reviewed JSON downloads, fresh-worker offline inference, gallery and byte-identical worker/runtime assets (`public-browser-validation.json`, `deployment-validation.json`). Build alone was not treated as AI proof.

Only synthetic fixtures are committed. Third-party notices/licenses are included. Separate daily digest handles announcements.
