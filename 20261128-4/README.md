# Border Folio

A local-AI mat-opening worksheet for exhibition preparators. Match informal frame handoff notes to a supplied frame catalog, review every link and dimension, calculate usable mat borders and export the current reviewed cut worksheet. Unlike a sheet-inside-frame check, this process tests minimum borders and bottom weighting in both frame orientations.

## Workflow

1. Try either synthetic batch, paste source JSON or import `.json` (1 MB file limit). Source JSON is bounded to 30,000 characters, 2–8 profiles and 1–12 sheets. Notes/descriptions are limited to 200 characters. IDs are unique per table. Dimensions are integer millimeters; see the labeled editors and examples for numeric limits.
2. Explicitly select **Load AI & match profiles**. Download progress, four-text batch progress and cancellation are shown. Cancel terminates the worker; retry uses the same button. Timeout is 180 seconds. Input changes invalidate running work and previous exports.
3. Inspect cosine-ranked source descriptions; correct the frame, dimensions, edge overlap and bottom weighting. Numeric/profile edits reset approval. Approve or hold every sheet. Undo restores the preceding review layer; originals stay unchanged.
4. Apply the reviewed worksheet. JSON, complete CSV and Markdown retain every sheet, including holds/failures. Cut CSV requires all sheets approved and feasible. Any edit invalidates the applied snapshot. Copy handoff uses the current Markdown. Audit JSON reimport restores originals for a fresh run, not untrusted prior approvals.

## Real AI, runtime and privacy

Default model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8. Transformers.js (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, normalized mean-pooled 384-dimensional embeddings. AI semantically retrieves frame descriptions from rough notes; it does not measure or extract numbers. Similarity is not confidence and nearest-class retrieval can match irrelevant requests. English-first; negation, ambiguous wood/finish descriptions and unknown frames require human judgment.

Initial download is approximately 50 MB (23 MB weights plus 27 MB WASM/runtime). Internet is needed to this static site, Hugging Face and its CDN. A current browser with module workers, WebAssembly SIMD and sufficient memory is required; WebGPU is not required. Tested in installed desktop Chrome with GPU disabled. Physical phones, other browsers and low-memory devices are untested. No credentials or provider integration exists.

All notes and embeddings stay in the browser worker; requests are model/runtime GET downloads, not content uploads. Inputs are data, never tool instructions. Nothing is written to equipment, sent externally or deleted. Closing the tab loses the editable workspace; download JSON to preserve originals. The browser Cache API stores model/runtime assets and can be evicted. After an online run, **fresh-worker real inference in the same open page with network disabled was tested**. Offline page reload/startup is not supported or claimed.

To avoid duplicate runtime bytes in the collection, this app reuses the immutable same-origin worker from `20261115-6/assets/ai.worker-lkOoPoq8.js`, factory from `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM from `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these collection paths. SHA-256 and byte lengths are in `runtime-provenance.json`. Worker source is explicitly cached then instantiated as a module blob. Factory and WASM are explicitly cached by the shared worker. The worker chunks four short texts at a time. The pipeline passes truncation/max_length; character limits are the application's strict input bound, not a promised exact tokenizer token cap. Finite normalized vectors and all row counts/dimensions are validated before ranking.

## Deterministic geometry and limits

Opening dimensions = sheet dimensions minus twice the overlap. For each 0°/90° frame orientation, left/right borders are equal; bottom border equals top plus requested extra. A feasible plan requires positive opening dimensions and all four borders at least both the supplied minimum and per-edge overlap. The overlap condition ensures the complete untrimmed sheet remains inside the frame. Choose the feasible orientation maximizing the smallest border; tie retains original orientation. If neither fits, retain the failed worksheet without releasing a cut list. Artwork orientation stays fixed; it is the frame that rotates.

Baseline: sheet fits supplied unrotated frame, ignoring mat borders. The displayed false-pass count is the number passing that shortcut but having no feasible mat plan. Rotation count and ready count are directly computed, not accuracy or time-saving estimates. Held rows remain in audit metrics.

No blade/bevel kerf, frame rabbet tolerance, backing thickness, hinge system, glazing clearance or conservation suitability is modeled. Rotation may be unsuitable for decorated mouldings. Supply actual usable dimensions and confirm physically. Diagrams are previews, not to-scale print templates or machine instructions.

## Artifacts and validation

JSON includes original source, reviewed rows, ranked evidence, solver outputs and summary (`border-folio-v1`). CSV uses RFC-style quoting and CRLF; formula-like text is apostrophe-prefixed while signed numeric results remain numbers. Markdown is a complete handoff. Cut CSV uses the same explicit geometry columns and is gated for release. There is no SVG machine export.

`npm run predeploy` builds React + Vite using `/daily-app2/20261128-4/`. Required per-app deploy script exists but **publish only through root `npm run deploy`**, preserving the combined collection. See `VALIDATION.md` for observed evidence and limitations; browser tests are real model tests, except explicitly injected defensive failures.
