# Barrier Budget

An accessibility coordinator's **reported barrier → AI remedy proposal → mandatory review → budget-fit remediation sprint** utility. It does not scan websites, certify standards compliance, modify sites, or diagnose users. Distinct from generic ticket routing: reports share fixed-cost remediation packages and an exact subset optimizer allocates a reviewed hours budget.

## Use

1. Load a synthetic example or paste/import JSON (`budget`, `remedies`, `reports`). Remedies have unique `id`, `description`, integer `hours` 1–40; reports have unique `id`, `text`, integer `impact` 1–5. Budget is integer hours 1–80. Edit the playbook to reflect actual fixes and costs.
2. Explicitly select **Load AI & match remedies**. Wait for download/batch progress; cancel terminates the worker. Retry starts a fresh worker. No model is loaded before this action.
3. Inspect cosine-ranked source remedy descriptions. Correct every remedy/impact, approve or hold each report, and write manual verification tests and notes. Undo reverts review edits. A changed remedy/impact needs renewed approval. No automatic acceptance.
4. Adjust budget and per-package cost, then **Apply reviewed plan**. Exhaustive enumeration chooses independent remedy packages maximizing approved report impact points; ties favor fewer hours. Each shared remedy costs once. Holds are excluded; approved-but-unselected reports are deferred. Missing acceptance tests remain counted as unresolved.
5. Download JSON, spreadsheet-safe CSV, Markdown or copy Markdown. Every report survives, including held/deferred records. Every edit invalidates the applied/export snapshot. JSON includes `originalInput` (loaded source settings), `input` (current budget/costs), complete reviewed reports/evidence and selected/deferred packages. Reimport of an audit uses its `input`, deliberately requiring fresh inference/review. CSV preserves original and reviewed ratings and source text, escaping formula-like text. Markdown includes work packages and the complete report audit. Reviews remain in memory only; save exports before leaving.

## What AI actually does

Real `Xenova/all-MiniLM-L6-v2` quantized q8 ONNX sentence embeddings, 384 dimensions, normalized mean pooling, through **@huggingface/transformers 4.3.2** and its bundled **ONNX Runtime Web** WASM CPU. Model: https://huggingface.co/Xenova/all-MiniLM-L6-v2 (Apache-2.0; upstream sentence-transformers/all-MiniLM-L6-v2). Transformers.js Apache-2.0; ONNX Runtime MIT. React/Vite UI, Papa Parse CSV.

A local worker embeds descriptions and reports in batches of four with 256-token truncation. Main-thread schema validation requires the exact vector count, dimension and finite values before cosine ranking. This semantic retrieval can relate differently worded reports and remedies without a keyword dictionary; it does **not** generate remediation instructions or verify suitability. Always-nearest matching can be wrong, especially on negation, unrelated content, overlapping playbooks and compound barriers. The two tiny fixtures are not an accuracy estimate. Imported instructions cannot alter authority: text only enters feature extraction, never tools, HTML or credentials.

The budget optimization, fixed-cost aggregation, baseline comparison, review guards, conservation checks and exports are deterministic. The input-order first-fit baseline uses the same approved reports and estimates. Covered impact points are ordinal planning scores, not distinct-user counts, clinical severity, accessibility gains or measured productivity. Multiple reports may describe one barrier and inflate points. Costs assume a single package fixes all linked reports; verify/split the playbook when that is false. Dependencies, deadlines, regulatory duties, mandatory fixes and partial completion are not modeled. Do not defer mandatory remediation solely because this optimizer says so.

## Static hosting, privacy and requirements

No account, API key, external inference provider or server. No optional remote path exists. User content stays in browser memory/local worker; downloaded runtime/model files, not content, enter Cache API. Network audit observed GET-only asset traffic with no content URLs/bodies. No private fixtures or credentials are included.

First load: roughly **23 MB model + 27 MB WASM runtime**, plus ~0.9 MB application/runtime JS. Internet needed for Hugging Face/model CDN files and same-origin application runtime assets. All UI, worker and WASM factory code is bundled locally. The exact immutable binary is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that earlier app in combined deployment. `asset-audit.json` records matching local SHA-256. Caching needs browser storage permission/space; clearing/evicting caches requires internet again. Cancel may leave a completed file in cache but never presents partial results as AI output.

Current WASM-capable Chrome/Edge/Firefox/Safari with workers, SIMD and enough memory is required. WASM CPU is the default, not an untested WebGPU fallback. Tested on desktop Chrome, including 320/390px viewports; real mobile hardware and other browsers untested. Small phones may lack memory or be slow. Maximum 2–8 remedies, 1–40 reports, 500 characters per text, JSON under 100 KB, 48 total texts, 180-second timeout. English intended. JSON only; malformed, empty, oversized and unsupported files produce errors without fabricated AI output.

After one successful run, **fresh-worker inference on the already-open page** passed with all network blocked. Worker source, WASM factory/binary and model files are explicitly cached. Offline reload/app-shell navigation is **not promised**. Browser storage eviction/private mode can break offline reuse. Network/runtime/worker/schema failures surface actionable errors and allow retry. Run IDs prevent late fetch/file/worker results from replacing current input. Inputs and edits invalidate exports.

## Development and publication

`npm install`; `npm run dev`; `npm run predeploy` builds production. Base `/daily-app2/20261108-20/`. Required per-app `predeploy` and `deploy` scripts remain; **publish the collection through the parent root** `npm run predeploy`, `npm run deploy`, never the individual deploy command.

`python3 serve-test.py` serves the production build on port 6260, including shared binary. Run `node core-test.mjs`, `node browser-test.cjs`, `node network-test.cjs`, `node boundary-test.cjs`, `python3 artifact-test.py`, `python3 audit-assets.py`. Browser scripts use the workspace-installed Playwright and local Chrome. Fault injection is limited to defensive failure checks; all successful inference uses the real model. See [VALIDATION.md](VALIDATION.md) and machine-readable artifacts for observed results and publication status.
