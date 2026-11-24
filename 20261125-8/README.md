# Decision Pair

A local-first input-design worksheet for QA analysts reconciling mixed informal decision-test handoffs. Real MiniLM embeddings retrieve the relevant supplied decision specification for each case; mandatory human review confirms the link and Boolean inputs. Exact truth tables expose missing unique-cause independent-condition witnesses that a both-outcomes-only shortcut misses. Export usable expected-input fixtures, separately labelled unexecuted additions and complete audit artifacts. **No tests or imported code are executed. No certification is claimed.**

## Workflow

1. Choose either synthetic example, paste a source JSON envelope or import `.json`. `plans` contains 2–5 `{id, description, target}` decision specs; `target` is JSON **text**, not an object: `{ "expression":"a & (b | c)", "conditions":{"a":"Subscription current","b":"Training complete","c":"Supervisor permission"}, "budget":4 }`. `records` contains 1–24 `{id, context, raw}` case notes. `raw` is JSON text with exactly the described condition keys and true/false values.
2. Edit descriptions, conditions, expressions and **per-decision proposed-addition budgets** in the envelope. Then explicitly click **Load AI & reconcile**. Nothing is inferred or downloaded automatically.
3. Inspect source notes, original inputs, cosine-ranked alternatives and the selected decision specification. Correct the decision or truth JSON if needed. Approve every case or hold uncertain ones. Input/link changes renew approval; every review edit invalidates prior export snapshots. Undo retains the last 100 edits. Original inputs never change.
4. **Apply reviewed scenario**. Inspect both-outcome design coverage and exact single-condition, output-changing witness pairs with source IDs. Invalid approved inputs remain blocked. Duplicate vectors retain every record ID.
5. Inspect budget-bounded proposed additions in each decision card. These are **unexecuted mathematical suggestions**, never counted in existing reviewed coverage. They do not claim minimality or real-world feasibility. Review feasibility and run them in your own test system.
6. Download complete JSON, all-record CSV, Markdown, or **Fixtures** (approved valid inputs/expected outcomes, source-linked witnesses, separate unexecuted proposals). Copy Markdown is available. Audit reimport restores originals only, deliberately not approvals or proposed executions.

## What real AI does

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 quantized ONNX, Apache-2.0. Approximately **23 MB weights**, plus config/tokenizer. First explicit load requires internet to Hugging Face and its redirected model CDN. No API key, paid service or agent provider integration.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web WASM CPU, MIT. Approximately **27 MB WASM** plus 0.6 MB worker/factory; application code is bundled same-origin. Normalized 384-dimensional mean-pooled embeddings compare English case contexts with supplied decision descriptions. This materially changes which expression and witness group a case enters; context-only fixture checks change expected output while keeping Boolean inputs unchanged.
- Four-text chunks. The shared worker passes max_length 256, but this runtime feature-extraction pipeline tokenizes with its model cap of 512; application descriptions/context are independently bounded to 200 characters.
- AI supplies vectors only, not generated JSON or invented evidence. Vector count, 384 dimensions, finite values and normalization are validated. Ranking, Boolean evaluation, witness pairs, counts, proposal selection, review filtering and export are deterministic.
- Similarity is not confidence, correctness or logical entailment. Both tiny synthetic batches matched all 12 intended specifications versus 4/12 first-spec baseline. A competing-negation probe misrouted to access rather than dispatch. Mandatory review remains essential; no general accuracy or productivity claim.

## Exact checks and limitations

Grammar: 2–5 named conditions `a`–`e`, each appearing **exactly once**, with `!`, `&`, `|` and parentheses. Precedence is NOT > AND > OR. No constants, repeated condition occurrences, executable JavaScript, imported programs or expression evaluation via `eval`. A bounded recursive parser evaluates an explicit syntax tree. Every case must supply exactly the condition keys as JSON Booleans; strings/numbers, missing/extra/duplicate keys, nested values and invalid JSON are blocked.

Enumerate at most 32 truth combinations per decision. An existing unique-cause witness pair differs in exactly one condition and has different expected decision outcomes. Pairs retain source IDs (including repeated-vector cases). The baseline merely requires both expected outcomes. The difference is a concrete **test-input design** gap, not measured execution coverage. Supplied expressions may not match actual implementations; no actual observed outcomes, traces, short-circuit evaluation or masking MC/DC are assessed. All Boolean combinations are assumed feasible. This is not a tool qualification, safety assessment or certification.

Greedy proposed additions repeatedly choose a missing witness pair requiring fewest additional vectors, then condition order / ascending mask to break ties. Each decision has an independent 0–12 addition budget. Proposals are deduplicated, mathematically evaluated and marked `executed:false`; they never inflate existing coverage. Not globally optimal; correlations/constraints among conditions are not modelled. A budget may leave gaps.

Limits: source envelope ≤50,000 UTF-16 units; decision IDs ≤60 and unique; case IDs ≤80 and unique; descriptions/contexts ≤200; raw input ≤2500; reviewer notes ≤2000; target JSON ≤1500; expression ≤128; condition labels ≤120. Import envelope ≤4 MB, with original-source limits still enforced. No input coercion or silent repair. Audit exports preserve exact original strings. CSV quotes commas/newlines and neutralizes leading spreadsheet formula characters with an apostrophe (JSON remains exact).

## Runtime assets, privacy, devices and offline scope

Shared immutable assets, inspected for protocol and dependency paths and checked by hashes in `runtime-provenance.json`:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve those older app builds/paths. No runtime imports from an application-code CDN. No API credentials, analytics, remote inference, content uploads or endpoint actions. Only model/runtime asset GET downloads leave the device. Notes, decisions and reviews remain in browser memory unless exported; exported audits may contain sensitive user-supplied content. Imported text is data, not instructions or tool authority. Synthetic fixtures use no personal documents or real accounts.

Recommended: current desktop Chrome on a secure origin, WebAssembly SIMD, module workers, Cache API and several hundred MB free RAM. CPU/WASM is the tested default with GPU disabled; WebGPU is not required. Other browser engines and physical-phone inference remain untested; phone-width layout checks are emulated viewports only.

Worker source, factory and WASM use Cache API; model files use Transformers.js browser caching. Cache storage can fail or be evicted. **Tested offline scope: a new worker performs real inference in an already-open warmed page after a complete online run with all network disabled. Cold offline navigation/reload is unsupported and not claimed.**

Cancel aborts worker-source download and terminates workers; monotonically changing run IDs prevent late messages, file reads or fetches from replacing newer input. A 180-second timeout and visible errors allow retry. Worker/model download failures, unsupported runtime, malformed messages/vectors and worker errors never yield fabricated proposals.

## Build and publish

React + Vite, base `/daily-app2/20261125-8/`. `npm install`, `npm run predeploy`. Required app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Do not deploy this app by itself.** Publish from the repository root with the combined collection workflow. Deploy-only byte-identical geometry runtime sharing adds `20261106-2` → `20261028-24` to preserve the unchanged 1 GB site limit; source builds and compatibility URLs are retained and real legacy imports/exports are regression-checked.

See [VALIDATION.md](VALIDATION.md) for observed tests/public status. Reproduction: `python3 validation-server.py` serves individual production dist trees on port 7597; run `node core-test.mjs`, `python3 independent-test.py`, `node browser-test.cjs`, `python3 artifact-test.py`, `node defensive-test.cjs`, `node async-race-test.cjs`. Workflow scripts accept `APP_URL` / `PREFIX` for assembled/public verification. Independent artifacts use Python JSON/CSV parsers and Boolean/pair enumeration. No digest is sent by this builder.
