# Restore Trail — observed validation

## Production app and real AI

- React + Vite `npm run predeploy` passed. Default inference is the actual shared MiniLM q8 worker, not mocked results. Chrome desktop, headless, GPU disabled, WASM CPU.
- Workshop archive fixture: 6/6 intended system labels. Exact minimum chains: inventory `stock-full → stock-step-a → stock-step-b`, 102 MB; orders 48 MB. Shortcut route is 150 MB. Newest-file-only: 0/2 complete targets, versus 2/2 complete reviewed chains.
- Editorial fixture: 6/6 intended system labels. Articles snapshot 5 unreachable: delta requires missing snapshot 3. Image chain uses newer full plus delta, 75 MB, versus older full route 150 MB. Newest-file-only: 0/2 complete; chain planner 1/2. Gapped target omitted from transfer total, not presented as a zero-cost success.
- These are tiny synthetic known-answer examples, not general semantic accuracy. A negated/unknown system containing instruction-like text still received a nearest label and remained pending. Holding it withholds the complete plan; it cannot request credentials or change authority.
- Independent exhaustive enumeration on 120 bounded random forward graphs matched exact minimum cost or unreachable status. Input/schema/forward-dependency guards passed. Every selected chain is also checked at runtime for continuity, exact target and size sum.

## Review, exports and batch limits

- Approval required for each archive. Identity edits reset approval. Size/identity changes affected exact route/cost as expected (workshop 150 MB when final delta remapped; 81 MB after reducing shortcut size). Invalid reviewed base greater than destination blocked.
- Hold withheld plan CSV; JSON kept all six source archives and reviews. Undo restored the prior review. Every edit invalidated prior exports. Multiline `=SUM(1,2)` reviewer note with quotes/comma survived JSON, escaped CSV, Markdown and clipboard.
- Browser-downloaded JSON/CSV/Markdown parsed independently with Python. Archive rows matched every original/review; manifest rows matched every step, exact target and supplied MB. Gap rows explicit. JSON audit reimport restores originals only.
- Maximum 8 systems/32 archives: real 40-text inference in ten chunks, 32 reviews, all 32 ordered steps preserved, eight target chains. Full audit JSON reimport succeeded. This is conservation testing, not a claim about distinguishing numeral-only system labels; maximum-batch links were human-corrected before approval.

## Failures, cancellation and privacy

- Empty, invalid, null, missing-schema and oversized JSON; unsupported CSV file and >4 MB import handled without fake results.
- Blocked model download, unavailable WASM, failed worker download/construction, malformed result vector/envelope, worker error and accelerated 180-second timeout produced errors and no output. Network unblocked and real retry succeeded.
- Cancellation during cold model loading observed progress; real retry passed. Delayed prior worker messages after cancellation/source change were ignored. Delayed file read and worker-source fetch could not overwrite newer source. A later successful real run survived an old delayed error.
- No model-host request before explicit load. Production inference request capture contained GET-only asset downloads, no bodies or input text in URLs. Reports retain host/path/query-key names, not temporary signed CDN query values. Integration inspection found no provider, credential, telemetry or content-upload path; built-asset credential-pattern scan is an additional check, not an exhaustive security proof.
- Worker/factory/WASM hashes checked against immutable dependencies. Current tokenizer metadata verified 512-token model context. Source inspected: four-text chunks, mean pooling, normalization, q8 and WASM. Pipeline max-length option is not trusted as a 256-token enforcement mechanism.
- With network disabled after a successful warm run, a fresh terminated/recreated worker completed actual inference in the already-open page. This does not test or promise cold offline navigation.

## Presentation and deployment

- Desktop 1440 and narrow 390/320 CSS-pixel layouts: no horizontal overflow; controls have labels, focus works, touch controls ≥44px. Normal viewport hero/review/results screenshots inspected. Real physical phone hardware and browsers other than Chrome untested.
- Gallery inline scripts compiled using Node `new Function`; missing scripts fail validation. New entry exactly once, AI Utilities first, all 798 previously published entries retained with original categories. Working-tree unrelated recovery edits preserved but excluded from release.
- Root predeploy: 799 builds, zero failures/skips. Combined site 999,057,322 bytes under unchanged 1,000,000,000-byte guard. No new deployment sharing rule or legacy app source changes. New app and existing shared runtime bytes match assembled production tree.
- Final Pages status, public asset byte matches and public real-inference rerun recorded in machine-readable reports when completed. See `publication-status.json`, `pages-watch.json`, `public-asset-validation.json`, `public-browser-validation.json` and `public-gallery-validation.json`. No digest sent.

## Final public result

Pages `7687927ae2024f80c8621b4dd78484a59defaec4`, workflow `45011039396`: built/success. All nine public assets byte-match the assembled tree. Full public real-inference workflow passed including both fixtures (12/12 simple labels), maximum batch, reviewed exports and independent parsing, offline fresh worker, privacy checks and 799-card preserved gallery. No new runtime sharing rule, configuration change or digest.
