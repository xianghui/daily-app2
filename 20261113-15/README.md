# Dry Matter

A local-AI material-intake reporting utility for warehouse/materials coordinators. Distinct from blend optimization or solution dilution: this tool reconciles supplied wet-basis moisture measurements into dry solids and material-specific standardized-mass ledgers. It does not prescribe processing or certify inventory quality.

## Workflow
1. Paste bounded JSON or import `.json` source/audit (≤2 MB). Two fully synthetic examples are included.
2. Edit project, 2–8 material profiles (`id`, `label`, `description`, `target` moisture basis points) and 1–40 records (`id`, `note`, `mass` grams, `moisture` wet-basis basis points, `owner`). Source ≤40,000 characters; note/description ≤300 characters.
3. Explicitly load the model and match intake. Review semantic proposals and source/evidence. Correct material, mass or moisture; approve or hold every record. Undo any review edit.
4. Apply. Held rows are preserved but excluded: a prominent PARTIAL banner prevents interpreting approved-only totals as all received inventory. Every review edit invalidates exports.
5. Download actual current JSON, CSV or Markdown; copy Markdown. JSON includes originals, reviews, line calculations and groups. Audit reimport restores originals, not approval. CSV spreadsheet-leading formula characters are escaped; multiline text survives.

## Real AI, runtime and downloads
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 feature extraction. Upstream [sentence-transformers model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Transformers.js 4.3.2 / ONNX Runtime Web; normalized mean-pooled 384-dimensional embeddings. Cosine similarity ranks supplied material descriptions. This is not generative extraction or confidence. Every proposal requires review; unrelated text still matches. Model revision follows the host default and is not pinned.
- Approximately 23 MB initial model/tokenizer download from Hugging Face and documented redirects/CDN, plus 26,861,777-byte WASM and local module factory. App/worker runtime JS is bundled locally. Byte-identical WASM reuses immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; root deploy must preserve it. Asset audit records actual hashes.
- WebAssembly SIMD CPU and module workers required; WebGPU not required. Desktop Chrome tested with GPU disabled. Several hundred MB free RAM recommended. Physical phones, Firefox, Safari and Edge unverified.
- Batch size four; token cap 256 per text; source limits avoid unexpectedly large contexts. 180-second timeout, model/file progress and cancellation. Worker termination and run identity prevent stale/cancelled results. Errors provide retry, never fake AI. Vector count, dimensions, finite elements and normalization are validated.

## Privacy and offline
No server, keys or optional provider integration. User content stays in page/worker memory; only runtime/model files download. No content uploads or automatic document storage. Imported instructions remain data. Assets cached via Cache API; browser cache eviction requires internet. Tested offline scope is an already-open warmed page with a new worker and real inference. Offline navigation/reload is NOT promised. Clear browser site data to remove cached assets.

## Deterministic reporting
Wet moisture 2000 bp = 20.00%. Dry solids = received × (10000 − moisture) / 10000. Standard equivalent = received × (10000 − moisture) / (10000 − target). Both use exact integer ratios and half-up whole-gram rounding independently (standard calculation never uses rounded dry). Water = received − rounded dry. Adjustment = standardized − received, possibly positive for a wetter reporting basis; this is not advice to add water. Group totals sum rounded lines. Mass range 1–100,000,000 g; moisture 0–9500 bp; target 0–9000 bp. Holds never enter totals. Gross approved mass is the baseline; conversion differences are not savings, accuracy or productivity claims. Separate materials remain separate reporting groups.

Assumes representative measurements, conserved dry solids and water-only differences. No contaminants, volatile losses, handling losses, uncertainty or contractual tolerance model. Target values are synthetic/user-supplied conventions, not authoritative grade standards. Overall gram totals do not make unlike materials interchangeable.

## Development and validation
`npm install`; `npm run dev`; `npm run predeploy`. Required per-app scripts exist but publish ONLY via repository-root `npm run predeploy` and `npm run deploy` to retain collection.

See VALIDATION.md and machine-readable reports for observed local/combined/public checks. Browser fixtures run actual model inference, not mocks. Defensive tests alone inject errors. Independent Python Fraction oracle checks arithmetic and Python csv checks downloads. No accuracy claim beyond tiny fixtures.
