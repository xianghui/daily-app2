# Throwline Desk — 20261127-24

A local-AI projection preparation utility for workshop, exhibition and screening coordinators. Identify kits from informal handoff notes, review manufacturer specs and room measurements, then produce uncropped, aspect-correct image worksheets. No projector, account, microphone, camera or installation is accessed.

## Workflow

1. Select **Lecture rooms** / **Cinema spaces**, paste JSON or import `.json` source/audit. Fixtures and measurements are synthetic. Set each room's available screen, lens distance, content aspect and minimum active-picture width.
2. Explicitly **Load AI & match kits**. Model downloads start only here. Download/file/batch progress, cancellation, retry and a 180-second timeout are provided.
3. Review the source note and ranked kit descriptions/cosine similarities, correct the kit and all ten numeric assumptions, add a multiline verification note, approve or hold each setup. Relinking copies the selected kit's native pixels/throw range and resets approval. Undo retains 40 review changes. Originals remain intact.
4. **Apply reviewed scenario** to maximize active image area on a whole-centimetre native-raster-width grid. See screen/raster/content diagrams, black-bar dimensions and throw ratio. Compare the wall-width/no-bars baseline on the same approved subset. Held, optically impossible or too-small cases remain in full audits; Setup CSV is blocked unless every setup is ready. Any edit invalidates applied results and exports.
5. Download complete JSON, Audit CSV, Markdown and (when ready) Setup CSV; copy the Markdown handoff. Reimporting audits restores originals only, not approvals.

## What is actually AI?

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Normalized mean-pooled 384-dimensional neural embeddings rank supplied kit descriptions against informal handoffs. This supports paraphrases beyond exact kit identifiers. It does **not** infer dimensions, lens specifications, setup safety or equipment suitability. All numeric information is supplied and reviewed.
- Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT); package provenance in originating `20261115-6/package-lock.json`. Vector count/dimension, finite numbers and normalization are validated before proposals. No deterministic/canned fallback on failure.
- Immutable same-origin shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating apps/paths. `runtime-provenance.json` records exact byte sizes and SHA-256. Sharing avoids duplicating ~27 MB in the collection.
- Protocol: `{id,texts}` → progress/batch messages → `{id,type:'result',vectors}`. WASM CPU, one thread, four short texts per neural chunk. Shared tokenizer maximum 512 tokens; the pipeline's requested `max_length:256` is not relied upon as an enforced cap. Embedded prose is bounded to 200 characters. Source worker implementation was inspected.
- First load: approximately **23 MB model/tokenizer + 29 MB runtime**; internet required. Hugging Face / its download CDN serves weights. No key, paid service, backend or optional remote-provider path.
- Requires current WebAssembly SIMD/module workers and several hundred MB RAM. Actual tests: desktop Chrome CPU with GPU disabled. No WebGPU required. Narrow viewport tests do not establish physical-phone performance. Safari/Firefox, low-memory hardware and assistive-device behavior unverified.
- Cache API retains model, worker, factory and WASM when permitted. Actual real inference with a fresh worker and network disabled is tested in a warmed, already-open production page. **Cold offline navigation/reload is not promised.** Eviction/private mode may require redownload. Shared model revision follows unpinned host repository; remote assets can change.

## Privacy and authority

User text remains local. GET requests download code/runtime/model files; no content uploads, telemetry, provider credentials or remote inference. Network audits capture request methods and bodies and check source text does not appear in URLs. Public audit reports retain only external paths/query-key names, never signed CDN query values. Built-asset credential scans supplement source and request inspection; they are not an absolute secret-detector guarantee. Inputs/reviews are memory-only except explicit exports. Imported content cannot change worker URLs, grant tool authority or request credentials.

## Source and output contracts

Source: `{title, profiles, records}`; see `src/core.js` fixtures.

- Source ≤30,000 characters. 2–8 unique kit profiles and 1–12 unique setup records; title ≤100, IDs ≤40, descriptions/notes ≤200 characters. Controls and malformed Unicode rejected. Audit/file import ≤8 MB, with originals still subject to the source cap.
- Kit: `id`, `description`, `nativeW`, `nativeH` (integer 100–16000 px), `throwMin` (0.2–5), `throwMax` (0.2–8, ≥minimum).
- Setup: `id`, `note`, `distanceM` (0.3–30), `wallWidthM` (0.2–20), `wallHeightM` (0.2–15), `contentW`, `contentH` (aspect parts 1–100), `requiredWidthM` (0.1–20).
- Review: original identity/note retained, chosen profile/specs, edited measurements, decision `pending|approve|hold`, `reviewerNote` ≤500 characters, ranked source evidence. Apply requires approve/hold for every row.
- JSON audit schema `throwline-v1`: original source + current review + per-row geometry/status + computed summary. CSV preserves every source occurrence, originals remain in JSON. CSV formula-like strings get a leading apostrophe (numeric fields remain numeric); quotes/newlines use RFC-style escaping and CRLF records. Markdown includes every source/decision/note. Setup CSV releases all rows only when all are ready. Reimport never trusts saved model results/approvals.

## Deterministic geometry and baseline

Native aspect `N = nativeW/nativeH`; content aspect `C = contentW/contentH`. Throw ratio is lens distance divided by **native raster width**, not active-content width.

Feasible raster width interval:

`distance/throwMax ≤ width ≤ min(screenWidth, screenHeight*N, distance/throwMin)`

Choose its largest whole-centimetre width. Reject intervals with no grid point. Raster height = width/N. Active width = width × min(1,C/N); active height = rasterHeight × min(1,N/C). These preserve content aspect without crop/stretch; bars are half the leftover dimensions. Active width must reach the supplied requirement. Since both active dimensions grow monotonically with raster width, the maximal feasible width maximizes active area under these assumptions. Floating tolerance 1e-9 covers arithmetic noise, not physical fitting clearance.

The baseline pretends the content fills screen width with **no bars**, checks content height, minimum width and throw using that width, and is valid only when native/content aspects agree. It is intentionally a common incomplete setup shortcut, not a competing optical model. Baseline-valid and optimized-ready counts use the same reviewed approved subset. Active area includes approved geometric fits even if below minimum width and is labeled accordingly. These are computed feasibility metrics, not empirical accuracy/time/quality improvements. Fractional active pixels are ideal estimates; scaler rounding is not modeled.

## Limits and failure behavior

MiniLM can miss negation or pick an unsuitable nearest kit, especially when the correct one is absent. Human review is mandatory. Geometry assumes a rectangular screen perpendicular to the optical axis, native-aspect raster, ideal zoom, centered content and no digital keystone/crop. No brightness, focus, optical distortion, rigging, lens shift, mount clearance, heat or sightline assessment. Verify specs and physical installation separately; a ready worksheet is not installation approval.

Input changes/cancel increment run identity, abort pending fetches and terminate workers. Delayed files, stale worker results/errors and late source fetches cannot replace newer work. Worker construction/runtime/network/malformed-output errors and timeouts fail visibly, with no fabricated output. No WebGPU fallback is needed: default is tested CPU WASM; missing required runtime gives actionable requirements.

## Development / validation / deployment

`npm install`; `npm run predeploy` builds React + Vite for `/daily-app2/20261127-24/`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **do not run the individual deploy** for the collection. Root `npm run predeploy` assembles `deploy/`; root `npm run deploy` publishes combined Pages site. Follow root README Pages-build/public-asset verification.

Observed results, limitations and publication state: [VALIDATION.md](VALIDATION.md). Reproducers: `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node model-cancel-test.cjs`, `node import-race-test.cjs`, `python3 artifact-test.py local-`. Browser scripts use workspace Playwright and installed Chrome; `APP_URL` and `PREFIX` select assembled/public targets. Real AI checks use real models; fault injection is restricted to defensive cases. Build success alone is not AI validation.
