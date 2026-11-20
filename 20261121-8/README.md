# Range Harbor

A local-AI range-note reconciliation and sketch-position utility for garden, exhibition and field-sketch coordinators. Input informal landmark descriptions and measured horizontal distances; export a reviewed, traceable position/recheck worksheet. Not navigation, construction or safety surveying.

## Workflow
1. Load **Garden survey** or **Exhibition setup** synthetic data, paste source JSON or import a `.json` source/audit. Define known landmark coordinates, one common unit, search bounds and 10–100 grid steps per axis.
2. Explicitly **Load AI & reconcile**. Local MiniLM embeddings compare note meanings with landmark definitions. Inspect each source snippet, ranked cosine evidence and coordinates. Correct anchor, asset ID or distance; approve or hold every note. AI does not extract distances or verify physical identities.
3. **Apply reviewed ranges**. For each asset with at least three distinct non-collinear approved anchors, search the entire finite grid for the minimum squared-range residual. Review coordinate, grid spacing, signed residuals, boundary/tie cues and anchor-centroid baseline RMS.
4. Download current reviewed JSON, Audit CSV, Position CSV or Markdown; copy the worksheet. Any review edit invalidates the applied snapshot and disables exports until reapplied. Undo restores the prior review state; originals never change. JSON audit reimport restores originals only, not old approvals.

## Real AI, licenses and runtime
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Model `main` is unpinned; observed revision in `runtime-dependency-audit.json`.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU single thread. No WebGPU, API key, paid service, server or optional remote provider. React 18.3.1 + Vite; React 18 limits collection size without removing earlier apps.
- Real AI proposes semantic landmark identities. Cosine ranking, schemas, human review, finite grid minimization and exports are deterministic. Similarity is not confidence, truth or identity proof. Imported text cannot change authority or request credentials.
- Immutable same-origin shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating apps/assets. Protocol `{id,texts}` returns progress/batch/result vectors or error. These dependencies and their hashes were inspected and verified.
- First explicit loading needs internet for ~23 MB model/tokenizer plus ~27 MB CPU runtime and ~0.6 MB worker/factory. Progress is per model file and processed-text count. Cancel terminates the worker; 180-second timeout and retry are available. No fabricated fallback on failure.

## Privacy and offline scope
Content stays in browser memory and a local worker. Network traffic only downloads code/runtime/model assets from this site and Hugging Face/CDN; no text uploads, analytics, credentials or remote actions. Exports include original input, so handle your own audit files appropriately. Worker/factory/WASM use Cache API; model assets use Transformers browser caching. A warmed, already-open page was tested with all network disabled and a fresh worker performing actual inference. Offline page reload/navigation is **not** promised. Eviction/private mode may require downloads again.

Modern secure-context browser with module workers, WebAssembly SIMD, Cache API and several hundred MB free RAM. Desktop Chrome CPU tested. Responsive 320/390/1440 widths tested, not physical phones, all assistive technology, Safari, Firefox or Edge. Network/unsupported-device errors give actionable retry requirements. CPU is the default, not a hidden untested fallback.

## Schema, limits and failure handling
Source JSON 1–60,000 characters; `.json` file ≤2 MB including larger audit envelopes. `context`: 1–300 characters; `unit`: 1–20. `bounds`: finite `xMin<xMax`, `yMin<yMax`, coordinates within ±100,000; integer `steps` 10–100. `anchors`: 3–12 `{id,text,x,y}`, text ≤300 characters, coordinates ±100,000. `records`: 1–48 `{id,text,asset,distance}`; distance finite 0–100,000. IDs/asset IDs: letter-first ASCII letters/digits/underscore/hyphen ≤40; record/anchor IDs unique in their collection. Review notes ≤1,000.

At most 60 embedding texts, processed four per chunk. Text is independently bounded to 300 characters. Actual tokenizer ceiling 512 tokens; pipeline `max_length:256` is ignored by this feature-extraction implementation, so 256 is not claimed as an enforced cap. Finite unit-normalized 384-D output vectors and review/evidence schemas are validated. Monotonic run IDs guard worker creation, responses and file reads; cancellation/input changes terminate work and prevent late responses replacing a newer run. Empty/oversized/malformed sources, unsupported files, invalid numbers, worker/download/runtime errors, malformed vectors and timeout are explicit.

## Deterministic positioning and baseline
For each asset, use only approved ranges. Fewer than three distinct anchors, duplicate anchors, or collinear/numerically near-collinear geometry produce an unavailable worksheet with reason. Holds are excluded from calculations but retained everywhere in the audit. Assets with only held rows still appear as unavailable.

Evaluate every `(steps+1)^2` point in the closed rectangle. Minimize `sum((hypot(x-anchor.x,y-anchor.y)-measured)^2)`. Compare costs using relative tolerance `1e-12*max(1,currentBest)`; tied minima retain the first X-then-Y grid point and count ties. Report `sqrt(sumSquaredResidual/n)` in the common unit, each signed predicted-minus-measured residual, exact grid spacing and candidate count. The baseline is the unweighted centroid of used anchor coordinates, evaluated on exactly the same ranges (it can lie outside the search box). Grid fit is not guaranteed better than that continuous baseline when the grid is coarse. No invented time, accuracy or improvement percentages.

The result is a finite-grid optimum, **not** a continuous optimum or confidence/uncertainty region. A boundary fit may indicate wrong bounds; ties indicate ambiguity at the chosen resolution. There is no geocoding, slope correction, unit conversion, outlier removal or uncertainty calibration. Wrong links, poor geometry, biased ranges and obstacles can mislead even with low residual. Recheck before transferring to a sketch; no maps or equipment are changed.

## Artifacts
- JSON `range-harbor/v1`: exact original input, all reviews/holds/evidence, positions/residuals and limitations.
- Audit CSV: every original and reviewed record, notes and neural evidence; quoted commas/newlines handled. Formula-like string prefixes escaped for spreadsheet safety; JSON retains exact strings. Numeric values stay numeric.
- Position CSV: every reviewed asset, including held-only/unavailable assets with explicit reason, coordinates, RMS and baseline, spacing, ties and boundary status.
- Markdown: usable position/recheck worksheet, all residuals and complete source review. Clipboard copies the same current artifact.

## Validation and build
See `VALIDATION.md` and machine-readable reports for actual outcomes. Two small fixtures matched all 12 landmark links (first-anchor baseline 4/12) and four known coordinates. A negated coffee/registration challenge **failed**, selecting coffee: mandatory review remains essential, and these tiny examples are not a general accuracy estimate.

`npm install`; `npm run predeploy`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but **publish only using the repository root combined workflow** to preserve the collection. No individual app deploy was used.

## Collection size preservation
The unchanged conservative 1 GB guard initially blocked assembly by 187,468 bytes. Extended the existing deploy-only byte-identical geometry runtime reuse to `20261028-17` → immutable `20261028-24/assets/manifold-BE4c7gO-.wasm` (541,470 bytes). Older source builds and JS compatibility URLs remain untouched; rewritten entry/worker references are query-versioned. Legacy real worker, image import, fingerprint and valid STL export checks are recorded locally/publicly. No old app was removed and the size guard was not weakened.
