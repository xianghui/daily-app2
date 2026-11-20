# Range Harbor — observed validation

## Local production bundle
- React/Vite `npm run predeploy` passed. Tests served `dist` under `/daily-app2/20261121-8/`, not the dev server.
- Real MiniLM WASM CPU inference, no mocked success/fallback: Garden survey 6/6 landmarks, Exhibition setup 6/6 landmarks. First-anchor baseline 2/6 per fixture. Grid coordinates exactly matched `(3,4),(7,6)` and `(2,6),(8,3)`; actual residuals and centroid comparisons are in `browser-validation.json`. Tiny synthetic cases, not general accuracy evidence.
- Negation challenge: expected registration desk, model chose coffee counter. `challenge-validation.json` records the failure; mandatory review/holds are required.
- Maximum 12 anchors + 48 ranges = 60 texts, 15 actual chunks; every original survived review/export and JSON audit import. Export import restores originals, not approvals.
- All network disabled in a warmed page, newly created worker performed actual inference. This tests offline inference, **not** offline navigation/reload.
- Current JSON/CSV/Markdown downloaded and independently reopened; 6/6 originals and 2/2 positions per fixture survived, RMS independently recomputed. Reviewed multiline quotes/commas/formula-like notes, holds, clipboard equality, edits disabling exports, undo and max-envelope import passed. See `artifact-validation.json`.
- Eight core groups passed: known grid positions, baseline, review gates/row conservation, missing/duplicate/collinear geometry, reconstructed residuals, boundary/fine-grid behavior, malformed schemas/vectors/numbers and exact originals/multiline exports.
- Real model download cancellation/retry and stale old result versus newer real run passed. Defensive-only fault injection tested network abort/recovery, missing WASM, worker download/constructor/error, malformed vectors/envelope, timeout and delayed callbacks after cancellation/input change. No fake success output. See defensive/cold-cancel/stale-retry reports.
- Empty/invalid/oversized sources, unsupported/bad/oversized imports, unresolved decisions, blank numeric edit (not silently zero), all-held/changed asset conservation and source-change invalidation passed.
- Request capture found no model-host requests before explicit loading. External inference traffic was model-file GET downloads only, no request bodies or note text. Worker/factory/WASM paths and bytes audited. Built text scanned for credential patterns; source data flow inspected, no provider integration or upload API.
- Desktop Chrome CPU and responsive widths 1440/390/320 passed no-overflow, associated labels and ≥44px controls. Fresh viewport screenshots inspected; phone source/review/result states usable. Physical devices, all assistive technology and other browser engines not tested.

## Gallery and publication
- All inline gallery scripts compiled with Node `new Function`; missing scripts fail. Exactly one new AI Utility entry, all previous 764 objects/categories preserved, AI Utilities first; search/older-card and responsive gallery checks passed.
- Combined root build/deploy and public verification are recorded below when complete. Do not treat this app as published until the matching Pages build, public exact asset hashes and public real-inference checks pass.

## Limits
Unpinned model main; shared immutable older-app runtime paths must remain available. Grid fit is not continuous position accuracy or uncertainty. CPU performance on all devices is not promised. Geometry/input/review mistakes can defeat apparent fit. Sketch worksheet only; not navigation/construction/safety decisions. No remote actions or content uploads.

## Combined assembly
Initial root predeploy correctly blocked the 1,000,187,468-byte collection. Extended existing deploy-only byte-identical geometry WASM sharing to `20261028-17` → `20261028-24`; no source builds, old apps or size limit changed. Root predeploy then passed: 765 apps, zero failures/skips, 999,646,203 bytes. Assembled production bundle repeated both real-AI fixtures, max batching, reviews/artifacts/offline/privacy and gallery checks. Older app real worker, actual PNG import, exact geometry fingerprint and independently valid downloaded STL passed with the shared WASM (`legacy-assembled-validation.json`).

## Public verification — passed
Root `npm run deploy` published the combined site. First matching Pages workflow 44834803916 completed successfully; gh-pages commit `3c173eee3e8512ab23bf652e69bafc4cbf3cfc7d` reached `built`. Public gallery, app assets, worker/factory/WASM and affected legacy assets all byte-matched (13 assets). Both real-AI fixtures, four known coordinates, complete workflow/review/exports, maximum batch, offline fresh-worker inference, request privacy and responsive checks passed again at the public URL. All 765 gallery cards/categories remained intact. The older shared-runtime app again passed actual image import, worker generation, exact fingerprint and independent STL validation publicly. No physical phones or offline navigation were tested. Unrelated pre-existing edits/drafts are preserved locally and excluded from the source commit.
