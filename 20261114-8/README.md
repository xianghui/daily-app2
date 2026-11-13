# Contingency Lens

A repeatable scenario-decision worksheet for small-team planners comparing stock, venue or production alternatives. It reconciles differently worded outcome notes and makes incomplete decision evidence visible. It does not predict outcomes or take external actions.

## Workflow

1. Choose **Outdoor market** or **Print run**, paste source JSON or import source/audit `.json`. Set mutually exclusive, collectively exhaustive scenarios, positive relative likelihood weights, options and outcome records.
2. Explicitly click **Load AI & match scenarios**. Real local embeddings propose a scenario for each outcome note; options, payoffs and weights are supplied, not generated.
3. Inspect source snippets and candidate cosine evidence. Correct the scenario, option or signed net payoff cents, edit multiline owner/follow-up notes, approve or hold every record. Undo restores the last review edit. Nothing auto-approves.
4. **Apply reviewed outcomes** creates an in-app worksheet. Exactly one approved outcome is required per option/scenario cell; missing or duplicate pairs block all decision recommendations. Held originals remain visible/exportable. No silent averaging or zero filling.
5. Download current **JSON**, **CSV**, **Markdown**, or copy the worksheet. JSON preserves originals, assumptions, every review, evidence and computed matrix. CSV preserves source and reviewed outcomes including holds; formula-like text is escaped, signed numeric payoffs remain numeric. Markdown includes supplied weights and all records. JSON audit import restores originals only, requiring fresh inference/review. Source changes cancel runs and discard all results; review changes invalidate applied exports.

## Real AI

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. q8 ONNX weights; normalized mean-pooled 384-dimensional embeddings compare notes against user scenario descriptions. Four texts per batch, 256-token maximum. Count, dimension, finiteness and norm checked before ranking.
- Runtime: Transformers.js `@huggingface/transformers` 4.3.2 and ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0; Apache-2.0/MIT respectively (installed package licenses apply). React + Vite app, locally bundled worker/runtime. No API key, WebGPU or paid service required. No optional remote provider integration exists.
- Small English text encoder, not a generative assistant. Similarity is not confidence, scenario truth or a probability estimate. Unrelated/negated notes still receive a nearest candidate; mandatory human review and hold are essential. Long descriptions may truncate. Tiny synthetic tests are not representative accuracy evidence.

## Download, privacy, devices and offline scope

Before loading the UI discloses ≈23 MB model/tokenizers + 27 MB CPU WASM + under 1 MB app/worker plus runtime module. First run requires internet; file/batch progress, cancel and retry are shown. Model files download by GET from Hugging Face/CDN; app/runtime files from the same site. **Input content remains in page/worker memory and is never uploaded.** No analytics, content persistence, credentials or server inference. Imported instructions are inert data.

Current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free RAM is tested. Physical phones, Safari/Firefox/Edge and low-memory devices unverified. The default tested CPU path does not require WebGPU. Worker construction/runtime/model-download errors, malformed embeddings and 180-second timeout show actionable errors and never fake AI. Cancelling terminates the worker; run IDs guard delayed responses and file reads.

Cache API stores worker source, WASM factory and binary; Transformers.js caches model downloads. After an online run, **an already-open warmed page** can start a fresh worker and perform real inference with browser network disabled. Offline reload/navigation is **not promised**. Browser cache eviction/private mode can require redownload. No input content is cached by the app.

Collection deploy reuses immutable same-origin WASM `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that asset. Vite rewrites the emitted worker reference; `public/runtime/` contains the matching local module factory.

## Schema and bounds

```json
{"project":"Example","scenarios":[{"id":"dry","label":"Dry","description":"Sunny weather","weight":3}],"options":[{"id":"stall","label":"Stall"}],"records":[{"id":"R1","description":"Clear skies","option":"stall","payoffCents":10000,"owner":"Planner"}]}
```

1–4 scenarios, 1–8 options, 1–32 records; IDs unique within lists, ≤40 characters. Labels ≤80, descriptions ≤300, project/owner ≤150, review notes ≤1,000. Source ≤30,000 characters; audit/file envelope ≤2 MB. Positive integer weights 1–10,000, signed integer payoff ±100,000,000 cents. One currency with 100 minor units and one decision horizon. No PDF/CSV input or financial integrations. Matrix incompleteness is allowed as an audit, never as a recommendation.

## Deterministic analysis and meaningful comparison

- Weights normalize by their sum. Expected value maximizes Σ(weight × net payoff), with ties retained. All weighted numerators are exact safe integers under bounds; money display divides by weight and 100, rounded to two decimals.
- Regret is the best payoff available in that scenario minus an option's payoff. Minimax regret minimizes the maximum regret and ignores likelihood weights; it can disagree with expected value. Both rankings remain visible rather than pretending there is a universally correct choice.
- Optimistic baseline picks the option with the highest single-scenario payoff. When tied, use the highest expected payoff among those baseline choices. The difference from the expected-value choice is computed under assumptions, **not measured improvement or savings**.
- Expected value of perfect information = weighted best payoff in each scenario minus the best fixed-option expectation. This is an upper ceiling for perfect outcome revelation, **not the value of a real study, recommended research spend or guaranteed benefit**. Actual research is imperfect and costly.
- Literal-label baseline counts notes containing their reviewed scenario label. It is a wording-coverage measure, not model accuracy.
- No risk-utility model, forecasts, investment advice, forecasts of correlations, study design, uncertainty intervals or automatic action. Scenario coverage, probabilities, net costs, horizon and comparability must be verified by the user.

## Build, publish and observed validation

`npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Do not run individual deploy**: use root combined-site workflow. Base `/daily-app2/20261114-8/`.

`node core-test.mjs && python3 oracle-test.py` checks known matrices, missing/duplicate cells, schema guards and 1,500 independent rational-arithmetic cases. `node browser-test.cjs` executes real production WASM inference, two synthetic domains, review/edit/hold/undo, batch/cancel/stale behavior, artifact downloads, clipboard, offline fresh worker and 1440/390/320 px layouts. `node defensive-test.cjs` injects only defensive failures; successful AI tests use the real model. `python3 artifact-test.py` independently reopens downloaded artifacts; `python3 asset-test.py` checks production paths, runtime identity and credential patterns. Playwright uses the host installation. See VALIDATION.md and machine-readable reports for observed outcomes and untested limits.
