# Arc & Span — validation record

## Source evidence

Fresh public STL downloaded and parsed; identifier, CC BY 4.0 attribution, SHA-256, mm assumptions, dimensions, source defects, connected components, measured rail/sheet/bridge levels and parameter mapping are recorded in `reference-analysis.json`. Actual sections inspected in `reference-sections.png`; reproducible parser included. Raw reference asset is not redistributed. Local reference trees and old daily_app collection were not modified.

## Completed checks

- `npm run predeploy`: production React/Vite build passed; local worker and Manifold WASM bundled.
- `npm test`: **14 parameter cases + 30 imported-output cases**, including all three presets, minimum/maximum fields and eight mixed extremes. Every card and every de-tabbed part passed closed-edge, nondegenerate/finite triangles, normals/winding, positive component volume, millimeter dimensions and flat bed validation.
- `geometry-validation.json`: independent CSG pair-intersection checks and both axial side-truss assembly paths (13 positions). Minimum walls, joint allowance, full-sheet engagement, shoulder projection, deck/tie spacing and safe personalization region checked. All parts exactly contained in card; no part overlap. Twenty simulated cutter passes produce **six connected solids**: five clean parts and carrier. Declared card envelope verified.
- `browser-test.cjs`: real production-browser PNG, JPEG, ASCII STL and binary STL file-picker uploads. Actual downloaded binary STL compared with default/no-import state, UI signature, displayed dimensions, and reconstruction from downloaded portable JSON. Pixel content, threshold, height, crop, scale, rotation and XY placement affect geometry. Unit confirmation gates STL. Replace/remove/reset reproduces default signature. Per-part downloads independently parsed.
- Browser invalid cases: malformed SVG/image content, truncated STL, open/nonmanifold STL, excessive file/triangle/pixel/dimension limits, empty silhouette, missing/NaN transform and unsafe placement. Errors recover; export stays disabled. No external runtime requests from the app.
- Phone widths **320 and 390 px**: preview-first, no horizontal overflow, actual image and STL uploads/downloads, reachable export; CDP touch orbit and two-finger pinch visibly change the canvas.
- `feature-test.cjs`: every preset, three bounded variations and each profile; text, icons, SVG and engraved/inverted-image personalization; all four import types portable-JSON round-trip; undo/redo, six-slot named design storage/reload, all views, persistent dark theme, colour geometry-neutrality, drop import and Y-up STL. Actual ZIP unzipped and each of six STLs parsed. Keyboard focus, collapsible sections, invalid/stale export gating.
- `hole-test.cjs`: final boolean solids probed to show SVG ring holes remain unraised/unengraved over a closed backing, in both styles.
- `resilience-test.cjs`: intentionally aborted production worker blocks exports; reload recovers; all six original bundled icons produce distinct geometry. Assembled and see-through screenshots saved.
- `portable-errors-test.cjs`, `stale-import-test.cjs`, `studio-layout-test.cjs`: missing asset/invalid design recovery, asynchronous import race protection, exact 374 px left rail/right preview, all isolated views, reduced motion and phone stack/no-overflow.

## Publication checks

Gallery scripts and all prior entries are checked by `gallery-validate.cjs`. Gallery runtime/search, combined root staging completeness and hash identity, real staged imports/exports, then public accessibility are recorded by `gallery-test.cjs`, `root-stage-check.cjs` and `public-smoke.cjs` in corresponding JSON reports. Root monorepo predeploy/deploy is the authoritative publication flow.

## Not physically tested

No physical print, assembly, strength, fit, force or durability test was performed. This static decorative kit has no moving joint. Computational collision-free assembly does not prove friction, print tolerance or mechanical strength. Tenons are not positively latched: recalibrate or optionally glue. Start with the joint-bearing pieces at .30 mm TOTAL allowance and adjust for actual printer/material. Not load-bearing or intended as a children's toy.

## Completed publication

Root `npm run predeploy`: **224 apps staged, zero failed/skipped**. Root `npm run deploy`: **Published**. Source commit `ed0d094` pushed to `origin/main`. All 43 staged app files hash-match the individual build. Gallery preserves 223 earlier entries, shows the new entry exactly once, and renders/searches without runtime errors. GitHub Pages initially returned 404 during propagation; bounded readiness polling reached HTTP 200, then `public-smoke.cjs` passed live worker/WASM loading, real PNG import, actual STL download/fingerprint/mesh validation and all 224 public gallery cards. See `public-validation.json`.
