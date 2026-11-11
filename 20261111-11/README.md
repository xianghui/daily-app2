# Transit Footprint

For office sustainability coordinators reconciling informal travel diaries with a transport-factor register. The bottleneck is inconsistent mode names and mixed distance units; the output is a reviewed, source-linked emissions worksheet, not a route planner or certified carbon account.

## Workflow

1. Load **Office commutes** or **Community event**, or paste/import the same JSON shape. All included fixtures are synthetic. Factor values in examples are illustrative teaching values, **not official reporting factors**.
2. Supply suitable factor descriptions, source/year/geography/scope, basis (`vehicle-km` or `passenger-km`) and value in kg CO2e per basis unit. Each record represents **one person's one-way trip leg**. Supply distance in km or mi and vehicle occupants including driver. Split mixed-mode journeys. Do not enter fleet totals or duplicate a person's same leg. No implicit return doubling.
3. Click **Load AI & match modes** explicitly. Actual model downloads and inference run locally with progress, cancellation and retry. Inspect source notes, candidates and cosine similarity (not confidence).
4. Edit mode, distance, units, occupants and reviewer note. Approve every leg or hold ambiguity. Undo reverses review edits. Any review/settings change invalidates the export snapshot.
5. Verify factor values and select a hypothetical all-trip factor, then **Apply reviewed worksheet**. Holds remain in every audit but block complete totals and scenarios; only an explicitly labeled approved subtotal is shown.
6. Download complete JSON, CSV or Markdown, or copy Markdown. Exports reflect current applied reviews. JSON preserves original input plus settings, source rows, review decisions, evidence, factors, groups and computed metrics. Reimporting exported JSON restores **originals only**, requiring new AI and renewed approvals. CSV is a full per-leg audit including factor source/basis/value and safe formula escaping; Markdown is the handoff.

No messages, bookings, account changes, purchases or external inventory postings occur.

## Real AI, arithmetic and honest comparisons

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, 384-dimensional normalized mean-pooled embeddings. Semantics rank supplied mode-factor descriptions against trip notes. AI does not infer distances, official emission factors, route availability or reporting validity.
- Runtime: bundled Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), one-thread WASM CPU. WebGPU is not required. Worker and module factory are same-origin; the byte-identical 26,861,777-byte binary is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that collection asset.
- Deterministic: miles × 1.609344 = km. kg CO2e = km × factor, divided by occupants **only** for vehicle-km factors. Passenger factors are already per passenger: occupants are retained but ignored. Group and sum approved person-trip legs without early rounding. Display rounding does not change exports. Zero factors/distances are valid.
- Sensitivity scenario applies a selected factor to all approved legs at unchanged distances and recorded occupancy. It is not a feasible modal-switch plan or measured avoided emissions. Distances, occupancy, accessibility and availability can differ by mode. Positive or negative differences are shown honestly; there is no guaranteed reduction.
- Reconciliation metric compares AI suggestions and naive first-factor assignments against current human approvals. This is review agreement, **not independent accuracy**. Literal full-title coverage is separately labeled. No fabricated savings, confidence, accuracy or elapsed-time claims.

## Downloads, privacy and devices

Before first load, internet is needed for ~50 MB total: ~23 MB model weights/tokenizer from huggingface.co / hf.co and model-host CDN redirects (observed us.aws.cdn.hf.co), plus ~27 MB same-origin runtime. Actual transferred bytes depend on cache. No model-host request occurs until explicit loading. Notes/embeddings stay in browser memory; downloading weights is not uploading content. No remote inference option, credentials, analytics or paid service. Imported instructions are inert data and cannot obtain credentials or tool authority.

Tested: desktop Chrome in Playwright on localhost and production, module workers, WebAssembly SIMD, Cache API, several hundred MB free memory. WASM CPU is the only default path; no WebGPU required. Physical phones, other engines and constrained-memory devices are unverified; responsive layout is tested at 1440, 390 and 320 CSS pixels. Failures surface actionable errors, no fake AI fallback.

Model assets use Transformers.js Cache API. Worker source, WASM factory and binary are explicitly cached and recreated via blob URLs. Tested offline scope: a fresh worker can perform actual inference in an **already-open page** after an online success with all browser networking disabled. Offline reload/navigation is neither implemented nor promised. Cache eviction, private browsing and denied Cache API can require internet again.

## Formats and bounds

Input JSON only, not CSV/PDF/Office. Original payload ≤24 KB; imported/exported envelope ≤1 MB; 1–6 factors; 1–24 trips; unique IDs ≤40 characters per list; factor titles ≤80; descriptions, sources, trip notes and reviewer notes ≤400. Distance 0–20,000 km or mi; occupants integer 1–20; factors numeric 0–10 kg CO2e per unit. First 256 model tokens, four texts per batch, 180-second timeout. Count/dimension, finite normalized vectors and all reviewed inputs are validated. Cancellation terminates workers; run identity protects late inference, file reads and worker downloads.

Limits: similarity always has a nearest factor, even for unrelated input. Negation, uncommon travel modes, mixed journeys and language shifts can confuse MiniLM. Human review is essential. Model version is a hosted public repository rather than pinned immutable revision. Factor boundaries may exclude upstream energy, vehicles, infrastructure or food; inconsistent scopes make totals misleading. Duplicate real-world trips with different IDs and diary completeness cannot be established automatically. Floating-point arithmetic is appropriate for an exploratory worksheet, not regulatory rounding rules. No general emissions accuracy or reporting compliance claim.

## Development and verification

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite base `/daily-app2/20261111-11/`; required app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publish only using **root combined-site workflow**, never per-app deploy. `python3 serve.py` serves the production bundle at localhost:6431 including the shared runtime. Run `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node late-result-test.cjs`, `node stale-import-test.cjs`, `python3 artifact-test.py`. Browser suite accepts `TEST_URL` and `REPORT` for combined/public targets. See VALIDATION.md and machine-readable reports for actual outcomes and limitations.
