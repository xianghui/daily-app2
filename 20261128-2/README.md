# Cueweave Studio

A local AI-assisted subtitle grouping desk for caption editors working from **already timed transcript fragments**. Paste/import synthetic or your own JSON, choose subtitle limits, run real MiniLM inference, inspect source evidence, edit boundaries/copy, approve or hold every cue, apply a snapshot and export **WebVTT, JSON, CSV or Markdown**. It does not transcribe audio, verify timing against recordings, send content or change a video timeline.

## Why this is distinct

The full gallery was parsed before selection. Chapter Cut partitions untimed paragraphs into topic chapters; Clip Scribe transcribes WAV clips and exports clip-level captions; Script Stitch aligns rehearsal excerpts to supplied script cues. This utility instead groups **atomic, timed fragments** into readable subtitle cues, enforcing non-overlap, reading rate, two-line width, silence gaps, minimum/maximum duration and a desired cue count. Its output is a browser-parsed WebVTT file with original timing bounds, not chapters or speech recognition. Name and underlying workflow were checked against all 925 existing entries.

## Real AI and deterministic steps

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings. AI measures similarity between each adjacent pair of transcript fragments. Different text produces different boundary suggestions; there are no hard-coded model responses or heuristic/demo fallbacks.
- Exact dynamic programming then selects a contiguous partition into the requested number of **feasible** cues, maximizing summed `1 − cosine_similarity` at boundaries. Layout uses a deterministic balanced two-line word break. Source start/end times are never stretched, fabricated or reordered.
- Baseline: the same legal partitions/limits, selecting boundaries closest to equal fragment counts. The displayed boundary separation is a computed optimization objective, **not confidence, accuracy or time saved**. Human changes may reduce it. No universal caption-quality claim is made.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT), one-thread **WASM CPU**. Package provenance is retained in `../20261115-6/package-lock.json`.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating apps and paths. Exact byte sizes/hashes in `runtime-provenance.json`. Sharing avoids duplicating the CPU runtime in a near-capacity collection.
- Inspected protocol: `{id,texts}` → progress/batch messages → `{id,type:'result',vectors}`. Four texts/chunk, up to six chunks. Vector count/dimension, finite values and unit normalization are validated before planning. The tokenizer's actual cap is 512 tokens; the shared feature-extraction pipeline's `max_length:256` is not assumed enforced. Each input is bounded to 160 characters, below this model context.

## First load, privacy, devices and offline scope

Explicitly pressing **Load AI & group cues** downloads approximately 23 MB model/tokenizer files from Hugging Face/CDN and 27 MB CPU runtime from this site. No model requests occur before that action. Current browser with WebAssembly SIMD, module workers and several hundred MB available RAM required; no WebGPU or API key. Desktop Chrome with GPU disabled is tested. Narrow layouts are emulated, not performance tests on physical phones. Other browser engines, screen readers and every mobile device are unverified.

Network traffic downloads model files, **not transcript content**. Text, embeddings, review and result remain on-device/in memory. There is no backend, remote-inference option, analytics, provider key, persistent document storage or paid service. Cache API stores worker/runtime/model assets when browser policy permits. Browser caches may be evicted or unavailable in private/restricted modes.

**Tested offline:** after one complete online run in an open production page, terminate the worker, block all networking and execute another real inference in a new worker. **Not supported/promised:** loading or reloading the app itself offline, cold model startup, indefinite cache retention. The model host's `main` revision is unpinned and can change; observed model revision is recorded in sanitized network reports. Worker and runtime paths are immutable and hash-audited.

Cancel terminates the worker and aborts pending worker fetches. Run identities also guard asynchronous imports, model results, errors and progress. A 180-second timeout produces actionable errors. Worker construction, no WASM/Worker, network failures, malformed vectors and impossible layouts never silently substitute fake AI. Retry explicitly with the same load button.

## Inputs, constraints and review

Source JSON example:

```json
{"title":"Short tutorial","fragments":[
  {"id":"a","startMs":0,"endMs":2000,"text":"Prepare the materials."},
  {"id":"b","startMs":2200,"endMs":4500,"text":"Check the tools before starting."}
]}
```

- 2–24 fragments, unique IDs ≤40 characters, text ≤160 characters, title ≤100, source ≤18,000 characters. Ordered non-overlapping integer millisecond times within one hour. Unsupported controls/malformed surrogate text rejected. Synthetic buttons demonstrate two different topic sequences; no real personal data is included.
- Choose target cue count (1–24 and ≤fragment count), minimum duration (200–5000 ms), maximum duration (1000–15000 ms), maximum reading rate (5–30 chars/s), line width (20–48 characters, at most two lines), maximum internal silence (0–3000 ms). These are editorial constraints, not a claim that every configurable combination meets a broadcasting standard. Reading rate counts JS string code units, including spaces; the model is English-first.
- Atomic source fragments are never split. Impossible constraints fail visibly and preserve the original input; edit timing/fragments upstream or relax limits. No punctuation/syntax guarantee, shot-change detector, forced alignment or audio playback is included. Topic similarity can miss negation and produce awkward grammatical breaks.
- Review each cue against its source snippets and adjacent similarity values. Boundary editor takes increasing ending fragment numbers, e.g. `1,4,6`; the last equals source count. Rebuild resets approvals and text edits; the 30-step undo stack can restore them.
- Caption text is editable (≤400 characters), reviewer notes ≤500; multiline values survive audit and exports. Text edits reset approval. Approve or hold every cue before applying. Held/invalid cues survive audit exports; **WebVTT and copying are gated until all cues are approved and pass every constraint**. Blank lines/carriage returns within captions are not supported. Imported text is only data and cannot select tools, upload content or request credentials.
- Edits invalidate the applied snapshot; download buttons then disable until reapplication. Originals are retained unmodified in JSON. The browser keeps inputs only for the current page session.

## Exports and restoration

- **WebVTT:** reviewed line breaks, exact start/end bounds, millisecond timestamps; `<`, `>` and `&` escaped as cue text. Downloaded files were parsed with Chromium's actual subtitle-track parser, not only a matching homegrown decoder.
- **JSON:** all source fragments, settings, reviewed cue coverage, decisions, notes, numeric evidence, constraint results and summary. Import files up to 1 MB to restore originals/settings. Reimport deliberately requires fresh AI/review rather than trusting imported approvals.
- **CSV:** one row per reviewed cue, fragment IDs and timings, multiline text/notes, decision, calculated reading rate and issues. Quoted RFC-style fields; formula-like text receives a leading apostrophe for spreadsheet safety. Full exact strings remain in JSON.
- **Markdown:** source-linked timing/caption handoff with decisions/issues. Copy uses current reviewed WebVTT, with download fallback if clipboard permission is unavailable.

## Build, tests and publication

React + Vite; base `/daily-app2/20261128-2/`. `npm install`, `npm run predeploy` (build), `npm run dev` for development. The required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but **do not publish the per-app deploy**: use repository-root `npm run predeploy` and `npm run deploy` to preserve the entire collection.

Validation: `node core-test.mjs`; serve `python3 serve-local.py`, then `node browser-test.cjs`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node import-race-test.cjs`, `node model-cancel-test.cjs`; `python3 artifact-test.py`; `python3 security-audit.py`. Browser tests use the environment's existing Playwright/Chrome installation, not a paid service. `APP_URL` and `PREFIX` support assembled/public runs. See [VALIDATION.md](VALIDATION.md) for observed outcomes and untested scope.
