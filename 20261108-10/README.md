# Sentinel Sheet

A local-AI risk-to-indicator monitoring-plan workbench for project and operations leads.

## Workflow

Paste or import a JSON risk register and indicator library (two synthetic examples included), set `minSimilarity` in the input, explicitly load AI, inspect ranked evidence, approve or hold each risk, edit escalation trigger/check cadence/accountable owner, apply the reviewed snapshot, then download JSON/CSV/Markdown or copy Markdown. Nothing monitors infrastructure or sends alerts. Every input change cancels work and discards derived outputs. Review edits invalidate exports until reapplication. Undo restores the last 30 review states. Indicator changes restore that indicator's defaults and require reapproval. Imports of audit JSON restore original inputs, not previous approvals.

## Actual AI and deterministic work

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX `q8`; model upstream: sentence-transformers/all-MiniLM-L6-v2.
- Transformers.js 4.3.2 / ONNX Runtime Web WASM, one CPU thread. MIT runtime. No WebGPU required, no provider credentials, no backend.
- AI embeds risk text and indicator names/descriptions in batches of four with normalized mean pooling, 384 dimensions, maximum 256 tokens per text. Deterministic cosine ranking retrieves candidates; configured floor recommends accept/hold, but human approval is mandatory. Token truncation can hide details; keep records concise.
- Triggers, check cadence and owners are supplied by the user, not generated. Deterministic validation preserves all risks/indicators, requires valid reviewed targets and nonempty monitor fields, counts held gaps and shared indicators. Shared signals flag a need to inspect coverage, not quantified workload or overload.
- Baseline: exact risk-text equality with indicator `name + ': ' + description`, ignoring case/outer whitespace. Compared with human-approved links; these are coverage counts, not measured accuracy, time savings or causal predictive quality. AI reduces manual candidate lookup across differently worded statements.

## Download, devices and privacy

First run requires internet and explicitly downloads about 23 MB model/tokenizer from `huggingface.co` (redirects to HF/CDN storage), plus about 27 MB same-origin WASM and app/runtime files. No model download on page opening. UI displays model/file download and batch progress, cancellation and actionable errors. User risk/indicator text stays in worker memory on the device; network capture observed file GETs only, with no content in URLs/bodies. No optional remote integration, analytics or keys.

Use current desktop Chrome/Edge/Firefox/Safari supporting WebAssembly and Cache API; roughly 300 MB free memory recommended. Actual validation used desktop Chrome, with desktop and 320/390px viewports; real phones, Safari and Firefox were not tested. No GPU requirement. Unsupported runtime or model failure produces an error, never fake suggestions. Runs time out after 180 seconds; retry on a capable desktop and check model-host access.

Transformers.js caches model files in Cache API. App caches worker source, WASM factory and WASM binary explicitly. A fresh worker performs real inference with all networking disabled after a successful online run while the page stays open (tested). Offline reload, first load, navigation and persistent cache availability are NOT promised. Browser eviction/private mode can require downloading again. No user content is intentionally saved; exported files remain on your device. Cache storage holds model/runtime assets, not registers.

The Vite build reuses byte-identical immutable WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` to avoid duplicating 26,861,777 bytes. Preserve this older app asset in the combined collection. `asset-audit.json` records matching installed/deployed hashes. Worker and factory assets are bundled locally, with production base `/daily-app2/20261108-10/`.

## Formats and limits

JSON input: `{minSimilarity: 0.3, risks: [{id,text}], indicators: [{id,name,description,trigger,cadence,owner}]}`. See the UI examples for valid JSON. Up to 50,000 text characters / 50 KB imported file, 32 risks, 12 indicators, 500 characters per risk/description, 120 per other required string, IDs 1–40 ASCII letters/digits/underscore/hyphen and unique per list. `minSimilarity` 0.1–0.9. Review notes up to 500 characters. Unsupported formats, duplicate IDs, bad fields and oversize input are rejected.

- JSON: all original risks and indicators, scores/evidence, reviewed records, monitoring allocation and computed counts; imports recover `.input`.
- CSV: every risk, selected AI/approved indicator, decision, current trigger/cadence/owner/note. Formula-like string cells are apostrophe-prefixed, including multiline cells. Originals remain lossless in JSON.
- Markdown: every risk with current approved monitor fields or explicit held gap and note. Escapes markup controls; it is a handoff checklist, not machine configuration.

## Limitations and observed validation

Embedding similarity is not proof that an indicator measures a risk or predicts it early enough. Negation, causal direction, unsupported topics and rare terminology are weak spots. A nearest neighbor always exists even with no suitable signal. Do not lower the floor merely to fill gaps. Human hold is essential; this is not safety, compliance or operational assurance. User content is inert data, never tool authority. There are no remote actions.

See `VALIDATION.md`, browser/core/artifact reports and test scripts for actual outcomes and limitations. Successful production build alone is not treated as proof of AI behavior.

## Development / publishing

`npm install`, `npm run dev`, `npm run predeploy`. Individual required scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but collection publication must use ROOT `npm run predeploy` and `npm run deploy`; never publish this app alone over the gallery. Local production browser test: `python3 serve-test.py` then `node browser-test.cjs`; `node extra-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`. Public suite accepts `TEST_URL` and `REPORT` environment variables.
