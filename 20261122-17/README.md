# Serial Atelier

A local-first transaction-trace review workroom for developers. Informal data-item names are tedious to reconcile across logs. Real neural record matching assists identity review; deterministic conflict analysis then checks whether the supplied interleaving has a conflict-equivalent serial order. No database connection or actions.

## Workflow

1. Choose **Inventory collision** or **Editorial handoff** (synthetic), paste JSON or import source/audit `.json` ≤4 MB. Set exact resource descriptions, transaction IDs and ordered operations with explicit R/W modes. Array order is the total execution order; it is never inferred or sorted.
2. Read the download notice, explicitly **Load AI & reconcile**. MiniLM embeds resource descriptions and notes in four-text chunks. Progress is shown; cancel terminates the worker. Retry never substitutes fake or deterministic AI results.
3. Inspect every original and ranked cosine-similarity evidence (**not confidence**). Verify exact resource identity, transaction and R/W mode. Correct, approve or hold each access. Identity/mode/transaction edits reset approval. Undo restores the last edit; any source/review edit invalidates the applied snapshot and exports.
4. Apply the reviewed scenario. Any hold withholds the whole analysis, preserving all operations. For every pair of accesses on the same reviewed record, in different transactions, with at least one write, the earlier access requires its transaction before the later one. Read/read pairs do not conflict. Acyclic precedence yields a topological serial order; cyclic precedence yields an ordered, source-linked cycle witness. The serial worksheet preserves all accesses and each transaction's internal order, and verifies every conflict direction.
5. Compare the first-appearance serial baseline and its reversed conflict-pair count with the full graph. Counts are computed from this trace, not time savings or model accuracy. Inventory: 3 conflict pairs, 2 directed edges, a cycle. Editorial: 2 conflict pairs, 2 edges, 2 baseline reversals, valid order `revise → credit → publish`. These are small known-answer cases, not database safety guarantees.
6. Download current reviewed **JSON** (originals/reviews/analysis), complete audit **CSV**, hypothetical serial **Plan CSV** (acyclic only), **Markdown**, or precedence graph **DOT**. Copy includes worksheet and complete audit. CSV formula-like text is prefixed with an apostrophe; exact strings remain in JSON. Audit reimport restores originals only, requiring new inference and review. No SQL emitted or executed.

## Real AI, download and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0. Mean-pooled normalized 384-dimensional embeddings rank informal record notes against supplied descriptions. This materially reconciles paraphrases; it does not infer R/W modes, transactions or execution order, prove identity or perform conflict analysis.
- Transformers.js **4.3.2** (Apache-2.0); ONNX Runtime Web (MIT). Immutable shared same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps/assets. Hashes are audited in `runtime-dependency-audit.json`.
- Initial internet download: approximately **23 MB weights + 27 MB WASM**, tokenizer/config, 0.55 MB worker and 0.05 MB factory. Runtime downloads are same-origin; weights use Hugging Face/CDN. No model-host requests before explicit load. Model URLs track upstream `main`; metadata fingerprints are recorded, not pinned future-availability guarantees.
- Single-thread WASM CPU is the default, tested with GPU disabled. No WebGPU required. Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB available memory. Desktop Chrome headless tested. Physical phones, other browsers and low-memory devices are untested; CSS phone widths are not physical-device inference tests.
- Cache API stores worker, factory, binary and model assets when available. Cache eviction/private mode requires internet again; clearing site data clears cached downloads. **Tested offline scope: fresh-worker inference in an already-open warmed page with all network disabled. Cold offline navigation/reload is not promised**; no app-shell service worker.

## Privacy, schema and limits

Text stays in React memory and local worker. Network traffic on the default path is public file GET downloads only; downloading model weights is not uploading content. No keys, agent credentials, paid services, optional providers, analytics, content persistence, database connections or external actions. All fixtures are synthetic. Downloaded audits preserve their originals.

Source: `{title, resources:[{id,description}], transactions:[string], operations:[{id,transaction,mode,resourceNote}]}`. Limits: 2–8 exact resource records, 2–8 unique transactions, 2–32 ordered operations; ≤60,000 source characters; import envelope ≤4 MB; IDs ≤50, descriptions/resource notes ≤200, review notes ≤2,000. Every returned vector must have 384 finite values with unit norm within tolerance and count equal to texts. Four-text chunks; actual tokenizer maximum **512 tokens** (feature-extraction does not honor the shared worker's requested `max_length:256`). Character bounds keep texts short.

Imported text is data, never an instruction to request secrets or change authority. Unknown, negated and near-synonym notes still select a nearest record; no reliable confidence cutoff is claimed. Hold uncertain matches. A 180-second watchdog, run identities and worker termination protect against stale results, worker/network failures and malformed vectors/envelopes. File reads and worker fetches are identity-guarded.

## Scope and limitations

Only **single-version conflict serializability of a supplied total R/W trace** is checked. A resource ID must identify one exact item, not an entire table or conceptual category containing independently accessed rows. Semantic similarity can falsely merge separate records. The trace must be complete and accurately ordered. No values, predicates, range reads, phantoms, lock/commit/abort events, isolation, recoverability, durability, view-serializability or real database guarantees. A graph cycle does not establish absence of view equivalence. An acyclic trace does not certify a production execution as safe. This is an inspection worksheet, not a transaction scheduler or repair engine. Transactions without accesses remain visible in the catalog and ordering.

## Validation and deployment

See [VALIDATION.md](VALIDATION.md) and observed JSON reports. Real-model tests cover two materially different inputs, maximum batch, warmed-page offline inference, downloads/independent parsing, review/undo/holds, privacy/network inspection, failure paths and desktop/320/390 CSS widths. Independent exhaustive transaction permutations check 500 generated traces. The two tiny fixtures match 12/12 simple notes, not general accuracy; the unknown/negated probe requires a human hold.

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`; base `/daily-app2/20261122-17/`. Required gh-pages dependency and per-app scripts are present. Publish **only through collection root** and its combined `deploy/`, never the per-app deployment that would replace the gallery. Existing runtime-sharing rules and 1 GB guard are unchanged.
