# Observed validation — 2026-11-23

## Local and assembled production bundles

- `npm run predeploy` passes. Root predeploy assembles **823 apps, zero failures/skips** and preserves the existing 1,000,000,000-byte guard: **999,684,769 bytes**.
- Actual Chrome browser, GPU disabled, real MiniLM WASM inference: **Survey handoffs** → latlon/lonlat/dms; **Archive waypoints** → dms/dms/latlon. **6/6** intended convention labels in tiny synthetic fixtures. One seeded minute=60 error blocked; final fixtures release 2 and 3 points. First fixture differs from shortcut on one valid point; second on three.
- An initial four-profile design confused DMS axis order. Simplified before release: AI selects DMS notation, explicit hemispheres deterministically identify axes. No fake results used.
- Note-only impact probe holds `40 | 50` constant and changes only context: actual model changes latlon → lonlat and released output [50,40] → [40,50]. Negated adversarial note intended latlon misroutes lonlat; this is documented, not hidden. Instruction-like text does not cause tool use or credential prompts.
- **705 core checks** cover decimal axis grid, independent DMS sign/range checks, bounds, malformed grammar, schema and mandatory approval. No lost source rows. Valid longitude/latitude ranges enforced. No survey/CRS accuracy claim.
- Real 24-record chunked inference; complete JSON audit reimport restores all originals. Review edit resets approval and invalidates exports; undo restores edits; holds remain in complete audits and are excluded from release. Quoted IDs and multiline formula-leading notes survive.
- Browser downloads actual JSON/CSV/Markdown/release CSV/GeoJSON for both fixtures, edited batch, held batch and max batch. Independent Python CSV/JSON parsing and Decimal DMS oracle validate every row, signed coordinate, current edit, lossless original and ready-only feature. GeoJSON Point FeatureCollections parse and include withheld IDs/reasons. Clipboard contains current reviewed text.
- Online run followed by **fully offline fresh-worker real inference in the same already-open warmed page** passed on standalone and assembled bundles. No offline navigation/reload promise.
- Empty/invalid/oversized JSON, invalid file type and file size, unreviewed apply gate, cancel/retry, pending-fetch cancellation, delayed file read vs input edit, network-aborted worker and actual model-host failure/retry pass. Defensive-only fault injection checks unsupported Worker, constructor error, worker error, malformed vectors, timeout and late stale response. Successful inference paths use the real model.
- Production request capture from startup: no Hugging Face request before explicit loading; GET-only static downloads with no bodies or source context in URLs. Persisted network reports omit CDN query values. No credential patterns found in built text assets (not exhaustive secret detection); source has no remote provider integration/keys.
- 1440/390/320 layouts: no horizontal overflow, associated labels, ≥44px controls, reviewed screenshots inspected; fresh-page screenshots avoid an observed Chrome reused-page screenshot stitching artifact. Other engines and physical phones untested.
- Gallery inline scripts compile using Node new Function, new AI entry exactly once, all 822 previous entries preserved. Actual gallery renders all 823 cards, AI Utilities first and prior categories intact.
- Seven assembled gallery/app/worker/factory/WASM assets match bytes. Immutable AI worker from 20261115-6, WASM from 20261107-2 retained.

## Legacy size-preservation regression

Deploy-only rule adds 20261029-26 → 20261028-24 for byte-identical 541,470-byte manifold WASM, preserving source builds and compatibility JS URLs and query-versioning entry/worker URLs. Actual legacy worker loaded shared WASM. PNG and STL imports, downloaded watertight mesh validation, preview/export fingerprints and portable JSON restoration pass. No old apps removed and no size guard relaxed.

## Limitations

Nearest-convention retrieval is not guaranteed inference correctness; all records require review. Negation failure observed. Both axes may be numerically plausible even when swapped. WGS84 is user-attested, never inferred or transformed. Main-revision model is mutable. Output rounding does not improve source precision. Physical phones, other engines, cold offline startup and downstream GIS programs remain untested. GeoJSON syntax/structure and values are checked via independent parsers, not a map service.

Public publication checks are recorded below when complete; a branch push alone is not evidence of working public inference.

## Public release verified

Matching gh-pages/Pages commit `9db3c08cfc0e1d08b1198daaf27a292ac318ea01`, workflow `45144207918`: build and deployment succeeded. Public production Chrome suite repeats both real-model fixtures, note-only impact/negation, all reviewed downloads, max batch, cancellation/retry, privacy capture, offline fresh-worker inference, labels/controls and viewport checks. Independent Python parsing of all five public artifact sets passes. Seven public gallery/app/runtime byte matches, all 823 gallery cards and four affected legacy assets verified. Actual public legacy worker/image/STL/export/portable design restoration passes. A local defensive late-valid-message check cannot overwrite a newer real inference; keyboard tab order through convention, pair and approval passes. No model-host requests occur before explicit loading; content absent from GET bodies/URLs. No secrets detected in built text assets.

Public URL: https://xianghui.github.io/daily-app2/20261123-18/ . Root combined deploy only. Unrelated recovery work preserved in working tree and excluded from this source commit.
