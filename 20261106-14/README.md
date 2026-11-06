# Shift Weave

A practical staffing utility for workshop/event coordinators. Paste or import short volunteer skill profiles and roles, run real semantic AI, review the constraint-safe assignments, and export a complete handoff roster including unfilled roles. No external actions, signup or API key.

## Run / deploy

React + Vite. `npm install`, `npm run dev`; `npm run predeploy` builds. Vite base is `/daily-app2/20261106-14/`. Per-app gh-pages scripts are retained but **publish only via the parent collection's combined root predeploy/deploy**, never this app alone.

## Workflow

1. Enter 1–10 people and 1–10 roles, one record per line, or import UTF-8 `.txt`. The two bundled examples are synthetic. Total input maximum 14,000 characters; each line maximum 500 characters and 80 words. Profiles should be English, short and positive descriptions of actual skills.
2. Choose minimum cosine similarity (default 0.20, not calibrated confidence), then explicitly click **Load & weave roster**. First load needs internet. Loading status and batch counts are shown; cancel terminates active inference. Retry starts fresh when cancelled/failed.
3. Inspect original skill sources and all similarities. Change a placement to another person or **Unfilled** to reject it, add handoff/recruitment notes, and confirm every role. Undo reverses review edits. Any edit invalidates an applied export; changing input invalidates results and cancels active work.
4. Apply the reviewed roster. Duplicate people are blocked. Download JSON/CSV or copy JSON; artifacts reflect the applied current review, preserving every role. JSON also preserves original inputs. CSV follows RFC-style quoted fields, escaped quotes and CRLF; do not import untrusted text into spreadsheets with formula evaluation enabled.

## Real AI and deterministic responsibilities

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Base model [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Runtime: `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), bundled ES module worker and local single-thread CPU/WASM assets. No WebGPU required or used. Sentence embeddings use mean pooling and normalization, 384 dimensions, maximum 256 model tokens, batch size four. Character/word limits reduce but cannot guarantee zero tokenizer truncation.
- AI materially computes semantic affinity even when skill and role wording differ. There are no canned AI responses or heuristic fallback. Invalid embeddings fail closed (finite values, count, dimension and normalized norm validated).
- Deterministic cosine scores feed exact bitmask dynamic programming maximizing sum of similarity for assignments above the selected floor, each person used at most once, each role optional. This is bounded at 10×10. It does not maximize safety, qualifications or guaranteed suitability. All review assignments must pass uniqueness/schema/count checks before export.
- Baseline uses token-set Jaccard overlap, the same exact optimizer and a 0.01 floor. The displayed count of different assignments is computed from the current selections versus baseline. Different thresholds/objectives mean this is NOT an accuracy or time-savings claim. No invented confidence or performance percentages.

## Download, devices, cache and privacy

Approximately 23 MB weights, 27 MB uncompressed CPU/WASM asset plus tokenizer/app/worker (~50 MB total before compression; server transfer compression varies). Hugging Face and its CDN serve public weights/config; GitHub Pages serves app/runtime code. First inference makes GET/HEAD requests only with public model paths, never profile or role text. No credentials, analytics, remote inference, content uploads, local document persistence or storage of input in URLs. Text is only in memory and user-initiated exports/clipboard; reload clears it.

Current desktop Chromium was tested with WebGPU unavailable/not used and CPU WASM. Current Firefox/Safari/Edge should support the required WebAssembly and module workers but were not tested; no promise for every phone. Keep ~300 MB free memory as a conservative recommendation, not a measured peak. Missing worker/WASM, timeout (180s), network and invalid inference failures have visible actionable errors; no fake results.

Transformers.js uses browser Cache API for weights; the WASM factory is explicitly cached in `shift-weave-runtime-v1`. A completed worker is retained to permit **offline inference while the page remains open**; this was tested. Model cache reuse after an online reload was tested with zero model-host requests. Cold/reloaded offline app navigation is not supported. Cancellation kills the worker; a subsequent run may require internet to refetch local runtime assets even if weights remain cached. Browser caches may be evicted; clear site data to remove them. No service worker is installed.

## Formats and limitations

Inputs: UTF-8 text only, one skill profile/role per line. Embedded instructions are treated as text to embed, with no tool authority. Exports: structured `shift-weave-v1` JSON, CSV with roleId/role/personId/person/note/reviewed. All unfilled roles have null personId and survive export; original people/roles survive JSON. Review is deliberately required for every record. No dates/availability inference: everyone is assumed available for one role. Model may mishandle negation, credentials, uncommon skills and contextual constraints. Not for autonomous employment or medical/safety qualification decisions.

See [VALIDATION.md](VALIDATION.md), actual test scripts and machine-readable browser reports. To reproduce: `node core-test.mjs`; serve the production build with `npm run preview -- --port 6144`, then `node browser-test.cjs` (requires installed Chrome); override TEST_URL and REPORT for the live site.
