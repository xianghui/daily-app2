# Branch & Breathe

A local browser maker studio for a **physical tactile labyrinth fidget**, not a browser game. Hold the palm and guide a removable round nib through branching, round-ended grooves; pause at a fork, reverse, or lift to begin again. Three path topologies and three ergonomic palm silhouettes are genuinely generated. Two separately printed rigid components, no hardware or supports intended.

## Studio

React + Vite, Three.js orbit/touch preview, Manifold WASM solid modeling in a debounced Web Worker. Bundled Fredoka/Rubik fonts, lavender desk, white panels, coral raised key controls, persisted dark theme. Desktop 374 px scrollable left panel/right preview; phone preview, status/dimensions and exports first, then stacked collapsible editor sections. Preset model thumbnails, bounded variations, undo/redo, up to six named local designs, portable JSON open/save, text and six searchable symbol marks.

Views: print plate, assembled, exploded, isolated palm and isolated stylus. Pose changes never alter export. The assembled nib flips into the channel with 0.15 mm nominal floor clearance and a handle 1 mm above the top. Preview motion follows the first path; other branches are accessible physically. It does not simulate force, friction or wear. The stylus deliberately lifts out: this is **not a captive slider**.

The read-only Keycap Studio reference was inspected (README, styles, App, Viewer, worker, STL and export modules). Its concrete studio layout, controls, checkerboard import inspection, fit feedback and local-save patterns inform this UI. No keycap sockets or switch templates are imposed. Local strict mesh/import/export utility code was adapted from the prior Daily Object Lab studio, not copied from the reference's dependencies/history. Both galleries were reviewed; neither the reference nor archived gallery was modified.

## Run

Node 22.12+; `npm install`, `npm run dev`. `npm test` runs independent geometry and mechanical checks. `npm run predeploy` is exactly the required `npm run build`; `npm run deploy` is `gh-pages -d dist`. Individual gh-pages dependency installed. Production site uses the **root monorepo** predeploy/deploy process. Vite base: `/daily-app2/20261025-4/`.

Runtime dependencies: React/React DOM, Three.js, Manifold-3D, fflate, Fontsource Fredoka/Rubik. Vite/plugin-react and Playwright are development dependencies. WASM, fonts, generation and export code are bundled locally: no API keys, CDN, server computation or uploads. Sample buttons fetch only bundled synthetic fixtures.

## Local image / SVG workflow

Choose/drop **PNG, JPEG or simple SVG**. Files ≤2 MB. PNG/JPEG content signatures and header dimensions checked before decoding: ≤12 million pixels and ≤6,000 px/side. Images normalize to ≤500 px/side for bounded portable storage. SVG is restricted to ≤2,000 simple vector elements (paths, circles, rectangles, polygons, lines/groups), with 1–6,000 px declared dimensions. Scripts, references, external resources, embedded images, effects and unflattened text are rejected. SVG rasterizes locally to 256 × 256; it is not silently replaced with a convex hull. An even-odd ring fixture demonstrates a preserved interior hole in the relief.

A **20 × 20 luminance vertex grid** samples fit/contain or crop/cover with ±25% X/Y shift. Rec.709 luminance = 0.2126R + 0.7152G + 0.0722B. Transparent backgrounds composite to white (light removal) or black (dark removal); dark-background mode inverts luminance. Threshold mode uses `depth` below threshold and zero otherwise; grayscale uses `depth × (1 − luminance / 255)`. Heights interpolate linearly across triangles. A continuous 0.4 mm backing closes the sampled mesh. Raised geometry sinks 0.15 mm into the recessed palm well and is robustly unioned. Engraved geometry mirrors below that floor, extends 0.15 mm above it, and is robustly subtracted. The backing produces a shallow engraved footprint; relief adds detail below it. Engraving depth is bounded at 0.4–0.6 mm, leaving at least 3 mm of solid floor at minimum parameters.

**This is 2D-to-relief / thresholded height geometry, not full 3D reconstruction from one photograph or exact vector outline tracing.** Bright interior holes remain unraised/unengraved regions, not holes through the complete palm. Fine marks below the grid resolution can disappear; use bold shapes. Source and checkerboard conversion previews show the real sampled cutout. Background, threshold, depth, crop, footprint, placement and rotation change exported geometry. Empty relief blocks export. Text (≤8 characters) and searchable icons rasterize locally into this same real geometry workflow. Fonts/symbol fallbacks depend on local glyph availability.

## STL workflow

ASCII and binary STL ≤2 MB, ≤1,500 triangles; each source dimension 0.2–250 mm. Select Z up, Y up or −Z up **before attaching**. A proper rigid rotation is applied before full support/contact validation. Changing up axis clears the source and explicitly requests reattachment rather than pretending an old orientation changed. Inspect oriented source dimensions and source mesh, then explicitly confirm millimeter coordinates: STL has no unit metadata.

The supported integration contract is one connected, outward-wound **closed convex solid**, with a broad flat bottom (at least 25% of XY bounding area) and no overhang beyond its bed footprint. Input finite coordinates, dimensions, nondegenerate triangles, welded two-face edges, opposite neighbor winding, connectivity, positive volume, triangle self-intersections, convexity and support footprint are checked. Concave, hollow, disconnected, open/nonmanifold, touching, excessively slender or otherwise unsupported meshes receive actionable errors. **No arbitrary repair or hull substitution.** Reorient/clean/decimate in a modeler if rejected.

The actual validated source mesh is proportionally fitted in XY to 4–7 mm footprint; Z independently fits 0.6–5 mm height, with resulting XY span ≥1.2 mm. Z rotation ±180°, X ±1.5 mm, Y ±2 mm, center/reset and replace/remove are real transforms. Robust solid union integrates the grip into the palm well. All transformed vertices must stay within a 6.5 mm safe radius, far from grooves; the result must be one closed connected solid. Imports never alter the independent stylus or moving channel interfaces.

Synthetic CC0 PNG/JPEG/SVG/ASCII/binary STL fixtures and notes are bundled in `public/samples`. No personal inputs are stored in this repository.

## Units and bounds

All physical dimensions are millimeters:

| Parameter | Supported range |
|---|---|
| Palm diameter | 22–28 |
| Path grid pitch | 10–14 |
| Stylus nib diameter | 2.4–3.2 |
| Radial running clearance (per side) | 0.25–0.55 |
| Continuous solid floor | 3–5 |
| Groove depth | 1.8–3 |
| Palm dimples | 0–0.6 |
| Raised image depth | 0.4–3 |
| Engraved image depth | 0.4–0.6 |

Round, hexagonal and oval palms; river, fork and meander paths. Track walls between nonconnected parallel runs are at least 5.7 mm. Import isolation is analytically bounded. Numeric out-of-range/nonfinite or impossible transforms block export, not silently clamp into a different design. Final export X/Y/Z dimensions reflect the selected part/layout.

## Validation and export architecture

Worker holds Manifold WASM; 100 ms debouncing, monotonically increasing build/parse IDs, exact parameter/source/transform keys and latest-result guards. Exports disable while importing/building or after invalid edits, even if the last-good preview remains visible and labelled. Worker-load failures have explicit errors. No stale mesh can be downloaded accidentally.

Every final component is checked in the worker for finite vertices, nondegenerate faces, welded edge incidence exactly two, opposite adjacent winding, positive volume and one connected closed component. Checks run again in float32 printable placement. Robust CSG forms the palm, channels and imports, not interpenetrating visual shells. The two intended bodies remain separate. Binary STL export uses exactly the same final checked vertex/index buffers as preview; assembled poses are display-only. Per-part buttons, selected-part STL and Everything ZIP (two STLs plus assembly notes) are real. STL is geometry-only, **not colour or 3MF**.

JSON includes bounded normalized PNG payloads or validated mesh arrays, parameters and transforms; open revalidates, regenerates and restores the source. Missing/corrupt/oversized payloads require reattachment and disable export. JSON limit 2 MB. Local storage can run out; download JSON as a portable alternative.

## Printing and use

Print both components exactly as exported: underside down, broad stylus handle down with nib pointing upward. Start with PLA or PETG, 0.4 mm nozzle, 0.2 mm layers, three perimeters. No hardware, glue, flexible material or supports required by the designed geometry. Flip the stylus nib-down for use. Groove floor is solid; neither nib nor handle requires a bridging roof. Remove elephant foot and rough contact edges. Print River Pause as a full-size clearance coupon and tune fit for your printer/material. Never force a tight nib. It is loose, not permanently retained; lift vertically to release or change paths. Small loose parts, not for children.

**No physical prints, tactile forces, friction, wear or long-term durability tests were performed.** Computational checks are not a claim of universal fit or proven tactile feel.

## Executable verification

- `npm test`: independent binary STL parsing, float32 normals, nonzero triangle area, finite vertices, welded edge topology and winding, connected positive-volume components, independent mm bounding dimensions. 142 default/preset/extrema/corner/variation cases; 30 image/STL import cases, including engraving. Mechanism tests sample every segment and junction of every path, test blocked closed ends, floor/handle clearance, vertical release, separated print layout and protected import isolation using CSG intersections.
- `node browser-test.cjs`: real PNG/JPEG and ASCII/binary STL pickers/downloads; pixel/threshold/depth/scale/placement export changes vs no-import baseline; exact preview/export fingerprints; replace/remove/reset; malformed/truncated/open/nonmanifold/concave/oversized input and unsafe transforms; 320/390 px viewports, touch orbit/pinch and phone imports/downloads.
- `node feature-test.cjs`: every preset and representative variation/shape, text/icon/SVG and engraving, portable image/STL JSON round trips, named local designs, undo/redo, theme persistence, views, ZIP/per-part contents, drag/drop, Y-up source integration, focus and collapsible sections, latest-worker-edit/invalid-export guards.
- `node gallery-test.cjs`: nonempty inline scripts compile via Node `new Function`, correct unique newest entry, prior entries unchanged, STL category first, search and browser runtime.

Browser tests expect local Vite on 5281; gallery tests expect root static server on 5282. See generated validation JSON and `VALIDATION.md` for executed results. Geometry validation does not substitute for physical printing.
