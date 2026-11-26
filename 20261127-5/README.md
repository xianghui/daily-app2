# Roomkind Planner

A produce-intake coordinator's local notes → verified references → compatible-room manifest. Distinct from stock-expiry rescue, nursery sow scheduling and carton-dimension packing: whole lots must simultaneously share temperature and humidity intersections, avoid producer/sensitive ethylene mixing and fit identical room capacity. The exact minimum-room solution is compared with source-order first-fit using the same constraints.

## Use

1. Choose either synthetic example, paste source JSON, or import a `.json` source/audit (8 MB import limit; 30,000-character original source). Edit the title, **capacityKg**, **availableRooms**, supplied profiles and intake lots. No real personal data is included.
2. Read the download/privacy notice, explicitly click **Load AI & match intake notes** and wait for the real neural model. Progress, cancel and retry are available. No model-host traffic starts until this action.
3. Inspect each original note, ranked candidate descriptions and cosine similarities. Choose a storage profile, verify mass, add a multiline reviewer note and approve or hold. Bulk approval is an explicit human decision, not automatic validation. Undo retains 40 edits.
4. Apply the review. Unreviewed lots block all results. Holds remain in audit outputs and block the operational manifest; oversized lots or insufficient available rooms also block manifest release. No source lot is silently dropped.
5. Download complete JSON, Audit CSV, Markdown or the release-gated Manifest CSV; copy Markdown. Every edit invalidates the applied snapshot. JSON audit reimport restores **original inputs**, not approvals; rerun and review. JSON preserves exact strings; CSV prefixes spreadsheet-formula-like text with `'`, intentionally changing those exported text cells for safety. Numeric kg remain numeric. Markdown retains source/review records plus raw reviewer notes in dynamically fenced text blocks.

## Real AI and static hosting

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0 open weights, quantized q8 ONNX (`onnx/model_quantized.onnx`, about 23 MB). Upstream model files are resolved from the model host's `main`, not a pinned revision. Model-host availability and future changes remain dependencies.
- Runtime: Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web, MIT. Real WASM CPU inference, one thread, batches of four texts, normalized mean pooling, 384-dimensional embeddings. No WebGPU needed or GPU fallback promised.
- What AI does: embed supplied descriptions and rough notes, rank references by dot product of normalized vectors. This makes informal synonyms usable without manually looking up each profile. It does **not** extract kg, infer storage parameters, validate produce identity or understand negation reliably. Cosine scores are similarity, not confidence. A nearest candidate is always returned even for unrelated text; human review is essential.
- What is deterministic: schema checks, range intersections, ethylene exclusion, kg conservation, exact subset-DP room partition and source-order first-fit baseline. No canned classifications or regex pretending to be AI. A model failure yields an error, never a substitute result.
- Runtime dependencies are immutable, byte-audited same-origin shared assets from `20261115-6` (worker and WASM module factory) and `20261107-2` (26,861,777-byte WASM binary). Preserve these older builds and public paths. See `runtime-provenance.json`. New React/Vite code and styling are bundled locally. The shared worker's pipeline passes `max_length:256`, but this pipeline uses tokenizer `model_max_length` (upstream configuration 512); **no 256-token guarantee is claimed**. Our stricter bound is 200 characters per AI text, maximum 20 texts.
- First cold run: roughly **50 MB** total, including about 23 MB weights, 26.86 MB WASM and JS/tokenizer. Explicit load downloads files from Hugging Face / its documented HF CDN domains. No keys, backend, mandatory paid provider or optional remote inference.

## Privacy, caching and devices

Intake text and review stay in browser memory. Only file-download GET traffic occurs; no content uploads, telemetry, provider credentials, stock moves or equipment commands. The worker receives bounded strings as data, not instructions. User notes cannot grant tools or request secrets. No real documents/credentials are committed.

Use current desktop Chrome/Edge with WebAssembly SIMD, module workers and Cache API; allow roughly 300 MB working memory (estimate, not measured guarantee). Tests use real desktop Chrome with GPU disabled. Unsupported Worker/WASM, worker construction, download, runtime, malformed vectors and 180-second timeout errors are actionable. Input changes/cancellation terminate workers, abort pending source download, invalidate file reads and guard every response with a run ID. Recreate worker on retry.

The worker source, module factory, WASM and model files are cached with Cache API/runtime caching. **Tested offline scope:** a successful online run followed by network-off fresh-worker inference in the same already-open production page. Offline navigation/reload is NOT promised; no app-shell service worker. Cache eviction/private browsing may require downloads. Internet is required on first use; physical phones, Firefox/Safari and cold offline startup are unverified.

## Input schema / limits

```json
{
  "title": "Synthetic intake",
  "capacityKg": 100,
  "availableRooms": 3,
  "profiles": [
    {"id":"root","description":"Fresh root vegetables","minC":0,"maxC":3,"minRH":90,"maxRH":95,"ethylene":"sensitive"},
    {"id":"bulb","description":"Dry cured bulb vegetables","minC":0,"maxC":4,"minRH":65,"maxRH":75,"ethylene":"neutral"}
  ],
  "records": [{"id":"lot-1","note":"Cured brown bulbs in sacks","kg":20}]
}
```

1–12 lots; 2–8 profiles; unique IDs up to 40 characters; note/description up to 200 characters, title 100. Integer mass 1–10,000 kg; capacity 1–10,000 kg; available rooms 1–12. Integer temperature −5 to 30°C and RH 0–100%; ordered inclusive ranges; ethylene `producer|sensitive|neutral`. No CSV input; JSON avoids ambiguous unit/date parsing. Review notes up to 500 characters. Inputs with forbidden control characters are rejected.

## Exact planning and limitations

All rooms are identical, initially empty and independently configurable; the app reports allowed interval intersections, not a thermostat recommendation. Lots are indivisible. For every subset, check total kg, temperature and RH intersection and producer/sensitive incompatibility. Subset DP enumerates valid partitions and minimizes room count (O(3^n), n≤12), with deterministic tie selection. It does not optimize energy, choose real warehouse rooms or certify stock suitability. Pair witnesses aid review but cumulative room capacity is also checked; compatible pairs alone do not establish a feasible room.

A lot larger than capacity yields no partition; room-count shortage is reported without dropping lots. Holds produce only a visibly partial draft audit. No operational manifest until all originals are approved, every room is feasible and minimum count fits available count. No automatic external action.

**All supplied storage values are simplified synthetic demonstrations, not horticultural or food-safety recommendations.** Validate real cultivar/ripeness, duration, packaging, airflow, odors, pathogens and room conditions separately. Ethylene is a deliberately simplified binary exclusion, not a gas model. A feasible mathematical plan is not a claim of safe or effective storage.

## Development / validation

```sh
npm install
npm run predeploy
python3 serve-built.py --port 7835
node core-test.mjs
python3 independent-test.py
node browser-test.cjs
node defensive-test.cjs
node recovery-test.cjs
python3 artifact-test.py local-
python3 bundle-audit.py
```

See `VALIDATION.md` for actual observations, known errors and publication status. Tests use synthetic data and real Chrome inference; defensive fault injection is only for error handling. Browser scripts require the workstation's installed Playwright. The independent Python recursive-partition oracle is deliberately different from the app's subset DP. Do not infer field accuracy or safety from easy fixtures.

Vite base `/daily-app2/20261127-5/`. Per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish the collection through ROOT predeploy/deploy**, never per-app deploy.
