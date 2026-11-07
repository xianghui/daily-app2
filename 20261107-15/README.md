# Parallel Room

Local-AI topic-clash planning for conference and workshop organizers. Synthetic examples only.

## Workflow

1. Paste or import UTF-8 CSV with `id,title,text`. Quote commas/newlines. IDs must be unique. Choose two or three sequential time blocks and a similarity floor.
2. Explicitly click **Load AI & plan blocks**. Real MiniLM embeddings measure abstract meaning; exact deterministic search minimizes summed cosine similarities at or above the floor for simultaneous sessions. Each block must hold at least one session and at most `ceil(session count / block count)` sessions. The model is not a chat system and imported text cannot invoke tools.
3. Inspect related source abstracts and cosine scores (not confidence). Move sessions, add organizer notes, reject AI in favor of round-robin, or undo edits. Review each session; over-capacity/empty blocks block application.
4. Apply the reviewed plan, then download JSON/CSV or copy JSON. Every subsequent edit invalidates that export snapshot. All sessions and their original descriptions survive. CSV assigns a unique room within each block in source order; no calendar dates are invented. JSON includes originals, reviewed notes, suggestions, matrix and computed metrics.

## Real model and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, 384-dimensional normalized mean-pooled embeddings. English short-text similarity, not event attendance prediction. Model artifact URLs use the publisher's `main` revision; upstream changes can affect future results.
- Runtime: `@huggingface/transformers` 4.3.2 (Apache-2.0) and ONNX Runtime Web WASM CPU (MIT). React MIT, Vite MIT, Papa Parse MIT, gh-pages MIT. No WebGPU requirement or API integration.
- First explicit run downloads approximately 23 MB model/tokenizer plus 27 MB WASM and bundled JS/factory. Requires internet and available browser memory/storage. Documented hosts: huggingface.co and its hf.co file-delivery hosts. No paid service or key.
- Worker and runtime factory are locally bundled. Identical WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that collection path when publishing. Worker loader bridges Cache API to module blobs; factory and binary similarly cache explicitly. Model files use the Transformers Cache API.
- Modern desktop Chrome/Edge recommended. Needs Web Workers, WASM and Cache API for offline reuse. Safari, Firefox and physical phones are not certified; low-memory devices may fail or run slowly. Errors do not produce synthetic AI outputs.

## Privacy and limits

Input stays in browser memory and a local inference worker. The only external network traffic is public model-file downloads; user text is never added to those URLs/bodies. There is no analytics, external inference, account access, or scheduling-service write. Export deliberately downloads user content at the user's request. Reload loses unsaved inputs/review. Runtime caches do not store user input. Clear browser site data to remove cached weights. Cancellation terminates a worker and invalidates its run; asynchronous imports and late messages cannot replace current input/results. A partial download may stay cached.

After a successful run, offline processing with a **fresh worker in the already-open page** is supported and tested. Offline startup/navigation/reload is not claimed. Storage eviction requires redownload. App code and worker assets are bundled, not CDN imports.

Limits: 2–12 sessions; 2 or 3 blocks; 60-character IDs, 100-character titles, 300-character abstracts; ≤16 KB UTF-8 CSV; 256 model tokens, batches of four; 180-second timeout. Empty/invalid/duplicate/oversized CSV, malformed/nonfinite embeddings, runtime/download/worker failures and capacity violations produce actionable errors. Cancelling then retrying is supported.

## Metrics and limitations

Round-robin input-order assignment is the deterministic baseline. Displayed cost is the sum of same-block cosine similarities meeting the floor, not a percentage, confidence, accuracy or measured attendee impact. The exact optimizer minimizes that cost subject to capacity; pair count is separately reported and is not its objective. Manual changes may increase cost. Every original session remains assigned once; blocks are abstract, not calendar events.

Related topics do not necessarily imply shared audiences. The model cannot infer speaker availability, equipment, duration, room size, travel, attendance or accessibility requirements. Descriptions can be ambiguous and the floor is a planning choice. Review all suggestions with actual event constraints. No generative summaries or fabricated reasons: evidence shows original abstracts and actual similarities.

## Development and publishing

`npm install`; `npm run dev`; `npm run predeploy`. Required per-app `deploy: gh-pages -d dist` exists but **do not invoke it** for this collection. Root `npm run predeploy` assembles every gallery app, and root `npm run deploy` publishes the combined site. Vite base: `/daily-app2/20261107-15/`.

Tests: `node core-check.mjs`; `python3 serve-test.py`, then `node browser-test.cjs` (Chrome and Playwright installed in the OpenClaw workspace); `python3 export-roundtrip.py`; `python3 audit-assets.py`. Browser checks use production assets and real model downloads. Fault injection is limited to error/stale/timeout defenses. See VALIDATION.md and JSON evidence for actual outcomes, limitations, and public verification.

## Published validation

Live: https://xianghui.github.io/daily-app2/20261107-15/ . Public production real inference passed both event fixtures (6/6 known related pairs separated), full-batch capacity checks, offline fresh-worker inference, recovery/defensive paths, reviewed artifact round trips and desktop/phone layouts. Public runtime/worker assets were byte-verified. Scope and untested devices remain as documented above; see VALIDATION.md and public-evidence/.
