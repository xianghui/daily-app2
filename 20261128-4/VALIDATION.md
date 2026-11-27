# Observed validation

- React + Vite production build passed.
- Independent geometry feasibility: **972 combinations**, checking both orientations and complete border sums, minimums, exact bottom weighting and invalid openings (`node core-test.mjs`).
- Real q8 MiniLM WASM inference in desktop Chrome: **4/4 known frame links** across two materially different synthetic batches. First batch has one false pass under the sheet-only baseline; second rotates the white frame and yields two feasible sheets. Tiny fixtures are not general accuracy evidence.
- Maximum batch: 8 profiles + 12 sheets, five real four-text chunks; all 12 output records retained and source-only audit reimport/rerun passed.
- Browser artifacts: JSON, CSV, gated cut CSV and Markdown actually downloaded. Seven audit envelopes independently parsed with Python; source IDs/counts, opening arithmetic, borders and CSV preservation checked. Multiline formula-like reviewer note preserved with CSV apostrophe protection. Clipboard, hold/undo and export invalidation passed.
- Open-page fresh-worker real inference with all network disabled passed after online warming. Offline reload not supported. No model requests before explicit load; observed traffic was GET file downloads without bodies or source text in URLs.
- Real worker and model-host network aborts displayed errors without fake outputs. Missing Worker/WebAssembly, construction/error, malformed vectors and accelerated timeout fault injection passed. Cancel during fetch, cancel/retry, late valid stale output after newer real inference and delayed file import protected current state.
- Empty, invalid, missing, oversized and excessive-row inputs rejected; empty review numeric value blocks apply/export. Every input/select/textarea labeled. 1440/390/320px layouts had no horizontal overflow and button/input/select targets ≥44px. Physical phones and non-Chrome engines untested.
- Built-asset credential-pattern scan found no hits; actual shared worker/factory/WASM SHA-256 verified. This is bounded evidence, not exhaustive security assurance.
- Root gallery scripts compiled using `new Function`, new AI utility entry exactly once, all 927 prior entries/categories unchanged (928 total).

Publication and assembled/public runtime checks are recorded below after completion. Successful inference is real; injected defensive messages are not used for quality evidence.

## Combined assembly

Root predeploy copied **928 apps, zero failed/skipped**. Deploy-only deduplication retained previous runtime compatibility and produced **827,629,200 bytes**, below the existing 1 GB guard. Assembled-production browser suite repeated both real model fixtures, offline fresh-worker inference, maximum batch/reimport, review/downloads, invalid inputs and all three viewport sizes. Seven assembled audit files independently parsed with Python. Gallery rendered with old/new search, all earlier categories and no browser script errors. Desktop hero and 320px review screenshots visually inspected. Additional checks confirmed all seven numeric fields, profile relinking/undo and bad-format/oversized file imports.

Final geometry hardening also requires every border to cover the requested overlap, keeping the complete untrimmed sheet within the oriented frame. The 972 independent cases and both full real-inference browser suites were rerun after this change.

## Completed public verification

Root `npm run deploy` published the combined site. Corrected Pages commit `c147d565cc76bab68f31632374567a1e395039f3` reached **built**, [workflow 46054680987](https://github.com/xianghui/daily-app2/actions/runs/46054680987). Eight public assets (gallery, app HTML, icon, JS, CSS, shared worker/factory/WASM) returned exact byte matches to the assembled deployment. The public production suite repeated both real-model fixtures (4/4 links), offline fresh-worker inference, maximum batch/reimport, review/undo, clipboard/downloads, malformed source rejection, keyboard focus traversal and 1440/390/320px layouts. Seven actual public audit envelopes and corresponding CSV/Markdown/cut artifacts passed independent parsing and geometry checks. Public gallery retained old categories and old/new search. Request-host audit found only the documented site and model hosts; no content-upload requests. Defensive fault injection was performed locally, not repeated publicly. Actual delayed model download cancellation and real retry also passed on the assembled bundle. Physical phones and non-Chrome engines remain untested.
