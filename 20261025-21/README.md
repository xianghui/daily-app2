# Quarterturn Passage

A local, browser-based parametric STL maker for a **sliding-turn fidget**. A loose square-bore thumb ring follows a gently twisted square guide, coupling axial strokes to partial rotation. A removable friction stop limits upward travel. This is neither a screw nor a ratchet; clearance produces some rotational play. Three separately printed rigid parts, no purchased hardware, server, keys or paid services.

## Studio

React + Vite, Three.js OrbitControls, Manifold WASM, fflate and locally bundled Fredoka/Rubik fonts. The Keycap Studio reference informed the 374 px left editing rail, collapsible sections, raised tactile buttons, light lavender desk, pink selections, saved dark theme, live right-side preview and preview-first phone layout. Shared import/export and studio infrastructure was adapted from the previous daily app; the **twisted-guide mechanism and its validation are new**. The reference and archived gallery are read-only and unchanged.

- Three real presets with actual model thumbnails; round, hexagonal and oval palm outlines.
- Paired number/range controls, mechanically bounded variation, reset, undo/redo.
- Assembled, exploded, print plate and isolated guide/ring/stop views; see-through guide and interactive assembled stroke control. Drag/orbit, pinch/zoom and fit controls.
- Preview-only colour swatches do not change STL colours (STL has none).
- Per-part binary STL and all-separated print-plate STL, plus Everything ZIP with three STLs and assembly notes. Exports always use printable orientations, regardless of preview view/pose.
- Six local named designs and portable JSON including bounded image or mesh payloads. Missing image payloads explicitly require reattachment. No pretend asset restoration.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

The app base is `/daily-app2/20261025-21/`. Per-app `predeploy` is `npm run build`; per-app `deploy` is `gh-pages -d dist`, as required, but **public publishing of the combined site uses the root monorepo `npm run predeploy` and `npm run deploy`**.

## Dimensions and supported ranges

All physical values are millimeters; twist uses degrees and preview travel uses percent.

| Parameter | Range | Default |
|---|---|---|
| Palm diameter | 22–28 | 25 |
| Guide height above palm | 40–52 | 46 |
| Square guide side | 7–9 | 8 |
| Square bore clearance per side | 0.55–0.85 | 0.70 |
| Ring thickness | 3–4 | 3.5 |
| Palm dimple depth | 0–0.6 | 0.3 |
| Stop socket radial interference | 0.05–0.15 | 0.10 |
| Visible guide twist | 60–100° | 90° |

Palm thickness is 5; well floor 4.2, with engraving limited to 0.6 (minimum 3.6 remaining). Guide center is 32 mm from palm center. Ring outer radius is 12, stop radius 8.5, socket floor 1.6 and spigot radius 3. The stop socket is deliberately smaller than the spigot by the independently adjustable radial interference. These tolerances are starting points, not universal fits.

The default separated export is approximately 76 × 52.47 × 55 mm. The exact current X/Y/Z dimensions are calculated from the selected final exported mesh, not an estimated bounding box.

## Image → actual printable relief

Use a file picker (desktop or phone), one-file drag/drop, or synthetic bundled PNG/JPEG/SVG samples. Limits: 2 MB, PNG/JPEG ≤12 million pixels and ≤6,000 pixels on either side. Content signatures and headers are checked before decoding. Images normalize to ≤500 px and then a **20 × 20 grayscale height grid**. Crop/contain/cover, ±25% crop offsets, light/transparent versus dark background removal, threshold 1–254, footprint 4–7 mm, rotation ±180°, X ±1.5 and Y ±2 mm are implemented.

Threshold mode assigns the configured depth to dark samples and zero to bright samples; relief mode scales height continuously by inverse luminance. A continuous 0.4 mm backing and triangulated top/sides/bottom form a closed solid. It is genuinely boolean-unioned into the palm well, or subtracted for engraving. Raised depth is 0.4–3 mm; engraving is limited to 0.4–0.6. Bright holes are **unraised/unengraved areas over a continuous floor**, not through-holes: this is sampled height relief, not exact vector boundary tracing. The checkerboard shows the actual sampled cutout; source and final geometry are both visible. White/empty silhouettes are rejected.

Simple SVG fills (including ring holes) are locally rasterized to 256 px before the same conversion. Scripts, external resources, filters, text and complex references are rejected; flatten to simple filled paths first. Limit 2,000 elements and dimensions 1–6,000 px. Text (eight characters) and six searchable marks are rendered with bundled fonts into the same real relief pipeline.

**This is 2D-to-relief conversion, not automatic full-3D reconstruction from a photograph.**

## STL → integrated stationary grip

Both ASCII and binary STL work through real file pickers and synthetic samples. STL has **no units metadata**: the user must explicitly confirm source coordinates are millimeters before any integration/export. Source dimensions, oriented mesh, format and triangle count are shown. Choose Z-up, Y-up or upside-down Z before attaching; changing up-axis clears the source and requests reattachment. Set XY footprint (uniform in XY, 4–7 mm), independently fitted Z height (0.6–5 mm), Z rotation and XY placement. Reset transforms, replace/remove source or reset all to return to built-ins.

The original accepted solid is used in a Manifold boolean union, overlapping the palm floor by 0.15 mm. It is not merely displayed, re-exported unchanged or replaced by a convex hull. Any transformed vertex outside the radius-6.5 mm safe well is rejected; a minimum 1.2 mm planar grip width is required. Import changes are isolated from the entire guide, moving ring and stop.

### Explicit supported STL contract

2 MB maximum, 1–1,500 triangles, one connected outward-wound **convex flat-bottom solid**, dimensions 0.2–250 mm on each axis, broad bed contact ≥25% of footprint and no overhanging XY projections outside that bed footprint. The importer checks finite coordinates, triangle area, positive volume, edge incidence/directed winding, connectivity, pairwise triangle intersections, convexity, dimensions and contact footprint. Open/nonmanifold, internally intersecting, concave, hollow, multi-body and unsupported overhanging files are rejected with actionable errors. **No repair is claimed or performed.** Concavities are never silently discarded. Use a mesh editor to simplify/reorient or choose an accepted grip first. This bounded workflow intentionally does not support arbitrary sculptural STL models.

## Responsiveness, validity and privacy

Heavy parsing/Manifold operations run in a local Web Worker with locally bundled WASM, 100 ms edit debounce, bounded image/triangle complexity and request sequence guards. Live building/ready/error states and exact parameter keys block stale exports. A last-good preview may stay visible with an explicit caption, but cannot be exported after invalid edits. Worker loading errors, import failures and malformed JSON disable export until recovery.

Every completed final part, including float32 print placement, is checked for finite vertices, nondegenerate triangles, consistent winding, positive enclosed volume, and exactly two incident opposite-directed faces per welded edge (1e-5 mm weld tolerance). Each part must remain a single Manifold connected solid. Separate print layouts never merge moving parts. Preview, geometry signature and binary exports share the same current validated mesh.

All personal files are processed locally in the browser. No file upload, remote API or runtime CDN. Bounded normalized assets are saved only when the user chooses local named/JSON storage. Repository fixtures are synthetic project-authored artwork and low-poly solids, not personal uploads. Fontsource fonts use SIL OFL; Manifold Apache-2.0, Three MIT, fflate MIT, React MIT. See installed package licenses.

## Printing, assembly and calibration

Print all three parts in rigid PLA or PETG. Palm/guide upright, ring flat, stop **socket up**. Export orientations already reflect this. Start with 0.4 mm nozzle, 0.2 mm layers, three perimeters; no supports required. Gentle guide twist gives small layer-to-layer overhangs. Clean strings and elephant foot before assembly.

1. Print Pocket Passage as a full-size running-fit trial. Do not scale exports in the slicer.
2. With stop absent, lower ring over the guide and turn it as you slide. Never force it.
3. Test stop socket at **0.05 mm radial interference first**. Fit varies by printer/material; make a looser/tighter stop as needed. Invert stop from its print pose and seat onto the round spigot by hand.
4. Gently stroke and allow the ring to turn. The stop is **friction-retained, not positively locked**; inspect before use, do not yank it. Remove stop and slide ring off to release.

No hardware or glue needed. No compliant TPU hinges, bearings or magnets. No universal fit or force claims. Small loose parts are not for young children.

## Verification (computational, not a physical print)

- `npm test`: 260 built-in parameter/preset cases (all 256 min/max corners), plus 35 image/STL-derived output cases; all individual and combined binary STL components checked independently for finite geometry, nondegenerate faces, normals, bounds in mm, edge incidence, winding and positive component volumes.
- Mechanical validation checks square twist envelope across ring thickness, >0.15 mm residual side clearance, travel, stop radial overlap and import isolation. Representative cases/imports use actual boolean intersections at **17 travel positions**, print-layout pair checks and top insertion/release. Intentional friction-stop interference is verified as occurring only on the round top spigot.
- Browser scripts exercise PNG/JPEG and ASCII/binary STL picker imports, pixel/threshold/depth/scale/rotation/placement export changes, recoverable invalid/truncated/open/nonmanifold/concave/oversized inputs, empty images, defaults and extrema. Exported files are parsed, compared with exact preview signatures and checked against saved design regeneration.
- Feature tests cover all presets, shapes, text/icon/SVG and holes in actual geometry, raised/engraved, JSON asset round trips, named saves, undo/redo, view modes, ZIP/per-part downloads, saved theme, stale requests, worker loading failure and malformed JSON recovery.
- Phone tests use 390 px and 320 px viewports, touch orbit/pinch, real image/STL uploads and downloads, reachable exports and no horizontal overflow. Desktop checks left controls/right preview. Gallery inline scripts and browser rendering are independently checked before publishing.

Result files are `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `hole-validation.json`, `resilience-validation.json` and gallery/production reports; screenshots capture actual tested UI. Computation does not prove tactile feel, wear, printing success, cap retention force or real-world safety. **No physical prints, nonlinear FEA, fatigue tests or measured force tests were performed.**
