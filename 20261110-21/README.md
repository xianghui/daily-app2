# Sequence Dock

For small print shops and maker studios: paste a short job queue, describe 2–6 setup families and supply a directed changeover-minute matrix. Local AI proposes each job's setup family. Verify or change every assignment, hold ambiguity, confirm unrestricted reordering, apply an exact optimized sequence, and export a usable queue plus a complete audit. No machine connections or external actions.

## Run / publish

`npm install`, `npm run dev`; `npm run predeploy` builds production. Base `/daily-app2/20261110-21/`. Required per-app deploy script exists but **publish the combined collection using the root workflow only**, never this app's deploy command.

## Real AI and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Transformers.js 4.3.2 / ONNX Runtime Web, WASM CPU, one thread; no WebGPU or API key.
- Real mean-pooled normalized 384-dimensional embeddings rank source job descriptions against the supplied family titles/descriptions by cosine similarity. These scores are **not confidence probabilities**. No canned response or heuristic fallback.
- First load explicitly initiated by the user: approximately 23 MB model/tokenizer from Hugging Face (`huggingface.co`, redirects through `hf.co`/its CDN), plus 27 MB same-origin WASM. App/worker/runtime factory are bundled locally. Weights come in; job content never leaves the browser on this default path. No optional remote provider, shared secrets, analytics or upload endpoints.
- Reuses byte-identical immutable runtime `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older build. Asset hashes recorded in `asset-validation.json`.
- Current desktop Chrome with module workers, WebAssembly SIMD and Cache API is tested. Physical phones, other browsers and low-memory devices unverified. No WebGPU requirement. Unsupported runtime/download failures show actionable errors, never fake output.
- Model and worker/runtime Cache API support offline **fresh-worker inference in an already-open page after a successful run**. Offline navigation/reload not promised. Cache eviction/private mode can require another download. No document persistence: export before closing.
- Model revision follows the upstream model repository, not a pinned commit. Lockfile pins JS dependencies. Observed validation applies to downloaded model assets at test time; upstream changes require retesting.

## Inputs and constraints

JSON object: `name`, `start` family ID, `families:[{id,title,description}]`, `costs:[[minutes]]`, `jobs:[{id,text}]`. Two built-in synthetic fixtures demonstrate the format. Matrix rows FROM, columns TO, in family-list order; asymmetric costs supported. Starting setup cost is included, return-to-start excluded. Same-family cost must be zero.

Original JSON ≤40 KB; imported JSON audit ≤1 MB restores `originalInput` only and renews every approval. 2–6 families; 1–12 jobs; IDs 1–30 letters/digits/_/- unique in their collection; titles ≤100, descriptions/review notes ≤400 characters. Integer transition estimates 0–10000 minutes. Four texts per inference batch, first 256 tokens, 180-second timeout. Run IDs guard delayed imports/worker loading; cancellation terminates workers and stale runs cannot update results. Malformed/NaN/non-normalized vectors are rejected.

All jobs must be **freely reorderable**. No deadlines, dependencies, batching capacity, processing duration, release times, parallel machines or safety/compatibility inference. Do not use if such constraints matter. Imported content is data, not instructions or authority.

## Review and deterministic optimization

Every AI suggestion starts pending. Review source snippets and all family descriptions/similarities; approve or hold each job. Family edits reset approval. Notes, rejection/holds and undo are supported. Any hold or absent scope confirmation blocks the whole queue; no job is silently dropped. Input edits invalidate suggestions; review edits invalidate applied/export snapshots.

Exact subset dynamic programming minimizes the sum of supplied directed transition estimates, with initial state given by `start`. Equal optima retain first encountered input-order choices. Original-order baseline is recomputed with the **same reviewed assignments and costs**. Estimated setup-minute savings are arithmetic differences, not measured production time, throughput gains or AI accuracy. Processing times are excluded.

## Export

Apply the review first; edits disable downloads until reapplied. JSON includes full originals, matrix, proposed/reviewed families, decisions, notes, evidence, complete ordered steps and computed metrics. CSV includes every original job, including holds, and reviewed assignment plus sequence position/setup minutes if available. Formula-leading text is escaped for spreadsheets; genuine numerical output remains numeric. Markdown/copy provides a complete queue and source audit. Audit reimport retains originals but never trusts prior approvals.

## Validation and limits

See `VALIDATION.md` and machine-readable test reports. Tiny fixtures are not representative accuracy estimates. Semantic relatedness is not setup equivalence: unrelated, instruction-like and negated descriptions can receive plausible nearest families. Human review of every job and every transition assumption is essential. This is a planning worksheet, not an executable machine schedule.
