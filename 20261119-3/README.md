# Burst Ledger

An arrival-envelope worksheet for operators reconciling messy batch intake logs. Real local neural inference matches each description to a supplied stream profile. Mandatory human review precedes deterministic whole-batch token-bucket replay. It exposes burst rejections hidden by average-only rate checks and exports an actionable, source-linked capacity investigation worksheet. It never configures a service.

## Use
1. Open the synthetic storefront or media example, or paste/import the same JSON shape.
2. Supply context, complete observation `horizon` in seconds, `goalLossShare` (0–1), and 2–8 `items` with unique ID, label, description, continuous `rate` in units/s and burst `capacity` in units. Supply 1–24 `observations` with unique ID, description, arrival `time` in seconds and positive whole-batch `amount` in the same count unit.
3. Explicitly load AI. Review semantic candidate evidence, correct stream/time/amount, approve each arrival or hold the whole worksheet. Notes support multiline text. Changes to identity or numeric fields require fresh approval. Undo reverses review edits; originals remain immutable. Edit source to change rates/capacities/goals, then rerun.
4. Apply reviewed plan. Holds or absent stream coverage block the full replay rather than silently omitting arrivals.
5. Download current reviewed JSON (complete original/review/trace envelope), CSV (every original and review record) or Markdown (full worksheet and checklist); copy Markdown. Edits invalidate export snapshots. Reimporting audit JSON restores originals only and requires fresh AI/review.

## Real AI, runtime & licenses
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 ONNX, 384-dimensional normalized mean-pooled embeddings. Cosine ranks supplied stream descriptions; it is not confidence, identity verification or an instruction-following model.
- Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web (MIT), WASM CPU, one thread, four texts per chunk. The shared pipeline accepts max_length=256 but the feature-extraction implementation does not enforce that option; the real tokenizer ceiling is 512 tokens. Descriptions are independently bounded to 300 characters.
- Immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating published apps/builds. See asset audits for byte hashes. Reuse avoids duplicate runtime bytes in this large static collection.
- First explicit load downloads approximately 23 MB model weights plus 27 MB WASM and small tokenizer/runtime files. Internet, WebAssembly SIMD, module workers, Cache API and several hundred MB available RAM are required. WebGPU is not needed. Actual Chrome CPU tested; other browsers/physical phones unverified.

## Privacy & caching
No credentials, optional provider, remote inference, analytics or upload. Text goes only to a local worker; requests download static files from this origin and Hugging Face/CDN (`huggingface.co`, `*.hf.co`). User content is absent from request URLs/bodies. Imported instruction-like text has no authority. Only synthetic test data is committed. Source/reviews live in page memory and are lost on reload unless exported.

Worker source, WASM factory/binary and model files use Cache API. Offline **fresh-worker inference in an already-open warmed page** was tested with browser network disabled. Offline navigation/reload/app-shell installation is not supported or promised. Storage denial, cache eviction or changed model-host paths can require internet again. First load is explicit, with progress, cancellation, actionable network/runtime errors, retry and 180-second timeout. Failure never returns fake suggestions. Run IDs guard worker-source fetches, file reads and late worker output.

## Deterministic contract & comparison
Each independent stream starts with a full bucket at time 0. Between arrivals `tokens=min(capacity,tokens+rate*elapsed)`. Sort by reviewed time and preserve original source order at equal times. Admit an entire batch only when it fits (floating tolerance 1e-9); accepted units consume tokens, rejected batches consume nothing. No partial acceptance, queue, shaping delay, cross-stream borrowing or future forecasting.

Baseline: total units / full horizon <= refill rate. It deliberately ignores burst structure and is NOT proof of conformance. Actual accepted/rejected totals, lost-unit share and goal comparison come from replay. Observed minimum capacity at fixed refill is the maximum all-admitted deficit `D=max(0,D-rate*elapsed)+amount`; a second replay verifies zero rejections at that capacity. This is a trace-specific lower bound, not a safe production recommendation. Token counts may be fractional; source unit counts are integral. Exports retain full numeric precision; UI rounds some displays.

## Limits & validation
50,000 source characters; 300-character context/labels/descriptions; 1,000-character review notes; 2 MB source/audit JSON files. 2–8 streams, 1–24 arrivals, 32 embedding texts maximum. Horizon 1–86400 seconds; refill .001–1,000,000 units/s; configured capacity 1–1,000,000 units; each batch 1–1,000,000 integer units. A computed observed minimum can exceed the configured-capacity input bound; it is a reported diagnostic, not an applied setting. Invalid numbers, IDs, duplicate records, unavailable runtimes, bad vectors, timeouts and unsupported formats are blocked.

See [VALIDATION.md](VALIDATION.md) and browser reports for actual fixture outcomes, exports, offline checks, defensive injection, mobile layouts and public verification. No universal accuracy/time-savings claim. Nearest-neighbor matching can select irrelevant/opposing descriptions: review is mandatory. AI does not validate completeness, units, timestamps, independence, the initial-state assumption or future loads.

## Build & publish
React + Vite. `npm install`, `npm run predeploy`. Base `/daily-app2/20261119-3/`. Per-app scripts are retained as required, but publish the collection only from the repository root with `npm run predeploy` and `npm run deploy`, never this app's deploy command. `core-test.mjs` checks an independent interval-demand oracle; `browser-test.cjs` uses installed Playwright/Chrome; `artifact-test.py` independently parses actual downloads.
