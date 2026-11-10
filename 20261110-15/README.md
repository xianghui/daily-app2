# Demand Loom

A weekly replenishment worksheet for small stockroom/studio coordinators. Rough demand descriptions often use different language from the stock catalog. **Real local MiniLM embeddings** propose item identities; people verify every item, quantity and week. Deterministic rolling backtests compare two small forecasting rules, then produce a one-week replenishment worksheet. No chat, fabricated forecast or external orders.

## Run and use

`npm install`, `npm run dev`; production `npm run predeploy`. Vite base `/daily-app2/20261110-15/`. The per-app deploy script is required by the collection but **publish only through the root combined workflow**, never this app's deploy.

1. Try Studio supplies or Community café (fully synthetic), paste JSON or import a `.json` input/audit.
2. Define 2–8 items (`id`, `title`, `description`, integer `onHand`, `inbound`), 4–12 consecutive weekly start dates (`weeks`) and 1–64 notes (`id`, `text`, listed `week`, integer `quantity`). Dates 1900–2099. Each item uses its own consistent stock unit. Inbound is stock arriving before next week. Quantities are **demand**, not revenue or stockout-censored sales; normalize pack sizes and deduplicate upstream. Notes are additive, not deduplicated by the app.
3. Explicitly load AI after reading the first-download notice. Review the proposed item definition and source; inspect all cosine similarities. Correct the item/week/quantity, optionally explain, and approve or hold each record. No bulk auto-approval. Review edits can be undone; originals remain intact.
4. Confirm the dataset covers **every** item and week. Only then do absent cells represent zero. This is a human declaration, not something AI can prove. Holds block all forecasts; resolve ambiguity in the source and rerun. An audit can still export while forecasts are blocked.
5. Apply the reviewed worksheet. Inspect weekly aggregates, matched-horizon backtest errors, chosen rules, next-week targets and stock deductions. Changing reviews or coverage invalidates exports.
6. Download complete JSON/CSV or Markdown; copy the Markdown worksheet. CSV preserves one row per source and repeats the applicable replenishment result. JSON includes original input, every reviewed/held source, candidate evidence, weekly series, individual backtest predictions and planning results. Formula-like text is escaped in CSV; numeric quantities remain numeric. Audit reimport restores **original inputs only**, not approvals. Export before closing: content and reviews live only in memory.

## What is AI; what is not

Xenova/all-MiniLM-L6-v2, Apache-2.0, source https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.3.2, ONNX Runtime Web WASM CPU q8. Mean-pooled normalized 384-dimensional sentence embeddings rank note descriptions against supplied item titles and definitions. This materially bridges reworded descriptions that literal title matching misses. Cosine is **similarity, not confidence**. The model receives text as data; it has no tools or credential authority. It does not infer quantities, dates, pack conversions, stock or forecasts.

All later steps are deterministic: schema validation, reviewed item/week sums, rolling-origin one-step absolute errors for naive (last week) and MA3 (mean of prior three weeks) on the identical periods starting week four. Smaller total absolute error wins; exact ties select naive. Exact thirds are retained for comparison to avoid floating tie artifacts. Next-week target is the ceiling of that rule's forecast. Replenishment = max(0, target − onHand − inbound). Every item is separate; quantities across items are only row-conservation checks, not a comparable business total.

The backtest uses only earlier observations for each prediction, but the model choice uses the same retrospective evaluation window. It is exploratory in-sample **selection**, not an unbiased future accuracy estimate. There are only 1–9 evaluated weeks. No safety stock, seasonal model, lead-time planning, capacity optimization, purchase rounding, price forecasts or service-level guarantees. Confirm requirements outside this worksheet. No order is transmitted.

## Download, devices and privacy

Before explicit load there are no model-host requests. First use needs internet: approximately 23 MB tokenizer/config/quantized weights from `huggingface.co` and its `hf.co` download CDN, plus approximately 27 MB same-origin WASM. Bundled JS, module worker and WASM factory are local collection assets. Byte-identical WASM is reused from immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that earlier app and asset during deployment. `asset-validation.json` records its hash and app build size.

Current desktop Chrome is tested, using module workers, WebAssembly SIMD and Cache API. WebGPU is not required; WASM CPU is the default, not an untested fallback. Other browsers and physical mobile hardware are unverified. Responsive 320/390px layouts are tested in desktop Chrome emulation. Expect substantial RAM use and slower devices; there is no universal phone support claim.

Model files use Transformers.js Cache API; worker source and runtime factory/binary are explicitly cached. A **fresh worker inside an already-open cached page** can infer with all networking disabled, tested on production bundles. Offline reload/startup is not promised. Storage eviction, private mode, origin changes or model updates can require another download. UI shows download file/progress, batch progress and cancel/retry; cancel terminates workers. Timeout is 180 seconds. Network/runtime failures produce errors, never fake AI. Defaults use no API keys, provider credentials or remote inference. Weights download to the device; user content is not sent off-device. No analytics or optional provider integration exists. No user content persists to local storage/IndexedDB; model cache contains public files only.

## Bounds and limitations

Original payload ≤40 KB; import/audit ≤1 MB; IDs ≤30 chars, titles/name ≤100, descriptions/notes ≤400. Integers 0–1000000 for units/stock. Four texts per inference batch and first 256 tokens. Unsupported PDF/CSV input, malformed schemas, unknown weeks, nonconsecutive dates, negative/fractional values and oversized data fail visibly. Returned vector count/dimension/unit norms/finite values are checked before proposals. Run identities prevent late cancelled worker/file responses from replacing newer input. Worker construction/error, missing WASM, timeout, download failure and malformed results are surfaced. Review all proposals: the model forces a nearest candidate even for negated/unrelated text. Both challenge cases demonstrate that weakness; holds preserve them and block forecasting.

See [VALIDATION.md](VALIDATION.md) and committed test scripts/results for observed checks. These tiny fixtures are not a general accuracy benchmark. All examples are synthetic.
