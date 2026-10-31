# Shade & Scale

A local React + Vite maker studio for a **five-part flat-pack eclipse/shadow demonstrator kit card**. Snip twenty genuine low runners; assemble an aperture screen, small occulting disc, target screen and parked large interchangeable disc on a signature bench. Swap the moons by lifting vertically. Illuminate with your own cool low-power LED torch. This is a qualitative occlusion/finite-source experiment, not a lens projector, astronomical-scale model or simulated light field.

## Reference-first evidence

Before choosing geometry, local switch templates and fabric links under `/Volumes/ExternalHD/3d_printing_apps/` were parsed and rejected as sheet-kit references. Their hashes, dimensions and reasons are in `reference-measurements.json`. The read-only Keycap Studio README, styles, App, Viewer, worker, image trace, STL parser and export modules supplied concrete interaction patterns: a 374 px left studio rail, paired sliders/numeric fields, tactile selected keys, coral/lavender palette, source/checkerboard conversion previews, saved theme, preview-first phone layout, worker computation and current-state gated export. No reference project files were changed, deployed, or copied as a dependency/Git tree.

Selected geometry reference: **White Cat Kit Card**, Mike Kasberg, [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Repository license independently retrieved and preserved as `REFERENCE-LICENSE.txt`.

The actual downloaded binary STL has SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles and bounds approximately **179.820 × 178.020 × 3.190 mm**. STL has no units; millimeters are assumed and corroborated by sheet-scale interfaces. Mesh sections at Z .1, .5 and 1.59 mm were inspected (`evidence/reference-sections.png`). The source has 27 edge-adjacent components and is not watertight: it is a design reference, not an imported printable part or a silently repaired mesh.

**Measured:** sheet planes 0/1.6 mm, receiving slot approximately 4.5 × 1.700012 mm, low runner planes .21/.22 mm. **Preserved/adapted:** 1.6 mm sheet default, 4.5 mm tongue width, sheet-plus-fit receiving direction. **Proposed, not measured:** .15 mm total allowance default (.10 resembles the measured source), 2–2.6 mm insertion depth, .4–.6 mm breakaway runners for FDM, new shoulder dimensions and protected engraving. Optical parts, aligned stations, moon exchange, parking socket, target, aperture and the five-bay carrier are original parametric CSG reconstruction. Raw source STL is not bundled.

Reproduce reference inspection with a Python environment containing trimesh, numpy, matplotlib: `python reference-inspect.py /path/to/downloaded-reference.stl`. See `reference-analysis.json` for parameter mappings and deviations. Editor/import/preview infrastructure is adapted from the preceding local studio; the model, transforms, assembly tests and application are distinct.

## Run / package

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. `node serve.mjs` serves production output at `http://127.0.0.1:5620/daily-app2/20261031-19/`. `npm run deploy` is provided for standalone builds; this scheduled publication uses the **root monorepo deployment**, not standalone deployment.

Dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM (Apache 2.0), fflate, locally bundled Fontsource Fredoka/Rubik (SIL OFL), gh-pages. Playwright is a development test dependency. No CDN, API key, server or paid modeling service. Personal files stay in the browser; no upload endpoint, analytics or external processing. Only synthetic sample fixtures are in `public/samples/`.

## Geometry / ranges (all dimensions millimeters)

| Setting | Supported range |
| --- | --- |
| Card width / height | 176–192 / 224–240 |
| Bench width / length | 52–58 / 78–86 |
| Optical centre above bench surface | 24–28 |
| Aperture to moon distance | 20–26 |
| Target diameter | 30–36 |
| Small / large moon diameter | 10–14 / 18–22 |
| Light aperture diameter | 2–4 |
| Bench / standing sheet thickness | 2–2.6 / 1.6–2 |
| Total socket allowance | .10–.30 |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Art rotation / X / Y offset | ±180 degrees / ±1.5 / ±2 |

Three real mesh-thumbnail presets and three bench silhouettes. All sheets print on Z=0; carrier unions connect each part through four low runners into a divided frame. Snip cuts are 1.6 mm outside the part envelope, away from four 4.5 mm tongues. The default 184 × 232 mm card exceeds some 220 mm bed lengths: use individual clean-part exports or check bed orientation/envelope. No false small-bed promise.

Stations: source at Y8, moon at Y8+gap, target at YbenchLength−24; spare at XbenchWidth/2−8, YbenchLength−9. All optical centres are at ZbenchThickness+height. Source/target seats require adhesive; moons remain **unglued gravity-seated clearance fits**, not snap retained or captive. A 9 mm wide shoulder rests on the bench. Straight-up removal and swapped-moon seating are collision checked with fixed screens in place. The point-aperture shadow estimate is `discDiameter × (targetY-sourceY)/(moonY-sourceY)`; finite aperture, torch alignment and edge blur are not simulated. A larger estimated shadow may exceed/crop the target deliberately.

## Both import workflows

Picker works on phones/desktop; drag/drop also supported. Replace/remove, centre/reset transforms and return-to-defaults are real state changes. Both imports modify the **exported solid** by Manifold Boolean engraving, not textures or unchanged re-export. Artwork is limited to a protected rear-bench patch (centre X−8, YbenchLength−9), separate from sockets and optical parts. Minimum remaining backing is 1.4 mm. Raised art is deliberately unsupported here: only safe recessed marking is offered.

### PNG / JPEG / simple SVG → geometry

Content/header validation before decode: 16 bytes–2 MB, max 12 MP, max 6,000 px side. Normalize to ≤500 px; SVG must contain only simple local shapes, ≤2,000 elements, no external links/resources, scripts, effects or text. Rasterize SVG locally to 256 px. Fit/cover crop, pan ±25%, light/dark background, threshold 1–254 or grayscale relief. Alpha composites onto chosen background. Convert to an exact **20 × 20 sampled grid**, luminance `.2126 R + .7152 G + .0722 B`, thresholded depth or proportional inverse luminance. Adjacent samples triangulate a closed heightfield cutter; subtract from the bench. No exact vector contour tracing is claimed; fine outlines quantize and sharp threshold boundaries interpolate over a cell. Bright interior holes remain unengraved on continuous backing, verified by actual solid probes. Source and actual cutout/heights are shown on a checkerboard. **2D-to-relief, not automatic 3D reconstruction from a photo.** Text and six searchable bundled marks use this same geometry path.

### ASCII / binary STL → exact mesh-shaped engraving

Max 2 MB and 1,500 triangles, axis extents .2–250 mm. Parse actual content, weld at 1e−5 mm, require finite/nondegenerate outward winding, exactly two opposite faces per edge, one positive-volume connected component and a broad flat-footprint convex solid. Unsupported open/nonmanifold, concave, hollow, disconnected, overhanging or excessive meshes are rejected with actionable errors; there is no hull replacement, repair claim or discarded concavity. The supported convex class is intentionally narrow and disclosed before import.

Source preview displays oriented dimensions, count/format and explicit millimeter confirmation (STL stores no units). Z/Y/−Z up selection precedes attachment; changing it requests reattachment. XY proportionally scales to footprint; Z independently fits engraving depth. UI shows both scale factors. Rotate/place/centre the original mesh, then Boolean-subtract that exact shape. This adapts imported geometry into the personalized bench without touching assembly interfaces; it does not re-export the mesh unchanged. Empty silhouettes, nonfinite/excessive transforms, broken payloads or geometry that leaves the safe zone block exports.

## Studio / exports / portable state

Heavy CSG and parsing run in a Web Worker with bundled WASM, 100 ms edit debounce and request-id stale-result guards; bounded mesh/image resolution. Building/success/error states are real. Each generated part passes finite, closed-edge, winding, nonzero-volume checks. Failed/unfinished edits may leave a labelled last-good preview but **all export buttons are disabled** until the exact current-state key validates. Preview and binary STL/ZIP use the same geometry. The UI includes a printable-mesh signature tested against downloaded bytes and Node regeneration.

Assembled, exploded, connected-card, de-tabbed and isolated-part views; see-through, orbit/touch pinch, fit and zoom. Exploded offsets are explanatory, not print orientation. STL always uses bed-flat fabrication geometry; no view overlap is exported. Per-part binary STL and Everything ZIP (real card plus five clean parts, numbered assembly instructions and current fits); STL stores neither units nor colors, no fake 3MF.

Undo/redo (35 snapshots), six named local designs, JSON save/open include bounded portable normalized PNG or checked mesh payloads. Missing source payloads require reattachment instead of pretending restoration. JSON max 2 MB, image payload max 1.8M characters/250k pixels; saved STL is reparsed/validated. Existing browser storage is local, not cloud.

## Printing / assembly / limitations

See in-app numbered instructions or ZIP `ASSEMBLY.txt`. Print PLA/PETG, .16–.20 mm layers, three walls, bed-flat, supports not intended. Calibrate a moon tongue in parking socket first; .15 mm allowance is a starting point dependent on filament, printer, elephant foot and slicer. Snip/trim runners, seat and bond aperture/target only, then leave moons removable. Supply external **cool low-power LED torch**, filament-compatible adhesive and optional white target paper. Compare discs in a dim room by hand-aligning torch behind aperture. Never use sunlight, a laser or a hot lamp. Model is not a certified optical instrument or a force-retained toy.

**No physical print, assembly, fit, light-output or optical demonstration has been performed.** Computational tests cannot prove optical brightness, surface finish, plastic strength or physical seating. No universal tolerance, physical performance or tested educational outcome is claimed.

## Reproducible validation

- `npm test`: every preset/shape, min/max and per-field extrema, 18 image/STL-derived variants, malformed/dimension rejections; independent float32 STL parsing, normalized normals, finite triangles, welded opposite-edge incidence at 1e−5 mm, positive volume per component and exact bounds.
- Assembly tests: every pair, all vertical insertion/removal paths, swapped moons, aligned centres, actual open-aperture/opaque-disc solid probes, protected art/backing, safe snips yielding five parts plus carrier, disjoint plate parts and sampled upper sections within bed footprint. Reference evidence and provenance included.
- `node hole-check.mjs`: actual Boolean probes of bright hole, dark ring and solid backing.
- `node browser-test.cjs`: real production file-picker PNG, JPEG, ASCII/binary STL; downloaded STL differs with pixels, threshold, depth, crop, scale/rotation/placement; Node regenerates saved state; invalid inputs block export; part downloads; phone 320/390 px no overflow, CDP touch orbit/pinch and phone exports.
- `node studio-test.cjs`, `node stale-test.cjs`, `node personalization-test.cjs`: all presets/marks, ZIP entries parsed, JSON/named state restoration, missing payload rejection, undo/redo, views, saved dark theme, focus/collapse/reduced motion, desktop rail and preview-first phone, worker-abort/recovery and stale-export gating.

Reports/screenshots are saved alongside these scripts. Production build, gallery scripts/runtime, root combined deployment and public URL are checked separately before publishing.
