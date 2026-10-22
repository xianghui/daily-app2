# Reciprocal Reach — inversion-cell fidget studio

A local React/Vite/Three.js editor for a hardware-free six-link Peaucellier inversion cell. Hold the palm tab and draw inner joint C inward to send outer joint D outward. Two long arms OA/OB of radius R support the equal-sided diamond A-C-B-D. It enforces OC × OD = R² − r² while the common ray can sway independently. This reciprocal interaction differs from a linear slider, a pantograph and a four-bar rocker. No additional circular guide is fitted: this is a two-freedom inversion cell, not an exact straight-line tracer. Six moving links, one base and five caps make twelve printable parts.

## Run and export

`npm install`, `npm run dev`, `npm run predeploy`, `npm test`.

One primary binary STL download exports a bed-flat, nonintersecting layout, independent of the assembled preview pose. Select individual parts or ZIP all twelve with assembly notes. The combined strip may exceed a printer bed; arrange individual ZIP parts in your slicer. The same worker-generated mesh feeds preview and export. STL stores millimeter geometry only, never preview colours. Presets use actual generated 3D thumbnails. Undo/redo preserves modeling snapshots; Save/Open JSON includes bounded portable imports. Only explicitly saved files persist; no upload or external generation service.

## Parameters (millimeters unless noted)

- Long beam radius R: 30–34.
- Diamond side r: 20–22.
- Thumb ring radius 4.8–6; palm tab radius 7–9.
- Edge groove depth 0–0.5; solid arm thickness 3; arm end radius 4.8.
- Radial/axial running clearance 0.25–0.50; socket radial allowance −0.08 to −0.01.
- Six link planes are spaced by 5 + clearance, leaving room above the 3 mm link for shoulders and caps.
- Preview normalized OC = 0.58–0.72 × √(R²−r²); common ray heading ±12°. No hard stops; do not force outside the illustrated range.
- With default R=32, r=21, the central inversion constant is 583 mm². Moving OC from 14.00 to 17.38 mm moves OD from 41.63 to 33.54 mm. The two thumb joints move in opposite radial directions, with a changing mechanical ratio.

All numeric inputs are bounded and impossible/nonfinite settings block export. Variations stay within supported ranges. Export dimensions are measured from final geometry, not estimates.

## Image import

PNG/JPEG content is checked before decode: maximum 2 MB, 12 MP, 6,000 pixels per side. Transparent pixels composite over white. The portable preview is normalized to at most 500 pixels on either side; the same normalized source is used before and after save/open. Fit/cover plus ±25% crop shifts feed a 20×20 luminance grid (0.2126R+0.7152G+0.0722B). Threshold 1–254 produces stepped raised silhouette heights; grayscale mode maps darkness to height. Heights are triangulated over a continuous 0.4 mm backing, closed with boundary walls and a bottom, then robustly unioned into the stationary tab with 0.15 mm overlap. Relief depth 0.4–3 mm. This is **2D-to-relief**, not full 3D reconstruction from one photo. All-white/empty relief blocks export.

## STL import

ASCII and binary STL are parsed locally in a worker. Explicitly confirm millimeters: STL contains no unit metadata. Limits: 2 MB, 1,500 triangles, each axis 0.2–250 mm, finite bounded coordinates. Input must be one connected, outward-wound, watertight, convex solid with a broad flat Z-down bottom, no cavities, branches, overhangs or self-intersections. The bottom must occupy at least 25% of its XY bounding rectangle and contain every vertex's XY projection. This deliberately restricted contract gives predictable support-free grip integration; unsupported meshes are rejected with guidance, not silently repaired.

Source dimensions and source 3D view remain available. Footprint 4–7 mm scales XY proportionally; grip height 0.6–5 mm scales Z independently. Rotate around Z ±180°, place X ±1.5, Y ±2, or center/reset. Z-down must be prepared in the original modeler. Transformed XY dimensions must be at least 1.2 mm, and every point must stay in a 6.5 mm circular safe zone. Robust Manifold union must produce exactly one connected solid base; otherwise export is blocked. Imports replace the default oval grip and physically alter the palm tab, never bearings or links. Replace/remove/reset are available. Saved JSON includes the validated low-poly source; opening it re-runs STL checks.

## Assembly and printing

Print twelve parts with broad faces down, pins upward, without intended supports. Start with PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. No bearings, magnets, screws or other hardware. Export a socket coupon first and test on a Ø3.6 mm shoulder peg. Start at 0.35 mm bearing clearance and −0.03 mm radial socket allowance; fits depend on machine, material and slicer. Caps have 0.02–0.16 mm diametral interference and must seat on shoulders, never squeeze moving faces. Adjust and reprint rather than force a tight cap.

1. Fit upper-radius onto the base axle O, then lower-radius above it; seat origin-cap.
2. Fit upper-inner onto A (upper-radius end), then lower-inner onto B (lower-radius end). Their other ends meet at C; seat inner-cap.
3. Fit upper-outer onto A above upper-inner, then lower-outer onto B above lower-inner. Join their ends at D; seat outer-cap. Seat upper-cap and lower-cap at A/B.
4. Check five free axes and gentle cap pull retention. Hold the palm tab, draw C inward and feel D move outward. Sway the common ray only in the demonstrated ±12° region. Do not fold flat or force beyond the extension window. Caps remove for maintenance.

The longest printed axles are slender upright features. Print slowly with sufficient cooling and handle gently. Support the underside of a pin while seating its cap rather than pushing sideways. The studio does not simulate material strength or guarantee friction/retention. There are no compliant elements and no hardware.

The exported print layout is separate from assembly. Pins stand vertically; no bridges over cavities are required. There are no compliant springs. Small pieces are unsuitable for young children.

## Validation and limitations

`validate.mjs` independently parses exported binary STL, checks finite coordinates/normals, nondegenerate triangles, matching dimensions, bed Z=0, welded edge incidence exactly two, opposite edge winding, connected components and positive enclosed volume. All intended parts are checked separately. The solid kernel performs CSG rather than exporting intersecting visual shells.

Checks include default/minimum/maximum, all 128 bound combinations, three presets and deterministic variations; image and both STL sample outputs; analytic link closure, the reciprocal inversion relation, retention and clearances; and sampled real solid intersections over the two-angle motion window (intended cap/peg press fits excluded). Separate print-layout bounding boxes are checked for overlap. These are digital geometry/mechanism checks, **not physical print tests**. Friction, wear, press-fit retention and tactile quality still require a real calibration print.

Browser scripts exercise real pickers/downloads, PNG and JPEG changes, ASCII/binary STL transforms and confirmation, malformed/open/nonmanifold/excessive files, empty silhouettes, reset/remove, presets/variations, exact preview/export signatures, portable JSON and undo/redo, ZIP/parts/coupon, phone touch orbit/pinch and 320/390 pixel layouts. Reports and screenshots are included after running. Worker bounds keep generation responsive; unsupported input is rejected before heavy solid work.

## Dependencies, fixtures and design reference

React + Vite; locally bundled Three.js/OrbitControls, manifold-3d WASM and fflate ZIP. No CDN, API key, paid service or external file processing. `public/samples` contains original synthetic PNG/JPEG marks and low-poly ASCII wedge / binary gem fixtures generated for this project family, free to reuse. No personal uploads are committed. Warm model-first studio composition is inspired by the UX reference https://vaseverse.org/; no branding, assets, text or source code is copied. Editor infrastructure is shared with earlier Daily Object Lab studios; this inversion-cell mechanism and geometry are new.

## Run results

- 142 parameter cases and 24 image/STL integration cases passed mesh, dimension, component and analytic mechanism checks.
- 16 extreme R/r/clearance/thumb-radius combinations passed 49-pose solid collision sampling each; intended retaining-cap interference is excluded explicitly.
- Browser validation downloaded and independently parsed 34 actual STL files, rejected 10 malformed/excessive/unsupported fixtures, and verified 320/390 px layouts plus touch orbit and pinch.
- Three presets, four browser Variations, twelve individual ZIP parts, fit coupon, undo/redo, portable PNG/JPEG/ASCII/binary saved designs, and eight randomized image save/open cycles passed.
- Production worker/WASM, a 1001×701 synthetic image round trip, and image-depth edits passed on a phone viewport.
- Gallery inline scripts compiled; all 75 previous entries were retained, with this app added exactly once as the newest STL Generator.

See `*-validation.json`, `mechanism-corners.json` and desktop/mobile screenshots. These measurements concern digital geometry and browser behavior only, never an unperformed physical print.
