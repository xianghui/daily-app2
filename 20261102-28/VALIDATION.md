# Validation — 2026-11-02

- `npm run predeploy`: passed React/Vite production build, local worker + Manifold WASM.
- `node validate.mjs`: 38 variants passed serialized binary STL and independent assembly checks. 41 stroke positions per model; card plus all three clean parts and translated print plate validated. Twelve real tabs connect/release correctly; every intended component positive and edge-manifold.
- `node browser-test.cjs`: passed actual production-browser PNG/JPEG/ASCII/binary file picker, changed pixels/threshold/depth/scale/rotation/placement, exact current STL fingerprint/Node JSON regeneration, replace/remove/reset, malformed/unsupported inputs and empty silhouettes; phone 320/390 px, touch orbit/pinch and real downloads.
- `node studio-test.cjs`: presets/thumbnails, shape/text/icon/SVG, portable image and STL JSON, named designs across reload, missing-payload error, undo/redo, ZIP meshes/instructions, all views, saved theme, focus/collapse, worker abort/recovery passed.
- `node orientation-test.cjs`: Z/Y/−Z source orientation and explicit mm confirmation passed through final mesh/assembly checks.
- `node stale-test.cjs`: immediate export blocking under rapid parameter/image edits and invalid transforms; latest-result exact signature passed.
- `node presentation-test.cjs`: actual sweep/ghost screenshot changes, views preserve export geometry, all isolated parts, all editor tabs at 320/390 px and reachable exports passed.
- `node hole-check.mjs`: browser-imported SVG ring retains bright hole backing and engraves surrounding ring in actual CSG solid.
- `node icons-drop-test.cjs`: all six bundled icons affect valid exported geometry and actual drag/drop PNG works.
- `node gallery-check.cjs`: 1 inline script compiled; 385 existing gallery entries unchanged, new entry once, first, area stl. Category first and label preserved.
- `node gallery-browser.cjs`: 386 gallery cards rendered with no runtime errors; search/restore works and correct app URL.
- Root `npm run predeploy`: 386 apps copied/built, 0 failed, 0 skipped. Root index and `deploy/20261102-28/index.html` exist.
- Repeated full browser import/download suite on actual combined `deploy/` tree under `/daily-app2/20261102-28/`: passed (`staged-browser-validation.json`).
- Root `npm run deploy`: gh-pages reported Published; public Pages verification tracked in `public-validation.json` once Pages build finishes.

All fixtures synthetic. All user-file processing stays local. Reference STL freshly parsed/sectioned and hash/source/license recorded; no raw reference redistributed.

**Not physically tested:** printed fit, real washer/nut stack, friction, pencil clearance under hand pressure, tracing accuracy, material strength. These tests are computational/browser validation, not a physical print claim.
