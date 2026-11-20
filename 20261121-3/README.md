# Lag Loom

A local-AI trace-alignment worksheet for test engineers reconciling informal logger labels. React + Vite, built 2026-11-21 for `/daily-app2/20261121-3/`.

## Distinct workflow

The full galleries were inspected. Offset Harbor propagates explicitly supplied clock-difference bounds; Round Circuit plans walking rounds; Calibration Bench fits amplitude corrections. Lag Loom instead pairs **uniformly sampled signals**, semantically reconciles channel names, and exposes the best finite-window signed-correlation lag and its actual sample pairs. It never changes clocks, interpolates readings or commands equipment.

1. Choose either synthetic example, paste JSON or import a source/audit `.json` file.
2. Supply reference descriptions/arrays, trace notes/arrays, sample spacing and a bounded lag scan.
3. Explicitly click **Load AI & reconcile**. The real neural model embeds descriptions and notes; cosine ranking suggests a channel for each trace. Numerical signals are not sent to the model.
4. Inspect original source, reference arrays and model evidence. Edit the channel, numeric sample array or multiline follow-up; approve or hold every trace. Changes to samples/channel reset its decision. Undo restores review edits; source changes clear all suggestions and snapshots.
5. Apply reviewed checks. Held traces stay in the full audit but are not aligned. Invalid arrays block application. No forced offset is produced for constant overlap windows.
6. Export current applied JSON, Audit CSV, paired-sample Summary CSV or Markdown. Copy Markdown when clipboard permission permits. Any edit disables exports until reapplication. Audit reimport restores originals only, requiring fresh inference and approvals.

## AI, license, runtime and network

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, 384-dimensional normalized mean-pooled embeddings. Approximately 23 MB model/tokenizer download from Hugging Face and its CDN; model `main` is unpinned. Observed revision and exact asset hashes/sizes are in `runtime-dependency-audit.json`.
- Transformers.js **4.3.2**, ONNX Runtime Web WASM CPU. No WebGPU, API key, paid service, backend or optional provider. Approximately 27 MB WASM plus bundled worker/factory. Model similarity retrieves meanings beyond exact-word overlap; it is not confidence, channel authentication or delay estimation.
- Immutable same-origin worker: `20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM: `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve the originating app builds and paths in collection deployments.
- Worker source was inspected: feature-extraction q8/wasm, four texts per chunk, normalized mean pooling. The pipeline call-site `max_length` is not enforced; actual tokenizer ceiling is **512 tokens**. The app separately bounds each neural text at 300 characters, with at most 32 texts per run. All output vectors must have the expected count, 384 finite components and unit norm tolerance before ranking.
- The UI discloses download sizes, internet/device requirements, privacy/cache scope before loading. It reports actual model file progress and processed-text counts. Cancel terminates the worker; run identities ignore stale source fetches, file reads and messages. Runtime/network errors and a 180-second timeout produce actionable retry states, never deterministic fake classifications.

## Privacy, caching and supported devices

Default content travels only from the page to its local worker. There is no upload, telemetry, provider integration, credential input or persistent document storage. Imported instructions are inert text: no prompt executor or external tools exist. User-invoked downloads/copy are local artifacts. Network tests captured only GET asset/model downloads with no bodies; saved audits strip temporary signed query values. Built text assets were scanned for credential patterns and integrations inspected; this is not an exhaustive security certification.

Requires a secure-context modern browser with WebAssembly SIMD, module workers, Cache API and several hundred MB RAM. Actual inference was tested in desktop Chrome on CPU with GPU disabled, at 1440/390/320 CSS pixels. Physical phones, constrained-memory devices and other browser engines were not tested.

Worker source, WASM factory/binary and model assets are cached. **A fresh worker in an already-open warmed page performs actual inference with all network disabled.** Offline first visit/navigation/reload are not promised: no offline app-shell service worker is installed. Caches can be evicted or unavailable in private browsing; then reconnect and explicitly retry.

## Input and output contract

Source JSON is 1–40,000 characters:

- `context`: nonempty ≤300 characters; `stepSeconds`: finite >0 and ≤86400; `maxLag`: integer 0–8.
- `references`: 2–8 unique `{id, description, values}` channels.
- `records`: 1–24 unique `{id, note, values}` traces.
- IDs: letter-first, letters/digits/underscore/hyphen, ≤40 characters. Descriptions/notes: nonempty ≤300 characters.
- All arrays: same length, 8–64 finite numeric values within ±1e6. At least six overlapping pairs must remain at maximum lag. Equal spacing, compatible units and valid logger samples are supplied by the user, not inferred. No missing values or resampling.
- Source/audit import `.json` only, under 2 MB; audit originals still satisfy source bounds. Unsupported formats are rejected. Review array editors ≤4000 characters, review notes ≤1000, multiline supported.
- JSON preserves originals, reviewed arrays, model evidence, decisions, all lag candidates and selected sample pairs. Audit CSV preserves all original and reviewed trace values, holds and notes. Summary CSV lists approved candidate pairs, indices, signed lag in samples/seconds, baseline/best r and ambiguity. Constant traces have an explicit unavailable row. Markdown preserves a full source-review audit plus summaries.
- CSV quotes commas/quotes/newlines and protects string cells beginning with spreadsheet formula characters. Genuine signed numeric lags remain numeric. Artifacts are independently parsed and compared with reviewed browser downloads.

## Deterministic scan, baseline and limitations

At lag `k`, pair reference index `i` with trace index `i+k`, only within both arrays. Positive lag means the trace pattern arrives later. Compute centered Pearson correlation separately over each overlap. Rank the highest **signed** r, not its absolute value. Exact ties favor smallest absolute lag then negative lag; candidates within 1e-6 of the maximum are flagged ambiguous. Zero-variance windows are unavailable. Baseline is r at zero lag on the same reviewed arrays. The UI exposes all candidate r/overlap values; selected indices/values are exported without rewriting originals.

Different lags have different overlaps. This descriptive comparison is not a held-out quality gain, true clock offset, causal result or calibration certificate. Periodicity, trends, unrelated traces, short windows and scan-edge maxima can mislead. No accuracy/time-saved percentages are invented. Two planted examples are only tiny known-answer checks, not population accuracy. Negated text still links to a contradicted channel, so explicit source review is essential. No external actions occur.

## Validation and deployment

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed outcomes. `npm run predeploy` builds the app. The required per-app deploy script is `gh-pages -d dist`, but **publish only from collection root**, never this individual app. Root `npm run predeploy` assembles all apps; root `npm run deploy` publishes `deploy/`.

`core-test.mjs` checks 1,000 independent affine/lag identities, planted lags, constant signals, periodic ties and guards. `browser-test.cjs` uses real default-model CPU inference, two different fixtures, semantic input changes, review/undo/holds, downloads/clipboard/reimport, maximum trace count, fully offline fresh workers and responsive screenshots. `defensive-test.cjs`, `cold-cancel-test.cjs`, `stale-retry-test.cjs` distinguish actual failed downloads/retries from deliberate defensive injections. `artifact-test.py` independently parses actual CSV/JSON/Markdown and checks each paired source index/value. Runtime/security/gallery and public asset checks are reproducible scripts.

The unchanged collection size guard required extending existing deploy-only byte-identical geometry WASM sharing to Glide & Slot (`20261028-1`), using immutable `20261028-24/assets/manifold-BE4c7gO-.wasm`. Source builds and compatibility JS URLs remain intact; rewritten entry/worker URLs are query-versioned. Its real default, PNG import and STL import/export workflows are checked on assembled/public deployments. This maintenance does not add a 3D feature to Lag Loom.
