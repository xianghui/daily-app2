# UNPUBLISHED DRAFT — hosting blocked

Three GitHub Pages deployments built successfully but timed out in synchronization; the new URL remained 404. This app is excluded from the completed gallery/combined deployment. Local real inference and workflow validation passed; public asset/inference verification could not run. Resolve hosting and repeat public checks before promotion.

# Pair Compass

A private, static-host React + Vite utility for operations measurement coordinators comparing two instruments. Input: descriptions of methods, a predeclared absolute tolerance/common unit, and individual specimen-tagged readings. Bottleneck: reworded instrument notes make pairing laborious. Output: mandatory human-reviewed method links and complete specimen pairs, an exploratory Bland–Altman worksheet/plot and auditable JSON/CSV/Markdown.

## Use

Choose either synthetic example or paste/import JSON. Edit `methods` (one `reference`, one `candidate`), `tolerance`, `unit` and `readings` (`id`, `sample`, `text`, numeric `value`). Press **Load AI & reconcile readings**, inspect source and cosine evidence, correct method/specimen/value and approve or hold each reading. Undo reverses review changes. Confirm the assumptions and apply. A hold, incomplete/duplicate pair, fewer than three pairs or unconfirmed assumptions blocks statistical interpretation, not complete audit export. Any review edit invalidates exports until reapplied. Export current JSON/CSV/MD or copy Markdown. Importing an exported JSON audit restores only original inputs; rerun/review is intentional. No instrument calibration or external actions occur.

## Real AI and privacy

Default no-key AI: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX via Transformers.js 4.3.2 and ONNX Runtime Web, WASM CPU. The model creates normalized 384-dimensional mean-pooled embeddings; cosine ranking compares note meaning with both supplied method definitions. This is actual neural inference, not literal matching or regex. Structured finite normalized vectors are checked before ranking. Four texts per batch, 256-token truncation. Text is data, never instructions.

First run needs internet and roughly 23 MB model/tokenizer downloads from huggingface.co and hf.co/CDN redirects plus 26,861,777-byte same-origin WASM. App JS, worker and WASM factory are bundled locally. The byte-identical WASM is shared from immutable `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve it in combined deployments. Loading reports per-file and batch progress; cancellation terminates the worker, run IDs discard stale work, timeout is 180 seconds, and explicit retry never substitutes fake AI.

User content stays in browser memory. No optional provider, API keys, telemetry or content upload. Tests captured only GET asset downloads and no user text in URLs/bodies. Model/runtime/worker use browser Cache API where allowed. **Tested offline claim: fresh-worker inference in an already-open page after an online successful run. Offline reload/navigation is not promised.** Cache eviction/private browsing can require downloads; export before closing. Browser/model host receives normal download metadata, not reading content. No real personal data is included.

## Devices and limits

Tested desktop Chrome (headless production bundle), with module workers, WebAssembly SIMD and Cache API. No WebGPU or server required. Phone viewports 320/390 px tested, physical phones and other browsers not tested. Network/model/runtime errors are surfaced with retry instructions. Unsupported runtime is not silently replaced.

Original JSON ≤40 KB; audit import ≤1 MB. Two methods; titles/name ≤100, unit ≤20, descriptions/text/verification notes ≤400 characters. 2–64 readings, unique source IDs, source/specimen IDs ≤30 ASCII letters/digits/_/-. Finite numeric values within ±1,000,000; tolerance >0 and ≤1,000,000. At least three complete independent pairs for exploratory results. CSV/PDF input unsupported. Same specimen must have exactly one approved reading from each method. The application cannot detect falsely declared specimen identities, unit mistakes or repeated subjects behind different IDs.

## Deterministic analysis and honest comparison

Candidate minus reference differences and paired means feed bias, sample SD and estimated limits of agreement `bias ± 1.96 SD`. Compare the declared symmetric tolerance to **bias alone** (simple baseline) and **both estimated limits**; show actual count within tolerance. Plot pair mean against difference for manual trend/spread inspection. Literal-title baseline counts source notes containing an exact supplied method title. Retained AI links are review choices, not accuracy/confidence. No fabricated speed or quality claims.

Limits of agreement are **not confidence intervals**, calibration, interchangeability certification, or accuracy against ground truth. Assumptions: common units, independent specimens, simultaneous single readings and approximately normal, stable-variance differences. Plot trends require human interpretation; the app does not test normality, proportional bias or heteroscedasticity. No repeated-measure model, uncertainty intervals for limits or clinical/safety use. Sets <30 pairs are prominently preliminary; larger sets are not automatically adequate.

## Artifacts and reproducibility

JSON preserves original input, every reviewed reading/hold, semantic evidence, pairs, blockers and current analysis. CSV is a complete original/review reading audit; formula-leading text is escaped, numeric fields remain numeric. Markdown contains the summary, every pair and all source readings. No records disappear when held. Actual browser downloads are independently parsed in `artifact-test.py`.

`npm install`; `npm run predeploy` builds; per-app `deploy` exists for the required contract but **do not use it to publish this collection**. Publish using root predeploy/deploy. `python3 serve.py` serves production builds on 6380 with the actual Pages base. Run `node core-test.mjs`, `node browser-test.cjs`, `node network-test.cjs`, `node cancel-download-test.cjs`, `node import-stale-test.cjs`, `python3 artifact-test.py`, `python3 asset-test.py`. Playwright tests use the installed workspace Chrome/Playwright. See [VALIDATION.md](VALIDATION.md) for observed results and publication status.
