# Temper Folio

A local tuning-log review desk for ensemble coordinators and instrument technicians. **Real MiniLM sentence embeddings** retrieve a supplied reference-pitch profile from informal rehearsal handoffs. The human verifies that match, the intended sounding MIDI note and an independently measured fundamental. Deterministic twelve-tone equal-temperament arithmetic then computes target Hz, signed cents and recheck decisions. A fixed-Hz tolerance baseline exposes why the same absolute frequency band treats low and high notes differently.

This is a log worksheet, **not a microphone tuner or instrument controller**. No audio is analyzed or changed. The synthetic low-reference profile is equal temperament at A4=415, not an assertion about baroque/historical temperaments. Supplied profiles are assumptions, not tuning standards.

## Workflow

1. Choose **Early & modern** / **Orchestra & chamber**, paste source JSON or import `.json` up to 1 MB. Supply stable measured fundamentals, intended **sounding** MIDI notes and your own ensemble profiles. Written-pitch transposition is not performed.
2. Explicitly **Load AI & match profiles**. Inspect all profile descriptions and cosine evidence. AI matches meaning rather than exact labels; it does not infer the correct concert reference as fact.
3. Correct the proposed profile, reference A4, tolerance or measurements. Profile changes copy that profile's reference/tolerance. Numeric/profile edits reset approval. Approve or hold each reading, with multiline reviewer notes; undo retains 30 changes. Originals are preserved.
4. **Apply reviewed worksheet**. All readings—including holds and out-of-band notes—remain in audits. Every edit invalidates exports until reapplied. Bench CSV requires every reading approved; out-of-band readings remain marked for recheck rather than disappearing. Approval verifies the worksheet, **not tuning clearance**.
5. Download complete JSON / Audit CSV / Markdown, gated Bench CSV, or copy the current Markdown. JSON keeps original source, review overrides, candidate evidence and all computed checks. Audit JSON reimport restores **original inputs only**, requiring fresh inference/review. Working data is memory-only; export before closing.

## Real AI, runtime and requirements

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread CPU WASM/module worker. No generative responses, canned suggestions, API credentials or remote inference path.
- Model compares notes with descriptions; cosine ranking retrieves profile values. Schema validation, targets, logarithms, tolerance checks, review and exports are deterministic. Text is data, never executable instructions or tool authority. Unknown/irrelevant notes still return a nearest profile: inspect every match.
- First explicit load: **approximately 50 MB**, ~23 MB model/tokenizer from Hugging Face/CDN and ~27 MB runtime from this site. Internet required initially. Model host uses `main`; observed paths in validation record the resolved revision. Upstream changes are possible.
- Current WebAssembly SIMD and module-worker browser with adequate memory. No WebGPU needed; actual browser tests disable GPU. Cache API/storage needed for offline reuse. Desktop Chrome is tested; physical phones, other engines and low-memory devices are unverified.
- 2–8 profiles + 1–12 readings = maximum 20 texts in four-text chunks. Notes/descriptions ≤200 characters, source ≤30,000 characters. Tokenizer context is inherited from the model; pipeline `max_length` is not claimed as an independently enforced token cap. Vector count, dimension, finiteness and normalization are validated.
- Progress for downloads and batches, cancellation/worker termination, source-fetch abort and three-minute timeout. Retry with the same load button. Input/import identities prevent stale completion. Errors remain visible; **no fake AI fallback**. Unsupported WebAssembly/workers receive actionable instructions.

## Static assets, privacy and offline scope

The inspected immutable shared assets below must remain deployed. Exact byte counts/SHA-256 are in `runtime-provenance.json`.

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Protocol: `{id,texts}` to local worker; progress/batch/error or `{id,type:'result',vectors}` back. This reuse avoids another 27 MB runtime copy. Worker source, module factory and binary use Cache API; Transformers.js caches model/tokenizer assets. App code/CSS are local production assets.

**Default content stays on-device.** Downloading model weights does not upload notes. No analytics, accounts, microphones, provider integrations or credentials. Request audits check GET-only downloads, no bodies and no fixture text in URLs. Persisted audit reports retain host/path only, never signed CDN query tokens.

Tested offline scope: after online inference, terminate the worker and run real inference with a **fresh worker in the same warmed open page**, network disabled. Offline page reload/navigation is not supported; there is no service-worker app shell. Evicted caches or unavailable storage require internet again.

## Input / output contract

JSON source ≤30,000 characters; imported audit envelope ≤1 MB, with original-source bound separately enforced. IDs unique within each table, ASCII `[-A-Za-z0-9_]`, 1–24 characters. Control characters and unpaired Unicode rejected; tabs/newlines preserved.

- `title`: 1–100 characters; `baselineHzTolerance`: 0.01–20 Hz, 0.01 steps.
- `profiles` (2–8): `id`, `description` (1–200 characters), `a4Hz` (400–480, 0.01 steps), `toleranceCents` (0.1–50, 0.1 steps).
- `records` (1–12): `id`, `note` (1–200 characters), `measuredHz` (20–5000, 0.01 steps), `midiNote` (integer 21–108).
- Review: editable measurement/note/reference/tolerance, `profileId`, decision (`approve`/`hold`), `reviewerNote` ≤1,000 characters and AI evidence. UI offers a pending state until verified.

CSV is quoted, CRLF-delimited, doubles quotes and preserves multiline fields. Formula-like text beginning `= + - @ tab CR` is apostrophe-prefixed, including multiline reviewer notes; genuine signed numeric deviations stay numeric. JSON preserves exact strings. Markdown is plain downloaded/copied text, not rendered imported markup. Bench CSV is a **human worksheet**, not machine commands.

## Calculation and objective

`targetHz = a4Hz × 2^((midiNote − 69)/12)`

`deviationCents = 1200 × log₂(measuredHz / targetHz)`

Within band iff absolute cents ≤ reviewed tolerance (numerical boundary epsilon 1e-9 cents). Positive means sharp; negative means flat. Target-minus-measured Hz and opposite signed cents are diagnostic differences, not mechanical adjustment instructions. Targets/calculations export full precision; the UI rounds only for display.

The fixed-Hz baseline checks absolute measured-minus-target Hz against the supplied global threshold. Both methods use **the same reviewed reference and measurements**, isolating the tolerance method. Counts include held rows and are computed, not estimates of accuracy/time saved. The concrete objective is consistent proportional pitch tolerance across registers and visible baseline disagreements—not a claim of audible improvement.

An intended note one octave wrong will create a large deviation, not silently relabel the note. Harmonics, unstable readings, instrument response, stretched tuning, intentional expressive intonation and non-equal temperaments are outside scope. Re-measure after manual intervention. Semantic matching can fail on negation/ambiguity and cannot prove the concert reference.

## Build / validation

React + Vite; base `/daily-app2/20261128-11/`. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app gh-pages/scripts remain, but publish only using the **root combined-site workflow**.

`node core-test.mjs`; `python3 serve-test.py` (production build, port 7871); `node browser-test.cjs`; `node defensive-test.cjs`; `node model-cancel-test.cjs`; `node import-race-test.cjs`; `node input-guard-test.cjs`; `node recovery-test.cjs`; `python3 artifact-test.py local-`. Playwright tests use installed Chrome; set `APP_URL`, `PREFIX`, `SITE_ORIGIN` and `GALLERY_URL` for assembled/public targets. `serve-assembled.py` serves an absolute deploy path on 7872. `asset-audit.mjs` compares all app/shared public assets and scans built text for credential patterns (not a proof of absence by itself). No personal datasets are used. Actual outcomes and unverified scope are in `VALIDATION.md`.
