# Checkpoint Cove

A local AI worksheet for creative/research compute operators choosing periodic save intervals. Distinct from backup restore-evidence auditing or per-call retry budgets: this compares save overhead and lost recurring work under an explicit interruption model. No job dispatch, configuration, backup or account access.

## Workflow

1. Paste/import JSON with workload `profiles` (description, measured checkpoint/recovery costs, current interval and search cap) and `logs` (informal workload description, active exposure minutes, interruption count). Try both synthetic examples.
2. Explicitly **Load AI & reconcile inputs**. Real neural embeddings rank profile descriptions for each log; inspect cosine evidence. There is no canned response or string-matching fallback.
3. Review every workload identity and count/exposure; approve or hold, annotate and undo. Editing identities/numbers renews pending approval. Originals stay unchanged. A hold blocks all interval release rather than silently deleting failures/denominators.
4. Apply the reviewed plan. Missing profiles and extreme hazards block release. Compare proposed and current expected wall minutes per useful hour. Review edits invalidate the snapshot/exports.
5. Download complete JSON, audit CSV and Markdown or explicitly copy the worksheet. JSON reimport restores originals only; inference/review must be renewed. No scheduler settings are changed.

## Real AI and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0: q8 ONNX, mean-pooled normalized 384D embeddings. AI reconciles rough workload descriptions so counts pool under the correct profile. Similarity is not confidence, factual verification or authority.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU/API key required. Four-text chunks; at most 24 texts. Tokenizer `model_max_length=512`; the shared feature-extraction call requests `max_length=256` but that option is not an enforced 256-token cap. Independent 300-character text bounds apply.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps/paths. Bundled runtime JS is not fetched from a third-party JS CDN.
- First explicit load needs internet: approximately 23 MB model/tokenizer assets plus 27 MB WASM and worker/runtime JS. Model downloads use Hugging Face/CDN. Downloads are not user-content uploads. No keys, remote inference provider, analytics or server calls.
- Requires module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. Tested desktop Chrome CPU and emulated phone layouts; physical phones, other browsers and low-memory devices unverified. Network/device errors, progress, cancel/retry and 180-second timeout never substitute fake output.
- Cache API holds public worker/runtime/model downloads, not worksheet content. Tested offline scope: fresh-worker inference in an already-open warmed page. Offline navigation/reload is not promised; eviction/private mode may require internet again. Content stays in page/worker memory until explicit local download/copy.
- Imported instructions are data; nothing can grant tools, request credentials or upload content. Only synthetic fixtures are committed.

## Model and interpretation

For a workload, pool interruption counts divided by active exposed minutes. Exposure **includes work and saving, excludes recovery**. Windows must not overlap and must reflect comparable constant independent exponential interruption hazard λ. Saving takes fixed C minutes; recovery takes fixed failure-free R minutes. A failed attempt loses the cycle's work; a completed save is atomic.

For T useful minutes per recurring cycle:

`expected wall/cycle = expm1(λ*(T+C)) * (1/λ + R)`

Divide by T for expected wall/useful ratio; multiply by 60 for displayed wall minutes/useful hour. At λ=0, use `(T+C)/T`. This follows renewal over failed attempts: mean attempt duration plus failure-probability×R divided by success probability. Enumerate whole T from 1 through each profile cap; ties choose the shorter interval. Compare with the current interval using **identical** assumptions. These are not measured elapsed times, future savings or statistically validated rates.

Zero observed failures is a zero-rate **point estimate**, not assurance. It selects the search cap; cap-bound minima are not unconstrained optima. Uncertain/correlated hazards, failures during recovery, growing checkpoint sizes, partial saves and finite jobs/deadlines are not modeled. Review before any manual settings change. Recovery cost scales this model's total cost but does not alter its optimizing interval for fixed λ/C. All profiles require reviewed logs; any hold/missing profile or λ×longest cycle >50 blocks all interval release.

## Formats and bounds

Source: `context`, `profiles:[{id,description,checkpointMinutes,restartMinutes,currentInterval,maxInterval}]`, `logs:[{id,workloadText,exposureMinutes,interruptions}]`. See examples in `src/core.js`.

2–8 profiles, 1–16 logs; unique alphanumeric/underscore/hyphen IDs 1–40 chars per list. Text/context ≤300 chars, source ≤50,000 chars, JSON import/envelope ≤2 MB. Save cost 0.01–10 minutes, recovery 0–120 minutes, whole current/cap intervals 1–120 with current ≤ cap. Active exposure 1–1,000,000 minutes per record; integer interruptions 0–100,000. Reviewed notes ≤1,000 chars; 100 undo snapshots. Invalid vector counts/dimensions/nonfinite/non-normalized values fail explicitly. Run identities guard worker fetch, inference messages and delayed file reads; cancellation terminates workers.

JSON preserves all originals, profiles, reviews, semantic evidence and each candidate cost. CSV preserves every original log and reviewed fields; strings are quoted and formula-like leading characters escaped, while genuine numbers remain numeric. Markdown carries every source/review, scenario comparison and assumptions checklist. All exports reflect only the applied current review snapshot.

## Development and publishing

`npm install`, `npm run dev`, `npm run predeploy`. Per-app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist` are retained; **publish through the root combined-site workflow only**. See [VALIDATION.md](VALIDATION.md) for actual outcomes and reproducible tests. Fault injection is restricted to defensive/race tests; successful inference tests use the real model.
