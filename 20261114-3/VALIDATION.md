# Observed validation — 2026-11-14

Production Vite bundle tested in real Chrome with GPU disabled; real q8 MiniLM CPU inference, no mocks on successful paths.

- Community survey: 4/4 known-answer semantic matches. Allocation [14, 5, 11]; variance 1.90389610 versus equal allocation 2.23125000. Tiny synthetic fixtures, not general accuracy.
- Workshop evaluation: 4/4 known-answer semantic matches. Allocation [18, 6]; variance 3.54166667 versus equal allocation 4.58333333. Tiny synthetic fixtures, not general accuracy.

## Passed checks

- real CPU inference Community survey
- real CPU inference Workshop evaluation
- review multiline undo hold clipboard exports reimport
- offline fresh-worker real inference warmed page only
- empty invalid oversized duplicate unsupported input
- cancel retry stale-input 24-segment batch lossless roundtrip
- count corrections missing strata caps and undo
- instruction-like unrelated content stays unapproved data
- desktop 390px 320px layout labels touch focus
- 1,125 independent exhaustive two-stratum integer-allocation cases, plus 240 seeded exhaustive 3–6-stratum cases and 300-sample bounds, including zero SD and population caps.
- Independent Python CSV/JSON/Markdown parsing, formula-like multiline escaping, retained IDs/counts, exact budget, population conservation and recomputed variance.
- Fault-injected model-host failure/recovery, worker-download error, unavailable module worker, malformed embedding, timeout and worker error. These tests produced no fake output.
- Built-asset credential-pattern scan; shared WASM/factory byte equality; production base paths.
- Network capture from startup through inference: only GET downloads, no request bodies; no model request before explicit load.
- Viewport screenshots inspected at phone width; no horizontal overflow, labeled editors, ≥44px buttons and visible keyboard focus.

## Limitations

Irrelevant instruction-like text still received a nearest stratum; it remained pending and holding it blocked allocation. This encoder does not establish membership, understand all negation or validate frame overlap. No broad accuracy benchmark, physical-phone/other-browser/assistive-tech audit, offline reload or respondent selection was performed. Supplied SDs and membership require independent verification.

## Publication

Published at https://xianghui.github.io/daily-app2/20261114-3/ . Root predeploy and deploy assembled all 652 apps with zero failures/skips. Pages commit `280e7e79a6ef0c3d97654e17a975ad31161179f6` reached built with a successful deployment. Public gallery, every app asset, worker, factory and shared WASM byte-matched the production files. The complete nine-check real-browser suite passed again at the public URL, including both real CPU fixtures, fresh-worker offline inference, reviewed edits/undo, 24-record batch, artifacts, cancellation/stale-run protection and 320/390px layouts. Public artifacts were reparsed independently. Public defensive failures are covered by local production-bundle injection tests, not claimed as public live-network failures. See public-browser-validation.json, public-asset-validation.json and public-gallery-ui-validation.json.
