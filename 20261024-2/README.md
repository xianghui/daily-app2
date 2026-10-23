# Poise Pebble

A local React + Vite **omnidirectional gravity-return fidget studio**. Gently nudge a top crown, then let a bottom-heavy spherical sole wobble toward upright. Unlike a directional rocker, rim-rolling disc, tippe top or rattleback, this object uses a low center of mass under the sphere center to supply a restoring moment in any azimuth. No spin reversal or timed motion is promised.

## Run, dependencies and export

`npm install`; `npm run dev`; `npm test`; `npm run predeploy`. React, Three.js and Manifold WASM are bundled locally. No CDN, paid service, API key or server processing. Bounded CSG generation and STL parsing run in a Web Worker. Base: `/daily-app2/20261024-2/`. Per-app `predeploy` and `deploy` exist as required; publishing uses the root monorepo `deploy/` flow.

Preview and binary STL export share the same final vertex/index arrays. All geometry and X/Y/Z dimensions are **millimeters**. Complete-body and individual-body exports are the same sole required part, so a ZIP would be redundant and is not offered. Object and print views show the identical undeformed geometry; no fake motion animation. STL stores neither units nor preview colours.

## Original studio direction

https://vaseverse.org/ informed the warm editor-first composition: a large live model, compact parameter rail, ivory/clay surfaces, quiet typography, actual model thumbnails and persistent export. No branding, source, images or text were copied. Phone controls collapse into a bottom sheet; tabs, picker and export stay touch-accessible.

## Parameters and construction

| Parameter | Range (mm) | Effect |
|---|---|---|
| Spherical sole radius | 16–20 | Bottom mass and rolling radius |
| Tapered neck height | 4–8 | Crown elevation |
| Neck radius | 3–5 | Top radius of tapered neck, bottom radius fixed at 7 |
| Crown thickness | 2.5–4 | Raised thumb platform |
| Crown dish depth | 0.6–1 | Recess for built-in or imported grip |
| Palm dimple depth | 0–0.6 | Actual solid subtractions around crown |

The lower half of a 96-segment sphere is clipped at Z=0, leaving a **0.2 mm truncated resting foot**. Its center is Z=radius−0.2. A real solid union attaches a taper and 10.5 mm-radius crown. The 7.5 mm-radius crown recess keeps the backing at least 1.5 mm thick; neck diameter is at least 6 mm. Imports replace a raised oval and are CSG-unioned into the floor. One connected closed solid is required. No merely overlapping shells or hidden internal moving interfaces.

River Stone is squat and compact; Poise Pebble is intermediate; Broad Anchor has a broader sole, higher crown and wider neck. Thumbnails are generated from their actual meshes. Variations remain inside the exhaustively corner-checked range.

## Image-to-fidget workflow

PNG / JPEG via file picker, drop or bundled sample files. Content signatures and image dimensions are checked before decoding. **2 MB/file, 12 MP, 6,000 px/side**. Images are normalized locally to 500 px maximum side, composited on white and sampled to a fixed **20×20 luminance grid**. Fit/contain, cover/crop and ±25% crop shifts are available. Threshold 1–254 raises dark samples, or grayscale maps darkness continuously to height, at **0.4–3 mm depth**.

This is **2D-to-relief conversion, not reconstruction of a full 3D object from one photo**. A closed triangulated height-field slab has a 0.4 mm backing, bottom and sidewalls; threshold boundaries interpolate across grid triangles. The backing is embedded 0.15 mm into the crown floor and solid-unioned. Empty silhouettes are rejected. Source image, conversion grid and final object are all visible. The selected pixels and relief depth measurably change exported triangles and mass balance.

## STL-to-fidget workflow and supported subset

Accepts real ASCII and binary `.stl`: **2 MB, 1,500 triangles, 0.2–250 mm per source axis**. STL has no unit metadata: explicit millimeter confirmation gates integration. Source dimensions and a source 3D preview are shown.

Only a **single closed, connected, outward-wound, convex, broad-flat-bottom solid without self intersections** is supported. Bottom XY hull must cover at least 25% of its bounding rectangle and contain every vertex projection. Rejects concavity, cavities, branches, unsupported overhangs, multiple components, nonmanifold edges, open seams, degeneracies and inconsistent winding. No arbitrary mesh repair is claimed. Prepare a suitable convex grip in a mesh editor if rejected.

XY fits proportionally into a **4–7 mm footprint**, Z independently to **0.6–5 mm**. Rotation around Z is ±180°; offsets X ±1.5 mm, Y ±2 mm. Fitted XY minimum span is 1.2 mm. Every transformed point must remain within a **6.5 mm radial safe zone**; reduce scale or center the grip if it fails. Arbitrary tilt is deliberately not offered: orient a broad base down in source Z before importing. The mesh embeds into the crown and is robustly unioned; it cannot change the sole or neck. Final mass checks include its actual shape and placement. Unsupported transforms block export recoverably.

Replace/remove, center/reset, image-control reset and full defaults are available. Removing an import restores the oval. The bundled PNG mark, JPEG waves, ASCII wedge and binary gem are original synthetic fixtures; no third-party attribution or personal upload is involved.

## Privacy, save/open and history

All files stay in browser memory/canvas/worker. No upload, external request or remote API is needed. Save JSON explicitly embeds bounded source mesh data or normalized image data URL. Reopening revalidates the payload. Missing image data asks for original-file reattachment rather than pretending it restored. Undo/redo captures parameters, sources and transforms. Invalid JSON or import states leave recovery controls usable.

## Mechanical checks and physical limitations

Volume and center of mass are computed from oriented tetrahedra of the **final mesh**, assuming uniform solid density. The model blocks export if the conservative worst-direction restoring lever at 12° is below 0.5 mm. For sphere-center height C, COM z and lateral eccentricity e, the lower bound is `(C−z) sin(12°)−e`. Independent tests check 12/18/25° × 24 azimuths, confirm contact is outside the tiny resting foot, and verify the crown does not strike the table. Sphere tessellation is faceted rather than mathematically smooth: the tessellation deviation is small relative to the required lever, but support scars and surface friction can dominate real behavior. CSG isolation checks prove imports do not alter the neck or rolling sole.

The resting foot gives a stable upright position; nudges below its edge angle may settle without appreciable rocking. No universal roll duration, damping, perfect return or friction coefficient is claimed. No mating joints, bearing clearance, retention clips or compliant-material thickness controls apply. There is no hidden hardware requirement.

## Printing and calibration

**PLA or PETG, 100% infill throughout**; sparse infill, hollow prints or different-density inserts invalidate the mass model. Four walls, 0.4 mm nozzle, 0.16–0.2 mm layers. Print with the Z=0 resting foot down and removable supports beneath the spherical sole and crown overhang. This is **not support-free**. Review support access in your slicer; remove scars and lightly smooth the sole without materially changing the shape. No assembly or joint release.

Print River Stone first as a full-size material/surface calibration. Test gentle 12–25° nudges on a hard level surface, away from an edge. Do not extrapolate to large tilt angles. Preview clay is cosmetic, not a material prescription.

Final runtime preflight checks finite coordinates, nondegenerate faces, positive volume, closed-manifold welded edge incidence exactly two and consistent neighbor winding. Independent tests parse actual exported binary STL, check normalized outward normals, dimensions and each connected component. See `VALIDATION.md` and JSON reports.

**No physical print or physical return test has been performed.** Geometry and ideal-density restoring calculations are not a physical certification.
