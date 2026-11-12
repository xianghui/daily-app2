# Closure Horizon

A local-AI follow-up worksheet for support/training coordinators. A completed/total snapshot treats cases with short follow-up like fully observed cases. Closure Horizon distinguishes completion events from right-censored observations, draws exact Kaplan–Meier completion steps and makes a reviewed still-open follow-up list. It does not update cases externally.

## Workflow

1. Choose **Repair follow-ups** or **Course follow-ups**, paste source JSON or import `.json`.
2. Define the common start, single endpoint, workstream descriptions and completed/still-open semantic anchors. Enter each record's elapsed days to completion or last observation; AI does not infer dates or durations.
3. Read download/privacy information, then explicitly **Load AI & read follow-ups**.
4. Inspect source notes and similarity evidence. Verify/edit workstream, outcome and elapsed days. Approve each verified observation or hold it out. Add multiline follow-up notes. Undo reverses the last review/threshold edit (up to 100 edits).
5. Set the still-open follow-up threshold and **Apply reviewed observations**. Every record must be approved or held; pending/invalid records block calculation. Held records remain in the audit, excluded from curves and queue.
6. Download complete audit **JSON**, reviewed register **CSV**, or worksheet **Markdown**; copy Markdown. Review edits invalidate the snapshot and disable exports until reapplied. Audit import restores original data only, not approvals or corrections.

## Real AI and static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 ONNX feature extraction through `@huggingface/transformers` 4.3.2, ONNX Runtime Web WASM CPU with one thread.
- Normalized mean-pooled 384-dimensional embeddings; cosine ranking proposes one workstream and compares two outcome anchors. No regex, fixtures, hard-coded replies, credentials or server inference substitute for the model.
- Four texts/batch, 256-token context cap; vectors validated for count, dimension, finite values and unit norm. 180-second timeout. Worker termination and generation IDs reject stale callbacks, worker downloads and file reads.
- Approximately 23 MB model/tokenizer downloads from Hugging Face/CDN plus 26,861,777-byte same-origin WASM and bundled app/worker/module factory. A successful first run requires internet. Downloads begin only after explicit processing. Progress messages report model files and batch counts; cancel terminates inference/download handling. Underlying browser downloads may already have reached the cache.
- The WASM is byte-identical to the immutable collection asset `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; the root deploy must preserve that older app. Vite rewrites worker asset paths to it. `public/runtime` contains the local factory. No third-party runtime script CDN.
- Current browser with module workers, WebAssembly SIMD and several hundred MB available RAM recommended. No WebGPU required. Production WASM CPU verified in desktop Chrome with GPU disabled; phone-width Chrome layouts tested, physical phones and other browsers unverified.
- Source ≤40 KB, 2–6 workstreams, 1–40 records, note/anchor/description ≤300 characters, integer elapsed days 0–3650. IDs unique. Audit imports ≤300 KB; PDFs, spreadsheets and other formats rejected. English semantic matching recommended.

## Privacy and offline scope

No API keys or optional remote integration. Content lives in page/worker memory, not URLs, requests, analytics, localStorage or saved designs. Model downloads are file requests, not content uploads. Only synthetic fixtures are committed. Explicit exports write local artifacts. Treat model files as public downloads, not private storage.

Cache API stores model/tokenizer files, worker source, local factory and WASM. **Offline real inference in a newly created worker was tested only in an already-open warmed page. Offline reload/navigation/app-shell startup is not promised.** Cache eviction/private-mode storage limits can require internet again. Network/runtime failures produce actionable errors and no fabricated results.

## Arithmetic and interpretation

For each reviewed workstream, at each observed day `t`, risk set `n(t)` includes every observation with elapsed duration ≥t; completed count is `d(t)`. Survival is `S(t)=product(1-d(t)/n(t))`; cumulative completion is `1-S(t)`. Events precede tied censors. Median completion is the first observed day with `S≤0.5`, otherwise **not reached**. The median threshold uses an exact BigInt fraction comparison so floating-point drift cannot shift the 50% boundary. Empty groups show no estimate; all-censored groups show zero observed completion without implying no future completions.

The naive baseline is completed/included; the comparison is descriptive observed-tail accounting, **not measured performance improvement, accuracy, time saved or a future completion probability**. Small final risk sets can yield 100% tail completion from one final event. Tables expose every risk set; no extrapolation is made. Follow-up list selects approved censored records with supplied duration ≥threshold; it is not a due-date calendar.

Assumptions: consistent origin and endpoint, single events, right censoring independent of completion prospects. No delayed entry, competing events, interval censoring, recurrent events, causal comparisons, confidence intervals, statistical tests, forecasting, medical analysis or service guarantees. Informative dropout can invalidate population interpretations. Human review is essential.

## Observed quality and artifacts

The two tiny bundled fixtures produced **16/16 intended workstream links but only 12/16 intended outcome labels** (six of eight per batch). The model mistook two completed screen repairs for censored cases, and two incomplete course observations for completed ones. This is prominently disclosed in the review UI. Manual corrections are required before trusting the curves; these are not general accuracy estimates. An unrelated instruction-like note still receives nearest labels; hold it. No calibrated abstention or confidence percentages.

After human corrections, repair medians are 4 and 6 days with naive completion 50% versus observed-tail KM 100% in each group. Course medians are 3 and 4 days, naive 50% each versus KM 62.5% and 100%. These synthetic outputs illustrate accounting, not operational improvements.

JSON retains originals, all reviewed records, evidence, holds, threshold, queue and exact curve values. CSV retains every record in source order; formula-like text beginning `= + - @ TAB CR` gets an apostrophe, including multiline notes. Numeric durations stay numeric. JSON is the exact text round-trip format. Markdown includes summary, follow-up queue and complete review register. See [VALIDATION.md](VALIDATION.md) for actual checks.

## Development and publishing

`npm install`, `npm run dev`; `npm run predeploy` builds Vite under `/daily-app2/20261113-4/`. Per-app `deploy` exists for contract compatibility but **do not invoke it**: publish the combined collection from the root with `npm run predeploy` then `npm run deploy`. Public URL: https://xianghui.github.io/daily-app2/20261113-4/ . Validation scripts use the installed Playwright at the host workspace; `serve.py` serves production files at their real base.
