# Validation — Nip & Drift (20261027-3)

## Passed before publication

- `npm run predeploy`: production Vite build, local fonts, worker and Manifold WASM bundled under the real base path.
- `node validate.mjs`: 36 parameter/default/preset cases and 35 image/STL-derived output cases. Each output and every part passed binary STL structure, finite/nondegenerate triangles, normalized outward stored normals, positive per-component volumes, mm bounding dimensions, bed orientation and closed two-face/opposite-winding welded edges (1e−5 mm tolerance).
- Independent mechanism checks sampled 25 feed positions per built-in case and 19 per imported case: zero unwanted collision of compressed-preview components; verified lift-out paths, axle clearances, minimum tails and walls, intentional unloaded ribbon/roller interference, separated print plate, and import keep-out.
- `browser-test.cjs`: actual production file pickers and generated downloads for PNG, JPEG, ASCII STL and binary STL; image pixel/threshold/relief changes and STL scale/rotation/placement change exported geometry; preview hash, downloaded bytes and JSON-regenerated Node output match. Both extreme settings, malformed files, open/nonmanifold inputs, unsupported concavities and sizes, empty silhouettes, remove/replace/reset, explicit mm confirmation and recoverable blocked export passed.
- `feature-test.cjs`: three presets, three random bounded variations, three palm shapes, text, heart mark, SVG ring, engraving, background inversion, all four source portable JSON round trips, named design persistence, undo/redo, per-part STL, actual ZIP contents, view modes, color neutrality, saved theme, drag/drop and Y-up import passed.
- `resilience-test.cjs`: failed production worker blocks export, reload recovers, all six original bundled icons change geometry.
- `hole-test.cjs`: final-solid probe volumes confirm raised and engraved SVG ring holes retain the expected geometry.
- `stale-import-test.cjs`: delayed image normalization cannot overwrite a newer source selection.
- `cycle-test.cjs`: 374 px left editor/right viewer, five visibly distinct feed poses, independent slip phase, four isolated views, print-hash neutrality and reduced-motion handling.
- Phone 390 px and 320 px: preview-first stack, no horizontal overflow, reachable exports, real PNG/STL imports and downloaded geometry; dispatched touch orbit and pinch both visibly changed the canvas. Desktop, phone, assembled, ghost, dark and view screenshots inspected/saved.
- Gallery: every inline script compiled with `new Function`; new STL entry exactly once; all 187 previous entries preserved verbatim; 188 cards render and search recovers without runtime errors.
- Root `npm run predeploy`: 188 built, zero failed/skipped. Every gallery folder staged, root index matches, new app's production files byte-identical. Full import/download/mobile browser suite rerun against the ROOT deploy directory, not only app dist (`root-browser-validation.json`).

## Important limits

These are computational and browser checks, **not physical printing tests**. No print, grip force, traction, TPU strain/fatigue or friction measurement was performed. Feeding depends on TPU hardness, friction and printer calibration. The assembled ribbon is a uniform compressed approximation; actual exports are the uncompressed ribbon in bed-flat orientation. Unloaded ribbon/roller interference is deliberate and measured separately; it is not described as collision-free rigid motion. Parts are intentionally removable and non-captive. Start with Easy Feed and minimum compression.

Detailed reproducible scripts and JSON reports are stored beside this document. Public Pages smoke-test results are in `public-validation.json` after publication.
