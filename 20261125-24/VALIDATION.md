# Carryfield Desk — observed validation

## Local production bundle
- `npm run predeploy`: passed; Vite production base `/daily-app2/20261125-24/`.
- Real MiniLM WASM CPU inference in Chrome with GPU disabled: Department 6/7; Workshop 6/6 known-answer row roles. Both outputs arose from downloaded real model weights. Human review corrected the Engineering heading. Two reviewed batches each exposed one category leak/orphan against the global-fill baseline.
- Harder wording: 4/8 desired reviews. In particular implicit endings and negation misclassify. Model cannot reject unrelated text. `quality-challenge.json` includes all inputs and results. Manual holds/review required.
- `core-test.mjs`: 332 checks/cases including malformed vectors, bounded schemas, held-row resets and mandatory review.
- Independent Python propagation oracle: 300 randomized cases, **15,284 assertions** across every resolved group, witness, status, baseline and original preservation.
- Full real browser suite: 24-row limit / 27 embeddings / seven chunks, audit export/reimport with fresh inference, unchanged source rows and signed values, group/role edits, multiline notes and formula-like groups, exact source witnesses, undo, holds, orphan tidy-export blocking, copy and downloaded JSON/CSV/Markdown/tidy artifacts.
- Independent Python `csv`/`json` parsers: **804 assertions** across downloaded local artifacts, escaping, newlines, source completeness and tidy group lineage.
- Real offline fresh-worker inference passed in already-open warmed page. Offline navigation/reload not claimed.
- Request capture: no model downloads before explicit action, all requests GET/no body, documented static model-host paths only. Source inspection and built credential-pattern audit passed; pattern scan is not exhaustive proof for every possible secret format.
- Ten defensive checks: real worker/model download aborts; injected unsupported Worker/WebAssembly, constructor failure, worker error, malformed vectors, timeout and stale messages; cancellation during pending worker download. Real cancel/retry success covered separately. Fault injections were not used as successful AI evidence.
- Screenshots at desktop 1440px, phone-shaped 390px and 320px viewports; no horizontal overflow; form labels and touch controls checked. Narrow review and hero visually inspected. Physical phones/other engines unverified.

## Scope and publication
This file records observed checks, not promises of general classification accuracy. Shared runtime dependencies retain their original hashes. Public and assembled validation reports will record deployment-specific reruns; source build success alone does not prove publication.

## Assembled combined site
Root `npm run predeploy` passed: **877 apps built/copied, zero failed/skipped**. Existing deployment-only deduplication guard/rules unchanged; combined tree **814,002,142 bytes**. The full real-AI browser and independent artifact suite passed again against the assembled production tree (`assembled-*` reports). Gallery syntax and preservation checks passed: new entry exactly once, 876 older entries unchanged; browser renders all 877 cards, correct AI Utilities ordering, old-app search and new link. Keyboard tab order/example activation passed. Fresh phone hero screenshot visually inspected without clipping.

Additional real network recovery passed: abort model-host downloads in a new context, observe visible failure/no suggestions, restore network and retry in the **same page**, then obtain seven actual model classifications (`recovery-validation.json`).


## Public release verified
GitHub Pages build **ee87baa16fc34ea607e43797894f5e94eda5b82e** reached `built`; workflow **45641858488** completed successfully. Seven public byte/hash audits matched app HTML/JS/CSS, shared worker/factory/WASM and root gallery. Public combined-site report confirms **814,002,142 bytes**, existing guard unchanged. The complete real-model browser suite passed again at https://xianghui.github.io/daily-app2/20261125-24/: both fixture inferences, mandatory review and corrections, exports/copy/undo/hold/orphan blocking, maximum batch/reimport, offline fresh worker, errors/cancel/retry, privacy request capture and desktop/narrow layouts. Independently parsed public downloads passed **804 assertions**. Public gallery renders all **877 cards**, preserves older category/search behavior, and links the new app correctly.

No digest or third-party announcement sent. Physical phones, other browser engines, cold offline startup and representative real-world classification accuracy remain unverified. Unrelated pre-existing recovery drafts remain untouched and excluded from this commit.
