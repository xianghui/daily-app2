# Observed validation — Headroom Folio / 20261128-10

Synthetic inputs only. Installed desktop Chrome with GPU disabled for real-model workflow tests; production Vite bundles, not a dev server or mocked classifier. Run reports and downloaded artifacts are retained beside the test scripts. Physical phones, other engines, low-memory devices and actual rendered audio were not tested.

## Actual AI and known answers

Both materially different batches ran the real quantized MiniLM ONNX model on CPU WASM:

| Synthetic batch | Expected and observed profiles | Gain estimates | Observed constraint result |
|---|---|---|---|
| Conversation / television | PODCAST / BROADCAST | +4 / −3 dB | Target-only baseline has one peak failure. Reviewed gains are peak-safe, but podcast remains 2 LU below target and gain release stays blocked. |
| Song / narration | MUSIC / AUDIOBOOK | +5 / +4 dB | Both meet supplied target/peak bounds. Reviewed gain CSV unlocks. |

Four of four simple fixture profile matches, not an accuracy estimate. Changing the source changes the inferred profiles and useful output requirements. Real AI output is the normalized embedding matrix; source-based cosine retrieval is used, not hard-coded responses. Model-host and worker failures never substitute deterministic “AI” results.

The negation challenge (“Not a podcast… This is a television documentary”) returned PODCAST despite intended BROADCAST. All candidate evidence is inspectable. This observed failure is why the app requires review and supports hold/correction; similarity is not negation understanding or compliance verification.

## Deterministic / artifacts

- `core-test.mjs`: 500 varied gain cases independently enumerated over every allowed 0.1 dB setting. Closest attainable target, peak ceiling, gain bounds, target window and infeasible interval checked. Source validation, malformed vectors, original row order, audit restore and gated export checked.
- Browser fixture audit values: +4, −3, +5, +4 dB; all original records survive. A zero-attenuation/over-ceiling case has no feasible gain and cannot release a gain worksheet.
- Downloaded JSON/CSV/Markdown and gain CSV parsed independently in Python (`csv`, `json`, `Decimal`). Every ID/source row survives, reviewed numeric values match, signed negative LUFS remains numeric, peak-safe gain is optimal and the multiline reviewer text `=SUM(1,2)\nCheck "peaks", approved` survives quotes/newlines/formula escaping and Markdown. Clipboard contains the reviewed text.
- Maximum source: eight profiles plus 12 clips → 20 descriptions, five real-inference chunks. All 12 rows survive audit export and reimport. Restoring an audit trusts only the originals, not saved approvals.
- Displayed baseline violations and target misses are computed from the current reviewed rows, including holds. No time-saving, subjective audio quality, universal accuracy or measured compliance claim.

## Interaction / failure checks

- Review edits invalidate exports; profile changes retrieve target fields and reset approval. Hold blocks gain CSV, audit preserves held rows, undo restores state, invalid numeric edits block application.
- Empty/malformed/oversized JSON, missing/empty rows, too many rows, invalid gain settings and unsupported file format fail visibly.
- Actual worker-download abort, actual model-host abort and actual delayed model-download cancellation tested; no fabricated rows. A real retry succeeds after cancellation.
- Fault injection **only for defensive tests**: missing Worker / WebAssembly, worker construction/runtime error, malformed embedding matrix, shortened three-minute timeout and late stale error after input change. No stale overwrite. Delayed async file import cannot replace newer input.
- Real fresh worker runs successfully with every network request disabled after an online warm run. Claim is limited to an already-open page; offline navigation/reload is not supported or claimed.
- Request audit covers startup through inference: no Hugging Face request before explicit load; all observed requests GET without bodies and without source notes in URLs. Reports retain origin/path only (signed query values removed). No optional remote inference, credentials or analytics integration.
- Asset audit hashes exact app JS/CSS/HTML, shared worker, WASM factory and 26,861,777-byte binary. Built textual assets scanned for common credential patterns plus integration code inspected; no credentials embedded.
- Desktop 1440px, phone-width 390px and narrow 320px: no document horizontal overflow; input/review/results screenshots taken at normal viewport heights, all form controls labeled, keyboard export focus verified and button/input/select heights at least 44px. Initial 320px title overflow found and corrected; complete browser suite rerun passed. Visual inspection of 320px hero/review and desktop/results performed. The results table scrolls locally on narrow screens.

## Assembly / publication

Root predeploy compiled/assembled 934 apps, zero failed/skipped. Gallery inline scripts compiled using `new Function`; new entry appears once as AI Utilities, first category; every earlier entry remains identical and older category/search rendering passes. Combined deployment is 829,203,860 bytes, below the existing 1,000,000,000-byte guard. Immutable source builds and the original daily_app collection are unchanged.

Assembled/public checks and exact Pages status are recorded in `assembled-*.json`, `public-*.json`, `pages-build.json` and `publication-status.json` when completed. Public availability and real runtime inference, not branch push alone, are required before calling the build published.

## Test corrections (not product regressions)

The independent gain oracle initially compared a mathematically equal floating-point generated ceiling directly; changed to integer tenths, matching its intended decimal domain. An inherited cancellation test initially expected the previous app's SLIDES label; corrected to PODCAST and rerun with real inference. An asset-audit invocation used its default assembled port before that server existed; rerun on the intended live target. No fake AI or product fallback was introduced for any test failure.

## Final public verification

GitHub Pages Actions run 46091890379 completed successfully for `4e1f6ec4d7edf841cf2da0599564b7e87b108eaf`, matching the remote gh-pages head and the latest Pages `built` record. Public app and all six audited HTML/JS/CSS/shared runtime files returned matching bytes/hashes. Public gallery checks passed for 934 entries with preserved categories. The complete public real-model browser suite passed (both batches, offline fresh-worker, review/edit/hold/undo, cancellation/retry, maximum batch/reimport and all three widths). Ten public downloaded JSON audits and associated CSV/Markdown/gain artifacts passed independent Python parsing and Decimal checks. No credential-pattern matches in app text assets. See `public-browser-validation.json`, `public-artifact-validation.json`, `public-asset-validation.json` and `publication-status.json`.
