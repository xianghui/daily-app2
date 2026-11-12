# Component Tide

Local AI-assisted single-period bill-of-materials replenishment for workshop coordinators and community packing teams. Unlike earlier catalog reconciliation, component conversion and stock allocation utilities, this app **nets finished and shared intermediate assembly stock before multi-level explosion**, so already-packed components are not bought twice.

## Workflow

1. Load either synthetic example, paste source JSON or import `.json`. Edit catalog descriptions, whole-unit stock, child `parts` and leaf purchase `cap` constraints. Each request has an ID, informal note, quantity and owner.
2. Explicitly choose **Load AI & match requests**. AI proposes a catalog identity from semantic meaning. Inspect original notes and ranked descriptions; similarity is not confidence.
3. Correct identity, quantity and owner, add a multiline follow-up and approve or hold **every** request. Undo restores the last review edit. Originals remain separate and unchanged. Editing input cancels work; editing reviews invalidates exports.
4. Apply reviewed requests. The worksheet combines demand and topologically nets each node once, after all parents contribute. Only unmet assemblies generate child needs. Leaves become purchase requirements; an over-cap result is clearly marked **not feasible**. No inventory is changed and nothing is ordered.
5. Export complete JSON audit, complete request CSV, every-node Plan CSV or Markdown checklist; clipboard copies the current applied worksheet. Audit reimport restores original inputs only and requires new inference/review. Holds survive in audit/request CSV/Markdown but do not contribute demand.

Source schema: `{catalog:[{id,label,description,stock,cap,parts:[{id,qty}]}],records:[{id,note,qty,owner}]}`. See `src/core.js` for two entirely synthetic fixtures. Every catalog node, including unused nodes, appears in the plan.

## Real AI, runtime and source

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; open-weight 384-dimensional sentence embeddings. q8 ONNX weights. The upstream default revision is used (not pinned), so future host changes may affect results.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web WASM CPU. Mean pooling and normalization; four texts per inference batch, 256 tokens/text. Descriptions and request notes are bounded to 300 characters.
- Actual model inference embeds supplied catalog descriptions and request notes, then cosine ranking proposes identity. No regex classifier, fixed example answer or fake fallback. Vector count, finite values, dimension and normalization are validated before recommendations appear.
- This is not a language generator: it does not extract counts, infer components, understand stock reservations or reject unknown requests reliably. In testing, unrelated instruction-like text matched `brush` and stayed pending. Review is mandatory.
- Before loading the UI discloses approximately 50 MB initial network transfer: ~23 MB weights/tokenizer from Hugging Face and CDN, ~27 MB same-origin WASM. Code, module factory and worker are bundled locally. Same-origin WASM is reused byte-identically from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; the root deployment must preserve that asset.

## Privacy, network and offline scope

No API keys, remote inference integration, analytics or backend. Content exists only in page/worker memory until the user copies/downloads artifacts. Requests and vectors never upload. Downloading static model weights is not uploading user data. Imports cannot change authority or request credentials. No real documents or credentials are included.

Internet is required for the first run. Transformers.js caches model files; worker source and local WASM module/binary are explicitly stored in Cache API. Fresh-worker **real inference was tested with all network blocked inside an already-open warmed page**. Offline navigation/reload/startup is not supported or claimed. Browser storage eviction/private mode may require another download. Clearing site storage removes cached files. The page always terminates its worker on cancellation/success/input change, and retry is explicit.

## Devices, limits and errors

Current browser with WebAssembly SIMD, module workers, Cache API (for offline use) and several hundred MB RAM recommended. Tested: desktop Chrome headless with GPU disabled, real CPU inference, desktop and emulated 390/320 px phone layouts. Physical phones, Firefox/Safari and low-memory devices untested. No WebGPU requirement; WASM is the default, not an untested fallback.

2–12 catalog nodes, ≤8 unique child links/node, integer link quantities 1–20; no cycles, missing references or duplicate IDs. 1–40 requests, quantity 1–1000. Stock/cap 0–10000 whole units; source ≤40 KB, audit import ≤300 KB; IDs ≤40, labels/owners ≤80, descriptions/notes ≤300 characters. Safe explosion limit 10^12 units per node. Imports support only JSON. Invalid schema, empty/oversized inputs, network failure, missing workers/WASM, malformed model output, worker failures and 180-second timeouts show actionable errors without suggestions. Cancel kills downloads/processing; run identity guards delayed worker fetches, file reads and stale messages.

## Deterministic planning assumptions

All parents contribute before a node is netted. Gross = direct reviewed demand + sum(parent unmet quantity × link quantity). Used stock = min(gross, usable stock); net = gross − used. All unmet assemblies are planned for assembly and all unmet leaves for purchase; assembly `cap` values are ignored and explicitly labeled. Leaf caps only check feasibility, not optimize selection. Any request may directly ask for an intermediate component.

Stock at an assembly already contains its parts. Loose part stock must **exclude** contents of stocked assemblies. All stock is assumed usable, unreserved and exclusive to this one-period plan. There are no lead times, assembly capacities, dates, partial quantities, scrap, substitutes, disassembly, live stock control or order placement. Validate assumptions externally.

Baseline: explode all approved assemblies while ignoring finished/intermediate stock, then subtract leaf stock. Compare quantities **separately per leaf**, never sum unlike items or claim cost/time savings. The model affects identities and thus relevant demand; arithmetic after review is deterministic. Purchase caps can fail and holds can leave demand unplanned.

## Validation and build

`npm run predeploy` builds; per-app `deploy: gh-pages -d dist` is retained for contract compatibility but **do not invoke it**: publish only from repository root with combined `deploy/`. Vite base `/daily-app2/20261113-6/`.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. `node core-test.mjs` tests independent arithmetic; browser suites use installed workspace Playwright/Chrome and `python3 serve.py` for the production bundle. `python3 artifact-test.py` independently parses actual downloaded artifacts. Published verification must rerun real model and workflow checks against the public URL, not rely on a branch push.
