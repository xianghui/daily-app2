# Revenue Weave

A local-first sales reconciliation utility for small-shop operations analysts. Messy before/after product narratives are linked to a supplied catalogue by real browser AI. Human-verified quantities and integer-cent net prices then produce a descriptive price/volume revenue bridge, not a causal explanation, profit estimate or forecast.

## Workflow

1. Load either synthetic example, paste JSON or import a JSON audit. Specify `name`, three-letter `currency`, 1–4 `items` (`id`, `title`, `description`), and up to 24 `observations` (`id`, `text`, `period`: `before`/`after`, `quantity`, `price`). Prices are integer cents per comparable unit. All examples are synthetic.
2. Explicitly press **Load AI & match products**. The real model embeds catalogue descriptions and source narratives in batches of four and ranks cosine similarity. It reduces manual alias matching; it cannot verify identity, pack sizes or numbers. No regex/sample-response AI or deterministic fallback exists.
3. Inspect source snippets and ranked evidence. Edit product, period, quantity or price, write notes and approve or hold every row. Each numerical/identity edit renews review; undo restores the previous review. Confirm comparability and complete coverage.
4. Apply the bridge. Exactly one approved summary per product/period is required. Missing, duplicate or held summaries block all calculations but remain exportable in the audit. Every review change invalidates applied exports.
5. Download current JSON (originals, reviews, exact calculations), CSV (all source records and reviewed fields), Markdown (bridge + full source audit), or copy Markdown. Reimporting an audit restores original input only; approvals must be renewed. Nothing posts to accounting software.

## Actual AI / static hosting

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Learned normalized 384-dimensional mean-pooled embeddings; first 256 tokens of each bounded text. Similarity is not probability or confidence. Every input receives a nearest product even when irrelevant; hold unrelated and negated text.
- `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU single-thread. React + Vite, no backend, credentials, optional providers or paid services.
- ~23 MB model/tokenizer download from `huggingface.co`, `hf.co` and its download CDN, plus ~27 MB same-origin WASM. First load requires internet, current desktop Chrome, WebAssembly SIMD, module workers and several hundred MB memory. WebGPU is not required. Physical phones and non-Chrome engines are not tested.
- Locally bundled worker and runtime factory. The byte-identical WASM is shared at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve that immutable earlier app asset in the combined site. Vite rewrites its URL; no duplicate binary is published.
- Cache API stores worker source, WASM factory/binary; Transformers caches model files. Fresh-worker inference offline works in an **already-open warmed page**, tested with network disabled. Offline reload/navigation is NOT promised. Cache eviction, private browsing and storage policies can force redownloads. UI exposes download progress, cancellation, errors and a 180-second timeout. Retry uses a fresh worker.

## Privacy / authority

Only explicit loading initiates model downloads. Model traffic contains file requests, not sales content. All embeddings, comparisons, edits and exports stay on device; inputs and reviews are memory-only. Downloaded weights and runtime assets are cached, not user sales content. Closing/reloading loses unsaved work. No telemetry, secrets, provider integration, external tools or account actions. Imported narratives are inert data, never instructions to obtain credentials.

## Deterministic method and comparison

For each product, revenue is q×p. The bridge assigns:

- Volume effect: `(q1-q0)*(p0+p1)/2` cents.
- Price effect: `(p1-p0)*(q0+q1)/2` cents.

Their sum equals the exact revenue change. The interaction is split equally, a symmetric convention, not empirical causality. JSON `volume2`/`price2` store twice-cent integers so half-cent effects stay exact; other monetary fields are cents. Display uses three currency decimals. No numerical rounding feeds back into calculations. Across four products all bounded products and sums remain safe integers.

The simple old-price quantity + old-quantity price baseline leaves `(q1-q0)*(p1-p0)` unassigned. The UI computes both and the symmetric residual rather than inventing accuracy or time-saving percentages. Literal title-hit counts are only a matching-workload baseline. Neither baseline is an alternative AI model.

Require comparable periods, one currency, whole interchangeable units and one supplied net unit price per period. No tax/discount inference, foreign exchange, separate product-mix effect, negative return quantities, fractional prices/units or automatic transaction aggregation. With zero sales, prices still need a deliberately chosen reference; results depend on that choice. Three-letter currency is a label, not verified legal tender. Adding/removing products can make comparisons meaningless: include zero summaries only with an explicit reference price.

## Bounds / defensive behavior

Original JSON ≤40 KB, audit import ≤1 MB, 1–4 products, 1–24 source rows, text ≤400 characters, IDs ≤40 simple word/dash characters, title ≤80, quantity and unit-price cents 0–100,000. Four-text inference batches, 256-token model context. Input parsing validates numeric domains, unique IDs and period values. Vector count, dimension, unit norm and finiteness are validated. Run identities protect input/file/worker races; cancel terminates the worker. Unsupported formats/devices, empty/bad/oversized inputs, unavailable network, malformed inference, worker errors and timeout give errors, never fabricated results. CSV formula-like text is escaped; originals survive in JSON.

## Development / publishing

`npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`; **do not use the individual deploy** for this collection. Publish via root `npm run predeploy` then root `npm run deploy`. Base `/daily-app2/20261111-4/`. README and tests are source artifacts, not bundled private data.

See [VALIDATION.md](VALIDATION.md) and the JSON evidence files for actual observed checks, limitations and publication status.
