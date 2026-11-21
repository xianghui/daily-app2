# Observed validation — Keyfield Studio

## Production workflow

Real headless installed Chrome with GPU disabled; React/Vite **production bundle**, not dev server. Tests run against app dist, combined deploy tree, then public Pages after publication. `browser-validation.json`, `assembled-browser-validation.json` and `public-browser-validation.json` are per-location evidence. Synthetic fixtures only; no mocked outputs used for successful inference.

- **Branch inventory:** MiniLM assigned identifier/identifier/attribute/measure as expected (4 labels). Six rows, 3 candidate subsets; `depot + sku` is the only minimal observed key. Neither single field is unique; provisional SKU-only audit has 2 repeated groups involving all 6 rows. Selecting the composite audit key eliminates observed collisions, without deleting rows.
- **Course register:** MiniLM assigned 3 identifier roles, attribute and measure as expected (5 labels). Nine rows, 7 candidate subsets; no observed key. Rows 1 and 9 share campus/course/term but disagree in room and seats. Exact witnesses retained.
- **Known limitation:** negated description “Not a stable identifier. This code changes as a numeric count of units on hand.” was incorrectly classified **identifier**, not expected measure. Reviews are mandatory. The nine expected synthetic labels are not a general accuracy claim.
- Maximum 10 columns / 64 rows: 8 identifiers + 2 excluded fields, 13 actual embedding texts in 4 chunks, 255 exact nonempty subsets. Complete exported audit reimported to original source and fresh reviews required.

## Exact logic and artifacts

`core-test.mjs`: 66 checks, including 50 small random exhaustive-oracle comparisons, blank-key rules, delimiter-safe tuple encoding, case sensitivity, malformed vector validation, all holds, bounds and complete-record conservation. Single-column baseline uses identical equality/missing rules.

Actual browser downloads parsed independently with Python standard JSON/CSV parsers: original records, column roles, edited multiline quoted/formula-like notes and maximum-batch cells survive. Long-form CSV has exactly records × columns rows (640 for maximum batch), including formula-safe apostrophes and valid newline/quote escaping. Markdown retains all numbered source records. Copy action verified against actual clipboard. Export snapshots invalidate on role, note or key edits; undo and held-column outputs checked.

## Browser resilience, privacy and runtime

- Explicit model-load action required; no model-host requests before it. Captured successful workflow requests were downloads only (GET, empty request body), to same origin and documented Hugging Face/CDN. Only column descriptions/role anchors are posted to the browser worker; source cell values remain outside AI inference. Public audit files strip signed CDN query values, retaining host/path/query-key names only.
- Online model/cache population followed by worker termination, **all network offline**, then fresh-worker real inference succeeds. Already-open-page scope only; app-shell offline reload/navigation is not claimed.
- Network-aborted model download + real retry, cancelled cold weight request + real retry, worker-source network failure, missing WebAssembly, unsupported module worker, malformed vectors, malformed envelope, timeout and worker error all leave no fabricated result. Failure-path tests use fault injection, clearly separate from real successful inference. Old cancelled/input-invalidated callbacks are ignored; delayed file reads and worker-source fetches also cannot overwrite new input. A delayed old run cannot replace newer real model results.
- Empty/broken/null/oversized source, unsupported files and >2 MB import rejected. Batch limits validated. Source edits clear stale reviews/results. Review approval is mandatory.
- Built credential-pattern scan found no secret patterns; no external provider integration. Shared immutable worker/factory/WASM sizes and SHA-256 verified before deployment. Actual WASM CPU path tested without WebGPU.

## UI, gallery and deployment

1440 px desktop, 390 px and 320 px narrow-phone viewports: no horizontal overflow, programmatic labels, 44 px touch controls, focus styling, editable roles/notes/key, input/review/result screenshots. Normal viewport screenshots visually inspected. Real physical phones, screen-reader audit and non-Chrome engines are **not** tested.

Gallery inline scripts compile with Node `new Function`; exactly one new AI Utilities entry, newest first; all 781 prior app entries and earlier categories remain unchanged. Gallery rendered/searched, including an older app and narrow widths. Root assembly reports 782 builds, 0 failures, 0 skips. Exact assembled file bytes are in `assembly-validation.json`; original 1,000,000,000-byte guard is preserved.

Collection-size maintenance adds only `20261029-5` to existing deploy-only, byte-identical geometry runtime reuse. Its source build is unchanged; JS compatibility paths preserved and query-versioned. Real older-app geometry generation, PNG and STL imports, parsed binary STL downloads and portable JSON save passed locally; public repeat and byte checks recorded separately. No legacy app was removed or recategorized.

Publishing is through root `npm run deploy`, never individual gh-pages. Public app, JS/CSS, shared model worker/factory/WASM and gallery must match assembled hashes and complete real inference before completion; publication commit and evidence are recorded in `publication-status.json`.
