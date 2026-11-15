# Signal Accumulator — 20261115-24

A local-AI investigation worksheet for repeated-measurement log keepers. Informal descriptions are reconciled to known measurement streams, then a human verifies values and order before **fixed-reference, two-sided CUSUM** makes persistent small departures visible. This is not an instrument controller, quality-release approval, safety decision or causal diagnosis.

## Complete workflow

1. Paste source JSON or import a `.json` file. **Packing bench** and **Ceramics studio** are entirely synthetic examples.
2. Supply `profiles`: unique id, label, description, unit, externally established reference mean and positive SD. Set allowance `allowance` (k) and threshold `threshold` (h). Supply `records`: unique id, rough description `text`, numeric `value`, positive integer `sequence`. Sequence is local to the eventually reviewed stream, not a timestamp. Use consistent units; no unit conversion is inferred.
3. Explicitly click **Load AI & reconcile readings**. Real MiniLM embeddings compare each informal description with your supplied stream descriptions. Numeric values and sequence come from you, never AI extraction. No API key is needed.
4. Inspect the top-two descriptions and cosine similarities (not confidence). Correct the stream/value/order, add multiline notes, then approve or hold every row. Changing a numeric value or stream renews review. Undo restores the previous review layer; original source data never changes.
5. Apply the worksheet. Approved rows are sorted within each stream; duplicate approved sequence numbers block the whole result. Holds remain in every audit but are excluded from calculations. Gaps are listed, never filled or inferred. No automatic reset occurs after an alarm.
6. Download current JSON, CSV or Markdown or copy Markdown. Any review/source edit invalidates exports. JSON includes all originals, evidence, reviews, stream parameters and traces. CSV includes every reviewed row (including held rows) and its trace fields where applicable. Markdown contains every original/review, all trace points and an investigation checklist. Reimporting an audit restores **original inputs only**, not trusted saved approvals.

Source example:
```json
{"allowance":0.5,"threshold":5,"profiles":[{"id":"fill","label":"Bottle fill","description":"Liquid volume dispensed into beverage bottles","unit":"mL","mean":500,"sd":2}],"records":[{"id":"r1","text":"Amount of drink poured into each container","value":502,"sequence":1}]}
```

## What AI does—and does not do

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX (~23 MB plus tokenizer/config). English semantic feature extraction, normalized mean-pooled 384-dimensional vectors; nearest-description matching proposes stream identity. It reduces literal-name reconciliation work, not measurement verification.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. WebGPU is not required. Four texts per inference batch. The inspected feature-extraction pipeline does not forward `max_length`; its actual tokenizer configuration has `model_max_length:512`. The app additionally caps each note/description at 300 characters. We do **not** claim the shared worker's unused `max_length:256` option enforces a 256-token limit.
- Vector count, shape, finiteness and normalization are validated before matching. Nearest matches are not equivalence, relevance, unit validity or baseline suitability. Unrelated/instruction-like text still gets a nearest candidate; it must be held manually. Negation, jargon and non-English inputs can mislink. No generative or instruction-following model is involved.
- The shared worker follows model-host revision defaults. Future host changes may alter outputs and need revalidation; no pinned-model reproducibility guarantee.

Immutable same-origin dependencies (preserve originating published app builds):
- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes)

`asset-audit.json` records hashes of the inspected worker, factory and WASM. These existing paths avoid adding duplicate runtime bytes to the collection. No externally hosted runtime JavaScript, backend, paid integration, optional remote inference or provider credentials.

## Deterministic worksheet and honest baseline

For each reviewed stream, start C+ = C− = 0 and process its approved rows in sequence order:

`z = (value − reference mean) / reference SD`

`C+ = max(0, previous C+ + z − k)`

`C− = max(0, previous C− − z − k)`

A cumulative cue occurs when either sum ≥ h. Baseline cues occur when |z| ≥ 3 for one reading. Comparisons tolerate 1e-10 at boundaries for floating-point equality. We report first cue sequence and number of streams with cues, not detection accuracy, probability, measured time savings or a universal improvement. No auto-reset, model-fitting, baseline estimation, alert dispatch or operational action occurs.

Defaults k=0.5 and h=5 are illustrative. A stable, appropriate reference mean/SD and sampling scheme must be established separately. Serial correlation, unstable baselines, irregular samples or nonnormal data change false-alarm behavior. Holds/gaps can hide important evidence. A point above 3 SD can be caught by the baseline without crossing the cumulative threshold; neither method dominates universally. Investigate measurements, baseline and conditions rather than treating a signal as a diagnosis.

**Distinct from Drift Orchard:** that app estimates exploratory individuals/moving-range behavior from current samples and compares specification limits. This app requires an external fixed reference and allowance/threshold, accumulating directional sequential deviations without fitting limits. See `distinctness.json`; all 214 prior AI-utility names/descriptions were parsed before selection.

## Privacy, devices and cache

All user text and calculations stay in browser memory. Network requests download only public runtime/model files from this collection, Hugging Face and its `*.hf.co` CDN. No uploads, analytics, accounts or key fields. Imported text is data, never tool authority. Nothing downloads from the model host until the run button is explicitly clicked. Close the page to discard unsaved inputs; explicit exports contain source text.

Requires a modern browser with WebAssembly SIMD, module workers, Cache API and several hundred MB RAM. Tested desktop Chrome CPU with GPU disabled, plus emulated 320/390px phone layouts. Physical phones, low-memory devices, Safari/Firefox and other browser versions are untested. Model downloads need internet initially (~23 MB weights plus ~27 MB WASM and <1 MB worker/factory). Progress/cancellation/retry are visible; unsupported devices and network/model failures show actionable errors, never fabricated outputs.

The app caches public worker source; the shared worker caches factory/WASM and Transformers.js caches model files. **Only tested offline claim:** in an already-open warmed page after online inference, terminate the worker, disable all network and run real inference in a fresh worker. Offline navigation/startup/reload is not promised. Browser cache eviction/private mode can require redownload. No user content is written to these caches.

Limits: 1–8 streams, 1–32 readings, 300 characters per description/label/note, unit ≤30 characters; unique IDs up to 32 ASCII alphanumeric/underscore/hyphen; source ≤50,000 characters, import envelope ≤2 MB. Measurement/reference mean −1e9…1e9, SD 1e-6…1e9; sequence 1…100000; k 0.01…3, h 0.1…20. Review notes ≤1000 characters. Audits use the larger import envelope but revalidate stricter original-input limits. Inference timeout 180 seconds. Run IDs and terminated workers guard input changes, delayed downloads/imports/results and cancellation.

CSV strings starting with spreadsheet formula characters receive a protective apostrophe, including multiline strings. Genuine signed numeric measurements stay numeric. JSON retains exact source/review text; CSV/Markdown are reviewed working artifacts, not lossless source-import formats.

## Validation and build

See [VALIDATION.md](VALIDATION.md) for observed results, limitations and publication status. Known-answer fixtures (28 records with four distinct repeated note descriptions), 500 independent Decimal arithmetic cases, actual browser inference, maximum batching, artifact reopening, defensive failures, offline reuse and responsive screenshots are included. No real personal documents or secrets are used.

React + Vite, base `/daily-app2/20261115-24/`. Run `npm install`, `npm run predeploy`. Required scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. **Do not invoke per-app deploy**: publishing uses root `npm run predeploy` and root `npm run deploy` to preserve the combined gallery. `serve.cjs` is a test-only production static server; test scripts use the existing machine-local Playwright, not a runtime dependency.
