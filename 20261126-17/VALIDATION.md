# Observed validation — Reciprocal Desk

2026-11-26, React/Vite production bundle, installed headless Chrome on this macOS host. GPU disabled for successful inference checks. Synthetic inputs only. Source folder `20261126-17`.

## Real AI and quality

- Both materially different four-record fixtures ran the real MiniLM q8 ONNX model through the shared WASM CPU worker: **8/8** simple known-answer department links matched (4 workshop maintenance/IT, 4 studio facilities/HR). No mocked inference or heuristic fallback in successful workflow tests.
- Every suggestion began pending; source snippets and ranked department description/cosine evidence were visible. The review layer, not model output, determines applied costs.
- Harder probes: **negation failed** (the IT expense mentioning “not mechanical machine maintenance” matched maintenance); an unrelated strawberry picnic expense also matched maintenance. This forced-nearest behavior requires correction or holds and is not a general accuracy claim. Results are in `challenge-validation.json`.
- Both simple fixture totals were conserved: **150,000** and **100,001** minor units. Direct-only and reciprocal methods had equal total costs but different output burdens. Workshop reciprocal allocations were 78,571 / 71,429 versus direct-only 86,111 / 63,889. Differences are computed allocation sensitivity, not savings.

## Deterministic validation

- `core-validation.json`: **56** schema/review/vector/error assertions passed, including pending/invalid decisions, missing rows, wrong IDs/departments, amount bounds, multiline notes and malformed/non-normalized vectors.
- `independent-core-validation.json`: **269 cases / 8,945 assertions** passed. Independent Python Fraction permutation determinants and Cramer’s rule checked fully loaded support equations, exact production fractions, direct-only comparisons, final largest-remainder cents and source conservation against the JavaScript implementation. Includes six-support/six-output cases, near-closed cycles (9999/1 basis-point splits), zero costs, one-cent totals, maximum amounts and reserved JavaScript object-property IDs. All generated data is synthetic.
- Each runtime application rechecks exact equation residuals and conservation before exporting.

## Production browser workflow

The complete browser suite passed against both individual production build and assembled root deployment (`local-*`, `assembled-*` reports):

- Real online model loading, both synthetic inputs, actual batch progress, CPU inference, ranking review, mandatory approval and applied outputs.
- Editable cost and department, undo, multiline quoted/comma/formula-like reviewer note, hold/reject blocking, undo hold, clipboard and invalidated exports after edits.
- Actual JSON/CSV/Markdown downloads parsed/reopened; audit reimport restores originals but not approvals. Independent Python `csv` parser and Fraction equation checks: **900 assertions per local/assembled artifact set**. All original cost rows survive, reviewed amounts/notes match, output rows retain signed numeric differences, quotes/newlines survive and spreadsheet formula-like text is sanitized.
- Maximum 24 costs / 6 support departments / 6 outputs, 30 embedded texts across 8 batches; all costs retained and 900,000 minor units conserved. Maximum audit reimport and fresh inference passed.
- Empty, malformed, unsupported file, oversized file/source, excess/duplicate records, fractional/negative amount, overlength note, invalid share total, self-service and support rows without production outflow fail visibly.
- Cancellation and real inference retry, actual model-download cancellation, actual model-host failure then recovery. No fabricated suggestions on failures.
- Desktop 1440px and simulated phone widths 390px/320px: no horizontal overflow, associated labels, keyboard export focus and ≥44px button/input/select targets. Normal-viewport hero/review/results screenshots were inspected; no clipped controls found.

## Defensive tests

`defensive-validation.json` and `extra-defensive-validation.json`: actual worker/model download abort; missing Worker or WebAssembly; worker constructor/error; malformed vectors; accelerated timeout; cancellation during pending worker download; late result after source edits; late old-run error after a newer run succeeds; late file-read completion after a source edit. All passed. Defensive-only worker replacement/accelerated timers are explicitly fault injection, not evidence of AI functionality. Successful AI/offline/retry checks used the real model.

## Privacy, runtime, caching

Request capture from production page startup through inference/export: zero pre-load model requests; only GET requests without bodies; no synthetic user notes in URLs; external traffic limited to documented model/CDN download hosts. Persisted audit reports omit signed CDN query values (only host/path and query-key names retained). No remote inference/provider integration, user credentials, analytics or document persistence.

Runtime source was inspected for MiniLM q8 WASM, normalized mean pooling, 384 dimensions and four-text batches. Effective tokenizer model_max_length is 512; the ignored/unsupported pipeline max_length option is not relied on. Built runtime dependencies matched recorded SHA-256. Built text assets had zero matches for the listed credential patterns; this scan supplements source inspection, not an exhaustive secret detector.

After a successful online run, all browser networking was disabled and a **fresh terminated/recreated worker** ran another real inference with matching outputs. This passed for individual and assembled production bundles. Only warmed-open-page fresh-worker inference is claimed offline; cold offline navigation/reload/app-shell startup was not tested or promised.

## Gallery and assembly

- Every inline root script compiled with `new Function`; missing-script and syntax failures are nonzero. Exactly one new `ai-utility` entry, newest first; all **892** older entries preserved byte-for-byte as parsed records.
- Root gallery rendered **893** cards; all old links, category order/labels, search and phone/desktop no-overflow checks passed.
- Root predeploy: **893 built, 0 failed, 0 skipped**. Existing runtime-sharing rules unchanged; combined site **818,300,492 bytes**, below the unchanged 1,000,000,000-byte guard. Unrelated pre-existing drafts remain excluded.
- Seven assembled assets (gallery, app HTML, app JS/CSS, shared worker, factory and WASM) returned HTTP 200 with exact production hashes.

## Not verified / limits

Physical phones, other browser engines, cold offline startup, low-memory devices, representative domain-language accuracy and compliance with a specific accounting policy are unverified. Service shares are supplied assumptions; missing costs cannot be detected. Negative credits, self-service, support rows without any production share, dynamic demand feedback, tax and currency conversions are unsupported. No ledger or external system changes occur. Model weights follow upstream main and may change; cache eviction or host changes require retesting. No digest sent.

Public release checks are recorded below after publication; local/build success alone is not proof of publication.

## Public release verified

- Root `npm run deploy` published the combined site; latest Pages build reports **built** at matching gh-pages commit `f8be71d42d84cdf388ec31e0854be659391a22f9`; workflow **45780945124** completed successfully. No rebuild trigger or retry was needed.
- Public URL: https://xianghui.github.io/daily-app2/20261126-17/
- Seven public assets returned HTTP 200 and exact SHA-256 matches with assembled production files, including shared worker/factory/WASM.
- Full public browser suite passed: both real AI fixtures (8/8 simple links), warmed-page fresh-worker offline inference, max batch/reimport, review/edit/hold/undo, cancellation/retry, malformed/oversized inputs, clipboard, real downloads, request privacy and 1440/390/320 layouts. Zero page errors.
- Independently parsed actual public artifacts: **900 assertions passed**. Public gallery: **893** cards, every older link preserved, working search/categories and no horizontal overflow. See `public-browser-validation.json`, `public-artifact-validation.json`, `public-assets.json` and `public-gallery-browser.json`.
