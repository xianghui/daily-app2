# Price Lens

A local-AI merchandising worksheet for repeated sales observations. Distinct from demand forecasting and carton-cost tools: it reconciles product aliases, normalizes time exposure, fits descriptive log-demand curves and compares **bounded price-grid contribution scenarios** against a supplied current-price baseline. It neither connects to a store nor changes prices.

## Workflow

1. Choose Studio shop or Workshop tickets (entirely synthetic), paste source JSON, or import `.json` (≤2 MB). Edit products’ `costCents`, `currentCents`, `stepCents` and sales observations. Use a single currency and comparable product units. All prices/costs are integer cents.
2. Explicitly load the real model. Review every suggested product against the original description and cosine-ranked candidates. Correcting a product rejects its AI proposal. Verify price, units and exposure days; add multiline owner/notes, approve or hold. Undo restores review edits. Original inputs remain unchanged.
3. Apply reviews. Every row needs an explicit decision. Held rows block their product’s whole-log model, rather than quietly excluding inconvenient evidence. Products without enough observations also stay blocked.
4. Compare model estimates and current-price baseline. Export complete JSON (originals, reviews, AI evidence and fit outputs), row-level CSV or Markdown scenario/follow-up checklist; copy Markdown. Exports are disabled again after any review edit. Reimport an audit restores **original input only**, never old approvals or edited review values.

## Actual AI / licenses / data flow

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized `onnx/model_quantized.onnx`, approximately 23 MB including tokenizers/configuration. Mean-pooled normalized 384-dimensional embeddings rank each observation against user-supplied product descriptions. Similarity is **not confidence**, identity proof or an out-of-domain detector.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread, four texts per batch, 256-token maximum. No WebGPU dependency; actual inference tested with GPU disabled. React/Vite and Papa Parse are locally bundled. Runtime factory is under `public/runtime/` (~47 KB); WASM is ~26.9 MB.
- The byte-identical WASM is shared with the preserved `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Root combined publishing preserves that asset. An isolated deploy of this app is not supported by the collection contract.
- First run requires internet to this site and Hugging Face/CDN (`huggingface.co`, `hf.co` / download CDN). No model-host download begins before explicit loading. Only static files download. **User content stays in the browser worker**; no remote inference, credentials, analytics, uploads or content persistence. Imported instructions are just strings, never tool authority.
- Model/runtime/worker files use browser Cache API where available. Tested scope: after one successful online run, the **already-open warmed page** starts a new worker and performs real inference with all network offline. Offline navigation/reload is not promised. Browser eviction/private-mode storage restrictions can require another download.
- Current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free memory is tested. Narrow phone viewport is tested, not a physical phone. Other browsers/hardware unverified. Failures give an error and retry; no fake AI fallback.

## Deterministic scenario model

For each reviewed product, ordinary least squares fits `log(units / days) = a + b * log(priceCents / 100)`, equal observation weights. At least three positive-sales rows at three distinct prices are required. A zero-sales row is preserved and blocks the log fit. Slope ≥ −0.01 blocks recommendations. Log-space R² measures only in-sample fit; it is not causal evidence or forecast accuracy. No invented confidence percentages.

Scan integer-cent candidates from min observed price to max, in `stepCents` increments, additionally including the upper endpoint. Choose the lowest-priced maximum of `(price − variable unit cost) × predicted daily units`. Ties use numerical tolerance 1e−9 currency/day. Current price must lie in the same observed range. Boundaries are explicitly flagged; no extrapolation. Baseline and candidate use the same curve. Estimates exclude fixed costs, taxes, stock caps and competitor response; negative contributions are not hidden. Different observations have equal weight even when exposure durations differ.

This is a descriptive planning tool. Verify equivalent products, availability, season/channel, marketing and source independence. Days normalize exposure time, not stockouts or confounding. Historical prices may respond to demand; the fitted slope is not necessarily an intervention effect. Three points are a minimum, not a statistical sufficiency claim. Collect controlled holdout evidence before decisions.

## Limits / defensive behavior

1–6 products, 1–24 observations; unique IDs, nonempty descriptions ≤300 characters, source ≤30,000 characters, audit import ≤2 MB. Cents 1–100,000 (cost 0–100,000), units 0–1,000,000, days 0.01–366, price step 1–10,000 cents; ≤10,001 candidates per product. Embeddings are validated for count, finite 384 dimensions and normalization. Cancellation terminates the worker; generation tokens guard worker messages, worker fetches and asynchronous file reads. Source changes invalidate prior reviews/results. Download/load/model failures, unsupported worker/WASM, malformed embeddings and a 180-second timeout expose no fabricated matches.

## Development and verification

```sh
npm install
npm run predeploy
```

Vite base `/daily-app2/20261114-5/`. Required per-app `predeploy`/`deploy` remain, but **publish only from the repository root** using the combined deploy workflow. Per-app deployment would replace the collection.

See [VALIDATION.md](VALIDATION.md) and checked-in test scripts/reports. Run browser tests against the production bundle served under its real base, with shared WASM available. `APP_URL` changes the browser target, `REPORT` the report file. Browser scripts use the workspace Playwright installation and installed Chrome. `node core-test.mjs` and `python3 artifact-test.py` validate deterministic results/artifacts. Only synthetic fixtures and content are committed.
