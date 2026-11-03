# Validation — Prytz & Sweep

Production base: `/daily-app2/20261104-7/`. Computational and browser verification only. **No physical printing, fit force, adhesive strength, skid friction, tracking, durability or area-accuracy tests performed.**

## Reference evidence

Fresh public source STL parsed and SHA-256 recorded before final physical reconstruction. `reference-measure.py` measured 30,616 triangles, 179.82 × 178.02 × 3.19 mm, 27 edge-adjacent components, 1.60 mm sheets, 4.50 × 1.70 mm sockets and 0.21–0.22 mm low runner tops. Actual section views inspected. Original nonwatertight mesh not repaired or bundled. Source male clip is nominally 4.00 mm; the generator deliberately redesigns straight 4.50 mm tongues, thicker sheets and stronger runners, with adhesive retention. See reference-analysis.json and reference-measurements.json.

## Geometry and assembly

`npm test` → **47 cases passed** (`geometry-validation.json`): default, three presets, all-min/all-max, every field's two limits, three silhouettes, ASCII/binary imported cutter transforms, thresholded/grayscale image inputs. `node import-boundary-test.mjs` → **six further imported-source extreme cases passed**, plus independent actual browser-SVG hole probes (`import-boundary-validation.json`).

Every case checks actual serialized binary STLs: exact byte count, finite coordinates, nonempty/nondegenerate triangles, normalized stored normals agreeing with winding, welded 0.00001 mm edge incidence exactly two/opposite, component adjacency and positive enclosed volume for EACH solid. Per-part, connected card and float32-translated de-tabbed plate validated. Default card: 180 × 180 × 2.4 mm; four clean parts plus carrier. Card has one closed component; de-tabbed plate has four.

Independent solid-kernel checks for every tested input: no assembled/flat part intersections; card matches declared envelope; sixteen runner cuts release carrier + four parts without damaging the parts; sampled upper footprints stay inside bed footprint; three tongue/socket centers agree; two pencil guide axes align with correct spacing; a full-diameter pencil cylinder clears all parts; skid lower-contact plane and actual bevel thickness checked; 30 sampled insertion contacts per case; ≥1.5 mm protected art backing. These checks do NOT demonstrate no-side-slip friction or physically accurate planimetry.

Actual browser SVG payload was regenerated and probed: hole center retains >99% of probe material; ink annulus removes >99%. No convex hull substitution of source/custom mesh.

## Production browser tests

Serve `dist` under its real prefix, e.g. `/tmp/prytz-production/daily-app2/20261104-7 → dist`, then `python3 -m http.server 5857 --bind 127.0.0.1 --directory /tmp/prytz-production`.

- `node browser-test.cjs`: **27 actual STL downloads**, PNG/JPEG/ASCII/binary real file pickers, changed pixels/threshold/depth/fit/crop/scale/rotate/place, per-part exports, replace/remove/reset, UI size and exact current-preview/download signature. Saved snapshots regenerate identical bytes in Node, then pass independent part/mechanism checks. Ten malformed/unsupported cases rejected (including open/nonmanifold, truncated, concave, excessive triangles/dimensions/pixels/size). Empty silhouettes and invalid transforms recoverably block export. Touch orbit/pinch and actual phone imports/downloads. No runtime errors or remote requests on local production server.
- `node studio-test.cjs`: three actual presets, silhouettes, text/icon/SVG, bounded image and mesh JSON round trips, named designs across reload, missing-payload reattachment, undo/redo, Every ZIP STL parsed, numbered instructions, all layouts, see-through arm, saved dark theme, visible keyboard focus, collapse/reopen, reduced-motion context, 374 px desktop left rail, 320 px preview-first phone, aborted worker blocks export and reload recovers.
- `node mobile-layout.cjs`: every tab and expanded numbered instructions fit **320 and 390 px**; compares scrollWidth/innerWidth/visualViewport against configured width. STL reachable, actual JSON-save click/download after expanded guide. Screenshots in evidence/.
- `node stale-test.cjs`: rapid parameter/image edits immediately block stale exports; newest result exactly matches Node; invalid transform blocks, reset recovers.
- `node orientation-test.cjs`: Z/Y/−Z source dimensions and exact final outputs; all part meshes and assembly checks repeated.
- `node icons-drop-test.cjs`: all six bundled icons affect actual solid geometry and pass mesh/assembly checks; actual drag/drop PNG works.
- `node isolated-test.cjs`: all four clean isolated previews render and actual downloaded part STL passes independent parser.

Reports: browser-validation.json, studio-validation.json, mobile-layout-validation.json, stale-validation.json, orientation-validation.json, icons-drop-validation.json, isolated-validation.json. No upload/user-personal fixtures used. Synthetic/public fixtures only.

## Build / gallery / publication

`npm run predeploy` passes. Vite's local Manifold browser externalization notice and bundle-size advisory are not runtime failures; real production worker/WASM imports were exercised successfully. Fonts/WASM/geometry/export bundled locally, no CDN.

`node gallery-test.cjs` compiles **every inline script with new Function** and fails if missing. One new `stl` entry, correct folder/link and newest-first ordering; STL Generators category first; all 429 prior entries unchanged, 430 total; browser render/search without runtime errors. See gallery-validation.json.

Root `npm run predeploy` / `npm run deploy`, full deployment-tree checks and public import/export smoke are recorded separately in deployment-validation.json / public-validation.json after execution. A published link or build alone is not presented as a physical print test.

## Observed publication result

Root predeploy: 430 apps built/copied, **0 failed / 0 skipped**. All 430 deployment indexes present; root matches source gallery and new production index matches app dist. Root deploy reported Published; gh-pages commit `2ebca9b8eca97bb74720c31d3365be654a6c0264`. [Pages deployment run](https://github.com/xianghui/daily-app2/actions/runs/41719709071).

`node public-smoke.cjs` passed at https://xianghui.github.io/daily-app2/20261104-7/ : HTTP 200, production worker/WASM/assets accessible, default/image/imported-STL actual downloads have distinct valid geometry and exact current-preview signatures; default bytes match Node. Public gallery renders 430 entries with new entry first and working search. No public runtime errors or failed asset requests. See public-validation.json. This remains computational/browser verification, NOT a physical print or area-accuracy test.
