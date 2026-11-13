# Asset Almanac

A browser-local asset-register preparation utility for bookkeepers: import/paste rough asset notes and approved depreciation policies → real semantic policy retrieval → mandatory editable review → annual book-value worksheet → JSON/CSV/Markdown handoff. Not accounting or tax advice; no journal entries or external actions.

## Use

Run `npm install`, `npm run dev`, or `npm run predeploy` for the production build. Vite base is `/daily-app2/20261113-12/`. Publish only through the collection root's predeploy/deploy workflow. Individual gh-pages scripts exist to preserve the collection contract, not for standalone publishing.

Choose either synthetic example, or import source JSON. Source fields: project, policies (id, label, description, years, method), records (id, note, cost, residual, owner). Costs and residuals are integer cents in one supplied currency. `sl` means straight line; `ddb` is double declining balance. Edit policies before inference. Approve or hold every asset; edit policy, values, owner and multiline review notes. Apply, then download or copy. Any change invalidates exports until reapplied; undo restores the previous review. JSON reimport restores originals only, never approvals.

## Actual AI and privacy

Xenova/all-MiniLM-L6-v2, https://huggingface.co/Xenova/all-MiniLM-L6-v2 (Apache-2.0), q8 ONNX, Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU. Normalized mean-pooled 384D embeddings and cosine ranking suggest a supplied policy from asset description meaning. There are no sample-response tables or regex AI substitutes. Every proposal is pending; scores are similarity, not confidence. Irrelevant input still matches something and must be held. AI does not determine eligibility, useful lives, residuals or accounting correctness.

Explicit loading downloads about 23 MB model/tokenizer from Hugging Face/CDN and 27 MB same-origin runtime. Content stays in browser memory and never uploads. No API integration, keys, telemetry or automatic content persistence. No model requests before loading. Runtime and worker are bundled locally; byte-identical WASM is shared at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve this immutable older app asset. Cache API retains worker/runtime/model subject to browser eviction; no cache UI deletion feature. Tested offline scope is fresh-worker inference inside an already-open warmed page only. Offline reload/startup is not claimed. Internet needed initially or after eviction.

## Devices and bounds

WebAssembly SIMD and module workers, several hundred MB RAM recommended. Chrome desktop CPU tested, with GPU disabled; physical phones and other browsers untested. No WebGPU requirement. 2–8 policies, 1–40 records, descriptions ≤300 characters, 4-text inference chunks, 256 tokens/text, 180-second timeout. Useful lives 1–30 whole years, cents 0–100,000,000,000, residual ≤cost. Source ≤40,000 characters, source/audit JSON imports ≤300 KB. Other formats fail explicitly. Runs terminate on cancellation/input changes, IDs prevent stale output; file reads also guard identity. Finite normalized vector schema validated; failures produce errors, not fake results.

## Deterministic worksheet

Full-year period numbers only; no dates/partial years, tax conventions, disposals, impairment, revaluation or FX. SL divides depreciable cents and distributes remainder cents earliest. DDB charges 2/life of opening book, rounded half up, capped at residual, with final-year true-up to residual and no SL switch. A large final-year charge is possible and disclosed. All-SL baseline uses the same approved costs/residuals/lives. Metrics are modeled expense timing, never tax/time savings. Total depreciation exactly equals cost less residual, closing never below residual. Held assets remain in the audit but not totals.

JSON preserves all originals, reviews, evidence and schedules. CSV repeats asset metadata per annual row and preserves one row for each held asset; text formulas get a leading apostrophe, numbers remain numeric. Markdown preserves complete source/review and annual trail. Artifacts always derive from the current applied review.

## Validation

See VALIDATION.md and machine-readable reports. Tested real CPU inference in production bundles on two different synthetic registers, 8/8 intended links, known irrelevant-text limitation, independent BigInt schedule oracle, actual artifact parsing, batch/cancel/stale/undo/errors, offline fresh-worker inference and responsive views. These small fixtures are not general accuracy evidence. No personal data in fixtures.
