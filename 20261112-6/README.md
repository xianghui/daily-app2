# Delegate Loom

A chapter-to-delegate worksheet for club conference coordinators. Informal aggregate membership reports often use descriptions rather than the chapter's canonical title. Real MiniLM embeddings propose chapter identities; mandatory human review precedes exact proportional seat allocation. This is distinct from ranked-ballot counting, staffing assignments and inventory analysis: it apportions a fixed pool of whole delegate seats to approved membership shares.

## Workflow

1. Load a synthetic **Workshop chapters** or **Creative chapters** example, paste JSON, or import `.json`. No real personal membership lists are included or needed.
2. Set `name`, `seats` (1–100), `catalog` (2–6 chapter objects with unique `id`, `title`, `description`), and `records` (1–24 disjoint reports with unique `id`, `text`, integer `members`). Use one census date and count each person once across all cohorts. Zero counts allowed. Counts are explicit user inputs, not extracted or invented by AI.
3. Explicitly **Load AI & reconcile reports**. File-level download progress and four-text inference-batch progress are shown; cancel terminates the worker; retry starts fresh. Network/runtime errors and the 180-second timeout leave no fabricated results.
4. Inspect original text, all candidate descriptions and cosine similarities. Correct chapter and count, add notes and approve or hold **each** report. Undo restores review edits. Input edits cancel old runs and clear reviews. Review edits invalidate applied exports.
5. **Apply reviewed worksheet**. Held reports remain in the audit and their member counts are shown separately, but they do not claim seats. Resolve holds before adopting an allocation. All-held/all-zero sets cannot produce a seat allocation; approve a positive count or fix the inputs.
6. Download the current reviewed JSON audit, all-report Audit CSV, chapter summary CSV or Markdown worksheet. Copy uses identical Markdown. Discard clears the applied worksheet. Reimporting exported JSON restores original input only, never old approvals.

## Real AI, runtime and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Transformers.js **4.3.2** (Apache-2.0), with ONNX Runtime Web **1.31.0-dev.20260914-8d85527a0** (MIT), runs normalized mean-pooled 384-dimensional feature extraction on WASM CPU. Cosine similarity ranks chapter candidates. This materially replaces exact-title lookup for paraphrased chapter reports; there is no canned output or heuristic AI fallback.
- Initial internet requirement: approximately **50 MB** (~23 MB model/tokenizer downloads from huggingface.co / hf.co and their download CDN redirects, plus ~27 MB same-origin WASM). Requires WebAssembly SIMD, module workers and several hundred MB RAM. No WebGPU requirement. Tested in desktop Chrome; physical phones, Firefox/Safari and low-memory devices unverified.
- Vite bundles app code and the worker. The WASM module factory is under `runtime/`. The binary is the byte-identical shared `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that app's asset in combined deployment. This avoids duplicating 26,861,777 bytes, not a server inference call.
- Default processing is entirely on-device. Network requests download model/runtime files; they do not upload reports or include report text in URLs. No API keys, credentials, paid service, analytics, remote inference option or sending/account integration. Imported instructions remain data. Browser request capture verifies GET-only download traffic with no bodies on the tested workflow.
- Worker source, WASM factory and binary are explicitly cached with Cache API; Transformers.js caches model files. **Only tested offline scope: another real inference with a fresh worker inside the already-open, warmed page. Offline reload/navigation is not promised.** Private mode, disabled Cache API or eviction can require internet again. Clear site storage to clear caches. Report data is in React memory only; closing the page loses it unless exported.
- Context/format bounds: descriptions ≤400 characters, chapter titles ≤80, IDs ≤40; four texts per chunk, 256-token context, validated finite normalized vectors of the correct dimensions/count. Inputs ≤18,000 JSON characters; bounded audit reimport ≤1 MB; file imports `.json` only. Counts 0–1,000,000. Invalid files, duplicates, malformed model vectors, worker construction/errors, missing WASM, timeout and download errors are explicit. Run identities cover file reads, worker downloads and responses, preventing cancelled/stale runs from replacing current data.

## Deterministic apportionment and comparison

Approved reports are summed by reviewed chapter. For total approved membership M, pool S, and chapter membership m:

- Exact quota = m × S / M; assign its integer floor.
- Assign the remaining seats in descending order of **integer remainder** `(m × S) % M`; cutoff ties are reported and resolved by chapter ID ascending (case-sensitive). No floating rounding enters ordering. Zero-member chapters receive zero seats.
- Equal baseline distributes S seats round-robin among positive-member chapters in original catalog order.
- Displayed absolute quota deviation is the sum of `abs(seats − quota)` across chapters, in seat units. Lower means closer to supplied membership shares, **not** universal fairness, AI accuracy or measured time saved. Baseline exact-title link coverage and AI proposal coverage are also reported, never fabricated confidence.
- All seats are conserved, all chapters and all source records retained. Approved plus held members equals all reviewed members. The original input is retained separately from corrections. Numbers stay numeric in CSV; strings are quoted/escaped and leading formula characters protected, including multiline notes. JSON preserves exact strings and reviewer state; Markdown escapes table pipes and HTML.

## Limitations

Semantic similarity is not chapter identity, eligibility or census verification. Similar names, negation and unrelated text can mislink. Review every proposal. The model is English-focused and truncates lengthy/token-dense descriptions. The app cannot detect a person counted twice across differently identified reports. No minimum-seat guarantees, caps, elections, appointments or governance-rule selection. Hamilton can exhibit apportionment paradoxes when the pool/population changes. Verify your organization's rules, census and tie procedure before using the worksheet. No personal data is required; aggregate reports are sufficient.

## Build, validation and publishing

`npm install`, `npm run predeploy`; base `/daily-app2/20261112-6/`. Required per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; **publish only with the root combined-site workflow**, never this app's deploy command.

See [VALIDATION.md](VALIDATION.md), machine-readable reports and executable tests for actual outcomes. Tests use the production bundle and real headless Chrome. Failure fault injection is kept separate from successful real-model checks. Development preview/build alone is not an inference test. `browser-test.cjs` accepts TEST_URL/REPORT for combined/public validation; artifacts are independently parsed by Python. Root gallery/deployment instructions remain in the parent README.
