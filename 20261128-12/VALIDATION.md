# Closefield Notebook — observed validation

## Local production bundle / assembled collection

- `npm run predeploy` passed. Root `npm run predeploy`: **936 built, 0 failed, 0 skipped**; combined deploy **829,730,583 bytes** at final publication assembly, below the unchanged collection size guard. Existing deploy-only runtime-sharing rules unchanged.
- Real installed Chrome with GPU disabled loaded the actual q8 MiniLM model and CPU WASM. Both materially different fixtures ran end-to-end: `HAND, TTL` and `COPY, TTL`, **4/4 simple known-answer links**. Not a universal accuracy estimate. Each fixture's computed always-compensate disagreement count was 1.
- Independent known answers: first external capture requires 2 s, TTL capture 0.5 s; second external capture 1 s, TTL capture .125 s. Selected exact third-stop ladder times meet required exposure and caps. Infeasible caps preserve complete audits and block Capture CSV.
- **1,000 deterministic cases / 3,072 Node assertions** plus **3,000 independent Decimal/ladder assertions**. Independent Python parsing of actual local JSON/CSV/Markdown downloads brought the total to **3,285 checks**, preserving source rows, order, reviewed fields, multiline quotes and formula-safe strings. Assembled artifacts also passed **3,285 checks**; public counts appear in their generated report.
- Actual downloads of JSON, Audit CSV, Markdown and gated Capture CSV; clipboard content; edited multiline reviewer notes; export invalidation; undo, hold/reject, unhold and changed-profile pending resets passed.
- Maximum 12 captures + 8 profiles = 20 texts in five four-text chunks. All captures preserved; complete audit envelope reimport restores originals and runs actual inference again.
- Fully offline fresh-worker inference passed in the same warmed open page after online inference. Offline reload/navigation is **not claimed**.
- Empty/malformed/oversized source, no records, 13 records, numeric limits, invalid enums/values, bad file extensions, >1 MB file, invalid JSON/control characters passed. Imported instruction-like text remained data; no credential input or upload appeared.
- Real worker/model-host download failures show errors with no fabricated output. Actual model-download cancellation followed by real successful retry passed. Fault-injected unsupported Worker/WASM, constructor failure, worker error, malformed vectors, timeout and stale replies passed. Delayed file import cannot overwrite a newer input; late old-worker errors cannot overwrite newer real inference.
- Desktop 1440px, 390px and 320px layouts passed no-horizontal-overflow checks. Actual viewport hero/review screenshots inspected. All editors have labels; controls are at least 44px tall; keyboard tab focus reaches exports. Physical phones and other engines not tested.
- Request audit from startup through real inference found no model-host traffic before explicit loading, only GET downloads with no bodies, no fixture notes in URLs. Persisted paths strip signed query values. No credentials or remote inference integration exists; built JS/CSS credential-pattern scan passed.
- Eight production/shared assets passed exact byte/SHA-256 audits, including the shared worker, module factory and WASM. Gallery inline scripts compiled with `new Function`; exactly one correct new entry and all **935** prior objects/categories retained. Gallery browser rendering/search passed.

## Important observed limitation

The negated note “Not an external handheld incident meter with symmetric pupils. This uses the through-the-lens camera reading at actual extension.” retrieved **HAND**, although the intended mode was TTL. This is a real observed model error, not hidden by a heuristic fallback. Human verification/hold is mandatory. Similarity cannot establish lens identity or optical facts.

Model estimates assume ambient exposure, valid marked-aperture and pupil measurements, fixed lighting/ISO and correct interpretation of TTL. No real camera/film/flash validation, image quality, measured time savings or physical exposure improvement is claimed.

## Publication

**Published and publicly verified.** Pages built commit `4a3968794fda56f07311ff86875e1e1354e7cc6c` matches remote gh-pages HEAD; workflow [46101378247](https://github.com/xianghui/daily-app2/actions/runs/46101378247) completed successfully. Public URL: https://xianghui.github.io/daily-app2/20261128-12/ .

Public real inference matched both fixtures (4/4 simple links), repeated the observed negation failure, completed maximum-batch/chunking, review/edit/undo/hold/relink, actual download/clipboard and offline fresh-worker checks. All ten defensive checks, model-download cancel/retry, real network recovery/newer-run identity, delayed-import identity and input guards passed publicly. Eight exact public app/shared asset hashes passed; all 936 gallery cards and older categories render/search. Independent parsing of public artifacts plus Decimal replay passed **3,285 checks**. Public phone-width results screenshot inspected.

Generated public reports and `publication-status.json` retain evidence. The final source commit/push is recorded in Git. No builder digest was sent; unrelated pre-existing drafts remain excluded and untouched.
