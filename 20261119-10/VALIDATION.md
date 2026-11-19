# Observed validation — Pairwise Foundry

## Local production bundle

- React/Vite `npm run predeploy` passed. No mocked inference in successful workflow checks.
- Two materially different real CPU MiniLM fixtures: checkout conditions **6/6** intended links; document viewer conditions **6/6**. Checkout covers **11/11** feasible pairs in **5 tests**, versus 6 full feasible configurations and 10 pairs in the first five. Viewer covers **12/12** in **4 tests**, versus 8 full feasible configurations and 8 pairs in the first four.
- Initial online/offline wording caused a real misclassification. More explicit anchors/examples repaired these tiny fixtures; no broad accuracy claim. Unrelated instruction-like text still receives a nearest class and was held, blocking the plan.
- 160 independently enumerated configuration-space oracle cases passed pair/feasibility/coverage/constraints checks. Core checks cover malformed vectors, pending/held review, missing active factor levels, bad IDs, budgets and forbidden combinations.
- Full batch: 24 source notes, 20 catalog levels, 44 real inference texts in four-text chunks, 5 factors × 4 levels = 1,024 configurations, 160 feasible pairs. Human corrections activate every intended level; complete coverage, all original records and final multiline note preserved; maximum JSON audit reimport/re-inference passed.
- Actual browser downloads parsed independently with Python csv/json: source IDs/descriptions and reviewed levels, all generated test IDs/columns/marginal pair counts/statuses preserved. Multiline quoted/comma/formula-like edited field survives JSON and sanitized CSV. Budget-limited matrix export retains incomplete status and nine uncovered pairs.
- Hold blocks whole plan; missing active level/contradictory constraints block generation. Budget=1 yields 3/12 covered pairs and explicit nine-pair gap, not a false complete result. Review edits invalidate exports; undo/remap/copy/import tested.
- Empty, invalid, oversized JSON/files, duplicate IDs, bad factor/level rules and fractional/zero budgets rejected. Cancellation and real retry pass; input-change stale run, delayed file read, and late older result versus newer completed run checked.
- Fault-injected download/model network/worker construction/WASM absence/worker error/malformed vectors/malformed envelope/timeout paths all show errors with no fake output. Network failure followed by actual real-model retry passed.
- Fresh-worker real inference with all network disabled passes in an already-open warmed page. No offline app-shell reload claim. Captured successful default-path traffic: only GET/HEAD, no request bodies/source text in URLs; no model-host activity before loading. No remote provider/secrets integration.
- Desktop 1440px and narrow 390/320px overview/review/result screenshots inspected; no horizontal overflow; labels, visible focus and ≥44px button touch height pass. Physical phones, other engines and screen readers untested.
- Root gallery inline scripts compile; exactly one new `ai-utility` entry; all 718 pre-existing entries unchanged. AI Utilities remains first; STL and game categories plus legacy search preserved.

Machine-readable reports: `core-validation.json`, `browser-validation.json`, `defensive-validation.json`, `artifact-validation.json`, `newer-run-validation.json`, `import-stale-validation.json`, `gallery-validation.json`, `gallery-ui-validation.json`. Defensive injection is not evidence of AI capability.

## Publication checks

Combined-site assembly, public Pages commit status, served-byte runtime audits, public real AI workflow and gallery results are recorded separately as they complete. Do not infer public availability from a branch push alone.

### Combined production assembly

Root predeploy passed: **719 apps built/staged, zero failures or skips**. The first attempt was blocked by the 1 GB guard (1,000,119,358 bytes); the existing byte-verified deploy-only geometry reuse now additionally covers 20261028-25 → 20261028-24. Source builds remain unchanged, compatibility JS URLs remain, and the resulting site is **999,578,093 bytes**. The preserved app loaded its real shared geometry worker/WASM and exported valid finite binary STLs for default, PNG import and binary STL import with three different preview signatures. All 52 served new-app/gallery/shared-runtime/affected-legacy assets byte-match the assembled directory; app built-text credential-pattern scan passed. The entire 719-card gallery renders with all legacy categories/search intact. See `assembly-validation.json`, `legacy-runtime-validation.json`, `assembled-asset-audit.json` and `assembled-gallery-validation.json`.

Assembled production browser suite completed successfully after an interrupted runner was restarted. Both real-AI fixtures, maximum batch, actual artifacts, reviewed/held/undo/budget workflows, fresh-worker fully offline inference, privacy traffic and desktop/phone checks passed against the root `deploy/` bundle (`assembled-browser-validation.json`). Root deploy lifecycle also rebuilt/staged all 719 apps successfully.

### Public release verified

The first combined publication reached **built** at gh-pages commit `a49dfb3a069baa4fa6e7cf2a94d5639d84427c78` (workflow 44435205726). The actual public app passed both real-model fixtures and the complete workflow suite: reviewed exports, maximum batch and audit reimport, cancellation/retry, holds/remapping/undo, budget/infeasible guards, CPU inference, fully offline fresh-worker inference in a warmed page, privacy traffic and responsive layouts. All **52 public app/gallery/AI-runtime/affected-legacy assets** byte-match assembly. One transient HTTP 503 interrupted the first asset audit; a bounded retry passed without republishing. Public gallery contains 719 cards with old entries/categories intact. The preserved older geometry app also passed actual default/PNG/STL import and finite valid STL downloads using the shared public WASM. Independent artifact parsing passed again on public downloads. See `public-browser-validation.json`, `public-asset-audit.json`, `public-gallery-validation.json`, `public-legacy-runtime-validation.json`, `pages-build.json` and `publication-status.json`. Source commit excludes unrelated pre-existing working-tree changes.
