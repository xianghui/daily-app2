# Observed validation — 2026-11-23

## Local production bundle

- `npm run predeploy` passed; actual Chrome browser ran the production bundle and shared immutable real model worker, with GPU disabled.
- Two materially different synthetic batches: 6/6 plan matches. Building statements: graduated charges **5500, 1600, 1700 cents**; two billed discrepancies; three all-units disagreements. Quarterly exceptions: **1000, 4900, 1500 cents**; one billed discrepancy and one all-units disagreement. Tiny fixtures are not general accuracy.
- Independent Node per-unit oracle: **1,200** charge comparisons passed, plus zero/exact-boundary/neighbor/max quantities, unit conservation, invalid schema and malformed vectors.
- AI impact checks capture vectors from real inference: both batches yield 3 usable rows versus 1 for the first-plan-only baseline. Thus inference changes actionable downstream charge coverage; no sample responses or deterministic fallback. A negated competing-service challenge misclassified water as storage. This is explicitly documented, not silently corrected.
- Source immutability; required approve/hold; edits reset approval/invalidate exports; undo; multiline notes; held rows; fractional/invalid numeric blockers; exact-unit mismatch; 24-record batches and full audit reimport; clipboard and actual downloads passed.
- All network disabled after warmup: terminated worker replaced by a fresh worker and real inference succeeded. Only this already-open-page scope is claimed, not cold offline startup.
- Requests captured from startup: no model requests before explicit load, GET-only downloads, no bodies and no source-context strings in URLs. Sanitized request audit contains hosts/paths and query-key names, no signed CDN values.
- Independent Python CSV/JSON parser reopened actual downloaded artifacts for both fixtures, current edits, holds and maximum batch. Every source record and multiline/quoted/formula-like notes survived according to documented CSV protection. Independent per-unit charge oracle agreed with downloaded totals; released row counts matched approved valid records.
- Defensive tests: worker download abort, unavailable Worker, constructor/error, malformed model output, timeout, stale delayed messages, cancellation during fetch. Actual model-host abort failed closed and subsequent real retry succeeded; delayed file import did not overwrite changed source.
- 1440/390/320 px layouts: no horizontal overflow, labels on every control, 44px control targets, screenshots of input/review/results. Physical phones and other browser engines not tested.

## Release checks

Assembled/public checks and exact Pages deployment commit are recorded in `publication-status.json` after completion. `assembled-*` and `public-*` evidence distinguishes those runs from local tests. Model/runtime asset byte audits compare actual served bytes, not merely HTTP status. Runtime dependencies are the immutable shared assets documented in README. No provider credentials or personal data are used.

## Assembled collection and public host

- Root predeploy completed with **824 built, 0 failed, 0 skipped**. Every pre-existing gallery entry and category was preserved, with the new AI utility first. Every inline gallery script compiled using Node `new Function`; browser rendered all 824 links without errors and phone overflow.
- Combined deployment: **999,946,811 bytes**, below the unchanged 1,000,000,000-byte guard. No new runtime-sharing rules or legacy source changes were needed.
- GitHub Pages build/deployment `45153382875` completed successfully for the actual remote gh-pages head `55ae47bc566acef66d98af95a60798505c38321a`.
- Public gallery, app HTML/JS/CSS, immutable worker, factory and WASM: **7 byte-for-byte matches** against assembled deployment. Credential-pattern scan found no matches; not an exhaustive secret-detection claim.
- Both public real-model fixtures and captured-vector AI-impact checks passed with the same six matches and documented negation challenge. Public desktop/phone fresh-page layout checks passed. Full public workflow/export outcome is recorded in the final publication-status JSON and public browser/artifact reports.
- Unrelated pre-existing source recovery work remains untouched and excluded from this app's source commit. Existing public gallery entries are retained in the combined deployment, including those recovered in the pre-existing working tree.

Final public full workflow suite passed, including 24-record batches, review/edit/undo/hold/block, clipboard, all exported artifact families and actual downloads. Five exported artifact sets were independently parsed with all required originals/reviews and exact-cent charges retained. Fresh-worker inference with network disabled passed on the public production bundle.
