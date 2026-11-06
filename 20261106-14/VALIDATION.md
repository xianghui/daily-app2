# Validation — 2026-11-06

## Actual inference and quality

Production Vite bundle was served locally; real headless Chrome loaded the public MiniLM q8 ONNX weights and executed single-thread CPU/WASM inference. No success-path mocks or heuristic fallback. Two main, materially different synthetic fixtures:

- Workshop: science teaching → child science activity; IT support → registration computer issues; cooking/allergy handling → lunch. Actual assignments `[0,1,2]`, expected `[0,1,2]` (3/3).
- Festival: photography, transport and Spanish interpretation assigned to the correct three volunteers, with medical first aid unfilled (no qualified volunteer). Actual `[1,2,0,-1]`, expected same (4/4).
- Extra wording-gap diagnostic: translation and plumbing correctly matched guest communication and leaking-sink roles; all keyword overlaps were zero, so the baseline left all three unfilled. AI filled two. Baking → croissant preparation was **missed/unfilled** at the default 0.20 floor (cosine 0.169). Translation cosine 0.431; plumbing 0.383. Default decisions match the human answer for 9 of these 10 small synthetic roles, NOT a general accuracy estimate or representative benchmark. Similarity floors and human overrides matter. A high total similarity does not establish real-world suitability.

AI output changes meaningfully with input. Structured normalized 384-dimensional embeddings are validated before any optimizer/review output. Exact optimizer independently matches exhaustive enumeration on 12 small matrices. No duplicates, one output per original role, role totals and unfilled people/roles checked.

## Workflow/browser checks

`browser-test.cjs` uses actual Chrome and the production app; JSON results saved in `browser-validation.json` and separately `live-browser-validation.json` when run against the public URL.

- Real model loading, source snippets/cosines, two main fixtures and paraphrase diagnostic.
- Confirm-all requirement, duplicate-person conflict blocked, reject to unfilled, editing notes, multi-step undo, apply reviewed roster, exports invalidated after edits.
- Actual downloaded JSON and CSV; Python's CSV parser confirmed every row and commas/quotes/newlines survived and matched downloaded JSON. Clipboard JSON parsed and matched. A rejected role and original medical gap survived as null-person records in the four-role JSON.
- Text-file imports, empty and oversized lines, unsupported PDF rejection. Maximum 10-role batch invokes multiple embedding chunks (batch four); no duplicate people.
- Cancel then retry and input edits during active inference; terminated worker/run identifiers prevent stale outputs from replacing newer work.
- Actual model-host requests blocked in a fresh browser context: visible network error and no assignments; unblocked retry succeeded.
- Malformed vectors, missing workers and accelerated 180-second timeout injected ONLY to exercise failure handling. These are not claims of testing physical unsupported devices or waiting three minutes. Successful inference uses the real runtime.
- Desktop 1440px, phone 390px and narrow 320px: no document horizontal overflow, focusable controls, meaningful labels, screenshots. Narrow screenshot visually inspected. No physical touch hardware or non-Chromium browser testing.
- No external traffic before explicit load. All observed model-host traffic GET/HEAD with no bodies, using public paths. No user content in requests. Built text asset scan for common OpenAI/GitHub/Google/Bearer credential patterns found none; this is a pattern scan, not a formal security audit.

## Cache / offline scope

After first inference, an online reload reused persistent weights with zero model-host requests. The already-loaded page ran a different fixture offline using its retained model worker. Offline full navigation is NOT supported; cancellation/reload can need internet for local worker/WASM assets. Initial testing found a worker-restart failure offline; corrected retention and reran the complete test. No service worker or guarantee of persistent browser cache.

## Build, gallery and deployment

- Individual `npm run predeploy` passed after final source changes.
- Every root inline script compiled with Node `new Function`; missing scripts fail the check. New gallery entry appears exactly once as `ai-utility`; all 484 earlier entries deeply identical and category order preserved. AI Utilities is first. Gallery rendered in Chrome with earlier categories intact.
- Root `npm run predeploy`: 485 built/copied, zero failed/skipped. Root deploy retains full collection. Combined app JS, worker, WASM magic/size and local factory fetched and checked (see combined-validation.json).
- Public verification requires Pages build commit/status plus live browser inference and fetched runtime assets, recorded in accompanying live reports and pages-build-validation.json. A branch push alone is not counted.

## Known boundaries

Only small English synthetic fixtures; lexical baseline happens to equal the two main fixtures and fails on the extra wording-gap fixture. No measured time savings, real staffing accuracy, phone memory benchmark, employment fairness claim, credential validation, date availability or safe medical staffing. No offline cold navigation. Tests of device failure use injected unavailable APIs. Inputs remain in memory; exports intentionally contain original synthetic/user data and should be handled accordingly.

## Final public result

Public URL: https://xianghui.github.io/daily-app2/20261106-14/ . Pages commit `ed260368ae225cc360b89576218888a76d6c3ab1` reached `built`; workflow 42166742780 completed successfully. An initial live attempt before Pages finished returned 404; once the existing Pages build was explicitly requested and completed, the full real-model browser suite passed publicly, including all three fixtures, export/copy, offline warm-page inference, persistent model cache reuse, cancel/retry, stale guard, limits, imports, and injected failure states. Public JS/worker/WASM/factory and rendered gallery categories passed separately. No fake inference fallback was introduced.
