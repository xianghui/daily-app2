# Nudge & Echo — run validation, 2026-10-29

## Passed

- `npm run predeploy`: React/Vite production build. Worker, WASM, fonts and fixtures are local assets. Only bundle-size / browser-node-module externalization warnings; real production browser loading passed.
- `npm test`: **23 accepted built-in cases + 35 imported-output cases**. All presets and representative minimum/maximum/mixed parameters covered; impossible release/card combinations explicitly rejected. Independent exported float32 mesh checks cover finite coordinates, nondegenerate faces, stored normals, opposing edge winding, exactly-two edge incidence at 1e-5 mm weld tolerance, per-component positive volume, genus and mm bounding boxes.
- Every accepted output: one connected card; all six standalone closed parts; no flat part intersections. Each of 24 snips checked against the parts, leaving six parts plus one carrier. Portal vertical insertion/shoulder stops/seat guides and cord bores/drop paths checked using boolean intersection volumes. Outward bob release 0–16° sampled without unintended part collisions; rest rim contact is intentional.
- `extra-validation.mjs`: unsupported concave source rejected, final image-ring hole/raised band probed using boolean volumes, actual wedge triangles integrated into the marked foot; imported outputs pass the same assembly/mesh checks.
- **39 real production-browser downloaded-output cases and 16 workflow checks**. File-picker PNG/JPEG/SVG, ASCII/binary STL, thresholds, depth, crop, image/STL transformations, unit confirmation, replace/remove/reset, JSON and named imported-asset restoration, undo/redo, text/icon marks, every part STL and ZIP member. Download bytes match the UI signature and saved-state regeneration.
- Recovery tests: invalid/truncated files, open mesh, excessive bytes/pixels/triangles, external SVG, blank image, missing portable payload, invalid dimensions/transforms, aborted worker. Invalid export remains disabled and reset/reload recovers. Strict convex-flat-bottom STL integration is explicit; there is no silent mesh repair or hull replacement.
- Desktop left 374 px panel/right viewer; all assembled/exploded/card/isolated/loose views. **320 and 390 px** phones: preview-first, no horizontal overflow, real picker imports/downloads, touch orbit and pinch verified by canvas changes. Collapsible groups, keyboard focus, saved theme and reduced motion checked.
- Eight browser randomized variations and rapid invalid→valid edits reproduced current export signatures.
- `release-preflight.mjs`: equal volumes for all three bobs; **33 paired-cord release constraints** and pairwise collision samples, 0–16°. Preview release control measurably changes the view without changing the undeformed printable rest geometry.
- Root monorepo predeploy: **251 apps built/copied, zero failed/skipped**. Combined gallery's inline script compiles; all **250 prior entries retained**, new entry unique and STL category first; all deploy folders present and gallery/runtime checks passed.

## Evidence and reproducibility

`geometry-validation.json`, `browser-validation.json`, `extra-validation.json`, `pendulum-validation.json`, `variation-validation.json`, `production-preflight.json`; scripts beside those reports. `evidence/` includes inspected source sections, actual new connected card, release pose, desktop, import, gallery and phone screenshots. Tests run against `http://127.0.0.1:8199/daily-app2/20261029-10/`, serving the actual root `deploy` tree under its real base path.

An initial development run was interrupted by a Vite reload during editing; a ZIP assertion inherited obsolete wording and was corrected to the actual instructions. The full production suite then passed. No geometry failure was ignored or marked printable.

## Not tested / required consumables

**No physical print, stability, fatigue, cord/knot strength, adhesive, impact dynamics, force or energy-transfer performance was tested.** Equal-volume rigid bob and cord-path checks are not a dynamics simulation. Printed rims dissipate energy; cords do not positively constrain lateral swing. Hand-align, use gentle outward releases and calibrate the foot/portal fit first. Six soft nonstretch cords (.3–.5 mm) and adhesive are required; knots retain bobs, and clearanced foot seats are not captive. No hardware sockets, magnets or metal bearings are implied.
