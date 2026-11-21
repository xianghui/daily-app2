# Prevalence Porch

A local-AI feedback count audit for support-quality and documentation teams. Binary semantic classification is useful for reviewing repeated batches, but the model’s flagged fraction is not automatically the real issue fraction. This worksheet compares raw AI counts, an assumption-gated misclassification-adjusted point estimate, and a separately human-reviewed share. No messages, account changes or automatic routing.

## Workflow

1. Choose **Delivery feedback** or **Documentation feedback**, paste source JSON, or import source/audit `.json`.
2. Supply mutually exclusive, exhaustive positive/negative definitions, an independent calibration cohort with known reference truth, and a new target cohort. Use representative data and avoid training/test leakage.
3. Read the download notice, then explicitly **Load AI & reconcile**. Model download progress and four-text inference chunks appear. Cancel terminates the worker.
4. Inspect each original and both cosine scores. Reference labels default to supplied truth; target audit labels default to AI suggestions. Correct reference truth/target labels, add multiline evidence notes, approve or hold every record. Undo mistakes. AI predictions remain immutable so calibration and target inference use the same classifier.
5. Confirm independent/representative calibration and transferable error rates only if justified. **Apply reviewed audit** creates an export snapshot. Review changes invalidate it. Holds block an estimate but remain exportable in the complete evidence audit.
6. Compare raw AI target-positive share with Rogan–Gladen adjustment and human-reviewed target share. Corrected target labels change only the reviewed share, never the raw classifier counts or calibration estimate; no double correction.
7. Download current JSON, Audit CSV or Markdown, or copy Markdown. Reimport audit JSON restores originals, not approvals. Nothing is persisted except runtime/model cache unless you explicitly export.

## Real AI and deterministic boundaries

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, approximately **23 MB** first-run model files.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), normalized mean-pooled **384-dimensional embeddings**, **WASM CPU**. No WebGPU, API key, paid service or server inference. Approximately **27 MB** additional CPU runtime.
- AI embeds both supplied definitions and all feedback. Deterministic cosine comparison assigns each record to its closer definition (ties positive). This is semantic inference, not regex or canned examples. The model always picks a side; unrelated/mixed text must be held by a human. Cosine is not confidence.
- Deterministic steps: vector schema checks, review validation, confusion matrix, proportion formula, blocking rules, CSV escaping and exports. AI does not generate truth, statistical assumptions or follow-up notes.
- Four texts per chunk; each ≤300 characters. Actual tokenizer ceiling **512 tokens**. Feature extraction ignores its nominal per-call max_length 256; no stricter token cap is claimed. Model revision `main` is unpinned; observed revision/runtime hashes in runtime-dependency-audit.json.

Immutable same-origin dependencies: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating apps/assets when deploying. Worker protocol/settings and byte hashes were inspected this run.

## Calculation and limits

Calibration counts compare immutable AI predictions against approved human reference truth: sensitivity = TP/(TP+FN), specificity = TN/(TN+FP). Raw target-positive share q uses all immutable target predictions. Adjustment = **(q + specificity − 1)/(sensitivity + specificity − 1)**. It is a descriptive point estimate under stable conditional error rates / label shift, not a confidence or accuracy claim. Calibration needs both truth classes. Denominator ≤0.05, missing classes, estimate outside [0,1], any held record or unconfirmed assumptions block the adjustment. Out-of-range estimates are not clipped. No uncertainty interval or representativeness guarantee.

Every record must be approved or held before applying. Human-reviewed target share includes approved target records only and explicitly displays its denominator. A partial reviewed share is not a full-cohort estimate. Tiny examples demonstrate operation, not reliable population inference; perfect small-fixture calibration is not evidence of perfect classifier performance. Wording changes, negation, multiple issues and domain shift can make adjustment misleading. Do not use for clinical screening, individual risk or consequential automated decisions.

Source JSON ≤60,000 characters. Definitions/text 1–300 characters. Each cohort 1–32 records. IDs unique per cohort, letter first then letters/digits/underscore/hyphen, ≤40 chars. Calibration requires `truth: "positive" | "negative"`. Target requires id/text. At maximum, 66 texts / 17 chunks. Review notes ≤1000 chars. Source/audit `.json` import ≤2 MB; the larger envelope limit allows reviewed metadata round-trip while original source bounds still apply.

JSON schema `prevalence-porch/v1` includes originalInput, every review/original/prediction/score, confusion counts, all three proportions, blockers and assumptions. CSV quotes strings, doubles quotes and uses CRLF, preserves all records and multiline notes, prefixes formula-leading text with apostrophe including multiline formula strings. Genuine numeric cosine values remain numeric. JSON is lossless for originals. Markdown includes every original, current label/decision/note and the comparison. Audit imports intentionally renew inference/review rather than trusting stored approvals.

## Privacy, devices, loading and offline

No remote provider, credential handling, telemetry or content upload. User data stays in browser memory; only model-file GET downloads go to Hugging Face/CDN, with app/runtime assets same-origin. No model download before explicit loading. Imported text is data and cannot change authority or request credentials. Audit reports retain URL hosts/paths/query-key names only, not signed CDN tokens.

Requires secure context, module workers, WebAssembly SIMD and several hundred MB RAM. Cache API required for cached/offline operation. Tested on desktop Chrome with GPU disabled, plus 320/390px phone viewports; physical phones, low-memory hardware and other engines unverified. First use needs internet. Cache API stores worker/factory/WASM/model. **Tested offline scope:** a fresh worker in the same already-open warmed page runs real inference with all browser network disabled. Offline reload/navigation/startup is not promised. Private mode/cache eviction may require redownload.

Run IDs guard source edits, asynchronous file reads, worker fetch and late responses. Cancel terminates the worker; timeout 180 seconds. Unsupported devices, network/model failures, worker errors, malformed vectors/messages and timeouts clear results and offer an explicit retry, never fake AI. Human judgment remains necessary.

## Distinct process and development

Unlike Alert Orchard (20261114-16), which predicts alert workload from supplied prevalence, this **inverts measured error rates to audit target issue prevalence**. Route Caliper (20261108-12) calibrates an abstention threshold; this does not optimize a threshold or route requests. Source gallery comparisons are in originality-audit.json.

React + Vite, base `/daily-app2/20261121-12/`. `npm install`, `npm run dev`, `npm run predeploy`. Per-app gh-pages dependency and required scripts retained. **Publish only from repository root** with the combined `npm run predeploy` / `npm run deploy`; never run per-app deploy against the collection.

The collection’s unchanged 1 GB guard required deploy-only byte-identical Manifold reuse for Lace & Fold (20261028-29) from immutable 20261028-24. Source builds and compatibility JS URLs remain unchanged. Real PNG/STL import, worker inference and independently validated mesh exports are checked locally/publicly; no legacy app is removed or relabeled.

See VALIDATION.md and observed JSON reports for actual checks and limitations. No daily digest is sent by this builder.
