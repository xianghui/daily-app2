# Bayonet Pause

A browser-based, millimeter-scale parametric **push–turn–lift bayonet fidget studio**. Two opposed post lugs enter a sleeve, follow circumferential tracks, and seat in lowered end pockets when the sleeve is lifted. Press down before reversing. Entry alignment deliberately allows removal. This is a rigid, manually operated, hardware-free two-part mechanism—not a snap lock, spring-return button or permanently captive joint.

## Run and export

`npm install`, `npm run dev`; production: `npm run predeploy`. Base URL is `/daily-app2/20261024-18/`. The per-app `deploy` script exists as requested; **public publishing uses the parent monorepo `npm run deploy`**, never this per-app script. Dependencies are React, Vite, Three.js, Manifold WASM and fflate, all bundled locally. No CDN, server, account, API key or paid service is needed for modeling/export.

The large orbitable matte preview uses the exact generated part buffers used by the binary STL exporter. Print layout separates both parts by at least 8 mm; the sleeve is inverted, closed-end down. Assembled mode rigidly transforms these same solids; the turn and end-pocket lift controls are illustrative, not force/contact simulation. Lift is enabled only at the end of the turn; changing turn resets lift. STL always exports print layout, regardless of preview mode. Preview colours are not stored in STL.

Download one combined two-solid binary STL, either individual solid, or a ZIP of both STLs and assembly notes. Filenames include dimensions and source kind. Dimensions shown are final selected print-layout X/Y/Z in mm, not assembled overall bounds. Click a part to select/highlight it. Reset/fit, zoom buttons, mouse/touch orbit, pinch zoom, tabs and collapsible phone controls are available; export remains fixed on phones. Three actual-model preset thumbnails, bounded variations, reset, debounced modeling undo/redo and local JSON save/open are implemented.

## Parameters

| Parameter | Range | Unit / meaning |
|---|---|---|
| Sleeve diameter | 26–34 | mm; ergonomic body size |
| Lock rotation | 45–85 | **degrees**, clockwise from entry |
| Unlock push distance | 1–2 | mm; manual axial travel out of pockets |
| Running clearance | 0.25–0.55 | mm **per face**, radial and axial |
| Lug reach | 1.8–2.4 | mm radially beyond the post |
| Palm dimples | 0–0.6 | mm real subtracted texture depth |

Post and sleeve use opposed 14° lugs. Post radius is sleeve radius minus 4.5 mm. Angular channel clearance is derived from running clearance at the lug radius. Sleeve thickness over the post is 2 mm; outer track wall after fluting remains at least 1.35 mm, pocket floor at least 2.9 mm, radial lug engagement at least 1.25 mm. Palm well retains 1.6 mm floor. Invalid/nonfinite dimensions, transforms, source payloads or disconnected integration block export. Pocket Turn is a small, loose, short-turn calibration preset; Bayonet Pause balances fit and travel; Deep Dwell has the largest sleeve, deeper pockets, longer turn and tighter fit.

## Local image workflow

File picker and drag/drop accept **real PNG/JPEG content**, 16 bytes–2 MB, at most 12 MP and 6,000 pixels per side. Header limits are checked before decoding. A working copy is reduced to at most 500 px per side. Transparent pixels composite onto white. Fit-entire-image or fill/crop plus ±25% X/Y crop shift feed a **20 × 20** grayscale grid using Rec.709 luminance.

Threshold mode sets each sample below threshold (1–254) to the selected 0.4–3 mm relief depth; other samples have no relief. Grayscale mode maps darkness continuously to height. Samples are triangulated as a continuous height-map top, with closed sides and a flat bottom: threshold edges are interpolated between sample vertices, not vector contour tracing. A continuous 0.4 mm backing is embedded 0.15 mm into the well floor and **solid-unioned** into the palm. This is **2D-to-relief/silhouette conversion, not reconstruction of a full 3D object from one photo**. Source image and exact conversion grid remain visible. Empty relief is rejected.

Footprint 4–7 mm, Z rotation ±180°, offsets X ±1.5 / Y ±2 mm. Every imported point must remain within a 6.5 mm radius of the palm center. Unsafe rotations/placement fail visibly rather than being silently cropped. Minimum distance to the moving sleeve envelope is 4.5 mm. Relief replaces the built-in oval grip and measurably alters the STL.

## Local STL workflow and intentionally bounded support

Both **binary and ASCII .stl** are parsed in the worker; 40 bytes–2 MB, at most 1,500 triangles, each axis 0.2–250 mm. STL has **no unit metadata**: source dimensions are shown and explicit millimeter confirmation is required before integration. The source has its own orbitable preview.

Supported inputs are **one convex, closed, outward-wound solid with a broad flat Z-down base**. Its bottom convex hull must occupy at least 25% of the XY bounding rectangle and contain every projected vertex. Concave, hollow, tilted, overhanging, disconnected, open/nonmanifold, inverted, degenerate, self-intersecting, touching or excessive inputs are rejected with guidance to reorient, rescale, decimate or export one closed convex solid in the user's modeler. There is no arbitrary mesh repair path and no claim of repair.

Validation checks exact binary length or complete ASCII facets, welded edge incidence and opposite neighbor winding, connectedness, finite coordinates, positive volume, axis bounds, triangle intersection SAT and convexity. XY is proportionally fitted to a 4–7 mm footprint; Z is independently fitted to 0.6–5 mm grip height. Minimum fitted XY dimension is 1.2 mm. Z-rotate/center/place controls and reset, replace and remove are real. The fitted solid embeds 0.15 mm into the well floor and uses Manifold Boolean union—not overlapping shells. Integration must remain one connected closed solid. The moving sleeve is invariant under imports.

## Privacy and saved settings

All personal inputs are processed locally in the browser/worker and never uploaded or written into this repository. Sample files are original synthetic fixtures inherited from the collection's local test harness; no third-party artwork or attribution is required. `mark.png`, `waves.jpg`, `wedge-ascii.stl` and `gem-binary.stl` are offered as both try buttons and downloads.

Local design JSON deliberately includes a bounded normalized PNG and/or validated STL vertex payload, parameters and transforms, so source-dependent geometry actually restores. Open validates the payload again (JSON ≤2 MB); missing image payload is an explicit reattachment error. Undo history retains up to 35 debounced local snapshots. Removing an import returns to the built-in grip. No cloud storage or browser telemetry is used.

## Geometry implementation and checks

The bayonet sleeve is constructed as a closed stepped cylindrical cavity on a **shared angular/Z/radial mesh grid**, avoiding overlapping cutter slivers. Radial layers split shared ledges to prevent T-junctions. Entry channels, horizontal tracks and locking pockets are genuine cavity geometry. Outside flutes and a face pip are real subtractions. The palm, post, lugs, dimples and imported grip are modeled with robust Manifold solid operations. Generated geometry uses a 0.0001 mm simplification tolerance; this is not repairing user meshes. Complexity is bounded; heavy generation and STL preflight run in a Web Worker, with visible busy/error states and stale-export gating.

Every generated part and its float32-quantized print-layout placement are checked for finite coordinates, nondegenerate triangles, positive volume, welded closed-edge incidence and consistent winding before enabling export. Binary normals are computed from the actual quantized export coordinates.

`npm test` independently parses binary exports and tests 78 parameter cases (defaults, extrema, every endpoint combination, all presets and eight variations) plus 24 import × parameter cases. Browser tests (`node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs`) use the dev URL at port 5280, real file pickers and real downloads. They verify PNG/JPEG/ASCII/binary import changes against defaults, threshold/depth/crop/shape/scale/placement effects, malformed/excessive/nonmanifold rejection and recovery, all presets/variations, undo/redo, portable source round trips, part/ZIP exports and touch orbit/pinch at 320/390 px widths.

Mechanism tests use actual solid intersections at 21 turn positions, 11 end-pocket lift positions and 33 aligned-entry insertion/extraction heights. Positive collision probes verify axial retention in the track/pocket and reverse-turn blocking while lifted. Tests also verify separated print solids, import isolation and unchanged sleeve geometry. These calculations do **not** establish friction, locking feel, material strength, wear or print success. No physical print has been tested. See `VALIDATION.md` and generated JSON evidence.

## Printing and assembly

- PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three or more perimeters. Both rigid parts use the same material.
- Palm-post prints broad-side down. The sleeve prints **closed end down** as exported. The post lugs may need external supports.
- Internal groove roofs have **1.8–2.4 mm short inward overhangs with free inner edges**, not fully supported bridges. Calibrate overhang quality on Pocket Turn. If needed, use fully removable or soluble internal supports, completely clear channels and inspect before assembly. Do not force an obstructed/rough track. No universal support-free claim.
- Print Pocket Turn first as a full-size fit coupon. 0.25 mm snug / 0.4 mm balanced / 0.55 mm loose are starting values per face only; tune to printer/material, deburr and reprint if needed.
- Align opposed entry channels with lugs. Lower, turn clockwise by the chosen angle, then lift into end pockets. Press down by the chosen distance, reverse counterclockwise to entry alignment, then lift off.
- The lock is manually seated and releases deliberately. No spring, press-fit cap, magnets, bearings, screws or other hardware. Do not force or use for load-bearing, child-safe or safety-critical closures. Stop if cracked or rough. Small loose parts: adult fidget only.

## Design reference

https://vaseverse.org/ informed canvas-first editing, a quiet warm palette, compact controls and reachable export. No branding, assets, copy or source was copied. This is an original physical-fidget mechanism and parametric editor, not a vase generator.
