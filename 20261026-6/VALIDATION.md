# Executed validation — Elliptic Tempo

Run date: 2026-10-26 (Asia/Singapore). No physical print or material testing.

## Geometry and ideal mechanism

`npm test` / `geometry-validation.json`: **260 parameter cases** (default, three presets, all 256 min/max parameter corners distributed across three palm silhouettes) and **30 imported-output cases** (ASCII STL, binary STL, threshold relief, grayscale relief and engraving, each across default/presets/minimum/maximum).

Every case checked actual binary STL for all five parts and the separated float32 print plate: exact binary length, finite coordinates, unit normals agreeing with face winding, nondegenerate faces, expected mm bounds, 1e−5 mm welded edge incidence exactly two/opposite, connected components with positive individual volume. No stale meshes or unchanged-source substitutes.

Representative parameter and imported cases also passed independent CSG sweeps (37 full-turn poses for default/presets/selected corners; 13 for each imported case): zero nominal pitch-ellipse penetration, bounded intentional TPU contact confined to outer 0.4 mm skin, no unintended part collisions, intended cap/post friction interference only, separated plate parts, cap removal paths and imported-feature keep-out. Focal pitch-radius sums and numerical angular derivatives independently verify the ideal conjugate rolling law. Friction, deformation, forces and physical retention strength are not simulated.

## Real production browser tests

`browser-test.cjs` / `browser-validation.json`: actual PNG/JPEG and ASCII/binary STL file picker imports; actual downloaded STL; byte fingerprint equality with current preview plus Node regeneration from downloaded JSON. Image pixel content, threshold, depth, fit/crop and scale measurably changed output. STL scale/rotation/placement/height changed output; reset restored exact baseline. Verified unit confirmation, remove/replace/default reset, invalid dimensions/NaN transforms, empty images and protected safe-zone failure. Ten malformed/excessive/open/nonmanifold/concave fixture classes rejected with export disabled. All five individual downloads validated. Touch-enabled 390 and 320 px phone contexts: no horizontal overflow, reachable exports, real CDP orbit and pinch visibly changed canvas, phone image and STL imports/downloads passed. No uncaught runtime errors or external requests.

`feature-test.cjs` / `feature-validation.json`: every preset, three bounded variations, three silhouettes, text, bundled heart icon, SVG ring, raised/engraved/inverted images; all actual exports parsed and mechanism checked. PNG/JPEG/ASCII/binary portable save/open round trips, persistent named design, undo/redo, actual ZIP decompression and validation of all five STL members, all six view modes, colour-only swatches, theme persistence, drag/drop, Y-up import, collapsible section/focus and latest-worker-edit gating.

`interaction-test.cjs`: ideal conjugate pose changes actual preview but not exports, ghost base, all six icons, imported STL named-save persistence, aborted production worker disables exports, reload recovers.

`hole-test.cjs`: tiny CSG probes through the final generated palm prove SVG ring holes remain unraised/unengraved in both styles; manifold validation repeated.

`stale-import-test.cjs`: delayed earlier image normalization cannot replace a newer image selection.

`additional-test.cjs`: all eight dimensional fields independently affect export, named image persists through reload, missing portable image payload requests reattachment and blocks export, −Z orientation, actual 374 px desktop left rail, reduced-motion preference, 320 px preview-first stacking.

Screenshots record desktop, dark theme, 320/390 px phone, six modes and motion poses. All tests target the built production app under `/daily-app2/20261026-6/`, not only Vite development mode.

## Gallery and combined deployment

`gallery-validate.cjs`: all root inline scripts compile with `new Function`; one unique newest `stl` entry; STL Generators category first; **161 earlier entries preserved byte-for-byte** (162 total).

`gallery-test.cjs`: all 162 cards render, new link/category/search are correct, existing cards return after search, no runtime errors.

`root-stage-test.cjs`: root index matches staged index; all 162 app entry points exist; all 43 new production asset files byte-match the app dist.

The full browser import/download suite is rerun against the combined `deploy/` server as `combined-browser-validation.json`. Root predeploy reports **162 built, 0 failed, 0 skipped**. Publication details are recorded separately after successful deploy/push.

## Scope

Computational watertightness/kinematics are not a physical print test. No physical print, TPU traction, friction coefficient, cap pull-out, force, fatigue, wear, endurance or child-safety tests were performed. TPU compression and frictional synchronization remain experimental and printer/material dependent. Conservative STL import limits reject unsupported geometry instead of claiming repair.
