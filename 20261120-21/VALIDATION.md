# Observed validation — Contrast Atelier

## Real AI, not a mock

Production React/Vite bundle executed in headless desktop Chrome with GPU disabled. Default shared MiniLM q8 WASM worker executed normalized mean-pooled feature extraction. Initial library and workshop fixtures each matched all **3/3 intended roles**, **6/6 total**. These are tiny synthetic known-answer checks, not a general accuracy claim. No AI proposals were corrected in these fixtures.

Library: two reviewed approved pairs below 4.5:1 became zero below target after explicit candidate choices; third usage at 7:1 on `#777777` correctly had **no foreground-only solution** and was held. Workshop: three approved pairs below supplied targets became zero. Raw ratios and actual repair colors are recorded in `browser-validation.json`. Changing the library third usage description to the exact navigation role changed real neural output from r2 to r0, the applicable supplied target from 7 to 4.5, and an impossible repair into a feasible one. This demonstrates material workflow effect, not merely model loading.

The instruction-like unrelated-prose challenge abstained at the supplied threshold (`challengePrediction` is empty in the reports); it was held in the audit. This single abstention is not evidence that every irrelevant/negated description will be rejected. Neural similarity is not correctness or confidence. No instructions were executed and no content was uploaded.

## Deterministic quality and invariants

`core-test.mjs`: black/white ratio 21; same color ratio 1; `#777777` on white ≈4.4780894536; impossible 7:1 on `#777777`; **1,000 independently enumerated random candidate-set repair oracles** with independent WCAG implementation matched minimum squared RGB movement and ratio constraints. These verify the declared 512-candidate method, not a perceptual/global minimum.

Review count/identity conservation; mandatory approval/hold; unknown-role handling; valid bounded vectors; full-precision below-target comparisons; originals preserved; CSS includes approved records only with source IDs, current chosen colors, background and explicit MEETS/FAILS comments. Approved failing colors are intentionally exportable and visibly flagged, not misrepresented as corrected.

## Browser workflow and artifacts

Actual downloads parsed/reopened:

- Full JSON and CSV preserve every original/current review; independent Python csv/json parsing checks original text/colors, current colors, notes including quoted commas/newlines and formula-like leading text. Formula-like strings are guarded in CSV.
- CSS parsed by browser CSSStyleSheet; exact property counts, IDs, foreground and background values checked. Holds absent; all-held produces an empty valid :root. Current CSS clipboard equals downloaded artifact.
- Markdown contains every original note and the computed worksheet. Review edits disable export until apply; undo restores reviews/holds; original-only JSON reimport clears approvals and repair choices.
- Maximum **24 usages + 6 roles = 30 texts / 8 neural batches**, all records preserved; maximum exported audit reimported and real inference rerun.
- Strict similarity threshold abstains and blocks unresolved approved roles. Invalid colors, duplicate IDs, empty/null/malformed/oversized source, unsupported/oversized/bad files and invalid role targets are rejected.
- All-held, no repair, changing reviewed foreground, failing approved CSS, and input changes during running inference exercised.

`artifact-validation.json` records ten actual JSON artifacts plus associated CSV/CSS/Markdown checks; `browser-validation.json` records real fixture outputs and sanitized request paths.

## Failure paths, cancellation and offline scope

`defensive-validation.json`: model host abort, worker download failure, missing WASM, unavailable Worker constructor, malformed vector response, malformed message envelope, accelerated 180s timeout and worker error all showed actionable errors with no fake output and disabled exports. Model network failure recovered with a successful real retry. Fault injection was used **only** for defensive paths.

`race-validation.json`: cancellation during real cold model downloads produced no reviews, then real retry succeeded; a terminated old injected worker's late malformed response could not replace a newer real run; delayed File.text could not restore obsolete input. Input-change cancellation and warm cancel/retry also passed.

After successful loading the browser context went fully offline, created a **fresh real worker** and ran real inference successfully in the already-open warmed page. Only this offline scope is claimed. Offline navigation/reload, physical phones, memory-constrained devices and other browser engines are untested.

## Privacy and presentation

No model-host request before explicit load. Observed requests through app startup, loading and workflow were GET/HEAD only, no bodies and no original usage strings in URLs. Reports retain sanitized host/path only. Shared worker source/paths and tokenizer ceiling 512 were inspected/rechecked. Built text assets credential-pattern scan had no matches; manual integration review found no provider credentials, uploads, analytics or remote style changes. A pattern scan alone is not exhaustive proof.

1440, 390 and 320 CSS px: no document horizontal overflow; button targets ≥44px; all form controls labeled; visible focus. Normal viewport overview/review/results screenshots captured; desktop overview and 320px review/results visually inspected. No page runtime errors in the successful suites. Intentionally low-contrast sample previews are accompanied by readable external ratio/status text.

## Combined-site preservation and publication

Per-app predeploy passed. Gallery inline scripts compile with `new Function`, a single new ai-utility entry is first, every prior object remains identical. Previous categories remain intact. Combined assembly contains root gallery and all apps; new app and shared runtime hashes match source builds. Size guard remains 1,000,000,000 bytes; observed assembly **999,632,307 bytes**.

To remain below the guard, the existing deploy-only byte-identical geometry sharing rule additionally covers `20261028-4` using immutable `20261028-24` WASM. Source builds and legacy JS compatibility URLs remain intact. Real old-app default, PNG import and STL import each produced distinct valid meshes with matching preview/export fingerprints; all three STL downloads independently mesh-validated. No unrelated source edits were changed or staged.

See assembly, gallery, legacy and public validation JSON reports plus `publication-status.json` for final public release verification. A branch push alone is not counted as public success.


Final public release: Pages `b169c7fbd557bf5de791bf900c12613a7f0f59d3` reached **built**, workflow `44733531486` **success**, first deployment. All seven public app/gallery/worker/factory/WASM files byte-match assembled build; four legacy public file matches pass. Full public real-AI fixture/review/artifact/privacy/offline/max-batch suite, 754-card gallery and legacy default/PNG/STL imports/exports pass. See `public-*-validation.json` and `publication-status.json`. No digest sent.
