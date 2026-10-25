# Validation — Cycloid Settle / 20261026-7

## Computational geometry

`npm test` passed: **68** default, preset and six-parameter-corner cases plus **30** image/STL-derived cases (ASCII wedge, binary gem, threshold, grayscale and engraving, across presets and parameter extrema).

Every exported part and float32-translated print plate was parsed independently from binary STL. Required finite coordinates, positive triangle area, unit normals agreeing with winding, expected millimeter bounds, exactly two oppositely directed face incidences per 1e-5 mm-welded edge, and positive enclosed volume for each component. Two components on the plate, one per part.

Independent Manifold intersections sampled 33 runway positions for every built-in case and 25 for every imported case. **Maximum roller/runway overlap: 0 mm³**. Preview uses the polyline circle-offset envelope and 0.001 mm numerical separation; neither geometry nor timing is a force/friction simulation. Checks also cover guide side gaps, vertical lift-out, disjoint print layouts and unchanged geometry outside the isolated palm personalization zone. The roller is intentionally loose, with no end stops or overhead retention.

`geometry-validation.json` records the individual results. Default separated print-plate bounds are **99 × 40.80 × 15 mm**.

## Production browser and real exports

Built using `npm run predeploy`, then served the actual `dist` bundle at `/daily-app2/20261026-7/`, including bundled worker/WASM paths.

Passed:

- `browser-test.cjs`: actual file-picker PNG/JPEG/ASCII/binary STL imports, baseline comparisons, threshold/depth/grayscale/crop/scale changes, mesh scale/rotation/placement and height, reset/replace/remove, millimeter confirmation gating, actual per-part downloads and combined STL parsing. Every downloaded signature equals the exact current preview model, and portable JSON independently rebuilds identical bytes with mesh/mechanism checks.
- Malformed/truncated/open/nonmanifold/concave STL, fake content, excessive bytes/pixels/triangles/dimensions, empty silhouettes, invalid parameters/transforms and keep-out violations are recoverably rejected with disabled export.
- `feature-test.cjs`: every preset, bounded variations and silhouette, text/icon/SVG/engraving, asset JSON round trips, local named designs/reload, real unzipped two-part ZIP contents, every part button, isolated/assembled/exploded/plate views, saved dark theme, preview-only colours, drop import, Y-up STL, collapse, visible keyboard focus and latest-state export gating.
- `additional-test.cjs`: every parameter changes geometry, preview-only motion changes the actual canvas without altering export, named imported-image restore, explicit missing-payload reattachment errors, −Z-up mesh import, 374 px left desktop rail, reduced motion and 320 px preview-first layout.
- `hole-test.cjs`: actual CSG probes of SVG ring holes in raised and engraved final meshes.
- `interaction-test.cjs`: motion and ghost visibly affect canvas, all six bundled marks produce geometry, named imported STL survives reload, production worker-load failure blocks export and reload recovers.
- `stale-import-test.cjs`: delayed old image decoding cannot overwrite a newer selected image.
- Touch-enabled 390/320 px contexts: real PNG/STL imports and downloads, CDP touch orbit and pinch visibly change canvas, no horizontal overflow, reachable exports, preview-first stacked controls.
- No browser JavaScript runtime errors or external requests in app import/download testing.

The same real import/download browser suite also **passed against the combined root staging output**; report: `combined-browser-validation.json`. Public GitHub Pages smoke tests additionally verified the live worker, real PNG/STL imports, downloaded manifold geometry and the 163-card gallery; see `live-validation.json`.

## Gallery and root publication

`gallery-validate.cjs` compiles every inline script with `new Function`, verifies the unique new `stl` entry, category order/label, and byte-for-byte preservation of **162 previous entries**. `gallery-test.cjs` checks **163 rendered cards**, newest first, category order, search/recovery and no runtime errors.

Root `npm run predeploy` staged **163 apps, zero failures, zero skipped**. `root-stage-test.cjs` verifies every app's index, root gallery identity and exact byte equality of all **43 new app production files**. The local combined test server initially appended index.html twice for the gallery root; that *test harness* route was fixed and gallery tests rerun successfully. No app runtime/build or geometry failure remained.

The root `npm run deploy` publishes the combined `deploy/` directory, not the individual app dist. See `publication.json` for resulting URLs/revision and final delivery checks.

## Not performed

No physical printing, roll-speed, rolling/friction, force, impact, wear or fatigue testing. Computational manifold/collision checks do not certify real-world performance. Print Gentle Descent and a slicer-cut 15 mm runway segment plus the spool first to calibrate side fit. The roller must lift off freely; use a soft mat at the open end. The archived gallery and Keycap Studio reference were read-only.
