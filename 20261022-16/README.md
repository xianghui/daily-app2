# Petal Pulse

A local React + Vite polar-cam fidget studio. Turn the exposed cam rim: its two-lobed blind groove drives a thumb follower along a straight bridge slot, twice per revolution. This is a face-groove cam, not a gear, ratchet, Scotch yoke or a barrel cam. All five parts are generated and exported locally; no hardware required.

## Studio

Large Three.js orbit/touch preview, fit and zoom, assembled/bed-flat views, pose controls, part selection, three live model thumbnails, bounded variations, paired numeric/range inputs, preview colours, undo/redo, portable JSON save/open, individual binary STL, combined separated layout and ZIP with assembly notes. STL contains geometry and millimeter coordinates, not colour or unit metadata. Pose controls move the assembly, not the bed-flat export. Preview and export share the exact generated indexed meshes. Ten-millimeter ground grid; export dimensions describe the selected printable layout, not its assembled footprint.

Warm ivory/clay model-first studio styling follows the supplied UX direction. A direct request to vaseverse.org encountered its browser challenge during this run; no reference source, text, branding or assets were copied. Editor/import/export infrastructure is adapted from earlier studios in this repository; the cam mechanism and checks are new.

## Parameters (millimeters unless noted)

- Cam wheel radius: 22–26; plate 4 thick, blind groove 2 deep, 2 mm continuous floor.
- Radial stroke amplitude: 2–4, peak-to-peak travel 4–8. Groove centerline `r(a) = 11 + amplitude*cos(2*a)`; its two boundaries use actual planar unit-normal offsets at 256 angular stations, not radial offsets.
- Palm floor: 3–5. Fixed axle radius 3; cam bore radius `3 + clearance`.
- Rim tactile groove depth: 0–0.6. These dimples are outside the cam track.
- Running clearance: 0.20–0.50, default 0.30. Groove half-width `1.2 + clearance`; follower pin radius 1.2. Straight guide post radius 2.5, guide half-width `2.5 + clearance`. Shoe is 8 mm across the guide and stays below the bridge; 10 mm cap retains from above.
- Static press seat allowance: −0.04 to +0.08, default zero; affects cap socket and bridge sockets only. Not a universal friction-fit specification.
- Import footprint 4–7; STL height 0.6–5; rotation −180° to 180° about Z; XY placement ±1.5 / ±2. Radius 6.5 safe zone on the fixed palm tab, far from the mechanism.

## Local image workflow

PNG and JPEG file picker, desktop drag/drop, replace/remove/reset, bundled synthetic `mark.png` and `waves.jpg` samples. Content headers and dimensions are checked before decoding: 16 bytes–2 MB, at most 12 megapixels and 6,000 pixels per side. The normalized preview is bounded to 500 pixels per side and saved inside JSON when explicitly requested. Images never leave the browser.

Fit/contain or cover/crop with ±25% shifts onto a white 20×20 canvas; transparency becomes white. Rec.709 luminance becomes either thresholded raised silhouette (threshold 1–254) or grayscale height relief (depth 0.4–3 mm). Adjacent sample heights form a continuous triangulated top, with closed side walls and bottom, on a 0.4 mm backing. A 0.15 mm overlap is Boolean-unioned into the rigid palm tab. The threshold mode has interpolated triangulated boundary transitions, not pixel-exact vector tracing. Empty silhouettes are rejected. This is **2D-to-relief conversion, not full 3D reconstruction from one photo**. Converted/source previews, physical footprint, depth, placement and crop controls all affect final geometry.

## Local STL workflow

ASCII and binary STL up to 2 MB / 1,500 triangles. A worker validates finite coordinates, dimension range 0.2–250 per axis, positive volume, welded closed edges, winding, one connected component, pairwise triangle intersection, convexity and broad flat-bottom contact. The mesh must be convex with every XY projection inside its bottom footprint, which must occupy at least 25% of the bounding footprint. Concave, hollow, open, nonmanifold, self-intersecting, disconnected, upside-down or overhanging meshes are rejected with actionable guidance; no repair is claimed or attempted. The restrictions are deliberate for predictable support-free grip integration, not general mesh import.

Dimensions and source mesh preview are shown. Confirm millimeter units explicitly: STL has no unit metadata. XY is proportionally fitted to footprint and Z independently fitted to grip height. Rotate about Z, scale, center and place the grip, then a Manifold Boolean union embeds it 0.15 mm into the fixed palm tab. Minimum scaled XY span 1.2 mm; safe-zone violations block export. The imported mesh is not merely displayed or re-exported unchanged. Both synthetic ASCII wedge and binary gem fixtures are bundled and downloadable. No personal inputs are stored in this repository. JSON explicitly includes bounded mesh/image payloads and reopening revalidates meshes; missing or invalid payloads cannot masquerade as restored geometry.

## Manufacturing and assembly

Five separately printable parts, not print-in-place:

1. Palm-base, floor-down. Cam, groove-up. Guide-bridge, broad plate-down/pegs-up. Thumb-cap, closed face-down/socket-up. These four have no intended supports.
2. Thumb-follower has opposite-facing post and pin. **Supports under its shoe are required when printed pin-down**; remove without damaging the pin/post. Export bed-flattens this orientation, not a false support-free claim.
3. PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. No compliant parts. Remove elephant foot and burrs; calibrate with the socket coupon and follower post before full assembly.
4. Slide cam over base axle. Seat follower pin in the groove on positive X. Flip bridge pegs-down and feed the follower post through its straight slot; seat all four pegs in base towers. Flip cap socket-down and press onto follower post.
5. Gently turn rim: follower should pulse in/out twice per revolution. Static seats must retain bridge and cap. If needed, adhesive only in four bridge sockets and cap socket; never glue moving interfaces. Lift an unbonded bridge evenly to service.

The cam pin has 0.6 mm groove-floor clearance, post/bore and groove-side fits remain separate, the shoe stays under its guide and cap over it. The bridge limits cam withdrawal. The exposed perimeter stays finger-accessible. Printer/material friction and layer texture may require larger running clearance or cleaned groove walls. Parts are small; not for young children. No physical print, feel, wear, retention force or fatigue test was performed.

## Development and validation

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public publication uses the root monorepo deploy flow. Dependencies: React/React DOM, Vite React plugin, Three.js, manifold-3d (bundled local WASM), fflate, gh-pages; Playwright is dev-only. No API, CDN imports, server generation or paid services. Mesh work and STL preflight run in a Web Worker; bounded geometry stays responsive.

`validate.mjs` parses actual binary output and checks finite vertices, nondegenerate triangles, normalized/outward normals, welded edge incidence two, opposite edge winding, positive per-component volume, component count and expected millimeter bounds. It checks default, min/max, every preset, single-field extrema, deterministic variations and image/STL-derived versions. It samples full-turn poses against real Manifold solid intersections for unintended collisions; intentionally fitted static bridge pegs and cap socket are excluded. The mathematical radial law, travel limits, floor thickness, guide/cap retention margins and separated bed layout are also checked.

Browser scripts exercise actual file pickers, PNG/JPEG and ASCII/binary fixtures, real downloaded STL changes with image content/threshold/depth and mesh transforms, recoverable invalid input, unit confirmation, presets, variations, undo/redo, portable import round trips, ZIP/individual parts, exact preview/export signatures, drag/drop, runtime errors, offline-local dependencies, narrow screens and real touch orbit/pinch. Reports and screenshots accompany the source. These are digital checks, **not physical print certification**.
