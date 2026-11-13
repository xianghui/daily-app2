# Trace Current

Local-AI process-event reconciliation for operations analysts preparing recurring service or editorial reviews. Unlike a count dashboard, this workbench reconstructs reviewed case traces and exposes explicit prerequisite-order exceptions, repeated steps and long inter-event gaps. No external tickets or dispatch actions.

## Workflow

1. Choose **Repair desk** or **Publishing desk** (synthetic), paste source JSON, or import `.json` ≤2 MB. Define 1–8 activity descriptions and their `requires` IDs. Set `maxGapMinutes`. Supply 1–32 events with unique IDs, `caseId`, description, integer `minute` and owner. Minutes use one relative origin within each case; timestamps from different cases are not compared. Edit source goals/rules and rerun to refresh.
2. Explicitly load AI. Inspect each original note, proposed activity and ranked cosine evidence. Correct activity to reject its proposal; repair case/time fields, assign multiline owner/follow-up notes and explicitly approve or hold. Undo restores edits. Originals never change.
3. Apply the review layer. Pending events block application. Any held event or duplicate timestamp blocks its complete case, avoiding silent removal of inconvenient evidence.
4. Inspect each ordered trace and exception checklist. Download complete JSON, complete event CSV or Markdown; copy the checklist. Editing any review invalidates exports until reapplied. Reimport an audit restores original input only, never old approvals.

## Actual AI and static-host runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; `onnx/model_quantized.onnx`, about 23 MB including tokenizer/configuration. Mean pooling and normalization yield 384-dimensional embeddings. Cosine retrieval ranks each note against supplied activity descriptions. This materially reconciles paraphrases without requiring exact step names; it is not generative planning, identity proof, confidence, negation detection or an out-of-domain detector.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread; four texts per batch, 256-token maximum. No WebGPU required. React/Vite/Papa Parse and worker code are bundled locally. Runtime factory under `public/runtime/` is locally bundled. CPU WASM is approximately 26.9 MB.
- To avoid duplicating the runtime across the collection, Vite rewrites the byte-identical WASM to the preserved same-origin `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Keep that asset when deploying. Standalone per-app deployment is not supported by the collection contract.
- First run requires internet to this site and Hugging Face / model CDN (`huggingface.co`, `hf.co`, download CDN). No model requests occur before explicit loading. User content remains in page/worker memory. Only static files download: no remote inference, uploads, analytics, credentials or stored event content. Imported instructions are strings, never tool authority. No optional remote provider.
- Model and runtime/worker files use browser Cache API where available. Tested offline scope: after a successful online run, an **already-open warmed page** starts a fresh worker and runs actual inference with all network disabled. Offline reload/navigation is not promised. Browser cache eviction/private-mode restrictions can force redownload.
- Current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free memory tested with GPU disabled. Narrow viewport tested; physical phones and other browsers/hardware unverified. Runtime/download failures provide actionable errors and retry; no fake AI path.

## Deterministic trace semantics

Group by reviewed case ID; sort by integer minute. Tied times block the case rather than asserting arbitrary order. A step violates a supplied direct prerequisite if that prerequisite's activity has not appeared at a strictly earlier minute in this case. First appearance is sufficient; prerequisites do not reset after a repeat. Cyclic, self, duplicate and unknown prerequisite IDs are rejected. No implicit final-step requirement, concurrent-branch model or transitive process completeness is invented.

Repeated activity events after their first occurrence are reported as investigation cues, not proven rework. Case elapsed time is last minus first minute; gaps are consecutive differences. Gaps strictly above `maxGapMinutes` are flagged; equal-to-target gaps are not. These are observed spans, not measured working time, causal bottlenecks or contractual SLA findings. Single-event cases have zero elapsed time and no gaps. Incomplete observation windows or wrong case boundaries can produce misleading exceptions.

The literal-label baseline counts source notes containing their **reviewed** activity's exact label phrase (case-insensitive), compared with all reviewed assignments. This is wording coverage, not accuracy, and uses the reviewed class rather than a separate classifier. The count-only baseline preserves total event counts but cannot describe order. Exception counts are computed, not claimed time savings. Missing prerequisites mean absent earlier **within supplied evidence**, not proven real-world noncompliance.

## Bounds and validation

Source ≤30,000 characters; audit/source import ≤2 MB, then bounded original source. Activity/event descriptions ≤300 characters, project ≤150, IDs/case IDs ≤40, owner ≤150, note ≤1000. Integer minutes 0–10,000,000 and gap threshold 1–100,000. 1–8 activities, 1–32 events; prerequisite DAG required. Every source ID/order survives the review layer and every case event survives exports, including blocked cases.

Validate embeddings for count, finite 384 dimensions and near-unit norm before ranking. Cancellation terminates workers. Generation tokens guard worker messages, worker fetches and file reads. Source changes invalidate reviews/results; review changes invalidate applied exports. Worker construction/errors, failed downloads, malformed vectors and 180-second timeout leave no fabricated suggestions. Retry creates a fresh run.

CSV protects leading formula-like textual fields (including multiline fields) with an apostrophe; JSON preserves exact originals and reviewed text. CSV columns retain original case/description/minute plus reviewed case/activity/minute, AI proposal, decision, owner and note. JSON contains full original input, review/evidence, blocked cases and computed trace details. Markdown contains all reviewed events and investigation checks. Spreadsheet protections intentionally alter the CSV representation of dangerous leading characters; JSON is lossless.

## Build / verification

```sh
npm install
npm run predeploy
node core-test.mjs
node browser-test.cjs
node defensive-test.cjs
python3 artifact-test.py
node gallery-test.cjs
```

React + Vite base `/daily-app2/20261114-6/`. Required `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained, but publish **only through the root combined workflow**, never this app's deploy command. Root predeploy assembles the preserved collection. Follow root README Pages commit/build verification instructions.

Browser scripts use installed workspace Playwright and Chrome. Serve the actual dist under its production base and preserve the shared WASM path. `APP_URL` / `REPORT` select the public target and report. `gallery-test.cjs` compares against `/tmp/trace-gallery-before.html` captured before gallery editing. Fault injection is confined to defensive tests, not successful model checks. See [VALIDATION.md](VALIDATION.md) for actual observations and limitations.
