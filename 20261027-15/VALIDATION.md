# Bifilar Hush — validation

## Passed before publication

- `npm run predeploy`: React/Vite production bundle with locally bundled Worker, WASM, fonts and dependencies.
- `npm test`: 20 default/preset/representative parameter cases and 35 image/STL-derived cases. Every individually exported part and float32-translated plate passes independent binary-STL size, finite coordinate, nondegenerate face, normal/winding, edge incidence, connected-component volume and millimeter bounds checks.
- `node extrema-validation.mjs`: all 64 exact min/max corners of six parameters, across built-ins and both image/STL imports (192 models). Independent rotor diameter/thickness, two connected parts, four through-cord bores; motion intersections, constant cord length, restoring gravitational sign and print plate separation all pass.
- `node browser-test.cjs`: production server at real base prefix. Actual file-picker PNG/JPEG/ASCII/binary STL imports; actual downloaded STLs verified against preview fingerprint and independently regenerated portable JSON. Pixel content, threshold, depth, crop, grayscale, scale, rotation, XYZ sizing/placement change real exported geometry. Remove/reset reproduces baseline. Unit confirmation gates STL integration. Per-part exports checked. Invalid/truncated/open/nonmanifold/concave/oversized/excessive-triangle/excessive-dimension files, empty images, invalid dimensions/transforms and safe-zone errors block export and recover.
- `node feature-test.cjs`: every preset, three bounded variations, three palm shapes, text/icon/SVG personalization, raised/engraved/inverted image geometry; PNG/JPEG/ASCII/binary portable round trips; named local design persistence; undo/redo; actual ZIP extraction and member validation; per-part buttons; isolated/assembled/exploded/plate views; saved theme; colour geometry neutrality; drag/drop; Y-up source transforms; collapsible sections; keyboard focus; stale-result gating.
- `node resilience-test.cjs`: deliberately blocked production Worker causes a recoverable error and disabled export; reload recovers. All six icons change valid geometry.
- `node hole-test.cjs`: solid intersection probes establish ring SVG holes are preserved in both raised and engraved final geometry (not merely textures).
- `node portable-errors-test.cjs`: missing image payload, invalid transform, wrong-app JSON and invalid saved dimensions are rejected with reset recovery.
- `node stale-import-test.cjs`: deliberately delayed first image normalization cannot replace a later file selection.
- 320 px and 390 px touch contexts: no horizontal overflow, actual phone PNG/STL imports/downloads, screenshot changes from touch orbit and pinch, reachable exports. Desktop 374 px left panel and right viewer; phone preview/export above controls. Screenshots stored beside source.
- `node gallery-validate.cjs`: inline scripts compile with `new Function`; new STL entry exactly once/newest; all 199 previous entries unchanged.
- `node gallery-test.cjs` against combined staging: all 200 cards render, STL category first, newest link correct, search/reset and no browser runtime errors.
- ROOT `npm run predeploy`: 200 apps staged, zero failures, zero skips. `node root-stage-check.cjs`: root index exact and new production assets byte-identical to validated dist; every gallery app has index.html.

## Important distinction

These are computational mesh/ideal-mechanism and real browser tests. **No physical print, cord strength, knot retention, dynamic sway, friction, fatigue, or tactile feel test was performed.** User-tied stopper knots must be pull-checked physically. Cord length is measured between facing surfaces; actual bending at hole edges shifts the ideal predicted rise. No fitted rotation stops; ±120° is an operating instruction. Required hardware: two 1 mm nonelastic braided cords, default cut length 125 mm each. No hardware-free/print-in-place claim.

## Live publication checks

ROOT `npm run deploy` published the combined site successfully. GitHub Pages build/deployment completed successfully. `node public-smoke.cjs` verified HTTP 200, byte-identical production HTML, live Worker/WASM, a downloaded default STL matching the tested model, and newest gallery entry. After initial Pages propagation completed, `node public-import-smoke.cjs` passed real public PNG/JPEG/ASCII/binary file-picker imports and verified exported triangles against portable-state regeneration. No browser runtime errors.
