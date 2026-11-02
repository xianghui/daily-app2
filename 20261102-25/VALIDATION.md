# Validation summary

- `npm run predeploy`: passed, production JS/worker/WASM bundled at `/daily-app2/20261102-25/`.
- `npm test`: 38 cases recorded in `geometry-validation.json`; presets, ranges, image and STL-derived outputs, serialized watertight/winding/volume checks, seven-part assembly and all 196 mask/cell intersections. Unsupported packing combinations explicitly rejected.
- `node browser-test.cjs`: passed real PNG/JPEG/ASCII/binary uploads, geometry-changing transforms, actual downloads with exact preview hashes and saved-JSON regeneration, malformed input recovery, per-part solids, 320/390px phones and touch orbit/pinch.
- `node studio-test.cjs`: passed presets, silhouettes, text/icons/SVG, JSON and named-save payload restoration, missing-payload error, undo/redo, every ZIP mesh, themes, collapsibles, focus, desktop/phone layout and worker-failure recovery.
- `node icons-drop-test.cjs`: all six icons independently checked, actual drag/drop import.
- `node hole-check.mjs`: actual browser-imported SVG ring center remains unengraved with full backing.
- `node phone-views-test.cjs`: all five control sections and all layouts at 320px; expanded guide / JSON download reachable; JPEG and ASCII imports; background setting changes solid geometry.
- `node presentation-test.cjs`: every isolated part, main layouts, numeric guards and recovery.
- `node stale-test.cjs`: rapid geometry/image changes immediately disable stale export; latest result matches Node.
- `node orientation-test.cjs`: real source Z/Y/negative-Z orientation, unit confirmation, exact geometry and fit checks.
- Root gallery inline scripts compile with `new Function`; new entry once, STL category first, all 383 earlier entries preserved.
- Root `npm run predeploy`: 384 apps staged, zero failures/skips.
- `node staged-site-test.cjs`: actual combined deployment tree renders 384 gallery cards without runtime errors; search/new entry correct; all four real file-format imports and downloaded meshes pass.
- Root `npm run deploy`: Published successfully (including its predeploy lifecycle).

Reports and screenshots are app-local. Checks are computational. **No physical printing, fit, glue strength, friction or number legibility test.**
