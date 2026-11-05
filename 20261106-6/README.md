# Scarf & Slide

A reference-grounded **three-piece kit-card generator**: release two complementary inclined scarf beams and a rectangular sleeve. Flip the upper beam, overlap the slopes, then slide the upright sleeve over the joint. Moving the sleeve away allows the upper beam to lift out. The sleeve limits vertical separation only while centered: **no axial lock, structural rating or physical-print claim**. No hardware, adhesive or supports intended.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
# http://127.0.0.1:5996/daily-app2/20261106-6/
```

React + Vite, locally bundled Three.js/OrbitControls, Manifold WASM, fflate and Fredoka/Rubik fonts. No CDN, service, API key or paid dependency. Per-app deploy scripts exist, but publication uses the ROOT monorepo combined deploy flow.

## Reference-first evidence

Read-only candidates inspected first under `/Volumes/ExternalHD/3d_printing_apps/`: keycap_generator2 README, App.tsx, styles.css, Viewer.tsx, worker.ts, geometry/stl.ts, export.ts and imageTrace.ts; fidget_fabric_generator README and its diamond-link STL; local kit_card_generator_robot contains no suitable source STL. MX sockets and interlocked 8 mm fabric were rejected as unrelated interfaces for this assembly. Candidate hashes/dimensions/components are in reference-analysis-raw.json.

Selected **White Cat Kit Card**, Mike Kasberg, https://github.com/mkasberg/white-cat-kit-card / Printables 865769, CC BY 4.0. Actual binary STL was re-read from an existing local public download after a direct download retry returned HTTP 403. Public GitHub README and LICENSE were fetched again. No raw source mesh redistributed. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

Source dimensions **179.820 × 178.020 × 3.190 assumed mm**, 30,616 triangles, two edge-adjacent components; source has 57 anomalous welded edge incidences plus duplicate/degenerate artifacts. These are reported, not repaired or passed off as valid output. The source is a design reference for an independent reconstruction; no source triangles are used. Actual Z=.100,.215,1.590 mm cross-sections show **1.60 mm sheets, four 4.50 × 1.70 mm sockets, and .21–.22 mm runner top planes**. See reference-analysis.json, reference-analysis-raw.json, reproducible reference-analysis.py and evidence/reference-sections.svg. STL has no units: mm is an explicit assumption, not metadata.

The new card adapts the source's bed-flat carrier, sheet assembly and low removable runners. New scarves, supported 1.2 mm tips and sliding sleeve are NOT source-measured joints. Beam thickness is deliberately increased; runner height is deliberately increased for ordinary FDM layers. The .10 mm source sheet/socket difference informs a fit starting point only, not a universal fit. This is not the previous four-corner adhesive photo frame: two inclined end-to-end beams plus a separately upright sliding sleeve require a different assembly and insertion check.

## Studio

Lavender desk, white panels, coral raised tactile controls, saved coherent dark theme. Desktop 372 px left scrolling panel / right live viewer; phone preview, dimensions and exports first, stacked controls below. Collapsible labelled sections, slider+numeric pairs, three actual generated model thumbnails/presets, three tail silhouettes, touch orbit/pinch, fit/top/front/zoom, ghost mode, undo/redo, six locally named designs and portable JSON. Assembled, exploded, connected card, clean print plate and each isolated part use the same final worker geometry. Assembly inspection yaw is a view control, not simulated joint motion; exploded offsets are instructional only.

## Dimensions and fits (all mm)

| Control | Supported range |
|---|---|
| Card W × H | 110–180 × 100–150 |
| Full tail / scarf overlap | 35–55 / 18–28 |
| Beam breadth / sheet | 16–22 / 3.2–4.0 |
| Vertical scarf gap | .10–.30 |
| Sleeve aperture sliding gap | .20–.60 (half each side) |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |

Tips stay 1.2 mm. Scarf slope = atan((sheet−2.4)/overlap). Complementary slopes have a vertical, not normal, gap. The upper full face sits gap mm higher. Sleeve aperture = (breadth+slidingGap) × (sheet+scarfGap+slidingGap); ring walls 2.4 mm. Supported shape changes affect tails only, never the sliding envelope. The actual export X/Y/Z dimensions and fit warnings are shown. Invalid dimensions/transforms block export.

## Local image → actual geometry

PNG and JPEG required; simple SVG shapes also supported. File picker and drag/drop, samples bundled (`mark.png`, `waves.jpg`, `ring.svg`). ≤2 MB; PNG/JPEG ≤12 MP / 6,000 px side; decoded dimensions checked before normalization to ≤500 px. SVG ≤2,000 simple elements; external content/scripts/references/effects rejected, rasterized locally to 256 px.

Fit/cover crop, ±25% crop shift, light/dark background, threshold 1–254 and grayscale relief controls. Luminance is sampled on a bounded **20×20 grid**, thresholded or mapped to .4–.6 mm heights, triangulated as a closed height cutter and Boolean-subtracted into the lower full-thickness tail. White holes retain backing and appear transparent on the checkerboard cutout. This is sampled **2D-to-relief**, not exact contour tracing or automatic 3D reconstruction from one photo. Text (up to 8 characters) and six searchable original SVG marks enter the same real pipeline.

Footprint 4–7 mm, rotation ±180°, X ±1.5 / Y ±2 mm; a 5.8 mm radial keep-in prevents joint/wall damage. Engraving leaves ≥2.6 mm backing. Raised art is intentionally unsupported because a protrusion would obstruct the sleeve. Empty silhouettes and unsafe placements fail clearly. Replace/remove, reset transformations, reset image settings and defaults remain available.

## Local STL → integrated geometry

ASCII and binary STL ≤2 MB / 1,500 triangles; dimensions .2–250 assumed mm each. Choose Z/Y/−Z up before attaching; dimensions and source preview shown; explicit millimeter confirmation required. XY proportional footprint scale, independent Z engraving depth, rotate and center/place. Accepted original triangles become an exact Boolean recess in the lower full-thickness tail—not an unchanged re-export, texture, intersecting shells or convex-hull substitute.

Deliberately bounded contract: **one closed outward-wound convex solid with broad flat bottom and no overhang**. Concave, hollow, open, nonmanifold, inconsistent, self-intersecting/touching, disconnected, degenerate, excessive or unsupported meshes are rejected with guidance; no automatic repair claimed. Parser checks finite coordinates, welded two-face opposite edge incidence, component connectivity/volume, triangle intersections, convexity and bed projection. Broad flat base must cover ≥25% XY box. Reorient a support-free low-poly solid in a modeler when rejected. Changing up-axis requests reattachment, rather than reinterpreting saved coordinates silently.

## Save, privacy and exact exports

All personal files stay in the browser, never uploaded or committed. Bounded normalized PNG/mesh payloads and the exact sampled height grid travel with JSON/named designs; restoring retains that grid rather than introducing image re-decoding variation. missing image payloads explicitly request reattachment. JSON ≤2 MB; named designs up to six. Worker builds are debounced, stale-response guarded and current-state keyed. Worker failure, invalid imports/parameters or unfinished image conversion block ALL STL/ZIP exports, even if a labelled last-good preview remains.

Binary STL per part, real connected card, clean print plate and Everything ZIP (card + three individual STLs, assembly-map SVG, portable JSON, numbered instructions/current fits). Preview and export share exact current final solid meshes; test compares downloaded signature, UI signature and Node regeneration from the downloaded JSON. STL stores no preview colour. No fake 3MF option.

## Print / assembly

1. Print connected card OR three clean parts bed-flat Z=0. PLA/PETG, .16–.20 mm layers, .4 mm nozzle. No supports intended; sloped surfaces sit above continuous bed footprints. Inspect slicer layers.
2. Snip twelve runners (four per part). They meet full-thickness tails / outer sleeve edges, not scarf tips or aperture. Trim scars and discard carrier.
3. Keep signature beam bed-face down. Stand sleeve upright, thread it from a free tail and park it away from the joint. Flip upper beam 180° about the short Y axis, bed-face UP, tail pointing opposite.
4. Lower upper scarf across chosen overlap. Slide sleeve to center on both inclines. Hold both tails; slide sleeve away to allow separation. No snap, axial capture, adhesive or hardware. DO NOT load or lift objects with this demonstration.
5. Print the sleeve and both tips first to calibrate. PLA .40 mm / PETG .50 mm sleeve gap are starting suggestions only; material/printer/elephant-foot/scars matter. Never force a tight sleeve.

## Validation / limits

`npm test`: 37 default/preset/shape/per-control extrema/all-min/max and image/STL-derived cases. Independent binary-STL checks verify finite/nondegenerate triangles, normals/winding, positive volume PER component, 1e-5 mm welded two-face edge incidence, expected mm dimensions, one connected card and three valid separate solids. Manifold solid intersections independently check 81 collar positions over full tail-to-tail travel, seven vertical upper-beam insertion heights with sleeve parked, interior scarf-gap probes, clear sleeve aperture in both card and released part, no plate overlaps, bed footprint containment, card envelope and simulated tab cutting yielding carrier + exactly three undamaged parts. This is geometry/assembly validation, not stiffness/friction/strength proof.

Browser scripts exercise real PNG/JPEG/ASCII/binary file pickers, actual downloads and Node-regenerated JSON, thresholds/pixels/depth/transforms changing output, malformed/empty/excessive/unsupported input, replace/remove/reset, holes, portable assets/named saves, undo/redo, presets, text/icons/SVG, ZIP contents, per-part downloads, view modes, theme/focus, worker abort/recovery/stale import, 320/390 px preview-first/no overflow and real touch orbit/pinch. See VALIDATION.md and generated reports for exact completed checks; do not infer an unperformed test from this description. Use installed Chrome (`channel:'chrome'`).

**Physical printing, assembly fit, friction, durability and user testing have not been performed.**
