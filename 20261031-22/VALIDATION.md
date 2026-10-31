# Validation — Clap & Fold / 20261031-22

## Geometry and reference

- Actual downloaded reference parsed in this run; SHA-256, dimensions, 27 edge-adjacent components, nonwatertight source status, local rejected candidates and measured socket/runner features recorded in reference JSON files. Actual mesh sections visually inspected; no raw reference STL redistributed.
- `npm test`: **36 built-in configurations, 18 import-derived configurations**, all exported parts checked independently; **29** out-of-bounds parameter inputs rejected. See `validation-report.json`.
- Independent binary STL checks: exact byte length, nonempty finite/nondegenerate triangles, normalized outward stored normals, 1e-5 mm welded exactly-two-opposite-faces edge incidence, positive volume per connected component, expected mm bounds and Z=0 print alignment.
- Real CSG assembly checks: all six part-pairs at13 representative opening positions0–35 degrees; additional browser cases use25 positions. No unintended volume intersections. Four tongue/slot probes, four through-cord-eye probes, outside fin insertion/removal, engraving separation and remaining backing pass.
- Connected card is one solid; sixteen safe snips yield exactly four released parts plus carrier. Clean parts do not overlap on the card. All declared bounds match; forty sampled upper sections per case stay inside bed footprints.
- `hole-validation.json`: actual Boolean probes verify bright center stays unengraved, dark ring cuts solid and continuous backing remains.

## Real production browser tests

`browser-test.cjs` runs both standalone production `dist` and ROOT combined `deploy` outputs at the actual `/daily-app2/20261031-22/` base prefix.

- **27 actual STL downloads per run**, including default, changed images/threshold/depth/crop/grayscale/scale, JPEG, both STL formats with scale/rotation/placement/depth/reset, min/max, each individual printable part, and phone image/STL cases.
- Download signatures equal the exact current model shown by preview; portable JSON regenerated in Node equals those signatures. Every import-derived downloaded model receives full component and assembly checks, not just file-download assertions.
- **10 malformed/unsupported file cases**: invalid SVG, truncated STL, open STL, duplicated-face nonmanifold STL, excessive bytes, false PNG content, excessive pixel dimensions, excessive triangle count, oversized coordinates and concave solid. Additional white/empty image, invalid numeric bounds, nonfinite transform and unsafe placement errors recover with export disabled.
- Replace/remove/reset returns exact built-in signatures. Millimeter confirmation gates STL integration.
- 390px phone: real file pickers and downloads; CDP touch orbit and pinch change canvas screenshots. 320/390px: no horizontal document overflow and reachable export.
- No runtime exceptions or external app asset requests. Bundled worker/WASM resolves under real production prefix.

See `browser-validation.json`, `combined-browser-validation.json`, `final-production-validation.json` and tested screenshots in `evidence/`.

## Studio/state tests

- `studio-validation.json`: all three presets and silhouettes, text/icon/SVG changes, bounded image and exact mesh JSON roundtrips, saved named design reload, missing-file payload blocks, undo/redo, actual ZIP unzipped and every contained STL parsed, all views, theme persistence, keyboard focus, collapsible sections, reduced motion,374px LEFT desktop panel and320px preview-first stack.
- Worker script deliberately aborted: actionable error, disabled export, reload recovery.
- `personalization-validation.json`: all six icons, text and SVG receive full mesh/assembly validation.
- `orientation-validation.json`: Y-up and upside-down STL fixtures recover the exact intended mesh; changing source axis explicitly detaches it.
- `stale-validation.json`: rapid parameter/image edits immediately block exports; only latest result becomes exportable. Invalid transform remains blocked until reset.
- Opening control visibly changes representative assembled pose without altering printable mesh signature; it is explicitly preview-only, not exact soft-cord simulation.

## Gallery/build/deployment

- Individual `npm run predeploy` passed.
- Root gallery: all inline scripts compiled with `new Function`; exactly one newest `20261031-22` STL entry. All **325** earlier entries remain byte-equivalent as parsed objects. STL category first; search and link rendering pass.
- ROOT `npm run predeploy`: **326 built, 0 failed, 0 skipped**. Every gallery folder has `deploy/folder/index.html`; new app matches its checked dist. Combined gallery renders326 cards without runtime errors. Evidence: `gallery-validation.json`, `gallery-render-validation.json`, `combined-gallery-validation.json`.
- Publication uses ROOT `npm run deploy` and its `deploy/` directory. Per-app gh-pages dependency and required predeploy/deploy scripts remain installed/configured.

## Explicit limits

These are computational/browser checks, NOT physical tests. No physical print, actual assembly, cord-hinge trial, impact/durability or acoustic test was performed. Two external soft cord loops and compatible fixed-seat adhesive are required. Your hands guide alignment. Proposed clearance and loop slack require printer/material-specific trial fitting; no universal fit, spring-return, rigid-pin hinge, sound pitch or strength claim.

## Public-site verification

GitHub Pages deployment completed successfully for the published gh-pages commit. Real public-site Chromium tests downloaded/manifold-checked PNG-, JPEG-, ASCII-STL- and binary-STL-derived exports, matched preview signatures, exercised the opening view and rendered all326 gallery cards without runtime errors. `live-production-validation.json` records the public run.
