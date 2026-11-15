# Bundle Accord

A local-AI shared-studio/household item division worksheet. Distinct from expense settlement, matching people to roles, and inventory allocation: this app reconciles individual subjective preference notes into a complete additive utility matrix, allocates **indivisible items**, and exposes directed envy and envy-up-to-one-item (EF1).

## Workflow

Choose Studio split / Club cupboard, or paste/import synthetic JSON. `cards` have `id,label,description`; `people` have `id,name`; `records` have `id,person,text,value`. Load AI explicitly. Inspect original notes and ranked cosine evidence; correct item/person/value, approve or hold **every** note. Apply the reviewed matrix. Compare exact maximin with fixed-order round robin, inspect item bundles and envy, then download current JSON/CSV/Markdown or copy the worksheet. Changes invalidate exports; Undo restores previous review edits. Audit JSON reimports originals only, requiring renewed AI and approval.

AI meaningfully replaces literal item-name matching: paraphrases such as “the motorized fabric stitching equipment” retrieve the sewing machine. Numeric preferences always come from the user. Similarity is NOT confidence; unrelated notes still get a nearest item. Human verification remains mandatory. Imported instructions cannot execute tools or request credentials.

## Real model, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings; bounded to 256 tokens/text.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). No WebGPU required. Four texts per inference batch.
- First load: approximately 23 MB weights/tokenizer plus 27 MB WASM and bundled JavaScript. Internet required. Hugging Face / its CDN supplies public model assets; content remains in the worker on-device. No remote AI provider, keys, analytics or content-upload endpoint.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older builds in combined deployment. Sharing avoids multiplying runtime bytes. Their actual protocol and online/offline inference were verified, not assumed.
- Cache API stores public worker/runtime/model assets, not notes. Tested offline: fresh worker in an **already-open warmed page**, after online inference. No promise of offline startup/reload, permanent caching or private-mode persistence. Cache eviction requires a new download.
- Current desktop Chrome with WebAssembly SIMD, module workers, Cache API, several hundred MB RAM. CPU tested with GPU disabled. Physical phones, Safari/Firefox and low-memory devices are not tested. Phone *layout* tested at 390/320 CSS pixels.

## Limits and deterministic decisions

2–4 people; 2–8 items; 1–32 preference notes; 300 characters per item field/person name/note; 40,000 original-source characters; JSON file envelope under 2 MB; values finite 0–100; review comments up to 1,000 characters. Each person must assign positive total pool value. Exactly one approved note per person/item; missing cells produce an incomplete auditable worksheet, duplicate approved cells block application. Holds retain originals but never supply missing preferences.

All assignments (maximum 65,536) are enumerated. Maximize the minimum fraction of each person's total pool value received, then sum of fractions, then enumeration/input order. Every item belongs to exactly one person; some people may receive none. Baseline: fixed person order, each choosing their highest-valued unassigned item; input-order ties. Both use identical reviewed utilities. No welfare/accuracy/time improvement claims beyond computed objectives. EF1 is checked by valuing other bundles under each observer's preferences and removing their most-valued item; maximin does not promise EF1. Utilities are subjective/additive, not prices, and do not represent ownership or binding consent. No money, transfers or messages are sent.

180-second timeout; real cancellation terminates worker. Run IDs also guard worker fetch and file imports. Finite vector count/dimension validation rejects malformed output. Runtime/download failures leave no fake suggestions; retry is explicit. Empty, invalid, excessive and unsupported input fails with actionable errors.

## Artifacts

JSON retains all originals, reviews, ranked evidence, utility matrix, missing cells, both allocations and envy details. CSV is one row per source note, including holds and reviewed values plus owners; quotes/newlines escaped, spreadsheet formula-like string cells prefixed with apostrophe. Markdown contains both allocations and every reviewed source note. Exports use only the current applied snapshot. Audit reimport discards previous decisions intentionally.

## Development and publication

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261115-18/`. Per-app gh-pages scripts are present as required, but **publish only using root combined predeploy/deploy**. Do not run this app's deploy against the collection.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for actual tests and limitations. Fixtures are synthetic, not personal data.
