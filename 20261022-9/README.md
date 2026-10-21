# Cone Reverie

A local React + Vite parametric fidget studio. Roll a **double cone on diverging, rising rails**, watch its center descend while it appears to climb, then lift and reset. This is a distinct gravity/contact mechanism, not an axle roller. Two separately printable connected solids, no hardware. **Intentionally removable roller; open rail ends require manual stopping.** This is not a captive or perpetual-motion device.

## Run / export

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`.

Primary Download STL exports a binary STL of the bed-flat two-part layout, or the selected individual part. ZIP includes both parts and assembly notes. Preview/export use the same final CSG meshes; assembled pose differs from the exported print orientation. STL contains millimeter geometry, not preview colors. Export dimensions are shown for the current selection. Local save/open JSON carries bounded synthetic or user-import payloads; no missing source is silently restored. Undo/redo retains up to 35 bounded modeling states.

## Parameters (all lengths in mm)

- Cone radius: 15–17; axial half-length fixed 22 (total 44).
- Rail rise gradient: 0.04–0.08 mm/mm; runway length: 60–68.
- Rail divergence per side: 0.16–0.20 mm/mm; inner half-spacing begins at 4.
- Base/palm thickness: 3–5; rails: 2 thick, begin 12 above base.
- Cone end radius: 2–3; palm groove depth: 0–0.6.
- Axial guide shoulder clearance: 0.20–0.50 per side. 0.30 is an FDM starting point, not universal. No sliding bearing fit is required.
- Three actual-geometry thumbnail presets and bounded randomized variations.
- Import footprint 4–7, STL height 0.6–5, Z rotation ±180 degrees, X placement ±1.5, Y placement ±2, all constrained inside a 6.5-radius fixed palm-tab safe zone.

## Image workflow

File picker and drag/drop accept actual PNG/JPEG, 16 bytes–2 MB, up to 12 megapixels and 6,000 pixels on either side. Headers are checked before decode. Local browser canvas downsamples to a bounded 500-pixel-side portable original, then a **20 × 20 luminance grid**. Fit/contain or cover/crop and ±25% crop shift control sampling. Luminance = 0.2126R + 0.7152G + 0.0722B; transparency composites against white. Threshold 1–254 produces raised dark pixels, or grayscale maps darkness to height. Relief depth 0.4–3, with continuous 0.4 backing. Adjacent samples are triangulated (not vertical pixel towers). Back and side faces close the heightfield, and robust Manifold union embeds it 0.15 into the palm tab. The image truly modifies exported triangles/volume. This is **2D-to-relief conversion, not reconstruction of a full 3D object from one photo**. Empty white conversions are blocked.

Source and conversion previews accompany the final 3D canvas. Replace, remove, reset, footprint/depth/placement edits all affect real geometry. JSON embeds the bounded PNG and conversion settings for portable restoration.

## STL workflow / deliberate restrictions

ASCII and binary STL, 40 bytes–2 MB, up to 1,500 triangles, 0.2–250 per source axis. Source dimensions are shown and the user must confirm millimeter coordinates: STL has no units. XY is proportionally normalized to the requested footprint; Z independently fits the selected height. Center/reset, scale, rotate around Z, and XY placement all survive export. Source 3D mesh and final grip previews are provided.

A worker checks finite coordinates, nondegenerate faces, welded edge incidence (1e-5), consistent opposite directed edge winding, connectedness, positive volume and pairwise self-intersections. Accepted shapes must additionally be **convex, broad flat-bottomed, and have all XY projections inside their bottom footprint**, which is at least 25% of their bounding footprint. Thin fitted XY spans below 1.2 are blocked. Concave, hollow, open, touching/intersecting, disconnected or overhanging inputs are rejected with instructions to edit/re-export. No arbitrary repair is claimed. A verified mesh is scaled, placed and **CSG-unioned** to the stationary tab. Moving cone/rails never receive imported protrusions. Unsupported/missing/unconfirmed sources disable export.

Bundled `public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl` are synthetic fixtures inherited from this collection and require no personal files or third-party attribution. All processing happens locally; no API, uploads, CDN runtime imports, or keys. Saving JSON is an explicit local file download; personal uploads are not persisted to the repository or external services.

## Mechanical and mesh validation

`node validate.mjs` tests defaults, all three presets, all 256 range corners, eight deterministic variations, plus image-threshold/heightfield and ASCII/binary import variants. Each exported component is checked independently: finite valid triangles, no degenerate faces, normalized normals, directed winding, positive component volume, exactly two faces per welded edge, bed-flat export and expected mm bounds. Manifold's robust CSG ensures genuine solid unions, not interpenetrating shells.

Mechanism checks verify expanding-cone slope below 45 degrees, rails inside the cone span, 2 mm rails, protected import zone, separated export layout, guide clearance, and strictly decreasing support-envelope center height at 101 travel positions. The cone support envelope maximizes rail-top height plus the conical radial cross-section over longitudinal contact position. A 0.035 mm preview contact allowance avoids numerical penetration of the polygonal approximation; it is not a bearing tolerance. Built-in and imported variants are additionally intersected at 25 assembled positions to detect collisions. The supported preview stroke leaves a 3 mm longitudinal rolling margin; the user must manually stop at the open ends in reality. **No physical print, friction, balance, wear or successful gravity-roll experiment has been performed.** Digital geometry does not prove real rolling performance.

`browser-test.cjs` exercises actual desktop/mobile file pickers, downloads and re-parsing, changed image thresholds/depth/crop/content, STL scale/rotation/placement, rejected/truncated/open/nonmanifold/excessive files, empty silhouettes, removal/reset, min/max dimensions, exact preview/export fingerprints, touch orbit/pinch and 320/390 px widths. `extra-browser.cjs` covers presets, random variations, portable JSON round trips for all four sources, undo/redo, drag/drop, color neutrality and individual ZIP components. JSON reports and viewport screenshots document results. These tests use only synthetic fixtures.

## Printing / operation

Print runway base-down; cone on its 4–6 mm diameter flat end, with a brim if needed. The expanding cone is support-free geometrically; bed adhesion still requires care. Remove all brim residue, keep contact faces smooth and remove elephant foot. PLA/PETG, 0.4 nozzle, 0.16–0.20 layers, four walls, symmetric ~25% infill are starting suggestions. Print a full-size trial to calibrate guide clearance. Level the runway, place cone across both rails near the narrow end, nudge toward the wide end, stop before the ends, lift and return. Tune rail rise down or divergence up if friction stalls rolling. Never glue the roller. No compliant elements or hardware are required. Small removable parts: not a child's toy.

## Architecture / dependencies

React, Vite, Three.js/OrbitControls, `manifold-3d` WASM in a local module worker, `fflate` ZIP; locally bundled npm dependencies. Playwright drives verification. Responsive ivory/clay model-first canvas, right rail, touch controls and fixed phone export area. UX direction references Vaseverse's model-first quiet editor, but no branding, assets or source code are copied.

Per-app deploy scripts are retained, but the public site is deployed through the root monorepo `deploy/` flow, under `/daily-app2/20261022-9/`.
