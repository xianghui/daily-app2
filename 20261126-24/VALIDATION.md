# Observed validation — Floorwise Desk

## Local production bundle
- React + Vite predeploy passed. Production bundle, real shared worker/factory/WASM URLs, desktop Chrome with `--disable-gpu`.
- Real MiniLM predictions: workshop `[goodwill,eligible,eligible,outside]`; studio `[outside,eligible,goodwill,eligible]`. **8/8 simple known-answer roles**. This small fixture score is not general accuracy.
- Workshop included carrying 1,000,000 minor units; recoverable 650,000; loss 350,000; allocations `[200000,50000,100000,0]`. Machine floor 450,000 binds. Naive proportional baseline breaches one floor and differs on three rows.
- Studio included carrying 900,003; recoverable 600,003; loss 300,000; allocations `[0,100000,100000,100000]`; exact penny conservation with unequal starting cents.
- 5,000 reproducible generated capped allocations passed conservation, integer/nonnegative amounts, cap compliance and residual = loss beyond available caps. Zero impairment, floor-exhaustion residual, holds and malformed vectors checked.
- Complete real 24-record batch: 27 texts, seven inference chunks. Original record conservation and maximum audit reimport passed.
- Actual downloads parsed by Python JSON/CSV: 943 assertions locally; multiline quoted/formula-leading reviewer note retained safely, audit originals preserved and worksheet values matched current review. Clipboard read-back passed.
- Amount, role, floor and recoverable edits invalidate exports; undo restores prior summary. Pending approvals/completeness/holds/nonzero goodwill floor and unresolved residual block complete worksheets. Unsupported, malformed, empty and oversized inputs/files rejected.
- Fresh worker with all network disabled in warmed open page completed real inference. No offline reload claim.
- Ten defensive cases: real worker/model network abort, missing Worker/WASM, worker constructor/error, malformed vectors, shortened timeout, late response after source change and cancel during pending fetch. Separate recovery test verified actual network error → real retry and old-worker late error cannot replace a newer real result.
- Privacy request audit: no model downloads before explicit click; only GETs without bodies and documented model download hosts afterward, no input text in URLs. Public reports retain host/path and query-key names only, never signed CDN values. Runtime hashes checked; built text scanned for common credential patterns with no hits. No provider/key path exists.
- 1440, 390 and 320 CSS px: no document overflow, labeled forms, keyboard export order, touch control checks. Desktop hero and 320px review screenshots visually inspected. Phone hardware, screen readers and non-Chrome engines not tested.

## Deliberately recorded AI limitations
Negation probe “This is not acquisition goodwill; it is production equipment in this unit.” incorrectly proposed goodwill. Unrelated kitchen-coffee probe proposed eligible. Nearest-reference embeddings force a choice and are not semantic entailment, scope verification or confidence. Every suggestion remains pending until human review; unrelated or ambiguous assets should be held. Numeric recoverable values and floors are user-supplied, never generated.

## Publication checks
Combined assembly: 900 apps, zero failed/skipped; all 899 prior gallery entries/categories preserved. Every inline script compiled and the new AI utility entry occurs exactly once. Browser gallery/search checks passed at desktop and 320px. Assembled size 820,177,813 bytes under the existing 1 GB guard; shared immutable runtime hashes retained. Public verification completed below.

- Assembled real browser suite passed with the same 8/8 simple roles, offline fresh worker, 24-record batch, all review/undo/input/cancel/layout checks and 943 independently parsed artifact assertions. Nine assembled asset hashes matched, including gallery, app JS/CSS and worker/factory/WASM. No layout changes after testing.

## Public verification completed
- Public URL: https://xianghui.github.io/daily-app2/20261126-24/
- Combined `npm run deploy` published 900 apps. GitHub Pages build and Actions run `45846082198` succeeded for remote gh-pages commit `451de8f74e6e56518f388c53f3139fcb72a43324`.
- Public gallery still contains all 899 older entries/categories; newest entry, search and narrow width passed.
- All nine public asset byte hashes matched the assembled site, including gallery/app HTML, JS/CSS, worker, factory and WASM. No branch-push-only assertion.
- Full public production browser suite passed: real model 8/8 simple fixture roles, exact known worksheet totals, 24-record batching, all review/edit/hold/undo gates, actual exports, clipboard, cancellation/retry, invalid inputs and 1440/390/320 layouts. Fresh-worker real inference worked with all network disabled in the warmed public page. Public JSON/CSV artifact parsing passed 943 independent assertions across 18 audit files.
- Public real network-failure recovery and delayed old-worker result suppression passed. Public traffic was bodyless GET downloads, with no input text in request URLs and zero preload model requests. No page errors. Actual-phone hardware and offline reload remain untested/unsupported respectively.
- Desktop hero, narrow review, results and input screenshots visually inspected; the wide worksheet is intentionally keyboard-focusable/horizontally scrollable inside its panel, with no document overflow.
