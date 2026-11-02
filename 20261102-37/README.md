# Curry & Gap

A **five-part flat-pack missing-square dissection kit**, not a browser game: snip20 runners, place two triangles and two stepped pieces in a gridded board, then lift and rearrange them to expose a one-cell gap. The outer boundaries have different shallow kinks: **they are NOT the same straight-sided triangle**. No material vanishes. No hardware or glue; loose pieces, keep level. No physical print testing.

## Build

React + Vite, Node22.12+. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261102-37/`. App includes gh-pages and required predeploy/deploy scripts; publication uses ROOT monorepo deploy folder. `python3 serve.py` serves actual production assets on5737 under the base prefix for test scripts. WebGL, Workers and WebAssembly required.

## Reference-first evidence

Local files were inspected first: read-only `keycap_generator2` README, App, styles, Viewer, image conversion, STL, export and worker modules; its actual clicker template was parsed, as was `fidget_fabric_generator`'s diamond link after reading its README. These are switch/link mechanisms, not suitable sheet-kit sources. Actual dimensions/hashes/components and rejection reasons are in `reference-analysis.json`.

Selected public STL: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), Printables 865769, **CC BY 4.0**. Source README/license are included; raw STL is **not** redistributed. Download URL and SHA-256 are recorded: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. It was freshly downloaded, parsed and sectioned for this run using `reference-measure.py` (Python trimesh, numpy, matplotlib). Inspect `evidence/reference-sections.png` and `reference-measurements.json`.

Binary source: 30,616 triangles, 179.820 × 178.020 × 3.190 mm assumed units (STL has no unit metadata); 27 edge-adjacent components including degenerate scraps, not globally watertight. Source sheets have planes 0/1.60 mm, low runners .21–.22 mm, four measured sockets 4.50 × 1.700 mm. **Measured source defects are not called repaired.** This app is an original CSG reconstruction of the sheet/carrier approach, preserving default sheet 1.60 mm; proposed stronger runners, gridded floor, rim and four dissection pieces are new. No unrelated sockets imposed on this slot-free kit. Measured dimensions and proposed tolerances are distinguished in `reference-analysis.json`.

The read-only keycap studio informed its concrete 374px left control rail, lavender-grey desk, white panels, coral tactile raised buttons, saved dark theme, checkerboard cutouts, paired sliders/mm inputs, collapse sections, large right viewer and preview-first phone layout. Reuses studio/import infrastructure from prior daily_app2 work; all product geometry and mechanism checks are replaced. Reference trees and old daily_app remain read-only.

## Parameters and assembly — mm

|Parameter|Range / meaning|
|---|---|
|Card|180–240 wide,150–210 high; bounds enforced, impossible packing blocked|
|Unit pitch|5–7; co-scales all four nominal profiles and coordinate field|
|Board border|3–5; rounded, square or clipped silhouette|
|Sheet|1.6–2.4; source default1.60 preserved|
|Clearance|.15–.35 total; each piece inset byhalf; proposed printer-dependent|
|Rim rise|.4–1.2 above pieces; removable not captive|
|Spacing|3–5 between parts/carrier; real bounds check|
|Breakaway runners|20, width.8–1.2, height.4–.6; frame2.4wide|

Board W=13*pitch+2*border+2*gap; H=5*pitch+2*border+18+2*gap. Integral floor=sheet, grid grooves.3wide×.25deep; minimum floor1.35mm. Apron artwork separate from field. Card Z=2*sheet+rim rise. All pieces flat atZ0; no supports intended. Angled triangle edges remain pointed: handle gently, deburr. No snap or force fit.

Both arrangements use identical pieces, same orientation, coordinates lower-left of the13×5 field:

|Part|LayoutA|LayoutB|Nominal area cells|
|---|---|---|---|
|8×3 triangle|(0,0)|(5,2)|12|
|5×2 triangle|(8,3)|(0,0)|5|
|Seven-unit step|(8,0)|(5,0)|7|
|Eight-unit step|(8,1)|(8,0)|8|

B leaves a1×1 opening at(7,1). The two slopes3/8 and2/5 differ. Nominal pieces total32cells, whereas an imagined13×5 right triangle is32.5. Opposite shallow kinks change bent outline area by1cell, accounting for the opening. Manufacturing edge insets reduce actual piece area and add clearance seams; nominal proof does NOT count those seams as missing area. Preview swaps discrete arrangements, never implies collision-free sliding through other pieces. Lift out, translate, lower. Top insertion verified. Rim is lateral boundary only: loose parts fall out if inverted.

## Image, SVG, text and icons

Desktop/phone picker and drag/drop. Bundled synthetic samples in`public/samples/`. PNG/JPEG validated by actual content/header, <=2MB, <=12MP/6000px side before decoding; normalized <=500px. Fit/cover crop, XY shift±25%, light/transparent or dark/inverted background; threshold1–254 or grayscale relief. Sample20×20 heights: threshold retains dark samples; grayscale h=(1−luminance/255)*depth. Triangulate continuous height surface with closed backing, flip and Boolean-subtract from apron. Checkerboard shows actual cutout. Bright holes preserve material; fine features below sampling resolution may disappear. This is **2D-to-relief/silhouette conversion, not automatic full3D reconstruction from one photo**.

Simple SVG filled shapes/paths including holes rasterize locally256px (<=2000elements, no active content/external references/effects/text). Text and six searchable bundled icons use same actual geometry pipeline, not textures. Fredoka/Rubik bundled locally. Art footprint4–7mm, rotation±180°, X±1.5/Y±2mm, depth.4–.6mm. Every transformed vertex must stay within safe6.5mm radius at(0,−H/2+9); >=1mm backing preserved. Only engraved style supported: raised deliberately omitted for this flat sheet kit. Source/final previews, replace/remove/center/reset.

## Imported STL

ASCII and binary, <=2MB and1500triangles, every source axis.2–250mm. Source dimensions/oriented preview shown. Explicit mm confirmation required because STL has no units. Z/Y/−Z up, XY proportional scale to4–7mm footprint, independent Z normalization.4–.6mm engraving, rotate/center/place. Up-axis changes clear file and request reattachment. **Exact mesh Boolean subtraction**, not unchanged re-export or convex hull.

Supported contract: one connected outward-wound closed non-self-intersecting convex solid with broad flat bottom and no footprint overhang. Open/nonmanifold/concave/hollow/branched/inward/disconnected/degenerate/unsupported shapes are clearly rejected, no claimed repair. Convexity verified, not constructed. Narrow XY result<1.2mm rejected. JSON payload revalidated through parser; missing portable asset requests reattachment. Bounded normalized images and source mesh triangles restore through portableJSON/local named saves.

## Studio, exports, privacy

Read-only Keycap Studio-inspired374px left rail, paired numeric/sliders, collapsible labelled sections, tactile keys, coral soft selection, saved light/dark, large right live viewer. Phone preview first, stacked controls, touch orbit/pinch. Three real thumbnail presets, bounded variations, undo/redo, six named local designs, JSON save/open. AssembledA/B, exploded, real connected-card, de-tabbed plate and each isolated part; optional ghost board. Preview/export share identical checked geometry and current generation key; stale/invalid/converting/error states disable export. FNV signature compared with downloaded bytes. Manifold3D WASM/CSG in worker, bounded resolution,100ms debounce, stale-ID guards, worker-error recovery by reload.

Binary STL: connected card, five clean parts, de-tabbed plate; EverythingZIP contains6STLs, portableJSON and numberedASSEMBLY.txt. Exports always bed-flat regardless of preview arrangement. STL has NO colour/unit metadata, use millimetres. React/Vite/Three/Manifold3D Apache2/fflate/Fontsource OFL locally bundled, no CDN/API keys/paid services. **All user file processing local**; no uploads and no personal input stored in repository. localStorage only for user's named designs/theme.

## Printing and validation

PLA/PETG, .4nozzle, .16–.20layers,3+walls; bed-flat100%mm, no hardware/glue/supports intended. Snip20 low runners1.8mm outside boundary, file stubs and deburr. Calibrate board+one step on actual printer, especially elephant foot. Clearances are starting points, not universal guarantees. Small pieces not for young children. See`ASSEMBLY.txt`.

`npm test`: defaults, presets, all silhouettes, representative combined extrema and individual field bounds, image/relief/hole sources, ASCII/binary/transformed meshes. Independently parse exported bytes: binary length, finite/nondegenerate faces, normalized outward normals, welded1e−5mm edges exactly2opposite incidents, positive EACH component volume, mm bounds. Both arrangements, nominal areas, missing-cell probe, no intersections, top insertion, flat-part separation, support-footprint slices, card envelope and20 runner cuts releasing carrier+five unharmed parts.

Browser scripts exercise production worker/WASM under real base prefix: real PNG/JPEG/ASCII/binary picker imports and actual STL downloads with exact preview/JSON/Node signatures, changed content/threshold/depth/scale/rotation/placement, invalid/replacement/reset, preset/icon/text/SVG changes, worker-failure/stale state, JSON/named saves/history, actual ZIP contents and per-part topology, phone320/390px touch orbit/pinch/nooverflow/export reachability and desktop rail/theme/focus/collapse. Reports/screenshots beside source. Parent gallery and combined-deploy checks separately recorded. **Computational checks only; no physical printing, friction, fit, fatigue or legibility tests.**
