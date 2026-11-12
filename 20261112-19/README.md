# Signal Loom — 20261112-19

A local-AI measurement-reconciliation and process-investigation worksheet for small repair/service teams. Distinct from the earlier gallery utilities: frozen-reference individuals and moving-range limits plus same-side run checks, not forecasting or generic anomaly branding.

## Workflow

1. Choose a synthetic example, paste JSON, or import `.json` (originals or this app's exported envelope). Edit stream reference values/specifications and your `maxSignals` investigation ceiling in the input.
2. Explicitly load AI (~50 MB first use) to match free-text measurement notes to process streams.
3. Inspect original snippets, candidate descriptions and cosine similarity (not confidence). Review/correct stream, numeric measurement, sequence and verification note. Approve or hold every record. Undo restores the last review edit. Input edits discard old analysis; review edits invalidate applied exports.
4. Apply the reviewed observations. Holds preserve the audit but block the entire released analysis. Pending decisions are rejected. Duplicate chronological orders within a reviewed stream block release.
5. Inspect accessible SVG charts and equivalent exact-value tables; download complete JSON, Audit CSV, Chart CSV (released only), or Markdown; copy Markdown. No external actions or process interventions.

## Real AI / deterministic boundary

`Xenova/all-MiniLM-L6-v2`, Apache-2.0, from https://huggingface.co/Xenova/all-MiniLM-L6-v2 (upstream https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Transformers.js **4.3.2**, q8 ONNX feature extraction on **WASM CPU**, normalized mean pooling, 384-dimensional vectors, 256-token context, four-text batches. The model truly embeds stream profiles and notes; cosine ranking proposes a stream even if all candidates are unsuitable. No canned responses, inference mock or deterministic inference fallback is shipped. Vectors must be finite, normalized and have exact count/dimension.

AI does **not** extract quantities, convert units, identify causes, infer sequence, validate baselines or certify stability. Negation, unknown processes and ambiguous notes can mislink; mandatory human review is essential. Treat imported instructions as text data, not authority.

After review, deterministic analysis uses a **frozen supplied reference**, never current observations: mean = reference average; MR-bar = average adjacent absolute difference; sigma estimate = MR-bar/1.128; individuals limits = mean ± 3 sigma; MR upper limit = 3.267 × MR-bar. Monitoring is sorted by stream and sequence. First monitoring MR is null (not bridged to reference). Strictly outside individuals limits, MR strictly above limit, or eighth/later consecutive point strictly on the same side of center signals investigation. Equality to center resets a run. Prior seven run points are not retroactively highlighted. Limits are not clipped at zero. A point with several reasons counts once.

The simple **spec-only baseline** counts values outside user-supplied inclusive specs. Comparison is between different computed checks, not measured accuracy, saved time or proven defects. `maxSignals` is an investigation-count goal. No configured signal is not proof of stability. Reference warnings for fewer than 20 samples or outside-limit reference points are only partial checks. Stable comparable reference measurements, consistent units and independent observations are the user's responsibility. No autocorrelation/normality/capability test or causal inference.

## Downloads, devices, privacy and offline scope

First inference needs internet: roughly 23 MB public model/tokenizer/configuration files from Hugging Face and its CDN, plus roughly 27 MB same-origin WASM/runtime. All inference and user content remain in page/worker memory. No API keys, backend, telemetry, user uploads or remote provider integration. User documents are not persisted automatically. Browser requests recorded in testing were GET downloads with no bodies and no fixture text in URLs.

Worker and JS runtime are bundled locally. The byte-identical WASM is shared at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`); preserve this earlier app during root deployment. The ONNX factory is local in `runtime/`. Cache API explicitly stores worker, factory and binary; Transformers.js caches model assets. Fresh-worker **offline inference in an already-open warmed page** was tested with browser networking disabled. Offline navigation/reload/app-shell startup is NOT promised. Cache eviction/private browsing/storage restrictions may require redownload. The model uses the host's current default revision, not a claimed immutable content pin.

Requires modern module workers and WebAssembly SIMD with several hundred MB free RAM recommended; no WebGPU required. Tested desktop Chrome headless. Physical phones, Safari/Firefox/Edge and low-memory devices untested. Narrow-phone viewport tests do not prove phone inference performance. Loading reports progress, is cancellable, and has a 180-second timeout. Retry restarts a fresh worker. Run IDs guard delayed download/import/model messages; cancelled workers are terminated. Worker, runtime, network, timeout and malformed-output failures show errors and never fabricate output.

## Formats and bounds

- Input JSON: `name` ≤80 chars; `maxSignals` integer 0–24; 2–8 `catalog` streams; 1–24 `records`.
- Stream: unique safe `id` ≤40; `title` ≤80; `description` ≤400; `unit` ≤30; `reference` 8–50 chronological numbers; numeric `specMin < specMax`. All numbers finite within ±1,000,000. Constant/near-zero MR baselines rejected. Short examples deliberately warn that limits are illustrative.
- Observation: unique safe `id` ≤40; `text` ≤400; numeric `value` ±1,000,000; whole `order` 1–1,000,000. Sequence unique **within reviewed stream**. Missing records are never filled in by AI.
- Original JSON ≤24 KB by JS string length; import envelope ≤1 MB, file byte size also checked. Only JSON supported; no PDF/CSV parsing claims.
- Review note ≤400 chars. Original source text never changes. Held records remain in JSON/CSV/Markdown.
- JSON preserves `originalInput`, all reviews and derived charts; reimport intentionally restores originals only and renews approval, not trusted saved decisions.
- Audit CSV preserves all observations including holds; Chart CSV includes every released observation, limits, moving range and reasons. Quoting handles commas/newlines/double quotes. Formula-like string fields receive a leading apostrophe; signed numeric values remain numeric. Markdown is a text investigation worksheet.

## Build and publish

`npm install`; `npm run predeploy`. React + Vite, base `/daily-app2/20261112-19/`. Per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` are retained but **publish only through the root combined-site workflow**, never individual app deploy.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Tests use synthetic data only. Successful inference tests always use the real model; fault injection is limited to defensive/error/stale-response tests. No universal accuracy claim.

Runtime/library licenses: Transformers.js Apache-2.0; ONNX Runtime MIT; React MIT. No model artifacts are committed into this app; first-run files come from the documented public host.
