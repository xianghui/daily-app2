# Wring Weave validation — 2026-10-24

## Completed local checks

- React/Vite `npm run predeploy`: passed. Worker and Manifold WASM bundled locally.
- `npm test`: 78 parameter cases (default, minimum/maximum, all three presets, all 64 range corners, eight deterministic variations); 24 image/STL import-derived cases across six representative parameter sets.
- Independent binary STL parsing: finite coordinates/normals, nonzero face area, normalized matching normals, outward consistent winding, exactly two incident triangles per welded edge, one closed connected component of positive volume, genus/topology, bed-flat export and independent millimeter dimensions.
- Mechanism: six rungs, twelve intentionally solid roots, five open inter-rung windows, root overlap, relaxed and small-motion separation screens, nominal bending/twist strain screen at ±5°, ±2.5°, 0°, and CSG-verified import isolation. Continuous flexures are intentionally fused, not accidentally joined moving parts. This is not a deformed-solid simulation or material/fatigue proof.
- `node browser-test.cjs`: 23 actual STL downloads including defaults, image PNG/JPEG with changed threshold, depth, crop, grayscale and footprint; ASCII/binary meshes with changed shape, scale, rotation, placement and height; reset/remove; min/max; individual body export and phone imports. Every download compared to exact preview signature, reconstructed saved source/parameters, mesh/mechanism checks and dimensions.
- Real browser invalid-input tests: extension/content errors, truncated/open/nonmanifold STL, excessive file size/pixels/triangles, invalid dimensions, concave STL, empty image, NaN transform, unsafe placement and unconfirmed units. Errors recoverable, export blocked.
- `node extra-browser.cjs`: all three presets, four browser variations, undo/redo, portable JSON round trips for all four import formats, original synthetic samples, drag/drop, one-solid ZIP and preview-colour geometry neutrality. One inherited test assertion initially compared imported height against the no-import model; corrected to reconstruct the exact imported saved state, then reran successfully.
- `node mobile-sheet.cjs`: 320 px phone, all tabs, collapse/expand, no horizontal overflow, Download STL within viewport. Main browser suite also tested 390 px, actual touch orbit/pinch and image/STL file selection/downloads. Desktop and phone screenshots inspected.
- Complete main browser suite repeated against production `dist/` at configured base: passed, recorded separately. Zero uncaught browser runtime errors and zero unexpected remote requests.
- Root gallery: inline script compilation using `new Function`, new entry once/newest/area `stl`, 118 prior entries unchanged, STL Generators first, all 119 cards and search rendered without runtime errors.
- Root predeploy: 119 apps, 0 failed, 0 skipped. Every gallery folder present under `deploy/`; copied root and new app match source/build exactly.

## Honest limits

No physical print, force, return-force, strain or fatigue testing performed. TPU 95A starting guidance and a full-size Soft Start calibration design are provided; there is no universal motion/strain/fatigue promise or hard travel stop. No assembly, hardware or sliding tolerance applies to the continuous compliant body. Supported STL inputs are explicitly convex, watertight, broad flat-bottom, support-free grips; unsupported meshes are rejected, not silently repaired.

Observed non-fatal build warnings: >500 kB UI bundle and manifold-3d Node-only `node:module` branch externalization. Actual local production worker/WASM generation is tested, not assumed. Installation audit reported zero vulnerabilities.

Machine-readable evidence: geometry-validation.json, browser-validation.json, production-browser-validation.json, extra-validation.json, mobile-sheet-validation.json, gallery-validation.json, root-deploy-validation.json. Public publication evidence is recorded separately after deployment.

## Publication verified

Root `npm run deploy` reported Published, using combined `deploy/` output. GitHub Pages build/deployment completed successfully. `node public-check.cjs` loaded the public studio, exercised bundled PNG and binary STL imports, downloaded and independently validated one-solid exports, and verified the newest gallery entry with all 119 apps. No runtime errors or failed requests in the completed public checks. Evidence: public-validation.json.
