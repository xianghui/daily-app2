# Coulomb & Twist

A browser-based parametric **three-part kit card for a single-fiber torsion-balance experiment**. Snip twelve real runners, bond a U-shaped portal into two blind mortises, and suspend a symmetric dumbbell from one externally supplied fine fiber. Twist gently, then release. The intended restoring mechanism is **elastic fiber torsion**, not a two-cord gravity-rise pendulum. Fiber material, knots, creep and damping determine actual response; no quantitative Coulomb-force measurement or simulated oscillation is claimed.

## Run and dependencies

```sh
npm install
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
```

React + Vite; Three.js/OrbitControls; Manifold WASM in a Web Worker; fflate ZIP; locally bundled Fredoka/Rubik fonts. Base `/daily-app2/20261106-2/`. No API keys, paid services, CDN assets or uploads. Production test server: `http://127.0.0.1:5992/daily-app2/20261106-2/`.

Shared import/export, studio, worker and test infrastructure is adapted from previous local daily apps; **the torsion assembly and its fit/sweep checks are new**, not their linkage geometry. The read-only Keycap Studio README, App.tsx, Viewer.tsx, styles.css, worker, STL parsing/export and imageTrace modules were inspected: compact scrollable left panel, raised selection keys, source/cutout previews, exact-result export gating, responsive right viewer, saved theme and part views informed this implementation. No reference Git history or dependency tree was copied.

## Reference evidence — actual STL, not an image

Selected model: **White Cat Kit Card**, Mike Kasberg, [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Upstream README/license were fetched afresh into `evidence/`. An accessible existing public cache `/tmp/20261103-white-cat.stl` was freshly parsed and cross-sectioned; no new STL download or private source is claimed. Raw source mesh/artwork is **not redistributed**.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles, 179.820 × 178.020 × 3.190 **assumed mm**; STL contains no unit metadata.
- Two edge-adjacent components; 57 anomalous edges. Source is not claimed repaired or print-ready.
- Actual mesh sections at Z=.100/.215/1.590 mm are recorded as SVG/PNG; four measured 4.50 × 1.70 mm socket loops survive each section. Principal sheet is 1.60 mm; low runner tops .21–.22 mm.
- Local keycap switch template and diamond fabric link were parsed first, then rejected as inappropriate MX/interlocked-lattice structures for a bed-flat sheet kit. Their hashes, bounds and components are in `reference-analysis-raw.json`.

**Retained source structure:** pierced sheets, connected outer carrier and interior dividers, accessible low breakaway connections, nominal 1.60 mm sheet and socket-width-based 4.50 mm interfaces. **Redesigns:** the measured 4.50 mm socket length is used as the new nominal tongue width (not claimed to be a measured source tongue); sockets are enlarged by a proposed total .10–.30 mm clearance. At 1.6 mm sheet and .10 allowance, their thickness matches the measured 1.70 mm. New sockets are blind with .80 mm floors; the source socket is not claimed blind. Tongue insertion depth is sheet−.90, socket depth sheet−.80, leaving .10 mm vertical gap. Runners are strengthened to .4–.6 mm. Portal, fiber routing, dumbbell and swept clearance are original parametric reconstruction. See `reference-analysis.json` for concrete mappings.

Reproduce source parsing: `python3 reference-analysis.py /path/to/white-cat-kit-card_kit.stl`. Reference trees are read-only. Mesh inspection and computational checks are **not physical print testing**.

## Parameters — all lengths in millimeters

| Control | Supported range / meaning |
| --- | --- |
| Card envelope | 150–220 × 210–260; model must fit chosen envelope |
| Portal clear span | 62–78; upright width 6 |
| Portal rise | 64–84 above seated shoulders |
| Fiber drop | 28–42 from upper eye center to dumbbell top; **assembly setting**, not printed material |
| Dumbbell span | 40–54; equal 6-radius end lobes and 5-wide connecting beam |
| Sheet | 1.6–2.4 |
| Total socket clearance | .10–.30 in X and Y; not per side |
| Spacing | 3–5 minimum bay allowance |
| Breakaway tabs | .8–1.2 wide, .4–.6 high; four per part |
| Thread eyes | 1.80 diameter |
| Apron artwork | 4–7 footprint, .4–.6 depth, ±180° rotation, X ±1.5 / Y ±2 offset |

Ground outlines: soft round, chamfered and scalloped. Three real generated-thumbnail presets; paired slider/number inputs, reset, undo/redo, six local named designs and portable JSON. Every source must be valid and current before export; invalid edits can retain an explicitly identified last-good preview but **cannot export it**. Worker id/state-key guards also cover pending image conversions/imports and worker errors.

## Assembly, retention and calibration

Print connected card **or** clean parts flat at Z=0, PLA/PETG, .16–.20 layers, .4 nozzle. No supports intended. Start with the full-size portal and ground as a calibration pair. The .10–.30 mm socket allowance depends on printer/material, not a universal fit. Snip twelve accessible runners, trim scars, clear eyes and sockets. Insert both portal tongues vertically until shoulders seat on ground; bond with compatible adhesive and cure. **Portal retention requires adhesive**; no snap-fit or friction lock is claimed.

Required consumables: one fine torsion fiber such as **.10–.25 mm nylon monofilament**, tape and adhesive. Thread the upper 1.8 mm eye, secure the tail by knot/tape, and lead the descending fiber about 2 mm in front of the portal face. Thread the dumbbell center eye, secure a stopper knot below and a small tape patch against slip. Set chosen free drop; total cut length also needs knot/tail allowance. Level the beam manually because knots/tape add mass. Beam Z=rise−3−drop, axis Y=−sheet/2−2; top eye Z=rise−3+sheet, making selected free drop exact to beam top. Twist gently within ±90°; the preview can inspect 360° but is **not a dynamics simulation**. Some thread types may slip, creep or provide little torsional return. Physical response, printing, fit, strength, fatigue and wear have **not been tested**.

Computational sweep checks maintain >=4 mm radial portal gap and >10 mm vertical gap over supported ranges. Those geometric checks do not predict stability, fiber stiffness or forces. Knots/tape are external retention, not invisible printed bearings. Adult tabletop experiment, not a measurement instrument or load-bearing product.

## Image → actual Boolean engraving

PNG/JPEG mandatory; safe simple SVG also accepted. <=2 MB, <=12 MP, <=6000 px side. Bitmap metadata is checked before decode; portable bitmap normalized to <=500 px, then sampled **20×20** with contain/crop, ±25% pan and light/dark background polarity. Transparent pixels composite onto selected background. Threshold 1–254 creates binary sampled depths; grayscale uses luminance-dependent heights. A closed triangulated cutter is Boolean-subtracted from the protected ground apron. Bright holes preserve full backing; checkerboard shows the actual sampled cutout. This is **2D-to-relief**, not exact contour tracing or full 3D reconstruction from one photo. Empty silhouettes are rejected. Text and six searchable bundled SVG marks use the same conversion path.

Engraved-only .4–.6 mm is deliberate to maintain flat card thickness. Footprint, depth, rotation and placement alter the exported solid, not a preview texture. Keep-in radius 5.8 mm protects sockets and outside walls, leaving >=1 mm backing. Source and final previews, replace/remove/reset and synthetic PNG/JPEG/SVG samples are provided.

## STL → actual mesh-shaped engraving

Binary and ASCII .stl <=2 MB / <=1500 triangles; each source dimension .2–250 **assumed mm**. Explicit user confirmation of mm is required because STL has no units. Choose Z/Y/−Z up before attaching; dimensions and source mesh are shown. XY scales proportionally to selected footprint; Z independently fits engraving depth; both scale factors are displayed. Rotate/place/center/reset, then **original source triangles** cut a recess in the ground. No convex hull replaces the imported geometry, and this is not unchanged re-export.

Strict supported contract: one closed, outward-wound, **convex broad-flat-bottom solid with no overhang**. Concave, hollow, disconnected, open/nonmanifold, degenerate, self-intersecting and unsupported overhung geometry is explicitly rejected with guidance, not silently repaired. A validation-only bed-footprint hull is not an exported replacement. Checks bound size, transforms, triangles, topology, orientation and dimensions before heavy CSG. Source/threshold/scale/placement changes are compared against default exports in real browser tests. Synthetic ASCII wedge and binary gem samples are bundled.

All files remain local. JSON/local named designs carry bounded bitmap/mesh payloads; malformed or missing payloads require reattachment rather than pretending restoration. No personal files are stored in this repository.

## Views and exports

Assembled, exploded, connected flat card, de-tabbed print plate and each isolated part use the **same current generated meshes**. Thread-routing line is explanatory non-exported geometry. Pose and preview colors do not change STL; STL has no colors. Current export dimensions and mesh fingerprint appear below the viewer.

Binary per-part STL buttons, connected-card STL, clean plate, and Everything ZIP: four closed single-component STLs (card plus three parts), portable design JSON, numbered print/assembly instructions and SVG assembly map. No misleading 3MF labeling.

## Validation

`validate.mjs` independently checks actual float32 STL serialization: exact count/length, finite coordinates, nondegenerate faces, normalized/winding-consistent normals, expected mm bounds, welded undirected edges with exactly two opposite faces (1e-5 mm weld), and positive volume **per component**. Final worker geometry also undergoes solid checks; kernel tolerance .001 mm is below printable features.

37 generated cases cover defaults, every preset, three outlines, each parameter endpoint, combined extrema, and image/STL-derived defaults and extrema. Each exported part and translated loose plate is checked. Independent Manifold probes verify card envelope, one connected card, twelve removable runners, exact carrier+three-part release after snips, undamaged parts, no floating overhang in supported flat sheets, blind socket floors, clear eyes/sockets in the card, insertion path and full-rotation body/fiber clearance.

Browser suites exercise real PNG/JPEG/ASCII/binary STL file-picker imports and actual downloads, compare mesh bytes with visible fingerprints and JSON-regenerated models, vary pixels/threshold/depth/fit and STL scale/rotation/placement, test errors/recovery, portable assets, ZIP contents, every preset/outline/icon, theme, collapse/focus, worker abort/reload, stale imports, forced late ResizeObserver callbacks after source-preview unmount, and 320/390 px touch orbit/pinch/no-overflow. Results and screenshots are stored beside scripts; see `VALIDATION.md`. **Only checks actually completed are reported there; none imply a physical print test.**
