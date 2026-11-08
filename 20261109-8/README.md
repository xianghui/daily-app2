# Fault Lantern

A local service-desk planning utility: paste/import synthetic-style case JSON → embed known fault signatures and observations → review each nearest match or hold → apply an exact budgeted diagnostic checklist → export JSON/CSV/Markdown or copy Markdown. It does not diagnose root causes, execute checks or change accounts/devices. Unlike task assignment or support routing, this workflow selects overlapping user-supplied checks to cover approved symptom hypotheses under a time budget.

## Real AI and data flow

`Xenova/all-MiniLM-L6-v2`, Apache-2.0, from https://huggingface.co/Xenova/all-MiniLM-L6-v2 (upstream https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT), q8 WASM CPU, normalized mean-pooled 384-dimensional vectors. Approx. 23 MB model + 27 MB WASM plus tokenizer/config. Model files download from Hugging Face/CDN only after explicit Load AI. User content remains in the worker, never sent to a model service; there are no remote inference options, credentials or analytics. Real inference drives cosine-ranked fault-signature proposals. Imported text cannot issue commands or request credentials.

Current browsers with module workers, WebAssembly SIMD and sufficient memory required; no WebGPU needed. Actual validation: desktop Chrome on this Mac, plus emulated narrow widths, not physical phones or other browsers. Model/cache download may fail on restricted networks; retry with access to Hugging Face. Low-memory devices may fail without a fallback fake result.

Worker, WASM binary and factory are explicitly cached with Cache API; Transformers.js caches model files. Fresh-worker inference works offline **in an already-open, previously successful page**. Offline navigation/reload is NOT supported or claimed. Clear site data to remove caches. The build reuses byte-identical immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older app during collection deployments. Runtime factory and worker are bundled locally.

## Inputs and limits

JSON object: `name`, integer `budget` (1–120 minutes), `faults` (2–12 id/text records), `observations` (1–24 id/text records), `tests` (1–12 id/text/minutes/covers records). `covers` lists distinct valid fault IDs; check durations are 1–120 whole minutes. Globally unique simple IDs; 1–300 characters per text; workflow under 50 KB, JSON/audit import file under 1 MB. PDF, CSV and binary import unsupported. Inputs are bounded to 256 tokens, four-text batches; 180-second run timeout. English intended. Two editable synthetic examples included.

Each observation starts pending. Verify the signature against source evidence; approve or hold, add a note, undo edits. Signature changes reset approval, any edit invalidates exported snapshot. Every observation must be reviewed before apply. Originals remain preserved. Editing source invalidates evidence and cancels the worker. Run identity guards and worker termination prevent stale completion from overwriting new results.

## Deterministic plan and honest metrics

Exhaustively enumerate up to 4096 test subsets. Maximize the count of approved observations whose assigned signature appears in the selected checks' **supplied coverage table**, then minimize estimated minutes. Multiple observations of one signature count separately; this intentionally prioritizes reported symptom burden, not distinct faults or probabilities. Every selected subset obeys budget. Uncovered and held observations remain in the audit. The comparison is input-order first-fit under the same budget and same supplied coverage, not measured productivity or diagnostic accuracy. Check durations and coverage are assumptions users must supply accurately. Edit them in source and rerun to change constraints.

Cosine is not confidence or causality. Model always returns a nearest signature; irrelevant text, negation, unknown faults and mixed symptoms can mislead. No guaranteed root-cause identification, diagnostic distinction or correct check coverage. No medical/safety-critical use.

## Exports

JSON: versioned complete audit with originals, evidence, decisions and computed plan. Reimport restores original inputs and requires fresh inference/review, not silent prior approvals. CSV: every observation/signature/test, including holds and unselected checks; spreadsheet-formula-like string cells get an apostrophe prefix (including multiline notes). JSON preserves exact strings. Markdown/copy: current reviewed check-off plan plus all observation decisions. All exports are disabled after an edit until reapply. Browser does not persist user content.

## Development / deployment

`npm install`, `npm run dev`, `npm run predeploy`. Per-app deploy script exists by contract but publish **only through root combined-site workflow**. Base `/daily-app2/20261109-8/`. Tests: `node core-test.mjs`; production bundle server `python3 serve-test.py`; `node browser-test.cjs`, `node network-test.cjs`, `node edge-test.cjs`, `python3 artifact-test.py`. Browser tests require installed Playwright at the local documented path; fixtures are synthetic. See VALIDATION.md for observations. No server or API key required by published app.
