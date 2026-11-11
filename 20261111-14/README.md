# Horizon Folio

A local-AI capital worksheet for small organizations comparing **independent whole-project upgrades**. Distinct workflow: reconcile informal cash-flow descriptions to projects → verify links/amounts/end-years → review initial outlays and capital/rate constraints → compare discounted portfolios → export a complete audit. AI does not forecast returns, verify financial truth or execute purchases.

## Use

1. Choose either synthetic example, paste JSON, or import a `.json` file. `policies` holds candidate project IDs/titles/descriptions and initial `outlay` in positive integer cents. `records` holds IDs, rough `text`, `year` (1–10) and signed `cents`. `budget` is integer cents and `rate` annual basis points (500 = 5%). One currency, consistent nominal/real assumptions.
2. Click **Load AI & match projects**. Explicit loading downloads the real model. Inspect source notes, ranked supplied descriptions and cosine similarities (not confidence).
3. Correct each project/amount/year, add notes, and approve or hold every row. Undo restores the last row-review edit. Input changes discard suggestions; edits invalidate applied exports. Held flows block their linked project. Projects without approved flows are also ineligible. Correct mislinks before holding.
4. Review project initial outlays, capital budget and annual discount rate. Click **Apply reviewed plan**. These global settings are explicitly applied, not part of row undo; originals remain in the JSON input and examples can reset them.
5. Download JSON/CSV/Markdown or copy the reviewed worksheet. JSON preserves originals, settings, every flow, similarity evidence, project calculations and both selections. CSV preserves every original/reviewed flow and hold, signed numeric values and formula-escaped textual cells. Markdown includes constraints, all projects and all flow audit rows. Reimported exports restore originals only, never approvals or edits; reviewed edits remain in the audit for inspection.

## Actual AI and static hosting

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction, normalized mean pooling, 384 learned features. [Original model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web, MIT. Notices and bundled license text included.
- Real learned embeddings rank project descriptions against cash-flow narratives using cosine similarity. No regex classifier, canned outputs or generative forecasts. Numerical inputs are supplied by humans. Classification materially changes which project's discounted cash flows enter selection.
- About **50 MB first load**: ~23 MB model/tokenizer from `huggingface.co`, `hf.co` and Hugging Face CDN (`us.aws.cdn.hf.co` observed), plus 26,861,777-byte same-origin WASM and bundled worker/factory. Internet required initially. Download status/progress, batch progress, cancellation and retry are visible.
- Worker and WASM factory ship locally. Shared immutable binary: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that older app in combined deployments. Reuse avoids another 27 MB published copy.
- Default uses WASM CPU, one thread. No WebGPU needed. Tested desktop Chrome with WebAssembly SIMD, module workers, Cache API and several hundred MB free memory. Other browsers and physical phones unverified; phone layouts tested by viewport emulation. Failures display actionable errors, not fake AI.
- Browser caches weights/tokenizer and explicitly caches worker/factory/binary. **Tested offline scope: fresh-worker inference in an already-open warmed page with all network disabled. Offline reload/navigation is not promised.** Caches may be evicted, blocked or cleared through browser site-data controls. Cache contents are public model/runtime assets, not user data. Model repository uses upstream main; future upstream changes may require revalidation.

## Deterministic calculations and comparisons

Each eligible project's `NPV = -initial outlay + Σ(cents / (1 + rate/10000)^year)`. Flows are end-year; outlays at year 0. Multiple flows in a year are additive. All up to 64 project subsets are inspected; pick maximum summed NPV within capital budget, including do-nothing. Ties within 1e-7 cents prefer less outlay then ascending input subset order. Integer inputs and budget sums are exact; discounting uses IEEE-754 floating point. Displays round currency units to 2 decimals; exports retain unrounded discounted cents. All projects must be independent, whole-project choices, with no later-year funding constraints.

Baseline: descending **positive nominal net cash** project order, greedily include what fits the identical budget. Its discounted NPV is computed from the same reviewed flows. Simple fixtures tie the baseline; the timing challenge selects a different project and improves the *computed* objective, not realized returns. AI/review and first-project/review link agreements are descriptive, not independent accuracy. Tiny known-answer tests are documented separately.

## Limits, data flow, defenses

2–6 projects; 1–24 flows; original JSON ≤24 KB characters; import ≤1 MB; titles ≤80 characters, IDs ≤40, AI text ≤400; max token context 256 and batch 4. Flows years 1–10, signed cents ±100 million; outlays 1–100 million cents; budget 0–100 million; annual rate 0–10000 bp. Missing years are allowed and implicitly no listed cash; users must confirm the complete common horizon and terminal value. The app cannot detect omissions.

No account access, API keys, persistence of notes, external actions, telemetry or uploads. Network captures from page startup through actual inference observed only GET downloads with no bodies or user-text URLs. Imported instruction-like text is inert model input. Exports leave the browser only when you download/copy/share them. Schema validation checks vector count/dimension/norm and finite values. Cancellation terminates workers; generation IDs guard delayed results, worker downloads and file reads. Timeout 180 seconds; network/runtime/malformed responses fail closed. Review and hold remain available after successful inference, never fabricated on failure.

## Limitations

English semantic retrieval is not project identity verification. Negation and unrelated-text fixtures mislinked and needed holds. All suggestions require review. No uncertainty, tax, inflation adjustment, financing, dependency constraints, mutual exclusion, discounted payback or investment recommendations. Partial held-project calculations are labeled blocked. This is a user-assumption comparison worksheet, not financial advice or prediction.

## Build and validation

`npm install`; `npm run predeploy`. Vite base `/daily-app2/20261111-14/`. Per-app deploy script exists as required but **publish only through the root combined-site workflow**, never replace the collection with this app.

See [VALIDATION.md](VALIDATION.md), executable browser/core/artifact/gallery tests and observed JSON reports. Scripts use the installed Playwright at the local agent workspace and Chrome channel; server: `python3 serve.py` (port 6434). All fixtures are synthetic; no credentials or personal data are included. Publication outcome is recorded in `publication-status.json`.
