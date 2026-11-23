# Observed validation — Query Quay

## Local production bundle

- React/Vite `npm run predeploy` passes. No mock used for successful AI tests.
- Real q8 MiniLM WASM CPU inference in headless desktop Chrome: **12/12 expected policy matches** across two synthetic batches (campaign migration and signed/catalog archive handoff). Both batch status arrays match known answers; deliberate malformed escape, credential URL and forbidden scheme are blocked. The first batch finds two colliding campaign URLs; catalog red/blue remain distinct. Second batch retains two escape-case-distinct signed URLs byte-for-byte.
- Context-only AI-impact test: identical URL with campaign context strips approved attribution and normalizes form encoding; signed context preserves original bytes. Negation probe selected intended campaign policy in this test; no general negation/relevance guarantee.
- **1,309 core assertions**: stable repeated-value order, exact case-sensitive drop names, empty values, UTF-8/percent/protocol rejection, opaque bytes, idempotence and query pair conservation across 160 generated lists and two policies, review gating, record conservation and unique release canonicals.
- **411 independent Python artifact assertions**: browser-downloaded JSON/CSV/Markdown/manifests reopened; all original/current records and multiline formula-like notes compared; Python URL parser confirms decoded pairs; signed bytes retained; metrics and strip-all-query lost distinctions independently recomputed; collisions excluded; maximum 24-record export preserves every source.
- Actual model runs also pass 24-record multichunk processing, edit/approve/hold, undo, export invalidation, pending-row gate, clipboard, audit reimport, cancel/retry and original-input preservation.
- Offline: online successful run, terminate worker, network fully disabled, fresh worker performs real inference in already-open warmed page. **Cold offline reload/navigation untested and not claimed.**
- Production request audit: no model host traffic before explicit load; GET-only public asset/model downloads, no request bodies or source context in URLs, no `.test` source URLs fetched. Persisted network reports omit CDN query values. Runtime hashes match immutable origin assets; built text asset credential-pattern scan found no credential patterns. Not an exhaustive secret/security proof.
- Eight defensive browser checks: worker network abort, unsupported workers, constructor error, worker error, malformed model vectors, timeout, stale error message and cancellation during worker fetch. Fault injection is confined to failure/race checks.
- Additional tests: delayed file read cannot replace edited input; real model-host abort fails closed and explicit retry runs actual model. Delayed syntactically valid cancelled response cannot overwrite a newer real-model result; keyboard order checked.
- 1440/390/320px viewport screenshots and overflow checks, all form controls labeled, ≥44px touch controls, keyboard focus order. Phone hero and result screenshots visually inspected. Physical devices/other engines untested.

## Combined collection

Root predeploy assembled **831 apps, zero failed/skipped**, root gallery and every app subfolder. Final size **999,608,808 bytes**, below unchanged 1,000,000,000-byte guard. Existing deploy-only geometry reuse extends to byte-identical `20261029-30` → `20261028-24`; source builds untouched and compatibility JS paths retained. The affected old app's real worker, PNG import, STL import/parsed exports, portable design save/restore passed. Five affected legacy asset hashes match assembled files. Nine new gallery/app/shared-AI-runtime asset byte matches pass.

All inline root scripts compile with `new Function`; new entry appears exactly once as ai-utility. All older entries are preserved. Real gallery browser checks find **831 cards**, earlier categories, no phone overflow or runtime errors. Pre-existing unrelated recovery edits remain in the worktree and are excluded from this source commit.

Public release checks are appended only after publication completes. No digest is sent by this builder.

Public release verified: matching built Pages commit `423e1b2f578184d1521209ca8194438381fdd753` and successful workflow `45224243940`. Nine public app/gallery/runtime asset byte matches, both real-model fixtures, context-only AI impact, collision hold/undo/policy correction, reviewed exports, 24-record batching, fresh-worker offline and privacy checks passed. Public downloads independently passed 411 artifact assertions; all 831 gallery cards remain intact. Five affected legacy asset matches and actual import/export/restoration regression passed. Combined site **999,608,808 bytes**, below the unchanged guard. Physical phones, other engines, cold offline startup and server equivalence remain untested. No digest sent.
