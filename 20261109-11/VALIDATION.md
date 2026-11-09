# Observed validation — 2026-11-09

Production Vite build served at its actual `/daily-app2/20261109-11/` base with local worker/factory and immutable shared same-origin WASM. Installed desktop Chrome driven by Playwright. Successful AI tests use real MiniLM q8 inference, never fake responses.

## Known-answer fixtures

- Studio service desk: all 3 proposed policies matched `access, billing, hardware`; UTC deadlines matched `2026-11-09T10:00Z`, `2026-11-09T13:30Z`, `2026-11-11T16:00Z`. Weekend, 30-minute pause and holiday crossing exercised. All three differ from calendar-minute baseline. AsOf marks one due, one within deadline, one future scheduled request.
- Facilities request desk: all 3 matched `water, climate, keys`; deadlines matched `2026-11-10T08:30Z`, `2026-11-11T13:00Z`, `2026-11-11T13:30Z`. Friday/weekend/Monday holiday, same-day budget and pause exercised. Two dates differ from the calendar-minute baseline.
- Exact-description baseline matched 0/3 in each batch versus 3/3 real AI proposals. Six tiny synthetic successes are not production accuracy or measured time savings.
- **Observed failure:** a request explicitly denying login/password/authentication problems still retrieved `access` with cosine ~0.6333. Manually held. Nearest similarity is not entailment, policy applicability or contractual verification.
- Full bounds: 8 policies + 24 requests = 32 texts in four-text chunks. All 24 preserved through held results and JSON audit reimport/rerun.

## Deterministic clock/schema tests

82 core assertions, including 60 independently minute-scanned randomized cases, verify working-interval calculation versus a simpler reference. Tests cover exact close boundary, one minute across weekend, before-opening/weekend arrivals, pause overlapping working time and pause wholly in closed hours. Invalid calendar/date/pause/budget/ID cases rejected. Malformed AI vectors, pending decisions and record loss rejected; holds retain null deadlines and every original record. See `core-validation.json`.

## Workflow, privacy and failures

- Pending review blocks application. Policy edits reset decisions; undo restores approval. Holds have no released due date. Edits disable stale exports until reapplied.
- Downloaded JSON/CSV/Markdown and clipboard reflect actual edits, held records, quoted multiline Unicode formula-like notes and all originals. Independent Python CSV parser checks dates, IDs, pauses, notes, decisions and formula guards; audit JSON roundtrip preserves source batch. See `export-validation.json`.
- Actual online inference followed by fully offline fresh-worker inference passed in the same open page. Worker, WASM factory/binary and model cache exercised. No offline reload/startup claim.
- Cancellation/retry and input replacement passed; forced late callbacks before and after a newer real run cannot replace it. Malformed vectors, unsupported WASM and accelerated 180-second timeout injected only for defensive error handling; real-model retry recovered.
- Empty/invalid/null/oversized JSON, empty arrays, duplicate IDs, over-limit records/text, invalid calendar/asOf and unsupported CSV import rejected without stale rows.
- Network audit from app startup records GET-only asset downloads, no request bodies and no model-host traffic before explicit user action. No remote inference integration or user-content transmission. Built text credential-pattern scan has no common OpenAI/GitHub/Google/AWS hits; scoped scan, not a universal secret-detector guarantee.
- Desktop and 390/320 px phone viewports: no horizontal overflow, source label/focus, touch-sized controls and actual exports work. Screenshots saved. Physical phones, other browsers, low-memory devices and manual screen-reader audit untested.

Network abort/cancel evidence and final combined/public publication outcomes are recorded in adjacent reports after execution; a build alone is not evidence of inference or publication.

Fresh-context model-host abort produced a visible “Failed to fetch” error with no suggestions; unblocking and retrying ran real inference. A separate test paused the actual ONNX weight request, cancelled it, then retried real inference successfully for all three requests. See `network-validation.json` and `cancel-download-validation.json`.

Combined root assembly passed: **550 built, zero failed/skipped**. Local combined gallery rendered; root/app/index/worker/factory/shared-WASM byte hashes matched production outputs. All 549 earlier gallery entries and previous categories were preserved; all inline scripts compiled. Public publication verification follows in `publication-status.json` and public reports.

Final public verification passed: Pages commit `37bfd87208e64e2646a5dc8ae0ffa8fb5102726b` reached `built` (workflow 42549258756). Public gallery/root/index/worker/factory/shared-WASM bytes matched local production artifacts. All ten browser checks passed again on the HTTPS public URL, including both real-model fixtures, all six expected deadlines, offline fresh-worker inference and review/export failure defenses. Public-downloaded exports also passed the independent Python artifact parser. See `public-validation.json`, `public-browser-validation.json` and `publication-status.json`.
