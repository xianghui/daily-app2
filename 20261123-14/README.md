# Dial Ledger — local-AI regional contact preflight

For contact-import and event operations teams with national-format phone numbers and informal regional context. **Published and verified:** https://xianghui.github.io/daily-app2/20261123-14/ — see public evidence in VALIDATION.md.

## Workflow

1. Paste/edit source JSON or import a `.json` source/audit. Two synthetic examples cover GB/AU/US and FR/JP/DE. They are formatting fixtures only, never contact or dial the example numbers.
2. Define 2–8 profiles: unique `id`, descriptive context `description`, supported uppercase ISO `country`. Enter 1–24 records with unique `id`, context `note`, raw phone `value`. Numbers may include a national/international prefix and optional numeric extension. Whole fields only: not prose or short codes. Country is an explicit user constraint, not autodetected policy.
3. Explicitly click **Load AI & reconcile**. Actual local MiniLM embeddings rank every record note against the supplied profile descriptions; finite normalized 384-dimensional vectors are required. Phone digits never go to the model. This replaces repeated region-context lookup across a mixed batch, not digit validation. Inspect cosine evidence; it is not confidence.
4. Review every country and raw phone. Edit from source evidence, approve or hold. Changes to country/number reset approval; any edit invalidates exports. Undo last edit restores reviews but requires reapply. Originals are never changed. Review notes support newlines.
5. Apply the reviewed scenario. `libphonenumber-js/max` parses whole fields and checks metadata validity plus exact country agreement. It produces E.164, extension and inert RFC3966 tel URI text. No calls are initiated. Exact `(E.164, extension)` collisions block **every** member; explicitly hold duplicates and reapply rather than silently merging.
6. Download current reviewed JSON, complete audit CSV/Markdown or approved-only **Release CSV**, or copy the worksheet and audit. JSON reimport restores original inputs, not old reviews. All source records, including held/invalid/colliding records, survive complete exports. Release CSV is for machine import: keep every column as text to preserve plus signs/leading zeros; it is not spreadsheet-formula-hardened. Audit CSV prefixes formula-leading text with `'`; JSON remains lossless. Extensions distinguish destinations: same base number with different extensions does not collide.

## Real AI and runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized ONNX q8, Apache-2.0. Semantic embedding/retrieval, not generative telephone repair. About 23 MB weights plus small tokenizer/config files.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web, MIT. WASM CPU, one thread, normalized mean pooling, chunks of four. Shared worker's `max_length:256` pipeline option is not an enforced limit; tokenizer configuration enforces **512 tokens**. Profile descriptions/notes are each bounded to 200 characters as well. Up to 32 embedded texts.
- Same-origin immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and 26,861,777-byte WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these published assets and originating apps. Hashes in `runtime-dependency-audit.json`.
- [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js) **1.13.17**, MIT; full phone metadata bundled locally. Number parsing, validity, country comparison, formatting, collision checks, all review guards and export metrics are deterministic. Static-host compatible; React + Vite, no backend or external AI integration.

Before explicit loading, the app describes the ~50 MB first-run model/runtime download, internet requirement, cancellation, privacy and supported device. No key, login or mandatory paid service. Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB available RAM. WebGPU is not needed; actual desktop Chrome tests disable GPU. Physical phones and other browser engines are untested. No inference substitutes or canned responses.

## Privacy, caching and failure handling

App code/metadata/runtime are same-origin; weights/tokenizers download via Hugging Face/CDN. No user text in request URLs or bodies, no remote inference, analytics, credentials, localStorage persistence or external actions. Everything entered is data, never instructions or tool authority. Only synthetic fixtures are committed. Request audits retain host/path/query-key names, **not temporary CDN query tokens**.

Worker source, factory and WASM are explicitly bridged from Cache API to blob worker/module URLs; the model runtime caches model files. Tested offline scope: **a new real worker in an already-open warmed page after a successful online run**, with browser network disabled. Cold offline reload/navigation is not promised. Evicted/disabled caches require internet. Cancelling terminates workers; input changes invalidate run IDs, file reads and worker-source fetches. Late messages cannot overwrite new input/results. Progress reports downloads and embedding chunks. 180-second timeout and retry; failed downloads, missing runtime support, malformed vectors/messages and worker errors show actionable errors and never fabricate suggestions.

Source ≤60,000 characters; imported JSON ≤16 MB (audit envelope can be larger than source). Title ≤200, profile ID ≤50, record ID ≤100, context note/description ≤200, phone ≤1000, reviewer note ≤2000, numeric extension ≤10 digits. Strict schema rejects unexpected keys and duplicate IDs. Whole-field metadata parsing rejects unrelated prose. International numbers must match the reviewed country; nongeographic/ambiguous shared-code numbers may be blocked. No URI input support promised; exported URIs are verified with an independent parser.

## Interpretation and comparison limits

Short English context descriptions are recommended; multilingual contexts were not tested. Semantic similarity may misinterpret negation, unknown regions or mixed-purpose contexts; nearest profile is always only a proposal requiring review. A metadata-valid number does not establish allocation, reachability, ownership, consent or freshness. This is a preflight aid, not an authoritative phone registry. Metadata can age; verify against current sources. No automatic digit fixes, address-book changes, calls or messages.

The baseline counts exact raw-string duplicate pairs among the **same approved metadata-valid records**. The reviewed method counts E.164-plus-extension pairs. Metrics separately count raw-baseline misses and false groupings (same national digits can mean different countries), not a potentially negative difference. This is computed data consistency, not AI accuracy, time saved or identity assurance. No benchmark or universal accuracy claim.

## Development and publication

`npm install`; `npm run dev`; `npm run predeploy`. Per-app `predeploy` is exactly `npm run build` and `deploy` exactly `gh-pages -d dist`, but **publish only from the collection root**, never from this app. Vite base `/daily-app2/20261123-14/`.

Production browser, independent Python artifact parsing/libphonenumber oracles, defensive faults, concurrency guards and public byte checks are described in [VALIDATION.md](VALIDATION.md). Tests use local Playwright and optional independent Python `phonenumbers` installed outside the repository; these are validation tools, not app dependencies.

Collection size guard remains unchanged. Deploy-only byte-identical legacy geometry reuse additionally covers `20261029-24` → `20261028-24`; source builds and compatibility JS URLs remain intact. Actual affected legacy worker/import/export and portable design restoration must pass locally and publicly.
