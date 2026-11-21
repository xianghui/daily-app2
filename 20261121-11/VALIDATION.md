# Observed validation — 2026-11-21

## Real production-browser inference

Chrome headless with GPU disabled, React/Vite production bundle, real MiniLM q8 WASM inference; no mocked success path.

- Shop checkout: 8/8 expected endpoint IDs; exact closed walkthrough 10 estimated minutes; source-order baseline 10. Every approved action covered, necessary return repeated.
- Library workflow: 12/12 expected endpoint IDs; exact closed walkthrough 20 estimated minutes; source-order baseline 26. Estimated difference 6, not measured time saved.
- These are tiny synthetic fixtures, not representative accuracy estimates. A separate negated mixed-topic probe incorrectly mapped “not the loan form; book search list” to the loan screen (expected n0, observed n2). Recorded in `input-stale-validation.json`; all decisions still require human review.
- Max batch: 24 actions / 10 semantic states / 58 texts in 15 chunks, no lost originals. Audit export reimport restores all 24 originals and clears approvals.
- Full-context offline, terminated original worker, fresh worker: another real inference succeeds in the warmed page. No claim of offline page reload/navigation.

## Deterministic correctness

`core-test.mjs`: exact solver compared against independent Dijkstra search on `(current state, covered-action mask)` for 100 seeded strongly connected graphs, including self/parallel actions. All minimum costs matched. Independently verified route continuity, return to start, every approved action covered, total estimate conservation and exact route ≤ baseline. Disconnected approved graphs block output. Pending review, malformed vectors, invalid minutes, missing records and bad source schemas reject.

## Browser workflows and defenses

`browser-test.cjs`, `defensive-test.cjs`, `input-stale-test.cjs`, `cold-cancel-test.cjs`, `file-race-test.cjs`:

- Actual review correction, approval, hold, exclusion and undo; edits disable stale exports. Multiline quoted/formula-like notes survive JSON/Markdown and deliberately sanitized CSV.
- Empty/invalid/null/oversized source, negative source/review minutes, duplicate IDs, wrong/oversized/malformed imports rejected.
- Cold model-download cancellation followed by real retry; warmed cancellation/retry; source changes clear old reviews.
- Delayed actual model result from an older run cannot overwrite a newer real run; delayed file read cannot overwrite newer input. Defensive synthetic late messages also ignored.
- Model-host network abort/recovery, worker-source download failure, unsupported module workers, missing WASM, malformed vector/envelope, worker error, accelerated timeout all yield actionable error and no fake output. Fault injection used only for defensive checks.
- JSON, Audit CSV, Walk CSV and Markdown actually downloaded and independently reopened (`artifact-test.py`); all originals and route steps conserved; current reviewed minutes/notes reflected. Clipboard equals current Markdown. Formula-leading multiline text safely escaped without converting numeric minutes to strings in JSON.
- 1440, 390 and 320px viewports: no horizontal overflow; controls labeled and ≥44px touch targets; keyboard focus styles supplied. Hero/review/results viewport screenshots inspected. No physical phone or screen-reader certification.
- Network capture begins before load: no model download until explicit action; external requests are model-file GETs without bodies, no source content in URLs. No provider integration/upload code or secrets in built text scan. Signed model URLs are not persisted in audits.

## Publishing checks

Gallery inline scripts compile, one new ai-utility entry, all previous entries/categories retained, AI Utilities first. Root combined assembly size guard must pass unchanged. Production app and immutable worker/factory/WASM byte hashes are checked on assembled and public URLs. Real inference, offline scope and artifacts are rerun against the public bundle. Publication commit/status is recorded separately in `publication-status.json`.

## Assembled and public release

Both root predeploy and the deploy lifecycle completed: 768 apps, zero failed/skipped builds, 999,902,443 assembled bytes under the unchanged 1,000,000,000-byte guard. No new deduplication rule or older app modification. Every inline gallery script compiled; new entry exactly once; all 767 previous entries preserved and older categories render/search at desktop and phone widths.

Pages commit `4a40aaeb8a68e5e5a1ba5ee55e75a423b6462d9d` reached **built**, matching remote gh-pages, workflow `44854260862` successful. Nine public gallery/app/worker/factory/WASM files byte-matched the assembled production site. The full real-AI/browser suite passed again at the public URL: both fixtures, fresh-worker offline, maximum batches, review/undo/current exports, clipboard, cancel/retry, graph guards, phone layouts and model-only GET network capture. All artifacts were reopened after public testing. Physical phones/other browser engines and offline navigation remain untested.
