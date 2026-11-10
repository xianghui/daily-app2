# Trial Harbor

A local-AI reconciliation and fixed-horizon A/B experiment worksheet for coordinators with messy arm labels in disjoint batch reports. Unlike a generic chat tool, it produces an editable count audit and cautious interval worksheet. This is distinct from population poststratification: two randomized arms, binary conversion counts, a predeclared practical lift, and independent-binomial uncertainty.

## Workflow

1. Paste/import JSON or load a synthetic checkout or workshop-invitation example. Declare one control and one treatment description, minimum absolute lift (`0.02` = 2 percentage points), and batches with unique IDs, free-text arm descriptions, visitors and conversions.
2. Explicitly **Load AI & reconcile batches**. Before this click no model is downloaded. Real MiniLM embedding inference proposes an arm for each description; it does not extract or invent counts.
3. Inspect source snippets, arm definitions and cosine scores (not confidence). Correct arms/counts, add verification notes and approve or hold every batch. Every row begins pending. Edits reset affected approvals and invalidate exports. Undo is available for the last 100 edits.
4. Confirm the experimental assumptions, then apply. Deterministic integer aggregation preserves all approved counts. Holds, missing arms or unconfirmed assumptions block interval interpretation, while approved-only descriptive totals remain visible.
5. Download current JSON/CSV/Markdown or copy Markdown. JSON contains original inputs, all reviewed records including holds, model scores and calculated results. CSV contains every reviewed batch with original and corrected counts. Markdown includes totals, interval interpretation and full source audit. Reimport JSON restores original inputs only, never approvals. No external launch, sending or account actions.

## Real AI, runtime and data flow

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0 model card; quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Repository default revision is not commit-pinned; model host updates could change future results.
- Runtime: `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU in a local module worker. No WebGPU required. Cosine ranking compares each batch against both supplied arm definitions. Four texts per chunk, maximum 256 tokens per text. Counts and statistical interpretation are deterministic.
- Initial download: approximately 23 MB model/tokenizer from `huggingface.co` / Hugging Face `*.hf.co` download infrastructure plus 26,861,777-byte same-origin WASM (~50 MB total before small JS overhead). Internet required initially. No paid service, API key, remote inference, analytics or user-content upload. GETs download weights; they do not send batch descriptions. User data/reviews stay in browser memory and exported files, not localStorage or server storage.
- Runtime/worker code is bundled on GitHub Pages. Local runtime factory is `public/runtime/ort-wasm-simd-threaded.asyncify.mjs`. Vite references byte-identical immutable collection WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; retain that older app in combined publishing. SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`.
- Worker source and WASM factory/binary are explicitly cached through Cache API; Transformers caches model files. Storage failures/eviction may require redownload. **Tested offline scope: new real inference with a fresh worker in an already-open, previously cached page. Offline page reload/navigation is not promised.**
- Verified desktop Chrome with WebAssembly SIMD, module workers and Cache API; phone viewport emulation only, not physical phones or other browsers. No oversized general-purpose language model. Modern SIMD-capable CPU required. Initial load/cancellation/errors and retry are visible. Runs time out after 180 seconds; worker termination and run IDs prevent stale writes, including delayed file reads and worker downloads. Network/runtime/model errors do not substitute demo or heuristic output.
- Imported descriptions are data, never authority, tool calls or credential requests. All fixtures are synthetic. No optional provider integration or credentials.

## Statistics and honest comparisons

For each reviewed arm, counts are summed across disjoint batches. Let `pT=xT/nT`, `pC=xC/nC`. Wilson 95% score intervals use z=1.959963984540054. The Newcombe hybrid-score interval for `d=pT-pC` is:

```
lower = d - sqrt((pT - lowerT)^2 + (upperC - pC)^2)
upper = d + sqrt((upperT - pT)^2 + (pC - lowerC)^2)
```

Bounds clip to [-1,1]. Compare the interval to the **predeclared absolute practical lift**. Entire interval above target → “Interval clears target”; entire interval below target → “Interval below target”; otherwise “Inconclusive at target”. These are approximate descriptive interval assessments, not automatic launch recommendations or a Bayesian probability that one arm wins. Values exactly equal to target remain inconclusive. Wilson arm intervals and raw observed leader are shown. The observed-only leader is a simple uncertainty-blind baseline; no improvement/accuracy/time-saving percentage is invented.

Assumptions: independent randomized visitors, mutually exclusive arms, one binary outcome per visitor, consistent outcome/exposure windows, complete nonoverlapping batch reports and one fixed predeclared analysis horizon with no repeated significance peeking. IDs alone cannot prove deduplication, randomization or independence. No clustered/paired designs, sequential tests, causal certification, multiple-testing correction, covariate adjustment or automatic stopping. Small counts/extreme rates require specialist review. AI can misinterpret negations and unrelated descriptions, so human arm/count review is mandatory. It cannot validate experimental design.

Computed reconciliation comparisons count approved links retaining the AI arm versus source descriptions literally containing an arm title. These are audit counts, not accuracy. Known-answer fixture performance is documented separately and not generalized.

## Input/output contracts and bounds

Original JSON ≤40 KB; JSON audit import ≤1 MB. Two arms exactly, unique 1–30-character alphanumeric/underscore/hyphen IDs; titles/name 1–100 characters; definitions and batch text 1–400 characters. One control/one treatment, minimumLift finite 0–1. 1–64 unique batches, integer visitors 1–1000000, integer conversions 0–visitors. No CSV/PDF imports. Every AI vector must be finite, normalized and exactly 384-dimensional; vector count must match every input text. Malformed results are rejected.

Review counts have the same bounds; all rows must be approved/held before applying. Spreadsheet-like text receives a leading apostrophe in CSV to reduce formula execution risk, including multiline notes. Genuine numeric counts remain numbers. JSON preserves unmodified original content; CSV quoting is handled by Papa Parse. Exports always reflect the latest applied review; subsequent edits disable them until reapplied.

## Build and publish

React + Vite. `npm install`, `npm run predeploy`. Vite base `/daily-app2/20261110-17/`. Per-app scripts retain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but **publish only through root** `/Volumes/ExternalHD/daily_app2`: root predeploy assembles the collection and root deploy publishes it. Do not run per-app deploy, which would replace the collection.

## Validation

See [VALIDATION.md](VALIDATION.md), machine-readable reports and runnable synthetic tests. Core tests independently invert the binomial score equation by bisection and verify difference intervals, conservation, reversal symmetry and guards over 1,800 generated cases. Browser checks use the actual production bundle and real model for successful inference; mocks are restricted to malformed-result/runtime/timeout defensive checks. Public publication status is recorded separately. Scope limitations: no physical-device/browser matrix, no offline reload, no general accuracy claim, no real personal datasets.
