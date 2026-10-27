# Petal & Pivot — reference-grounded kit-card studio

An original four-part, hardware-free hand-turned desktop rotor kit, not a wind-turbine performance claim. The browser generates one truly connected carrier with sixteen sacrificial tabs, plus individually printable pedestal, upright, windowed rotor and headed axle. It is not a rectangle surrounding loose pieces. All exported objects are reconstructed original solids.

## Run / publish

```
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node studio-layout-test.cjs
```

Vite base `/daily-app2/20261027-23/`. Per-app predeploy is `npm run build`, deploy is `gh-pages -d dist`; public monorepo publication must instead use root `npm run predeploy` then root `npm run deploy`. Geometry is pure JS + Manifold WASM in a debounced Web Worker. React editor/Three.js preview and binary STL/fflate ZIP share the exact current mesh. Invalid/in-flight/source-confirmation edits disable every export; a visible last-good preview never silently exports stale geometry.

## Actual reference, permissions and measured adaptation

First searched `/Volumes/ExternalHD/3d_printing_apps/` for existing STLs. The local clicker/slider/link models have no appropriate planar kit carrier; local kit-card projects contain no reference STL. Public alternative: **White Cat Kit Card**, Mike Kasberg (mkasberg), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY4.0** https://creativecommons.org/licenses/by/4.0/ verified by repository LICENSE. Download URL, exact hash, dimensions, edge-connected components and vertex statistics are in `reference-analysis.json`; reproduction script and actual mesh cross-sections are alongside it.

Binary reference:30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; assumed mm because STL lacks unit metadata, corroborated by OpenSCAD sheet dimensions. Bounds179.819997 ×178.019994 ×3.190000 mm. Two edge-adjacency components after1e-5 mm welding. Source contains coplanar/nonmanifold artifacts; not repaired, bundled or exported. Mesh sections at Z=.1,.5,1.59 and Z-plane counts show1.6 mm sheet and sacrificial bridges around .21/.22 mm. Measured frame section confirms1.6 mm rails; read README, `kit_frame.scad`, `white-cat-kit-card.scad` and LICENSE.

Preserved actual design structure: a planar sheet, carrier and removable low-profile bridges. Redesigned: four-part rotating assembly, strengthened2.4 mm frame and center spine, sixteen0.4–0.6 mm high tabs, blind pedestal mortise, upright axle seat, running rotor and headed retention. Source joint fits are NOT claimed preserved: all dimensions below are proposed new fit values, distinguished from measured sheet/frame evidence. No spacecraft/source mesh is redistributed.

Read-only visual/interaction reference: `keycap_generator2` README, styles, App, Viewer, worker, STL parser, image trace and export modules. Uses its concrete374 px left maker rail, paired mm controls, collapsible groups, tactile key-like buttons, pink selected states, large right gradient viewer, source/final comparisons, fit explanations and explicit import transforms. Phone stacks preview/export first. Fredoka/Rubik fonts are bundled locally. Coherent saved dark theme, visible keyboard focus,44px targets and reduced-motion rules. Shared local studio/import helpers adapted from the prior Daily App studio; the printable assembly and collision checks are new, not a keycap reskin.

## Parameters (all physical dimensions mm)

|Parameter|Supported range|
|---|---|
|Card X/Y envelope|180–210 each|
|Panel thickness|1.6–2.4|
|Upright height|40–48|
|Rotor diameter / windows|40–52 / integer3–6|
|Rotor silhouettes|round, hexagon, oval|
|Tongue depth|0.6–0.8|
|Running gap|0.2–0.5 total diametral and axial|
|Stationary bore fit|-0.10–+0.15 diametral offset|
|Part/runner spacing|8–12|
|Breakaway tabs|0.8–1.4 wide ×0.4–0.6 high|
|Medallion dimples|0–0.4 deep|

Pedestal diameter60. Mortise12+gap long ×panel+gap wide, peg+.2 deep, ≥.45 floor. AxleØ3.4, headØ6.4. Running boreØ3.4+gap, stationary boreØ3.4+fit. Axial clearance is gap, centered in preview with half on each side; head overlap remains≥1.25. Axle prints head-down, stem upright: **overall card Z is greater than panel thickness**, approximately5.75–8.75 depending on settings, always measured from final mesh in UI. Whole kit is bed-flat in print arrangement; it is not a constant-thickness sheet. Spacing shifts column packing and runner position without changing fit.

## Personalization and imports: local only

Desktop/phone file-picker, drag/drop and CC0 synthetic sample downloads. Never uploaded, transmitted to an API or committed as personal inputs. Local named saves keep up to six entries; JSON embeds bounded pixels/normalized image and indexed source mesh. Missing image payloads explicitly request local reattachment; STL payloads are revalidated before restore. Undo/redo and reset include imported assets. Replace/remove/reset transform controls recover without reloading.

- PNG/JPEG: content signatures/dimensions inspected before decode.2 MB,12 MP and6000px side limits. Normalize to≤500px; fit/cover and ±25% crop shift; dark/light background mode; downsample20×20 grayscale. Threshold1–254 or continuous grayscale height-map, raised depth0.4–3.0 or engraving0.4–0.6. Background checkerboard shows the actual sampled cutout; white/internal holes stay at base height, not filled with raised relief. Piecewise-linear grid top, perimeter walls and solid bottom form a closed height-field solid; boolean-union into or subtract from an isolated pedestal well. **2D-to-relief, not reconstruction of a full3D object from one photograph.** Text≤8 chars and six searchable bundled original SVG marks use the identical geometry pipeline. SVG supports≤2000 simple filled path/shape elements, rasterized locally; external resources/scripts/references/effects/text rejected, even-odd holes preserved in sampled relief.
- STL: actual ASCII/binary parser;≤1500 triangles,2 MB,0.2–250 mm each source axis. Shows source format/dimensions and original mesh, explicit mm confirmation (STL has no metadata), Z/Y/-Z up selection, proportional XY footprint4–7 mm, independent Zheight0.6–3 mm, rotation±180°, X±1.5/Y±2 mm placement. Source must be one outward, closed manifold, positive-volume, non-self-intersecting **convex broad-flat-bottom solid without overhangs**. Concavity/cavities/thin branches/multipart input is explicitly unsupported and rejected; no hull replacement, flattening, silent repair or unchanged re-export. Up-axis changes require reattachment. Transformed original triangles become an actual solid boolean-unioned into the pedestal; min XY section1.2, safe radius6.5. Imports never modify moving fit surfaces. Source Z independently normalized to grip height; this nonuniform transformation is explicit.

Bounds/file/triangle/transform errors are recoverable. Final worker checks finite coordinates, nondegenerate faces, outward positive volume, paired edge incidence after1e-5 welding and one connected solid per export. Heavy parse/CSG runs off-thread;20×20 image grid and triangle cap bound cost. Export uses real solids, no texture-only marks and no interpenetrating-shell fake union.

## Printing, assembly and calibration

1. Print connected card OR four individual parts, not both. PLA/PETG,0.4 nozzle,0.2 layers,three walls. Panels flat; axle head on bed, stem vertical. No supports intended. Tall small stem needs slow speed/cooling. No magnets, screws, switches, bearings or other hardware.
2. Snip16 tabs about2mm outside parts, remove nubs, discard frame. Functional bores/tongue/mortise are nowhere near cuts. Printed tabs are0.4–0.6 high; use flush cutters/adult handling.
3. Seat upright vertically in pedestal blind slot until shoulders rest on face; removable, non-captive base connection.
4. Hold rotor in front of upright; insert axle through its free bore into upright. Head retains rotor only while calibrated stationary fit keeps axle seated. Negative fit is intentional stationary interference, never imposed on rotor. Calibrate one set first:0.30 running gap,0.00 stationary fit are starting values only. Deburr or increase stationary fit0.05 if tight; decrease if loose, never force/snap tiny stem. Positive stationary allowance may be loose on accurate printers; do not claim reliable retention without calibration. Pull axle out to disassemble.
5. Hand-turn on a level desk, no external load. Rotor rotation and upright separation controls are geometric assembly illustrations, not force/friction/duration simulations. Nothing claims wind-driven rotation.

Connected-card, de-tabbed plate, assembled/exploded and all four isolated views use the same underlying solids. Per-part binary STL and Everything ZIP (card+four parts+numbered assembly.txt) are genuine geometry. STL has no colour; assign colour in slicer. UI X/Y/Z is actual selected export bounds, not assembly envelope.

## Validation and limits

`validate.mjs` independently parses exported binary bytes: size/count, finite coords, nonzero triangles, normalized agreeing normals,1e-5 welded edge incidence with opposite directions, connected components, each positive volume, expected bounds and bedZ=0. Tests defaults, all three presets, min/max,9 variations and30 image/STL combinations. Boolean checks sweep rotor across13 angles; all unintended intersections≈0; only negative stationary fit intentionally overlaps upright. Tests vertical upright assembly, real bore gauges, head overlap, floor, exact card containment, part separation and16 real cuts yielding carrier+4 components.

Browser scripts exercise production workers/WASM under actual base path, PNG/JPEG/ASCII/binary file imports, geometry-changing threshold/depth/pixels/transforms, source removal/reset, invalid/truncated/open/nonmanifold/concave/excessive input, empty relief, stale result gates, JSON/named roundtrips, undo/redo, presets, shapes, text/icons, SVG hole probes, ZIP contents, theme, collapsed sections/focus, phone320/390 no overflow and touch orbit/pinch. Reports/screenshots are recorded with actual outcomes. Reference source is computationally inspected; **no physical print, assembly, fatigue, retention force, stability or spin-duration test has been performed**. Watertightness and sampled geometry collisions are not empirical printability guarantees. First print/calibrate one set before using a full card.

Dependencies: React/Vite, Three.js (MIT), Manifold3D (Apache2), fflate (MIT), Fontsource Fredoka/Rubik (OFL); Playwright for local tests. No remote generation services, API keys or CDN runtime assets.
