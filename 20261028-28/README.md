# Scene & Slot — a six-part tabletop theatre kit card

React + Vite, client-side Manifold WASM worker and Three.js. Snip a connected carrier into a floor, proscenium, two scenery wings and two removable actors. Assemble the mortised stage, then lift actors out and stage them by hand. This is a physical craft kit, not a browser game, projection device or static STL re-export.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base: `/daily-app2/20261028-28/`. Per-app `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist`. Public publication uses the **root monorepo** deploy flow, not this individual deploy script.

## Reference-first evidence and attribution

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. The three local kit-card projects have no suitable STL references; clicker sockets, telescoping sliders and fabric links are not substituted for sheet-card construction. Read their relevant documentation and the primary UI reference, `keycap_generator2`: README, styles, App, Viewer, worker, export, imageTrace and STL/import engine modules. Its concrete patterns used here include the 374 px left studio, collapsible sections, paired mm controls, raised key buttons, selected pink states, checkerboard conversion previews, imported-source editor, local fonts, current-result worker gating and printable-part export panel. No source project was edited or deployed, and no Git history or dependency tree was copied.

Selected actual mesh: **White Cat Kit Card**, Mike Kasberg (mkasberg), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source is provided as-is, without endorsement or warranty.

Downloaded the binary STL and independently parsed 30,616 triangles / 1,530,884 bytes. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Coordinates assumed mm, corroborated by source OpenSCAD `thickness = 1.6`. Bounding dimensions **179.820 × 178.020 × 3.190 mm**. Welded edge adjacency finds **two components**, with source nonmanifold/coplanar artifacts. This is a design reference, **not** a repaired or verified printable source asset. The original mesh/artwork is neither bundled nor exported.

Fresh sections at Z = 0.10, 0.50, 1.59 mm were measured and viewed; see `reference-analysis.json`, reproducible `reference-analysis.py`, and `reference-sections.svg/png`. Measured rail section at Y=100 spans X=0–1.6 mm; sheet planes at 0/1.6 mm, reduced bridge elevations 0.21–0.22 mm. Repository README, LICENSE, kit_frame.scad and white-cat-kit-card.scad were also read.

**Measured → redesigned:** preserve 1.6 mm source sheet as default/minimum; reinforce the 1.6 mm carrier rails to 2.4 mm; replace source low runners with accessible 0.4–0.6 mm snip tabs, width 0.8–1.4 mm. The theatre, floor mortises, window, scenery, actors and all assembly tolerances are **original parametric reconstructions**, not claimed to duplicate source interfaces. Fit allowance 0.15–0.45 mm is proposed FDM calibration, not a measured universal source fit. A gallery duplicate audit rejected a loom concept before publication; this final six-part theatre is distinct from earlier kits.

## Geometry and supported parameters

All dimensions are **millimeters**, except rotation in degrees. Supported ranges are enforced in the worker and UI; invalid combinations disable all exports rather than returning stale meshes.

| Parameter | Range |
|---|---|
| Card X / Y | 165–195 / 240–280 |
| Stage width / depth | 58–72 / 28–40 |
| Portal height / lower sill | 64–80 / 10–14 |
| Actor height / head width | 22–30 / 8–12 |
| Sheet / total slot allowance | 1.6–2.4 / 0.15–0.45 |
| Carrier spacing bias | 4–7 |
| Snip tab width / thickness | 0.8–1.4 / 0.4–0.6 |
| Floor dimple depth | 0–0.4 |

Soft-edge, chamfer and bevel silhouettes; three actual model-thumbnail presets and bounded variations. Portal tongues are 6 mm wide; actor tongues 4 mm; scenery tongues 6 mm. Receiving mortises add the selected **total** allowance to each receiving dimension. All tongues extend one sheet thickness through the floor; shoulders rest on it. These are gravity seats, **not** snaps or captive connections. Adhesive is optional for portal/scenery only; actors stay loose. A narrow/short carrier combination can be refused for cutter access; enlarge the envelope or use individual exports. Default card 180 × 250 mm fits only a bed with that usable area; maximum cards need larger beds or per-part printing.

All bodies use actual unions/subtractions, not overlapping shell exports. The card is one solid, with 24 real low tabs attaching every part to carrier rails. Individual exports omit carrier and runners. Assembled, exploded, connected-card, de-tabbed plate and all six isolated views use the same meshes. Exploded displacement is explanatory only. No simulated moving mechanism, cloth, projection or snap action is claimed.

## Local image → printable relief

PNG/JPEG content is checked before decoding: 16 bytes–2 MB; ≤12 MP, ≤6,000 px/side. Normalize locally to ≤500 px, then sample luminance on a bounded **20 × 20 grid** using contain/cover fit and ±25% crop shifts. Composite transparency onto the chosen light/dark background. Threshold or invert background / use grayscale height; preview source and exact checkerboard cutout grid.

Generate a triangulated height-field with solid backing, then union into or subtract from the protected floor landing. This is **2D-to-relief**, not automatic full 3D reconstruction. Threshold edge transitions are interpolated at grid resolution; it is not an exact vector trace. White holes remain unraised/unengraved above a continuous floor, **not through-holes**. Ring-hole preservation is verified using intersections against the final boolean mesh.

Footprint 4–7 mm; rotation ±180°; placement X ±1.5 / Y ±2 mm, constrained to a **6.5 mm-radius safe zone**. Raised depth 0.4–3 mm; engraving restricted to 0.4–0.6 mm to preserve ≥0.8 mm floor. Empty images, excessive transforms or safe-zone violations are rejected. Text (eight characters) and six original searchable bundled SVG icons use this same real relief pipeline. Simple SVG paths/shapes are sanitized and rasterized locally at 256 px, then use the same 20 × 20 conversion; external resources, scripts, text, filters and unsupported SVG constructs are rejected.

## Local STL → integrated grip

Binary and ASCII STL are parsed in the worker. Limits: 2 MB, 1,500 triangles, 0.2–250 mm in **each** source axis. Explicit Z/Y/−Z up before attachment, displayed oriented source dimensions, source preview and mandatory millimeter confirmation (**STL has no units**). Changing up-axis requests file reattachment. Footprint scales XY proportionally; height independently scales Z 0.6–3 mm. XY/Z scale factors, rotation, placement and reset are exposed.

Deliberately supported input: **one closed outward-wound convex solid**, broad flat bottom covering ≥25% of XY bounds, all projected points inside that bottom footprint. Finite coordinates, complete facets, nondegenerate faces, edge incidence/direction, connectivity, volume, triangle intersections, dimensions, convexity, bed contact and overhang footprint are checked. Open/nonmanifold, inward, concave, hollow, branching, multi-body or unsupported overhanging meshes are rejected with guidance—**not** hull-replaced or silently repaired. The accepted original triangles are transformed and actually solid-unioned into the floor, with ≥1.2 mm transformed narrow XY dimension and the same safe zone. No concavity is discarded.

Synthetic sample PNG/JPEG/SVG, ASCII wedge and binary gem are bundled in `public/samples/` with source notes; no personal inputs are committed. File-picker works on phones/desktop; drop-one-file supported. Replace/remove/reset recover from errors. Files stay local: no remote APIs/CDNs, keys, uploads or paid services. Fonts and WASM are bundled.

## Editor, persistence and export

Light/dark preference is saved; large focusable tactile controls and reduced-motion support. Desktop left rail/right viewer; phone preview/export first, then stacked controls. Orbit/pinch, fit and explicit zoom buttons. Undo/redo, six named local designs and JSON save/open retain bounded image/mesh payloads. Missing image payloads explicitly require reattachment; invalid source payloads block export. Storage quota failures offer JSON backup instead.

Heavy CSG/parser work is in a Web Worker with bounded resolution, debounce, generation IDs and exact parameter/source/transform keys. Failed workers, pending imports, stale results, invalid current edits and conversion mismatches disable export; the labelled last-good preview is not silently exported. UI mesh fingerprints match actual binary downloads and saved-design regeneration in Node.

Download connected card, individual part STLs or Everything ZIP (seven STLs plus numbered `ASSEMBLY.txt`). All are real binary STL in bed-flat printable orientation irrespective of assembly view. STL stores **no colours**; ZIP is not 3MF. Preview and export share exactly the current valid geometry, not screenshot approximations.

## Printing and assembly

PLA/PETG; 0.4 mm nozzle, 0.2 mm layers, ≥3 walls; bed-flat decoration up. No supports intended. Inspect slicing and fit before the full kit; test one wing and the floor for clearance. Fit is printer/material/elephant-foot dependent, not universal. Cut only marked low runners with flush cutters; clean nubs without trimming tongues. Lower portal, then wings, then actors into their floor mortises. Fixed pieces may be glued only after fitting. Actors lift out vertically, can be hand-staged through the window and reseated. No hardware required. Keep small parts/cutters away from children/pets. Full numbered instructions are visible in-app and in ZIP.

**No physical print, fatigue, drop, pull-out or stability-under-hand-load testing.** Computational collision and static-centroid checks do not establish physical strength or friction retention.

## Verification and dependencies

See `VALIDATION.md` and committed JSON reports/screenshots. `validate.mjs` independently parses actual binary STL bytes: finite positions, complete record length, nondegenerate faces, normals/winding, edge incidence (1e−5 mm weld), adjacency/component volume, expected millimeter bounds and Z=0. Checks each part and full card; robust-kernel intersections check assembled parts/insertion paths, actor window passage, loose layouts and safe snipping into six parts + carrier. Tests cover defaults, three presets, extrema, all silhouettes and image/STL derived results. Browser scripts select real files, download bytes, compare against default and edited output, regenerate saved JSON and validate actual ZIP contents. Worker abort, stale asynchronous imports, missing payloads, mobile touch and layout checks are separate.

Dependencies: React/React DOM; Vite/React plugin; Manifold-3d (Apache-2.0), Three.js (MIT), fflate (MIT); locally bundled Fredoka/Rubik via Fontsource (SIL OFL); gh-pages. Playwright is used only for local validation. Original six bundled icon paths and synthetic fixtures are project-authored. Shared editor/import infrastructure adapted from the collection's earlier studio; theatre geometry and fit checks are new.
