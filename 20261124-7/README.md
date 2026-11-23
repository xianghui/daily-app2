# Weekbridge Desk

A local-first **date handoff reconciliation worksheet** for operations analysts combining compact ISO-week shipment schedules, ordinal scientific logs and calendar invoice exports. Unlike Epoch Ledger (spreadsheet serials/timestamps) and Wallclock Desk (time zones), this handles **week-year versus calendar-year identity** and strict ordinal-day bounds.

## Use

1. Choose either synthetic fixture, paste JSON or import source/audit `.json` ≤1 MB. Schema: `{plans:[{id,description,kind}],records:[{id,context,raw}]}`. Kind is `iso-week`, `ordinal` or `calendar`; editable descriptions/goals identify the source convention.
2. Explicitly **Load AI & reconcile**: real MiniLM embeddings match each source-context note to your convention descriptions. First run needs internet: approximately **23 MB model + 27 MB WASM runtime**, plus code. Loading, batch progress, cancellation and a 180-second timeout are visible before/while downloading.
3. Inspect original dates/context, ranked cosine evidence (not confidence), proposed convention, converted date and year-boundary witnesses. Edit convention/date and reviewer notes, approve or hold every record. Edits reset approval when semantics change; undo retains 100 review snapshots. Originals are never overwritten.
4. Apply the reviewed batch. Strict deterministic validation blocks impossible dates, nonexistent ISO week 53, invalid weekdays and invalid leap-year ordinals. Approval does not bypass validity. Holds remain in audits but not releases.
5. Download full JSON/CSV/Markdown audits, copy Markdown, or ready-only Release JSON with `{format,records:[{id,date,sourceDate,convention,kind}]}`. Exports use current applied results; any edit invalidates them. Reimporting an audit restores **originals only**, requiring fresh inference/review. Nothing sends messages or changes external systems.

## Exact supported formats and limits

- `iso-week`: ASCII `YYYYwwD`, week 01–53, weekday Monday=1 through Sunday=7. Week 1 contains January 4; Thursday determines the ISO week-year.
- `ordinal`: ASCII `YYYYDDD`, day 001–365/366 of the Gregorian calendar year.
- `calendar`: ASCII `YYYYMMDD`, strict Gregorian month/day bounds.
- Source years **1900–2099**. ISO-week outputs may fall in adjacent calendar years. No timezone, time of day, fiscal/retail week system, locale guessing, spaces, separators or silent overflow repairs. Dates are not appointments or UTC instants.
- 2–5 conventions; unique IDs ≤60, descriptions ≤200 characters. 1–24 records; unique IDs ≤80, context ≤200, raw strings ≤40; source JSON ≤50,000 characters; review notes ≤2,000. Imported audit envelope ≤1 MB, extracted originals still obey source bounds.
- CSV quotes commas/newlines/quotes and apostrophe-prefixes formula-leading strings, including multiline reviewer notes; JSON preserves exact originals. CSV is a worksheet, not an original-source reimport format.

## Real AI, privacy and device requirements

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), single-thread **WASM CPU**. Normalized mean-pooled 384-dimensional vectors drive nearest-description cosine ranking. Four texts per inference chunk. Shared pipeline supplies max_length 256, but its actual tokenizer cap is **512 tokens**; inputs are bounded to 200 characters. All vectors require correct count/dimension, finite numbers and approximately unit norms. Raw date values are not embedded; AI routes the source convention rather than hallucinating dates.

AI materially changes output: identical `2020011` becomes **2019-12-30** under a real inferred ISO-week context, versus **2020-01-11** under inferred ordinal context. Six simple known-answer links matched, but a competing-negation probe misrouted to week rather than ordinal. Similarity does not certify source semantics; mandatory human review is essential. No confidence percentages, hard-coded AI responses or deterministic fallback. Imported text is data, never tool authority.

No API key, remote inference, analytics, upload or persistent source storage. Content/reviews live in page memory and explicit exports. The only external traffic downloads public weights/tokenizer from Hugging Face/CDNs; no user content is in network bodies or URLs. Model `main` revision is not pinned; upstream updates can change results.

Runtime/worker assets are same-origin and reused immutably from `20261115-6/assets/ai.worker-lkOoPoq8.js`, `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve their builds/URLs; hashes are in `runtime-provenance.json`. CPU WASM is the tested default, not an untested WebGPU fallback. Current desktop Chrome with module workers/WebAssembly SIMD and several hundred MB free RAM recommended. Physical phones, other browsers and low-memory devices untested.

Cache API stores worker/factory/WASM; Transformers.js caches model files. Tested offline scope: **fresh-worker real inference within an already-open, successfully warmed page**. Cold offline navigation/reload is not supported/tested. Cache eviction/private mode can require another download. Cancel terminates workers; run identities guard pending fetches/file reads and late responses. Errors never manufacture suggestions; retry explicitly.

## Comparison and verification

The computed baseline interprets seven digits as a calendar-year ordinal and eight as calendar dates, allowing JavaScript UTC overflow. Strict conversion differs on one of two valid approved dates in each example. Invalid and held rows are excluded from that comparison; blockers are reported separately. This is a convention-aware versus permissive parser comparison, **not AI accuracy, productivity or measured time saved**. Review solves source reconciliation, deterministic checks solve date math; both are needed.

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite base `/daily-app2/20261124-7/`; required per-app gh-pages scripts retained. Publish only through the root combined-site workflow. See [VALIDATION.md](VALIDATION.md) for observed checks and limitations. Fixtures are synthetic. No provider integration or shared credentials.
