# Thermal Ledger

A local-AI transmission-loss review desk for building surveyors reconciling rough component notes. Not a full building-energy model, equipment-sizing method or compliance certificate.

## Workflow

1. Load either synthetic example, paste source JSON, or import source/audit JSON. Edit the project, profiles, climate assumptions and heat-loss cap.
2. Explicitly click **Load AI & match components**. Review the initial ~50 MB download notice first. Actual MiniLM embedding inference proposes identities; no canned responses or regex classifiers.
3. Verify every component, dimension, unit and current/scenario coefficient. Switching identity resets coefficients to the selected profile. Correct, hold or approve each row. Review notes and owners support multiline evidence. Undo reverses the last review edit; editing invalidates the applied result and exports.
4. Apply reviewed components. All pending rows require decisions; any hold blocks complete totals but remains exportable. A supplied cap produces a within/exceeds comparison, never a certification.
5. Download complete JSON, source-preserving CSV or a Markdown follow-up checklist, or copy the checklist. Reimporting an audit restores original input only: inference and approval must be renewed. No external actions occur.

## Input and calculation conventions

Source schema: `{project, deltaDeciK, degreeDays, targetWatts, policies, records}`. Profile: `{id,label,description,unit,coefficientMilli,upgradeMilli}`; unit is exactly `m²` (surface) or `m` (linear thermal bridge). Record: `{id,note,quantity100,owner}`. No PDF, drawing or automatic dimension extraction.

- quantity100: integer hundredths of m² or m, 1–1,000,000. Supply **net opaque areas excluding openings**. Glazing and doors must not also be counted in wall area. Duplicate IDs rejected; semantically duplicate survey rows require human removal.
- coefficientMilli: integer thousandths of U in W/m²K or ψ in W/mK, 0–10,000. upgradeMilli: 0–current coefficient. Only nonnegative bridges are supported. Verify compatible area/junction conventions; examples are synthetic, not design values.
- deltaDeciK: tenths of indoor–outdoor K, 1–1000. degreeDays: 0–10,000 K·days using a suitable balance temperature. targetWatts: 1–10,000,000 W.
- 2–8 profiles, 1–40 records, source JSON ≤40,000 characters; descriptions/notes ≤300, project ≤100, owner ≤150; import file ≤2 MB. Audit envelopes have a separate larger file bound to accommodate evidence while original input retains its strict bound.

Deterministic H = Σ(AU) + Σ(Lψ), W = H × ΔT. Approximate annual transmission kWh = H × degreeDays × 24 / 1000. BigInt integer products avoid intermediate rounding; engineering-unit outputs use floating point. Original area-only baseline excludes current linear bridges. Current bridge-aware transmission and supplied retrofit coefficients expose omissions and scenario differences, not measured improvements. All source records survive JSON/CSV; no silent row loss or aggregation of ambiguous data.

Ventilation/infiltration, solar/internal gains, point bridges, ground coupling, thermal mass, intermittent heating and system efficiency are omitted. Annual avoided transmission is **not** measured savings, fuel use, bills or payback. This is a review worksheet, not a heat-pump sizing or regulatory tool.

## Real AI, runtime and license

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, approximately 23 MB model/tokenizer files. Hosted model revision is not pinned; future upstream changes may alter results.
- Runtime: `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), CPU/WASM; React + Vite. Model and tokenizer download from Hugging Face and its CDN/Xet hosts only after explicit invocation. Normalized mean-pooled 384-D vectors, cosine nearest-profile ranking, batches of four texts, 256-token truncation. Results validate count, dimensions, finiteness and unit norm before suggestions.
- AI improves informal-name reconciliation; it does **not** identify actual construction, verify truth, infer coefficient values or extract dimensions. Every input receives a nearest candidate even when unrelated. Similarities are not confidence percentages; mandatory human review is essential.
- App/worker/JS runtime factory are bundled locally. The immutable same-origin 26,861,777-byte WASM asset is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve it when publishing. `asset-validation.json` records its hash and byte match. Combined root deployment is required.

## Privacy, device and failure behavior

Default inference is entirely on-device, requires no API key and offers no remote-provider path. Texts travel only through an in-browser worker message; network traffic is model/runtime file GET downloads, never survey content uploads. No real documents, credentials or personal data are fixtures. Imported instructions have no tool authority. Sources/reviews are in memory until deliberately exported; they are not automatically persisted.

Requires modern WebAssembly SIMD, module workers and several hundred MB free memory. Tested in desktop Chrome with GPU disabled; WebGPU is not required. Other browsers and physical phones unverified. Small devices may fail to allocate memory. A failed runtime/download gives an error and retry instructions, never fake AI. Timeout is 180 seconds. Cancel terminates the worker; run identities also guard late worker and file-read results.

Cache API stores model/worker/factory/WASM. Actual offline fresh-worker inference was tested in an **already-open, warmed page**. Offline app-shell startup/reload is not promised. Cache eviction/private-mode/storage restrictions require internet again. Initial downloads total approximately 50 MB; browser/runtime overhead adds memory use. Download progress is per file, not a misleading total percentage.

## Output

JSON includes originals, reviews/evidence, all computed lines/totals or explicit blockers. CSV includes every original source row, proposed and reviewed component, unit, original/reviewed quantity, current/scenario coefficients and watts, owner and evidence. Formula-like text receives a leading apostrophe for spreadsheet safety; numeric fields remain numeric. Markdown contains assumptions, baseline/scenario totals and complete source-linked review/follow-up items. Exports always use the currently applied review, never stale defaults.

## Development / publishing

`npm install`, `npm run dev`; `npm run predeploy` builds with `/daily-app2/20261113-18/`. Per-app deploy scripts exist for contract compatibility but **publish through the collection root**, not this folder. Browser harness uses the workspace's installed Playwright/Chrome; `python3 serve.py` serves the production build with its actual base/shared runtime. `node browser-test.cjs`, `node defensive-test.cjs`, `node model-cancel-test.cjs`, `node touch-test.cjs`, `node core-test.mjs && python3 oracle-test.py`, `python3 artifact-test.py`, `python3 asset-audit.py`. Optional `TEST_URL`, `REPORT` select combined/public targets.

See [VALIDATION.md](VALIDATION.md) for observed outcomes and limits, not universal accuracy claims.
