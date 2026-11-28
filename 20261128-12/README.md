# Closefield Notebook

Local AI macro-photography handoff review for photographers and reproduction technicians. **Real MiniLM sentence embeddings** retrieve a supplied metering/lens profile from rough capture notes. Human review confirms the metering path and measured pupil/reproduction ratios. Deterministic geometry then avoids double extension compensation and selects the shortest adequate third-stop exposure within a supplied time cap.

Distinct from the collection's darkroom enlargement, depth-of-field and panorama tools: this handles **macro extension loss and TTL versus external metering**, not enlarger calibration or focus placement. No photograph analysis or camera control.

## Workflow

1. Choose **External & TTL** / **Copy & close-up**, paste source JSON or import `.json` ≤1 MB. All examples are synthetic, not actual lens specifications. Supply your own measured assumptions.
2. Explicitly **Load AI & match profiles**. Inspect descriptions and cosine evidence. AI retrieves meaning-based profile links; it does not discover actual optical specifications or prove how a meter worked.
3. Correct profile, metering path or numeric fields; such edits reset approval. Profile changes copy its meter mode and pupil ratio. Approve or hold every capture; add multiline notes; undo the last 30 changes. Originals remain unchanged.
4. **Apply reviewed worksheet**. All captures, including holds/infeasible settings, survive complete exports. Any edit invalidates exports until reapplied. Capture CSV requires every capture approved and feasible.
5. Download current JSON / Audit CSV / Markdown / gated Capture CSV, or copy Markdown. Audit JSON reimport restores **original inputs only**, requiring fresh inference and review. Working data is in memory: export before closing.

## Real model and requirements

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, mean-pooled normalized 384-dimensional embeddings. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread CPU WASM/module worker. No API key, remote inference or canned response path.
- Notes and descriptions alone enter inference. Vector count/dimension/finiteness/normalization are validated before cosine ranking. All geometry, ladder selection, validation, human edits and artifacts are deterministic. Similarity is not confidence. Imported instructions are inert data, never tool authority or credential requests.
- First explicit load ≈50 MB: ~23 MB model/tokenizer from Hugging Face/CDN + ~27 MB same-site runtime. Internet initially required. Model uses `main`; observed resolved revision: `751bff37182d3f1213fa05d7196b954e230abad9`. Upstream can change.
- Current browser with WebAssembly SIMD, module workers and adequate memory; **no WebGPU needed**. Tests use desktop Chrome with GPU disabled. Other engines, physical phones and low-memory devices are unverified.
- 2–8 profiles + 1–12 captures, at most 20 texts, four-text inference chunks. Notes/descriptions ≤200 characters, source ≤30,000 characters. Model tokenizer context is inherited; pipeline `max_length` is not claimed as a separately enforced token cap.
- Download/batch progress, cancel/worker termination, abortable source fetch, three-minute timeout and same-button retry. Input/import run identities prevent stale writes. Errors are visible with actionable recovery; no deterministic/fake AI fallback.

## Static runtime, privacy and offline scope

Preserve these immutable shared same-origin assets. Byte hashes are in `runtime-provenance.json` and checked against local, assembled and public URLs:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

The inspected worker accepts `{id,texts}`, returns download/batch progress, errors or `{id,type:'result',vectors}`. It uses CPU q8 normalized mean pooling, batches four texts, and explicitly caches factory/binary with Cache API; app caches worker source and Transformers.js caches model assets. Reuse avoids duplicating ~27 MB. App JS/CSS remain local production assets.

**User content stays on-device**. Downloads are GET requests for model/runtime files, not uploads of notes. No analytics, external provider integration, credentials, accounts or cameras. Request auditing checks no content in URLs/bodies. Saved reports retain only host/path, never signed CDN query values. Built-assets pattern scanning plus integration review found no embedded credentials; pattern scans alone are not exhaustive proof.

Tested offline claim: after online inference, terminate the worker and run actual inference using a **fresh worker in the same already-open warmed page**, all network disabled. No offline reload/navigation guarantee; no service-worker app shell. Cache eviction or disabled storage requires internet again.

## Input and output

`title` 1–100 characters. Profiles (2–8): unique simple `id`, `description` 1–200 characters, `meterMode` (`external` or `ttl`), `pupilRatio`. Captures (1–12): unique simple `id`, `note` 1–200 characters and:

| Field | Bound / step | Meaning |
|---|---|---|
| magnification | 0–5 / .01 | image size divided by object size |
| nominalF | 1–32 / .1 | marked aperture, **not already-effective f-number** |
| meteredSeconds | .001–300 / .001 | time at unchanged ISO and lighting |
| maxSeconds | .001–1800 / .001 | hard shutter-time cap |
| pupilRatio | .25–4 / .01 | exit pupil diameter / entrance pupil diameter; supplied by profile |

IDs use `[-A-Za-z0-9_]`, 1–24 characters, unique within each table. Empty/invalid/oversized JSON, invalid enums/numbers, controls and broken Unicode are rejected. Audit file ≤1 MB; original source still ≤30,000 characters. Reviewer notes ≤1,000 characters.

JSON preserves originals, reviewed values, evidence and computed outputs. CSV quotes all fields, escapes quotes, uses CRLF and preserves multiline content. Formula-like string cells beginning `= + - @ tab CR` get an apostrophe prefix, including multiline cells; numeric fields stay numeric. Markdown is downloaded/copied text, not executed/rendered source markup. Capture CSV is a **human worksheet**, never a camera command file.

## Deterministic objective and baseline

`effectiveF = nominalF × (1 + magnification / pupilRatio)`

`extensionFactor = (1 + magnification / pupilRatio)²`

External metering: `requiredSeconds = meteredSeconds × extensionFactor`.

TTL at actual working extension/aperture, loss already included: `requiredSeconds = meteredSeconds`.

Choose the **shortest** adequate ladder time `2^(k/3)` seconds, integer k from −30 to 33, within the cap. The exported full-precision mathematical ladder can differ from rounded camera labels; verify an actual supported setting. No adequate setting means blocked; do not silently underexpose to fit a cap. Feasible ladder surplus is less than one-third stop.

The simple **always-compensate** baseline multiplies both metering paths by extensionFactor. For TTL this double-counts loss; `baselineExcessStops = log₂(baselineSeconds / requiredSeconds)`. Comparisons use identical reviewed inputs and include held captures. Fixture 1 external required time 2 s versus TTL 0.5 s; baseline wrongly requests 2 s for TTL (two stops excess). Fixture 2 external 1 s versus TTL .125 s; baseline TTL .28125 s (~1.170 stops excess). These are geometric model estimates, not measured exposure/time improvements or universal AI accuracy.

Assumptions: ambient exposure, stable illumination/ISO, accurate reproduction/pupil measurements, valid marked aperture and metering interpretation. Internal-focusing lenses, already-effective camera aperture displays, transmission/vignetting, flash systems and film reciprocity can invalidate this model. No reciprocity or transmission corrections. Similarity misses negation and unknown notes still get a nearest profile. Verify source evidence, hold ambiguities, use a test photograph/histogram. Physical exposure outcomes have not been tested.

## Build, validation and publication

React + Vite; base `/daily-app2/20261128-12/`. `npm install`, `npm run predeploy`; required per-app gh-pages dependency/scripts retained. Publish **only via root combined-site deploy**, not per-app deploy.

Tests: `node core-test.mjs`, `python3 serve-test.py`, `node browser-test.cjs`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node model-cancel-test.cjs`, `node import-race-test.cjs`, `node input-guard-test.cjs`, `python3 artifact-test.py local-`, `node gallery-test.cjs`, `node gallery-browser-test.cjs`, `node asset-audit.mjs`. Playwright uses installed Chrome. Set APP_URL/PREFIX/SITE_ORIGIN/GALLERY_URL for assembled/public targets. Servers use absolute collection paths. Tests use synthetic data only. Actual outcomes and untested scope are recorded in `VALIDATION.md`.
