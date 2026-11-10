# Audit Orchard — observed validation

## Local production bundle

- `npm run predeploy` passed after correcting JSX callback syntax and removing an unnecessary CSS import. Real AI success is separately established below.
- `node core-test.mjs`: **624 checks**, including 600 combinations of population shapes/sample sizes/minima, quota feasibility, no replacement/over-allocation, reproducibility and invalid schemas. No inference mocked for quality checks.
- `node browser-test.cjs`: actual Chrome, production bundle, real MiniLM WASM CPU. Office fixture: 6/6 expected proposals; library: 6/6. Both selected three strata. First-N baseline represented 1 and 2 respectively. Literal stratum titles matched zero record texts in both tiny fixtures.
- Actual model processed a maximum 6-stratum/24-record frame in four-text batches, preserving all rows; selection was stable after input reordering and a complete exported JSON import. Model made 3 repeated hotel→catering errors in this wider vocabulary. This challenge is not claimed as perfect accuracy.
- Fresh worker processed real inference with the entire browser context offline after a successful run. Only the already-open-page scope is claimed. No offline navigation/reload claim.
- Reviewed assignment changes, mandatory reapproval, multiline notes, undo, hold blocking, pending validation, minimum infeasibility, oversized sample, empty numeric field, seed edits, reapply and export invalidation tested. Clipboard equaled downloaded Markdown.
- Independent Python CSV parser verified all 6/24 source rows, reviewed fields, selected flags, seed and multiline formula-prefix escaping. JSON round-trip preserved originals and renewed approvals.
- Empty/malformed/oversized JSON, unsupported CSV, oversized files and delayed file-read stale guards tested.
- Cancel during model/worker loading, input changes and real retry passed. Deliberately late terminated-worker messages could not replace the newer result (fault injection is defensive only, never evidence of AI).
- Network and worker-download aborts, worker construction failure, worker error, malformed vector output, accelerated timeout and actual worker lacking WebAssembly were injected. No fake rows/exports; removing network abort allowed real retry.
- Request capture from page load through real inference saw only GETs without bodies, documented model/runtime hosts and blob URLs; no source text in request URLs. No model-host request before explicit loading. No remote provider integration or credentials present.
- Desktop 1440px and emulated phone 390/320px: no horizontal overflow, associated labels and keyboard focus, actual reviewed export actions passed. Screenshots manually inspected. Physical phone performance/other browsers/accessibility screen-reader testing not performed.

Reports: `browser-validation.json`, `core-validation.json`, `artifact-validation.json`, `defensive-validation.json`, `stale-import-validation.json`, `late-result-validation.json`.

## Publication checks

- Gallery: every inline script compiled with Node `new Function`; new entry exactly once, correct category; all 583 previous entries and their order preserved. AI Utilities/new app first; legacy STL/game/SaaS labels retained; responsive gallery passed.
- Root `npm run predeploy` and root `npm run deploy` succeeded. Combined site assembled 584 apps, zero failures/skips; runtime deduplication yielded 920,129,874 deployed bytes. New app files and immutable shared WASM verified after assembly.
- Pages workflow **42911907083** completed successfully for `26053cea7590f110209565a895b4e506acd9b24d`; Pages API reported `built` for the same commit. No hosting retry needed.
- Public URL: https://xianghui.github.io/daily-app2/20261111-7/ . Every app asset (including worker/module factory) and shared WASM returned matching SHA-256 hashes; public gallery matched working source byte-for-byte and contained the new entry once.
- Full production-browser suite passed again at the public URL: two real AI fixture runs, 12/12 known-answer links, max batching, offline fresh worker, cancel/retry, review/hold/undo, input/goal changes, export/clipboard and phone layouts. Independent CSV/JSON parse repeated after public downloads.
- Additional public real-inference test changed an AI-proposed travel record to reviewed supplies, reapproved it and exported: original text/proposal survived, reviewed stratum was supplies, computed stratum populations changed to [2,3,1]. Exports do not use stale AI defaults.
- Built credential-pattern scan had no findings; code review found no provider keys/remote inference/environment credential reads. This is not an exhaustive secret detector.
- Release evidence: `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`, `review-correction-validation.json`, `hosting-attempts.json`, `publication-status.json`.
- Source commit/push is performed after writing these reports using the required commit message. Existing unrelated root modifications remain unstaged. CSV artifact CRLF line endings are intentional; generated Markdown has harmless trailing spaces, so a blanket Git whitespace check flags those exported artifacts, not source-code failures.

## Existing workspace state

Root README/index already contained unrelated uncommitted Receipt Current changes; old untracked `20261105-7/` and `20261109-17/` were present. Preserve them and stage only this utility and its own gallery/documentation additions; do not absorb unrelated source changes.
