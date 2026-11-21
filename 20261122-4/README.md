# Dimension Desk

A browser-only preflight for spreadsheet and lab worksheet authors. A formula can return a valid number while combining incompatible physical quantities. This tool uses **real local MiniLM embeddings** to suggest a quantity type from each informal variable description, followed by mandatory review and deterministic dimensional algebra. It is not a chat wrapper, unit converter or physical correctness certificate.

## Workflow

1. Select Motion worksheet / Tank worksheet, paste JSON, or import `.json` (source or exported audit).
2. Set each formula's intended `target` in the input. Supply numeric variable values **already converted to the selected SI unit**. There is no unit detection/conversion. Inspect all formula targets yourself.
3. Explicitly click **Load AI & reconcile**. Inspect model download and batch progress; cancellation terminates the worker.
4. Review each inferred quantity and SI value, correct them if needed, add notes, then approve or hold. Holds block formulas using that variable. Quantity/value changes reset approval; any edit invalidates applied exports. Undo restores the previous review.
5. Apply the reviewed scenario. Inspect target mismatches, incompatible additions, division-by-zero and held dependencies. Operation traces link to JSON expression paths.
6. Download current reviewed JSON, summary CSV or complete Markdown, or copy Markdown. Original input and all formulas remain intact. Importing an audit restores **originals only**, requiring fresh inference/review; it does not silently reapply old approvals.

## Input and expressions

Use the examples as a complete schema. `variables`: `{id, description, value}`; `formulas`: `{id, target, expr}`. Expressions are variable-ID strings, dimensionless numeric constants, or arrays `["add"|"sub"|"mul"|"div", left, right]` and `["pow", expression, integer]`. No eval, executable formulas, function calls, formula-to-formula dependencies, square roots or implicit coercion. IDs start with a letter and use letters/digits/underscores, ≤30 characters, excluding prototype names.

Bounds: 1–24 variables, descriptions ≤300 characters, finite numeric magnitude ≤1e9; 1–16 formulas, ≤64 expression nodes and depth 8 each; integer powers −3…3; JSON source ≤60,000 characters. Source/audit file import ≤8 MB, with the stricter original-source bounds enforced after extracting `originalInput`. A maximum-batch audit roundtrip is tested. Per-review notes ≤2,000 characters. Operation values must stay finite and ≤1e100 in magnitude. Zero to zero/nonpositive powers is rejected.

Supported dimensions are length, mass and time. Quantity types: length (m), time (s), mass (kg), area (m²), volume (m³), speed (m/s), acceleration (m/s²), force (N), energy (J), power (W), mass density (kg/m³), dimensionless scalar (1). All constants are dimensionless. No temperature, electrical, angular or affine-unit handling. Addition/subtraction require equal exponent vectors; multiplication/division add/subtract exponents, and powers multiply them. The expected output vector is checked separately. This does **not** detect all bad formulas: energy and torque have identical dimensions; incorrect dimensionless coefficients pass. Negative physical values are allowed; this is dimensional algebra, not plausibility screening.

## Real AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX weights, Apache-2.0. Runtime: Transformers.js 4.3.2 / ONNX Runtime Web, CPU single-thread WASM, normalized mean-pooled 384-dimensional embeddings. The model ranks descriptions against 12 fixed semantic quantity anchors; anchors are not canned inference responses. Cosine similarities are **not confidence probabilities**.
- Four texts per model chunk; tokenizer's configured `model_max_length` is 512. The worker's `max_length` pipeline option is not relied on for context enforcement. Character bounds additionally constrain input.
- First use needs internet: approximately 23 MB model/tokenizer from Hugging Face/CDN, 27 MB WASM, and around 0.6 MB worker/factory plus app code. Downloads begin only after the explicit AI button. Progress is per model file and inference chunk, not an invented global percentage.
- No API keys, paid services, server inference, analytics or uploads. User descriptions are processed locally; SI values/formulas do not enter the neural model. Imported instruction-like text remains data. Content is held in tab memory unless you explicitly export it. Cache API stores downloaded public model/runtime files, not your worksheets. Privacy network checks recorded GET-only requests with no request bodies and only documented hosts/paths; signed CDN query values are deliberately not persisted.
- Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB free memory. Tested desktop Chrome headless with GPU disabled; WebGPU is not required. No blanket mobile/RAM guarantee. No fake fallback if inference fails. Network, unsupported-runtime, worker, schema and 180-second timeout errors provide retry guidance. Run identity prevents cancelled/old workers and late file reads from overwriting current input/results.
- Downloaded model, worker, module factory and WASM are cached when storage permits. **Tested offline scope: fresh-worker real inference in an already-open, previously warmed page.** Offline app-shell navigation/reload is not promised. Private mode, storage pressure or eviction may require new downloads.

## Immutable same-origin dependencies

Preserve these older apps and exact paths when publishing the combined collection:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

`runtime-dependency-audit.json` contains verified sizes/hashes/protocol. Reusing these same-origin assets avoids duplicating about 27 MB. Local static server maps these paths to their existing production builds. The public release independently byte-checks them and runs real AI at the Pages URL.

## Output and comparisons

JSON is a complete `dimension-desk/1` audit with original worksheet, original and edited values, full ranked model evidence, decisions, exact expression traces and computed formula checks. Markdown contains the complete worksheet/reviews and checks. CSV is a compact **summary**, one record per variable or formula, preserving original descriptions, original/reviewed values, expressions, quantities, decisions and notes/reasons; use JSON for full ranking/trace fidelity. RFC-style quoting preserves commas, quotes and line breaks. Formula-like string prefixes receive an apostrophe for spreadsheet safety; genuine numeric signs are preserved. No source record is removed.

The numeric-only baseline evaluates all original formulas with the reviewed values while **ignoring dimensions and holds**. The dimensional audit uses only approved quantities/values. Counts show how many formulas produce numeric answers versus pass necessary dimension checks, not measured time savings, accuracy or universal improvement. On each reviewed example, numeric-only evaluates 4 formulas but only 2 are dimension-compatible. These are intentionally seeded fixtures, not general quality estimates.

## Validation and known model failures

See [VALIDATION.md](VALIDATION.md) and the machine-readable reports. Initial uncorrected inference matched **5/7** known quantity labels: traveled distance was mislabeled as speed and liquid height as volume. A negated description requesting elapsed time was also mislabeled as speed. The UI explicitly warns about these failures; human correction is part of the tested workflow. This does not predict accuracy on real documents. No real personal inputs were used.

Desktop Chrome is tested at 1440, 390 and 320 CSS-pixel widths, including screenshots, controls, labels, keyboard focus, downloads/copy, export parsing, offline inference, batching and fault paths. Not tested: physical phone hardware, other browser engines, assistive-technology certification, real scientific use or offline cold reload.

## Build and publish

React + Vite, base `/daily-app2/20261122-4/`. `npm install`, `npm run predeploy`; local test server `python3 serve-test.py`, then `node browser-test.cjs`. Tests reference the collection's existing Playwright installation. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained by contract, but **do not run per-app deploy**: publish the combined root `deploy/` using the root README instructions.
