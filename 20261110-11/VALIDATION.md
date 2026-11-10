# Observed validation — 2026-11-10

## Local production bundle

- `npm run predeploy` passed. Actual built worker and locally bundled runtime/factory loaded at `/daily-app2/20261110-11/`, sharing the byte-identical immutable collection WASM.
- Real q8 MiniLM WASM CPU inference in headless installed Chrome: Claims desk proposed I/V/R/V (4/4 intended links); Studio desk B/E/P/E (4/4). Literal-title baseline: 0/4 in each. Human-confirmed fixture coverage: 4/4 each; not general accuracy.
- Claims: reviewed stage means 120/330/180 s; current bottleneck bound 72 units/day; proposed 133 with one added evidence server, demand 100. Studio: means 200/450/120 s; current 40, proposed 80 with one added image server, demand 80. These are computed scenarios, not measured throughput gains.
- Negation challenge “No supporting receipts were checked. No paperwork was verified.” proposed evidence verification; unrelated jazz text proposed intake. Both were held. Similarity does not establish occurrence, relevance or identity.
- 1,500 seeded generated cases independently checked exact floor/ceiling with BigInt, count/second conservation, missing-stage blocking, no current-server removal and proposed mean-load capacity ≥ demand. Validated pending-review and invalid-seconds guards, malformed vectors and actual multiline Markdown/formula escaping.
- Production browser's 10 check groups passed: two fixtures; edit/undo/invalid values/missing stage/export snapshot invalidation/clipboard; offline fresh worker; maximum 24 observations/12 stages and original-input JSON reimport; challenge holds; empty/invalid/oversized/unsupported import; cancel/stale-input/retry; desktop and 390/320px layouts, labels/focus/44px controls and export; malformed output/unsupported worker and WASM/accelerated timeout/stale-callback recovery. Fault injection was used only for defensive errors, never successful AI results.
- Separate real-weight-download cancellation test passed; explicit model-host request abort gave an actionable error and no rows, followed by successful actual retry.
- Entire production-browser request trace contained only GETs without request bodies; observed destinations were same-origin and documented Hugging Face file hosts, with no fixture text in URLs. No model host requests occurred before explicit load. Built asset credential-pattern scan had no matches; source has no provider integration or secrets. This scan is not an exhaustive security audit.
- Online inference followed by blocked network and a brand-new worker passed real inference in the same cached open page. **Offline reload/navigation is untested and not promised.**
- Downloaded JSON/CSV/Markdown parsed independently in Python. All four reviewed/held records survived, including corrected 250 s vs original 200 s, multiline formula-prefix rationale, commas, quotes and Unicode. Original-input round-trip at full batch limit passed. Clipboard matched current Markdown exactly.
- Desktop and narrow screenshots saved; no horizontal overflow at 1280/390/320px. Physical phones, other browser engines and assistive-technology user studies untested.

Machine-readable evidence: `browser-validation.json`, `core-validation.json`, `network-validation.json`, `cancel-download-validation.json`, `artifact-validation.json`, `asset-validation.json`, gallery/combined/publication reports. Reproduce with scripts in this folder, using `serve.py` for the production build.

## Combined deployment / public status

Combined root predeploy passed: all 570 gallery entries have deployed index files, root and app bytes match production builds, and the size guard recorded 907,726,384 bytes (<1,000,000,000 budget). All 569 older entries/category definitions remain intact; inline scripts compile and the gallery renders/searches correctly. The complete real-AI browser suite also passed against the assembled deployment. Separate stage-link edit/undo test confirmed an edited link affects exported aggregates, a newly missing stage blocks process capacity, originals survive and confirmed-AI counts update.

Publication outcome is recorded below after attempting the required root publication. No completed public workflow claim is made until public assets and actual inference pass.


### Verified public release

Root `npm run deploy` published gh-pages commit `9cb7e9b52241a1bd83c9e3b20486ffc5688855cc`. GitHub Pages workflow [42740610751](https://github.com/xianghui/daily-app2/actions/runs/42740610751) completed successfully; the Pages API reports `built` for the same commit. Public app HTTP 200. Every emitted HTML/JS/CSS/worker/runtime-factory asset was byte-compared with the production build, and the 26,861,777-byte shared WASM matched SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Public gallery is byte-identical to the assembled root, with 570 entries and all earlier categories searchable.

The **entire 10-group real-AI production-browser suite passed at the public URL**, including both different fixtures (8/8 intended links), offline fresh-worker inference within the open page, full batch, cancellation/retry/stale callbacks, reviews/undo/holds, actual reviewed artifact downloads/clipboard, invalid inputs and defensive fault injection. Public GET-only request trace and 1280/390/320px layout checks passed. Downloaded artifacts were independently parsed again. See `public-browser-validation.json`, `public-asset-validation.json`, `gallery-public-ui-validation.json` and `publication-status.json`. No physical device, offline startup or statistical generalization claim is made.
