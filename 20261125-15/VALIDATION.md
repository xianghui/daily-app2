# Observed validation — Literal Loom

Date: 2026-11-25. Synthetic data only. Automated Playwright driving installed real desktop Chrome; production Vite bundle, WASM CPU, GPU disabled for successful inference suites. Desktop and 390/320px emulated phone layouts; real phone hardware and other browsers untested.

## Real AI / task quality

- Catalog filters: inferred `[anywhere-text, whole-field, opening-text]` (3/3 intended concise contexts); 12 source records, six literal matches and **four** sample decisions differ from the unescaped baseline.
- Archive filters: inferred `[opening-text, anywhere-text, whole-field]` (3/3); 12 records, six literal matches and **five** sample decisions differ from baseline. Different terms include backslashes, underscores, apostrophes and percent signs.
- These are tiny developer fixtures, not a held-out accuracy estimate. The first catalog prefix sentence, “Find category fields that start with the search term. Extra text after it is allowed; text before it is not.”, actually ranked substring above prefix. `quality-probe.json` retains that failure plus related real-model probes. The starter was simplified to a concise prefix request. Mandatory review remains; no general reliability claim.
- 8-profile / 24-request run genuinely embedded 32 contexts in eight chunks. All 960 corpus records survived apply/export/reimport. Corpus values are not AI inputs; classification is over short context/profile descriptions.

## Deterministic task checks / artifacts

- Independently compared **5,001** generated escaped/unescaped patterns with Python's SQLite `LIKE ... ESCAPE '\'`: zero mismatches, including mixed Unicode/ASCII case, literal wildcards, trailing escapes, apostrophes, semicolons, newlines and repeated-wildcard maximum-length near miss.
- Actual browser-downloaded JSON parsed; every source record/value conserved. Reviewed terms, multiline notes, quotes, Unicode and formula-like strings survived into the current applied artifact. Edit invalidated exports; mode edits changed match output; holds were excluded from SQL; undo restored reviews.
- Downloaded CSV parsed with Python `csv`, compared cell-for-cell including documented apostrophe formula guards. Self-contained SQL fixtures executed with independent SQLite; every returned literal/baseline decision equaled JSON. Each exported bindable query also executed with its actual `bindings`. No in-app SQL execution or database requests.
- Clipboard readback matched current Markdown; denied clipboard gave a visible download alternative. Largest audit reimport restored originals and required a fresh AI review, not trusted saved approvals.
- Metrics calculated from approved sample decisions. Four/five disagreements describe these finite samples, not AI accuracy, speed, or measured productivity.

## Defensive / privacy / cache checks

- Real worker download abort and real model-host abort yielded visible errors, no fabricated suggestions. Removing the model-host block and retrying in the same page succeeded with real inference.
- Fault injections exercised missing Worker/WebAssembly, worker constructor/error, malformed vectors, accelerated 180-second timeout and delayed stale callback. Input changes suppressed the old callback. Pending worker-fetch cancellation suppressed late construction. Real cancellation followed by real retry passed.
- Delayed file import could not replace a subsequently selected example. Empty/invalid/oversized source, wrong profile shape, missing/empty term, invalid Unicode/control values, duplicate IDs, unsupported format and oversize import rejected.
- Browser request capture began before startup: no model request before explicit run; successful default path used GET file downloads only, no request bodies/content-bearing URLs. Documented model-host and same-origin runtime assets only. Reports omit signed CDN query values. Source reviewed: no remote inference, credential fields or server calls. Built custom JS/HTML heuristic secret-pattern scan found no hits (not an exhaustive security certification).
- After online success, terminate worker, disable all context networking and rerun: actual fresh-worker inference passed in the same open page. Offline navigation/reload is deliberately unclaimed. Cache API can be evicted; private modes may prevent it.

## UI / publishing checks

- Production browser suite at 1440/390/320px: no document horizontal overflow; all input/select/textarea controls have labels; visible buttons/input/select/summary targets ≥44px. Keyboard Tab focused the gallery link and then privacy disclosure; Enter toggled it. Normal-height hero/review/results screenshots inspected. The first rapidly captured hero had a Chrome screenshot artifact; delayed stable captures are recorded separately.
- Per-app `npm run predeploy` and `npm run lint` passed. React + Vite base and required deploy scripts retained. Root assembly: **868** apps, zero build failures/skips, **811,600,716 bytes**, below unchanged 1,000,000,000-byte guard. Assembled app files and root gallery compared byte-identical to their source production outputs.
- Gallery inline scripts compiled with Node `new Function`; new entry exactly once, correctly categorized and newest. All 867 prior entries compared deeply unchanged. AI Utilities remains first; old STL/game/SaaS categories remain. Gallery browser search/render checks passed.
- Full real-inference/workflow suite is rerun against the assembled tree and public site; see `assembled-browser-validation.json`, `public-browser-validation.json`, public asset audit and `publication-status.json` for final publication evidence. Do not infer public success solely from this paragraph or a branch push.

## Reproduction / evidence

`node core-test.mjs`, Python SQLite check of `sqlite-matcher-cases.json`, `node browser-test.cjs`, `node defensive-test.cjs`, `node async-test.cjs`, `node recovery-test.cjs`, `node accessibility-test.cjs`, `python3 artifact-check.py`, `node gallery-test.cjs` and `node gallery-browser.cjs`. Browser scripts use the workspace Playwright package and installed Chrome. `APP_URL`/`PREFIX` select production/public target and artifact report prefix. Serve with `/daily-app2/` prefix and preserve shared runtime paths; `serve.cjs` and `serve-deploy.cjs` are local validation servers. Evidence includes original source fixtures in exported audits, sanitized network paths, runtime hashes, actual downloads, result snapshots and screenshots. No personal data/credentials are fixtures.

## Final public result

Combined root deployment published and Pages commit `9e32e4781fd999a41eb062bb7f6a08e57fe69448` reached `built`; workflow [45558765732](https://github.com/xianghui/daily-app2/actions/runs/45558765732) completed successfully. The public URL, JS, CSS, shared worker, factory, WASM and gallery all returned HTTP 200 with exact expected SHA-256/bytes. Full public real-model suite passed both fixtures, maximum batch, edits/holds/undo, downloads, offline fresh-worker inference, cancellation/retry, invalid inputs and viewport checks. Public gallery rendered 868 cards and retained older-app search. Independently parsed **24** downloaded JSON audits across source-production, assembled and public suites; all companion CSV/SQL files and approved bindable queries passed. See public-prefixed artifacts/reports and `public-asset-validation.json`. No digest/announcement was sent.
