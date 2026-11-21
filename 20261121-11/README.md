# Transition Trail

A browser-local AI worksheet for manual QA coordinators. Rough screen names such as “basket” and “shopping cart” often disagree across action notes. Neural semantic matching proposes canonical screen IDs; mandatory human review precedes an exact closed walkthrough covering **every approved directed action**, including necessary repeated connectors. No tests execute, no website is opened and no remote accounts change.

## Workflow

1. Choose **Shop checkout** or **Library workflow**, paste source JSON, or import a source/audit `.json`.
2. Define a state catalog, explicit start ID, rough from/to state descriptions and positive integer estimated execution minutes. Include explicit return/reset actions; the app never invents transitions.
3. Read the download notice, then explicitly **Load AI & reconcile**. File download progress and four-text inference chunks appear. Cancel terminates the worker.
4. Inspect original snippets and cosine-ranked state evidence. Correct states/minutes, add multiline test instructions or prerequisites, and approve, hold or exclude **every** action. Similarity is not confidence. Undo is available.
5. **Apply reviewed transitions**. The approved graph must connect every catalog state in both directions; otherwise output is blocked with a repair instruction. The solver computes shortest paths, exact integral minimum-cost degree balancing and an Euler circuit from the declared start. Self-actions and parallel actions supported.
6. Compare against source-order unvisited-action traversal with shortest existing connectors and a return to start. Both cover exactly the approved action set. Minutes are supplied estimates; differences are not measured time savings or accuracy.
7. Export current JSON, complete Audit CSV, ordered Walk CSV or Markdown checklist; copy Markdown. Holds/exclusions survive audit exports but are not executed in the route. Any review edit invalidates exports until reapplied. Audit reimport restores originals only, requiring renewed inference/review.

## Distinct process

Unlike Round Circuit (`20261109-12`), which visits checkpoints, this solves directed **arc coverage**: visiting every screen does not establish that every action has been tested. Unlike Span Meadow (`20261121-10`), which selects a minimum subset of undirected edges for connectivity, every approved edge here is compulsory, and repeated traversal is necessary to obtain a closed manual route. The exact method is directed Chinese postman, not a renamed spanning tree or traveling-salesperson tour. Gallery source names/descriptions were reviewed; the audit records the closest prior workflows.

## Real AI, license and runtime

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, approximately **23 MB** model files on first run.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), **WASM CPU** feature extraction, normalized mean pooling, 384-dimensional embeddings. No WebGPU or API key required. Approximately **27 MB** additional CPU runtime.
- Texts processed four at a time, ≤300 characters each; actual tokenizer ceiling 512 tokens. The runtime feature-extraction pipeline does not enforce its nominal `max_length:256` argument; no stricter token cap is claimed. Model revision `main` is unpinned; observed revision and runtime hashes are in `runtime-dependency-audit.json`.
- Immutable same-origin shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. These originating paths must remain published. Worker code/settings inspected; dependencies byte-audited.
- AI materially resolves each informal endpoint against semantic state descriptions. Deterministic steps: finite normalized-vector schema validation, cosine ranking, editable reviews, shortest paths, min-cost flow, Euler traversal, route conservation checks, baseline and exports. No hard-coded AI responses or heuristic fallback on model failure.

## Privacy, download, device and offline scope

No credentials, paid provider, telemetry, remote inference or user-content uploads. Only model-file GET requests go to Hugging Face/CDN; runtime/app assets are same-origin. No model requests before explicit loading. Source and reviews remain in memory until exported. Imported instructions remain text data with no tool authority. Network audits store host/path/query-key names only, never signed download query values.

Requires secure context, module workers, WebAssembly SIMD, Cache API for cached operation and several hundred MB free RAM. Tested in desktop Chrome with GPU disabled. Physical phones, other engines and low-memory devices are unverified; phone-sized viewports tested. First use requires internet. Cache API stores worker, runtime factory, WASM and model files. **Tested offline scope:** after a successful run, a fresh worker in the same already-open warmed page performs another real inference with the entire browser context offline. Offline reload/navigation/app-shell startup is **not** promised. Cache eviction and private mode can require redownload.

Run identities guard source edits, delayed file reads, worker-source fetches and worker results. Cancel terminates the worker; 180-second timeout. Failed downloads, unsupported workers/WASM, worker errors, malformed messages/vectors and timeouts leave no fabricated results. Correct the network/device/input and explicitly retry. A graph without explicit return paths blocks output instead of inventing resets.

## Formats and hard limits

Source JSON: 1–60,000 characters; context 1–300 chars. `nodes`: 2–10 `{id,text}` states, text 1–300 chars. `start`: known state ID. `paths`: 1–24 `{id,from,to,minutes}` actions; descriptions 1–300 chars; integer minutes 1–1000. IDs are unique within each list, letter first then letters/digits/underscore/hyphen, ≤40 chars. Source/audit `.json` import ≤2 MB; audit envelope may be larger than source bounds. Maximum 58 texts / 15 chunks. Notes ≤1000 chars.

JSON schema `transition-trail/v1` includes originals, complete reviews/evidence, exact route, degree imbalances, added actions, baseline and comparison. Audit CSV preserves every original/reviewed record, decision, note, visits and neural evidence. Walk CSV contains ordered steps, every repeated traversal and current reviewed instructions. CSV uses quoted cells, doubled quotes and CRLF; formula-leading strings are prefixed with apostrophe, including multiline formulas; genuine numeric minute fields stay numeric. JSON preserves originals losslessly. Markdown contains the checklist and complete review ledger. Audit import intentionally restores originals, not approvals.

## Assumptions and limitations

Screen descriptions must encode all relevant state and actions must be safely repeatable. Authentication, data mutations, prerequisites, inventory or destructive actions can make a simple screen-only graph invalid: use synthetic/sandbox test accounts and check these independently. The app is a worksheet, not a test executor or full test-coverage guarantee. Held/excluded actions remain untested. Execution minutes are user estimates; no device-performance or measured time-saving claim. Semantic similarity can confuse similar screens, negation, paraphrases and multilingual shorthand; mandatory human verification is essential. Small fixtures do not establish universal accuracy.

## Development and publication

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261121-11/`. Per-app gh-pages and `predeploy: npm run build` / `deploy: gh-pages -d dist` retained. **Publish only from the repository root** using combined `npm run predeploy` / `npm run deploy`, never this app's deploy script. Existing shared runtime paths must be preserved.

See [VALIDATION.md](VALIDATION.md) and test sources/reports for observed checks and remaining device limitations.
