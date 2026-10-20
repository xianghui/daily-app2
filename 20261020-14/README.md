# Pourform — parametric utility funnel

A browser-based hollow funnel generator. React + Vite, bundled Three.js and OrbitControls. No CDN, server, API keys or paid services are needed for geometry or export. Build assets run locally or from static hosting.

## Run / export

`npm install`, `npm run dev`; production: `npm run predeploy`. Per-app `npm run deploy` uses gh-pages, but this collection is published through the **root monorepo** deploy folder instead.

Choose Everyday, Small bottle or Wide mouth, or adjust numeric inputs and matching sliders. Reset restores Everyday. Drag the preview to orbit, pinch or wheel to zoom, and use Fit to view. Download STL writes a binary STL with millimeter coordinates and a descriptive filename. STL has no embedded unit metadata: import in millimeters.

## Parameters (all mm)

| Parameter | Supported range | Default |
|---|---|---|
| Inlet inner diameter | 24–120 | 64 |
| Outlet inner bore | 4–30 | 12 |
| Radial wall | 1.8–4 | 2 |
| Cone height | 12–100 | 34 |
| Straight spout length | 8–45 | 22 |
| Bottle clearance, diametral | 0–2 | 0.6 |

Inlet must be at least bore + 4. Cone height must be at least (inlet − bore)/2 to limit the cone's outward overhang to 45° from vertical. Impossible or nonfinite dimensions disable export, remove the preview, and display the correction needed. All dimensions are bounded; default output is 68 × 68 × 56 mm. The displayed X/Y diameter includes walls. Z is cone height + spout length.

**Fit:** spout outer diameter = bore + 2 × radial wall. Recommended minimum bottle opening = spout outer diameter + clearance. Clearance is an allowance for the bottle measurement, not a modification of the funnel mesh. Measure the actual opening and compensate for printer dimensional error. Cone normal wall thickness is radial wall × cos(cone angle), at least 1.27 mm throughout the supported range (the vertical spout wall is thicker).

## Geometry and validation

A simple six-vertex radial/height annular cross-section is revolved into a single closed connected shell with 96 segments (1,152 triangles). The inside is an intentionally open flow passage; its bottom and upper annular rims connect the inner and outer surfaces into a closed solid. No caps obstruct flow. No intersecting cylinders, internal faces, overlapping solids, or CSG seams. Bounded resolution keeps generation synchronous and small. Preview and STL serialize the identical final BufferGeometry. Coordinates use Z-up and the bottom is Z=0.

`node validate.mjs` tests all 64 extreme parameter combinations plus presets and invalid cases. Results: 35 accepted combinations, 35 blocked. It parses the binary STL, checks length and triangle count, finite coordinates, no degenerate faces, exported normals agreeing with winding, positive signed volume, expected XYZ extents, and welded edge incidence (1e-5 mm): exactly two opposing incident triangles on every edge. The polygonal annular-frustum analytic volume also matches the exported mesh. The simple positive-radius profile with distinct inner/outer boundaries guarantees no self-intersections for allowed inputs.

Real Chromium browser testing exercised presets, reset, numeric controls, default/min/max exports, invalid export blocking, fit-to-view and a 390 × 844 mobile viewport. Actual browser downloads were parsed with the same independent STL checker. Touch orbit and two-finger pinch changed the rendered canvas, mobile input worked, Download was reachable, and no horizontal overflow or page runtime errors occurred. Reports and screenshots are included. Gallery inline scripts were compiled with `new Function`, the new entry was checked exactly once, and all earlier entries were retained. Production-build browser checks are recorded separately.

## Printing

Print upright: spout ring on plate, mouth up. Start with 0.2 mm layers and 3–4 walls. Add an external brim for the small annular footprint. No supports expected within the allowed 45° cone slope, but inspect the slicer's overhangs and thin-wall toolpaths. PLA or PETG may suit dry workshop transfers. Layer lines may leak; test over a catch tray before liquid use. Not rated for food contact, hot liquids, solvents, pressure or structural loads. **No physical print test was performed.**
