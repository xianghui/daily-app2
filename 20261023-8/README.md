# Reentrant Rest

A local-first React + Vite parametric STL studio for a **physical, inward-waisted hexagonal squeeze fidget**. Hold the rigid left palm landing, press the opposite waist gently inward, and release. Four diagonal flexures bend; the top and bottom rails approach each other instead of opening sideways like a diamond linkage. The opposing center tips provide a nominal stroke cue. This is not a snap-through clicker or a certified auxetic material.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base: `/daily-app2/20261023-8/`. `predeploy` is `npm run build`; individual `deploy` is `gh-pages -d dist`. The combined public site is published using the **repository root** deploy flow, not individual deployment.

## Studio

Live model-first Three.js canvas, touch orbit/pinch and button zoom/reset/fit; actual model thumbnails for Whisper, Palm and Firm; bounded variations; shape/mechanism/surface/import/print sections; preview palette; undo/redo; portable design JSON save/open; desktop drag/drop and phone file picker; millimeter dimensions; fixed reachable mobile export. Preview and binary STL use the same final worker-generated mesh. Preview colour is not included in STL.

One connected printable solid, no separate moving bodies or hardware: the flexures are intentionally integral. Complete/individual-solid downloads therefore contain the same single part; a multi-part ZIP is not relevant. Object preview and print layout differ only in XY translation. The preview is static geometry, not a force or deformation simulation.

## Parameters (all millimeters)

| Parameter | Supported range | Purpose |
|---|---|---|
| Outer cell span | 44–60 | Rigid rail endpoint separation |
| Cell height | 32–44 | Diagonal vertical span |
| Flexure width | 0.8–1.2 | Elastic bending section |
| Squeeze stop gap | 0.6–1.2 | Nominal total opposing-waist closure |
| Waist opening | 12–18 | Distance between inward diagonal vertices |
| Palm dimple depth | 0–0.6 | Subtracted tactile pits, outside mechanism |

The cell/handle base is 3.2 mm thick. The recessed landing floor is 2.4 mm thick. Import attachment embeds 0.15 mm into this floor. A default raised grip or imported relief adds height; displayed X/Y/Z dimensions are calculated from actual exported triangles. Default bounds are approximately 88 × 44 × 4.05 mm.

## Image → real printable relief

Supported: actual PNG and JPEG content, 16 bytes–2 MB, ≤12 megapixels, ≤6000 pixels per side. Headers are checked before image decoding. Images are normalized locally to at most 500 pixels per side, then fitted or cropped to a **20 × 20 grayscale vertex height grid**. Transparent pixels are composited on white. Luminance = 0.2126R + 0.7152G + 0.0722B.

Threshold mode: grayscale below the threshold receives the selected depth, other vertices receive zero. Grayscale mode: height = depth × (1 − luminance/255). Top vertices are triangulated with linear interpolation, so threshold silhouettes have sloped grid transitions rather than hard voxel edges. Side walls and a 0.4 mm backing close the relief. Manifold boolean union embeds it into the landing; overlapping shells are never exported as a pretend union. Entirely empty conversions are rejected.

Controls: threshold 1–254, relief depth 0.4–3 mm, contain/cover, crop shifts ±25%, physical footprint 4–7 mm, Z rotation ±180°, XY placement ±1.5/±2 mm. All transformed points must remain inside the 6.5 mm radial safe zone, or export is blocked. Source image and exact conversion grid are displayed beside the real final 3D model. This is **2D-to-relief**, not reconstruction of a full object from one photograph.

## STL → integrated printable grip

Both binary and ASCII STL are parsed locally in the worker. Files ≤2 MB, ≤1500 triangles, one closed, consistently outward-wound connected solid, finite coordinates, positive volume; each source dimension 0.2–250 mm. Degeneracy, welded edge incidence, winding, component connectivity and triangle self-intersection are checked. Arbitrary repair is not performed.

Integration intentionally supports **convex, broad flat-bottom, support-free grips only**. Concave meshes, cavities, disconnected solids, tilted bases, invalid topology and XY projections outside the flat base footprint are rejected with actionable feedback. The flat bottom must cover ≥25% of the footprint. This bounded contract allows genuine printable integration without promising arbitrary mesh reconstruction or repair.

Source dimensions and source 3D preview are shown. You must explicitly confirm millimeters: STL has no unit metadata. XY is proportionally fitted to a 4–7 mm footprint; Z is independently fitted to a 0.6–5 mm grip height. Rotation about Z, center/reset and XY placement operate on the actual integrated mesh. Minimum fitted XY span is 1.2 mm. The transformed source is unioned with the rigid palm landing only, far from the flexures and stop gap. Changing source, scale or placement measurably changes exported geometry.

Replace, remove, reset and return-to-default workflows are available. Invalid inputs leave the UI recoverable and disable export. Progress text is shown while the worker checks content/geometry.

## Privacy & saved designs

No file upload, API key, paid service, CDN modeling import or remote processing. Dependencies, Manifold WASM and synthetic samples ship locally. Files remain in browser memory. Save JSON explicitly includes bounded normalized image pixels/PNG data or validated mesh vertices/indices; open revalidates payloads. Missing/invalid source data is rejected, not falsely restored. No personal input files are included in this repository. The bundled PNG/JPEG marks and ASCII/binary wedge/gem are synthetic project fixtures, with no external asset attribution required.

## Mechanical checks vs physical tests

Robust Manifold solid operations generate one closed union. Every edit checks finite coordinates, nondegenerate triangles, positive enclosed volume, welded edge incidence (two faces per edge), and opposite shared-edge winding. The bounded geometry has no separate captive interfaces; intended flexible connections remain connected, while opposing stop tips remain unjoined.

`node validate.mjs` independently parses binary STL output, checks stored normals, orientation, manifold edges, connected positive-volume components, and exact millimeter bounds. It covers all 64 parameter-range corners, default/min/max, all presets, eight variations, image threshold/height-map sources, and both imported STL formats. It checks a solid intersection probe inside the open stop gap, minimum diagonal lengths, import isolation, landing thickness, and 11 nominal closure positions.

A rigid-link approximation uses `L² = (R − c)² + B²`; with total waist closure `q`, vertical half-span becomes `sqrt(L² − (R − c + q/2)²)`, decreasing as q increases. This demonstrates the intended contraction sign, **not** actual force/deflection. Conservative screening uses effective free diagonal length `L − 7 mm` for root overlaps, and nominal maximum beam strain `3 × width × (gap/2) / effectiveLength² < 1.2%`. Printed root compliance, distributed bending and material anisotropy are not an FEA result.

`browser-test.cjs`, `extra-browser.cjs`, and `mobile-sheet.cjs` exercise actual PNG/JPEG and ASCII/binary file-picker imports/downloads, source transformations, invalid input recovery, source removal/reset, changed geometry fingerprints, export/preview parity, preset/variation exports, portable JSON round trips, undo/redo, drag/drop, touch orbit/pinch, 320/390 px layouts and reachable mobile export. Reports are stored as JSON; screenshots document the checked layouts.

**No physical print, fatigue, force/displacement, or long-term flexural test has been performed.** Watertightness does not prove fatigue life or ergonomic comfort.

## Printing & first use

Print flat in the displayed orientation, PETG recommended, 0.4 mm nozzle and 0.16–0.2 mm layers. Inspect at least two extrusion paths through every flexure; supports, assembly and hardware are not needed. Avoid brittle resin/filled filaments. Print Whisper first as a full-scale calibration trial; begin with half the nominal stop travel. Inspect for underextrusion, layer separation and unintentional stop bridging. Stop at contact; never force past it. Stop using a print with whitening, cracks, or permanent deformation. Tune stroke/material/extrusion for your printer; tolerances and stiffness are not universal.

Dependencies: React/React DOM, Vite + React plugin, Three.js/OrbitControls, manifold-3d; gh-pages for publishing; Playwright for browser validation. All geometry generation is bounded and performed in a web worker so the editor remains usable during preflight.
