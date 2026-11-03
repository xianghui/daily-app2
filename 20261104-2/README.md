# Geneva & Index

A browser-based **four-part connected kit-card generator** for an open Geneva-type pin-slot demonstrator. Rotate the driver slowly to advance a 4/5/6-slot follower by 90/72/60 degrees. Unlike the earlier partial-tooth gear app, this has a tangential-entry pin, radial slots and two axially separated discs. **No locking cam:** the follower is free during idle, so steady/re-align it manually. Preview parking is an explanatory idealization, not physical dwell retention. Not a powered transmission or automatic timer.

## Run

Node22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. React+Vite, Three.js OrbitControls, Manifold WASM worker, fflate, locally bundled Fredoka/Rubik. No API/CDN/account. Base `/daily-app2/20261104-2/`. Exact scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publishing uses the existing **root monorepo** deploy flow, not the per-app script.

## Reference first

Inspected local Keycap Studio README, actual 944-triangle switch template (15.20×15.20×43.10mm, three components), and Weave README/link mesh (7.981×9.241×8mm, one component). Neither supplies suitable kit-sheet construction. Public fallback: **White Cat Kit Card**, Mike Kasberg, [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream](https://github.com/mkasberg/white-cat-kit-card), CC BY4.0. Downloaded actual binary STL to temporary storage and parsed it anew; **SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`**, 30,616 triangles, 179.819997×178.019994×3.1899996mm, 27 edge-adjacent components, source not fully watertight. STL unit assumption mm, corroborated by upstream sheet definitions; no STL unit metadata.

Measured actual mesh Z sections at0.10/0.50/1.59mm: sheet planes0/1.60mm; rectangular socket loops4.50×1.700012mm; low runner tops0.21–0.22mm. Source flat_clip/kit_frame SCAD read too. See `reference-analysis.json`, `reference-measurements.json`, reproducible `reference-measure.py` and `evidence/reference-sections.png`. **No raw third-party spacecraft STL redistributed.**

Original adaptation retains 1.60mm default sheet construction and frame-supported breakaway layout, but reconstructs four wholly new solids. Sixteen accessible0.4–0.6mm bed-contact runners replace the very thin source tops. The measured4.50mm planar-interface width informs the new default ROUND pin diameter, not source-compatible joints. Source1.70mm socket thickness is not imposed on unrelated rotary slots; radial and shaft clearances below are **proposed new fits**, not measured source tolerances. Driver and spacer deliberately exceed sheet thickness. No raw mesh hull/re-export is used. Existing local studio/import/export utilities were adapted; new product geometry, mechanism and validation are independent.

Visual/interaction reference inspected read-only: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, export, STL and image-trace modules. Concrete patterns:374px left control panel, sticky compact brand, tactile pink selected keys, paired sliders/numbers, checkerboard conversion, large right viewer, preview-first phone, saved dark theme, worker/current-result export gating. No reference project history/dependencies copied wholesale.

## Geometry / parameters — mm unless degrees/count

| Parameter | Supported |
|---|---|
| Card width / height |200–240 /240–280|
| Axle centre spacing C |36–44|
| Stations N |integer4,5,6|
| Sheet |1.6–2.4|
| Drive pin diameter |4.5–5.5|
| Pin-to-slot radial clearance |0.25–0.50 each side|
| Axle diametral clearance |0.15–0.30 on nominal3mm shaft|
| Washer / axial layer gap |0.4–0.8|
| Part spacing |3–5|
| Runner width / height |0.8–1.2 /0.4–0.6|
| Artwork size / depth |4–7 /0.4–0.6|
| Art X / Y / rotation |±1.5 /±2 /±180°|

Ideal drive radius `C*sin(pi/N)` and follower radius `C*cos(pi/N)` give tangent entry/exit. Slot root `C-r-pinDiameter/2-clearance` leaves a checked hub wall. Driver disc is one sheet, with an integrated upright pin; spacer height is `sheet+gap`. The connected card Z envelope is **2*sheet+gap+0.8**, default **200×240×4.5mm**, not an incorrectly claimed uniform sheet. Assembled *plastic* default120.57×96.57×6.60mm; external20mm rods protrude higher and are excluded from this labelled plastic envelope.

Three real presets/thumbnails and chamfer silhouettes; bounded variations; undo/redo; six named local designs; portable JSON save/open. Unknown/out-of-range/noninteger parameters, unsafe art and insufficient card area block current export. Preview can show last-valid geometry but cannot export it after invalid edits. Heavy CSG/import validation uses locally bundled Manifold in a debounced worker with stale-result keys and load/error feedback. No physical stress solver.

## Image workflow

PNG/JPEG/simple SVG via mobile/desktop picker or drag/drop; replace/remove/reset and synthetic sample actions/downloads. Files≤2MB; PNG/JPEG≤12MP and6000px side checked before decode, normalized≤500px. SVG≤2000 simple path/shape elements, no scripts/external references/resources; rasterized locally256px. Text≤8 characters and six searchable original icons use the same conversion.

Fit/cover crop,±25% pan, light removal/dark inversion, threshold1–254 or grayscale. Sample20×20 luminance grid. Threshold dark samples become selected depth; grayscale depth=`depth*(1-luminance/255)`. Closed triangulated heightfield Boolean-subtracts the protected base apron. Actual source and exact sampled checkerboard cutout shown. Bright holes remain unengraved; sampling/interpolation rounds small details—**not exact outline tracing**. Alpha composites against selected background. Engraved-only0.4–0.6mm preserves≥1mm solid backing. No raised control falsely offered. **2D-to-relief, not full3D reconstruction from one photograph.**

## STL workflow

ASCII/binary STL≤2MB,≤1500 triangles, one connected closed outward-wound solid, each source axis0.2–250mm. Worker checks complete content, finite coordinates, triangles, welded edge incidence/winding, volume/connectivity, self-intersection, convexity, flat bed and overhang support. Supported input contract: **convex broad-flat-bottom solids without projected overhang**. Concave/hollow/branched/open/nonmanifold/intersecting/unsupported sources rejected actionably, never repaired or convex-hull substituted. A footprint hull used for validation does not replace imported triangles.

Select Z/Y/−Z up before attachment; actual oriented source3D preview, dimensions, format/triangle count; explicit **millimeter confirmation** required. STL has no units. XY scales proportionally to footprint, Z independently to engraving depth, with factors shown. Rotate/place/reset. Accepted actual mesh Boolean-subtracts base apron; not merely displayed or re-exported.6.5mm safe radius and≥1mm backing protect bores/motion. Both imports measurably change actual exported STL. Bounded image/mesh data restore in JSON and named designs; missing images explicitly request reattachment.

**Privacy:** local browser processing only. No user file uploaded or saved in repository. Bundled PNG/JPEG/SVG/ASCII/binary fixtures are synthetic CC0 (see samples). All dependencies/fonts/WASM local.

## Print and assembly

1. Print connected card or four clean parts flatZ=0,100%mm, PLA/PETG,0.4mm nozzle,0.16–0.20mm layers,3+ walls. No supports intended. Driver pin points upward; card is not uniformly sheet-thick.
2. Snip16 runners about1.8mm outside parts; smooth stubs. Do not cut pin/slot/bores. Carrier is discarded. De-tabbed STLs have no runners.
3. Calibrate spacer on actual3mm rod and pin in a follower slot first. Clearances depend on material, printer, elephant-foot and hardware; not universal.
4. External hardware: **2×Ø3mm smooth rods20mm long;2×3mm-bore screw-clamp shaft collars OD≤8mm;2×3.2mm-ID washers OD≤8mm each exactly selected gap thickness0.4–0.8mm; plastic/metal-compatible adhesive.** No hardware-free version claimed. Bond rods perpendicular into base, flush underside, cure fully. Do not get glue on moving parts.
5. Washer on each rod; driver LEFT pin-up; printed spacer then follower RIGHT. Align left-facing slot to pin. Clamp collars above wheels leaving0.1–0.2mm axial freedom. Do not clamp rotating wheels. Axial assembly order is checked; collars go on last. Rod bonding/clamps provide retention, not printed snap features. Physical security untested.
6. Keep level and turn slowly by hand. Follower free during idle; lightly steady/re-align before re-entry. Do not power-drive or load it. There is no positive dwell lock. Ideal preview parking is explicitly illustrative. Rod/washer/collar ghosts are contextual, not printable parts. No claim of force, wear or fatigue calibration.

Connected-card, de-tabbed, assembled, exploded and all four isolated views use the same underlying part meshes. Driver preview angle follows ideal engagement only. STL exports always bed-flat real geometry, never assembled overlaps/screenshots. Prominent per-part binarySTLs and Everything ZIP (card+fourSTLs+portableJSON+numbered guide), not mislabeled3MF. Colours preview-only, not stored in STL. Touch orbit/pinch/zoom/fit/top/front; accessible focus,44px targets, reduced motion,320/390px preview-first layouts.

## Validation

`npm test` independently parses **float32 binary exports** for card, every part and translated loose plate: complete byte count, nonempty finite/nondegenerate triangles, normalized normals/winding, positive volume per component, welded two-opposite-edge incidence at1e-5mm, expected mm bounds andZ=0.40 default/preset/shape/parameter-bound/import cases; invalid settings rejected. Manifold validates each solid too. Card envelope,16 Boolean runners, cuts releasing carrier+4 undamaged solids, no loose-part overlaps, support-free sampled upper footprints (0.003mm numerical skin), shaft clearance, collar overlap and full-turn pin/follower pair intersections checked independently. Base→driver→spacer→follower axial insertion checked before external collars.

Production browser scripts exercise actual picker PNG/JPEG/ASCII/binary uploads, invalid/truncated/nonmanifold/excessive/empty inputs, geometry-changing settings/transforms, source replacement/removal/reset, real STL/ZIP/JSON downloads, byte signatures vs exact current preview and independent Node regeneration, presets, text/icons/SVG, portable payloads and named saves, undo/redo, worker failure/stale protection, saved dark theme, focus/collapsibles and touch/mobile layout. Reproducible reports/screenshots accompany the app; final results in `VALIDATION.md`.

**Computational checks only. No physical print, assembly fit, rod bonding, clamp retention, wear, torque, strength or operating test performed.** Ideal zero-wobble kinematics do not prove tolerance robustness under load.
