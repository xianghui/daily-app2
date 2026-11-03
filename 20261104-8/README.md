# Benham & Chroma

A reference-grounded **four-part flat-pack optical kit**: signature base, two-tongue axle tower, recessed Benham-type wheel and loose axle spacer. Snip sixteen real runners from a single connected carrier, bond the stand, paint the actual recesses black on white plastic, then turn the rim by hand. Custom track count, radius, angular sweep and phase change the exported pattern. This is a custom half-annulus variant, not an exact historical top. Subjective colours depend on observer, speed and light; they are neither guaranteed nor simulated.

**No physical printing, hardware fit, balance, adhesive strength, bearing friction or optical effect has been tested.** Geometry checks are not physical validation.

## Run / build

Node 22.12+; `npm ci`, `npm run dev`. `npm run predeploy` builds all local dependencies, fonts, worker and WASM to `dist/`. Vite base is `/daily-app2/20261104-8/`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public collection publishing uses the **root** predeploy/deploy flow, never this standalone script.

## Reference-first evidence

Local candidates were inspected read-only before using a public sheet-kit reference. `keycap_generator2/public/templates/clicker_template2.stl` is three switch parts, unsuitable for sheet assembly; the fabric template is an 8 mm interlocking link, also unsuitable. Actual local STL hashes, dimensions and components were measured, not inferred from filenames. Relevant keycap/fabric READMEs were inspected.

Selected mesh: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream project](https://github.com/mkasberg/white-cat-kit-card), CC BY 4.0. See `REFERENCE-LICENSE.txt`, `REFERENCE-UPSTREAM.md` and exact download URL in `reference-analysis.json`.

- Independently downloaded and parsed binary STL: 30,616 triangles; 179.820 × 178.020 × 3.190 mm; 27 edge-adjacent components; not watertight. It is a **design reference**, not an input we claim to repair.
- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- STL has no unit metadata; millimeters assumed and corroborated by source OpenSCAD dimensions.
- Actual Z=0.10/0.50/1.59 mm cross-sections in `evidence/reference-sections.png`; full per-component and socket evidence in `reference-measurements.json`. Main sheet 1.60 mm, sockets 4.50 × 1.700012 mm, low runners 0.21–0.22 mm. Source `flat_clip.scad` corroborates 4 mm male clip, .25 mm extra each side and 1.6+.1 mm slot thickness.
- New tongues are **4.50 mm straight rectangles**, using the measured SOCKET span as a deliberate new baseline, not an unchanged 4.00 mm source latch. New slots `(4.50+c) × (sheet+c)`; c is total clearance, not per side. Two joints require glue, not snap retention. Stronger 2.2–3.0 mm sheet and .4–.6 mm runners are documented redesigns.
- Original CSG reconstruction: no spacecraft outlines, source snap-latches or raw third-party STL bundled. Source defects are not inherited. No convex-hull substitution.

The visual/interaction reference is read-only `keycap_generator2`: inspected README, styles, App, Viewer, worker, exporter, image conversion and STL modules. Applied concrete patterns: 374 px left editor, preview-first phone stacking, paired range/numeric fields, collapsible sections, keycap-like tactile buttons, soft pink selection, checkerboard cutout, explicit imported dimensions/units, worker state and current-result export gating. Generic Daily Object Lab studio/packing/parser infrastructure is reused; the patterned rotor, tower, shaft stack and fit/motion tests are new, not a cosmetic mechanism reskin.

## Parameter ranges

All fabrication dimensions in **millimeters**. The UI and `src/geometry.js` define validated bounds:

| Control | Supported range |
| --- | --- |
| Card width / height | 160–220 / 220–250 mm |
| Wheel radius | 23–32 mm |
| Base span / depth | 68–88 / 36–44 mm |
| Arc tracks | 3–5 integer |
| Arc sweep / phase spread | 20–60° / 0–70° |
| Arc width | .8–1.4 mm |
| Sheet / pattern depth | 2.2–3.0 / fixed .4 mm |
| M3 diametral clearance | .2–.6 mm |
| Socket total clearance | .10–.30 mm |
| Part spacing | 3–5 mm |
| Runner width / thickness | .8–1.2 / .4–.6 mm |

Card packing rejects impossible combinations; do not scale the finished STL to change fit. Minimum available radial web exceeds 1.1 mm. Rotor bottom stays 8 mm above base top. Wheel/spacer/tower share three aligned shaft bores; nominal .2 mm allowances either side of spacer accept thin washers. Three actual presets have model thumbnails. Base chamfers offer three silhouettes. Bounded variation changes actual wheel pattern. Angle control is a static assembled inspection pose and never changes print geometry.

## Local image / vector / text workflow

Choose a PNG, JPEG or simple SVG (picker works on phones; desktop also accepts drop), or try bundled fixtures. Text up to eight characters and six searchable hand-authored marks are rasterized locally with bundled fonts. The protected base patch is at Y=-8 mm, away from tower joints; scale 4–7 mm, Z rotation ±180°, X ±1.5 mm, Y ±2 mm. Keep-in radius ≤6.5 mm is checked after transformation. Depth .4–.6 mm leaves ≥1.5 mm material. Raised art is deliberately unsupported to retain bed-flat sheet thickness.

**Exact method:** validate PNG/JPEG headers before decoding; normalize image to ≤500 px; composite on selected light/dark background; fit/cover crop and pan ±25%; sample luminance into a 20 × 20 grid. Threshold 1–254 makes a silhouette-height mask, or grayscale maps brightness to cut depth. A piecewise-linear closed height-field mesh becomes a real Manifold Boolean engraving cutter. Bright holes remain uncut backing, tested with solid probes. Interpolation creates approximately one-grid-cell edge ramps; this is not exact vector tracing. Checkerboard displays the actual selected pixels; source and final 3D model remain visible. SVG supports safe self-contained path/primitive fills, rasterized at 256 px with holes; scripts, links, resources, text and effects are rejected. This is **2D-to-relief/silhouette conversion**, not automatic full 3D reconstruction from a photo.

## STL workflow / supported geometry

ASCII and binary .stl: 40 bytes–2 MB, ≤1,500 triangles, each dimension .2–250 mm. Extension and content checked. Welding tolerance 0.00001 mm. Finite/nondegenerate triangles, one connected positive-volume solid, consistent outward winding, exactly two opposite-directed incident faces per edge and pairwise self-intersection checks required. This deliberately bounded integration supports **convex, broad flat-bottom solids only**, no overhang footprint. Concave/hollow/open/nonmanifold, disconnected or unsupported geometry is rejected with actionable feedback; never repaired or hulled silently.

Select Z up / Y up / upside-down **before** attaching (orientation change explicitly requires reattachment). Confirm millimeters because STL has no units. Source dimensions, format, triangles and source 3D preview are shown. XY scaling is proportional to requested footprint; Z independently scales to engraving depth (.4–.6 mm). Factors are displayed. Set rotation and placement; cutter is reflected into the top surface and Boolean-subtracted into the actual signature base. The original mesh, not its hull, defines the engraving. This changes real base volume, not a texture or unchanged STL re-export. Replace/remove/reset returns built-ins; invalid source/transforms disable exports, including stale last-good results.

## Privacy / portable designs

All files stay in the browser. No API, upload, CDN or external generation service. File limit 2 MB; PNG/JPEG ≤12 MP / 6,000 px per side; SVG ≤2,000 simple elements; bounded portable image ≤250,000 pixels. Invalid/empty/oversized content is rejected before heavy CSG. Samples are synthetic original PNG/JPEG/SVG, ASCII wedge and binary gem fixtures, not private uploads. Only synthetic test artifacts are committed.

Undo/redo keeps bounded history; six local named designs and JSON save/open carry bounded image/mesh payloads. Restored STL payloads are reparsed. Missing image payloads explicitly request reattachment and block export. Source paths alone are not treated as restored files. Browser storage may be unavailable/full; JSON is the portable alternative.

## Printing, assembly and retention

Print white PLA/PETG, .4 mm nozzle, .16–.20 mm layers, ≥3 walls, 100% mm. All four clean parts and the one-piece carrier lie at Z=0 without upper footprint overhangs. Default carrier is 180 × 230 × 2.4 mm; use individual STLs on smaller beds. Support-free geometry is intended, not a physical slicer/print guarantee.

1. Snip all sixteen low runners **outside** part edges; smooth stubs. Tabs avoid tongue tips, shaft holes and shoulders. Release check confirms frame + four unharmed solids.
2. Dry-fit the tower/base pair as a full-size calibration sample. Change socket total clearance in .05 mm steps; M3 hole clearance is diametral. Material, calibration, first-layer expansion and paint affect fits. No universal tolerance or calibrated friction fit claimed.
3. Lower both tower tongues from above, shoulders against base top. Square the tower, apply plastic-compatible adhesive and fully cure. No snap retention.
4. Fill the .4 mm half-annulus and phased arc recesses **black**, leaving hub, rim and other lands **white**. Clean and dry. Preview colours do not encode printable colour; single-colour unpainted plastic lacks the intended optical contrast.
5. Hardware required: **one M3 × 25 mm bolt, one M3 locknut, two thin M3 washers (≤.2 mm each)**. Stack rear-to-front: **HEAD → tower → washer → printed spacer → washer → wheel → LOCKNUT**. Leave slight axial play; do not clamp the stack. The bolt may itself turn in the tower, a plain bearing rather than fixed spindle. Head/locknut positively retain the stack only with correctly sized hardware and sufficient engaged threads; verify manually. Choose bolt length to avoid a long exposed end. No hardware-free retention claimed.
6. Turn the rim gently by hand under steady diffuse illumination. Compare directions and real pattern settings. The recessed half creates some mass imbalance; no balancing or spin-duration guarantee. Do not motorize. The kit does not simulate vision, optical performance, inertia or friction. Keep hardware/loose parts away from small children.

## Preview / exports

Assembled, exploded, connected card, de-tabbed plate and every isolated clean part use the same current checked meshes. Orbit/pinch/zoom, front/top and fit controls, base transparency, saved light/dark theme and preview swatches work locally. Exploded gaps and external hardware position are illustrative; STL always uses flat print orientation. Hardware itself is not exported.

Binary STL per part; main download defaults to the genuinely connected card; optional loose plate preserves four disconnected closed solids. Everything ZIP contains connected card + four individual STLs, portable design JSON and numbered assembly/print guide with current fit values. ZIP is not labelled 3MF. The UI reports exact selected export X/Y/Z and a current geometry signature; export is disabled during invalid/stale/failed worker states. No unrequested old-good fallback.

## Verification / dependencies

`npm test` — 47 default/preset/shape/individual and combined extrema/import cases; independent float32 binary-STL checks (1e-5 mm weld), per-component positive volume, winding, stored normals, dimensions, closed edges, degeneracy and component counts. Solid intersections check flat and assembled parts, 24 wheel poses, shaft corridor, insertion paths, real pattern recesses, tab connectivity/release, card bounds, minimum backing and support-free XY footprints. `node import-boundary-test.mjs` additionally checks imported extrema and actual browser-SVG holes.

Serve **production dist under its real base prefix** for `node browser-test.cjs`, `node studio-test.cjs`, `node stale-test.cjs`, `node orientation-test.cjs`, `node icons-drop-test.cjs`, `node isolated-test.cjs`, `node mobile-layout.cjs`, `node interaction-test.cjs`. See JSON reports / `VALIDATION.md`. Browser tests perform actual file-picker imports/downloads and parse resulting bytes, compare image changes/threshold/depth and mesh transforms, rejections/reset, exact preview/Node/export signatures, JSON and named-design round trips, ZIP contents, mobile touch orbit/pinch and export, no remote processing, worker abort/recovery, stale guards, themes/focus and phone layouts. Reference measurement needs Python trimesh/numpy/matplotlib/networkx and a separately downloaded read-only reference mesh; run `python reference-measure.py /path/to/reference.stl`. Do not bundle that mesh.

Dependencies: React + Vite; Three.js (MIT), Manifold 3D WASM (Apache-2.0), fflate (MIT), gh-pages, bundled Fontsource Fredoka/Rubik (SIL OFL). Playwright is used only for validation. No API key or paid service.
