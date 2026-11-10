# Defect Atlas — UNPUBLISHED DRAFT

**Hosting blocker:** three GitHub Pages deployments built successfully but timed out during synchronization. The public app remains HTTP 404; public AI/runtime verification was not possible. Excluded from the gallery and combined deployment; not a completed app. The prior 571-entry public gallery remains intact. See `hosting-attempts.json` and `publication-status.json`.

A static, browser-local quality coordinator's desk: rough reject reports → real semantic defect-category proposals → mandatory human review → count/effort Pareto shortlist → JSON, CSV and Markdown investigation handoff.

## Run and use

`npm install`, `npm run dev`. Production: `npm run predeploy`. Base: `/daily-app2/20261110-13/`. Per-app deploy scripts are present as required, but **publish only from the collection root**, never this app's gh-pages command.

1. Use either synthetic example or paste/import JSON with `name`, `basis` (`units` or `rework`), integer `target` (1–100), `categories` (`id`, `title`, `description`), and `notes` (`id`, `text`, positive integer `units`, nonnegative `minutesPerUnit`). All fixtures are synthetic.
2. Confirm reports describe **disjoint groups of units with one primary defect**. Choose observable categories, not presumed causes. Supply effort estimates yourself; AI never invents quantities or effort.
3. Explicitly click **Load AI & reconcile reports**. Initial internet download is approximately 23 MB model/tokenizer plus 26,861,777 bytes of local WASM (~50 MB total, plus app/worker code). Progress, cancel and retry are visible.
4. Inspect the original snippet, proposed category, category definition and cosine alternatives. Edit category/count/effort, optionally assign an investigation owner/action, then approve or hold **every** report. Cosine is not confidence. Undo restores the prior review state. Review edits reset approval and invalidate applied exports.
5. Apply. Counts or `units × minutesPerUnit` are summed within approved categories, sorted descending, with cumulative shares over the approved total. The smallest prefix reaching the target is marked FOCUS. Ties are ordered by category ID. No positive total means no focus and undefined shares, not zero risk. Held records remain in all audits but not the denominator.
6. Download JSON (complete original input, proposals, reviews, ranking), CSV (all report records, numeric quantities, spreadsheet-formula-safe text), Markdown (ranked shortlist and source-linked handoff), or copy Markdown. Actual current applied results are exported. JSON audit reimport restores original inputs only; rerun and reapprove rather than trust imported approvals. Nothing sends email, changes a quality system or orders rework.

## Actual AI, sources and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), [Apache-2.0 license](https://huggingface.co/Xenova/all-MiniLM-L6-v2/blob/main/LICENSE), derived from sentence-transformers/all-MiniLM-L6-v2. Quantized ONNX q8 feature extraction, normalized mean-pooled 384-dimensional embeddings, CPU/WASM, four texts per batch, first 256 tokens.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0); [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) (MIT). Lockfile records dependencies. Model files use upstream `main`; model-host revisions can change. Cosine rankings can change if upstream files change or cache is evicted.
- Embeddings materially match paraphrases not containing literal category titles. No hard-coded AI answers or heuristic fallback. Deterministic schema/vector validation, cosine ranking, reviewed sums, sorting, cumulative percentages, focus selection and exports surround inference. The model is **not** a root-cause model, safety classifier, counting system or general instruction agent.
- Runtime factory and worker are bundled locally. Byte-identical shared WASM lives at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve this older app in combined deployment. See `asset-validation.json` for checksum. No runtime CDN.

## Privacy, downloads and offline scope

Default path has no API key or optional remote provider. Reports, reviews and embeddings remain in memory on-device. Only runtime/model file GET downloads go to the same origin and `huggingface.co` / `*.hf.co`. Downloading weights is not uploading content. No telemetry or model-host request occurs before the explicit load action. Imported text is always model data, never tool instructions.

Cache API stores worker/factory/WASM; Transformers.js caches weights/tokenizer. Tested: after online inference, block all network and perform real inference in a **fresh worker in the already-open page**. Offline reload/app-shell navigation is **not promised**; there is no service-worker shell cache. Private mode, missing Cache API or cache eviction may require another download. Export before leaving: there is no persistent report storage.

## Devices and bounded inputs

Tested on installed desktop Chrome in Playwright, CPU WASM with SIMD, module workers and Cache API. No WebGPU required, so unavailable WebGPU is not a blocker. Current Chrome/Edge-class desktop with sufficient memory and ~50 MB first-download storage recommended; physical phones, Firefox and Safari are unverified. Phone-sized layouts are tested, not physical-device inference/performance. No claim of universal mobile compatibility.

1–8 categories, 1–64 reports, unique IDs per array ≤30 characters, report/definition ≤400 characters, name/title ≤100. Input payload ≤40 KB, audit file ≤1 MB. JSON only; CSV/PDF import unsupported. Units integer 1–100,000; estimated minutes/unit 0–10,000. Owners ≤100, action/rationale ≤500. AI tensor shape/count/norm/finiteness validated before accepting suggestions. The 180-second timeout, worker failures, unsupported WASM, malformed output and download failures show errors without substitute results. Cancel terminates the worker; run IDs guard late worker messages, worker fetches and file reads from overwriting newer input.

## Honest quality limits

Observed known-answer fixtures: **3/4 packaging and 4/4 garment** proposals matched manual category keys (7/8 total), while the literal-title baseline found 0/8. This is a tiny synthetic check, not an accuracy estimate. The model misassigned crushed carton corners to closure integrity; mandatory human correction restored the intended count ranking. Keeping the wrong suggestion changes focus from two categories to one: review matters. Negation and unrelated-text challenges still receive nearest categories; hold them. Scores do not detect all ambiguity or establish equivalence.

Corrected packaging: 60 units, 132 estimated minutes, focus Closure integrity + Compression damage = 52/60 units (86.7%) for an 80% target. Garments: 22 units, 128 estimated minutes, focus Fastener operation + Stitch continuity = 108/128 estimated minutes (84.375%) for a 75% target. These are computations from supplied data, not measured savings. Reviewed changes/holds recompute the denominator.

Unique report IDs cannot detect reused physical units. Counts are not defect rates without production exposure; effort is an assumption; frequency is not severity. The worksheet does not infer causes or prove the 80/20 rule. Investigate before operational action and use a separate safety/severity process.

An independent exhaustive-subset oracle also checked minimum focus-category count and report/unit/effort conservation on 400 generated fixtures.

See [VALIDATION.md](VALIDATION.md) and checked-in test reports for actual checks and publication status.
