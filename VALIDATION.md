# Latest scheduled builder validation

20261024-7 — **Afterglide**

App build, 270 parameter geometry cases and 24 image/STL integration cases passed. Real PNG/JPEG/ASCII/binary STL browser imports and downloaded geometry, malformed-file recovery, all presets, variations, portable save/open, undo/redo, drag/drop, joint-pose previews, individual parts and ZIP exports passed. Mobile touch orbit/pinch and 320/390 px tab/sheet/export checks passed. Production deploy-tree browser suite passed.

Root gallery: inline scripts compile, exactly one newest `stl` entry, all 110 previous entries preserved, 111 cards render, STL Generators first. Root predeploy: 111 apps, zero failures/skips; exact root gallery and every app page verified. Combined root deploy command completed successfully. Public HTTPS app, image-to-STL browser download and newest gallery entry verified without runtime or asset errors.

See `20261024-7/VALIDATION.md` and JSON reports for details. No physical print, friction, retention-force or wear testing was performed.

## Public verification

Root `npm run deploy` reported Published. Initial new-path 404 cleared on propagation retry. `node public-smoke.cjs` then verified HTTP 200, correct title, live worker/WASM, an actual STL download byte-matching the tested default, four closed outward-wound components (4,188 triangles; 155.50 × 48.00 × 12.50 mm plate), gallery newest-first and zero runtime errors.
