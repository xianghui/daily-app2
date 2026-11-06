# Coverage Desk — validation, 2026-11-06

## Executed against actual production build in headless Chrome

- React/Vite `npm run predeploy`: passed. Runtime, worker, factory and WASM are local build assets; actual model is quantized `Xenova/all-MiniLM-L6-v2` downloaded from Hugging Face.
- Real model inference on materially different fixtures: security requirements mapped to passages **E1/E2/E3**, kitchen requirements to **E2/E1/E3**. **6/6 top-1 retrieval expectations** passed. The security keyword baseline disagreed on one item; kitchen disagreed on none (5/6 keyword vs 6/6 semantic on this tiny curated fixture only, not general accuracy).
- Actual CPU inference on a 16-requirement batch passed; combined-deploy test also exercises **16 requirements + 32 evidence passages = 48 encoded chunks**, four per model batch, with expected sources and all rows retained.
- All initial decisions remain unverified. Human covered/gap edits, required next action for a gap, owner/note editing, undo, application and export invalidation passed. Changing source resets status (implementation invariant); no automated compliance approval exists.
- Actual downloaded JSON/CSV parsed and round-tripped with all three rows; review status, gap null citation, embedded quotes, comma and newline preserved. Actual clipboard JSON matched applied JSON. Evidence/original inputs survive in JSON.
- Input clearing, oversized chunks, invalid extension, UTF-8 text import, active input changes, real cancellation and retry passed. Old run cannot overwrite changed/new input (ID guard plus terminating active worker).
- Fresh-context Hugging Face network block produced an actionable error and no results; removing block and clicking retry ran real inference successfully.
- Error-only fault injection tested unavailable Worker/device, malformed embedding schema and timeout. These fault injections are NOT used for successful inference or quality claims.
- Offline inference passed **in an already loaded tab with its retained model worker**. An initial attempt to recreate the worker offline failed on worker-script fetching; fixed by reusing the loaded worker for ordinary input changes/reruns. After cancellation/failure, reconnect if script/model assets are not available. No offline page-reopening guarantee.
- A second online page load used model cache with **zero model-host requests**, versus 14 first-load model requests. `cache-validation.json` records actual cache entry sizes. Cache eviction/private mode remain browser-dependent.
- Request inspection: no external requests before explicit run, only GET/HEAD model-asset requests afterwards, no request bodies or input in asset URLs. No content uploads or optional remote inference. Built-asset pattern scan found no configured provider/GitHub credentials; no agent keys were used.
- Desktop 1440px and narrow 390/320px layouts passed no-horizontal-overflow checks. Screenshots retained; desktop screenshot visually inspected. Associated textarea IDs, keyboard focus and 44px primary controls checked. This is not a complete screen-reader or physical-device certification.
- Core invariant tests cover empty/oversized inputs, malformed/zero vectors, normalized dimensions, row retention, gap validation and schema export. Unit tests use basis vectors only for invariants; real browser tests provide AI evidence.
- Root gallery scripts compiled with `new Function`; new entry exactly once as ai-utility, all **483** prior entries retained. Existing category definitions preserved; actual old entries comprise 470 STL + 12 games + prior AI utility (there were no SaaS records in this gallery).
- Combined deploy copies match per-app build hashes, with no missing worker/WASM/runtime assets. Root build reports 484 copied, zero failures/skips. Gallery browser test checks first category/newest card, all 484 cards, old categories and search.

## Limitations / what is not certified

Tiny English synthetic retrieval fixture only. Negation and contradiction may still rank highly: a passage is not proof. No physical phones, Safari/Firefox, exhaustive accessibility audit or offline fresh navigation tested/certified. No time savings or universal accuracy claimed. Asset cache can be evicted. Workers are terminated on cancellation. Spreadsheet users should treat free-text cells as untrusted.

## Evidence

`browser-test.cjs`, `browser-validation.json`, `core-test.mjs`, `core-test.log`, `cache-test.cjs`, `cache-validation.json`, `combined-test.cjs`, `combined-validation.json`, `asset-validation.json`, actual `export-test.json`/`.csv`, `export-roundtrip.log`, and desktop/phone/gallery screenshots. Public verification outcomes are recorded separately after deployment.

## Public deployment verified

Root `npm run deploy` published the combined site. GitHub Pages built gh-pages commit `528a5fd7151ff9eb7d981b4a6c5492c5fadf8376` successfully. The public URL https://xianghui.github.io/daily-app2/20261106-13/ passed the full real-inference browser workflow again, including both fixtures, review/source changes and undo, actual export/clipboard, offline loaded-worker inference, batches, cancellation/input changes, download failure/retry, fault boundaries and phone layouts. Public gallery/max-batch test and public cache test passed (14 initial model-host requests, zero on repeat page load). All 11 publicly served files matched local build SHA-256 hashes; WASM returned the correct MIME type. Evidence: `live-*-validation.json`, `live-*-test.log`, `public-asset-validation.json`, `pages-build-validation.json`.

A temporary Python URL poll was stopped after curl and real-browser checks established publication; it was not used as publication evidence. No Pages configuration changes or individual-app deployment were used. The unrelated pre-existing untracked `20261105-7/` directory was preserved and excluded from this app's source commit.
