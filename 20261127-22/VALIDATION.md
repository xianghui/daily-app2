# Register Loom — observed validation

Synthetic data only. Real model inference, not a mock, on Chrome desktop WASM CPU with `--disable-gpu`. Browser scripts run against built Vite assets under the actual `/daily-app2/20261127-22/` prefix.

## Local production bundle

- `npm run predeploy`: passed. Real inference returned CLARINET / ALTO and FLUTE / PICCOLO, matching all four fixture identities across two materially different handoffs. Written MIDI arrays respectively `[62,64,66,69,74]`, `[69,73,76,78]`, `[69,71,73,76]`, `[74,78,81,86]` matched known answers.
- First fixture: 2/2 playable, one concert octave change, 0/9 naive baseline notes outside range. Zero baseline violations still produce wrong sounding pitches if instrument transposition is ignored. Second: 2/2 playable, one octave change, 3/8 naive baseline notes outside range. These are computed range metrics, not accuracy/time-saving claims.
- A negation challenge **failed**: “Not alto sax. Use the concert flute, transverse silver instrument.” selected ALTO. Instruction-like unknown input selected ALTO too. Human review is required; text neither requested credentials nor generated external actions.
- Maximum batch: eight profiles + twelve parts × 64 notes = 768 events, five real inference chunks, no lost parts/events; exported audit reimport restores originals and requires fresh inference. Downloaded JSON/audit CSV/pitch CSV/Markdown parsed and replayed by independent Python.
- Every numeric/profile/multiline review edit, note correction, hold/reject, undo, relink approval reset and export invalidation checked. Multiline `=SUM(1,2)\nCheck "arrival", approved` retained exactly in JSON/Markdown, formula-escaped intentionally in CSV. Clipboard reflects current applied data. Event-count changes are rejected without dropping notes. Impossible range and zero-octave constraints block pitch CSV; audit remains complete.
- Worker terminated after online run, network disabled, fresh worker produced another real inference in the already-open page. This does not establish offline cold reload/navigation or permanent cache retention.
- Sixteen invalid/empty/oversized source cases plus invalid extension/JSON/8 MB imports fail visibly. Worker/model-host network aborts, missing Worker/WASM, construction/worker errors, malformed vectors, timeout and cancelled pending worker fetch tested. Fault injection is limited to defensive checks. Recovery test performs a real retry after network failure and prevents an old schema-valid result/error from replacing a newer real inference.
- Actual model request delayed, then cancelled before release; no late output; real model retry succeeds. Delayed file read cannot overwrite newer source.
- Desktop 1440 px and narrow 390/320 px: no horizontal overflow; all form controls labeled; keyboard traversal checked; controls ≥44 px tall; normal viewport screenshots of hero/input/review/results saved. Desktop hero and 320 px result screenshots visually inspected. Physical devices/assistive technology untested.
- Network from page startup through inference/export: no model-host requests before explicit run; all requests GET without bodies; no source notes in URLs; only documented model-host/CDN external traffic. Reports store paths/query-key names, not signed CDN values. No external inference/credential integration exists.
- `node core-test.mjs`: 528 independent exhaustive range/offset cases; note conservation, sounding/written relationship, interval preservation, hard MIDI/range bounds, minimal octave objective, invalid schema, holds and guarded worksheet checks passed. Python independently replayed 20 downloaded audit variants and parsed associated actual browser CSV/Markdown artifacts.

Machine-readable reports and screenshots are kept beside the source. Assembled/public validation and publication state are recorded below after their actual checks complete.

## Limits

No population accuracy claim. Model can misread negation, confuse absent/ambiguous instruments and is not a music reasoning model. Profile values are user-supplied assumptions. Sharps-only labels; no rhythm, clefs, score engraving, enharmonic spelling, audio processing or musical-quality assessment. Octave shifts change the concert register. Desktop Chrome CPU tested; physical phones/Safari/Firefox/low-memory devices unverified. Credential pattern scans are supplementary, not exhaustive security proof.

## Assembled collection

Root `npm run predeploy` passed: 922 built, zero failed/skipped. Gallery inline scripts compile with Node `new Function`; Register Loom appears exactly once in `ai-utility`, newest first, with all 921 previous entries unchanged. Browser gallery checks preserve AI Utilities / STL Generators / Mini Games, search, ordering and 1440/390/320 px layouts. Root deploy lifecycle rebuilt the final disclosure text. Final app bytes and shared worker/factory/WASM SHA-256 were audited against the assembled tree; credential-pattern scan had no matches. Combined site: 826016307 bytes, under the unchanged existing size guard. Source builds and old categories preserved.

Assembled production URL passed the full real-model browser suite, maximum 768-event batch, fresh-worker offline inference, edit/hold/undo/export tests, and defensive/recovery checks. Independent Python parsed/replayed 20 assembled browser-downloaded audit variants and their CSV/Markdown artifacts. Public checks follow publication rather than treating branch push as proof.

## Public GitHub Pages verification

Published combined site to `gh-pages` commit `d6392283c7397bdeb53c5a30a682cc56c202265a`. Latest Pages build reports `built` for exactly that commit; workflow `46004734626` completed successfully. No rebuild fallback or deployment retry was needed.

`https://xianghui.github.io/daily-app2/20261127-22/` passed the complete real-model browser suite again: four expected instrument matches, known written pitches, 768-event maximum, warm-page fresh-worker offline inference, review/edits/undo/holds, input failures, cancellation/retry, export/clipboard and 1440/390/320 px checks, with no page errors. Actual public JSON/CSV/Markdown downloads were independently parsed/replayed (20 audit variants); all current reviewed records and events survived. Public defensive suite passed all ten failure cases; recovery and delayed-import race checks passed.

Root public gallery has exactly 922 cards, newest entry once, prior categories/search intact. All nine audited public gallery/app/runtime files are byte-identical to assembled files, including the shared worker, WASM factory and binary. Public 390 px hero screenshot visually inspected; the internet/download/privacy disclosure is visible before loading. See `public-browser-validation.json`, `public-artifact-validation.json`, `public-asset-audit.json`, `public-gallery-browser.json`, `pages-build.json` and `pages-workflow.json`.
