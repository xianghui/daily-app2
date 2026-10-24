# Ballast Sway

A local browser studio for a **rolling-ballast saddle seesaw**. Tip a beam to transfer its loose cylindrical weight, then let gravity reinforce either tilted dwell. A curved saddle sits over a fixed fulcrum; integral pads bound its tilt. This is a physical fidget generator, not a game. Both moving pieces are deliberately **removable, not captive**: lift them vertically to release.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`. React + Vite; base path `/daily-app2/20261025-5/`. Per-app deploy scripts are included as requested; the public combined site is published only through the **root** repository `npm run predeploy` / `npm run deploy` flow.

## Solid modeling and movement

Manifold WASM runs in a dedicated Web Worker. A supported rounded fulcrum, two guide walls and two end-stop pads are solid-unioned into the palm tray. The rocking trough is a 12 mm extrusion of a beam profile with a subtracted open circular saddle and two solid end walls. It prints on its flat **side**, then rotates 90° for assembly. The cylindrical ballast prints on a flat circular end and turns sideways for assembly. No visual mesh overlaps masquerade as unions; all three intended solids stay separate.

Nominal tilt limits are ±12°. Side guides constrain axial drift; end walls limit the roller's longitudinal travel. The saddle has per-side running clearance plus a 0.04 mm polygon allowance. The preview holds its center at the nominal geometric clearance, slightly off contact, and holds the roller 0.2 mm off the track. **Poses are estimated, not a force/friction simulation.** In use these parts settle onto the actual surfaces. Beam tilt and ballast-position controls are independent explanatory poses, not a claim that the roller can rest at every point on an inclined track.

Checks include 25 combinations of beam tilt and ballast position with all three solid pairs, end-stop overtravel at ±14°, vertical release, print-plate nonintersection and final-solid mass-center integration. Uniform-density, solid-volume gravity moments are verified to reinforce each end dwell. Real infill, layer friction and materials can change the feel; no automatic oscillation, spring return, universal fit or click is promised. A see-through palm view reveals the saddle/fulcrum fit without altering export.

## Parameters (all physical lengths in millimeters)

| Setting | Range |
|---|---|
| Palm diameter | 22–28 |
| Rocker beam length | 40–48 |
| Rolling ballast diameter | 10–14 |
| Running/socket clearance, **per side** | 0.25–0.55 |
| Solid floor thickness | 3–5 |
| Palm dimple depth | 0–0.6 |
| Fulcrum radius | 3.6–4.4 |

Saddle ceiling ≥1.41 mm, side walls 2 mm, beam underside 2 mm, integral tilt pads ≥1.6 mm tall and roller axial running gap ≥1.25 mm/side. The rocker beam top is radius + 2 mm above its saddle center. All dimensions and impossible transformations are validated before export.

Round, hexagonal and oval palm silhouettes; Balance Pause, Pocket Teeter and Heavy Dwell presets have real model thumbnails. Bounded variations, text, searchable bundled marks, undo/redo, named local designs, saved dark/light theme and portable JSON are included. Preview color is not STL color.

## Image import: actual geometry

PNG and JPEG content is inspected before decoding: max 2 MB, 12 megapixels, 6,000 px per side. Images normalize locally to at most 500 px per side. Simple safe SVG fills/shapes are rasterized at 256 px; no external resources, scripts, fonts or effects; max 2,000 elements. Synthetic samples in `public/samples/` include PNG, JPEG and an SVG ring.

Fit/cover, crop shift ±25%, light/dark background removal, threshold 1–254 and grayscale modes feed an exact **20 × 20 luminance height field**. Pixel heights are triangulated over a continuous 0.4 mm backing, then solid-unioned (raised) or boolean-subtracted (engraved) in the palm's recessed safe well. Bright holes stay at backing height; they are not filled with foreground and are visible in the checkerboard cutout. This is sampled **2D-to-relief**, not exact vector outline tracing and **not full 3D reconstruction from one photograph**. Resolution is bounded intentionally. Raised depth 0.4–3 mm; engraved depth 0.4–0.6 mm preserves the floor. Empty marks are rejected.

The original image and exact sampled cutout appear together. Text and icons use the same local bitmap-to-solid workflow. All of these alter the downloadable STL, not a texture. Footprint 4–7 mm, Z rotation ±180°, X placement ±1.5 mm and Y ±2 mm are checked against the circular radius-6.5 mm safe zone, isolated from the mechanism. Invalid combinations block export rather than clipping art silently.

## STL import: explicitly bounded grip integration

Binary and ASCII STL, 40 bytes–2 MB, at most 1,500 triangles, 0.2–250 mm per source axis. Source dimensions, triangle count and encoding are shown. **STL has no unit metadata; explicit millimeter confirmation is mandatory.** Choose Z-up, Y-up (+90° X), or −Z-up before attaching; changing this requests reattachment rather than pretending the source was transformed.

The parser welds equal vertices at 0.00001 mm, checks finite coordinates, nondegenerate faces, exactly two edge incidents with opposing direction, connectedness, positive signed volume, triangle self-intersections, and a broad flat-bottom support-free footprint. This release supports **one convex closed grip with no overhang beyond its flat bottom**. Concave meshes, cavities, disconnected shells, open/nonmanifold meshes and unsupported bed contact are rejected with guidance. **No convex-hull replacement and no claimed automatic repair.** Use a low-poly flat-bottom grip, or prepare/reorient it in a modeler first.

Original mesh geometry is preserved under proportional XY fitting to 4–7 mm, independent Z height 0.6–5 mm, rotation and placement. It overlaps the isolated palm well by 0.15 mm and is boolean-unioned into one verified connected solid. The source is shown separately and as part of the final result; reset, replace and remove restore built-in defaults. Imports cannot touch the fulcrum, trough, stops, guides or rolling ballast. Both synthetic ASCII wedge and binary gem samples are included for local testing.

## Responsiveness, state and privacy

Generation is debounced by 100 ms, with request IDs and parameter/source fingerprints guarding stale results. Export is blocked during building, parsing, invalid parameters, file errors or unit confirmation. A last-good mesh can remain visible, explicitly labeled; it cannot be downloaded as if current. Worker failure is explicit. Preview and STL consume the exact same current validated mesh.

Files never upload or leave the browser. No APIs, paid services, CDN modules or remote generation. Fonts, WASM and dependencies are bundled locally. Named designs store at most six entries locally. JSON includes bounded normalized PNG or welded mesh payloads, not broken file paths; missing image payloads explicitly request reattachment. JSON is limited to 2 MB and imported meshes are revalidated on restore. Synthetic sample fixtures only are committed.

## Export / printing

Assembled, exploded, isolated palm/trough/ballast and print-plate views; orbit, touch orbit/pinch, zoom and fit. Every STL is binary, in mm, in bed-flat **print** orientation, never the assembled pose. Individual palm/trough/ballast buttons, separated plate STL and Everything ZIP (three STLs + assembly notes). Final selected X/Y/Z dimensions are displayed. No 3MF claims.

Print the palm underside down, the trough on its flat extrusion side and ballast on a circular end, **exactly as exported**. PLA or PETG; 0.4 mm nozzle, 0.2 mm layers and three perimeters are starting settings. The pedestal supports the round fulcrum's underside; the constant-section trough needs no bridging or support. No hardware, glue or compliant parts.

Rotate the trough side-up and seat its open saddle over the fulcrum, then place the ballast cylinder sideways on the beam. Gently tip and roll; do not force fits. Lift either moving part from above to release. Try Pocket Teeter as a full-size calibration coupon. Clearances are printer/material dependent; deburr and choose consistent infill. The side guides and stops are physical constraints, not permanent retention. Small loose parts are not for children. **No physical print has been performed or claimed.** Mesh and mechanism calculations do not prove printed friction, feel, wear or durability.

## Verification

`npm test`: independent exported binary-STL parsing, finite triangles, unit normals, nondegenerate faces, welded edge incidence/winding, positive volume **per component**, Euler characteristic, dimensions, individual parts, all 128 parameter-bound corners, presets and imported image/mesh variants. CSG intersection tests check 25 three-body poses, printed separation, release, tilt overtravel, gravity dwell moments and isolation from imports.

`node browser-test.cjs`: Playwright real file-picker PNG/JPEG/ASCII/binary imports, actual STL downloads, threshold/depth/pixel/crop/transform differences against defaults, exact preview/export fingerprints, invalid/unsupported files, remove/replace/reset, minimum/maximum edits, phone imports/downloads and touch orbit/pinch.

`node feature-test.cjs`: text/icon/SVG/hole/background/engraving changes, presets, variations, JSON image/mesh round trips, named saved designs, undo/redo, ZIP/per-part downloads, view modes, theme, focus, up-axis, drop and stale/invalid guards. Additional production smoke test injects worker-loading failure and checks 320 px preview-first layout. Reports distinguish these checks from unperformed physical print tests.

Dependencies: React, React DOM, Vite, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages and Playwright. Reuses local studio infrastructure from the preceding collection app; **new rolling-ballast seesaw mechanism**, not a reskin of its groove tracer. The initially considered constant-width rotor was rejected before publishing because Corner Waltz already covers it. The keycap-generator reference was inspected read-only for its tactile controls, maker panel, source editor and export structure. No keycap sockets or switch dependencies are used.
