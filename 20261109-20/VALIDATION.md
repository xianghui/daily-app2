# Observed validation — 2026-11-09

## Production bundle / real browser

Headless installed desktop Chrome, Playwright, real q8 MiniLM/WASM CPU; not mocked success:

- Print queue proposed `[fabric,paper,fabric,vinyl]`, 4/4 intended matches. Review-approved schedule: objective 32 vs input-order 171; setup 32 vs 73 minutes, zero weighted tardiness, makespan 82.
- Wood queue proposed `[paint,oil,paint,varnish]`, 4/4 intended matches. Objective 30 vs 159; setup 30 vs 66, zero weighted tardiness, makespan 80.
- These eight simple synthetic links are not a general accuracy estimate. Negated textile instruction still retrieved `fabric`; mandatory review/hold is essential. No stance or compatibility verification.
- Eight families + eight jobs: real inference on 16 descriptions in four batches, exact 40,320-permutation scheduler and all eight jobs conserved. All-held roundtrip preserves eight jobs and produces no scheduled work.
- Independent Python exhaustive enumeration verified optimal objectives and input-order baselines in seven downloaded JSON artifacts, including full batch. Every job retained exactly once, scheduled/held partition disjoint, duration/no-overlap checks.
- Review/edit returns family choice to pending; undo, holds, multiline quoted Unicode/formula-like note, apply gating, invalidated exports, clipboard equality, JSON reimport (inputs only), CSV independent parsing and Markdown complete-record checks passed.
- Cache test: successful model run, browser offline, terminate worker, fresh-worker real inference inside already-open page passed. No offline reload/navigation claim.
- Empty/malformed/oversized/unsupported input, missing family, malformed matrix/diagonal, duplicate IDs, out-of-range processing minutes, limits and import rejection passed.
- Cancellation during real weight request and retry real inference passed. Input change cancellation, stale callback ignored, malformed vectors, unavailable module workers, unavailable WebAssembly, accelerated timeout and recovery passed. Fault injection used only for defensive failure tests.
- Model-host abort produces no results; restored network retry runs real model successfully.
- Browser request capture allowed only bodyless GET downloads to local/static host or documented model hosts. No content POSTs; no model requests before explicit load. Built text asset credential-pattern scan clean (not a proof against all possible secret formats); shared runtime byte identity verified.
- Desktop and 390/320 CSS-pixel layouts: no horizontal overflow, focus and touch target checks, input/results/export controls, screenshots. Narrow screenshot visually inspected. Physical phones and non-Chrome engines untested.

## Reports

`browser-validation.json`, `artifact-validation.json`, `network-validation.json`, `cancel-download-validation.json`, `asset-audit.json` and screenshots contain observed details. `public-validation.json` / `public-browser-validation.json` are created only after successful public checks. Publication status recorded separately; local success is not proof of publication.

## Public publication checks

Root predeploy/deploy assembled 559 apps with 0 failures/skips and published combined site. GitHub Pages commit `8f2320aca35816e58fe5cdae3af8abce9cb66f66` reached `built` (workflow 42606289425), matching remote gh-pages head; public app HTTP 200. Public gallery was byte-identical to working root and rendered new/prior apps plus AI Utilities and STL categories. Public app JS/CSS, worker, factory and shared WASM matched local SHA-256 hashes. The entire ten-check browser suite passed again on the public URL, including both real inference fixtures, all limits, offline fresh-worker inference, review/export, stale/cancel and defensive checks. Downloaded public artifacts passed independent parsing/optimality verification. See `public-validation.json`, `public-browser-validation.json` and `publication-status.json`.
