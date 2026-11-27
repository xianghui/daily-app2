# Grainline Press

A local-AI worksheet for print-room coordinators planning repeated paper cutting jobs. Input a stock catalog and informal job notes with blank sizes/quantities; AI links intended stocks; a human reviews material, dimensions and grain; deterministic layout enumeration produces per-job diagrams, whole-sheet requirements and a shared-stock ledger. Export an actual reviewed handoff. No printing, ordering or equipment controls.

## Real AI, not a geometric heuristic in disguise

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8, performs real feature extraction using Transformers.js 4.3.2 / ONNX Runtime Web on WASM CPU. Normalized mean-pooled 384-dimensional embeddings match job notes to supplied paper-stock descriptions by cosine similarity. The chosen stock materially determines available sheet geometry, grain and inventory. The app does not infer dimensions or grain from prose, generate fake responses, or inspect photos. Similarity is not calibrated confidence. Unrelated text still gets a nearest candidate, negation can fail, and a wrong stock makes a wrong worksheet: review every link. Short English notes recommended.

## Workflow and deterministic contract

1. Select a synthetic example or paste/import JSON. Edit the supplied catalog and global trim/gutter to match your actual stock/cutter assumptions.
2. Explicitly load AI. Download/progress, cancellation, timeout and retry are visible. No model requests occur before invocation.
3. Inspect source descriptions and candidate similarities. Change stock, blank dimensions, quantity or grain requirement. Add multiline notes. Approve or hold each job. Relinking resets approval; all edits invalidate applied outputs; undo preserves prior review states (40 edits).
4. Apply reviewed scenario. Held/infeasible jobs remain in the audit with no invented sheet count. The operational cut list is blocked if any hold, infeasible job or shared-stock shortage remains.
5. Export JSON, Audit CSV, Markdown, per-job SVG diagrams or a gated Cut CSV. Clipboard copies the current applied Markdown; downloads remain available if clipboard permission fails.

Dimensions are whole mm. `margin` trims all four sheet edges; `gap` is the spacing between blanks/strips, with no terminal gutter. For each first-cut axis (horizontal/vertical), enumerate counts of the two blank orientations in homogeneous parallel strips. Each strip fills across with as many identical blanks as fit. Choose the greatest yield across these patterns, allowing mixed orientations only when the required blank-grain axis agrees with stock grain after rotation. The second strip count can be maximized for each first count because each additional strip adds nonnegative yield. This is exact **within the homogeneous-strip two-stage guillotine family**, not globally optimal unrestricted nesting. Ties use the first enumerated pattern. Diagrams show allocated blanks and gaps; they are schematics, not machine programs or physical-size templates.

Required sheets = ceil(quantity / blanks per sheet); spare blanks = sheets × yield − quantity. Each job consumes separate whole sheets. Cross-job offcuts, print-run gang layouts, spoilage, bleed beyond supplied blank sizes, press grippers, blade tolerances, sheet thickness and machine safety are not modeled. Shared-stock demands are summed across all jobs; the same stock cannot independently be counted as available to each job. All amounts are transparent planning estimates, not real production measurements.

The area-only baseline divides usable sheet area by blank area, then rounds sheet requirements up. It ignores shape fit, gutters and grain, so is an optimistic shortcut, not a feasible plan or a claim of time/accuracy improvement. Overstated-yield job counts and both sheet totals are computed. Held/infeasible quantities stay preserved and are explicitly excluded from sheet sums.

## Formats and bounds

Source object: `title` ≤100 chars; `margin` integer 0–50 mm; `gap` integer 0–20 mm; `profiles` 2–8 stocks; `records` 1–12 jobs.

- Stock: unique `id` ≤40 chars, `description` ≤200 chars, `width`/`height` integers 100–2000 mm, `grain` width/height, `available` integer 0–100,000 sheets. Trim must leave usable dimensions.
- Job: unique `id` ≤40 chars, `note` ≤200 chars, `width`/`height` integers 10–1000 mm, `quantity` integer 1–10,000, `grain` width/height/any. Dimensions include any desired bleed.
- Source limit: 30,000 characters; audit import limit: 8 MB. Text controls and lone surrogates are rejected. Four neural texts per batch, at most 20 texts/five chunks. Actual tokenizer has a 512-token model cap (the pipeline's max_length option does not lower it).
- Full JSON `grainline-v1` preserves original, review, candidate evidence, layouts, shared-stock ledger and computed summary. Reimport restores originals only, requiring fresh inference/review. CSV/image imports are unsupported.
- Audit CSV has one row per original job, including holds. Formula-like string cells starting =,+,-,@,tab/CR receive an apostrophe; multiline text, commas and quotes are escaped. JSON/Markdown preserve exact reviewed text.
- Cut CSV has a row per strip, including per-job sheets, yield, requested/spare blanks, axis, band offsets, blank geometry and rotation. It is gated on all jobs and inventory passing. Every original job appears.
- SVGs contain every blank in the one-sheet pattern; preview is capped at the first 1,000 rectangles for large patterns and labels that cap. XML text is escaped. The file includes sheet/blank metadata and warnings; it is not a cutting-machine file.

## Devices, downloads, privacy and cache

Default no-key path keeps user content in browser memory. No analytics, uploads, remote-inference provider, paid service or credentials. Model downloading is not uploading job content. Browser request audit verifies GET-only static/model assets with no job notes in URLs/bodies. Imported strings are data; they cannot request credentials, access tools or change authority. Exports are explicitly user-triggered downloads. No source datasets are saved by the app.

First explicit load needs approximately 50 MB: ~23 MB model weights/tokenizer/config from huggingface.co and its hf.co/CDN hosts, plus ~27 MB same-origin runtime. Current desktop Chrome/Edge with WebAssembly SIMD, module workers and Cache API is recommended. No WebGPU is used; real browser validation disables GPU. Physical phones, other engines and low-memory devices are unverified. Runtime/unsupported-feature/network errors are visible and never replaced with deterministic fake AI. Timeout is 180 seconds. Cancellation aborts source download and terminates workers; run identities guard file reads, worker fetches and late messages.

Byte-identical collection runtime is shared at immutable paths; preserve these older builds when deploying:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

See runtime-provenance.json for hashes. App code/CSS are local bundled assets. Worker source, WASM factory and binary use explicit Cache API; model assets use Transformers.js cache. Tested offline scope: terminate the worker, block all network, then run a fresh real worker in an **already-open warmed production page**. Cold offline navigation/reload and cache-eviction survival are not promised. Internet is needed again when cache entries are missing.

## Build, deployment and validation

React + Vite; base `/daily-app2/20261127-14/`. `npm install`, `npm run predeploy`. Per-app gh-pages dependency and scripts remain, but publish **only the root combined-site deploy**, never the per-app deploy over the collection. Root README documents Pages verification.

See VALIDATION.md and machine-readable reports for observed checks and limitations. `core-test.mjs` independently exhausts both strip counts and verifies rectangle bounds/gutters; `browser-test.cjs` uses actual Chrome and real MiniLM for two different fixtures, max batch, edits/holds/undo, exports, clipboard, offline inference, validation, cancellation, shared inventory and responsive controls. `artifact-test.py` independently parses JSON/CSV/XML and checks current review, geometry, grain and stock conservation. `defensive-test.cjs` injects failures only for defensive tests; successful inference is never mocked. `recovery-test.cjs` checks actual network recovery and stale callbacks after a newer real run. Tiny synthetic fixtures are not a representative accuracy benchmark.
