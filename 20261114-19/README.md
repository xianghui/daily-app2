# Stack Harbor

A no-key, local-AI signed tolerance-chain worksheet for design reviewers. Rough contribution descriptions often use inconsistent names; local semantic inference reconciles them to your supplied chains. Humans verify every link, sign, unit and number before deterministic interval calculations. Not a generic chat tool or a CAD/STL generator.

## Workflow

1. Choose Assembly gaps or Event budgets (synthetic), paste source JSON, or import a source/audit `.json` file.
2. Define 2–6 chains with `id`, `label`, `description`, `unit`, `lower`, `upper`. Targets are inclusive and editable in source. Each contribution has `id`, `description`, nonnegative numeric `nominal`, symmetric `tolerance` half-width, `sign` (+1/−1), and `owner`.
3. Explicitly click **Load AI & match chains**. First download requires internet: about 23 MB quantized weights/tokenizer plus 27 MB WASM runtime and app code. Inspect progress; cancel terminates the worker. Retry starts fresh.
4. Inspect source snippets, chain definitions and cosine evidence. Correct chain, sign, numbers, owner and multiline action note. Approve or hold every row. No bulk auto-approval. Changing source invalidates the whole run. Any review edit invalidates applied exports; undo restores the previous review state.
5. Apply reviewed chains. Compare nominal-only placement with worst-case bounds, inspect conditional RSS and largest tolerance contributors. Held terms remain in the audit and cause an explicit partial warning. Check chain completeness yourself even if every supplied row is approved.
6. Download JSON (originals, reviews, evidence, metrics), CSV (every row including holds), or Markdown recheck worksheet; copy Markdown if clipboard permission is available. All outputs reflect the current applied review. Reimport JSON restores originals only, never old approvals. CSV formula-leading text is escaped with an apostrophe; genuine signed numeric fields remain numbers.

## Real AI, runtime and license

- `Xenova/all-MiniLM-L6-v2`, https://huggingface.co/Xenova/all-MiniLM-L6-v2, Apache-2.0. Small English semantic feature extractor, not a generative assistant.
- Transformers.js 4.x and ONNX Runtime Web WASM CPU, installed/pinned by package-lock.json. Mean-pooled normalized 384-dimensional embeddings; cosine matches each note to the supplied chain definitions. It always proposes a nearest chain; unrelated, ambiguous and negated notes can still mislink. Similarity is not confidence, dimensional verification or engineering truth.
- AI does not extract numeric values, signs or units. Numeric/schema checks, review guards, interval arithmetic, RSS and sensitivity ordering are deterministic.
- Bundled worker and module factory are local. Byte-identical shared collection WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; retain that existing app asset. Vite base is `/daily-app2/20261114-19/`.
- Recommended: current desktop Chrome, module workers, WebAssembly SIMD, Cache API and several hundred MB free RAM. No WebGPU or key needed. Physical phones, Safari/Firefox, low-memory devices and assistive-technology screen readers were not tested.

## Bounds and interpretation

Nominal = Σ(sign × nominal); worst-case half-width = Σ(tolerance). Both signs widen the worst-case interval. Conditional RSS half-width = √Σ(tolerance²), assuming independent centered components whose supplied half-tolerances each equal 3 standard deviations. This is not a guaranteed bound or a measured probability of fitting. Correlation, bias, non-normal behavior and nonlinear/angular chains are unsupported. No conversion of units occurs. All rows assigned to a chain must already use that chain's unit. All-zero tolerances yield undefined squared-tolerance shares rather than invented percentages. Contributions are ranked by half-tolerance; this is a transparent recheck aid, not cost-optimal redesign. Targets and design completeness are user responsibilities. No release/production authorization or device control.

Limits: 2–6 chains; 1–32 rows; unique IDs ≤40 characters; descriptions ≤300 characters; project/owners ≤150; review notes ≤1000; source ≤30,000 characters; JSON import ≤2 MB including audit metadata. Nominals 0–1,000,000; half-tolerance 0–nominal; targets within ±1,000,000. Four texts per inference batch, 256 tokens/text, 180-second whole-run timeout. All source rows and original input survive exports, including holds. Empty, malformed and out-of-bounds data blocks processing. Finite normalized embeddings with exact count/dimension are required before suggestions appear.

## Privacy, downloads and offline scope

No notes or numbers are uploaded. User content is kept in page memory unless explicitly downloaded/copied by the user. Only model/tokenizer downloads go to Hugging Face and its CDN/Xet redirect hosts; runtime downloads stay on this collection. No remote inference, credentials, provider integration, telemetry or external actions. Imported instructions remain data, never tool authority.

Worker source, local module factory and WASM are cached explicitly in Cache API; Transformers.js caches model files. Cache contents are model/runtime assets, not notes. Fresh-worker inference after an online run was tested with browser networking fully disabled on the **already-open warmed page**. Offline reload/navigation and long-term cache persistence are NOT promised. Cache eviction, private mode and host changes may require downloads again. Model revision uses the host's default revision, not a frozen immutable model revision. Network/worker/runtime errors produce actionable errors and no fabricated suggestions.

## Build and validation

`npm install`; `npm run predeploy` builds dist. Per-app `deploy` remains defined for contract compatibility, but **publish only through the root combined deployment**. See [VALIDATION.md](VALIDATION.md), browser validation JSON/logs, independent artifact checks, defensive and stale-run checks. Production bundle was tested, not only Vite dev. Public checks are recorded separately after deployment.
