# Rule Lantern

A local-AI decision-table workroom for support-policy editors. Rough condition labels often describe the same underlying fact differently. MiniLM reconciles these labels, a human reviews the mappings and true/false requirements, and exhaustive Boolean enumeration exposes missing cases and colliding outcomes before the rulebook is handed to a team.

## Workflow

1. Use **Parcel remedies** or **Workshop admission**, or paste/import source JSON. Define `facts: [{id,description}]`, `outcomes: [{id,description}]`, and `rules: [{id,outcome,conditions:[{fact,value}]}]`; `fact` in a condition is an informal description, `value` is an explicit Boolean, and `outcome` is an existing outcome ID. Edit goals/catalog/rule requirements in the source editor and rerun.
2. Read the pre-load requirements and explicitly click **Load AI & reconcile**. See file download and neural batch progress; cancel/retry is available.
3. Verify each proposed fact and truth value against its original condition. Change mappings/values, add multiline notes, approve or hold each condition. Similarities are cosine evidence, not confidence. A hold withholds the entire table rather than silently dropping a rule. Undo restores the last review edit.
4. **Apply reviewed scenario**. Inspect every fact combination, matched source-rule IDs, possible outcomes, conflicts, gaps and per-rule reach. Source-order first-match is only a baseline, never a conflict-resolution policy. Revise source conditions/outcomes and rerun to address findings.
5. Export lossless JSON, complete Markdown, source-condition audit CSV or the full case/test CSV; copy Markdown. Every edit invalidates applied exports. Reimport JSON audits restores originals only and requires renewed inference/review. Closing the tab loses unsaved input/reviews. No enforcement, sending, account changes or other external action occurs.

## Real model, runtime and data flow

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8, through Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT). Real mean-pooled normalized 384-dimensional neural embeddings compare condition phrases to supplied fact descriptions. Finite count/dimension/norm checks precede deterministic cosine ranking. The model does **not** extract logical operators, infer truth values or create outcomes. No keyword/demo fallback, accounts, API keys or optional provider integration. Imported text is data, not instructions or executable code.

Initial download approximately 23 MB model + 27 MB CPU runtime, tokenizer/config and ~0.6 MB shared worker. Internet is required initially. HTTPS/localhost, module workers, WebAssembly SIMD, several hundred MB available memory; single-thread WASM CPU does not need WebGPU. Desktop Chrome with GPU disabled tested. Physical phones, Safari/Firefox and assistive technology are untested. No universal-device claim. Failures/timeouts show actionable errors, not fake AI results. Four texts per neural chunk. The worker supplies `max_length:256`, but this pipeline's tokenizer uses model_max_length **512**; no stricter token-cap claim. Each description is limited to 200 characters.

Only public model/runtime files are downloaded, on explicit loading, from this site, huggingface.co and its CDN (including hf.co/xethub endpoints). User content goes only into a local browser worker, never request URLs or bodies. No backend, analytics, remote inference or shared credentials. React memory holds content and reviews; Cache API stores public runtime/model downloads where supported. Cache eviction/quota may require internet again. **Offline scope tested: fresh-worker inference in an already-open warmed page**, not cold navigation or reload. Failures, malformed neural vectors and 180-second timeouts stop the run. Run identity guards cover delayed worker messages, worker-source fetch and file reads.

### Immutable shared same-origin assets

Preserve these originating apps and published paths:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Sizes and SHA-256: `runtime-dependency-audit.json`. The worker/factory/WASM are explicitly cached and bridged through local blob modules; model files use the runtime cache. Protocol/model settings and hashes were inspected, then production and public inference were tested. Deploy as part of the collection, not alone without its shared dependencies.

## Exact method, inputs and limitations

A rule is a conjunction (AND) of required Boolean fact values. For each of 2^n assignments, enumerate **all** matching rules. No matches = gap; multiple distinct outcomes = conflict; one distinct outcome = consistent, even if multiple same-outcome rules match. A contradiction in a rule makes it unreachable. Rule reach and exclusive-case counts aid inspection but are not automatic permission to delete rules. First-match uses source rule order and can hide conflicting alternatives; it does not fill gaps with an invented default. Displayed counts are computed properties of this supplied model, not measured productivity, accuracy or real-world completeness.

Rules are unordered. No OR, comparisons, ranges, priorities, temporal rules, unknown/missing truth values or fact feasibility constraints. All combinations are assumed feasible; if some are impossible in the real domain, document that externally rather than treating them as verified failures. This is a rulebook QA worksheet, not legal advice, policy certification or an execution engine. Semantic similarity is not equivalence. Unknown/negated/multilingual descriptions still get nearest neighbors; hold them. The model's correct simple fixtures do not establish general accuracy.

Limits: source ≤60,000 characters; source/audit `.json` file ≤4 MB; 2–8 unique facts, 1–8 unique outcomes, 1–20 unique rules, 1–8 conditions per rule and ≤64 conditions total; IDs ≤50; title/descriptions ≤200; notes ≤2,000. At most 72 neural texts / 18 chunks and 256 deterministic cases. Original conditions are always retained.

Outputs: `rule-lantern/1` JSON contains originals, all neural evidence, review decisions and complete decision table. Markdown includes the worksheet and complete lossless audit. CSV retains each source and reviewed condition; Test CSV contains all assignments, statuses, matched rule IDs and outcomes (lists encoded as JSON cells). Both CSVs use proper quoted escaping and prefix formula-like strings with an apostrophe; use JSON for exact round trips. Export reflects the applied current review, never defaults. No private records or credentials in fixtures.

## Validation and deployment

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Actual browser inference, two known-answer fixtures, independent Boolean oracle, defensive errors/races, reviewed artifact parsing, offline scope, maximum batch/reimport and mobile/desktop checks are recorded. Public asset/runtime byte checks and public real-AI execution are release gates, not inferred from a branch push.

React + Vite. `npm run predeploy` builds this app. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Publish via root `daily_app2` predeploy/deploy**, not individual deploy. Base: `/daily-app2/20261122-12/`. Existing collection guard, entries and deployment-sharing rules are preserved. No digest is sent by the builder.
