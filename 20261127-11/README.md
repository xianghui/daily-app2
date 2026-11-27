# Quietform Desk

A private room-survey worksheet for small venue/facilities coordinators. Informal surface descriptions are hard to reconcile with material-reference tables. Real local neural retrieval suggests a reference for each patch; a human reviews every link, measured area and frequency coefficient before any acoustic calculation is applied.

## Workflow

1. Choose a synthetic meeting/rehearsal room example, paste source JSON, or import a `.json` source/full audit (8 MB file cap). No real documents or data are included.
2. Set rectangular room dimensions, two-band RT target, one retrofit patch ID, panel area, its two absorption coefficients and whole-panel ceiling. Source examples are editable. All surface patches must represent a non-overlapping complete room envelope; equal area alone does not prove correct geometry.
3. Explicitly press **Load AI & match surfaces**. First use needs internet: approximately 23 MB quantized weights/tokenizer from Hugging Face and its CDN, plus approximately 27 MB same-origin CPU runtime. Loading/file progress and batch counts are displayed. Cancel terminates worker and aborts pending worker fetch; retry is explicit.
4. Inspect source notes, candidate reference descriptions and cosine scores (not confidence). Correct references or coefficients and areas; add multiline notes. Approve or hold every surface. Changing a reference resets that decision; undo restores prior review. Original inputs are never overwritten. Holds retain all records but block room estimates.
5. **Apply reviewed scenario** creates a separate snapshot. Any review/input edit invalidates exports. Check area reconciliation, two band estimates, baseline differences, capacity and minimum panel count or explicit infeasibility.
6. Download complete JSON audit, formula-escaped CSV audit, Markdown handoff, or band worksheet CSV. Clipboard copies current applied Markdown. Band CSV describes computed bands, not an installation order; blocked surveys contain headers only. Complete audit exports always preserve every source/review record, including holds. Reimporting a JSON audit restores original inputs, not approvals, requiring fresh inference/review. Nothing is sent, installed or changed externally.

## Actual AI and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized ONNX q8. Source architecture is sentence-transformers/all-MiniLM-L6-v2.
- Runtime: Transformers.js 4.3.2 / ONNX Runtime Web WASM CPU, one thread; mean-pooled normalized 384-dimensional embeddings. Four texts per chunk. The complete worker source/protocol and pipeline call were inspected; `max_length:256` in the existing feature-extraction call is not a guaranteed limit. The actual model tokenizer truncates at its **512-token** configuration. App neural texts are additionally bounded to 200 characters each.
- AI materially ranks supplied reference descriptions by semantic similarity to each patch note, supplying initial coefficients. It does not measure acoustics, infer physical values independently or use regex classification/canned responses. No generative output, tool authority or instruction execution is possible from imported notes. Validate finite 384-vectors, count and norm before ranking; no fabricated fallback.
- Reuses immutable same-origin worker and CPU factory from `20261115-6` and WASM from `20261107-2`. Full dependency paths, sizes and SHA-256 hashes are in `runtime-provenance.json`. Preserve those older builds/paths when deploying. Runtime assets are collection-hosted, not a third-party script CDN.
- Current desktop Chrome/Edge supporting WebAssembly SIMD, module workers, Blob modules and Cache API recommended. No WebGPU or API key required. Test browser is installed desktop Chrome with GPU disabled. Other engines and physical phones unverified. Small models still use substantial RAM; browser/network/memory failures show actionable errors and a 180-second timeout, never fake results.

## Deterministic acoustic contract

Metres, square metres, seconds; absorption coefficients bounded [0,1]. Rectangular room dimensions 1–30 m; 2–8 references; 1–12 patches; each patch 0.01–5,400 m²; source 30,000 characters; neural texts 200 characters; IDs unique within tables. Panel area 0.01–10 m², ceiling integer 0–200, target 0.1–5 s. Review fields obey the same bounds. Positive decimal surface/panel capacity division uses integer arithmetic to avoid floating-point off-by-one counts.

For each of 500 and 1000 Hz: `A = Σ(patchArea × coefficient)` and `RT = 0.161 × volume / A`. Zero absorption is undefined (`null` in JSON), never zero or Infinity. Held patches or a survey area differing from `2(LW+LH+WH)` by more than 0.001 m² block estimates. Survey checks use reviewed areas.

Whole retrofit panels **replace** existing finish, not add extra room area: `gain = panelArea × (panelCoefficient − existingCoefficient)`. Counts 0 through `min(ceiling, floor(retrofitPatchArea / panelArea))` are exhaustively checked. The first count meeting the target at BOTH bands is reported. Negative gain, no improvement, inadequate surface capacity and infeasibility are allowed; no silently clamped success. No panels overlap or cover more than the selected patch under the supplied arithmetic assumptions. This is an area worksheet, not geometric panel layout.

Baseline: total surveyed area multiplied by the unweighted mean PATCH coefficient. Comparing its RT to the area-weighted result exposes a common averaging shortcut. It depends on patch segmentation and is deliberately simplistic, not measured room performance. Difference counts are computed, not accuracy or productivity claims. Two tiny known-answer semantic fixtures are not representative accuracy. No invented confidence or time-saving percentages.

**Limitations:** Sabine assumes a diffuse field and is often unsuitable for highly absorptive, small, irregular or nonuniform rooms. No air absorption, scattering, occupancy/furniture, low-frequency modes, mounting gaps, fire/building requirements, geometry optimization or measured impulse response. Coefficients are synthetic demonstrations, not manufacturer specifications. Verify actual product mounting data and obtain measurements/professional acoustic advice before installation. Similarity can confuse negation and unrelated finishes; mandatory human review is substantive.

## Privacy and caching

No API providers, credentials, telemetry, microphone, content uploads or remote actions. User JSON and reviews live only in page memory unless explicitly exported. AI only receives bounded text inside a local worker. Network traffic downloads code/model files; it does not upload text. Real-browser request auditing checks methods, bodies, hosts and URLs. Temporary signed CDN queries are not persisted in reports.

Cache API stores worker source, runtime factory/binary and model files; content is not stored by this app. **Tested offline scope:** fresh-worker inference in an already-open page after successful online warm-up, with the browser context offline. Cold offline reload/navigation is NOT supported or promised. Storage denial/eviction may require internet again. Clear this site's browser storage to clear caches (shared collection runtime caches may affect other apps).

## Develop / publish

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite base `/daily-app2/20261127-11/`. Per-app required `predeploy` and `deploy` scripts/dependency exist; DO NOT use this app's deploy script to replace the collection. From repository root run `npm run predeploy`, then `npm run deploy`, verify the matching Pages build and public runtime/inference, then commit/push main.

## Validation

See `VALIDATION.md` and machine-readable reports. Browser suites use real inference for successful paths, fault injection only for defensive cases. Independent Python Decimal calculations and CSV/JSON parsers validate mathematics and actual browser-downloaded artifacts. Scripts: `node core-test.mjs`, `python3 oracle-test.py`, `node browser-test.cjs`, `python3 artifact-test.py local-`, `node defensive-test.cjs`, `node recovery-test.cjs`, `python3 bundle-audit.py`. Set `APP_URL`/`PREFIX` for assembled/public suites; `serve-built.py --port 7783` serves production dist with its real base, `--assembled --port 7784` serves the completed combined tree. Requires the existing local Playwright installation and Chrome for these development checks.
