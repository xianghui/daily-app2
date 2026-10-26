# Incline Exchange

A local-first React + Vite parametric STL studio for a **translating wedge / vertical follower fidget**. Slide the wedge sideways to lift a crosswise thumb block, then guide the return. This is not a face clutch, cam wheel, keycap or browser game. Three separately printed rigid parts assemble without hardware. The open guides are deliberately non-captive: parts lift out for assembly and release.

## Run & build

```
npm install
npm run dev
npm test
npm run predeploy
npm run test:browser
```

The configured production base is `/daily-app2/20261026-16/`. Publication of the combined collection uses the parent repository's root `predeploy` and `deploy`; the per-app deploy script is available but not used for collection publication.

## Mechanism and millimeter parameters

| Parameter | Supported range |
|---|---|
| Palm diameter | 22–28 mm; round, hexagonal or oval |
| Ramp length | 32–40 mm |
| Ramp rise over full ramp | 3–5 mm |
| Running gap per guide side | 0.3–0.6 mm |
| Follower half-length | 2–3 mm; complete follower 4–6 mm long |
| Palm dimple depth | 0–0.6 mm |

Usable horizontal stroke is 12 mm (±6 mm). Vertical travel = 12 × ramp rise / ramp length (0.9–1.875 mm). The flat follower underside contacts the higher edge of the incline; it is not intended to tilt. Four 2 mm thick towers and two joined end cheeks guide its vertical movement in both X and Y. Low end stops allow clearance beyond the nominal stroke, then physically stop the wedge. The floor is 5 mm, minimum wedge thickness 2 mm, follower slab 4 mm. Gravity return is **not guaranteed**; rest a thumb lightly on the follower and guide reversal. Do not force a jam. Not captive, not for inversion/shaking. No automatic return spring.

Print the exported broad flat bottoms down. No support or hardware intended. Dry PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls and 20–35% infill are starting points, not universal requirements. Remove elephant foot and burrs. Start with **Gentle Start**, a complete loose-fit calibration coupon, before printing the tighter presets. Fit depends on printer and material. Put the wedge into the low runway, then lower the follower across it between the four towers. Lift either part straight upward to remove it. Loose small parts are not for children.

## Real image-to-geometry workflow

File picker and drag/drop accept actual PNG/JPEG and restricted SVG. Files are checked before heavy work: 16 bytes–2 MB, PNG/JPEG at most 12 MP and 6,000 px per side. Raster sources are normalized to ≤500 px, then sampled onto a bounded **20 × 20** height grid. SVG supports simple self-contained filled shapes and paths, ≤2,000 elements, no external resources/scripts/references; it is rasterized locally at 256 px before the same conversion. The synthetic ring SVG demonstrates hole preservation.

Fit/crop, X/Y crop shift ±25%, light/dark background, threshold 1–254, binary silhouette or grayscale height, raised/engraved style and depth all affect generated geometry. Threshold height is either zero or selected depth; grayscale height is depth × (1 − luminance/255). Transparent raster pixels composite onto the selected background. Preview shows original and checkerboard conversion grid. This is **2D-to-relief/silhouette conversion, not reconstruction of a full 3D object from one photograph**. Bright holes remain unraised or unengraved over a solid backing; this is not vector outline tracing and not a cut-through hole in the palm floor. Fine features below the grid resolution are not preserved.

Height grid vertices are triangulated into a closed solid; the underside is embedded into the palm and robustly unioned with Manifold WASM. Engraving subtracts an inverted grid from the palm floor. Relief depth 0.4–3 mm, engraving 0.4–0.6 mm. Imported footprint 4–7 mm, Z rotation ±180°, X placement ±1.5 mm, Y ±2 mm, constrained to a 6.5 mm radius safe well. An out-of-well feature blocks export. Text up to eight characters and six searchable bundled original SVG marks use this same geometry path. STL never stores the preview colours.

## Real STL-to-fidget workflow

Both binary and ASCII STL are parsed locally. Limits: ≤2 MB, ≤1,500 triangles, each source dimension 0.2–250 mm, finite coordinates and transforms. Source preview displays oriented dimensions and triangle count. **STL has no units: explicit millimeter confirmation is required.** Choose Z up, Y up or inverted Z before attaching. Changing up axis requests reattachment rather than silently changing an existing import.

Mesh checks require one connected, outward-facing, closed manifold positive-volume solid; opposite directed incidence on each welded edge, nondegenerate triangles and self-intersection testing. This bounded editor supports only **convex, broad flat-bottom, non-overhanging grips**. Concave/hollow, disconnected, open/nonmanifold, self-intersecting and unsupported bed-contact meshes are rejected with guidance; they are NOT repaired, flattened or replaced with a convex hull. The hull computation is used only to validate the bottom support footprint, never to substitute geometry.

XY scales proportionally to the selected 4–7 mm footprint; independent Z fit 0.6–5 mm; rotation/placement/reset controls adjust the actual mesh. A minimum 1.2 mm XY grip width is enforced. The transformed source is embedded 0.15 mm into the palm well and solid-unioned, preserving its supported source facets. It is not merely displayed or re-exported unchanged. The palm is isolated from the working runway; customization cannot obstruct the moving mechanism. Invalid new inputs gate every export, even if the preview still displays a labelled last-valid model.

## Studio and exports

Reference-inspired 374 px left control rail, sticky brand/theme header, collapsible controls, paired slider/numeric millimeter fields, actual model preset thumbnails, tactile selected keys and saved light/dark theme. Phone layout puts the preview, dimensions and exports before stacked controls. Three presets, bounded variations, undo/redo, six local named designs, portable JSON save/open with bounded normalized image and indexed mesh payloads. Missing imported payloads request reattachment rather than claiming restoration.

Interactive Three.js orbit/zoom/fit with touch controls; assembled wedge-lift, exploded, palm, moving parts and separated print plate. Preview positions use 0.01 mm gaps for explanation only; not a dynamics simulation. Printable solids are identical between preview and binary STL export; pose/colour controls do not change STL geometry. Export all on a separated bed-flat plate, each part individually, or a genuine ZIP with three STLs and assembly notes. No 3MF claim. Full current-state/request-id guards and an off-main-thread debounced worker prevent stale valid meshes being exported after invalid edits.

## Privacy & dependencies

All personal files stay in browser memory or explicitly saved local designs/JSON. Nothing is uploaded, and no user assets belong in this repository. Bundled sample PNG/JPEG/SVG and ASCII/binary STL are synthetic fixtures. Generation requires no API, key, cloud service or CDN. Dependencies: React, Vite, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), locally bundled Fredoka/Rubik (SIL OFL via Fontsource), gh-pages; Playwright is a dev dependency. Studio/import/export infrastructure is adapted from earlier apps in this same collection; the new wedge mechanism and its checks are separate. The external keycap reference and archived gallery are read-only and were not modified.

## Validation

`validate.mjs` independently parses final binary STLs: exact length, finite coordinates, triangle area, unit stored normals aligned with winding, welded edge incidence (1e-5 mm), adjacency, **positive volume for every connected component**, component counts and float32 print-layout dimensions. It checks 68 default/preset/parameter-corner cases and 30 image/mesh-import cases, all individual parts and the whole plate. Manifold intersection tests sample the full stroke, real incline contact, guide overlap, end-stop overrun, accessible vertical release, print-plate separation and personalization isolation.

Production-browser scripts exercise actual file-picker imports and downloaded STL bytes against the worker preview signature and a JSON-regenerated exact model; PNG/JPEG/ASCII/binary, transforms and thresholds, malformed/empty/excessive files, unsupported geometry, undo/redo, portable and named designs, all marks, raised/engraved hole probes, production-worker abort/reload, stale-result gates, ZIP contents, theme/focus/sections, phone 320/390 px, touch orbit/pinch and actual phone downloads. Reports/screenshots live beside the app. See VALIDATION.md for run results.

These are computational geometry, kinematic-clearance and browser checks only. **No physical print, friction/force, wear, durability or long-term behavior testing has been performed.**
