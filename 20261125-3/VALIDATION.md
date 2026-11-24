# Cron Witness — observed validation

## Local production bundle

- Vite production build passes. Browser uses installed real Chrome, headless CPU with GPU disabled; no mocked AI in success checks.
- Real MiniLM retrieved all six intended profiles across two materially different synthetic batches. Batch A expands weekday, nightly and first-day-or-Monday jobs to 10, 14 and 3 timestamps. Batch B expands quarter-hour heartbeat, weekend and fifteenth-or-Friday to 480, 0 and 1 timestamps. The zero-output case is valid for its Monday–Friday-exclusive window.
- Baseline differences: 1 job per fixture; 3 extra OR firings in finance and 1 in archive. A context-only intervention with unchanged raw window changes the selected cron and resulting times. One negation probe matched backup correctly; not a general negation/accuracy claim.
- Independent cron-parser 5.10.6 comparison: 306 generated/known-answer cases, 3,718 firing timestamps; leap days, midnight inclusion, exclusive end, month boundaries, restricted day-field OR and step/range fields included. See `oracle-validation.json` for installed library version. Eight unsupported/invalid syntax cases rejected, invalid date and >512 firing cap block; February 31 explicitly yields no firings.
- Full 24-job real-AI batch preserves every record and can be exported/reimported. A dense 24-job audit with 2,000-character Unicode notes per job is 1,004,006 bytes and round-trips under the separate 4 MB file-envelope cap; >4 MB files are rejected and originals still face the 50,000-character source bound. Actual downloads preserve multiline quote/comma/formula-like notes, reviewed window edits, holds and blocked cases. Independent Python validates 511 artifact assertions; independent cron-parser verifies 33 downloaded fixture cases / 1,206 timestamps. These counts describe this synthetic suite only.
- Apply requires approval/hold for every job; edits disable exports; profile/window edits renew approval; undo, hold/omit, source preservation and clipboard checked.
- Fresh worker successfully performs real inference with all network disabled in an already-open warmed page. Cold offline navigation/reload is not supported or tested.
- Ten defensive checks cover worker download abort, model-host abort, missing Worker/WASM, construction/worker failures, malformed vectors, timeout, stale worker result and cancel during delayed fetch. Delayed file-read test confirms newer input survives. No fabricated success is produced. Real cancel/retry succeeds.
- Startup-through-inference requests are GET downloads with no bodies, no synthetic user contexts in URLs and only documented asset hosts. Published reports retain host/path/query-key names, not signed CDN query values. Source has no remote inference integration; built text assets are checked for credential patterns (not an exhaustive secret guarantee).
- Desktop 1440 and phone-width 390/320 checks: no horizontal overflow, every form control has a label and visible button/select/input/summary targets are at least 44 px. Hero, review and results screenshots saved; phone hero visually inspected. Physical phones and other engines untested.

## Assembled production bundle

- All 855 apps assembled with zero failures/skips. Every earlier gallery folder/category preserved; new entry exactly once, first under AI Utilities. Every inline script compiles with Node new Function.
- Collection size **999,917,370 bytes**, below the unchanged 1,000,000,000-byte guard. No new runtime-sharing rules or legacy build changes.
- Seven exact asset-byte matches include gallery, app HTML/CSS/JS, shared worker, factory and WASM; credential-pattern scan passes. The corrected bundle repeats the real-AI workflow, offline, 24-job, exports, responsive and invalid-input suite successfully. Independent artifact checks again pass 511 assertions and 33 cron fixture cases / 1,206 timestamps. Dense 1,004,006-byte Unicode audit reimports correctly.

## Public release — verified

- https://xianghui.github.io/daily-app2/20261125-3/
- Remote gh-pages commit `01a70c5b5e6e2ce4efc21cdae4f4ec854fed7331` matches Pages `built`; workflow **45456432354** completed successfully. The first version was superseded once to increase the audit envelope cap; final checks target the corrected bundle.
- Seven public assets byte-match the assembled production files, including app, gallery and immutable worker/factory/WASM. No new sharing rules or size-guard changes.
- Full public real-AI workflow passes: six expected profile links; verified firing counts 10/14/3 and 480/0/1; context-only change alters actual exported timestamps; review/edit/hold/undo, all 24 records, audit reimport, cancellation/retry, invalid inputs, no stale results, privacy requests and responsive widths.
- Public fresh-worker inference succeeds offline inside an already-open warmed page; cold offline navigation remains unsupported.
- Actual public downloads pass **511** independent Python assertions. Independent cron-parser validates **33** downloaded cases / **1,206** timestamps. Dense **1,004,006-byte** Unicode audit restores all 24 originals; >4 MB rejected.
- All **855** public gallery cards render; every previous folder/category is present; 320px view has no horizontal overflow. No browser page errors.
- Physical phones, other engines, cold offline startup and actual scheduler execution were not tested. This bounded numeric UTC subset is not a scheduler-implementation certification. No digest sent.
