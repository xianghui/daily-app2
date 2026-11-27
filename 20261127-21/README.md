# Delayfield Desk — 20261127-21

**A local-AI speaker-arrival worksheet for live-event sound technicians.** Rough stage-routing descriptions are hard to reconcile with a chain-measurement book. Real neural retrieval proposes the relevant chain; a person verifies it, edits distances/latencies, and approves or holds every path. Deterministic propagation and whole-sample rounding produce a capacity-checked DSP handoff. No equipment is connected or changed.

## Workflow

1. Choose either synthetic fixture, paste source JSON or import `.json` source/audit. Set air temperature, DSP sample rate and allowed arrival spread before running. All paths MUST end at the same listening point.
2. Explicitly select **Load AI & match chains**. No model download occurs before this action. Watch model-file and batch progress; cancel terminates the worker. Retry uses available cache. Timeout is 180 seconds.
3. Inspect nearest-chain descriptions and cosine scores (not confidence), correct the match, verify distance, measured chain latency and added-delay capacity. Relinking resets approval and profile measurements. Edit multiline reviewer notes; approve or hold each path. Undo restores the previous review, up to 40 edits. Originals are preserved.
4. Apply reviewed scenario. Review calculated arrival spread against a distance-only baseline. A held path is excluded from the compared subset but retained in full audit exports. Editing any field invalidates the applied export snapshot.
5. Download JSON, Audit CSV or Markdown; copy Markdown. The separate Delay CSV is enabled only if ALL paths are approved, within added-delay capacity and within the requested arrival-spread tolerance. No time is clamped to hide a capacity failure. Verify settings with an actual impulse-response measurement before use.

## Real AI / runtime / privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX; Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT). Normalized mean-pooled 384-dimensional embeddings. Four texts per model batch. Inspect originating runtime package lock for exact installed provenance. Model tokenizer has `model_max_length:512`; the worker's requested `max_length:256` is not relied on as an enforced feature-extraction cap. Input descriptions are capped at 200 characters.
- Neural cosine ranking selects the nearest supplied chain. It does not infer measurements, verify wiring or understand acoustic equivalence. Returned vector count, dimension, normalization and finite entries are validated. Invalid outputs fail visibly; there is no fake-model or deterministic-classification fallback.
- Approximately 23 MB initial model/tokenizer downloads plus approximately 29 MB same-origin runtime. Internet required initially. Model files come from Hugging Face and its CDN. The app uses no external inference provider, paid service, API credential, analytics or upload endpoint. Default user content is processed only in the local worker. Network audit checks GET-only file traffic with no request bodies or input text in URLs; signed CDN query values are not saved in reports.
- Reuses immutable collection worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these existing apps/assets. `runtime-provenance.json` gives exact SHA-256/bytes. Reuse avoids duplicating 27 MB in a nearly full collection. App code is built locally with React + Vite.
- Cache API stores worker source, WASM factory/binary and model assets when permitted. Tested: online production-page inference, worker termination, then another real inference with all network disabled in the already-open page. **Not claimed:** cold offline app navigation/reload, permanent cache retention or private-mode caching. Eviction can require redownload. Inputs/reviews are held in memory and exported only on request; no automatic document persistence.
- Current browser with WebAssembly SIMD, module workers and several hundred MB RAM. Actual Chrome desktop WASM CPU testing disables GPU: WebGPU is NOT needed. Physical phones, Safari, Firefox, assistive-technology devices and low-memory behavior unverified. Unsupported runtime, network/model/worker failures, malformed vectors, cancellation and timeouts display actionable errors and never produce canned suggestions.

## Formats and bounds

Source object: `title`, `temperatureC` (−20..50), integer `sampleRate` (8000..192000), `toleranceMs` (0.001..10), `profiles` and `records`.

- 2–8 profiles: `id`, `description`, `hardwareMs` (0..100), `maxDelayMs` (0..1000). Latency is measured chain delay excluding sound travel and the new added delay.
- 1–12 paths: `id`, `note`, `distanceM` (0..300). Distance is metres to the SAME endpoint. Duplicate profiles across paths are allowed; IDs within each list are unique.
- Title ≤100, ID ≤40, description/note ≤200 and reviewer note ≤500 characters. Source ≤30,000 characters; import ≤8 MB to accommodate audit metadata at maximum batch. JSON audits restore originals only, never trust prior approvals. Control characters/unpaired surrogates are rejected. Imported text grants no instructions, permissions or tool authority.
- JSON `delayfield-v1` includes originals, reviewed rows, all held/blocked/calculated jobs and metrics. CSV uses quoted string cells, doubled quotes and CRLF, retaining embedded newlines; leading spreadsheet formula-like strings receive an apostrophe (intentional CSV safety transformation). JSON/Markdown preserve exact reviewed notes. Audit CSV retains every path; Delay CSV is a guarded manual worksheet, NOT a vendor DSP import format. Markdown is untrusted plain text, never rendered as HTML.

## Deterministic method / objective

Dry-air estimate: `c = 331.3 + 0.606 × temperatureC` m/s. Raw arrival milliseconds = `1000 × distanceM / c + hardwareMs`. Among approved paths, choose the maximum raw arrival as the earliest feasible **continuous** common target using nonnegative added delays. Added samples = nearest whole sample of `(target − rawArrival) × sampleRate / 1000` (positive half ties upward). Recompute each arrival after rounding; reject worksheet export if delay exceeds capacity or spread exceeds tolerance. No discrete-optimality claim.

Baseline adds the same-temperature, sample-rounded acoustic distance difference to the furthest path, ignoring hardware latency. Both spreads use the same reviewed approved subset and both are model estimates, not measured sonic quality, elapsed time, accuracy or percentage improvement. There is no lexical matching baseline marketed as AI. AI reduces manual profile lookup; the deterministic calculation exposes timing inconsistency that a distance-only shortcut misses.

Scope: single-point first-arrival approximation only. Humidity, wind, reflections, phase, polarity, crossover, group delay and varying listener locations are omitted. Nearest semantics may misread negation or absent/ambiguous routing. Synthetic chain values are not specifications for actual equipment. Human routing verification and acoustic measurement are essential.

## Development / validation / publishing

`npm install`; `npm run dev`; `npm run predeploy` builds under base `/daily-app2/20261127-21/`. Required per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but collection publishing MUST use ROOT `/Volumes/ExternalHD/daily_app2` predeploy/deploy to preserve all older apps. Original `/Volumes/ExternalHD/daily_app` is read-only.

Run `node core-test.mjs`, start `python3 serve-local.py`, then `node browser-test.cjs`, `APP_URL=http://127.0.0.1:7811/daily-app2/20261127-21/ PREFIX=local- node defensive-test.cjs`, and `python3 artifact-test.py local-`. Browser test requires existing workspace Playwright + Chrome. See VALIDATION.md for observed results and boundaries. Successful builds alone do not prove AI functionality.
