# Echo Canopy

A no-key, static-hosted acoustic planning worksheet for community-room coordinators. It turns rough surface notes into a reviewed three-band Sabine scenario and a minimum identical-treatment-module count. **Not an acoustic measurement, product recommendation or installation design.** All example absorption data is synthetic.

## Workflow

1. Load **Reading room** or **Rehearsal studio**, paste JSON or import a `.json` file. Replace defaults with your complete, nonoverlapping room-surface inventory and verified manufacturer/test data. Include floor, ceiling and untreated patches; avoid counting treatments twice.
2. Set room `volume` (whole m³), `targetMs` (milliseconds, each band), `panelSabinsMilli` (three equivalent absorption areas per *added freestanding* module ×1000) and `maxPanels`. No credentials needed.
3. Explicitly click **Load AI & match surfaces**. Wait for real local inference; cancel download/processing at any time. Failure produces an error, never canned recommendations.
4. Review every proposed material, area and three coefficients. Coefficients are stored in thousandths: 500 = 0.500. Changing material restores that profile's coefficients. Inspect source snippets, candidate descriptions and cosine similarities (not confidence). Correct unrelated/negated matches, or hold them. Add verification notes; undo edits.
5. Approve each verified patch, then **Apply reviewed room**. Holds preserve all records but block estimates. Any further edit invalidates the export snapshot.
6. Compare minimum all-three-band count with an unconstrained 500-Hz-only baseline. The evaluated count is capped by `maxPanels`; unmet targets remain visible. Export current JSON, audit CSV, band CSV or Markdown; copy Markdown. Reimporting JSON restores original input, not old approvals: review must be renewed. There are no purchases or external actions.

## Input schema and hard bounds

See `src/core.js` for two fully synthetic fixtures. Input object:

```json
{"name":"Room","catalog":[{"id":"glass","title":"Window glass","description":"Glazed windows","alphaMilli":[30,30,20]},{"id":"plaster","title":"Painted plaster","description":"Hard plaster walls","alphaMilli":[20,30,40]}],"records":[{"id":"a","text":"Glazed panes","area":12}],"volume":180,"targetMs":800,"panelSabinsMilli":[1800,3500,4200],"maxPanels":30}
```

2–8 profiles; 1–24 patches; unique safe IDs ≤40 characters; title/name ≤80; descriptions/source text ≤400; each area integer 1–10000 m²; coefficients integers 0–1000 in fixed band order **250, 500, 1000 Hz**. Volume integer 1–100000 m³; target integer 100–10000 ms; panel equivalent absorption integers 1–100000 thousandths m² in each band; panel cap integer 0–10000. Originals ≤18 KB, import envelope/file ≤1 MB. JSON only; no CSV/PDF parsing or numerical extraction by AI. Review notes ≤400 characters. Inference uses batches of four texts and a 256-token maximum context. A run times out after 180 seconds.

## Real AI: role, model and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, via [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). Real feature extraction executes in a module worker on **WASM CPU** with mean pooling and normalized 384-dimensional vectors. The app validates vector dimensions, finite values and norm before cosine ranking against the user's material profiles.

The model materially reconciles paraphrased descriptions that literal title matching misses. It does NOT determine physical identity, measure areas, infer coefficients, recognize all negations or certify suitability. Mandatory review, not a confidence percentage, is the safeguard. No prompt/tool authority is granted to imported text. No generative response, mocked success, remote inference integration or shared API key exists.

### Download, device and privacy requirements

First run requires internet and approximately **50 MB**: ~23 MB model/tokenizer from `huggingface.co` and its download CDN (`*.hf.co`), plus ~27 MB same-origin WASM/runtime. Final compressed transfer size and host redirects can vary. Several hundred MB free RAM recommended. Requires module workers, WebAssembly SIMD and a secure context (HTTPS or localhost). CPU inference requires **no WebGPU**. Actual validation used headless desktop Google Chrome on macOS; physical phones, Safari/Firefox and memory-constrained devices untested.

The worker/runtime factory and model integration are bundled locally. To avoid duplicating 26,861,777 bytes in the collection, Vite references the immutable existing same-origin binary at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older build when deploying. `asset-privacy-validation.json` records hashes.

Only public file downloads occur on the default path. Surface text remains in page/worker memory, never in request URLs/bodies, analytics, storage, logs or model-host uploads. Public worker/factory/WASM files use Cache API; Transformers.js caches model files. Exports are user-initiated local downloads. No optional provider or credential field exists.

After an online run, **fresh-worker inference was tested fully offline inside the already-open warmed page**. Offline reload/navigation/app-shell startup is NOT promised. Cache eviction, disabled storage and private browsing may require redownload; no-cache inference can still work online. Cancel terminates workers; run IDs guard delayed imports, downloads and late responses. Network/runtime/malformed-output errors show no fake results and allow retry.

## Deterministic acoustic scenario

For each band: equivalent absorption `A = Σ(area × alphaMilli / 1000)` m² sabins; `RT60 = 0.161 × volume / A` seconds. Zero `A` is undefined (null in JSON, blank in CSV, dash in UI), never zero or Infinity.

Each added identical freestanding treatment module contributes your supplied `panelSabinsMilli / 1000` m² sabins independently. The minimum whole-module count must meet the target in every band. Counts are computed with exact safe-integer inequalities, not rounded displayed times:

`targetMs × (Σ(area × alphaMilli) + count × panelSabinsMilli) >= 161000 × volume`

The 500-Hz-only baseline uses the middle-band count; each other band is checked separately. Evaluated count = min(required all-band count, panel cap). A capacity shortfall is reported, not optimized away. All constraints are supplied scenario inputs; this is not a universal target standard or measured time/quality improvement.

**Limitations:** Sabine assumes approximately diffuse sound. Geometry, panel placement, mounting interaction, air absorption, occupants, leakage, modal behavior and highly absorptive/non-diffuse rooms can invalidate estimates. Independent added sabins are not replacement surface coefficients. No speech-intelligibility, exposure, fire, mounting or engineering certification. Verify real data and consult qualified acoustic expertise before purchasing/installing anything.

## Artifacts and validation

JSON contains untouched `originalInput`, every current review (including holds), assumptions and band results. Audit CSV includes every patch, reviewed material/area/coefficient and note; formula-like strings are prefixed with an apostrophe and CSV quoting preserves commas/newlines. Band CSV contains unrounded estimates, counts and target checks, available only for a fully reviewed room. Markdown contains all reviews and a scenario summary. Browser downloads were independently parsed and originals round-tripped; edits, holds and 24-record batches survived.

See [VALIDATION.md](VALIDATION.md), executable tests and observed reports. Two simple fixtures are not a general accuracy benchmark. Negated/unrelated challenge notes mislinked, illustrating why mandatory review matters.

## Build and collection publishing

```sh
npm install
npm run predeploy
```

Vite base is `/daily-app2/20261112-16/`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but **publish only through the root combined workflow** (`npm --prefix /Volumes/ExternalHD/daily_app2 run deploy`). Individual deployment would replace the collection. Production browser checks use `serve.py`; combined checks use `serve-combined.py`. Test scripts refer to the installed workspace Playwright path and Google Chrome. Do not commit node_modules, real documents or credentials.
