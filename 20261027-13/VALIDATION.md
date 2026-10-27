# Validation — Swash & Settle

Computational/browser checks completed 2026-10-27. No physical print, assembly, fatigue, friction, force, tactile-feel or durability testing has been performed.

## Geometry and mechanics

- `npm test` passed: 20 default/preset/representative parameter-extreme cases and 35 imported-output cases (ASCII wedge, binary frustum, threshold image, grayscale relief and engraved image). Each combined print plate and each individual part is checked.
- Independent binary STL reader checks exact triangle byte count, finite coordinates, nonzero area, normalized stored normals, consistent outward winding, welded edge incidence of exactly two with opposite directions, positive enclosed volume per connected component, expected component count, millimeter dimensions, and flat-bed orientation. Float32 translated plate is checked, not only kernel meshes.
- Kernel intersection tests sample cam rotation through full turns. No unintended body intersections; the cam axle, follower slot and beam remain separate. Guide lips block inward shaft movement, while the follower lifts out vertically and the cam lifts after follower removal. Plate parts have no intersections.
- `motion-validation.mjs` passed 12 seated full-turn cases, with 73 phases each, covering every preset plus no import, image relief, ASCII STL and binary STL grips. It also verifies cam/follower stroke and bed support beneath every elevated follower-face projection. Side-down follower beam, foot, shaft and thumb pad have a common bed-side plane.
- Parameter/file/transform errors, empty relief, unconfirmed units, bad dimensions and unsafe import placement are rejected. Convex-only STL integration is an explicit supported-input limit, not an automatic repair claim.

## Actual production-browser checks

- `browser-test.cjs`: real file-picker PNG, JPEG, ASCII STL and binary STL imports; actual STL downloads parsed with the independent reader. Pixels/threshold/depth/crop/scale/rotation/placement measurably change exported geometry relative to the built-in default. Source remove/reset restores exact signatures. Every tested download matches the current model preview hash and a separately regenerated saved-design snapshot.
- Invalid/truncated/empty/oversized/unsupported/open meshes and out-of-range transforms block export, with recoverable replacement/removal/reset. Per-part STL downloads are independently validated.
- `feature-test.cjs`: every preset, variations and shape; text and SVG/icon relief; raised/engraved and inverted-background conversion; undo/redo; portable image and mesh JSON round trips; persistent local named design; real ZIP unpacking with three checked STLs and notes; per-part exports; view modes; saved dark theme; colour changes visibly affect preview but leave geometry unchanged; drag/drop; Y-up mesh import; collapsible sections and visible keyboard focus; rapid worker edits resolve to the latest model.
- `hole-test.cjs`: actual final-solid boolean probes confirm the ring SVG's bright interior stays unraised, or unengraved, while the dark ring changes the solid.
- `resilience-test.cjs`: blocking production worker script produces a visible error and disabled export; reload after route recovery works. All six bundled original icons produce distinct geometry.
- `stale-import-test.cjs`: deliberately delayed asynchronous image decode/normalization cannot overwrite a newer input.
- `interaction-test.cjs`: desktop 374 px left panel/right viewer; cam-turn and inspection-lift controls; separate moving-part views; pose-only controls leave printable mesh unchanged; phone preview before controls.
- Phone contexts at 320 and 390 px: no horizontal overflow, reachable export controls, actual PNG/STL uploads and downloads. CDP touch orbit and pinch produce changed canvas screenshots. No runtime page errors or external resource/API requests in main import/download checks.

## Production staging and gallery

- App `npm run predeploy` passes, and tests run against the built production worker/WASM under its real `/daily-app2/20261027-13/` prefix.
- Every gallery inline script compiles with `new Function`; missing scripts fail. New entry exists exactly once, is first, and has `area: "stl"`. All 197 prior entries are preserved unchanged.
- Browser gallery rendering retains all 198 cards, STL category first, search/reset behavior and no runtime errors.
- Root `npm run predeploy`: 198 built/copied apps, zero failures, zero skipped. Root stage checker verifies all entry folders exist and all new app production files are byte-identical to its validated dist output.
- Root-staged browser import/export checks are recorded separately in `root-browser-validation.json`.

See the reproducible scripts, committed JSON reports and validation screenshots alongside this document. All bundled fixtures are synthetic/CC0; no personal uploads are committed.

## Live publication

Root `npm run deploy` completed with `Published`. Live GitHub Pages returned HTTP 200 with HTML matching the final dist file. The live worker/WASM loaded, the default STL download matched the independently generated tested model, and the combined public gallery showed the new app first. `public-import-smoke.cjs` checks live PNG/JPEG/ASCII/binary imports and actual downloaded output against the current geometry and independently regenerated portable state.
