# Rainstore Desk

A local AI-assisted **roof-survey reconciliation → human review → daily rainwater balance → capacity worksheet** for community-site coordinators. This is not a chatbot, water-quality assessment, weather forecast or equipment controller.

## Workflow and formats

Choose either synthetic example, paste source JSON or import a `.json` source/audit. Set `capacityLiters` and `maxCapacityLiters`; supply `profiles`, roof `records` and chronologically ordered `days`. Profiles have unique `id`, English `description`, `runoffPermille` and `firstFlushMm`. Records have unique `id`, `note` and integer horizontal projected `areaM2`. Days have unique `id`, integer `rainMm` and `demandLiters`. Array order is the time contract; day IDs are labels, not parsed calendar dates. Examples and coefficients are synthetic, not design standards.

Explicitly click **Load AI & match catchments**. Neural embeddings rank supplied profiles by meaning, allowing informal roof names to select different runoff/discard assumptions. Inspect source descriptions and cosine scores, relink where necessary, edit area/runoff/discard, and write multiline reviewer notes. Relinking restores that profile's coefficients and resets approval. Approve or hold every roof. Bulk approval is explicit, not automatic. Undo retains 40 snapshots. Original inputs remain in the audit; source edits cancel old work, and review edits invalidate applied exports.

Apply the reviewed scenario. Held roofs block all tank calculations and Daily CSV rather than silently omitting catchments. Export complete **JSON**, **Audit CSV**, **Markdown**, and an approved **Daily CSV** worksheet. Copy exports current applied Markdown. JSON includes originals, every reviewed roof, ranked evidence and every daily balance; importing it restores original inputs, never approvals. Audit CSV retains every source roof and reviewed field; formula-leading string cells receive an apostrophe, including multiline notes. JSON preserves exact original strings. Daily CSV contains day ID, rain, demand, start storage, inflow, spill, delivery, shortfall and end storage. Markdown is plain handoff text, not trusted HTML.

### Limits

- 2–8 reference profiles; 1–12 roof records; 1–60 ordered days.
- 200 UTF-16 units per neural text, 40 per ID, 100 title, 500 reviewer note; 30,000 source units; separate 8 MB audit import envelope.
- Areas: 1–10,000 m²; runoff: integer 0–1000 per thousand; daily discard: integer 0–20 mm.
- Rain: integer 0–500 mm/day; demand: integer 0–100,000 L/day.
- Tank and search ceiling: integer 1–1,000,000 L; ceiling must cover tank. Controls, nonfinite numbers, fractional values and unsupported source structures fail visibly. Newlines and valid Unicode are supported.

## Real model and privacy

Default model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0. Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web (MIT), WASM CPU, one thread, normalized mean-pooled 384-dimensional embeddings in batches of four. Worker takes `{id,texts}` and returns download progress, batch counts, vectors or errors. Finite vector count/dimension and normalization are validated before cosine ranking. Tokenizer `model_max_length` is 512; feature-extraction's nominal `max_length:256` option does not override it. Independent 200-character input bounds apply. The shared worker and model source were inspected, including tokenizer configuration.

**AI materially selects the reference and its default coefficients; it does not measure roofs, predict rainfall, write rules or calculate storage.** Similarity is not confidence. Unrelated text forces a nearest class; negation can fail. Mandatory review is essential. A four-example synthetic check is not a representative accuracy estimate. There is no fake fallback, hard-coded model response, remote inference integration or credential requirement.

First explicit load needs approximately 50 MB: ~23 MB model weights, 26.86 MB WASM and smaller JS/tokenizer files. Model files download from Hugging Face/HF-Xet CDN; runtime is same-origin. Model host uses `main`, not a pinned revision. No model traffic occurs before loading. Roof content stays in page/worker memory; nothing in the default path uploads it. Imported notes are data and grant no tool or credential authority. No analytics, API keys, content persistence, account access or remote actions.

Immutable same-origin runtime dependencies (preserve old app paths):

- `../20261115-6/assets/ai.worker-lkOoPoq8.js`
- `../20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Hashes and sizes: `runtime-provenance.json`. Worker, module factory, WASM and model downloads are cached. **Tested offline scope: a fresh worker in an already-open page after a successful online inference.** Offline navigation/reload/app-shell startup is not promised. Eviction, private mode or blocked storage may require internet again.

Current desktop Chrome/Edge with WebAssembly SIMD, module workers and Cache API recommended. CPU mode works without WebGPU and was tested with GPU disabled. Physical phones, other engines and low-memory devices are unverified. Download/batch progress, cancellation, explicit rerun and a 180-second timeout are supplied. Unsupported/runtime/network/malformed-output errors yield no recommendations. Run identities and worker termination prevent stale responses from replacing current results.

## Deterministic accounting and comparison

Per roof/day, collected liters are `floor(areaM2 × max(0, rainMm − firstFlushMm) × runoffPermille / 1000)`. Round down each roof separately, then sum. Discard is applied on **every wet day**, not per storm event. Empty initial tank. For each day: add inflow → spill above capacity → meet demand from available water → carry remaining storage. Exact integer liters are retained; each day satisfies `start + inflow = spill + delivered + end` and `demand = delivered + unmet`. There is no evaporation, leakage, intra-day timing, spatial rainfall variation or water-quality model.

Binary search finds the smallest integer tank meeting every day's supplied demand, up to the ceiling; feasibility is monotone under this empty-start contract. None is reported if demand precedes rain or the ceiling is insufficient. Zero-demand scenarios select the minimum allowed 1 L, not a recommendation to install a tank.

The displayed baseline is `min(total inflow, total demand)`: an aggregate supply shortcut ignoring storage/timing. Its excess over actual scenario delivery is computed, not a measured savings, time gain or AI accuracy percentage. Minimum capacity applies only to these finite input days, not seasonal reliability or future weather. Verify measured coefficients, collection suitability, plumbing and local requirements separately before any real-world decision.

## Development and validation

React + Vite; `npm install`, `npm run predeploy`. Base `/daily-app2/20261127-9/`. Required per-app gh-pages scripts are present, but **publish only through the collection root**. `python3 serve-built.py --port 7859` serves the production bundle at its real base and shared immutable assets. `--assembled` serves root `deploy` after assembly completes. `APP_URL` and `PREFIX` target assembled/public checks.

Checks: `node core-test.mjs`; `node browser-test.cjs`; `python3 artifact-test.py`; `node defensive-test.cjs`; `node recovery-test.cjs`; `python3 bundle-audit.py`; gallery syntax/browser checks; root assembly and public byte/inference checks. Playwright uses the installed workspace dependency and Chrome, not an app runtime dependency. Fault injection tests only failure defenses; successful model checks use actual inference. Independent Python Decimal replay and exhaustive small capacity search validate balance and optimality. Downloaded JSON/CSV are parsed independently. See `VALIDATION.md` for actual results and limitations. No digest is sent.
