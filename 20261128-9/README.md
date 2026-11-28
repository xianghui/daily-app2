# Bitbudget Studio

A local-AI delivery-budget worksheet for video editors preparing mixed clip handoffs for size-limited portals. Content descriptions often arrive without standard profile names. Real MiniLM embeddings retrieve a supplied content requirement; deterministic arithmetic selects the highest supported video bitrate that meets that requirement and an estimated full-file byte cap, including audio and container reserves.

This is **not a transcoder**, media analyzer, quality measurement or file-size guarantee. No media is imported, altered or uploaded.

## Workflow

1. Use **Slides & interview** or **Sport & concert**, paste source JSON or import `.json`. Edit the video bitrate ladder (`hardware.rates`), supplied content profiles and each clip's duration, byte cap and reserves. Examples are synthetic, not codec recommendations.
2. Explicitly **Load AI & match profiles**. Inspect the original note and all candidate descriptions/cosine similarities. No model-host request occurs before this action.
3. Correct the profile, numeric assumptions and video target. Auto enumerates every supplied ladder rate and chooses the highest feasible one. Every profile/numeric/target edit resets approval. Approve or hold each clip. Multiline reviewer notes, rejection via hold, and 30-edit undo are supported.
4. **Apply reviewed worksheet**. Every input, hold and failed constraint survives in the audit. Any edit invalidates the export snapshot. Delivery CSV is blocked until all clips are approved and feasible under the estimate.
5. Export JSON, Audit CSV, Markdown, or Delivery CSV; copy current Markdown. JSON includes originals, review, candidate evidence, every tested rate, baseline and computed result. Reimport of an audit restores **original inputs only**, requiring fresh inference and review; old approvals are never trusted.

## Real AI and static runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8; normalized mean-pooled 384-dimensional sentence embeddings.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web, MIT; CPU WASM in a module worker. There is no server inference, key, paid dependency, generative response, simulated fallback or regex classifier.
- AI ranks supplied content descriptions and retrieves their minimum video/audio assumptions. It does **not** inspect footage, derive codec settings, infer actual durations, or prove quality. Numeric validation, finite rate search, sizing, baseline and exports are deterministic.
- Approximately **50 MB initial download** (~23 MB model, ~27 MB runtime). Internet to this site and Hugging Face/CDN is required on first load. Current browser with module workers, WebAssembly SIMD and sufficient memory; no WebGPU needed. Actual tests used installed desktop Chrome with GPU disabled. Physical phones, low-memory devices and other browser engines were not tested.
- At most 20 descriptions (eight profiles plus 12 clips), batches of four; each text ≤200 characters. The worker uses the model tokenizer's inherited context limit; its pipeline `max_length` option is not relied on to enforce a stricter limit. Description bounds keep the task small. Vector count, dimension, normalization and finite values are validated.
- Download-file and batch progress, cancel, 180-second timeout and retry are visible. Cancel terminates the worker, aborts worker-source fetch and increments run identity. Input/file-read identity guards prevent stale overwrites. Unsupported runtime, worker/model/network errors or malformed messages fail visibly without fabricated output.

## Privacy, local assets and offline scope

Only local browser worker messages contain user text. Network requests download fixed runtime/model files, not user content. No optional remote inference, analytics, credentials, accounts or local workspace persistence. Imported text is data and never executes or changes tool authority. Export before closing.

The immutable shared worker protocol is `{id,texts}` → download/batch progress and `{id,type:'result',vectors}`. Its code was inspected and runtime paths verified. These older app builds must remain deployed (byte sizes/hashes: `runtime-provenance.json`):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Same-origin worker source, WASM factory and binary use Cache API. Transformers.js caches model/tokenizer files. A newly constructed worker in an already-open successfully warmed page was tested with **all network disabled**. Offline navigation/reload is **not supported**. Cache eviction or disabled storage may require downloading again; there is no offline-shell service worker. Shared immutable paths avoid duplicating ~27 MB per app.

## Schema and limits

Source object ≤30,000 characters: `title` (1–100 chars), `hardware:{rates:[...]}`, 2–8 `profiles`, 1–12 `records`. IDs unique within each table, simple ASCII `[-A-Za-z0-9_]`, ≤24 chars. Descriptions and notes 1–200 chars. Invalid Unicode/control characters rejected; tabs/newlines supported. JSON import/audit envelope ≤1 MB, original-source cap still enforced.

- Ladder: 1–20 unique integer video kbps values, 100–50,000.
- Profile: `id`, `description`, integer `minVideoKbps` 100–50,000 and `audioKbps` 0–1,536 (sum of all audio streams).
- Record: `id`, `note`, integer `durationSec` 1–7,200; `capBytes` 1,000–2,000,000,000; `overheadPermille` 0–250; `headerBytes` 0–10,000,000.
- Review adds `profileId`, editable numeric overrides, `settingId` (`auto` or a ladder rate string), `decision` (`approve`/`hold`), `reviewerNote` ≤1,000 chars and all candidate evidence.

Durations are whole seconds; conservatively round longer fractional durations upward outside the app. Decimal kbps = 1,000 bits/s; MB = 1,000,000 bytes (not MiB). JSON preserves exact strings/full precision. CSV quotes every field, uses CRLF and doubles embedded quotes. Formula-like text prefixes (`= + - @ tab CR`) receive an apostrophe; genuine numbers are not changed. Markdown is plain text, never rendered imported markup.

## Deterministic objective and baseline

For every supplied rate `v`:

`estimatedBytes = ceil(durationSec × (v + audioKbps) × (1000 + overheadPermille) / 8) + headerBytes`

Feasible means `v >= minVideoKbps` and `estimatedBytes <= capBytes`. Auto chooses the highest feasible ladder rate; no feasible rate is unresolved. Manual targets need not be optimal, but failed constraints block delivery CSV. Inputs keep products within JavaScript's safe integer range; independent BigInt/Python integer sizing checks are included.

The **video-only baseline** chooses the highest ladder rate whose video bytes alone fit (`ceil(durationSec × v × 1000 / 8) <= capBytes`), then assesses it with the **same full-size model and reviewed minimum**. Baseline failure counts and reviewed failure counts include holds and are computed planning comparisons, not measured encoding accuracy, quality gain or time saved. Total estimated bytes includes held choices; unresolved rows contribute zero, explicitly labeled.

## Limitations and actual quality

Simple known-answer notes matched 4/4 profiles across two materially different batches. A negated sports challenge still selected SPORT: similarity is **not** understanding of negation or relevance. Mandatory review/hold is essential. Profiles supplied here are illustrative assumptions, not validated quality floors.

Resolution, frame rate, codec, rate-control mode, perceptual quality and encoder behavior are not modeled. VBR, metadata, subtitle/attachment tracks and actual mux overhead can exceed estimates. Reserve conservatively and verify actual encoded file size/quality before delivery. This app issues no encoder commands or uploads.

## Build, tests and publication

React + Vite base `/daily-app2/20261128-9/`. `npm run predeploy` builds. Required per-app `gh-pages` dependency and `deploy` script are retained; publish **only through repository root** combined workflow. See `VALIDATION.md` for observations and publication state.

- `node core-test.mjs`: schema, preservation, 144 independent BigInt sizing cases.
- `node browser-test.cjs`: real model inference, offline fresh worker, batch limits, review/undo/export, privacy and responsive checks against production bundle.
- `python3 artifact-test.py local-`: independent CSV/JSON/Markdown artifact checks.
- `node defensive-test.cjs`, `node import-race-test.cjs`, `node model-cancel-test.cjs`: failures, stale results, delayed file/model cancellation and actual recovery.
- `node gallery-test.cjs`, `node gallery-browser-test.cjs`, `node asset-audit.mjs`: gallery invariants, served runtime hashes and credential-pattern scan.

Browser scripts use workspace-installed Playwright and installed Chrome. Successful AI assertions use the real default model; injected workers are used **only** for defensive failure tests.
