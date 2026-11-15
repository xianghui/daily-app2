# Prefix Press

A local AI-assisted event-ID codebook worksheet for telemetry analysts. Reconcile differently worded event tallies against a canonical dictionary, review every identity and count, build a deterministic Huffman codebook, compare against fixed-width IDs and decode a supplied sample back to its exact IDs.

## Use

1. Choose a synthetic storefront/workshop fixture, paste JSON, or import source/audit JSON.
2. Set `context`, `events: [{id,label,description}]`, `observations: [{id,description,count}]`, and `sample: [canonicalEventId,...]`.
3. Explicitly load AI (first use needs internet). Inspect top-two cosine evidence and source snippets. Approve or hold **every** tally; edit event/count/notes as needed. Identity/count edits reset approval. Undo is available.
4. Apply the reviewed codebook. Any missing, duplicate or held event blocks the whole codebook. Input originals are preserved; source changes cancel old runs and edits invalidate prior exports.
5. Download current JSON, CSV or Markdown, or copy the worksheet. JSON contains every original/review, complete dictionary, codes, merge trace, payload bits and decoded IDs. CSV retains every tally, original and reviewed counts, decisions, notes and code; formula-like strings are prefixed for spreadsheet safety. JSON is lossless. Reimporting an audit restores originals only and requires fresh AI/review.

## Real AI, licenses and runtime

`Xenova/all-MiniLM-L6-v2` quantized q8 ONNX sentence embeddings, [model source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web (MIT) runs on WASM CPU, single thread. Neural normalized mean-pooled 384-dimensional embeddings drive description-to-event matching. Actual tokenizer configuration has a 512-token maximum; source descriptions are bounded to 300 characters. The shared pipeline's `max_length` hint is not claimed as an enforced 256-token cap.

Same-origin immutable dependencies (preserve their originating app builds):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

See `asset-audit.json` for byte sizes and SHA-256. Reusing these tested assets avoids another large WASM deployment. The worker protocol accepts `{id,texts}` and emits progress, four-text batches and `{id,type:'result',vectors}`. Finite dimensions, normalized vectors and counts are validated before suggestions. No fake fallback. First use downloads approximately 23 MB model plus 27 MB CPU runtime, plus tokenizer and worker assets. Hugging Face/CDN hosts model files using the model repository’s main revision; upstream updates may change behavior and require revalidation. Runtime and app code are same-origin.

AI only reconciles meanings; counts, validation, Huffman merges, prefix checks, encode/decode, comparisons and exports are deterministic. Nearest-neighbor matching always offers a candidate, even for unrelated or negated data. Similarity is **not confidence**. Humans must verify identity, context and counts. An unrelated instruction-like challenge was held, not automatically accepted.

## Privacy and supported devices

No API keys, provider integration, uploads, telemetry, credentials, backend or external actions. No use of agent credentials. Sources/reviews live only in page memory and downloaded artifacts. Model-host traffic downloads files; user content does not leave the device. Imported content has no tool authority. Downloads and runtime cache contain public assets only.

Requires WebAssembly SIMD, module workers, Cache API and several hundred MB RAM; WebGPU is unnecessary. Tested desktop Chrome with GPU disabled. Responsive desktop/390/320px layouts tested; physical phones, Safari, Firefox and low-memory devices unverified. No offline app-shell startup promise: **only fresh-worker inference in an already-open warmed page** was tested with all network offline. Cache eviction/private mode can require redownload. Worker, module factory, WASM and model assets are cached. Cancel terminates the worker; generation IDs protect worker downloads, imports and late results. A 180-second timeout and actionable errors cover network/runtime failures.

Limits: 2–8 canonical events; 1–24 tallies; 300-character descriptions/context/labels; integer counts 1–1,000,000; 1–200 canonical sample IDs; 50,000 source characters; JSON/audit files under 2 MB. Four-text batches, maximum 32 texts. Every event needs exactly one approved tally; combine split counts explicitly in source rather than relying on undocumented aggregation.

## Coding assumptions and comparisons

Binary Huffman codes minimize weighted prefix-code length for the **reviewed observed frequency distribution**. Merge ties use deterministic insertion order. All dictionary events have positive counts. Baseline uses `ceil(log2(number of events))` bits per event. Metrics omit dictionaries, headers, framing, byte padding and non-ID payload fields on both sides. The displayed difference is computed, not measured compressed file size, future savings or AI accuracy. A sample can cost more than fixed-width if its distribution differs. JSON contains the exact sample bitstring and decoded event IDs; exported bits are not a packed/framed binary protocol. No production service or device is changed.

## Validation and build

`npm run predeploy` builds React + Vite with base `/daily-app2/20261116-6/`. Per-app deploy scripts are retained as required, but publish ONLY through the root combined deployment. Browser tests use production bundles, not Vite dev mode. See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed checks and limitations.
