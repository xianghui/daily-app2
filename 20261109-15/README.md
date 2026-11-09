# Ballot Bridge

A local-AI reconciliation desk for **informal small-team ranked-choice preference polls**, not binding elections. Facilitators paste canonical options and anonymous ballots containing reworded ranked choices. MiniLM proposes option links; the facilitator inspects source evidence, corrects or holds each whole ballot, and applies an auditable instant-runoff count. No vote submission, identity verification, account changes or remote actions.

## Run and use

`npm install && npm run dev`; production: `npm run predeploy`. Vite base is `/daily-app2/20261109-15/`. Per-app gh-pages scripts are retained, but publication uses the repository **root** predeploy/deploy to preserve the collection.

1. Load either synthetic example, paste JSON or import an audit. Input shape: `{title, options:[{id,text}], ballots:[{id,ranks:["first choice","second choice"]}]}`. Array order is rank order. IDs must be unique within each collection.
2. Explicitly select **Load AI & match ranks**. Internet is required initially; the page shows download and four-text batch progress. Cancel terminates the worker. Retry creates a new worker.
3. Inspect each original rank and cosine-ranked option evidence. Cosine is not confidence. Edit matches; an edit resets that ballot's approval. Every approved ballot must have a valid, distinct option at every supplied rank. Ambiguous ballots must be held whole, not silently shortened. Undo restores the previous review state.
4. Approve or hold every ballot, then **Apply reviewed tally**. Any later edit invalidates exports. The report shows counted/held totals, every count round, eliminated option, continuing and exhausted ballots, ties and unresolved outcomes.
5. Download JSON (complete originals, evidence, reviews and count), CSV (one row per original rank, including holds), Markdown (count plus complete ballot audit), or copy the report. Audit reimport restores original input and resets approvals; it does not trust a prior tally. CSV escapes formula-leading text, so JSON is the lossless archival format.

## Real AI and deterministic counting

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Runtime: locally bundled [Transformers.js](https://github.com/huggingface/transformers.js) (Apache-2.0), ONNX Runtime Web (MIT), q8 WASM CPU. Normalized mean-pooled 384-dimensional embeddings score each ranked write-in against every canonical description by dot product/cosine. Each rank gets the nearest candidate independently; duplicate suggestions are possible and must be corrected or held. This is real inference, not generated canned responses, regex classification or an LLM chat wrapper.

Finite vector counts/dimensions are checked. Deterministic steps: schema checks, unique-rank review gates, record conservation, exports and instant-runoff counting. Every approved ballot contributes once to its highest active preference. A strict majority (> half of continuing ballots) wins; exhausted ballots do not enter that denominator. If no majority exists, eliminate only a **sole** lowest option; any tied lowest options stop with an unresolved elimination tie. No arbitrary tie-break, preference completion, ballot weights or voter intent is invented. An all-held count has no continuing ballots and no winner. Each round enforces `sum(counts) + exhausted = approved ballots`.

The exact-description baseline resolves only case-insensitive, trimmed full-description equality. AI/review and exact/review agreement counts use approved ranks only. This measures manual linking assistance against the current review, not independent accuracy or time savings. Human reviews are not ground truth by definition.

## Downloads, privacy, devices and offline scope

First run downloads approximately **50 MB**: ~23 MB model/tokenizer/config from `huggingface.co` and its HF CDN, plus ~27 MB WASM from this same collection, worker and JS. No API key or paid service. Model revision follows the upstream default; package versions are recorded in package-lock.json. User content stays in browser memory, is embedded locally and is never sent in network requests. No remote AI integration, analytics, application content persistence or provider credentials. Downloaded model code/weights are cached, not ballots. Exports are explicit local downloads. Do not use identifiable/sensitive or binding-election data.

Requires module workers, WebAssembly SIMD and sufficient memory in a modern browser. WebGPU is neither required nor used. Desktop Chrome was tested; real phones, other browser engines, memory-constrained devices and assistive technologies were not exhaustively tested. Unsupported devices receive actionable errors, never fake outputs.

Worker source and WASM factory/binary use Cache API; Transformers.js caches model assets. After a successful run, **fresh-worker actual inference inside the already-open page was tested with all network blocked**. Offline app-shell reload/navigation is **not supported or promised**. Evicted caches, disabled storage or an uncached model need internet again. Clear site storage to remove downloads. The byte-identical WASM is reused at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve this immutable collection asset when publishing. No external runtime CDN is required.

Limits: title 160 characters; 2–6 options; 1–12 ballots; 1–3 ranks each; descriptions/write-ins ≤500 characters; IDs ≤40; notes ≤500; workflow JSON ≤50 KB; imported audit ≤1 MB; four-text inference batches, 256-token truncation and 180-second timeout. English intended. Input edits/cancellation terminate the worker and advance run identity; stale callbacks and asynchronous reads cannot restore prior results. Imported instructions are inert data, not commands or credential requests.

## Known limitations and validation

See [VALIDATION.md](VALIDATION.md) and reproducible scripts. Two tiny synthetic fixtures matched all 16 expected semantic links; neither exact-description baseline resolved any. Both examples legitimately stop at an elimination tie; no winner is fabricated. A separate real-inference browser fixture tests transfer/exhaustion and majority. Negation and unrelated text still produce unsuitable nearest candidates: mandatory review is essential and there is no universal accuracy claim. This is not an election system, an eligibility check, fraud detector, identity service, secrecy guarantee or preference-intent oracle. Source descriptions may be too similar, truncated or insufficient; hold uncertain ballots and consult their authors outside this app.
