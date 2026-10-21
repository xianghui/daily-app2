# Axis Nest — parametric two-axis gimbal fidget

A browser-based React + Vite STL generator for three independently tilting nested rings, assembled with four printed friction-seat pivot pins. Unlike earlier planar ring spinners, two perpendicular axes let fingers change the plane of rotation. No purchased hardware, API, CDN or paid service. Manifold WASM, Three.js and React bundle locally; generation runs in a worker with fixed 128-segment rings and 48-segment bores/pins.

## Run and export

`npm install`, `npm run dev`; `npm run predeploy` builds the app. Per-app deploy uses `gh-pages -d dist`, but public publication is through the parent monorepo's root predeploy/deploy flow. Base: `/daily-app2/20261021-13/`.

Change numeric inputs or matching sliders, choose Pocket/Palm/Loose PETG presets, or Reset. Orbit the final mesh with drag, pinch or mouse wheel; fit and zoom buttons also work on touch. Download all seven separate closed bodies in a nonoverlapping bed layout, or any individual part as binary STL. STL units are millimeters; filename includes palm diameter and clearance. Preview/export use identical final mesh data. Assembly mode shows only rings (pins deliberately hidden), not a simulation of friction; exported parts always retain print orientation/layout. The UI reports actual print-layout bounds and the neutral assembled envelope including outer pin heads, not a constant height throughout tilting.

## Dimensions and supported bounds (mm)

| Parameter | Range | Default |
|---|---|---|
| Palm diameter | 72–96 | 84 |
| Radial ring grip width | 6–8 | 7 |
| Ring thickness | 8–10 | 9 |
| Comfort bevel | 0.4–1.2 | 0.8 |
| Outer scallop depth | 0–0.6 | 0.3 |
| Pivot radial running clearance | 0.25–0.60 | 0.40 |
| Pin diametral interference | −0.10–0.15 | 0.05 |

Invalid/nonfinite/out-of-range parameters disable export and show clear errors. Each ring's outer radius decreases by wall width + `2.2 + clearance`. Pivot pin shaft diameter 3.20; running bore diameter `3.20 + 2*clearance`; blind grip bore diameter `3.20 − interference`. Blind bores are 4.5 deep with at least 1.5 mm radial floor. Pins have 5.6 diameter × 1.5 mm heads, approximately 4 mm tip engagement and an intended 0.3 mm under-head gap. The 0.01 mm shaft/head union overlap is intentional solid CSG, not an internal interface. Ring wall/bevel bounds leave substantial bore ligaments; no compliant snap assembly is used.

## Printing and assembly

Print the provided layout flat, pins upright on broad heads. Suggested 0.4 nozzle, 0.2 layers, four walls, 30% infill, PLA/PETG. Intended support-free, but small horizontal bore roofs require short bridging; clear sagging filament with a hand reamer or sandpaper. Avoid indiscriminate enlargement of blind grip holes. All exported parts lie on Z=0.

First nest inner ring in middle and insert Y pins through running bores into inner blind bores. Then nest that subassembly in outer ring and insert X pins. Leave ~0.3 under each head. Pins must grip the child ring but rotate freely in the parent. Keep tips snug; this is friction retention, not a positively locked snap. Pull exposed heads with pliers to service. Never force assembly, glue a bearing, or use loose pins. Check retention before use. Small parts: not for young children.

Start with 0.40 radial clearance for PLA or 0.60 for PETG. These are **not universal tolerances**. Print Pocket middle + inner rings and two Y pins as a full-scale calibration trial first. Tune running clearance separately from grip interference in 0.05 increments. Positive interference tightens grip; negative compensates for undersized bores. Correct elephant foot and bore bridging before evaluating fit. Do not bend rings to assemble. No hardware alternative is required because all components are printed.

## Digital verification, not a physical print claim

`npm test` parses actual binary STL for defaults, all presets, range extremes and all 128 min/max corners (134 cases). Combined layout and each of seven individual parts are checked for finite/nonempty triangles, no degenerate faces, expected millimeter bounds, consistent stored normals/opposed edge winding, positive volume per solid, and exactly two incident faces for each welded edge (1e-5 mm weld tolerance). Robust Manifold CSG provides closed solid unions and differences rather than overlapping visual meshes.

Mechanism checks: continuous swept spherical bounds prove nested rings stay clear at all tilt angles; a separate pin-head sweep checks middle Y heads against the outer ring. 361 sampled angles cross-check ring sweeps. Tests also check bore ligaments, blind-bore floors, tip engagement, under-head gap, finger opening, and disjoint export bounds. Intentional pin-tip interference is a calibrated grip fit, not a moving clearance; digital geometry does not establish physical friction, print accuracy or retention strength.

`node browser-test.cjs` uses Playwright to exercise controls, download and parse real STL files, match export fingerprints to preview meshes, test presets/extremes/individual parts, block invalid inputs, move the assembly view, and test phone touch orbit/pinch, 320/390 px layouts and reachable downloads. `node gallery-test.cjs` validates gallery inline syntax, unique entry, preserved earlier entries and browser search/runtime. Reports and screenshots are saved locally in this folder. `production-validation.json` records the same browser suite against the built deployment when run with TEST_BASE.

No physical print has been tested. Printability/fit guidance is provisional and requires printer/material calibration.
