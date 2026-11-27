# Throwline Desk — observed validation

Date: 2026-11-27. Synthetic inputs only. Local, assembled and public checks completed successfully.

## Real neural inference and workflow

- Actual production bundle in desktop Chrome, GPU disabled; real MiniLM q8 / WASM CPU. No mock used for successful AI checks. Two materially different batches: Lecture rooms → LECTURE/ARCHIVE; Cinema spaces → CINEMA/GALLERY. All four simple expected kit links matched.
- Resulting maximal native-raster widths: 2.40, 2.00, 3.00 and 2.60 m. Active widths: 2.40, 2.00, 3.00 and 1.95 m. Both approved pairs had 2/2 feasible setups versus 0/2 valid wall-width/no-bars baseline predictions. These are geometry comparisons on supplied synthetic specs, not universal accuracy or empirical time savings.
- Known limitation observed: “Not the lecture teaching cart. Use the cinema movie theatre film screening kit.” incorrectly ranked LECTURE. An instruction-like unrelated note ranked ARCHIVE. Human approval/hold remains mandatory; similarity does not prove identity and text cannot change authority.
- Maximum batch (8 kits, 12 setups): five actual four-text neural chunks, all 12 records conserved; complete audit reimport restores original source and requires fresh inference/review.
- Fresh worker with all network disabled in a warmed, already-open production page successfully inferred again. This does not establish cold offline reload/navigation or cache persistence.

## Deterministic checks and artifacts

- Two known-answer worksheets plus 750 independently enumerated feasible-width cases passed. Recomputed maximal grid width, throw bounds, screen bounds, content aspect and bars. Positive valid-baseline case, portrait content, too-small image, no-optical-fit, malformed vectors/inputs and identity corruption checks passed.
- All ten numeric fields and a multiline quoted, comma-containing formula-like reviewer note were edited; applied results/exports invalidated; apply reflected current values and undo restored original summaries. Relink resets approval and kit specs. Hold retains record and blocks Setup CSV.
- Actual browser downloads parsed independently by Python csv/json; all rows and edited fields retained, numeric geometry recomputed, formula-like text apostrophe escaped only in CSV. JSON source/audit reimport and Markdown clipboard validated. `local-artifact-validation.json` records 11 independently parsed CSV files.
- 20 invalid/empty/oversized source cases plus extension, JSON parse and 8 MB file limits passed. Invalid review fields prevented apply/export. Optical infeasibility and minimum-width misses block setup release without dropping rows.

## Defensive, privacy and UI checks

- Real worker/model network aborts fail visibly without fabricated results. Actual worker abort followed by successful real-model retry in the same page passed.
- Actual model-host request delayed, run cancelled before resolution, no late result, then real retry succeeded.
- Fault injection only for worker construction/error, absent Worker/WebAssembly, malformed vector response, 180-second timeout (accelerated clock), stale error/result messages. A later real run survived delayed schema-valid old result/error. Delayed file import could not overwrite newer sample selection. Pending worker-fetch cancellation passed.
- Request audit: no model-host traffic before explicit load; observed external traffic only model-file GET downloads without bodies. Source notes absent from URLs. No remote provider/telemetry path. Signed CDN query values excluded from reports. Built text credential-pattern scans and shared runtime SHA-256 audits supplement source inspection.
- Desktop 1440px, narrow 390/320px: no horizontal overflow, all form controls labeled, 44px touch targets, keyboard focus traversal and working exports. Normal viewport input/review/results screenshots inspected at 320px and hero at 1440px. Physical phones, other browser engines and assistive-device behavior unverified.
- Per-app predeploy and lint pass. Inline gallery scripts compiled; all 923 earlier entries retained unchanged, new entry exactly once with correct category, AI Utilities still first.

## Reproducers / evidence

`core-test.mjs`, `browser-test.cjs`, `artifact-test.py`, `defensive-test.cjs`, `recovery-test.cjs`, `model-cancel-test.cjs`, `import-race-test.cjs`, `gallery-test.cjs`, `gallery-browser.cjs`, `asset-audit.py`, `security-audit.py`, `public-assets.py`. Local output reports and downloaded artifacts are saved with `local-` prefixes. Shared runtime provenance is independently hashed, not inferred from filenames.

## Assembled/public checks

Assembled production tree: real inference on both fixture batches, full review/edit/hold/undo/export tests, maximum batch, offline fresh-worker inference, invalid-input handling and 1440/390/320px checks passed again. Independent Python parsing passed for 11 assembled CSV artifacts. Gallery browser rendered all 924 cards, older names/categories and search correctly. Assembly built 924 apps with 0 failures/skips; shared runtime hash checks and credential-pattern scan passed. Assembled total 826,556,229 bytes; app files 269,690 bytes.

Root `npm run predeploy` and `npm run deploy` succeeded. GitHub Pages built commit `62c9a52ba28e676784201dace3d964f072112ed1`, matching the remote gh-pages head; no fallback build request was needed.

Public URL: https://xianghui.github.io/daily-app2/20261127-24/

- All eight public app/runtime files fetched successfully and matched assembled bytes, including shared worker, module factory and WASM. `public-asset-validation.json` records SHA-256 values and MIME types.
- The complete real-browser suite passed again on the actual public URL: both expected kit pairs, dimensions, all ten numeric edits, multiline notes, approval/hold/relink/undo, actual CSV/JSON/Markdown downloads, clipboard, maximum batch and audit reimport, cancel/retry, invalid inputs and 1440/390/320px layouts.
- Public warmed-page fresh-worker inference with network disabled passed. No claim of cold offline navigation or physical-phone performance.
- Independently parsed 11 public CSV artifacts with Python, reconciled every source row and recomputed optical constraints. All public user-content network checks passed; model requests were file downloads only.
- Public gallery rendered 924 apps, all earlier names/categories, correct new link and working search; no page errors. Only AI Utilities has the new entry. Negation limitation reproduced and remains documented, with mandatory human review.
