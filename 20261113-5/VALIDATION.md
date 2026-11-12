# Observed validation — Renewal Beacon

## Local production bundle

- Actual q8 MiniLM WASM CPU inference, GPU disabled: Studio proposals automatic/automatic/automatic/automatic versus intended automatic/automatic/fixed/optin (2/4); Community automatic/automatic/fixed/optin (4/4). **6/8** on these tiny fixtures only. Corrections required. No universal accuracy claim.
- After human correction, all eight deadline/preparation dates matched independently written expectations. Each batch has two earlier notice dates versus term-end baseline and one past notice before term end. No measured savings claim.
- 3,000 independent decrement-by-calendar-day oracle cases passed, plus leap-year/date bounds, schema, review gate and row conservation.
- JSON/CSV/Markdown/ICS downloaded from browser after multiline formula-like owner/note edits. Python csv independently parsed every row in both fixtures, edited batch and max-40 batch; reviewed dates and originals preserved. Spreadsheet-safe apostrophes intentional. ical.js independently parsed all calendar events, dates, multiline/Unicode fields and UID uniqueness including max and all-held batches. UTF-8 folded lines ≤75 octets.
- Offline in already-open warmed page: terminate worker, block all network, create a fresh worker, real inference succeeded. No offline startup/reload promise.
- Empty, malformed, oversized, duplicate, invalid date/negative notice and unsupported imports rejected. Max 40-record chunking, audit reimport renewing approvals, all-held conservation, undo, clipboard and export invalidation passed.
- Real model-download cancellation and new-input retry passed. Fault injection only for malformed vectors, unsupported worker/WASM, worker errors and accelerated timeout; none fabricated results. Fresh-context model network abort and worker download abort surfaced errors; real retry passed. Delayed file read/download and late old valid vectors could not overwrite new input.
- Network capture from initial navigation through real inference: no model requests before explicit loading; requests were GET with no bodies; only app/runtime/model files downloaded. Unknown instruction-like clause remained pending data. No remote inference integration.
- 1440, 390, 320 CSS-pixel widths: no document horizontal overflow, controls ≥44 pixels high, explicit input labels and keyboard focus. Normal viewport screenshots saved; overview and result phone screenshots inspected. Emulated layouts only; no physical phone, other browsers or low-memory guarantee.

Reports: browser-validation.json, defensive-validation.json, stale-result-validation.json, stale-import-validation.json, model-cancel-validation.json, core-validation.json, artifact-validation.json, calendar-validation.json. Publication checks are recorded separately after deployment.

The final export uses `text/calendar;charset=utf-8`. Initial Pages release built successfully; a second changed-assets release corrected only the ICS MIME metadata and removed an unused UI state variable. A final changed-assets release also uses actual UTC export timestamps in ICS metadata rather than a constant epoch. All releases were published through root combined workflow, not per-app deployment. Calendar MIME and UTC timestamp were explicitly browser-tested; see calendar-metadata-validation.json.

## Public release verified

GitHub Pages built commit `99b379d35d5825d8368fc97c110855919d69a8fb`. Public HTML/app bundles, worker, runtime factory and shared WASM byte-match production assets. Full public browser suite passed both real-AI fixtures, date expectations, reviewed exports, max batch, invalid input, cancel/retry, stale prevention, offline fresh-worker inference and responsive layouts. Public gallery preserves 629 older entries plus the new entry (630 total). Public touch-emulated apply/undo/download and actual calendar MIME/UTC export timestamp passed. Downloaded public CSV/JSON/ICS artifacts passed independent Python csv and ical.js checks. See public-asset-validation.json, public-browser-validation.json, public-gallery-validation.json and publication-status.json. No physical-phone or non-Chrome inference claim.
