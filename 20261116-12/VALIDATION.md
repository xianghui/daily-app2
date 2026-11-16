# Observed validation — Recoup River

## Local production bundle

- `npm run predeploy` passed. Real browser Chrome CPU/WASM, GPU disabled, not a mocked success path.
- Festival fixture: expected `venue, print, music`; actual 3/3. Pot 10,001 cents. Tier-first `[4000,3001,3000]`, tier-blind `[3334,3334,3333]`; baseline bypass 6,667 cents, tier-first zero.
- Film fixture: expected `camera, costume, audio`; actual 3/3. Pot 8,501 cents. Tier-first `[4251,4250,0]`, tier-blind `[3270,3269,1962]`; baseline bypass 1,962 cents, tier-first zero.
- All **1,002** seeded independent Python Fraction allocations/baselines matched exact cents, largest remainders, priority and conservation, including ASCII tie and empty-group cases. These are algorithm checks, not model accuracy claims.
- Mandatory review, class/amount edits resetting approval, hold, undo, complete all-held audit, audit reimport resetting approvals, multiline notes, clipboard and actual downloaded JSON/CSV/Payout CSV/Markdown passed. Independent parsers checked 12 JSON artifacts and associated CSV/Markdown, preserving records and formula-like multiline notes with CSV escaping.
- Maximum 8 classes / 24 claims (32 texts), four-text batching, complete ready export/import, last-row multiline note passed. Zero available funds and excess-budget undistributed balance passed.
- Already-open warmed page: online run followed by fresh-worker real inference with **all browser networking offline** passed. No offline reload/navigation claim.
- Empty/invalid/null/oversized JSON, duplicate IDs, bad tier/cents types/ranges, empty arrays, oversized descriptions, unsupported PDFs, oversized and malformed files passed.
- Network abort with real-model retry; blocked worker download; no WebAssembly; unavailable workers; malformed vectors/envelope; worker error; timeout: errors with no fake results. Fault injection used only for defensive checks.
- Cancel/retry and source-change invalidation passed. Delayed import, delayed worker download and late older-worker result cannot overwrite newer input/run; separately tested with controlled delays.
- No model-host request before explicit load. Observed requests GET-only with no bodies; no source descriptions in URLs. Only same-origin runtime and documented model/CDN hosts. Signed query values removed from saved request reports.
- Widths 1440, 390 and 320: no horizontal overflow, all form labels, >=44px buttons, keyboard focus order. Normal viewport overview/review/results screenshots manually inspected. Physical phones and non-Chrome browsers untested.
- Final maximum permitted 100,000,000-cent claim/pot: real inference at 320px. Fixed oversized currency text in narrow payout cards; final text/container widths both 198px and document width 320px. Assembled final asset byte audit, gallery, and this real-inference maximum-money test passed.
- Instruction-like unrelated text still returns a nearest class (documented limitation); a human hold blocks distribution. No tools, prompts, credentials or external authority are available to the model.

## Combined assembly / publication in progress

Root `npm run predeploy` assembled all **709** apps with zero failures/skips; source unchanged runtime deduplication produced **999,797,548 bytes**, below the existing 1,000,000,000-byte guard. No extra legacy runtime rewriting was needed. Gallery inline scripts compiled, new entry exactly once, all 708 previous entries/categories preserved; real browser search/rendering and phone-width checks passed. Assembled app plus worker/factory/WASM byte audit passed, including built-text credential patterns. The full real-AI workflow/export/privacy/offline suite also passed against the assembled production directory.

## Verified public release

Final Pages commit **5378fee2d77a0883a32c784dd37bb014234712e3** reached **built**, matching remote `gh-pages`. [Pages workflow](https://github.com/xianghui/daily-app2/actions/runs/43797285538). Root `npm run deploy` published the combined collection, not an individual app. The first published commit `075e11afba11b35d84329f0ce3078a6c19cea9eb` also passed the full public inference suite; the final commit adds the verified maximum-money narrow-card typography correction.

Public URL: https://xianghui.github.io/daily-app2/20261116-12/

Final public app HTML/JS/CSS and shared worker/factory/WASM bytes match final assembled build hashes (`public-asset-audit.json`). Public real-model inference again matched both fixtures (6/6), then passed the complete review/edit/hold/undo/export/import/maximum-batch/privacy/cancel/retry/offline/stale-input suite. The final maximum-money real-inference workflow at 320px passed separately. Public 709-card gallery, prior 708 entries/categories, search and narrow widths passed. Independent Python artifact parsing reran on actual final public downloads.

No shared credentials, remote content inference or digest. Physical phones/non-Chrome browsers and offline reload/navigation remain untested, as disclosed. Source staging excludes unrelated pre-existing changes.
