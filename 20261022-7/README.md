# Rocker Reverie

A local React/Vite design studio for an assembled, hardware-free **crank-rocker four-bar fidget**. Unlike the earlier parallelogram or trammel generators, a short link rotates continuously and a non-parallel output lever oscillates. Original warm studio UI informed by Vaseverse's model-first composition; no branding, source or assets copied.

## Run

`npm install`; `npm run dev`. `npm test` checks generated meshes and kinematics. `npm run predeploy` builds. Per-app deploy uses gh-pages; the public monorepo is published only through the root deploy workflow.

## Geometry and mechanism

All dimensions are **millimeters**. Ground pivot spacing 40–44; crank radius 10–12; coupler 36–40; rocker 26–30; base thickness 3–5; groove depth 0–0.6; radial/axial running clearance 0.20–0.50; static socket allowance −0.08–0.08. Link thickness 3, pivot radius 2, link-end radius 4.5, tip radius 1.3, cap radius 3.3. The ranges ensure strict Grashof inequality and avoid inner/outer toggle singularities. Integral pedestals lift the floating coupler above the ground caps; its two captured bearings have axial play. Imported decoration is confined to a stationary 13 mm-diameter safe zone centered at (0, −22), well outside moving envelopes. Surface grooves stay away from the pivot walls; bearing wall remains at least 2 mm.

Eight separate solid parts: base, crank, rocker, coupler and four retaining caps. All-parts STL uses a bed-flat layout with 6 mm between part bounding boxes. Assembled preview uses exactly those meshes under rigid transforms and never changes the exported layout. STL does not store preview colours. Individual parts and ZIP with assembly notes are available. Three parameter presets have real generated model thumbnails. Undo/redo tracks modeling state; JSON includes bounded normalized image and/or mesh payloads so imported files really restore.

## Image import

PNG and JPEG, actual content signature checked, 2 MB/file, at most 12 megapixels, 6,000 px/side. Decode only after header bounds checks. A portable source preview is normalized to at most 500 px per side. White-composited canvas sampling uses a **20×20 luminance grid** with contain/cover crop and ±25% XY pan. Threshold 1–254 selects high/low vertex heights, or grayscale maps darkness continuously to height. Triangulated interpolation between samples creates a continuous relief, not disconnected pixel shells. Relief depth 0.4–3 mm, continuous 0.4 mm backing, lower surface sunk 0.15 mm into the palm tab. Empty relief is rejected. This is **2D-to-relief conversion, not automatic full-3D reconstruction from a photograph**.

## STL import

ASCII and binary STL, 2 MB, up to 1,500 triangles. STL has no units: the user explicitly confirms source coordinates represent mm. Each source dimension must be 0.2–250 mm. Strict parser verifies finite/nondegenerate triangles, welded two-face edges, consistent orientation, one connected positive-volume solid, triangle intersections and convexity. Only convex, flat-bottom, support-free solids are supported: bottom area at least 25% of XY bounding footprint, and every vertex projection inside the bottom polygon. Concave, hollow, open, touching/self-intersecting, disconnected, overhanging or excessive meshes are rejected with guidance; no arbitrary repair is claimed.

Source mesh appears in its own orbitable preview with original dimensions. XY scale fits a 4–7 mm footprint proportionally; Z independently fits 0.6–5 mm height. The resulting XY spans must each be at least 1.2 mm. Rotate around Z ±180°, center or offset X ±1.5 and Y ±2 mm. The full transformed grip must stay inside radius 6.5 mm. Real Manifold solid union fuses it into the base, not an interpenetrating visual overlay. Disconnected integration fails. Replace/remove/reset and source/final previews are provided.

## Privacy / dependencies

All user input stays locally in browser memory and user-requested downloads. No upload, API key, cloud service, CDN, analytics or paid service. Synthetic PNG/JPEG/ASCII/binary fixtures in `public/samples` are project-generated and may be reused; no personal files bundled. React, Three.js/OrbitControls, Manifold WASM and fflate are bundled locally. Modeling and STL preflight run in a worker; bounded image conversion runs on canvas. Playwright is a development dependency.

## Validation

`validate.mjs` checks defaults, three presets, min/max, every endpoint combination and eight deterministic variations. Exported binary STL is reparsed for finite coordinates, nondegenerate faces, stored normals, positive per-component volume, consistent winding, welded edge incidence exactly two, eight separate components and matching mm bounds. Each part is separately checked. Imported image and both STL fixtures run through the same checks at representative parameter settings. Loop closure is sampled over 361 crank positions; representative defaults/range endpoints/presets/imports also undergo Manifold pairwise intersection checks over 37 positions. Static cap-tip interference is permitted only within a bounded volume, because those are intentionally friction seats. Moving pairs must have less than 0.001 mm³ intersection. Bed-layout bounding boxes cannot overlap.

Browser tests select real PNG/JPEG and ASCII/binary STL files, compare downloaded geometry against defaults and changed pixels/threshold/depth/transforms, test malformed/oversized/open/nonmanifold/concave inputs, portable save/open, undo/redo, all presets, variations, per-part and ZIP exports, touch orbit/pinch and 320/390px layouts. Reports record executed checks, not physical print certification.

## Printing and assembly

PLA or PETG; 0.4 mm nozzle, 0.16–0.20 mm layers and four walls as starting suggestions. Export orientation is flat base/links, posts upward; caps socket-down with a 2.6 mm bridge roof. Inspect slicer bridging. No supports/hardware designed in. Print base, crank and a cap first as a full-size fit trial: 0.30 mm clearance is a starting point, **not universal**. Clean bores/elephant foot. Assemble crank and rocker onto base pins, seat two caps on the narrow tips against spindle shoulders, fit coupler onto arm-end pins and seat the remaining caps. Confirm each cap remains retained, all shoulders fully seat, and the crank turns gently without binding. Reprint static sockets tighter if loose or increase running clearance if jammed. Do not glue moving holes or force the mirrored linkage branch. Remove caps evenly for disassembly. No compliant spring parts; tactile feel is sliding/rotating bearing friction and rocking motion. No physical print, friction, wear, strength or retention-force test has been performed. Small removable parts are not for children.
