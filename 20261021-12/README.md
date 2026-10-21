# Corner Waltz — constant-width palm fidget STL studio

A browser-based React + Vite parametric generator, not a static model. A Reuleaux triangular rotor turns and translates inside a square cavity. Distinct from an axle spinner, circular race or linear shuttle. Two opposed window lips retain the rotor; the lid has four integral friction pegs. Three separately printed solids, no hardware, glue, bearings or supports. Actual physical print **not tested**.

## Run

`npm install` then `npm run dev`. `npm run predeploy` builds. Per-app `deploy` uses gh-pages as requested; public combined deployment is performed from the repository root, not this folder. Base: `/daily-app2/20261021-12/`.

## Parameters — all dimensions millimeters

| Parameter | Range | Default |
|---|---|---|
| Rotor constant width | 30–50 | 40 |
| Rotor thickness | 5–9 | 6 |
| Frame wall width | 8–11 | 9 |
| Ergonomic corner chamfer | 3–6 | 5 |
| Outside-edge scallop depth | 0–0.6 | 0.3 |
| Running gap, per side (also above/below rotor) | 0.25–0.7 | 0.4 |
| Diametral lid peg interference | −0.10–0.15 | 0 |

Cavity side = rotor width + twice running gap. Frame outer side adds twice wall width. Lip thickness is 2 mm, each blind peg bore diameter 3 mm/depth 4 mm. Peg diameter = 3 mm + interference; projection 3.49 mm. Positive interference is intentional nominal overlap at this stationary friction interface, never at the moving rotor. The full print-layout and assembled X/Y/Z bounds are shown. Large combined layouts can exceed a small bed; download each part individually instead.

## Geometry / export

Locally bundled `manifold-3d` WASM performs robust CSG subtraction and union in a dedicated worker. The convex rotor contour uses 48 facets per 60-degree circular arc. All meshes are bounded-resolution and generated client-side. React and Three.js/OrbitControls handle the UI and touch orbit/pinch. No remote APIs, keys, fonts, CDN modules, or generation services.

Preview meshes and binary STL use the same final worker result and parameter object. Assembled mode applies only rigid placement transforms; export always uses separate flat bed-ready parts. An assembled pose is not exported. Individual or all-part STL uses millimeter coordinates. Each component is closed; print-layout components are disjoint. Invalid and non-finite inputs disable export and show errors; an outstanding rebuild also disables download.

## Print, calibrate and assemble

Print frame bottom down, rotor flat, lid exterior down with pegs upwards. Suggested starting point: 0.4 mm nozzle, 0.2 mm layers, 3 perimeters, 20–30% infill. PLA or PETG. No supports required. Do not print the assembled preview as one object.

Start running gap at 0.40 mm/side PLA or 0.60 mm/side PETG, subject to your printer/material. Print and measure rotor width first, compare with intended cavity = width + 2 × gap. Deburr/sand elephant foot and rubbing surfaces. Use Pocket preset frame + lid as a full-size fit trial before larger prints. Begin at zero interference; try −0.05 mm if tight, +0.05 mm if loose. Positive interference may require sanding and should not be forced. These are starting values, not guaranteed tolerances.

Drop rotor into frame, invert lid and align all four pegs, press evenly. Lid flat face lands on frame rim; peg tips stop short of blind-bore bottoms. Gently pry at the outer seam to service. Hold frame and roll exposed rotor through either window. Rotor center drifts naturally with angle. No compliant flexures; the press pegs are not snap hooks and should not be repeatedly bent. Minimum 2 mm lip and 5 mm rotor thickness enforced. Small parts are unsuitable for young children.

## Validation performed

`npm test` writes `geometry-validation.json`. 134 settings: defaults, three presets, all-minimum/all-maximum and all 128 endpoint combinations. Every part and combined binary STL parsed independently: nonempty triangles, finite coordinates, nondegenerate faces, positive volume per connected component, normal/winding agreement, consistently opposed adjacent winding, and exactly two incident faces per welded undirected edge (1e-5 mm quantization). Checks expected millimeter bounds and exactly three separate print-layout solids. Robust CSG and convex ordered rotor arcs avoid unintended self intersections and internal overlapping faces.

Mechanical calculations at 720 angles per case verify square-cavity clearance. Checks include vertical clearance, a conservative tilt/diagonal-window retention bound, convex rotor contour, peg positions clear of rotor cavity and outside chamfer, blind-bore bottoms, peg insertion depth, and disjoint export layout. Constant-width faceting is an inward approximation; gap remains at least selected clearance. Static positive peg interference is intentional and explicitly calibrated. No force, friction or wear simulation and no physical print test.

`node browser-test.cjs` downloads actual STLs using headless Chromium and parses them: defaults, presets, range extremes, slider input, all individual parts and phone export. Verifies exact preview-model/export byte fingerprint (independent Node/WASM mesh ordering can differ slightly), independent dimension checks, invalid values blocked, preview changes and assembled movement, 320/390 px no-overflow layout, actual touch orbit and pinch, fit/zoom buttons, no runtime errors and no off-origin requests. Screenshots and JSON reports retained. `TEST_BASE` / `TEST_REPORT` allow repeating against the production build.

Dependencies: React, React DOM, Three.js, manifold-3d, gh-pages; Vite/React plugin and Playwright for development/testing. See lockfile for pinned versions.
