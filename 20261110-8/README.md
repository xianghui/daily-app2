# Milestone Meter

A local-AI earned-value reporting desk for small-project coordinators. Rough progress notes rarely repeat the budget register's exact package names. Real semantic retrieval proposes links; humans verify meaning, dates and cumulative progress before any usable financial snapshot is applied.

## Workflow

1. Load **Garden launch** or **Audio release**, or paste/import JSON matching their schema.
2. Supply a single currency and reporting cutoff `asOf`; each package supplies `budgetCents`, `plannedPct`, and cumulative `actualCents` at that cutoff. Each note has an explicit reported `pct`, `date` and source text. AI never invents progress or money.
3. Explicitly load AI; review ranked similarities and the linked package description. Change the package, percentage/date, annotate and approve, or hold unsupported reports. Every note requires a decision. Undo restores the previous review state.
4. Apply the reviewed snapshot. Latest approved date wins per package, not the sum or average of percentages. Conflicting same-day values stop application. Earlier and held reports remain in the audit. A held latest note can expose an earlier approved report; inspect the displayed latest dates.
5. Inspect PV, EV, actual cost, budget and source notes. Missing package progress means **unassessed**, not zero: aggregate variances, SPI/CPI and EAC are unavailable. EV is only a lower bound in that case.
6. Download JSON (complete originals/evidence/review/results), CSV (every source report and review) or Markdown (package financial register, metrics and all reports). Copy Markdown. Edits invalidate exports until reapplied. Reimporting JSON/audit restores original inputs only, requiring fresh inference and approval.

## Real AI, runtime and licenses

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized `onnx/model_quantized.onnx`; approximately 23 MB weights/tokenizer. The upstream model's `main` revision is not immutable; future upstream changes need revalidation.
- Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT); exact installed dependency versions in package-lock.json. Actual q8 WASM CPU inference, normalized mean-pooled 384-dimensional embeddings, four texts per batch, 256-token context. Cosine similarity ranks note-to-package meaning. No confidence percentages, mocked successes, fallback heuristics or remote providers.
- Vite bundles React, parser and worker. Local `public/runtime/ort-wasm-simd-threaded.asyncify.mjs` is cached explicitly. The byte-identical 26,861,777-byte WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. **Preserve this immutable earlier asset** during root deployment. Asset hashes and byte-equality check are in asset-validation.json.
- First load requires internet, about 50 MB total. Current desktop Chrome/module workers/WebAssembly SIMD tested, no WebGPU needed. Other browsers and physical mobile devices not tested. Narrow Chrome viewports tested. Unsupported workers/WASM, model/download errors and a 180-second timeout show actionable errors without fabricated results.

## Privacy / caching

The default and only inference path is local. Explicit model loading downloads files from huggingface.co and its hf.co CDN plus same-origin runtime assets; user content is not sent. No API keys, telemetry or account integrations. User-supplied text has no tool authority. Data and approvals stay in page memory; exports contain the input, so handle them accordingly.

Cache API retains worker source, model/tokenizer, WASM factory and binary where available. A fresh worker performed real inference with the browser context offline after an online run in the **already-open page**. Offline navigation/reload is **not** promised: no service worker app-shell cache. Cache eviction, private mode, quotas or clearing storage may require redownloads. Cancel terminates the worker. Run identities prevent stale callbacks/file reads/worker downloads overwriting newer inputs.

## Deterministic financial rules

- PV per package = budget × planned percentage / 100, rounded half-up to integer cents.
- EV per assessed package = budget × latest approved cumulative percentage / 100, rounded half-up per package. Total actual cost is supplied, never inferred from notes.
- Complete snapshot only: schedule variance = EV − PV; cost variance = EV − AC; SPI = EV/PV if PV > 0; CPI = EV/AC if AC > 0.
- EAC = BAC × AC / EV if EV and AC > 0, using BigInt rational half-up rounding. This assumes unchanged cost efficiency; it is not AI forecasting. Values exceeding Number.MAX_SAFE_INTEGER are withheld. Undefined ratios remain null, never Infinity.
- SPI is value performance, not time in days. No critical path, earned-schedule estimate, currency conversion, accounting verification, independent completion certification or external posting.

The literal-title baseline counts notes containing a full package title ignoring case; human-confirmed proposed links are separate review counts, not comparable accuracy scores. Completion gaps compare explicit planned versus verified progress, not invented savings.

## Inputs / limits

JSON only, no PDF/Word/CSV ingestion. Original payload ≤40 KB, imported JSON/audit ≤1 MB. 1–12 packages, 1–24 notes, unique nonempty IDs ≤30 characters, name/title ≤100, descriptions/text ≤400, annotations ≤500. Percentages integer 0–100; budgets positive integer cents, actual costs nonnegative, each at most one billion cents. Dates valid ISO YYYY-MM-DD in 2000–2100 and no later than asOf. Supported currencies USD/EUR/GBP/SGD/AUD/CAD, one per batch. No implicit conversion or summing multiple notes. CSV escaping protects leading formula-like strings, including multiline annotations; numeric percentages remain numeric.

## Validation / limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Both production-browser fixtures matched 8/8 intended note identities, with zero literal-title hits; these are tiny synthetic checks, not general accuracy. Negated watering and irrelevant concert reports still received nearest-package proposals—mandatory review/holds are essential. Actual percentage certification is entirely human.

Run `npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but **publish only with the root combined-site deploy**, never this individual deploy command. Local production checks: `python3 serve.py`, then `node browser-test.cjs`, `node network-test.cjs`, `node cancel-download-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`, `python3 asset-test.py`. Test scripts use the workspace-installed Playwright/Chrome. `serve.py` is test infrastructure, not a backend or public inference dependency.
