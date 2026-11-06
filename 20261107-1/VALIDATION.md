# Validation — Catalog Concord / 2026-11-07

Production bundle tested in headless installed desktop Google Chrome through Playwright. Actual MiniLM q8 inference ran on WASM CPU, not a mock or server. Fault injection is used only for failure defenses. Reports: `browser-validation.json`, `live-browser-validation.json` (public checks passed), `asset-audit.json`, gallery and deployment reports.

## Observed local outcomes

- Office supplier fixture: black writing pens → PEN (similarity ~0.594), laser printer paper → PAPER (~0.861), corrugated shipping cartons → BOX (~0.661); identical pen wording with unit `box` remains unmatched because catalog PEN uses `each`. Exact-description baseline 0; 3/4 semantic links. Workshop fixture: safety eyewear → GOGGLES, protective gloves → GLOVES, steel wood fasteners → SCREWS. Baseline 0; 3/3 links. Seven expected decisions on seven synthetic records, **not a population accuracy claim**.
- Maximum 40 supplier records × 30 catalog entries: all 40 exact pen descriptions map to P0; 70 descriptions processed in four-text chunks (18 model batches). All records retained; exact baseline 40, honestly showing no semantic coverage improvement for literal matches.
- Unit-incompatible options absent, below-threshold matches withheld, reject/undo restore correct review state; editing notes invalidates applied exports. Download/copy reflect reviewed values. JSON preserves source text and catalog, all matched/unmatched items. Python independently parses downloaded paired `export-edited` and `export-quoted` CSV/JSON and compares every original/review field. Quoted commas, quotes, multiline source description and formula-like cells survive (CSV safety apostrophe, exact JSON).
- Empty/malformed CSV, duplicate IDs, oversized cell/file/record count, duplicate catalog SKU, unsupported PDF and oversized upload produce visible errors. Core tests reject malformed 384-vector schema, missing rows and unit-incompatible forged review. Import/file completion and late worker results cannot overwrite newer inputs.
- Successful run followed by **network-disabled real inference in a newly created worker** passed. Reopening the whole app offline is not claimed. Reload online reuses cached model without additional remote requests. No model requests before explicit start.
- Cancellation/retry, cold model-download cancellation/retry, blocked Hugging Face downloads/recovery, blocked WASM/recovery passed. Unsupported Worker/WASM, malformed vectors, timeout, worker construction/runtime errors and deliberately late results fail safely without suggestions. These defensive cases are explicitly fault-injected; successful model checks are not.
- Request capture: only GET/HEAD asset requests to Hugging Face/CDN; no request bodies or supplier text in URLs. Runtime/worker assets come from app origin. Built text credential-pattern scan found zero; source integration review found no providers, keys, analytics or uploads. A regex scan is not a universal secret detector.
- 1440px desktop, 390px and 320px narrow layouts: no horizontal overflow, screenshots visually inspected at desktop/320px. Labels, keyboard focus, touch controls, phone editing/apply/export and clipboard tested. Real physical phones, Safari/Firefox, low-memory devices and screen-reader announcements are not certified.
- Gallery: every inline script compiles with Node `new Function`; new AI-utility entry once, all 495 previous entries unchanged, AI Utilities first, historical categories preserved, search and 496 cards render. Root predeploy assembled 496 apps, 0 failed/0 skipped.

## Limitations

Semantic equivalence is not exact SKU equivalence. Material, dimension, variant and pack-size differences can be missed; human specification review is essential. Unit synonyms deliberately do not match; normalize your unit taxonomy explicitly. Similarity/gaps are not calibrated probabilities. No conversion, deduplication, ordering or external purchases. English descriptions are preferred; cache can be evicted; first run requires internet and considerable memory/download. All fixture data is synthetic.

## Reproduction

`npm run predeploy`; `python3 serve-test.py`; `node browser-test.cjs`; `node core-test.mjs`; `python3 export-roundtrip.py`; `python3 audit-assets.py`. Browser harness requires this machine's Playwright and installed Chrome; use TEST_URL and REPORT to target production. Public asset hashes and matching built Pages commit are recorded separately in `deployment-validation.json`. Combined publishing uses the parent deploy script.

## Hosting recovery

The first Pages build succeeded but GitHub’s deployment action timed out while `updating_pages` (600,000 ms limit). Retried the existing gh-pages commit through the documented legacy build endpoint; no application inference failure, republish loop or Pages-source change. The public verification report, when present, is the completion evidence, not the original branch push. See `deployment-attempts.json`.

The rebuild of the canceled version was immediately rejected as canceled. A fresh empty gh-pages commit was then pushed with the **identical site tree**, retaining the canceled commit as its parent. This changes only the deployment identity, not content, Pages configuration or publishing contract. Public verification targets that fresh commit.

A recovery mistake sent a duplicate legacy-build request while a matching Actions workflow was already active (the Pages API was still reporting the older failed build). GitHub concurrency canceled the active deployment. Recovery now checks Actions run state separately, waits for all active matching workflows to finish, and uses one new deployment identity without another POST. This operator error is recorded rather than attributed to application inference.

Final preservation check found that trimming the whole CSV before parsing could remove whitespace from the last unquoted cell. The parser now passes raw input to Papa Parse. Core assertions preserve leading/trailing ID, description and unit spaces; the browser quoted-import fixture ends with an unquoted `ream ` unit and the independently parsed export must preserve that space. The final bundle was rebuilt and the real-model browser suite rerun after this fix.

## Public completion

GitHub Pages built commit `9b446ae3ce110d64f3fbbc1aae394bb2cb10dab0`. Every production file was fetched from the public app and matched local SHA-256, including worker, WASM and runtime factory. The live browser reran both real-model fixtures (7 expected decisions), fresh-worker offline inference, reject/undo, edited reviewed downloads/clipboard, and 1440/390/320px no-overflow checks with zero page errors. Downloaded public CSV/JSON are retained as `live-export-reviewed.*` and independently parsed with Python. Public gallery renders all 496 cards, earlier categories and the new entry once. No user content uploads were observed.
