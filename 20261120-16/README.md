# Chroma Ledger — 20261120-16

A local-AI color recheck desk for print-studio and textile QA coordinators. Informal sample labels make it tedious to reconcile instrument readings against approved targets. Real neural retrieval proposes the target; a human verifies it and the measured Lab; deterministic CIELAB ΔE76 checks reveal chromatic shifts hidden by checking lightness alone. This is not a generic chat interface, image color picker, press-control tool or production-release system.

## Workflow

1. Choose either synthetic batch or paste/import JSON. Set approved target descriptions, measured target Lab values, supplied ΔE76 tolerances and a **shared** measurement condition (illuminant, observer, geometry, instrument settings and backing). Supply sample IDs, rough descriptions and measured Lab values. Never put RGB values in Lab fields.
2. Explicitly click **Load AI & reconcile**. Model downloads need internet initially. Watch model-file and four-text inference batch progress; cancellation terminates the worker. Retry after network/device failures; no heuristic or fake AI fallback exists.
3. Review every target proposal and its source descriptions/cosine evidence. Correct target or measured coordinates, add multiline notes, approve or hold every sample. Undo restores the previous review state. Originals are retained separately. Imported text is data, never instructions or credential requests.
4. Apply reviewed checks. Inspect signed L/a/b deviations, Euclidean ΔE76 and supplied threshold, plus lightness-only baseline flags. Unused targets remain in the roster. Held records remain in the full audit and are excluded from checks.
5. Download JSON (lossless source + reviewed audit), CSV (every original and reviewed row), Checks CSV (approved rows + unrounded distance / reference / action) or Markdown; copy the current Markdown worksheet. Edits invalidate exports until reapplication. Export before leaving: content is in memory only. Reimporting an audit restores **originals**, not approvals, and requires a fresh AI/review run.

## Input / validation / limits

Source JSON has `context`, `condition`, `minSimilarity`, `first` (target array), and `records` (sample array). See `src/core.js` synthetic fixtures. Targets: `{id,text,lab:[L,a,b],tolerance}`. Samples: `{id,text,lab:[L,a,b]}`. 2–8 targets; 1–96 samples; unique ASCII IDs ≤40 chars per array; each description/context/condition 1–300 chars; source 1–60,000 chars. JSON imports including audit envelopes ≤2 MB; extracted original input still has the strict 60,000-character bound. Lab finite: L 0–100; a/b −128 to 127. Tolerance >0 and ≤50 ΔE76; abstention threshold 0–1. Other formats are rejected with an actionable error. No numeric/color values are extracted or invented by AI.

AI outputs must be one normalized finite 384-vector per input, validated for dimension, count and norm before retrieval. All reviews must preserve record IDs/count and valid coordinates, target IDs, notes ≤1,000 chars and approve/hold decisions before application. Worker/source/file-read run identities guard cancellation and stale async responses. Worker-construction, runtime, network, malformed output and 180-second timeout failures leave no fabricated result.

## Real AI, model and runtime

- **Model:** [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 ONNX `model_quantized.onnx`, about 23 MB plus small tokenizer/config files. Observed host revision: `751bff37182d3f1213fa05d7196b954e230abad9`. Shared loader uses mutable `main`; future host changes are possible, not a reproducibility guarantee.
- **Runtime:** Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), CPU WebAssembly SIMD, one thread. `feature-extraction`, mean pooling and normalization, cosine ranking. Four texts per actual model batch. Installed feature-extraction pipeline ignores per-call `max_length`; actual tokenizer ceiling is 512 tokens and each input description is separately limited to 300 characters. No WebGPU is used or required. No API keys or mandatory paid services.
- **Locally hosted shared immutable dependencies:** worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes). Preserve these existing apps/files in combined deployments. `runtime-dependency-audit.json` records byte counts/SHA-256 and the inspected vector protocol. Sharing avoids another 27 MB runtime in the almost-full collection.
- **Requirements:** secure-context modern browser with module workers, WebAssembly SIMD, Cache API and several hundred MB free memory. Desktop Chrome tested with GPU disabled; physical phones, other browsers and memory-constrained devices unverified. Narrow mobile *layout* tested, not physical mobile inference. Enable WASM/use current desktop Chrome if unsupported. Unavailable WebGPU is irrelevant because CPU is the default, not an untested fallback.

## Privacy / downloads / cache

No user documents, measurements or review text leave the browser. Requests are public model/runtime file GETs only. The public model host is Hugging Face and its redirect/CDN hosts; model requests have no user content. No analytics, provider integrations, shared keys, user keys, remote inference, uploads, account changes or external actions. All fixtures and exported test artifacts are synthetic. Built text assets scanned for key patterns, integration code inspected, browser network bodies/URLs audited; this is evidence for the tested path, not a universal security proof.

Explicit Cache API storage covers fetched worker source, runtime factory and WASM; Transformers.js caches model/tokenizer files. After an online run, a **fresh worker** successfully inferred again with all network disabled in the already-open warmed production page. Offline page reload/navigation is **not** promised. Storage restrictions/eviction can require a redownload; errors are shown and retry remains available. No first-run model downloads occur before the user starts loading.

## Deterministic math / interpretation

`delta = reviewed sample Lab − selected target Lab`; `ΔE76 = sqrt(ΔL² + Δa² + Δb²)`; within tolerance iff unrounded ΔE76 ≤ supplied tolerance. Baseline uses `|ΔL| ≤ same tolerance` and deliberately ignores a/b. Counts compare computed recheck flags, not measured accuracy, savings or visual acceptability. Signed components and current reviewed values are exported without rounding in JSON/CSV. UI/Markdown distances round only for display.

ΔE76 is **not CIEDE2000**, nor a uniform-perception guarantee or industry threshold. Conditions must be comparable; the app cannot verify the operator's condition assertion. It does not infer color from names or screen swatches, model spectrally dependent metamerism, measure uncertainty/gloss/substrate effects, propose ink recipes or authorize release. Decorative header shapes are explicitly not color previews. Semantic similarity is not identity: unrelated/negated labels may map to a target. Inspect evidence and hold them. Production acceptance needs appropriate measurement procedures, thresholds and physical review outside this worksheet.

## Build / publish / validation

React + Vite, base `/daily-app2/20261120-16/`. Per-app `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist` (required but **do not use it to publish this collection**). Publish only from repository root with root predeploy/deploy; otherwise the gallery would be overwritten.

See [observed validation](VALIDATION.md), `browser-validation.json`, `defensive-validation.json`, `artifact-validation.json`, `core-validation.json`, and race/cancellation reports. Real browser tests are Playwright + installed Chrome against the production build, never a mocked successful AI path. Fault injection is only for failure/race checks. `browser-test.cjs` accepts `APP_URL` and `REPORT` for assembled/public reruns. Tests contain no private source records.
