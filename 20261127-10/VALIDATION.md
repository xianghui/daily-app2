# Observed validation — Longlight Desk

2026-11-27. All inputs and exported test artifacts are synthetic.

- Individual production build passed. Core suite: 24 assertions including threshold continuity, fractional stops, ceiling rounding, extreme safe-integer rejection, invalid inputs/schema and original-audit import.
- Real default MiniLM q8 inference in Chrome with GPU disabled, two materially different fixtures: MONO/COLOR and SLIDE/INSTANT, all four intended links matched. First-profile baseline would match one of four. This is a small easy known-answer check, not representative accuracy.
- Fixture 1 linear total 64 s vs rounded corrected 140 s; two reciprocity changes. Fixture 2 linear 33 s vs rounded corrected 50 s; one change. No fabricated confidence/time/quality improvement claim.
- Negation probe selected SLIDE correctly in this case. Instruction-like unrelated text selected COLOR incorrectly as a forced nearest profile; content remained data and no credential request or upload occurred.
- Maximum 12 shots/8 references (20 embeddings, 5 chunks), all rows retained, maximum audit reimported without restoring approvals.
- Mandatory review, relink/reset coefficients, all five numeric/multiline edit fields, export invalidation, undo, holds, copy and actual downloaded JSON/CSV/Markdown round trips passed. Independent Python standard JSON/CSV parsing and independently recomputed exposure math: 358 assertions across both fixtures, reviewed, held and maximum exports. Formula-leading quoted multiline text survived safely in CSV and exactly in JSON.
- 14 empty/invalid/oversized sources plus wrong file format, invalid JSON and 8 MB import limit rejected visibly.
- Real network failures on worker/model host, unsupported Worker/WASM, worker construction/error, malformed vectors, accelerated timeout, input-change stale messages and cancellation during worker fetch passed (10 defensive cases). Successful model results are never mocked; injection is defensive-only.
- Cancellation/retry and fresh-worker real offline inference in a warmed already-open production page passed. No offline reload claim.
- Request capture from page startup through all workflows: all requests GET without bodies; no initial model requests, no source text in request URLs, only documented external model hosts. Persisted audit contains paths/query-key names, not signed temporary URL values. Built text credential-pattern scan passed; this is not exhaustive proof of absence of arbitrary secrets.
- 1440/390/320 px layout checks passed: no horizontal overflow, labeled forms, keyboard export traversal, 44px controls. Screenshots saved for visual inspection.

Final assembled/public verification is recorded below after it completes. Unverified: physical phones/cameras/film, other browser engines, representative semantic accuracy, manufacturer's reciprocity curves, photographic image quality and cold offline navigation.

## Final assembled production bundle

Root assembly passed with **910 apps, zero failures/skips**, **822,830,162 bytes**, below the unchanged 1,000,000,000-byte guard. Shared-runtime deduplication rules unchanged. Final assembled production bundle repeated both real-AI fixtures, full workflow/offline/privacy/layout suite and 358 independently parsed artifact assertions. Gallery script compiled, the new AI entry occurred exactly once, all 909 previous entries remained byte-identical, and browser rendering/search/older categories passed at 1440/390/320 widths. Desktop hero, narrow-phone review and result screenshots were visually inspected; controls and cards were readable without clipping.

Additional real-browser boundary checks passed: two over-limit cards remain visible without clamping; changed-shot metric agrees with the fixture; unsafe numeric output gives a visible error and recovers after editing; invalid reviewed exponent is rejected; all-held reviews retain both shots with zero exposure recommendations. Same-page real recovery after worker-download abort and late schema-valid old result/error isolation passed against the assembled bundle.

## Verified public release

Pages commit **339a16839ca16486b3a6c7c2a6375092b2d58e10** is built; workflow [45920845489](https://github.com/xianghui/daily-app2/actions/runs/45920845489) completed successfully. All **9** public gallery/app/worker/factory/WASM assets matched production bytes. The public URL repeated both real-AI known-answer fixtures and the complete review/export/max-batch/offline/privacy/layout suite. Independent downloaded-artifact parsing passed **358** assertions. Public recovery/stale-run and metric/boundary checks passed; all **910** gallery cards, older categories and search passed. No digest was sent. See public-*.json and publication-status.json for the observed evidence.
