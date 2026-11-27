# Gatherfold Studio — observed validation

## Scope

Synthetic data only, installed desktop Chrome driven by Playwright. Production Vite bundle, module worker, real Xenova/all-MiniLM-L6-v2 q8 WASM CPU inference; GPU disabled for positive inference checks. Defensive failure tests explicitly inject faults, never substitute AI on successful workflow paths. Physical phones, other browsers, actual printing and binding are untested. Screenshots at 1440, 390 and 320 pixels are viewport emulations, not device-performance evidence.

## Real AI and known answers

- Zine handoff: `POETRY`, `CATALOG`, both correct. Applied output: 453 sheets including spoilage, 200 fewer than padding every signature to the full cap, 6 blank pages summed across one copy of each job.
- Sewn sections: `JOURNAL`, `WORKBOOK`, both correct. Applied output: 190 sheets, 65 fewer than the full-cap baseline, 4 blanks summed across one copy of each job.
- 4/4 simple known-answer profile links matched; a first-profile-only baseline would match 1/4. This tiny fixture does not establish general accuracy. A negated unknown request (“NOT a poetry pamphlet…”) still retrieved `POETRY`. Automatic unknown detection is not implemented: initial decisions stay pending and users must hold inappropriate matches.
- Changing the first job’s profile from poetry (cap 16) to journal (cap 8) changes its 21-page plan from two sections to three. AI materially selects the catalog specification; it does not invent numeric measurements or solve pagination.
- Fresh-worker offline inference in the already-open page passed with all browser networking disabled after an online run. Offline navigation/reload is not supported or claimed.
- Maximum 8-profile/12-job, 20-text batch and five model chunks tested with real inference. Separate upper-bound 12-job × 256-page × 1,000-copy audit conserved 3,072 content pages and round-tripped through JSON reimport and real inference. It correctly blocks stock release.

## Deterministic and artifact checks

`core-test.mjs` independently checks all 4,096 combinations of 1–256 pages and 4–64-page caps in steps of four: every numbered page exactly once, section caps, blank count, physical sheet totals and nonnegative baseline differences. A known 8-page nested signature yields front [8,1]/back [2,7], then front [6,3]/back [4,5]. Shared-stock aggregation, inconsistent reviewed caps, invalid multiples, malformed vectors, missing records and audit-source restore are checked.

Browser downloads include JSON, audit CSV, guarded press CSV and Markdown; clipboard output checked. Independent Python `csv`/`json` parsers verify row conservation, page uniqueness, counts, copies, press positions and multiline notes. A review note containing a spreadsheet formula prefix, comma, quotes and newline survives JSON/Markdown exactly and CSV with documented leading apostrophe. Exports invalidate after edits; undo restores prior review, hold blocks press release and numeric/profile edits require reapproval. Full audits preserve held jobs and stock shortages. Audit JSON restores originals, not previous approvals. Press rows are sheet patterns with an explicit copy count, not one row per physical copy.

## Defensive and privacy checks

Empty, invalid, missing, oversized and excessive-row sources; unsupported/malformed/oversized file imports; blank numeric review; actual worker/model download network abort; unsupported Worker/WebAssembly; worker-construction and runtime errors; malformed model output; bounded timeout; cancel/retry and delayed worker download. No fake AI result is shown after failure. Actual network abort followed by real inference retry works. Late old schema-valid vectors and errors cannot overwrite a newer real run; delayed old file import cannot overwrite a newer example. Actual model-host download cancellation followed by real retry is checked in the assembled bundle.

Request capture starts at production page navigation: no model-host traffic before explicit Load; requests are GET without bodies; no fixture note is sent in URLs. Only documented static/model download paths are observed. Built HTML/JS/CSS/JSON is pattern-scanned for credential formats; shared worker/factory/WASM byte lengths and SHA-256 are compared with provenance. This is a code/request audit plus pattern scan, not a universal secret-detector claim.

Desktop/phone layouts have no horizontal overflow; all editors have labels, controls are touch-sized, enabled export controls are keyboard-traversable. Desktop and 320px review screenshots were visually inspected. No real mobile memory/speed claim.

## Gallery and deployment

Both galleries were parsed for duplicate workflows: the original read-only collection has 3,595 entries; the new collection had 928. Keyword candidates in the original were e-signature products, not booklet imposition. New root gallery has exactly 929 entries, with all previous objects unchanged and AI Utilities first. Root predeploy and root deploy rebuilt/copied all 929 apps with zero failures/skips. Combined output is 827,890,605 bytes, below the preserved 1,000,000,000-byte guard.

## Reproducible scripts and evidence

- `core-test.mjs`: deterministic invariants.
- `browser-test.cjs`: positive real AI, offline fresh worker, review/undo/export, maximum rows, bad inputs and responsive screenshots.
- `review-test.cjs`: profile correction, stock shortage/undo, shared-stock conflicts, import guards, upper limits and negation challenge.
- `defensive-test.cjs`, `recovery-test.cjs`, `import-race-test.cjs`, `model-cancel-test.cjs`: failures/cancellation/staleness; positive retries use the real model.
- `artifact-test.py`: independent exported JSON/CSV/Markdown parsing.
- `security-audit.py`, `public-assets.py`: built credential scan, runtime provenance and public exact-byte audits.
- `gallery-test.cjs`, `gallery-browser-test.cjs`: every inline script compiles; new entry appears once as AI Utilities; all 928 prior entries/categories preserved, new and old search work.

Evidence files use `local-`, `assembled-` and `public-` prefixes. Browser request audit persists only host/path, not signed CDN query values. See `publication-status.json` for final hosting verification.

## Final public verification

Root deploy reported Published. Matching GitHub Pages commit `e90df17d7b9a26cf338dc5bcc9428a5e48150056` reached `built` before public checks. All 8 fetched public assets (gallery, app HTML/CSS/JS/favicon, worker, WASM factory and binary) matched assembled bytes. Public browser tests passed both real known-answer inference batches, fresh-worker offline inference, maximum batching, review/undo/clipboard/downloads, shared-stock and import guards, responsive layouts and old/new gallery search. Independent Python parsers passed 18 local/assembled/public audit artifact sets, including current multiline review text in the public press CSV. No model simplification or Pages rebuild trigger was needed. Source commit/push uses main; the two unrelated pre-existing untracked draft directories were left untouched.
