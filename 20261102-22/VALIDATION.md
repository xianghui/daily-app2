# Validation — Lune & Proof (20261102-22)

## Executed computational checks

- `npm run predeploy`: production React/Vite build passed. Manifold worker and WASM use the real base path, not CDN imports.
- `reference-measure.py /tmp/lune-source.stl` was run with `/tmp/daily-builder-venv/bin/python`: actual downloaded STL parsed, hash/components/dimensions and cross-sections saved; local candidates also parsed. README/license read and retained; raw source not bundled.
- `node validate.mjs`: **38 model variants** passed. All three presets, all silhouettes at combined extrema, every individual field minimum/maximum, derived image (including hole) and ASCII/binary STL with transforms. Independent serialized binary STL validation includes each intended component, winding/volume, edge incidence and bounds. Exact solid checks cover aperture areas, seated collisions, six sockets, insertion paths, flat-plate collisions, bed support, card envelope and sixteen-runner removal (carrier plus four intact parts).
- `node personalization-check.mjs`: actual solid probes prove the bright ring center keeps backing and dark ring removes material.
- `node browser-test.cjs`: actual file-picker PNG/JPEG/ASCII/binary uploads, downloaded STLs and JSON regeneration/signature parity, threshold/depth/crop/scale/rotation/placement differences, replace/remove/reset, extrema, invalid/truncated/open/nonmanifold/concave/excessive content, empty images, transform guards, all per-part downloads. All output models regenerated and checked using the same assembly checks. Desktop, 390/320 px touch upload/export, actual orbit and pinch screenshot changes; no page errors or external requests.
- `node studio-test.cjs`: all presets and silhouettes, text/icon/SVG geometry, image/mesh JSON and named saved designs across reload, missing payload errors, undo/redo, real Everything ZIP extracted and all STL payloads checked, all assembly views, persistent dark theme, focus, collapsible sections, reduced motion, 374 px left rail, preview-first phone and intentionally aborted worker/reload recovery.
- `node stale-test.cjs`: rapid geometry and threshold edits immediately gate export; latest result matches independent generation; invalid transform is recoverable.
- `node orientation-test.cjs`: Z/Y/−Z real STL picker uploads, mm confirmation and final solids.
- `node icons-drop-test.cjs`: all six icons change actual geometry; drag/drop imports a real synthetic PNG.
- `node phone-views-test.cjs`: 320 px all tabs/expanded instructions, JPEG and ASCII file imports/downloads, background conversion, all layouts, 390 px screenshots; no horizontal overflow.
- `node presentation-test.cjs`: all four isolated parts, card/assembled/exploded views, invalid numeric recovery; screenshots retained.
- `node gallery-test.cjs`: every inline script compiled with `new Function`, required script present, new entry exactly once, STL first, all **381 prior entries unchanged**, 382 cards rendered and searchable without runtime errors.
- Root `npm run predeploy`: **382 built, 0 failed, 0 skipped**. `node deploy-check.mjs` verified every app index and 41 byte-identical new production assets.

Machine-readable reports and screenshots accompany the scripts. Combined-site and public-site reports, when present, record subsequent executed smoke tests rather than assumed success.

## Explicit limitations

No physical print, real printer fit, adhesive strength, optical accuracy, fatigue or user assembly test was performed. Apertures approximate circles with 256-sided polygons; computed region areas/error are visible. The three plaques are structural aperture holders, not lune dissection tiles. Six joints require compatible adhesive. Imported STL contract is deliberately limited to one verified convex flat-bottom solid; unsupported input is rejected rather than hull-converted/repaired. Image geometry is a bounded 20×20 height surface, not exact contour tracing or automatic 3D reconstruction. STL contains no units or colors. Browser files are processed locally, with only bounded user-requested design payloads stored in local storage/JSON.

## Combined and public release verification

The complete browser import/download suite passed against the combined root `deploy/` server as well as the individual production build. The published GitHub Pages site then passed live WASM loading, real PNG and ASCII STL uploads, three actual checked downloads with exact preview/Node signatures, and the 382-card gallery with zero page errors. See `combined-browser-validation.json`, `combined-smoke-validation.json` and `public-validation.json`. Root deploy returned `Published`.
