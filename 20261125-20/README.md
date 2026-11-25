# Absence Desk

No-key browser worksheet for data analysts reconciling candidate and completed rosters. Translate informal follow-up handoffs into reviewed presence/absence contracts, then export occurrence-preserving selections. Distinct from a general merge or scalar SQL predicate tool: this handles nullable two-roster anti-/semijoins, reference witnesses and the `NOT IN` null trap.

## Use

1. Paste JSON, import `.json`, or choose either synthetic example.
2. Explicitly load AI. MiniLM embeds supplied policy descriptions and request contexts; cosine ranking proposes ordinary absence, null-safe absence or known-key presence.
3. Inspect alternatives/scores/source snippets. Edit each policy, approve or hold, and add multiline review notes. Undo review changes. Similarity is **not confidence**, identity verification or logical reasoning.
4. Apply. Deterministic exact key comparison selects candidate occurrences and records all matching reference IDs. No implicit row deduplication, remote access or deletion.
5. Download complete JSON/CSV/Markdown, selected-only CSV, or copy Markdown. Review edits invalidate the applied snapshot. JSON reimport restores originals for fresh inference/review, not automatic approval.

## Real AI and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX; normalized mean-pooled 384-dimensional embeddings.
- Transformers.js 4.3.2 / ONNX Runtime Web, single-thread WASM CPU. No WebGPU or API key needed. Current desktop Chrome recommended; module workers, WebAssembly SIMD and adequate memory required. Chrome with GPU disabled was tested. Other browsers and physical phones were not tested.
- Initial download approximately **50 MB**: 23 MB model + 27 MB WASM, plus JS/tokenizer files. Internet required initially. Explicit load, download/batch progress, cancel, retry and 180-second timeout; no inference begins at startup.
- Uses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those collection builds. Byte hashes: runtime-provenance.json and asset-audit.json.
- Four-text chunks; max 32 short texts/eight chunks. Description/context ≤200 characters. The worker passes max_length 256, but the feature-extraction pipeline actually relies on tokenizer model_max_length 512 for truncation; 256 is not a separately enforced cap. Unusual text can truncate. Model revision is not pinned by this app.

## Privacy, cache and authority

All source content remains in this tab and its local worker. Only public model/tokenizer files download from Hugging Face/CDN. No remote inference, credentials, telemetry or provider integration. No user content in requests or URLs. Imported text is data, never HTML, code, tool authority or credential instructions.

Cache API stores worker/runtime/model assets where permitted. Verified: after warming, a **fresh worker in the already-open page** runs real inference with browser networking blocked. Offline navigation, reload and startup are not promised. Cache eviction, private mode or storage denial can require another download. Cancellation terminates workers, aborts worker-source downloads and invalidates run identities; late callbacks/file reads cannot replace newer results. No fabricated fallback on failure.

## Input schema and bounds

Root: `{title, profiles, requests}`. Profile: `{id, description, mode}`. Modes:

- `absent`: retain a candidate iff no equal **known** reference key exists (`NOT EXISTS` with `=`). Missing candidate keys survive even if the reference contains null.
- `nullsafe`: retain a candidate iff no null-safe equal reference key exists (`NOT EXISTS` with `IS` in SQLite). Null matches null deliberately.
- `present`: retain a candidate iff an equal **known** reference key exists (`EXISTS` with `=`).

Request: `{id, context, rows, reference}`. Both rosters contain `{id, key, label}`. Keys are exact strings or explicit null. Empty string is known. No trimming, numeric coercion, case folding, composite-key inference or identity verification. Repeated reference matches never multiply candidates; repeated candidate keys remain separate occurrences. IDs are unique ASCII letters/digits/underscore/hyphen in each list.

2–8 profiles; 1–24 requests; 0–40 candidates and 0–40 references per request. Description/context/key/label/title ≤200 characters. Source ≤240,000 characters; import file/audit envelope ≤1.5 MB; notes ≤500 characters. Unknown fields, malformed values, duplicate IDs, unsupported formats and excess limits fail visibly. Original inputs remain editable and preserved.

## Outputs and baseline

JSON: canonical lossless audit with originals, all reviews, every source/reference row, selected candidates, row witnesses and computed metrics. Complete CSV: request markers, all candidate and reference records, reviewed keep flag, SQL baseline truth, reference IDs. Selected CSV: approved selected candidates only; held requests emit nothing. Every candidate occurrence survives in complete audit, including excluded/held ones. Multiline/quoted strings use proper CSV escaping; formula-like text is apostrophe-prefixed, including multiline text. JSON is the lossless round-trip format. Markdown is plain-text worksheet content, not sanitized HTML.

Baseline uses SQL `NOT IN` for either absence mode and SQL `IN` for presence; WHERE retains only TRUE. UNKNOWN does not pass. Empty reference sets make NOT IN true even for null. For null-safe absence, the shortcut intentionally lacks null-safe equality. Metrics count actual row-selection disagreements, not AI accuracy or saved minutes. Independent SQLite queries verify both exact method and baseline, including every downloaded candidate/reference record.

## Observed quality and limitations

Two different synthetic workflows: **6/6** simple policy suggestions matched expected labels (always-first-profile baseline: 2/6). **1/4** harder paraphrase/negation probes matched (first-profile baseline: 2/4); the remaining three need manual correction. Small fixture scores are not representative accuracy estimates. Embedding retrieval can confuse opposite policies and cannot reason about SQL. Mandatory review, explicit null policy and source evidence are essential. The UI shows these limitations before loading.

Customer fixture selected counts: 4/1/1, with 5 total candidate decisions different from baseline. Equipment fixture: 2/2/2, with 2 differences. Empty reference, repeated references, duplicate candidates, missing vs empty keys, Unicode, quotes and multiline fields are covered. This is a local QA/follow-up worksheet, not autonomous customer communication or database execution.

## Build and publish

`npm install`; `npm run dev`; `npm run predeploy`. React + Vite base `/daily-app2/20261125-20/`. Required per-app deploy scripts remain, but publish **only via collection root `npm run deploy`**, never this app's individual deploy script.

See VALIDATION.md and JSON reports for observed local, assembled and public checks. Browser tests use real Chrome/Playwright, actual downloads and actual model inference; defensive injections test failures only. Artifact checks use independent Python csv/SQLite. Physical-device memory/performance, universal classification accuracy, every browser and offline app-shell startup were not tested.
