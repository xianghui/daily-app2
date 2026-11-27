# Register Loom — 20261127-22

**A local-AI written-pitch handoff utility for music teachers and ensemble arrangers.** Rough instrument descriptions (“the curved E-flat reed”) must be reconciled with a supplied instrument book before concert MIDI pitches can become playable written parts. Real neural retrieval proposes an instrument; human review sets the actual player range; a bounded octave search creates a note-preserving worksheet. No audio, score files, accounts or instruments are accessed.

## Workflow

1. Choose **Clarinet & alto** or **Flute & piccolo**, paste source JSON, or import `.json` source/audit. Set `keyShift` and `maxOctaves` in source before running. C4 means MIDI 60; numbers are concert pitches, not existing written pitches.
2. Explicitly click **Load AI & match instruments**. No model download before that action. File/batch status, cancellation and a 180-second timeout are supplied; retry reuses available caches.
3. Inspect each candidate’s source description/cosine score (not confidence). Correct the instrument, verify sounding-minus-written offset and the player’s written range. Relinking resets approval and copies that profile’s parameters. Edit concert notes without changing event count, add multiline reviewer notes, and approve or hold/reject every part. Undo restores up to 40 review edits. Originals are preserved.
4. **Apply reviewed scenario**. Compare range-checked parts with a naive concert-as-written baseline. Every held/blocked part remains in the audit. Any edit invalidates all applied results and exports.
5. Export complete JSON, Audit CSV or Markdown; copy the Markdown handoff. **Pitch CSV** is enabled only when every part is approved and every note fits a permitted solution. It has one row per original note event. It is a manual notation worksheet, not MusicXML, MIDI playback, an engraved score or an import format for a specific notation editor.

## Real AI, runtime, downloads and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT), reused from the existing collection worker. Normalized mean-pooled 384-dimensional embeddings, four short texts per batch. Originating app’s lockfile records installed runtime provenance.
- AI ranks profile descriptions against handoff text using cosine similarity. It does **not** infer pitches, transpose music, estimate ability or verify instrument identity. Vector count, dimension, finite entries and unit normalization are validated; malformed output fails visibly. There is no canned/deterministic classification fallback.
- Approximately 23 MB initial model/tokenizer plus 29 MB runtime download; initial internet required. Model host is Hugging Face / its download CDN. No mandatory paid service, API key, remote inference, telemetry or content upload. Browser request audits check GET-only download traffic, no bodies and no supplied notes in URLs. Signed CDN query values are excluded from committed evidence.
- Shared immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those older assets. Exact sizes/SHA-256 in `runtime-provenance.json`; sharing avoids duplicating ~27 MB in the collection. App code/styles and worker/runtime are same-origin, not remotely executed scripts.
- Cache API retains worker, model and runtime files where allowed. Tested online then fresh-worker inference with all network disabled in an **already-open warmed production page**. No cold offline reload/navigation promise; cache eviction/private mode can require redownload. Inputs/reviews live in memory only, except user-initiated exports.
- Needs current WebAssembly SIMD/module workers and several hundred MB RAM. Actual desktop Chrome WASM CPU tests disable GPU; WebGPU is not needed. Physical phones, low-memory behavior, Safari/Firefox and screen-reader devices unverified. Narrow Chrome viewport tests do not establish physical-phone support.
- Input text has no tool authority and cannot request credentials or change runtime behavior. No provider integration or secret storage exists.

## Source format and limits

See synthetic objects in `src/core.js`. Source object has `title`, integer `keyShift` (−12..12 concert semitones), integer `maxOctaves` (0..2 in either direction), `profiles` and `records`.

- 2–8 profiles: unique `id`, `description`, integer `soundingOffset` (−36..24), `writtenLow` and `writtenHigh` (0..127, inclusive and ordered). Convention: **sounding = written + soundingOffset**. Bb clarinet offset −2, Eb alto sax −9, flute 0, piccolo +12 in the synthetic book. Ranges are illustrative, not instrument/player guarantees.
- 1–12 records: unique `id`, `note` instrument clue and `notes` array of 1–64 integer concert MIDI pitches (0..127). Up to 768 events in a batch, preserving order and repeated notes. Review can correct pitches but cannot add/remove events; edit source and rerun for that change.
- Title ≤100, ID ≤40, description/note ≤200 and reviewer note ≤500 characters. Source ≤30,000 characters; JSON import ≤8 MB to accommodate maximum audit envelopes. Control characters and unpaired surrogates rejected. The model tokenizer cap is 512 tokens; the worker’s requested `max_length:256` is not relied on as an enforced feature-extraction limit. Character bounds keep model texts short.
- `registerloom-v1` JSON contains originals, reviewed notes/profiles, all jobs and computed metrics. Audit import restores originals only, never saved approvals. CSV uses CRLF, quoted text, doubled quotes and retained multiline values. Leading spreadsheet formula-like string cells receive an apostrophe; genuine signed numeric offsets remain numeric. JSON/Markdown keep exact notes. Markdown is exported as untrusted text, never rendered as HTML.

## Deterministic search and comparison

For each approved part enumerate `octaveMove` from `−maxOctaves` to `+maxOctaves`:

`written[i] = reviewedConcert[i] + keyShift − soundingOffset + 12 × octaveMove`

`sounding[i] = reviewedConcert[i] + keyShift + 12 × octaveMove`

Keep choices with every written pitch within the reviewed inclusive range and every written/sounding MIDI within 0..127. Minimize absolute octave displacement, then absolute distance of the written min/max midpoint from the range midpoint, then choose the lower octave. The finite search is exhaustive for this per-part objective, not ensemble voicing or musical quality. Never clamp/drop notes or release a partial pitch worksheet. Intervals and pitch classes after key shift are preserved; octave moves explicitly **change concert register**. Durations/order, rhythmic engraving, clefs, enharmonic spelling and articulation are out of scope; pitch labels use sharps only.

Baseline uses `reviewedConcert + keyShift` directly as written MIDI, ignoring instrument transposition/octave fit. Its count of out-of-range notes uses the same approved subset, including blocked approved parts. A zero baseline count does **not** mean correct sounding pitch: the clarinet/alto fixture has no baseline range violations yet requires transposed notation. AI reduces manual instrument-book lookup; deterministic search addresses range feasibility. No invented time savings, confidence percentages or population accuracy.

## Known limitations / validation

Four expected instrument matches across two synthetic fixtures are not universal accuracy. Actual negation challenge (“Not alto sax. Use the concert flute…”) selected **ALTO**, a failure; unknown instruction-like input also selected ALTO. Human correction/hold is mandatory. Missing profiles, mixed aliases and unfamiliar languages may fail. No performance or suitability certification.

See `VALIDATION.md` and machine-readable browser/artifact reports for observed results. Failure testing uses injected faults only for defensive paths; successful workflow/offline checks use real model inference. `core-test.mjs` independently enumerates 528 range/offset cases; Python independently parses downloaded artifacts and replays the optimizer. Tests use synthetic data only.

## Development / publishing

`npm install`; `npm run dev`; `npm run predeploy`. React + Vite base `/daily-app2/20261127-22/`. Required per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. **Publish from collection ROOT only**, using root predeploy/deploy to preserve the gallery and all older apps. Original `/Volumes/ExternalHD/daily_app` is read-only.

Local production test server: `python3 serve-local.py`; tests: `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node model-cancel-test.cjs`, `node import-race-test.cjs`, `python3 artifact-test.py local-`. Browser scripts use existing workspace Playwright and installed Chrome. `APP_URL`/`PREFIX` select assembled/public targets. Build success alone never establishes AI functionality.
