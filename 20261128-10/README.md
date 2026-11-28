# Headroom Folio

A private browser worksheet for audio editors reconciling mixed delivery handoffs. **Real local MiniLM inference** matches informal destination descriptions to a supplied house profile. Deterministic, tenths-of-a-decibel arithmetic then chooses the closest gain-only target within the true-peak ceiling and explicit boost/attenuation bounds. Unreachable loudness targets remain visible instead of being “fixed” by an imaginary limiter.

Not an audio analyzer, mastering processor, compliance certification or renderer. No audio is imported or changed. House examples are synthetic planning assumptions, **not platform standards**.

## Use

1. Choose **Conversation & television** / **Song & narration**, paste JSON or import `.json` (≤1 MB). Supply comparable whole-program integrated loudness in LUFS and measured true peak in dBTP, your own profiles, maximum boost/cut and title. Silence, RMS, sample peak and short-term loudness are not supported substitutes.
2. Explicitly **Load AI & match profiles**. Inspect all candidate source descriptions and cosine evidence. AI retrieves targets by meaning, not exact labels; it never infers measurements or proves suitability.
3. Correct profiles and numeric assumptions, add multiline reviewer notes, approve or hold/reject each match. Numeric/profile changes reset approval. Undo supports 30 edits; originals remain unchanged.
4. **Apply reviewed worksheet**. A complete audit includes every original, held, failed and approved clip. Any later edit invalidates exports until reapplied. Gain CSV unlocks only when every row is approved, peak-safe and within the target window.
5. Download complete JSON / Audit CSV / Markdown or gated Gain CSV; copy current Markdown. Audit JSON contains originals, reviewed overrides, candidate evidence, baseline and estimates. Reimport restores **original inputs only** and requires fresh inference/review. Export before closing; the working dataset is not persisted.

## Real AI / static hosting

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 quantized ONNX; mean pooling, normalized 384-dimensional sentence embeddings. Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), CPU WASM module worker. No generative text, canned output, API key or remote inference provider.
- AI ranks profile descriptions against each clip's note and retrieves its target/ceiling/tolerance. Numbers, schema checks, closest feasible gain, target-window checks, baseline and exports are deterministic. Imported text is data, never instructions or executable content.
- First explicit load: approximately **50 MB** (~23 MB model/tokenizer plus ~27 MB runtime). Internet to this site and Hugging Face/CDN required. Model host uses `main`; observed resolve commit is recorded in request paths, but future model-host changes are possible. No content is placed in network requests.
- Current WebAssembly SIMD/module-worker browser, sufficient memory and Cache API for offline reuse. No WebGPU required. Actual Chrome tests disabled GPU. Physical phones, other engines and low-memory devices are **not tested**.
- 2–8 profiles and 1–12 clips: at most 20 texts in batches of four. Descriptions/notes ≤200 characters. Worker uses the tokenizer's inherited model context limit (the pipeline `max_length` option is not treated as a separate enforced cap). Count, finite values, dimension and normalization are validated before using vectors.
- File download/batch progress, cancellation and three-minute timeout. Cancel terminates worker, aborts source fetch and changes run identity. Input edits and asynchronous file reads are guarded against stale results. Runtime/model/network/worker/malformed-output errors show actionable failure with no fake fallback; retry with the load button.

## Shared assets, privacy and offline scope

Inspected immutable same-origin dependencies, with exact bytes/SHA-256 in `runtime-provenance.json`:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

These originating builds must remain deployed. Protocol: `{id,texts}` → progress and `{id,type:'result',vectors}`. Reusing the audited worker avoids duplicate WASM/runtime bytes. Worker source, WASM factory and binary use Cache API; Transformers.js caches model/tokenizer files. No analytics, credentials, account integrations or optional remote path.

Tested offline scope: after a successful online run, terminate and create a **fresh worker in the same open warmed page**, with all network disabled, and run real inference. Offline page reload/navigation is **not supported**; no service worker app shell is supplied. Cache eviction/disabled storage requires internet again. Only fixed model/runtime downloads leave the device; user text goes to local worker messages only. Request audits assert GET-only downloads, no bodies and no source text in URLs. Public logs store host/path only, never signed download query values.

## Source schema

Source JSON ≤30,000 characters. Import envelope ≤1 MB with original-source bound still enforced. IDs unique per table, ASCII `[-A-Za-z0-9_]`, 1–24 characters. Invalid control characters/unpaired Unicode are rejected; tabs and newlines are retained.

- `title`: 1–100 characters; `maxBoostDb`: 0–30; `maxCutDb`: 0–60. Numeric values use 0.1 steps.
- `profiles` (2–8): `id`, `description` (1–200 chars), `targetLufs` (−40 to −5), `ceilingDbtp` (−12 to 0), `toleranceLu` (0 to 3).
- `records` (1–12): `id`, `note` (1–200 chars), `integratedLufs` (−70 to 0), `truePeakDbtp` (−70 to +12).
- Review adds editable measurements and target assumptions, `profileId`, `decision` (`approve` / `hold`), `reviewerNote` ≤1,000 chars and AI candidate evidence. No source record is deleted.

CSV quotes every field, uses CRLF and doubles quotes. Formula-like text starting `= + - @ tab CR` is apostrophe-prefixed, including multiline text. Signed numeric dB/LUFS fields remain numeric. JSON retains exact source strings; Markdown is downloaded/copied as plain text, not rendered as imported markup. Gain CSV is a human handoff worksheet, not a command file.

## Objective and comparison

In integer tenths, feasible gain `g` satisfies:

`-maxCut <= g <= min(maxBoost, ceiling - measuredPeak)`

Clamp `target - integrated` to that interval to minimize absolute target distance. An empty interval is unresolved; no invented gain. Output integrated/true peak are their measurements plus gain. Target fit means absolute deviation ≤ supplied tolerance. Arithmetic uses integer tenths, avoiding binary-float boundary errors.

The **target-only baseline** chooses `target - integrated` ignoring the peak ceiling and gain bounds, then checks it against the same supplied constraints. Displayed violation counts include all rows/holds; reviewed target misses are separate so reduced peak violations cannot conceal under-target audio. No time-saved, accuracy, quality or platform compliance claim.

Gain-only estimates assume comparable whole-program measurements and unchanged linear scaling. Loudness gating, near-silence, resampling, codec overshoots and later processing can invalidate the estimate. Re-measure the actual rendered result. No compression/limiting is modeled or applied. MiniLM similarity can mishandle negation or ambiguous destinations; review is mandatory.

## Development / validation

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261128-10/`. Required per-app gh-pages/scripts retained; publish only via the **root combined deployment**, never the per-app deploy command.

Tests: `node core-test.mjs`; `python3 serve-test.py` serves production builds on 7861; `node browser-test.cjs`; `node defensive-test.cjs`; `node import-race-test.cjs`; `node model-cancel-test.cjs`; `python3 artifact-test.py local-`. Browser tests require this workstation's Playwright/installed Chrome; `APP_URL`, `GALLERY_URL`, `SITE_ORIGIN` and `PREFIX` select assembled/public targets. Asset audit defaults to the assembled server (7862). Tests use only synthetic fixtures. See `VALIDATION.md` for actual outcomes and untested scope.
