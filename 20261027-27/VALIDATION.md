# Executed validation — 2026-10-27

## Passed before publishing

- `npm run predeploy`: Vite production build, local worker and Manifold WASM bundled.
- `npm test`: **12 parameter cases + 30 image/STL cases**. Defaults, all three presets, minimum/maximum combinations, six additional variations; both STL fixtures, threshold/grayscale images and engraved relief across presets/extrema.
- Independent binary-STL validation of every connected card and four part exports: exact byte count, finite vertices/normals, nondegenerate faces, normalized normals aligned with winding, bounds in mm, welded 1e-5 mm edge incidence exactly two with opposite directions, exactly one closed component and positive volume per exported solid.
- Six assembled part-pair intersections zero within 2e-5 mm³. Nine sampled positions for each core/flange insertion stage. Core shoulders block inward flange travel; crossed slots constrain lateral travel. Assembly parts remain distinct and nonintersecting. Slip fits explicitly non-captive.
- Each part exactly contained in connected carrier; flat parts disjoint; sixteen accessible tab cuts yield **five components** (carrier + four parts). Card XY matches declared envelope. Safe-zone wall/slot clearance is bounded separately.
- Production `browser-test.cjs`: **27 downloaded STLs**, PNG/JPEG and ASCII/binary file picker imports, threshold/depth/crop/grayscale changes, scale/rotation/placement/height changes, exact current-preview/export fingerprints, portable JSON regeneration matching downloaded bytes, remove/reset signatures, extrema and every part export. Ten malformed/oversized/open/nonmanifold/concave/dimension/triangle-limit inputs rejected; empty images, invalid transforms and unsafe placements block export and recover.
- `feature-test.cjs`: **20 feature models** with exported mesh and assembly validation. All presets/shapes, three randomized variations, text, SVG/engraving, image background inversion, six local named designs workflow, portable asset JSON round trips, up-axis conversion, undo/redo, actual ZIP unpacking and each included STL validation, all per-part buttons, view modes, saved theme, swatch preview changes, drag/drop, focus, collapsible sections and latest-state export gating.
- `resilience-test.cjs`: worker script abort blocks export; reload recovers. All six bundled icons make distinct changed geometry. Assembled/ghost screenshots saved.
- `hole-test.cjs`: kernel probes prove SVG ring center remains unraised/unengraved while dark ring changes real geometry; closed-manifold raised/engraved results.
- `portable-errors-test.cjs`: missing image payload, wrong app, bad transform and dimensions rejected recoverably.
- `stale-import-test.cjs`: delayed first image normalization cannot overwrite a newer selection.
- `studio-layout-test.cjs`: 374 px desktop left controls/right viewer, all isolated views, axial insertion preview, reduced motion, phone preview-first layout and no horizontal overflow.
- Browser phone contexts **320 and 390 px**, real touch orbit and pinch verified by changed canvas images, reachable exports and phone PNG/STL file uploads/downloads.
- No runtime errors; no remote requests during local generation/import/export suites.
- Actual reference STL downloaded, SHA-256/mesh sections/dimensions/components and measurement-to-parameter decisions recorded. Source nonmanifold defects explicitly documented, not silently repaired or redistributed.
- Gallery inline script compiled using Node `new Function`; one correct new STL entry first; all **210 prior entries** unchanged. Browser renders **211 cards**, STL category first, working search, no runtime errors.
- Root `npm run predeploy`: **211 built, zero failed/skipped**, root index and all 211 app outputs verified in `deploy/`.
- Repeated actual browser PNG/JPEG/ASCII/binary import/download and phone suite against combined deployment directory: **27 downloads**, all passed (`combined-browser-validation.json`).

## Publication

Published through parent monorepo `npm run deploy` only. `public-smoke.cjs` checks public HTTP 200, worker/WASM initialization, actual PNG upload/STL download and public gallery; **PASSED** after deployment propagation (initial 404 during Pages build resolved). Result is saved in `public-validation.json`: HTTP 200, loaded worker/WASM, real PNG import, geometry-validated STL download and 211 public gallery entries.

## Not performed

No physical print, fit, winding-capacity, load, strength, fatigue or durability test. Computational watertightness does not prove printer fit or strength. Calibrate cores and a flange; thin tabs need careful clipping, and slip joints are not latches. Optional adhesive after calibration is documented, not assumed hardware-free retention.
