# Decision Docket

A facilitator's local-AI meeting intent review desk. Unlike a generative minutes summary, it never invents commitments, attendees, dates or owners. Short source notes become editable **decision / proposal / rationale / action / question** cards; human approval and explicit parent links create a decision register and action checklist.

## Workflow

1. Paste/import JSON with a `title` and `records` array (`id`, `text`); two synthetic meeting examples are provided. Split mixed-intent paragraphs into separate notes. No audio transcription, PDF or DOCX parser.
2. Explicitly choose **Load AI & classify notes**. Real local embeddings compare each note against ten authored intent examples. Progress reports downloads and four-text batches. Cancel terminates the worker; retry starts anew.
3. Inspect original text, anchor evidence and cosine similarities, correct the type/wording, attach reasons/actions to decision IDs and supply owners/dates yourself. Review every note as approved or held. Undo restores the previous complete review state.
4. Apply the register. Approved rationales require an approved decision parent. No held, missing or wrong-type parent can release. Actions may be standalone and may be explicitly unassigned/unscheduled. Proposals and questions are never listed as decisions. Editing any review field invalidates the applied snapshot and exports until reapplied.
5. Download complete JSON, row-preserving CSV, or Markdown handoff; copy the same Markdown. No tasks are sent, no calendar events created, no external system changed.

## Actual AI and limitations

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Runtime: locally bundled Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), quantized q8 CPU/WASM inference. Model produces normalized mean-pooled 384-dimensional vectors. The maximum cosine against two examples per intent defines each intent score; highest score supplies the proposed type. No hardcoded sample responses, generated summaries, remote API or deterministic fallback.

This helps with semantic shorthand beyond exact words (the observed “Tessa to circulate…” action beat the literal baseline). It is **not proof of agreement, task authority, correctness or actual commitment**. It can confuse decisions with follow-ups, miss implicit agreement, and mishandle negation or multiple intents. Both tiny seeded batches matched 9/10 known-answer labels; one follow-up was mislabeled a decision and corrected by the reviewer. A separate three-note challenge matched 2/3. These are small synthetic checks, not an accuracy guarantee. See [VALIDATION.md](VALIDATION.md).

Deterministic steps: schema checks, finite vector count/dimension checks, highest-cosine ranking, parent validation, exact record conservation, register assembly, export generation. Comparison is agreement with the **current human review**, approved-note denominator only, not independent accuracy or productivity gain. The deliberately simple keyword baseline checks, in order, decided/approved/agreed/confirmed; action/task/will; because/reason; suggest/could/proposal; otherwise question. Its output is explicitly distinguished from AI. The app promises fewer transcription/reformatting steps, not measured time savings.

## Download, privacy and devices

Before explicit loading: only same-origin app assets, no model-host request. First run needs internet and approximately 50 MB: ~23 MB model/tokenizer from Hugging Face and its CDN plus a 26,861,777-byte same-origin WASM binary and locally bundled code. All note content and review fields remain in page/worker memory. Downloading model files does not upload user content. No credentials, analytics, telemetry, backend, optional provider or paid requirement. Imported instructions are inert note data, not authority or requests for secrets.

Requires a modern module-worker browser with WebAssembly SIMD and several hundred MB available memory. CPU is the default and does not require WebGPU. Tested with desktop Chrome and simulated 390/320 CSS-pixel viewports; physical phone inference, Safari and Firefox remain unverified. Unsupported worker/WASM, network errors, malformed vectors and timeout show actionable errors, never fabricated results.

Worker source, WASM module factory and binary are explicitly Cache API cached; Transformers.js caches model files. Real fresh-worker inference was tested with **all network blocked inside an already-open successfully cached page**. Offline reload/navigation/install is not claimed. Private browsing, storage restrictions or eviction may require downloads again. Inputs and reviews are not stored in caches/localStorage. Clear site storage to remove downloaded model/runtime assets. Exports explicitly save reviewed content to local disk.

Production uses the existing immutable same-origin WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve this older app asset during combined deployment. SHA-256 is recorded in `bundle-audit.json`. Runtime factory retains its license header. Model and library licenses are documented in `THIRD_PARTY_NOTICES.md`.

## Bounds and formats

English intended. 1–20 notes, unique IDs ≤40 characters, source text ≤600 characters, title ≤160 characters. Original workflow JSON ≤50 KB; imported audit envelope ≤1 MB. Four-text batches, ≤256 tokens/text (truncation can omit late content), ten intent anchors plus ≤20 notes = ≤30 embeddings. 180-second timeout. Reviewed wording ≤800 chars, owner ≤100, reviewer note ≤500. Optional due dates must be actual YYYY-MM-DD calendar dates. All records survive, including holds and blank owner/dates.

JSON schema `decision-docket/v1` preserves originals, evidence, full review fields, decision links, assembled register and metrics. Reimport restores originals for fresh inference, never silently approves previous output. CSV has a row for every note with source, proposed/keyword/reviewed kinds, decision, wording, parent, owner, date and reviewer note. Leading spreadsheet-formula-like text gets an apostrophe; JSON is lossless. CSV uses standard quoted comma/newline escaping. Markdown includes approved decisions/reasons/actions, standalone actions, proposals/questions and holds. Imported Markdown-like characters can affect an exported document's presentation; the app renders previews as escaped plain text.

## Build, test and publish

`npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261109-14/`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` are retained; publish **only through root** `npm run predeploy` / `npm run deploy` to preserve the collection.

`python3 serve-test.py` serves the production bundle on 6314. Then: `node core-test.mjs`, `node browser-test.cjs`, `python3 artifact-test.py`, `node network-test.cjs`, `node cancel-download-test.cjs`, `node defense-test.cjs`, `node audit.mjs`. Tests save actual observed artifacts/reports. Successful AI checks use the real default model; fault workers are only injected for malformed/error/timeout/stale-result defensive checks. The main suite can run against the public URL via `TEST_URL` and save `REPORT` separately. `public-test.cjs` compares deployed gallery/app/worker/runtime/WASM bytes.
