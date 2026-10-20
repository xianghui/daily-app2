# Tick Tide — parametric thumb ratchet

A local React + Vite generator for a physical, hardware-free ratchet fidget. A tangent PETG cantilever rides asymmetric wheel teeth for repeated ticking in one direction, resisting reverse motion. Unlike the gallery's coupled gears, this uses compliant tooth/pawl engagement. Not a torque-rated lock.

## Controls (all dimensions mm)

| Parameter | Range |
|---|---|
| Wheel radius | 18–28 |
| Clicks/revolution | 12–28 integer |
| Wheel thickness | 4–7 |
| Radial axle and axial running gap | 0.20–0.60 |
| Tooth rise | 0.60–1.00 |
| Tangent flexure length | 24–36 |
| Flexure in-plane thickness | 1.0–1.6 |
| Palm scallop depth | 0–1 |
| Radial friction-cap interference | 0–0.12 |

Presets, numeric fields, sliders, reset, final assembled and print-layout X/Y/Z dimensions are provided. Invalid/nonfinite inputs and fractional tooth counts block generation/export. Fixed 6 mm axle and 10 mm OD retaining cap have at least 1.4 mm radial overlap throughout the range. Cap retention is friction, not an untested snap fit.

## Generate / export

`npm install`, `npm run dev`, `npm run predeploy`. Three.js touch/desktop orbit, zoom and fit use the exact final triangles used by binary STL export. Download the separated three-body kit, individual base/wheel/cap, or axle/wheel/cap fit coupon. Export dimensions are mm. Everything including Manifold WASM is bundled locally, without CDN, server, API keys or paid services. React, Three.js, manifold-3d; Vite and Playwright for tooling; gh-pages for publishing. Bounded 96-segment circles and at most 140 wheel outline vertices keep generation small; no unbounded resolution control.

## Print and assembly

PETG base; PLA is only a fit prototype because the pawl flexes repeatedly. Print flat as previewed, 0.4 mm nozzle, 0.2 mm layers, 3–4 walls, 30% infill. The flexure prints directly on the bed inside an open relief notch: no floating cantilever or underside bridging. No supports/hardware. Keep the notch clear and deburr elephant foot at bores.

Print the fit coupon first. Starting clearance 0.30 mm (tuned FDM), 0.50 mm (looser trial) is not universal; printer/material matter. Cap interference is radial, twice that diametrally. Zero interference may be loose. Calibrate and pull-test retention. The actual base is the flexure test; gently flex it before assembly and stop at whitening/cracking. Thickness outside 1–1.6 mm is intentionally unsupported.

Slip the wheel onto its axle with a tooth valley at the tip, gently holding the pawl out if necessary. Use removable clearance-thickness shims below/above the wheel when pressing the cap onto the upper 3 mm of the post; remove shims afterward. Do not clamp the wheel. Turn toward the long ramp and do not force reverse. Small parts/pinch points; not for young children.

## Validation performed

- `node validate.mjs`: 54 default/preset/extreme/mixed/tooth-count cases. Actual binary STL parsed for nonempty triangles, finite coordinates, nondegenerate area, matching normals, consistently directed faces, welded 1e-5 mm edge incidence of exactly two, positive enclosed volume for each connected solid, component counts, and expected geometry bounds. Individual parts and coupon checked too.
- Manifold robust CSG unions stationary features and produces closed nonzero-volume solids. Three intended parts are separated in export with no accidental unions or intersections.
- Mechanical tests: assembled wheel/base zero intersection at a valley; 41 sampled positions per tooth cycle demonstrate tooth/pawl contact and release. Contact is **intentional elastic interference**, not a collision-free rigid ratchet. The stationary pawl must deflect to function. Axial/radial clearance and flange overlap are checked analytically. A conservative slender-beam strain screen `1.5*t*(rise+0.15)/length² < 0.6%` bounds travel; this is not nonlinear FEA, fatigue certification, or a physical force measurement.
- `node browser-test.cjs`: real downloaded STLs match the exact parameterized geometry byte-for-byte; presets, min/max settings, sliders, invalid inputs, part/coupon downloads, changing preview, fit, 320/390px phone layout and CDP touch orbit/pinch pass without runtime errors.
- `node gallery-test.cjs`: every root inline script compiled; unique newest STL entry; all earlier entries preserved; rendered gallery and search checked.
- Production verification is saved separately when deployment completes.

No physical print was performed. Friction retention, spring force, sound and long-term fatigue require a real coupon/base print. Geometry checks are not proof of universal printer fit.
