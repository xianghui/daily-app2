# Cone Accord validation — 2026-10-24

## Executed checks

- `npm run predeploy`: passed. Local React/Vite build includes worker and Manifold WASM; no CDN or generation API.
- `node validate.mjs`: passed **78 parameter cases**, including defaults, all three presets, minimum/maximum, all 64 endpoint combinations and eight deterministic variations. **24 import-derived cases** cover threshold and grayscale images plus ASCII and binary source meshes across six representative parameter sets.
- Mesh checks: independent parsed binary STL, finite positions/normals, nonzero triangle areas, normalized outward stored normals, oppositely directed welded edges with incidence exactly two, four connected components of positive volume, per-part closure, bed-flat orientation and independent millimeter dimensions.
- Mechanism checks: 21 turn/lift poses per selected mechanism case; no intersection of moving bodies, valid floor/cup/shaft walls, actual final-mesh bore probes, cap overlap, isolated imports and separated printable layout. Near-contact cone check uses 0.001 mm axial numerical separation; interactive preview uses 0.06 mm. Fixed peg/shaft press-fit interference is deliberate and separately identified, not a moving clearance.
- `node browser-test.cjs`: passed **26 real downloaded STL outputs**, including PNG/JPEG, ASCII/binary STL, image threshold/depth/crop/scale changes, mesh scale/rotation/placement, removal/reset, minimum/maximum, four individual parts and phone imports. Downloads independently parsed and compared to the exact model/preview fingerprint and dimensions; source changes measurably change export.
- Ten malformed/unsupported browser inputs rejected: unsupported extension, truncated STL, open STL, nonmanifold STL, excessive size, fake PNG, excessive pixels, excessive triangles, bad dimensions and concave STL. Empty relief, missing/NaN transforms, invalid dimensions, unconfirmed units and unsafe placement also block export recoverably.
- `node extra-browser.cjs`: passed all three presets, four actual browser variations, undo/redo, bounded portable save/open for PNG/JPEG/ASCII/binary STL, drag/drop, four individually manifold ZIP parts, and geometry-neutral preview colour changes.
- `node pose-browser.cjs`: passed assembled turn/lift and print-layout preview changes with unchanged export geometry; fine/loose FDM starting presets change actual geometry.
- `node mobile-sheet.cjs` plus main browser suite: 320 and 390 px layouts, touch orbit/pinch, image/STL file pickers, collapsible controls, all tabs, no horizontal overflow and always-reachable download action. Desktop and mobile screenshots were inspected.
- Browser suites record zero uncaught runtime errors and zero remote generation/upload requests.
- Root gallery inline scripts compiled, new entry exactly once/newest/area `stl`, STL Generators first, all **117** earlier entries retained and browser-rendered; search works.
- Root `npm run predeploy`: **118 built, 0 failed, 0 skipped**. All 118 gallery apps exist under `deploy/`; gallery and new app match their exact build inputs.

Machine-readable evidence: geometry-validation.json, browser-validation.json, extra-validation.json, pose-validation.json, mobile-sheet-validation.json, gallery-validation.json and root-deploy-validation.json. Production and public checks are separately recorded as completed.

## Limits and observed build warnings

No physical printing, friction torque, wear, retention force or fatigue tests performed. Cone coupling and friction-cap retention depend on surface finish, material and calibrated fit. Cap is not a positive snap lock. No automatic return, universal tolerances or invented print-time estimates. Supported imported STL subset is explicitly convex, broad flat-bottom, watertight and support-free; rejected meshes are never described as repaired.

Vite reports a >500 kB UI chunk and manifold-3d's Node-only `node:module` branch externalization. The bundled browser WASM generation path is exercised through actual production imports/exports; these are warnings, not suppressed failures. npm audit during installation reported zero vulnerabilities; npm also noted the optional fsevents install script was not allowlisted. No runtime dependency on that script is required for this build.

## Publication checks completed

- Full browser suite rerun against the built production `dist/` at the deployed base path: passed (production-browser-validation.json).
- Root `npm run deploy`: passed; gh-pages reported `Published`, using the combined root `deploy/` directory.
- Public `https://xianghui.github.io/daily-app2/20261024-14/` returned HTTP 200. `node public-check.cjs` exercised public worker/WASM, real bundled PNG and binary STL imports and geometry-changing exports; independently parsed four-component STLs; public gallery newest entry and all 118 cards verified, zero runtime errors and zero failed requests (public-validation.json).
