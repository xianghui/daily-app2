# Axis Quiet — a two-axis thumb gimbal studio

A browser-based React/Vite parametric STL editor for a **single-piece TPU 95A tactile gimbal**. Hold the outer frame and gently tilt the center pad. Opposed X-axis torsion bridges support an intermediate ring; opposed Y-axis bridges support the pad. This orthogonal nested flexure mechanism differs from the collection's wheel spokes, single-axis hinges and radial springs.

## Run and export

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app `npm run deploy` is provided as requested, but the public collection is published from the parent repository's root `deploy/` flow. Vite base: `/daily-app2/20261024-4/`.

The final robust Manifold CSG solid drives both Three.js preview and binary STL export. Object preview and print layout are the same undeformed single body; no separate assembly parts or ZIP are needed. STL is geometry only, without preview colours or material metadata. Final millimeter X/Y/Z bounds appear beside the canvas. Fit/reset, orbit, zoom, touch pinch, actual generated preset thumbnails, bounded variations, undo/redo, local JSON save/open and a mobile collapsible control sheet are included. Export is gated on current geometry, unit confirmation, file validation and valid parameter ranges.

## Parameters (millimeters)

| Setting | Range | Default |
|---|---|---|
| Outer frame radius | 24–32 | 28 |
| Frame/pad thickness | 2.4–4 | 3.2 |
| Torsion bridge width | 1.2–2 | 1.6 |
| Radial air gap | 2.5–4 | 3.2 |
| Flexure thickness | 0.8–1.2 | 1 |
| Frame dimple depth | 0–0.6 | 0.3 |

Core radius is 10.5, intermediate-ring radial wall is 3, minimum outer-frame radial wall is 2.5. Four bridges overlap their roots by 0.6. Recess depth is 0.8; the minimum core floor is 1.6. Frame dimples never enter bridges. Feather Tilt, Axis Quiet and Steady Cross vary actual geometry, not only appearance.

## Image → actual solid relief

Import PNG/JPEG by picker, drag/drop or included `mark.png` / `waves.jpg` fixtures. Files must be 16 bytes–2 MB, at most 12 megapixels and 6,000 pixels per side. Content signatures and dimensions are checked before bitmap decoding. A ≤500 px-side normalized image remains only in local memory or explicitly saved JSON.

The image is fitted (`contain`) or cropped (`cover`) into a **20×20 grid**, with ±25% X/Y crop shift. Transparent areas composite over white. Luminance is rounded `0.2126R + 0.7152G + 0.0722B`. Threshold mode raises samples below threshold (1–254); grayscale mode maps darkness linearly to height. Relief depth is 0.4–3. A closed triangulated continuous heightfield has a 0.4 backing and embeds 0.15 into the pad's recessed floor, then robustly unions with the core. Threshold edges are linearly triangulated over this coarse grid, not vector tracing. Empty relief is rejected. This is **2D-to-relief conversion, not automatic full-3D reconstruction from a photo**. Source and exact sampled conversion previews are shown.

## STL → integrated thumb grip

Both binary and ASCII STL are parsed locally in a worker. Limit 2 MB / 1,500 triangles. Every axis must measure 0.2–250 in source coordinates. **STL has no unit metadata; explicitly confirm millimeters.** The intentionally restricted contract accepts one outward-wound closed connected convex solid with a broad flat Z-down bottom, at least 25% of its XY bounding footprint, and no projected overhang beyond that bottom. Hollow, concave, open, nonmanifold, disconnected, self-intersecting, inward-wound and degenerate meshes are rejected with guidance, not silently repaired. Reorient/repair/decimate in your modeler and retry. Fixture wedge ASCII and gem binary grips are synthetic and bundled locally.

Original source dimensions and a separate orbitable source preview precede integration. XY is centered and scaled proportionally to the selected footprint; Z is independently scaled to requested grip height. Footprint 4–7, grip height 0.6–5, Z rotation ±180°, X shift ±1.5 and Y shift ±2. Transformed vertices must stay inside a 6.5 radius disk. Fitted XY spans must both be ≥1.2. The base embeds 0.15 into the core well and joins by true CSG union; final connectivity is verified. Imports do not affect the flexures or the intermediate/outer rings. Unsupported integration disables export. Replace/remove/reset transforms or Reset all recover without reload.

## Privacy and saved designs

No API, upload, analytics or CDN dependencies. All user-file handling, conversions, previews, modeling and downloads stay in the browser. Dependencies and WASM are bundled locally. Only synthetic fixtures are committed. Explicit Save JSON includes bounded normalized image data and conversion settings, or validated source STL vertex/index payload. Open revalidates and restores these payloads; missing image payload asks for reattachment instead of pretending restoration. Files are not otherwise persisted.

## Print, calibration and mechanism envelope

Print Z=0 face on bed, **TPU 95A only**, 0.4 nozzle, 0.2 layers, three perimeter lines where width permits and 100% infill. Four to six layers form flexure thickness. No supports, hardware, assembly, print-in-place release, caps or mating-fit tolerances apply. Remove strings from open annular sectors without cutting bridges.

Use Feather Tilt as a full-size material calibration before a preferred design. Initially limit **each axis to ±2°**, even when both axes tilt. There is no hard mechanical stop; do not force the pad. Stop for whitening, cracks, tears or permanent set. Broad ring clearances are not precision bearing fits, but printing excess and strings can still inhibit motion. Printer/material tolerances are not universal.

The conservative non-contact bound subtracts `2*(midOuterRadius+10.5)*sin(2°/2) + frameThickness*sin(2°)` from radial gap; all exposed parameter combinations retain >1.3 clearance within this limited envelope. An elementary torsion strain indicator is `flexureThickness * radians(2) / gap` (<3.5%). This is not FEA, a fatigue prediction, measured return torque, a guarantee of comfortable feel, or validation of unrestricted rotation. Imports stay at least 4 from core flexure roots. Retention is continuous material, not friction caps.

**No physical print, force, fatigue or user testing has been performed.** Geometry/mechanism calculations do not prove a physical material response. This is a gentle exploratory tactile object, not a load-bearing joystick.

## Validation and dependencies

Runtime final-solid preflight verifies finite vertices, nondegenerate triangles, welded edge incidence two, opposite edge direction, positive volume and connected Manifold CSG output. Imports additionally undergo self-intersection/convexity/support-footprint checks. No overlapping shells are exported as a claimed union.

`node validate.mjs`: defaults, minimum/maximum, all 64 corners, three presets, eight deterministic variations, image threshold/relief and both STL fixtures across six parameter sets. Independently reads exported binary STL; checks normalized outward normals, positive volume per connected component, four through-openings, welded manifold edges, mm bounds and bed-flat layout. CSG material/void probes verify all four bridges and open sectors. Independent sampled compound-rotation envelope calculations and source-vs-baseline CSG differences verify flexure isolation.

`node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs` use real Playwright file pickers/downloads to exercise imports, geometry-changing image content/threshold/depth, STL transforms, invalid content, truncated/nonmanifold/oversized files, empty relief, unsafe placement, reset, presets, variations, undo/redo, portable JSON, individual single-solid selection, colours, 320/390 px mobile layouts and touch orbit/pinch. Browser output is parsed as STL and compared to the exact preview geometry fingerprint. `gallery-test.cjs` checks inline scripts and preserves previous gallery entries. Tests default to local Vite port 5270; `TEST_BASE` can select the production-layout server.

Runtime: React, React DOM, Three.js, manifold-3d; tooling: Vite, React Vite plugin, gh-pages, Playwright. Original warm model-first composition uses Vaseverse as a visual/UX reference; no third-party branding, assets, text or source are copied. Existing in-repository browser-only import/preflight infrastructure was adapted for this new mechanism.
