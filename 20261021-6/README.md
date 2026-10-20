# Fold Flow

Browser-based parametric **concertina squeeze fidget** STL generator. Unlike a single oval squeeze spring, this uses a continuous planar serpentine ribbon and multiple distributed return bends. Pinch its wide terminal grips across the stacked rows and gently release. One connected solid, no hardware, joints, mating fits, supports or assembly.

## Run and export

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite; Three.js provides local geometry, OrbitControls preview and binary STL export. All dependencies bundled, no API, remote fonts, CDN or server generation. Individual `deploy` uses gh-pages, but the public monorepo is published using the root deploy workflow. Base `/daily-app2/20261021-6/`.

Preview and STL share the exact same final ExtrudeGeometry. STL has no embedded unit metadata: import as millimeters. A download is the complete one-piece fidget or the selected two-bend calibration coupon, each already flat in XY at Z=0. No separate assembly parts needed. The live readout reports actual generated X/Y/Z bounds.

## Parameters (lengths in mm)

| Parameter | Range | Default |
| --- | --- | --- |
| Straight span | 24–44 | 32 |
| U-bend centerline radius | 3–5 | 4 |
| Return bends (integer count) | 3–6 | 4 |
| Flexure web thickness | 1.0–1.8 | 1.2 |
| Z print height | 4–9 | 6 |
| Grip half-width | 2.5–4 | 3.5 |
| Grip scallop amplitude | 0–0.5 | 0.3 |

Everyday, Soft and Compact presets and Reset. Numeric and range inputs; invalid values disable generation and export with inline errors. Thickness/radius must be ≤0.45. Grip extent plus half-web plus 0.8 mm must fit within 92% of row pitch to leave space at suggested compression. Some independent range extrema are intentionally incompatible. No universal printer tolerance is assumed. There is no print-in-place fit interface: clear space between rows is `2*radius - web` mm, not a joint clearance.

## Geometry and mechanism

Sampled straight paths, tangent semicircular U-bends, variable-width textured end grips and semicircular end caps form a single simple 2D outline; a triangulated capped extrusion creates one closed solid. No overlapping meshes or CSG unions. Maximum geometry is bounded (64 samples per row/bend, 24 per cap), keeping synchronous generation responsive. Preview orbit, zoom, fit and touch input use local Three.js OrbitControls. No mechanism animation is presented as a physical simulation.

`node validate.mjs` parses actual binary STL output for default, min, max, Soft and coupon cases, checks finite/nondegenerate triangles, normals/winding, positive volume, mm bounding box, connected component, Euler characteristic, and exactly two oppositely directed incident faces per welded edge (1e-5 mm weld grid). It additionally sweeps 128 independent parameter-range corners: 88 valid configurations pass, and 40 incompatible configurations are blocked. Bounding dimensions are checked against an independent analytical envelope including sampled grip relief. It checks the planar outline for nonadjacent segment intersections: an extruded simple outline has no unintended internal faces or mesh self-intersections. Analytical row/grip clearance checks include an 8% pitch-compression envelope; this is only a screening calculation, not nonlinear stress/deflection analysis. There are no captive parts, hinges, tracks or assembly positions to inspect.

`node browser-test.cjs` uses local Chromium / Playwright to exercise actual controls and downloads at default, presets, min/max and coupon settings; exported bytes must equal the same geometry generated for the displayed parameters. Also checks invalid values, preview updates, reset, slider, 320/390px layouts, touch orbit/pinch zoom, phone download and runtime errors. `TEST_URL=... node browser-test.cjs` exercises a published/deploy URL. See JSON validation reports and screenshots. Gallery checks verify scripts, entry uniqueness and preservation, categories and rendering.

## Printing and use

PETG first; 0.4 mm nozzle / 0.2 mm layer, 3 walls, solid infill, broad faces on bed. Supports off. Inspect slicer for continuous paths on thin webs; variable line-width slicing helps. Coupon uses the exact material-sensitive flexure cross section and radius with two bends (24 mm straight span). Print it before a full fidget. PLA is more brittle/fatigue-prone; TPU is softer with less defined return; resin not recommended. No material setting guarantees fatigue life. Deburr grip edges; no release or assembly is necessary.

Start gently, below the UI's 8% stacked pitch trial travel. **No hard stop.** Do not bottom out, overstretch, or force brittle webs. Stop at whitening, cracks or permanent set. Geometric screening does not prove a working durable printed spring. **No physical print, measured forces or cycle-life testing performed.**
