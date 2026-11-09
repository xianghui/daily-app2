# Observed validation — 2026-11-10

**UNPUBLISHED DRAFT:** three Pages deployment failures blocked public verification. Local results below are valid, but do not establish a working public app. The candidate gallery check passed before publication attempts; the entry was then removed to preserve the completed collection.

Production Vite bundle, real desktop Chrome via Playwright. All fixtures synthetic.

- Print workshop: real MiniLM WASM inference matched 6/6 intended pool links; 21,003 cents allocated exactly. Exact-title substring baseline found 0 links.
- Digital studio: real inference matched 4/4 intended links; 33,002 cents allocated + 2,001 unallocated = 35,003 original cents. Exact-title baseline found 0 links. These are tiny known-answer fixtures, not general accuracy measurements.
- Challenge: negated setup log incorrectly proposed Machine setup; unrelated gardening log proposed Order packing. Both require human rejection. Similarity does not prove accounting validity.
- 2,000 generated allocation cases: integer-cent conservation and <1-cent deviation from exact proportional shares per record. Stable input-order ties, zero costs, empty drivers and all-held pools checked. No measured time-saving claim.
- Actual browser review changed driver quantity to 5, changed/restored pool, added multiline quoted Unicode/formula-like annotation, held one row, undid a review edit. Exports invalidated on edits; apply requires all decisions and valid units.
- JSON, CSV and Markdown were downloaded. Independent Python CSV parser checked every row, current reviewed pool, quantity, allocated cents and multiline/formula escaping. Clipboard matched Markdown exactly. JSON import round-tripped original inputs, requiring new inference/review.
- Maximum 24 activities × 12 pools, four-text model chunks: real inference ran, all rows/candidates survived; all-held plan left full costs unallocated.
- Offline: all network disabled after online inference; a fresh worker produced real inference in the already-open page. No offline reload/navigation claim.
- No model-host request before explicit model action. Captured requests through inference were GET-only with no body, to local/runtime or documented model download hosts. Source snippets did not appear in URLs. No remote inference integration exists.
- Empty/null/malformed/invalid/oversized payloads, bad quantities/costs and unsupported/oversized files rejected. Cancel/retry, input-change race and stale callbacks checked. Actual weight-download cancellation and retry succeeded.
- Model-host network abort showed actionable failure with no suggestions; removing block allowed real retry. Malformed vectors, worker-construction failure, unsupported WASM and timeout checked using fault injection; real success tests were never mocked.
- Desktop 1280, narrow 390/320 CSS pixels: no horizontal overflow, labeled fields, focusable controls, >=44px action target, working export/review actions. Screenshots manually inspected. Physical phones and other browsers untested.
- `npm run predeploy` passed. Gallery scripts compile, one unique AI Utilities entry is first and prior entries remain intact.

Publication and asset checks are recorded separately after root deployment. See JSON evidence and executable tests in this folder.

Local asset checks found no credential-pattern matches in built text assets. Shared WASM is byte-identical to installed ONNX runtime (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Root predeploy assembled 568 apps with zero failures/skips; all deploy index files and byte-identical root gallery were verified. The rendered local gallery preserved older STL/game categories, oldest-app search, new-entry search/link and AI-first ordering.

Independent hand-calculated fixture allocations also matched exactly: print `[8001,4000,2000,4001,1501,1500]` cents; digital `[18001,6000,3000,6001]` cents, with the unused travel pool unchanged at 2001 unallocated cents.

## Hosting blocker

Candidate gh-pages commit `112c2a14ef2e7c84928086d4a4ee586df83d4f09` built in all three workflows: [42699308659](https://github.com/xianghui/daily-app2/actions/runs/42699308659), [42701274827](https://github.com/xianghui/daily-app2/actions/runs/42701274827), [42703314741](https://github.com/xianghui/daily-app2/actions/runs/42703314741). First deployment timed out in `syncing_files`; second also timed out; third returned `Deployment cancelled` immediately. Every retry was requested only after the previous matching workflow completed and no active matching workflow remained. No repeated unchanged branch pushes were used as an app retry. Public app HTTP 404 persisted. Public inference, worker/runtime hashes and public app interactions were NOT verified. Local production-bundle inference, offline caching and artifacts were verified.

The new app build is ~0.9 MB and reuses the existing identical WASM. Model weights are downloaded by the browser, not deployed with this app. Model/workflow simplification cannot fix the provider synchronization/cancellation error without violating collection preservation. Draft excluded from APPS; previous gallery and combined deployment restored.

Restoration: root predeploy passed again with 567 apps, zero failed/skipped, no draft folder under deploy, and prior gallery byte-identical. The existing public gallery was independently verified byte-identical to the pre-task baseline. Root deploy pushed the restored combined publishing branch (`42a2a1bdccd3941f11b32863e414a6a2842dfedc`) without the draft; this is preservation, not a fourth attempt to promote the app. Unrelated pre-existing source changes were left out of this commit.
