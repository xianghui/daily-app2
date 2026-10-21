# Elliptic Ritual

A browser-based parametric, seven-part **trammel fidget**. Stroke a diagonal bridge: its two pivots ride in perpendicular, nonintersecting tracks, giving a bounded elliptic sweep. This is not a full-rotation crank, clicker or spring-return device. The three presets vary span, section and tactile groove depth. The studio uses React/Vite, Three.js and local Manifold WASM CSG in a worker. No servers, keys, CDNs or paid APIs are needed for generation/export. The warm model-first composition takes UX inspiration from Vaseverse; no branding, assets or source copied.

## Run and build

```
npm install
npm run dev
npm run predeploy
npm test
node browser-test.cjs
node extra-browser.cjs
```

Browser tests require Playwright Chromium; development server on port 5226. `production-test.cjs` checks the production build on port 5228; `gallery-test.cjs` checks the root gallery on port 5227. Reports record actual results. Root monorepo `predeploy` / `deploy` publishes the combined site; per-app deployment scripts are also present as required.

## Controls and units

All length values and STL coordinates are **millimeters**. Bridge pivot spacing 34–44; track floor 3–5; slider disc thickness 3–5; bridge thickness 3–4; palm corner radius 2–5; static socket allowance −0.08–0.08; edge groove depth 0–0.6; radial/side/axial running clearance 0.20–0.50. Slider disc diameter is 9, stalk diameter 4, cap tip diameter 2.6. Lid thickness is 2.4. Actual export X/Y/Z dimensions are shown for the selected printable layout/part. Assembled preview has an independent motion slider; STL is always the bed-flat layout, never the assembled motion pose. Preview and export share the same generated meshes and settings. Clay colours are preview-only; STL contains geometry, not colour.

Nominal slider center travel is L·sin(20°) through L·cos(20°). Both coordinates satisfy x²+y²=L². Closed capsule pockets provide end stops; with finite running clearance there is slight end play beyond the nominal 20–70° sweep. The preview shows nominal motion, not a friction/force simulation. Channels are disjoint, even at minimum span and maximum clearance. Disc flanges are retained beneath lid slots, with 2.0–2.3 mm radial overlap on each side. Caps limit bridge axial travel; four lid pegs friction-seat in blind base sockets. Static seats are deliberately separate from moving interfaces. At extreme negative socket allowance small interference is intentional; print a fit trial first.

## Image import: real 2D relief

Choose PNG/JPEG or drop one file. Limits: 16 bytes–2 MB, ≤12 MP and ≤6000 pixels per side. Headers are checked before decoding. Source is normalized to ≤500 pixels on its longest side for a bounded portable JSON payload. Synthetic `mark.png` and `waves.jpg` samples are bundled and downloadable. No personal uploads are stored in this repository.

A white-backed canvas fits or crops the image to a **20×20 grid**; crop shifts are ±25%. Luminance is 0.2126R+0.7152G+0.0722B. Threshold mode raises samples darker than a threshold of 1–254. Relief mode gives height = depth × (1−luminance/255), depth 0.4–3 mm. Adjacent samples are triangulated into a piecewise-linear height surface (not disconnected pixel cubes). A continuous 0.4 mm backing, closed sides and bottom form a watertight solid, sunk 0.15 mm into the stationary grip tab and robustly unioned. Transparent image pixels composite over white. Empty silhouettes/reliefs are rejected. This is **2D-to-relief**, not reconstruction of an entire 3D object from a photograph.

## STL import: verified integrated grip

Both ASCII and binary STL are parsed locally, ≤2 MB and ≤1500 triangles. Each axis must span 0.2–250 mm. Explicit mm confirmation is mandatory: STL carries no unit metadata. Accepted inputs are one closed, connected, consistently wound, outward-facing, positive-volume **convex solid with a broad flat Z-bottom and no XY overhang beyond its bottom footprint**. Concave, hollow, disconnected, degenerate, open/nonmanifold, self-intersecting and unsupported meshes are rejected, not automatically repaired. Bottom area must be ≥25% of XY bounding area. Export a simple low-poly solid from a modeler if rejected. Synthetic ASCII wedge and binary gem fixtures are bundled.

XY fits proportionally to a 4–7 mm footprint; Z independently fits 0.6–5 mm grip height. Rotate ±180° about Z, shift X ±1.5 and Y ±2 mm, or center/reset. This intentional bounded placement avoids mechanically unsafe arbitrary mesh attachment. A fitted XY span below 1.2 mm is rejected. Every custom vertex must stay within a 6.5 mm radius safe zone on the palm tab. The transformed mesh is sunk into the base and CSG-unioned: it changes the final solid, not merely an overlaid/re-exported source mesh. The union must remain one connected component. Source and final previews are distinct. Replace, remove or reset to built-in grip at any time. The fixed grip cannot obstruct either track or bridge.

## Local workflow and privacy

Image/STL content never leaves the browser. Requests only fetch locally bundled libraries, WASM and synthetic samples. Save JSON explicitly includes bounded image data or verified mesh vertices/indices, transforms and parameters; open restores it after validation. There is no cloud autosave or pretend import restoration. Undo/redo stores up to 35 modeling snapshots; changes coalesce after 450 ms. Invalid settings or pending/current-source mismatch disable export. Error feedback stays recoverable with replace/remove/reset. On phones the preview supports orbit/pinch, tabbed collapsible controls and a fixed download dock; desktop has a compact right rail. There are no hidden paid or fake controls.

## Export and assembly

Primary download: binary STL of all seven separated parts or an individual part. ZIP contains seven STLs and assembly notes (fflate). Default object names: palm-frame, x-slider, y-slider, thumb-bridge, track-lid, x-cap, y-cap. Parts are placed in a single row with ≥6 mm separation; rearrange them in your slicer if your bed is narrower than the combined layout. No interpenetrating visual shells are exported as fake unions; each required printed part is a separate connected closed solid.

1. Print all parts in exported orientation. Slider discs flat/posts up; lid flat/pegs up. PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four perimeters. All designed parts are support-free; cap socket roofs bridge 2.6 mm—verify slicer behavior.
2. Deburr bores and remove elephant foot. Put slider discs into their two pockets. Flip lid peg-down, guide slots over stalks, seat all four pegs flush into base sockets.
3. Align both bridge holes with slider posts. Put the bridge over them and seat retaining caps onto the narrow tips. Cap bottoms stop on spindle shoulders rather than clamping the moving bridge.
4. Check lid and caps stay firmly seated, then sweep gently back and forth. Never force a tight slider. Pull caps evenly to disassemble. Do not glue moving bores or slots.

**Calibration:** print frame, one slider and lid first as a full-size track trial. Start with 0.30 mm running clearance; 0.20 and 0.45 mm are alternatives, not universal guarantees. Static socket allowance controls only lid pegs/caps: positive loosens, negative tightens. Reprint loose seats tighter, or jammed tracks roomier. Retention requires the lid and caps to remain seated. No bearings, magnets, springs or fasteners. Small removable parts: not a child’s toy. There are no compliant members or claimed flexure limits.

## Validation and limits

`validate.mjs` independently reparses binary exports: nonempty, finite coordinates, normalized normals, nondegenerate faces, exact two-face welded edge incidence (1e−5 mm), opposing shared-edge direction, connected-component positive volume, correct component count and expected mm bounds. Every intended part is also checked individually. Defaults, all parameter-box corners, three presets and deterministic variations are exercised. Imported image relief/silhouette and both STL fixtures undergo the same part/mesh and mechanism checks at default/min/max/presets. Motion checks verify constant pivot spacing, channel travel bounds, lid overlap, axial gaps, isolated grip region and nonoverlapping print layout. Representative full-cycle positions use Manifold solid intersections between all assembled components; only deliberate static friction seats may intersect. Robust CSG output, restricted simple construction and imported convexity checks prevent unsupported geometric unions.

Browser tests actually select files, download and parse STL, compare geometry hashes and dimensions, vary pixels/threshold/relief/scale/rotation/placement, test malformed and excessive content, replace/remove/reset, undo/redo, portable design round trips, presets/variations, ZIP/per-part downloads, responsive layout and touch orbit/pinch. Build success is not treated as export validation. No physical print has been performed: digital checks do **not** verify friction, strength, wear, material behavior or pull-off force.

Dependencies: React, React DOM, Vite/plugin-react, Three.js, manifold-3d (WASM solid modeling), fflate (ZIP); gh-pages for deployment; Playwright for development tests. Fixtures are synthetic local artwork/geometry authored for this studio family, no third-party attribution required.

### Recorded validation for this build

- 270 parameter cases and 24 image/STL-derived cases passed mesh and mechanism validation; sampled moving-component intersection volume was 0 mm³ (static friction seats excluded).
- 29 real browser STL downloads passed geometry checks; 10 malformed/excessive/unsupported-file cases were rejected recoverably. Threshold/depth and mesh scale/rotate/place changes were verified in downloaded geometry.
- Three presets, four browser variations, undo/redo, all four portable fixture save/open round trips, per-part exports, ZIP and drag/drop passed.
- 320/390 px phone layouts, touch orbit/pinch, phone image and STL downloads, production WASM/worker export and a 1001×701 synthetic-image portable round trip passed. Browser runtime errors and external file-processing requests: zero.
- Root gallery inline script compiled and rendered without errors; its 55 earlier entries remained intact, with this entry exactly once and STL category first. Root predeploy created the gallery plus all 56 app folders, with 0 failures/skips.

See the committed `geometry-validation.json`, `browser-validation.json`, `extra-validation.json`, `production-validation.json`, and `gallery-validation.json` for evidence. These are digital checks, not physical-print certification.
