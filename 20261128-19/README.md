# Filterstep Bench

A local-AI intake and review utility for electronics educators and bench designers maintaining mixed sensor-channel handoffs. Informal notes often obscure which supplied response requirements apply. MiniLM retrieves likely profiles; a reviewer corrects/holds them before an exact finite catalog search produces a nominal single-pole RC worksheet. This is not a general chat interface, circuit simulator or hardware controller.

## Use

1. Open a synthetic example or paste/import source JSON. Supply 2–8 response profiles, 1–8 sensor records and up to 12 resistors and 12 capacitors. Edit goals, catalogs and limits in the input. Click **Load AI & match channels** explicitly.
2. Observe model-download and batch progress. Cancel at any point; retry creates a new worker. Inspect source descriptions and cosine evidence, correct each profile or its numeric requirements, add multiline review notes, then approve or hold. Undo reverses the last 30 review operations. Changing any review invalidates applied exports.
3. Apply the reviewed worksheet. Every source record survives, including held/unfeasible channels. Export complete JSON, audit CSV or Markdown. Approved-only Worksheet CSV is enabled only when at least one approved channel exists and every approved channel has a feasible nominal pair. Copy exports the current applied Markdown. Nothing is installed or sent externally.
4. Reimport source or audit JSON (up to 1 MB). Audit import restores original source inputs, deliberately requiring new AI and review rather than trusting saved decisions. Source itself remains bounded to 30,000 characters. No automatic persistence.

## Real AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, normalized mean-pooled 384-dimensional sentence embeddings. [Upstream model card](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). English short-text retrieval, not calibrated confidence, extraction, logical reasoning or engineering inference.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), single-thread **WASM CPU**. No WebGPU requirement, API key or remote inference path. Current desktop Chrome tested with GPU disabled. Requires WebAssembly SIMD, module workers and adequate memory. Physical phones, other engines and low-memory devices unverified.
- Before explicit loading, no model-host downloads occur. First use downloads approximately **23 MB** of tokenizer/model from `huggingface.co` and its Hugging Face CDN, plus approximately **27 MB** same-origin runtime. Internet is necessary for uncached files. Host requests only download assets: imported user text is embedded inside the local worker, not uploaded. Browser validation observes GET-only asset requests without bodies. React treats notes as inert text, never authority or tools.
- Immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older app paths. Byte hashes in `runtime-provenance.json`. Reuse avoids duplicating the large runtime within this nearly full collection.
- Worker source, factory and WASM are explicitly retained via Cache API; Transformers.js caches model files. Tested offline scope: after a successful warm run, **fresh-worker inference in the same already-open page**. Offline reload/navigation is NOT supported. Cache denial/eviction requires internet. No service worker/offline app-shell promise.
- Maximum 16 short texts, each ≤200 characters; batches of four. Shared feature extraction uses tokenizer truncation/model context (512 tokens per tokenizer configuration); the pipeline's supplied `max_length:256` is not treated as an enforced custom token cap. The strict character bound keeps these short English notes well inside context. No long-document processing.
- Finite normalized 384-vector schema checked before ranking. Real network/model/worker errors, missing APIs, malformed output and 180-second timeout fail visibly with no fake fallback. Run identities, worker termination, fetch aborts and guarded async file reads prevent cancelled/stale results replacing newer input.

## Deterministic method and limits

Topology: ideal voltage source → series R → unloaded output, with C from output to ground. All values nominal. `τ = R × C`; `fc = 1/(2πRC)`. Positive attenuation at frequency f is `10 log10(1+(f/fc)²)` dB. Time to reach within 1% of a step is `ln(100)τ`. Enumerate every offered pair, checking maximum pass-frequency loss, minimum rejection-frequency attenuation, maximum 1% settling time and maximum supplied resistance. Choose largest feasible resistance, then smallest capacitance, then stable ID. The resistance cap must be supplied/verified by a competent designer; AI does not derive it.

Input units: Ω, nF, Hz, dB, ms. Frequencies must be positive with rejection frequency greater than pass frequency. All quantities are finite and bounded. Baseline chooses the offered cutoff closest to the pass frequency in logarithmic space, ignoring all constraints; ties use ID. Displayed miss counts evaluate this baseline and constrained choice against exactly the same approved requirements. No invented improvement, timing, measured quality or accuracy claim.

No component tolerances, nonzero source impedance, finite output load, leakage/parasitics, ADC acquisition, noise, amplifier stability or hardware ratings modeled. No higher-order response or anti-aliasing guarantee. A nearest semantic profile is always returned even for unrelated notes. Negation challenge failed and requires manual correction. Synthetic values are examples, not recommended operating settings.

## Formats and validation

Source JSON fields: `title`, `setups` (id, description, passHz, maxLossDb, rejectHz, minRejectDb, settleMs, maxOhm), `resistors` (id, ohm), `capacitors` (id, nf), `records` (id, note). Unique simple IDs ≤24 characters per collection. See exported `examples` in `src/core.js` for fixtures.

Audit JSON preserves original input, reviewed fields, candidate evidence and every enumerated pair. Audit CSV preserves each channel; worksheet CSV includes approved feasible channels only. Quoted commas, quotes and multiline strings are supported; formula-like string cells are apostrophe-prefixed, while numeric values remain numeric. Markdown is a text worksheet, not a sanitized HTML publication artifact.

See [VALIDATION.md](VALIDATION.md) for observed results, browser/artifact commands and untested scope.

## Build/publishing

React + Vite, base `/daily-app2/20261128-19/`. `npm install`; `npm run predeploy`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained by contract. **Do not run per-app deploy**: publish only through root `daily_app2` predeploy/deploy, which preserves the combined gallery. No optional provider integrations or credentials.

Public release verified: matching built Pages commit `d76b3f437e803689e7dbb4ce0b90be30bdf8e6eb`, successful workflow [46133637024](https://github.com/xianghui/daily-app2/actions/runs/46133637024), eight exact public asset hashes, both real-AI batches/full review/export/offline/max-batch and defensive recovery checks, **273** independent artifact/RC/baseline assertions per scope and all **943** gallery cards. Combined site **831,575,351 bytes**, below the unchanged guard. Physical circuits/phones, other engines and cold offline startup remain unverified. No digest sent; unrelated drafts preserved/excluded. [Open app](https://xianghui.github.io/daily-app2/20261128-19/).
