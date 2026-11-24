# Dialect Desk — local-AI CSV handoff reconciliation

For analysts receiving many small delimited-text samples with informal source notes. The bottleneck is choosing the right delimiter/header/column contract without accidentally splitting quoted delimiters or embedded newlines. AI retrieves the source contract; mandatory human review and strict deterministic parsing yield usable string tables.

## Workflow

1. Choose **Contacts & stock** or **Research & instruments**, paste source JSON, or import a source/audit `.json` file.
2. Set 2–5 contracts: `id`, English `description`, and `target` JSON string with `delimiter` (`,`, `;`, or actual tab), `columns` (1–12), and boolean `header`. Records have unique `id`, English source `context`, and `raw` delimited text. The examples are entirely synthetic.
3. Explicitly click **Load AI & reconcile**. Review every suggested contract, its cosine evidence and the cell preview. Source notes are data, not instructions. Delimiters are not autodetected and model suggestions are not proof of correctness.
4. Correct sample text or contract selection, add multiline reviewer notes, approve each table or hold it. Edits renew approval where appropriate and invalidate all exports; undo restores the previous review, never modifies originals. Change the source to edit contract definitions and run again.
5. Apply the reviewed scenario. Blocked/held samples remain in the complete audit but cannot enter approved tables. Inspect computed naive-split differences.
6. Download complete JSON/CSV/Markdown, copy Markdown, or download **Tables JSON** containing approved arrays of exact string cells, header arrays and canonical CSV strings. Audit CSV guards formula-leading text; JSON is the exact-fidelity format. Table CSV strings preserve formulas as data, not spreadsheet-safe executable files. Use text import protections if extracting them into spreadsheet software. Importing an audit restores originals only, requiring fresh inference/review.

No external sending, URL fetching, file changes, account changes or remote inference integration.

## Real AI and static runtime

- `Xenova/all-MiniLM-L6-v2`, quantized q8 ONNX, Apache-2.0; source https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Normalized, mean-pooled **384-dimensional embeddings** compare contract descriptions to source contexts. Similarity ranking materially selects parsing contracts; changing only the context can change whether the same first row is a header or data. No canned model responses or heuristic AI fallback.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web WASM CPU, MIT. No WebGPU or API key required. Four-text chunks. Shared pipeline tokenizer has model_max_length 512; the pipeline's supplied max_length is not claimed as an enforced 256-token limit. Descriptions/contexts are at most 200 characters each, keeping this English task bounded.
- First explicit load needs internet: approximately **23 MB model weights + 27 MB WASM**, plus code/tokenizer downloads, from Hugging Face and its CDN. Downloads contain model/runtime files, not user content. App code/CSS and immutable shared worker/runtime are same-origin. No analytics, content uploads or credentials.
- Reuses `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps and URLs. Hashes in `runtime-provenance.json`.
- Recommend current desktop Chrome with WebAssembly SIMD, module workers, secure origin and several hundred MB free RAM. CPU is the default, not an untested GPU fallback. Physical phones/other engines untested. Before loading, the UI states download cost, privacy, requirements and limits. Progress, cancellation, 180-second timeout and actionable network/runtime errors are visible. Cancellation terminates workers; run IDs and file-read guards prevent stale writes.
- Cache API stores worker, factory and WASM; Transformers.js caches model assets. Browser eviction/private-mode quotas can break caches. **Only fresh-worker inference in an already-open, warmed page is tested offline**. Cold offline navigation/reload is unsupported. Inputs/reviews remain in memory unless exported. No user keys are requested or stored.

## Parsing contract and limits

Double quotes enclose whole fields; doubled quotes escape quotes. LF/CRLF separate records; quoted newlines remain exact. A final line break terminates a record rather than adding one; interior blank lines are retained as one empty field and must satisfy the reviewed width. Header arrays preserve duplicate/blank names without overwriting cells. Empty strings, leading/trailing spaces and numeric-looking strings remain strings. No trimming, coercion, encoding inference, comments, backslash escapes or ragged rows. Reject unclosed/stray quotes, junk after a quote, lone CR outside quotes, NUL and malformed Unicode. No partial approved tables.

2–5 contracts; 1–24 samples; source JSON ≤50,000 characters; description/context ≤200; IDs ≤60/80; raw samples ≤2500; ≤200 parsed records including header per sample; 1–12 columns; each cell ≤1000. Contract JSON ≤6000 characters, ≤500 nodes/depth 8; reviewer note ≤2000. Source/audit file envelope ≤4 MB, but restored originals still face the source limits. Formats other than JSON envelope are unsupported; paste CSV into `raw`, not a file picker pretending to read spreadsheets. No Excel binary or encoding detection.

## Honest comparison and limitations

The baseline splits text on line breaks then delimiters without recognizing quotes. The app counts samples and row positions where the reviewed strict result differs; counts include header rows and missing/extra baseline rows. These are actual computed preservation differences, not an accuracy percentage or measured time saved. The model only retrieves a supplied contract. It cannot infer undocumented formats or verify a source description agrees with that contract. Similar/negated descriptions can mislink, hence mandatory review.

## Development and validation

`npm install`; `npm run predeploy` builds React + Vite with base `/daily-app2/20261125-4/`. Per-app `predeploy`/`deploy` and gh-pages remain present, but publish the **combined site from the repository root**, never this app alone. See `VALIDATION.md` for observed real-browser inference, independent Python CSV oracle, reviewed downloads, offline scope, defensive tests and publication status. Browser test scripts use the installed workspace Playwright and real Chrome.
