# Alias Calendar validation — 2026-11-07

## Production browser and real AI

Chrome headless via Playwright, local Vite production bundle at its real `/daily-app2/20261107-19/` base. No mocked successful inference. Model: real q8 MiniLM on WASM CPU, mean pooling and normalized 384-dimensional vectors. See `browser-validation.json`, `defensive-validation.json` and logs.

- Office fixture: expected/observed room IDs `R1,R1,R2,R3`, four of four. Source aliases differ from canonical names; exact-name baseline leaves all four unassigned. Semantic inference exposes seeded overlap B1/B2; apply is blocked. Moving B2 to 10:00–11:00 permits export; adjacency at 10:00 is allowed.
- Community fixture: expected/observed `W,P,P,G`, four of four; adjacent pottery sessions not flagged. Eight curated examples are not a general accuracy claim.
- Maximum booking batch: 24 records, 27 embedded texts including three room descriptions, seven batches of at most four; every record retained and routed to recording suite; all intervals remain valid and conflict-free.
- First model load occurs only after explicit action. Request capture plus source review found public asset downloads only; no content upload, provider credential, telemetry or remote inference integration.
- Model, worker, runtime factory and shared WASM caching tested with new-worker inference and **all browser networking disabled in the same open page**. Online cached reload also avoids remote model fetches. Offline page startup/reload is not claimed.

## Workflow/defensive checks

Review required; changed room/time/note invalidates approval and applied exports. Reject all returns to exact-name baseline; undo restores prior decisions. Clipboard JSON equals reviewed artifact. Invalid/empty/schema/duplicate/oversized/too-many input, impossible dates, non-UTC/reversed intervals, malformed CSV and unsupported file imports rejected. Input changes and delayed file reads cannot replace newer input. Cancel/retry and download cancellation/retry exercised.

Fresh browser contexts inject model-host network failure and runtime binary abort; both produce actionable failure without records and real inference succeeds after removing the block. Separate defensive-only fault injection covers unavailable Workers/WASM, construction failure, worker error, malformed vectors, accelerated 180-second timeout and late cancelled responses. Successful AI paths always execute real model inference.

`bounds-test.mjs` accepts the eight-room boundary, rejects a ninth room and checks invalid review-time guards (its orthogonal vectors exercise only deterministic schema handling, not AI accuracy). `core-test.mjs` additionally checks finite vector shape/norm rejection, overlap adjacency, interval guards, conservation, UTF-8 byte-size limits and ICS line folding/stamp. No mutation of original records.

## Actual downloaded artifacts

`export-roundtrip.py` uses Python's independent CSV parser and `icalendar` parser against **browser-downloaded** JSON/CSV/ICS. Reviewed assignments, times, notes and all original records survive. Fixtures exercise commas, quotes, embedded newlines, formula-leading IDs/titles/notes and long Unicode notes. CSV's leading apostrophe for formula-like text is intentional; JSON remains exact for parsed field values (import trims surrounding whitespace; raw input remains in the source editor). Parsed ICS has the correct event count, unique UIDs, UTC starts/ends, canonical room locations and escaped titles/descriptions. All lines are CRLF with at most 75 UTF-8 octets.

## Presentation/assets/gallery

Desktop 1440px, narrow 390px and 320px: no horizontal overflow; labels, focus navigation, review controls, exports and edits exercised. Landing/working screenshots saved. Visual inspection confirms readable room candidate evidence and touch-size controls. Physical phone performance and screen-reader audit not certified.

Production assets scanned for common credential/private-key patterns; zero hits. Source/network review also performed; a pattern scan alone is not proof. Shared binary is byte-identical SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. `asset-audit.json` records every final asset hash.

All gallery inline scripts compile with Node `new Function`; zero-script case fails. New entry exactly once, correct category and folder; all 511 earlier entries preserved. Browser renders 512 cards, AI Utilities first, older STL/game categories and search intact. Root assembly: 512 built/copied, zero failed/skipped. Publication evidence is recorded separately in `deployment-validation.json`, `public-evidence/` and `publication-status.json`; deployment is not considered verified from a branch push alone.

## Known limitations / untested

Nearest room can be wrong for unrelated, abbreviated, negated or specialist descriptions; no calibrated confidence, authorization check or automatic abstention. Human source verification is mandatory. Conflict-free means this imported batch only; live calendar, capacity, equipment, travel buffers, recurring events and local timezone conversion are unsupported. Physical phones, low-memory devices, Safari/Firefox and offline cold page startup are untested. No accuracy or time-saving promise outside these synthetic fixtures.

## Publication blocked — unpublished draft

Three Pages builds succeeded, but deployment attempts 42362682251, 42363676608 and 42364554219 timed out (syncing/finalization statuses) for commit `4b1c67cf9ee06d1a43d7d46cb19ad52e8954e0f1`. Failed-job retry also exposed a ghost queued state with no actual second attempt/jobs and a cancel endpoint reporting completed; subsequent attempts used the documented fresh legacy build endpoint only after actual failures. New URL independently returned HTTP 404 after the third failure. Thus **public model inference, public runtime/worker paths and public offline behavior are NOT verified**. Existing 511-entry public gallery was independently checked byte-identical to restored source. Draft excluded from APPS and root assembly, not marked completed. See hosting-attempts.json and publication-status.json.
