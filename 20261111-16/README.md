# Fiber Balance

A local-AI, human-reviewed recycled-fiber blend purchasing worksheet for mill planners. This is not a manufacturing recipe, recycled-content certification or procurement execution tool.

## Workflow

1. Paste/import a JSON grade catalog and stock lots, or try **Cotton mill** / **Paper mill** (entirely synthetic).
2. Explicitly click **Load AI & match grades**. A real local MiniLM neural model compares lot descriptions with your catalog descriptions. It reduces manual semantic lookup; it does not measure any material property.
3. Inspect source snippets and cosine alternatives. Review grade, available kg, cents/kg, recycled percentage and notes for every lot. Grade edits reset percentage to the selected catalog value. Approve verified facts or hold unsuitable stock; undo edits. No implied acceptance.
4. Set a whole-kg mass and integer recycled-content target. Apply to find the minimum-cost feasible blend from approved lots. Exact bounded dynamic programming enforces mass equality, per-lot stocks and recycled mass. A cheapest-price-first baseline reports whether it actually meets the same target. No invented time/quality/savings claims.
5. Download reviewed JSON, CSV or Markdown; copy the worksheet. Every review/target edit invalidates exports. JSON preserves original inputs plus all reviews, holds, settings and allocations. Reimport restores originals only and requires fresh review.

Assumptions: one independently verified compatible material family, one currency/planning period; homogeneous lots, linear mass balance, whole-kg allocations, no process loss, yield or shipping fees. User-supplied integer recycled percentages are planning inputs, not assay results. Held lots cannot be allocated. Infeasible output explicitly has `optimized: null`; zero CSV quantities in that state are NOT a plan. Cost is minimum only within these discrete assumptions. No supplier contact, orders, account changes or stock mutations.

## Real AI, source and runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, 384-dimensional normalized mean-pooled embeddings, cosine nearest-grade comparison.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU with one thread. No WebGPU or API key required. No remote inference integration.
- First download approximately **50 MB**: ~23 MB weights/tokenizer/config from huggingface.co and its `hf.co` CDN (`us.aws.cdn.hf.co` observed), ~27 MB same-origin WASM/runtime. App and module worker are bundled locally. Runtime factory is under `runtime/`.
- The immutable byte-identical WASM at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` is reused to keep the combined collection below hosting size limits. Preserve that older app asset. Vite rewrites the WASM URL during build; asset hashes are verified on publication.
- Current desktop Chrome with WebAssembly SIMD, module workers, Cache API and several hundred MB free memory tested. Other browsers/physical phones are unverified; no promise of universal low-end mobile support.
- Model/worker/runtime loading progress, cancel/termination, retry, model/network errors, malformed vectors, worker errors and 180-second timeouts are handled. There is no fake/deterministic model fallback.
- Runtime and worker explicitly bridge Cache API into blob URLs. Transformers.js caches model files. **Tested offline scope:** new-worker real inference after a successful online run within the already-open page with all networking disabled. Offline navigation/reload is NOT promised. Storage eviction/private browsing may require a new download.

## Privacy and limits

Default inference runs on-device. Content is not uploaded; only model/runtime GET downloads occur after explicit loading. No provider credentials, telemetry, external execution or secrets. Inputs stay in React memory; downloads exist only where the user saves them. Download caches contain public runtime/model files, not stock notes. Imported instructions are data; the embedding model has no tool authority.

Limits: 2–6 grades, 1–12 lots; unique IDs within each list; 400 characters per model description; 256 tokens, batches of four; target 1–40 whole kg; each stock 0–40 whole kg; 0–100 integer recycled percentage; 0–1,000,000 cents/kg; source JSON ≤18,000 characters; imported JSON ≤1 MB. Reviews must be approve/hold with valid catalog links and bounded facts before application. Run tokens guard delayed file reads, worker fetches and inference responses; cancel/input changes terminate workers and invalidate exports.

MiniLM is English-focused semantic retrieval, not material identification or factual entailment. Unknown or instruction-like text still gets a nearest grade; hold it. Negation, mixed languages and overlapping grade descriptions may be wrong. Recycled properties, material compatibility and legal certification must be verified independently. Similarities are not confidence. AI/review agreement and first-grade baseline agreement are descriptive, not ground-truth accuracy.

## Formats

Input:

```json
{"name":"One period","targetKg":10,"minRecycled":60,"grades":[{"id":"recovered","title":"Recovered cotton","description":"Recycled cotton from used clothing.","recycled":100},{"id":"virgin","title":"Virgin cotton","description":"New cotton harvested from plants.","recycled":0}],"records":[{"id":"lot1","text":"Reclaimed fibers from old cotton garments","kg":10,"centsPerKg":400}]}
```

JSON schema marker `fiber-balance/v1`: `originalInput`, `settings`, `records` (every original row plus current review), `optimized` (nullable), `baseline`, `metrics`. JSON is the lossless audit format. CSV: id, source, proposed, grade, decision, kg, centsPerKg, recycled, allocatedKg, note. RFC-style quoted cells/newlines; formula-like text receives a leading apostrophe. Markdown includes every source lot and reviewed allocation. No CSV/PDF/Excel import; no certification/export to external accounts.

## Build and publish

```sh
npm install
npm run predeploy
```

React + Vite; base `/daily-app2/20261111-16/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained as required, but **publish only through the root combined workflow**, never individual deploy. See the root README. Test helpers use local Chrome/Playwright and synthetic fixtures; `serve.py` serves production `dist` with real base paths plus the collection's shared WASM.

See [VALIDATION.md](VALIDATION.md) and JSON test reports for actual outcomes and untested scope. App build success alone is not an AI validation.
