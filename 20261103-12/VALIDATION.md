# Validation — Touch & Tangency / 20261103-12

All checks below are computational/browser checks. **No physical print, fit, accuracy, friction, adhesive or stability test was performed.** Gauge is not captured vertically.

## Reference evidence

Actual binary reference re-downloaded to temporary storage and parsed with `reference-measure.py` before final geometry selection. SHA-256, 30,616 triangles, mm-assumed bounds, 27 edge-adjacent components, individual bounds, defects and measured section/socket/runner geometry are in `reference-measurements.json`. Z=.1/.5/1.59 cross-sections were rendered and visually inspected. Local candidate STL geometry and project instructions were inspected first. `reference-analysis.json` distinguishes source measurements from new fits/design. Raw source STL is not bundled. Upstream CC BY 4.0 license retrieved and matched.

## Mesh / fit / carrier checks

`npm test` / `node validate.mjs`: **36 passing cases, none skipped/blocked**: all three presets, both extrema of every physical parameter, combined minimum/maximum, three deck silhouettes, both ASCII/binary STL fixtures at default/transformed engraving settings, threshold and grayscale image-derived geometry. Every generated result runs worker-side final-solid validation too.

Independent byte-level checks of each part, connected card and loose plate require exact binary STL byte length, finite vertices, nondegenerate triangles, normalized outward normals, positive volume per component, expected millimeter bounds and Z=0 first layers. Vertices welded at **1e-5 mm**; each undirected edge has exactly two oppositely directed incidents. Euler characteristic checked. Card is one closed connected component; loose plate has three; clean pieces each have one.

CSG intersections verify flat comparison and upright display at **26 gauge-lift poses per case**, plus **21 panel insertion positions**. Gauge normal insertion is collision-free. Exact side-distance/perpendicularity equations confirm three equal incenter contact radii; radius reduction equals chosen radial gap. Real 1 mm pocket floor and recess, through deck sockets, ≥1 mm engraving backing and declared envelope are probed. Upper horizontal slices stay inside bed footprint. Flat parts do not overlap. Twelve modeled runner cuts release **carrier + three intact kit parts**, without damaging functional geometry. This proves geometric fit/insertion, not physical performance.

## Production-path browser tests

Serve actual `dist/` under `/daily-app2/20261103-12/` using `python3 serve.py` (port 5792).

- `node browser-test.cjs`: **26 actual downloaded STLs**, parsed and checked against visible dimensions and exact preview/current-state fingerprints. Saved browser JSON is regenerated in Node, matched byte signatures and mechanically checked. Real file-picker PNG/JPEG/ASCII STL/binary STL imports; pixel content, threshold, depth, crop, size, scale, orientation/placement change geometry; replace/remove/reset return to defaults. All individual parts downloaded. Minimum/maximum valid models exported. **10 malformed/unsupported file cases** reject recoverably, plus empty silhouette, invalid numeric input, out-of-safe-zone art and invalid dimensions. Export stays disabled until current valid geometry exists. Zero page errors and zero remote requests.
- `node studio-test.cjs`: all real preset exports, three silhouettes, text/icon/SVG geometry, actual ZIP unpacking and every part parsed, named local design persistence across reload, portable image/mesh JSON roundtrips, missing payload rejection, undo/redo, all view modes, saved dark theme, focus, collapsible controls and reduced motion. Deliberately aborted production worker causes explicit failure/disabled export; reload recovers.
- `node orientation-test.cjs`: actual Z/Y/−Z mesh imports, oriented dimensions and regenerated final solids/assembly checked.
- `node stale-test.cjs`: rapid physical/image edits immediately block stale export, newest result matches Node, invalid transforms recover.
- `node icons-drop-test.cjs`: all six bundled icons alter final solids and receive independent mesh/assembly checks; real browser DataTransfer drop exercises PNG import.
- `node hole-check.mjs`: CSG probes in browser-imported ring.svg confirm the bright center remains unengraved, dark ring becomes an actual recess and backing remains continuous.
- `node mode-test.cjs`: screenshot comparison verifies flat/upright arrangements and gauge lift visibly change the preview while the printable signature remains unchanged.
- `node presentation-test.cjs`: each view/isolated part, see-through gauge visibly changes preview but never export signature. Desktop rail is 374 px at left, viewer right. Every editor tab at **320/390 px** has no horizontal overflow and reachable exports. Touch-enabled contexts verify preview-first layout; CDP touch orbit/pinch change canvas screenshots; actual phone PNG/STL imports and downloads checked.

Reports: `geometry-validation.json`, `browser-validation.json`, `studio-validation.json`, `orientation-validation.json`, `stale-validation.json`, `icons-drop-validation.json`, `hole-validation.json`, `presentation-validation.json`. Screenshots: `evidence/`, `desktop-validation.png`, `mobile-validation.png`.

## Gallery / deployment

`node gallery-test.cjs`: inline scripts present and compiled with `new Function`; new entry exactly once, newest first, correct folder/area/link; **407 prior entries preserved, 408 total**; STL Generators first; rendering/search without runtime errors. `gallery-baseline.json` is the exact pre-edit array. Root tagline already used the required focus and is refreshed without changing category order or earlier entries.

`npm run predeploy` builds the individual production app. Root `npm run predeploy` constructs the combined `deploy/` tree, then root `npm run deploy` publishes it. Staged and public verification reports document actual observed results, not a physical test.

Root build completed with **408 built, 0 failed, 0 skipped**. Root index and all new production assets were byte-compared with staging; every gallery folder has a staged index. The full 26-download import/rejection/phone suite also passed against the **combined deploy tree** (`staging-validation.json`). Root `npm run deploy` returned **Published**.
