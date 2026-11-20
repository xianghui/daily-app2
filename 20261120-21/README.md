# Contrast Atelier

A local AI-assisted color-token repair worksheet for design-system maintainers. This is a new contrast/accessibility drafting process, not Chroma Ledger's measured Lab swatch ΔE comparison. Both collection galleries were checked before selection.

## Workflow

1. Paste a source JSON object or import `.json`. Define 2–6 role meanings and explicit minimum contrast ratios. Add 1–24 component usage notes with opaque `#RRGGBB` foreground/background colors. Two synthetic examples are included.
2. Read download/device/privacy requirements, then explicitly **Load AI & reconcile**. Real MiniLM embeddings match informal usage notes to supplied roles; no generated or canned role outputs.
3. Inspect source role definitions and cosine evidence. Correct the role and colors. Review the candidate foreground and choose to keep the reviewed color or use the candidate. Approve or hold every usage. A color/role/repair edit resets approval. Hold excludes a token from CSS, not from the audit. Undo restores the previous review layer.
4. Apply reviewed checks. Compare unrepaired reviewed colors with the chosen colors on the **same approved records, reviewed backgrounds and targets**. Counts are actual computed below-target counts, not model accuracy or saved-time estimates. Approved below-target colors remain visibly marked, not silently fixed.
5. Download complete JSON/CSV/Markdown audits, or current approved-only CSS custom properties; copy CSS. Every original and review note is preserved. Review edits invalidate the export snapshot. JSON reimport restores originals only and needs new inference/review; it does not silently trust prior approvals.

## Real AI, runtime and licenses

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web, MIT; real quantized `q8` feature extraction on **WASM CPU**, normalized mean-pooled 384-dimensional embeddings. No WebGPU or API key.
- Approximately **23 MB** model plus **27 MB** CPU runtime on first load, plus app/worker code. First use requires internet to Hugging Face/CDN and the same-origin runtime. Model `main` is unpinned and can change. Observed revision and runtime hashes are in `runtime-dependency-audit.json`.
- Four texts per neural batch, up to 30 texts. Actual tokenizer `model_max_length` is **512**, separately rechecked at the host; the feature-extraction pipeline's `max_length` argument is not an enforced 256-token cap. Notes are additionally bounded to 300 characters.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating builds when publishing. Worker protocol and source were inspected; hashes checked against assembled/public bytes.
- React + Vite UI, local bundled application assets. Per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` remain installed, but **publish only via repository-root combined workflow**.

## Privacy, network, devices and cache

No external AI provider integration, credentials, content upload, analytics, remote style editing or publishing action exists. Only public static model/runtime files download after explicit load. Browser requests were inspected from startup through real inference: GET/HEAD only, no bodies and no source text in URLs. Audit reports retain sanitized host/path information, never temporary signed CDN query values. Sources and review data remain in memory until exported; leaving loses them.

Use a secure-context current browser with WASM SIMD, module workers, Cache API and several hundred MB available memory. Desktop Chrome CPU was tested. Physical phones, other browser engines and constrained devices remain unverified. Responsive layouts were tested at 1440, 390 and 320 CSS px.

Cache API stores worker source, module factory, WASM and model files subject to eviction/browser policy. A new worker successfully executes actual inference with all network disabled **inside an already-open warmed page**. Offline navigation/reload/app-shell startup is **not promised**. Download progress and text-batch progress are shown, cancellation terminates the worker, and a 180-second timeout offers an actionable retry. Download, worker, runtime and malformed-output failures produce errors, never a deterministic substitute advertised as AI.

## Source format and bounds

```json
{"context":"Design review of synthetic portal text","minSimilarity":0.15,"roles":[{"id":"nav","text":"Navigation links and page destinations","minRatio":4.5},{"id":"error","text":"Validation error messages","minRatio":7}],"records":[{"id":"catalog","text":"Browse library catalog link","foreground":"#999999","background":"#ffffff"}]}
```

Source ≤30,000 characters; 2–6 unique roles; 1–24 unique records; descriptions/context 1–300 characters; ratio 1–21; similarity threshold 0–1. IDs: 1–40 ASCII letters/digits/underscore/hyphen. Import `.json` under 2 MB, with a separate larger envelope allowance; original source still obeys the smaller cap. Review notes ≤1,000 characters. Strict six-digit opaque hex only: alpha, named colors, gradients and images are unsupported. All vectors must be finite normalized 384-dimensional arrays with correct count. Imported instructions remain inert text and never acquire authority.

## Deterministic contrast/repair method and limitations

WCAG 2.x relative sRGB luminance uses the standard 0.04045 transfer breakpoint, 0.2126/0.7152/0.0722 weights and `(Llighter+0.05)/(Ldarker+0.05)`. Use explicit policy targets: AA normal text commonly 4.5:1, qualifying large text 3:1, enhanced normal text 7:1. The app does **not** determine size, weight, role applicability or conformance. Full precision, not rounded display, drives decisions (1e-12 arithmetic tolerance).

Repair enumerates 256 rounded RGB interpolation steps toward each of black/white, then chooses minimum squared RGB channel movement among candidates meeting the supplied target. This is **512 tested candidates**, not a global/perceptual minimum, hue guarantee or optimal design. Some target/background pairs have **no possible foreground-only repair**. Human must hold or revise their policy/background. No background mutation is automatic. Failing approved tokens get a `FAILS` comment in CSS; held tokens are omitted. A user can intentionally export a failing draft; its audit and interface retain that failure.

Semantic similarity can assign unrelated or negated prose to a plausible role; it is not confidence or font recognition. Mandatory human review is essential. Only flat opaque solid sRGB pairs are modeled: not transparency, gradients, images, overlays, states, focus, color vision, APCA or whole-site WCAG certification. Verify exported tokens in the actual rendered interface. No stylesheet is changed remotely.

## Exports

- JSON `contrast-atelier/v1`: originals, reviews, vector-derived evidence, deterministic checks and metrics.
- CSV: one row per original, original/reviewed colors, role, choice, final ratio, holds and notes; RFC-style quoting, multiline preservation and leading spreadsheet-formula guarding on text fields.
- CSS: approved `--ID-foreground` and `--ID-background` custom properties in `:root`, with source ID/ratio/target/MEETS-or-FAILS comments. No untrusted prose is inserted into CSS.
- Markdown: workflow assumptions, actual counts and every source/review.

## Build and validation

`npm install`; `npm run predeploy`. `node core-test.mjs` checks 1,000 independent exhaustive blend oracles and known WCAG ratios. `node browser-test.cjs` exercises real model, two known-answer fixtures, CSS parser/clipboard/downloads, review/holds/undo, maximum batching, offline fresh worker, defensive input handling, metrics and responsive layouts. `node defensive-test.cjs` injects failures only for defensive paths; successful inference is real. `node race-test.cjs` checks cold model cancellation/retry, late-worker and file-read races. `python3 artifact-test.py` independently parses downloaded CSV/JSON/CSS/Markdown and current reviews. See [observed validation](VALIDATION.md) and machine-readable reports for exact outcomes, limitations and public release status.
