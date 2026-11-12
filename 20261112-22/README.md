# Cash Estuary

A local-AI working-capital review desk for small-business controllers. Distinct from invoice aging or cash-flow discounting: this reconciles **opening/closing operating balances**, then estimates cash-conversion days and funding implied by explicit day targets. Synthetic examples only.

## Workflow

1. Paste/import JSON or choose Bookshop year / Workshop year. Set period days, sales and COGS in **integer cents**, and target DSO/DIO/DPO days. Currency is user-defined and must be consistent.
2. Explicitly click **Load AI & match balances**. Real MiniLM inference ranks each rough ledger note against supplied ar/inventory/ap definitions. No numeric value or target is invented.
3. Verify each role, period and balance against source accounts; approve or hold. Review candidate definitions/cosine evidence (not confidence), add notes, correct values, undo edits. Originals remain intact. Every row needs a decision; holds or missing role/period coverage block scenario release. Include verified zero rows where appropriate.
4. Apply the current review. Inspect days, average/target balances, funding contributions and an inventory-only target baseline. This is a supplied-assumption scenario, not realized savings or a forecast.
5. Download complete audit JSON/CSV and Markdown; released scenarios additionally export a three-role CSV. Copy Markdown is supported. Every review edit invalidates applied exports. Reimport JSON restores **original inputs only**, not approvals; run/review afresh.

## Actual AI and static runtime

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Transformers.js 4.3.2, quantized q8 ONNX feature extraction, mean pooling, normalized 384-dimensional vectors, cosine retrieval.
- No API keys, provider credentials, backend, paid services or optional remote path. React + Vite static GitHub Pages app. AI genuinely handles semantic role reconciliation; validation, sums, formulas and exports are deterministic.
- First explicit run requires internet: approximately **23 MB** model/tokenizer from huggingface.co and its redirect/CDN hosts, plus **27 MB** same-origin ONNX runtime (about 50 MB total, estimates, not live transfer measurements). Code/worker/runtime factory are local. The immutable shared WASM at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` must remain deployed.
- WASM CPU, **not WebGPU**; module workers and WebAssembly SIMD required. Current desktop Chrome tested, including inference with GPU disabled. Several hundred MB available RAM recommended. Physical phones and other browser engines untested; responsive browser layouts are tested.
- Progress exposes file downloads and embedded text counts; cancel terminates the worker. A 180-second timeout, worker/model/download errors and retry are explicit; no heuristic or sample fallback.

## Privacy, cache and offline scope

Only public model/runtime files download. User text stays in page/worker memory; no content upload, requests for secrets, automatic persistence or account integration. Imported instructions are data. Worker/runtime use Cache API and model files use Transformers.js browser cache. Downloads can remain cached even after cancellation. Eviction, private mode or disabled caches may force downloads again.

After a successful online run, **fresh-worker inference inside the already-open warmed page** is tested with all browser network disabled. Offline reload/navigation/app-shell startup is **not promised**. Model loading must still be explicitly invoked. Source/run IDs guard delayed file reads, worker fetches and stale messages; edits invalidate prior runs. No user data is committed; tests use synthetic fixtures.

## Schema and bounds

Input: JSON `{name, days, sales, cogs, targets:{dso,dio,dpo}, catalog:[{id,title,description}], records:[{id,text,period,amount}]}`. Catalog must contain exactly `ar`, `inventory`, `ap`; titles/definitions should accurately describe these roles. Opening/closing periods must refer to the same reporting interval.

- days integer 1–366; sales/COGS positive integer cents ≤100 billion; target days finite 0–730.
- 1–24 records, unique safe IDs ≤40 chars; text/definitions ≤400 chars; amounts nonnegative integer cents ≤100 billion. Negative/net balances and foreign currency mixing unsupported.
- Originals ≤24 KB; import/audit envelope ≤1 MB. JSON only; PDF/CSV inputs unsupported. Four-text AI batches, maximum 256 tokens each. Validate vector count, normalized dimensions and finite values before ranking. Invalid model output is rejected.
- Multiple approved rows per role/period sum. Every role needs opening and closing coverage. Presence cannot prove completeness or catch duplicate accounts with different IDs; human reconciliation is mandatory.
- Audit CSV formula-like text receives a leading apostrophe and proper multiline/quote escaping; genuine numeric fields remain numeric. JSON preserves exact originals and reviewed values. No remote actions.

## Transparent calculations

Average = (opening + closing)/2. DSO = average AR / sales × days. DIO = average inventory / COGS × days. DPO = average AP / COGS × days. CCC = DSO + DIO − DPO. Target AR = target DSO × sales/days, inventory = target DIO × COGS/days, AP = target DPO × COGS/days. NWC = AR + inventory − AP. Modeled release = current NWC − target NWC. AP contribution has opposite sign to asset contributions. Negative release means additional funding. Inventory-only baseline changes just inventory; exact-title matching baseline counts notes equal to a supplied title (coverage, not accuracy).

Sales approximates credit sales and COGS approximates credit purchases; these assumptions may be poor. Two-point averages miss seasonality, growth, taxes, deposits and write-offs. Targets do not establish feasibility. Displayed money uses rounded currency units; JSON/CSV retain unrounded floating-point estimates (potential fractional cents), not a journal or payment instruction. AI does not establish recoverability, accounting treatment or target suitability.

## Build/deploy and validation

`npm install`, `npm run dev`, `npm run predeploy`. Per-app deploy script is retained for the contract but **do not invoke it**: combined deployment must use the repository root. Vite base `/daily-app2/20261112-22/`. Preserve shared runtime asset. See [VALIDATION.md](VALIDATION.md) and machine-readable reports for actual observed outcomes and limitations.
