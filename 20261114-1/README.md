# Changeover Grove

A local-AI, setup-aware sequencing worksheet for small production planners. Rough job notes become reviewed process-family links, then an exact single-machine schedule respecting every supplied finish-by limit. No live dispatch or machine access.

## Workflow

1. Load a synthetic print/packing example, paste JSON or import source/audit `.json` (≤2 MB). Audit imports restore originals only, never approvals.
2. Set `parts` (2–6 families with id/label/description), `setup` (square asymmetric integer-minute matrix in parts order, zero diagonal, 0–120), `start` (family id), `project`, and `records` (1–10 jobs with unique id, note, minutes, deadline, owner). Work is 1–600 minutes and finish-by is minute offset 1–10,000. Source limit 30,000 characters; descriptions ≤300 characters.
3. Explicitly load real AI. Inspect each source and ranked candidate description; correct family/timing, edit owner/notes and approve or hold every job. Holds retain all originals but block a complete schedule. Undo restores review state; edits invalidate exports.
4. Apply the queue. The exact scheduler minimizes setup subject to all finish-by limits. An impossible queue produces a clear blocked worksheet, never a partial schedule that silently loses jobs.
5. Export complete JSON (originals, reviews, plan, baseline), CSV (all jobs, original notes, reviewed fields and scheduled positions/times) or Markdown checklist; clipboard copies current applied Markdown. CSV escapes leading spreadsheet formula characters, including multiline fields. The full JSON retains unescaped originals. All artifacts are scenario worksheets, not executable machine instructions.

## Real AI and data flow

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, via Transformers.js **4.3.2** (Apache-2.0) and ONNX Runtime Web (MIT). Mean-pooled normalized 384-dimensional sentence embeddings, cosine nearest-family retrieval. Four texts per inference batch, 256-token context; vectors validated for count, dimension, finiteness and normalization. No hard-coded inference responses or heuristic fallback. AI supplies meaningful family recognition; it does not infer durations, certify materials or determine safe changeover procedures. Similarity is not confidence; every match needs review. Unrelated text still receives a nearest-family proposal.

First use needs internet: roughly **23 MB** weights/tokenizer from huggingface.co and its CDN, plus **26,861,777-byte** same-origin WASM and bundled worker/factory/app. Hugging Face hosts the model's current published revision; upstream changes are possible and no immutable model revision is promised. Runtime code is bundled. Shared byte-identical WASM is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older collection asset. Other local assets use `/daily-app2/20261114-1/`.

All job text remains in the browser, transferred only to a local worker. There is no backend, provider integration, API key, content upload, telemetry or saved job database. Imported instructions have no tool authority. Model downloading is not content uploading. Only synthetic fixtures are committed. Browser model/runtime caches persist when available; content is not automatically saved.

## Requirements, caching and failures

Current browser with module workers, WebAssembly SIMD, Cache API where available and several hundred MB free memory. CPU WASM is the default, not a WebGPU-dependent path. Desktop Chrome tested with GPU disabled; physical phones, Safari/Firefox/Edge and low-memory devices unverified. Mobile layout checks are desktop emulations, not device inference claims.

Download progress, batch progress, cancel and explicit retry are provided. Cancel terminates the worker. Run identity guards cover file reads and worker-source loading, preventing stale writes after input changes. 180-second timeout; construction/runtime/network/model/schema failures leave no fake results. Cache denial permits online use but removes offline assurances. Downloaded worker/factory/WASM are explicitly Cache-API bridged; Transformers.js caches model files. **Tested offline scope: a still-open, online-warmed page can create a fresh worker and execute new real inference with networking disabled.** Offline navigation/reload is NOT promised. Evicted storage needs internet again.

## Deterministic model and honest comparison

One machine; all jobs ready at time zero; integer times; setup before each job; no preemption, calendars, breaks, release dates, secondary resources or cleaning/safety rules. Finish at deadline is allowed. Setup depends only on previous/next family and supplied initial state.

Subset/last-job dynamic programming retains earliest completion per state. Future choices depend only on completed jobs and last family, so later completion at the same state is dominated. Minimizing total completion time minimizes setup since reviewed processing minutes are fixed. Bounds: at most 10 jobs and 6 families. Stable enumeration resolves ties; no unique order is promised. The FIFO baseline uses identical reviewed assumptions in original source order, even when late. A deadline-feasible solution can have more setup than infeasible FIFO. Comparisons are scenario calculations, not measured time savings or actual productivity.

## Build, publish and validation

`npm install`, `npm run predeploy`; Vite base `/daily-app2/20261114-1/`. Required individual predeploy/deploy scripts exist, but **publish only from collection root** with its combined `deploy/` workflow. Do not invoke individual deploy.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Real inference on two materially different fixtures, production worker/runtime caching, maximum batches, cancellation/retry/stale runs, review/undo/holds, failures, actual artifact parsing and desktop/phone layouts were checked. Independent recursive permutation enumeration checked 600 scheduling scenarios. No universal accuracy, safe operating procedure, hard realtime performance, other-device inference or offline startup guarantee.
