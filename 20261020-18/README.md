# Orbit Nest — print-in-place fidget STL generator

React + Vite, bundled Three.js, browser-only binary STL generation. Hold the scalloped outer grip and rotate the inner ring with a thumb. A concentric double-cone / V race retains the inner rotor axially; it is a friction fidget, not a free-spinning ball bearing. Two separate closed solids print together. No hardware, adhesives, flexures or assembly.

## Run / export

`npm install`, `npm run dev`; `npm run predeploy` builds `dist/`. The required per-app `deploy` script uses gh-pages, but publish this collection using **root** predeploy/deploy, never the individual deploy script. Base: `/daily-app2/20261020-18/`.

The main Download button exports both bodies in their final print-in-place positions. Fit coupon exports a smaller 44 × 44 × 8 mm mechanism using the chosen radial gap. Individual exports are for inspection only: rigid captive rings cannot be assembled after separate printing. All STL coordinates are millimeters. Preview and export consume the exact same generated vertices/triangles; no secondary display-only geometry or server.

## Parameters / limits

| Parameter | Range | Default |
|---|---|---|
| Outer diameter | 44–72 mm | 52 mm |
| Height | 8–16 mm | 10 mm |
| Finger opening minimum diameter | 16–28 mm | 22 mm |
| Radial running clearance | 0.25–0.60 mm | 0.40 mm |
| Scallop radial depth | 0–1 mm | 0.65 mm |
| Scallop count | 8–20 integer | 12 |

Finger scallops enlarge the hole locally by up to twice their radial depth. Outer scallops reduce the outside locally; the nominal outer diameter is its envelope. Overall bounds shown as X × Y × Z. Ring interface radius R = diameter/2 − 6 mm. Ridge rises 1.8 mm radially from bottom to middle then returns. Outer bore follows this same profile plus clearance. Minimum wall is enforced at 2.4 mm. Unsupported radial/vertical slope = 3.6/height, at most 24.3° from vertical. Axial captive overlap = 1.8 − clearance, at least 1.2 mm. First axial contact estimated at clearance × height / 3.6. Entire race is rotationally symmetric; grips are confined to non-mating surfaces. Polygon error is conservatively deducted from running clearance during checks.

## Print guidance

Print both rings flat, Z=0, as exported. Start with PLA, a 0.4 mm nozzle, 0.16–0.20 mm layers, 3 walls and 20% infill. No supports or brim spanning the gap. Compensate elephant foot. Suggested **starting** radial gaps: fine PLA 0.30 mm, everyday PLA 0.40 mm, PETG 0.55 mm. Printer, filament, extrusion and slicer settings change fit: none is universal. The small coupon is still a two-body retained rotating mechanism, not just a gap gauge.

Cool, remove both bodies together, gently twist to release. Do not force fused rings; increase gap and reprint a coupon. Small strings can be deburred with the part held safely. Hardware-free; no compliant thin features. Some axial play is necessary. Not physically printed or tested; digital validation is not proof of real-world fit, strength or durability.

## Modeling / validation

Direct annular radial-profile meshing, 240 angular segments, three profile levels, 5,760 triangles total. No intersecting primitives, hidden caps or CSG dependencies. Each ring has unique inner/outer angular strips and end annuli, creating one closed oriented solid. Strictly ordered positive radii and monotone angular strips exclude self-crossings. Mating polygon gap is bounded for every rotation angle, not only the initial pose. Fixed bounded resolution keeps browser generation responsive without a worker.

`node validate.mjs` parses **binary STL**, welds vertices at 0.00001 mm, verifies finite coordinates, nondegenerate triangles, stored normal direction, two opposite incident faces on every edge, connected components, positive volume for every component, and nominal bounding dimensions. It checks all 64 range-corner combinations (48 valid, 16 rejected for thin wall), defaults, presets, coupon, separate-body exports and invalid / blank / fractional inputs. Mechanical checks cover radial wall ordering, whole-rotation polygon clearance, axial retention, overhang and ±90% free axial travel. These are geometric calculations, not a physics simulation or print test.

`node browser-test.cjs` uses the locally installed Playwright harness (absolute environment path in that test file only, not an app dependency). Real Chromium downloads are parsed at default, all presets, representative min/max/mixed limits, slider changes and phone edits; invalid and empty inputs disable export. Checks preview changes, fit view, 320/390 px horizontal layout, actual touch orbit and pinch, coupon download and runtime errors. JSON reports plus desktop/mobile screenshots are included.

Dependencies: React, React DOM, Three.js; development Vite, React plugin, ESLint scaffold and gh-pages. All runtime dependencies are bundled locally; no CDN imports, API keys, accounts or network services are required for geometry/export.
