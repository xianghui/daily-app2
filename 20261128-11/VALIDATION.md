# Observed validation — Temper Folio

## Local production bundle

- Scaffolded React + Vite; installed per-app gh-pages; required scripts/base verified. `npm run predeploy` passes. No dev-server-only model calls.
- Real Chrome, CPU WASM with GPU disabled: both distinct synthetic batches retrieve all four expected profiles: EARLY/MODERN and ORCHESTRA/CHAMBER. Evidence and computed summaries are in `local-browser-validation.json`. This is four easy examples, **not representative accuracy**.
- Each batch has two fixed-Hz baseline passes, one cents pass, one recheck and one disagreement. First: A2 at low A4=415, measured 104.75 Hz vs 103.75 Hz target fails 5 cents despite passing ±2 Hz; modern A5 at 882 vs 880 passes 5 cents. Second: orchestra A4 at 444 vs 442 fails 4 cents despite passing ±2 Hz; chamber A5 at 880.5 vs 880 passes 3 cents. No adjustment is applied or acoustic improvement claimed.
- Negation challenge **fails**: a modern-band note explicitly negating the early-music profile still retrieves EARLY. User correction/hold remains necessary. Full evidence is saved; no confidence percentages.
- Fresh-worker real inference succeeds with all network disabled in the same warmed open page. **Cold offline page reload/navigation not tested or supported**.
- Review edits invalidate exports; multiline quoted formula-like notes survive downloaded JSON/CSV/Markdown and clipboard. Holds block Bench CSV, undo restores state; profile change copies reference/tolerance and resets approval. Numeric invalidity blocks apply; originals unchanged.
- Maximum batch: 8 profiles + 12 readings (20 texts / five chunks), all records conserved, complete JSON audit reimport restores originals and processes again.
- Empty/malformed/oversized source, empty/over-limit batches, fractional MIDI, invalid baseline and unsupported file format fail visibly. Network-aborted worker/model downloads, unsupported Worker/WebAssembly, construction/error events, malformed vectors, timeout and stale response are covered by 10 defensive cases. Failure injection is used **only for defenses**, never successful AI tests. Actual delayed model download cancellation plus real retry succeeds. Delayed old file import cannot overwrite newer example input.
- GET-only request audit with no bodies and no source notes in URLs; no model host before explicit invocation. Saved request reports strip signed CDN query values. Built-text credential-pattern scan has zero matches, and code inspection confirms no credentials/provider integration. Pattern scans alone are not exhaustive proof.
- Core suite: 1,619 assertions; 800 calculated cases replayed independently with Python Decimal at 50-digit precision for target frequency, cents and pass classifications. Python csv.DictReader parses actual browser downloads; all source IDs, reviewed numeric values, notes and records survive. `local-artifact-validation.json` records observed assertion count (3,474 including independent replay).
- Desktop 1440 px and emulated 390/320 px: no page overflow, labels on all fields, minimum 44 px controls, keyboard export focus order, screenshots inspected. Mobile results use complete stacked records, not clipped columns. Physical phones and assistive-technology users are untested.
- Same-origin production app assets, shared worker/factory/WASM verified byte-for-byte by SHA-256 (`local-asset-validation.json`). Shared assets remain unchanged.

## Environment recovery

The first Chrome launch failed with ENOSPC because the system volume was full. An inactive 6 GB temporary diagnostic-copy directory was moved intact to the external drive, preserving its former path with a symlink. No diagnostic contents were added to this repository. Browser testing then passed. One fixture-test expectation was corrected after observing that the second supplied ±2 Hz baseline also passes its out-of-band note; the application calculation did not change.

## Publication

Public release verified below against the matching built Pages commit.

## Unverified / limitations

Physical instruments, actual audio-frequency measurement, historical/non-equal temperaments, stretched tuning, representative semantic accuracy, physical phones, other browser engines, low-memory performance and cold offline startup. The input fundamental and intended sounding note can be wrong; this app does not detect harmonics or measurement uncertainty. Nearest-profile retrieval cannot establish the true reference pitch.


## Combined-site assembly

Root `npm run predeploy` passed: 935 builds copied, zero failures/skips, all 935 app indexes present. Combined tree **829,461,498 bytes**, below unchanged 1,000,000,000-byte guard. Root index matches source. The inline gallery script compiles; the new entry appears exactly once as AI Utilities, newest first, with all 934 prior entry objects preserved. Gallery browser checks confirm all cards/categories and old/new search. Eight app/shared files match bytes/SHA-256. No shared-runtime rules or originating builds were changed.

Assembled-tree browser suite passed both real-AI fixtures, fresh-worker offline reuse, reviewed edits/holds/undo/copy/export, full 20-text batching/reimport and responsive layouts. Independent replay/download audit passed 3,474 assertions (3,200 arithmetic replay checks plus 274 artifact checks). Ten assembled defensive cases, actual model-download cancel/retry and stale file-import guard passed.

Additional real-browser import checks reject >1 MB JSON, malformed JSON and invalid control characters. Imported instruction-like notes do not produce credentials prompts or uploads; actual inference still runs locally. `local-input-guard-validation.json` records the checks.


## Verified public release

Root `npm run deploy` published the combined tree. GitHub Pages reached **built** for matching remote gh-pages commit `991643e360c18fc2942996ae5001553731656069`; workflow [46096914302](https://github.com/xianghui/daily-app2/actions/runs/46096914302) succeeded. No fallback rebuild or scheduler/config change was required.

At https://xianghui.github.io/daily-app2/20261128-11/: eight exact app/shared file hashes passed, both real model fixtures matched all four profiles, maximum-batch inference/reimport and current reviewed exports/clipboard/holds/undo passed, and a fresh worker inferred with network disabled in the warmed page. Public downloads passed 274 independent artifact assertions plus 3,200 Decimal-replay checks (3,474 total). Public desktop/390/320 px screenshots and all 935 gallery cards/categories/search passed. Same-page recovery after real worker-download failure succeeded; an injected old-worker error did not replace newer real-AI results. Actual delayed model-download cancellation/retry, oversized/malformed imports, inert instruction text and delayed-file identities passed publicly. Reports retain sanitized request paths, not signed tokens.

The negation challenge still failed as documented; manual review is essential. Physical instruments, physical phones, other engines, low-memory behavior, representative semantic accuracy and cold offline startup remain unverified. No digest sent.
