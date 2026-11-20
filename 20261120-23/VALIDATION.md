# Climate Ledger validation

Production Vite bundle tested in headless installed desktop Chrome, CPU/WASM, no WebGPU, 2026-11-20. All fixtures are synthetic. Build success alone was not treated as AI validation.

## Observed functional outcomes

- Real MiniLM inference matched **16/16 heating and 16/16 cooling** intended meter links. These tiny simple fixtures are not a general accuracy estimate. Two materially different datasets exercise different meter vocabularies and weather types.
- Library raw before-minus-after mean: **13 kWh/day**, fitted comparison at 5 HDD: **7 kWh/day** (40 before, 33 after). Archive raw: **0**, fitted comparison at 4 CDD: **2** (18 before, 16 after). Pool and bakery comparisons: **10** and **6** respectively. Exact known linear fixtures, not real-world savings evidence.
- Changing a diary meaning from library to swimming-pool heating changed its actual neural proposal to pool. Duplicate site/day then blocked apply until that record was held. Thus actual AI output affects grouping and fit eligibility rather than decorating deterministic demo responses.
- Complete maximum **6 sites/80 records/86 texts**, processed in 22 real batches, exported and audit-reimported. Every original record survived. Reimport discards previous approvals and restores originals only.
- Mandatory approvals/holds, value correction, review-note multiline/quote/comma retention, undo, edit-invalidated exports and current Markdown clipboard were checked. Held rows are preserved and excluded from fitting; insufficient per-period data produces a recheck.
- Independent Python CSV reader parsed downloaded Audit/Summary CSVs and compared every row/site with JSON. Formula-like multiline reviewer notes are apostrophe-escaped in CSV and exact in JSON. Summary rechecks contain reasons and blank estimates, not zeros. Markdown retains edits.
- Core tests check known-answer fits, insufficient/constant/negative fits, no extrapolation, malformed vectors, finite normalized 384-dimensional output, invalid dates/schema and final review guards.

## Failure, stale-run and privacy tests

- Empty, malformed, oversized, duplicate, unknown-type and unsupported-file inputs; invalid reviewed degree days; all-held batches; unsupported reference ranges.
- Cancel/retry, source changes during execution, late cancelled/input-invalidated messages and an old delayed malformed message arriving after a newer **real** inference. Old results cannot overwrite new ones.
- Fault injection only for negative tests: missing WebAssembly, unsupported worker constructor, failed worker download, blocked model host then successful real retry, malformed vector/envelope, worker error, accelerated timeout. Every failure leaves no fake classification/export.
- No model-host request before explicit load. Captured requests throughout production startup/inference contained only GET/HEAD downloads, no bodies or source-note text in URLs. Persisted reports strip all query values/signatures.
- Actual online model run followed by full network-off, terminated worker and **new worker real inference** passed in the same warmed page. This does not test offline app-shell startup or reload; those are not promised.
- Built assets scanned for credential patterns and source integrations inspected. No embedded credentials, external inference, uploads, analytics or provider integrations.
- Shared worker/factory/WASM hashes, runtime 4.3.2 and actual 512-token tokenizer ceiling rechecked. `main` is unpinned and may change.

## Layout and collection

- Desktop 1440px and narrow 390/320px viewports: no document horizontal overflow, labels associated with all inputs, focus outline and ≥44px buttons; screenshots of overview/review/results inspected. Physical devices and engines beyond Chrome remain untested.
- Every inline gallery script compiled with `new Function`; no-script condition fails. New entry exactly once, AI Utilities first, all **755 existing gallery objects unchanged**, existing STL/game categories and searchable legacy cards preserved.
- Combined root build, Pages deployment, public byte hashes and live public inference are recorded in publication reports when complete. No standalone per-app deployment is used.

## Known limitations

The model can confuse unrelated/negated/instruction-like text; all proposals require review. Regression is deliberately simple and descriptive, with no causal attribution, uncertainty interval, out-of-sample performance estimate or automatic weather lookup. Small perfect linear fixture fits do not establish real meter suitability. Same meter boundary, daily frequency, occupancy and temperature base must be checked by a human. No physical-phone inference, offline reload or untested browser guarantee is made.

Reproducible scripts/reports: `core-test.mjs`, `browser-test.cjs`, `defensive-test.cjs`, `extra-test.cjs`, `artifact-test.py`, `runtime-audit.py`, `security-audit.py`, gallery and public asset tests, JSON reports and browser-downloaded artifacts.

## Combined-site size maintenance

First root predeploy correctly refused a **1,000,165,537-byte** combined site. The existing byte-verified deploy-only geometry WASM reuse list was extended by one app, `20261028-3`, preserving its source build and JS compatibility URLs. Reassembly passed at **999,624,273 bytes** (under the unchanged 1 GB guard). The affected legacy app loaded its real shared geometry runtime from `20261028-24`, imported PNG and exported a fingerprint-matching closed-manifold STL. Public recheck and byte audits are recorded separately.

The full real-AI workflow suite also passed against the **assembled root deployment**, not just the individual build. Cold model-download cancellation/retry passed with the real model host initially gated. All 756 gallery cards rendered, with older categories and search intact.

## Public verification

Matching Pages commit `5228ca892bc844551a00b85b6a5dca31fab97721` reached **built**. The full browser suite passed at https://xianghui.github.io/daily-app2/20261120-23/ with actual model inference on both fixtures, maximum batch, human review/export actions, fresh-worker offline inference and request privacy audit. Public gallery preserves 756 cards; the affected older app passed real shared-WASM geometry, PNG import and 1,946-triangle closed-manifold STL export. Reports: `public-browser-validation.json`, `public-gallery-ui-validation.json`, `public-legacy-runtime-validation.json`, `pages-build.json` and public asset hashes.

The expanded legacy asset audit initially encountered the pre-existing Jekyll-filtered `__vite-browser-external-*.js` Node-only shim (404). Inspection confirmed its import is strictly inside the `globalThis.process?.versions?.node` branch; browser worker tests never request it. The audit was corrected to exclude this unreachable Node shim, not browser runtime assets. Legacy/browser deployment configuration was not changed. All actual shared worker/factory/WASM and app/browser assets remain byte-audited.
