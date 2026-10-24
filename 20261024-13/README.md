# Curl Current — local tendon-curl fidget studio

A React + Vite parametric STL editor for a **three-stage tendon-driven TPU finger**. Pull a cord above the flexure neutral plane to curl the serial stages; release for elastic return. A direct finger-curl mode needs no hardware. This is not the earlier pin-chain, single living hinge, pluck comb or snap-strip mechanism.

## Studio

Model-first Three.js canvas, matte preview palette, orbit/pinch/zoom/reset/fit, 10 mm grid, actual export dimensions, compact desktop rail and phone controls with an always-visible export footer. Shape, Mechanism, Surface, Import and Print sections; three real geometry thumbnails, bounded variations, undo/redo, local portable JSON, binary STL and ZIP containing the body plus assembly guide. Preview and export share the worker-generated final mesh. Only relaxed bed-flat geometry is shown: there is **no deformation simulation** or invented force estimate. Colour is preview-only; STL contains geometry, not colours.

Vaseverse.org was consulted for editor hierarchy and warm studio restraint. No branding, assets, text or source were copied. Existing Daily Object Lab local import/editor infrastructure was reused; the mechanism, CSG construction and mechanical checks are new.

## Parameters (millimeters unless noted)

| Parameter | Range | Purpose |
|---|---|---|
| Finger width | 14–22 | Palm-scale segment width |
| Segment length | 12–18 | Length of each of three rigid stages |
| Hinge thickness | 1–1.6 | Bottom TPU web, 5–8 layers at 0.2 mm |
| Free hinge span | 3–4 | Bending length, not a snap interference |
| Segment height | 5.2–6 | Tendon moment arm and tunnel walls |
| Palm dimple depth | 0–0.6 | Actual protected surface subtraction |
| Import footprint | 4–7 | Maximum source XY dimension |
| STL grip height | 0.6–5 | Independently fitted source Z height |
| Z rotation | −180–180 degrees | In-plane import rotation |
| Source X / Y offset | ±1.5 / ±2 | Placement inside a 6.5 mm radial safe zone |
| Image relief depth | 0.4–3 | Height above 0.4 mm continuous backing |

The palm disc is 21 mm diameter, 2.4 mm tall, with a 1.6 mm well floor. Rigid segments use 2 mm corner radii. Thin webs are 65% of segment width, with 0.5 mm root overlap at each end. Overall X = 30.5 + 3 × (segment length + free hinge span); Y = max(21, finger width); Z = max(segment height, imported relief height + well embedding height). The displayed values are computed from the exact final export mesh, including imports.

## Both import paths are real geometry workflows

Use the file picker on desktop/phones, drag one file onto Import, or use the four bundled original synthetic fixtures in `public/samples`. All file processing stays in the browser. No remote generation, upload, API key or paid service. User-selected files are not stored in this repository. Source previews and final geometry remain separate and visible. Replace, remove, center/reset transforms and restore built-in defaults are supported.

### PNG / JPEG → printable relief

File limit 2 MB; content headers checked before decoding; maximum 12 megapixels / 6,000 pixels per side. A bounded, white-backed 500 px source preview is sampled to a **20 × 20 luminance grid** using contain/cover and ±25% crop shifts. Transparent pixels composite to white. Luminance = 0.2126 R + 0.7152 G + 0.0722 B.

Threshold mode uses depth for samples below the threshold (1–254), zero for others. Grayscale mode uses depth × (1 − luminance / 255). The triangulated height field sits on a continuous 0.4 mm backing with closed sides and bottom, embeds 0.15 mm into the palm well, and is robustly unioned using Manifold. This is **2D-to-relief / raised silhouette conversion, not full 3D reconstruction from one photo**. Empty output is rejected. Physical footprint, relief depth, crop, threshold and placement change exported triangles. The triangulated threshold edge is bounded by the sampling grid; it is not an exact vector trace.

### ASCII / binary STL → integrated grip

Both parsers accept 2 MB / 1,500 triangles maximum, one closed connected outward-oriented solid, 0.2–250 mm source dimensions on every axis. STL has no units: the user must explicitly confirm that the source coordinates represent **millimeters** before integration. Source bounds and triangle count are shown. XY is proportionally fitted to the chosen footprint; Z is independently fitted to grip height; rotate in Z, center or place inside the well.

The supported integration contract is deliberately narrow: **convex, broad flat-bottom solids whose entire XY projection lies inside their bottom footprint**. Open/nonmanifold, reversed, degenerate, disconnected, touching/self-intersecting, concave, hollow, excessive or overhanging inputs are rejected with actionable feedback. No arbitrary repair is claimed. A minimum fitted XY span of 1.2 mm is enforced; use broad robust grips, not thin-detail models. After transform, every vertex must fit the safe zone; CSG union must produce exactly one connected solid. Imports cannot change any hinge, stage or cord tunnel. Source shape, scale, rotation and placement affect the final exported solid; unchanged mesh display/re-export does not count as integration.

Saving JSON explicitly includes the bounded normalized source image and converted samples, or bounded validated STL vertices. Opening revalidates source geometry/settings and regenerates the model locally. Invalid JSON/imports disable export with recovery controls. There is no pretend missing-file restoration.

## Geometry and mechanism validation

`npm test` independently parses binary exports and checks finite coordinates, nonempty/nondegenerate triangles, normalized matching normals, winding, positive volume for every component, welded edge incidence exactly two, connected component count and independent millimeter bounds. Every worker generation also checks the final solid before enabling export. Manifold CSG performs true solid unions/subtractions; overlapping un-unioned shells are not exported.

78 parameter cases cover all 64 range corners, all presets and deterministic variations. 24 image/STL cases also run the mesh and mechanism suite. Three bottom hinges are deliberately connected flexures, not separate loose moving bodies. Their estimated outer-fiber strain is t × angle / (2 × free span); at 15° per joint the supported range stays below 7.1%. This elementary estimate is a conservative starting constraint, **not a finite-element/material proof**.

The actual exported rigid sections are isolated and checked with CSG for collisions at seven representative serial bend configurations, including three stages at ±15°. The webs themselves are not simulated. A conservative inner-corner gap check runs per generation. Tunnel roofs, floors, cord moment arm, lead-in above the palm and 1 mm cord clearance inside the diamond's inscribed circle are checked. Cord path probes and CSG difference tests verify clear centerlines and import isolation. See `geometry-validation.json` for evidence. No intended moving interface is fused accidentally: the continuous hinges are intentional.

Browser scripts select PNG, JPEG, ASCII STL and binary STL through actual file inputs, download exports, compare geometry fingerprints against default output, reconstruct the exact saved state for independent mesh/mechanism checks, and exercise source pixels, threshold/depth, transformations, invalid files, replace/remove/reset, undo/redo, all presets, variations, JSON and ZIP. Mobile checks cover 320/390 px, touch orbit/pinch, control collapse/tabs and reachable export. Remote requests must be zero during local app testing. No claim of a physical print test.

## Printing and assembly

- TPU 95A, relaxed flat-side down, 0.4 mm nozzle / 0.2 mm layers as starting settings. The body is one continuous closed solid with three through-tunnels; no supports/hardware are needed for direct hand curling. Diamond tunnel roofs are 45°, walls at least 1.2 mm; inspect your slicer for actual bridging/stringing behavior.
- Optional tendon: **one 1 mm braided polyester cord, 250 mm long**. Thread from the tip through all stage tunnels and the raised palm guide. Tie a double stopper knot outside the tip, larger than 2.9 mm. The diamond is 2 mm across diagonals (~1.414 mm inscribed diameter), so nominal radial clearance around the cord is ~0.207 mm. Knot size must be checked physically; pull gently.
- Use Soft Start as a full-size calibration specimen. First verify cord sliding and gentle flex of one stage. Clear stringing; never force blocked passages. Printer, TPU hardness and cord finish determine actual fit and return.
- Hold the palm and pull the free cord end gently; release, or curl directly without cord. Start at **15° per hinge / 45° total**. No hard stop is supplied, so do not force beyond the guidance. Serial flex may distribute unevenly; force, wear and fatigue life are untested.
- Stop for tears, whitening, permanent set or cord abrasion. Do not use brittle PLA for repeated bending. No bearings, magnets or fasteners. Small parts, pinch points and cord entanglement: not a children's toy. Never loop the cord around fingers.

## Development / deployment

```
npm install
npm run dev
npm test
npm run predeploy
```

Dependencies are installed/bundled locally: React, React DOM, Three.js, manifold-3d (local worker + WASM), fflate. Vite/plugin-react build the app; Playwright drives browser checks; gh-pages is installed per app. No CDN runtime imports. Complexity is bounded; heavy parsing/CSG runs in a worker.

Base: `/daily-app2/20261024-13/`. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public publishing uses the **root monorepo flow**, copying the app into `deploy/20261024-13/` alongside the preserved gallery and apps. Never deploy or modify the archived `daily_app` tree.
