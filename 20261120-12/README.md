# Load Ladder

A local-first batch-time worksheet for process planners. **Rough study notes → real neural procedure retrieval → mandatory measurement review → weighted monotone observed-level lookup → usable CSV/JSON/Markdown.** No equipment control, dispatch or external account changes.

## Workflow

1. Try **Archive batches** or **Workshop batches**, both synthetic, or paste/import your JSON. Set comparable procedure descriptions, the duration unit, mean-duration ceiling and semantic similarity threshold.
2. Read the download/device notice; explicitly choose **Load AI & reconcile**. Progress shows model downloads and real four-text inference batches. Cancel terminates the worker; retry after device/network failures. Timeout: 180 seconds. Failed inference produces no proposals or fabricated fallback.
3. Inspect original notes, the proposed procedure and ranked cosine evidence. Correct procedure, size, mean duration or independent sample count. Every substantive correction resets the row to pending. Approve or hold **every** summary; hold ambiguous or incomparable measurements. Notes support line breaks. Undo reverses the last 100 review edits.
4. Apply the reviewed lookup. All originals/holds survive in the audit. Equal sizes aggregate by sample count; weighted PAVA fits nondecreasing duration means. See the raw and fitted means, pooled source IDs and largest **observed** size whose fitted mean meets your ceiling. No interpolation or extrapolation.
5. Download **JSON** (complete original input, reviews, evidence, pools and metrics), **CSV** (every source/review row), **Lookup CSV** (approved aggregated observed levels) or **Markdown**; copy the worksheet. Any review edit invalidates the applied snapshot and disables exports until reapplication. Reimporting audit JSON restores **original inputs only**, not reviewed edits or approvals; archive the complete audit to retain them.

## Schema and bounds

```json
{
  "context":"Synthetic same-staff scanning study",
  "unit":"minutes",
  "ceiling":25,
  "minSimilarity":0.15,
  "first":[{"id":"scan","text":"Scanning paper documents into digital archives"}],
  "records":[{"id":"r1","text":"Digitizing printed pages with a document scanner","size":10,"duration":15,"count":2}]
}
```

- 1–8 unique procedure IDs; 1–96 unique summary IDs; IDs: ASCII letters/digits/underscore/hyphen, 1–40 characters.
- Text/context/unit: nonempty, ≤300 characters each. Source JSON: ≤60,000 characters. Original/audit JSON file: ≤2,000,000 bytes; validated originals still obey the stricter source limit. No PDF, spreadsheet or other import format.
- Size and count: integers 1–100,000. Mean duration and ceiling: finite 0–1,000,000 in the stated common unit. Similarity threshold: 0–1. Review notes: ≤1,000 characters.
- Use **mean** durations, not totals; count is the number of comparable independent observations behind that mean. Do not double-count overlapping summaries. Verify workload, staffing, measurement method and units; the model cannot establish these.
- Structured `load-ladder/v1` results preserve immutable original records in source order, complete reviewed rows, approved procedure pools, source IDs and computed metrics. Vector validation requires the exact text count, 384 finite dimensions and normalized norms. Repeated batch sizes aggregate; held rows do not contribute sample weight.
- CSV quotes commas, quotes and newlines; formula-like text beginning `= + - @ tab CR` gets a leading apostrophe. Numeric sizes/counts/durations remain numeric; JSON preserves exact text. Full JSON/CSV exports include held records; lookup CSV intentionally contains only approved aggregated levels.

## Real AI, model and runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized ONNX `q8`, Transformers.js **4.3.2**, ONNX Runtime Web on **WASM CPU**, one thread. Neural feature extraction uses normalized mean-pooled 384-dimensional embeddings. No WebGPU required, API keys, paid provider, server inference or hardcoded model answers.
- Each source note is compared with supplied procedure descriptions by cosine similarity. A below-threshold note remains unassigned; every proposed link remains pending. Similarity is not confidence, truth, equivalence or an accuracy probability. MiniLM is primarily English; negation, unfamiliar jargon, ambiguous procedures and unrelated text can mislink.
- Four texts per inference batch; maximum 104 texts = 26 batches. Descriptions are separately bounded to 300 characters. Actual tokenizer ceiling: **512 tokens**. This feature-extraction pipeline ignores the legacy per-call `max_length:256` argument in the shared source; do not interpret it as an enforced 256-token cap.
- The model's `main` revision is unpinned; observed revision `751bff37182d3f1213fa05d7196b954e230abad9` was checked during this run. A host update may change results; no exact future-output guarantee.
- Reuses immutable same-origin worker **20261115-6/assets/ai.worker-lkOoPoq8.js**, factory **20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs** and WASM **20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm**. Preserve these older app builds. Hashes, sizes and protocol audit: `runtime-dependency-audit.json`.

## Deterministic fit and honest comparison

After human approval, equal sizes aggregate into count-weighted means. Pool-adjacent-violators (PAVA) minimizes `Σ weight × (fitted_mean − raw_level_mean)²` under nondecreasing fitted duration. Adjacent violating pools merge with their combined weighted mean; each level and plateau retains source evidence. Empty procedures produce no lookup; all-held input remains a valid complete audit with no active levels.

The baseline is the raw count-weighted mean at each observed size. Displayed **raw adjacent drops** count downward changes; fitted drops are zero **by construction**, not proof of prediction improvement. Weighted squared adjustment measures the in-sample distance from raw means, not forecast error. Approved sample weight and record counts are conserved and displayed. The largest observed size meeting a ceiling is a descriptive fitted-mean screen, not a safe operating limit or deadline guarantee.

Monotonicity is a user-supplied assumption; real parallelism, setup changes or selection can make it inappropriate. Plateaus can conceal changes. No uncertainty intervals, causal conclusions, future predictions, automatic staffing, significance tests or measured time-savings claims. Review the complete sample record before using the worksheet.

## Downloads, privacy and offline scope

- ≈23 MB model/tokenizer from **huggingface.co** and its CDN (**hf.co / us.aws.cdn.hf.co**), plus ≈27 MB runtime binary and small worker/factory from this static collection. The app code is bundled locally; the first model run needs internet and several hundred MB available RAM. Nothing from the model host is requested before explicit Load AI.
- Source text, vectors and edits remain in browser/worker memory. Remote requests download public files via GET; user content is not placed in request URLs/bodies. No analytics, keys, cloud inference or upload integration. Imported instructions are inert text and cannot grant tool authority or request credentials.
- Worker source uses Cache API `load-ladder-worker-v1`; factory/WASM use the existing explicit Cache API bridge; Transformers.js caches model files. Fresh workers use cached blob resources instead of relying solely on HTTP cache. Cache may be denied/evicted: reconnect and retry.
- **Verified offline scope:** after one successful run, real inference in a fresh worker works with networking disabled in the **already-open warmed page**. Offline reload/navigation/app-shell startup is **not promised**. No service worker is installed.
- Current secure-context browser with WebAssembly SIMD, module workers and Cache API required. Desktop Chrome CPU/GPU-disabled tested. 320/390px phone viewport layouts checked, not physical phones. Other browsers, low-memory devices, screen readers and huge real-world datasets unverified.
- Input changes, cancelled generations, late worker fetches and delayed file imports are guarded by a run identity. Errors clear proposals; model timeout, malformed results, unsupported runtime and network failures leave no exportable fake output.

## Build and publish

React + Vite, base `/daily-app2/20261120-12/`. `npm install`; `npm run predeploy`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist` with gh-pages installed. **Do not deploy this app individually**: publish the combined root `deploy/` via `/Volumes/ExternalHD/daily_app2` predeploy/deploy. The existing conservative 1 GB guard and older categories remain unchanged. No new legacy deduplication rule is needed. Original `/Volumes/ExternalHD/daily_app` stays read-only. No builder digest.

See [VALIDATION.md](VALIDATION.md) and machine-readable browser/core/artifact reports for actual observations, not universal accuracy claims.
