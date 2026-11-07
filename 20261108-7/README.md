# Packet Proof

A local-AI packet completeness auditor for admissions and vendor-onboarding coordinators. Instead of opening each file to build a packing list, paste a document **manifest** and required document-type descriptions, review neural suggestions, then export a missing/duplicate checklist. This app does not read actual PDF/image files, validate their content or move anything.

## Workflow

1. Load either synthetic example or paste/import JSON with `types: [{id,text}]` and `documents: [{id,packet,name,text}]`.
2. Required types are the constraints: every named packet expects exactly one document per type. Customize them before Run. Packets with no documents at all cannot be represented; keep a separate empty-packet register.
3. Explicitly press **Load AI & audit packets**. Inspect the original description and top-three source-linked type scores. Every document gets a best candidate even when none fits: **hold** unrelated or uncertain documents.
4. Accept a type or hold every document. Type changes reset its decision; edit notes and undo the last 30 edits. Inputs remain unchanged. No destructive actions or remote actions exist.
5. Apply the reviewed audit. The deterministic register marks each requirement `missing`, `present` or `duplicate` (multiple accepted manifest records, not proof of identical file contents). Held documents fill no slot. Duplicate requirements stay flagged; no file is removed.
6. Download complete JSON/CSV and the reviewed Markdown checklist, or copy that checklist. Edits/undo invalidate the snapshot until reapplied. JSON imports restore original requirements/manifests, intentionally not approvals.

The operational improvement is one batch type review plus automatic per-packet slot reconciliation, rather than manually assembling and counting multiple lists. The baseline assigns everything to the first type. The UI computes how many AI proposals differ from that baseline, **not accuracy or time savings**. Actual known-answer fixture counts appear in VALIDATION.md.

## Real AI / runtime / downloads

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX derived from sentence-transformers/all-MiniLM-L6-v2. Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT) perform neural feature extraction **locally on WASM CPU in a Web Worker**, single thread. 384-dimensional mean-pooled normalized vectors, cosine ranking against user-supplied type descriptions. The classification materially depends on model inference, not filename regex or canned results. Vector count, dimension, finite numbers and approximate unit norms are validated before ranking.

Model/tokenizer download approximately 23 MB from Hugging Face/CDN plus approximately 27 MB WASM and local app/worker/runtime assets. Internet is required initially. Current desktop Chrome was tested; a browser supporting module Workers, WebAssembly SIMD and Cache API, with approximately 300 MB available memory, is recommended. No WebGPU, API key, account, provider integration or paid service. Actual physical phones, Safari/Firefox inference and low-memory performance were not tested.

The WASM binary is shared with the existing immutable collection asset `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes; SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve that older app during combined deployment. The version-matched module factory is bundled locally under `public/runtime`. Cache API stores worker/factory/WASM; Transformers.js caches model downloads. After a successful online inference, a fresh worker can run **offline while the page stays open**; production-bundle browser tests disable all networking to verify this. Offline navigation/reload is not promised. Browser cache may be unavailable or evicted. Cache entries contain public runtime/model assets, not user manifests. Cancellation terminates the worker, not necessarily already-started network transfers; partial public cache entries may remain.

## Privacy and limitations

No default content upload, telemetry, backend or remote inference. Model downloads are public GET requests; documents remain in browser memory and chosen exports. User input is treated only as model text, never instructions with tool authority. No credentials are requested or embedded. All examples are synthetic. Do not commit real records.

Short English descriptions work best. Similarity is **not confidence**, legal sufficiency, authenticity, expiry validation, language understanding guarantees or proof a document meets its requirement. Negation, mixed-purpose attachments and fine distinctions can fail. Required type inventories should be meaningfully distinct. Always verify originals, hold irrelevant documents and resolve duplicate slots manually. Filenames are identifiers, not evidence fed to the model; content descriptions alone are embedded.

## Bounds and defensive behavior

- 1–8 required types, 1–32 documents; IDs unique within each collection, 1–40 ASCII letters/digits/underscore/hyphen.
- Each description 1–600 characters; packet/filename 1–120 characters; notes up to 500 characters. Maximum pasted JSON 50,000 characters or imported `.json` 50,000 bytes. Other file formats are rejected.
- At most 40 model texts in chunks of four. Model context 256 tokens per text; truncation can lose meaning even within character limits. No unbounded contexts.
- Input changes, cancellation and newer runs invalidate older workers and async reads. Worker download/construction/runtime errors, model-host failures, malformed vectors and 180-second timeout are shown without fake outputs. Retry uses cached public assets when available.
- JSON retains all original fields plus every reviewed record, packet slots, evidence and computed metrics. CSV retains every document, escaping quotes/newlines and prefixing formula-like cells beginning = + - @ tab or carriage return with an apostrophe. JSON remains the exact-string archive. Markdown contains reviewed slot counts and held IDs, not a certificate of validity.

## Build / collection publishing

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261108-7/`. Required per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`; **do not invoke this app's deploy** because it would replace the collection. Use parent root predeploy/deploy, then verify matching Pages build and public worker/runtime/inference. See VALIDATION.md for observed checks and limitations.

## Validation scripts

`python3 serve-test.py` serves the production bundle at port 6247 with its real base and shared WASM. `node browser-test.cjs` exercises real inference, offline fresh workers, full bounds, review/export and defensive cases; `python3 artifact-test.py` independently parses downloaded JSON/CSV/checklists. `extra-test.cjs` blocks the actual model host then retries real inference; `challenge-test.cjs` records one deliberately tricky semantic case. Fault injection is used only for defensive error tests, never successful AI claims. The browser harness requires the existing workspace Playwright installation and Chrome; see recorded JSON/log artifacts.
