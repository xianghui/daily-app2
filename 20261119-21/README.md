# Slot Orchard

A local-AI storage slotting worksheet for small workshops and shared supply rooms. Informal pick-log names obscure which item is actually requested. Real neural MiniLM embeddings reconcile each observation with a supplied item register; humans verify every identity/count before deterministic minimum-distance slot assignment. Distinct from inventory allocation, transport flow and walking-route planning: whole item containers are assigned one-to-one to fixed storage slots, with mass limits and immutable items.

## Workflow and formats

1. Choose **Workshop picks** or **Art room picks**, paste JSON or import `.json` (source or exported audit).
2. Supply `context`, `items:[{id,description,massKg,currentSlot,fixed}]`, equally many `slots:[{id,distanceM,capacityKg}]`, and `logs:[{id,note,picks}]`. Edit source to set assumptions and constraints. Mass is the entire container, not per unit; distances are one-way from a common origin. Counts cover a single comparable observation period.
3. Explicitly load AI. Inspect neural candidate descriptions/cosines (not confidence), correct item and count, add review notes, then individually approve or hold every row. Undo restores review changes. AI only suggests identities, not readings or constraints.
4. Apply the reviewed snapshot. Pending reviews fail; holds or missing item coverage block planning. Supply explicit zero rows for unused items. A subset dynamic program finds the minimum weighted-distance one-to-one layout under mass/fixed constraints, tie-breaking by fewer moved containers. Infeasible layouts produce an audit with no layout. All original logs are preserved.
5. Download complete JSON, reviewed audit CSV, proposed Layout CSV or Markdown; copy the worksheet. Exports reflect current applied reviews; edits invalidate snapshots. JSON reimport restores originals only and renews inference/approval. CSV apostrophe-protects formula-leading text, including multiline strings. JSON is lossless. Layout CSV is a destination layout, **not a move order**; all item totals, origins, destinations and mass checks are included.

## Real AI and dependencies

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Cosine retrieval ranks the full supplied item register independently for each log note.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU. No WebGPU requirement, API key or remote-provider integration.
- **≈23 MB model + 27 MB CPU runtime**, plus app/worker code; internet on first load. Hugging Face and its redirected CDN serve model files. Model uses upstream main revision, not a pinned revision; upstream changes/cache eviction can alter download requirements or suggestions.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating apps/paths. Worker protocol `{id,texts}` → progress/batch/result-vectors/error; exact assets/hashes are recorded in runtime/public audits.
- Four-text inference chunks. Source worker supplies max_length=256, but FeatureExtractionPipeline does not forward it. Actual tokenizer ceiling is **512**, confirmed against tokenizer config; no 256-token guarantee. Each log note and description is bounded to 300 characters.
- Requires module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. Desktop Chrome on macOS CPU tested. Physical phones, other browsers and low-memory performance unverified; phone-width emulation is layout validation only.

## Privacy, cache and failures

Nothing from the model host loads before the explicit AI button. Content stays in browser memory and local worker messages. Weight downloads are not content uploads. No analytics, accounts, cookies-based integrations, provider credentials or external actions. Imported text is embedded as inert data, never executed as instructions. All fixtures are synthetic.

Worker source, WASM factory and binary are explicitly Cache-API cached; model files use runtime browser caching. **Fresh-worker inference offline in an already-open warmed page** is tested with all network disabled. Offline navigation/reload/app-shell startup is not promised. Cache eviction requires another online load. Notes are not persisted automatically; export before closing.

Loading/file progress, chunk counts, cancel/retry, 180-second timeout and actionable runtime/network errors are visible. Worker termination and monotonically changing run IDs guard late model results, worker fetches and asynchronous file reads. Bad vector count/dimension, nonfinite or unnormalized output fails closed. No deterministic sample/fake model fallback.

## Bounds and deterministic method

2–8 items; equally many uniquely occupied slots; 1–24 log records, at most 32 model texts. IDs 1–40 ASCII alphanumeric/underscore/hyphen. Descriptions/notes/context 1–300 characters, review notes ≤1,000. Source ≤50,000 characters; imported envelope ≤2 MB. Whole `massKg`, `capacityKg`, `distanceM` 1–1,000; picks 0–100,000. Each current slot exists and is unique; `fixed` is boolean.

For item i and slot j, cost = 2 × sum(reviewed picks for i) × distanceM[j]. Subset DP over occupied-slot masks assigns each item once, forbids overloaded slots and relocation of fixed items. Among equal-cost plans, prefer fewer moved items; remaining ties use deterministic input iteration. O(n²2ⁿ), n≤8. Baseline uses current slots and the **same reviewed counts**; report baseline mass violations explicitly, because an infeasible baseline is not a comparable feasible solution. Demand and all originals remain conserved. No fictitious time/accuracy/confidence claims.

These are **modeled meters for independent single-item round trips**, not observed travel savings. Multi-item orders/routes, congestion, handling time, relocation cost, fit and compatibility are excluded. One container per slot; no splitting. Swaps need temporary storage; no movement schedule is generated. User-provided capacity is not certified structural/handling safety. Verify actual fit and working procedures independently. No warehouse connection, inventory change, dispatch or uploads.

## Quality and limits

AI similarity is not identity; unrelated/negated descriptions can still receive a nearest item. Human review and holds are essential. Tiny synthetic known-answer fixtures test only their supplied descriptions, not general accuracy. Exact-text lookup is a simple identity baseline, not the solver baseline. See VALIDATION.md and reports for observed results, known limitations and untested devices.

React + Vite base `/daily-app2/20261119-21/`. `npm run predeploy` builds the app. Required per-app gh-pages scripts exist, but publish **only through root** `npm run predeploy` and root `npm run deploy` to preserve the collection.
