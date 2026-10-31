# Thread & North — validation record

All tests are computational/browser checks. No physical print, assembly, thread balance, strength or magnetic behavior was tested. External needle, thread, tape and adhesive are required; this is not a navigation instrument.

## Reference and geometry

- Actual public reference STL independently downloaded and parsed: SHA-256,30,616 triangles,27 edge-adjacent components,1.6 mm sheet and4.5×1.700012 mm receiving slots recorded. Three cross-sections inspected. Raw reference not bundled. Original source defects disclosed; no repair or convex-hull substitution.
- `npm test`:46 mesh/assembly cases passed and42 invalid parameter combinations rejected. Defaults, three presets, three silhouettes, each parameter bound, combined min/max and image/STL imports at extrema.
- Every card/part serialized to binary STL and independently parsed: exact byte count, finite float32 coordinates, nondegenerate faces, normalized stored normals matching winding, positive volume for EACH connected component, expected mm bounds and closed welded edges with exactly two opposite-directed incident triangles (1e-5 mm weld).
- Kernel checks:24 yaw positions,13 mast insertion positions, two unobstructed socket/tongue joints, three open thread eyes, real needle groove with >=1.2 mm backing, protected engraving with >=1.4 mm backing,912 thread path samples across24 yaw angles plus13 leader samples. Twelve tab cuts produce three clean parts and one carrier. No card-part overlaps; all parts in declared envelope, Z=0, upper sections within bed footprint.
- First thread route intersected the mast arm; preflight caught it. A front-face knot still risked rubbing at yaw90°. Corrected to a leader loop with a common knot6 mm BELOW eye centre (2 mm below arm bottom), then reran all geometry/browser checks successfully. Physical knot location and swinging/tilting are not simulated.

## Real production-browser workflows

- `browser-test.cjs`:26 actual STL downloads parsed; PNG/JPEG/SVG and ASCII/binary STL file pickers; content, threshold, grayscale/depth, crop, physical scale, placement and rotation measurably change exported solids. Exact UI checksum equals downloaded bytes and JSON-regenerated output. Source removal/reset reproduces default bytes. Ten malformed/excessive/open/nonmanifold/unsupported inputs plus empty silhouette/invalid transforms reject recoverably and disable export. No runtime errors or off-origin requests.
- `studio-test.cjs`:all presets, profiles, text, icon search, SVG hole preservation, portable image/STL JSON, missing-payload rejection, named saved designs through reload, undo/redo, all views, actual Everything ZIP unzipped and each STL validated, theme persistence, focus/collapsibles, desktop374 px left rail and preview-first phone, worker-abort/export blocking/reload recovery.
- `icons-drop-test.cjs`:six icons produce real geometry, all individually mesh/assembly checked; real synthetic drag/drop import.
- `orientation-test.cjs`:Z/Y/−Z source orientation and explicit mm confirmation, imported final solids validated. Repeated against combined deploy output.
- `rapid-test.cjs`:late worker cannot enable invalid export; reset identity; polarity/spacing affect geometry; every per-part STL button downloads parsed output.
- `preview-test.cjs`:real yaw changes rendered cradle; seven distinct card/assembly/exploded/clean/isolated views. Yaw and external thread drop correctly do not rotate or modify bed-flat exported plastic. Repeated against combined output.
- `mobile-regression.cjs`:320/390 px true configured viewport with all tabs and long instructions expanded; no horizontal overflow, actual JSON click/download, real PNG input. Main browser suite additionally verifies actual touch orbit/pinch and PNG/STL downloads on phone.
- Light/dark desktop, connected/assembled views, phone and actual reference-section screenshots retained; visually inspected.

## Build, gallery and combined release

- Individual `npm run predeploy`:passed. Local production-base-path worker, WASM, fonts and imports/downloads tested.
- Gallery inline scripts compiled with `new Function`; missing-script check is nonzero. New entry exactly once, newest, correct area/folder. Browser rendered340 entries, preserved all339 earlier entries unchanged, STL Generators first, no runtime errors.
- Root `npm run predeploy`:340 built/copied,0 failed,0 skipped. Root index byte-identical; all340 app indexes present; all43 current-app assets byte-identical to individual dist. Combined gallery, orientation and preview tests passed at `/daily-app2/`.
- Root `npm run deploy`:Published combined `deploy/` directory successfully. Live result is recorded separately in `live-validation.json` after Pages propagation.

Reports: `reference-measurements.json`, `reference-analysis.json`, `validation-report.json`, `browser-validation.json`, `studio-validation.json`, `icons-drop-validation.json`, `orientation-validation.json`, `rapid-validation.json`, `preview-validation.json`, `mobile-regression.json`, `gallery-validation.json`, `combined-validation.json`. Tests/synthetic fixtures are committed and repeatable. These checks do not demonstrate real magnetic response, manufacturing tolerance universality or physical stability.

## Live verification

Current published bundle `/daily-app2/20261101-9/assets/index-1wuHuabE.js` verified after propagation:HTTP200, worker ready, corrected below-arm leader instructions present, actual STL download identical to current validated default, full thread-route/kernel checks passed, and340 gallery entries with Thread & North newest. No browser runtime errors. See `live-validation.json`.
