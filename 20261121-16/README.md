# Backdoor Studio

A local-AI pre-analysis worksheet for research analysts repeatedly reconciling informal causal-diagram notes. Input is a variable dictionary plus directed arrow assertions; the bottleneck is inconsistent names and unchecked “control for everything” plans. Real MiniLM inference proposes canonical endpoint identities. Humans verify the links and causal assumptions. Exact graph checks then enumerate sufficient backdoor-adjustment sets for the **total effect**, with complete JSON/CSV/Markdown and Graphviz DOT exports. No dataset analysis, effect estimates or external actions.

## Workflow
1. Paste source JSON, import `.json`, or select **Training study** / **Website pilot** synthetic teaching examples. Specify title, exposure/outcome IDs, observed/unobserved variables and asserted directed arrow endpoints as descriptions. Directions and observed flags are user-supplied assumptions, NOT discovered by AI.
2. Click **Load AI & reconcile**. Initial model/runtime downloads require internet; progress and real embedding batches are shown. Cancel terminates the worker; retry creates a new worker.
3. Review both endpoints AND the asserted direction for every arrow. The full dictionary, source snippets, AI endpoint IDs and all cosine scores remain inspectable. Correct IDs, write multiline notes, approve or hold; undo restores the prior review state.
4. **Apply reviewed graph** rejects pending arrows, self-loops, duplicate arrows and cycles. Any held arrow marks the graph incomplete and withholds all adjustment recommendations. Exports still preserve held evidence and clearly label incomplete DOT.
5. For a complete reviewed graph, inspect all inclusion-minimal sufficient sets, the no-adjustment baseline and an “all observed variables” baseline. Descendants of the exposure violate the sufficient criterion. An open ancestral-moral witness is explicitly not an original directed causal path.
6. Download JSON / Audit CSV / Markdown / Graph DOT or copy the current worksheet. Any review/input edit clears the applied snapshot and disables exports. Importing a prior JSON audit restores originals only; renew AI and reviews.

## Real AI / runtime / license
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX; mean-pooled normalized 384-dimensional embeddings.
- Transformers.js **4.3.2** (Apache-2.0); ONNX Runtime Web (MIT); **single-thread WASM CPU**. No WebGPU, key, paid service or server inference. No optional provider integration.
- Cosine retrieval matches each free-text endpoint to dictionary descriptions, materially resolving paraphrases beyond literal matching. No causal relation discovery, direction inference, correctness proof, calibrated confidence, or automatic approval. Out-of-domain text and negation still receive a top match, so manual review is mandatory.
- Approximately **23 MB model/tokenizer + 27 MB CPU runtime**, plus app/worker code, first use. Model assets come from Hugging Face/CDNs after explicit loading. Host `main` revision is unpinned; the observed revision and tokenizer ceiling are recorded in `runtime-dependency-audit.json`.
- Reuses immutable, byte-verified same-origin runtime assets: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating published apps/paths. This avoids redeploying duplicate runtime binaries.
- Four texts per chunk. Maximum 9 dictionary entries +36 endpoints =45 texts /12 chunks. Each text ≤300 characters; actual tokenizer ceiling **512 tokens** (the shared pipeline's supplied max_length option is ignored by feature-extraction). Vector count, dimension, finite values and unit norms are validated before use.

## Exact deterministic method
The input must be a directed acyclic graph. Enumerate every subset of observed variables other than exposure/outcome that is not a descendant of exposure. At most seven candidates →128 subsets. Remove arrows **out of** the exposure to form the backdoor graph. For each conditioning set, retain ancestors of exposure/outcome/conditioned nodes, moralize the ancestral graph (connect parents of common children), remove conditioned nodes, and test undirected exposure–outcome connectivity. Separation plus no exposure descendants passes this sufficient backdoor criterion. Return all passing sets and those minimal by inclusion, not just smallest cardinality.

The all-observed baseline can fail because it contains descendants and/or because conditioning opens a collider path. The separate unadjusted baseline is also checked. Counts are exact subset/set counts on the assumed graph, **not** observed accuracy, elapsed time, savings, or effects. Synthetic training example: `{C}` passes while `{C,K,M}` fails; website example: no sufficient observed set because latent `L` remains a common cause. No-set does **not** imply no other identification method could work.

Assumptions: arrows/directions and common causes adequately represent the causal structure; relevant latent causes explicitly included; total-effect question, not direct effects. The app cannot establish those assumptions, temporal ordering, positivity, model specification or estimand validity. It does not infer arrows from correlations, identify front-door/instrumental effects, or produce regression/effect estimates. Missing causes or mistaken arrows can reverse conclusions. Use the exports as an inspectable planning worksheet, not evidence of causality.

## Formats / bounds
Source object:
- `title`: nonempty ≤120 characters; `exposure`, `outcome`: distinct dictionary IDs.
- `variables`: 3–9 `{id,text,observed}` records, observed a boolean.
- `arrows`: 1–18 `{id,from,to}` records, from/to free-text endpoint descriptions; order means from → to.
- IDs unique within each list, letter/underscore-first then letters/digits/underscore ≤40. Descriptions nonempty ≤300 characters. Paste ≤60,000 characters; original/audit `.json` file ≤2 MB; review note ≤2,000 characters.

JSON preserves every original variable/arrow, every review/hold/note, AI evidence, approved graph and all criterion results. CSV is one row per original arrow, with reviewed IDs and decisions; quotes/newlines escaped, formula-leading text prefixed with apostrophe. JSON/Markdown remain lossless. Markdown includes all variables/reviews and the worksheet. DOT includes every variable and approved arrow, observed/unobserved styling, exposure/outcome shapes, and held-arrow comments; Graphviz parsing/reopening is tested. DOT is a graph artifact, not a dataset or analysis script. Titles/labels are quoted, not executed.

## Privacy / devices / caching
Content remains in browser/worker memory. No uploads, telemetry, credential use, persistent content storage or remote inference. Only static GET downloads leave the browser; downloading weights is distinct from uploading user content. Imported instruction-like text has no tool authority. Exports contain the user's data; all committed fixtures are synthetic.

HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB free RAM required. Desktop Chrome CPU tested with GPU disabled. Phone viewport UI tested at 390/320 CSS px; physical phones, constrained-memory devices and other browser engines unverified.

Cache API retains worker source, factory/binary and model files subject to eviction/private-mode limits. **Tested offline scope: fresh-worker real inference in an already-open warmed production page with all network blocked.** No promise of offline reload/startup. Internet may be needed after cache eviction or host changes. Unsupported runtime, network/download failure, timeout (180 seconds), worker errors or malformed output show retryable errors; no fake/deterministic substitute. Run IDs guard late worker/fetch/import responses; cancel/input change terminates workers and clears stale results.

## Development / verification / publishing
React + Vite, base `/daily-app2/20261121-16/`. `npm install`, `npm run dev`, `npm run predeploy`. Required scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`. **Publish only through repository ROOT combined-site workflow**, never the per-app deploy.

Tests: `node core-test.mjs` (independent path-enumeration oracle); `node browser-test.cjs` (actual neural inference); `node defensive-test.cjs`; `node edge-test.cjs`; `node cold-cancel-test.cjs`; `python3 artifact-test.py`; `node dot-test.mjs`; `python3 runtime-audit.py`; `python3 security-audit.py`. Browser scripts use the workspace Playwright install and local production server at port 7116; `APP_URL` selects assembled/public base. Graphviz WASM is a dev-only test dependency, not shipped. See `VALIDATION.md` and machine-readable reports for actual outcomes and untested limits.

Collection maintenance: adding this app crosses the existing conservative 1 GB combined-site limit without sharing another duplicate. Deploy-only Manifold sharing is extended for `20261029-1` → existing immutable `20261028-24`, after exact byte equality. Source builds and compatibility JS URLs remain intact; actual older-app PNG/STL imports, valid STL exports and fingerprints are checked locally and publicly. The 1 GB guard is unchanged.
