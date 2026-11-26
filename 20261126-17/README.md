# Reciprocal Desk

A React + Vite local-AI support-department cost handoff utility. Folder `20261126-17`; built 2026-11-26.

## User, workflow and distinction

For an operations cost reviewer with informal expense descriptions and a supplied service-share matrix. Local AI matches cost notes to the reviewer’s department descriptions. Human approval/correction comes before exact reciprocal allocation. Output: all-source audit and cent-conserving production-cost worksheet as JSON/CSV/Markdown. No uploads, postings, payments or other external actions.

Unlike **Cost Tapestry** (activity-driver overhead), this tool solves simultaneous mutual-support equations: IT can serve facilities while facilities serve IT. Unlike **Splitvalue Desk** (joint-product NRV) and **Unitloom Desk** (equivalent units), it handles support-to-support transfers and compares them with a direct-only shortcut. Both galleries were parsed for the idea audit: 892 existing entries here and 3,595 in the read-only original collection.

1. Choose either synthetic example, paste JSON, or import a `.json` source/audit.
2. Set department descriptions, outgoing service shares, production output teams and whole minor-unit costs. Every support row must total 10,000 basis points, send a positive share to output teams, and have no self-service. Omitted destinations are zero. All data must be from one period/currency.
3. Explicitly select **Load AI & match departments**. First-run file downloads and batch progress are displayed; cancellation terminates the worker. No inference starts automatically.
4. Inspect every source and cosine ranking. Edit department/amount, add multiline review notes, approve or hold. **Undo last edit** restores the previous review. Original input remains unchanged. Shares/descriptions can be changed in Source JSON, which clears prior reviews and requires a fresh run.
5. **Apply reviewed allocation**. Pending reviews block application; any hold blocks the complete allocation but retains every cost in exportable audit output. Every edit invalidates the export until reapplied.
6. Download JSON, CSV, Markdown or copy the worksheet. Audit reimport restores originals only; it does not silently trust saved approvals. Inputs/reviews live in page memory: export before closing.

## Real AI and runtime

Default model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; upstream sentence-transformers MiniLM. Transformers.js **4.3.2** (Apache-2.0) and ONNX Runtime Web (MIT) run q8 ONNX feature extraction on **WASM CPU**. No WebGPU or API key is needed. Mean-pooled normalized 384-dimensional vectors rank department descriptions by cosine similarity. Count, dimension, finite values and approximate unit norm are validated before use. Four short texts per batch; at most 30 texts. This is real semantic retrieval, not regex classification or canned sample output.

AI does **not** extract amounts, infer allocation shares, reason about accounting policy or solve the allocation. Subsequent validation, rational Gaussian elimination, baseline calculation and cent rounding are deterministic. Similarity is not confidence. The model always picks a nearest department even for unrelated text; negation and domain jargon are unreliable. The observed negation challenge chose maintenance instead of IT, and an unrelated picnic cost also chose maintenance. Review/correct/hold is mandatory. Imported text is inert data, not instructions or tool authority.

Shared immutable same-origin assets:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve these older apps/paths. Exact sizes and SHA-256 are in `runtime-provenance.json`; the worker protocol is `{id,texts}` → progress/batch/result vectors/error. Its pipeline passes a max_length option, but that is not relied on: the inspected tokenizer’s effective `model_max_length` is **512**. The 200-character supported short-English bound stays below that token context. Model files use the host’s default `main` revision, not a pinned immutable revision: future host changes need retesting.

### Downloads, privacy and offline scope

Approximately **50 MB** initially: ~23 MB model weights, 26,861,777-byte WASM plus JavaScript/tokenizer overhead. Initial internet needed for same-origin runtime assets and `huggingface.co` / `hf.co` / `xethub.hf.co` model/CDN files. Downloading weights is not uploading content. No optional remote integration, analytics, shared credentials or paid services. Before explicit model loading, there are no model-host requests. Browser request audits during actual inference confirmed GET downloads without request bodies or user content in URLs.

Cache API stores worker source; the shared worker caches its WASM factory/binary and Transformers.js caches model files when storage is available. **Tested offline scope: fresh-worker inference in an already open, fully warmed page, with all networking disabled.** Cold offline page navigation/reload is not promised. Eviction, storage restrictions/private mode can require a new download. No localStorage persistence of documents or reviews.

Current desktop Chrome/Edge with module workers, WebAssembly SIMD and BigInt recommended. Tested installed headless Chrome with GPU disabled. Actual phones, other engines and low-memory performance remain unverified. Missing runtime support, worker construction/errors, bad vectors, network failures and 180-second timeout produce visible errors and explicit retry; there is no fake fallback. Run identities and guarded file reads prevent stale results overriding newer source/runs. Cancellation aborts pending worker-source fetch and terminates the active worker.

## Input/output contract

Source object: `title` (≤100 chars), `departments` (2–6 support objects), `outputs` (2–6 production objects), `records` (1–24 expense objects). Example:

```json
{"title":"Shared support review","departments":[{"id":"repairs","description":"Mechanical machine maintenance","shares":{"it":2000,"assembly":6000,"paint":2000}},{"id":"it","description":"Computer software and network helpdesk","shares":{"repairs":1000,"assembly":2000,"paint":7000}}],"outputs":[{"id":"assembly","description":"Assembly workshop"},{"id":"paint","description":"Paint workshop"}],"records":[{"id":"R1","note":"Mechanical workshop repairs","amount":100000},{"id":"R2","note":"Laptop software helpdesk","amount":50000}]}
```

IDs: 1–32 ASCII alphanumeric/underscore/hyphen; support/output IDs globally unique and cost IDs unique within records. Descriptions/notes nonempty ≤200 characters; amounts whole safe integers 0–100,000,000 minor units. Shares whole basis points 0–10,000, target a known non-self ID, total 10,000 per support row, with positive total production share. Source paste ≤60,000 chars; file/audit ≤8 MB, then the original-source bounds are enforced again. Reviewer notes ≤500 chars. Unknown extra source fields are retained in the original JSON but ignored computationally.

No currency conversion, negative credits, tax, causal service-demand estimation or step-down policy. A support department with no matched expenses starts at zero direct cost; this is not proof its data is complete. Output descriptions identify supplied destinations and are not embedded by the model.

JSON is the authoritative lossless audit, retaining originals, reviews, ranking evidence, all cost rows and exact numerator/denominator strings. CSV is RFC-style CRLF quoted text with `kind=source` rows for **every** expense and `kind=output` rows for production allocations. Formula-like text is apostrophe-prefixed; genuine numeric signed differences stay numeric. Markdown contains output burdens, support equations’ totals and source-linked notes. CSV/Markdown are handoff artifacts, not reimport formats.

## Deterministic method and comparison

For support i: `X_i = direct_i + Σ_j share(j→i) × X_j`. Exact BigInt rational Gaussian elimination solves `(I − Sᵀ) X = direct`. Each row’s positive production share guarantees eventual cost absorption in this supported finite system. Output k receives `Σ_j share(j→k) × X_j`. Fractions sum exactly to reviewed direct costs. Largest-remainder allocation rounds only final output burdens to whole minor units, preserving every cent; output source order breaks ties. Fully loaded support totals include internal transfers and must **not** be added to final output burdens.

Direct-only baseline ignores support-to-support exchanges, renormalizes each support row over production destinations, and applies those weights to direct costs. It also conserves total cost; differences reveal allocation sensitivity, not measured savings, causality or accuracy. The two synthetic examples produce changed output burdens while retaining identical total direct costs. All metrics are computed from the reviewed snapshot.

## Build, validate, publish

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261126-17/`. Per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` retained as required, but publish this collection **only from the root** with root predeploy/deploy. Never deploy this app in isolation over the combined collection.

- `node core-test.mjs`; `python3 independent-core.py`: schema/error checks and independently computed exact allocations using Python Fraction permutation determinants/Cramer’s rule.
- `python3 serve-built.py --port 7799`: production bundle and shared runtime paths.
- `node browser-test.cjs`; `python3 artifact-test.py`: real two-fixture AI, offline fresh worker, full batch, review/undo/edit/holds, actual downloads/reimport, independent CSV parser, clipboard, layout and privacy checks.
- `node defensive-test.cjs`; `node extra-defensive-test.cjs`; `node download-cancel-test.cjs`; `node network-retry-test.cjs`; `node challenge-test.cjs`: fault injection only for defensive paths, plus real model failure/recovery and observed semantic limitations.
- `APP_URL`, `PREFIX`, `GALLERY_URL` select assembled/public validation. Test scripts use workspace Playwright and installed Chrome, not frontend dependencies.
- `python3 bundle-audit.py`; `python3 asset-audit.py BASE PREFIX`: runtime provenance/credential-pattern scan and byte-for-byte production/public asset audits.

See [VALIDATION.md](VALIDATION.md) for actual outcomes and explicitly untested behavior. No digest is sent by this builder.
