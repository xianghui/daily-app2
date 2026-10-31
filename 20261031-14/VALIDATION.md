# Lift & Reeving — completed verification

No physical print, assembly, adhesive/load/cord-tracking, fatigue or friction testing was performed. Geometry checks are not proof of those properties.

## Executed successfully

- `npm test`: **36 built-in cases**, **18 image/STL-derived cases**, **29 rejected out-of-bound combinations**. Every preset, three profiles, individual and combined min/max controls; threshold/grayscale images; ASCII/binary mesh imports and transformed instances.
- All six export files per case independently decoded: byte length, finite coordinates, nonzero faces, outward normalized stored normals, 1e−5 mm welded manifold edges with opposite winding, positive component volume, bed alignment and expected millimeter dimensions.
- Per-case CSG mechanism checks: ten assembled pairs, 17 full-revolution positions, 68 insertion/removal poses, two cord tangent lanes, axial/radial gaps, head/keeper overlap and independent sheet mounting fits. All require adhesive at the documented stationary seats; retention strength not measured.
- Each real card is one closed component. Twenty safe snips release exactly five separate clean parts plus the carrier; functional parts untouched. No flat-part overlaps; card bounds match declared X/Y and actual axle maximum Z. Upper cross-sections remain within bed footprints; V-groove outward slope ≤45°.
- `node hole-check.mjs`: actual Boolean probes confirm a bright interior ring hole is unengraved, dark ring is cut, continuous backing survives.
- `node browser-test.cjs`: **28 actual STL downloads**, ten malformed/unsupported content rejections plus empty silhouette/invalid-transform recovery. Real file pickers for PNG/JPEG/ASCII/binary STL. Pixels, threshold, depth, crop, scale, rotation and placement change exports; reset/remove restore original signature. Every downloaded whole output regenerated from its browser-saved JSON and mechanically/mesh checked in Node. Source dimensions, mm confirmation and displayed final dimensions verified.
- `node studio-test.cjs`: all presets, silhouettes, text/icon/SVG imports; real Everything ZIP extraction and validation of six contained STLs; named local designs and portable image/mesh JSON; reload/restoration, missing-payload rejection, undo/redo, all views, dark-theme persistence, focus, collapse, reduced-motion setting, 374 px desktop rail and phone preview-first layout. Worker-load abort blocks exports, reload recovers.
- `node personalization-test.cjs`: text, all six icons and SVG individually receive full exported-mesh and assembly verification.
- `node stale-test.cjs`: rapid geometry/image edits immediately block stale export; latest geometry matches Node; invalid transform recovers.
- `node axis-test.cjs`: Y-up and negative-Z original mesh triangles reorient and export identically; changing axis explicitly clears attached source.
- Phone widths 320/390 px: no horizontal overflow, reachable export, real image/STL uploads/downloads. CDP touch orbit and pinch change canvas screenshots.
- `npm run predeploy`: successful production bundle, no CDN dependencies. Browser tests run against the actual prefix-served production dist, not Vite dev.
- Root gallery inline script compiled with `new Function`; exactly one newest `20261031-14` STL entry; **all 317 earlier entries preserved**. STL category already first; correct focus tagline retained.
- Root `npm run predeploy`: **318 built/copied, 0 failed, 0 skipped**. Root deploy/index.html and the new app route exist.
- `node gallery-browser-test.cjs`: combined gallery renders 318 cards without runtime errors, correct new href, app worker/WASM loads.
- Full `browser-test.cjs` rerun with `TEST_BASE=http://127.0.0.1:5596` against combined deploy: imports, actual exports, phone gestures and errors all pass (`combined-browser-validation.json`).
- `final-production-test.cjs`: all six prominent direct part STL buttons download exact current parts; final 320 px touch orbit/pinch pass on combined production.

Reports and screenshots live alongside this file / in evidence. Reference parsing/hash/sections are recorded separately in reference-measurements.json and reference-analysis.json. No raw third-party source STL or private user file is included.

## Reproduce

Serve built app with `node serve.mjs` (5595); run the listed browser scripts. Serve root combined output with `node serve-combined.mjs` (5596), then `TEST_BASE=http://127.0.0.1:5596 TEST_REPORT=combined-browser-validation.json node browser-test.cjs` and `TEST_BASE=http://127.0.0.1:5596 node final-production-test.cjs`.

## Publication

Root `npm run deploy` returned **Published**. GitHub Pages run [41163112340](https://github.com/xianghui/daily-app2/actions/runs/41163112340) completed successfully. The first immediate public probe returned 404 while Pages was building; after the existing deployment completed, `node public-test.cjs` passed: live HTTP 200, production worker/WASM, exact default STL bytes, valid downloaded mesh, correct synthetic-sample attribution and one visible gallery entry. See public-validation.json and deployment-validation.json.
