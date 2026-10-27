# Seat & Snip

A local React + Vite maker studio for a **four-part miniature-chair kit card**. Print one genuinely connected carrier, clip 16 sacrificial tabs, insert the backrest into the seat, then slide the two windowed cheeks inward. This is an original tab-and-mortise assembly, not another half-lap lattice, bridge, keycap or phone support. Decorative scale model only, not load-bearing furniture.

## Run and export

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base path `/daily-app2/20261027-25/`. Individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public combined-site deployment must use the parent monorepo flow.

Prominent current-result binary STL export, individual carrier/backrest/seat/cheek buttons and an Everything ZIP with all five STLs plus numbered `ASSEMBLY.txt`. The card is a boolean-unioned frame, central spine, transverse runner and 16 low-profile bridges—not disconnected pieces beside a frame. Individual parts have their tabs removed and rest face-up at Z=0. STL carries neither colours nor unit metadata: import as millimeters at 100%. No fake 3MF option.

## Reference-first evidence and attribution

Searched actual `.stl`/`.STL` files under `/Volumes/ExternalHD/3d_printing_apps/` first; its clicker sockets, sliders, spring and fabric link meshes were unsuitable references for kit-card sheet/carrier construction. The three local kit-card project directories had no STL reference files. Read Keycap Studio's README, App, styles, Viewer, worker, STL and export modules as the read-only interaction reference. Retained its concrete 374 px left rail, sticky compact brand/theme bar, collapsible sections, raised tactile controls, paired sliders/mm inputs, gradient-backed right viewer, checkerboard source conversion, imported solid editor, ghost/assembled/exploded/print views, and portable local designs. Its switch sockets are not used.

Downloaded and parsed **Mike Kasberg's White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)). Read the source README, LICENSE and `kit_frame.scad`. Exact STL download URL, SHA-256, bounding box, edge-connected components, measured Z planes and rail cross-section are in `reference-analysis.json`. `reference-analysis.py /path/to/downloaded.stl` reproduces the measurements and `reference-sections.svg`.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; measured **179.819997 × 178.019994 × 3.190000 mm**. STL itself has no units; source OpenSCAD corroborates millimeters.
- Sheet planes Z=0/1.6 mm, perimeter rail 1.6 mm, thin bridge Z=.21/.22 mm; actual mesh cross-sections at .1/.5/1.59 mm were examined. Two edge-connected components and nonmanifold/copanar facet artifacts were detected. This is an inspection reference, not a repaired/printable source claim.
- Adaptation: retain source's measured **1.6 mm sheet/carrier/sacrificial bridge construction**, but reconstruct original closed solids. Reinforce frame to **2.4 mm** and tabs to **.4–.6 mm high / .8–1.4 mm wide**. These thicker tabs and every chair interface are proposed redesigns, not source measurements. No raw third-party or private STL is bundled or redistributed.
- New structure: two 6 mm backrest tenons, two rear seat mortises, four seat side tongues, two backrest side tongues, six cheek mortises, cutout windows and four coplanar feet. Backrest personalization is isolated from every joint. No physical print, strength, stability, fatigue or fit test has been performed.

## Parameters (all lengths millimeters)

| Parameter | Supported range |
|---|---|
| Card width / height | 170–210 / 160–200 |
| Seat internal width / depth | 40–48 / 32–38 |
| Seat elevation / backrest height | 18–24 / 22–28 |
| Sheet thickness | 1.6–2.4; default 1.6 measured from reference |
| Total mortise allowance | .15–.45; default .30; proposed printer-dependent fit |
| Carrier rail / runner offset | 2.4 fixed / 8–12 |
| Breakaway width / thickness | .8–1.4 / .4–.6 |
| Backrest dimples | 0–.4 deep |
| Imported footprint / STL height | 4–7 / .6–3 |
| Import X / Y / rotation | ±1.5 / ±2 / ±180° |
| Relief / engraving depth | .4–3 / .4–.6 |

Slot dimensions are matching tongue width/thickness plus total allowance. Backrest downward tenons stop .15 mm short of the seat underside. Side tongue projection = sheet thickness + 1 mm. The two side panels slide on after the backrest is seated; they can intentionally withdraw sideways (not captive). Geometry rejects outside-range/nonfinite values, unsafe mark placement and insufficient card/cutter envelope. Three real presets, three real corner profiles, bounded variation, undo/redo, six named saved designs and JSON save/open are included.

## Local image-to-geometry workflow

PNG, JPEG and restricted simple SVG; ≤2 MB, raster images ≤12 MP and 6,000 px per side. Check magic/header dimensions before decoding, downscale to ≤500 px and sample a bounded **20×20** grid. SVG allows filled paths/basic shapes, max 2,000 elements, no scripts/external resources/effects; rasterized locally to 256 px. Text uses locally bundled Rubik and icons use six bundled original SVG marks through the same conversion pipeline.

Fit/cover, crop shifts ±25%, light/transparent or inverted-dark background, threshold 1–254, grayscale relief and raised/engraved style alter exported geometry. Heights use thresholded darkness or `depth*(1-luminance/255)`. Build a closed piecewise-linear top surface on a .4 mm solid backing and boolean-union or subtract it at the backrest's .2 mm recessed medallion. Bright holes remain unraised/unengraved, never filled by a convex hull; this is coarse sampled relief, **not exact vector tracing or full 3D reconstruction from one photo**. A checkerboard shows the actual conversion grid. Tiny feature resolution depends on 20×20 sampling and requested scale. Empty relief and unsafe engraving are blocked. Import/replace/remove/reset, source preview and final mesh preview are real.

## Local STL-to-geometry workflow

Strict binary and ASCII parser, ≤2 MB and ≤1,500 triangles. Validates exact binary length, ASCII facets, finite values, dimensions .2–250 mm per axis, nondegenerate faces, welded edge incidence/opposite winding, one positive-volume connected component and triangle intersections. **Deliberately supported subset: one closed outward-facing convex flat-bottom solid, with broad bed contact ≥25% of footprint and no XY overhang outside the bottom polygon.** Concavities, cavities, thin branches, disconnected/open/nonmanifold/self-intersecting input are rejected with guidance; there is no repair or convex-hull substitution.

Choose Z/Y/−Z up before attachment; changing axis asks for reattachment. Inspect oriented source size and explicitly confirm millimeter coordinates. XY scales proportionally to physical footprint, Z independently to grip height; rotate, center and place within a radius-6.5 mm safe zone. Use the original transformed mesh in a true Manifold union with .15 mm overlap into the recessed **backrest**. This produces one printable solid, never overlapping un-unioned shells or unchanged re-export. A mark cannot reach the seat or cheek interfaces. Reset transformations and remove to return to the built-in mark.

Files never leave the browser. Portable JSON and local named designs contain a bounded normalized PNG or verified mesh payload; missing images explicitly require reattachment. No personal input files are saved in this repository. Bundled `public/samples/` PNG/JPEG/SVG/ASCII-STL/binary-STL fixtures are synthetic local test assets, not source meshes or user uploads.

## Geometry and responsiveness

Manifold WASM performs actual solid booleans in a local Web Worker; 100 ms debounce and monotonic request IDs prevent stale responses. Export additionally requires exact current parameter/source/transform key, no conversion/import errors, and the current valid result. Invalid settings may show a labeled last-good preview but cannot export it. Worker loading failure disables export and reload restarts it. Three.js OrbitControls provide rotate/zoom/fit plus touch orbit/pinch. Preview and STL share the same indexed result and fingerprint. Assembled/exploded/cheek-insertion positions are visualization only, not print orientation. Light/dark choice is saved; phones place preview/export before controls, never a narrow side rail. Reduced motion and visible keyboard focus are supported.

Locally bundled dependencies: React, React DOM, Vite/React plugin, Manifold (Apache-2.0), Three.js (MIT), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL); gh-pages deployment. Playwright is a development-only test dependency. No CDN, backend, API key, upload or paid service is required.

## Print and assembly

1. Print the connected card **or** its four individual parts face-up at Z=0. PLA/PETG, .4 nozzle, .2 layers, three walls; no supports intended. Default card 180×170 mm; confirm bed fit. Relief increases Z above sheet thickness.
2. Clip the 16 accessible tabs about 2 mm beyond part edges, then trim nubs carefully. Tabs avoid the functional tongue/slot faces. Do not print every ZIP STL together: card and loose parts are alternative exports.
3. Hold seat level, lower two backrest tenons into the two rear mortises until the body rests on the seat top.
4. Hold square and slide one cheek horizontally inward over two seat tongues and one backrest tongue; repeat opposite side. All four feet should share the desk plane.
5. Slip-fit cheeks withdraw sideways for disassembly; no glue, hardware or latch is required. Print a seat and one cheek first as the calibration coupon; tune total allowance in .05 mm steps, not force. Elephant foot and slicer expansion affect fit.
6. Miniature decorative model only. No tested strength, load capacity, stability or universal tolerance claim. Small parts/cutters need adult handling.

## Reproducible validation

`npm test` independently parses final float32 binary STLs, checks exact byte count, finite/nondegenerate triangles, expected dimensions, normalized outward normals, welded edges (1e−5 mm; exactly two opposite-directed incident faces), adjacency/component volumes and bed-flatness. Checks every individually exported solid, not just combined volume.

`collisionCheck` independently rebuilds solids and intersects all six assembly pairs; samples backrest downward insertion before cheeks and each cheek's complete inward path. Probes joint side-restraint, card inclusion, flat-layout separation and envelope; simulates all 16 cutter cuts, requiring exactly the four parts plus carrier. Defaults, presets, representative variations, simultaneous minima/maxima and image/STL variants use the same checks. These are computational checks, not force/physical print tests.

Serve the production base path with `node serve-production.cjs`, then `node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs`, `node hole-test.cjs`, `node portable-errors-test.cjs`, `node stale-import-test.cjs`, `node studio-layout-test.cjs`. Reports and screenshots are alongside this README. They exercise real file pickers/downloads, changed image pixels/threshold/depth, actual STL transforms, signature/JSON regeneration, all presets and marks, hole probes, ZIP contents, named persistence, errors, worker failures/staleness, 320/390 px phones, touch orbit/pinch and saved dark mode. Root/gallery checks and production combined output are tested before root deployment.
