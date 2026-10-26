# Contra Arc — executed validation

Date: 2026-10-26, Asia/Singapore. All assets and fixtures used by tests are synthetic.

## Passed

- `npm run predeploy`: production Vite bundle, local worker/WASM/fonts and exact GitHub Pages base path.
- `node validate.mjs`: 20 default/preset/boundary cases and 35 image/STL-derived cases. Every individual part and separated plate checked for finite/nondegenerate triangles, normalized normals, expected mm dimensions, opposite-directed two-face welded edges, outward winding and positive enclosed volume per component.
- Mechanism checks separate from mesh checks: 71 sampled rigid closures per model, opposite changing angular ratio; 25-position default/boundary and 19-position imported-output intersection sweeps; no unintended overlaps, intended cap-fit contact restricted to pins, axial/radial gaps, stop engagement beyond travel, vertical disassembly in documented order, plate separation and isolated personalization.
- First long-arm sweep exposed bridge contact with a ground cap. Fixed by raising bridge above both ground-cap roofs with an axial gap and extending upright distal pins. All 55 geometry/import cases subsequently passed. Disassembly tests respect documented bridge-first removal before ground-cap withdrawal.
- `node browser-test.cjs`: actual PNG/JPEG and ASCII/binary STL picker imports, actual binary STL downloads parsed independently; changed image/threshold/depth/scale/crop and mesh scale/rotation/height/placement produce different geometry. Preview signature, downloaded signature and Node regeneration from portable JSON agree. Per-part downloads pass mesh checks.
- Browser rejections recover: truncated/open/nonmanifold/self-intersecting or unsupported concave inputs, fake images, excessive bytes/pixels/triangles/dimensions, empty silhouettes, invalid numeric dimensions/transforms and import safe-zone violations. Unit confirmation gates STL integration. Invalid edits disable exports.
- `node feature-test.cjs`: all presets and three bounded variations, built-in shapes, text/icon/SVG geometry, engraving/background, image/STL portable JSON roundtrips, undo/redo, named-design persistence, ZIP contents and eight individual STLs, view modes, saved dark theme, colour-geometry neutrality, drag/drop, Y-up source import, focus/collapsible sections and latest-worker-state gating.
- `node resilience-test.cjs`: blocked production worker disables export; reload recovers; all six original bundled icon marks change geometry.
- `node stale-import-test.cjs`: deliberately delayed first image cannot overwrite a newer file selection.
- `node hole-test.cjs`: boolean probes show actual ring holes remain unraised/unengraved in the final manifold mesh, with the backing intact.
- `node additional-test.cjs`: 374 px desktop left controls/right viewer, three model thumbnails, motion changes preview but not export, missing portable image payload gives explicit reattachment feedback and restores recoverably, reduced-motion styling, 320/390 px preview-first phones.
- Phone tests: no horizontal overflow at 320/390 px, reachable enabled exports and picker imports, real CDP touch orbit and pinch change canvas pixels.
- Gallery: inline scripts compile with `new Function`; exactly one new STL entry, newest first, STL Generators first; all 182 previous entries unchanged. Browser cards/search render without runtime errors.
- Root `npm run predeploy`: **183 built/copied, 0 failed, 0 skipped**. Root and new-app staged HTML match source/production; all 183 folders have an index.
- Full browser import/download/mesh and phone test suite repeated against actual root staging at its production base path. No runtime errors or external requests in either import/export suite.

Reports: `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `resilience-validation.json`, `stale-import-validation.json`, `hole-validation.json`, `additional-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `root-stage-validation.json`, `root-browser-validation.json`. Tested desktop/phone/assembled/dark/view screenshots are included.

## Not performed / limitations

No physical print, tactile-force, retention, wear or fatigue testing. Positive/zero cap fit is calibration-only and may not retain. Printed fits depend on printer and material. Convex flat-bottom STL inputs only; unsupported meshes are explicitly rejected, not repaired or replaced. Height-map relief has a 20×20 bounded grid and a solid backing, not full single-photo 3D reconstruction or exact vector outlines. Preview colours are not STL material assignments. The rigid preview does not simulate forces.
