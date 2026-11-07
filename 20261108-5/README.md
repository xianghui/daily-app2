# Evidence Split

A local-AI dataset partitioning workbench for ML evaluators. Input short labeled records; find paraphrase groups before allocating train/evaluation rows. Unlike a post-hoc leakage audit, this constructs a size-targeted partition with indivisible, human-reviewed semantic components.

## Workflow

1. Choose synthetic support snippets/research abstracts or paste/import JSON: `{target:33, threshold:0.65, records:[{id,text,label},...]}`.
2. Set evaluation percent (integer 10–50) and cosine threshold (0.45–0.95) in the JSON. Lower thresholds group more records and risk overmerging.
3. Explicitly load real AI. Read model loading and chunk progress; cancel terminates the worker. Nothing runs remotely.
4. Inspect exact neighbor snippets/similarities. Review each row's group. Same group names must stay together. Rename groups to merge/split, reject the proposed group into a singleton, add notes, accept or hold. Undo reverses up to 40 review edits. Source edits discard derived results.
5. Apply reviewed partition. Exact subset-sum allocation minimizes absolute distance from requested evaluation row count among nonempty, non-full group subsets. Ties choose fewer evaluation rows, then first encountered groups. Held rows are preserved but excluded from both output partitions after allocation, so final counts can differ. Labels are retained but not stratified.
6. Download complete JSON or CSV, or copy CSV. Every row has `split` train/evaluation/hold. Filter by this field for actual datasets; never use hold records for either split. All source records, groups, notes and decisions survive. JSON includes original input, source-linked detected pairs and computed metrics. Reimporting JSON intentionally restores original input only, not review approvals. CSV uses RFC-style quoting and prefixes formula-like strings (`= + - @ tab CR`) with an apostrophe; JSON retains exact values.

All pending decisions block export. One indivisible component blocks a nonempty two-way split rather than inventing one. Detected links crossing manually edited groups remain warnings, not invisible overrides.

## Real AI and deterministic boundaries

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX q8. Model host revision is the upstream default, not pinned; future upstream changes may affect scores.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), bundled worker, WASM CPU. No WebGPU dependency or fake fallback.
- AI runs normalized mean-pooled, 384-dimensional embedding inference on each source text, batches of 4, max 256 tokens. Results validated for record count, dimension, finite values and normalization.
- Deterministic steps: cosine comparisons, threshold graph/connected components, human review, exact subset-sum allocation, row conservation and exports. The model cannot execute instructions, fetch user-specified URLs or invoke tools.
- Initial load: approximately 23 MB model weights plus tokenizer/config files from Hugging Face and its download CDN; approximately 27 MB WASM plus bundled code/factory from this collection. Browser memory recommendation ~300 MB; not a guaranteed device requirement measurement.
- Runtime binary reuses byte-identical immutable `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes; SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Root deployment must preserve this older app. Factory/worker are local to this app.

## Privacy, caching and supported devices

No keys, providers, server inference, analytics or content uploads. Only explicit model/runtime file downloads. Inputs/results remain in React memory until tab closure/reload; exports are the user's explicit files. No real personal data is included. Model/runtime bytes use browser Cache API; erase site storage to remove them. Downloads may be evicted by browser policy.

Current browsers supporting WebAssembly, module workers and Cache API are required. Tested real Chrome desktop CPU inference, including network-blocked fresh-worker inference in the already open tab after online loading. **Offline app reopening/reloading is not supported or claimed.** Physical phone performance and Firefox/Safari not tested. No hidden GPU path. Failure messages offer retry or a current WASM-capable browser, never heuristic replacements. Run timeout is 180 seconds; input changes/cancellation terminate workers and run IDs prevent stale completion or file imports from overwriting new input.

Limits: 2–40 records, unique nonempty IDs ≤50 chars; nonempty text ≤600 chars, labels ≤80 chars, input JSON ≤45,000 chars, file ≤500 KB, notes ≤500 chars, reviewed groups ≤50 chars. Longer tokenized texts are truncated to 256 tokens.

## Honest limitations and metrics

Semantic closeness is not equivalence or proof of leakage. Observed challenge: “Reset the password…” and “Do not reset the password…” were grouped at cosine 0.8777 despite opposite operational meaning. Negation, quantities, specialized concepts and multilingual material can mislead the small English model; transitive links can merge distinct topics. It does not inspect images, files, labels, timestamps or provenance, and does not guarantee class balance. Split by source/customer/time manually when necessary. Mandatory human review is not optional certification.

Computed baseline takes the first requested N rows; displayed cross-pair counts use the same AI-detected graph for baseline and reviewed allocation. They are **not measured accuracy, time savings, or a claim that all real leakage was found**. The allocation comparison is computed before excluding holds, which is disclosed in the UI. Final exported train/evaluation/hold counts are also computed from actual outputs.

See [VALIDATION.md](VALIDATION.md), browser/core/extra tests and machine-readable reports for observed outcomes and explicit untested scope.

## Development and publishing

React + Vite. `npm install`, `npm run dev`; `npm run predeploy` builds production. Base `/daily-app2/20261108-5/`. Required per-app deploy script retained but **publish only through root predeploy/deploy**, never app deploy. `python3 serve-test.py` serves production at port 6245 with the shared binary route. Browser tests use the workspace's Playwright/installed Chrome. Core tests do not substitute for real browser inference.
