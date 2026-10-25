# Sprag Still

A local, browser-based parametric **three-roller rotary wedge fidget**. Turn the hub clockwise (from above) toward ramp/roller contact, then reverse to open the pockets. Three saw-ramp cam sectors narrow the radial gap against a fixed circular race. This is a directional takeup/contact experiment, not a certified clutch, guaranteed lock or load-bearing part. Roller drift, surface finish and friction require calibration. It differs from the gallery's linear wedges, positive ratchets, gear trains and compliant springs.

## Run / dependencies

Node 22.12+; `npm install`, `npm run dev`. `npm test` performs geometry checks; `npm run predeploy` builds the app; individual `npm run deploy` is configured for gh-pages but public combined-site publishing uses the parent repository's root deploy flow. React + Vite, Three.js/OrbitControls, Manifold WASM solid modeling, fflate ZIP, and locally bundled Fontsource Fredoka/Rubik fonts. No CDN, API key, paid service or backend. Fonts carry their upstream SIL OFL licenses in the installed packages. Sample files in `public/samples` are synthetic fixtures from this repository, not personal uploads.

## Printing and interaction

Six separate parts: palm/race, three-ramp cam, three rollers and soft retaining cover. Print palm/race and cam in PLA/PETG; rollers and cover in TPU 95A. All STL parts are at Z=0, with the cover **roof-down, skirt-up**. Start with 0.4 mm nozzle, 0.2 mm layers, 3 perimeters. No supports, bought bearings, magnets, screws or assembly hardware. Remove strings and burrs, never cut or force the cam ramps.

1. Put cam bore over the fixed axle.
2. Place one roller in each broad ramp pocket.
3. Stretch the TPU cover skirt around the outer race. Its central opening exposes the hub but retains the cam and rollers.
4. Hold the stationary palm; gently turn clockwise toward resistance and reverse to release. Do not force through binding. Lift the flexible cover to recover a jam or replace rollers. Do not glue moving interfaces.

Cover radial interference is an intentional elastic fit, not a running collision. A rigid PLA cover is not appropriate. **First Contact** is the full-size calibration print: verify free hub clearance, reverse release and lid seating at minimal force before experimenting. Adjust the fit to your printer/material; no tolerance is universal. Keep away from small children: loose small parts.

No physical prints, force measurements, nonlinear material simulation, friction model or fatigue tests have been performed. Geometry checks cannot establish reliable tactile behavior. Assembled/exploded preview positions are estimates at neutral, not a driven contact animation; printable exports always use the real separate-part print layout.

## Parameters (millimeters unless stated)

| Control | Supported range |
|---|---|
| Palm diameter | 22–28 |
| Race inner radius | 22–26 |
| Cam radial rise per 120° sector | 0.9–1.5 |
| Axial and bearing radial gap | 0.25–0.50 |
| Roller radius | 2.5–3.5 |
| Palm dimple depth | 0–0.6 |
| TPU cover radial interference | 0.05–0.15 |

Race floor and wall are 3 mm; cam/rollers 4 mm high; cover roof 2 mm, skirt wall at least 1.85 mm. Axle radius 3 mm. The theoretical narrow radial pocket is 0.12 mm smaller than roller diameter to ensure the ramp approaches contact before the sector ends; **do not drive through interference**. Neutral radial gap estimate is `0.85 * camRise - 0.17`; actual mesh intersections are independently tested. The broad cam and rollers overlap the cover opening radially by more than 4 mm. Palm round/hex/oval shapes, surface dimples, three real model-thumbnail presets, bounded variations and reset are included.

## Image → printable palm geometry

File picker (desktop/phone) and drag/drop support actual PNG/JPEG and a safe subset of SVG filled paths/shapes. Files ≤2 MB; PNG/JPEG ≤12 MP, each side ≤6,000 px, checked before decoding. Images are normalized to ≤500 px for portable saves; SVG ≤2,000 elements, no scripts, references, external URLs, fonts or effects, locally rasterized to 256 px. Unsupported SVG elements are rejected.

Exact method: canvas fit/cover and crop offsets (±25%) composite transparency on the selected light/dark background. Luminance is sampled on a **20×20 grid**. Threshold mode maps darkness below the selected 1–254 threshold to the chosen raised height; grayscale mode maps `depth * (1-luminance/255)`. An indexed closed, piecewise-linear height-field solid with a 0.4 mm backing is created, then solid-unioned with (raised) or subtracted from (engraved) the stationary palm well using Manifold. Light holes remain unraised/unengraved in the continuous backing, not holes through the toy. Checkerboard shows removed background; height-grid boundaries interpolate rather than trace exact vector contours. Fully empty masks fail.

This is **2D-to-relief/silhouette conversion, not automatic full-3D reconstruction of a photographed object**. Relief depth 0.4–3 mm; engraving limited to 0.4–0.6 mm to retain the well floor. Footprint 4–7 mm; Z rotation ±180°; X offset ±1.5 mm, Y ±2 mm; a radial 6.5 mm safe zone blocks transforms that leave the palm. Image threshold, pixel content, scale, depth, crop and placement alter the actual exported triangles. Text (up to eight characters) and six searchable bundled marks use the same local raster-to-solid pipeline, not textures.

## STL → integrated printable grip

ASCII and binary STL ≤2 MB, ≤1,500 triangles, every source axis dimension 0.2–250 mm. Explicit **millimeter confirmation** is required because STL contains no unit metadata. Select Z/Y/−Z up before import; changing axis clears the file and requires reattachment. Source dimensions, triangle count, format and a source 3D preview are shown.

Parsing welds equal coordinates within 0.00001 mm and rejects nonfinite/huge coordinates, degenerate faces, incorrect winding, nonpositive volume, disconnected/open/nonmanifold meshes, self-intersections, unsupported concavity and inadequate bed contact. Only a **single convex, broad flat-bottom, support-free grip** is supported: bottom contact must cover ≥25% of XY bounds and contain every vertex projection. This is a deliberately restricted integration contract, not arbitrary mesh repair. Concavities are rejected explicitly, never replaced by a convex hull. No automatic repair is claimed.

XY scales uniformly to a 4–7 mm footprint; Z independently fits 0.6–5 mm grip height (explicit anisotropic height fitting). Rotation and placement controls center/reset/replace/remove the source. The actual original mesh is transformed and fused 0.15 mm into the stationary palm well. Final transformed geometry must stay inside the protected radius. Thin XY grips under 1.2 mm and disconnected integration fail. Cut-through is not offered for STL. Solid CSG preserves the moving mechanism, rather than exporting overlapping shells. Compare default vs imported STL and inspect the final live preview.

## Studio / privacy / export

All personal input files are processed on-device in browser memory. No upload or external requests. PNG/JPEG/SVG source and processed cutout previews; imported STL source and final-model previews; reset/replace/remove workflows. Worker-owned WASM with bounded resolution, 100 ms debounce, request IDs and exact parameter/source/transform result keys keep edits responsive. Invalid edits or failed imports/worker loading disable **all** STL/ZIP actions: an old last-good preview is visibly labeled, never silently exported. Restored JSON imports are revalidated.

Assembled, exploded, isolated palm/cam/cover and print-plate views; see-through race; orbit, pinch/zoom, fit. Desktop 374 px left editor/right viewer; phone preview/export first then controls. Collapsible sections, accessible focus, tactile raised selected buttons, reduced motion, locally persisted dark/light theme. Undo/redo (35 snapshots); six locally named designs; portable JSON save/open (2 MB limit), including bounded image and STL payloads. Missing image payloads explicitly request reattachment instead of pretending restoration. No personal files are committed.

Prominent binary STL per part, selectable full plate STL and Everything ZIP containing all six individual STLs plus assembly notes. Final X/Y/Z millimeter dimensions are displayed for the selected export. Preview and export share the exact checked model. Preview colors do not exist in STL. No 3MF claim.

## Verification

`npm test`: default, all three presets, 128 range corners; 35 image/STL-derived cases including threshold, grayscale and engraving; invalid parameter/import gates. Exported binary triangles are reparsed and checked for finite coordinates, nondegenerate faces, normalized normals, outward winding, positive volume per connected component, 2 incident faces per welded edge, manifold topology and analytic millimeter extents. Every part checked separately; no print-layout intersections. Final-mesh preflight runs in the worker for every build.

Mechanism verification: all 15 neutral assembled pairs; **only** race/TPU-cover skirt has deliberately documented interference. Static clockwise cam sweep at 5° increments detects roller contact onset; returning to neutral clears overlap. Checks retention overlap, axial/bearing gaps, import isolation by solid differences, and nonintersecting print layout. These are geometric checks, **not** verified frictional rolling dynamics or physical printing.

`node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node resilience-test.cjs`: real file picker PNG/JPEG/ASCII/binary imports, actual downloaded exports compared to no-import defaults and exact preview fingerprints, transform/threshold/crop changes, malformed/open/nonmanifold/concave/excessive fixtures, empty silhouettes, recoverable invalid state, SVG hole solid probes, worker failure and stale results, undo/redo, saved names/portable JSON asset round trips, real per-part and ZIP downloads, themes, views, phone layout at 390/320 px and touch orbit/pinch. JSON result files record outcomes. The root gallery and production build receive separate browser checks before publishing.
