# Dewpoint Dock — 20261127-23

A local-AI arrival-planning utility for collection handlers. Match rough crate destination notes against supplied room descriptions/readings, review every match and measurement, estimate closed-crate warming waits, and export a traceable worksheet. No sensors, equipment, accounts or physical objects are accessed.

## Workflow

1. Choose **Gallery arrival** / **Studio transfer**, paste source JSON or import `.json` source/audit. All examples are synthetic assumptions. Set `marginC` in source before processing.
2. Explicitly click **Load AI & match rooms**. No model download occurs before this action. File/batch progress, cancellation and a 180-second timeout are provided. Retry uses available caches.
3. Review source snippets and all candidate cosine similarities (not confidence). Correct the destination; verify current room temperature/RH, initial cold surface temperature, measured/justified thermal time constant and maximum planned wait. Relinking resets approval and copies room readings. Approve or hold each crate; add multiline provenance notes. Undo restores up to 40 review edits. Originals remain unchanged.
4. **Apply reviewed scenario**. Inspect dewpoint, target, modeled warming curve and minimum whole-minute wait. Compare the fixed 60-minute baseline on the same approved subset. Held, unreachable, cooling and over-limit arrivals remain in full audits; no operational wait CSV is released unless all crates are ready. Any edit invalidates results/exports.
5. Download complete JSON, Audit CSV, Markdown, or gated Wait CSV; copy the Markdown handoff. Reimporting an audit restores originals only, never saved approvals.

**Planning only, not opening clearance.** Keep the enclosure closed during acclimatization. Verify the coldest actual surfaces, current room readings, material requirements and local handling protocol before opening. No material-specific conservation, mold, corrosion, biological, transport or safety assessment. A modeled zero-minute wait is not permission to open an enclosure.

## Actual AI and static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; normalized mean-pooled 384-dimensional text embeddings. Neural semantic similarity matches destination prose to supplied room descriptions. AI does not infer any temperatures, humidity, time constants or clearance decisions. Vector count, dimension, finite values and normalization are validated before ranking. No canned result or deterministic fallback.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT). Runtime provenance is recorded in originating app `20261115-6/package-lock.json` and `runtime-provenance.json` records exact shared asset sizes/hashes.
- Immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps/paths when publishing. Sharing avoids duplicating ~27 MB in the nearly full collection. The worker accepts `{id,texts}` and returns progress/batch messages and `{id,type:'result',vectors}`; four short texts per inference chunk, WASM CPU with one thread. Tokenizer model maximum is 512 tokens. The pipeline's requested `max_length:256` is not claimed as an enforced limit; input descriptions are limited to 200 characters.
- Initial download: approximately 23 MB model/tokenizer plus 29 MB runtime; internet required. Model host is Hugging Face / download CDN. No API key, mandatory paid service, server-only path or optional provider integration. Model revision follows the shared worker's unpinned host repository; remote model assets can change.
- Needs a current browser with WebAssembly SIMD/module workers and several hundred MB RAM. Desktop Chrome CPU with GPU disabled actually tested; WebGPU is not needed. Physical phones, Safari/Firefox, assistive devices and low-memory conditions unverified. Narrow viewport tests do not establish physical-phone support.
- Cache API retains worker, factory, WASM and model files where permitted. Online then fresh-worker real inference with all network disabled passed in a warmed, already-open production page. **No cold offline reload/navigation or persistent-cache guarantee.** Private browsing/eviction may require redownload. Inputs/reviews are memory-only except explicit exports.

## Privacy and authority

Default inference is on-device. Network requests download app/runtime/model files; user content is not uploaded. No remote inference, telemetry, secrets or provider integration exists. Browser request audits observe GET-only downloads without bodies and check supplied text does not appear in URLs. Signed CDN query values are not saved in public audit reports. Built-asset credential-pattern scans complement code/network inspection; they are not proof against every possible secret format. Imported text cannot alter worker URLs, grant tool authority or request credentials.

## Source contract

Source object: `title`, `marginC`, `profiles`, `records`. See `src/core.js` for realistic synthetic examples.

- Title ≤100 characters; marginC 0.1–5 °C.
- 2–8 profiles: unique `id` ≤40, `description` ≤200, `roomC` 5–40 °C, `rh` 5–95%.
- 1–12 records: unique `id` ≤40, destination `note` ≤200, `initialC` 0–40 °C, `tauMinutes` 1–1440, `maxMinutes` 0–10080. Numeric quantities may be fractional; recommended waits are whole minutes. Cooling transfers are explicitly unsupported.
- Reviewer notes ≤500 characters. Source ≤30,000 characters. JSON file/audit import ≤8 MB to permit maximum audit envelopes. Control characters and unpaired surrogates rejected. All units are explicit; no automatic unit conversion or sensor input.
- JSON audit schema `dewpointdock-v1` includes originals, review layer, candidates, jobs and metrics. CSV is CRLF with quoted text, doubled quotes and retained multiline content; formula-like leading text receives an apostrophe. Genuine numeric values stay numeric. Markdown is exported as untrusted text, not rendered HTML.

## Deterministic model and baseline

For room air T in °C and relative humidity RH in percent, use the Magnus liquid-water approximation:

`gamma = ln(RH/100) + 17.62*T/(243.12+T)`

`dewpoint = 243.12*gamma/(17.62-gamma)`

`target = dewpoint + marginC`

`surface(t) = roomC + (initialC-roomC)*exp(-t/tauMinutes)`

For cold-to-warm transfers already meeting target, recommend zero additional modeled minutes. Otherwise reject targets at/above room temperature as unreachable. Invert the exponential, ceil to whole minutes and verify the forward calculation/minimality. Never cap a required wait to force feasibility. Over-limit waits remain visible in the audit but block the operational worksheet. One time constant reaches 63.2% of the modeled temperature change; it must come from relevant measurements/assumptions, not the model. Crate construction, contents, airflow, latent heat, changing room conditions and cold spots can invalidate this single-node approximation. No empirical physical validation was performed.

Baseline applies a fixed 60-minute pause with the SAME reviewed inputs and counts target attainment on approved crates (including blocked ones). The audit field `waitTotal` sums individual modeled waits (including over-limit estimates); it is not wall-clock or scheduled elapsed time. This is not compliance with the maximum wait budget, measured accuracy, risk probability or a time-saving claim. The utility reduces repeated room-catalog lookup and makes the assumptions/target feasibility inspectable; no percentage improvement is invented. Warming curves are computed estimates, not observations.

## Validation / development

See `VALIDATION.md` for observed checks and exact limitations. Four correct synthetic room matches do not establish general accuracy; nearest-neighbor embeddings can confuse negations, absent rooms, aliases and multilingual text. Observed challenge: “Not tropical botany. Use the dry manuscript paper archive reading room.” still chose TROPICAL (incorrect). An instruction-like out-of-domain note chose PAPER; it caused no upload or authority change. Human correction/hold is mandatory. Successful tests use real model inference; fault injection is confined to defensive paths.

`npm install`; `npm run dev`; `npm run predeploy`. React + Vite base `/daily-app2/20261127-23/`. Required scripts: `predeploy: npm run build`; `deploy: gh-pages -d dist`. **Only publish via collection ROOT predeploy/deploy** to preserve all older apps. Original `/Volumes/ExternalHD/daily_app` remains read-only.

Local production server: `python3 serve-local.py` (port 7823). Test commands: `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node model-cancel-test.cjs`, `node import-race-test.cjs`, `python3 artifact-test.py local-`. Browser scripts use workspace Playwright and installed Chrome. `APP_URL` / `PREFIX` select assembled/public targets. Build success alone does not prove AI functionality.
