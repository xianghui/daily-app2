# Decision Pair — observed validation

## Implementation and local production bundle

- React/Vite `npm run predeploy` passes. Default path uses real no-key MiniLM q8 inference in a worker on WASM CPU with GPU disabled. Shared worker source, model/task, four-text protocol, factory and WASM paths were inspected; exact asset provenance is recorded.
- Both synthetic batches retrieve **12/12** intended decision links; first-spec shortcut matches **4/12**. Tiny fixtures only, not general accuracy. First batch has 3/3 decisions with both expected outcomes but **0/9** independent-condition witnesses; second has both outcomes for 3/3 and **3/9** independent-condition witnesses. Proposed unexecuted additions fill the logical gaps within the supplied budget without inflating existing coverage.
- Context-only real inference changes the selected expression and expected output while leaving truth inputs unchanged. A competing-negation probe incorrectly selected access rather than dispatch; mandatory human review remains required.
- `core-test.mjs`: 32 explicit assertions plus invalid grammar, duplicate/nonboolean keys, malformed vectors, pending/held/blocked cases. `independent-test.py`: **160** generated 2–5-condition expressions and **3,977** independent Python Boolean and pair-enumeration assertions, including truth tables, exact witness sets, outcome baseline, proposed coverage and budget bounds. App code never evaluates imported JavaScript.
- Actual downloaded JSON/CSV/Markdown/fixture files independently parse with Python; source/review IDs, every record, quoted commas/newlines, formula-guarded multiline notes, review edits, expected values and witnesses survive. Current artifacts in `artifact-validation.json`; test counts expand when additional artifacts are checked.
- Real 24-case chunks preserve all records; mandatory review, edits, holds, undo and copy/download actions pass. A separate dense Unicode review audit (<4 MB) reimports all 24 originals; approvals are deliberately not restored. Nonboolean reviewed input blocks one case rather than losing it; decision edits renew approval and invalidate exports.
- Fully offline fresh-worker inference succeeds in an already-open warmed page with all network disabled. Cold offline navigation/reload is unsupported and untested.
- Ten defensive browser checks exercise real worker/model network aborts, missing Worker/WASM, worker construction/errors, malformed vectors, timeout, stale-message rejection and cancellation during worker fetch. Separate real download failure → retry and delayed File.text tests pass. Fault injection is used only for defensive paths; successful workflow/quality checks use the real model.
- Network capture starts at app startup: no model requests before explicit loading; only GET model/static downloads, no request bodies, no source contexts in URLs and only documented asset/model hosts. Audit files store host/path/query-key names, not signed CDN query values. No provider/key fields, content-upload functions or remote inference integration. Built credential-pattern scan supplements source review and is not exhaustive proof.
- Desktop 1440px and phone-width 390/320px layouts have no document overflow, labelled form controls and ≥44px visible touch targets. Normal hero/review/results viewport screenshots retained; narrow hero/results visually inspected. Physical phones and other engines untested.

## Publication status

Assembled and public release verification passed; details follow.

## Additional/assembled checks

- Separate real-model retail-refund / meeting-room corpus matched **4/4** links (`domain-validation.json`), without changing model or embedded labels.
- Delayed **valid-vector** fault injection confirms a cancelled prior run cannot replace a newer run’s different selection (`race-result-validation.json`). This defensive test does not count as successful AI inference.
- Dense audit: **157,759 bytes**, 24 originals restored; multiline Unicode notes, invalid reviewed Boolean blocking, route-edit reapproval and undo pass.
- Local actual artifacts independently passed **995 assertions**; **42 reviewed fixture cases** were reopened. Assembled artifacts passed **857 assertions / 42 cases**. Every approved expected value and independence pair is checked independently, not only round-tripped through the app encoder.
- Root predeploy assembles **860 apps**, zero failures/skips; **999,627,285 bytes** below the unchanged 1,000,000,000-byte guard. One additional byte-identical 541,470-byte legacy geometry runtime is shared deploy-only from `20261106-2` to `20261028-24`. Source dist trees remain unchanged, compatibility JS paths remain available and entries are query-versioned.
- Node compiles every inline gallery script with `new Function`; exactly one new utility entry is first, and all 859 earlier working-gallery entries/categories remain. Real gallery shows all 860 cards and no phone-width overflow.
- Full assembled real-AI workflow, review/export, 24-case, warmed-page offline, privacy and responsive tests pass. **11 exact asset-byte matches** include new HTML/JS/CSS, root gallery, shared AI worker/factory/WASM and affected old geometry app HTML/JS/CSS/WASM. Built credential-pattern scan passes.
- Real affected legacy default geometry and PNG/JPEG/ASCII/binary STL imports produce fingerprint-matching, independently checked closed-manifold STL exports with no browser errors and request the intended shared runtime.
- An asset-test harness initially treated a cache-busting query as part of a local filename; corrected the checker to strip the query for disk access while retaining it for HTTP comparison, then reran successfully. No application failure or fake fallback.

## Public release

- Public app: https://xianghui.github.io/daily-app2/20261125-8/
- Remote gh-pages and Pages **built** commit: `cea5ef4bf2d30056e612285a1be065b0e135f37e`. Workflow **45507710806** completed successfully; no rebuild trigger or republish was needed. Published only via the root combined-site workflow.
- All **11 public asset-byte matches** pass, covering gallery/new shell/shared AI worker/factory/WASM and affected legacy assets. Root size guard remains unchanged.
- Public real-model workflow passes both tiny synthetic batches, reviewed edits/hold/undo, current-result exports/clipboard, 24-case chunks, original reimport, cancellation/retry, input validation, context-only expression/outcome changes, privacy network checks and 1440/390/320 layouts. Real fresh-worker inference passes with the network disabled in a warmed open public page. Known negation failure remains visible in the report.
- All **860 public gallery cards** render; earlier entries/categories remain intact, with no narrow-phone page overflow.
- The affected public legacy app again passes real default geometry, PNG/JPEG/ASCII/binary imports and fingerprinted, independently validated closed-manifold STL downloads using the shared geometry runtime.
- Untested: physical phones, other browser engines, cold offline startup/reload, actual program execution/observed outcomes, correlations/feasibility constraints between conditions and any certification use. This app only plans input designs and expected outcomes, not executed test coverage. No accuracy/time-savings claims beyond the stated small synthetic checks. No digest sent.

- Final public downloads pass **995 independent artifact assertions**, reopening **42 reviewed fixture cases**. Public dense audit reimport preserves all 24 originals (157,759 bytes), nonboolean inputs block, route edits renew approval and undo passes. Separate public cross-domain real inference matches **4/4** retail/room-reservation links.
- Source staging preserves and excludes unrelated pre-existing recovery folders/root edits. The already-public recovery gallery entry remains deployed.
