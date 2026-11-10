# Revenue Weave — observed validation

## Local production bundle

- React/Vite `npm run predeploy` passed; worker/runtime emitted under the production `/daily-app2/20261111-4/` base and shared immutable WASM path. Tests use headless installed desktop Chrome and actual WASM CPU MiniLM, not a mocked successful path.
- Two materially different synthetic inputs matched **8/8 intended product links** (four workshop sales, four community-shop sales). Full four-product catalogue matched a further 8/8. Small examples are not a general accuracy estimate. Unrelated instruction-like astronomy text still received a nearest product; held records blocked the bridge. No text was treated as an instruction.
- Workshop bridge: before 60,000 cents, after 57,000, change −3,000; symmetric volume −5,000 and price +2,000 cents. Naive old-price/old-quantity baseline leaves +2,000 cents interaction unassigned. Community bridge: before 60,000, after 88,500, change +28,500 cents. Complete observed product-level arithmetic is in `browser-validation.json`.
- `core-test.mjs`: 2,000 deterministic-seeded random domain cases checked against independent BigInt revenue equations, exact additivity and reversal symmetry; four boundary cases include zero and maximum values. Known fixture totals and review/schema guards passed. This verifies arithmetic, not causal attribution.
- Actual browser-downloaded JSON/CSV/Markdown were parsed independently with Python. Every original record, edited quantity, identity, period and price survived; quoted comma/newline formula-like notes were properly escaped in CSV. Markdown matched clipboard, holds/confirmation blocked calculations, and audit JSON reimport restored original input without approvals.
- Max 24 source rows and four products (28 texts), four-text batches, duplicate/missing cell blocking, all product/period/price edits renewing approval and undo passed.
- Empty, invalid, null and oversized JSON, unsupported CSV, oversized files, delayed file-read cancellation, worker fetch races, cancelled/current-input races, retry, unsupported workers, actual worker missing WebAssembly, network/worker download failure, malformed vector output, worker crash and timeout passed. Fault injection was limited to defensive tests; successful fixtures always used real model inference.
- Fresh-worker real inference with network disabled passed after warming caches in an already-open page. Offline navigation/reload is **not tested or claimed**. Physical phones, other browser engines, slow-device performance and browser cache eviction remain unverified.
- Production-bundle request capture: only GET downloads/no request bodies, documented model-file hosts and same-origin runtime. No model-host requests before explicit load, and no source text in request URLs. Built text credential-pattern scan had zero hits; source has no credential integration, uploads or telemetry. Pattern scan alone is not a security proof.
- Desktop 1440 px and narrow 390/320 px layouts: no horizontal overflow, labeled forms, visible focus and working input/review/export actions. Phone layout screenshots were inspected. Automated desktop emulation is not physical mobile inference validation.

## Collection / publication

Gallery script compiled with Node `new Function`; 580 existing working-gallery entries remained identical and ordered, new AI utility appears once and first. AI Utilities precedes preserved STL, game and SaaS categories. Root predeploy assembled the app plus every gallery entry; byte-matched worker/runtime/WASM paths passed (`assembly-validation.json`).

Public release status is tracked separately in `publication-status.json`. Public inference/assets must pass before this utility counts as completed. Source-only test evidence contains synthetic fixtures, never personal sales data.

## Verified public release

First deployment succeeded: Pages workflow `42881990175`, published commit `cb184df99bb2aa4258e9deb003f491210d9b5f8e`, latest Pages build `built` matched remote gh-pages. Public app/worker/runtime/shared WASM bytes matched production hashes. Both real-AI known-answer fixtures matched 8/8 links, all 10 public browser workflow checks passed including offline fresh-worker inference, and the four-product / maximum-batch suite passed publicly. Downloaded public artifacts were reparsed independently. All 581 gallery entries and legacy categories rendered with the new app first. See `public-validation.json`, `public-browser-validation.json`, `public-max-validation.json`, `public-gallery-validation.json` and `hosting-attempts.json`.
