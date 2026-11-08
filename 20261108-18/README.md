# Cohort Current

A local-AI feedback-period comparison workbench for operations analysts. Input stable topic descriptions plus before/after comment batches; AI embeds anchors and comments, ranks cosine similarity, and proposes topics. Review every proposal, edit topics/notes or hold unrelated comments, apply the comparison and export JSON, CSV or Markdown. Undo restores prior reviews; edits invalidate exports. No external actions.

## Real AI / requirements

`Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Quantized q8, 384-dimensional normalized mean-pooled embeddings, Transformers.js 4.3.2 / ONNX Runtime Web WASM CPU, one thread, batches of four, 256-token maximum. No API key or server. Approximately 23 MB model plus 27 MB runtime download initially. Downloads from Hugging Face/CDN and this static site; no content uploads or provider integrations. Model host revision uses upstream default; availability/upstream changes are a limitation.

Current WebAssembly-enabled Chrome/Edge/Firefox/Safari intended. Tested Chrome desktop and emulated 320/390px viewports, not physical phones or other browsers. WebGPU unnecessary. Browser memory/storage constraints and first-run bandwidth apply. Loading progress, cancel, three-minute timeout and retry provided. Runtime and worker bundled locally; byte-identical WASM reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve this immutable shared collection asset.

Worker/module/WASM use Cache API; model files use Transformers.js browser caching. Tested fresh worker inference with network fully disabled after online success **in the open page**. Offline app reload is not promised. Storage eviction or denied caching requires internet again. User input stays in memory, not intentionally persisted. Explicit downloads/clipboard are user-controlled. Imported instructions are inert data, never tool authority.

## Formats and bounds

JSON: `topics:[{id,description}]`, `records:[{id,period,text}]`. Period is `before` or `after`, both present. 2–8 topics; 1–40 records; 500 characters each description/comment; JSON <=100,000 characters and imported file <=100,000 bytes. Unique simple IDs per list, max 40 characters. Unsupported PDF/CSV imports rejected. Synthetic examples built in. JSON audit reimport restores originals only, requiring fresh inference/review.

All reviews must be approve/hold. JSON preserves every original, rank, review, baseline and trend. CSV includes every record and formula-protects leading dangerous characters (including multiline fields); machine-lossless text remains in JSON. Markdown includes trends and complete record audit. Downloads reflect only the current applied review.

## Deterministic metrics and limitations

Shares = approved topic count / all approved comments in that period; difference = after share minus before share, in percentage points. Holds excluded; no approved denominator gives null/n/a. Every record conserved. Baseline assigns approved records to the first topic; AI-proposal comparison uses the same approved set, isolating assignment changes. These are transparent workflow comparisons, **not accuracy or time-saving measurements**. Topic IDs/anchors are analyst-defined goals.

MiniLM similarity is not confidence, entailment or causal evidence. It always proposes a nearest topic, even for unrelated or instruction-like comments; review/hold is essential. Negations, overlapping anchors, long truncation, non-English text and mixed-topic comments can fail. Different sample sizes/selection and holds distort interpretation. No significance tests, population weighting, multi-label classification or auto decisions.

## Use / development

`npm install`; `npm run dev`; `npm run predeploy`. Vite base `/daily-app2/20261108-18/`. Per-app `deploy` retained as required but publication uses **root** predeploy/deploy to preserve collection.

See VALIDATION.md and machine-readable reports for observed tests. Browser tests use local installed Playwright and Chrome, with `python3 serve-test.py` serving production dist on port 6258; `node browser-test.cjs`. Test inputs and artifacts are synthetic.
