# Halo Sway — computational validation

## Passed before publication

- Individual `npm run predeploy`: production Vite bundle; locally bundled worker, WASM, fonts and dependencies.
- `npm test`: **68** default/preset/parameter-extreme cases, **30** image/STL-derived cases. Every intended part and separated float32 print plate passed binary STL length, finite vertex, area, stored normal, 1e-5 mm welded edge incidence/direction, per-component positive volume, topology and millimeter-dimension checks.
- Actual CSG intersections at 33 illustrated tilt/azimuth samples per built-in case and 25 per import case: **0 mm³ maximum unintended intersection**. Four upright-removal offsets per pose and print separation passed. Worst analytic 20° post/bore margin: **0.384409 mm**. No captive retention is claimed or intended.
- Real production-browser file pickers: PNG, JPEG, ASCII STL and binary STL; actual downloads parsed independently. Image pixel content, threshold, relief depth/crop and STL footprint/rotation/height/placement change geometry. Download hashes match the exact current preview result and independently rebuilt portable JSON.
- Malformed/truncated, open, nonmanifold, concave, excessive size/triangles/pixels, bad dimensions, empty silhouette, invalid transform and keep-out violations block export and recover with replace/remove/reset.
- 20 additional feature-derived models independently checked: all presets and silhouettes, variations, text, SVG marks, raised/engraved hole preservation and background inversion; all six bundled icons exercised.
- Undo/redo, JSON image/mesh round trips, missing-payload reattachment error, local named image/mesh restoration across reload, up-axis orientation, part buttons and actual ZIP contents passed.
- Worker failure blocks export, reload recovers, rapid edits resolve to current result, delayed older image normalization cannot replace a newer source.
- Desktop left controls/right viewer; 320/390 px preview-first layout without overflow; real touch orbit/pinch and phone image/STL imports/downloads; collapsible sections, focus, reduced motion and saved dark theme passed. Screenshots saved beside tests.
- Gallery scripts compile with `new Function`; unique newest STL entry; **all 163 previous entries preserved byte-for-byte**. Root predeploy stages **164 apps**, no failures or skips. Staged app files match the individual production output exactly. Combined gallery runtime/search passed.

Reproducible scripts and JSON reports are saved in this folder. `browser-test.cjs` supports `TEST_BASE` for the staged combined production site. `live-test.cjs` verifies the published Pages app, worker, imports, actual STL downloads and gallery after deployment.

## Limits

These are geometry, mechanism-envelope and browser checks, **not physical print tests**. No physical print, friction/nutation behavior, sustained precession, force, durability, fatigue, wear or child-safety test has been performed. The ring is intentionally loose and removable. Printer-specific calibration is required. Supported STL grip input is explicitly limited to verified closed outward-wound convex flat-bottom solids; no repair or convex-hull substitution is performed. Personal inputs are processed locally and are not included in this repository.

## Public deployment verified

GitHub Pages build/deployment succeeded for `8764791fd0dd26ae06be312436de877604cd9271`. Public app returned HTTP 200; bundled worker, built-in/PNG/STL integration and actual closed-manifold STL downloads passed. The public gallery rendered all 164 cards with Halo Sway first and no runtime errors. See `live-validation.json`.
