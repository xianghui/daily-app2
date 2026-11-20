# Trend Cairn — observed validation (2026-11-20)

## Actual AI and known answers

Production Vite bundle, real Chrome with GPU disabled, real MiniLM q8 ONNX/WASM CPU inference. No mocks in successful workflow checks. 12/12 series labels matched in each materially different synthetic set (24/24 observed; not a general accuracy claim).

| Synthetic series | Sen slope/day | Endpoint slope/day | Expected rechecks | LOO MAE robust / endpoint |
|---|---:|---:|---|---:|
| Bicycle repair minutes | 2 | 10 | s0d5 (60 minutes) | 6.6667 / 21.6667 |
| Laptop repair minutes | -1 | -1 | none | 0 / 0 |
| Book loans | 3 | 3 | none | 0 / 0 |
| Digital sessions | 2 | 2 | s1d2 (100 sessions) | 7.6667 / 7.6667 |

These are computed fixture diagnostics, not time savings, statistical significance or validated prediction accuracy. The digital series demonstrates no advantage over endpoint baseline. All flagged readings remain in the original/audit. Forty-eight exact linear cases, median checks, isolated-spike robustness and schema/review invariants passed in `core-validation.json`.

Changed source meaning (book to digital) changed real AI output and final group computability; it did not just refresh a canned response. Instruction-like irrelevant prose mapped to `digital` in the challenge: **a false positive**, not authority. Human hold excluded it from calculations but retained every record. Similarity is not confidence. No unit recognition, causality, seasonality, majority-contamination resilience or broad accuracy is claimed.

## End-to-end and defensive checks

`browser-test.cjs` checks mandatory review, editing values/series/days/notes, hold/undo, explicit apply, stale export invalidation, clipboard, real downloaded JSON/CSV/series CSV/Markdown and reimport of originals only. Maximum 96 records + six series processed through 26 actual four-text inference batches; all 96 sources/reviews and final note survived exports/reimport. Duplicate days block series without losing records; fewer than four approved observations are explicitly unavailable. Changed input cancels workers. Empty/bad JSON, duplicate IDs, missing definitions, bounds, oversized text/source/file and unsupported format checks passed.

`artifact-test.py` independently parses actual downloads with Python JSON/csv, checks every original and reviewed record, formula-safe multiline quoted notes, signed numeric values, summary slopes/status/row counts and Markdown source inclusion. No stale/default artifacts.

`defensive-validation.json`: model/network abort then real retry, missing WASM, worker fetch failure, unsupported module workers, malformed vectors, malformed envelope, timeout and worker error all produced actionable errors, disabled exports and **no fabricated AI results**. Fault injection used solely for these guards. Cold model download cancellation then real retry passed. Delayed file reads, delayed worker fetches and late old-worker messages could not overwrite new inputs/completed newer runs (dedicated reports).

## Runtime, privacy and offline scope

Inspected actual shared worker protocol: feature-extraction q8, mean pooling, normalized finite 384-vectors, four-text chunks, WASM CPU one thread. Source/pipeline inspection confirms tokenizer ceiling 512 (per-call max_length is not enforced by the feature pipeline). Source descriptions separately bounded to 300 characters. Worker/runtime hashes and rechecked observed upstream model revision are recorded in `runtime-dependency-audit.json`.

Successful online inference followed by **fully offline fresh-worker inference in the already-open warmed page** passed on real weights. App shell offline reload/navigation, cache eviction/private mode and indefinite cache retention **not claimed or tested**. Shared model `main` is unpinned and can change upstream.

Browser requests were captured from navigation through processing: GET/HEAD only, no request bodies or original source text in URLs, no model host before explicit Load AI. Reports omit signed query values. `asset-validation.json` has zero credential-pattern matches in built text; manual integration review found no keys, providers or analytics. This is not an exhaustive security audit.

## UI

Desktop 1440 and narrow 390/320 widths: no document horizontal overflow; labels for all inputs, visible keyboard focus, touch controls ≥44 px, successful input/review/apply/export. Normal viewport overview, review and results screenshots visually inspected at phone widths. Charts are independently scaled, have accessible text and exact values in source-linked details. No claims about physical phones, Safari/Firefox, assistive technology certification or low-memory devices.

## Collection and publication

Gallery script compilation, exactly one new AI-utility entry, preservation of all 751 earlier entries/categories, AI Utilities first, search/desktop/phone rendering checked. A first test-helper path error was fixed before gallery modification; gallery checks were rerun and passed. Root combined predeploy/deploy, assembled production checks, public asset hashes and public real inference are recorded in the corresponding reports and publication-status.json. The existing 1,000,000,000-byte deployment guard is preserved; shared older worker/factory/WASM paths are retained. Only this task's changes are staged; unrelated pre-existing work remains intact.

### Size guard recovery

First root predeploy failed at 1,000,207,021 bytes. Extended only the existing byte-verified geometry dedupe list to 20261028-5. Original/shared Manifold WASM bytes match, older source build remains intact, legacy JS URLs are retained and deployed entries query-versioned. Subsequent root predeploy passes at 999,665,762 bytes with all 752 apps, 0 failures/skips. `legacy-runtime-test.cjs` exercises actual default, PNG and binary STL import paths, three changed geometry signatures and finite valid downloaded STLs using the shared WASM. `legacy-asset-test.py` verifies unchanged source, deployed paths and local/public bytes.

Assembled-site real-model workflow and warmed-page offline fresh-worker inference passed again using the root deploy directory, with signed-value CSV download and independent parser checks included. Gallery render/search checks passed against the assembled root. See assembled-browser-validation.json and assembled-gallery-ui-validation.json.

### Verified public outcome

GitHub Pages built the exact published gh-pages commit `2a578e074889a0c2cd7beafdb743ba4d649458c5` with a successful matching workflow (no redundant rebuild trigger needed). Public gallery/app/worker/factory/WASM byte matches passed (9 files), plus legacy shared geometry assets. Full public real-model fixtures, maximum batching, warmed-page offline fresh-worker inference, review/undo/export/reimport, signed/multiline artifact parsing and responsive checks passed again. Public gallery keeps all 751 older entries/categories and the single newest Trend Cairn entry. Public legacy app default/PNG/STL paths produced distinct valid geometry with zero page errors. See public-browser-validation.json, public-asset-validation.json, public-gallery-ui-validation.json, public-legacy-runtime-validation.json and publication-status.json.
