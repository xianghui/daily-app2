# Strata Orchard

A local-AI sampling-frame reconciliation utility for research coordinators. Distinct from respondent scheduling or survey weighting: informal roster-segment descriptions are matched to supplied strata, then a fixed sample budget is allocated under explicitly supplied variability assumptions.

## Workflow
1. Choose either synthetic example or paste/import source JSON. Set project, sample budget, strata (`id`, `label`, `description`, assumed within-stratum `sd`) and disjoint roster segments (`id`, `note`, `count`, `owner`). No real personal fixtures are included.
2. Explicitly load AI. Review source-linked candidate cosine similarities and edit stratum/count/owner/notes; approve or hold each record. Similarity is not probability. Reject by correcting the mapping or holding it.
3. Apply the reviewed frame. Every segment remains in the audit; holds, missing strata and over-budget samples block allocation. Undo restores prior review edits. Any edit invalidates the applied export.
4. Download JSON audit, CSV segment worksheet or Markdown allocation/checklist, or copy Markdown. JSON reimport restores original inputs, not prior approvals. CSV repeats the stratum sample across segments: **do not sum that column**. Group allocation is explicit in JSON/Markdown. No people are selected or contacted.

## Real AI, runtime and privacy
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Transformers.js 4.3.2 / ONNX Runtime Web runs WASM CPU in a module worker. No API keys, server or WebGPU required.
- AI materially links reworded segment descriptions to stratum descriptions. All counts/SDs are supplied by the user; aggregation, validation, review and integer optimization are deterministic. Input text is embedded as data, never executed or given tool authority. Imported text cannot approve its own result.
- Before explicit loading the app requests no model assets. Initial download about 23 MB model plus 27 MB runtime, with tokenizer/config/app overhead. Downloads use this site's bundled runtime and huggingface.co / its file CDN (hf.co, xethub.hf.co). User content is never included in download URLs or bodies. No analytics, remote inference or persistent user-content storage.
- WASM binary is byte-identical to the collection's immutable `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes). The root deployment must preserve it. Factory and worker are local app assets. Cache API holds worker/factory/WASM and Transformers model files where permitted.
- Tested offline scope: after successful loading in an **already-open page**, terminate worker and run new real inference with all network disabled. Offline navigation/reload is not promised. Cache eviction, disabled storage or a new browser profile need internet.
- Requires module workers, WebAssembly SIMD and several hundred MB memory. Desktop Chrome headless CPU tested, plus 320/390px emulation. Physical phones, other browsers and assistive-technology audits untested. Failure paths show actionable errors; no fake fallback. Model/run timeout 180 seconds. Cancel terminates the worker. Run identity guards file reads, worker downloads and messages.

## Limits and validation
2–6 strata; 1–24 disjoint segments; 30,000 source characters; imported JSON ≤2 MB; each description ≤300 characters; positive integer segment counts ≤100,000; sample budget 2–300 and at least one per stratum; SD 0–10,000. Four texts per inference batch, 256-token context. Source IDs must be unique. Result vectors must be finite, normalized 384-vectors with matching text count. Malformed input/results, unsupported formats/runtime, download errors and timeouts yield no fabricated outputs. AI always chooses a nearest candidate even for irrelevant/negated text: human verification and hold are essential. It cannot detect overlapping people in aggregate segment counts.

## Deterministic allocation and baseline
For disjoint complete strata with population Nₕ and supplied SD Sₕ, minimize assumed variance of the population mean:

`sum((Nₕ/N)^2 * Sₕ^2 * (1/nₕ - 1/Nₕ))`

Each stratum starts with one sample; add the greatest marginal reduction `Nₕ² Sₕ² / (nₕ(nₕ+1))` until the exact budget is exhausted, capped by Nₕ. This separable convex allocation is globally optimal for this objective. Ties follow source order. The equal-allocation baseline adds to the smallest current sample with the same caps/minimums. Both use exactly the same budget. Weights Nₕ/nₕ are design weights, not a substitute for a defensible frame or nonresponse adjustment.

Assumes independent simple random sampling **without replacement within each stratum**, known planning SDs, one outcome scale and equal sampling costs. No claim about measured accuracy, achieved precision, time saved or representativeness. One sample cannot estimate within-stratum variance; the displayed variance uses supplied assumptions, not observed standard errors. If SD assumptions are poor or AI matches are wrong, the allocation can be poor. Do not use for clinical or consequential sampling without domain review.

## Development and publishing
`npm install`, `npm run dev`, `npm run predeploy`. Required per-app deploy script exists but **do not invoke it for the collection**. Base `/daily-app2/20261114-3/`. Root `npm run predeploy` assembles every preserved gallery app into `deploy/`; root `npm run deploy` publishes the combined tree.

See [VALIDATION.md](VALIDATION.md), executable tests and JSON reports for actual observed checks and publication status. Browser tests use the local installed Playwright/Chrome environment; fault injection is restricted to defensive tests, never successful inference checks.
