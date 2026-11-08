# Packet Seam

An editorial insertion desk for people updating ordered briefing/reading packets. Existing order is intentionally immutable: supply existing summaries and incoming document summaries, constrain protected seams and capacity, run local AI, review each placement, then apply/export a manifest. This is not a PDF reader, generic chat interface, factual verifier or file mover.

## Workflow

1. Choose a synthetic example, paste JSON or import a `.json` file. `packet` (2–12) and `incoming` (1–10) contain globally unique `id` and `text`; summaries are 1–300 characters, IDs simple ASCII, input at most 50 KB. `capacity` is 1–3 documents per gap; `blocked` lists unique integer gaps from 0 to packet length. Gap 0 precedes the first document. Original audit JSON can be reimported, restoring originals for fresh review, not old approvals. Imported instructions are inert data.
2. Explicitly click **Load AI & place documents**. The first model/runtime download requires internet. Progress names files and embedded batches; cancel terminates the worker; retry starts fresh. Timeout is 180 seconds. No inference occurs before invocation.
3. Inspect source-neighbor snippets and added cosine distances. Change a gap and approve, or hold the document outside the assembled packet. Every incoming item must be reviewed. Notes are editable; undo restores the previous review state (last 100 edits). A review/input change invalidates applied exports.
4. Apply the reviewed packet. Protected gaps and capacity are rechecked; original documents remain in order, and multiple inserts within a gap keep incoming input order. Holds never disappear from audits. JSON includes all originals, suggestions, evidence, reviews, constraints, sequence and computed metrics. CSV audits all existing/incoming items with final positions or holds; formula-leading strings receive an apostrophe. Markdown is a usable assembly checklist including holds and review notes; copy matches its download. No external file changes/sending/deletion occur.

## Real AI and deterministic boundaries

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), [Apache-2.0](https://huggingface.co/Xenova/all-MiniLM-L6-v2/blob/main/LICENSE). Quantized q8 ONNX through Transformers.js 4.3.2 / ONNX Runtime Web. No API keys or paid services, no optional providers.
- CPU/WASM default, one thread, mean pooled normalized 384-dimensional embeddings; four-text batches with 256-token context. The learned embeddings compare paraphrased summaries, not just keywords. Count/dimension/finiteness/unit-norm checks reject malformed output.
- For incoming summary `x`, between existing `a,b`, score is `distance(a,x)+distance(x,b)-distance(a,b)`. At packet endpoints only the one existing neighbor contributes. Distance is one minus clamped cosine. Dynamic programming over subsets of at most ten incoming documents and available capacity slots exactly minimizes the **sum of independent insert costs**, excluding protected gaps. It does not optimize actual pairwise continuity among several incoming documents in the same gap, infer prerequisites or reorder the original packet.
- Displayed comparison computes append-all cost for the **same approved records** versus reviewed placement cost from actual embeddings; it explicitly labels the append baseline infeasible when it violates capacity/protected gaps. Lower is a model-based semantic surrogate only, not measured reading quality, accuracy or time saved. Manual changes may increase it. Holds are excluded consistently from both costs.

## Downloads, privacy and cache

Approximately 23 MB model weights + 27 MB WASM plus tokenizer/config and local app code. Model/tokenizer download from Hugging Face and its CDN. No content uploads: only model/runtime file GET requests. No analytics, keys, remote inference, user-content persistence or credentials. Records/notes remain in React/worker memory until export. Caches store only model/runtime assets; clear site data to remove them. Embeddings are discarded after scoring.

The app code, worker and WASM factory are bundled locally. To avoid duplicating 26,861,777 bytes, Vite references the byte-identical same-origin immutable WASM at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older build during combined deployment. Factory/binary/worker source use Cache API; model files use Transformers.js cache. Tested: successful online inference, terminate worker, block network, rerun with a fresh worker on the **already-open page**. Offline navigation or reload is **not** promised (no app-shell service worker). Cache eviction/private browsing/storage restrictions can require network again. Model revision is not pinned; recorded observed outputs are not a guarantee against future host changes.

Modern desktop browser with WebAssembly and module workers required; Cache API recommended. No WebGPU dependency. Chrome desktop tested at 1280px and narrow 390/320px viewports. Physical phones, low-memory devices, Safari, Firefox and assistive technologies remain untested. If WASM/memory fails, enable WASM, close other tabs or use a current desktop browser; network errors are actionable, never replaced by fake results.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable `*-validation.json`. Two materially different synthetic fixtures matched all six intended insertion gaps, with actual inference in production workers. This is a tiny easy topical dataset, not representative accuracy. A negated energy statement still placed beside renewable-energy content: embeddings find subject matter but do not verify agreement or truth. Unrelated content always receives a feasible proposal; hold it. Human approval is essential.

Independent exhaustive enumeration verifies the assignment solver on 20 generated cases. Original order and record conservation, full 12+10 limits, capacity/protected hard gates, all review/edit/undo/export controls, cancellation/retry/stale results, malformed output, injected runtime errors/timeouts, aborted real downloads and recovery, offline inference and CSV/JSON/Markdown roundtrips are exercised. Fault injection is used only for defensive paths, never successful AI checks. Secret-pattern scans supplement source inspection; they are not exhaustive security certification.

## Reproduce and publishing

`npm install`, `npm run predeploy`, `python3 serve-test.py` (production bundle, port 6297); then `node core-test.mjs`, `node browser-test.cjs`, `node network-test.cjs`, `node edge-test.cjs`, `node variation-test.cjs`, `python3 artifact-test.py`, `python3 asset-audit.py`. Tests use workspace Playwright and installed Chrome. `TEST_URL` and `REPORT` rerun the browser suite against public hosting.

Per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`, with gh-pages installed. Publish only through the **root combined-site** predeploy/deploy, not per-app deploy. Check gallery scripts/older entries, Pages build commit, public asset hashes and real public inference. No digest is sent by the builder.
