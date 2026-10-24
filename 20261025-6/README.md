# Meander Press

A browser-based parametric **one-piece TPU serpentine compression fidget**. Squeeze the outer bar toward the rigid palm: two mirrored zigzags bend into open side space. A central tongue limits intended axial compression. This is folding flexure motion, not the straight-leaf translation or torsion mechanisms elsewhere in the collection.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261025-6/`. App scripts retain `predeploy: npm run build` and `deploy: gh-pages -d dist`; public publication uses the parent combined-site flow, not the app deploy script.

## Studio

Read-only visual reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`. Concrete patterns: 374 px left editor, sticky compact brand, collapsible groups, paired mm sliders/numbers, raised tactile selected controls, lavender-grey desk, coral accents, white panels, large right-hand interactive Three.js canvas, saved dark theme, source and result previews, dimensions and nearby export. Phones show preview/export before the stacked editor. Fredoka/Rubik fonts are bundled locally via Fontsource, not a CDN.

Three actual model-thumbnail presets, bounded variations, three palm outlines, text and searchable marks converted to real relief, undo/redo, six local named saves and portable JSON including bounded image/mesh payloads. No external API, key, account, uploads, or server processing. Bundled synthetic fixtures are generated artwork and simple solids, not personal uploads. Preview colour is not STL colour.

## Dimensions and supported parameters

All geometry dimensions in millimeters. Palm diameter 22–28; spring span 40–48; narrow flexure width 1.2–1.8; root spacing allowance 0.25–0.55; floor/flexure height 3–5; dimple depth 0–0.6; compression stop gap 2–4. Full X/Y/Z shown for selected export. Imported features are confined to a radius 6.5 mm palm landing and cannot modify springs or stops. Stop travel is at most 10% of spring span; this is a geometric bound, **not** a verified safe fatigue strain.

## Image → geometry

PNG and JPEG content signatures/dimensions are inspected before decoding. Limit 2 MB, 12 megapixels, 6,000 px per side. Normalize to at most 500 px; sample a bounded 20×20 luminance grid. Transparent pixels composite onto chosen light/dark background. Choose fit/cover, crop shifts ±25%, light removal or dark inversion, threshold 1–254 or grayscale height, raised 0.4–3 mm relief or engraved 0.4–0.6 mm. A closed triangulated height surface with 0.4 mm backing is robustly unioned/subtracted into the palm well. Bright regions and holes remain low/unengraved on a continuous backing: **sampled 2D relief, not full 3D photo reconstruction or exact vector outline tracing**. Original source and checkerboard removed-region preview are displayed. Simple safe SVG shapes are locally rasterized at 256 px into this exact same pipeline; external resources/scripts/effects/text/references are rejected. Text/icons use a local canvas and the same pipeline. Empty conversions block exports.

## STL → integrated grip

File picker and drag/drop accept binary and ASCII `.stl` (40 bytes–2 MB, ≤1,500 triangles, each source axis 0.2–250 mm). Select Z/Y/−Z up before attaching; changing axis clears source and explicitly requests reattachment. Oriented dimensions and source preview are shown. **STL carries no units; explicit millimeter confirmation is required.** XY scales proportionally to a 4–7 mm footprint; Z separately fits a 0.6–5 mm grip height. Rotate ±180°, X ±1.5 mm and Y ±2 mm; reset/center, replace/remove, or return to built-ins.

Supported mesh contract is deliberately strict: one connected outward-wound closed convex solid with broad flat-bottom contact ≥25% of its footprint and no overhang beyond that contact. Open/nonmanifold, reversed, self-intersecting, disconnected, degenerate, overly slender, concave or hollow solids are rejected with guidance. **No convex-hull substitution, silent repair, or concavity loss.** Accepted original triangles are scaled and fused by Manifold CSG into the palm, never merely displayed or re-exported unchanged. Final connectivity must remain one solid. File assets are portable in bounded JSON; broken/missing payloads request reattachment rather than pretending they restored.

## Generation and export

Manifold WASM runs in a Web Worker. Bounded radial tessellation and image grids; 100 ms debounce, monotonically increasing request IDs, stale-result guards and separate local-file parse IDs. Each final result is checked for finite coordinates, nondegenerate triangles, positive volume and welded edge incidence/winding, including binary-export float positions. Export is disabled while invalid, busy, or a stale last-good mesh is displayed; that preview is explicitly labelled. STL export uses **the same exact current solid** as the viewer. Binary STL for the whole object or named solid; ZIP contains the STL and honest print/assembly notes, not a mislabeled 3MF. One body requires no assembled/exploded multi-part view; the undeformed and print views are identical geometry, not an elastic simulation.

## Printing / calibration

Print bed-flat in TPU 95A as an initial material, no supports/hardware/assembly. 0.4 mm nozzle, 0.2 mm layers; enough perimeters to fill narrow springs. Do not substitute brittle PLA. Use **Pocket Fold** as a full-size calibration coupon, initially compress less than 1 mm, check adhesion/delamination, and gradually tune settings. Clearance/feel depends on printer/material; no universal tolerances are claimed. The central tongue limits intended axial compression but cannot protect against twisting or overpull. Keep fingers out of slots; do not stretch or force. Release your squeeze for elastic return. Spring force, fatigue, creep and safe strain depend on filament/printing. **No physical print, fatigue test, or finite-element simulation has been performed.**

## Validation

`npm test`: independent binary STL parser checks every face, finite coordinates, nonzero area, stored normals, welded two-face edge incidence, neighboring winding, connected positive volume and expected dimensions. 132 default/preset/range-corner models plus 35 synthetic image/STL/engraved-derived cases. CSG difference checks prove imports stay out of mechanism zones. Stop face calculation and five rigid tongue/bar approach samples plus an overtravel collision check; fixed-length diagonal folding-envelope calculation is geometric guidance, not elastic simulation. Bounds and malformed/empty/unconfirmed inputs rejected.

`node browser-test.cjs` and `node feature-test.cjs` against local Vite port 5286 exercise actual file pickers/downloads, PNG/JPEG and ASCII/binary STL, pixel/threshold/depth/crop changes, transformed meshes, source replacement/removal/reset, invalid files, phone downloads and touch orbit/pinch, no horizontal overflow, presets/variations, text/icons/SVG/holes/background/engraving, undo/redo, named local storage, JSON asset roundtrips, theme, keyboard focus, collapsed controls, preview/export fingerprint identity, ZIP and per-solid STL. Reports distinguish geometry/interaction validation from physical testing.

## Dependencies

React + React DOM, Vite/React plugin, Three.js (MIT), manifold-3d (Apache-2.0), fflate (MIT), Fontsource Fredoka and Rubik (SIL OFL), gh-pages; Playwright for local validation. All browser assets bundled locally.
