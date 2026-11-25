# Subtotal Studio — observed validation

Local production-bundle tests use real installed Chrome with GPU disabled, not mocked successful inference. `browser-validation.json`: 6/6 simple known-answer report contracts across sales and workshop-material workflows. Group counts [8,9,2] and [2,7,1], totals [42,35,28] and [12,16,0]. First fixture exposes 6 summary identities collapsed by label-only baseline; second exposes 4. These are distinct summaries, not lost original records. Harder probes in quality-probe.json: 1/4 correct; no claim of general accuracy.

`browser-test.cjs`: real inference across maximum 8 profiles/24 requests (32 texts, eight chunks), 960 original rows preserved. Each grouping level preserves exactly the same original IDs and signed total. Fresh-worker, fully offline inference after warming passes in the same open page. Explicitly no offline reload promise.

Downloaded JSON/CSV/Markdown artifacts include edited multiline formula-like reviewer note, quotes/commas/newlines/emoji, null/ALL/empty categories and signed numbers. JSON audit maximum-batch reimport restores originals. Python csv independently parses downloads; SQLite independently executes per-level GROUP BY aggregation, checking sums and source lineage for every released group. Eight local JSON snapshots checked by artifact-test.py, plus matching available CSVs. Held requests produce no released summaries and lose no originals. Review edits invalidate exports; undo/hold/copy verified.

Fault-only tests inject missing Worker/WebAssembly, constructor/runtime errors, malformed vectors, accelerated timeout and stale callbacks. Actual worker-download and model-host network aborts show errors without fake output. Real network retry and newer real inference after delayed stale callback pass. Cancellation prevents late worker-fetch completion; cancel then real retry passes. Empty/malformed/oversized JSON, invalid values, too many requests and unsupported/oversized imports fail visibly.

Request monitoring from startup through all inference observed GET-only file traffic, no request bodies/source contexts in URLs, and no unexpected hosts. No model requests before explicit run. Credential-pattern scan of built text assets and runtime hash provenance recorded separately.

Desktop 1440px and emulated 390/320px phone widths: no document overflow, labeled form controls, ≥44px buttons/inputs/summary targets, visible focus CSS. Normal viewport screenshots saved; narrow hero/result screenshots visually inspected. Physical phones/other browser engines not tested.

Public and assembled-site outcomes are recorded after publication in public-browser-validation.json, public-artifact-validation.json, public-asset-validation.json and gallery validation reports. Build/branch publication alone is not treated as verification.

## Publication outcome

Combined root deployment succeeded; matching Pages commit `477898def51c989e7e715af5f222b05d20ec7e53` reached `built`. Public HTML/JS/CSS and all three shared worker/runtime assets matched local SHA-256/bytes (seven assets including gallery). Combined deployment size: 812,666,169 bytes under the unchanged guard. Gallery renders 872 apps; all 871 prior entries/categories preserved. Public real inference again matched 6/6 simple contracts; maximum-batch conservation, review/edit/undo, actual downloads, offline fresh-worker inference, clipboard and invalid input suite passed. Eight public JSON artifacts independently matched SQLite, with corresponding CSVs parsed. Keyboard tab/focus/example activation/details toggle passed publicly. Original collection was read only; parsed 3,595 entries, with no equivalent grouping-mask reporting workflow found.
