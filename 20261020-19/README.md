# Saddle Rock
Browser-based parametric STL workshop for a quiet, end-to-end rocking thumb fidget. Unlike the preceding squeeze spring, roller and rotating ring, this is one rigid saddle rocking over a circular sole on a desk. No joints, captive bodies, hardware, or assembly. Not a clicker or self-returning mechanism.

## Run / export
`npm install`, `npm run dev`; `npm run predeploy` builds Vite. Per-app deploy scripts exist, but publication uses the parent monorepo's root deploy flow. React, Vite, Three.js and OrbitControls are bundled locally. Generation/export need no API, key, CDN, or server. Binary STL uses millimeters, Z up, a descriptive filename and the exact same vertices/triangles as the preview (preview only maps axes to Three's Y-up convention). There are 1,540 triangles; updates are synchronous and bounded. Drag to orbit, pinch/scroll to zoom, Fit view to reset. All presets, inputs, sliders and reset regenerate geometry.

## Parameters (mm except count)
| Parameter | Range | Default |
|---|---|---|
| Length | 36–76 | 54 |
| Width | 16–34 | 24 |
| Crown height | 8–18 | 12 |
| Sole rise | 2–7 | 4 |
| Saddle depth | 0–4 | 2 |
| Ridge relief | 0–0.8 | 0.4 |
| Ridge count | even integers 6–16 | 10 |

Conservative minimum section = crown − rise − saddle depth; values below 3 mm are rejected. This is a solid, not a thin shell or compliant flexure. Crown is a baseline; actual final Z includes ridge relief and is calculated from the final mesh, displayed alongside X/Y. Fit clearance is not applicable to a single solid. No moving interfaces to fuse or retain.

## Construction and mechanics
An x-monotone simple profile has a circular underside of radius `(a² + rise²)/(2*rise)` and a concave crown with cosine ridges. Positive section separation, ordered profile samples, and extrusion along Y exclude profile crossing, overlapping bodies and self-intersections. Paired top/bottom strip caps avoid skinny ear-clipped triangles at nearly collinear ridge samples. Boundary-only triangles produce one closed solid without internal faces.

The circular sole's tangent range gives an estimated rocking limit `±asin(a/radius)`. This is not a stable hard stop: use light pressure and do not force beyond the ends. Wide side faces resist lateral rolling. No guarantee of automatic return; center of gravity, hand pressure and desk friction matter.

## Printing
Rotate 90° about X so a flat X/Z side profile lies on the bed; the width becomes build height. Do NOT print on the curved sole. Constant extruded cross-section then requires no supports or bridges. PLA or PETG, 0.4 mm nozzle, 0.2 mm layers, 3 walls and 20–30% infill are starting recommendations, not universal prescriptions. Optional 3 mm brim. Print Pocket first as a small calibration sample to assess adhesion, sole finish and texture; tune ridge height in 0.1 mm steps. Deburr/shallow-sand the sole if seams catch. Use a desk mat to avoid scratches. No assembly, release, fasteners, bearings or magnets. No flexible-part thickness claims.

## Validation
`node validate.mjs`: parses binary STL, finite coordinates, nonempty/nondegenerate triangles, stored normal alignment, opposite edge directions, exactly two faces per welded undirected edge (1e-5 mm tolerance), single connected closed component, positive volume and expected bounds. Checks 128 range corners: 80 valid and 48 blocked; default and invalid numeric/count cases. Analytic profile separation and sole-contact angular calculations complement mesh checks; not a physical dynamics simulation.

`node browser-test.cjs`: real browser STL downloads compared byte-for-byte with generator output; default, Pocket, Deep rock, min/max/mixed settings, slider and invalid/empty inputs, changing preview, fit button, mobile STL export, 320/390px overflow checks, actual touch orbit and pinch zoom. Uses local Playwright installation for development only. Validation JSON and desktop/mobile screenshots record results. Gallery test compiles inline scripts and checks runtime, category order, exact new entry, link and preservation of existing entries.

**No physical print was tested.** Digital geometry and mechanism calculations do not establish print success or tactile quality on every printer/material.
