# Observed validation — 2026-11-26

## Production-bundle local checks

- React/Vite `npm run predeploy` passed. Runtime dependency SHA-256/byte counts matched the immutable source builds; built JS/CSS credential-pattern scan found no patterns. Source inspection confirms no provider integration or telemetry.
- Real Chrome browser, WebGPU disabled / single-thread WASM CPU. Both materially different synthetic fixtures executed the real MiniLM model. **Shop week 5/5** and **Reserve unlock 6/6** known-answer classes matched. First closing balances: available 0 / reserved 1000; second: available 200 / reserved 1500. All amounts are minor units.
- Sales-minus-refunds baseline is 8000 vs actual payout 6700 for fixture 1; 4400 vs actual payout 5000 for fixture 2. Both reconciled via fees and changes in available/reserved balances. These are computed comparisons, not measured accuracy or time savings.
- Harder real-model probe: reserve administration fee correctly proposed fees; negated “not a release … locked into reserve” incorrectly proposed release. Instruction-like irrelevant text proposed payout, but remained pending and had no authority to request credentials or take actions. This is **not** representative semantic accuracy. Every proposal requires review; irrelevant records should be held, compound movements split.
- 150 generated 24-event trails passed independent Python integer-oracle verification of every before/after balance, all six class totals and observed closing balances: **3600 events**. JS tests verify conservation, exact amounts, holds, missing review, deficit/reserve over-release, mismatch blocking, malformed vectors and invalid source data. No rounding/floating currency calculations.
- Actual downloaded JSON/CSV/Steps CSV/Markdown artifacts parsed with independent Python parsers and event arithmetic: **1327 assertions** locally. Original rows, order, holds, current reviewer edits, multiline quoted/formula-like note and Unicode survived. Formula-like CSV text is intentionally apostrophe-prefixed. JSON is the lossless audit format.
- Review/apply gating, amount/balance edits, blocked discrepancies, hold/reject, undo, export invalidation, clipboard and maximum-size audit reimport passed. Maximum 24 requests + six profiles = 30 real embeddings / eight four-text chunks; all 24 rows classified and retained.
- Fresh worker after terminating the online worker performed real inference with all network blocked in the same warmed page. No cold offline navigation/reload claim.
- Empty/invalid/oversized source, wrong formats, malformed JSON, invalid amount/balance lexical forms and oversized imports rejected. Labels and focus navigation checked; all buttons/inputs/selects ≥44 px; desktop 1440 and narrow 390/320 widths had no horizontal overflow. Viewport screenshots inspected for desktop hero, phone review/results. Physical phones and non-Chrome engines remain untested.
- Ten defensive checks: real worker-download abort; model-host abort; unsupported Worker/WebAssembly; construction failure; worker error; malformed vectors; accelerated timeout; stale callback after source replacement; cancellation during pending worker fetch. Fault injection used only for failure handling, never successful inference evidence.
- Browser request audit from startup through real inference/export: zero model-host requests before explicit load; all requests GET without body and no source content in URLs. Only static same-origin assets and documented Hugging Face/CDN downloads. Saved reports omit temporary signed query values.

## Publication gate

Combined-site assembly, assembled-bundle revalidation and public verification are recorded below when completed. Local success alone does not establish public success.

## Known limitations / not tested

MiniLM cannot reliably understand negation, establish accounting treatment, extract amounts, recognize all out-of-domain notes, or prove statement completeness. Matching balances cannot expose offsetting errors. No chargeback, negative-input, multi-currency or pending-authorization support. Model revision is unpinned. Browser cache can be evicted. Physical-device speed/memory, other browser engines, cold offline startup and representative semantic accuracy remain untested. No bank, processor, ledger or tax system was contacted.

## Combined-site verification

Root predeploy assembled **882 apps, 0 failed, 0 skipped**, retaining all older entries/categories. Gallery inline scripts compile with `new Function`; the new AI Utilities entry appears exactly once and all older entry objects remain unchanged. Assembled site size **815,341,975 bytes**, below the unchanged 1,000,000,000-byte guard. Served assembled production assets repeated both real-AI fixtures, maximum batch/reimport, offline fresh-worker inference, edits/undo/holds, clipboard, defensive input checks, request privacy and desktop/phone layouts. Downloaded assembled artifacts passed **1327 independent Python assertions**. Gallery browser checks verified all 882 cards, search, all old links and mobile no-overflow. Four recovery checks verified worker/model abort then real-inference retry, delayed stale callback versus newer real inference, and delayed import versus newer source.

## Public Pages verification

Root deploy published combined-site commit `5c9333d8a29049c9b2dd07b81596ba23689fe136`; matching Pages workflow `45701719206` completed successfully and Pages reported `built`. Seven public files (gallery, app HTML/JS/CSS, shared worker, runtime factory and WASM) returned HTTP 200 and matched assembled SHA-256 bytes. Public gallery rendered all **882** cards and preserved every old link/category.

At https://xianghui.github.io/daily-app2/20261126-6/ the full production-browser suite repeated real CPU inference: **5/5 + 6/6** simple known-answer classes, both exact closing-balance reconciliations, 24-event full batch/reimport, warmed-page fresh-worker offline inference, review/amount/balance edits, hold/undo, exports/clipboard, invalid input and responsive/focus checks. Public downloaded artifacts passed **1327 independent Python assertions**; request audit found only bodyless GET static/model downloads and no source content in URLs. No model-host requests before explicit load. No digest or external account actions were sent.
