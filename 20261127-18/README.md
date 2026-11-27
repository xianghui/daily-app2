# Looprate Desk

A local-AI tempo-conform worksheet for music editors. Import a small supplied audio-clip metadata catalog and informal edit requests; match descriptions with real neural inference, review metadata and constraints, then export whole-repeat, duration-ratio, pitch and output-frame instructions. **No audio is imported, analyzed, rendered or changed.** This utility creates worksheets, not WAV files or DAW project files. All fixtures are synthetic.

## Real AI / distinct workflow

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8; Transformers.js 4.3.2 / ONNX Runtime Web, WASM CPU. Real normalized mean-pooled 384-dimensional embeddings retrieve catalog descriptions for paraphrased requests, four texts per inference chunk. That match supplies source sample frames, rate and quarter-note beats, materially changing repetition, stretch and pitch instructions. AI does not detect sound, BPM or transients, extract measurements, or judge audio quality. Ranked cosine evidence is inspectable, not calibrated confidence. Nearest is not necessarily suitable; negation and out-of-catalog requests can fail. Correct or hold every match.

Both galleries were parsed: 917 existing entries in this collection and 3,514 in the original, read-only collection. See distinctness-audit.json. Clip Scribe transcribes spoken WAV clips; timecode utilities interpret time formats. This workflow instead checks musical beat divisibility, tempo-conform duration, varispeed pitch tradeoffs and output sample frames. It does not duplicate their objective or output.

## Workflow

1. Choose either synthetic example, paste source JSON or import a `.json` source/audit.
2. Explicitly click **Load AI & match clips**. No model download occurs before this action. Loading/file and chunk progress are visible. Cancel terminates the worker; retry can reuse caches. Timeout: 180 seconds. No fake/demo fallback.
3. Review catalog links, source evidence, all timing measurements, mode and constraints. Relinking resets metadata and approval. Edit multiline notes; approve or hold each request. Undo retains up to 40 review states. Originals stay intact.
4. Apply reviewed scenario. Pending/invalid reviews cannot apply. Every edit invalidates results and exports.
5. Export complete JSON, Audit CSV, Markdown or copy current Markdown. Conform CSV is available only when **every** request is ready; holds, nonwhole repeats and ratio/pitch limits block release. No external actions occur.

## Source / output formats and limits

Source object: `{title, outputRate, profiles, records}`. Title ≤100 characters; unique IDs ≤40 in each list; 2–8 profiles; 1–12 requests. Descriptions/notes ≤200 characters; source ≤30,000 characters. Controls and lone surrogates rejected. At most 20 texts / five real chunks. Shared pipeline uses tokenizer model_max_length 512; its max_length option is not relied on to enforce 256. Vector count, dimension, finite values and normalization are validated before retrieval.

Profiles: `id`, `description`, `frames` (integer 1–100,000,000 sample **frames**, not channel samples), `rate` (integer 8,000–192,000 Hz), `beats` (integer 1–128 quarter-note beats). Global `outputRate`: integer 8,000–192,000 Hz.

Requests: `id`, `note`, `bars` (integer 1–32), `beatsPerBar` (integer 1–12 quarter notes), `targetBpm` (30–300 quarter notes/min), `mode` (`stretch` or `varispeed`), `minRatio` / `maxRatio` (0.25–4, ordered), `maxPitch` (0–24 semitones). For 6/8 use 3 quarter-note beats per bar, not 6. Numeric metadata must be measured and checked by a person; no assumption of inferred audio identity beyond the description match.

`looprate-v1` JSON retains originals, all reviews, cosine candidates, held/blocked requests, plans and summary. Source or audit import ≤8 MB restores **originals only**; derived plans and old approvals are never trusted. Audit CSV retains every row, all reviewed parameters and baseline/plan values. Conform CSV includes all ready requests, clip, mode, repeats, native source frames/rate, target frames/rate, ratio, speed and intended pitch. It is a generic worksheet, not an executable DAW format. CSV quotes commas/newlines/quotes; string cells starting =,+,-,@,tab/CR receive an apostrophe to prevent spreadsheet formulas, while numeric negative drift/pitch stays numeric. JSON preserves exact text. Imported prose is text data; it cannot grant authority, execute HTML or request credentials.

## Deterministic timing contract / baseline

Target quarter-note beats = bars × beatsPerBar. Repeats = target beats / source beats, required to be a whole integer 1–32. No partial-loop trimming or compound-meter inference. Source seconds = source frames / source rate. Target seconds = 60 × target beats / target BPM. Duration ratio = target seconds / (source seconds × repeats); playback speed is its reciprocal. Varispeed pitch shift = −12 log₂(ratio) semitones. Pitch-preserving stretch has an **intended** zero shift; no artifact-free guarantee. Both modes obey ratio bounds (1e-12 comparison tolerance); only varispeed obeys maxPitch.

Target output frames = round(target seconds × outputRate), positive half-frame ties round up. Quantization error is at most half one output frame. This rounds the **total** planned duration; split/edit boundaries per repetition are not generated. Frame-rate conversion by itself must preserve time/pitch, not change tempo. No sample-rate reinterpretation is prescribed.

Baseline repeats the same reviewed source at native speed, without tempo conform, and reports signed drift versus target duration. It is comparable only for whole-repeat requests (including approved ratio/pitch-blocked ones); held requests excluded. Summary baseline metric sums absolute drift for its explicitly displayed comparable count; ready-plan metric sums absolute output-frame rounding for ready requests only. Do not interpret these different scopes as accuracy, measured audio quality, percentage improvement or time saved. All metrics recompute from the current reviewed scenario. Optimizes a concrete consistency bottleneck: complete clip-linked edit instructions with whole musical repeats and bounded stretch/pitch, rather than native-speed duration mismatches.

## Download / privacy / runtime

Initial internet: ~23 MB model/tokenizer/config from Hugging Face / its hf.co CDN, plus ~27.5 MB same-origin worker/factory/WASM (UI conservatively says ~29 MB). Downloads are **not** uploads. No content upload, API key, telemetry, server AI, paid services or optional external provider. Notes stay in memory; no document autosave. Cache API holds runtime/model files where permitted, not user documents. GET-only asset traffic and no content in URLs/bodies are checked during production-bundle inference. Reports retain host/path and query-key names only, not temporary signed CDN values.

Current desktop Chrome with WebAssembly SIMD/module workers and several hundred MB RAM tested with GPU disabled. No WebGPU required. Phone layout tested at 390/320px; physical phone inference, other engines and low-memory devices unverified. Unsupported Worker/WASM, construction/runtime/model/network failures, malformed results, timeout/cancel show an actionable error, no fabricated matching. Run IDs protect late worker events, delayed worker-source fetches and imported files.

Immutable shared runtime assets, retained in combined deployment (bytes/SHA-256 in runtime-provenance.json):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Shared worker protocol/source inspected: feature-extraction, wasm CPU, q8, normalized mean pooling, chunks of four. Transformers.js Apache-2.0; ONNX Runtime Web MIT. Worker explicitly caches factory/binary; this app explicitly caches worker source. Fresh-worker offline inference is tested only in an **already-open online-warmed page** with the entire browser context offline. Cold offline navigation/reload is not implemented or promised. Storage eviction/private mode may need re-downloads. The shared model host revision is not frozen; future upstream changes need revalidation.

## Build / publication / validation

React + Vite, base `/daily-app2/20261127-18/`; `npm install`, `npm run predeploy`. Required per-app gh-pages dependency and exact scripts retained. Publish **only through repository root** predeploy/deploy to preserve the collection; see root README for Pages verification.

See VALIDATION.md and machine-readable evidence. Successful AI tests use actual model weights, never mock outputs. Fault injection is limited to defensive tests. Python Fraction independently replays durations, beat repetition and sample-frame rounding; Python csv/json reopen browser-downloaded artifacts and compare current reviews and preserved source rows. Real audio quality, source metadata accuracy, physical devices and cold-offline startup remain untested and are not claimed.

### Reproduce the checks

After installing/building this app, run root `npm run predeploy`, then from this app `python3 serve-test.py --port 7800` (leave the server open). In another terminal here: `node core-test.mjs`, `python3 core-replay.py`, `node browser-test.cjs`, `python3 artifact-test.py local-`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node import-race-test.cjs`. Browser suites require the workspace Playwright package and installed Chrome; adjust its require path if reproducing elsewhere. `APP_URL` / `PREFIX` select the public/assembled target and independent report names. Gallery check uses `GALLERY_URL`; `node gallery-test.cjs` compiles root scripts and checks exact entry conservation. `python3 asset-audit.py` checks combined runtime hashes and size; `python3 public-audit.py` compares public bytes. Tests contain synthetic fixtures only.

Public release verified against built Pages commit `19e3b840cd65a2267cf470fae67a969a001abe4d`; nine exact asset matches, four known-answer links, complete public workflow/offline/privacy/defensive suite and 597 independent public-artifact assertions. Public gallery retains all 917 previous entries plus this new app. See publication-status.json and VALIDATION.md.
