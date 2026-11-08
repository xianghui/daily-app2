# Recall Calendar

A local AI-assisted spaced-repetition desk for independent learners. The repeatable bottleneck is reviewing paraphrased recall attempts and turning reviewed grades into dated follow-ups. Unlike a quiz grader, this app proposes a semantic lens, requires human grades, and exports a usable study calendar. All fixtures are synthetic.

## Workflow

1. Paste/import JSON or load **Science recall** / **Digital safety recall**. Set `attemptDate` to your actual attempt date. Each card has `id`, `prompt`, `accepted` reference, `misconception`, `response`, prior `interval` days, `repetitions`, and `ease`. New cards use 0 / 0 / 2.5.
2. Explicitly load AI. Inspect reference/recall and misconception scores. AI suggests good (initial grade 4), again (initial grade 1), or uncertain (initial grade 3, **not** approval).
3. Set a grade 0–5 from your actual recall experience; approve or hold each card. Changing grades resets approval. Undo restores the previous review. Input changes/cancellation invalidate old runs and exports.
4. Apply the reviewed schedule. Download JSON/CSV/Markdown or ICS; copy the Markdown report. Held cards have no next state/calendar event but remain in full audits. Nothing is sent to an external calendar.
5. For a later session copy `next.interval`, `next.repetitions`, `next.ease` into the card state, update date/response and rerun. Audit JSON reimport deliberately restores the original session for fresh inference, not silent prior approvals.

Only JSON imports are supported: 1–16 cards; unique simple IDs ≤24 characters; prompt/reference/misconception/response each 1–300 characters; real dates 2000–2098; payload <50 KB, imported file ≤1 MB. Prior intervals 0–365; repetitions 0–1000; ease 1.3–5. English intended. No PDF extraction or empty recall responses; enter a descriptive failed recall if needed. Source text is inert data, never evaluated as instructions.

## Real AI and deterministic scheduling

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized `onnx/model_quantized.onnx`, approximately 23 MB, from Hugging Face and its CDN. Host main revision is not pinned; future host changes may alter results. Known-answer observations belong to the tested downloaded weights.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web (npm lockfile version), MIT; WASM CPU, one thread. Model/runtime license copies and notices included. No API keys or provider integration.
- Mean-pooled normalized 384-dimensional learned embeddings compare each response to the accepted answer and misconception in four-passage batches, bounded to 256 tokens. Finite dimension/count/norm validation precedes similarity. AI is real inference, not regex grading or canned results.
- Heuristic lens: reference cosine ≥0.40 and reference-minus-misconception >0.06 → good; margin <−0.06 → again; otherwise uncertain. Thresholds are not calibrated confidence. All need human approval. The model does not read prompt context as a reasoning instruction, prove correctness or judge missing factual details.
- Deterministic **bounded SM-2 variant**: grade <3 → interval 1 day and repetitions 0; otherwise intervals 1, then 6, then ceil(previous interval × previous ease), capped at 365. Passing increments repetitions. Ease update `ease + 0.1 - (5-grade)*(0.08+(5-grade)*0.02)`, rounded to two decimals and bounded 1.3–5. For all grades, ease updates; scheduling the current interval uses the previous ease. UTC day arithmetic avoids daylight-saving drift. These are heuristic study intervals, not measured retention predictions.
- Baseline is trimmed case-insensitive exact answer matching. Displayed baseline, AI-good, human passing and scheduled counts are computed, not accuracy, confidence or time-saving claims.

## Download, privacy, offline and devices

First use needs internet: ~23 MB weights plus ~27 MB WASM, tokenizer/configuration, local runtime factory and ~1 MB of app/worker code. Sizes are approximate. Progress shows model-file loading and completed passage count; cancel terminates the worker. A 180-second timeout offers retry. Current desktop browser with WebAssembly is required; Cache API recommended. No WebGPU dependency. Chrome desktop was tested, including 320/390px layouts; physical phones, low-memory devices, Firefox, Safari and screen readers untested. Close other tabs if memory fails. Network/runtime failures never substitute fake suggestions.

The app/worker/factory are bundled with the production base. A byte-identical immutable WASM is reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; the root deployment must preserve that app. Model/config downloads use the documented host. **User answers stay on device**; no remote inference, analytics, credential input or content upload. Browser model/runtime caches do not store your cards; current session content exists in React/worker memory and intentional downloads only. Browser/dev tools/OS behavior is outside this promise.

Worker/factory/binary use Cache API; Transformers.js caches model assets. Tested offline scope: after a successful run, a fresh worker performs real inference with all network blocked in the **already-open page**. Offline startup/reload is not promised. Browser cache eviction/private mode may require another download. Clearing site data removes caches. File reads and worker loading are run-ID guarded; cancelled/late responses cannot replace a newer session.

## Artifacts

- JSON: original inputs, evidence, every reviewed card, holds, grades and next state; reimport restores originals.
- CSV: every original source, state, similarity, proposal, decision, grade, note and next state. Formula-like strings get a leading apostrophe, including multiline values. Numeric states remain numeric.
- Markdown: every scheduled/held card plus notes and limitations; source content escaped.
- ICS: RFC 5545 all-day VEVENT per approved card, stable card-ID/attempt-date UID, UTC stamp, exclusive next-day end, escaped values and UTF-8-safe 75-octet folding. Import manually after review. No events for holds; repeated import deduplication depends on the calendar client. Existing calendars are not read or modified. JSON/CSV remain the complete audit.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and captured JSON reports. Actual production-bundle MiniLM inference on two subjects, max batch, offline fresh worker, failure/retry, cancellation/staleness, malformed output, review/hold/undo, narrow layouts and browser downloads were checked. Independent Python CSV and ical.js parsers checked downloaded artifacts.

Six simple synthetic proposal labels matched expectations, but the negation challenge was wrongly suggested good. This model is topical similarity, **not factual correctness**. Partial answers and overlapping anchors also mislead. Use detailed anchors and human grades. No high-stakes grading, medical advice, knowledge generation or mastery certification. No claim of universal accuracy or improved retention.

## Build and collection publishing

`npm install`, `npm run predeploy`. Per-app scripts retain `predeploy: npm run build`, `deploy: gh-pages -d dist`, and gh-pages dependency as required; **do not run per-app deploy**. Publish the complete collection using root `npm run predeploy` / `npm run deploy`, preserving shared WASM. Base: `/daily-app2/20261109-5/`. Use `python3 serve-test.py`, `node core-test.mjs`, `node browser-test.cjs`, `node network-test.cjs`, `node artifact-test.mjs`, `python3 artifact-test.py`, `python3 asset-audit.py` to reproduce local checks. Browser automation uses the installed workspace Playwright and Chrome. ICS parser is a dev dependency only.
