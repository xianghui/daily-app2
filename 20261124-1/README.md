# Duration Quay

Mixed-duration import preflight for operations analysts combining timesheets, project estimates, stopwatch records and API exports. A colon does not distinguish hours:minutes from minutes:seconds. This utility keeps source context attached, uses **real local AI** to suggest the source convention, then produces an editable, auditable seconds/milliseconds import worksheet. No external system is changed.

## Workflow

1. Choose either synthetic example, paste source JSON, or import `.json` (source/audit envelope ≤1 MB). Supply 2–5 `plans`, each with `id`, `description` and explicit `format`: `decimal-hours`, `hours-minutes`, `minutes-seconds` or `iso`. Supply 1–24 `records` with unique `id`, `context`, and string `raw` duration.
2. Select **Load AI & reconcile**. First run requires internet and approximately **23 MB model + 27 MB CPU runtime**, plus local code. Progress and cancellation are visible. There is no model request before explicit loading.
3. Inspect profile descriptions and cosine-similarity evidence. Edit the profile/value and reviewer notes; **approve or hold every row**. AI similarity is not confidence. Source descriptions may be ambiguous, misleading or negated: verify with the originating system, not the AI.
4. **Apply reviewed scenario**. Strict deterministic parsers reject malformed/unsupported values; all accepted conversions have exact whole milliseconds and component-sum checks. Pending rows prevent apply. Held/blocked rows remain in the complete audit but are excluded from release.
5. Download complete **JSON / CSV / Markdown**, ready-only **Manifest JSON**, or copy the worksheet. Review edits invalidate applied results. Undo restores the previous review. Original inputs are preserved. Audit reimport restores originals only and requires fresh AI/review; prior reviews remain in the audit for inspection.

Source JSON shape:

```json
{"plans":[{"id":"project","description":"Project estimates in elapsed hours and minutes","format":"hours-minutes"},{"id":"lap","description":"Stopwatch lap times in elapsed minutes and seconds","format":"minutes-seconds"}],"records":[{"id":"task-1","context":"Stopwatch lap measurement for a short repeat task","raw":"1:30"}]}
```

## What AI does, and what it does not

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, generates **384-dimensional normalized mean-pooled embeddings** for source notes and profile descriptions. Cosine ranking suggests the closest profile. Four-text chunks support bounded batches. Vector count/dimension/finite values/unit norms are validated before suggestions. Input text ≤200 characters; tokenizer actual maximum 512 tokens (the feature-extraction pipeline ignores the worker's supplied max_length 256). Upstream model revision is `main`, so future upstream changes can affect rankings.

AI materially determines the proposed format: the same `1:30`, paired with project-estimate context versus stopwatch context, produces 5400 versus 90 seconds after approval. It does **not** parse, calculate, execute instructions or establish which profile is factually correct. Imported text is inert data; it cannot request tools, credentials or uploads. Parsing, exact arithmetic, review gating, baseline, totals and export are deterministic. There are no canned recommendations, heuristic AI fallback or provider integrations.

## Runtime, devices, caching and privacy

- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), single-thread **WASM CPU**. WebGPU is not required or used. Current desktop Chrome with module workers and WebAssembly SIMD is tested; several hundred MB free RAM recommended. Other browser engines, non-SIMD hardware and physical phones are untested. Responsive emulation is not a phone-inference performance promise.
- Weights/tokenizers/configs download from Hugging Face and its CDN. Runtime and app code are same-origin collection assets. **Downloading public files is not uploading user content.** Content, vectors, review notes and results remain in browser memory; browser downloads contain only user-requested artifacts. No API keys, analytics, remote inference or agent credentials. Fixtures are synthetic.
- To avoid duplicating the nearly full collection's runtime, reuse the immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. **Preserve those originating app builds.** `runtime-provenance.json` records their verified hashes. Protocol: `{id,texts}` → progress/batch/error/result `{id,vectors}`. Runtime dependencies were inspected and tested, rather than assuming that a shared worker works.
- Worker source is Cache-API cached as `duration-quay-worker-v1`; factory/WASM as `circuit-cove-runtime-v1`; model files use Transformers.js browser caching. After one successful online run, a **fresh worker in an already-open warmed page** works with all network disabled. Offline app-shell reload/navigation is not claimed. Eviction, browser storage policy and private mode can force redownload.
- Cancellation terminates the worker. Run IDs protect against late model messages, worker-source fetches and asynchronous file reads. Retry is explicit. Timeout 180 seconds. Missing workers/WASM, network errors, construction errors and invalid model output fail without fabricated results. Actionable errors suggest internet/device requirements.

## Bounds and exact duration semantics

Source JSON ≤24,000 characters. Profile IDs ≤60, record IDs ≤80; unique within each list. Context/descriptions ≤200, raw strings ≤600, reviewer notes ≤2,000. Imported audit file ≤1 MB separately, so expanded review metadata does not prevent normal maximum-batch restoration.

All accepted durations are **nonnegative fixed elapsed time, 0–365 × 24 hours inclusive**, exact to whole milliseconds; there is no rounding.

- `decimal-hours`: unsigned canonical decimal integer part, optional 1–6 fractional digits. Value ×3,600,000 must be an integer; `0.000001` hours is rejected, not rounded. BigInt rational conversion avoids binary-floating input rounding.
- `hours-minutes`: `H:MM` with minutes `00–59`; elapsed hours may exceed 23. `27:15` means 98,100 seconds. No seconds field, leading hour zeros (except zero itself), signs, whitespace or day rollover.
- `minutes-seconds`: `M:SS[.sss]` with seconds `00–59` and 1–3 optional fractional digits. No hours field or leading minute zeros except zero itself.
- `iso`: fixed `P[nD][T[nH][nM][n[.sss]S]]`, component order enforced, at least one component, no empty trailing T. One day means exactly 86,400 seconds. Integer component overflow (e.g. PT90S) is permitted subject to the global bound. No years, calendar months, weeks, negative signs, localized separators or fractional days/hours/minutes.

This is not calendar arithmetic, timezone conversion, time-of-day parsing, payroll rounding, rate calculation or automatic billing. Source policies can differ; repair or hold unsupported conventions.

## Artifacts and honest comparison

Complete JSON retains originals, every reviewed row, source evidence, blockers and metrics losslessly. CSV quotes commas/quotes/newlines and prefixes formula-leading text (`= + - @ TAB CR`) with an apostrophe; JSON remains unchanged. Reviewed multiline notes survive downloads. Markdown embeds source/review/check objects as escaped JSON text; imported markup is not rendered by the app.

Manifest JSON is an array of `{id,seconds,milliseconds,isoDuration}` for ready rows only. `seconds` is an exact decimal string; `milliseconds` is a safe integer; ISO is canonical `PT…S`. All ready canonical outputs round-trip through the ISO parser, including the full 365-day bound. Held/blocked entries are intentionally absent from the release but remain in the complete audit.

Baseline: interpret `parseFloat(raw)` as decimal hours, on the same reviewed ready rows only. For `1:30`, it gives 3600 seconds, while H:MM gives 5400 and M:SS gives 90. ISO strings are unparseable by this shortcut and labeled as such. The displayed count includes unparseable or differing baseline values; total seconds sum only ready rows. No invented accuracy percentage, elapsed-time saving or performance claim.

## Development and validation

React + Vite, base `/daily-app2/20261124-1/`. `npm install`, `npm run dev`, `npm run predeploy`. Required app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. **Publish only through ROOT combined-site predeploy/deploy**, not this app's deploy script.

See [VALIDATION.md](VALIDATION.md) for actual observed checks and limitations. Tests exercise real model inference, two distinct known-answer batches, exact parser boundaries, offline fresh-worker inference, review/undo/hold, independent downloaded-artifact parsing, chunking, privacy, runtime/network failure, races, responsive layouts and public production assets. Fault injection is used only for defensive checks; successful AI checks use real model weights.

Additional independent-context validation: eight further known-answer records across two independently worded batches all matched their intended formats and exact seconds. Together with bundled examples this is 20/20 profile matches, 16 valid conversions and four deliberate invalid values blocked on a tiny synthetic set, not general accuracy. The competing-negation challenge still misrouted; mandatory human review remains essential.

Public release verified: matching built Pages commit `6288fb27c50c73aab088f4b6ec944e83b1f5ff61` and workflow `45213837201` succeeded. Nine public app/gallery/runtime byte matches; all 830 gallery cards; public real-inference, reviewed exports, 24-record batching, offline fresh-worker and privacy checks passed. Two additional independently worded batches gave eight further correct links/conversions (20/20 small-fixture profile matches, 16 valid conversions total; four invalid inputs blocked). Independent public artifact parsing passed 516 checks; parser suite passed 4,778. Result-text contrast is 5.285:1. Combined site **999,885,807 bytes**, below the unchanged guard. Pre-existing unrelated recovery edits are preserved and excluded from this source commit. Negation can misroute; no general accuracy, physical-phone or cold-offline-startup claim. No digest sent.
