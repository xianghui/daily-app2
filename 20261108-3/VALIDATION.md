# Observed validation — 2026-11-08

## Real AI, production bundle

- `npm run predeploy`: passed. Browser checks served the built `dist/` under the production base, using real Chrome, actual quantized MiniLM inference and bundled worker/runtime paths. Real inference success tests are not mocks.
- Two materially different synthetic constructs: Workplace trust and Digital confidence, four items each, with known keys forward/reverse/forward/reverse. **8/8 observed suggestions matched these deliberately small fixture keys.** Both reverse-worded pairs changed the scoring workflow; no general accuracy claim follows.
- Added negation challenge: “I do not trust my coworkers” correctly suggested reverse with small margin; **“I do not distrust my coworkers” incorrectly suggested reverse instead of forward**. Thus 1/2 on this harder illustrative pair. This demonstrates that the model is a similarity aid, not a reliable polarity parser. Documentation and UI explicitly require the official scoring key and human acceptance; directions remain editable and holdable. No scores are applied from an unreviewed suggestion.
- All 32 items × 100 respondents (3,200 cells) survived batch processing, review, JSON export and independent validation. Embedding chunks of four processed all 34 texts including anchors. The full exported audit is 145 KB; its reimport was separately checked after raising the audit-file cap to 500 KB while retaining the original-input limit of 60,000 compact characters.

## Workflow and defensive behavior

- Pending decisions block application. Direction edits reset the decision; hold produces all-null scores for that item. Notes, undo, reviewed direction changes, snapshot invalidation, CSV copy/download and JSON download passed.
- Empty, malformed, oversized and invalid input handling passed; core checks include range violations, mismatched respondent counts, repeated IDs, empty text, duplicate anchors and excessive item count.
- Cancel/retry and input changes during a pending worker fetch/run produced no stale result records. Asynchronous file import is guarded by the same run ID.
- Worker-download abort recovered on explicit retry. A separate fresh browser context blocked Hugging Face downloads: real model loading failed with “Failed to fetch”, no substitute outputs; removing the route allowed real inference to recover.
- Fault-injected malformed embedding shape/non-finite output, unsupported runtime/worker construction error, worker runtime error and shortened timeout all produced errors and no fabricated records. These defensive-only tests are not model success evidence.
- All observed browser requests were GET downloads without request bodies; no user-content upload integration exists. No model-host requests before explicit loading. Common credential-pattern scan of production assets found no matches. No real datasets or keys used.
- After a successful online run, all browser network disabled, a fresh blob worker loaded cached worker/factory/WASM/model/tokenizer and completed actual inference. Scope: already-open tab only. Offline reopening is not claimed.

## Artifacts and arithmetic

- Independent Python `json` and `csv` parsers reopened downloads. Every original item/text/response cell preserved, all reverse values equal min+max−original, holds/missing remain null, and totals/scored-item counts/missing-or-held counts reconcile.
- Changed-cell count matches actual non-null differences versus all-forward originals; midpoint values correctly do not count as changed.
- CSV reviewed direction/notes/scores match the current JSON snapshot. Core tests cover commas, quotes, multiline notes and formula-prefix escaping. JSON export reimport preserves original input exactly (not reviewed decisions; documented).
- `artifact-validation.json`, `browser-validation.json`, `extra-validation.json`, `core-test.log` and `asset-audit.json` contain reproducible observations.

## UI, gallery and limits

- Desktop screenshot and 320/390px phone-width screenshots; phone review/export actions pass and document width does not exceed viewport. Explicit labels and focus styles, ≥44px touch controls. Physical phones, screen-reader audit and other browser engines are untested.
- Gallery inline scripts compiled with `new Function`; missing scripts fail validation. New AI utility entry exactly once, AI Utilities first, every previous entry preserved. Browser gallery checks verify 519 cards, old categories and search.
- App intentionally offers no psychometric validity, clinical cutoff, imputation, instrument reliability or universal polarity accuracy. Upstream model revision is not pinned; future weights can change suggestions.

Publication evidence is recorded separately in deployment/public validation files after root publishing. A successful branch push alone is not public verification.
