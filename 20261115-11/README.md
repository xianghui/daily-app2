# Tandem Desk

A two-stage queue worksheet for a small print, laundry or finishing coordinator. The repeatable bottleneck is reconciling differently worded job cards with processing profiles and deciding a common queue across two stations. Paste/import JSON, supply processing assumptions and a finish target, run local AI, inspect sources and cosine evidence, verify each profile and both durations, approve/hold, apply, then export a usable two-lane schedule and complete audit. No dispatch, staff messaging or equipment control.

## AI and local data flow

Real [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8, using Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). Normalized mean-pooled 384-dimensional embeddings retrieve a supplied profile by cosine similarity. AI materially reconciles paraphrased job descriptions; it does not estimate times. The selected profile's user-supplied times are copied into editable review fields. Deterministic Johnson sequencing and timeline arithmetic happen only after review. No hard-coded AI responses, heuristic substitute, remote inference, credentials or required paid service.

First use requires internet: approximately 23 MB model/tokenizer plus 27 MB WASM and runtime/worker JS. Hosts: Hugging Face/CDN and same-origin static collection assets. All requests are file downloads: content stays in browser memory, never uploaded, logged or persisted by the app. Imported instruction-like text is embedding data with no tool authority. Cache API stores runtime/model assets, not your content. Eviction/private browsing can require redownload. Cancel terminates the worker; input changes, asynchronous imports and worker downloads share run identities to prevent stale results. Timeout 180 seconds. Runtime/network/malformed-vector failures show errors and retry, not fake suggestions.

### Immutable shared runtime

To preserve the near-capacity collection, reuse the exact worker from `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`. Its protocol is `{id,texts}` → progress/batch messages and `{id,type:'result',vectors}`, or an error. Its bundled Transformers.js is local. It uses `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps/assets. Source and byte/hash validation in asset audit reports. The worker processes four texts at a time with truncation at 256 tokens; count, 384 dimensions, finite values and approximate unit normalization are validated before ranking. Worker source, module factory and WASM bridge Cache API to blob execution rather than relying on HTTP caching.

Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB memory is tested with GPU disabled. No WebGPU required. Physical phones, Safari/Firefox/Edge and low-memory devices are unverified. Offline fresh-worker inference is supported only in an already-open warmed page following successful online inference. Offline startup/reload/navigation is NOT promised; no service worker caches the app shell.

## Source format and review

JSON source ≤30,000 characters; `.json` imports ≤2 MB. Audit JSON imports restore validated `originalInput` only; approvals and saved suggestions are not trusted. Two synthetic examples are included, with no real documents or personal data.

- `stations`: exactly two distinct nonempty ordered names, ≤60 characters.
- `profiles`: 2–6, unique `id` ≤40, `label` ≤100, `description` ≤300, `first` and `second` integer minutes 1–10,000.
- `records`: 1–48, unique `id` ≤40 and `description` 1–300 characters. One row is one indivisible job, not a quantity to multiply.
- `finishGoal`: integer 0–1,000,000 minutes from time zero. It is a planning target, not a service commitment.

Choose an example or edit JSON, then explicitly load AI. Every result begins pending. Inspect source and candidate evidence, correct profile/durations and approve or hold every row. Profile changes reset durations to the new supplied defaults and reset approval. Duration edits also reset approval. Review notes are multiline ≤1,000 characters. Undo restores the last review edit (up to 100 actions); originals are preserved. Source edits discard the review layer and require fresh AI. Apply rejects pending decisions, invalid references, noninteger/zero/negative times and invalid row counts/order. Holds remain in all audits and are excluded from both schedules. With no approved jobs, the schedule is empty and the goal unevaluated. Partial results clearly label the approved-subset scope.

AI always proposes a nearest profile, including for unrelated or negated descriptions; similarity is not confidence, identity verification or a relevance guarantee. Human review must catch unsuitable jobs and incorrect durations. No automatic semantic rejection or performance prediction is claimed.

## Deterministic schedule and comparison

Assumptions: all jobs ready at minute zero; same two independent stations in the same order; one job per station; no preemption, travel, setups, breakdowns, breaks, shared operators, blocking or intermediate-storage limit. Durations are known fixed positive whole minutes. Verify these assumptions before use.

Johnson's rule: put jobs with first ≤ second in ascending first-duration order, then jobs with first > second in descending second-duration order. Original index breaks ties. This minimizes makespan (last completion) for the two-machine flow-shop model, not average turnaround, individual due dates or staff utilization. Each station-1 operation starts at its preceding operation's end; station 2 starts at max(own station-1 finish, preceding station-2 finish). Deterministic invariants enforce no overlap/precedence violation and preserve all approved work. FIFO uses the same approved jobs/durations in original order. Comparisons and idle minutes are computed model outcomes, not measured savings or accuracy. Timelines are relative minutes, not calendar bookings.

This differs from the collection's setup-change scheduler: two simultaneously operating resources and precedence/waiting are modeled, not an asymmetric single-machine changeover matrix.

## Export and restoration

Download JSON (lossless originals/reviews/both schedules), audit CSV (every row), Schedule CSV (every approved job, relative starts/ends and waiting), Markdown (schedule + all audit rows), or copy Markdown. Exports require a current applied snapshot and disable on any review edit. No stale defaults. CSV is RFC4180 quoted, preserves multiline cells, and neutralizes formula-like textual prefixes with an apostrophe; genuine numeric fields remain numeric. JSON preserves exact original text. Empty approved queues export a header-only schedule CSV. Audit reimport restores originals and requires fresh inference/review, not replay of old approvals.

## Development / publication

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261115-11/`. Required gh-pages dependency and `predeploy: npm run build`, `deploy: gh-pages -d dist` retained. **Publish only via repository ROOT combined workflow**, not this app's individual deploy. See root README for Pages verification. See VALIDATION.md and machine-readable reports for observed checks and untested scope.
