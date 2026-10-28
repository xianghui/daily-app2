# Keel & Frame — hull skeleton kit-card studio

A seven-part stationary miniature shipbuilding study: five graded, pierced transverse bulkheads cross-lap a longitudinal keel; two keel tongues seat in a marked display plinth. Twenty-eight low breakaway runners connect every piece to a genuine carrier card. No flotation, load, moving-fidget, child-toy or physical-print-test claim. **Adhesive required at all seven fixed joints.**

## Run / dependencies

```sh
npm install
npm run dev
npm test
node extra-validation.mjs
npm run predeploy
node browser-validation.mjs
```

React + Vite; Three.js / touch OrbitControls; Manifold WASM in a Web Worker; fflate ZIP; locally bundled Fontsource Fredoka/Rubik. No CDN, API, key, paid service or backend. Base `/daily-app2/20261029-8/`. Per-app predeploy/deploy scripts present; public publication uses the root monorepo's combined `deploy/` flow.

## Reference-first provenance

Searched `/Volumes/ExternalHD/3d_printing_apps/` first. Existing local STL collections provide clicker sockets, telescoping/spring bodies and interlocking diamond links, not suitable sheet/card assembly construction. Local kit-card project had no suitable source STL. Read relevant local project instructions; did not repurpose clicker sockets for this kit.

Downloaded and parsed **White Cat Kit Card**, **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**, [license](https://creativecommons.org/licenses/by/4.0/). Inspected source README, LICENSE and `kit_frame.scad`. No source mesh or fan-art shapes redistributed; no endorsement implied.

Actual binary STL: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; **179.819997 × 178.019994 × 3.190000** assumed mm. STL has no units: source SCAD corroborates millimeters. Edge-connected splitting finds **27 components**: two substantive shells plus 25 two-triangle coplanar artifacts. Source is **not watertight** and is a design reference only; never claimed repaired or exported. Inspected actual mesh sections at Z=0.1, 0.5, 1.59 mm (`evidence/reference-sections.png`). `reference-inspect.py` and `reference-measure.py` reproduce inspection using trimesh/numpy/matplotlib; raw STL stays outside repository. Source URL/hash, bounds, components, Z-plane counts and decisions are in `reference-analysis.json`.

**Measured vs redesigned:** source sheet planes 0/1.6 mm → default 1.6 mm sheet. Source 1.6 mm perimeter rail → reinforced 2.4 mm carrier. Low source bridge elevations 0.21–0.22 mm → proposed 0.4–0.6 mm snip runners, 0.8–1.4 mm wide. Original hull station contours, pierced bulkheads, complementary half-laps, two plinth tongue seats and total 0.10–0.35 mm allowances are **new design choices**, not measured source interfaces. No convex hull substitutes. Real solid CSG unions/subtractions create the connected card and personalization.

Read-only visual/interaction study: keycap_generator2 README, styles, App, Viewer, worker, export, STL, imageTrace and legend modules. Concrete patterns: 374 px left controls, compact sticky brand, collapsible labelled sections, paired range/numeric controls, lavender desk (#e7e9f1), white panels, ink (#1f2233), coral (#e2557a), raised tactile buttons/pressed pink states, locally bundled rounded fonts, source/final previews, persisted dark theme and phone preview-first stack. Reuses previous daily studio's import/history/export infrastructure, **not its tower geometry**. Both galleries inspected; unlike the prior catamaran or radial rib sculpture, this assembly uses five graded transverse stations along a complementary-slotted keel.

## Parameters

All physical dimensions in **millimeters**; station spread is explicitly a dimensionless fraction of keel length.

| Control | Range |
|---|---|
| Card X × Y | 260–300 × 180–220 |
| Plinth X | 70–78; at least keel length + 1 |
| Keel length | 68–76 |
| Maximum hull beam | 36–46 |
| Bulkhead height | 20–28 |
| Outer station spread | ±0.26–0.32 × keel length |
| Plinth tongue width | 6–8 |
| Sheet | 1.6–2.4 |
| Total mating allowance | 0.10–0.35 |
| Part spacing | 4–7 |
| Runner width / thickness | 0.8–1.4 / 0.4–0.6 |
| Dimple depth | 0–0.4 |

Bulkhead widths follow `beam * sqrt(1 - (station/(0.52*keelLength))²)`. Stations at −1, −0.5, 0, +0.5, +1 times spread. Five keel notches open from the top; five frame notches from the bottom. Each notch width is sheet + total allowance; depth is half height + half allowance. Two plinth tongues stop 0.15 mm inside the mating sheet. Packing or plinth/keel envelope violations block export. Rounded/chamfered/clipped plinth silhouettes; three real model-thumbnail presets, bounded variation, reset, undo/redo, six local named designs, JSON save/open. Assembled, exploded, connected-card, de-tabbed plate and isolated-part previews. Separation and colours are preview-only; exports always use bed-flat printable geometry.

## Local image / SVG personalization

Real picker and drop: PNG/JPEG ≤2 MB, ≤12 MP, side ≤6,000 px; validate headers before decoding, normalize ≤500 px. Simple SVG ≤2 MB / 2,000 elements, shapes/paths only; reject scripts, external resources, references, filters and embedded images; rasterize locally to 256 px. Synthetic samples supplied, no personal data.

**2D-to-relief, not full 3D reconstruction from one photo.** Contain/cover and ±25% crop shift; light-background removal or inverted dark background. Sample luminance to 20×20 grid, threshold 1–254 or grayscale height, triangulate a closed bounded height field and solid-union/engrave it into the protected plinth medallion. Checkerboard displays exact sampled cutout, not a decorative texture. Holes stay unraised/unengraved over a continuous backing; interpolation makes transitions, not exact vector contour tracing. Raised depth 0.4–3 mm; engraving 0.4–0.6 mm retains ≥0.8 mm floor. Text (8 characters) and six searchable bundled icons go through this same actual geometry path.

Placement: 4–7 mm XY footprint, ±180° rotation, X ±1.5 / Y ±2 mm. The resulting feature must fit the 6.5 mm-radius safe zone; invalid placement blocks export rather than clipping or entering joints. Replace/remove, reset image/transform controls, original/cutout and final solid previews.

## Local STL integration

ASCII and binary STL ≤2 MB / 1,500 triangles; finite source dimensions 0.2–250 mm per axis. Validate exact binary length or ASCII structure, finite/nondegenerate triangles, opposite edge incidence, positive outward volume and a closed single component. Supported subset: convex, broad flat-bed-contact solids with no branches/overhangs. **Reject** concave/cavity/open/nonmanifold/disconnected inputs with actionable errors. No repair and no convex-hull replacement. Z-up, Y-up and upside-down orientations; explicit mm confirmation required. Source dimensions/format/triangle count and 3D preview shown. XY scale proportional into 4–7 mm footprint; independent Z grip height 0.6–3 mm. Original transformed mesh is CSG-unioned into plinth, not merely displayed/re-exported. Transform changes survive export. Source and final previews, replace/remove/reset included. All files stay in browser memory; no upload and no personal files committed.

## State / worker / export

Bounded payloads in local names and JSON restore normalized image and mesh data, not missing filenames. Reject missing/oversized payloads, explicitly request reattachment if image payload absent. Geometry worker initializes local WASM, debounces builds, ignores stale result ids, records current parameter/source/transform key. Invalid edits, failed imports, loading/conversion and worker failures disable export; visible last-good geometry is labelled, never silently exported. Preview/export use the same current mesh; displayed geometry signature is checked against actual downloads.

One-click binary STL for connected card or any of seven de-tabbed pieces; Everything ZIP includes every STL and numbered `ASSEMBLY.txt`. No 3MF claim; STL does not retain preview colours. Card/frame is one true boolean-unioned component with accessible removable runners, not loose parts beside a rectangle. No supports intended; print flat, relief up, 0.4 mm nozzle / 0.2 mm layers / three walls, PLA or PETG starting point. Dry-fit and calibrate first; tolerances are printer/material-dependent, not universal.

## Assembly / validation

Snip 28 runners, trim nubs, seat keel on plinth, lower broad center frame and paired medium/end frames into five half-laps. Hold square and adhesive-fix five half-laps plus two tongue seats. Clearanced joints are **not positively captive**. No other hardware, no hull skin; not a floating boat. Full card may exceed your bed; individual pieces are always available.

`validate.mjs` independently parses serialized float32 STL: exact byte length, nonempty triangles, finite coordinates, nonzero areas, stored normal/winding consistency, vertex weld 1e-5 mm, exactly two opposite-directed faces per edge, positive volume per connected component, Euler characteristic, mm bounds and Z=0. Checks each intended solid and connected card, defaults/presets/min/max/mixed extremes and imported-STL/image-derived outputs. Manifold intersections independently check all assembled pairs, 0–32 mm vertical insertion paths, shoulder seats, half-lap lateral guides, card part separation, accessible snips and **eight components after virtual snips** (seven parts + connected carrier). Unsupported combinations reject explicitly.

`extra-validation.mjs`: genuine raised ring-hole probes, original sloping-source integration and concavity rejection plus mesh/assembly checks. `browser-validation.mjs`: real picker PNG/JPEG/SVG/ASCII/binary inputs and downloads; compare pixels, threshold/depth/scale/rotation/placement and reset; current state/mesh/download signatures; JSON/named round trips; every preset/view, text/icons, malformed/open/oversized/empty/missing-payload rejection, stale export/worker failure recovery, every STL/ZIP member, themes/focus/collapsing, 320/390 px overflow and reachable exports plus real touch orbit/pinch. Production run uses actual bundled worker/WASM under base prefix. Reports/screenshots saved alongside source. These are **computational geometry/interaction checks, not physical print, force, fatigue, stability or adhesive testing**.
