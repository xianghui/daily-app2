# Turnover Ritual

A browser-based parametric **tippe-top fidget studio**. Spin a truncated spherical body, nudge it into a tilted roll and explore the transition onto an annular stem rim. This is a different physical interaction from a conventional point-contact spinning top: a tippe top can change its supporting contact and invert. **Inversion is experimental and not guaranteed. No physical print or dynamic inversion test has been performed.** Friction, spin speed, material, infill and support-scar finish matter.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; Three.js / OrbitControls previews; manifold-3d WASM boolean solids in a worker. Dependencies and WASM are bundled locally. Per-app `deploy` uses gh-pages, but public monorepo publication must use the root deploy flow. No CDN, API key, server processing or paid service is needed by the editor.

## Editor

Model-first ivory/clay studio with an orbitable, zoomable, fit/reset 3D canvas, a 10 mm grid, exact export dimensions, active-object selection, three generated model thumbnails, parameters with numeric inputs, tabs, valid-range variations, preview palette, 35-step debounced undo/redo, local design JSON save/open, object/print views and an always-reachable binary STL download. On phones controls can collapse, tabs remain touch-accessible and export is fixed to the bottom edge. The two views show the same undeformed one-piece geometry; they are not a motion simulation. STL carries geometry only, not preview colour.

### Parameters — all in millimeters

| Parameter | Supported range |
| --- | --- |
| Rolling sphere radius | 22–28 |
| Stem rise above deck | 9–13 |
| Deck above sphere center | 4–8 |
| Stem rim radius | 9.2–10.4 |
| Protected well depth | 5.6–6.2 |
| Deck dimple depth | 0–0.6 |

The sphere center is radius − 0.15 above the bed. A 0.15 mm bottom clip gives a tiny flat contact, not a support-free base. The deck cuts the upper sphere, the stem penetrates it by 0.2 mm, and the well is a real boolean subtraction. Dimples are subtractive, not preview shaders. Presets change rolling envelope, deck truncation, stem proportion and dimples: Soft Turn (small, low), Palm Orbit (balanced dimensions), Long Pause (large, tall). They share one mechanism, not three supposed mechanisms.

## Both local import workflows

Use a desktop/phone picker or drop a single file on Import. Four original synthetic fixtures are bundled in `public/samples`: mark.png, waves.jpg, wedge-ascii.stl and gem-binary.stl. They are generated geometric/art patterns, not user data, and require no third-party attribution. Fixture links download files for real-picker testing.

### PNG / JPEG → printable relief

Header/content and decoded dimensions must agree. Limit: 2 MB, 12 million pixels, 6,000 pixels per side. The image is normalized to a maximum 500 px side for portable local saving, composited over white and fit/center-cropped with ±25% pan. Rec.709 grayscale luminance samples a bounded 20×20 grid. In threshold mode, pixels below the 1–254 threshold rise by the chosen depth; others remain at backing height. Relief mode uses `(1 − luminance/255) × depth`. Depth 0.4–3 mm. The 400 heights are triangulated into a continuous closed height-map with a 0.4 mm backing, outward walls and bottom, then **boolean-unioned** with the well floor with 0.15 mm embed. Threshold boundaries are linearly triangulated at this finite resolution, not exact vector tracing. A fully white/empty conversion is rejected. Source and conversion-grid previews are shown.

This is **2D-to-relief conversion, not reconstruction of a full 3D object from one photograph**. Fit/crop, pixels, threshold, depth, scale, placement and rotation alter exported triangles. Transparent pixels become white.

### Binary / ASCII STL → integrated well grip

STL has no unit metadata: the user must explicitly confirm that source coordinates mean **millimeters**. Source dimensions, format and triangle count are displayed with a source 3D preview. Limit: one connected **convex, outward-wound, closed, flat-bottom, non-overhanging solid**, ≤1,500 triangles / 2 MB, 0.2–250 mm on every axis. Vertex coordinates must be finite and within ±10,000 mm. Faces must be nondegenerate, welded edges must have two opposing incidents, volume must be positive, all faces connected and nonintersecting. Convexity and broad bottom footprint (≥25% XY bounding rectangle) are checked. All projected vertices must lie inside that bottom hull. Open, nonmanifold, concave, overhanging, self-intersecting, hollow, disconnected and unsupported meshes are **rejected, not silently repaired**. Guidance explains rescaling, decimating or exporting an eligible closed grip. Expensive parsing is worker-local and bounded.

The accepted mesh is centered in XY, proportionally fitted in XY to a 4–7 mm footprint and independently fitted in Z to 0.6–5 mm height, rotated about Z (±180°), and placed ±1.5 mm X / ±2 mm Y. Final XY span must be ≥1.2 mm. Every vertex must remain in a 6.5 mm-radius well safe zone, so some extreme transform combinations are intentionally blocked. A 0.15 mm embed into the floor and true solid union make it part of the fidget, not an unchanged re-export or overlapping shell. A connected final component is required. No tilt is offered because the accepted broad flat bottom is the integration interface.

Imports stay at least 0.75 mm below the stem rim for STL or more for image relief. They cannot touch the rolling sphere or inversion-contact annulus. Scale/height, rotate, center/reset, replacement/removal, image reset and full defaults are real controls. Preview and binary export use the same final checked triangle arrays.

### Privacy and portability

Files never upload and are not added to the repository. Normal processing uses local memory only. Explicit Save JSON includes the bounded normalized PNG or validated low-poly STL payload, source settings and transforms. Open rechecks payload size, image header and STL topology; missing image payload asks for reattachment instead of claiming restoration. JSON limit 2 MB. Undo/redo uses these same bounded snapshots. Failed imports block export until replaced, removed or reset; the prior preview may remain visible but cannot be exported as the failed new design.

## Validation and limits

Every generated edit performs final finite-coordinate, nondegenerate-face, welded-edge incidence, winding and positive-volume checks in the worker; export is disabled while the state is invalid, stale, unconfirmed or still generating. Manifold performs the sphere cuts, stem union, dimple subtractions and import union; no intersecting preview shells masquerade as a solid.

One closed solid means no mating fits, captive joints, hardware, assembly, part ZIP or fit-clearance slider is relevant. Whole and named individual-body binary STL exports are available (same body). Minimum annular stem wall is 1.7 mm; minimum well-floor material above the deck is 2.8 mm. The exact polyhedral centroid must be ≥1 mm below the sphere center and ≤0.15 mm off-axis, assuming uniform density. Runtime bounds and independent tests reject balance-breaking input. **A low center of mass is a geometry condition, not proof of tippe-top inversion.** Material friction, angular momentum dynamics and physical wear are not simulated.

`validate.mjs` independently parses actual exported binary STL, checks normals, welded edge incidence and directed winding, per-component volume, analytical mm dimensions and exact mesh consistency. It exercises defaults, min/max, all 64 parameter corners, presets, deterministic variations, both image conversion modes and both STL fixtures. Boolean probes check solid body, stem floor, open well, annular rim and difference volumes outside the recessed import zone. Tests prove imports leave both contact envelopes unchanged. Browser scripts exercise real PNG/JPEG and ASCII/binary STL picker imports, changed pixels/settings/transforms affecting STL, invalid/truncated/excessive files, empty relief, bad dimensions, unsupported meshes, invalid transform recovery, per-body downloads, preview/export fingerprints, presets/variations, portable save/open, undo/redo, palette neutrality, drag/drop, 320/390 px phone layout, touch orbit/pinch, collapsible controls and reachable export. Reports distinguish geometry checks from unperformed physical tests.

## Printing / tactile use

- PLA or PETG, uniform **100% infill**, 0.4 mm nozzle, 0.15–0.2 mm layers. Nonuniform infill invalidates the modeled mass assumptions.
- Upright coordinates as exported. **Removable supports under the lower hemisphere and a brim are required.** The small bottom clip is not sufficient for support-free printing. The upper well is open and printable without internal support.
- Remove supports completely and polish the spherical rolling surface; scars or an uneven annular stem rim can prevent inversion. Print Soft Turn first as a full-size material/finish calibration. No universal tolerance or guaranteed spin time is claimed.
- No bearings, magnets, fasteners, compliant parts or assembly. Pinch the stem rim, gently hand-spin on a hard smooth tray, nudge toward a tilted roll and catch/reset. It may wobble or settle instead of inverting. Imported art remains recessed so the contact surfaces are protected.
- Geometry-only prototype, not physically tested. No safe speed, force or fatigue rating. Keep gentle spins contained, away from desk edges; stop for cracking or rough edges.
