# Observed validation — Discordance Dock

2026-11-21. Synthetic data only. Successful inference checks use real Chrome, the production Vite bundle, actual MiniLM q8 weights and WASM CPU. Mock workers appear only in failure/staleness tests.

## Actual AI and task quality
- Product fixture: all six intended counterpart indices `[2,5,4,0,3,1]` matched. Reviewed transitions: 2 pass/pass, 1 pass/fail, 3 fail/pass, 0 fail/fail. Net +33.33 percentage points; exact two-sided discordance p=.625.
- Software fixture: all six intended counterpart indices `[2,5,0,4,3,1]` matched. Reviewed transitions: 2 pass/pass, 1 pass/fail, 2 fail/pass, 1 fail/fail. Net +16.67 percentage points; p=1.
- These are two tiny easy fixtures, not general accuracy measurements. Changing domain/input changed actual neural scores, assignments and workflow counts; no canned outputs or deterministic AI substitute.
- A challenge saying “not about a bottle lid or water leaks; check the desk lamp” incorrectly linked to the bottle. Unrelated travel-expense text was left unmatched at floor .25 in this probe. This demonstrates a negation failure, not reliable out-of-domain rejection. Every pair requires human verification.
- Exact matching checked against independent exhaustive assignment on **300** bounded random matrices (sizes 1–5). Binomial p checked against enumeration for **91** discordant-count combinations through 12 pairs, including known p=.25 and .21875. Count/table constraints validated; no right case reuse allowed.

## Production-browser workflow
`browser-validation.json`, `defensive-validation.json`, `cold-cancel-validation.json`, `edge-validation.json`, `artifact-validation.json`, `security-validation.json` and logs record observations.

- Real inference on both fixtures, maximum 12+12 cases/24 texts/six chunks, review of every row, edited outcome, multiline quoted/formula-like note, undo, hold, unmatched rejection, duplicate-link apply blocking and export invalidation passed.
- Current JSON/CSV/Markdown downloaded in-browser, reopened via Python JSON and independent CSV parser. Every left/right original ID survives, including unlinked right rows; edited outcomes and quoted/newline notes survive. CSV formula-like text is escaped; JSON retains exact original string. Copy matches reviewed downloaded Markdown. Maximum audit reimports originals and clears approvals.
- Fresh worker with all networking blocked completed another real inference in an already-open warmed page. No offline startup/reload claim.
- Cancellation during cold model download followed by real retry passed. Cancelled/changed-input late messages ignored. An old malformed worker result arriving during a newer real worker run did not overwrite its six valid suggestions.
- Empty/invalid/oversized input, unsupported file format, model-host network failure with real retry, worker download error, unavailable WebAssembly, worker constructor failure, malformed vectors/envelope, worker error and 180-second timeout (accelerated only for fault test) produced errors and no fake output.
- Desktop 1440 and narrow 390/320 CSS pixels: no horizontal overflow; every input has a label; visible buttons/inputs/selects/summaries have ≥44px height. Hero/review/results screenshots inspected. An initial 320px intrinsic-width overflow was fixed and the full suite rerun. Physical phones, screen-reader interaction, Safari/Firefox and low-memory hardware remain unverified.
- Request audit from startup through inference: no Hugging Face request before explicit Load AI; external requests were only documented Hugging Face/CDN GETs with no request body or user text. Runtime assets were same-origin. Reports save host/path/query-key names, not signed CDN query values. Built asset credential-pattern scan plus source integration inspection found no embedded keys, telemetry or remote inference. Pattern scans are not exhaustive proof.

## Collection / public deployment
Pending root assembly and public verification at time of this section; append observed release status below. No legacy app or size limit is removed to make space. Root publishing only; per-app deploy is not invoked.

Assembled-site checks passed: all **770** gallery apps (769 previous + this utility), 0 failed/skipped builds, **999,889,342 bytes** under unchanged 1,000,000,000-byte guard. No new deduplication rule or legacy source changes were needed. Every inline root script compiled; new ai-utility entry occurs once, older entries/categories and searchable gallery preserved. Nine assembled gallery/app/shared-runtime files byte-matched. The complete real-AI/review/export/offline/max-batch/privacy suite passed again against the assembled production paths, and the 770-card gallery rendered correctly on desktop/phone widths.

Public release verified: Pages commit `53a6325db1f42f0e4c93e6f358029903b5ed154a`, workflow `44864766204` succeeded on the first deployment. Nine public gallery/app/worker/factory/WASM assets byte-matched the assembled build. Both actual model fixtures and the full review/edit/hold/undo/export/offline/max-batch/privacy/phone suite passed again at the public URL. All 770 gallery cards and older categories/search rendered correctly. Actual public downloads were reopened and independently parsed. Keyboard order, visible 3px focus and keyboard activation of real inference also passed on the assembled page. No digest was sent.
