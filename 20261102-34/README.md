# Harmonic & Overhang

A local React + Vite parametric **physical kit-card generator**. Snip 32 actual removable runners, seat two supports in four base sockets, then gravity-stack five equal planks beyond the front edge. Eight clean parts, one connected card, and an intentionally non-captive assembly. Not a browser game.

## Run / build

```
npm install
npm run dev
npm test
npm run predeploy
```

App base `/daily-app2/20261102-34/`. Per-app `deploy` uses gh-pages; the published combined site must use the repository ROOT predeploy/deploy flow, not this per-app command. No server/API key is needed for geometry, imports, viewing or downloads. Fonts, Three.js, Manifold WASM and fflate are bundled locally.

## Reference-first provenance

Local collections inspected first: `keycap_generator2/public/templates/clicker_template2.stl` (three switch-related components, 15.20 × 15.20 × 43.10 mm) and `fidget_fabric_generator/public/templates/diamond-link.stl` (one interlocking link, 7.981 × 9.241 × 8 mm). Their READMEs and actual meshes were inspected; neither supplies bed-flat sheet-kit joints/carriers. No suitable local sheet-card STL was found in the scanned collections.

Selected public reference: **White Cat Kit Card** by **Mike Kasberg**, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source README/license are retained. Actual downloaded binary STL SHA-256:
`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

Parsed 30,616 triangles; bounding dimensions 179.820 × 178.020 × 3.190 mm. STL has no units: millimeters are assumed and corroborated against source construction. 27 edge-adjacent components including 25 tiny two-face artifacts; source is not watertight. It is a design reference, not a repaired/exported asset. Actual Z=.10/.50/1.59 mm cross-sections appear in `evidence/reference-sections.png`; four measured sockets span 4.500 × 1.700 mm. Main source sheet planes Z=0/1.600, low runners .21–.22 mm. Full component bounds, hash and rejected-local-reference measurements are in `reference-measurements.json` and `reference-analysis.json`. Reproduce with `reference-measure.py <path-to-reference.stl>` using trimesh/numpy/matplotlib; raw reference is not distributed.

**Adaptation:** retain default 1.60 mm sheet and 4.50 mm socket length. Proposed printer-dependent .30–.60 mm total gaps replace the source ~.10 mm sheet/socket difference; tongue width =4.50−gap, short socket width=sheet+gap. Strengthened .40–.60 mm runners, .80–1.20 mm wide, intersect the frame and nonfunctional outer edges. Original base, supports and planks reconstructed using real Manifold booleans. This is NOT the original spacecraft, a hull substitution, or a cosmetic re-export. No private mesh bundled.

Visual/interaction reference, read-only: `keycap_generator2` README, styles, App, Viewer, worker, STL/export/image modules. Concrete patterns adopted: 374 px left control panel and right live stage, preview-first stacked phone layout, lavender-grey desk/white panels/coral tactile keys, paired numeric/range fields, collapsible labelled controls, checkerboard conversion, source dimension/axis editor, assembly/print views, saved theme, local designs and exact-current-result worker export gating. Existing daily_app2 studio infrastructure adapted; new physical geometry and verification are specific to this kit.

## Parameters and mechanics (all physical dimensions mm)

| Parameter | Range |
|---|---|
| Card width / height | 210–260 / 190–240 |
| Plank length / breadth | 42–56 / 18–24 |
| Support height | 16–24 |
| Sheet | 1.6–2.4 |
| Total socket clearance | .30–.60 |
| Part spacing | 3–5 |
| Runner width / height | .8–1.2 / .4–.6 |
| Harmonic fraction q (dimensionless) | .60–.85 |

All five planks are exactly the same rectangular solid L×B×sheet, with no personalization, holes or labels to change mass. Bottom-to-top right edges: accumulate qL/10, qL/8, qL/6, qL/4, qL/2 from forward support edge X=0. Total top reach qL·H₅/2 (default **41.10 mm**). At every interface the upper-stack centre is q-adjusted to remain behind the supporting edge by (1−q)L/2 (default **6 mm**). The left edge and transverse footprint are checked too. Two support top strips have a convex support hull X=[−18−sheet,0], Y matching plank breadth. Preview retraction interpolates to the support-centred stack without changing printable parts. The harmonic fraction changes the actual assembly offsets, not plank STL dimensions; card geometry parameters and imports change STL geometry.

Support tongues enter vertically, shoulders seat on the board, tongue tips end at Z=0. **Adhesive required**, not self-locking/press-fit. Print a clean support/base pair to calibrate first. Five planks are deliberately loose and removable, not retained; stack bottom first by lowering from above. Identical material, 100% infill and print settings required for the uniform-mass calculation. Keep level, stationary and unloaded. Static computation is not a physical stability, friction, strength or printer-fit guarantee.

## Personalization / local imports

Protected base-only signature zone (25,−12), keep-in radius6.5, >=1 mm backing. Multiple base silhouettes, three real model-thumbnail presets, bounded variations, searchable six bundled vector marks, up to eight text characters. Art is **engraved only** to preserve sheet height and protect all joints and uniform plank masses. Preview colours do not enter STL.

**PNG/JPEG** validated by magic/header before decode; <=2 MB, <=12MP, <=6000px/side. Normalized <=500px; exact 20×20 luminance samples generate a closed height-field solid. Threshold mode uses binary selected heights; grayscale uses proportional depth. Fit/cover, crop shifts ±25%, light-background removal/dark inversion, threshold1–254, .4–.6 mm depth, footprint4–7 mm, rotation±180°, offsets X±1.5/Y±2. Bright interiors preserve backing/holes, as independently probed in tests. The triangulated samples interpolate between pixels; this is **2D-to-relief/silhouette conversion**, not full 3D reconstruction or exact contour tracing. Actual cutout is shown on checkerboard beside original source. Background, threshold, content and transforms alter real Boolean engraving, not texture.

**SVG** simple local paths/primitives, <=2000 nodes, <=2 MB, no scripts/resources/filters/text/hrefs. Rasterized locally256px then same bounded conversion. Explicit errors for unsupported content. SVG holes retained in sampled backing. Synthetic ring.svg demonstrates this.

**ASCII/binary STL** <=2 MB, <=1500 triangles, one connected outward-wound closed convex solid, .2–250 mm per axis, broad flat base and no XY overhang beyond bed footprint. Explicitly confirm mm because STL has no units; choose Z/Y/−Z up before attachment. Source preview shows oriented dimensions. XY proportional footprint scaling, independent Z engraving-depth scaling, Z rotation and XY placement are visible and reported. Exact verified imported mesh is Boolean-subtracted into the fixed base; unchanged re-export is not the integration. Concavities/cavities/open/nonmanifold/self-intersecting meshes unsupported and clearly rejected, never replaced by a convex hull or silently repaired. Conservative convex-only contract is documented rather than pretending arbitrary-mesh support.

Source replace/remove, centering/reset and return-to-defaults work locally. All input files stay in browser memory; no external requests/uploads or personal files saved in repository. Bundled fixtures are synthetic (`public/samples/ATTRIBUTION.txt`). File picker on desktop/phone and drag-drop for supported devices. No external CDN/API.

## Views, state and exports

Connected card, exact assembled, illustrative exploded, de-tabbed plate and all isolated parts share current valid worker geometry. Orbit/zoom/fit/top and touch pinch. Dark/light preference saved. Undo/redo, six named local designs, JSON save/open with bounded portable normalized image/verified mesh payloads; missing image payload explicitly asks reattachment. Local-storage quota errors are recoverable. Worker owns WASM and heavy CSG, 100ms debounce, sequence guards, status/error states; current-state key gates exports immediately during edits, pending conversion or invalid input. A visible last-good preview is labelled and never silently exported after invalid edits.

Binary STL per part; prominent current-selection download; Everything ZIP contains real connected card + eight individual clean STLs, portable JSON and numbered assembly instructions with current fit/balance values. Export orientation is always bed-flat Z=0, independent of assembled view. No fake 3MF/colour promises.

## Verification / printing

`npm test` independently parses binary STL: count/byte length, finite coordinates, normalized normals/winding, nonzero triangles, welded 1e−5 mm opposite-directed two-face edge incidence, per-component positive volume, exact bounds. Checks every clean part, card and float32-translated plate. Manifold tests true pairwise assembly intersections, support insertion and bottom-up stack paths, 11 retraction poses, actual exported-mesh volumes/centres of mass at each contact polygon, whole assembly COM, support-free sliced footprints, 32 tab cuts releasing carrier+8 intact parts, all presets/silhouettes/field extrema and image/STL-derived outputs. Geometry checks do NOT prove a physical print.

Browser scripts exercise production assets at actual base prefix: real PNG/JPEG/ASCII/binary picker imports and actual downloads checked against exact current UI signature and independent Node regeneration; changed pixels/threshold/depth/scale/placement, resets, invalid/truncated/excessive/nonmanifold/unsupported inputs, exported ZIP members, portable saved designs, worker failure and stale-result gating, phone320/390px no overflow, touch orbit/pinch, views/theme/focus/collapsible controls. See JSON reports, screenshots and VALIDATION.md for observed results.

Print all planks at 100% infill with identical material/settings; .4 nozzle, .16–.20 layers, >=3 walls. Clip/file runners outside edges, preserve identical plank dimensions, dry-fit/glue supports and cure upright. Use a ruler to set reported offsets. Loose pieces may fall. No metal hardware; plastic-compatible adhesive needed. No physical print, slicer validation, force, wear, friction or stability experiment performed.
