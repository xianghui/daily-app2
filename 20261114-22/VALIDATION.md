# Observed validation — 2026-11-14

Production bundle tested in real headless desktop Chrome, CPU WASM (GPU disabled in workflow suite), not mocked inference.

- Bakery market: 4/4 intended product links; cost-minimizing quantities bread 30, flowers 10; total scenario loss 2,000 cents vs mean-demand 6,500 cents.
- Event kiosk: 4/4 links; coffee 60, salad 10; total scenario loss 1,500 cents vs 7,875 cents. These tiny synthetic outcomes are not general accuracy or savings claims.
- Negation challenge mislinked a bread note mentioning negated flowers to flowers. It remained pending and holding it blocked aggregate output; similarity is not reliable negation interpretation. Mandatory review is essential.
- 2,500 seeded independently exhaustive integer-quantity cases checked optimum, smallest tie, cap and baseline domination. BigInt used by implementation for loss comparisons. Another 500 Python exact-integer/Fraction cases with large weighted numerators beyond safe floating-integer range passed. Invalid source/embedding/review schemas reject.
- Actual 6-product/32-scenario inference and audit reimport; no lost records. Missing product coverage blocks aggregate. Review edit/undo/reassign/hold, current-result invalidation, copy and JSON/CSV/Markdown downloads exercised.
- Python standard-library JSON/CSV reopening independently checked all originals, IDs, counts, numeric fields, edited multiline quoted/comma/formula text and final row. Markdown reopened. Fixture and 32-record audit round trips passed.
- Fresh worker with all network offline succeeded in already-open warmed page; no claim for reload/navigation.
- Empty/invalid/oversized source, duplicate IDs, invalid costs/demand/weight/cap, unsupported import, pending and malformed review guard checks passed.
- Fault-injected network/model download, worker download, missing WASM, unsupported Worker constructor, malformed vectors/envelope, worker error, timeout: visible actionable errors, no invented rows or enabled exports. Network retry used real AI and recovered.
- Cancellation/retry and input changes passed. Separate defensive synthetic worker deliberately delivered a late cancelled callback to test run identity; it is **not** used as evidence of AI functionality. Delayed import cannot overwrite newer input. A separately delayed worker download also could not start stale inference after input changed.
- Request capture from production startup through real inference: only GETs without bodies to collection assets and documented model/CDN hosts. No model requests before explicit load, no remote inference integration. Built assets scanned for credential patterns; this is a scan, not proof against all secret formats.
- Desktop 1440 and narrow 390/320 px: no horizontal overflow, labels connected to all fields, buttons ≥44 px, keyboard focus, input/review/results screenshots. Physical mobile devices, assistive technology and non-Chrome browsers untested.
- Initial maximum-batch test found absent memberIds on an empty product; fixed to an empty list, rebuilt and reran the full suite successfully.

Machine-readable evidence: browser-validation.json, defensive-validation.json, stale-validation.json, import-stale-validation.json, edge-validation.json, arithmetic-validation.json, artifact-validation.json and gallery-validation.json. Public/combined evidence is added only after it actually runs.

Combined deployment bundle: all eight real-browser workflow groups passed again; app/worker/runtime bytes matched individual dist and shared WASM matched the installed runtime. Combined gallery UI and script checks passed: 670 old entries unchanged, new AI utility exactly once, 671 cards total; AI Utilities first, legacy categories/search and phone widths preserved.

Public release: first combined Pages deployment built matching gh-pages `faa9a7b3c9333aada410074206594730258b9f76`. Every public app/worker/runtime file plus shared WASM byte-matched the local production bundle. Both real-AI fixtures and all eight public workflow groups passed again, including reviewed artifact downloads/reopening and fresh-worker warmed-page offline inference. Public gallery retained all 670 prior entries (671 total). Public negation challenge repeated the known wrong flower match; mandatory review/hold blocking worked. See publication-status.json and public-*-validation.json.
