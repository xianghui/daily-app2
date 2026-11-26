# Recoverable Shelf

A local-AI inventory recovery review desk for small shop month-end preparers. Rough stocktake notes are matched to user-supplied product/condition valuation profiles. Review each link and all per-unit assumptions, then apply a lower-of-cost-and-net-realizable-value worksheet. Unlike prior FIFO, stock-count and FX apps, this workflow exposes **write-downs hidden by cross-lot netting**.

## Workflow

1. Load Maker stocktake or Archive stocktake (synthetic), paste JSON or import `.json`.
2. Enter one currency, profiles with description and per-unit expected sale, remaining completion cost and necessary selling cost; lots with note, quantity and original unit cost.
3. Explicitly click **Load AI & match inventory**. Before this click no model download starts.
4. Inspect ranked profile descriptions and cosine similarities (not confidence). Correct the profile, quantity, cost and estimates; approve or hold every lot. Changing profile resets all three estimates from that profile. Reviewer notes support multiline text; undo restores the previous review. Originals never change.
5. Apply the reviewed valuation. Pending rows block apply; holds block a complete release but allow clearly marked approved-only diagnostics. Any review edit invalidates exports.
6. Download JSON/CSV/Markdown or copy Markdown. Audit reimport restores original source, not approvals or trusted derived values. No inventory, accounting or remote account is changed.

## Contract and limits

`{title,currency,profiles:[{id,description,sale,completion,selling}],requests:[{id,note,quantity,cost}]}`. `src/core.js` contains complete synthetic fixtures. Unique ASCII token IDs (1–40 characters), title ≤200, profile descriptions/lot notes ≤200, review notes ≤500. Currency is three uppercase letters; all values use its minor unit consistently (no conversion or currency-metadata assumption).

2–6 profiles; 1–24 lots. Quantity: whole number 1–1,000,000. Monetary values: **nonnegative integer strings**, ≤12 digits, in minor units **per unit**, not per lot. No exponent/decimal/negative money. Source ≤60,000 JS characters; source files ≤1 MB; audit files ≤8 MB, and restored originals must still obey source limits. Unsupported formats, controls and unpaired surrogates are rejected. Imported markup is displayed as text, never executed; text cannot alter tools/authority or request credentials.

JSON retains complete originals, reviews, evidence, holds and calculations. CSV includes every source lot, reviewed field and calculation; formula-like text gets an apostrophe prefix. Import large integer columns as text/arbitrary-precision numbers to avoid spreadsheet rounding. Markdown is a human handoff, not rendered as imported HTML.

## Real AI and static runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8, Transformers.js 4.3.2 / ONNX Runtime Web. Normalized mean-pooled 384-dimensional embeddings run on single-thread **WASM CPU**. No WebGPU required. AI embeds profile descriptions and stocktake notes, enabling semantic retrieval beyond literal product-name matching. Deterministic cosine ranking proposes a profile; its user-supplied estimates seed the editable review.

No hard-coded inference responses, fake demo fallback, paid service, API key or optional remote integration. AI does **not** invent prices, assess physical condition, extract amounts or determine accounting policy. Nearest matches can be wrong, especially for ambiguity, negation, unrelated text or different conditions of the same product. Human review is mandatory.

Four texts per chunk, at most 30 texts/eight chunks. Validate vector count/dimension, finite values and normalized length before ranking. Shared worker passes `max_length:256`; inspected feature-extraction pipeline does not forward it. Actual upstream tokenizer model_max_length is 512. Character bounds constrain input; unusual text may still truncate. Model revision `main` is not pinned and host updates may affect results.

Shared immutable same-origin runtime (preserve originating apps):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Hashes/sizes: `runtime-provenance.json`. App code/React/runtime are same-origin, not CDN imports. Shared assets avoid adding another ~27 MB WASM copy to the collection. Package/upstream licenses apply.

## Downloads, privacy and devices

First explicit run downloads **about 50 MB** (23 MB model, 27 MB WASM, plus JS/tokenizer). Model/config/tokenizer from Hugging Face and its CDN, runtime from this site. Downloading weights is **not** uploading notes. Inputs remain in browser memory. No telemetry, analytics, account connection or credentials. Progress, cancellation, 180-second timeout and retry are visible. Cancellation terminates worker and pending worker fetch; run IDs and import IDs reject stale responses. Runtime/model failures never silently switch to heuristics.

Cache API stores worker source, WASM factory/binary and model files when available. Tested offline scope: a **fresh worker infers in the same warmed already-open page with network disabled**. Offline startup, reload and navigation are not promised. Storage eviction, denied caches and private browsing can force redownload. Closing page loses unsaved work.

Requires a current browser supporting WebAssembly SIMD, module workers, Cache API and BigInt, with sufficient memory. Tested desktop Chrome with GPU disabled; responsive 320/390px browser layouts do not establish physical-phone performance. Other engines/old phones unverified. On failure restore internet, enable WASM/workers and retry in current desktop Chrome.

## Deterministic worksheet and limitations

Per approved lot, with whole quantity Q and unit cost C, selling price P, completion F and necessary selling S:

- net recovery per unit = max(0, P − F − S)
- carrying = Q × min(C, net recovery)
- write-down = Q × C − carrying

BigInt arithmetic; no rounding. Cost − write-down = carrying for every row and approved totals. Costs above proceeds floor stock at zero and show a warning; disposal obligations are **not** measured. The aggregate shortcut baseline is min(sum approved costs, sum approved floored recoveries). Baseline minus item-level carrying is the write-down hidden by netting. This is a computed discrepancy, not measured time savings or AI accuracy. Repeated lots are not silently merged; the user must ensure distinct physical inventory and appropriate item-level granularity.

Scope: owned merchandise, first write-down review only. Excludes prior write-down reversals, consignment, fair-value assets, commodity/broker exceptions, taxes and disposal liabilities. Estimates are supplied, not verified market prices. Not ledger posting or an accounting policy determination. Hold unsuitable lots.

## Build, test and publish

`npm install`; `npm run predeploy`. React + Vite with base `/daily-app2/20261126-11/`; required per-app deploy script retained, but publish **only from repository root** through combined deploy/.

- `node core-test.mjs`: 576 arithmetic combinations, schema and review guards, exact large products.
- `python3 serve-built.py --port 7791`: actual production build at real base, shared assets.
- `node browser-test.cjs`: real inference on two fixtures, max batch, offline fresh worker, editing, holds, undo, cancellation, JSON/CSV/Markdown downloads, clipboard, keyboard/phone layouts and request audit.
- `node defensive-test.cjs`; `node recovery-test.cjs`: injected defensive faults plus real retry, pending fetch/import and stale run isolation.
- `python3 artifact-test.py [local-|assembled-|public-]`: independent integer and CSV parsing of actual downloaded artifacts.

Tests use environment Playwright and Chrome; APP_URL/PREFIX target local assembled/public builds. Only defensive tests inject workers; successful AI tests use the actual model. See VALIDATION.md for actual outcomes, including known-answer limitations. No universal accuracy claim.
