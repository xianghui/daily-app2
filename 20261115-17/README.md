# Ratio Compass

A local-AI worksheet for workshop facilitators eliciting **criterion importance ratios**. It reconciles inconsistent criterion names in comparison notes, requires review of both endpoints and the supplied ratio, then constructs a reciprocal AHP matrix, eigenvector weights and triad consistency discussion cues. It does not score vendors, pick an option or repair subjective judgments automatically.

## Workflow

1. Select either synthetic example, paste source JSON, or import a `.json` source/audit. Supply 3–6 criterion `cards` (`id`, `label`, `description`) and 1–24 `records` (`id`, `fromText`, `toText`, `ratio`). The ratio means **importance FROM / importance TO**, between 1/9 and 9. JSON needs decimals, not fractions.
2. Explicitly load AI. Observe model-file progress and four-text inference batches; cancel terminates the worker. No requests for weights before this action.
3. Inspect original endpoint snippets and ranked cosine evidence, edit criterion identities/ratios, approve or hold every row, add multiline evidence notes. Identity/ratio edits renew approval. Undo restores prior review states. Original data is preserved.
4. Apply. One approved comparison is required per unordered pair; self pairs and duplicate approved pairs block. Missing pairs produce an incomplete audit **without weights**. Complete matrices yield principal-eigenvector weights, an equal-weight baseline, CR and triads sorted by multiplicative disagreement. No fabricated confidence or time-saving claim.
5. Download actual reviewed JSON, complete note CSV, weight CSV or Markdown; copy Markdown. Edits invalidate applied exports. JSON reimport restores originals only, not trusted approvals. Empty weight CSV for incomplete matrices has headers only.

## Real AI / static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, approximately 23 MB plus tokenizer/configuration files.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread, normalized mean-pooled 384-dimensional embeddings. No WebGPU dependency, server or API key.
- Embeddings map informal comparison endpoints to supplied criterion definitions. AI never infers ratios. Finite normalized vector count/dimension validation runs before dot-product ranking. Topical similarity is not semantic entailment, direction verification or certainty; unrelated/negated notes can mislink.
- Collection-size-safe immutable shared worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (~27 MB). Preserve both originating apps. Protocol accepts `{id,texts}` and emits progress, batch counts, `{id,type:'result',vectors}` or errors. Its complete dependency paths and real production inference were checked; hashes are in asset audit reports.
- Initial downloads require internet to this Pages site and Hugging Face/CDN. Module workers, WebAssembly SIMD, Cache API and several hundred MB free memory needed. Desktop Chrome headless CPU is tested; physical phones, other browsers and low-memory devices are not. Responsive widths 320/390/1440 px are tested, not physical-device inference.
- Runtime/worker and model files use Cache API. Tested offline scope is **a fresh worker in an already-open warmed page after an online successful inference**; offline first navigation/reload is not promised. Cache eviction/private mode may require redownload. A network/model error never switches to deterministic fake suggestions.

## Privacy / limits / failure handling

The default path only downloads public model/runtime files; all user text stays in browser worker memory. No analytics, optional remote provider, API keys, uploads, credential requests, local-storage notes, account connections or external actions. Model downloads are not content uploads. Only synthetic fixtures are committed. Imported instructions are inert embedding inputs and cannot grant authority.

Limits: 40,000 source characters, 2 MB `.json` import including audit envelope, 300 characters per description/endpoint, 100-character labels, 40-character IDs, 1,000-character review notes; 3–6 criteria, 24 notes, four texts per model batch, truncation at 256 tokens/text. Text truncation and English-oriented model limitations remain. A 180-second watchdog, cancellation tokens, worker termination and asynchronous file/download guards prevent late results overwriting newer input/runs. Unsupported runtime, download failure, malformed vectors/envelopes and worker errors leave no fake output and give retry guidance.

## Deterministic interpretation

For a complete positive reciprocal matrix A, power iteration computes normalized principal right eigenvector w (max 1,000 iterations, convergence tolerance 1e-13; reject eigen residual >1e-8). `CI = max(0, (lambda - n)/(n - 1))`; `CR = CI / RI` with conventional Saaty random indices 0.58 / 0.90 / 1.12 / 1.24 for n=3/4/5/6. The 0.10 CR threshold is only a conventional workshop discussion cue, not a correctness/quality certificate. See Saaty, *The Analytic Hierarchy Process*, 1980. Triads report `exp(abs(log((Aij*Ajk)/Aik)))`; 1 is multiplicatively coherent. Equal weights are a no-elicitation baseline, not ground truth. Percentages shown are importance weights, never AI confidence. No measured accuracy, time savings or universal utility claims.

## Development / publishing / validation

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261115-17/`. Required per-app gh-pages scripts retained; publish only via the ROOT combined workflow to preserve the gallery. See `VALIDATION.md`, machine-readable browser/arithmetic/artifact/asset reports and publication status for actual outcomes. No blanket claim that a successful build verifies AI.
