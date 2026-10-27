# Gable & Grove — computational validation

All tests use the actual production bundle at `/daily-app2/20261028-8/`, not a development-only worker path.

- `npm test`: **14 parameter configurations + 30 image/STL-derived configurations**, each checking the connected card and all five individual parts. Binary STL counts/byte lengths, finite float32 vertices, nondegenerate faces, normalized normals, outward neighbor winding, positive volume per connected component, expected millimeter bounds, edge incidence exactly two/opposite at 1e-5 mm welding. All passed.
- CSG assembly tests for the same cases: five disjoint assembled parts, two gable vertical insertion paths, both normal-to-slope roof insertion paths (13 samples each), gable/roof shoulder stops, flat-part separation, exact containment in card, declared envelope, twenty cuts producing five parts plus carrier. All passed. Roofs/gables remain separate; no interference fit or captive latch is asserted.
- `browser-test.cjs`: actual production browser file-picker uploads and STL downloads for PNG, JPEG, ASCII and binary STL. Pixel content, threshold, relief depth/mode, scale, crop, rotation, X/Y placement and STL height change exported geometry. Downloads match UI signature and independently regenerated portable JSON exactly. Imported outputs run the same independent mesh and assembly checks.
- File errors: truncated, open, nonmanifold, excessive file/triangle/pixel/dimension, concave STL, fake image, empty silhouette, invalid dimensions/transforms, and out-of-zone placement disable exports with recoverable messages. Remove/reset reproduces default bytes; millimeter confirmation gates STL integration.
- `feature-test.cjs`: every preset, three bounded variations, all silhouettes, text, icon, ring SVG, raised/engraved/background behavior, undo/redo, named designs across reload, PNG/JPEG/ASCII/binary portable JSON round trips, real six-STL ZIP extraction/validation, all per-part buttons, view switching, persistent theme, visible focus, collapse, swatches, drag/drop, Y-up mesh and latest-worker edit checks passed.
- `hole-test.cjs`: tiny CSG probes verify the SVG ring's interior remains unraised/unengraved in final exported floor geometry, not just its source image.
- `portable-errors-test.cjs`: missing image payload explicitly asks reattachment; wrong app, invalid transform and bad dimension block export and recover via reset.
- `resilience-test.cjs`: aborted actual hashed production worker blocks export; reload recovers. All six bundled marks produce distinct real geometry. See-through and solid assembled screenshots recorded.
- `stale-import-test.cjs`: delayed first image decode cannot overwrite a newer import selection.
- `studio-layout-test.cjs` and browser phone tests: 374 px left desktop controls/right viewer; preview-first 320/390 px phones, no overflow, reachable downloads and real phone file pickers. CDP touch orbit/pinch visibly alter the canvas. Focus, selected states, reduced motion and saved dark/light theme verified. No runtime errors or remote generation requests in production browser suite.
- `gallery-validate.cjs`: root inline scripts compile with Node `new Function`; newest entry exactly once with area `stl`, correct folder; **219** existing entries preserved. Gallery browser check requires **220** cards, STL category first, correct newest link and working search/recovery.

Reproducible JSON reports and screenshots are included. `reference-analysis.json`, `reference-sections.svg/.png` and parser document actual reference inspection and new design decisions. The reference's own defects are disclosed; its raw mesh is neither redistributed nor used as output.

**Not performed:** physical print, force/friction fit, material strength, fatigue, real manual assembly or outdoor/animal suitability testing. Computational checks establish geometric insertion/clearance and mesh topology, not those physical properties. Print/calibrate a floor and gable before a full card.

## Combined-site staging

Root `npm run predeploy`: **220 apps built/copied, 0 failed, 0 skipped**. `root-stage-check.cjs` verifies every gallery folder exists in `deploy/`, identical root index, and **43 new-app files hash-identical** to tested dist (including worker/WASM/fonts/samples). Real image and binary-STL file-picker imports and downloaded manifold STLs passed through the combined root staging URL. Root gallery renders 220 cards, preserves search recovery and reports no runtime errors.

## Live publication

Root `npm run deploy` completed with `Published`; GitHub Pages [build/deploy run](https://github.com/xianghui/daily-app2/actions/runs/40592522580) completed successfully. After normal Pages propagation, `public-smoke.cjs` verified HTTP 200 at the public app URL, production worker/WASM load, real PNG file-picker import and downloaded STL matching the current preview signature and independent manifold checks. Public gallery shows the new app first and all **220** cards without runtime errors. See `public-validation.json`. Initial propagation 404s were retried after the deployment finished, not counted as successful live checks.
