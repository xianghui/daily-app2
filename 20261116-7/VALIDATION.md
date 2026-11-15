# Reach Quilt — observed validation

Validated 2026-11-16, desktop Chrome 157 via Playwright, production Vite bundle, WASM CPU with GPU disabled. Successful inference checks use the real quantized MiniLM model, not mocks.

## Known-answer workflow quality

| Synthetic fixture | Expected intersection masks | Actual | Unique people | Naive channel-total sum |
|---|---|---|---:|---:|
| Learning campaign | 1,2,4,3,5,6,7 | All 7 matched | 150 | 240 |
| Community services | 1,2,3 | All 3 matched | 75 | 100 |

These are 10 simple fixture mappings, not a population accuracy estimate. Source descriptions differ from canonical definitions. An unrelated instruction-like description still matched the nearest channel; it was held. The model does not establish relevance, deduplicate identities or verify count semantics. All suggestions require review.

## Actual checks

- Production bundle real default-model loading, progress and two materially different inputs; all vectors finite normalized 384-dimensional arrays. Confirmed actual upstream tokenizer configuration `model_max_length:512`.
- 160 independently generated nonnegative exact-cell tables across 2/3 channels recovered exactly from inclusive supersets. Every inclusive count reconstructs and exact segments + outside conserve universe. Impossible negative cells and universe overflow block release.
- Mandatory approval; edit masks/counts; approval reset; hold/all-held; duplicate/missing sets; undo; edits invalidate prior exports. Zero counts are accepted as inputs but inconsistent zero/intersection combinations block results. Target checks computed from reviewed unique counts.
- Maximum 24 rows/3 descriptions each = 75 texts including canonical definitions, four-text batches. All 24 rows survive JSON/CSV and audit reimport. Duplicates block complete reach totals rather than silently aggregating.
- Downloaded and independently parsed 11 JSON artifacts and available CSV files using Python's CSV parser. Compared every source ID, original/reviewed count, mask and multiline note. Segment CSV sums to the universe. Quoted commas/newlines and a multiline `=SUM(...)` note survive; spreadsheet formula protection verified. Clipboard Markdown checked. Audit import intentionally restores originals only.
- Already-open warmed page: worker terminated, networking disabled, a new worker performed real inference from caches. Offline startup/navigation/reload **not** claimed.
- Empty/null/malformed/oversized source; invalid counts/target/parts; duplicate IDs; unsupported file type/oversized/malformed file. All yield errors, no synthetic AI result.
- Network abort then real retry; worker download abort; missing WASM; worker construction unavailable; malformed vectors/envelope; worker error; timeout. Defensive fault injection is used only here, not successful AI paths.
- Cancel/retry; source changes during inference; delayed worker download and delayed file read; old worker message arriving after a completed newer run. Generation checks prevent stale replacement.
- 1440/390/320px widths: no horizontal overflow; all form fields have labels, buttons have 44px touch height, focus advances to the import field. Inspected visible phone input/review/results screenshots. Physical-phone inference and other browser engines untested.
- Requests captured from startup through inference: only GET asset downloads, no bodies, no fixture text in full URLs, documented origins only, and no model request before explicit Load. Persisted audit strips CDN signed query values. Built text credential-pattern scan plus integration inspection found no credentials/provider integration; a pattern scan alone is not an exhaustive secret audit.
- Gallery inline script compiled with Node `new Function`; new entry once, correct category; all 703 prior entries preserved. All 704 cards and older STL/game categories render; search and phone widths checked.

## Collection size guard repair

The first root assembly exceeded the unchanged conservative 1 GB guard by 105,714 bytes. Extended the existing byte-verified geometry-WASM dedupe allowlist to `20261028-23`, reusing identical bytes already at `20261028-24`. Source builds and older JS URL aliases remain intact; worker and shell references are query-versioned using the established mechanism. A real browser loaded the older geometry app from the combined build, fetched the shared WASM, generated a valid model and downloaded a structurally valid binary STL. Resulting combined deployment: 999,564,449 bytes, 704 apps, zero failed/skipped builds. No gallery entry was removed and no size limit was relaxed.

Reports: `browser-validation.json`, `oracle-validation.json`, `artifact-validation.json`, defensive/stale reports, `asset-audit.json`, gallery reports and `shared-geometry-validation.json`. Browser harness bounds browser-shutdown cleanup after completing assertions; the full repeated combined suite exits successfully.

## Public publication

Published combined site through root `npm run deploy`. GitHub Pages built commit `77c13f546ed330d1efe2d6c8f7af4b829984bd32`, exactly matching remote gh-pages. Public URL: https://xianghui.github.io/daily-app2/20261116-7/ .

The complete real-model workflow suite passed again at the public URL: both known-answer fixtures, reviewed artifacts, maximum batching, cancellation/retry, fully offline fresh-worker inference, request privacy audit and responsive layouts. Public gallery renders all 704 entries. Every public app JS/CSS/HTML file and shared AI worker/factory/WASM byte-matches the tested production build. The older geometry app also successfully loaded the shared WASM and exported a structurally valid STL on the public site. Reports: `public-browser-validation.json`, `public-asset-audit.json`, `public-gallery-validation.json`, `public-shared-geometry-validation.json`. Final downloaded artifacts were parsed again after public validation. No optional remote provider was added.
