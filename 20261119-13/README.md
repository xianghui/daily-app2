# Atlas Overlay

A local-AI worksheet for exhibition/space planners reconciling rough sketch landmarks with an existing planning grid. Unlike scalar instrument calibration or location selection, this fits an orientation-preserving **2D similarity transform** and transforms proposed target coordinates.

## Workflow

1. Paste/import source JSON (or use either synthetic example). Define 3–8 reference anchors with descriptions and output-grid coordinates, 3–16 sketch landmark observations, 1–8 proposed target points, context, output unit and `maxResidual` goal.
2. Explicitly click **Load AI & reconcile inputs**. Neural embeddings rank reference descriptions for each rough observation. No string-matching fallback or canned classification.
3. Review every reference match, sketch X/Y coordinate and source evidence. Approve or hold; edit notes and undo. Editing coordinates or links renews pending review. Review edits invalidate exports.
4. Apply the reviewed plan. All observations must be approved and have different anchors, hence a releasable fit can contain at most eight. Duplicates, holds, tiny coordinate spread, extreme scale or excessive residuals block coordinate release. All records remain in audit exports.
5. Inspect scale, rotation, translation, residual lines/coordinates, target positions and outside-observed-box flags. Download current JSON, audit CSV, target CSV or Markdown; copy the complete worksheet. Reimporting an audit restores originals only and requires fresh inference/review, not implicit approval.

## Real AI / runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; mean-pooled normalized 384D embeddings, quantized q8 ONNX.
- Runtime: Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web (MIT), WASM CPU, single thread; no WebGPU requirement. The shared worker requests truncation; installed feature-extraction tokenizer has `model_max_length=512` (the call's `max_length=256` is not represented as an enforced 256-token cap). Descriptions are independently bounded to 300 characters. Four texts/chunk; at most 24 texts.
- Immutable same-origin dependencies: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these apps/paths. This avoids duplicating ~27 MB into the nearly 1 GB collection. Runtime is bundled in the immutable worker, not loaded from a JavaScript CDN.
- First explicit load needs internet: approximately 23 MB model assets plus 27 MB WASM, worker/runtime JS and tokenizer metadata. Model files download from Hugging Face / its CDN (`huggingface.co` and `us.aws.cdn.hf.co` observed in the network report). These are downloads, not content uploads.
- Modern browsers with module workers, WebAssembly SIMD, Cache API and several hundred MB memory. Desktop Chrome CPU tested; emulated 320/390px layouts are not physical-phone inference testing. Other browsers and low-memory devices unverified. Clear runtime/device errors, 180-second timeout, progress, cancellation and retry; never fake results.
- Cache API retains worker source, runtime factory, WASM and model downloads. **Tested offline scope: fresh-worker inference in an already-open warmed page.** Offline navigation/reload is not promised. Browser cache eviction/private-mode policies may require another download.

## Privacy and authority

No key, external provider integration, analytics, server inference, content upload, maps API or external actions. Default text remains in page/worker memory. Caches hold public model/runtime assets, not source worksheets. Exports are explicit local downloads; clipboard is explicit. Imported instructions are data and cannot change authority or request credentials. All committed fixtures are synthetic. Do not use output for surveying, construction, navigation or safety certification.

## Geometry and interpretation

Both systems must be Cartesian (Y up); convert image-downward Y before importing. Fit minimizes sum of squared landmark errors for:

```
X = a*x - b*y + tx
Y = b*x + a*y + ty
scale = hypot(a,b), rotation = atan2(b,a)
```

Translation-only baseline fits centroid displacement without rotation or scaling. Both RMS metrics are **in-sample residuals**, not independent accuracy, generalized model quality, future savings or runtime improvements. A small residual cannot establish correct identities. Three points can align by chance. Reflection, shear, perspective and map projection are not modeled. Every fit residual must meet the supplied `maxResidual`; target CSV is disabled otherwise. Targets outside the sketch landmarks' axis-aligned bounding box are flagged; this is not a convex hull or inside-box validity guarantee. Coordinate bounds are ±1,000,000, tolerance 0.000001–1,000,000 output units, scale 0.000001–1,000,000, mean squared sketch spread at least 1e-10.

## Formats and limits

Source JSON keys are `context`, `unit`, `maxResidual`, `anchors:[{id,description,x,y}]`, `logs:[{id,landmarkText,x,y}]`, `targets:[{id,description,x,y}]`. Unique 1–40 character alphanumeric/underscore/hyphen IDs within each list. Text fields ≤300 characters; source ≤50,000 characters; JSON import/audit envelope ≤2 MB. Review notes ≤1,000 characters; 100 undo snapshots. Unsupported formats, malformed vectors (count/dimension/finite/normalization), empty/oversized data and invalid coordinates fail explicitly. Run identity guards cover fetch, file reads and messages; cancellation terminates the worker.

JSON retains all originals/reviews, model similarity evidence and current geometry if available. Audit CSV retains every observation/review; target CSV retains every target when ready. CSV quotes commas/newlines and escapes formula-like strings with an apostrophe; genuine signed coordinates remain numeric. Markdown includes source/review records and interpretation checklist. Source arrays may use more observations than anchors to expose duplicates; such a worksheet cannot release coordinates until corrected. No points are silently dropped to improve fit.

## Development / validation

`npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts include `predeploy: npm run build` and `deploy: gh-pages -d dist`; **publish only through the root combined-site workflow**, not this app's deploy script.

See [VALIDATION.md](VALIDATION.md) for observed real inference, known-answer fixtures, independent geometry checks, artifact round trips, mobile/defensive/offline/privacy and public deployment status. `core-test.mjs`, `browser-test.cjs`, `defensive-test.cjs`, race tests and independent Python artifact parser reproduce the checks. Successful inference tests never mock the model; fault injection is limited to failure/race defenses. Tiny fixtures do not establish universal accuracy: nearest-anchor matching can still return a wrong link for irrelevant text.
