# Measure Moor — local AI measurement normalization

An operations-analyst desk for consolidating differently named sensor/lab measurements into a supplied canonical metric catalog. AI resolves descriptions beyond exact-name matching; deterministic dimension gates and affine conversion produce a reviewed, usable dataset. This is not a generic chat interface, calibration system or instrument certification.

## Workflow

1. Select either synthetic fixture, paste source JSON, or import JSON/a prior audit. Define 1–8 canonical metrics (`id`, `description`, `unit`) and 1–24 measurement records (`id`, `text`, numeric `value`, explicit `unit`), plus a batch `name`.
2. Explicitly load AI. Inspect the nearest definitions and cosine scores, original values and conversion preview. Units are not used as semantic shortcuts.
3. Correct the canonical metric if needed and approve meaning/conversion, or hold the row. Every row requires a human decision. Changing a metric resets its approval. Undo restores the previous review state. Original measurements are never overwritten. Incorrect units require correcting input and rerunning.
4. Apply the reviewed dataset. Any incompatible approved row blocks the entire application; hold it instead. Held normalized values remain null, never a fabricated zero. Every edit invalidates the export snapshot.
5. Download complete JSON/CSV/Markdown or copy Markdown. JSON preserves original input, full ranked AI evidence and current decisions. CSV preserves every row, original and normalized values, decisions and notes, with spreadsheet-formula guards on text (not signed numeric fields). Markdown includes all records, including holds. JSON audit reimport restores original input and requires fresh inference/review.

## Real AI, runtime and data flow

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized ONNX `q8`, mean pooling, normalized 384-dimensional embeddings. This is semantic retrieval, not generative reasoning or entailment.
- Runtime: Transformers.js 4.3.2, ONNX Runtime Web, WASM CPU, one thread. App/worker and module factory are bundled locally. The byte-identical 26,861,777-byte WASM is shared from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that historical build. `vite.config.js` rewrites the emitted URL.
- First load requires internet: approximately 23 MB quantized model plus tokenizer/config from Hugging Face and its redirected CDN, plus 27 MB local WASM and app/runtime overhead (~50 MB total, approximate). Model host availability is required; no provider API keys or paid service.
- Only explicit loading triggers model downloads. Record content is processed inside a local module worker and is not uploaded. No remote inference, analytics, external side effects, credentials or real personal fixtures. Imported text is data, not executable model/tool instructions.
- Cache API stores downloaded model/runtime/worker assets, never source content. A fresh worker can infer offline in an already-open successfully cached page; this exact scope was tested. Offline page startup/reload/navigation is not implemented or promised. Evicted/blocked caches require internet again. Clear site data to remove downloaded assets; reload to discard unsaved input/review state.
- Current browser with module workers, Cache API for offline scope and WebAssembly SIMD. No WebGPU required. Desktop Chrome tested; mobile-width emulation tested, physical phones and Safari/Firefox unverified. Restricted/low-memory browsers may fail and show a retryable error.

## Deterministic boundaries and limits

Exact, case-sensitive symbols only: mm/cm/m/in (length), g/kg/lb (mass), C/F/K (temperature), ms/s/min (time). Conversion is `base = value * scale + offset`, then inverse target transform. Results use 12 significant digits to suppress floating-point noise, not instrument precision. Dimensions must match. No inferred units, density conversion, currencies, compound units, uncertainty propagation, physical-plausibility/absolute-zero checks, calibration corrections or rounding to instrument resolution.

Workflow JSON ≤50 KB, import file ≤1 MB before payload validation; name ≤80 chars, IDs ≤40 and unique in each table, metric descriptions ≤300, record text ≤500. Values finite numeric JSON within ±1 billion. Four-text inference batches, maximum 32 texts, 256 tokens per text (long token sequences may truncate), 180-second timeout. English intended. Unsupported input formats/units are explicitly rejected. Schema validation requires correct finite approximately unit-norm 384-D vector counts. Run IDs and worker termination reject stale/cancelled results, including asynchronous imports and worker fetches.

Nearest semantic meaning can be incorrect even with a high cosine. Negation challenge failed (an explicitly “not air temperature” record matched air temperature). Review is mandatory; holds preserve ambiguity. Unit compatibility does not establish that two measurements represent the same property. Tiny-fixture matches are not a general accuracy claim. The displayed exact-name baseline and AI proposal counts measure candidate coverage, not quality, time saved or productivity. All fixture values and descriptions are synthetic.

## Development and publishing

`npm install`, `npm run dev`, `npm run predeploy`. Required app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; do **not** invoke individual deployment because that replaces the collection. Production base: `/daily-app2/20261109-10/`. Root `npm run predeploy` assembles all gallery apps, then root `npm run deploy` publishes the combined site. See root README for Pages commit/build verification.

## Validation

See [VALIDATION.md](VALIDATION.md), executable `browser-test.cjs`, `network-test.cjs`, `cancel-download-test.cjs`, `core-test.mjs`, `artifact-test.py`, and recorded JSON outcomes. Successful AI cases always use real model inference; mocked workers are used only for defensive malformed-output/unsupported-runtime/timeout/stale-callback tests. Browser tests need local workspace Playwright and installed Chrome, and `python3 serve-test.py` serves the production bundle plus immutable shared WASM. `public-test.cjs` verifies deployed bytes. No claims are made for physical phones, other browsers, offline navigation or scientific measurement validity.
