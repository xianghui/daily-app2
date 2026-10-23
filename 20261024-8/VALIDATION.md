# Hush Chamber — 2026-10-24

- `npm run predeploy`: passed; root predeploy packages 112 apps, zero failures/skips; every gallery folder and root index verified in deploy/.
- 78 parameter cases (including all 64 min/max corners) and 24 import-derived cases: positive volume, finite/nondegenerate faces, normalized outward normals, closed welded edges with opposite winding, each solid independently checked and independent mm layout bounds.
- CSG checks at 25 representative clapper positions: no component collisions; empty chamber interior; all print-layout pairs separated; imported features isolated from mechanism. Lid seating/vertical travel and vent retention dimensions verified. Requires band/tape for shaking, or held-lid upright tilt alternative. No claim of a self-locking lid.
- Real browser PNG/JPEG and ASCII/binary STL picker import; downloaded STL changes with content, relief, scale, rotation and placement; preview/export signatures match exactly. Replace/remove/reset and unsupported/malformed/nonmanifold/oversized content fail recoverably and disable export.
- Three presets and four random variations pass browser export and mechanism checks. Undo/redo, all four portable import JSON round trips, local drag/drop, three ZIP parts, assembly text and preview-colour neutrality passed.
- Desktop and 320/390px phone: useful canvas, no horizontal overflow, reachable export, all tabs, sheet collapse, touch orbit/pinch and phone file-import/download tested. No runtime errors or external file-processing requests.
- Tests repeated against built production bundle. Reports and desktop/mobile screenshots included.
- Build emits nonblocking bundle-size and Manifold node:module externalization notices; production WASM/worker/browser tests pass. npm audit reports zero vulnerabilities.
- No physical print, acoustic, closure-retention, fatigue or durability testing performed. Clearances require printer/material calibration.
