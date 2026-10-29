# Validation — Paddle & Turn

Computational/browser checks only; **no physical print test**.

- `npm run predeploy`: production React/Vite build passed; worker and local Manifold WASM bundled under real base path.
- `npm test`: 28 built-in parameter/preset/extreme cases and 35 image/STL-derived cases; card and every independent part passed binary float32 STL length/triangle/finite/normal/winding/positive-volume/closed-edge checks and millimeter dimensions. Invalid input rejections recorded.
- `node extra-validation.mjs`: real raised-ring hole/band boolean probes, unsupported concave source rejection and imported wedge integration passed.
- `node release-preflight.mjs`: six default/preset/extreme full 0–360° sweeps every 5°, bearing-sag and axial bounds every 10°, assembly paths and 24 mixed variations passed. Closed-card geometry, 36 nondestructive accessible snips, ten resulting components, no part overlap and per-part manifold checks passed.
- `node browser-validation.mjs`: 39 production-browser actual STL downloads and 16 workflow groups passed. Exact UI/download/saved-state signatures matched. Tested PNG/JPEG/SVG, ASCII/binary and Y-up STL, threshold/relief/crop/transforms, replace/remove/reset, JSON/local saves, undo/redo, text/icons, invalid input recovery, worker failure, every STL/ZIP member, keyboard/theme/collapse. 320/390 px phones had no overflow; file imports, exports, touch orbit and pinch worked.
- `node production-preflight.mjs`: separately recorded combined-gallery scripts, prior entries, new unique STL entry, production paths, rejects/recovery and reduced-motion checks.

Reports: geometry-validation.json, extra-validation.json, release-validation.json, browser-validation.json, production-preflight.json. Screenshots: evidence/. Actual reference sections and reproducible source analysis are separate from output validation. Raw third-party source mesh stays outside repository.

Mechanical contract: nine-part hand-turned wheel; adhesive at foot/yoke, all eight paddle tongue seats and both stationary axle saddle seats. Do not glue bearings. Round bore exceeds rectangular shaft diagonal; yoke sides bound axial movement. Model tested for geometric assembly and movement, not friction, glue strength, stability, fatigue or fluid use. Start with the documented fit-calibration parts and inspect slicer paths.
