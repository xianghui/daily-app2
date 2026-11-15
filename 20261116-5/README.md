# Uncertainty Weave

A local-AI measurement-budget worksheet for lab teams reconciling repeated informal measurement notes. It turns a supplied positive multiplicative measurement model into an editable, source-traceable uncertainty budget and methods-review checklist. It is not a chat wrapper, calibration certificate or automated metrology decision.

## Workflow and formats

1. Choose **Box volume** or **Material density**, or paste/import source JSON. Both fixtures are synthetic. Define `context`, positive `coefficient`, `outputUnit`, output `coverage` (1–3), `targetPercent` (.001–100) and 1–6 `inputs` with unique `id`, `label`, `description`, `unit` and integer `power` (−3…3, not zero). Model: y = coefficient × product(value^power). Set goals and assumptions before reviewing results.
2. Add 1–24 `observations`, each with unique `id`, `description`, positive `value`, nonnegative `uncertainty`, `kind` (`standard`, `expanded`, `rectangular`) and `divisor` (1–10; used only for expanded inputs). Values and uncertainties use each matched input's unit. Supplied uncertainty is bounded to 20% of value; this is a coarse guard, not a proof of linearity. Supply consistent units and dimensions yourself; no automatic unit conversion or dimensional checking.
3. Read download/privacy requirements and explicitly click **Load AI & reconcile inputs**. Actual MiniLM embeddings suggest each observation's quantity identity. Inspect the top two cosine similarities and source definitions; scores are not confidence. Unrelated text still gets a nearest candidate: hold it.
4. Review/edit the quantity, value, uncertainty type, half-width or expanded divisor. Approve or hold every measurement. Substantive edits reset that row's approval, all edits invalidate applied exports, and the last 100 review edits can be undone. Originals remain unchanged. Notes support multiple lines.
5. Apply. Exactly one approved observation per input is required. Missing, duplicate or held inputs block the **whole** budget. No partial calculation is presented as complete. Ready budgets show output, standard and expanded uncertainties, sensitivities, per-input variance shares and target checks versus an absolute-sum baseline.
6. Download JSON (lossless originals/reviews/result), CSV (every observation and original/reviewed field), Budget CSV (all defined inputs, including blocked ones) or Markdown (model, budget, all sources/notes and follow-up checklist). Copy Markdown where clipboard permission permits. Reviewed artifacts reflect the last applied state and disable after edits. Import source/audit JSON restores originals only and requires new AI/review. CSV formula-like text gets an apostrophe; JSON remains lossless. Numeric fields remain numeric.

## What AI does / deterministic calculation

AI performs semantic identity reconciliation between rough descriptions and supplied canonical quantity definitions, reducing repetitive manual lookups across a batch. It never infers or certifies values, units, uncertainty types, model powers, coverage factors or independence. User text is data; it has no tools or credential authority.

For standard uncertainty u, use the supplied number. For expanded input U, u=U/divisor. For a rectangular symmetric ±half-width a, u=a/√3. For independent inputs, relative combined standard uncertainty is √Σ(power × u/value)². Sensitivity is power × output/value. Output standard uncertainty is output × relative standard uncertainty. Expanded output is standard uncertainty × supplied output coverage. Variance shares are squared relative contributions divided by their sum (all zero yields zero shares).

The baseline sums absolute standard contributions using the same supplied output coverage factor. It is a worst-case-sum comparison, **not** a probabilistic confidence statement. Reported percentages are computed uncertainty ratios or contribution shares, never AI confidence, measured speed gains or general accuracy. Target flags use underlying values, not rounded display values. JS finite floating-point arithmetic is used; exports preserve underlying values and display rounds to seven significant digits.

## Real AI / runtime / assets

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX English sentence feature extraction, normalized mean pooling, 384 dimensions. Neural embeddings, not keyword/regex classification.
- Transformers.js 4.3.2 (Apache-2.0); ONNX Runtime Web/WASM CPU (MIT). Actual CPU inference tested with GPU disabled; WebGPU is unnecessary. Batches of four texts. Actual tokenizer configuration has a 512-token ceiling; source descriptions are capped at 300 characters. The shared pipeline's `max_length:256` hint is not claimed as an enforced token limit.
- First use needs internet: approximately 23 MB model plus 27 MB WASM and worker/module glue. Hugging Face and its CDN host model files. No API key, paid service, remote inference, telemetry or optional provider integration.
- Bundled React/UI; immutable same-origin shared assets: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve their originating apps in combined deployment. `asset-audit.json` records sizes/hashes. Inspected worker protocol: `{id,texts}` → progress/batch/result `{id,vectors}` or error. No content-upload code or tool integration.
- Modern secure-context browser with WebAssembly SIMD, module workers, Cache API and several hundred MB available RAM. Desktop Chrome CPU tested; other browsers/physical phones unverified. Narrow Chrome viewports test layout, not physical-phone inference.

## Privacy, caching and failure handling

Source/reviews live in page and worker memory. Only asset downloads leave the browser; notes are not uploaded with model requests. Browser request audit checks GET-only/no-body traffic and no fixture text in URLs, with only same-origin/Hugging Face/CDN hosts. Persisted request reports omit signed query values. Built text credential-pattern scan is supplementary, not an exhaustive security proof. No real personal datasets or credentials are committed.

Worker source, module factory, WASM and model downloads use Cache API/runtime model cache. Tested offline scope: fresh-worker inference in an **already-open warmed page** with all network disabled. Offline navigation/reload/app-shell startup is NOT promised. Cache eviction/private mode may require downloads again. No service worker.

Source JSON under 50,000 characters; source/audit files under 2 MB. IDs: 1–32 ASCII letters/digits/underscore/hyphen. Text definitions: 1–300 characters. Values: 1e-6–1e6; uncertainty: 0–20% of value; coefficient: 1e-6–1e6; note: ≤1000 characters. Maximum 30 embedding texts. Exact vector count/dimension, finiteness and approximate unit norm validated. Empty/bad/oversized input, unsupported files, model/network/runtime errors, malformed output and 180-second timeout produce actionable errors without fake results. Cancellation/input changes terminate workers and invalidate run IDs. Late downloads, file reads or model responses cannot overwrite newer work.

## Interpretation and known limitations

This is first-order uncertainty propagation for **independent positive inputs** in multiplicative models. Correlation/shared calibration, systematic bias, nonlinear effects, input distributions beyond the listed conversions, effective degrees of freedom and model inadequacy are not estimated. A supplied output coverage factor does not establish a confidence level. Identity similarity cannot validate units, calibration evidence or metrological assumptions. Do not interpret small fixture success as universal accuracy. Mandatory human review and the exported follow-up checklist remain essential. No lab instrument control, account actions, external sending or certification.

## Development / publication

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261116-5/`. Required per-app deploy is `gh-pages -d dist`, but publish only using root predeploy/deploy to preserve the collection. See `VALIDATION.md` and machine-readable reports for observed tests and publication status.

Combined-site guard note: the first root assembly exceeded the conservative 1 GB budget by 127,001 bytes. The deploy-only byte-verified geometry WASM reuse list now also includes `20261030-24`, sharing `20261028-24/assets/manifold-BE4c7gO-.wasm` without changing source dist files or legacy JS URLs. Query-versioned shell/worker references preserve cache correctness. This affected older app is regression-tested for real worker/default/image/STL import and byte-signature-matched STL export locally and publicly.

Published and publicly verified: https://xianghui.github.io/daily-app2/20261116-5/ . Matching Pages build, public real CPU inference on both fixtures, offline fresh-worker inference, complete reviewed artifacts, gallery and affected legacy runtime checks passed. See `publication-status.json` and `public-*-validation.json`.
