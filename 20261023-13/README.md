# Fin Ray — local fidget design studio

A React + Vite parametric STL editor for a **one-piece, tapered compliant fin**. Hold the rigid circular palm landing, gently press a side of the fin in its XY plane, then release. Two converging rails and five inclined cross ribs distribute deformation. This Fin-Ray-inspired lattice is distinct from a solid cantilever, pluck comb, rotating-square cell, spiral spring or hinged linkage.

**Physical force, fatigue, adaptive curling and print success are unverified.** The preview is the undeformed object, not a mechanics simulation. No physical print has been tested. This is a gentle TPU material experiment, not a guaranteed inverse-curling gripper.

## Run

```sh
npm install
npm run dev
npm run predeploy
npm test
```

Vite base: `/daily-app2/20261023-13/`. Required per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. The public combined site is published from the **repository root** using its `predeploy` and `deploy`, not by deploying this app alone.

## Editor

Large orbit/zoom 3D canvas; right parameter rail on desktop; collapsible, tabbed controls and fixed reachable STL action on phones. Three actual mesh thumbnails: Soft Shore (long, thin, broad), River Fin (balanced), Reef Tip (short, thick, narrow). Variations stay within geometric ranges. Shape, Mechanism, Surface, Import and Print tabs provide paired numeric/range fields, live dimensions in mm, real recessed palm texture and geometry-only preview colours. Undo/redo includes modeling and import changes. Save/Open JSON includes a bounded image data URL or validated STL vertices; missing image payloads are explicitly rejected, never silently restored.

## Parameters (all mm)

| Control | Range | Default |
| --- | --- | --- |
| Fin root width | 22–32 | 27 |
| Fin reach | 32–48 | 40 |
| Rail and rib in-plane width | 0.9–1.5 | 1.2 |
| Cross-rib lean offset | 2–5 | 3.5 |
| Extrusion height | 2.4–3.6 | 3 |
| Palm dimple depth | 0–0.6 | 0.3 |

Five rib centers sit at 1/7 through 5/7 of fin reach, leaving a long flexible tip cell. Rounded rail/rib roots are solid unions. Root rail is 3 mm wide; palm arm is 4 mm wide. Palm diameter 20 mm; import well floor Z=3.2 mm. Source geometry is restricted to a radius-6.5 mm safe zone isolated by 18 mm from the nearest fin root. No dynamic sliding fits, retained bodies or rubbing clearances exist, so there is no misleading universal fit slider: users tune real bending widths and calibrate the material instead.

## Image → real relief

PNG and JPEG only. File 16 bytes–2 MB, header verified before decoding; max 12 megapixels and 6,000 pixels per side. Sources are locally downsampled to at most 500 px side for a portable design. Fit entire image or cover/crop square with ±25% X/Y crop shifts. Transparent pixels composite onto white. Conversion samples a **20 × 20 grid**, using luminance `0.2126R + 0.7152G + 0.0722B`.

- Threshold mode: pixels darker than threshold 1–254 become raised to the selected depth.
- Grayscale mode: relief height is `depth × (1 - luminance/255)`.
- Depth 0.4–3 mm; continuous 0.4 mm backing; adjacent grid samples triangulate into a closed height-field solid. A threshold silhouette therefore has interpolated boundary slopes, not a traced vector contour.
- Footprint 4–7 mm; Z rotation ±180°; X ±1.5 mm; Y ±2 mm. Union embeds the backing 0.15 mm into the rigid well floor. Entire converted solid must stay in the circular safe zone. Empty silhouettes/relief are rejected.

This is **2D-to-relief conversion, not reconstruction of a full 3D object from one photograph**. Original image, sampled conversion and final 3D solid are visible. Changing pixels, threshold, depth, crop, scale or placement changes actual exported geometry. Replace/remove, reset image controls, center/reset transforms and return to built-in oval grip are implemented.

## STL → integrated palm grip

ASCII and binary STL are parsed locally in a worker; max 2 MB and 1,500 triangles; each source axis 0.2–250 mm. STL has no unit metadata: users must explicitly confirm source coordinates represent **millimeters** before generation/export. Source preview, dimensions, format and triangle count are shown.

Deliberate supported subset: **one convex outward-wound closed connected solid with a broad planar Z-down base** (at least 25% of XY bounds), and all XY projections inside that base. Concave meshes, disconnected solids, hollow shells, overhangs, open/nonmanifold edges, self-intersections, degenerate triangles, nonfinite/extreme coordinates and inconsistent winding are rejected with actionable messages. There is no fake automatic repair.

XY fit preserves aspect ratio within a 4–7 mm footprint; Z is independently fitted to a 0.6–5 mm grip height. Fitted XY minimum span 1.2 mm. Rotate around Z, translate within the well, center/reset, replace or remove. Tilt is intentionally unsupported because the verified flat-bottom contract must be preserved. The validated source is unioned into the palm floor, not overlaid, re-exported unchanged, or attached across a flexure. A disconnected or unsafe union blocks export.

## Export and privacy

Binary STL encodes finite triangles, geometry and mm-coordinate values, **not preview colours**. STL itself does not record units. Preview and export derive from the same final mesh and modeling state; stale/invalid generation disables downloads. Export layout places the entire planar bottom on Z=0. Object preview and print layout show the same single solid at its original coordinates, with a flat Z=0 bottom; XY centering can be done in the slicer without changing geometry. The whole-solid selector and individual `fin-ray` export are available; no ZIP is necessary because there is one required part.

All user input processing is in the local browser. No upload, remote API, CDN, API key, account, server-side generation or paid service. Only locally bundled JS/WASM/sample asset requests occur. A downloaded JSON intentionally contains its bounded local source payload. No personal uploads are committed. Samples in `public/samples` are synthetic fixtures (generated mark, waves, wedge and gem), with no external attribution needed.

## Printing and calibration

- Start with TPU 95A, 0.4 mm nozzle, 0.16 mm layers. Rigid PLA is not recommended for this flex experiment.
- Print the planar bottom down, Z=0. No supports, hardware, assembly or freeing fused joints; the connections are intentional flexures.
- Print **Soft Shore** as a full-size material calibration. Check two or more continuous extrusion paths across the minimum 0.9 mm sections. Slicer thin-wall behavior matters.
- Begin below 0.5 mm tip displacement in-plane; release and inspect. Do not close cells, pull apart, fold out of plane or force the tip against a rib. Stop for whitening, cracks, delamination or permanent set.
- No universal stiffness, tolerance, fatigue life, force, print-time estimate, or inverse-curling response is claimed.

## Geometry implementation and checks

Locally bundled `manifold-3d` WASM does real boolean union/subtraction of rounded bars, circular grips and the bounded import solid, avoiding internal overlapping shells. React manages the editor; Three.js/OrbitControls render the exact final mesh. Generation/import validation runs in a module worker. Mesh resolution, input bytes, image decode dimensions and STL complexity are bounded.

Runtime preflight checks parameter/transform ranges, source contracts, safe zone, manifold-engine status, one connected component, finite coordinates, nondegenerate faces, welded edge incidence=2 with opposite orientation, and positive volume. Invalid or pending state disables export.

`validate.mjs` independently reads binary exports, verifies normals/winding, welded-edge closure, positive volume per component, mm bounds and flat bed placement. It covers all 64 six-parameter corners, defaults, extrema, three presets and eight deterministic variations (78 cases), plus 24 image/STL integration combinations. Solid intersection probes check continuity of both rails and all five ribs, six open-cell centers and lateral rib air. An analytical conservative small-displacement exclusion envelope checks centerline cell spacing minus rib width and up to 0.5 mm deflection; **this is not FEA or a prediction of actual deformation**. Source meshes receive explicit triangle intersection checks; final shapes are boolean combinations of valid primitives/height fields and verified convex sources.

`browser-test.cjs`, `extra-browser.cjs`, `mobile-sheet.cjs` exercise actual file pickers, downloads, source changes and transforms; malformed/unsupported files; save/open; undo/redo; all presets/random variations; exact preview/export fingerprints; narrow screens, touch orbit/pinch, control sheet and reachable export. An additional `variation-regression.mjs` checks 128 seeded variations. Reports and screenshots record executed checks. `gallery-test.cjs` checks all inline scripts and preservation of prior gallery entries. `public-check.cjs` verifies the published app and its generated STL.

Dependencies: React, React DOM, Vite, Vite React plugin, Three.js, manifold-3d, gh-pages; Playwright is a development-only browser test tool. No dependencies are loaded from CDNs at runtime.
