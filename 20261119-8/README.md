# Search Ladder — 20261119-8

A local-AI worksheet for archive/knowledge coordinators who repeatedly search several repositories for a uniquely authoritative document. Import rough closed retrieval logs, reconcile paraphrased destinations with neural inference, review every home/count and lookup cost, then export an optimal sequential stop-on-first-found search ladder against current repository order. No actual repository searches or file changes occur.

This is distinct from Branch Atlas's ordered binary navigation trees and Fault Lantern's budgeted diagnostic check coverage: the objective here is expected sequential lookup effort across mutually exclusive successful homes plus exhaustive misses, under fixed per-attempt costs.

## Run / deploy

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite, base `/daily-app2/20261119-8/`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish only from the collection root**, using its combined `deploy/` workflow. Per-app deploy would replace the collection.

## Workflow and formats

1. Load either synthetic example or paste/import source JSON. Set context, repository descriptions and positive lookup costs (minutes) in current search order, resolved request groups with integer counts, and exhaustive misses.
2. Press **Load AI & reconcile inputs**. Real neural embeddings match each rough resolution description to supplied repository descriptions. Inspect source evidence (cosine, not calibrated confidence).
3. Review/edit each destination and count; approve or hold every group. Review/edit repository lookup costs. Counts/identity edits reset approval; any review or cost edit invalidates applied outputs. Undo restores the preceding review/cost state, not the original source.
4. **Apply reviewed ladder**. A hold blocks the complete-cohort calculation rather than silently omitting records. The result retains all repositories including zero-hit ones. No destructive action.
5. Download complete original/review JSON, complete group CSV, or a complete Markdown ladder/audit and checklist; copy Markdown. CSV quotes cells, retains line breaks and neutralizes formula-like leading string characters. JSON retains every original, reviewed cost/count, evidence, decision and all ladder totals. CSV is a group audit; use JSON/Markdown for the full ordered ladder and all repository costs.
6. Reimport an audit JSON to restore **original inputs only**; reviewed edits and approvals are deliberately not auto-trusted. Import the desired edits as source to make them the next cohort. No browser source history is saved.

Limits: 2–8 repositories; 1–24 request groups; unique 1–40-character alphanumeric/underscore/hyphen IDs; 1–300-character descriptions/context/labels; counts 1–1,000,000, misses 0–1,000,000; finite costs 0.01–10,000 minutes; source at most 50,000 characters; JSON files at most 2 MB; review notes at most 1,000 characters. Audit envelope has its own 2 MB file bound, then the stricter original source bound. Bad/empty/oversized/unsupported input reports an error, never a substitute result.

## Actual AI and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction, normalized mean pooling, 384-dimensional vectors.
- Runtime: Transformers.js 4.3.2 / ONNX Runtime Web WASM CPU, one thread. WebGPU is not used or required. Worker processes four texts at a time, up to 32 texts. Actual tokenizer model ceiling is 512 tokens; feature-extraction's supplied `max_length:256` is not relied on as an enforced cap. Source descriptions are bounded to 300 characters. Model vectors must be finite, normalized and correctly dimensioned/count-matched before use.
- First explicit load downloads approximately 23 MB weights plus 27 MB WASM and runtime/tokenizer files. Internet required. UI shows this before loading, plus progress/chunk updates, cancellation and 180-second timeout. Run IDs protect fetches, file reads and worker replies; cancel/input changes terminate workers. Network, unsupported WASM/worker, malformed results and timeout errors leave no fake recommendations and offer retry.
- Immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps/assets. They avoid deploying duplicate runtime bytes and accept only bounded text/vector messages. See asset audit for hashes.
- Model/tokenizer files download from Hugging Face and its CDN/Xet bridges. No source content is uploaded, no remote inference or provider key exists, no credentials are requested. Imported instructions are data, not tool authority. Only static GET/HEAD download traffic was observed in browser tests. Audits persist host/path only, not signed CDN query values.
- Cache API stores worker source, runtime factory/binary and Transformers model assets. Tested scope: **fresh-worker inference offline in an already-open warmed page**. No offline reload/navigation promise, service worker or app-shell cache. Cache eviction/private mode may require internet and redownload. No real personal data is included.
- Requires modern browser module workers, WebAssembly SIMD, Cache API and several hundred MB available RAM. Real inference tested in desktop Chrome with GPU disabled. 320px/390px responsive emulation tested; physical phones, Firefox, Safari, low-memory devices and assistive technology not tested. Failures show actionable runtime/network messages, not deterministic fake AI.

## Deterministic objective and assumptions

Each successful request has exactly one authoritative repository; unsuccessful requests exhaust all repositories. Fixed per-attempt costs do not vary by query, outcome or earlier searches. Search stops at the first success; no parallel lookup, prerequisites, multiple locations or reading time modeled.

Aggregate reviewed hit counts by repository. Sort descending `hits / lookupCost`; ties keep source order, zero-hit repositories remain last. For adjacent A/B, A-first minus B-first effort is `cost(A)*hits(B) - cost(B)*hits(A)`, so the ratio rule minimizes retrospective summed effort under these assumptions. A full miss pays the sum of all costs regardless of order. Compute each successful home's cumulative lookup cost times its hit count, plus misses times full-path cost. Divide by the whole cohort for mean effort. Compare exactly the same cohort/costs with source-order baseline.

All displayed effort differences are **retrospective scenarios with assumed costs**, not measured time savings, future forecasts, or accuracy improvements. Two small fixtures matched 6/6 descriptions; this does not establish general accuracy. Irrelevant/negated text can still match; manual holds and source verification are essential. Miscounted cohorts, incomplete misses, varying costs or multiple authoritative homes invalidate the objective.

## Validation

After building, `python3 serve-built.py` serves this app and shared dependencies on localhost:6960 with production paths. In a second terminal run `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node newer-run-test.cjs`, `node import-stale-test.cjs`, `python3 artifact-test.py`, and `node gallery-test.cjs`. Browser tests require Playwright at the documented local workspace path; adapt that require for another installation. Set `APP_URL` / `REPORT` for assembled/public runs; gallery tests support `GALLERY_URL` / `GALLERY_REPORT`. Asset audit expects the root assembled `deploy/` and supports `ASSET_BASE` / `ASSET_REPORT`. Do not rebuild/clear `deploy/` while testing it.

See [VALIDATION.md](VALIDATION.md), runnable `core-test.mjs`, `browser-test.cjs`, defensive/race tests, independent Python artifact parsing and JSON reports. Successful browser tests use real model inference, not mocks. Fault injection is used only to test defensive failure/race handling. Original collection `/Volumes/ExternalHD/daily_app` remains untouched. No digest sent.
