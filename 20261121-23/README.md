# Evidence Walk

A React + Vite, static-hosted sequential inspection evidence worksheet for quality analysts. **No lot releases or external actions.** Original collection remains untouched.

## Workflow

1. Choose **Packaging checks** or **Website checks** (synthetic), paste source JSON, or import `.json` (≤2 MB).
2. Set protocol definitions and preselected p0/p1, alpha/beta and fixedN in the JSON. Batches are chronological **within protocol in source-list order**. Each unit contributes exactly one defective/not-defective outcome.
3. Click **Load AI & reconcile** to explicitly download/run the real model. Review source notes, nearest protocol and alternative cosine evidence; correct the protocol/counts and approve or hold every batch.
4. **Apply reviewed scenario**. Pending rows block application; any held row withholds all calculations, retaining every record. Undo reverses review edits; each edit invalidates applied exports, count/protocol edits reset approval.
5. Inspect first crossings, frozen active evidence and separately retained later batches. Export current JSON, Audit CSV, Trace CSV or Markdown; copy Markdown. Reimported audits restore original inputs only, never trust prior approvals.

## AI, runtime, licensing and privacy

Real neural semantic embeddings: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8, Apache-2.0. [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), 384-dimensional normalized mean-pooled embeddings. Nearest cosine matches informal notes to supplied protocol definitions; this materially resolves paraphrases instead of literal ID lookup. Scores are similarity, **not confidence or equivalence**. The tiny positive fixture set is not an accuracy estimate; an actual negation challenge misclassified the protocol.

First run needs internet and approximately **23 MB model/tokenizer + 27 MB CPU WASM**, plus worker/app code. Static same-origin downloads and documented Hugging Face/CDN hosts only. No user content is sent with requests, no provider keys, analytics, backend, remote inference or content persistence. Text is untrusted data embedded inside a worker, not interpreted as instructions. There is no optional external provider.

Requires HTTPS/localhost, module workers, WebAssembly SIMD, several hundred MB available RAM; uses single-thread **WASM CPU**, no WebGPU. Desktop Chrome with GPU disabled tested. Physical phones, other browser engines and low-memory devices unverified. Do not assume all phones can run it.

Same-origin immutable dependencies are deliberately reused to avoid duplicated collection bytes:

- Worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- Factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve these older app paths. `runtime-dependency-audit.json` contains hashes, bytes and the observed model revision. Model `main` is not pinned. Pipeline max_length is not relied on: tokenizer's actual ceiling is 512 tokens, descriptions capped at 300 characters, worker chunks four texts. Cache API stores worker, factory, WASM and model files subject to storage failure/eviction. Tested offline scope: **fresh-worker inference in an already-open, successfully warmed page, all network unavailable**. Offline app startup/reload is not promised. Private browsing/cache eviction requires downloading again.

Visible download progress, per-chunk inference progress, cancel/worker termination and retry, 180-second timeout, run identity protection for file/worker fetches and late messages. Errors produce no deterministic or canned AI replacement. SIMD/module-worker errors instruct users to use a supported browser/device; no WebGPU fallback is required because CPU is the default.

## Formats and bounds

Source object: `title` (1–120 chars), `p0`, `p1`, `alpha`, `beta` (numbers 0.001–0.499, p0 < p1), `fixedN` (integer 1–32,000); `protocols` (1–6 objects `{id,text}`), `batches` (1–32 objects `{id,description,tested,defective}`). IDs unique per list, alphanumeric/underscore 1–40 chars; text/description 1–300 chars. `tested` integer 1–1,000; `defective` integer 0–tested. Notes ≤2,000 chars. Paste ≤60,000 chars. Input formats other than source/audit JSON are rejected with guidance. No lost rows: applied trace contains every reviewed batch in original order. Embedding schema validates vector count, 384 finite values and normalization before suggestions.

JSON schema `evidence-walk/1` preserves originalInput, reviews/evidence/notes and computed analysis (null if held). Audit CSV preserves each source/review; Trace CSV contains each batch's counts, cumulative totals, increment, active log ratio and phase. Post-crossing active ratios are blank, never fake zeroes. Markdown contains the complete reviewed worksheet. CSV quotes commas/quotes/newlines and prefixes formula-leading text with an apostrophe; JSON retains literal text. Numeric negative log ratios remain numeric, not spreadsheet text. Browser-downloaded artifacts are independently parsed with Python's csv/json modules.

## Deterministic method and comparison

For reviewed defective count x among n tested, cumulative log likelihood for p1 versus p0:

`L = x log(p1/p0) + (n-x) log((1-p1)/(1-p0))`.

At each supplied batch end, compare with lower `log(beta/(1-alpha))` and upper `log((1-beta)/alpha)`. Freeze the evidence at the **first** crossing for that protocol. Never infer an earlier within-batch stop from aggregate counts. Later records remain visible, with no active log ratio. A protocol without a crossing says continue; unused protocols say no data.

Fixed-count baseline: inspect the first complete-batch prefix reaching fixedN and compare its defect rate with `(p0+p1)/2`. If insufficient data, say not yet at fixed count. Do not invent partial-batch counts. The difference between observed crossing counts is descriptive; supplied-target remainder is explicitly a planning comparison, not measured saved work/time. This simple baseline has **no matched error guarantee**.

**Limits:** stable independent comparable Bernoulli outcomes, hypotheses/error targets chosen before data, no resetting after inconvenient evidence. Wald error boundaries are nominal approximations; overshoot, grouped looks, finite horizons, sampling without replacement, correlated outcomes and multiple protocols change error behavior. No validated alpha/beta guarantee, universal quality assurance, lot acceptance or causal claims. AI protocol errors invalidate statistical comparability unless corrected. This is an exploratory review worksheet, not a certified acceptance plan.

## Development / checks / publishing

`npm install`, `npm run dev`; `npm run predeploy` builds production under base `/daily-app2/20261121-23/`. Required individual gh-pages scripts exist, but **do not run individual deploy**: root `npm run predeploy` / `npm run deploy` publish the entire collection.

See [VALIDATION.md](VALIDATION.md) and machine-readable browser/core/artifact/defensive reports for observed outcomes and untested limits. Root size guard stays unchanged; deploy-only byte-identical legacy geometry sharing was extended to 20261029-4, requiring local/public actual worker/import/STL-export regression checks. Source builds are unchanged.
