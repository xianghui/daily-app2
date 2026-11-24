# Cron Witness

A local-first recurring-job QA worksheet for release engineers. Match informal handoff notes to **supplied** cron profiles with real browser AI, review the expression/window and export exact UTC firing-time fixtures. This app never reads or changes a crontab, executes a command, contacts a job endpoint or installs reminders.

## Workflow and formats

1. Choose **Office & finance** or **Operations & archive**, paste JSON, or import a source/audit `.json` ≤4 MB.
2. `plans`: 2–5 `{id, description, target}` profiles. `target` is a JSON **string**, e.g. `"{\"cron\":\"0 12 1 * 1\"}"`. Descriptions should explain the actual expression; AI does not verify their agreement.
3. `records`: 1–24 `{id, context, raw}` jobs. `raw` is a JSON string, e.g. `"{\"start\":\"2026-11-25\",\"days\":14}"`. Windows begin at UTC midnight, include the start, exclude start + days and are 1–14 days long.
4. Read the download notice and explicitly select **Load AI & reconcile**. Inspect ranked cosine evidence (not confidence), correct the profile, edit window JSON and multiline reviewer notes, then approve or hold every job. All job notes and originals remain visible.
5. Apply the reviewed scenario. Download complete JSON, spreadsheet-safe CSV, Markdown, or approved-only **Fixtures JSON**. Fixtures include the reviewed cron profile, UTC window and every expected ISO timestamp; these are test expectations, not commands. Copy the reviewed Markdown worksheet if desired.
6. Every edit invalidates exports. Profile/window changes renew approval. Undo restores up to 100 review edits. Held/invalid cases remain in complete audits but not approved fixtures. Reimporting an audit restores originals and requires fresh inference and review.

JSON is lossless. CSV stores arrays as quoted JSON cells, prefixes formula-leading text with an apostrophe and preserves multiline notes. No content is persisted except the exports you request. Do not enter real credentials or command secrets.

## Real AI, download and static hosting

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8, Apache-2.0. Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web WASM CPU, MIT. Normalized, mean-pooled 384-dimensional embeddings rank English job contexts against profile descriptions. This gives semantic retrieval beyond exact profile-label lookup; no fixed sample responses or regex fallback are used. AI retrieves, not generates, cron expressions. It can mislink negations, unfamiliar vocabulary and overlapping descriptions; human review is mandatory. One successful negation probe is not a reliability guarantee.

Initial internet requirement: approximately **23 MB weights + 27 MB WASM runtime**, plus about 0.55 MB worker, factory/tokenizer and app code. Model files download from Hugging Face/CDN (`huggingface.co`, observed `us.aws.cdn.hf.co`). These requests download public assets, never upload user content. No provider keys, remote inference, analytics or account integrations exist.

Recommended: current desktop Chrome on a secure origin, module workers, WebAssembly SIMD and several hundred MB available RAM. CPU path is tested and needs no WebGPU. Physical phones, low-memory devices and other engines are untested. Visible load/batch progress, cancellation, network/runtime errors and a 180-second timeout are included. Cancel terminates the worker; run identities protect against late fetches, file reads and results. Failure never substitutes deterministic or canned AI results.

The app deliberately reuses immutable same-origin runtime assets to keep the collection within its unchanged size limit:

- `20261115-6/assets/ai.worker-lkOoPoq8.js`
- `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve the older apps/paths during combined deployment. `runtime-provenance.json` records verified hashes and sizes. The originating worker's source and protocol were inspected: `{id,texts}` yields progress, chunks of four and finite normalized vectors, which this app validates for exact count and dimension. Inputs are ≤200 characters each; tokenizer model cap is 512 tokens. The worker's `max_length` option is not claimed as a smaller enforced token cap.

Cache API stores worker source (`cron-witness-worker-v1`) and factory/WASM (`circuit-cove-runtime-v1`); Transformers.js caches model files. Browser eviction/disabled storage may force another download. **Tested offline scope is fresh-worker inference in an already-open warmed page only. Cold offline navigation/reload is unsupported.** There is no service worker or offline app-shell promise.

## Deterministic cron subset and bounds

Exactly five numeric fields: `minute hour day-of-month month day-of-week` in UTC. Minute/hour/month support `*`, numeric lists, inclusive ranges, `*/step` and `range/step`. Steps must be positive and no larger than the field width; single-value/step is rejected. Day fields support only `*` or numeric lists/ranges: wildcard lists and day-field steps are intentionally unsupported. Sunday is **0**, not 7. Fields must fall within 0–59 / 0–23 / 1–31 / 1–12 / 0–6. Names, seconds, macros, `L W # ?`, time zones and DST are unsupported.

When both day fields are restricted, a date matches **day-of-month OR day-of-week**. When either field is `*`, both fields must match. Other fields always intersect. The baseline incorrectly ANDs both day fields; the UI reports jobs with differences and additional OR firing times, computed from identical reviewed data. Counts are not AI accuracy, time savings or production correctness claims.

UTC dates must be real and between 2000-01-01 and 2099-12-17. Impossible expression dates such as February 31 produce zero times; `cron-parser` rejects some such expressions, so that case is tested separately as a known-empty result. Zero matches are not proof a job is unnecessary. More than 512 firings per job **blocks the whole job**, never silently truncates; shorten the window or narrow the expression. Up to 24 independent jobs can overlap; this app does not estimate execution duration, detect job-resource conflicts, handle missed firings or emulate a particular scheduler implementation.

Source ≤50,000 characters; profile description/context ≤200, profile JSON string ≤6000, window string ≤2500; IDs ≤60/80; JSON ≤500 values and depth ≤8; notes ≤2000. Prototype-related keys and nonfinite numbers are rejected in parsed profile/window values. Duplicate JSON keys follow JSON.parse last-value behavior; avoid them. Imported text is inert data, never rendered as executable HTML or treated as instructions/tool authority.

## Build, publish and validation

React + Vite, base `/daily-app2/20261125-3/`. Run `npm install` then `npm run predeploy`. Per-app gh-pages dependency and required scripts are retained, but publish **only from the repository root** with root predeploy/deploy so the gallery is preserved.

See [observed validation](VALIDATION.md), browser reports and independent oracles. `node oracle-test.mjs` compares the bounded evaluator with development-only `cron-parser`; `python3 artifact-test.py` parses actual browser downloads with independent Python CSV/JSON; `node downloaded-oracle.mjs` checks the exported timestamps with cron-parser. `APP_URL` and `PREFIX` select assembled/public browser targets. No test-library code or credentials are bundled into the app.
