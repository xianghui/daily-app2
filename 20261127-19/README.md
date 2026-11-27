# Sweepframe Desk

A private, local-AI panorama worksheet for photographers planning repeated single-row captures. Supply a rectilinear lens kit and rough briefs, retrieve lens candidates using real neural embeddings, review specifications and constraints, then export per-shot relative yaw positions. **No photographs are uploaded, imported, stitched or altered. No camera commands.** Fixtures are synthetic.

## Real AI and why it helps

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8, through Transformers.js 4.3.2 / ONNX Runtime Web (WASM CPU). Normalized mean-pooled 384-dimensional embeddings match paraphrased brief descriptions to supplied lens descriptions. The selected reference supplies focal length and sensor dimensions, materially changing field of view and shot positions. Four texts per inference chunk, at most 20 texts. The shared tokenizer's model_max_length is 512; the pipeline's max_length:256 option is not relied on as a stricter cap. Vector count, dimension, finite values and approximate unit norm are validated before ranking. The actual model-host tokenizer cap was checked; see model-runtime-validation.json.

AI does not inspect photographs, determine camera identity, extract EXIF, measure focal length or optimize geometry. Similarity is evidence, not confidence or suitability. Negation, unrelated prose and similar kit descriptions can yield the wrong reference. Review or hold every match. Synthetic reference dimensions illustrate workflow, not manufacturer data.

Both galleries were parsed before selection; see distinctness-audit.json. Focusfield Desk deals with focus/depth of field and Framecadence Desk with temporal sampling. Neither provides horizontal angular overlap, minimum shot count or relative yaw-center manifests. Older apps and the original collection remain unchanged.

## Workflow

1. Choose either synthetic batch, paste JSON or import a `.json` source/audit.
2. Explicitly click **Load AI & match lenses**. No model download before this action. Download/file and chunk progress are visible. Cancel terminates the worker; retry reuses available caches. Timeout 180 seconds; no canned fallback.
3. Inspect ranked source descriptions and cosine scores. Correct the lens or hold it; relinking resets metadata and approval. Edit dimensions, focal length, orientation, sweep, overlap, shot cap and multiline reviewer notes. Undo retains up to 40 review states. Original input remains intact.
4. Approve or hold every request and apply. Review edits invalidate the applied snapshot and all exports.
5. Download complete JSON, Audit CSV or Markdown; copy current Markdown. **Shot CSV** is enabled only if every request is approved and within its cap. It contains every planned shot, not a truncated list. No camera or external actions occur.

## Input / output contract

Source: `{title, profiles, records}`. Title ≤100 characters; IDs ≤40 and unique per list. 2–8 profiles; 1–12 requests. Descriptions/notes ≤200 characters; source ≤30,000 characters. Controls and lone surrogates rejected. Profile: `{id,description,sensorW,sensorH,focal}`, sensor dimensions 5–60 mm, actual focal length 8–600 mm. Use **actual**, not full-frame-equivalent focal length. Request: `{id,note,sweep,overlap,maxShots,orientation}`; sweep 1–300 degrees, minimum angular overlap 10–80%, maxShots integer 1–120, orientation `landscape` or `portrait`. Portrait swaps the horizontal dimension to sensorH; landscape uses sensorW. Inputs are assumed measured by a person; no inference of physical dimensions.

Complete `sweepframe-v1` JSON retains originals, every review, candidate evidence, held/blocked requests, geometry and summary. Audit CSV has every request, source snippet, reviewed parameters and comparison values. Shot CSV is a generic field worksheet: request, lens, orientation, sequential shot number, yaw degrees relative to sweep midpoint, focal/sensor values, FOV, required overlap and reviewer note. Not executable equipment instructions. Markdown retains all requests and includes ready shot lists; blocked jobs have no released capture list. Source/audit import ≤8 MB restores **originals only**, never trusts old approvals or derived geometry.

CSV/JSON retain computed double-precision yaw values; screen and Markdown round yaw to six decimals, not a physical mount-accuracy claim. CSV double-quotes and escapes commas, quotes and newlines. String fields beginning `= + - @ tab CR` gain an apostrophe for spreadsheet safety, including multiline strings; genuine signed numeric yaw remains numeric. JSON preserves exact source/review text. Prose is data: it grants no authority, executes no code and cannot request credentials.

## Deterministic geometry and comparison

Within the explicitly defined **one-row, centered horizontal angular-interval** model:

- HFOV = 2 atan(horizontal sensor width / (2 × focal length)), converted to degrees.
- Maximum yaw step = HFOV × (1 − overlap/100).
- Choose the smallest integer n with HFOV + (n−1) × maxStep ≥ sweep (1e-10° comparison tolerance).
- For n > 1, actual step = (sweep−HFOV)/(n−1). Centers run from −(sweep−HFOV)/2 to +(sweep−HFOV)/2, equally spaced. First/last edges cover the requested sweep.
- For n = 1, yaw = 0°, coverage = HFOV and overlap is N/A.
- If n exceeds the reviewed shot cap, retain the complete blocked audit; do not release operational Shot CSV.

Count-only baseline chooses ceil(sweep/HFOV), with equal endpoint spacing but without enforcing overlap. Metrics count adjacent seams below requested overlap versus the overlap-aware model, across the same approved requests including over-cap scenarios. Holds excluded. Total released shots counts ready scenarios only. These are computed geometry comparisons, **not measured stitch quality, percentage accuracy or time savings**. Extra shots buy the required overlap; no claim of fewer photos than a no-overlap shortcut.

Horizontal angular overlap is **not pixel-area overlap** on rectilinear frames. This does not ensure vertical coverage or successful feature matching. Not for fisheye, multi-row/spherical/polar capture, nearby parallax, distortion correction, focus breathing or moving-subject assessment. Yaw zero is the midpoint, not north. Rotate about the entrance pupil, keep the camera level, verify real edges and subject motion with test frames. No stitching engine or physical calibration is provided.

## Downloads / privacy / devices / offline scope

Initial internet required: ~23 MB model/config/tokenizer from Hugging Face / its hf.co CDN, plus ~27.5 MB same-origin worker/factory/WASM (UI conservatively states ~29 MB). No remote inference, content upload, API key, mandatory paid service, telemetry or optional provider. User content lives in memory and exported files only; model/runtime Cache API storage does not store documents. Downloads of weights are not uploads of notes. Network tests verify GET-only asset traffic, no request bodies, no note text in request URLs, and no model-host requests before loading. Reports store only host/path/query-key names, not temporary signed query values.

Current desktop Chrome with WASM SIMD/module workers and several hundred MB RAM tested with GPU disabled. No WebGPU needed. Phone layouts at 320/390 CSS px tested, not physical phone inference. Other engines and low-memory devices unverified. Unsupported Worker/WASM, construction, network/model/runtime errors, malformed results, timeouts and cancellation yield visible actionable states, never fake matches. Run identities protect delayed imports, worker-source fetches and old result/error events.

Immutable shared same-origin assets (hashes/bytes in runtime-provenance.json):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Keep these older app builds deployed. Their protocol and source were inspected: real feature extraction, normalized mean pooling, q8, CPU WASM, single thread, chunks of four. Transformers.js Apache-2.0, ONNX Runtime Web MIT. Worker/factory/binary explicitly Cache-API cached; model files use the runtime's cache. Tested offline scope is **fresh-worker inference in an already-open, online-warmed page** with the entire context offline. Cold offline navigation/reload is neither implemented nor promised. Browser eviction/private-mode restrictions may require new downloads. Shared upstream model revision is not frozen; upstream changes require revalidation.

## Build / validation / deployment

React + Vite; base `/daily-app2/20261127-19/`. `npm install`, `npm run predeploy`. Required gh-pages dependency, `predeploy: npm run build` and `deploy: gh-pages -d dist` retained. Publish only from repository **root**, using combined deploy tree. See root README for Pages commit/build verification.

See VALIDATION.md and machine-readable reports for observed results and limitations. Reproduce local production tests: build, run `python3 serve-local.py`, then `node core-test.mjs`, `python3 core-replay.py`, `node browser-test.cjs`, `python3 artifact-test.py local-`. Defensive/recovery/import suites use `APP_URL` / `PREFIX` to select the same server. Browser tests require workspace Playwright and installed Chrome. After root assembly use `python3 serve-test.py --port 7802` and APP_URL at that port; repeat against the final public URL. `node gallery-test.cjs` compiles inline scripts, checks the unique entry and preserves all prior entries. Asset audits compare shared hashes, deployment size, built credential patterns and exact public bytes. Browser downloads are independently parsed using Python csv/json and replayed with Python geometry. Successful AI checks always use actual model weights; fault injection is used only for defensive tests.


Public release verified: matching built Pages commit `21e271f6e6bf42907397dde68b3c61833db19252`, successful workflow `45979762294`, nine exact asset matches, both real-AI fixtures and complete public workflow/offline/privacy/defensive suite, 803 independent parsed-artifact assertions and all 919 gallery cards. See publication-status.json and VALIDATION.md. No digest sent.
