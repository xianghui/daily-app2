# Binwise Bench

A local-AI FFT setup planner for bench-test engineers and field acoustic researchers. Rough measurement briefs often omit a shared profile name: real sentence embeddings retrieve the supplied frequency requirements, then an exhaustive finite search chooses a supported sample rate and FFT length under bandwidth, bin-spacing, window-time and raw-buffer limits. This is not a spectrum analyzer and does not capture audio.

## Workflow

1. Try **Motor & voice** or **Wildlife & ultrasound**, or paste/import synthetic or your own JSON. Edit actual supported rates/sizes, guard factor, profile requirements and per-brief time/memory limits.
2. Explicitly **Load AI & match profiles**. No model-host requests before this action. Inspect the original brief, candidate descriptions and cosine similarities (not confidence).
3. Correct the linked profile and numeric requirements. Auto chooses the least raw sample buffer, then shortest window; or explicitly choose any supported pair. Unsupported/infeasible choices cannot release Setup CSV. Every numeric/profile/setting edit resets approval. Approve or hold every brief; add multiline notes; undo up to 30 edits.
4. **Apply reviewed worksheet**. Complete audits preserve every source, hold and failed constraint. Any review edit invalidates exports. No physical equipment or remote accounts are changed.
5. Download JSON, Audit CSV, Markdown or gated Setup CSV; copy current Markdown. JSON `binwise-bench-v1` contains original source, reviewed records, all candidate evidence, complete pair enumeration and calculations. Reimport restores **original inputs only** and requires fresh inference/review; it never silently trusts past approvals.

## AI / runtime / license

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8, via Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). Normalized mean-pooled 384-dimensional embeddings rank each brief against supplied descriptions. Output count, vector dimensions, finite values and normalization are validated. The model supplies semantic links, **not** measured bandwidth, equipment specifications, resolving power or numeric limits. Validation, candidate-pair enumeration, constraint search, baseline and exports are deterministic. No generative model, canned response, regex classifier or fake fallback.

Initial download approximately 50 MB (~23 MB model + ~27 MB runtime). Internet to this site and Hugging Face/CDN required. Current browser with module workers, WebAssembly SIMD and sufficient RAM. Real inference tested in installed desktop Chrome with GPU disabled. WebGPU is not required. Physical phones/low-memory hardware/other engines are untested; phone screenshots are viewport emulations, not speed claims.

At most 20 short descriptions / five chunks of four, with file-download and batch progress. Texts are limited to 200 characters. The inherited tokenizer limit applies; the pipeline's `max_length` option is **not** relied upon as an enforced token cap. Cancel aborts pending worker-source fetches, terminates the worker and advances run identity. Model/network/worker/runtime/malformed output failures and 180-second timeout are visible, with retry and no deterministic substitution. Input changes and delayed file reads share identity guards against stale replacement.

## Privacy, network and cache

Default inference is on-device; no user content uploads, keys, paid services, remote inference, telemetry, account or workspace persistence. Network GET requests download runtime/model files only. Text is data, not tool authority. Export before closing.

Shared immutable same-origin assets (preserve these originating apps; hashes in `runtime-provenance.json`):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

The worker protocol is `{id,texts}` → progress/batch/result; single-thread WASM CPU. Worker source, module factory and WASM binary are explicitly cached through Cache API; Transformers.js caches model files. A fresh worker with all network disabled **in a successfully warmed, already-open page** was tested. Offline page navigation/reload is not supported. Cache eviction or restricted storage may require another download. Shared paths avoid duplicating ~27 MB for each utility.

## Schema / bounds

Source ≤30,000 characters; `title` nonempty ≤100; `hardware`; 2–8 profiles; 1–12 records. Unique simple IDs ≤24 characters. Briefs/descriptions nonempty ≤200, reviewer notes ≤1000. Invalid Unicode/control characters rejected (tabs/newlines supported). `.json` imports including audit envelopes ≤1 MB; original-source bound still applies.

- Hardware `rates`: 1–8 unique integer Hz values 100–192000. `sizes`: 1–11 unique powers of two, 256–262144. `guardFactor`: 2.1–4. Maximum 88 pairs per brief.
- Profiles: `id`, `description`, integer `bandMaxHz` 1–40000 and `spacingMaxHz` 0.1–1000 in 0.1 steps.
- Records: `id`, `note`, integer `maxWindowMs` 1–10000, `channels` 1–16, `bytesPerSample` 1–8, `bufferCapBytes` 256–16777216, `baselineRateHz` 100–192000 and power-of-two `baselineN` 256–262144.
- Review adds `profileId`, numeric overrides, `settingId` (`auto` or supported `rate/N`), `decision` (`approve`/`hold`), `reviewerNote` and model candidate evidence.

CSV uses quoted fields and CRLF with correct escaping. Formula-like string prefixes (`= + - @ tab CR`) are apostrophe-prefixed; genuine numbers are not modified. JSON preserves exact text and full precision. Setup CSV includes every approved feasible brief, reviewed requirements, chosen rate/N, spacing, duration and raw bytes. Audit CSV retains held/unresolved rows. JSON is the complete source-preserving envelope. Markdown is plain text, not executed imported markup.

## Exact planning objective and honest baseline

For each supported pair `(Fs,N)`:

- Frequency guard: `Fs >= guardFactor × bandMaxHz`.
- Bin spacing: `Fs/N <= spacingMaxHz` (1e-9 comparison tolerance).
- Window: `1000N/Fs <= maxWindowMs` (1e-9 tolerance).
- Raw sample bytes: `N × channels × bytesPerSample <= bufferCapBytes`.

Auto minimizes raw buffer bytes, then window duration, then sample rate. Enumeration covers every supported pair; no feasible pair means unresolved. Manual choices need not be optimal but must satisfy every release constraint. JavaScript doubles; display up to three decimals, exports retain unrounded values.

Baseline is each supplied fixed `(baselineRateHz,baselineN)` assessed under **identical reviewed requirements and hardware**. Displayed counts are constraint-failing briefs, including holds, not measured accuracy/time saved. Buffer sum includes held rows and uses zero for unresolved choices, explicitly labeled. No invented percentage gains.

## Limits

Bin spacing is **not spectral resolving power**. Window main-lobe width, leakage, stationarity, noise, real bandwidth, analog anti-alias filtering and clock quality are not modeled. Guard factor does not design a filter. Zero padding does not create information. Buffers count raw interleaved samples only, not FFT scratch, complex arrays or software overhead. Per-brief caps are not a simultaneous shared-RAM allocation. AI always finds a nearest profile even for irrelevant/negated notes. Verify each requirement and actual hardware support; hold uncertain briefs. No microphone access, waveform processing, instrument controls or safety clearance.

## Build / validation / publishing

React + Vite base `/daily-app2/20261128-8/`. `npm run predeploy` builds. Per-app `gh-pages` and `deploy` are retained by contract; **publish only from repository ROOT** through its combined `deploy/` workflow. `VALIDATION.md` records actual observations. Tests: `node core-test.mjs`, `python3 independent-test.py`, `node browser-test.cjs`, `python3 artifact-test.py local-`, defensive/recovery/import/model-cancel scripts and asset audits. Browser tests use the installed Playwright package and actual Chrome; successful AI runs are never mocked.
