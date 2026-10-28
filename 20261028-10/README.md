# Tier & Tripod

A local React + Vite maker studio for an original five-part **miniature display stand kit card**: personalized tray, annular brace, and three identical stepped radial legs. Not a load-rated stand. No physical print, fit, assembly or strength test has been performed.

## Reference first

Searched 31 existing STL files under `/Volumes/ExternalHD/3d_printing_apps/` before choosing geometry; the local kit-card project directories contain no suitable STL. Read the candidate project instructions; switch/socket and moving-link meshes are not appropriate sheet/carrier references. Downloaded and parsed Mike Kasberg’s [White Cat Kit Card](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)); inspected repository README, LICENSE and `kit_frame.scad`. See `reference-analysis.json`, reproducible `reference-analysis.py`, and actual mesh cross-sections in `reference-sections.svg/png`.

Binary STL: **30,616 triangles**, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; bounds **179.82 × 178.02 × 3.19 mm** (STL is unitless; assumed mm, corroborated by source CAD). Edge-adjacency welding identifies two components and nonmanifold/coplanar source artifacts. The source is used for design inspection, **not repaired, bundled or re-exported**.

Measured source sheet Z=0–1.6 mm, 1.6 mm perimeter, bridge levels .21/.22 mm. Reconstruction preserves the 1.6 mm default sheet, reinforces rails to 2.4 mm and redesigns bridges as four accessible .4–.6 mm-high tabs per part. The five tripod parts, radial joint positions, stepped shoulders and proposed fits are entirely new. No source interfaces claimed identical.

The read-only **keycap_generator2** README, App, Viewer, CSS, worker, image tracing and STL/export modules informed concrete studio patterns: 374 px left rail, sticky compact brand, labelled collapsible sections, paired sliders/mm entries, preset model thumbnails, pink pressed keycap buttons, checkerboard cutouts, source/final previews, explicit units, local design saves, per-part downloads and right-side viewer. No switch socket was imposed; no source project dependency tree or history copied. Reused the monorepo’s local import/worker/export studio infrastructure while replacing the assembly, geometry, constraints and mechanical checks.

## Run

Node 22.12+ recommended. `npm install`, `npm run dev`; `npm test` for reproducible mesh/assembly checks; `npm run predeploy` builds production. Vite base `/daily-app2/20261028-10/`. Individual `deploy` is installed as required; publication uses the ROOT monorepo `npm run predeploy` then `npm run deploy`, not standalone publishing.

## Assembly and meaningful parameters

All dimensions **mm**. Card width 160–190, height 200–240; tray diameter 52–64; tray seat height 30–40; joint radius 16–19; brace seat height 10–14; sheet 1.6–2.4; total mortise allowance .15–.45; row offset 0–1; tab width .8–1.4, height .4–.6; tray dimples 0–.4. Shapes round, hexagon and octagon; three real presets and bounded variations.

Legs lie flat for printing. Their lower body is 14 mm wide, upper stem 9 mm and tray tip 6 mm. Three legs stand at 120 degrees, centered on the chosen radial stance. The brace’s `(9 + allowance) × (sheet + allowance)` mortises pass the smaller tips and full stems, then stop on the 14 mm shoulders. The tray’s `(6 + allowance) × (sheet + allowance)` mortises stop on 9 mm shoulders. Tips finish flush with the tray top. These are gravity-seated, removable joints, **not snap fits or inverted retention**. Lift by legs/brace, never tray. No hardware needed.

1. Print card or five loose parts bed-flat, PLA/PETG, .4 mm nozzle, .2 mm layers, three walls. No supports intended. Check bed envelope before exporting card.
2. Snip 20 tabs 2 mm outside nonfunctional edges and trim nubs. Accessible cutting locations are computationally tested. Adult cutting; small parts.
3. Calibrate a leg plus tray/brace first. Deburr elephant foot and tune total allowance by .05 mm; printer/material dependent, no universal fit claim.
4. Hold legs upright at 120°. Lower brace first past tips/stems onto lower shoulders. Lower tray onto upper shoulders. Reverse to disassemble.

Only a miniature paper ornament/display is intended; strength and load capacity untested. No simulated motion or irrelevant clicker controls.

## Personalization and imports

All source files are processed **locally in browser**, never uploaded. No remote API, CDN or key. Bundled fonts, Three.js, Manifold WASM and ZIP code work locally. Synthetic sample PNG/JPEG/SVG and ASCII/binary STL files are available through both Try buttons and downloadable fixtures; no personal inputs stored in this repository.

### PNG/JPEG/SVG → real surface geometry

File cap 2 MB, PNG/JPEG maximum 12 MP / 6,000 px side; validate signatures/header dimensions before decode. Normalize to ≤500 px, fit entire image or crop-fill, pan ±25%, composite light/dark background, calculate Rec.709 luminance on a **20 × 20** grid. Threshold 1–254 produces dark silhouette relief; grayscale produces `depth × (1-luminance/255)` height. Depth .4–3 mm; engraving .4–.6 mm only. Connected top/bottom/side mesh is boolean-unioned or subtracted from the tray’s .2 mm-recessed center. Triangulated sample interpolation means boundaries are not exact vector tracing. White/transparent holes remain unraised/unengraved above a continuous backing; tiny features below sampling resolution can disappear. This is **2D-to-relief, not full 3D reconstruction from one photo**.

Show source image and actual converted checkerboard cutout. Simple SVG shapes/path fills (including holes) rasterize locally at 256 px before this same conversion. Up to 2,000 simple SVG elements; external links, references, text, scripts, filters and unsupported elements rejected. Text (8 chars) and six searchable bundled original marks use the same real relief workflow.

Footprint 4–7 mm; position X ±1.5, Y ±2; rotation ±180°. Transform bounding vertices must remain inside the 6.5 mm-radius protected tray center. Default floor is 1.4 mm; worst supported engraving floor .8 mm at minimum sheet, never cuts through. Imports cannot reach the mechanical joints.

### ASCII/binary STL → integrated solid tray mark

Validate exact binary length or ASCII facet structure; finite coordinates, triangle area, welded edges with opposite winding, connectedness, positive volume, convexity, upward single-valued solid and broad flat-bottom contact. Limit **1,500 triangles**, .2–250 mm each source axis, 2 MB. Open, nonmanifold, hollow/concave, multi-body and unsupported overhanging inputs are **rejected with actionable guidance**, not repaired or replaced with a hull. Supported convex meshes keep their actual mesh faces.

Select Z-up, Y-up or upside-down before attaching; changing axis explicitly clears the file for reattachment. Show oriented source preview, source dimensions and format. **Confirm mm** because STL has no units. XY is proportional fit to 4–7 mm footprint; independent Z height .6–3 mm, rotation and placement as above; center/reset transforms. Place .15 mm into the well floor and perform true Manifold union. Final part must be one closed solid. Both imports visibly change the final exported geometry. Replace/remove/reset and file pickers work on phones and desktop, with drag/drop where supported.

## Studio and exports

Worker-owned WASM, 100 ms debounce, generation IDs and exact state-key gating; failed/invalid/pending edits block export, even if the last-valid preview remains visible. Every edit runs final-manifold checks. Preview and STL share the current valid result; UI exposes its fingerprint for reproducible tests. Assembled, exploded, connected card, de-tabbed plate and all isolated-part views. Orbit, touch/pinch, zoom and fit. Preview-first mobile stacking, keyboard focus, reduced motion, saved light/dark theme. STL stores no preview colours.

Undo/redo, six named local designs and JSON save/open include bounded normalized image or verified STL payloads. Missing or invalid image payload explicitly requests reattachment; it is never silently restored. Data stays in local browser storage or user-downloaded JSON. The model is regenerated on restoration.

Connected card STL is **one boolean-unioned component**, not loose parts near a frame. Each of five de-tabbed part STLs is a separate closed solid at Z=0. Everything ZIP contains card STL, five part STLs and numbered ASSEMBLY.txt. Binary STL, no pretend 3MF. All exported coordinates mm; select mm/100% in slicer. Export sizes describe the chosen card/part, not an assembled screenshot.

## Validation

`npm test`: independent binary serialization checks for finite vertices, unit normals, nondegenerate triangles, expected mm bounds, welded edge incidence (1e-5 mm), opposing edge winding, positive volume **per component**, Euler genus and exactly one component per card/part. Defaults, all presets, parameter extrema and cross-extremes, with both image-derived and STL-derived models. Kernel intersections check all assembled pairs, sampled downward insertion, each shoulder’s stop, separate flat parts, card containment, exact envelope and 20 actual tab-cut tools yielding five parts plus carrier.

Production-browser suites use real file-picker uploads and actual downloaded STL bytes: PNG/JPEG, both STL encodings, image pixel/threshold/depth/crop differences, STL scale/height/rotation/placement, up-axis, replace/remove/reset, malformed/truncated/open/nonmanifold/concave/excessive inputs and invalid transforms. Hash UI/export against regeneration from same saved JSON. Test portable assets, named saves, undo/redo, presets, shape/text/all icons/SVG holes, ZIP contents, stale import ordering, worker abort/reload, every view, dark theme and focus. Touch-enabled 390/320 px checks test orbit/pinch by changed screenshots, imports/downloads, preview-first ordering and no horizontal overflow. Scripts and reports included. Computational geometry/assembly checks **are not physical printing tests**.

## Dependencies and attribution

React, Vite, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT); local Fontsource Fredoka/Rubik (SIL OFL). Six simple original SVG marks in `src/icons.js`. Source carrier attribution above, CC BY 4.0; changed sheet/carrier dimensions, tabs and all assembly geometry documented. Original source mesh not redistributed.
