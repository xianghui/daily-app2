# Validation — Bight & Cleat

All checks below ran against this app on 2026-10-30. No physical print, knot handling, joint strength, friction or durability test performed.

- `npm test`: 38 built-in configurations + 8 imported-image/STL cases, independent binary STL mesh preflight on card and every clean part; real assembly, socket, shoulder, access, tab-removal and print-column checks.
- `node import-extremes.mjs`: 105 image/STL preset/extreme cases, same mesh and assembly checks; measured source socket 4.5 × 1.7 mm reproduced.
- `node sensitivity-check.mjs`: all 15 physical controls alter actual card export.
- `node hole-check.mjs`: actual Boolean volume probes confirm unengraved image holes.
- `node browser-test.cjs`: production-path uploads of PNG/JPEG/ASCII/binary STL; real downloads parsed and compared with exact saved-state regeneration, default and transformed imports; malformed/unsupported/oversized/blank files blocked recoverably. Phone 320/390 px, orbit/pinch, imports and downloads passed. No runtime errors or remote app requests.
- `node studio-test.cjs`: real presets/shapes/text/icons/SVG, portable images/meshes, named save/reload, undo/redo, missing payload, every ZIP STL parsed, all views, dark-theme persistence, focus, collapsing sections, reduced motion, 374 px desktop left rail, preview-first phone and worker-abort recovery passed.
- `node axis-test.cjs`, `node stale-test.cjs`: orientation transforms, exact reset, rapid edits and disabled stale-result export passed.
- `npm run predeploy`: production worker/WASM/fonts built locally. Tests used built dist under /daily-app2/20261030-26/, not only dev mode.
- Gallery inline scripts compile with `new Function`; new entry exactly once with area stl, newest first. All 298 previous entries retained (299 total); browser gallery and app route have no runtime errors.
- Root `npm run predeploy`: 299 apps, zero failed/skipped. `node deployment-check.mjs` compares every current app production file and root gallery by SHA-256 and verifies all 299 app routes exist in combined deploy.

Reproducible scripts, JSON reports and screenshots are included. Computational clearance assumes correctly seated, cured adhesive joints. It does not establish practical knot performance or load capacity.
