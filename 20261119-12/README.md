# Dose Atelier — 20261119-12

A local-AI light-exposure ledger for collection registrars and exhibit planners. Input: informal object descriptions in measured lighting logs, a canonical object register, supplied exposure caps and a future daily display schedule. Bottleneck: reconciling inconsistent names and accounting for bright short segments versus long dim ones. Output: reviewed cumulative lux-hours, remaining whole display days and a complete audit. No objects, lights or external accounts are changed.

Distinct from Lumen Ledger (illuminance/fixture sizing) and Decibel Quilt (logarithmic sound energy averages): this accrues additive per-object exposure within a supplied budget period and plans remaining display days. Both galleries inspected: 720 existing second-gallery entries (238 AI utilities), original read-only gallery 3,595 entries. See gallery-catalog-review.json.

## Workflow and formats

1. Choose either synthetic example, paste JSON or import `.json` under 2 MB. Shape: `{context, objects:[{id,description,budget,earlierDose,plannedLux,plannedHours}], logs:[{id,objectText,lux,hours}]}`. The examples' budgets are invented test assumptions, not conservation guidance.
2. Set the budget period in context, edit each supplied cap, earlier dose and planned lux/hours per day. All segments must be disjoint per object and in the same period; earlier dose excludes the supplied logs. Lux must be a constant measured level within each segment. The app cannot discover omitted/overlapping real-world intervals or verify measurements.
3. Explicitly **Load AI & reconcile inputs**. Real neural embeddings rank object descriptions by semantic similarity. Inspect cosine evidence and original text; it is not confidence. Review each object identity and numeric exposure. Approve or hold, add multiline notes, undo changes. Changing identity/numbers resets approval. Every review edit invalidates exports until Apply.
4. Apply reviewed plan. Any hold blocks all day recommendations. Any register object without a reviewed log blocks all day recommendations, retaining every object and row. A verified zero-exposure log is represented by 0 lux and positive hours; no missing log is assumed zero. Over-budget objects get zero future days and retain negative remaining dose.
5. Export JSON (lossless originals/reviews/neural evidence/plan), audit CSV (all original and reviewed log values), Dose CSV (all object budgets/dose/day metrics, ready worksheets only), or Markdown (complete audit and use checklist). Copy uses current Markdown. CSV quotes commas/newlines and apostrophe-prefixes formula-leading strings; genuine numbers, including negative remaining dose, remain numeric. Compact CSVs omit some assumptions; JSON/Markdown include context.
6. Reimporting a JSON audit restores ORIGINAL INPUT ONLY, never prior approvals. Fresh AI/review is required. To reuse reviewed measurements as inputs, explicitly update source JSON. JSON is lossless; spreadsheet-formula-safe CSV strings intentionally gain an apostrophe.

Limits: 2–8 objects, 1–24 exposure segments; descriptions/context 1–300 characters; IDs 1–40 ASCII alphanumeric/underscore/hyphen; source ≤50,000 characters; import ≤2 MB; review notes ≤1,000 characters. Whole numbers only: measured lux 0–100,000; hours 1–10,000; future lux 1–100,000, hours/day 1–24; caps/earlier dose 0–100,000,000 lux-hours. Measured zero lux is allowed. All computed dose totals remain exact safe integers at these bounds. No automatic unit conversion.

## Real AI / runtime / downloads / privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX model, normalized mean-pooled 384-dimensional embeddings. Material AI step: semantic alias reconciliation, not keyword sorting, regex classification or canned responses. Count/dimension/finite/unit-norm schema validation precedes cosine ranking.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU, API key, paid service or backend. Up to 32 texts, four-text inference chunks. The shared pipeline's max_length:256 does not override tokenizer behavior: actual tokenizer ceiling is 512 tokens. Character limits bound input.
- About 23 MB weights + 27 MB WASM plus tokenizer/runtime files. Internet is required on first explicit load. Progress/cancel/retry/180-second timeout and actionable network/runtime errors. No deterministic fallback or fabricated model output.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps and paths. Hash/byte audits cover all three. These are shared compiled executable assets, not remote CDN scripts.
- Only model/tokenizer downloads use Hugging Face/CDN/Xet. Upstream main revision is not pinned. Network audit records only static GET/HEAD, no bodies or user text in URLs. Reports strip signed download query values. No user-content upload, telemetry, provider integration, stored credentials or use of agent credentials. Imported instructions are data, not tool authority.
- Cache API stores downloaded assets, not log content. **Tested offline scope:** create a fresh worker and perform real inference in an already-open warmed page with networking disabled. Offline reload/navigation is not promised. Private mode, cache eviction and first run require internet again.
- Requires module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. Desktop Chrome CPU with GPU disabled tested; 320/390px layouts emulated/visually inspected. Physical phones, low-memory devices, Safari/Firefox and screen readers untested. Unsupported workers/WASM produce errors rather than fake AI.
- Run IDs guard asynchronous worker fetches, late replies and delayed file reads. Cancel/input change terminates workers and invalidates snapshots. Retry recreates a worker; malformed vectors/messages are rejected.

## Deterministic planning / comparison / limitations

For each object: logged dose = sum(lux × hours); total = earlier dose + logged dose; remaining = supplied cap − total. Planned daily dose = plannedLux × plannedHours. Remaining whole display days = max(0, floor(remaining / daily dose)). For nonnegative remaining dose, returned days fit the cap and one additional day would exceed it. There is no automatic annual reset. Missing or held logs block all future day outputs.

The explicitly **invalid unweighted baseline** uses mean(segment lux) × sum(segment hours), plus earlier dose. It is a common shortcut, not a valid alternative when durations differ. Baseline whole days use exact integer numerator arithmetic to avoid fractional-mean roundoff. The UI compares actual computed exposures and per-object days, not a fabricated improvement percentage, accuracy or elapsed-time saving.

Lux-hours are a simple planning model, not a damage prediction or conservation certification. Supplied caps are never inferred as authoritative. UV/spectrum, material sensitivity, reciprocity failures, measurement error, dark recovery, seasonal schedules and changes in illumination are not modeled. Consult your conservator. Neural retrieval always returns a nearest object even for unrelated/negated text, so mandatory review and holds are essential. Two tiny fixtures are not general accuracy evidence.

## Development and verification

React + Vite, base `/daily-app2/20261119-12/`. `npm install`; `npm run dev`; `npm run predeploy`. Per-app gh-pages and exact predeploy/deploy scripts retained. Publish ONLY with repository ROOT predeploy/deploy so the collection is preserved.

Commands: `node core-test.mjs`; `python3 serve-built.py` (6981, actual dist); `node browser-test.cjs`; `node defensive-test.cjs`; `node newer-run-test.cjs`; `node import-stale-test.cjs`; `python3 artifact-test.py`. Browser scripts use the installed Playwright. APP_URL/REPORT select assembled/public checks. Successful inference always uses real MiniLM; fake workers are fault/race tests only. `gallery-test.cjs` compiles every inline script and compares every old entry; `gallery-ui-test.cjs` supports GALLERY_URL/GALLERY_REPORT. `asset-audit.py` supports ASSET_BASE/ASSET_REPORT. Do not run browser tests concurrently with deploy-folder rebuilding.

Observed validation and limitations: [VALIDATION.md](VALIDATION.md). No digest is sent. The original daily_app tree remains read-only.
