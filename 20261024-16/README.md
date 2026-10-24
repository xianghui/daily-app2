# Lace Pause — local ribbon-weaving fidget studio

A React + Vite browser editor for a **three-slot weaving palm board and removable flexible ribbon**. Feed the narrow tip up/down/up, leave loose loops, draw gently, reverse and unweave. This is a manual threading/friction/bending ritual, not a captive slider, wringing ladder, clicker or simulated game. Includes Easy Thread, Lace Pause and Long Ritual with actual generated model thumbnails.

## Studio and local workflows

- Model-first Three.js preview with soft matte materials, 10 mm ground grid, orbit, zoom, fit/reset, selection and final printable-layout X/Y/Z dimensions. Preview and binary STL use identical final mesh data. The two parts are shown **unassembled and bed-flat**; a labeled assembly schematic explains weaving, not a fake deformation preview.
- Shape, Mechanism, Surface, Import and Print controls; numeric inputs plus bounded sliders, variation, reset, undo/redo, portable JSON save/open. Mobile collapsible controls and fixed reachable STL action. Preview palette does not add colour to STL.
- Export both disjoint solids together, individual board/ribbon STLs, or a ZIP with both and printing guidance. Use per-part exports to choose different materials in a slicer.
- PNG/JPEG and binary/ASCII STL picker, samples, and desktop drop support. All processing occurs **locally**, with no APIs, uploads, keys, remote fonts or CDN dependencies. Saved JSON intentionally includes bounded personal source data; no user input is written into this repository.

## Images: exact conversion and limits

Only real PNG/JPEG content; 16 bytes–2 MB, up to 12 MP and 6,000 px per side. Header dimensions are checked before image decode. A normalized preview is bounded to 500 px. Contain or cover fit with ±25% X/Y crop shift is rasterized onto a white-backed **20 × 20** grid. Luminance = 0.2126 R + 0.7152 G + 0.0722 B. Transparency is composited over white.

Threshold mode raises dark samples below the chosen 1–254 threshold by 0.4–3 mm; grayscale mode raises them by depth × (1 − luminance/255). Adjacent samples are triangulated into a continuous height-map solid, including closed sides and a 0.4 mm backing. This is **2D-to-relief / raised silhouette conversion, not full 3D reconstruction from a photograph**. Empty results are rejected. The relief is sunk 0.15 mm into the 1.6 mm well floor and robustly unioned with the palm board. Footprint, depth, rotation and placement affect actual exported geometry.

## STL import and integration contract

40 bytes–2 MB; maximum 1,500 triangles; each source dimension 0.2–250 mm, finite coordinates within ±10,000 mm. Both ASCII and binary are parsed. STL has **no units**: the user must explicitly confirm source millimeter coordinates before export.

For honest bounded support-free integration, only one **convex, watertight, outward-wound, broad flat-bottom solid** is accepted. No cavities, concavity, disconnected parts, overhang footprints, intersections, nonmanifold edges, degenerate triangles or silent repairs. A bottom polygon must cover at least 25% of the XY bounding rectangle and contain all projected vertices. Errors explain how to re-export an appropriate mesh.

Show source dimensions and source 3D view. Center and proportionally fit XY to a 4–7 mm footprint, independently fit Z to 0.6–5 mm, rotate around Z ±180°, translate X ±1.5 mm / Y ±2 mm. Minimum fitted XY span 1.2 mm. No unsupported tilt controls. The transformed grip must remain inside a 6.5 mm palm radius. It penetrates the well floor by 0.15 mm, and Manifold solid union must yield **one closed connected board solid**. This modifies the board materially and leaves the separate ribbon and all slots unchanged. Replace, remove, reset transforms and return to built-in defaults are available.

Portable JSON explicitly embeds the normalized PNG payload or bounded STL vertex/index payload. Reopening STL re-runs the strict parser; missing or malformed image payloads are rejected with a reattachment instruction. Reopening never claims a missing import was restored. JSON limit 2 MB; history up to 35 snapshots.

## Parameters (all lengths in millimeters)

| Parameter | Range | Effect |
| --- | --- | --- |
| Palm board width | 24–32 | Palm-guide width |
| Weaving board length | 36–52 | Slot spacing and ribbon length |
| Ribbon thickness | 0.8–1.2 | Flexibility, 4–6 layers at 0.2 mm |
| Slot throat width | 3–4 | Threading room, printer-dependent friction |
| Ribbon width | 6–9 | Grip and slot length |
| Palm dimple depth | 0–0.6 | Real subtractive palm texture |

Board is 2.4 mm thick; slot mouths have 0.6 mm chamfers, leaving a 1.2 mm straight throat. Slot length = ribbon width + 2 mm. Ribbon body length = 2 × board-length parameter + 40 mm, plus 5.2 mm lead-in extension. Its wide handling end spans ribbon width + 8 mm. The stop is not a positive captive lock: TPU can deform. The export layout separates parts by 10 mm. Imported features stay at least 12.9 mm from the first slot mouth. The UI reports current final export dimensions including both parts or selected part.

## Modeling, validation and dependencies

React, Vite, Three.js, **manifold-3d WASM** for robust CSG, fflate for ZIP, gh-pages for publishing; Playwright for browser validation. Manifold generation, STL preflight and final-mesh checks run in a worker; image geometry is bounded to 400 samples. No external modeling service is needed. WASM and dependencies are bundled locally.

Every edit verifies finite coordinates, nondegenerate triangles, positive signed volume, welded edge incidence exactly two with balanced directions, and one connected component per required part. CSG, rather than overlapping visual shells, integrates imports. Invalid current settings/files disable export; stale geometry cannot export while conversion or generation is pending.

`npm test` independently parses binary exports, checks normals/winding, manifold incidence at 0.00001 mm welding tolerance, each component's positive volume, topology and independent millimeter bounds. Covers defaults, all presets, minimum/maximum and all 64 parameter-range corners plus representative variations; repeats built-in/imported cases with image relief and both STL fixtures. Actual CSG probes verify empty slot passages at multiple threading placements, solid bridges, no print-layout intersection, and import changes confined to the palm, with the ribbon invariant. Parametric checks cover throat/lateral room, bridge/rim thickness, end margins, total ribbon length and a loose-bend geometric screen. These tests **do not constitute a simulation of deformed TPU or a physical weaving/fatigue test**.

Browser scripts exercise real file inputs/downloads for PNG/JPEG and ASCII/binary STL, pixel/threshold/depth/scale/placement changes, malformed content, open/nonmanifold/concave/excessive meshes, empty images, unsafe transforms, recoverable errors, presets/variations, exact preview/export fingerprints, undo/redo, portable import JSON restoration, per-part/ZIP downloads, colour-neutral geometry, drag/drop and 320/390 px touch viewports. Reports are in `*-validation.json`; screenshots document the desktop/phone views.

## Printing and interaction

Print flat-side down, **TPU 95A ribbon only**; choose TPU 95A or PLA/PETG for the guide. No support, hardware, glue, assembly pins or print-in-place joint release. Suggested starting point: 0.4 mm nozzle, 0.2 mm layers, slow TPU, dry material, three board perimeters. Start with Easy Thread as a full-size material/fit coupon. Thickness/throat/feel are not universal across printers.

Inspect slot mouths, smooth burrs, check ribbon layer bonding. Hand-thread the tip up/down/up while leaving loose loops. Initially keep inside bend radii ≥6 mm; t/(2R+t) yields ≤10% nominal outer-fiber strain over supported ribbon thicknesses. This is **a geometry screen, not a safe fatigue limit or measured force guarantee**. Never draw taut against slot edges, sharply crease, or force the wide handling stop through. Reverse and unweave to remove. Stop for tears, whitening, permanent creasing or separation. No physical print, bend, friction, return-force or fatigue testing has been performed. Not intended for children.

## Development

```
npm install
npm run dev
npm test
npm run predeploy
```

Base path: `/daily-app2/20261024-16/`. Per-app gh-pages scripts exist as requested, but combined public deployment must run from the root monorepo `deploy/` flow.

Original studio layout direction: Vaseverse's model-first warm neutral studio; no branding, assets, source or text copied. Synthetic bundled image/STL fixtures are inherited from the local lab testing toolkit and require no personal uploads or external attribution.
