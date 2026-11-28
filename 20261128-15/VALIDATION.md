# Divider Bench — observed validation

Synthetic fixtures only. No private documents, provider credentials or real hardware data.

## Local production build

- `npm run predeploy`: passed; real Vite production JS/CSS, shared immutable worker/factory/WASM at their true `/daily-app2/...` paths.
- Real browser, Chrome CPU with GPU disabled: both materially different synthetic batches produced expected `DMM/SCOPE` and `DAQ/PANEL` matches (**4/4** simple known-answer links). Actual model vectors/evidence are recorded in `local-browser-validation.json`.
- High-impedance batch: one old-pair loaded failure and unloaded-only false pass. Lower-impedance batch: two failures/false passes. All four chosen pairs satisfy loaded voltage, current and both divider-resistor power limits.
- Negation probe **failed**: DMM proposed for a note rejecting DMM in favor of PANEL. Documented in UI/README; approval is mandatory. No universal accuracy claim.
- Fresh-worker real inference succeeded with all network disabled in the same open warmed page. Cold offline startup/reload **not tested or claimed**.
- Full 8-profile/12-job/24-resistor input processed in five model chunks, preserving all 12 jobs. Exported audit restored original inputs and ran inference again.
- Review/edit/relink, explicit hold/reject, undo, pending-review export lock, apply-snapshot invalidation, infeasible-current-cap gating, copy and actual JSON/CSV/Markdown/bench CSV downloads passed. Multiline `=SUM(1,2)` review text survives JSON/Markdown and is formula-escaped in CSV.
- **2,405 independent assertions** passed using Python CSV/JSON/Markdown inspection plus Decimal conductance equations and candidate enumeration on 250 generated cases and downloaded jobs. Both selected pair optimality and all nominal hard constraints checked.
- Empty/malformed/oversized source, empty/too-many jobs, invalid target/fields, unsupported import format and file-size/control guards tested.
- Real worker/model network aborts fail visibly with no fabricated classifications; cancellation/retry, unsupported Worker/WASM, construction/worker errors, malformed vectors, timeout and late-result guards tested. Fault injection is only for defensive branches, not successful AI tests.
- Desktop 1440px and phone-width 390/320px screenshots, no horizontal document overflow, labels, keyboard focus and ≥44px action/input targets checked. Results table is deliberately internally scrollable. Physical phones and other engines **unverified**.
- Network capture from startup through real inference: only GET asset downloads, no request bodies, no synthetic content in request URLs; no model host request before explicit run. Runtime paths/hashes and built-asset credential-pattern scan are independently recorded.

Additional recovery/import/download-cancel checks and assembled/public outcomes are recorded alongside their runnable scripts and JSON reports. The publication state must be read from `publication-status.json`, not inferred from build success.

## Assembled collection

- Root `npm run predeploy` assembled **939** apps, zero failed/skipped; combined site **830,533,375 bytes**, below the unchanged 1,000,000,000-byte guard. Root deploy lifecycle rebuilt and published the same combined tree, never a per-app deployment.
- The complete production-bundle real inference/review/export/max-batch/offline suite passed on an absolute-root assembled server. Independent downloaded artifacts again passed **2,405 assertions**.
- All **eight** new/shared public-runtime candidate files matched exact production bytes/SHA-256; built-text credential scan had zero matches.
- Defensive schema/unsupported/network/timeout branches, same-page real recovery, late old-worker output versus newer real inference, actual model-request cancellation followed by real retry, delayed-file identity and inert imported instructions passed against the assembled tree.
- Every inline gallery script compiled via Node `new Function`. New entry appears once with `ai-utility`, first category is AI Utilities, all previous **938** entries/categories are unchanged, and old/new searches plus desktop/narrow layouts passed. Original read-only gallery was parsed separately (**3,514** entries); no objective duplicate was found. No writes were made there.

Public validation and final Pages commit are recorded in the public reports and publication state after the actual live-site checks complete.

## Public release verified

- GitHub Pages built exactly `19853ef842d1c29d8b8bc828d40b7f0ce0ef0e5d`; workflow [46115360835](https://github.com/xianghui/daily-app2/actions/runs/46115360835) completed successfully. Public root gallery bytes match the assembled root.
- Public app and all **eight** app/shared runtime assets return exact expected bytes/hashes. Public real CPU inference passes both known-answer batches (4/4 simple links); the documented negation failure reproduces. No fake or deterministic fallback was used.
- Full public review/edit/hold/undo/apply/copy/download, infeasible gating, maximum batch, audit reimport, offline fresh-worker, source/file/format guards, defensive faults, real network recovery, stale-run protection, delayed-file identity and actual model-download cancel/retry checks passed. Public downloaded artifacts independently passed **2,405 assertions**.
- All **939** public gallery cards and earlier categories remain; old/new searches work. Desktop/narrow screenshots and label/focus/touch/overflow checks passed. Credential-pattern scan found zero matches in built text assets; real network capture contains GET asset downloads only.
- No physical hardware, real phones, other engines, or offline cold startup was tested or claimed. The original collection and unrelated drafts remain untouched. No digest was sent.
