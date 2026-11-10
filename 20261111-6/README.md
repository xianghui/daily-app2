# Dilution Desk

A no-key local-AI dilution worksheet for classroom demonstration coordinators. Import/paste informal requests and a verified stock manifest → run real semantic matching → inspect source evidence → approve, hold or edit every identity and quantity → apply a stock-checked worksheet → export JSON, CSV or Markdown/copy. Nothing is dispensed or sent externally.

## Real AI and privacy

`Xenova/all-MiniLM-L6-v2` ([model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0), Transformers.js 4.3.2 and ONNX Runtime Web q8 WASM CPU perform normalized mean-pooled 384-dimensional embedding inference. Four texts per batch, first 256 tokens. Cosine ranking links paraphrased requests to your stock descriptions. This is not a chemical identity, compatibility or safety detector. Negation and unrelated descriptions can still produce wrong top matches; similarity is not confidence. Human verification is mandatory.

First explicit load downloads approximately 23 MB weights/tokenizer from huggingface.co and its CDN (hf.co/us.aws.cdn.hf.co), plus approximately 27 MB same-origin WASM. App, worker and factory are bundled locally. The immutable shared WASM is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that app during deployment. SHA-256: 49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082.

No content uploads, credentials or optional remote provider. All inputs/reviews remain in memory; save exports before closing. Downloads are model/runtime files, never user content. Model/runtime/worker Cache API entries permit offline fresh-worker inference after an online successful run in an already-open page, tested with all network disabled. Offline reload/navigation is not promised; caches can be unavailable or evicted. Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB memory tested. WebGPU not needed. Other browsers and physical mobile devices unverified. Loading progress, cancellation, 180-second timeout and actionable error/retry states are present. No deterministic fallback pretends to be AI.

## Formats and bounds

JSON manifest `{name, stocks:[{id,title,description,concentration,available}], requests:[{id,text,concentration,volume}]}`. Use synthetic examples to learn the schema. 1–6 stocks, 1–12 requests, text ≤400 characters, titles ≤80, unique ID tokens ≤40. Original JSON ≤20 KB, audit import ≤1 MB. Concentration 0.001–1,000 **g/L**; final volume 0.001–10,000 **mL**; available stock 0–10,000 mL. Units are explicit, never inferred or converted. CSV/PDF input unsupported. Audit import restores originals only, not prior review edits/approvals.

JSON retains every original, review decision, proposed/corrected stock, notes, blockers, inventory allocations and (when ready) calculations. CSV contains all request rows with escaped spreadsheet-formula text and quoted multiline fields. MD/copy is a usable checklist with stock and diluent quantities. Exports are invalidated by every review change. Undo restores review state. Holds block complete preparation, but remain in audit exports.

## Deterministic calculation and limits

For approved rows, stock volume = target concentration × final volume / stock concentration; diluent = final volume − stock volume. Enforce target ≤ stock, aggregate consumption per stock and reject shortages. Any hold, unmet confirmation, or invalid concentration blocks the complete preparation sheet; no partial sheet is presented as ready. JSON/CSV retain floating-point calculation precision; UI rounds to three decimals only, not achievable dispensing increments. Verify actual measurement feasibility. The model does not infer concentrations or quantities.

Single-solute dilute classroom color/sugar/salt demonstrations under compatible-diluent and additive-volume assumptions only. No chemical reactions, density/solubility checks, multi-solute mixtures, medical dosing, hazardous preparation or automatic dispensing. Numbers and identities require independent verification.

The displayed baseline counts exact stock-title occurrences in the source notes; semantic proposal coverage counts model-generated proposals, not correctness. Known-answer test results are separately documented; no invented accuracy/time savings.

## Development and publication

`npm install`; `npm run dev`; `npm run predeploy`. Vite base `/daily-app2/20261111-6/`. Required per-app deploy scripts exist, but publish the collection only through root `npm run predeploy` and `npm run deploy` (never per-app deploy). See VALIDATION.md for observed checks and publication status. Test scripts use the local Playwright Chrome installation documented in their require path.
