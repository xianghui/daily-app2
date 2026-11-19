# Charge Terrace

A local-AI interval-reconciliation and discrete battery tariff-planning worksheet for small-site energy analysts. No equipment control, external messages or transactions.

## Workflow

1. Paste/edit source JSON or import `.json` (source or an exported audit). Two entirely synthetic examples are included.
2. Supply a canonical submeter register, equal-length periods, tariff cost units per imported kWh and battery assumptions. Each rough reading contains an alias, zero-based period and measured nonnegative kWh.
3. Explicitly click **Load AI & reconcile inputs**. Real neural MiniLM embeddings compare aliases against the supplied meter descriptions. No canned responses, server inference or deterministic fallback.
4. Inspect cosine-ranked source descriptions (similarity, not confidence), correct identities/periods/values, add multiline notes and approve or hold every row. Edits invalidate applied exports; undo restores review state. Originals are immutable.
5. Apply reviewed plan. Any holds, missing meter/period cells or duplicate cells block release; all records stay in audits. A complete grid must contain exactly one reading per meter per period.
6. Review no-storage versus optimized assumed costs, interval grid imports and stored energy. Download JSON/CSV/Markdown or copy the Markdown worksheet. Exported audits can restore originals, never old approvals.

## Real AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX, normalized mean-pooled 384-dimensional embeddings. Transformers.js 4.3.2 / ONNX Runtime WASM CPU. English short labels are the intended use.
- First explicit run downloads approximately 23 MB model/tokenizer files from Hugging Face/CDN and 27 MB same-origin WASM, plus runtime factory (~53 KB) and worker (~549 KB). Actual network logs record paths without signed CDN tokens. No external model request before loading.
- Requires module workers, WebAssembly SIMD, Cache API and several hundred MB RAM; no WebGPU or API key. Desktop Chrome CPU tested. Physical mobile devices, Safari/Firefox and other operating systems untested.
- Same-origin immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps and paths in combined deployment. Their dependency hashes are audited against served bytes.
- Worker/model/runtime downloads are cached, not user readings. Content remains in browser memory and user-initiated exports/clipboard. No analytics, keys or optional remote provider. Imported instructions are inert model data, never tool authority.
- Fresh-worker inference tested fully offline **in an already-open warmed page**. Offline navigation/reload is not promised. Browser cache eviction requires internet. There is no service worker app-shell promise.
- Explicit progress/cancel, worker termination, 180-second timeout, actionable failures and retry. Run tokens guard worker-source fetches, late inference and file reads. Failure produces no substitute classifications.

## Limits, schema and deterministic planning

JSON fields: `context`, `hoursPerPeriod`, `rates`, `battery`, `meters`, `logs`; consult examples in `src/core.js`. 2–8 meters, 2–12 periods, 1–48 readings. At most 56 model texts in four-text batches; tokenizer model ceiling 512 tokens. Descriptions/context ≤300 characters; source ≤50,000 characters; imported audit envelopes ≤2 MB; review notes ≤1,000 characters. IDs are unique bounded alphanumeric/dash/underscore strings. kWh 0–10,000 per row; rates 0–1,000 supplied cost units/kWh; hours per period 0.1–24. Empty/oversized/unsupported inputs are rejected. Exactly normalized finite 384-dimensional vectors are required.

Battery: integer stored-kWh capacity 1–30; initial 0–capacity; charge/discharge per-period state-change limits 1–30 stored kWh; each conversion efficiency 0.5–1. These are stored-energy change limits, not AC power ratings. Initial and final state must match. Each period changes charge in only one direction, or idles. No grid exports allowed.

For state change Δ, grid imports = load + Δ/ηc when charging, or load + Δ×ηd when discharging (Δ negative). A finite-state dynamic program enumerates feasible integer end states and reconstructs the minimum total import cost. Runtime is bounded by 12×31×31 transitions. The no-storage baseline is the same reviewed interval load × tariff with idle battery throughout; it is always feasible. Summary costs and energy balances are computed from the current reviewed plan, not defaults. It is an exact optimum **only on the supplied integer stored-kWh grid**, not a continuous dispatch optimum.

Costs are modeled assumptions, not measured savings, forecasts or ROI. Excludes degradation, self-discharge, demand charges, fixed fees, uncertain loads, solar/export generation and other equipment constraints. No installation, safety or investment certification. Similar aliases, unrelated descriptions and negation can produce wrong nearest matches: human review is mandatory.

## Artifacts

- JSON `charge-terrace/v1`: complete original inputs, every review/evidence/hold, issues, interval plans and calculated summary.
- CSV: `kind=reading` preserves every original/review; `kind=schedule` contains period imports, state changes and costs. Quoted commas/newlines and spreadsheet-formula-like text are escaped; genuine signed numeric energy deltas remain numeric.
- Markdown: source-linked worksheet, full original/review record list, canonical register, assumptions, schedule and limitations. No hidden external actions.

## Development / deployment

Scaffold into an empty folder before saving audit files: create-vite cancels in a nonempty target.

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261119-17/`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages is installed. **Do not run the individual deploy**: use root `npm run predeploy` / `npm run deploy` to preserve the collection.

See `VALIDATION.md` and machine-readable evidence. Production-bundle browser scripts use local installed Playwright + Chrome, never mocked successful inference. Fault injection is limited to failure/race checks. `node core-test.mjs` independently enumerates state sequences; `python3 artifact-test.py` parses actual browser downloads.
