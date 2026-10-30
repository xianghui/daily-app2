# Validation — 2026-10-30

## Reference

Actual downloaded binary STL independently parsed and sectioned in this run. Source/hash, 30,616 triangles, dimensions, 27 components, source nonwatertight defects, four socket loops and 1.6 mm sheets recorded in reference-measurements.json. Rejected local STL candidates also parsed, not selected by filename alone. Public license fetched; no raw third-party mesh bundled. Reference trees and old daily_app remain read-only.

## Geometry and assembly

- `npm test`: **28 built-in + 8 import cases** passed independent float32 binary STL checks for all six exports: connected card plus five clean parts.
- `node import-extremes.mjs`: **6 imported extrema** passed the same checks.
- Closed welded edges exactly two opposite-direction incidents; finite nondegenerate triangles; expected millimeter bounds; positive signed volume for every component; consistent normals, bed alignment.
- Five assembled parts: every pair disjoint, twelve socket gauges, six real shoulder stops, wall insertion and upper-frame insertion paths, three film rectangles disjoint from solids and each other, nominal 60-degree inner planes.
- Connected card one component; twenty safe snips release five intact parts plus carrier. Envelope, flat parts separation and bed support checked. Cross-section footprint numerical margin .00002 mm compensates float32 noise, not physical overhang.
- `node hole-check.mjs`: center of ring mark stays solid/unengraved while ring band is a real Boolean cavity.

## Production browser

`browser-test.cjs`, `studio-test.cjs`, `axis-test.cjs`, `preview-test.cjs`, `live-test.cjs` save actual results as JSON. Tests use production assets with the real /daily-app2/20261030-16/ prefix, not just Vite development mode.

Real file pickers and downloads exercise PNG/JPEG/ASCII/binary imports; threshold/depth/crop/pixels/scale/rotation/placement change bytes and geometry, compared with default. Every download signature matches the current preview and JSON-regenerated model; every final part and assembly rechecked. Invalid/truncated/open/nonmanifold/concave/oversized files, excessive image pixels/mesh triangles/dimensions, empty silhouettes and invalid transforms block exports and recover. Unit confirmation is mandatory. Y-up and −Z-up synthetic meshes orient into exactly the same exported cavity; changing axis requires reattachment.

All presets, three bevel silhouettes, text, searchable icon, SVG ring, portable image and mesh JSON, missing-payload errors, local named design reload, undo/redo, exact ZIP STL contents, view modes, saved dark theme, keyboard focus, collapsible controls and reduced motion exercised. Worker abort disables export and reload recovers. Rapid input handling and per-part buttons have their own report.

320/390 px touch contexts: actual orbit/pinch changes canvas, preview before controls, no horizontal overflow, image/STL file import and export reachable. Desktop left panel measured 374 px, right viewer; screenshots retained. No remote user-file requests observed.

## Gallery and publication

Gallery source inline scripts compiled with new Function; missing scripts fail. New folder entry once, area stl, newest first; all **288** prior entries preserved, total **289**. Source browser runtime/search checked. Root predeploy copied **289 apps, 0 failed, 0 skipped**. Combined validation checks every app route and compares every new-app build file byte-for-byte. Combined production browser imports, full studio tests and public live download passed. The initial public URL returned 404 while GitHub Pages was building; bounded propagation waiting recovered without redeploying. Live HTTP 200, worker/WASM, actual STL download with exact local-model signature and all 289 gallery cards are recorded in publication-validation.json.

## Limits

All checks are computational geometry, browser or deployment checks. **No physical print, adhesive-strength, film alignment/brightness or optical performance test was performed.** Calibrate fits, use flexible mirror film (not glass), bond all twelve fixed joints and never look toward the sun or intense light.
