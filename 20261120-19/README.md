# Trend Cairn

A local-AI workbench for workshop/service analysts who repeatedly reconcile rough measurement labels before checking process drift. Input → real semantic series linking → mandatory observation review → robust-trend/recheck worksheet → usable exports. Not a chatbot, forecasting engine or automatic outlier remover.

## Workflow

1. Choose either synthetic example, edit batch JSON, or import source/audit `.json` under 2 MB. Supply comparable series descriptions, actual units, absolute residual tolerances and observations with numeric day indices.
2. Explicitly choose **Load AI & reconcile** after reading the download notice. Inspect original snippets and candidate cosine similarities. AI matches informal descriptions to defined series; no values or days are generated.
3. Correct each series/day/value and approve or hold every observation. Add multiline review/recheck notes. Undo restores prior reviews; originals are immutable. Holds remain in audits and are excluded from calculations.
4. **Apply reviewed checks** creates an in-app result. Each series needs four distinct approved days. Duplicate/near-duplicate days or too few points produce an explicit unavailable result, not silent merging/dropping.
5. Compare median pairwise Sen slope against earliest-to-latest endpoint slope. Inspect actual points/fits, tolerance-based rechecks, residuals and leave-one-out MAEs. Export JSON, complete observation CSV, series-summary CSV or Markdown; copy worksheet also works. All review changes invalidate exports until reapplied. Reimport restores originals only, requiring renewed AI/review.

## What is AI, and what is deterministic?

Real neural feature extraction uses **Xenova/all-MiniLM-L6-v2**, Apache-2.0, [model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), through **Transformers.js 4.3.2**, Apache-2.0, and ONNX Runtime Web, MIT. Quantized q8 ONNX runs on **WASM CPU**, one thread, mean pooling, normalized 384-dimensional vectors. No WebGPU needed. Candidate rankings are cosine dot products on the real embeddings, not keyword heuristics or canned answers. Similarity is not a probability/confidence; every observation requires human review. Quantities, time indices, assumptions and tolerances are provided by the analyst.

Deterministic validation checks vectors, schema, finite bounds, unique IDs and reviewed assignments. The trend slope is the median of all pairwise `(value_j-value_i)/(day_j-day_i)`; intercept is `median(value-slope*day)`. Endpoint baseline joins earliest and latest points. Flags identify absolute fitted residuals strictly greater than the user tolerance, never automatically delete a reading. LOO MAE refits each method without one observation at a time; endpoint omissions require extrapolation. These are descriptive diagnostic comparisons, not accuracy guarantees or future forecasts. There are no invented improvement/time percentages.

Sen slopes can fail with many anomalous readings, seasonality, serial dependence or changed operating conditions/exposure. Similar labels and irrelevant notes can mislink. Neither the AI nor deterministic statistics establish causation, significance, unit equivalence or the legitimacy of excluding an observation. Small synthetic fixtures do not establish broad accuracy. See [observed validation](VALIDATION.md).

## Downloads, runtime and privacy

First explicit run needs internet and approximately **23 MB model weights plus 27 MB WASM** (plus bundled code/tokenizer/config/factory). Weights download from Hugging Face and its documented redirect/CDN hosts. Requests carry only public asset paths; text remains in local worker memory, not URLs/request bodies. No providers, shared keys, analytics, remote actions or persistent source-data storage. Export before closing. No credentials are requested or bundled.

The worker/runtime are immutable shared same-origin assets already in this collection:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (bundled Transformers.js worker)
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (CPU module factory)
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes)

Preserve those older builds/URLs in the combined deployment. The app downloads/caches worker source then starts a module blob worker. Its inspected source explicitly caches the factory and WASM before inference; Transformers.js caches model files. Hashes, model revision observed this run, actual tokenizer ceiling and runtime protocol are in `runtime-dependency-audit.json`. The shared worker uses unpinned model `main`; upstream changes can change results. It processes four texts per batch. The feature pipeline ignores the supplied per-call max_length; actual tokenizer ceiling is 512 tokens, with descriptions separately capped at 300 characters. No oversized general-purpose model is promised.

Progress displays file download and actual embedding batch counts. Cancel kills the worker; 180-second timeout and request/worker/schema errors give actionable retry messages, never fake AI. Run IDs guard late worker fetches, results and file reads from replacing newer inputs. No tool use is delegated to model output; imported instructions are just inert text.

Use a secure-context modern browser with WASM SIMD, module workers, Cache API and several hundred MB free RAM. Desktop Chrome CPU was tested with GPU disabled. Physical phones, Safari/Firefox and low-memory devices remain unverified. A missing runtime produces an error, not a purported WebGPU requirement or silent fake fallback.

After one successful online run, **fresh-worker real inference in the already-open warmed page** was tested with all network offline. Caches are subject to eviction/private-mode restrictions. No service worker/app-shell cache: offline reload, new navigation, installation or indefinite persistence is **not promised**.

## Formats and bounds

Source JSON fields:

- `context`, `assumption`: nonempty ≤300 characters each. The assumption records comparability/exposure constraints.
- `minSimilarity`: finite 0–1 similarity cutoff (not confidence).
- `series`: 2–6 unique `{id,text,unit,tolerance}` entries, positive finite tolerance ≤1,000,000.
- `records`: 1–96 unique `{id,text,day,value}` entries. ASCII IDs 1–40 characters, descriptions ≤300, day 0–10,000, finite signed values within ±1,000,000, already in their respective series units.
- Source ≤60,000 characters; imported file ≤2 MB. Export audits use a separate file envelope limit, then originals are validated at the stricter source limit.

No shared timestamps or implicit parsing of prose quantities. Day indices must share an origin within each series. All approved points are retained; sorted days less than 0.000001 apart block that series to avoid unstable slopes. No interpolated/missing readings or automatic aggregation. Missing series are explicit unavailable summaries.

JSON (`trend-cairn/v1`) preserves all originals, all reviews, candidates, fitted points and errors. CSV audit contains every original and current reviewed field. Series CSV contains all roster entries including unavailable ones. Markdown contains all sources, reviewed decisions and the computed worksheet. Strings with leading spreadsheet-formula characters are apostrophe-escaped in CSV, including multiline strings; signed numeric measurements remain numeric. JSON is the lossless restoration format. All artifact exports use the last explicitly applied *current* review snapshot; edits disable them.

## Build and publish

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base is `/daily-app2/20261120-19/`. Per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but **do not use per-app deploy** for this collection. Root `npm run predeploy` assembles the combined gallery; root `npm run deploy` publishes it. See root README for Pages commit/build verification.

Browser checks use local Playwright with actual Chrome, production bundles and real model. Defensive tests use injection only for failure/stale checks, never the successful AI fixtures. Validation scripts and synthetic exported artifacts are retained; no personal data or signed CDN tokens are stored in reports.

### Collection size maintenance

The first combined build crossed the unchanged 1 GB guard (1,000,207,021 bytes). Extended the existing deploy-only geometry WASM reuse list by **20261028-5 (Pitch & Perch)**, byte-verifying its 541,470-byte `manifold-BE4c7gO-.wasm` against the immutable 20261028-24 copy. Source builds and legacy JS URLs remain untouched; deployed worker/entry references are query-versioned. Default/image/STL import and valid geometry downloads are regression-tested, along with local/public byte checks. Combined assembly is 999,665,762 bytes; no app was dropped and the limit was not raised. Future builders should recheck headroom rather than bypass the guard.
