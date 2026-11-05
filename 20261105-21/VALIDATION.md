# Validation — Kelvin & Cell

- `npm run predeploy`: passed; production worker/WASM and fonts bundled under `/daily-app2/20261105-21/`.
- `node validate.mjs`: **41 cases passed**. Independent binary-STL checks cover connected cards, every separate panel and float32 loose plates; finite/nondegenerate triangles, welded manifold edges, opposite winding, positive volume per component and millimeter bounds. Geometry/mechanism checks include actual snip release, print footprints, windows, exact compound-bevel transforms, 56 exterior insertion samples per model and two honeycomb neighbors.
- `node browser-test.cjs`: passed. Real PNG/JPEG/ASCII-STL/binary-STL file selection and downloads, threshold/depth/pixel/transform changes, default comparisons, malformed/oversized/open/nonmanifold/unsupported inputs, recovery, touch orbit/pinch and phone exports. Download signatures match UI geometry and independently regenerated saved JSON models.
- `node feature-test.cjs`: passed. Every preset/window style, text/icons/SVG, portable imported assets, persisted named designs, undo/redo, actual per-part STL downloads, extracted Everything ZIP, all view modes including both neighboring cells, color/export separation, themes, keyboard focus, collapse, drop, up-axis and stale/invalid build gating. A copied test's obsolete expected radius was corrected to the new supported value; the complete suite was rerun successfully.
- `node hole-test.cjs`: passed; white ring center retains backing and dark band actually engraves final solid.
- `node resilience-test.cjs`: passed; production-worker abort blocks exports, reload recovers, all six icons produce distinct geometry.
- `node portable-errors-test.cjs`: passed; missing payload, invalid transforms, wrong-app JSON and bad dimensions block exports and recover.
- `node stale-import-test.cjs`: passed; delayed previous bitmap conversion cannot overwrite a newer file.
- `node mobile-test.cjs`: passed; every editor tab and expanded instructions at **320/390 px**, no horizontal overflow, preview-first, reachable JSON/STL exports, reduced-motion and desktop 374 px left-panel/right-viewer layout.
- `node gallery-test.cjs`: passed; every inline script compiled with `new Function`, entry exactly once with area `stl`, newest first, all **467 prior entries unchanged**.
- Root `npm run predeploy`: **468 built, 0 failed, 0 skipped**. Root index matches, every gallery folder exists, all new app deploy files byte-match final `dist`.
- Combined production gallery browser check: passed; all **468 entries render**, new link opens production worker geometry, no runtime errors.
- `TEST_BASE=http://127.0.0.1:5972 TEST_REPORT=combined-browser-validation.json node browser-test.cjs`: passed against the actual combined deploy tree, including actual phone/import/download tests.

Evidence: JSON reports and screenshots beside this document; reference hashes, measurements, cross-section SVG/PNG, source README/license and proportional assembly map under `reference-analysis.json`, `evidence/` and `public/licenses/`.

**No physical printing, assembly, adhesion, fit, material, strength or durability tests were performed.** External tape and compatible adhesive are required. Computational geometry does not prove real adhesive performance. Default card requires 270 × 270 mm usable bed area; individual panels are available for smaller printers.
