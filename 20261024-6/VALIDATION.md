# Seal & Peel validation

- `npm test`: 78 parameter cases (all 64 range corners, defaults, min/max, presets, variations), plus 24 image/STL-derived cases. Every export is checked for finite coordinates, normals, nondegenerate triangles, positive component volume, consistent winding and exactly-two welded-edge incidence. Independent bounds and component count checks pass.
- Material/void solid-intersection probes: closed floor, conical walls, open cavity and continuous coplanar annular rim. Imports cannot change the bowl or rim. Conservative normal wall >0.55 mm, outer slope 45°, floor ≥2 mm, initial 0.5 mm press cavity envelope and inverted import-to-surface clearance ≥1.95 mm.
- `node browser-test.cjs`: actual PNG/JPEG/ASCII-STL/binary-STL file pickers and downloaded geometry, parameter/content/scale/placement changes, preview/export fingerprints, per-body export, replacement/removal/reset, malformed/oversized/open/concave meshes, empty silhouettes, invalid dimensions/transforms, mobile touch orbit/pinch and phone downloads.
- `node extra-browser.cjs`: all presets and representative variations through mesh/mechanism checks, undo/redo, all four portable source round trips, drag/drop and preview colour neutrality.
- `node mobile-sheet.cjs`: 320 px phone, every control tab, collapse/reopen, no horizontal overflow and always-visible export. Desktop and mobile screenshots inspected.
- `node gallery-test.cjs`: inline scripts compiled via `new Function`, exactly one newest STL entry, all 109 previous entries unchanged, 110 rendered cards, STL category first, search works, no runtime errors.
- Root predeploy: 110 apps, zero failures/skips; all app index files exist and root matches source. Production browser verification uses the root deploy tree, not Vite development output.

No physical printing, suction adhesion, force, elastic response or fatigue testing was performed. Printability/clearance checks describe geometric constraints, not a universal material or sealing guarantee. See JSON reports for actual measured export sizes, volumes and test details.
