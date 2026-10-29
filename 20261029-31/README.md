# Tumble & Tray

A local-first React/Vite parametric **seven-panel miniature gravity-tower kit card**. Snip 28 real low runners, seat two alternating baffles between pierced cheeks, lower into a tray and add a rear wall/front exit arch. Feed **one externally supplied 6 mm bead or miniature die** at a time. Not standard 16 mm dice; feed objects are not bundled. Adhesive required at eight floor and four baffle joints. No fairness, jam-free flow or strength claim.

## Reference-first evidence

Local files were inspected first: Keycap Studio's three-part switch template and Fidget Fabric's 8 mm diamond link are unsuitable sheet-kit references. Their actual parsed hashes, extents and component counts are in `reference-analysis.json`. The read-only Kit Card Studio README was also inspected; that project has no suitable shipped reference STL.

Actual geometry reference: **White Cat Kit Card**, Mike Kasberg, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0** (see `reference-LICENSE.txt`). Download URL and full SHA-256 are recorded in `reference-analysis.json`:

`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`

The downloaded binary STL was parsed: 30,616 triangles; 179.820 × 178.020 × 3.190 mm, assuming millimeters (STL has no units). It has **27 edge-adjacent components and is not watertight**; it is a design reference, not a repaired/re-exported mesh. Cross-sections at Z=.10/.50/1.59 mm were measured and inspected (`evidence/reference-sections.png`): bed-flat 1.6 mm sheets, four rectangular 4.5 × 1.7 mm sockets and low runner elevations .21/.22 mm.

**Preserved contract:** 4.4 mm tongues with sockets `(4.4 + total allowance) × (sheet + total allowance)` reproduce 4.5 × 1.7 at 1.6 mm sheet/.10 allowance. **Proposed differences:** .15 default allowance, .4–.6 mm breakaway runners, 2.4 mm rails, seven original gravity-tower panels and inclined baffle slots cut using the actual transformed baffle thickness. No spacecraft geometry or raw third-party mesh is redistributed; this is an original CSG reconstruction.

Visual/interaction reference: read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`, specifically README, App, styles, Viewer, worker, export, image tracing and STL parser. Concrete adapted patterns: 374 px left rail; sticky compact header; collapsible sections; raised/pressed tactile controls; lavender desk/white panels/coral accents; saved light/dark theme; checkerboard source cutout; current-worker-result export gate; phone preview-first stack. Studio/import/test infrastructure is adapted from the preceding local studio; tower geometry, inclined apertures, feed envelope, panel layout, assembly transforms and tests are new, not the preceding scoop mechanism.

## Run and build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app `deploy` is installed as required, but public deployment uses **the root monorepo** `npm run predeploy` then `npm run deploy`. Base path `/daily-app2/20261029-31/`.

Dependencies: React, Vite/plugin-react, Three.js/OrbitControls, Manifold WASM, fflate, bundled Fontsource Fredoka/Rubik (OFL); Playwright for verification; gh-pages for publishing. No CDN, API, paid service or uploads. Geometry is boolean-built in a Web Worker; export and preview share the exact current validated result, with build IDs/stale guards and no stale last-good export after invalid edits.

## Parameters

All lengths in **mm**, incline in degrees. Export X/Y/Z shown separately from the explanatory assembled view.

| Parameter | Supported range |
|---|---|
| Carrier width / height | 245–270 / 220–245 |
| Tower height | 82–94 |
| Inside width / depth | 42–50 / 42–50 |
| Baffle incline | 28–36° |
| Sheet / total joint allowance | 1.6–2.4 / .10–.35 |
| Part spacing | 4–6 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Grip groove depth | .2–.5 |

Three real presets with live thumbnails, three grip silhouettes, bounded variation, undo/redo, six named local designs, portable JSON save/open, assembled/exploded/connected-card/de-tabbed/isolated views, ghosting and fit/zoom/orbit. Invalid carrier packing or baffle separation is blocked. Baffles require `tower height − 32 − sheet − 2(depth − 4sheet − 14)tan(incline) >= 12 mm`. This is a conservative vertical envelope, not a dynamic bounce calculation. The source did not specify these gravity dimensions.

## Image / text / icon / SVG import

PNG/JPEG: real content/dimension checks, 16 bytes–2 MB, ≤12 MP and ≤6000 px per side. Normalize locally to ≤500 px; contain/cover and ±25% crop shifts; light/dark background, threshold 1–254 or grayscale relief. Canvas composites alpha against selected background. Simple safe SVG filled paths/shapes are rasterized locally to 256 px; scripts, external resources, references, effects and unflattened text are rejected (≤2000 elements).

A **20 × 20 sampled continuous triangular height field** on .4 mm construction backing is boolean-integrated into the outboard tray grip. Threshold mode maps dark samples to the selected height and light samples to zero relief; grayscale uses `depth*(1-luminance/255)`. Backing is sunk into the solid grip. Cutout preview is transparent on a checkerboard. Interior light holes remain unraised/unengraved **solid backing**, not through-holes. No convex hull or hole-filling trace is substituted. Depth .4–3 mm raised; engraved .4–.6 mm to retain ≥.8 mm panel backing. Scale 4–7 mm; rotate ±180°; place X±1.5/Y±2 mm within a strict Ø13 safe zone. This is **2D-to-relief, not automatic 3D reconstruction from one photo**. Text (8 characters) and six searchable bundled SVG marks use the same real conversion path. STL does not store preview colours.

## STL import and real integration

Both complete ASCII and binary STL are supported, ≤2 MB, **≤1500 triangles**, each axis .2–250 mm. Show source dimensions and require explicit **millimeter confirmation**. Choose Z/Y/−Z up before attaching; normalize height .6–3 mm and longest XY 4–7 mm, rotation and XY placement; reset/replace/remove are available. The transformed **original mesh** is boolean-unioned to the isolated grip, outside the tower passage. It is not merely displayed or re-exported.

Bounded accepted contract: a single outward, closed, consistently wound, non-self-intersecting **convex solid with a broad flat base** (≥25% XY footprint), no XY overhang beyond the base, and transformed minimum XY width 1.2 mm. Open/nonmanifold/multiple-shell/concave/cavity/branched/unsupported inputs produce actionable errors; no automatic repair or convex-hull replacement. The parser checks exact binary length, complete ASCII facets, finite coordinates, face area, directed welded edges, adjacency, positive volume, self-intersection, units/dimensions and contact. Source preview remains available beside final preview.

Files stay in the browser. JSON/named designs include bounded normalized image or original indexed mesh payloads, not inaccessible file paths. Missing or invalid payloads demand reattachment, never pretend restoration. Only synthetic public sample fixtures are bundled; no personal files are saved in this repository. See `public/samples/ATTRIBUTION.txt`.

## Printing and assembly

Print decoration up, Z=0, 100% scale. PLA/PETG, .16–.20 mm layers, .4 mm nozzle, three walls. No supports intended. Full card needs a large bed: **use individual panel exports on smaller beds**. Calibrate the 4.4 mm tongue/socket allowance with your printer/material first; allowances are total, not per side. First layers affect low runner removal. Snip the 28 accessible low runners and trim nubs; never cut working tongues.

1. Lay left cheek flat, decorated outside down. Insert the two baffle tongues into their inclined slots: upper descends rearward, lower descends forward.
2. Bring right cheek horizontally along X onto the opposite tongues. Bond four joints. This sequence avoids trying to force a baffle down through a closed slot.
3. Lower both cheeks/baffles into the tray's four floor sockets. Add rear wall and front arch into four more floor sockets. Shoulders limit insertion; bond all eight floor joints and cure fully.
4. Feed one 6 mm object slowly. Nominal end openings 14 mm; minimum conservative vertical ramp gap 12 mm; central exit width ≥13 mm, arch height 30 mm. Do not assume dice will tumble fairly or never jam. Tray is not sealed; keep upright.

Use adult supervision for cutters, adhesives and small parts. No snap-lock or calibrated friction-retention claim. Adhesive is necessary. Download real connected-card STL, clean per-part STLs or Everything ZIP with all eight STL files (card + seven panels) and numbered assembly notes. Assembly preview uses the exact part meshes with explanatory rigid transforms; exports always use bed-flat orientation. Colours are preview only, not STL materials.

## Validation

`npm test` independently reparses binary STL: exact byte size, finite coordinates, nondegenerate triangles, unit normals/winding, 1e−5 mm welded edges with exactly two opposite incident faces, each connected component positive volume, bounds and bed contact. Tests cover presets, shapes, min/max settings, image raised/engraved threshold/grayscale outputs, both STL formats/transforms, every part and connected card. Manifold intersections test assembled nonintersection, staged cheek/baffle/floor/wall insertion paths, shoulder stops, flat layout separation, and snipping all 28 tabs into **eight components (carrier + seven panels)**. Live worker also gates every output on mesh checks.

`node browser-test.cjs`, `node studio-test.cjs`, `node supplemental-test.cjs`, `node hole-check.mjs` exercise real production-base-path file pickers and downloaded STL, content/threshold/scale/rotation/placement changes versus default, exact preview/export/JSON signatures, malformed inputs, restore/reset, all presets, text/icons/SVG, saved designs, ZIP contents, worker failure/recovery, stale edits, dark theme/focus/collapsibles, 320/390 px mobile, touch orbit/pinch and reachable export. Actual boolean probes verify the image's central hole remains unraised or unengraved. Reports/screenshots are adjacent.

**No physical prints, printer fit, adhesive strength, dice-flow, impact or durability tests have been performed.** Geometric envelopes and collision checks establish computable assembly properties, not flow reliability or physical performance.
