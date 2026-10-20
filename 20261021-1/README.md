# Arch Pulse — shallow-arch fidget STL studio

A React + Vite, browser-only parametric generator for a hardware-free shallow-arch thumb press. Hold the rounded frame and press the integral circular pad **in the plane of the print** toward the stop. A clamped arch changes resistance as it flattens/inverts. Sharp snap-through, bistability, return force and fatigue life are **not guaranteed**: the physical print has not been tested.

## Run & export

`npm install`, then `npm run dev`. `npm run predeploy` builds the app with base `/daily-app2/20261021-1/`. The individual `deploy` script is present as requested; publication of the collection must use the ROOT monorepo `npm run predeploy` and `npm run deploy`, not the individual script.

Rotate and pinch/scroll the Three.js preview; use Fit view to reset framing. Presets, number fields, sliders and Reset update the same final triangle array used for a one-click **binary STL**. Coordinates are millimeters. The preview recenters the mesh for viewing only. Export has a flat Z=0 build face. No account, network service, API key, paid library, CDN or hardware is needed. The local Manifold WASM asset loads from the built app's own assets directory.

## Parameter ranges (all millimeters)

| Parameter | Range | Default |
|---|---|---|
| Free beam span | 40–64 | 52 |
| Palm opening depth | 28–40 | 30 |
| Frame wall | 4–7 | 5 |
| Arch rise | 1.2–3 | 2 |
| Flexure width | 0.8–1.4 | 1 |
| Print thickness Z | 2.4–4 | 3 |
| Thumb pad diameter | 5–8 | 7 |
| Grip scallop depth | 0–0.6 | 0.3 |
| Inverted pad / stop gap | 0.6–1.2 | 0.8 |

Final size: X = span + 2 × frame, Y = opening depth + 2 × frame, Z = print thickness. Default **62 × 40 × 3 mm**. Flared roots intentionally unite with the frame; the pad, beam and stop form one CSG-unioned solid, not separately moving fused bodies. Motion is elastic deformation.

The reversal strain screen `8 × web × rise / span²` must not exceed 1.2%. This is a shallow-parabola geometric estimate, **not** a material rating, FEA result or fatigue guarantee; root/pad stress concentrations, stop overtravel, printing stresses and nonlinear buckling are not represented. The stop height must be ≥2 mm and upper pad space ≥3 mm. Nonfinite, out-of-range and unsupported combinations block download; the last valid preview remains visible. At least 3.4 mm of frame remains after grip cuts. Max model sampling: 160 beam steps, 64 pad segments and bounded rounded-frame/scallop segments.

## Printing, calibration and use

- Print broad face flat, no supports or assembly. Start with PETG, 0.4 mm nozzle, 0.2 mm layers, 0.4 mm line width and 100% infill. Check the slicer for at least two continuous extrusion lines through the entire web and good attachment at both roots.
- Minimum web 0.8 mm and minimum Z 2.4 mm are design bounds, not universal material limits. Increase web if line paths break. PLA may be brittle; TPU may not snap. Printer, slicer, flow, layer adhesion and filament all affect results.
- A compact flex sample STL uses a 40 mm span, 1.2 mm rise, 6 mm pad and your web/Z settings. It is a line-continuity/material trial, **not** an equivalent stiffness coupon. Tune flow, temperature, line width and elephant-foot compensation before a full print. No sliding fit exists, so there is no universal clearance preset; the gap is elastic travel space, not a joint tolerance.
- Cool fully before removal; support the frame. Remove strings without cutting the beam. No release cuts or fasteners. Press gently in-plane toward the stop, not through Z. The stop is not a force limit or assurance of a safe stroke. Nudge back gently if the arch stays inverted. Stop on whitening, cracking, permanent set or excessive force. Not a child-safe, medical or load-bearing product.

## Dependencies

React/React DOM for UI, Vite and React plugin for bundling, Three.js + OrbitControls for preview, Manifold-3D for robust local 2D boolean union and extrusion, gh-pages for required deployment scripts. Dependencies and WASM are bundled locally; see `package-lock.json` for exact versions. No remote fonts are used in the app.

## Validation performed

`node validate.mjs` runs the local Manifold engine and reparses the actual float32 binary STL: triangle count/length, finite coordinates, nonzero area, stored normals, consistently opposed edge winding, welded closed-edge incidence (1e-5 mm), connected components, positive component volume and analytical millimeter bounding dimensions. All **512 min/max corners** were exercised: **384 valid and manifold, 128 correctly blocked** by the strain screen. Beam outlines are checked for crossing segments; 41 rest-to-inversion parameterized positions check beam/pad space against frame and stop. This is geometric motion-space screening, not deformation simulation or proof of physical function.

`node browser-test.cjs` (Playwright available in the automation workspace) exercises actual browser-generated downloads at default, all presets, representative minimum/maximum combinations, a slider, a flex sample, invalid and empty fields, reset and fit. Download bytes match Node generation for the same parameters. Preview change is observed. Mobile tests include 390px and 320px widths, reachable download, actual touch orbit and two-finger zoom, and no runtime errors. Reports and screenshots are included.

`node gallery-test.cjs` compiles inline root scripts, checks one new entry and all 23 preserved entries, then verifies gallery rendering, STL-first category, correct link and search in Chromium. Production is smoke-tested after root deployment separately.

**Not performed:** physical print, measured force, fatigue/cycle-life testing, FEA or material certification. Watertight geometry alone does not prove a working snap fidget.
