# Threshold Bead

A local browser parametric STL studio for a two-part **elastic push-through fidget**: press a tapered dogbone shuttle through a yielding TPU eyelet, then reverse. Unlike the existing captive slides, hinges, springs and inertial toys, repeated passage deliberately stretches the aperture over an oversize bulb. The waist is clear at rest. No permanent latch: pulling/pushing through also removes it.

React + Vite; Three.js preview; Manifold WASM solid operations; fflate ZIP. Dependencies bundled locally, no external generation services, APIs, keys, CDN, uploads or personal fixtures. Model-first original ivory/clay studio, right rail, phone collapsible controls, orbit/pinch/zoom/fit, three actual model thumbnails, variations, undo/redo, JSON save/open, separate print layout, two-part/individual STL and ZIP exports. Design-direction reference: https://vaseverse.org/ (browser editor composition, not copied branding, assets or code). Shared local import/editor infrastructure is reused; mechanism geometry and checks are new.

## Dimensions and ranges · all mm

- Eyelet bore diameter: 10–14; radial wall: 2–3; eyelet thickness: 1.2–2.
- Bulb **diametral interference**: 0.6–1.4; required radial expansion: half that value. Nominal circumferential expansion 4.3–14%, a geometric quantity, not a verified strain/force prediction.
- Waist radial running clearance: 0.25–0.50 per side. Same axial clearance at each shoulder in rest position.
- Integral palm pad thickness: 2.4; recessed floor: 1.6. Palm dimples: 0–0.6. Both preserve wall thickness.
- Symmetric shuttle has 45° expanding frustums and flat bed-facing base. Eyelet/bridge bed-flat. Separately printable, not print-in-place.
- Import safe radius: 6.5, at least 21.5 from the eyelet exterior. No imports on the flexing ring or shuttle interface.

Controls are numeric inputs paired with sliders. Out-of-range, empty or nonfinite settings pause export. Defaults and every parameter corner have computational mesh checks. Three presets change bore, wall, thickness, feel and surface; variations stay within bounds.

## Image import

PNG/JPEG file picker on desktop/phone plus single-file drag/drop. Synthetic samples `mark.png` and `waves.jpg` bundled (studio-family generated, no third-party assets).

Files ≤2 MiB, images ≤12 MP and ≤6000 per side, signature/header checked before decoding. Normalize locally to ≤500 px side, alpha composited over white. Fit/contain or cover/crop and ±25% XY pan; sample into a **20×20 luminance height grid**. Threshold 1–254 produces two-height raised silhouette; grayscale maps darkness to height. Relief depth 0.4–3 over a continuous 0.4 backing. Triangulated top, sidewalls and bottom form a closed solid, CSG unioned 0.15 into the palm floor. White/empty conversions rejected. This is 2D-to-relief, **not full 3D reconstruction from one photograph**. Source image and exact conversion preview shown.

Footprint 4–7, rotation ±180° about Z, X offset ±1.5 and Y ±2. Placements exceeding the safe radius are rejected. Remove/replace/reset are real geometry operations; imports replace the default raised oval.

## STL import / supported subset

ASCII and binary `.stl`, ≤2 MiB / 1500 triangles; each axis 0.2–250 in source coordinates. Explicit millimeter checkbox required because STL has no unit metadata. Source dimensions/triangle count/format and interactive source preview shown. Meshes are centered to XY footprint 4–7; independent Z fit 0.6–5; Z rotation/XY placement available; reset re-centers transforms. Fitted XY minimum span 1.2.

**Only one connected convex outward-wound closed solid with a broad flat Z-down bottom** is supported. Bottom must occupy ≥25% footprint and contain all XY projections. Reject concave, hollow, overhanging, open/nonmanifold, disconnected or inverted solids, excessive counts, nonfinite coordinates, degenerate triangles, invalid dimensions, self-intersections and unsupported transforms with actionable feedback. No arbitrary mesh repair is claimed. Synthetic `wedge-ascii.stl` and `gem-binary.stl` bundled. Source geometry is robustly unioned into the isolated palm pad, not merely displayed/re-exported. Integration must form exactly one solid; final meshes undergo preflight before export.

## Export, privacy and settings

Binary geometry-only STL uses the **same final worker meshes and parameters** as preview. Export includes separated printable eyelet and shuttle; individual STL downloads and ZIP with both parts plus assembly notes. Resting assembled preview is not a deformation simulation and not export placement. Dimensions show selected export bounds in mm. Preview colours are not in STL.

Files processed entirely locally in a web worker; heavy topology/CSG work bounded. Save JSON explicitly embeds bounded normalized image/pixels or verified mesh arrays. Open revalidates payloads and restores real geometry; missing/invalid image payload requires reattachment, never pretends restoration. Design files ≤2 MiB. Modeling history bounded to 35 actions. Errors recover by replacing/removing import or resetting settings. No personal input files stored in repository.

## Printing / assembly / calibration

**TPU 95A eyelet required. Do not use a rigid PLA eyelet.** Shuttle: PLA/PETG for firmer contact, TPU 95A hardware-free softer alternative. No bearings, screws, magnets or other hardware. Both parts flat Z=0 down as exported; support-free expanding slopes ≤45°. Start 0.4 nozzle, 0.2 layers; inspect thin-wall paths and fill walls continuously.

Print **Gentle Gate** first as full-size material/fit calibration, lowest interference. Insert one bulb slowly through flexible ring. Hold palm pad and gently push/reverse. Stop if force, permanent distortion or layer separation occurs. Clearances/interference depend on printer and material, not universal. No force, click, fatigue, retention or elasticity guarantee. This is an experimental push-through resistance toy, not a safety/load-bearing clasp; small pieces can be removed, keep away from children.

**No physical print or material tests performed.** Computational rest clearance and designed interference do not prove successful elastic passage or return. Preview does not deform or simulate forces.

## Reproduce checks

`npm install`, `npm test`, `npm run predeploy`.

`npm run dev -- --host 127.0.0.1 --port 5270`, then `node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs`.

`validate.mjs` covers defaults, min/max, all 64 parameter corners, presets, eight variations (78 parameter cases), plus 24 image/STL-derived outputs. Independent binary STL parser checks nonempty finite/nondegenerate faces, normalized outward normals, welded edges exactly twice with opposing winding, positive volume of each connected component, expected mm bounds and bed-facing Z=0. Checks each part and combined print layout. Mechanism tests include three small rigid resting strokes, no rest collisions, true bulb interference during passage, radial/axial clearances, wall/thickness limits, 45° slopes, no export-layout collisions and CSG proof that imports cannot alter eyelet. Elastic deformed passage intentionally is not asserted collision-free.

Browser tests actually select PNG/JPEG and ASCII/binary STL files, download/parse generated meshes, compare pixel/threshold/relief/scale/placement changes against defaults and preview fingerprints, test malformed/oversized/open/nonmanifold/concave inputs, recoverable invalid states, remove/replace/reset, portable save/open, presets/variations, undo/redo, ZIP/individual exports, colour neutrality, drag/drop and 320/390px touch orbit/pinch/mobile accessibility. JSON reports record observed results. Gallery scripts compile and preservation/render tests precede root combined deployment. Per-app gh-pages scripts remain required but publishing uses only root `deploy/`.
