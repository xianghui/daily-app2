# Subtotal Studio

A no-key browser utility for analysts assembling recurring two-dimensional reports from informal handoffs. Unlike scalar counting tools or running totals, it produces multi-level aggregate tables with explicit grouping masks and source lineage. It distinguishes genuine missing category values, literal `ALL`, and rolled-up subtotal fields.

## Workflow

1. Paste/import JSON or load one of two synthetic fixtures. Supply report-contract descriptions and detail rows, with exactly two ordered dimension labels.
2. Explicitly load AI. Local MiniLM compares request context with contract descriptions and ranks detail-only, hierarchical ROLLUP and all-combination CUBE contracts.
3. Inspect cosine evidence (not confidence), edit the proposed contract, approve or hold every request, add multiline notes. Undo any review edit. No automatic approval.
4. Apply reviewed summaries. Exact grouping/summing is deterministic. Every level separately conserves source IDs, row count and signed integer total; never add totals across masks.
5. Download current applied JSON, CSV or Markdown, or copy Markdown. Any edit invalidates exports until re-applied. Reimporting a JSON audit restores originals, requiring fresh inference/review. No external actions or database writes.

## Model, source, license and devices

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; normalized mean-pooled 384-dimensional sentence embeddings.
- Transformers.js 4.3.2 / ONNX Runtime Web, WASM CPU, one thread. WebGPU is not required. Current desktop Chrome with module workers and WebAssembly SIMD recommended; actual tests used installed Chrome with GPU disabled. Other browsers/physical phones were not tested.
- First download approximately **50 MB**: 23 MB weights + 27 MB WASM, plus JS/tokenizer files. Internet and adequate browser memory required. Downloads only begin on explicit run. Progress/cancel and 180-second timeout provided.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, runtime factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps. Hashes in runtime-provenance.json; actual published bytes verified.
- Four-text chunks, maximum 32 texts/eight chunks. Each model text is ≤200 characters. Worker passes max_length 256, but the feature-extraction pipeline relies on tokenizer truncation (512); 256 is not a separately enforced token cap. Unusual short text may truncate.

## Privacy and cache

All source content remains in this tab/local worker. Model files download from Hugging Face and its delivery hosts, not inference endpoints. There are no credentials, telemetry, remote inference or provider integrations. Text is rendered as data, never executed as HTML or instructions. Request monitoring checked all traffic was GET without body and no source context occurred in URLs. Audit reports retain only host/path/query-key names, never signed download query values.

Cache API retains public model/runtime files where supported. Tested: a fresh worker performs real inference fully offline **in the same already-open warmed page**. Offline app-shell startup/reload is not promised. Private mode, eviction, storage denial or model-host updates can require internet. Shared model resolution is not pinned by this app. Cancellation terminates worker and invalidates pending fetch/import/result identities. Errors never substitute deterministic or canned AI responses.

## Input/output contract

JSON object: `title`, `profiles`, `requests`. Profile: unique ASCII `id`, `description`, `mode` (`detail`, `rollup`, `cube`). Request: unique `id`, `context`, two ordered `dimensions`, `rows`. Row: unique `id`, `a`, `b`, `amount`. Categories are exact strings or explicit null. Empty string is a category. Amount is an integer within ±1 billion in a consistent supplied unit, not a floating currency amount. Negative amounts are preserved. No case folding, trimming, unit conversion or source edits happen implicitly.

Limits: 2–8 profiles; 1–24 requests; 0–40 rows/request; title/description/context/category ≤200 characters, dimension names ≤60; source ≤240,000 characters; imported envelope/file ≤1.5 MB; review notes ≤500 characters. Unknown fields, malformed JSON, duplicate IDs, missing categories, invalid numbers and over-limit inputs are rejected. Synthetic examples are in src/core.js.

Mask 0: A/B detail. Mask 1: A subtotal (B rolled up). Mask 2: B subtotal (A rolled up). Mask 3: grand total. ROLLUP emits 0,1,3; CUBE 0,1,2,3. Actual source null is not a subtotal marker: always retain mask with category values. Empty inputs emit no detail groups; an included grand-total level explicitly emits zero.

JSON includes original requests, reviews, all source rows, summaries, lineage and computed metrics. CSV includes request markers, every original source row and every released summary with JSON category values, masks and source ID lists. Held requests retain originals but emit no summaries. CSV formula-like text is apostrophe-prefixed (including multiline notes); signed numeric amounts remain numeric. JSON is the lossless canonical reimport artifact. Markdown is plain text, not sanitized HTML.

## Baseline and known limitations

Baseline replaces source null and rolled-up values with the text ALL and identifies summaries by displayed labels, ignoring grouping mask. The metric counts distinct summary identities lost by that shortcut. It is computed from actual reviewed outputs, not an AI-accuracy or time-saving estimate. Each grouping level repeats the source total; summing levels double-counts by design.

Observed AI: **6/6** simple requests across two different workflows matched intended contracts (first-profile baseline: 2/6). **1/4** harder paraphrase/negation probes matched; the others required manual correction (first-profile baseline: 1/4). Similarity is not reasoning, and small fixtures are not representative accuracy estimates. Arbitrary dimensions and difficult wording can fail. Confirm both hierarchy order and whether independent B totals are wanted. This is a human-reviewed reporting aid, not autonomous analysis.

## Build/deployment and validation

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261125-19/`. Per-app deploy scripts are retained as required, but **publish only through collection root deploy/** to preserve all apps.

See VALIDATION.md and machine-readable browser/artifact/defensive/public reports. Independent Python SQLite GROUP BY queries validate each downloaded level; CSV is reopened with Python csv. Real production-bundle inference, offline fresh worker, maximum batches, all exports, review/hold/undo, cancellation/retry, network recovery, stale results, bad vectors, timeout, unsupported runtime and responsive layouts were exercised. Physical mobile devices, all browsers, offline navigation and universal classification quality were not tested.
