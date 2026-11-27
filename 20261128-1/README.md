# Brewpath Bench — 20261128-1

A café brew-quality workbench. Real local AI identifies approved brewing methods from operator prose; reviewed measurements then drive extraction-yield checks and a minimum-bypass-water worksheet. This is not a chatbot, coffee machine controller or flavor/safety guarantee.

## Workflow

1. Choose **Morning bar** or **Steep station** (synthetic examples), paste JSON or import a `.json` source/audit. Supply approved method targets, dry coffee dose, whole brewed beverage mass and measured pre-bypass TDS.
2. Explicitly **Load AI & match methods**. See file/model/batch progress, cancel and retry. No model requests precede this action.
3. Inspect source prose and ranked method descriptions with cosine similarity (not confidence), correct the method and all ten numeric assumptions, add a multiline measurement note, approve or hold every brew. Relinking resets approval and copies the selected profile. Undo retains 40 edits; original input remains intact.
4. **Apply reviewed scenario**. Check extraction yield before releasing any dilution. Minimum 0.1 g zero-solids bypass targets the top of the strength band, subject to water/serving limits and the lower strength bound. Dilution cannot fix extraction. Weak, out-of-extraction, over-limit and unresolved cases remain visible and block Service CSV.
5. Download complete JSON, Audit CSV, Markdown, or gated Service CSV; copy the Markdown handoff. Any edit invalidates results/exports. Reimport restores original input only, never trusts saved AI results or approvals.

## Real AI, runtime and licenses

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Normalized mean-pooled 384-dimensional neural embeddings rank operator notes against supplied method descriptions. AI materially resolves paraphrased method identity; the chosen identity selects reviewed method-specific strength, extraction and serving limits. It does not invent measurements, recipes or targets.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT). Originating package provenance: `../20261115-6/package-lock.json`. The default is one-thread WASM CPU, not a WebGPU requirement or untested GPU fallback.
- Shared immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Exact hashes and byte counts: `runtime-provenance.json`. Preserve originating paths when deploying. Sharing avoids duplicating 27 MB.
- Inspected protocol: `{id,texts}` → progress/batch messages → `{id,type:'result',vectors}`. Four short texts/chunk; count, dimension, finite values and normalization validated. Actual shared tokenizer cap is 512 tokens; its pipeline's `max_length:256` option is not relied upon as an enforced cap. Embedded descriptions/notes are each ≤200 characters.
- First run downloads approximately **23 MB weights/tokenizer + 29 MB runtime**. Internet and a current browser with WebAssembly SIMD, module workers and several hundred MB RAM are required. Desktop Chrome with GPU disabled is tested. Physical phone performance, other engines and assistive-device behavior are unverified.
- Model assets download from Hugging Face and its CDN; runtime is same-origin. Cache API retains weights, worker, factory and WASM when available. **Fresh-worker offline inference in an already-open, warmed production page is tested. Cold offline navigation/reload is not promised.** Eviction/private mode may require redownload. Shared model host revision is unpinned and can change.
- No keys, paid services, backend or optional remote provider. No fake/deterministic fallback on model failure.

## Privacy and failures

Content stays on-device; network requests only download files. No content uploads, analytics, telemetry, credentials or external actions. Inputs/review remain in memory except explicit export. Imported prose is data: it cannot alter worker URLs, acquire tool authority or request credentials. Public validation reports strip signed CDN query values, retaining paths and query-key names only.

Run identities, aborted fetches and terminated workers prevent cancelled/stale runs or delayed file reads from overwriting newer work. Unsupported runtime, worker construction/error, model download/network failure, malformed vectors and 180-second timeouts fail visibly with retry. Source changes invalidate all derived state. Credential-pattern scans supplement source and network inspection, not an absolute secret-detection guarantee.

## Formats and limits

Source JSON: `{title, profiles, records}`. See `src/core.js` for examples.

- Source ≤30,000 characters; import ≤8 MB; 2–8 unique profiles, 1–12 unique brew records. Title ≤100, IDs ≤40, descriptions/notes ≤200 characters; reviewer notes ≤500. Unsupported control bytes and malformed surrogate characters rejected. Unknown numeric strings are not coerced.
- Profile: `id`, `description`, `minTDS`, `maxTDS` (0.1–25%), `minEY`, `maxEY` (1–40%), `maxServeG` (1–5000 g), `maxBypassG`, `baselineBypassG` (0–4000 g). Minimum ≤maximum.
- Brew: `id`, `note`, `doseG` (1–1000 g dry coffee), `beverageG` (1–5000 g whole brewed beverage before bypass), `tdsPercent` (0.1–25 percentage points, not a fraction).
- JSON audit `brewpath-v1` preserves original input, reviewed rows, all statuses/calculations and summary. CSV retains every original record occurrence and current review values; original measurements also survive in JSON. Quotes/newlines use CSV escaping and CRLF records. Formula-like text gets a leading apostrophe; numeric fields remain numeric. Markdown retains every source, review note and status. Service CSV is available only if all rows are approved and ready.

## Deterministic process and comparison

Dissolved solids `S = beverageG × tdsPercent / 100`. Extraction yield `% = 100 × S / doseG`. Minimum continuous bypass `W = max(0, 100 × S / maxTDS − beverageG)`. Round **up** to the next 0.1 g, then check extraction band, lower TDS bound, maximum bypass and serving mass. If the lower bound fails, no setting on this grid can succeed. Since added zero-solids water monotonically reduces strength, the first passing grid point is minimum water. A tiny 1e-9/1e-8 numerical tolerance handles floating-point arithmetic, not physical measurement error.

Fixed-water baseline adds `baselineBypassG` from the same reviewed profile and checks exactly the same bounds on the same approved subset. The examples use zero baseline bypass, exposing over-strength brews. Displayed counts are computed constraint passes, not empirical accuracy, flavor quality or time savings. Released bypass is the sum of ready rows only. Held rows remain in complete audits and are excluded from baseline comparison.

## Limitations

MiniLM can confuse methods, miss negation or select a nearest method even if the correct one is absent. Mandatory human review is essential; similarities are not calibrated confidence. Example targets are synthetic, not universal brewing recommendations.

The simple mass balance assumes representative cooled/filtered/calibrated TDS measurements of the whole pre-bypass beverage, zero-solids added water, no evaporation and no added milk, sugar or ice. It does not correct retained liquid in grounds or mineral contribution, assess sensory quality, recommend safe storage, estimate caffeine or certify service suitability. An extraction failure cannot be repaired by bypass. Rebrew or hold and investigate measurement/process before service. No machine, account or external system is accessed.

## Build, test, publish

React + Vite base `/daily-app2/20261128-1/`. `npm install`; `npm run predeploy`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` remain, but publish **only through root** `npm run predeploy` and `npm run deploy` to preserve the collection.

Reproduce: `node core-test.mjs`, production server `python3 serve-local.py`, `node browser-test.cjs`, `python3 artifact-test.py local-`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node model-cancel-test.cjs`, `node import-race-test.cjs`. Browser scripts use workspace Playwright and installed Chrome; `APP_URL`/`PREFIX` choose assembled/public targets. Fault injection only tests defensive behavior; successful AI and offline tests use real inference. See `VALIDATION.md` for observed outcomes and publication status.
