# Precision Porch

For workshop and supplier sample reviewers: reconcile rough dimensional reading descriptions to feature specifications, then inspect rounding-aware per-specimen evidence. This is a **quantization-only recheck worksheet, not metrological conformity or sample-release certification**.

## Workflow

1. Choose either synthetic fixture, edit/paste batch JSON, or import original/audit JSON.
2. Set explicit feature lower/upper bounds, unit and rounding assumptions. Every source reading has its own specimen ID, value, unit and declared nearest-rounding increment.
3. Explicitly **Load AI & reconcile**. Review actual neural feature links and source definitions. Correct features, specimen identities, numeric values or units; approve or hold every reading. No automatic acceptance.
4. Apply reviewed checks. For each approved specimen-feature pair intersect closed rounding bins `[value − resolution/2, value + resolution/2]`. Empty intersection means conflicting readings/assumptions; otherwise report inside, outside or borderline against supplied bounds. Units must match exactly; convert manually and document, or hold.
5. Inspect the last-approved-point baseline and which baseline passes need rechecking. This is an observed deterministic comparison, not measured accuracy or saved time.
6. Download JSON (complete original input + reviews + results), CSV (all originals and reviews), Intervals CSV (approved groups + source IDs), or Markdown (worksheet and all records). Copy the same current worksheet. CSV escapes formula-like text, quotes, commas and newlines; JSON preserves exact text. Audit reimport restores **original input only**, requiring fresh inference/review. No hidden saved approval.

Edits invalidate the applied snapshot and exports; undo restores the previous review state (up to 100 edits). Original records are immutable. Holds are excluded from intersections but retained in complete audits. No physical sample release, equipment changes, uploads or external actions.

## Real AI and runtime

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0, [model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized ONNX `q8`.
- Transformers.js **4.3.2** (Apache-2.0) with ONNX Runtime Web WASM CPU (MIT). Normalized mean-pooled 384-dimensional neural embeddings rank reading descriptions against feature descriptions by cosine similarity. minSimilarity enables abstention, not confidence. AI materially resolves paraphrases; it does **not** infer numeric fields, units or specimen identity, determine truth, or certify measurement quality.
- Default no-key CPU path; no optional provider integration or server.
- Four texts per inference batch; actual tokenizer ceiling 512 tokens. The feature-extraction runtime ignores per-call max_length; descriptions are bounded separately to 300 characters. Validate exact count, finite 384 dimensions and normalized vector magnitude before ranking.
- Approximately **23 MB model + 27 MB WASM**, plus ~0.85 MB app/worker/factory; initial internet required. Model host Hugging Face/CDN. Shared immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` must be preserved. Hashes/protocol in runtime-dependency-audit.json. Source worker pipeline and tokenizer inspected. Model host main is unpinned; observed revision in audit, future changes can alter links.
- Secure context, module workers, WebAssembly SIMD, Cache API and several hundred MB free RAM. Desktop Chrome CPU tested without GPU. No WebGPU required. Other browsers and physical phones unverified; narrow layouts tested with emulation.
- Progress shows files and inference batches. Cancel terminates worker. 180-second timeout, explicit errors and retry, no fake fallback. File-read and worker-fetch run identities prevent late/cancelled results replacing new input.

## Privacy, caching and offline

Only explicit loading downloads public model/runtime files; **downloading weights does not upload your content**. All user content stays in browser memory. No keys, analytics, remote inference, storage of inputs or automatic external actions. Imported instruction-like text is inert data. Network audit records methods and sanitized hosts/paths only, not signed download query values.

Worker source, factory and WASM use Cache API; model assets use Transformers.js browser cache. Storage restrictions/eviction can require downloading again. Tested offline claim: after a successful online run, a **fresh worker in the already-open warmed page** can perform real inference with browser networking disabled. Offline navigation/reload/app-shell startup is **not** promised. Export before closing.

## Format and limits

JSON object: `context`, `assumption` (nonempty ≤300 characters), `minSimilarity` (0–1), `first` (2–8 unique feature `id`, `text`, `unit`, `lower`, `upper`), `records` (1–96 unique reading `id`, `specimen`, `text`, `value`, `resolution`, `unit`). ASCII IDs use letters, digits, underscore or hyphen, 1–40 characters. Text ≤300 characters; source ≤60,000; imported `.json` file ≤2 MB including audit metadata. Values/bounds finite within ±1,000,000, strictly lower < upper; resolution 0.000001–1000; units mm/cm/in. Numeric field edits require renewed review. Unsupported/empty/invalid/oversized sources, malformed model output and mismatching units are blocked.

## Interpretation limits

Assumes nearest-increment rounding of the **same unchanged quantity**, with no other error. Closed intervals conservatively retain tie endpoints; floating-point slack is `1e-10 × max(1, endpoint magnitudes, spec bounds)`. Resolution is a rounding increment, not accuracy, repeatability or standard uncertainty. Independent repeats are not assumed, and intersection cannot remove systematic bias. No error averaging, uncertainty propagation, confidence probability, calibration or conformity guarantee. Borderline or conflicting groups request source/condition review or finer measurement. AI similarity can mislink irrelevant/negated text; mandatory human review and holds remain essential.

## Build / validation

React + Vite, base `/daily-app2/20261120-17/`. `npm install`, `npm run predeploy` builds the app. Required individual `deploy: gh-pages -d dist` exists, but publication **must use repository-root combined workflow** to preserve the collection.

See [VALIDATION.md](VALIDATION.md) for observed real inference, quality limitations, defensive tests, artifact round trips, production assets, layouts, offline scope and publication status. Tests use synthetic fixtures only. `node core-test.mjs`, local production server `python3 serve-test.py`, `node browser-test.cjs`, defensive/race scripts and `python3 artifact-test.py` reproduce checks on this machine (Playwright path is environment-specific).
