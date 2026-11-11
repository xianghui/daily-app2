# Basket Signal

A local-AI receipt reconciliation and basket-association worksheet for small-shop merchandisers. This is not a generic chatbot, POS connection or sales forecaster.

## Workflow

1. Load **Cafe receipts** or **Garden receipts**, paste JSON, or import a JSON file. Supply 2–6 catalog products (`id`, `title`, `description`) and 1–24 receipt item lines (`id`, `basket`, `text`). Basket IDs group the supplied lines into transactions; ensure full transaction coverage yourself.
2. Set `minSupport` (integer co-occurring basket count, 1–24) and `minLift` (0–24) in input JSON. The defaults are illustrative.
3. Explicitly choose **Load AI & reconcile items**. Download progress and four-text inference batch progress appear; Cancel terminates the worker. Retry starts fresh. Input changes cancel prior work and discard outdated reviews/results.
4. Inspect every original line, ranked semantic candidates and catalog description. Correct product or basket ID, add a note, then approve or hold/reject each line. No bulk auto-approval. A held line excludes its **entire reviewed basket** from all association denominators and counts. This avoids treating an unknown item as absent, but excluded baskets can introduce selection bias. Original basket IDs/texts never change.
5. Apply reviewed baskets. Repeated product lines count once within each complete basket. The worksheet ranks pairs meeting both thresholds by lift, count and stable IDs. It displays a same-denominator popularity baseline: the two most frequent products, ID tie-break.
6. Download JSON, Audit CSV, Pairs CSV or Markdown, or copy Markdown. Edits and undo invalidate the applied export snapshot; apply again. Discarding a worksheet leaves source/review intact. Download JSON can be imported again, restoring **original input only**, not approvals; real inference and review must be renewed.

## Real AI and deterministic work

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX sentence embeddings. English-focused short receipt notes, not reliable SKU matching or negation handling.
- Runtime: bundled Transformers.js 4.3.2 and ONNX Runtime Web WASM, CPU, one thread. Normalized mean-pooled 384-dimensional vectors, 256-token context, four-text batches. Text is capped at 400 characters; model tokenization can truncate token-dense text. Model cosine similarity is **not confidence**. No hard-coded sample responses or deterministic substitute for inference failure.
- AI matches inconsistent receipt wording to catalog descriptions; this reduces exact-title lookup failures. It cannot verify purchase authenticity, commercial equivalence, item returns or missing transactions.
- Everything after embedding-based ranking is deterministic: human review, whole-basket exclusion, deduplication, support, conditional shares, lift, thresholds and exports. Imported instructions are inert data with no access to tools/credentials.
- `support = together / complete baskets`; `lift = together × complete baskets / (A count × B count)`. Conditional shares are observed fractions, not model confidence. Undefined fractions are null in JSON and blank in CSV. Zero co-occurrence with nonzero marginals has lift zero. All held baskets produce no recommendations, not fabricated results.
- The popularity baseline is descriptive, not an accuracy benchmark. The UI also counts exact-title baseline matches and AI/reviewer agreement; neither is independent accuracy. No sales gains, measured time savings, causality, statistical significance or future-demand prediction are claimed.

## Downloads, privacy, cache and device limits

First explicit model loading requires internet: approximately 23 MB model/tokenizer/configuration from Hugging Face (`huggingface.co`, `hf.co`, redirected CDN such as `us.aws.cdn.hf.co`), plus ~27 MB same-origin WASM and <1 MB bundled app/worker/factory code. Model host may change redirects or availability. Model uses the host's default revision; changing upstream artifacts can affect future results.

The default path has no API key, paid service, remote inference, analytics or user-content upload. Only model files and static assets download. Receipt data remains in page/worker memory; no receipt persistence is implemented. Model/runtime/worker files are cached with Cache API where supported. Downloads save only at the user's request. Clipboard writes occur only from the explicit copy button.

WebAssembly SIMD, module workers, a secure context (HTTPS or localhost), and several hundred MB available memory are required. CPU WASM is the default, not an untested fallback; WebGPU is not required. Desktop Chrome was tested. Physical mobile devices, Safari/Firefox/Edge and low-memory devices are not verified. No claim of universal phone support. Network, worker, model, malformed-vector and 180-second timeout errors leave no AI suggestions; retry or use a compatible browser. No fake fallback.

After one successful online run, fresh-worker offline inference is tested **only in an already-open page**. Offline navigation/reload/install are not promised; there is no service worker. Cache eviction/private mode or denied storage can require downloads again. Cancelled downloads may leave reusable cached files.

Input originals ≤18,000 characters, import envelope/file ≤1 MB, catalog 2–6, receipt lines 1–24, IDs/basket IDs ≤40 characters, title ≤80, descriptions/receipt notes/reviewer notes ≤400. The UI accepts JSON only, not CSV/PDF/image receipts. Blank, duplicate, oversized and malformed inputs are rejected. Exported JSON has schema `basket-signal/v1`, originals, all reviews/candidates, included/excluded baskets, marginal counts, **all** unordered pairs, qualifying shortlist, baseline and metrics. Audit CSV preserves every line; Pairs CSV includes below-threshold pairs and source basket IDs. CSV string cells beginning with spreadsheet formula characters get a leading apostrophe; genuine numeric measures remain numeric. Markdown escapes table/HTML content.

## Development and deployment

React + Vite. `npm install`, `npm run dev`; `npm run predeploy` builds with base `/daily-app2/20261112-1/`. Required per-app deploy script/dependency are retained, but **publish from collection root only** (`npm run predeploy`, `npm run deploy`), never this app's deploy script.

The immutable byte-identical WASM is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` to avoid duplicating ~27 MB per utility. Preserve that earlier app asset. The module factory and inference worker are bundled with this app. See `runtime-assets.json` for hashes.

## Validation and known limitations

See [VALIDATION.md](VALIDATION.md), executable tests and JSON reports. Two synthetic known-answer fixtures, real browser inference, an independently checked arithmetic oracle, actual downloaded artifacts, cache/offline behavior, failure injection, stale-result guards and desktop/phone viewport layouts were checked on the production bundle. Successful inference tests never replace the real model. Defensive fault injection is labeled separately.

The negation challenge incorrectly chose coffee for “Not espresso coffee. This is brewed green tea from tea leaves.” Unrelated instruction-like text also received a catalog item. Both required holds: similarity ranking always proposes a nearest catalog item, never proves relevance. Closely related products, brands, multilingual notes and large catalogs are not validated. Tiny association samples are unstable; multiple comparisons, promotions, seasonality, missing/selected baskets, refunds and product value/quantities are out of scope. Use the output as a human-reviewed exploratory merchandising worksheet, never automatic promotion or inventory action. All fixtures are synthetic.

Public release verified: https://xianghui.github.io/daily-app2/20261112-1/ — matching runtime hashes, both real-AI fixtures, complete workflow/export tests, already-open-page fresh-worker offline inference and preserved gallery passed after the first collection deployment.
