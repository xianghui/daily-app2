# Funnel Prism

A local-AI worksheet for course intake and workshop coordinators who repeatedly reconcile rough stage logs into a closed-cohort funnel and an actionable target-intake plan. It differs from rate-mix decomposition: these are **ordered, nested progression stages**, with exact handoff conservation and backwards integer sizing through every stage.

## Workflow

1. Choose a synthetic example or paste/import JSON. Define 2–6 stages **in journey order**, a positive completion `target`, and `before`/`after` records. A record has `id`, `note`, `period`, `total` (stage inputs), `converted` (stage outputs), and `owner`. Repeat stage observations are summed; they must be non-overlapping.
2. Explicitly load AI. MiniLM suggests the stage for each informal note using actual semantic embeddings, not regex or canned classifications. Inspect ranked definitions and cosine similarities (not confidence).
3. Correct stage, period, counts, owner and multiline follow-up note; approve or hold every observation. Undo restores review state. Original inputs remain intact. Input changes invalidate pending workers; review changes invalidate applied exports.
4. Apply. Holds/missing cells/unbalanced handoffs block the complete comparison. Every stage output must equal the next input in that period. Read overall conversion, stage attrition, same-intake scenario and required target throughput.
5. Download JSON audit, source-order CSV or Markdown worksheet, or copy Markdown. Exports reflect the latest applied review, not stale defaults. JSON import restores originals only; fresh AI/review is mandatory.

## Real AI / static hosting / privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX feature extraction, mean pooling, normalized 384-vectors, maximum context 256 tokens, batches of four texts.
- Runtime: Transformers.js 4.3.2 / ONNX Runtime Web, WASM CPU, one thread. No WebGPU, service backend, API key, paid service or optional remote inference.
- Initial download roughly 23 MB model/tokenizer from Hugging Face and its CDN, plus 26,861,777-byte same-origin WASM and local JS factory/worker/app code. Internet is needed on first explicit load. No model request before that action.
- Content is supplied only to the local worker. Requests download model/runtime files; no user text is sent in URL, body or telemetry. No content is automatically saved or logged. Runtime/model caches persist when available; clearing browser storage removes them.
- Local app worker and WASM factory are explicitly Cache-API cached and reconstituted as blob modules. WASM reuses the byte-identical immutable collection asset at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve this older app asset during combined deployment. Factory is bundled under this app's `runtime/` directory.
- Tested offline scope: **an already-open warmed page, fresh worker, network disabled, real inference**. Offline reload/navigation is not promised. Cache eviction/disabled storage requires internet.
- WebAssembly SIMD, module workers, modern browser and several hundred MB available memory required. Desktop Chrome CPU tested. Physical phones and other browser engines unverified. Errors show actionable retry instructions; never substitute fake AI.
- Imported instructions are untrusted text data, not authority. The app has no tool integration, accounts, dispatch, sending, payments or credential requests.

## Deterministic model and limits

Stage rate = outputs / inputs. Overall conversion = last-stage outputs / first-stage inputs, not an average of stage percentages. All stage-period cells need positive inputs and outputs ≤ inputs. To reach a supplied target, work backwards with `ceil(required_output × observed_input / observed_output)` at each current (`after`) stage. Forward simulation uses `floor(input × observed_output / observed_input)` per stage. Exact integer multiply/divide uses BigInt to avoid large-product rounding errors. This yields minimum integer intake under this specific discrete model, not an estimate of actual demand uncertainty.

Baseline: use **only the first-stage rate** to size intake, then forward-simulate its actual final yield through all stages. The full-funnel worksheet prevents this downstream-attrition oversight. Same-intake comparison applies both sets of stage rates at the current first-stage intake using identical integer rounding. Differences are percentage points or scenario counts, not claimed accuracy/productivity gains. Current stage-input gaps identify where to put follow-up actions.

Zero progression blocks a positive target plan, while preserving observed funnel results. Any target plan above one billion stage inputs is rejected. Limits: 2–6 stages, 1–24 records, integer inputs 1–1,000,000 and outputs 0–inputs per record, note ≤300 characters, source ≤30,000 characters, JSON file ≤2 MB, review note ≤1,000 characters, owner ≤150 characters, target 1–1,000,000. All source identities/order are retained. Timeouts at 180 seconds; cancel terminates the worker. Asynchronous imports/worker loading are run-ID guarded.

## Important interpretation limits

Use matched **closed cohorts**, identical observation windows and definitions, a non-branching ordered journey, no re-entry or carryover. Aggregate arithmetic cannot detect duplicate people, inconsistent attribution, time lags, selection bias or bad definitions. Counts and journey order are supplied by the user, never AI-inferred. Semantic similarity can misassign negation, mixed-stage or unrelated notes. Mandatory review is essential. No causal inference, significance test, forecasting distribution or guaranteed completion claim. CSV is spreadsheet-formula escaped; JSON preserves exact original/review strings.

## Build and publication

`npm install`, `npm run predeploy`. Base `/daily-app2/20261114-2/`. Per-app gh-pages scripts are retained as required but **publish the collection only through root** `npm run predeploy` / `npm run deploy`. See `VALIDATION.md` and machine-readable test artifacts for observed checks and public verification.


Published and publicly verified: https://xianghui.github.io/daily-app2/20261114-2/ . Complete public real-AI workflow, asset hashes, warmed-page offline inference and preserved gallery checks passed; limitations above still apply.
