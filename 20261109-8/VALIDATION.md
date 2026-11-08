# Observed validation — 2026-11-09

- Production Vite bundle tested in real headless desktop Chrome, WASM CPU; two synthetic cases (printer service, website help desk) each yielded F1/F2/F3 for the three intended signatures, 6/6 tiny known-answer matches. Not a general accuracy estimate.
- Both cases: exact optimizer covers 3 approved observations in 5 estimated minutes vs input-order baseline 2 in 4 estimated minutes. Assumed coverage/minutes, not measured gains. Independent subset coverage oracle checked all 12 budgets for both catalogs (24 scenarios); all-held plan selects zero checks.
- Negation challenge: “There is no paper jam and the printer feeds every sheet correctly.” still retrieved F1 jam signature (cosine ~0.803). Mandatory review is essential; AI is not a diagnostic system.
- 12 signatures + 24 observations and 12 checks tested with real four-text batched inference; no observations lost. JSON import round trip retains complete original object, requires fresh inference/approval.
- Review, change/reset approval, hold, undo, export invalidation, clipboard exact Markdown match, browser downloads, independent Python CSV/JSON parsing and multiline Unicode/formula-like note escaping passed. CSV retains every observation/signature/test; selected IDs match reviewed JSON.
- Fully offline context, fresh worker, real inference succeeded after online caching in the same open page. No offline navigation/reload claim.
- Empty/invalid/null/oversized/duplicate input, over-limit records, invalid coverage reference/budget, unsupported import rejected. Cancel/retry, input-change cancellation and artificially delayed stale callbacks cannot overwrite current results.
- Defensive fault injection verified malformed vectors, missing WASM, timeout, worker construction failure. Real network-aborted model and worker-download failures leave no fake results; unblocking and retry loads real inference.
- Request capture from initial navigation through actual inference: no model request before explicit Load AI; all requests GET with no bodies, file-download URLs only, no user content in URLs. Built-asset credential pattern scan performed; no integrations requiring secrets exist. This is code/request inspection, not a formal security audit.
- Desktop and 390/320px widths: no horizontal overflow, labeled controls focusable, review/export actions work. Physical phones, screen-reader audit, non-Chrome engines, cache eviction and cold offline navigation untested.

Machine observations: browser-validation.json, network-validation.json, edge-validation.json; browser screenshots and downloaded synthetic artifacts included. Public URL/asset verification recorded separately after deployment.

## Publication verification

Combined root predeploy: 547 apps assembled, zero failed/skipped; every prior gallery entry preserved (546 older entries), scripts compile and new AI entry occurs once. Root deploy published gh-pages commit `85c27adcb4bb60f9c279d2059d849a4a86145728`; Pages workflow `42533396509` succeeded and Pages API reports the same commit built. Initial public probes ran before completion and timed out; rerunning after built passed, without a repush or rebuild request.

Public gallery rendered with AI Utilities and older categories. App HTML, JS/CSS, worker, runtime factory and shared WASM hashes match local production files. Complete browser suite rerun at https://xianghui.github.io/daily-app2/20261109-8/ passed both actual inference fixtures, 36-text batching, review/export round trips, offline fresh-worker real inference, narrow layouts, cancellation and defensive checks. See public-validation.json and public-browser-validation.json. Root and individual build assets contain no user credentials; no personal fixtures used.
