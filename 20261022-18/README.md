# Twin Tide — counter-sliding rack studio

A local React + Vite parametric STL generator for a five-part physical fidget: two opposed involute racks share a sixteen-tooth pinion. Moving either thumb pad translates the other in reverse. It is not a spring-return device. This differs from the earlier single-rack generator by coupling two tactile inputs through opposite gear contacts.

## Run and export

`npm install`, `npm run dev`; `npm run predeploy` builds production. Per-app `npm run deploy` is configured, but the collection is published through the ROOT combined deploy flow. No CDN, API key, paid service or server is needed for modeling. Dependencies: React, Three.js/OrbitControls, Manifold WASM for robust solid booleans, fflate for ZIP, Vite; Playwright for browser checks. Production assets include local WASM and worker bundles.

The same final mesh buffers feed preview and binary STL export. Download STL exports a bed-flat, separated five-part layout, or select an individual part. ZIP includes all five STL parts and assembly notes. Preview colours are not stored in STL. Assembled motion is a rigid-body kinematic preview; export always contains printable rest geometry, never overlapping assembled parts. Scale grid is 10 mm, every dimension is in millimeters; rotation inputs are degrees.

## Parameters and presets

Pitch diameter 24–28 mm; rack half-stroke 5–8 mm (total stroke 10–16 mm per rack); tooth face height 4–6 mm; rack length 44–50 mm; running clearance 0.25–0.50 mm; palm groove depth 0–0.50 mm; lid-hole radial allowance −0.08 to −0.01 mm. Three presets vary size, stroke, face thickness and surface. Variations sample bounded valid ranges. Minimum base 3 mm, lid 2.5 mm, rack backing 8 mm. Sixteen involute teeth, nominal 20-degree pressure angle. Rear rails resist separating tooth force; end walls stop travel. The lid retains rack shoulders and wheel flange. Four interference seats hold the lid down. Fits require printer-specific calibration; they are not universal.

Undo/redo stores modeling snapshots. Save/Open JSON embeds the bounded normalized image or validated source STL mesh, never falsely restores a missing file. Source and final-model previews are shown independently. Remove import returns the built-in oval grip; reset transforms recenters it. Reset all restores defaults.

## Image workflow — PNG and JPEG

Picker on desktop/phone plus drop zone. A file is limited to 2 MB, ≤12 million pixels and ≤6,000 pixels per side, verified from content before decoding. Decoded images are normalized to ≤500 pixels per side for portable JSON. Fit/contain or fill/crop and ±25% pan resample into an exact 20×20 grayscale grid. Transparent pixels composite over white. Luminance is 0.2126R + 0.7152G + 0.0722B. In threshold mode a grid vertex is raised by depth when luminance is below threshold (1–254); in grayscale mode height is depth × (1−luminance/255). Depth is 0.4–3 mm.

A triangulated continuous height field with a 0.4 mm solid backing, closed boundary and bottom is robustly unioned 0.15 mm into the wheel hub. Threshold boundaries are piecewise-linear ramps between grid vertices, not infinitely sharp pixel walls. Empty relief is rejected. This is 2D-to-relief conversion, **not automatic reconstruction of a full 3D object from one photo**. Import footprint is 4–7 mm, rotation ±180°, offsets X ±1.5 mm/Y ±2 mm. A radial safe zone of 6.5 mm protects the hub edge and mechanisms. It rejects unsafe transforms rather than cropping geometry silently.

## STL workflow — ASCII and binary

STL has no unit metadata: explicitly confirm source coordinates are millimeters. Before integration the parser checks finite vertices, nonzero dimensions (0.2–250 mm per axis), ≤1,500 triangles, outward winding, nondegenerate faces, welded manifold edges, connectedness, positive volume, topology, convexity and a broad flat bottom. Unsupported concave/open/nonmanifold/disconnected/overhanging inputs are rejected with guidance; no arbitrary mesh repair is claimed. This intentionally bounded workflow accepts low-poly convex flat-bottom grip solids, not arbitrary scanned statues.

Source dimensions and format are displayed. Centered XY is proportionally scaled into a 4–7 mm footprint; independent Z scaling fits 0.6–5 mm grip height. Minimum fitted XY span 1.2 mm. Rotate around Z and position on the hub. A robust union makes the final wheel one connected solid; the import replaces the built-in tactile grip. The actual modified mesh is exported, not merely displayed or re-exported unchanged. Source triangle limits and safe-zone/transform checks precede solid modeling. Expensive parsing/generation runs in a worker, with progress state and disabled stale/invalid export.

## Local privacy and samples

Files are processed only in-browser, never uploaded or persisted automatically. A user-triggered design JSON explicitly includes the bounded source payload. `public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl` are synthetic geometric fixtures created for this collection; no personal images or meshes are bundled. Download or try any fixture inside Import.

## Printing and assembly

1. Print base floor-down; wheel, both racks and keeper lid flat on the bed. Intended support-free orientation. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls; no thin compliant elements or hardware.
2. Download the static-seat coupon and trial it on a base peg. Begin with 0.35 mm running gap, −0.03 mm radial lid-hole allowance. Test these on your machine/material. Do not assume all printers reproduce the same interference.
3. Place pinion on the base axle. Center both opposed racks and mesh them without force. Place lid over four pegs and press down evenly. It traps rack backing shoulders and wheel flange. Moving bodies stay separate.
4. If the lid lifts, or cannot seat, change seat allowance and reprint. Never operate with a loose keeper. Do not glue the moving interfaces. Lift outer corners gently to service. No hardware required.
5. Slide either thumb pad, or twist the center hub; reverse at end stops. Bed contacts, tooth friction, wear and retention require a real trial. Small loose pieces are not suitable for young children.

## Validation and limitations

`node validate.mjs` parses real binary STL exports, checks finite coordinates, nondegenerate triangles, unit normals, consistent outward winding, positive volume of each of five connected components, welded edge incidence exactly two, and millimeter bounds. It covers defaults, extrema, all 128 endpoint combinations, three presets, bounded variations and both import-derived outputs. Per-part exports are checked individually. Manifold modeling supplies robust unions without internal overlapping shells.

Mechanism checks cover gear contact ratio, rack engagement, rear support, keeper overlap, axial/radial gaps, disjoint print layouts and 33 sampled full-stroke positions via actual solid intersections, excluding only intended static lid press seats. Browser tests additionally exercise actual PNG/JPEG and ASCII/binary STL file imports, threshold/depth/pixel/scale/placement geometry changes, malformed and excessive files, empty relief, recovery, undo/redo, portable JSON round trips, preset/variation exports, individual parts/ZIP, drag/drop, preview-colour neutrality, exact preview/export signatures, touch orbit/pinch and 320/390-pixel phones. Production build receives separate WASM/worker/export checks.

Digital geometry checks are not a physical print test. No physical print was performed. They do not guarantee universal fit, tactile quality, wear life or bed adhesion; inspect in a slicer and calibrate before full assembly. Interaction travel is sampled, not a formal continuous collision proof. No fake print-time estimates or unverified ready-to-print badge.
