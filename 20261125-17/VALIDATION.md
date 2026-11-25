# Podium Desk — observed validation (2026-11-25)

## Production bundle / real AI

Individual `npm run predeploy` passed. Chrome headless with GPU disabled loaded the real same-origin worker, WASM CPU runtime and q8 MiniLM weights. No model request before explicit Run. Both synthetic examples ran actual embeddings (6 texts per batch), not mocked results. Known answers were defined independently of inference.

| Fixture | Intended policies | Actual proposals | Correct |
| --- | --- | --- | --- |
| Workshop prize | competition, exact rows, dense levels | competition, competition, dense levels | 2/3 |
| Service timing | dense levels, competition, exact rows | dense levels, competition, dense levels | 2/3 |

Both hard-cap requests failed semantic intent. Tests record the wrong proposals, explicitly correct those two review selections and then check exact shortlist identities. Workshop reviewed shortlist counts are 4/3/5 versus 3/3/3 baseline; service counts are 4/2/2 versus 2/2/2. This small 4/6 result is not general accuracy, fairness or safe automatic decision-making. The UI and README disclose it. Candidate scores, fixture outcomes and network-path-only audits are in `browser-validation.json`; raw signed CDN tokens are not persisted.

## Workflow / schema / artifacts

- Both fixtures: applying pending reviews blocked; review corrections change shortlist membership; cutoff edits change selection; zero cutoff blocked; note/hold/undo invalidates exports; copy uses latest applied Markdown.
- Actual browser downloads: complete JSON, CSV, Markdown, approved-only shortlist CSV. Quoted commas, embedded newlines, formula-like text, Unicode, negative numeric scores and reviewer notes checked.
- Maximum 24 requests / 8 profiles / 32 texts (8 inference chunks), 40 rows each: all 960 source records retained; complete audit reimport restores identical originals. Review approvals are deliberately not restored.
- `core-test.mjs` generates 1,800 scenarios. Independent Python sqlite3 ROW_NUMBER / RANK / DENSE_RANK queries verify every rank and selected identity. Python csv.DictReader checks downloaded original rows, score values, notes, escaping, selections, counts and holds. Initial local suite: **13,922 assertions** in `artifact-validation.json`. Run `node core-test.mjs` before `python3 artifact-check.py`; the generated `core-cases.json` is intentionally ignored, not a public app asset.
- Empty, invalid, excessive size/count, null score, unsupported direction/mode, duplicate ID, decimals/control chars, invalid formats and oversized import fail without suggestions. Finite normalized 384-dimensional vector counts/dimensions required.

## Privacy / cache / defensive behavior

- Recorded production-startup-through-inference requests were file GETs only, no bodies and no user context in URLs; hosts restricted to local/same-origin and documented Hugging Face/CDNs. Source review: rows/scores stay in page state; descriptions/context go only through worker postMessage. No provider integration, keys, user URL fetching or telemetry. Credential pattern scan passed (`bundle-security-audit.json`); a pattern scan is not exhaustive security assurance.
- Successful warm run, terminated worker, all networking disabled, then fresh-worker real inference in the same open page passed. **Offline reload/navigation/cold startup is untested and not promised.** Cache storage can be evicted. No WebGPU was available/needed in the GPU-disabled suite.
- Real worker-download abort and real model-host download abort produced errors/no fake proposals. Same-page model-network recovery retried actual inference successfully. Clipboard failure left downloads usable.
- Fault injection used only for defensive tests: unavailable Worker/WebAssembly, constructor error, worker error, malformed vectors, accelerated timeout, stale error callback. All fail visibly or are suppressed when stale. Delayed worker fetch cancellation prevents late worker construction. Cancel followed by real retry passed.
- A deliberately delayed older worker error could not replace a newer **real model** result. Delayed File.text could not overwrite a newer source example.

## UI / collection

1440, 390 and 320px browser layouts: no document overflow; controls >=44px; inputs/selects/textareas labeled. Keyboard Tab focus and Enter-opening details passed. Normal-viewport hero/review/results screenshots inspected at 320px; all score columns remain visible, labels/notes wrap. This is layout emulation, **not physical phone testing**; other browser engines and assistive technologies untested.

All inline gallery scripts compiled with Node new Function. New entry exactly once, first, area `ai-utility`. All **869** previous entries preserved unchanged; total **870** cards, category ordering/labels retained and old-entry search works. Root assembly preserves every previous app and required runtime path. Assembled combined site **812,136,675 bytes**, below the unchanged 1,000,000,000-byte guard; no new deduplication rule was needed.

## Publication

Public checks are recorded separately in `publication-status.json`, `public-asset-validation.json`, `public-browser-validation.json`, `public-artifact-validation.json` and `public-gallery-browser-validation.json`. A deployment command alone is not proof; status must match the gh-pages head at `built` and public app/runtime hashes and actual inference must pass before completion.

Harness note: the first public run saved its complete successful assertion report but stalled during Chrome close. Its test process was stopped after validation; browser cleanup was bounded to ten seconds and the public suite was rerun. This changed only the harness, not inference, assertions or the deployed app.

Final public release verified: matching Pages commit `a7fb9195dea1950bb9d11beafecd3917c0be48d5` reached **built**; workflow `45574280679` succeeded. Seven exact public assets matched; the full public real-model/review/edit/24-request/offline/privacy/export/phone-width suite passed, followed by **13,922** independent SQLite/CSV/artifact assertions and all **870** public gallery cards. Final combined site: **812,136,675 bytes**. No size-guard or deduplication-rule change; existing untracked recovery work remains untouched and excluded from staging. No digest sent.
