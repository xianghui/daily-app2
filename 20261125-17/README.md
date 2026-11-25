# Podium Desk — 20261125-17

Local-first tie-aware shortlist workbench for analysts preparing recurring scored exports. Paste/import informal shortlist handoffs and score tables; real local AI proposes a tie policy; review/change/hold every policy and cutoff; apply to an in-app result and export usable shortlist CSV plus complete audit. No awards, invitations, account actions or uploads.

## What is AI?

Normalized mean-pooled **Xenova/all-MiniLM-L6-v2** sentence embeddings compare each request's context with user-supplied ranking-policy descriptions. Cosine similarity proposes exact row count, competition places with gaps, or distinct levels without gaps. This materially drives selection semantics from varied handoff wording; it does not invent/evaluate candidate scores or extract numeric limits. Numbers/direction are explicit structured input. Descriptions can be edited in source JSON. Imported text is data, not instructions with tool authority.

Sorting, numeric tie groups, ranking, cutoff checks, snapshot comparisons and exports are deterministic. Similarity is **not confidence**. Both example batches produced real CPU inference: **4/6 intended policies matched**. Both hard-cap requests were mistaken for tie-preserving policies. Tests preserve those mistakes and use explicit human corrections before checking desired shortlists. This tiny result is not general accuracy. Ambiguous language and negation are limitations; hard seat caps must be verified, never assumed.

## Ranking contract / baseline

Each request is independent. Integer scores only (±1 billion), higher/lower as specified. Exact numeric equality defines ties. Original input order is the stable tie breaker for exact rows. Position is `1,2,3…`; competition places count better rows + 1 (`1,1,3…`); dense levels count distinct preceding score values + 1 (`1,1,2…`). The selected position/place/level must be ≤ reviewed cutoff. Shortlists based on rank/dense levels can exceed cutoff in **rows** and are explicitly warned against hard-cap use. Cutoff beyond table size selects all rows.

Baseline: sort the same table/direction but truncate to exactly N rows, breaking equal scores by original order. Counts and inclusion-difference witnesses are computed from these snapshots, not time saved, fairness, accuracy or a universal improvement claim. A deliberate exact-row cap can validly split ties. Held requests contribute neither baseline nor shortlist rows but retain every original record.

## Workflow and formats

1. Load Workshop prize shortlist or Service-time recheck, or paste/import `.json`.
2. Source shape: `{title, profiles:[{id,description,mode}], requests:[{id,context,limit,direction,rows:[{id,label,score}]}]}`. Modes: `rows`, `rank`, `dense`; direction: `higher`/`lower`.
3. Edit goals/descriptions, cutoff and score direction in JSON. Click **Load AI & interpret shortlist intent**; model downloads start only on this explicit action.
4. Inspect source rows, proposed policy and cosine candidates. Change policy/cutoff, approve or hold every request, add notes; undo up to 50 review snapshots.
5. Apply, inspect all ranked rows and baseline differences, then copy Markdown or download current applied results. Review edits invalidate exports. Source changes terminate inference and clear review.

Limits: 2–8 profiles, 1–24 requests, 1–40 rows/request (960 source rows). Cutoff integer 1–40. Source ≤240,000 characters, imported audit/file ≤1.5 MB. Descriptions/context/title/labels ≤200 UTF-16 characters, notes ≤500, IDs ≤60 unique ASCII letters/digits/_/-. No missing scores, decimals, extra fields, malformed Unicode or most control characters. IDs unique per request; repeated scores/labels are allowed.

- **JSON audit:** original data, every review/candidate score, note, ranking, selection and metrics. Lossless originals. Reimport restores originals only for fresh review; never trusts saved approvals.
- **CSV audit:** every original row, including holds, source order, with explicit position/rank/level/selection columns and review fields.
- **Shortlist CSV:** only approved selected rows, source order with ranking columns for downstream sorting. It does not discard declined rows from the audit.
- **Markdown / copy:** human-readable reviewed list, notes and comparison. Plain text worksheet; not sanitized publication HTML.

CSV quotes fields and doubles quotes; CRLF records; multiline strings survive. Formula-like text beginning `= + - @ TAB CR` gets an apostrophe prefix. Genuine numeric scores, including negatives, remain numeric. Use JSON for exact text recovery.

## Runtime, downloads, privacy, devices

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0. [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT), one thread. React + Vite app/runtime assets are same-origin.
- First use needs internet and approximately **50 MB**: 23 MB weights + 27 MB WASM, plus small tokenizer/JS files. Weights download from Hugging Face/delivery hosts; user content is not sent there. No key, provider integration, backend or agent credentials. Text stays in page/worker memory. Nothing is automatically saved except public runtime/model files in caches.
- Verified immutable shared worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve older apps and paths. `runtime-provenance.json` records hashes. Protocol `{id,texts}` → `{id,type:'progress'|'batch'|'result'|'error',...}`; result normalized 384-dimensional vectors, finite count/dimension/norm checked before ranking.
- Four texts/chunk; maximum 32 texts (8 chunks). Only descriptions/context enter inference, not labels or scores. Each text bounded to 200 characters, below model tokenizer's 512-token context. Shared pipeline passes `max_length:256`, but its feature extractor actually uses the tokenizer's own truncation limit; **256 is not an independently enforced token cap**.
- Current desktop Chrome with module workers, WebAssembly SIMD and Cache API recommended. Real CPU inference tested with GPU disabled; no WebGPU requirement. Small phones may lack memory/be slow. Phone layouts are emulated, not hardware-tested; other engines unverified.
- Cache API retains worker source/factory/WASM; Transformers.js caches model files. After a successful run, **fresh-worker inference offline in the same already-open warmed page** is tested. Offline navigation/reload/app-shell startup is not promised. Eviction/private mode can force redownloads. Clear browser site data to clear model caches.
- Download/chunk progress, cancel, terminated workers/abortable fetch, run identity guards, 180-second timeout and retry. Worker/model/network/unsupported/malformed-output failures are visible; no fake results. Clipboard failure leaves downloads available.

## Validation and publishing

See [VALIDATION.md](VALIDATION.md) and machine reports. Independent Python sqlite3 window functions verify 1,800 ranking scenarios and downloaded artifacts; Python CSV parser checks every original row and edited field. Browser tests cover both real fixtures, 24-request batches, cache/offline, review/edit/hold/undo/export/reimport, cancellation/retry, stale runs, bad inputs, network/runtime failures and narrow layout. Results are observations, not certification of ranking fairness or policy intent.

`npm install`; `npm run predeploy`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` remain, but publish **only from repository root** using the combined collection workflow. Base `/daily-app2/20261125-17/`. Preserve the size guard and shared runtime assets. No builder digest.
