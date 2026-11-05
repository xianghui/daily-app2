# Validation — Butterfly & Bind

No physical printing, fit, friction, strength or durability testing performed. Gravity seating is disclosed; the key is not vertically retained. No hardware is needed.

## Reproduce

- `npm test`: 49 defaults/presets/parameter-endpoint/silhouette/image/STL export and assembly cases. `geometry-validation.json`.
- `npm run predeploy`, `node serve-production.cjs`: actual built site at `http://127.0.0.1:5964/daily-app2/20261105-14/`.
- `node browser-test.cjs`: real PNG/JPEG/ASCII/binary file-picker imports, geometry-changing downloaded exports, exact preview/download fingerprints, invalid input recovery, parameter limits, parts, phone imports, touch orbit/pinch. `browser-validation.json`.
- `node feature-test.cjs`: presets/shapes/text/icons/SVG, JSON and named-asset round trips, undo/redo, actual ZIP contents and per-part STL, views, theme, focus, drag/drop, up-axis, stale/invalid export blocking. `feature-validation.json`.
- `node mobile-layout.cjs`: every editor section, expanded notes and actual JSON downloads at 320/390/480 px, unscaled viewport/no overflow, preview first, desktop 374 px left rail. `mobile-layout-validation.json`.
- `node hole-test.cjs`: actual ring centre/band Boolean-solid probes. `hole-validation.json`.
- `node resilience-test.cjs`: production worker abort blocks exports, reload recovers, six distinct original icon engravings. `resilience-validation.json`.
- `node portable-errors-test.cjs`: missing assets, bad transforms/wrong app/dimensions block exports and reset recovers. `portable-errors-validation.json`.
- `node stale-import-test.cjs`: old asynchronous image processing cannot overwrite newer imports. `stale-import-validation.json`.
- `node lift-test.cjs`: real preview key-lift transform, unchanged export mesh. `lift-validation.json`.
- `node gallery-test.cjs`: all inline scripts compile, exactly one new STL entry, prior 460 entries unchanged.
- Root `npm run predeploy`: all 461 apps included, zero failed/skipped; gallery and correct app folder in deploy.
- `node serve-combined.cjs`, `node gallery-browser.cjs`: actual deploy gallery renders all 461 entries and new link builds valid geometry.
- `TEST_BASE=http://127.0.0.1:5965 TEST_REPORT=combined-browser-validation.json node browser-test.cjs`: repeats actual import/download checks from combined production tree.
- After publication: `node public-smoke.cjs` validates public gallery, worker/WASM and downloaded image/STL-derived models. `public-browser-validation.json` records observed result when run.

## Independent mesh / kit assertions

Exact STL byte count, finite coordinates and normals, nondegenerate faces, unit normals matching winding, welded edge incidence exactly two with opposite directions (1e−5 mm weld), positive enclosed volume of each intended component, millimeter bounds, Z=0 print orientation. Every part and the combined de-tabbed plate are tested separately.

Real CSG card unions form one closed component inside declared envelope. Twelve simulated accessible snips release carrier + three intact parts without runner fragments. Loose parts do not intersect. Cross-sections establish no unsupported area beyond bed footprint. Engraved signatures and blind pockets retain >=1 mm backing. Clean and connected-card pockets are not plugged by runners. At 41 vertical insertion heights the key clears both panel solids; with each panel displaced 2 mm outward, positive key intersection verifies lateral blocking while held coplanar. This is geometric retention in XY only, never proof of strength or Z capture.

## Reference evidence

Source STL was downloaded, hashed, parsed and sectioned for this run, not merely identified from a filename or old app. Local switch/fabric candidates were parsed and rejected. Public CC BY 4.0 kit source attribution, hash, dimensions, components and nonmanifold anomalies are recorded. Real .10 mm source sheet/socket allowance informs adjustable pocket allowance; source sheet/carrier are deliberately redesigned for blind-pocket backing. Raw STL not distributed. See README, reference-analysis.py/json, upstream README/license and evidence/reference-sections.png.
