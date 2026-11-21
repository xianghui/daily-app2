# Buffer Folio

A local-AI planning-range worksheet for small service operations. The repeatable bottleneck is reconciling rough job descriptions with consistent service categories before evaluating fixed time estimates. Real neural embeddings materially determine service suggestions; reviewed groups feed deterministic absolute-error calibration. The output is a source-linked planning range, including an explicit unbounded result when the sample is insufficient—not a promise or booking.

## Workflow
1. Paste/import JSON or select the synthetic Service desk / Workshop jobs example. Define groups, alpha, fixed minute estimates and predetermined calibration, evaluation and future-plan partitions.
2. **Load AI & reconcile** explicitly downloads the model/runtime and runs actual local inference. Inspect download/chunk progress; cancel at any time.
3. Verify the service suggestion and source definition/cosine evidence for every row. Correct groups, partitions and durations, add multiline notes, approve or hold every source. Undo restores the previous review state. Do not exclude or reassign rows because their errors are large.
4. Affirm independently fixed predictions, predetermined grouping/partitions, and exchangeable calibration/future errors. **Apply reviewed audit** validates every row and produces calibration order statistics and planning ranges. The app cannot establish those assumptions.
5. Inspect evaluation coverage separately from point-only exact-hit counts. Download the applied JSON, complete audit CSV or Markdown; copy the worksheet. Review edits invalidate the snapshot and exports. JSON reimport restores originals only and requires new inference/review.

## Real AI and runtime
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; ONNX q8, normalized mean-pooled 384-dimensional embeddings; Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), single-threaded WASM CPU. AI matches descriptions to user-supplied service definitions; it does not predict minutes, extract numeric truth, verify groups or establish exchangeability. Nearest cosine is not confidence or identity proof. Out-of-domain inputs still receive a proposal and require holding.
- First load requires internet: approximately **23 MB model/tokenizer + 27 MB CPU runtime**, plus bundled app/worker code. No API key, paid service or server-only inference. Model files download from Hugging Face/CDN after explicit loading; no user content is uploaded.
- Same-origin immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating apps and paths. Protocol, hashes, version and tokenizer inspected in `runtime-dependency-audit.json`.
- Four texts per chunk. At most 32 records + 4 groups = 36 texts / 9 chunks. Descriptions ≤300 characters; actual tokenizer ceiling **512 tokens**. Pipeline max_length is not relied upon. Model main revision remains unpinned; observed revision recorded in audit.
- Generation guards cover fetch/file read/messages; cancel terminates the worker, timeout 180 seconds. Network/runtime/malformed results produce explicit errors with retry, never canned output.

## Deterministic method and assumptions
For each reviewed group, retain only approved calibration residuals `abs(actual - predicted)`. Sort these n errors and use `k = ceil((n+1)(1-alpha))`. If k≤n, radius is the kth error; otherwise the radius is **unbounded**, not a substituted finite maximum. Nonnegative-minute ranges are `[max(0,predicted-radius), predicted+radius]`; JSON null endpoints denote the displayed `[0,∞)` unbounded range. Calibration errors and their source IDs are shown.

Evaluation outcomes never affect radius. Finite-range hits/finite evaluation count and unbounded evaluation count are reported separately; the baseline is exact point hits/all approved evaluation rows. Baseline and range denominators can differ when ranges are unbounded, which is explicitly reported. Future plan rows have no observed actual. Holds preserve originals but do not enter calculations. Tiny fixture hit counts are not population accuracy or a measured productivity gain.

The usual split-conformal marginal coverage argument requires predictions fixed independently of calibration, predetermined groups and exchangeable errors within a group. Training a predictor on calibration, tuning alpha/groups on observed errors, selective exclusions, distribution shift or outcome-aware semantic review can invalidate it. This app supplies no predictor training and cannot verify provenance or independence. Group-local review and small samples can be particularly fragile. No individual-job guarantee, conditional-on-every-feature claim, causal statement, automatic schedule or external action is made.

## Input/output and validation
Input object: title (1–120 chars), alpha (0.05–0.5), groups (1–4 unique id/text objects), records (1–32 unique id/text/partition/predicted/actual objects). IDs letter-first ≤40 letters/digits/_/-. Descriptions 1–300 chars. Partitions: calibration/evaluation/plan. All durations finite nonnegative minutes ≤100,000; actual null only for plan. Source paste ≤60,000 chars; `.json` source/audit file ≤2 MB. Unsupported formats, empty/invalid JSON, duplicate IDs, invalid partitions, nonfinite values and oversized batches block processing.

- JSON: lossless originalInput, reviews, model evidence, assumptions, calibration residuals/source IDs, range outputs and computed counts. Import restores originals, not old approvals.
- Audit CSV: every original record and reviewed group, partition, numeric edits, decision, multiline note and available endpoints/coverage. Quotes/commas/newlines escaped; formula-like leading text receives an apostrophe. Numeric estimates remain numeric. JSON is lossless.
- Markdown: calibration evidence, current ranges, comparison/limits, every original and reviewed row. Imported content is rendered as text, never executable HTML or instructions.

## Privacy, devices, caching
Text stays in browser/worker memory. No credentials, content uploads, analytics, remote provider integration or persistent user-content storage. Network is static GET downloads only. Examples/reports are synthetic. Exported audits contain whatever users imported and reviewed.

HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB free RAM required. No WebGPU needed. Desktop Chrome CPU validated; physical phones, other engines and low-memory hardware untested. Responsive controls checked at 1440/390/320 CSS px. Cache API stores worker source; the shared worker caches factory/binary, and Transformers.js caches model downloads. Eviction/private browsing may force downloads. **Tested offline: fresh-worker real inference in an already-open warmed page, all network blocked.** Offline reload/startup and permanent retention are not promised.

## Checks and publishing
See [VALIDATION.md](VALIDATION.md) and observed JSON reports for real production-bundle inference, known-answer fixtures, independent rank checks, maximum-batch conservation, artifact round trips, fault injection, privacy and public checks. Successful inference is never mocked; mocks only exercise defensive paths.

React 18 + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261121-14/`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` retained. **Publish through repository ROOT workflow only**, preserving the collection. Playwright tests reference the machine's existing installation; adjust that import on other machines.

Collection size maintenance extends existing deploy-only byte-identical Manifold sharing to `20261028-30` → immutable `20261028-24`. Source builds and legacy JS compatibility URLs stay intact; actual legacy worker, PNG/STL imports and valid geometry exports are checked locally/publicly. The conservative 1 GB guard is unchanged.
