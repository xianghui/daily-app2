# Morley & Thirds

A browser-based **four-part connected kit-card generator** for a physical Morley-theorem construction. Snip sixteen real runners, glue two calibrated feet into a scalene-triangle stage, place its loose central inset and lace six angle-trisector threads. The three near-side intersections always bound an equilateral triangle. Customize actual baseline, altitude and apex displacement, not just a static model or label.

The gallery and archived app READMEs were checked for duplication. This is not the earlier tomahawk/neusis marking tool, Routh pivot-arm kit or orthographic projection screens: it has six trisectors, nine lacing holes, a ray-intersection pocket and loose equilateral inset. The studio/import/export shell adapts existing local infrastructure; geometry and mechanical validation are specific to this assembly.

## Run and dependencies

Node 22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`.
React + Vite, Three.js/OrbitControls, Manifold-3D WASM, fflate, locally bundled Fontsource Fredoka/Rubik, gh-pages; Playwright for browser verification. All generation/export libraries, fonts and WASM are bundled; no API, CDN, server upload, payment or key required. Base `/daily-app2/20261104-4/`.

Individual scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. The combined public site must deploy from the ROOT monorepo `deploy/`, not the individual app deployment command.

## Reference first — actual inspected STL

Local `/Volumes/ExternalHD/3d_printing_apps/` models inspected read-only FIRST: Keycap Studio README, styles.css, App.tsx, Viewer.tsx, worker.ts, imageTrace.ts, export.ts and geometry/stl.ts; Fidget Fabric and Passthrough READMEs; actual Keycap switch and fabric-link meshes parsed. Switch template: 944 triangles, three components, 15.20 × 15.20 × 43.10 mm; fabric link: 5,940 triangles, one component, 7.981 × 9.241 × 8 mm. These are not sheet/carrier references.

Downloaded and parsed **White Cat Kit Card**, **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. README/LICENSE and `flat_clip.scad`/`kit_frame.scad` inspected. `REFERENCE-LICENSE.txt` and `REFERENCE-UPSTREAM.md` preserve attribution. No endorsement implied. Raw source STL is NOT redistributed.

Binary STL SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. 30,616 triangles, **179.820 × 178.020 × 3.190 mm**, **27 edge-adjacent components**, not fully watertight. Millimeters inferred and corroborated by upstream 1.6-mm sheet code; STL itself has no units. Source defects are not automatically repaired or re-exported.

Fresh mesh measurements and Z=0.10/0.50/1.59-mm cross-sections: `reference-measurements.json`, `evidence/reference-sections.png`; reproducible `reference-measure.py <external-STL>` (trimesh/numpy/matplotlib). Measured sheet planes 0/1.60 mm, socket loops **4.50 × 1.700012 mm**, low runner tops **0.21–0.22 mm**. `reference-analysis.json` maps these to real dimensions:

- Four new **4.50 mm-wide** straight tongues, actual sheet thick; default **4.65 × 2.55 mm** slots at 2.4-mm sheet/0.15-mm TOTAL clearance. Clearance 0.10–0.30 mm is proposed, not a measured universal fit.
- Sheets strengthened to **2.2–3.0 mm**, bed-contact runners to **0.4–0.6 mm** high / **0.8–1.2 mm** wide. Original partitioned carrier contains sixteen real CSG-unioned runners, not loose parts next to a rectangle.
- Source ledged clips are deliberately NOT copied. Four straight foot joints require adhesive. The inset is lift-out and gravity-seated. Original design uses ray intersections and exact solid booleans, not source triangles or a convex hull.

Concrete Keycap Studio patterns: 374px left scrollable rail/right gradient viewer, compact sticky brand, labelled collapsible sections, paired sliders/mm inputs, tactile lower-shadow buttons and depressed selections, lavender desk #e7e9f1, white panels, ink #1f2233, coral #e2557a, local rounded fonts, saved dark theme, imported-source inspector/checkerboard and current-result export gating. Phone preview first with reachable exports and stacked controls. Reference trees unchanged; no Git history or dependency tree copied wholesale.

## Geometry and supported ranges

Physical units are **millimeters**, angles degrees. Card width 180–240; height 220–280; triangle baseline 60–90; altitude 45–75; apex X offset −12…12; foot height 8–16; thread bores 1.5–2.5; sheet 2.2–3.0; spacing 3–5; runner width 0.8–1.2, height 0.4–0.6; total socket clearance 0.10–0.30. Three genuine model-thumbnail presets, three stage silhouettes, bounded variations, reset, undo/redo, six named local saves and portable JSON.

A=(−baseline/2,−altitude/3), B=(baseline/2,−altitude/3), C=(apex offset,2×altitude/3). Each vertex has two internal trisectors derived from the signed angle divided by three. Near-side trisectors from adjacent vertices intersect at the three pocket corners; the SAME rays extend to the opposite triangle side to locate six anchors. Three vertex bores plus six anchors = nine holes. Shallow engraved lines identify all six pairings. An independent check compares the three computed inner side lengths; the pocket is not assumed to be an equilateral primitive.

Inset is offset inward by **half the selected clearance**, with 3-mm lift hole; height=sheet−1.2, minimum1.0 mm. Pocket backing **1.15 mm**, inset top **0.05 mm below stage**. Clearance/lift hole reduce actual inset material area: ideal theorem and mesh area are not interchangeable. Selected ranges avoid a vanishing central triangle; unsupported dimensions, unsafe imports or disconnected results block export.

## Image / SVG / legend workflow

Desktop/phone picker and one-file drag/drop; actual **PNG/JPEG**, simple sanitized SVG, up-to-eight-character text and six searchable original icons. Source and checkerboard conversion preview. All become real **engraved geometry**, not textures. Raised mode is deliberately omitted to preserve the protected flat-sheet envelope.

Limits: 16 bytes–2MB/file; PNG/JPEG headers checked before decode, ≤12MP and6000px per side, normalized ≤500px. Simple SVG ≤2000 elements, no scripts/external resources/references; rasterized locally to256px. Text uses bundled Rubik; SVG/icon fills and holes pass through local raster conversion.

Method: contain/cover crop, ±25% X/Y pan, light/transparent-background removal or dark inversion, 20×20 luminance samples. Threshold1–254 gives foreground cutter heights; grayscale gives proportional depth. A closed triangulated heightfield with sides/back is Boolean-subtracted from the stage apron. Depth0.4–0.6 mm; ≥1.6 mm sheet backing at minimum sheet. Bright interior holes remain unengraved rather than filled. It is sampled **2D-to-relief conversion**, not exact outline tracing or automatic full3D reconstruction of an object from a photo. Fine features below grid resolution may disappear. Pixel/threshold/depth/crop changes alter exported geometry.

Placement: footprint4–7 mm, rotation±180°, X±1.5/Y±2 mm, all vertices inside protected radius6.5 mm. Actual apron centre `(0,−altitude/3−10)`; safe from triangle/feet. Invalid placement blocks export, never silently clips art. Replace/remove, reset image controls, centre/reset transformations and built-in defaults work.

## Imported STL workflow

Both **ASCII and binary .stl**, ≤2MB, ≤1500 triangles, source dimensions0.2–250 mm each axis, one closed outward-wound connected solid. Explicitly confirm millimeters: STL has no unit metadata. Z/Y/−Z-up selection before attaching; source3D preview/dimensions/triangle count/format. Scale proportionally in XY to the chosen4–7 mm footprint, independently in Z to0.4–0.6-mm engraving depth; displayed scale factors, rotation, centre and X/Y placement controls. The exact accepted mesh becomes the Boolean cutter in the stage, not an unchanged re-export.

Supported contract: **convex, broad flat bottom, no overhang footprint**, resulting minimumXY span1.2 mm. Original vertices/faces are used; no convex-hull substitution. Concave/hollow/open/nonmanifold/disconnected/self-intersecting/inward/degenerate/oversized meshes are rejected with actionable guidance, not claimed repaired. Topology/winding/triangle intersection/support checks precede CSG, in the worker. Up-axis change clears source and requests reattachment.

## State, exports and privacy

Only synthetic CC0 fixtures in `public/samples`; no private uploads or raw third-party meshes. User files stay on-device, never uploaded. Bounded normalized image data and accepted mesh vertices survive JSON and named designs; missing payload explicitly requests reattachment. JSON≤2MB, image≤250000px /1.8M data-URL characters, mesh≤1500triangles.

Worker generation is bounded and debounced with request IDs and exact current-state key. Preview/export share the identical checked result. Invalid edits may display the labelled last-good preview but disable all exports; no silent stale mesh. Worker load failure reports error and blocks export until reload.

Assembled, exploded, connected-card, de-tabbed plate and four isolated views use the same solids. Feet/tile assembly transforms are exact. External thread crossing heights and exploded gaps are illustrative, not exported or force/sag simulations. Touch/mouse orbit, zoom, fit, top/front views; STL colours are preview only.

Prominent connected-card / individual binary STL downloads and **Everything ZIP**: connected card, four clean STLs, portable designJSON and numbered `ASSEMBLY.txt` with current fits. De-tabbed plate has four intentionally separate closed solids. No fake3MF. Selected X/Y/Z dimensions reflect actual export. All print exports bed-flat atZ=0.

## Print and assembly

Default card180×220mm; choose individual parts for smaller beds. PLA/PETG,0.4mm nozzle,0.16–0.20mm layers,3+ walls,100%mm. No supports intended. Snip sixteen runners1.8mm outside part edges, smooth stubs, protect tongues. Calibrate one foot/stage dry-fit first; clearances depend on printer/material, not universal.

Insert feet upward, glue four straight joints and cure. Lower loose inset. Lace **six0.2–0.4mm threads** from two rays at each vertex to the paired opposite-side holes, following engraved guides; two threads share each vertex hole. Knot/tape underneath. Use slight slack, not tension. Relax/remove thread before lifting inset with a blunt pick. Adhesive/tape/thread external; no metal hardware. Small parts/cut stubs are not children's toys.

**No physical print, fit, bond, tension, fatigue, strength or accuracy test performed.** Computational checks do not establish physical performance. Complete numbered notes appear in-app and ZIP.

## Verification

`npm test`: independent float32 STL parser checks file length, finite vertices/normals, nondegenerate faces,1e-5-mm vertex welding, exactly two opposite faces per edge, positive volume per component, dimensions andZ=0. Every default/preset/field endpoint/min/max/shape, PNG-style threshold/grayscale and exact ASCII/binary imported cutter variants receive both mesh and assembly checks. Card bounds, one connected component, sixteen cut runners releasing carrier+four parts, no damaged parts, nonoverlapping flat/assembled solids, four socket alignments, foot upward/inset vertical insertion, nine holes, inset per-edge gap and Morley equal-side identity. Upper cross-sections checked against bed footprint.

Browser scripts exercise real pickers/downloads and parse their bytes; reconstruct savedJSON in Node and compare exact preview/download fingerprints, run assembly checks for imported outputs. Include PNG/JPEG/SVG, ASCII/binary STL, threshold/crop/depth/transform effects, malformed/truncated/open/nonmanifold/concave/excessive/empty inputs, reset/recovery, presets/text/icons, JSON/named-state roundtrips, ZIP contents, undo/redo, stale-result/worker failures, isolated views and320/390px touch orbit/pinch/mobile reachability. See JSON reports, `VALIDATION.md` and `evidence/` screenshots for executed results. No physical-testing claims.
