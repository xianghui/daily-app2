# Breath Stroke

A browser-based parametric **vented piston fidget studio**. Press a capped piston to displace air through a side vent, pause, and manually draw it back. A separately printed TPU ring seals the piston experimentally; no spring return or guaranteed pneumatic resistance is claimed. This is a distinct flow-restriction interaction, rather than an open-wrap rotary brake, bulb squeeze or captive-track slider.

## Run / dependencies

`npm install`, `npm run dev`, `npm run predeploy`, `npm test`.

React + Vite, locally bundled Three.js / OrbitControls, Manifold WASM solid modeling, fflate ZIP. No API keys, external modeling services, CDN imports or user-file uploads. Geometry and import topology checks run in a worker. Base: `/daily-app2/20261024-23/`. The required per-app gh-pages scripts are present; publishing uses the **root monorepo** `deploy/` flow.

The model-first ivory/sand/clay studio takes broad layout inspiration from Vaseverse, without copied branding, source, text or assets. Includes live model thumbnails for three presets, bounded variations, five parameter sections, numeric inputs and sliders, preview palette, orbit/zoom/fit, part selection, mm bounds, phone controls sheet and fixed export area, undo/redo and portable JSON design save/open.

## Real local imports

Picker on desktop/phone plus drag/drop; PNG, JPEG, ASCII STL and binary STL. Original synthetic fixtures in `public/samples` are project-authored, contain no personal files and require no third-party attribution. Import content, type and bounds are checked before heavy work. Maximum input 2 MB; images ≤12 MP and ≤6,000 px per side; STL ≤1,500 triangles, each axis 0.2–250 mm. Rejects invalid/truncated content, empty relief, bad dimensions/transforms, unsafe placement and unsupported meshes with recoverable errors. Export is disabled while loading, invalid or stale.

### Image → real height relief

Validate PNG/JPEG magic bytes and dimensions before decoding. Normalize to a maximum 500-pixel side for portable JSON. Fit/cover and ±25% crop offsets resample the source over white to **20 × 20 luminance samples**, using 0.2126R + 0.7152G + 0.0722B. Threshold mode raises vertices darker than threshold 1–254; grayscale maps darkness continuously to 0.4–3 mm height. Grid vertices form a triangulated continuous height surface, closed walls and bottom over 0.4 mm backing. Boolean union penetrates the palm floor by 0.15 mm. This is **2D-to-relief / raised silhouette conversion, not automatic full-3D reconstruction from one photo**. Source preview, exact sampled conversion preview, threshold, depth, fit, crop, physical footprint and placement are editable. Pixel changes alter actual exported triangles.

### STL → integrated grip, with explicit supported subset

STL has no unit metadata. Source XYZ bounds are shown and explicit **millimeter confirmation** is required. Only one connected, outward-wound, positive-volume, watertight **convex flat-bottom solid** is accepted: bottom footprint ≥25% of XY box, and every XY projection inside it. Concave, hollow, branching, open, nonmanifold, degenerate, inconsistently wound, intersecting, disconnected or unsupported-overhang inputs are rejected. No arbitrary mesh repair is attempted or claimed. Checks include welded edge incidence/winding, connectedness, triangle intersections, convexity and broad bottom contact.

Proportional XY fitting to 4–7 mm, independently fitted Z height 0.6–5 mm, ±180° Z rotation and X ±1.5 / Y ±2 mm placement. Minimum fitted XY dimension 1.2 mm. Original Z remains bed-facing; tilt is deliberately unsupported. A real CSG union connects the source to the stationary palm landing at 0.15 mm overlap. The entire source must stay within its 6.5 mm safe radius, **over 17 mm from the chamber wall**. It never modifies the piston, vent, cap or seal. Source 3D and final-model previews, replacement, removal and reset are included.

Portable design JSON embeds the bounded image or mesh payload. On open, it validates/reparses the payload; missing image data explicitly requests reattachment instead of pretending to restore it. Files stay inside the browser unless the user explicitly saves or exports them.

## Mechanism / parameter ranges

All geometry dimensions are **millimeters**; image threshold is /255, crop %, rotation degrees.

| Control | Range | Effect |
|---|---|---|
| Chamber bore diameter | 22–28 | Piston and seal diameter follow |
| Chamber depth | 14–22 | Illustrated stroke is depth minus 8: 6–14 |
| TPU seal nominal radial wall | 0.8–1.2 | Groove radius and flange retention |
| Rigid radial piston clearance | 0.25–0.50 | Keeps hard flange clear of bore |
| Air vent diameter | 0.8–2.0 | Actual radial through-hole, changes flow area |
| Palm dimple depth | 0–0.6 | CSG texture outside import landing |
| Seal radial allowance | -0.05–0.10 | Negative leaks; positive nominal soft interference |

Actual ring wall includes both allowances: 0.78–1.33 mm. Minimum compliant wall is 0.78 mm. Fixed chamber wall 2.4, floor 3, piston head 4, ring height 1.4, ring axial play 0.30, ring-to-groove radial interference 0.03, stem diameter 5, cap roof 1.2 and cap socket radial allowance -0.02. Groove flanges overlap its root by at least 0.30. Max nominal bore seal compression is 12.5% of nominal radial wall. The assembled preview shows undeformed seal geometry: its designed soft interference is **not a rigid clearance or an elasticity simulation**. Exported parts never overlap in the print layout.

The illustrated axial range leaves 3 mm between piston and floor at full press and 1 mm rim engagement above the piston at full pull. These are user-guided positions, not mechanical stops. The piston is deliberately **removable, not captive**. Cap friction is unverified; it must stay seated for pulling. The chamber always has an unobstructed vent; do not block it.

## Print / assembly / calibration

Four independent bed-flat closed solids: **palm-chamber, piston-stem, thumb-cap** in PLA/PETG; **tpu-seal** in TPU 95A. No hardware. The ring-free alternative is an intentionally loose, unsealed push-pull slider with no expected pneumatic resistance. Export all as one separated layout, individual binary STL or ZIP plus assembly guide. Dimensions show the selected export envelope, not an invented print-time estimate. Assembled view is illustrative and never exported in place of print layout. STL stores geometry, **not preview colors**.

Start with 0.4 mm nozzle, 0.2 mm layers, three rigid perimeters and solid TPU walls. No supports intended: piston flange underside ≤45°, small horizontal vent bridges 0.8–2 mm, cap socket prints upward. Verify these assumptions in your slicer. Clean the bore, vent and groove. Stretch the ring over the flange into the groove; insert piston; invert the cap and gently press onto stem. Do not force brittle parts.

Print **Easy Breath seal and a cap first as full-size material/fit coupons**. Start seal allowance -0.05 or zero and tighten only if sliding remains effortless. Cap seat is fixed -0.02 mm radial; if it cannot be seated gently, use slicer compensation or stop. TPU seal wall 0.8–1.2 and height 1.4 are supported geometric ranges, not universal flexible-material recommendations. FDM porosity, bore roundness, seam, material friction and TPU hardness determine whether pneumatic resistance is perceptible at all. A smaller vent may increase resistance only if the seal works. Do not add fluids, apply compressed air, cover the vent or force a stroke. Stop on binding, whitening, cracking or excess effort. Small parts are not for children.

## Validation / limits

Every live final mesh is checked for finite coordinates, nondegenerate triangles, welded two-face edge incidence, opposite neighboring edge winding, positive enclosed volume and exactly one closed connected solid per part. Manifold performs actual Boolean unions/differences, not overlapping-shell exports. Checks repeat on float32 print-layout coordinates. Preview and export use the same final geometry, gated by current state identity.

`validate.mjs` independently reparses binary exports, checks stored normals, triangle validity, per-component topology/volume, expected XYZ bounds, 128 parameter corners, extrema, presets, variations, image and STL outputs. Mechanical checks use actual solid intersections at 13 axial positions, all six layout part pairs, bore/rigid clearance, expected compliant seal and cap interference, flange overlap, floor/rim margins, an open final-mesh vent probe and protected import isolation. Browser scripts exercise real PNG/JPEG/binary/ASCII imports and downloads, geometry-difference assertions, malformed/excessive/open/nonmanifold/concave files, empty silhouettes, recovery, undo/redo, portable JSON roundtrips, presets, variations, per-part/ZIP, color neutrality, drag/drop, mobile touch orbit/pinch and accessible export.

**No physical print, pressure, force, seal, wear, retention or cycle tests performed.** Watertight solids and rigid clearance checks do not prove damping, reliable sealing or durability. Airflow and soft deformation are not simulated. See generated validation reports for actual computational/browser outcomes.
