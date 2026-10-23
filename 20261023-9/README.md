# Bellows Bend

A React + Vite, entirely client-side parametric STL studio. Guide the open rim of a hollow corrugated stem sideways and release: its continuous annular membrane distributes flex in any direction. This is distinct from a planar concertina or axial helical spring. A rigid palm landing carries a built-in grip, imported image relief, or imported STL grip. One closed, connected solid; no assembly, fasteners, magnets or bearings. No physical print or fatigue test has been performed.

## Run and deploy

`npm install`, `npm run dev`, `npm run predeploy`. `npm test` runs independent exported-STL and mechanism screening. `node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs` exercise a dev server on port 5270. Production base: `/daily-app2/20261023-9/`. Individual deploy scripts are present; public publication uses the parent monorepo's `deploy/` build and root deploy command.

## Geometry and controls

All lengths in millimeters. Crest diameter 24–32; bellows height 24–36 (above a 3.2 mm base); radial wall 1.2–1.6; corrugation depth 1.2–1.8; integer folds 3–5; palm dimple depth 0–0.6. Diameter and height have continuous numeric inputs; fold count is integer-only. Reed (tall/slender five-fold), Lantern (balanced four-fold) and Stack (short/broad three-fold) have actual model thumbnails. Variations stay in these ranges. Undo/redo retains up to 35 debounced snapshots. JSON save/open includes a bounded portable local asset payload, not an imaginary restored import. Preview colours are not encoded in STL.

A radial annular polygon is revolved through 360° with 128 segments, then robustly unioned to the base/landing with Manifold WASM. The bore is open above the sealed base. Import geometry is unioned into a 2.4 mm landing floor, with 0.15 mm embedded overlap. The import safe radius is 6.5 mm, at least 11.5 mm from the bellows base. Intended flexing wall is never fused to decorations. Preview and binary STL export use identical final triangulation. Print layout applies XY translation only; both layouts rest at Z=0. This one-part object needs no multi-part ZIP. Complete-object and named-part STL actions both export the same single required solid.

## Local PNG/JPEG → geometry

File picker and drag/drop support actual PNG and JPEG, max 2 MB, 12 million pixels, 6,000 px per side. Content signatures and dimensions are checked before decoding. Decode to at most 500 px per side for a portable PNG payload, composited on white. A 20×20 square grid uses luminance `0.2126R + 0.7152G + 0.0722B`, with contain/cover fit and ±25% pan. Threshold raises samples darker than 1–254 to the chosen 0.4–3 mm depth; grayscale uses `depth*(1-luminance/255)`. A triangulated top plus perimeter walls and bottom produces a closed relief solid on a continuous 0.4 mm backing. Empty silhouettes are blocked. Transparent pixels become white. This is explicitly **2D-to-relief, not one-photo full-3D reconstruction**. Source image, conversion grid and final geometry are visible. Footprint 4–7 mm, Z rotation ±180°, XY placement ±1.5/±2 mm; invalid safe-zone placements block export. Changing pixel content, threshold, depth, crop, physical scale or placement changes the actual export.

## Local ASCII/binary STL → grip

STL has no units: source dimensions are shown and explicit millimeter confirmation gates integration. Up to 2 MB and 1,500 triangles; each source dimension 0.2–250 mm; coordinate magnitude ≤10,000. Accepted inputs must be one closed, outward-wound, positive-volume **convex solid with a broad flat bottom and no overhanging XY footprint**. Concave, hollow, disconnected, degenerate, self-intersecting, open/nonmanifold, backwards-wound and unsupported meshes are rejected with guidance. There is no automatic repair. Preflight welds vertices at 0.00001 mm, checks directed edge incidence/connectivity, triangle intersections, convexity, bottom hull and footprint. Original Z must be bed-facing. No arbitrary tilt control is offered because it would violate that contract.

XY scales proportionally into a 4–7 mm footprint; Z independently fits a 0.6–5 mm grip height. Minimum fitted XY span 1.2 mm. Rotate around Z, center/reset and place inside the protected well. The mesh is **solid-unioned into the real palm grip**, not merely displayed or re-exported unchanged. Source 3D and final previews remain separate. Replace/remove and return to built-in defaults are available. Saved JSON embeds normalized vertices/indices and reparses them on open.

## Privacy, dependencies and responsiveness

All personal files stay in browser memory; no upload, remote API, paid service or API key. Saving JSON explicitly saves the bounded source payload to the user's device. Only synthetic sample PNG/JPEG, ASCII wedge and binary gem fixtures are bundled (see `public/samples/README.txt`). Three.js, React, Vite and Manifold WASM are npm-bundled locally; Playwright is a development test dependency. Expensive import validation and CSG run in a module worker; bounded image grids/triangles prevent runaway work. Invalid edits, stale geometry and errors disable export, with reset/replacement available.

## Printing and calibration

Print upright as exported, open rim upward, full base on bed; no supports intended. Flanks stay ≥53.13° above bed. Normal wall thickness is ≥0.96 mm (radial wall divided by `sqrt(1+(2*depth/pitch)^2)`), with at least two calibrated extrusion paths. TPU 95A, 0.4 mm nozzle and 0.16 mm layers are starting values, not universal settings. PETG may feel quite stiff. Do not use brittle resin/filled material for flexure work. Print Reed as a full-size material/extrusion coupon first. Begin below 1 mm lateral rim motion; stop if whitening, layer separation, cracks or permanent set appears. No force, bend angle, travel or fatigue life is guaranteed. This is not a snap switch, pressure vessel or load-bearing component. No assembly or release is required; keep the bore uncapped. There is no running fit/clearance to calibrate because there are no separate sliding or captive bodies.

## Validation performed

`validate.mjs` parses binary exports independently, checks finite/nondegenerate triangles, normalized normals, edge incidence after 1e-5 mm welding, consistent winding, positive component volumes and exact millimeter bounds. It covers defaults, extrema, all 64 range-corner combinations, three presets and eight representative variations, plus both image conversions and ASCII/binary integrations across defaults/extrema/presets. Final per-edit worker validation checks manifold edges/winding and volume. Manifold handles solid Boolean topology, rather than exporting overlapping shells.

Mechanism screening verifies annular wall thickness, pitch/fold spacing, open bore radius, support flank angle, sealed base and import distance. CSG intersection probes verify an empty central bore and solid base on representative final models. A small-deflection geometric screen at 0/0.25/0.5/1 mm rim offsets checks estimated fold-to-fold space; **this is not finite-element analysis or proof of elastic strain, force or fatigue performance**. The browser tests perform actual PNG/JPEG and binary/ASCII imports, compare default/import/transformed export hashes, download and independently validate STL, exercise malformed files, missing units, unsupported meshes, empty images, transforms, reset, presets/variations, undo/redo and portable JSON round trips. Touch orbit/pinch and 320/390 px layouts are exercised. Generated reports record actual results; only passing runs count.

UX direction was informed by the public Vaseverse studio: model-first composition, warm colours, compact parameter rail and persistent export. No branding, source code, assets or text was copied from that site.
