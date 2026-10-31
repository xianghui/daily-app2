# Curve & Chase

A React + Vite maker studio for a **six-part bed-flat twin-rail descent-race kit card**. Snip 24 breakaway runners and assemble four rails into two feet. Two matching external 6 mm balls compare a straight and a sine-sag path. Both lanes share start/end elevations; hand release, catch and repeat. This is an adult teaching kit with open, noncaptive lanes. No physical print, assembly, rolling or timing result is claimed.

## Reference-first evidence

Local STL candidates were found and parsed first: Keycap Studio's switch template (944 triangles, three components) and Weave's diamond link (5,940 triangles, one component). Their README/instructions and actual dimensions were inspected; neither provides sheet-kit joints. Exact local paths, SHA-256, dimensions and rejection reasons are in `reference-measurements.json`.

This run downloaded the actual **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Repository README/license were read; the mesh was parsed and its actual Z=.1/.5/1.59 mm sections inspected (`evidence/reference-sections.png`). No raw third-party mesh is bundled and reference trees remain read-only.

Source SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary STL; 30,616 triangles; **179.820 × 178.020 × 3.190 mm**; 27 edge-adjacent components; not watertight. Coordinates assumed millimeters based on sheet-scale features; STL contains no units. This is a measured design reference, NOT an automatically repaired import.

Measured sheet planes 0/1.6 mm, socket approximately 4.5 ×1.700012 mm and low runners at .21/.22 mm. We retain default1.6 mm sheet and4.5 mm tongue width; receiving dimensions are sheet+total-fit and tongue-width+total-fit. Default.15 mm allowance is a proposed FDM calibration choice, distinct from measured ~.10 mm in the sheet direction. Runners are intentionally thickened to .4–.6 mm. The race rails, eight seats, two feet, paired support gaps and path equation are original CSG reconstruction. See `reference-analysis.json` for mappings and deviations. Physical fit depends on filament/printer; trial-fit before adhesive.

Reproduce source analysis: `python reference-inspect.py /path/to/downloaded-reference.stl` with trimesh/numpy/matplotlib. No source STL is redistributed.

## Studio and implementation

The read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, STL parser, imageTrace and export modules were inspected. Concrete patterns:374 px left control rail/right gradient preview, paired slider/numeric fields, collapsible groups, raised tactile selected controls, lavender/coral light and saved dark theme, actual cutout checkerboard, preview-first phone stack and worker/current-result export gating. Shared studio/import/validation infrastructure is adapted from20261031-20; all race geometry, placements, assembly probes and explanatory content are new. No source dependency tree or Git history was copied.

Fresh Vite scaffold. `npm install`; `npm run dev`; `npm test`; `npm run predeploy`. Production server `node serve.mjs` serves `http://127.0.0.1:5622/daily-app2/20261031-21/`. Per-app scripts are `predeploy:npm run build`, `deploy:gh-pages -d dist`; public publication uses ROOT monorepo `deploy/` instead.

Locally bundled React/Vite, Three.js/OrbitControls, Manifold WASM (Apache2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright development validation. No CDN/runtime API, paid service, keys or uploads. Synthetic fixtures only.

## Parameters and real assembly

All lengths **mm**, rotation explicitly degrees. Three actual mesh-thumbnail presets: Gentle chase, Deep swoop, Compact race. Foot profiles: square, soft upper corners, clipped upper corners.

| Control | Range |
|---|---|
| Card width/height |208–224 /184–204|
| Foot width/depth |68–76 /30–34|
| Run/drop/sag |82–90 /28–34 /4–8|
| Foot/rail sheet thickness |2–2.6 /1.6–2|
| Total receiving allowance |.10–.30|
| Rail pair centre spacing |4–4.8|
| Part spacing |3.5–5|
| Runner width/thickness |.8–1.4 /.4–.6|
| Art footprint/depth |4–7 /.4–.6|
| Art Z rotation/X/Y |±180° /±1.5 /±2|

Rail top above the foot is `8+drop*(1-u)-sag*sin(pi*u)`, `u=X/run`; straight rails omit sine. A bounded64-segment polygon is extruded to the sheet gauge. Strict monotonicity follows `drop > pi*sag` (minimum margin2.867 mm). This is **not a cycloid or claimed brachistochrone**. Ball speed, friction, surface finish and release are not simulated.

Two parallel rails per lane, centred around global Y=±16 mm. Inner gap is pair-spacing−sheet=2–3.2 mm, below the external6 mm ball diameter. Sheet tops support spheres on their inner upper edges; lanes are open, no capture/retention claim. Ball corridor and separation checks do not establish real rolling performance. Catch balls in an external tray; small-ball choking hazard, adult supervision.

Each rail has two4.5 mm wide tongues at X=8 and run−8, depth equal to foot thickness; eight receiving slots are clearance fits. Two feet sit parallel with socket rows run−16 mm apart. Lower each rail vertically while the others remain seated, then bond FIXED tongues with compatible adhesive after trial fitting. No spring snaps, universal fit or hardware-free claim: two equal6 mm spheres, tray and adhesive are required, not printed. All six printed parts are included.

Real connected card Boolean-unions the divided carrier, six parts and24 bed-flat runners. All Z minima0. Default216×196 mm fits a nominal220 mm bed only if usable area and margins permit; choose individual parts on smaller beds. Accessible snips1.6 mm outside each envelope avoid tongues. Tests remove all24 runners and require exactly six released parts plus carrier. No loose-plate layout is mislabeled a kit.

## Both import workflows

Picker works on phones/desktop; drag/drop also supported. Replace/remove, centre/reset transforms and return-to-defaults are real state changes. Both imports modify the **exported solid** by Manifold Boolean engraving, not textures or unchanged re-export. Artwork is limited to a protected front-foot front foot patch (centre X−front footWidth/2+12, Y10), separate from sockets and optical parts. Minimum remaining backing is 1.4 mm. Raised art is deliberately unsupported here: only safe recessed marking is offered.

### PNG / JPEG / simple SVG → geometry

Content/header validation before decode: 16 bytes–2 MB, max 12 MP, max 6,000 px side. Normalize to ≤500 px; SVG must contain only simple local shapes, ≤2,000 elements, no external links/resources, scripts, effects or text. Rasterize SVG locally to 256 px. Fit/cover crop, pan ±25%, light/dark background, threshold 1–254 or grayscale relief. Alpha composites onto chosen background. Convert to an exact **20 × 20 sampled grid**, luminance `.2126 R + .7152 G + .0722 B`, thresholded depth or proportional inverse luminance. Adjacent samples triangulate a closed heightfield cutter; subtract from the front foot. No exact vector contour tracing is claimed; fine outlines quantize and sharp threshold boundaries interpolate over a cell. Bright interior holes remain unengraved on continuous backing, verified by actual solid probes. Source and actual cutout/heights are shown on a checkerboard. **2D-to-relief, not automatic 3D reconstruction from a photo.** Text and six searchable bundled marks use this same geometry path.

### ASCII / binary STL → exact mesh-shaped engraving

Max 2 MB and 1,500 triangles, axis extents .2–250 mm. Parse actual content, weld at 1e−5 mm, require finite/nondegenerate outward winding, exactly two opposite faces per edge, one positive-volume connected component and a broad flat-footprint convex solid. Unsupported open/nonmanifold, concave, hollow, disconnected, overhanging or excessive meshes are rejected with actionable errors; there is no hull replacement, repair claim or discarded concavity. The supported convex class is intentionally narrow and disclosed before import.

Source preview displays oriented dimensions, count/format and explicit millimeter confirmation (STL stores no units). Z/Y/−Z up selection precedes attachment; changing it requests reattachment. XY proportionally scales to footprint; Z independently fits engraving depth. UI shows both scale factors. Rotate/place/centre the original mesh, then Boolean-subtract that exact shape. This adapts imported geometry into the personalized front foot without touching assembly interfaces; it does not re-export the mesh unchanged. Empty silhouettes, nonfinite/excessive transforms, broken payloads or geometry that leaves the safe zone block exports.


## State, views and exports

Heavy CSG and STL parsing in a Web Worker with bundled WASM;100 ms debounce, generation IDs, content-state key. Every result checks finite vertices, triangle area, closed opposite edges and positive volume. An invalid/pending edit can leave labelled last-good preview but disables ALL exports. Actual binary STL signature is displayed in stage data and compared with real downloads and Node JSON regeneration.

Connected card, de-tabbed layout, assembled, exploded and each isolated part use the SAME parts. Exploded offsets are explanatory; exports always bed-flat. Drag/touch orbit, pinch, zoom and fit. See-through solids explain sockets. STL has no colour; swatches are preview-only. Per-part buttons, prominent STL selector and Everything ZIP contain the card, six clean part STLs and numbered assembly/print notes. Not a3MF.

Undo/redo, reset,6 local named designs and portable JSON include bounded normalized PNG or exact accepted mesh payloads. Missing/invalid payload requests reattachment; source paths are never treated as restored files. Images normalized≤500 px; saved JSON≤2 MB. Browser storage is local, not cloud. Source up-axis changes explicitly clear source for reattachment; replace/remove and reset transformations are available.

## Reproducible validation

`npm test` uses independent binary-STL parsing, welding at1e−5 mm, exact two-opposite-faces edge incidence, finite/nondegenerate faces, unit outward normals, positive volume PER component, dimensions and bed alignment. Every preset, all-min/all-max, each individual field endpoint and all three foot profiles; image and both STL-derived models also receive full assembly checks. `validate.mjs` uses real CSG intersections for all assembled pairs, rail insertion/removal paths, eight tongue/socket probes, actual top-profile probes, external ball clearance envelope, flat-card nonoverlap, safe snips and seven separated components; upper cross-sections stay inside bed footprint. No force, fatigue or dynamic roll test is implied.

`node browser-test.cjs`: real Playwright file pickers for PNG,JPEG,ASCII/binary STL, changed pixels/threshold/depth/crop/scale/rotation/placement, actual download bytes vs current preview signature and Node regeneration, malformed/truncated/open/nonmanifold/concave/oversize inputs, invalid parameters, empty silhouette, recoverable removal/reset, per-part downloads,320/390 px overflow and reachable exports, actual CDP touch orbit/pinch and phone imports/downloads.

`node studio-test.cjs`: every preset download, all shapes, text/icons/SVG, image/mesh JSON, named design reload, missing payload, undo/redo, unpack and parse every ZIP STL, all views, saved theme, focus/collapse/reduced-motion, left rail and preview-first phone, worker abort/recovery. `node personalization-test.cjs`: full mesh/assembly for every icon,text,SVG. `node hole-check.mjs`: actual Boolean probes show white interior hole stays unengraved, dark ring engraves, backing stays solid. `node stale-test.cjs` and `node orientation-test.cjs` check stale result protection and source orientation. Reports/screenshots stay beside the app. Production build under real base path is used, not just development mode.

**No physical print, assembly, fit, rolling, durability or timing test performed.** Check slicer layers, bed size, trial fit and surface finish. Print a small rail seat trial first; tolerances are printer/material dependent. Use .16–.20 mm layers, three walls, PLA/PETG, no supports intended; cool before snipping and keep runners off functional interfaces. All lengths mm; never indiscriminately scale assembled interfaces to fit a bed.
