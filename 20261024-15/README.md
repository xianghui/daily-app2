# Wring Weave — local wringing-ladder fidget studio

React + Vite parametric STL editor for a **six-rung compliant TPU ladder**. Hold the two long rails and gently counter-tilt them lengthwise like opposed seesaws. The rungs share coupled torsion and bending, then relax. Unlike a pluck comb, the rungs are fused to both separate grip rails; unlike a serial hinge, the compliance is distributed across six parallel rungs. The protected palm landing accepts real image relief and STL grips.

## Studio

A large matte Three.js preview, orbit/pinch/zoom/reset/fit, contact shadows, 10 mm grid and exact final X/Y/Z dimensions. Compact desktop rail; mobile collapsible controls and reachable export. Shape, Mechanism, Surface, Import and Print tabs, three actual geometry thumbnails, valid bounded Variations, undo/redo and portable local JSON. Binary STL or ZIP with the same single body and printing guide. The relaxed preview and exports use exactly the same worker-generated final mesh; **no deformation simulation**, invented print estimate or measured force is presented. Preview colours do not exist in STL.

Vaseverse.org informed model-first hierarchy and quiet warm styling, not branding, text, assets or source code. Existing Daily Object Lab local import/editor infrastructure was reused. Ladder construction, mechanism notes and checks are new. Both galleries were checked; the archived tree remained read-only.

## Parameters (all dimensions in millimeters)

| Parameter | Range | Role |
|---|---|---|
| Free rung span | 18–26 | Gap between grip rails; longer is more flexible |
| Rail length | 36–52 | Longitudinal ergonomic size and rung pitch |
| Rung thickness | 1–1.6 | 5–8 layers at 0.2 mm |
| Rung width | 2–3 | Flex section in the bed plane |
| Rail width | 5–7 | Rounded grip rails, fixed 2.4 mm height |
| Palm dimple depth | 0–0.6 | Real protected surface subtraction |
| Import footprint | 4–7 | Maximum XY source extent |
| STL grip height | 0.6–5 | Independently fitted Z height |
| Import Z rotation | −180–180 degrees | In-plane rotation |
| Import X / Y offset | ±1.5 / ±2 | Inside 6.5 mm safe radius |
| Image relief depth | 0.4–3 | Over 0.4 mm continuous backing |

Palm disc: 21 mm diameter, 2.4 mm high, well floor 1.6 mm. Six rung centers run from X=20 to X=12+rail length. Each rung overlaps both rails by 0.6 mm and has widened 1.6 mm-long roots. Rungs, roots and rails are robustly unioned as one intentionally continuous solid, not loose interpenetrating shells. Overall X = 26.5 + rail length; Y = free span + 2×rail width; Z = maximum of 2.4 mm and the actual imported/built-in grip top. Default size: 70.5 × 34 × 3.25 mm. Exact export bounds are displayed including imports.

## Both import paths are real geometry workflows

Use the file picker on desktop/phones, drag one file onto Import, or use the four bundled original synthetic fixtures in `public/samples`. All file processing stays in the browser. No remote generation, upload, API key or paid service. User-selected files are not stored in this repository. Source previews and final geometry remain separate and visible. Replace, remove, center/reset transforms and restore built-in defaults are supported.

### PNG / JPEG → printable relief

File limit 2 MB; content headers checked before decoding; maximum 12 megapixels / 6,000 pixels per side. A bounded, white-backed 500 px source preview is sampled to a **20 × 20 luminance grid** using contain/cover and ±25% crop shifts. Transparent pixels composite to white. Luminance = 0.2126 R + 0.7152 G + 0.0722 B.

Threshold mode uses depth for samples below the threshold (1–254), zero for others. Grayscale mode uses depth × (1 − luminance / 255). The triangulated height field sits on a continuous 0.4 mm backing with closed sides and bottom, embeds 0.15 mm into the palm well, and is robustly unioned using Manifold. This is **2D-to-relief / raised silhouette conversion, not full 3D reconstruction from one photo**. Empty output is rejected. Physical footprint, relief depth, crop, threshold and placement change exported triangles. The triangulated threshold edge is bounded by the sampling grid; it is not an exact vector trace.

### ASCII / binary STL → integrated grip

Both parsers accept 2 MB / 1,500 triangles maximum, one closed connected outward-oriented solid, 0.2–250 mm source dimensions on every axis. STL has no units: the user must explicitly confirm that the source coordinates represent **millimeters** before integration. Source bounds and triangle count are shown. XY is proportionally fitted to the chosen footprint; Z is independently fitted to grip height; rotate in Z, center or place inside the well.

The supported integration contract is deliberately narrow: **convex, broad flat-bottom solids whose entire XY projection lies inside their bottom footprint**. Open/nonmanifold, reversed, degenerate, disconnected, touching/self-intersecting, concave, hollow, excessive or overhanging inputs are rejected with actionable feedback. No arbitrary repair is claimed. A minimum fitted XY span of 1.2 mm is enforced; use broad robust grips, not thin-detail models. After transform, every vertex must fit the safe zone; CSG union must produce exactly one connected solid. Imports cannot change any rail, rung or flexure root. Source shape, scale, rotation and placement affect the final exported solid; unchanged mesh display/re-export does not count as integration.

Saving JSON explicitly includes the bounded normalized source image and converted samples, or bounded validated STL vertices. Opening revalidates source geometry/settings and regenerates the model locally. Invalid JSON/imports disable export with recovery controls. There is no pretend missing-file restoration.

## Computational geometry / mechanism checks

Every generated mesh is checked before enabling export: finite coordinates, nonzero triangles, no degenerate faces, welded edges with exactly two incident triangles and opposite winding, positive volume, one connected component. Manifold supplies true unions/subtractions. Independent tests parse exported binary STL normals, bounds, winding, edge incidence, per-component volume and topology. `npm test` covers 78 parameter cases (all 64 min/max corners, presets and variations) plus 24 image/STL cases. Browser downloads are independently reconstructed from the saved state to confirm exact preview/export equality.

Mechanism checks verify six separate rung roots, ≥1.6 mm relaxed inter-root gap, 0.6 mm intentional root overlap, ≥11.5 mm import isolation, and small-motion screening at signed rail tilts −5°, −2.5°, 0°, 2.5°, 5°. With θ = 5° per rail, differential end displacement is conservatively approximated by δ = (rail length−8) sin θ; fixed-guided bending strain screen = 3×thickness×δ / free-span²; twist strain screen = rung width×θ / free span. Their sum remains below 8% in allowed ranges. A separation screen subtracts 2×thickness×sin θ + rail length×(1−cos θ) from the relaxed gap, retaining >1 mm. These are nominal small-motion geometric constraints, **not finite-element analysis, verified material limits or a proof of elastic return**.

CSG probes on each tested final mesh verify twelve solid attachment roots, five unobstructed inter-rung windows, and that imported features change only the protected palm region. Because the body is compliant, rigid part-placement collision tests cannot establish its deformed behavior; no such simulation is claimed. There are no separate captive parts or sliding fits. All roots are intentionally fused. No hardware, supports, assembly or release step applies.

Browser checks exercise real file selection for PNG/JPEG and ASCII/binary STL, altered pixels, relief settings, STL shape/scale/rotation/placement, replace/remove/reset, malformed/truncated/open/nonmanifold/concave/excessive files, empty silhouettes, invalid dimensions/transforms and export gating. Presets, variations, undo/redo, portable JSON import restoration, part and ZIP downloads, colour neutrality, phone widths 320/390, touch orbit/pinch and controls are tested. Local testing rejects unexpected remote requests. Fixtures are original synthetic files; no personal uploads are bundled.

## Printing / material calibration

- **TPU 95A only** as the starting material. Print one continuous body in its relaxed flat-side-down export orientation; no supports, bought hardware or assembly. Use dry filament and slow TPU settings; 0.4 mm nozzle / 0.2 mm layers are starting values, not universal settings.
- Begin with **Soft Start** as a full-size material coupon. Inspect slicer continuity at all twelve rung roots and inspect the print for underextrusion. Rails are 2.4 mm thick; rung limits are 1–1.6 mm. Use at least three perimeters in the rails.
- Hold both rails; counter-tilt **lengthwise**, like opposed seesaws, only ~5° per rail initially. Do not twist a rung alone, fold, overstretch or pull sharply. No hard travel stop is present. Tune free span/thickness instead of forcing the specimen.
- Stop for whitening, tears or permanent set. Return force, creep, adhesion and fatigue depend on TPU/printer/material. PLA is not a flexible substitute. No physical print, force, return or fatigue testing performed; computational checks do not establish real-life durability. Not intended for children.
- There is no running fit tolerance because this is one continuous compliant solid. Calibration means checking extrusion continuity and gentle flex, not releasing a printed joint. Imports stay away from all rungs.

## Development / deployment

```
npm install
npm run dev
npm test
npm run predeploy
```

Dependencies are installed/bundled locally: React, React DOM, Three.js, manifold-3d (local worker + WASM), fflate. Vite/plugin-react build the app; Playwright drives browser checks; gh-pages is installed per app. No CDN runtime imports. Complexity is bounded; heavy parsing/CSG runs in a worker.

Base: `/daily-app2/20261024-15/`. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public publishing uses the **root monorepo flow**, copying the app into `deploy/20261024-15/` alongside the preserved gallery and apps. Never deploy or modify the archived `daily_app` tree.
