# Crate & Carry

A local React + Vite studio for an original **five-panel carry-tray kit card**. Print a genuinely connected carrier, clip twenty thin tabs, slide the long walls onto the floor, then slide both windowed handle ends onto the three-plane corner interfaces. Small desk-trinket organizer, not a load-rated container. This is not the previous chair, bridge, half-lap lattice, phone stand, or a decorative re-export: it has a floor, four walls, fourteen receiving mortises, two handle openings and a distinct two-stage assembly.

## Run / export

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261027-26/`. Per-app scripts: `predeploy: npm run build`; `deploy: gh-pages -d dist`. Publish the entire collection from the parent monorepo with its root predeploy/deploy flow.

Download the real connected-card binary STL, any of five de-tabbed panels, or Everything ZIP (six STLs and numbered `ASSEMBLY.txt`). Parts are face-up at Z=0, not overlapped in assembled export orientation. All lengths are millimeters; STL stores neither units nor preview colours. Import at 100% millimeter scale. The card has a boolean-unioned perimeter, spine, two transverse runners and twenty actual removable bridges. It is not loose parts near a rectangle.

## Reference-first evidence / attribution

Searched actual STL files under `/Volumes/ExternalHD/3d_printing_apps/` first. Clicker, slider, spring and interlocking fabric meshes are not suitable kit-card carrier references; the local kit-card projects contained no STL reference files. Read the kit-card README and the read-only Keycap Studio `README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, STL and export modules. Concrete studio patterns retained: 374 px left controls, compact sticky brand/theme bar, collapsible sections, paired sliders/mm fields, tactile raised buttons and pressed selection states, large gradient right viewer, checkerboard image conversion, imported-solid editor, print/assembled/exploded/isolated views, saved light/dark theme and local portable designs. No switch socket or keycap geometry is imposed on this tray.

Downloaded **Mike Kasberg’s White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)). Read its README, LICENSE, `kit_frame.scad` and model source. Parsed the downloaded binary mesh and inspected actual sections at Z=.1/.5/1.59 mm plus a transverse perimeter-rail section. `reference-analysis.py /path/to/reference.stl` reproduces `reference-analysis.json` and `reference-sections.svg`; PNG captures those real mesh sections.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; dimensions **179.819997 × 178.019994 × 3.190000 mm**. STL lacks unit metadata; source OpenSCAD corroborates millimeters.
- Measured sheet planes 0/1.6 mm; rail width 1.6 mm; thin bridges include .21/.22 mm Z planes. The low sections connect pieces; the near-sheet-top section exposes gaps where bridges terminate.
- Two edge-connected components and coplanar/nonmanifold artifacts detected. Source inspection is not a repaired/printable-source claim. No raw reference mesh is bundled, exported or republished.
- Preserve the source's measured **1.6 mm sheet/carrier/sacrificial-bridge structure**, reconstructing independent closed solids. Reinforced **2.4 mm** frame and **.4–.6 mm** high / **.8–1.4 mm** wide tabs are proposed redesigns.
- Every tray interface is original, **not a measured source fit**: four floor-side tongues, two floor-end tongues, eight long-wall end tongues, fourteen receiving mortises and two handle windows. No physical print or load/fit test was performed.

## Parameters / constraints (mm)

| Parameter | Range |
|---|---|
| Card width / height | 180–210 / 190–220 |
| Tray internal length / depth | 44–52 / 32–40 |
| Wall height / handle rise | 24–30 / 12–16 |
| Floor bottom elevation | 3 fixed |
| Sheet thickness | 1.6–2.4; default 1.6 |
| Total mortise allowance | .15–.45; default .30 |
| Carrier rail / runner offset | 2.4 fixed / 8–12 |
| Breakaway width / height | .8–1.4 / .4–.6 |
| Front-wall dimples | 0–.4 deep |
| Imported footprint / STL height | 4–7 / .6–3 |
| Import X / Y / rotation | ±1.5 / ±2 / ±180° |
| Relief / engraving depth | .4–3 / .4–.6 |

Floor tongue width = 6; long-wall end tongue width = 4; tongue projection = sheet thickness + 1. Receiving slot sizes add the selected total allowance to both the mating width and thickness. Both ends receive the floor and long walls simultaneously along X. The four floor/long-wall mortises locate floor elevation; the ten end-panel mortises constrain the three perpendicular planes. Ends can deliberately withdraw outward: **removable slip fits, not captive snap joints**. Optional adhesive after calibration may make a permanent display; not necessary for the assembly geometry demonstration. No claim of universal press-fit or load retention.

Three real presets and three corner profiles alter geometry. Bounded variation, undo/redo, six named designs and JSON save/open are implemented. The true declared card X/Y envelope includes all tabs and parts; relief increases Z above sheet thickness and the UI reports actual final dimensions. Too-small envelopes, nonfinite values and unsafe mark placements are rejected.

## Image / text / SVG to geometry

PNG/JPEG/simple SVG ≤2 MB. Raster ≤12 MP and ≤6,000 px/side, validated header before decoding, normalized to ≤500 px and sampled on a bounded **20×20 grid**. Simple SVG filled paths/basic shapes only, ≤2,000 elements, rasterized locally at 256 px; scripts, external resources, text/effects and unsupported content rejected. Text uses locally bundled Rubik; six original bundled icons use the same raster-to-height pipeline.

Fit/cover, crop X/Y ±25%, light/transparent or inverted dark background, threshold 1–254, grayscale depth and raised/engraved style modify the final STL. Heights are thresholded darkness or `depth*(1-luminance/255)`. Construct a closed piecewise-linear top and .4 mm backing, then boolean-union/subtract at the front-wall .2 mm recessed medallion. Bright holes remain unraised/unengraved inside continuous backing; final-mesh ring-hole probes test this. No convex hull. This is **sampled 2D-to-relief conversion, not exact vector tracing or full 3D reconstruction from a photo**. Checkerboard shows the actual conversion grid; source image is shown beside it. Empty silhouettes and excessive engraving are blocked. Replace/remove/reset restores defaults.

## STL integration / explicit supported subset

ASCII and binary STL ≤2 MB, ≤1,500 triangles, .2–250 mm per source axis. Validate exact binary length/ASCII structure, finite dimensions, nondegenerate faces, welded edge incidence and opposite winding, a single positive-volume component, intersections, convexity and a broad flat bottom. **Supported: one closed outward-wound convex solid with ≥25% broad flat bed contact and no XY overhang beyond its bottom polygon.** Open/nonmanifold, concave, hollow, disconnected or unsupported input is rejected with actionable guidance. No claimed repair and no convex-hull substitution.

Choose Z/Y/−Z up before attachment, inspect oriented source dimensions and explicitly confirm millimeters. Proportional XY footprint scale, independent Z height, rotate/center/place use the original parsed triangles in a real Manifold union with .15 mm overlap into the front-wall well. Final geometry visibly differs from no-import export; unchanged re-export is not the workflow. Radius-6.5 mm safe zone isolates all imports from floor/corner interfaces. Minimum joint-envelope separation is >1.2 mm throughout supported sizes. Axis changes request reattachment. Original source preview and final generated solid are both available.

All processing stays in the browser. No API/CDN/upload service. Personal files are never stored in the repository. JSON/local named designs carry bounded normalized PNG or verified mesh payloads; missing image payloads explicitly request reattachment rather than pretending files were restored. Synthetic PNG/JPEG/SVG/ASCII/binary STL samples are included under `public/samples/` for both import paths.

## Modeling / views / responsiveness

Local Manifold WASM runs heavy booleans and final-mesh preflight in a Web Worker. 100 ms debounce, monotonic build IDs, asynchronous import guards and an exact parameter/source/transform key gate exports. Invalid edits can leave a labeled last-good preview, but cannot export it. Worker error disables export; reload recovers. Three.js OrbitControls support mouse/touch orbit, zoom/pinch and fit. Preview/export share the exact result fingerprint. Assembled, exploded, connected card, de-tabbed print layout and five isolated views use the same solids. Handle-insertion slider is checked preview positioning only; it does not change print geometry.

Light/dark setting persists; locally bundled Fredoka/Rubik; generous tactile targets, pressed states, visible keyboard focus and reduced-motion support. Phone layout is preview/toolbar first, dimensions/warnings/export next, controls stacked afterward; no narrow sidebar or horizontal overflow.

Dependencies: React/React DOM, Vite/React plugin, Manifold (Apache-2.0), Three.js (MIT), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL); gh-pages. Playwright is a development-only test dependency. Reused existing collection import/studio/serializer infrastructure rather than copying reference project history/dependencies wholesale; the tray geometry and assembly tests are new.

## Print / assembly / calibration

1. PLA/PETG, .4 mm nozzle, .2 mm layers, three walls; parts face-up at Z=0, no supports intended. Start with loose floor and front wall as a fit calibration pair. Inspect in slicer at 100% mm.
2. Clip twenty thin tabs about 2 mm outside each part. Trim sacrificial nubs; do not cut functional tongues or slots. Cutters and small pieces require adult handling.
3. Hold floor 3 mm above desk. Slide front and back walls inward along Y onto its four side tongues.
4. Hold that trio square. Slide left handle end inward along X over the floor tongue and both tongues on each long wall; then repeat on the right.
5. Place all four vertical panels on the desk. Ends remain removable. For light trinkets only; not load-rated, watertight or intended for food contact.
6. If tight, increase total allowance by .05 mm and recalibrate. Material, first-layer expansion and printer affect fit. Avoid forcing 1.6 mm sheets. Watertight meshes do not demonstrate print strength or fit.

## Validation

`npm test` independently parses binary STL (including float32 output), checks finite nonzero triangles, unit normals consistent with winding, positive enclosed volume per component, expected millimeter bounds, Euler characteristic and exactly two opposite-directed incident faces per edge after 1e-5 mm welding. Every generated part is checked in the worker too.

Geometry suite: default, three presets, min/max and six variations; thirty ASCII/binary/image-threshold/image-relief/engraving variants across default/presets/extremes. Tests each connected card and five loose solids separately. Actual solid intersections check ten assembled pairs and nine samples per assembly stage, joint restraint, flat-layout separation, each part's inclusion in card, and twenty cuts yielding **six components (carrier + five parts)**. Invalid inputs are rejected. Computational checks only, **not physical print, fatigue, force, stability, fit or load testing**.

Production-browser test commands (serve `dist` under its real base path with `node serve-production.cjs`): `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node resilience-test.cjs`, `node portable-errors-test.cjs`, `node stale-import-test.cjs`, `node studio-layout-test.cjs`. Reports/screenshots are stored beside the app; `VALIDATION.md` records completed checks. Root gallery/combined deployment and public smoke checks use the corresponding scripts. No unperformed check is claimed as passed.
