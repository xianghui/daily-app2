# Decibel Quilt

A static, no-key AI sound-log reconciliation desk for facilities coordinators. Distinct from room reverberation calculators: this app links rough measurement notes to supplied sessions, then combines interval equivalent sound levels using energetic averaging. It does not listen to a microphone, estimate readings or provide exposure/compliance advice.

## Workflow

1. Load either synthetic example, paste JSON or import a JSON file. Edit the session targets/comparison caps in the JSON before running.
2. Explicitly click **Load AI & match sessions**. First use needs internet and approximately 50 MB: ~23 MB model/tokenizer plus ~27 MB runtime. Progress and cancellation are shown.
3. Inspect source text, candidate profiles and cosine similarities. Correct the proposed session, whole interval minutes and supplied measured dBA value. Approve or hold every interval. Similarity is not confidence.
4. Apply the reviewed intervals. Held records or a duration mismatch block numeric summaries; all records remain in the audit. Exact target-minute coverage is mandatory, but users must independently verify contiguous, nonoverlapping timestamps and consistent measurement position.
5. Inspect energetic Leq, duration-weighted arithmetic baseline, supplied caps and interval time/energy shares. Download JSON, audit CSV, session-summary CSV or Markdown, or copy Markdown. Downloads use the current applied snapshot; any edit invalidates it. Undo restores previous review states. JSON reimport restores originals only and requires fresh AI/review.

## Real AI and data flow

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized ONNX `q8`.
- Runtime: `@huggingface/transformers` 4.3.2, Apache-2.0, with ONNX Runtime Web / WASM CPU (MIT). No WebGPU, API key, backend or paid service.
- A locally bundled module worker embeds profiles and notes, four texts per batch, normalized mean pooling, 384 dimensions, at most 256 tokens per text. App validates finite normalized vectors before cosine ranking. AI materially determines proposed group membership; it never supplies durations or sound levels.
- Runtime factory and application JS are same-origin. Byte-identical WASM is shared at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older app's deployed asset. Weights/tokenizers download from Hugging Face and its CDN redirects. No content is included in these GET requests.
- Content stays in page/worker memory and downloaded exports; no uploads, telemetry, external actions, secrets, remote-provider integration or automatic local saving. Model weights are downloads, not uploads of user data. Imported text cannot alter tool authority.
- Cache API stores worker/runtime; Transformers.js caches model files. After successful online inference, a new worker can perform inference offline in the same already-open warmed page (tested). Offline reload/navigation is **not** promised. Cache eviction/private mode can require another download.

## Inputs and bounds

JSON object: `name`, `catalog`, `records`. Export envelopes may wrap it in `originalInput`.

- `catalog`: 2–8 sessions, each `{id,title,description,minutes,cap}`. Safe unique IDs; description ≤400 characters; whole target minutes 1–1440; comparison cap 0–140 dBA.
- `records`: 1–24 intervals, each `{id,text,minutes,level}`. Safe unique IDs; text ≤400 characters; whole minutes 1–1440; finite equivalent level 0–140 dBA.
- Name ≤80 characters; original JSON ≤24 KB, import file/envelope ≤1 MB. No CSV, PDF or audio import. See both in-app examples / `src/core.js`.
- Current browser with module workers, Cache API and WebAssembly SIMD; several hundred MB working RAM recommended. Desktop Chrome tested with GPU disabled. Physical phones, Firefox, Safari and assistive screen readers are unverified. No silent fallback to canned output.
- 180-second timeout; worker termination, run IDs, guarded async imports/downloads, retry, network/device errors and malformed vector rejection prevent stale or fake recommendations.

## Deterministic calculation

For intervals with duration t and equivalent continuous A-weighted level L:

`Leq = 10 log10(sum(t * 10^(L/10)) / sum(t))`.

The simple baseline is the duration-weighted arithmetic mean `sum(t*L)/sum(t)`. It is displayed for contrast, **not** as a valid energetic sound average. Interval energy shares are sorted descending to prioritize source-log investigation; percentages are computed shares, never AI confidence. Supplied caps are user planning comparisons. No improvement/accuracy/time-savings claims are inferred from these tiny fixtures.

Use calibrated interval Leq—not peak/instantaneous maxima—with the same weighting/reference and measurement position inside each session. Avoid overlapping intervals or pooling different positions into one time history. Equal duration totals alone cannot detect overlaps. The app is not a sound meter, noise-dose tool, hearing-risk assessment, engineering recommendation or regulatory certificate. Semantic similarity can mislink negation, overlapping places or unrelated text; all suggestions require human review.

## Exports

JSON preserves originals, every reviewed interval, decisions, notes, coverage checks and current released summaries. CSV uses quoted escaping/CRLF and protects spreadsheet formula-like text while keeping numeric fields numeric. Session CSV is available only after all intervals are approved and target coverage reconciles. Markdown includes every source interval and coverage result. Held/mismatched audits remain exportable with no fabricated summaries.

## Development / publishing

`npm install`, `npm run dev`; `npm run predeploy` builds production assets. Vite base `/daily-app2/20261112-21/`. Per-app `deploy: gh-pages -d dist` exists as required, but **publish only through the root combined-site workflow** to avoid replacing the collection. Root README defines the Pages commit/build verification contract.

See [VALIDATION.md](VALIDATION.md), real browser reports and independent artifact/core tests for observed results, limitations and deployment status.
