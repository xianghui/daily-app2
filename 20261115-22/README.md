# Deadline Prism

A local-AI estimate reconciliation and deadline-risk worksheet for small-project coordinators. Rough estimate notes often use different wording from the task register; manually linking each one is the bottleneck. MiniLM semantic inference proposes those links. Humans verify identity, durations and prerequisites before deterministic exact schedule-risk arithmetic.

## Workflow

1. Choose Museum opening / Podcast release, paste source JSON, or import `.json` (source or an exported audit). Audit imports restore **originals only**, never silently trust approvals.
2. In source JSON supply `deadline` in elapsed hours, 1–8 `tasks` (`id`, `label`, `description`, prerequisite IDs in `after`) and 1–32 estimate `records` (`id`, informal `text`, `low`, `high`, `pHigh`). Descriptions/text are 1–300 characters. All tasks share a start, and all are required.
3. Explicitly click **Load AI & reconcile estimates**. Download progress and inference batch counts appear; Cancel terminates the worker. Nothing downloads from the model host before this action.
4. Inspect original snippets and the two nearest task descriptions with cosine similarities (not confidence). Correct task/duration/probability fields, add multiline notes, and approve or hold **every** record. Identity/numeric edits reset approval. Undo restores prior review state. Source edits invalidate all suggestions and applied exports.
5. Apply the worksheet. Duplicate approved task estimates block application; missing tasks produce an incomplete audit **without invented project metrics**. Holds remain visible in every audit.
6. Inspect the mean-duration-path baseline, exact model on-time probability, expected project finish and full distribution. Use the follow-up checklist to validate assumptions before discussing a deadline.
7. Download current applied JSON, estimate CSV or Markdown, or copy Markdown. Edits disable exports until reapplication. CSV quotes commas/newlines and prefixes formula-like text. JSON retains originals, task graph, all reviews and distribution; CSV retains all source rows and reviewed fields; Markdown includes the distribution and evidence checklist. No external scheduling changes or messages.

## Real AI and deployment

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0 open weights. English-oriented semantic feature extraction, **not a generative assistant**.
- Runtime: Transformers.js **4.3.2**, ONNX Runtime Web WASM CPU, q8 model, mean pooling and normalization; 384-dimensional vectors. Four texts per inference batch, truncation at 256 tokens. Finite dimensions, counts and norm are validated before ranking.
- First use: approximately **23 MB model + 27 MB WASM** plus worker/factory/tokenizer files; internet and several hundred MB RAM. Hugging Face and its `*.hf.co` CDN serve public weights/tokenizer; same-origin collection assets serve runtime code. No mandatory paid services, API key, remote provider integration or WebGPU.
- Requires WebAssembly SIMD, module workers and Cache API. Tested with desktop Chrome CPU / GPU disabled. Physical phones, Firefox, Safari and low-memory devices unverified. Errors explain browser/network requirements; no fake AI fallback. 180-second timeout; retry explicitly.
- Uses immutable byte-audited shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, its factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. **Preserve both originating apps and assets when assembling the collection.** Exact sizes/hashes are in `asset-audit.json`.
- Worker source is saved in Cache API `deadline-prism-worker-v1`; shared factory and binary use `circuit-cove-runtime-v1`; Transformers.js caches public model assets. Tested offline scope: after online inference, **a new worker can infer in an already-open warmed page with all network blocked**. Offline startup/reload is not promised. Cache eviction or private browsing can require downloads again.

## Privacy and limits

Input, vectors, reviews and calculations remain in browser memory; no notes are stored in caches, uploaded or included in model download URLs. Downloads are public model files, **not content uploads**. No analytics or credentials. Imported instructions are plain embedding data, never authority or tool instructions. Local exports contain the user's own data. Source limit 50,000 characters; import envelope 2 MB; up to 40 task/record texts, 32 source records and 8 tasks. Guarded async imports/downloads, monotonically changing run IDs and worker termination prevent stale results.

## Deterministic model and honest comparison

Task duration is either `low` or `high`, with supplied probability `pHigh` of high. These are **subjective assumptions**, not learned probability estimates. Preconditions form a DAG; a task starts when all prerequisites finish. Unlimited parallel resources, no calendars, no rework, no overlapping-resource constraints, no common-cause/correlated delays. If these assumptions do not fit, this worksheet is unsuitable. Not a continuous PERT distribution, empirical forecast or promised delivery date.

For each of at most 256 combinations, multiply independent task-outcome probabilities and compute earliest task finishes / project maximum. Accumulate probability mass by finish time, sum outcomes at or before deadline and calculate expected finish. Baseline instead replaces durations by their means before computing the longest path: maximum of means is not mean of maxima. All tasks and original estimates remain accounted for; missing estimates suppress model metrics. Literal-label matches measure wording coverage only, not time savings or accuracy.

Both supplied tiny fixtures yielded a 7 h mean-duration path, 8.125 h expected project finish and 37.5% on-time model probability at an 8 h deadline. All six intended task links matched; zero literal label matches. These examples are not a general accuracy benchmark. Unrelated/prompt-like text still gets a nearest task; hold unsuitable evidence. Similarity does not prove equivalence, completeness or estimate quality. Humans must verify all assumptions.

## Build, validation and publishing

React + Vite. `npm install`; `npm run predeploy`. Per-app `deploy: gh-pages -d dist` is retained as required but **do not invoke it for this collection**. Publish via `/Volumes/ExternalHD/daily_app2` root combined workflow only. Vite base `/daily-app2/20261115-22/`.

See [VALIDATION.md](VALIDATION.md), browser logs, independent Python artifact parser and 300-case path-enumeration oracle. Production-bundle real browser checks include two fixtures, full 40-text / 8-task / 32-record batching, offline fresh-worker inference, review/edit/undo/holds, invalid input/graphs, export round trips, clipboard, download/network recovery, unsupported runtime, malformed output, timeouts, stale source/download/file/old-run defenses and 1440/390/320px layouts. Public checks and publication status are recorded separately; a build or branch push alone is not proof of public inference.
