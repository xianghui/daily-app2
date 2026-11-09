# Setup Harbor

Small print/fabrication-shop leads import up to eight job tickets, use **real local AI** to propose setup families, verify/hold each job, apply an exact single-machine run sequence and export a complete run/hold handoff. This addresses repeated semantic setup coding and changeover-versus-deadline sequencing, not generic chat.

## Use

1. Open Print shop or Wood shop (synthetic), or paste/import JSON. Supply `title`, `families:[{id,text}]`, initial family ID, `setup` matrix in family order, and `jobs:[{id,text,minutes,due,weight}]`.
2. Set transition minutes and job durations, relative due minutes and lateness weights in the input. Load AI explicitly; watch progress, cancel or retry.
3. Inspect source descriptions and cosine rankings. Correct the selected family, approve or hold every job, add notes. Undo restores the prior review. A family change returns the job to pending. All review edits invalidate exports.
4. Apply reviewed schedule, then download JSON, CSV or Markdown, or copy the report. JSON reimport restores original inputs, never automatic approvals.

JSON retains all originals/reviews/rankings, source-order records, optimal sequence, holds and baseline. CSV has every job, sequence and minute boundaries; formula-like text is prefixed with an apostrophe. Markdown includes all scheduled/held jobs. Nothing is sent to machines/accounts.

## Real AI / privacy / runtime

`Xenova/all-MiniLM-L6-v2`, [model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, via Transformers.js 4.3.2 and ONNX Runtime Web (MIT). q8 `feature-extraction`, WASM CPU, normalized mean-pooling, 384 dimensions, batch 4, max 256 tokens per text. Longer descriptions may truncate. Dot products rank definitions against job descriptions; no canned AI output or deterministic success fallback. Nearest match is not compatibility, confidence or truth. English intended; negation and mixed/specialist processes fail. Human review is mandatory.

Before explicit loading no model downloads. First load needs internet: approximately 23 MB model/tokenizer plus 27 MB same-origin WASM (~50 MB total). Model files download from huggingface.co / hf.co delivery hosts; content remains in browser memory, never uploaded, no analytics/remote inference/credentials. Code and worker/factory are local. Vite rewrites the byte-identical WASM to immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that collection asset. See `asset-audit.json` for hashes. No server calls. Optional providers: none.

Requires modern module workers, WebAssembly SIMD, Cache API for offline caching and enough memory. CPU WASM does not require WebGPU. Desktop Chrome tested; physical phones and other engines unverified. Cache API retains model, worker and runtime, not input documents. After a successful load, **fresh-worker inference inside the already-open page** was tested offline. Offline navigation/reload is **not promised**. Browser eviction/private mode may require redownload; clear site data to remove caches.

## Scheduling assumptions and validation

All approved jobs ready at minute zero; one machine, no overlap or idle time, no preemption, arrivals, breaks, dependencies or extra resources. Initial family supplied; asymmetric setup matrix, zero diagonal. Completion includes setup and processing. Due minutes are soft, NOT hard deadlines. Objective is total setup minutes plus sum of lateness weight times tardiness minutes. Enumerate all permutations (up to 40,320), keep input order as incumbent for tied objectives. No delivery-time guarantees or real-world savings claims.

Input order baseline uses the *same approved jobs and reviewed families*. Comparisons isolate sequencing, not AI gains. AI versus exact-description matching agreement is computed against reviews, not independent accuracy. Held jobs are in neither schedule and remain fully exported; a better objective after holding work does not establish an improvement.

Limits: 1–8 families, 1–8 jobs, 400-character descriptions, 50 KB payload, 1 MB audit-file import; processing minutes 1–480, due minutes 0–10000, weight 1–10, transition minutes 0–120. IDs unique in each list. No unsafe HTML rendering; imported text is data, never authority. Finite 384D vectors/counts are validated. Run IDs and terminated workers prevent stale/cancelled runs overwriting state; worker download/read callbacks are guarded; 180-second timeout and actionable failure/retry states, never fake results.

## Development / publishing

`npm install`, `npm run dev`; `npm run predeploy` builds production bundle with base `/daily-app2/20261109-20/`. Per-app `deploy: gh-pages -d dist` is retained only for contract compatibility; **publish through root** `/Volumes/ExternalHD/daily_app2` combined workflow to preserve the collection.

## Observed checks

See [VALIDATION.md](VALIDATION.md), browser/artifact/network/cancellation reports and source test scripts. `python3 serve-test.py` serves the production bundle and shared WASM on port 6320; `node browser-test.cjs`, `node network-test.cjs`, `node cancel-download-test.cjs`, `python3 artifact-test.py`, `python3 audit-assets.py`. Defensive injections do not establish successful inference; successful fixtures/offline/max-batch tests all use real model inference.
