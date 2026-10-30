# Flight & Landing

A local React + Vite maker studio for a **seven-part miniature open-riser staircase kit card**. Four horizontal treads insert sideways into two sloped stringers; four downward feet then seat in a personalized plinth. The real connected card has 28 removable runners. All twelve fixed joints require adhesive. This is a static architectural miniature—not a load-bearing staircase, toy safety certification or building-code design.

## Run & export

```sh
npm install
npm run dev
npm run predeploy
npm test
```

Production base `/daily-app2/20261030-27/`. App scripts: predeploy=`npm run build`; deploy=`gh-pages -d dist`. The combined public site is deployed by the repository ROOT flow, not the individual app script.

Select connected card or an individual part and Download STL; Everything ZIP contains the connected card, seven separate printable STLs, numbered assembly instructions and current fit measurements. All exports are binary STL, bed-flat Z=0, millimeters; no preview colors, assembly overlap or estimated camera geometry are exported. The same current worker result supplies the viewer and exporters. Errors, pending conversions, missing unit confirmation and stale worker results disable export; the previous preview is explicitly marked last-valid.

## Reference-first evidence

Inspected local candidates FIRST: `keycap_generator2/public/templates/clicker_template2.stl` and `fidget_fabric_generator/public/templates/diamond-link.stl`, with project instructions and actual meshes. They provide switch interfaces and an8 mm interlocking link, respectively—not suitable sheet-card parts. Their hashes, sizes and components are in `reference-measurements.json`.

Downloaded and parsed **White Cat Kit Card**, Mike Kasberg, Printables865769, https://github.com/mkasberg/white-cat-kit-card; CC BY4.0, https://creativecommons.org/licenses/by/4.0/. Original source README and license retained. Binary STL SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`,30,616 triangles;179.820×178.020×3.190 mm. STL has no unit metadata; millimeters assumed from source sheet dimensions. Actual sections at Z.1,.5,1.59 mm were inspected: `evidence/reference-sections.png`; re-run `reference-inspect.py` with trimesh/numpy/matplotlib and the downloaded source at `/tmp/flight-landing-reference.stl`.

Measured sheet planes0/1.6 mm and four4.5×1.700012 mm socket loops map directly to tongue4.4, sheet1.6,total clearance.10. Default.15 and range.10–.35 are PROPOSED printer-dependent fits, not measured universal tolerances. Source runner levels.21/.22 mm inspire a stronger.4–.6 mm carrier redesign. Original source is NOT watertight (27 edge-adjacent components including loose faces); it is only a measured design reference. We do not claim to repair it or redistribute the raw mesh. All exported geometry is original parametric Boolean reconstruction. See `reference-analysis.json` for measurement-versus-redesign decisions.

Primary visual/interaction reference `keycap_generator2` was read-only: README, styles, App, Viewer, worker, import/trace, geometry/STL and export modules inspected. This studio uses its concrete lavender desk, white panels, pink tactile raised buttons, saved dark theme,374 px scrollable left rail, collapsible groups, numeric/slider pairs, checkerboard, large right viewer and phone preview-first stacked layout. Shared local maker-studio infrastructure was adapted from the existing daily apps, but staircase solids, interfaces, packing, assembly poses and checks are new—not a renamed cleat or unchanged STL.

## Parameters — all distances mm

- Card260–280 wide,250–270 high; envelope and packing validated.
- Tread run12–16; rise7–10; clear stair width34–42; tread depth10–14; four stations fixed. Pitch=atan(rise/run); top center4×rise above plinth. Open gaps between treads are intentional. This is not a compliant or moving design.
- Stringer/tread sheet1.6–2; plinth2–2.8; top stringer margin5–8.
- Tongue4.4–6 wide; total socket allowance.10–.35; spacing3.5–5; runner width.8–1.4 and height.4–.6.
- Soft rectangle, bevelled and rounded silhouettes; three real model presets and bounded variations. Geometry controls change export. Undo/redo, up to six local named designs, portable JSON save/open with bounded embedded assets. Missing image payload explicitly requests reattachment; imported paths are never pretended restored.

## Image import and personalization

File picker on desktop/phone and drop zone: actual PNG/JPEG, plus restricted simple SVG.2 MB max,12 MP and6,000 px/side; image header checked before decoding, normalized to≤500 px. SVG≤2,000 simple elements; external resources/scripts/effects rejected; rendered locally to256 px. Text≤8 characters and six original bundled icons use the same image-to-geometry pipeline. Fonts Fredoka/Rubik are bundled locally (Fontsource/OFL); icons are original small SVG paths.

Conversion is **20×20 sampled 2D-to-height relief**, not automatic full3D reconstruction or exact contour tracing. Fit whole/fill-crop, crop pan±25%, light/dark background, luminance threshold1–254 or grayscale relief. White/transparency is uncut backing; bright enclosed holes stay unengraved. The checkerboard shows actual sampled cutout, and original image remains visible. Raise/shine-through are deliberately unsupported: protected engravings.4–.6 mm deep maintain≥1.4 mm backing and bed-flat printing. XY footprint4–7, rotation±180°, X±1.5,Y±2 within a checked radial6.5 mm keep-in zone. Replace/remove/reset controls return to built-ins. Every setting changes actual Boolean cutters, never a texture.

## STL import

Actual ASCII and binary STL,2 MB,≤1,500 triangles,0.2–250 mm each oriented axis. Explicit source dimensions, format, triangle count and millimeter confirmation (STL has no units), Z/Y/−Z up axis, proportional XY footprint scaling, independent depth, rotate and placement. Axis changes clear source for reattachment. Source preview is separate from final model.

The **exact accepted mesh** is Boolean-subtracted into the plinth signature zone, not re-exported unchanged. Strict contract: one closed outward-wound positive-volume convex solid with broad flat Z-bottom and no overhangs. Finite coordinates, nondegeneracy, edge incidence/orientation, connectedness, triangle intersections, dimensions, convexity and footprint checked locally in worker. Concave/hollow/open/multiple/overhung meshes rejected with actionable errors; no hull replacement or claimed repair. A computed bottom hull is only a conservative validation test, never export geometry. Scaling or placement invalidity blocks export.

## Privacy, dependencies and performance

No uploads, servers, APIs, keys, CDN runtime or paid services. All user files stay in the browser; never committed. Synthetic bundled examples under `public/samples` demonstrate PNG/JPEG/SVG/ASCII/binary paths. Portable designs embed normalized bounded data; local storage may fail explicitly if full. React, Vite, Three.js/OrbitControls, Manifold WASM and fflate are bundled; heavy CSG and parsing live in a worker;100ms debounce, sequence guards and bounded geometry. Palette is preview-only; STL stores no colors.

## Printing and assembly

Print at100% mm in PLA/PETG, .16–.20 layers,3 walls. No supports intended: all seven clean parts and tabs start at bed. Full card needs large bed; export parts for smaller printers. Snip28 runners1.6 mm outside parts and carefully trim remaining nubs. Calibrate one tread/stringer first in .05 mm allowance increments. Slide four treads into one stringer, fit second stringer sideways, then lower whole stair into four plinth sockets. Shoulders limit sideways insertion and stringer bottom edges seat on plinth. Bond twelve stationary joints and cure square. No snap or universal press-fit retention claim. Numbered instructions in UI and ZIP describe the same sequence.

## Validation

`validate.mjs`: independent binary STL length/count, finite coordinates, nonzero area, stored unit normals, float32 millimeter bounds, welding at1e−5 mm, two opposite faces per undirected edge, per-component positive signed volume; all parts separately. Checks defaults,3 presets,3 silhouettes, extremes and each control end. Real kernel intersections test all21 assembled part pairs, lateral stringer approach and vertical stair insertion across21 samples, four socket gauges, eight tread shoulders and two stringer seats.28 snips must avoid all clean solids and yield eight components (seven parts + waste carrier). Sampled print sections must stay within bed footprints.

`import-extremes.mjs` applies the same mesh and assembly suite to STL/image threshold and relief under every preset/extreme. `hole-check.mjs` probes real Boolean image holes; `sensitivity-check.mjs` checks all controls change export. Browser tests use actual file pickers and download bytes for PNG,JPEG,SVG,ASCII/binary STL; changes in pixels/threshold/depth/scale/rotation/placement, malformed files, remove/reset, per-part/ZIP parsing, JSON/local round-trips, undo/redo, views, worker failure/stale gating, theme/focus/collapse/reduced motion and320/390 px phones with touch orbit/pinch. Production base-path output is served for tests. Evidence/reports committed after checks complete.

**No physical print, assembly, strength, fatigue or fit test was performed.** Geometry validation does not establish physical performance. Print a calibration fit first. Thin miniature parts are not intended for children or load-bearing use.
