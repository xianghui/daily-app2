# S-Curve Drift

A browser-based parametric **S-band roller-guide fidget**. Shuttle two rollers together between parallel rails while a flexible ribbon redistributes underneath one and over the other. Unlike a belt drive, ratchet, loose roller or wedge brake, both ends of the S-band are stationary and the paired rollers translate with opposing rolling directions. No click or automatic return is promised.

React + Vite, Three.js/OrbitControls, Manifold WASM in a Web Worker, fflate, locally bundled Fredoka/Rubik fonts (Fontsource, SIL OFL). No CDN, API, key, server-side generation or paid service. All uploads stay in this browser; repository samples are synthetic fixtures only. Reference studio was inspected read-only; its Git history and dependencies were not copied. The shared studio UI/import scaffolding comes from earlier daily-app2 apps; mechanism geometry and validation are new.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base is `/daily-app2/20261025-11/`. Per-app deploy scripts are provided; public monorepo publication uses the ROOT deploy flow, not the app deploy command.

## Four parts and operation

1. **Guide/palm:** rigid open-front cage with parallel rails, back support, end stops and side-loading anchor slits. Exported on its broad back; rails stand vertically and need no supports.
2. **Lower roller** and **upper roller:** identical rigid cylinders, exported on their ends.
3. **TPU ribbon:** flat strip with wide T-head ends. Exported flat, never as a bent/interpenetrating shell.

Cage and rollers: PLA/PETG; ribbon: soft TPU 85A–95A starting materials. Use 0.4 mm nozzle, 0.2 mm layers, at least three rigid perimeters, and continuous paths for the ribbon. **Do not use PLA for the ribbon.** Keep the open front upward. Side-load the left T-head beyond the left lower wall, route the band under the lower-left roller, between the two rollers, and over the upper-right roller. Side-load the right T-head beyond the upper right anchor wall. The T-heads resist band tension but do not permanently retain parts against lifting. All parts are deliberately removable through the front; lift out to release and rethread. No hardware, glue or supports.

Begin with **Pocket Drift** as a full-size assembly/material calibration coupon. Try a very small stroke; stop if the ribbon bunches, climbs, permanently stretches or creases. Deburr the slots and roller edges without cutting the ribbon. Fits/friction depend on printer, filament and slicer, and are not universal. There are small removable parts; this is not a children's toy.

## Dimensions / bounded controls

Every length is in **millimeters**:

| Parameter | Range |
|---|---|
| Palm diameter | 22–28 |
| Guide length | 60–76 |
| Roller radius | 6–8 |
| Running clearance | 0.25–0.55 |
| Ribbon thickness | 0.6–0.8 |
| Dimple depth | 0–0.6 |
| Roller center height offset | 3–5 |
| Imported XY footprint | 4–7 |
| Imported STL height | 0.6–5 |
| Import X / Y placement | ±1.5 / ±2 |
| Image relief depth | 0.4–3 raised; 0.4–0.6 engraved |
| Z rotation | ±180° |

Three real presets, three palm outlines, bounded random variations and model thumbnails. Runtime rejects out-of-range/nonfinite values. Final X/Y/Z is calculated from the selected export's actual geometry, not a nominal parameter label.

Roller axes are 12 mm long, band width is 8 mm, T-heads 12 mm wide, rigid rail/back/end walls are 3 mm (anchor slits locally leave at least 2.45 mm). Running clearance applies at the back and in addition to ribbon thickness between rollers. Front access is intentionally open. Center height offset determines the diagonal roller arrangement. Conservative geometric stroke leaves 1 mm between each roller and the end wall. No force limiter or elastic stop is implied.

## Local image workflow

Desktop/phone file picker and supported drag/drop accept real **PNG and JPEG** plus simple self-contained SVG. Files: 16 bytes–2 MB. Raster headers must identify PNG/JPEG, no more than 12 MP, no side over 6,000 px, and matching extensions. Decode is checked; normalize to ≤500 px, then sample a bounded **20 × 20 height grid**. Simple SVG is validated and rasterized locally to 256 px first; external references, scripts, effects, text and unsupported elements are rejected.

The user chooses fit or crop, crop shifts, light/transparent or dark-background removal, threshold 1–254, grayscale mode, raised/engraved, physical footprint, depth, placement and rotation. Threshold mode assigns height to dark samples; grayscale assigns `depth × (1 - luminance/255)`. The piecewise-linear surface is closed with sides and a backing, then robustly unioned/subtracted into the palm well with Manifold. Bright holes remain unraised/unengraved on that solid backing; this is not a traced cut-through outline. The checkerboard shows the actual sampled cutout. Empty silhouettes and floor-breaking engraving are rejected. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photo**. Image content and conversion settings measurably change the exported solid. Text (up to 8 characters) and searchable bundled icons use the same actual geometry path.

## Local STL workflow

**ASCII and binary STL** accepted. Limits: 2 MB, 1,500 triangles, 0.2–250 mm per axis, finite coordinates, no degenerate faces, one connected outward-wound closed/manifold solid, positive volume, no self-intersections. This intentionally bounded editor additionally requires a **convex, broad flat-bottom, support-free grip**: bottom contact ≥25% XY footprint; every vertex's XY projection must be inside that footprint. **Concave models, cavities, thin branches, disconnected parts, inward/open/nonmanifold and overhanging meshes are unsupported and explicitly rejected**. No convex hull replacement and no arbitrary automatic repair occurs. Clean/rescale/reorient in a modeler and reattach when rejected.

Choose Z-up, Y-up or −Z-up before attachment; changing up-axis clears the source and asks for reattachment. Inspect original oriented dimensions and source mesh preview, then explicitly confirm millimeters: **STL has no unit metadata**. XY scales uniformly to physical footprint, Z independently to grip height, then Z rotation and XY positioning apply. The actual source triangles are CSG-unioned with the palm—not merely displayed or unchanged re-exported. A thin XY result is rejected; the transformed mesh must stay inside the protected 6.5 mm-radius palm zone and form one connected solid. Imported geometry cannot obstruct the ribbon, anchor slits or moving rollers. Replace/remove, center/reset and full defaults are available.

## Views, saving and exports

Desktop: 374 px left maker panel, right interactive orbit/zoom/fit preview, status, millimeter bounds and export. Phone: preview first, export next, then stacked/collapsible controls. Light/dark preference persists. Tactile pressed states, focus rings, 44 px targets, reduced-motion rules. Print-plate, assembled, exploded, palm, rollers and ribbon views; see-through cage. Assembled/exploded S-ribbon is an **estimated bent pose**, not a friction/elastic simulation. Left/center/right routing poses preserve the flat manufactured ribbon's calculated centerline length. Nominal routing uses 0.04 mm roller-to-ribbon spacing to avoid tessellation overlap; flexible material settles into contact in real use. The strain ratio `thickness / (2 × nominal bend radius)` is a geometric estimate, not an allowable-strain guarantee or fatigue model.

**Print plate and all STL exports use the exact same current valid manufactured meshes.** Preview pose/colour does not alter manufacturing parameters. Binary STL per part, whole separated plate, and **Everything ZIP** containing all four individual STLs plus assembly notes. Print flexible ribbon separately. STL stores geometry, not colours; no 3MF is advertised.

100 ms debouncing, monotonically numbered worker responses, source parsing IDs and a current-parameter signature prevent stale results from exporting. During invalid/loading/error edits the last valid preview is explicitly labelled and exports disabled. Worker-load failures block export. Undo/redo, six named local designs, portable JSON save/open: bounded normalized image data and verified mesh payloads are included and revalidated. Missing image payloads explicitly require reattachment; restoration is never pretended.

## Validation and limitations

`npm test`: independent parsing of exported float32 binary STL, finite coordinates/normals, nondegenerate triangles, normalized outward normals, welded edges with exactly two incident faces and opposite directions, connected positive-volume components, bounds/bed orientation, every individual part and separated plate. All 128 field-boundary combinations plus defaults/presets and both image/STL-derived variants. Actual CSG intersection tests check six component pairs in left/center/right assembled poses, protected import isolation, arclength preservation, roller spacing, end clearance and nonintersecting print layouts. Runtime independently checks each exported part after every build. Manifold solid operations handle union/subtraction; no overlapping-shell fake union.

Playwright scripts exercise real PNG/JPEG/ASCII/binary STL picker imports and downloads, compare byte fingerprints and regenerated portable designs, threshold/depth/content/scale/orientation/placement changes, invalid/truncated/excessive/open/nonmanifold/concave input rejection, recoverable export gating, SVG holes/background, text/icons, presets, saved designs, JSON round trips, ZIP/per-part export, worker failures, theme/views/focus, rapid edits and narrow touch/mobile layouts. See generated validation JSON files and VALIDATION.md for this run's actual results.

**No physical print, fatigue/force/friction testing or elastic simulation has been performed.** Geometry/kinematic checks do not prove feel, fatigue life, grip, material compatibility or physical operation. Prototype the Pocket Drift calibration design before extended use; adjust printer/material and rethread rather than forcing parts.
