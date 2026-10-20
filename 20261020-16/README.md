# Palm Spring

A browser-based parametric **physical fidget STL generator**, not a game. Generate a single continuous oval flexure loop: gently squeeze across its short axis, release, and trace the scalloped outer grip. No accounts, server, API, hardware, joints, assembly, captive-part release or separate moving bodies. Geometry has not been physically printed or fatigue-tested.

## Run and build

```sh
npm install
npm run dev
npm run predeploy
```

React + Vite, locally bundled Three.js and OrbitControls. Binary STL serialization is implemented locally. `gh-pages` is installed; app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public combined-site publishing is performed from the parent monorepo's root deploy flow, not this app's deploy script. Vite base: `/daily-app2/20261020-16/`. Playwright is a development-only validation dependency.

## Controls and units

Every dimension is **millimeters**, except scallop count. Both numeric and range controls are provided, with presets and reset.

| Control | Range | Default |
| --- | --- | --- |
| Core ellipse length | 48–90 mm | 68 |
| Core ellipse width | 28–50 mm | 38 |
| Finger contact / extrusion height | 6–14 mm | 9 |
| Normal-offset flexure wall | 1.2–2.4 mm | 1.6 |
| Outward scalloped grip relief | 0–0.7 mm | 0.4 |
| Scallops | even integers 8–24 | 16 |

Length must exceed width by at least 12 mm; aspect ratio must not exceed 2.5. The minimum ellipse radius of curvature must exceed wall thickness by 0.8 mm. Invalid, empty, nonfinite or out-of-range values block both downloads and show an error. Grip relief can slightly enlarge the bounding dimensions beyond core dimensions: the readout reports the **actual final mesh X/Y/Z**.

## Solid modeling and STL

A 384-segment ellipse is offset inward along its normal by the chosen wall thickness. Outward sinusoidal grip relief stays outside the core ellipse. The closed outer and inner contours are joined with indexed annular surface strips and sidewalls, making one manifold solid (3,072 triangles). No overlapping solids, CSG seams, internal faces or remote imports. Curvature validation prevents an inward offset cusp. Resolution is bounded and generation is small enough to remain on the main thread. Preview and export share the exact BufferGeometry; invalid values cannot export stale geometry.

Download STL exports this geometry in binary STL, with millimeter dimensions in the filename. STL is unitless, so import it as mm in the slicer. The matching flexibility coupon is a separate **48 × 28 × 6 mm core** loop with 12 scallops, sharing the selected wall and grip. It tests extrusion/return, not identical full-size spring force. No moving-interface fit clearance is required because this is one compliant body.

## Printing and use

- Print flat in XY, broad face on the bed, open center vertical. No supports or hardware. No overhanging roofs.
- Starting settings: PETG, 0.4 mm nozzle, 0.2 mm layers, 3–6 perimeters. Inspect slicer thin-wall toolpaths and bonding. Elephant-foot compensation is useful; add brim only if needed.
- Start PETG walls at 1.2–1.6 mm; 2.2–2.4 mm is substantially stiffer. TPU is softer but less springy. PLA can crack or fatigue; do not assume long life.
- Print the coupon first; compare 1.2, 1.6 and 2.0 mm walls under identical settings. Measure wall dimensions and check bonding. Begin at **0.5 mm total compression**, then release and check full elastic return. Only try up to 1 mm if return is complete. Stop at whitening, cracks or permanent set; never fold flat. Stiffness/fatigue have not been measured and depend on material, printer, slicer and use.
- Bounds keep the opening above 22 mm even after 1 mm total short-axis compression. This rules out opposite-side geometric contact at that displacement, but is **not** an elastic simulation or a guarantee against local material failure.
- No assembly, release, clearance calibration, retention or hardware alternative is needed. Not a load-bearing device.

## Reproducible validation

```sh
node validate.mjs
# start local Vite server on 127.0.0.1:5176 first
node browser-test.cjs
node gallery-test.cjs
```

`geometry-validation.json` records default, minimum, maximum, coupon and valid endpoint cross-product cases (20 total); five invalid inputs are rejected. Exported binary STL is reparsed, not just the in-memory mesh. Checks: nonempty exact binary length; finite coordinates; nondegenerate faces; actual mm bounds; positive enclosed volume; welded undirected edge incidence exactly two with opposite directed incidence; expected genus-one topology. Analytical profile checks cover both closed boundaries, no self-crossing, nonoverlapping convex annular strips, minimum wall, curvature margin, and opposite-side opening under the suggested compression. The construction has one connected body and does not involve collisions/retention between separate parts.

`browser-validation.json` records real Chromium downloads for default, presets, extremes, coupon and slider settings; invalid and blank input blocking; changed preview; 390 px phone layout; touch orbit, pinch zoom and phone STL download, with no runtime errors. Screenshots accompany these reports. `gallery-validation.json` checks all inline scripts, exactly one new STL entry, preserved earlier entries, correct link, category order, rendering and search.

These are geometry, mechanism-envelope and software checks, **not physical print testing, elastic FEA or fatigue testing**. Material recommendation and small suggested motion are provisional starting guidance, not certified performance.
