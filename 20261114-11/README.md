# Forecast Folio

A private probability-forecast retrospective for team leads. Local real AI reconciles paraphrased prediction notes with supplied resolved event definitions; mandatory review establishes the common event panel; deterministic Brier scores and fixed-bin calibration worksheets compare supplied predictions with a constant 50/50 baseline. Unlike a forecasting generator, this app never invents probabilities or outcomes.

## Workflow and formats

1. Choose **Release forecasts** or **Market-day forecasts**, or paste/import source JSON. All fixtures are synthetic.
2. Supply `project`, `vendors` (2–4 forecaster names), `criteria` (2–8 resolved events), and `records` (1–32 notes). These compact schema names are shown explicitly in the source editor. Each event has `id`, `label`, `description` (≤300 chars), and numeric `outcome` (1 happened / 0 did not happen). Each record has unique `id`, `vendor` (forecaster), `description` (≤300 chars), `value` (probability percent 0–100), and `owner` (reviewer). Source ≤30,000 characters; IDs ≤40, project/reviewer ≤150. Use only predictions made before outcome resolution, for the exact same event and horizon.
3. Explicitly load AI. Inspect cosine-ranked event definitions and original notes. Correct the proposed event, forecaster or probability, and approve or hold EVERY note. Approval verifies the supplied outcome too. Correct event definitions/outcomes in source and rerun. No outcome is inferred or verified by AI.
4. Apply the scorebook. Duplicate approved forecaster/event pairs block application. Missing pairs produce an incomplete audit with NO scores for any forecaster, preventing comparisons on different subsets. Hold redundant or irrelevant notes without deleting originals. Exactly one approved forecast per event and forecaster is needed.
5. Edit reviewer/notes, undo last edits, and reapply. Any edit disables stale exports. Download lossless JSON (originals, reviewed layer, evidence, outcomes, scores/bins), all-row CSV, or a complete Markdown worksheet; copy Markdown. Formula-like text cells in CSV are prefixed with an apostrophe for spreadsheets; signed numeric fields remain numeric. Reimport audit JSON restores ORIGINALS only, deliberately requiring new inference/review. `.json` imports ≤2 MB. CSV/Markdown are export-only.

## Real AI and static runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX through @huggingface/transformers 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT). Mean-pooled normalized 384-dimensional embeddings compare each forecast note with supplied event descriptions. Four texts/batch, 256-token maximum context, 180-second run timeout. All embeddings must be finite, normalized, correctly counted and dimensioned before suggestions are accepted. No canned responses, remote inference, API keys, or heuristic fallback.

First explicit run: approximately 23 MB model/tokenizer from Hugging Face/CDN and 27 MB WASM CPU runtime plus app assets from this collection. Actual sizes depend on host revisions. Model download progress and inference batch counts are shown; cancel terminates the worker. The runtime module factory/worker are bundled locally. Byte-identical WASM is shared at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that asset. SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`.

Target: current desktop Chrome, module workers, WebAssembly SIMD and several hundred MB RAM. CPU path tested with GPU disabled; WebGPU not needed. Physical phones, other engines and assistive technology untested. Layout checked at 1440/390/320 CSS pixels. Network/runtime/worker/malformed-result/timeout failures report errors, never fabricated output. Run identity protects input changes, asynchronous imports, cancellations and late responses.

## Privacy and offline scope

User content stays on-device. Network capture checks static GET downloads only, no request bodies or content-bearing URLs, and no model-host requests before loading. No analytics, backend, external actions, provider credentials or automatic content persistence. Imported instructions are inert text. Model, worker and CPU assets cache with Cache API. A warmed, already-open page can terminate its worker and run REAL inference with a fresh worker offline; tested. Offline reload/navigation is NOT promised. Cache eviction/private mode may require redownloading.

## Deterministic scoring and limits

For every approved record, `p = value / 100`, `y = resolved outcome`. Brier is `mean((p-y)^2)`, range 0–1; lower is better. Constant 50/50 baseline always scores 0.25. Skill against this explicit baseline is `1 - Brier/0.25`, range −3 to 1; NOT accuracy. Five fixed bins [0,.2), [.2,.4), [.4,.6), [.6,.8), [.8,1] report counts, average predicted probabilities and observed event rates. Empty bins have null rates. Display rounding is not used in calculations. Tied scores remain tied; alphabetical display order does not establish superiority.

AI materially matches different phrasings where literal labels fail. Literal-label coverage is calculated against reviewed labels and is wording coverage, not accuracy. AI does not establish truth, event equivalence, time horizons, negation, relevance or calibration. Unrelated text always has a nearest candidate; hold it. The tiny fixtures are not reliability evidence for arbitrary data. Sample scores are descriptive, sensitive to event choice, correlated outcomes and hindsight edits; no statistical significance, future-performance or causal claims. No time-saving percentages are claimed.

## Build and validation

React + Vite. `npm install`; `npm run predeploy`. Base `/daily-app2/20261114-11/`. Required per-app `deploy: gh-pages -d dist` remains, but publish ONLY through root combined workflow. See VALIDATION.md and machine-readable reports for actual tested outcomes and public verification.
