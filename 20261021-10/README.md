# Tangle Tide

Browser-based React + Vite parametric STL generator for two linked flex-gate tumble loops. This is a hand-guided interlinked-ring mechanism, not the earlier pinned articulated chain, captured rotary bearing, or monolithic worry stone. The archived daily_app tree was read only and has no fidget/STL generators.

## Use

`npm install`, `npm run dev`; production: `npm run predeploy`. Per-app `deploy` is available as required, but publish the entire site from the root monorepo `npm run predeploy && npm run deploy`.

Choose presets or numeric/range controls, rotate/zoom the preview, then Download binary STL. The combined file contains two separate closed solids laid flat, at least 6 mm apart. Individual loop and full-size material trial downloads are available. The trial is deliberately full size: a shrunken coupon misrepresents flex length and assembly force. Everything runs locally, without keys, CDN imports, remote generation or a server. Three.js is bundled. Manifold is a development-only validation dependency, not a runtime dependency.

## Parameters

All dimensions are millimeters except the unitless oval aspect.

| Control | Range | Default |
| --- | --- | --- |
| Loop centerline radius | 18–28 mm | 22 mm |
| Oval Y aspect | 0.85–1.20 | 1.10 |
| Radial flex band | 1.6–3.2 mm | 2.2 mm |
| Axial thickness | 1.6–3.2 mm | 2 mm |
| Relaxed inner gate chord | 0.40–1.00 mm | 0.65 mm |
| Outer radial ripple amplitude | 0–0.60 mm | 0.35 mm |

Gate gap must be at least 0.75 mm less than thickness; invalid combinations and empty/nonfinite/out-of-range numbers disable export and give an explanation. Default complete print layout measures about 99.8 × 51.6 × 2 mm. Exact final X/Y/Z is shown from final generated geometry. Assembled dimensions vary with hand-guided pose.

## Construction and STL

A beveled eight-point cross section is swept through 160 nonclosed oval intervals. Adjacent cross sections share exact coordinates, and end caps close each gate tip. Sweep angle is strictly monotonic over less than a revolution and all radial coordinates remain positive; each cross section occupies its own angular slice, preventing foldbacks and self intersections. Ripples only add material outside the baseline band. No overlapping visual meshes, boolean seams, internal faces, coincident bodies or fused gates. Signed volume ensures outward winding. Each loop has 2,576 bounded triangles; the pair has 5,152. Binary STL normals and vertices use float32 millimeter coordinates. Preview buffers and downloads consume the same final triangle arrays; exports for selected parameters are byte-compared against browser downloads.

## Print / assembly / interaction

Print both loops flat, no supports. Begin with unfilled PETG (or suitable nylon), 0.4 mm nozzle, 0.2 mm layers, four perimeters and effectively solid narrow bands. Avoid brittle PLA or filled material for flexing. Do not let a brim bridge the gates; remove elephant foot and burrs. Bevels are 0.32–0.35 mm.

Print one full-size trial first. Gently twist the two gate ends in opposite out-of-plane directions, enough to pass the other loop edge-on (target thickness + 0.30 mm opening), then thread it and release. Do not lever the tips apart radially or force stiff material. Whitened, cracked or permanently bent trials fail; choose thinner section/larger radius or more suitable material. At rest the slit is narrower than the other loop thickness, providing geometric retention. It is not a permanent captive lock: aligned gates or deliberate deformation may unlink the parts. Keep gates apart during use, check closure and retire damaged loops. Roll and tumble through the fingertips; sliding contact is intentional. No bearings, magnets, fasteners, glue, rigid snap hooks or external hardware.

FDM initial gate trials: 0.55 mm tuned, 0.65 mm everyday, 0.90 mm rougher trial. These are not universal tolerances; actual printer/material behavior must be calibrated. Supported geometry ranges do not guarantee elastic assembly for every material, especially small-radius thick-section extremes. No flex force, strain life or fatigue performance is claimed. Not for young children.

## Validation

- `node validate.mjs`: default, all presets and all 64 parameter-space corners. Valid cases are parsed from exported binary STL; invalid gate-margin corners are blocked.
- Independent nominal millimeter dimensions, finite vertices, nonzero triangle area, stored normals, welded edge incidence exactly two, opposite directed edges, connected components and positive enclosed volume per solid.
- Separate independent Manifold kernel reconstruction of each loop, NoError status and positive volume. Print-layout bounding boxes cannot intersect.
- 24 representative interlinked poses per valid case, rotating a vertical second loop around the first loop, checked by exact solid intersection. This checks rigid geometric fit, not elastic assembly force or every possible hand pose. Gate closure/retention, inner opening and section limits are calculated independently.
- `node browser-test.cjs` with Vite at port 5190: actual Chromium binary STL downloads for defaults, all presets, minimum/maximum combinations, slider and phone; byte equality against selected final meshes; invalid/empty input blocked; individual and trial files parsed; preview changes; fit control; 320/390 px no-overflow layouts; real CDP touch orbit and pinch; reachable touch download; no JS runtime errors.
- `node gallery-test.cjs`: compile every inline root script via new Function, reject missing scripts; exactly one new STL entry, newest first; all old entries unchanged; actual gallery render, category ordering, link and search checks.
- Saved JSON reports and desktop/mobile screenshots provide evidence. Production deployment is smoke-tested separately.

**No physical print, flex-force, durability or fatigue testing has been performed.** Geometry and sampled mechanical checks do not establish real material behavior.
