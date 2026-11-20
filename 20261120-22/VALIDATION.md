# Observed validation — Cohort Veil / 20261120-22

## Local production bundle

- Required `npm run predeploy` passed. No runtime/model credentials or remote AI integration. Real inference used desktop Chrome with `--disable-gpu`, WASM CPU, not a model mock.
- **Library feedback:** predicted direct/quasi/quasi/payload, all 4 intended roles; exact-value baseline 6 below-k rows, chosen policies 1 suppressed / 5 retained, minimum released group 2.
- **Workshop survey:** predicted direct/quasi/quasi/payload, all 4 intended roles; same 6 → 1 below-k row comparison, 5 retained, minimum group 2.
- Semantic-change test: changing a payload description to “Visitor full name and email address” changed neural role to direct and dropped the column from draft.
- Negated challenge (“Not a name or email address … anonymous numerical survey response …”) predicted **direct**, an incorrect role. Instruction-like prose stayed inert. Human hold excluded it. These eight simple matches are not a reliability guarantee; roles and cells require human review.
- Maximum 12 columns, 100 rows, 15 embeddings in four actual batches, 100-row export/reimport passed. Model scores are labeled cosine, not confidence.
- 1,000 independent integer-bin grouping oracle cases: conservation, source-order retention, threshold membership, no remaining small groups, monotone rarity. Negative and exact-boundary integer bins, all-masked groups, all-suppressed headers, no-quasi blocking, direct-identifier drop guard, malformed input/vectors and illegal review policies passed. See `core-validation.json`.
- Browser downloads parsed with Python's independent CSV/JSON parsers. Current review policies and all originals survived; direct/held columns and suppressed rows absent from draft. Quoted commas, newlines and multiline formula-like strings preserved/escaped as documented. Clipboard draft matched downloaded CSV. Notes survived JSON and Markdown. See `artifact-validation.json`.
- Mandatory review, review invalidation, pending reset on policy edits, undo, holds, strict source schema, unsupported file formats, oversized file/source, bad types, cancellation/retry, and input invalidation passed. Imported audit restores only originals, not approval.
- No model-host traffic before explicit load; observed requests only GET/HEAD with no bodies, source descriptions or fixture values in URLs. Signed CDN query values are not stored in reports. Worker/runtime/model requests only. See `browser-validation.json`.
- Online warming followed by network-disabled **fresh-worker real inference in the already-open page** passed. Offline reload/startup is untested and not promised.
- Desktop 1440px and narrow 390/320px views: no horizontal overflow; labeled controls, visible keyboard focus and ≥44px buttons checked. Normal viewport input/review/results screenshots saved and inspected. Physical mobile devices and other browsers untested.

Additional defensive, assembly and public results are recorded below once completed. Defensive-only fault injection is kept separate from real inference success checks.

## Defensive and cancellation checks

- Cold model download was intercepted while outstanding, cancelled, then retried with the real model successfully. No stale review appeared: `cold-cancel-validation.json`.
- Model-host network failure/recovery, worker download failure, missing WebAssembly, unsupported module-worker construction, malformed vectors/envelopes, worker error and shortened 180-second timeout all produced errors with no fake output: `defensive-validation.json`.
- Delayed cancelled/input-obsolete worker messages were deliberately delivered after termination; run identities ignored them. This is defensive fault injection, not a claimed real model success.
- Initial harness checks incorrectly looked for the JSON button while its sensitive-backup disclosure was closed; selectors were corrected to the visible Draft CSV control, then all checks reran successfully. No app behavior was replaced to satisfy these tests.

## Combined-site validation

Root `npm run predeploy` passed and assembled the gallery plus all 755 entries. New app production files and three shared worker/factory/WASM dependencies matched source production hashes. Combined size **999,898,916 bytes**, below the existing unchanged 1 GB guard; no further legacy runtime sharing rule was needed. Real-model browser suite, fresh-worker offline test, reviewed artifacts and complete gallery rendering/search/older categories passed against the **assembled** production server. No credential patterns found in built HTML/JS/CSS; this complements source and network review rather than proving exhaustive secret absence. See `asset-validation.json`, `assembled-browser-validation.json`, `assembled-gallery-ui-validation.json`.

All 754 previous gallery objects were preserved exactly; every inline script compiled through Node `new Function`; the new ai-utility entry occurs once and AI Utilities remains first. Existing tagline already describes real browser AI/local review/export, and was preserved. Pre-existing unrelated uncommitted source changes/drafts are preserved and excluded from this app's commit.

## Public release

Root `npm run deploy` published combined `deploy/`. Remote gh-pages head and Pages build matched **151b055498e36a6bb60b263fc72f69fa48416091**; status `built`. Workflow **44742101210** completed successfully without a fallback rebuild request.

Nine public gallery/app/worker/factory/WASM files matched assembled SHA-256 bytes. **The entire real-model browser suite reran successfully at the public URL**, including both 4/4 role fixtures, semantic-change output, maximum batch, reviewed exports, local-only request checks and network-disabled fresh-worker inference in a warmed page. All 755 gallery cards, old categories, search and narrow layouts passed publicly. Downloaded artifacts were reparsed independently. See `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-ui-validation.json`, `artifact-validation.json` and `publication-status.json`.

No digest sent. No personal data, secrets, remote content uploads or external release actions. General browser/device limitations and observed negation failure remain as documented.
