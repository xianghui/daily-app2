# Echo Reach — pantograph fidget studio

A local React/Vite/Three.js editor for a hardware-free 2:1 pantograph. Hold the stationary palm tab, guide the inner capped joint C, and feel the outer thumb tip T echo twice its displacement. This is a freely guided two-input linkage, not a powered actuator. Four links occupy three vertical layers, with five printed retaining caps and a fixed base: ten printable parts. Unlike a five-bar tracer, this geometry has a parallelogram with extended input/output beams and an exact homothetic relationship T=2C.

## Run and export

`npm install`, `npm run dev`, `npm run predeploy`, `npm test`.

One primary binary STL download exports a bed-flat, nonintersecting layout, independent of the assembled preview pose. Select individual parts or ZIP all ten with assembly notes. The combined strip may exceed a printer bed; arrange individual ZIP parts in your slicer. The same worker-generated mesh feeds preview and export. STL stores millimeter geometry only, never preview colours. Presets use actual generated 3D thumbnails. Undo/redo preserves modeling snapshots; Save/Open JSON includes bounded portable imports. Only explicitly saved files persist; no upload or external generation service.

## Parameters (millimeters unless noted)

- Half input beam 20–26; full beam 40–52.
- Half output beam 18–24; full beam 36–48.
- Outer thumb radius 4.8–6; palm tab radius 7–9.
- Edge groove depth 0–0.5; solid arm thickness 3; arm radius 4.8.
- Radial/axial running clearance 0.25–0.50; socket radial allowance −0.08 to −0.01.
- Preview input angle 20–40°; output angle 95–125°, both measured from the fixed base X axis. Relative link angle stays 55–105°, away from straight singularities. No hard stops; do not force outside the illustrated range.
- Exact displacement ratio 2:1. Guided rather than freely spinning interaction.

All numeric inputs are bounded and impossible/nonfinite settings block export. Variations stay within supported ranges. Export dimensions are measured from final geometry, not estimates.

## Image import

PNG/JPEG content is checked before decode: maximum 2 MB, 12 MP, 6,000 pixels per side. Transparent pixels composite over white. The portable preview is normalized to at most 500 pixels on either side; the same normalized source is used before and after save/open. Fit/cover plus ±25% crop shifts feed a 20×20 luminance grid (0.2126R+0.7152G+0.0722B). Threshold 1–254 produces stepped raised silhouette heights; grayscale mode maps darkness to height. Heights are triangulated over a continuous 0.4 mm backing, closed with boundary walls and a bottom, then robustly unioned into the stationary tab with 0.15 mm overlap. Relief depth 0.4–3 mm. This is **2D-to-relief**, not full 3D reconstruction from one photo. All-white/empty relief blocks export.

## STL import

ASCII and binary STL are parsed locally in a worker. Explicitly confirm millimeters: STL contains no unit metadata. Limits: 2 MB, 1,500 triangles, each axis 0.2–250 mm, finite bounded coordinates. Input must be one connected, outward-wound, watertight, convex solid with a broad flat Z-down bottom, no cavities, branches, overhangs or self-intersections. The bottom must occupy at least 25% of its XY bounding rectangle and contain every vertex's XY projection. This deliberately restricted contract gives predictable support-free grip integration; unsupported meshes are rejected with guidance, not silently repaired.

Source dimensions and source 3D view remain available. Footprint 4–7 mm scales XY proportionally; grip height 0.6–5 mm scales Z independently. Rotate around Z ±180°, place X ±1.5, Y ±2, or center/reset. Z-down must be prepared in the original modeler. Transformed XY dimensions must be at least 1.2 mm, and every point must stay in a 6.5 mm circular safe zone. Robust Manifold union must produce exactly one connected solid base; otherwise export is blocked. Imports replace the default oval grip and physically alter the palm tab, never bearings or links. Replace/remove/reset are available. Saved JSON includes the validated low-poly source; opening it re-runs STL checks.

## Assembly and printing

Print ten parts with broad faces down, pins upward, without intended supports. Start with PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. No bearings, magnets, screws or other hardware. Export a socket coupon first and test on a Ø3.6 mm shoulder peg. Start at 0.35 mm bearing clearance and −0.03 mm radial socket allowance; fits depend on machine, material and slicer. Caps have 0.02–0.16 mm diametral interference and must seat on shoulders, never squeeze moving faces. Adjust and reprint rather than force a tight cap.

1. Put input-beam onto ground O; seat ground-cap.
2. Put inner-guide onto input-beam midpoint D and output-beam onto its outer end A; seat inner-cap and outer-cap.
3. Put cross-link across inner-guide end C and output-beam midpoint B; seat guide-cap and cross-cap.
4. Check all five rotating joints and gentle cap pull retention. Hold the palm tab, guide C, and follow the doubled outer tip T. Avoid pinch points and straight configurations. Caps can be removed for maintenance.

The exported print layout is separate from assembly. Pins stand vertically; no bridges over cavities are required. There are no compliant springs. Small pieces are unsuitable for young children.

## Validation and limitations

`validate.mjs` independently parses exported binary STL, checks finite coordinates/normals, nondegenerate triangles, matching dimensions, bed Z=0, welded edge incidence exactly two, opposite edge winding, connected components and positive enclosed volume. All intended parts are checked separately. The solid kernel performs CSG rather than exporting intersecting visual shells.

Checks include default/minimum/maximum, all 128 bound combinations, three presets and deterministic variations; image and both STL sample outputs; analytic link closure, exact 2:1 echo, retention and clearances; and sampled real solid intersections over the two-angle motion window (intended cap/peg press fits excluded). Separate print-layout bounding boxes are checked for overlap. These are digital geometry/mechanism checks, **not physical print tests**. Friction, wear, press-fit retention and tactile quality still require a real calibration print.

Browser scripts exercise real pickers/downloads, PNG and JPEG changes, ASCII/binary STL transforms and confirmation, malformed/open/nonmanifold/excessive files, empty silhouettes, reset/remove, presets/variations, exact preview/export signatures, portable JSON and undo/redo, ZIP/parts/coupon, phone touch orbit/pinch and 320/390 pixel layouts. Reports and screenshots are included after running. Worker bounds keep generation responsive; unsupported input is rejected before heavy solid work.

## Dependencies, fixtures and design reference

React + Vite; locally bundled Three.js/OrbitControls, manifold-3d WASM and fflate ZIP. No CDN, API key, paid service or external file processing. `public/samples` contains original synthetic PNG/JPEG marks and low-poly ASCII wedge / binary gem fixtures generated for this project family, free to reuse. No personal uploads are committed. Warm model-first studio composition is inspired by the UX reference https://vaseverse.org/; no branding, assets, text or source code is copied. Editor infrastructure is shared with earlier Daily Object Lab studios; this pantograph mechanism and geometry are new.
