# Pinch Passage

A browser-based parametric **linear squeeze-brake fidget** studio. Slide a rigid plunger through a flexible TPU collar, pinch its round tabs to add friction, release to glide. This is not a rotary brake, air piston, locking clamp or spring-return toy. Three separately printable parts: palm-collar-TPU, plunger-PLA and retaining-cap-PLA. No hardware.

## Run

`npm install`, `npm run dev`; `npm run predeploy` builds the locally bundled React/Vite application. Root monorepo publishing remains authoritative. `npm test` runs mesh and mechanism checks; `node browser-test.cjs`, `node extra-browser.cjs`, and `node mobile-sheet.cjs` use Playwright with the dev server on 5280. No API keys, paid services, remote generation or CDN modules.

## Studio

Model-first composition with a large orbit/zoom preview, millimeter grid, fit/reset, compact desktop parameter rail, phone collapsible controls and fixed export area. Shape / Mechanism / Surface / Import / Print tabs, three real-model preset thumbnails, bounded variations, active-part picking and preview colours. STL contains geometry only, not materials or colour. Save/open JSON includes bounded portable source payloads; undo/redo records modeling edits. Assembled view is nominal rigid travel only; export always uses separate bed-flat parts from exactly the same meshes. Single part and all-part binary STL, plus ZIP containing three STL files and assembly guide.

Reference: https://vaseverse.org/ (visited 2026-10-25). Its directly observed text describes presets, variations, colour suggestions, grouped editing, live preview and per-part/ZIP downloads. Warm ivory/clay styling and model-first rail composition implement the requested original studio direction. No reference branding, artwork, text or source copied.

## Parameters (millimeters)

| Parameter | Range |
|---|---|
| Palm diameter | 22–28 |
| Plunger shaft length | 22–30 |
| TPU collar wall | 1.6–2.4 |
| Radial running clearance | 0.25–0.50 |
| Collar height | 4–8 |
| Palm dimple depth | 0–0.6 |
| Cap radial seat interference | 0.01–0.05 |

The plunger radius is 4 mm. Both retaining flanges have 6 mm radius. Axial travel = shaft length − collar height − twice running clearance. Flange overlap ≥1.5 mm; cap socket engagement 2.4 mm with 1.2 mm roof. The collar is retained only while its friction cap remains seated. No universal printer tolerance, permanent capture or holding force is claimed. Import well has 2.2 mm floor and 6.5 mm safe radius, at least 14 mm from the pinch region.

## Image import: real 2D-to-relief

File picker on desktop/phone and single-file drag/drop. Actual PNG and JPEG validated by content and dimensions, at most 2 MB, 12 megapixels and 6,000 pixels per side. Images stay local. Synthetic `mark.png` and `waves.jpg` samples are bundled, authored for this collection, with no third-party assets.

The browser composites alpha onto white, normalizes the portable preview to at most 500 pixels per side, then samples a **20 × 20 grayscale grid**. Luminance = 0.2126 R + 0.7152 G + 0.0722 B. Fit or fill/crop plus ±25% X/Y crop shift controls. Threshold 1–254 maps darker pixels to selected depth; grayscale relief maps darkness linearly to height. Depth 0.4–3 mm. A triangulated continuous height field with 0.4 mm backing, closed sides and bottom is robustly unioned 0.15 mm into the palm floor. Threshold outlines interpolate across grid triangles; this is not a vector contour tracer or full 3D reconstruction from a photo. Empty silhouettes/white relief are rejected. Source and exact sampled conversion previews are shown.

## STL import: explicitly bounded integration

ASCII and binary STL, max 2 MB / 1,500 triangles / 0.2–250 mm on each axis. User must explicitly confirm source coordinates represent millimeters: STL has no unit metadata. Dimensions and source mesh preview are shown. Imported XY shape is proportionally fitted to footprint 4–7 mm; independent Z height 0.6–5 mm; rotation −180–180°, placement X ±1.5 mm / Y ±2 mm. Projected narrow axis must remain ≥1.2 mm. Controls support replace/remove, center/reset and return to defaults.

Only one convex, outward-wound, connected watertight solid with a broad flat Z-min base (≥25% of bounding footprint), no overhang outside that base, is supported. Meshes with concavity, unsupported topology, self intersections, cavities, open/nonmanifold edges, degenerate faces, invalid coordinates, reversed winding, excessive bounds or unsupported complexity are rejected with actionable feedback. No repair is claimed. Integration must remain in the safe well and result in one connected manifold palm solid. Imported meshes are actually CSG-unioned, not merely displayed, re-exported unchanged or left as interpenetrating shells. Bundled `wedge-ascii.stl` and `gem-binary.stl` are synthetic fixtures. Import changes only palm geometry, never the shaft, bore or retaining cap.

## Privacy, responsiveness, dependencies

All file processing is local. No uploads, APIs, analytics or persistence of private input files in the repository. Downloaded JSON deliberately embeds normalized image or bounded parsed mesh payload; unsupported/missing payloads cause explicit errors, never pretend restoration. Manifold-3D WASM performs solid operations; Three.js previews the exact output; fflate packages ZIP; React/Vite provide UI and bundled build. A worker performs STL parsing, CSG and final validation, with debounced edits and stale-result suppression. Fixed image grid and triangle limits bound heavy work. Export is gated while file checks, conversion or generation are pending, and on any validation error.

## Printing and assembly

Print collar in **TPU 95A**; plunger/cap in **PLA or PETG**, 0.4 mm nozzle, 0.2 mm layers and at least three perimeters. Assign materials yourself; STL does not store them. All parts have flat bed faces, bores/sockets point upward; no supports intended. Plunger prints vertically on its flange. First print cap and plunger as full-size fit coupons; use Feather Draw collar to calibrate squeeze feel. Begin with 0.01 mm cap interference and 0.50 mm running clearance. Deburr gently, insert plunger from below, invert and friction-seat cap on its narrow stem. Never force a cap or jammed shaft. Hold palm, slide slowly and pinch collar gently at tabs; release for lower drag. Stop if TPU splits or layers whiten. Remove cap deliberately for disassembly. Small parts, not for children.

## Verification scope

`validate.mjs` independently parses exported binary STL and checks nonempty finite nondegenerate triangles, normals, positive component volumes, consistent winding, millimeter bounds and welded edge incidence of exactly two, plus component counts. All 128 parameter range corners, default/min/max, presets and representative variations are exercised. Image and both STL-derived outputs undergo the same checks. CSG intersection tests verify print-layout separation, cap-seat interference as the sole intentional assembled overlap, and no nominal rigid collar/plunger collision through sampled axial positions. Independent continuous axial inequalities verify full stroke clearance, flange overlap and isolation of imports. The worker preflights every new final part, including float32 export layout.

Real browser tests exercise PNG/JPEG/ASCII/binary file pickers, changed content and conversion settings, scale/placement, actual downloads against preview fingerprints and regenerated saved state, invalid files, unsafe transforms, replace/remove/reset, undo/redo, portable save/open, individual/ZIP downloads, all presets/variations, touch orbit/pinch and phone export accessibility. Reports are kept alongside this README. These are geometry/nominal-kinematic checks, **not physical print testing**. TPU pinch deformation, contact force, friction, cap pullout, wear and cycle life have not been physically measured or simulated. No guaranteed locking action or tested performance is claimed.
