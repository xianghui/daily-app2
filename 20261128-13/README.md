# Spinfield Ledger

A local-AI reconciliation desk for **nonclinical teaching-log coordinators**. Inputs are informal rotor notes, supplied equipment descriptions/dimensions, desired relative-force bands and old rpm entries. The bottleneck is reconciling ambiguous equipment names while detecting that equal rpm on different radii does not imply equal centrifugal force.

Real sentence embeddings retrieve the closest supplied rotor profile. Humans verify identity and numerical assumptions. Deterministic constrained enumeration produces an editable, reviewed force/speed worksheet. This is distinct from previous signal-frequency/FFT, photographic exposure and geometric tools: its objective is **rotor-specific relative-force reconciliation**, not signal analysis or equipment control.

## Use

1. Choose **Bench & swing** / **Plates & crank**, paste source JSON or import `.json` ≤1 MB. Fixtures are synthetic, not manufacturer specifications.
2. Explicitly **Load AI & match profiles**. See download and chunk progress, cancel or retry. Inspect cosine scores and exact source descriptions. Cosine is not confidence. No model loads before this action.
3. Correct profile, radius, speed cap or force goals. Profile changes copy its radius and cap; numerical/profile changes require approval again. Approve or hold every record; add multiline reviewer notes; undo up to 30 edits.
4. **Apply reviewed worksheet**. Originals remain intact. Every edit invalidates exports. Complete audits retain held/infeasible records; Bench CSV requires all approved and feasible.
5. Download current JSON, Audit CSV, Markdown, gated Bench CSV or copy Markdown. Audit reimport restores **original inputs**, never previous approvals. State is in memory; export before closing.

## Real AI / browser requirements

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX; normalized mean-pooled 384-dimensional embeddings. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread CPU WASM/module worker.
- Only descriptions and notes enter inference. Vector count, dimension, finite values and normalization are validated before ranking. Force arithmetic, bounded speed enumeration, human decisions, exports and all input guards are deterministic. There are no canned responses or heuristic AI fallbacks.
- Initial explicit load ≈50 MB: ~23 MB model/tokenizer from Hugging Face/CDN plus ~27 MB same-site runtime. Internet required initially. Model revision follows upstream `main`; observed resolved revision is recorded by network paths in browser validation, not guaranteed immutable.
- Requires a current WebAssembly SIMD/module-worker browser and adequate free memory. No WebGPU, API key, account, paid service or remote inference. Desktop Chrome with GPU disabled tested; physical phones, low-memory devices and other engines are unverified.
- 2–8 profiles, 1–12 records; at most 20 short texts in chunks of four. Notes/descriptions ≤200 characters each. Tokenizer's inherited context applies; pipeline max_length is not advertised as a separate enforced context bound.
- Run IDs, abortable worker-source fetch, worker termination, stale-input/file-read guards, three-minute timeout, visible error and same-button retry. No fake result if downloads, runtime or model fail.

## Static paths, privacy and caching

Shared immutable same-origin dependencies (preserve originating apps):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Hashes/bytes are in `runtime-provenance.json`. Inspected worker protocol: `{id,texts}` → progress/batch/error or `{id,type:'result',vectors}`. This CPU q8 runtime batches four texts; it caches WASM factory/binary explicitly, the app caches worker source, and Transformers.js caches model files. App code/CSS are bundled locally. Sharing avoids duplicating ~27 MB per utility.

**Content stays local.** Model downloads are GET file requests, not uploads of notes. No analytics, optional remote providers, secrets, equipment API or accounts. Imported instructions are inert text; they cannot grant authority or request credentials. Request audits check methods/bodies/content in URLs; stored audit paths omit signed CDN query values. Built-text secret-pattern scanning complements manual integration review, not an exhaustive credential proof.

Offline scope tested: after online inference, a **fresh worker in the same already-open warmed page** can perform another real inference with all network disabled. Offline reload/navigation is not supported or claimed; there is no service-worker app shell. Evicted/disabled caches require internet again.

## Formats and limits

Source object: `title` (1–100 chars), `profiles` and `records`. Each table needs unique `id` matching `[-A-Za-z0-9_]{1,24}`. `description` / `note` 1–200 chars. No prohibited control characters or broken Unicode. Source ≤30,000 chars, import envelope ≤1 MB, reviewer notes ≤1,000 chars.

Profiles: `id`, `description`, `radiusCM` (1–30 in .01 steps), `maxRPM` (10–30,000 in 10 steps). Radius means **maximum sample radius**, measured in cm, not rotor diameter or average radius. A supplied cap is assumed to incorporate the correct verified rotor/tube/adapter rating; the app cannot verify it.

Records: `id`, `note`, `targetMin`, `targetMax`, `preferredG` (integer ×g 1–50,000 with min ≤ preferred ≤ max), `currentRPM` (10–30,000 in 10 steps). Force is relative to standard gravity (×g), not grams.

JSON retains all originals, review fields, candidate evidence and computed results. CSV quotes every cell, doubles quotes and uses CRLF; multiline strings survive. Formula-like strings starting with `= + - @ tab CR` are apostrophe-prefixed, including multiline cells. Genuine numbers remain numeric. Markdown is downloaded/copied as text, not rendered executable markup. Bench CSV is a reviewed teaching-log artifact, never machine commands.

## Deterministic objective and baseline

`RCF = 1.118e-5 × radiusCM × RPM²`

Enumerate 10, 20, … through the reviewed speed cap. Retain settings whose modeled force lies in the requested band; minimize absolute distance to preferred force; ties choose lower rpm. If none fit, block Bench CSV rather than silently violating a band or cap. Full precision is used for feasibility/export; display values are rounded.

Baseline: retain the supplied old rpm on the **same reviewed radius**, count violations of force band or cap. No unsupported comparison of yield/safety/time savings. All rows, including holds, contribute to counts. Each two-row fixture has one baseline violation; known-answer semantic links are MICRO/SWING and PLATE/TEACH. These four examples are a tiny quality check, not a general accuracy estimate.

## Limitations

Similarity always supplies a nearest profile, even for unknown equipment; negation may fail. Human identity and numerical review is essential. No biological/clinical decision, run duration, balancing, containment, sample compatibility, temperature, acceleration or operating procedure is derived. No physical equipment trials. Follow actual manufacturer and institutional instructions independently; a feasible arithmetic worksheet is not authorization or safety certification. No external actions or equipment controls.

## Build and validation

React + Vite, base `/daily-app2/20261128-13/`. `npm install`; `npm run predeploy`. Required per-app gh-pages dependency, predeploy and deploy scripts retained. **Publish only through the repository root combined-site workflow**, never individual deploy.

Validation commands: `node core-test.mjs`; `python3 serve-test.py`; `node browser-test.cjs`; `node defensive-test.cjs`; `node recovery-test.cjs`; `node model-cancel-test.cjs`; `node import-race-test.cjs`; `node input-guard-test.cjs`; `python3 artifact-test.py local-`; `node gallery-test.cjs`; `node gallery-browser-test.cjs`; `node asset-audit.mjs`. Playwright uses installed desktop Chrome. Set APP_URL/PREFIX/SITE_ORIGIN/GALLERY_URL for assembled/public checks. Independent Python Decimal checks use analytic candidate bounds, rather than duplicating the JS enumeration. See VALIDATION.md for actual results and untested scope.
