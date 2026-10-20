# Spiral Pause

Browser-only parametric **planar torsion-spring fidget**. Hold the outer grip and gently twist the center pad a few degrees, then release. Unlike a freely rotating ring, the continuous spiral web supplies restoring resistance. It does not click or latch. No hardware, assembly, snap fits, captive separate parts, or external services.

## Run / build

```sh
npm install
npm run dev
npm run predeploy
```

React + Vite; locally bundled Three.js / OrbitControls for touch orbit and pinch/scroll zoom, and Manifold 3D WASM for robust 2D union and closed extrusion. No CDN imports, network generation, API keys, paid tools, fonts, or server. `vite.config.js` sets `/daily-app2/20261020-22/`. The per-app `deploy` script exists as required, but public publication uses the repository ROOT combined deployment.

## Parameters

All lengths are **millimeters**. Inputs and paired sliders are range-validated; presets and Reset set complete parameter sets.

| Parameter | Range | Default |
|---|---|---|
| Outer diameter (X) | 56–88 mm | 68 |
| Palm oval Y/X ratio | 0.8–1.15 | 1 |
| Grip band radial width | 4–7 mm | 5 |
| Center pad diameter | 12–20 mm | 16 |
| Spiral turns | 1.25–2.5 | 2 |
| Spring web width before oval scaling | 0.9–1.6 mm | 1.2 |
| Print thickness (Z) | 2.4–4 mm | 3 |
| Outer edge scallop depth | 0–1 mm | 0.6 |

Final bounds are X = diameter, Y = diameter × oval ratio, Z = thickness. The pad and spring are also oval-scaled. Minimum spring width after scaling must be ≥0.8 mm, otherwise export is blocked. This makes a 0.9 mm web at 0.8 oval ratio invalid. Minimum estimated inter-turn space must be ≥2 mm. Empty, nonfinite or out-of-range inputs are blocked; last valid preview remains visible and cannot be exported until corrected.

## Geometry and export

An analytic Archimedean spiral centerline is expanded by local curve normals to form a strip. Its ends penetrate the pad and outer band by 0.8 mm. A positive-wound polygon, scalloped ring (256 segments), and center pad (128 segments) are robustly **unioned before extrusion** with Manifold. No intersecting display meshes masquerade as a solid. There is one connected, closed printable component. Spring resolution is bounded at 128 segments per turn (up to 320), keeping local synchronous generation responsive.

The preview and main binary STL export use the **same final triangle array**. STL normals are computed from outward triangle winding. Filename includes diameter, web width and Z thickness; the STL has no unit metadata, so import as millimeters. Downloads work in desktop and touch browsers. The small flex coupon exports a 56 mm circular model with 12 mm pad, 1.5 turns and no scallops, using the current width and thickness. It tests extrusion continuity and material response, **not identical full-model stiffness**.

## Mechanical model / limitations

This is a compliant monolithic spring, not a clearance-fit moving assembly. No parts need freeing, assembly, or retention hardware. The center is integrally retained by the web, not designed for unlimited rotation. Spacing is flex room, not a printer tolerance claim.

The displayed spacing estimate reduces radial pitch by a normal-distance factor at the smallest centerline radius, subtracts web width, and conservatively applies the smaller oval scale. A starting twist limit is the smaller of 5 degrees and the angle whose outer-end displacement estimate uses one quarter of that space. This leaves margin for relative motion, but **is not a solved deformation, FEA, strength, fatigue, or universal operating rating**. There is no nonlinear stress or root stress-concentration simulation. Start below the limit, do not force it, and stop on whitening, cracks or permanent deformation. Keep the pad approximately coplanar; do not pull axially.

## Printing and calibration

- Print broad face flat on the bed, Z upward. No supports or bridges are required; all material starts on the bed.
- Start with PETG, 0.4 mm nozzle, 0.2 mm layers, 0.4 mm extrusion width, and 100% infill. Inspect the slicer for at least two uninterrupted extrusion paths across the narrowest web. Widen the web if necessary.
- PLA is more brittle/stiff; TPU can be overly soft. Actual behavior depends on material, layer adhesion, extrusion width and printer.
- Print the small coupon first. Let it cool fully, remove carefully without levering the center, inspect roots, and flex slightly.
- Tune flow, extrusion width and elephant-foot compensation on your printer. Do not globally scale the exported model as a fit remedy. 0.8 mm web / 2.4 mm Z are design limits, not universal minimums or fatigue guarantees.
- No assembly or release steps. No bearings, magnets, fasteners or glue.
- Not load-bearing or certified child-safe; thin webs can break.

## Validation performed

`node validate.mjs` checks all 256 parameter-range corners (192 valid / 64 correctly blocked): actual binary STL parsing, finite coordinates, nonzero triangle area, stored normals, analytical mm bounds, exactly two oppositely directed faces per welded edge (1e-5 mm), one connected component and positive enclosed volume. It additionally checks the spiral polygon for self-intersections, minimum web/rim widths, spacing and conservative motion budget. The robust planar union followed by straight extrusion avoids unintended internal surfaces and volumetric self-intersections. Initial validation caught reversed spiral winding that omitted the web; it was corrected and the full suite rerun.

`node browser-test.cjs` drives a real Chromium browser and downloads actual STL files for default, three presets, valid min/max combinations, slider changes, coupon and phone input. Each main download is byte-compared with the generator's exact parameter geometry and parsed by the same independent STL checker. It checks preview changes, reset, invalid/empty inputs, fit, 320/390 px layouts, touch orbit, two-finger zoom and reachable phone download. Reports and screenshots are included. The browser harness expects the local Playwright installation and app dev server on port 5181; Playwright is validation-only, not a shipped dependency.

`node gallery-test.cjs` compiles every root inline script, verifies entry uniqueness and preservation of prior entries, and renders/searches the gallery without runtime errors. Production validation additionally loads the public deployment and downloads/parses its STL.

**No physical print, hand-feel, stress, or durability testing has been performed.** Mesh validity and geometric motion budgets do not prove fatigue life or physical fidget performance.
