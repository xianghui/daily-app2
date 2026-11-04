# Saddle & Weave — computational validation

2026-11-04. No physical printing or fit/stability testing performed.

- `npm run predeploy`: passed; local bundled fonts, worker, WASM and synthetic samples.
- `npm test`: **67** geometry/export/assembly cases, no blocked cases. Defaults, every preset, each field extreme, simultaneous minima/maxima, three silhouettes, image threshold/grayscale, transformed ASCII/binary imports, imported joint extremes and 24 curvature/span/height/profile corners.
- Independent binary STL checks: exact byte length, nonempty finite/nondegenerate triangles, normalized winding-consistent normals, 1e-5 mm vertex welding, two opposite incident triangles per edge, positive volume per component, exact float32 mm bounds; connected card, all seven clean parts and seven-component clean plate.
- Every geometry case: one connected card within selected envelope; flat first-layer footprints; 28 simulated runner cuts → carrier + seven undamaged parts; no loose-layout overlap; 21 assembled part-pair checks; 72 vertical insertion samples with assembly order; 12 open sockets including card runner clearance; nine complementary cross-laps, protected ≥1.4 mm art backing and bounded remaining webs.
- `browser-test.cjs`: actual production browser PNG/JPEG/ASCII/binary file-picker imports and downloads. Pixel content, threshold, depth, fit/crop, scaling, rotation and placement change exported bytes; remove/reset reproduce default. Download signatures equal current preview and independently regenerated saved-JSON meshes. Browser outputs also pass every-part and assembly validation. Invalid/truncated/open/nonmanifold/concave/excessive/bad-unit-dimension files and empty silhouettes disable exports and recover.
- `studio-test.cjs`: three real preset downloads; silhouettes; text/icon/SVG geometry; portable images/mesh JSON and named saved design reload; missing payload error; undo/redo; ZIP unzipped and every STL validated; all views, ghost, fit; saved dark theme, 374 px left studio, focus outline, collapsible panels, reduced-motion; worker abort disables exports and reload recovers.
- `stale-test.cjs`: rapid geometry/image edits immediately gate stale exports, final result matches Node, invalid transforms block and recover.
- `orientation-test.cjs`: Z/Y/−Z orientation, unit confirmation, actual transformed source dimensions, output solids and assembly validation.
- `icons-drop-test.cjs`: all six bundled icons independently regenerated, every part and assembly checked; drag/drop PNG import.
- `image-hole-test.mjs`: actual Boolean volume probes verify synthetic ring and browser-imported holed SVG retain their centre and engrave the ring.
- `isolated-test.cjs`: all seven isolated views rendered; real per-part downloaded STL bytes validated.
- `interaction-test.cjs`: Y-family lift changes rendered pose but not exported geometry; three bounded variations; every sample button and exact reset.
- `mobile-layout.cjs`: 320/390 px touch contexts, every tab and expanded assembly guide fits actual viewport width, preview-first order, real JSON save after guide, reachable STL exports. Browser tests prove orbit/pinch via touch dispatch and changed canvas screenshots plus phone PNG/STL downloads.
- Combined root `predeploy`: **438 apps, zero failed, zero skipped**. Actual `deploy/` output re-ran the complete browser import/download suite, including phone workflows; `combined-browser-validation.json` records results.
- Gallery: every inline script compiled with `new Function`; new entry once at STL-first category, all previous entries preserved; browser rendering/search/link and no runtime errors.

- Root `npm run deploy`: published. Live GitHub Pages worker/WASM loads, actual PNG/STL imports and independently parsed downloaded STLs passed (`public-validation.json`); public gallery rendering/search/link and all 438 entries passed.

Machine-readable `*-validation.json` files and screenshots in `evidence/` contain observed evidence. No tests prove physical printer tolerances, friction, durability, strength or stability. Reference mesh inspection is not physical validation.
