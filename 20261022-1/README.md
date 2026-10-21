# Cardan Calm

A local React/Vite parametric STL studio for a **two-axis compliant thumb cradle**. Hold the square frame off the table and gently rock the center forward/back and side-to-side. Two nested orthogonal torsion-bar pairs give elastic return. Unlike a pinned gimbal, it is one continuous, bed-flat solid: no bearings, joints, hardware, assembly, or release cuts. It is not intended for axial pressing, spinning freely, or snap-through clicking.

The model-first editor takes visual inspiration from Vaseverse's quiet preview/control composition, not its branding, assets, copy, or source. The mechanism and interface are original to this app. Both collection galleries were checked; the archived collection was read only.

## Run and build

```
npm install
npm run dev
npm run predeploy
npm test
npm run preview -- --host 127.0.0.1 --port 5210
node browser-test.cjs
node extra-browser.cjs
node production-test.cjs
```

Vite base: `/daily-app2/20261022-1/`. Per-app scripts include `predeploy: npm run build` and `deploy: gh-pages -d dist`; the public collection is published using the **root monorepo** deploy flow, not per-app deployment. Runtime dependencies: React/ReactDOM, Three.js (OrbitControls), Manifold WASM for actual solid unions/cuts, fflate for ZIP. All are bundled locally; there are no CDN imports, file uploads, API keys, or paid services. Manifold generation and STL validation run in a Web Worker. Playwright is a development-only validation dependency.

## Parameters and constraints

All lengths are **millimeters**, rotation is **degrees**. Sliders have paired numeric fields; invalid values pause export. Presets Balanced, Feather and Grounded produce different cradle proportions and torsional resistance. Variations stay within the following screened ranges:

| Parameter | Range |
| --- | --- |
| Outer frame width | 64–80 mm |
| Rigid center pad width | 16–20 mm |
| Middle cradle outer width | 38–46 mm |
| Each torsion bar width / height | 0.8–1.2 mm independently |
| Comfort corner radius | 1–6 mm |
| Outer frame grip groove depth | 0–0.5 mm |
| Advisory tilt per axis | 2–4° |

Frame/cradle wall width and height: 4 mm. Outer free torsion span: `(outer width / 2) - 4 - (middle width / 2)`; inner: `(middle width / 2) - 4 - (pad width / 2)`. Both remain at least 5 mm. Each bar overlaps its rigid anchors by 1 mm. XY import geometry must stay inside radius 6.5 mm, inset from the smallest center pad. Texture never cuts a flexure. The suggested tilt is not a hard stop: it is recorded in design JSON and an outer-frame witness recess.

There are no sliding clearances or universal fit values for this one-piece joint. Calibration: print a full-size 0.8 × 0.8 mm bar trial and start at 2°. Increase bar width or height in 0.1 mm steps only after checking layer adhesion and feel. PETG or polypropylene recommended; PLA may be brittle/fatigue quickly. Geometry validation cannot establish life or stiffness on a particular printer.

## Image import: PNG and JPEG

Desktop and mobile file pickers, replace/remove, and desktop drag/drop are supported. Bundled original synthetic `mark.png` and `waves.jpg` can be tried directly or downloaded. Limits are 2 MB, 12 million pixels and 6,000 pixels per side, checked from headers before decoding. Actual signatures and matching extensions are required. Images normalize to at most 500 pixels per side for portable design saving, then sample onto a **20 × 20** grid. Fit entire image or crop-to-fill, with ±25% X/Y crop shifts. Transparent pixels composite onto white. Luminance is `0.2126 R + 0.7152 G + 0.0722 B`.

Threshold mode: sample height is relief depth when luminance is below threshold, otherwise zero. Grayscale mode: height is `depth × (1 - luminance/255)`. Threshold 1–254; relief 0.4–3 mm. Heights form a triangulated continuous top over a closed 0.4 mm backing and sidewalls, **not disconnected pixel cubes**. The bottom sinks 0.15 mm into the rigid pad and is robustly unioned by Manifold. Empty all-white conversion is rejected. This is **2D-to-relief conversion, not full 3D reconstruction from one photograph**. Source image and exact sampled conversion are shown alongside final 3D geometry.

## STL import: binary and ASCII

`wedge-ascii.stl` and `gem-binary.stl` are original synthetic fixtures. File limit 2 MB; 1–1,500 triangles; dimensions 0.2–250 mm on every source axis. Parse and preflight reject truncation, nonfinite coordinates, degeneracy, open/nonmanifold edges, inconsistent winding, nonpositive volume, disconnected solids and self-intersections. No mesh repair is claimed or attempted. The supported subset is explicitly **one convex, broad flat-bottom, support-free solid**: no cavities, concave grips, floating details, tilted bases, or overhangs. The bottom must cover at least 25% of XY footprint; every projected vertex must stay inside its bottom hull. Unsupported input is rejected with guidance to re-export a simplified convex flat-bottom grip.

STL has **no unit metadata**. Source dimensions and a source 3D preview appear before integration; users must explicitly confirm source coordinates represent millimeters. XY scales proportionally to a 4–7 mm maximum footprint; Z scales independently to 0.6–5 mm height. Fitted minimum XY extent is 1.2 mm. Z rotation ±180°, X shift ±1.5 mm, Y ±2 mm; center/reset restores transforms. Integration sinks the mesh 0.15 mm into the rigid pad, then uses a genuine solid union. If it does not form one connected solid or leaves the safe zone, export is disabled. The unchanged imported STL is never passed through as the fidget. Source shape, scale, height and placement measurably change the final STL.

## Editor, persistence and export

Edits regenerate actual geometry without reload. Preview colour is geometry-neutral: **STL does not contain these colours**. Drag to orbit, pinch/scroll to zoom, ± zoom and Fit view/reset; visible export X/Y/Z dimensions. Clicking the object selects its active part. Preset thumbnails use generated 3D models. Desktop has a compact right rail; phones have a generous preview, tabbed controls and fixed reachable export tray. Rest/object view and print layout are intentionally identical for this one-piece undeformed part; no inaccurate deformation animation is shown.

Debounced undo/redo keeps 35 modeling snapshots. Save/Open JSON includes the bounded normalized PNG payload or validated small STL mesh, import settings and transforms. Imported files are genuinely portable, not silently missing. Open revalidates sources; incompatible app/version or excessive JSON payload is rejected. Files are never uploaded or saved automatically to any server/repository. Only synthetic fixtures and validation evidence are committed.

Download STL exports geometry-only **binary STL**, in the bed-flat millimeter layout, from precisely the same final mesh used in preview. A single-part selector is provided; ZIP includes the same solid and print/interaction notes. Files use descriptive parameterized names. There are no separate moving assembly parts to omit or accidentally fuse.

## Digital verification, not physical certification

`validate.mjs` checks 270 default/preset/extreme/random parameter cases (including all 256 range corners) and 24 import-derived cases. Exported bytes are independently parsed to check finite coordinates, unit normals, nonzero-area faces, dimensions, edge incidence of exactly two after 0.00001 mm welding, opposite neighbor winding, positive enclosed volume for each component and one connected genus-four solid (two openings per torsion stage). Manifold CSG constructs consistent solid topology rather than overlapping visual meshes.

Mechanism screening checks minimum bar spans, protected rigid import zone, retention by continuous material, and conservative swept envelopes at nine representative combinations of both tilt angles. The envelope includes the maximum 5 mm imported grip. It checks a 1 mm residual frame/cradle separation and estimates conservative torsion strain as `max(bar width, height) × tilt radians / min(free spans)`, limited to 2%. This is only small-angle screening: not finite-element analysis, fatigue certification, or a universal material limit. Sharp anchor transitions can concentrate stress. No hard stop exists, and bars can be damaged by overtravel.

Browser tests use real PNG/JPEG and ASCII/binary STL file picker imports and actual STL downloads, compare final export hashes against the live preview, verify threshold/depth/crop/scale/rotation/placement changes, reject malformed, open, nonmanifold, concave, excessive and empty inputs recoverably, and exercise presets, variations, undo/redo, portable save/open, ZIP, reset/remove, drop, colour neutrality, touch orbit/pinch and 320/390 px layouts. `production-test.cjs` checks built worker/WASM plus a 1001 × 701 synthetic image round trip. Reports are checked-in JSON; screenshots document desktop and mobile layout.

## Printing and use

Print **rest pose flat**, torsion bars down on the bed; no supports required. Recommended starting point: 0.4 mm nozzle, 0.16–0.2 mm layers, four walls; bars must be solid. Remove strings without nicking the bars. Hold frame above the table and gently alternate small tilts around each axis. Do not twist beyond the advisory angle, press axially, or use brittle resin. Stop for whitening, cracks or permanent set. Not for chewing or small children.

**No physical print has been tested.** A digital manifold result does not prove tactile quality, durability, or safe cyclic flexing. Always make a calibration trial for the actual machine and material.
