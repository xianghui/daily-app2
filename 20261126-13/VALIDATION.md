# Observed validation — Unitloom Desk

## Real inference and task quality

Production Vite bundle served at its actual `/daily-app2/20261126-13/` base. Playwright drove installed desktop Chrome with GPU disabled; model was not mocked for successful tests.

- Soap batch: predicted `[start, uniform, end, uniform]`, 4/4 known answers.
- Juice batch: predicted `[end, start, uniform, end]`, 4/4 known answers.
- Soap costs: 261000 total = 216000 completed + 45000 ending, versus 70200 ending for all-physical-units baseline. Difference −25200 minor units.
- Juice costs: 114001 total = 77001 completed + 37000 ending, versus 46600 ending baseline. Difference −9600 minor units.
- These are eight simple synthetic labels and supplied-cost scenarios, not general accuracy or realized savings.
- Challenge: negated material/start note with completion-only packaging matched `end`. Unrelated bicycle note also matched `end` (unsupported forced match). Instruction-like note matched `uniform` but never requested credentials or changed authority. Pending review blocked apply/export. Human verification remains required.

## Exact arithmetic, invariants and artifacts

`core-test.mjs` emitted 1368 start/uniform/end combinations spanning zero/full/partial work, 0/1/large counts, zero/odd/maximum costs. `independent-core.py` checked them with Python Fraction, independently of the JS encoder: 9252 assertions passed, including rounding and exact cost conservation. Positive cost/zero EU throws; zero cost/zero EU is explicitly supported with undefined unit rate.

Downloaded JSON/CSV/Markdown are reparsed with Python json/csv and independent rational calculations. Original records, current review, held records, multiline quoted/formula-like notes, signed allocation deltas and current exports survive. Eleven audit variants include fixtures, edit, undo, reviewed note, hold, hold undo, pattern edit, zero-EU hold, zero cost and maximum batch. Maximum 24-row audit reimports losslessly as originals; no approvals are silently restored. Clipboard content checked.

## Workflow and defensive checks

- Review required; counts/costs/pattern editable; approve/hold, undo and applied snapshot invalidation.
- Pattern change changes allocation; invalid counts/percent/cost block exports; holds exclude unsupported pools without losing them.
- Maximum 24 pools plus three pattern descriptions runs in seven real embedding chunks.
- Empty, malformed, oversized, duplicate-ID/invalid-Unicode source; wrong format, malformed and oversized imports rejected.
- Real cancel/retry; worker and model network failures followed by real-inference recovery.
- Ten defensive checks cover worker/model download abort, absent Worker/WebAssembly, construction error, worker error, malformed vectors, accelerated timeout, stale callback and pending-fetch cancellation. Fault injection is used only for negative checks, not successful AI evidence.
- Newer real input cannot be overwritten by a delayed older callback; delayed import cannot replace newer source.

## Privacy, runtime and offline

Requests captured from app startup through model loading, inference and export: no model request before explicit loading; only GETs without bodies; only same-origin runtime and documented Hugging Face/CDN model downloads. Source text not present in URLs. Public reports retain path/query-key names, not signed CDN token values. No external AI/provider integration exists. Built textual assets scanned for common credential patterns with no hits; source integration inspected (scan alone is not a universal secret guarantee).

Shared worker/factory/WASM hashes match `runtime-provenance.json`. Fresh terminated-and-recreated worker ran actual inference with the browser context offline in the same warmed page. No cold offline navigation/reload claim. CPU runtime tested without WebGPU; offline cache eviction and private-storage behavior are limitations.

## UI

1440, 390 and 320-pixel viewports: no horizontal overflow, form labels, ≥44px controls, keyboard navigation through exports. Normal viewport screenshots of hero, review and results retained; phone hero/review and desktop results visually inspected. Other engines, physical phones, screen readers and constrained-memory devices untested.

## Publication

Root combined assembly contains new app and every previous gallery app, with size below the existing guard; source builds and immutable runtime paths preserved. Inline gallery scripts compile; new entry appears exactly once in AI Utilities ahead of previous categories, and all older entries are unchanged. Assembled and public browser/artifact/runtime/gallery reports accompany this file; `publication-status.json` is the authority for final hosting status.
