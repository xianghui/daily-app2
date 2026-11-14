# Capacity Commons

A local-AI shared-subscription cost worksheet for small operations teams. Reconcile rough usage notes to resource pools, verify every assignment/team/unit/quantity, compare exact Shapley contributions with equal splitting, and export an auditable allocation. No invoices, purchases, emails or account changes.

## Workflow

1. Choose **Studio services** or **Community facilities** (synthetic), paste source JSON or import a source/audit `.json`.
2. Define 2–6 teams and 2–6 resource pools. Each pool has a description, unit and 1–10 cumulative capacity tiers `{upTo, cents}`. Prices must be nondecreasing whole cents in the same currency and billing period; capacity ceilings strictly increase. There is no automatic currency/unit conversion.
3. Supply 1–32 usage records with unique ID, known team, description, nonnegative integer `quantity` and owner. Quantity means the selected pool's units. The model cannot check that assumption.
4. Explicitly click **Load AI & match resources**. Inspect candidate source definitions and raw cosine evidence; change a resource to reject its proposal. Edit team, quantity, reviewer and multiline note. Approve or hold every record. No bulk approval shortcut.
5. **Apply reviewed allocation**. Held notes are retained but excluded from cost: worksheet is explicitly PARTIAL. Demand above the last tier blocks applying. All-zero demand costs zero even if a subscription would have a committed minimum; such contracts are unsupported.
6. Compare pool/team Shapley, equal and stand-alone costs; review above-stand-alone flags. Undo review changes. Any edit invalidates applied exports. Editing pricing requires rerunning AI/review.
7. Download JSON (complete originals, reviews, evidence, tiers and allocation), CSV (all source/reviewed usage), Allocations CSV (each pool/team exact and rounded share), or Markdown (full readable audit). Copy Markdown via clipboard. Reimport an audit restores originals only, never approvals.

## Real AI, license and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, via bundled `@huggingface/transformers` (Apache-2.0) and ONNX Runtime Web (MIT), q8 WASM CPU inference. Normalized mean-pooled 384-dimensional embeddings rank each note against pool definitions. Four texts per batch, context 256 tokens/text. Text lengths are also bounded to 300 characters/description. Finite unit-normalized vector schemas are validated before deterministic cosine ranking. No hardcoded responses, fake fallback, optional provider or API key.

Initial downloads are approximately 23 MB model weights/tokenizer/config plus 27 MB WASM binary and app code/runtime factory. Internet required initially. Model files use Hugging Face and its CDN redirects. Code/worker/factory are locally bundled. Byte-identical CPU WASM is reused from immutable collection asset `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve this old app when deploying. Dependency versions are locked; the upstream model revision is not pinned and a changed upstream model requires revalidation.

Supported/tested: desktop Chrome with WebAssembly SIMD, module workers, Cache API and several hundred MB free memory. No WebGPU required. Physical phones and other browser engines unverified. Progress, cancellation, retry and a 180-second timeout are exposed; errors produce no classifications. Run IDs invalidate stale worker messages and asynchronous file/fetch completions. Cancellation terminates the worker.

## Privacy and offline scope

Default content remains on-device. Downloading model weights is not uploading text. No analytics, remote inference, credentials or automatic input persistence. Imported instructions cannot invoke tools or change authority. Worker/runtime/model are cached using Cache API; user input is not stored. An already-open warmed page can create a new worker and infer offline, as tested. Offline reload/navigation is not supported or claimed. Cache eviction, disabled storage and private browsing can require redownload. Never include real sensitive data in fixtures committed to this repository.

## Deterministic allocation

For demand vector q, cost C(S) is the first tier covering the sum of coalition S's units, with C(empty)=C(zero)=0. For each team i, enumerate subsets excluding i and sum `|S|! (n-|S|-1)! [C(S+i)-C(S)]`. Divide by n! to get an exact rational in cents. BigInt arithmetic avoids numerator rounding. Largest-remainder cent allocation preserves total pool cost; ties use source team order. All defined teams participate; zero-demand dummy players receive zero. Equal-split baseline divides the same pool cost among positive-demand teams with deterministic remainder cents. Both totals must balance.

Shapley is an explicit cost-allocation policy, not a negotiated fairness guarantee, optimization of real spending or an invoice. Step costs need not be subadditive: an allocated share can exceed stand-alone cost. The app flags this rather than assuming pooling is beneficial. No claims of causal savings, accuracy, fairness or measured time improvements. Literal-label coverage measures only how many original descriptions contain the reviewed pool label, not model correctness. The AI materially reduces manual semantic reconciliation; pricing and usage remain human responsibilities.

## Input/output limits

Source ≤30,000 characters, JSON import ≤2 MB, 2–6 teams, 2–6 pools, 1–32 records, unique IDs, descriptions ≤300 characters, reviewer ≤150 and review note ≤1,000. Quantity is integer 0–1,000,000 per record; tier ceilings 1–10,000,000; tier cents 0–100,000,000. Total approved pool demand must fit its largest tier. Bad/empty JSON, invalid dimensions, unknown teams and malformed embeddings are rejected. No PDF/Excel/CSV import. CSV textual formula-leading cells are apostrophe-protected; JSON preserves literal originals. Signed numeric financial fields remain numeric.

## Development and deployment

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261114-12/`. Required per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; do NOT run the individual deploy in this collection. Publish only from repository root using `npm run predeploy` then `npm run deploy` to assemble all apps under `deploy/`. See root README for Pages commit/public verification.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Core tests and an independent Python Fraction/permutation oracle check allocations; production browser tests load real default model on two distinct fixtures, inspect reviewed artifacts and fresh-worker offline behavior. Fault injection is confined to defensive failure checks, not successful inference. Small synthetic fixture outcomes do not establish general accuracy. Similarity cannot establish resource identity, units, billing policy, completeness or instruction truth; human holds remain essential.
