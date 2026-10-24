# Seam Ritual

A local React + Vite fidget STL studio for a **side-entry, interlocking TPU seam**. Two rails carry five staggered rounded T-head teeth each. Gently press one pair sideways to engage, continue along the seam, then peel from an end to release. This is not a garment zipper, rigid slider, stud/socket snap or permanent captive assembly. The archived gallery was read only; no archived app was built or modified.

## Studio

Model-first warm ivory/clay editor with a large Three.js canvas, compact tabbed desktop rail, collapsible phone controls and fixed mobile export. Orbit, pinch zoom, zoom buttons, reset/fit, 10 mm grid, per-part selection, actual-model preset thumbnails, three presets, bounded Variations, undo/redo and portable design JSON. Colour is preview-only: **STL has geometry, not colour or TPU assignments**. The neutral assembled preview and separated bed-flat export layout are explicitly distinguished. There is no simulated elastic motion or fake force estimate.

## Mechanism and parameters (all linear dimensions in millimeters)

| Parameter | Range |
|---|---|
| Palm diameter | 22–28 |
| Tooth pitch | 8–10 |
| Neck width | 1.2–1.8 |
| Engaged head gap | 0.25–0.50 |
| Rail/neck thickness | 3–5 |
| Palm dimple depth | 0–0.6 |
| Head rounding radius | 1–1.4 |

Five teeth per rail. Head total width = pitch/2 + 1; stagger = pitch/2; the lateral head overlap is 1 mm. Neck side clearance is at least 0.6 mm. The return rail's tooth reach incorporates the chosen gap, so this setting changes exported geometry, not just preview spacing. The gap refers to the neutral engaged head-face separation. This is not a universal printer tolerance or retention guarantee. Import safe radius is 6.5 mm at the first palm; tooth-head isolation is at least 10.5 mm. Dimples never cut through the rail. Final X/Y/Z export size is calculated from the actual selected mesh in mm.

## Both import workflows

File picker works on desktop and phones; one-file drag/drop is also supported. All processing occurs locally in the browser, with parsing and mesh generation in a worker. No APIs, accounts, uploads, CDN imports or paid services. Bundled fixtures in `public/samples` are synthetic original marks, gradients and convex polyhedra, released CC0. No personal input files are included.

### PNG / JPEG → printable relief

Files: 16 bytes–2 MB, image dimensions ≤6,000 px per side and ≤12 MP, verified from content before decoding. Transparent pixels are composited white. The source is locally downsampled to a maximum 500 px side for portable storage, then sampled at **20 × 20 luminance vertices** (Rec.709 weighted RGB). Fit/contain or crop/cover and X/Y shifts ±25% control sampling. Threshold mode sets dark vertices to the chosen depth and others to zero; grayscale mode uses depth × (1 − luminance/255). Heights are linearly interpolated across triangulated grid cells, not exact vector tracing. Both have a continuous 0.4 mm solid backing. The base is sunk 0.15 mm into the recessed palm floor and robustly unioned with it. This is **2D-to-height-map relief / thresholded raised silhouette, not reconstruction of an entire 3D object from one photo**.

Threshold 1–254, depth 0.4–3 mm, footprint 4–7 mm, rotation around Z ±180°, placement X ±1.5 / Y ±2 mm. Empty reliefs and any rotated corner outside the safe radius are blocked. Source and conversion previews are displayed beside the live final model. Different pixels, threshold, depth, crop, scale and placement change exported geometry.

### ASCII / binary STL → integrated palm grip

≤2 MB; 1–1,500 triangles; dimensions 0.2–250 mm per axis. **STL carries no unit metadata**: dimensions are shown and the user must explicitly confirm millimeters. Only one closed, consistently outward-wound, positive-volume, non-self-intersecting **convex solid with a broad flat bottom and no unsupported overhangs** is supported. Open, nonmanifold, concave, disconnected, hollow, degenerately thin or unsupported solids are rejected, not silently repaired. This deliberate bounded subset makes local integration predictable. Repair unsupported meshes in a dedicated modeler, re-export a convex flat-bottom grip, and try again.

The accepted source is centered, proportionally fitted in XY to a 4–7 mm footprint and independently scaled in Z to 0.6–5 mm grip height. Minimum fitted XY span is 1.2 mm. Z rotation, center/reset, X/Y offsets and replace/remove are supported. No arbitrary tilt is offered because it could invalidate the flat-bottom integration assumption. Original mesh preview and dimensions remain visible. Manifold solid union merges the source into the palm well; the final result must be one closed connected solid. Merely previewing or re-exporting the original input is not the workflow.

### Design save/open

JSON includes parameters, transformations and bounded portable source payload: normalized image PNG plus conversion settings, or validated STL vertex/index arrays. No missing asset is pretended restored. Reopening validates payloads again; corrupt/missing payloads show actionable errors, requiring the original source to be reattached. Undo/redo uses bounded local snapshots. Save is an explicit local download, not a repository or cloud write.

## Geometry, export and validation

Manifold-3D WASM implements real solid unions/subtractions, not overlapping visual shells. Three.js preview and binary STL use the same final geometry. Download both separated rails or either individual part; ZIP includes both STLs and assembly notes. STL is binary float32 in mm, with calculated outward normals.

Each edit checks parameter limits, finite vertices, nondegenerate faces, positive volume, one connected component per part, welded-edge incidence exactly two and opposite neighbor winding, including coordinates after float32 export placement. Unsupported inputs disable export rather than leaving an exportable stale model. Import parsing also checks connectivity, convexity, flat base, winding and triangle self-intersection. Complexity and coordinate bounds are enforced before expensive operations.

`npm test` independently parses final binary STL, validates welded topology, per-component positive volume, stored normals, analytic XYZ bounds and mechanism geometry for defaults, every preset, min/max, all 128 parameter-range corners and deterministic variations. Image and STL-derived models receive the same mesh, dimension and mechanism checks. Solid intersection tests cover nominal engaged nonintersection, separated print layout and import isolation; analytic checks cover all five head undercuts and neck clearances. These are **geometry checks, not physical print, elastic release, retention-force or fatigue tests**. Browser scripts exercise actual file pickers, PNG/JPEG and ASCII/binary STL, actual downloads and pixel/threshold/scale/placement differences, recoverable rejection, portable save/open, undo/redo, all presets, variations, per-part/ZIP export, mobile orbit/pinch and narrow layouts.

## Print / calibration / use

Print both rails flat in **TPU 95A**, 0.4 mm nozzle / 0.2 mm layers as a starting point, at least three perimeters and solid tooth necks. No supports, hardware or glue intended. Brittle PLA is unsuitable for press-through teeth. Start with **Fine Stitch** as the full-size calibration coupon (0.50 mm gap, 1.2 mm neck, 1 mm rounding). Test one end pair gently before engaging the full seam. Adjust gap, neck width and rounding; material and printer tolerances are not universal.

Align staggered rows as in Assembled; gently press one pair at a time. Peel from an end. The 1 mm undercut prevents rigid transverse release: local flexible deformation is intentional. Do not force all five teeth past each other together or sharply fold necks. Stop on creases, splitting or excessive resistance. Force, friction, layer adhesion, creep, TPU cycle life and safe bend limit depend on print/material and remain untested. Neutral pose is collision-free, but elastic engagement/release is not simulated. **No physical print testing performed.** Small parts; not for children.

## Development / dependencies

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Browser tests: `node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs` against the local server at port 5280; `TEST_BASE` can select the production preview.

React, Vite, Three.js, Manifold-3D, fflate, gh-pages; Playwright is test-only. All runtime dependencies, worker and WASM bundle locally. Individual deploy scripts are present as required; public publication uses the **root monorepo** `npm run predeploy` and `npm run deploy`. Base path: `/daily-app2/20261025-2/`.

Visual direction references Vaseverse's model-first editing, quiet tones, compact tabbed controls and reachable export, with original code arrangement, product name and fidget-specific content; no Vaseverse branding, assets, text or source copied.
