# Basket Deflator

A local-AI procurement worksheet for comparing the same purchasing basket in two periods. Higher spending can reflect price changes, quantity changes or both. This app reconciles informal product descriptions before an explicit, reversible human review, then computes transparent price/quantity indices. It does not place orders or change accounts.

## Workflow

1. Choose **Office basket** or **Community garden**, or paste/import synthetic-style JSON. Supply 2–8 canonical `items` (unique ID, label, description), a `context`, `maxInflationPct` discussion threshold and 1–24 `observations` (unique ID, description, `period` base/current, `priceCents`, `quantity`). Edit the target in JSON before running.
2. Explicitly click **Load AI & reconcile inputs**. Real neural embeddings compare each rough line with product definitions, materially resolving supplier paraphrases instead of exact-name matching. No canned responses or deterministic fallback exist.
3. Inspect the original and top-two semantic evidence, correct product/period/cents/quantity and approve or hold every row. Value edits reset approval. Review notes support multiline text. Undo reverses review edits; any edit invalidates the applied export. Holds preserve originals and block the complete calculation.
4. Apply the reviewed basket audit. Each product needs exactly one record per period. Missing/duplicate/held cells block indices. Same product quality, pack size, currency, tax/discount basis and coverage must be checked by a human. No silent aggregation of repeated purchases.
5. Export current JSON (originals + reviews + validated arithmetic), audit CSV, ready-only Basket CSV or Markdown checklist; copy Markdown. Reimporting JSON restores originals only and requires fresh AI/review. Review notes and original data survive export; spreadsheet formula-like strings receive a leading apostrophe in CSV, numeric values remain numeric.

## Actual AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX feature extraction; 384-dimensional normalized mean-pooled embeddings. English descriptions work best. Cosine similarity is evidence, never confidence or proof of identical goods. Unrelated/negated product descriptions can still receive a nearest match; hold them.
- Transformers.js **4.3.2**, ONNX Runtime Web WASM CPU, four texts per batch. No WebGPU requirement. Actual worker pipeline uses truncation; inspected model tokenizer ceiling is **512 tokens**. Its unused `max_length:256` pipeline option does not impose a stricter ceiling. All descriptions are capped at 300 characters.
- First run needs internet and approximately **23 MB model plus 27 MB CPU WASM**, plus bundled runtime JS/tokenizer files. Visible file progress, batch progress, cancellation and 180-second timeout. No API key or provider integration.
- Immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating builds. Their text/vector protocol and complete dependency paths are exercised in production-bundle and public tests; SHA-256 audit files record actual bytes.
- Model/tokenizer downloads use Hugging Face and its `*.hf.co` CDN. These are file GETs, **not document uploads**. Purchase content remains in worker/main memory. No analytics, API endpoints, remote inference, content persistence or credentials. Imported text is data and cannot request credentials or change tool authority.
- Cache API stores worker/runtime files and the model runtime caches weights. Tested offline scope: **fresh-worker inference in an already-open warmed page**, not navigation/reload or installable offline app-shell startup. Private mode, quota/eviction and cleared caches may need internet again. Closing the tab loses unsaved input/reviews.
- Requires WebAssembly SIMD, module workers, Cache API and several hundred MB RAM. Headless desktop Chrome CPU is tested; physical phones, other browsers and low-memory devices are unverified. Worker/network/device errors produce actionable messages, never fake AI output.

## Deterministic arithmetic and limits

Prices are integer cents 1–10,000,000; quantities whole packs 0–1,000,000. Source JSON ≤50,000 characters; source/audit file ≤2 MB; context/labels/descriptions 1–300 characters; review notes ≤1,000 characters; target −99 to 1,000 percent. JSON only. Model vector dimensions, finiteness, normalization and counts are validated before ranking. Generation IDs protect worker downloads, file reads and results; cancelled workers are terminated.

Let p0/q0 denote base price/quantity and p1/q1 current. Four exact integer-cent cross-basket sums are computed:

- S00 = Σp0q0, S11 = Σp1q1, S10 = Σp1q0, S01 = Σp0q1.
- Laspeyres price = S10/S00; Paasche price = S11/S01.
- Fisher price = √(Laspeyres × Paasche).
- Fisher quantity = √((S01/S00) × (S11/S10)).
- Fisher price × Fisher quantity = S11/S00, the nominal spending ratio (floating round-off displayed, not hidden).
- Simple baseline: unweighted average of each product’s p1/p0, ignoring purchased quantities. It is a different assumption, not ground truth. Changes show `(ratio − 1) × 100%`; ratios use base = 1.

Both periods need positive spend; an all-zero quantity basket is blocked as undefined. Positive prices guarantee positive cross sums. Bounds keep all integer-cent totals within JavaScript exact-integer range. Ratios use floating arithmetic; output rounded for display only. This is a descriptive worksheet, **not an official inflation statistic**, a causal explanation, a universal cost-of-living measure or a quality/substitution/tax/currency adjustment. Zero quantity is allowed for a product only if its comparable price is still supplied.

## Development and collection deployment

React + Vite, base `/daily-app2/20261116-9/`.

```sh
npm install
npm run predeploy
```

Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist` with gh-pages dependency. **Do not run this individual deploy for collection publishing.** Run the repository root `npm run predeploy`, then root `npm run deploy`, preserving every older app and shared asset. Root README documents matching Pages commit/build verification. Root size guard extends byte-verified deploy-only Manifold reuse to `20261028-22`, preserving its source build and existing JS URLs; test that affected older app’s real geometry/STL export as part of release.

See [VALIDATION.md](VALIDATION.md) for observed fixture outcomes, defensive/offline/export tests and publication status. No real personal data or provider credentials are used in fixtures or assets.
