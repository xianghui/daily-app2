# Observed validation — Cost Current

## Local production bundle

- `npm run predeploy`: passed React/Vite production build (not treated as AI proof).
- Real desktop Chrome, GPU disabled, WASM CPU inference using the genuine MiniLM model: **11/11 expected product matches** across two different synthetic catalogs. Print workshop: 5/5, FIFO issued USD 17.00 vs moving-average USD 21.00. Garden store: 6/6, FIFO EUR 51.00 vs moving-average EUR 58.60. Literal whole-ID/label baseline matched 0/11 descriptions. This tiny fixture result is not universal accuracy; name coverage and costing-method comparison are separate measures.
- Model loading was explicit; no model download before clicking. Worker processed four texts per chunk. Maximum case: 12 products + 48 movements = 60 texts; every row and unused catalog item survived apply/export/reimport. Exact depletion ended at zero units and cents.
- `arithmetic-test.mjs`: both hand-computable fixtures, one-cent half-up boundaries, repeated partial issues (33/34/33 cents), negative-stock blocking, and **500 generated sequences × 30 movements**, preserving units and each method's receipt/issue/ending-cost identity.
- Review required before applying; holds, undo, changed product/quantity/cost, negative-stock blocking, nonzero issue-cost rejection, multiline notes, invalidated exports, copy and downloaded JSON/CSV/products CSV/Markdown passed. Separate Python CSV parser reopened exports, verified all row IDs, edited multiline/formula-like notes, balances and layer JSON. See artifact-validation.json.
- Empty, invalid, null, oversized JSON, missing arrays, duplicate IDs, invalid currency, fractional units, negative costs, too-long descriptions, unsupported file types and oversized file rejected.
- Cancel/retry with real inference passed. Separate fault-injection tests: late result after changed input, old run after newer completed run, delayed file read and delayed worker download all ignored. Injected models are used **only for defensive tests**, not successful AI evidence.
- Fresh contexts exercised failed model download with successful real retry, no WebAssembly, failed worker fetch, unsupported Worker constructor, malformed vectors, null envelope, accelerated timeout and worker error. No fake rows or export enabled on failure. See defensive-validation.json.
- After online inference, network disabled and a **fresh worker** completed real CPU inference in the already-open page. Offline navigation/reload is not claimed or tested.
- Every captured request was GET with no body; inspected paths contain no source descriptions. Model/runtime downloads only. Signed CDN query values were omitted from persisted audit. Built text assets scanned for common credential patterns; source has no provider integration or credentials. This is not a universal security certification.
- Unrelated instruction-like text was embedded as inert data and still received a nearest-product proposal; reviewer held it. This demonstrates the limitation: there is no automatic relevance, grade/unit or accounting correctness guarantee.
- Desktop 1440px and emulated 390/320px phone layouts: no horizontal overflow, visible labels, keyboard focus and ≥44px buttons. Input, review and results screenshots captured; narrow overview and results inspected visually. Physical phones and non-Chrome browsers are untested.
- Gallery scripts compile via Node `new Function`; new entry exactly once with correct area; previous 686 entries preserved, 687 total. Real gallery renders AI Utilities first, retains STL/games, search and narrow layout.

## Combined build and public verification

**Published and verified.** Local build success was not treated as public release evidence.

- Combined root predeploy assembled **687 apps**, zero failed/skipped; deployed size **999,965,948 bytes**, below the existing conservative 1 GB guard. No deployment-script changes or legacy assets removed by this run.
- Combined gallery and every published app index present; Cost Current and shared worker/factory/WASM byte-matched source builds. The complete real-model workflow suite also passed against the assembled production tree, including offline fresh-worker inference and downloaded artifact checks. Gallery browser suite preserved all older categories/cards.

- Root `npm run deploy` published combined site; GitHub Pages reports **built** for matching gh-pages head `791a40eef0a13a77dbd80398eed0abe07c838145`, first deployment attempt.
- Live app, CSS/JS, immutable embedding worker, WASM factory and shared WASM, preserved legacy asset paths and full gallery were fetched and byte-matched. No hosting or dependency changes were necessary.
- The full successful real-model workflow suite ran again at https://xianghui.github.io/daily-app2/20261115-14/: both known-answer fixtures, review/undo/edits, actual exports, maximum chunks, stale-input cancellation/retry, warmed-page offline fresh-worker inference, invalid inputs and 1440/390/320px layouts passed. Separate public gallery rendering and GET-only no-content-upload audits passed. Python independently reopened the live-downloaded artifacts. See public-browser-validation.json, public-asset-validation.json, public-privacy-validation.json and public-gallery-ui-validation.json.
- Desktop and narrow-phone screenshots inspected. Physical phones, other browsers, offline reload and accounting-system integration remain untested and unclaimed. Pre-existing unrelated working-tree edits are preserved and excluded from this source commit.
