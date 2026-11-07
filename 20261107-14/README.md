# Retention Desk

A private, static-hosted records-retention **planning** utility for a records coordinator. Paste/import a manifest and approved retention-policy descriptions; real local semantic inference suggests policy links despite different wording. Review matches and holds, inspect calculated dates, apply a snapshot and export a complete JSON/CSV ledger. It never opens/deletes files or authorizes disposal.

## Use

1. Open the app in a modern browser. Try **Office records** or **Community center**, both synthetic.
2. Supply policy CSV `id,text,months` (1–120 integer calendar months) and manifest CSV `id,text,closed,hold` (closure date YYYY-MM-DD, hold exactly `yes`/`no`). Quoted commas/newlines supported.
3. Set the as-of date explicitly (fixture default 2026-11-07) and similarity floor 0.20–0.95. Max 12 rows per input, unique IDs 1–60 characters, description 1–300 characters, 16 KB UTF-8 per CSV. Dates must be real dates 1900–2200.
4. Press **Load AI & match policies**. First run requires internet and approximately 23 MB model plus 27 MB CPU runtime. Loading progress and cancel are available. Inference is chunked four descriptions at a time, max 256 tokens each, with a 180-second timeout.
5. Inspect original description, policy, similarity (not confidence) and resulting date. Change or reject policy, add a hold, add a note, mark each row reviewed. Original holds are locked; unassigned records remain visible. Undo restores prior review edits (last 60 edits). Changing input cancels/invalidate all results; originals remain intact.
6. **Apply reviewed ledger** then download JSON/CSV or copy JSON. Any review change invalidates the applied snapshot. All records survive, even held/unassigned. JSON includes all original policy and record definitions, reviewed rows, scores, metrics and notice. CSV is a per-record handoff; leading spreadsheet formula characters are prefixed with an apostrophe (including multiline values). JSON remains lossless. Downloads are not file operations on source records.

## Exactly what AI does

`Xenova/all-MiniLM-L6-v2`, q8 ONNX, Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2 (derived from sentence-transformers/all-MiniLM-L6-v2). Transformers.js 4.3.2 / ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 WASM CPU embed policy/record descriptions into 384-dimensional, mean-pooled normalized vectors. The model runs in a real module Web Worker. No API keys, provider integration, server inference, fake fallback or hard-coded response table.

Semantic similarity links descriptions such as hiring evaluations to recruitment policy without requiring identical words. Deterministic code checks finite normalized embeddings, picks the highest cosine above the chosen floor, adds calendar months clamped to month-end, and labels retain/due/future-close/unassigned/hold. Holds always override due status, including an unassigned held record. Missing policies never produce a due candidate. A future closure is explicitly flagged unless on hold. All due labels say human authorization needed.

The exact-text baseline and AI proposal count are computed from current inputs and original proposals, not an accuracy, time-saving or compliance claim. Reviews may deliberately change these proposals; counts are labeled accordingly.

## Device, download, caching and privacy

Default uses WASM/CPU, **no WebGPU**. Tested in real desktop Chrome, headless through Playwright, including 320/390px emulated widths. Current Chrome/Edge recommended; Firefox/Safari, physical phones, low-memory devices and assistive technologies not tested. Web Workers, WebAssembly, modern JavaScript, memory and access to public model downloads required. There is no automatic GPU path.

Downloads are explicit: opening the app does not contact the model host. Model config, tokenizer and weights use Hugging Face (`huggingface.co` and its public CDN/redirect domains); app code, worker, factory and shared WASM are same-origin. No user content is sent to these hosts: only static asset GETs. Content is passed to the local worker as data, not executable instructions, and cannot request tools or credentials. No telemetry, remote inference or persistent document storage. No keys collected or embedded. Exported manifests may contain user data: save them where appropriate.

Cache API retains worker/factory/WASM/model files, not records. After an online inference, **a new worker in the still-open page can infer fully offline**, tested with all networking disabled. Offline page startup/navigation/reload is not promised. Cache API unavailable/evicted, private mode or storage clearing can require redownload. Cancel terminates the worker; already-downloaded assets may remain. Clear browser site data to erase caches. Network/runtime/unsupported-device errors give actionable retry messages, never substituted output. Blob URLs permit cached workers/factories to run offline.

WASM is byte-identical to the collection's immutable `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Vite rewrites to that retained same-origin file to avoid duplicating 26,861,777 bytes. The factory is bundled in `public/runtime/`. Preserve the shared app asset during root deployment. Licenses/notices are in `licenses/` and `THIRD_PARTY_NOTICES.md`. Exact npm versions are locked in package-lock.json; model registry uses upstream main, so future changes require revalidation.

## Limits and judgment

Sample policies are invented workflow fixtures, not legal advice or retention recommendations. Use externally approved policies and verify applicable jurisdiction, triggers, requirements and holds. Only a fixed month interval from closure is supported: not fiscal year end, event-dependent retention, statute logic or automatic hold discovery. MiniLM is a topical matching model, not a legal reasoner; it can confidently-looking match the wrong policy. Short English descriptions recommended; mixed-purpose records need manual review. Similarity is not calibrated probability. There are no content uploads, credential requests, automatic deletions, account changes or external actions.

## Build and validation

React + Vite. `npm install`; `npm run predeploy` builds `/daily-app2/20261107-14/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained as required; **publish via the root combined-site workflow**, not per-app deploy.

`node core-check.mjs`; `python3 serve-test.py` then `node browser-test.cjs`; `python3 export-roundtrip.py`; `python3 audit-assets.py`; `node validate-gallery.cjs` after adding gallery entry. Tests use installed workspace Playwright and Chrome. See VALIDATION.md and machine-readable evidence for observed results and publication status.
