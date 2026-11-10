# Reserve Mosaic

**For event coordinators sizing a contingency reserve from rough incident notes.** This is a hypothetical planning worksheet, not a forecast, insurance recommendation or payment tool.

## End-to-end workflow

1. Load **Outdoor festival** or **Community screening** (synthetic), paste JSON, or import a JSON audit's originals. Define a plan name, three-letter currency label, coverage `target` (50–99), `templates` (`id`, `title`, `description`, `cost`) and distinct `risks` (`id`, `text`, `probability`). Costs are whole currency units, NOT cents. Likelihoods are your own whole-percent estimates.
2. Explicitly choose **Load AI & reconcile risks**. Actual learned MiniLM embeddings semantically match each incident to cost-template descriptions, in batches of four. This reduces alias reconciliation; AI does NOT invent probabilities, verify costs, understand causal dependence or predict losses.
3. Inspect original notes and ranked source evidence, edit the template/cost/likelihood and reviewer note, then approve or hold every risk. Changing templates resets the cost to that template's original amount and renews review. All numerical edits renew review. Undo restores the last review state. Originals remain unchanged.
4. Choose a hypothetical loss-coverage target and confirm independence, single occurrence, additive comparable costs and your likelihood assumptions. Apply the reviewed plan. Any held risk or missing confirmation blocks the COMPLETE budget, while retaining a downloadable audit. Do not omit risks by holding them and then treat the result as complete.
5. Inspect the coverage-target reserve, rounded expected-loss baseline, baseline coverage and all possible loss totals. Export JSON (all originals, reviews and distribution), CSV (all reviewed risks including holds), Markdown (reserve and complete risk checklist), or copy Markdown. Every edit invalidates exports until reapplied. Audit reimport intentionally restores originals only; approvals and overridden review values are not restored.

No accounts, sending, booking or purchasing. Closing/reloading loses unsaved content.

## Real AI / browser runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX; learned 384-dimensional normalized mean-pooled embeddings, first 256 tokens. Cosine similarity is not confidence, equivalence, or evidence that an incident is likely. Unrelated text always has a nearest template; negation can confuse the model. Review is mandatory.
- Runtime: `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), CPU WASM single-thread. React + Vite; static GitHub Pages; no backend, API key, paid mandatory service or optional provider.
- First explicit load: about **23 MB weights/tokenizer** from `huggingface.co`, `hf.co` and download CDN, plus **27 MB same-origin WASM**, about 50 MB total. Internet is initially necessary. Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB memory is tested. No WebGPU is required. Physical mobile hardware, low-memory systems and other browser engines remain unverified; phone-width layout was tested with desktop Chrome emulation.
- App code, bundled worker and WASM factory are local. Byte-identical WASM is reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that immutable older app asset in combined deployment. Vite's build plugin rewrites the path to avoid a duplicate 26,861,777-byte binary.
- Worker source and WASM factory/binary are explicitly cached with Cache API; Transformers caches model files. Real fresh-worker inference with ALL network disabled was tested inside an already-open warmed production page. **Offline reload/navigation is not promised.** Storage eviction, private-mode restrictions, model updates or changed deployments may require downloads. Download progress, text-batch progress, cancel, retry, timeout and network errors are visible; no fake fallback is used.

## Privacy and imported text

Content remains local in browser memory on the default and only inference path. Network traffic consists of model/runtime file GETs, not content uploads. No model-host request is made until explicit loading. Cache storage contains runtime/model files, not source plans or reviews. No telemetry, agent credentials or shared keys. Text is inert data to an embedding model, never an instruction to obtain credentials or call tools. Exports are user-initiated local downloads/copies. All fixtures and validation exports are synthetic.

## Deterministic scenario method / honest baseline

Each approved incident is a Bernoulli random variable: cost `c` with user-supplied probability `p`, otherwise zero, at most once. Starting with mass 1 at loss 0, convolve each incident into a sorted loss distribution. The reserve is the smallest attainable total whose cumulative mass meets the chosen target (tolerance 1e-12); probabilities use floating-point arithmetic and total mass is checked within 1e-9. This is finite enumeration, not Monte Carlo or another AI model.

Expected loss is the sum of `p*c`. The simple baseline rounds that expectation UP to whole currency units, then computes its coverage using the same distribution. The UI compares amounts and hypothetical coverage, not accuracy or invented time savings. Literal template-title hits are a separately labeled manual-matching workload baseline, not semantic accuracy.

**Independence is a strong assumption.** Rain can cause transport/power failures together; such correlation invalidates the distribution. Do not use this for coupled incidents, recurring events, variable severities, unknown risk discovery, exchange conversion, taxes or inflation. One incident must not appear twice. Two independent incidents may share a cost template. Zero/certain likelihoods and zero costs are allowed and tested. Whole-unit rounding limits precision; coverage percentages are conditional on the supplied model, not guarantees.

## Bounds / validation / errors

Original input ≤20 KB; JSON audit import ≤1 MB; 1–6 templates, 1–12 risks; unique simple IDs ≤40 characters; title/name ≤80; descriptions ≤400; cost 0–1,000 whole currency units per incident; likelihood 0–100 whole percent; target 50–99. Maximum combined loss ≤12,000, with at most 4,096 combinations before equal-loss merging. Four-text inference batches and 256-token context. No CSV/PDF import; CSV is a risk ledger export, not the distribution.

Parse/schema/numeric guards, finite unit-normalized vector shape validation, worker/error handling and a 180-second timeout prevent fabricated results. Run IDs and worker termination protect input edits, delayed file reads, delayed worker downloads and stale/cancelled messages. Holds block complete calculations. CSV formula-leading strings get a protective apostrophe, including multiline cells; JSON retains exact text. Markdown escapes untrusted content. Exported JSON/CSV/Markdown were independently reopened and checked against current reviews.

## Development and publishing

`npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Base `/daily-app2/20261111-5/`. **Do not run the per-app deploy**: publish only via root `npm run predeploy` and root `npm run deploy` to preserve the collection. See [VALIDATION.md](VALIDATION.md), evidence JSON and publication status for observed checks and limits. Browser checks use the environment's Playwright installation; no browser dependency ships to users.
