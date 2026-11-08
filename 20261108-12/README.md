# Route Caliper

A local-AI routing evaluation workbench for operations leads. Supply route descriptions and independently labeled calibration/test requests, run real semantic inference, review ground truth, calibrate an abstention threshold and export a traceable evaluation. It does **not** deploy routing rules or send requests to external systems.

## Workflow

1. Load either synthetic example or paste/import JSON. Edit `targetPrecision` (0.5–1), route descriptions and samples. `expected: ""` means outside the taxonomy; `split` is `calibration` or `test`.
2. Explicitly press **Load AI & evaluate routes**. Watch model-file/batch progress; cancel terminates the worker. Retry is explicit.
3. Inspect the immutable top route and all competing cosine scores/descriptions. Correct a gold label if wrong, annotate, or exclude an ambiguous sample. Original labels and texts remain preserved. A gold-label edit resets its review decision. Bulk confirmation is a human decision, not automatic verification. Undo restores up to 30 review snapshots.
4. **Apply reviewed evaluation** requires every row reviewed and at least one included calibration row. A deterministic selector chooses the lowest observed calibration cosine threshold meeting targetPrecision, keeping ties together; if no threshold qualifies, it uses 1.001 to abstain on everything. Test gold labels cannot select the threshold.
5. Inspect holdout precision, coverage, routed errors and abstentions against an unthresholded top-1 baseline on the same included test rows. Exports are disabled after edits until applied again.
6. Download complete JSON, spreadsheet-safe CSV or Markdown; copy the current Markdown report. Every row, including excluded samples, survives all audit exports. JSON retains originals, all competing scores, review decisions, threshold and computed metrics. Importing an audit restores its **original input only**, not corrections/approvals; rerun and review again. Reopen the JSON to inspect saved decisions without rerunning.

## Input and output contract

Input JSON: `{ "targetPrecision": 1, "routes": [{"id":"route-id", "text":"Route meaning"}, ...], "records": [{"id":"C1", "text":"Request", "expected":"route-id", "split":"calibration"}, ...] }`.

2–8 unique route IDs; 4–48 unique record IDs; IDs ≤60 characters; text ≤500 characters; input ≤50,000 characters/file ≤50 KB. Both splits required; unknown labels/unsupported splits fail. Exact normalized duplicate text may not cross splits. Paraphrase leakage is **not** detected. Processing batches four texts, bounding input to at most 56 embeddings; no silent row dropping or chunk summarization. No CSV/PDF/Word import; convert to this small JSON schema first. Output schema is `route-caliper/v1`. CSV formula-like text is prefixed with an apostrophe; lossless JSON keeps the exact original. MD JSON-quotes source snippets to preserve newlines/quotes. No executable code is generated or run from imported text.

## Real AI and runtime

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0 model license. Quantized `q8` ONNX feature extraction, mean pooling, normalized 384-dimensional vectors, maximum 256 tokens per text. Model weights are downloaded, not committed. Current repository default revision is used, so future host updates can change outputs; the saved audit records actual scores rather than a reproducibility guarantee.
- Runtime: Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 as resolved in package-lock (MIT). Vite bundles the worker/library locally; the ONNX factory is copied under `public/runtime/`.
- AI materially supplies semantic embeddings of both route descriptions and requests, including paraphrases without exact keyword matches. Cosine ranking, threshold calibration, schema checks, metrics, review and exports are deterministic around those embeddings. There is no canned-response or regex classification fallback.
- Initial download: approximately 23 MB model/tokenizer/config from Hugging Face and its CDN, plus 26,861,777 bytes (~27 MB) same-origin WASM, and ~0.9 MB app/runtime code. Initial internet access is required; restrictive networks may block the model host.
- Immutable shared WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; byte-identical to the installed runtime. SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that older app when deploying the collection. `asset-audit.py` enforces equality.
- WASM CPU, single thread; WebGPU is not required. Use a current WASM/Cache API-capable browser; a desktop with about 300 MB free memory is recommended, not a measured maximum. Chrome desktop is tested. Other browser engines and real phones are unverified; responsive layout checks do not establish phone inference performance.

## Privacy, caching and failure behavior

No API keys, provider integration, paid services, telemetry or content uploads. Default texts stay in browser/worker memory. Network capture verifies GET-only static/model downloads, without source content in URLs/bodies. A request mentioning credentials or instructions remains data and cannot control tools. User data is not written to browser storage; only explicit downloads/clipboard persist it. Runtime/model/worker assets use Cache API/Transformers cache, subject to eviction/quota restrictions. There is no clear-cache button; use browser site-data controls to remove cached assets.

After one successful run, offline **fresh-worker inference with this page open** is tested. Offline page reload/startup/navigation is **not promised** (no service worker). Initial loading and evicted cache entries need internet. Cancel terminates the worker and invalidates the run ID; partial cached downloads may remain. Input changes clear results/applied exports; stale worker events, failed fetches and asynchronous imports cannot replace current input/results. Worker construction/crash, missing WASM, model-host/download failure, malformed/non-finite/wrong-shape embeddings and the 180-second timeout report actionable errors without fabricated output. Retry after fixing connectivity/runtime; slow machines may hit the timeout. Imported/generated content is rendered as React text, never HTML.

## Interpretation and known limitations

This is a **small-sample evaluation aid, not a production routing policy or calibrated confidence model**. Cosine scores are not confidence percentages. Precision counts correct routed rows / routed rows; coverage counts routed / included rows. No routed rows yields `null` precision displayed as n/a. Excluded rows do not count, but are retained and totaled. Calibration targetPrecision is not guaranteed on holdout. More abstention may reduce mistakes while missing useful routing opportunities. Correcting/excluding samples can bias an evaluation; notes and originals make that review visible. Use an independent, representative holdout and a much larger evaluation before operational decisions.

Observed fixtures: all 12 known in-domain top-1 labels correct across two seven-row synthetic datasets. Service test: baseline 3/4 correct versus thresholded 1/1 correct, 3 abstentions (25% coverage). Library test: baseline 3/4 versus 2/2, 2 abstentions (50% coverage). Both out-of-domain cases abstained, but three in-domain cases also abstained. These are fixture counts, not general accuracy claims. A negation challenge predicted delivery instead of access; it abstained under the fixture threshold. English short-text MiniLM may miss negation, mixed intents, rare domains and multilingual nuance; token truncation and unrepresentative descriptions/calibration can worsen results. No model training or automatic production rollout occurs.

## Build, deploy and validation

`npm install`; `npm run dev`; `npm run predeploy`. Vite base is `/daily-app2/20261108-12/`. Per-app `deploy: gh-pages -d dist` exists for the contract but **do not invoke it**: publish from the root combined-site workflow instead.

Use `python3 serve-test.py` (production app on port 6252), `node core-test.mjs`, `node browser-test.cjs`, `node extra-test.cjs`, `python3 artifact-test.py` and `python3 asset-audit.py`. Browser scripts use Playwright from the agent workspace or `PLAYWRIGHT_PATH`, Chrome channel. Real inference is never mocked in successful functional/quality/offline runs; fault injection is limited to defensive tests. See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed results, limitations and public verification status.
