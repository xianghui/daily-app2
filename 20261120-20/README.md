# Bundle Orchard

A local-AI receipt drafting workbench for small-shop and café supervisors reconciling shorthand basket notes with explicitly supplied bundle offers. Not a generic chatbot, checkout, till integration or purchasing service.

## Workflow

1. Load a synthetic café/art-shop basket or paste/import source JSON. Define category meanings, individual units, exact prices and fixed-amount offers.
2. Read the download/privacy notice, then explicitly **Load AI & reconcile**. Actual neural embeddings propose item categories beyond exact-name matches.
3. Inspect source descriptions and cosine candidates. Correct category/price, approve or hold **every** unit, add multiline notes, undo edits. Every source remains intact. Held units remain at reviewed full price and cannot qualify.
4. Apply reviewed checks. Exact dynamic programming selects disjoint eligible bundles; compare the same basket with largest-discount-first greedy. No item or promotion is used twice. Equal optima use deterministic enumeration.
5. Download complete JSON, CSV, Markdown and a receipt CSV, or copy the worksheet. Changing a review invalidates exports until reapplied. Importing an audit restores **originals only**, never past approvals.

Both examples deliberately allow two compatible 300-cent offers to beat a blocking 500-cent offer. These computed savings are not actual till savings, inference accuracy or estimated time savings.

## Real AI and runtime

**Xenova/all-MiniLM-L6-v2**, [Hugging Face model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. **Transformers.js 4.3.2**, Apache-2.0; ONNX Runtime Web, MIT. Feature extraction uses quantized q8 ONNX, mean pooling and normalized 384-dimensional embeddings on **WASM CPU**, one thread. Neural rankings are cosine dot products, not regular expressions or canned responses. Prices, terms and quantities are supplied, never generated. Validation, bundle enumeration/optimization, baseline and artifact construction are deterministic.

Initial download ≈23 MB model/tokenizer + 27 MB CPU runtime (plus small app/worker code), requiring internet, a secure-context current browser, WebAssembly SIMD, module workers, Cache API and several hundred MB free memory. No WebGPU or credentials. Desktop Chrome CPU is tested; physical phones and other browsers are unverified.

To keep the collection within its unchanged 1 GB guard, the app reuses immutable same-origin assets:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve these originating app builds. Actual protocol, byte hashes and observed upstream revision are in `runtime-dependency-audit.json`. Four texts per inference batch. The worker's per-call max_length is ignored by the feature pipeline: the actual tokenizer ceiling is **512**, with descriptions independently bounded to **300 characters**. Model main is unpinned; upstream changes can change results.

## Privacy and cache behavior

Nothing is loaded from the model host before explicit AI loading. Hugging Face/CDN traffic downloads public files only; user descriptions never leave the device. Same-origin worker/factory/WASM are cached explicitly, Transformers.js caches model files. Inputs and reviews stay in page memory; no analytics, remote inference, keys or content persistence. No external actions.

After a successful run, a **fresh worker in the already-open warmed page** was tested with all network disabled. Offline reload/navigation is **not** promised. Cache eviction/private mode may require redownloads. Export before leaving. Cancel terminates the worker; run IDs guard asynchronous worker-source fetches and file reads; 180-second timeout, errors and malformed vectors show actionable failures without fake output.

## Input and hard limits

JSON schema as in the example buttons (`src/core.js`):

- `context`, `assumption`: nonempty ≤300 characters.
- `currency`: three uppercase letters, assumed two-decimal hundredth units; no FX conversion.
- `minSimilarity`: 0–1, a user-set abstention threshold, not confidence.
- `categories`: 2–4 unique ASCII `id`, nonempty `text` ≤300 characters.
- `records`: 1–12 unique `id`, `text`, integer `priceCents` 0–1,000,000. **Each record is one unit**; quantities must be expanded explicitly.
- `promotions`: 1–6 unique `id`/`text`, `requires` (1–3 known category IDs, repeats allowed), positive integer `discountCents` ≤1,000,000.
- Source ≤30,000 characters; JSON import ≤2 MB to allow full audit-envelope round trips; original-input limits remain enforced. Review notes ≤1,000 characters.

A promotion is single-use and its discount cannot exceed its chosen units' subtotal. Distinct promotions can coexist only on disjoint units. No percent discounts, shared-item stacking, loyalty, minimum order, tax, shipping or per-customer policies. These must not be silently approximated; use another tool for them. This is a pre-tax draft, not legal eligibility verification.

Exact solver retains the best saving for each consumed-unit bitmask while processing each promotion once. Greedy sorts eligible applications by descending discount, then promotion ID and mask, taking disjoint applications not previously used. Maximum 4,096 masks; at most 220 candidate triples per rule. Results preserve all held/unbundled units.

## Output formats

- JSON `bundle-orchard/v1`: lossless originals, all reviews, candidate evidence, both plans and computed cent totals.
- CSV: every source unit with reviewed category/price/decision/note and selected promotion.
- Receipt CSV: every reviewed unit (including holds), negative numeric discount rows with source IDs, and a payable total. Item + discount rows reconcile exactly to that total; do not sum the total row again.
- Markdown/clipboard: assumptions, limits, comparison, bundles and every source/review.

Leading formula-like strings are apostrophe-escaped in CSV, including multiline text. Numeric discounts remain signed numbers. JSON is the lossless restore format.

## Validation and limitations

See [observed validation](VALIDATION.md) and machine-readable reports. Two materially different synthetic baskets, actual Chrome/WASM inference, known answers, 600 independent exhaustive solver oracles, complete artifact parsing, maximum batch, review/edit/hold/undo, stale/cancelled runs, cold download cancellation, retry, network/unsupported runtime/malformed message/timeout faults, offline fresh-worker inference, privacy requests and 1440/390/320 layouts are checked. Small fixtures do not establish broad model accuracy. Irrelevant or negated descriptions can match the wrong category: human review is mandatory. The app cannot verify brand exclusions, actual offer eligibility, prices or tax basis.

## Development / publication

`npm install`; `npm run predeploy`; serve with the production `/daily-app2/20261120-20/` base and the shared assets available. Run `node core-test.mjs`, `python3 serve-test.py`, `node browser-test.cjs`, `node defensive-test.cjs`, `node cold-cancel-test.cjs`, then `python3 artifact-test.py`. Playwright path in local test helpers is environment-specific. Only the repository **root** predeploy/deploy publishes the combined gallery. Per-app gh-pages dependency/scripts are retained by contract but must not replace the collection.
