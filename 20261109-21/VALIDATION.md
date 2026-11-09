# Observed validation — Borrow Bridge

2026-11-09, real production Vite bundle, headless desktop Google Chrome using Playwright. Synthetic data only.

## Real AI quality and useful allocation

- Media room: real q8 MiniLM CPU inference proposed camera/mic/camera/mic, **4/4** intended matches. Five unit-demand intervals require four peak reusable units vs five dedicated-per-loan units; microphones need one extra unit beyond supplied capacity. Camera turnaround at minute 40 is respected exactly.
- Learning lab: projector/tablet/projector/tablet, **4/4** intended matches. Six demand intervals require four peak units vs six dedicated-per-loan units. Projector turnaround causes the intended overlap and one-extra-projector requirement; tablets reuse at the exact boundary.
- These eight simple checks are not an accuracy estimate. Exact-description baseline matched 0/4 in each fixture. Displayed agreement against human review is not independent validation.
- Negation challenge (“Do NOT provide a video camera…”) still proposed camera. No semantic safety/compatibility or universal accuracy claim. Human review is mandatory and holds are excluded from allocation, not lost.
- Full limits: 8 types + 12 requests = 20 texts in five actual inference batches; 48 quantity slots retained. Same-start demand requires 48 units. Prior-audit import restores exact originals with all decisions pending; all-held export retains all 12 requests and allocates zero slots.

## Workflow, runtime, resilience and privacy

`browser-validation.json` and `browser-test.log` record actual checks: pending-review apply block; edit invalidates exports and resets changed choice to pending; undo; hold; multiline Unicode/quote/comma formula-like note; current JSON/CSV/Markdown downloads; clipboard equality; actual fresh-worker inference with network fully offline inside already-open cached page; input change/cancel/retry with no stale overwrite; empty/malformed/oversized JSON, duplicate IDs, invalid counts/description/times/quantity/buffer; unsupported/oversized import; desktop and 390/320px phone layouts with no horizontal overflow, focusable labels and ≥44px primary controls. Desktop/phone screenshots retained and visually inspected at 320px.

Failure-only worker injection checks reject malformed vectors, module-worker construction failure, WASM-unavailable messages, timeout and late cancelled callbacks, then restore the real worker and rerun actual inference. These injected failures are not used for successful AI checks. `network-validation.json` records a real model-host download abort with zero fake reviews followed by successful real retry. `cancel-download-validation.json` confirms cancellation during an actual quantized-weight request and subsequent fresh-worker real retry.

Captured default-path requests from production-page startup through inference were GET-only, with no bodies, no model host request before explicit load, and only same-origin/model download hosts. Synthetic user content was not in request URLs. No optional remote provider or credentials exist. Built text assets passed credential-pattern scans (not a universal security proof); runtime/worker paths and shared WASM bytes are audited in `asset-audit.json`.

Offline claim is limited to cached fresh-worker inference inside an already-open page; reload/navigation untested and not promised. Physical mobile/low-memory devices and non-Chrome engines untested. WebGPU not required: real tested CPU WASM path.

## Independent artifacts and hard constraints

`artifact-test.py` independently parses all downloaded audits, preserves every request ID in source order, verifies exact quantity-slot conservation, turnaround boundaries, capacity/EXTRA flags, and no same-unit overlaps. An independent release-before-checkout sweep computes peak demand and matches every required-unit count. CSV reopens using Python csv.DictReader: all reviewed records, quantities and texts survive; held unit lists are empty; multiline formula-like notes preserve exact content after the intentional leading apostrophe. Markdown retains all source request IDs/text and shortage warnings. Browser JSON reimport restores source and discards approvals. See `artifact-validation.json`.

`npm run predeploy` passed; `audit-assets.py` passed. Gallery scripts compile with Node new Function, new entry occurs exactly once as AI Utilities, and every preexisting gallery entry is preserved (`gallery-validation.json`).

## Publication

Public deployment verification is recorded separately in `publication-status.json`, `public-validation.json` (hash-equal gallery, app JS/CSS/worker/runtime/WASM) and `public-browser-validation.json` (actual public real-AI workflow and defensive suite). Do not infer successful public inference from a branch push or local build alone.

Publication completed successfully: Pages commit `b465c25f918aade75975ec413941e3bd063bd72c` reached built; the public real-AI suite passed both fixtures, offline fresh-worker inference, full batching, current artifacts, review/undo and defensive checks. Public gallery rendered all 560 cards with AI Utilities first, older categories intact, working search for the oldest app and the correct new-app link (`gallery-ui-validation.json`). An early check before the new Pages build finished timed out on the old gallery; it passed after Pages built, without republishing or changing hosting settings. Root predeploy/deploy each assembled 560 apps, zero failures/skips.
