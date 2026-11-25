# Observed validation — 2026-11-25

- `npm run predeploy` passed. Browser tests serve the production build at the real base, not Vite development paths.
- `browser-validation.json`: real no-key MiniLM/WASM inference in desktop Chrome with GPU disabled. Two materially different synthetic fixtures matched 6/6 intended contract links, versus 2/6 always-first baseline. Numeric results `[440,6,5]` and `[65,104,95]` matched known answers. Each had two rank-baseline numerical differences.
- `core-validation.json` / `oracle-validation.json`: 23 core checks plus independently computed Python order-statistic comparisons on 300 random arrays and both methods. Boundary p0/p100, singleton, negative numbers and duplicate observations included. These validate arithmetic, not model generalization.
- Maximum 8 contracts, 24 batches, 2,400 observations: real eight-chunk inference; all rows/values retained; actual full audit reimport and fresh AI passed.
- Mandatory approval, contract/method/p/limit edits, convention-dependent upper-limit verdict, multiline formula-like note, reject/hold, undo, copy and snapshot invalidation passed. Original values retained unchanged.
- Actual downloaded JSON/CSV/release artifacts independently parsed by Python; current review, notes, every observation and hold/release scope preserved. See `artifact-validation.json`.
- Fresh-worker real inference passed in a warmed open page with browser network disabled. Only that offline scope is claimed; no offline navigation/reload guarantee.
- Empty/invalid/oversized/unknown input and unsupported file types handled. Actual worker/model download failures passed. Fault injection separately tested unsupported Worker/WASM, construction/runtime failure, malformed vectors, timeout and stale callbacks. Delayed source fetch cancel and real cancel/retry passed. Successful inference tests never use mock responses.
- Network audit: no model request before explicit loading; all captured requests GET without bodies; external paths restricted to model host/CDN. No user data uploads observed. Shared worker/factory/WASM byte hashes verified. Built credential-pattern scan clean; source inspected, no provider integration.
- 1440, 390 and 320px viewport production screenshots, labeled forms, no page horizontal overflow. Desktop/phone input/review/results inspected; keyboard tab order and details toggle verified. Native select text may abbreviate long contracts; full definitions remain in semantic evidence/details and source.
- `quality-challenge.json` records the model's out-of-domain/negation weakness. No fabricated relevance/confidence percentages, universal accuracy claims or time savings.

Publication checks are recorded separately after combined root deployment. Physical devices, other browser engines, cold offline startup and representative real-world accuracy remain untested.

Additional recovery suite (`recovery-validation.json`) passed: actual worker/model download aborts each recover with real AI after network restoration; an intentionally delayed first-run callback cannot overwrite a newer real-AI fixture; delayed imported file text cannot replace a newer source. The first keyboard probe incorrectly assumed reload resets focus; the corrected check explicitly focuses navigation, then verifies Tab/Shift+Tab traversal and Enter expansion. No app change was needed.

## Published production verification

Combined root predeploy/deploy succeeded: 876 apps, zero build failures/skips, 813,735,304 deployed bytes after existing runtime deduplication (guard preserved). GitHub Pages reported **built** at `99fd31a9dfc3ce2436472edffbe6c99377a4681a`, matching remote gh-pages. No duplicate rebuild request was needed.

`public-asset-validation.json` verifies byte-identical public app HTML, JS/CSS, shared worker/factory/WASM and gallery. `public-browser-validation.json` reruns the complete real-AI suite on https://xianghui.github.io/daily-app2/20261125-23/ including both fixtures, maximum batch, fresh-worker offline inference, review/edit/hold/undo/copy/export and phone layouts. `public-artifact-validation.json` independently reopens all 12 downloaded public audit states and associated CSV/release artifacts. `public-gallery-browser-validation.json` confirms all 876 gallery cards, new app search and oldest game search; source script compilation and exact old-entry preservation passed. No digest sent.
