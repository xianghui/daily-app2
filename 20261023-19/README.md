# Tape Tide — curved-tape fidget studio

An original local-browser parametric STL editor for a **TPU curved-section tape spring**. Hold the palm landing and gently curl the free tape toward its open trough. Transverse curvature resists bending; local flattening changes that resistance. This is different from a pin hinge, torsion strut, coil or slider. Snap-through, bistability, return force and fatigue are **not established**. No physical print or mechanical test has been performed.

Model-first ivory/clay studio, inspired by the broad editor composition of Vaseverse, without copied branding, source, text or assets. Desktop parameter rail; touch orbit/pinch and collapsible phone controls; fixed mobile STL action. Real model thumbnails, three distinct geometries (Soft Reed, Palm Ribbon, Wide Crest), bounded Variations, numeric inputs, undo/redo, preview palette and local portable design JSON.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base `/daily-app2/20261023-19/`. Individual deployment scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; **public monorepo deployment runs from the parent**, exporting its combined `deploy/` directory. React/Vite, Three.js/OrbitControls and Manifold WASM are installed locally and bundled; gh-pages is deployment tooling. Playwright is validation-only. No CDN, API key, server-side generation, cloud sharing, remote modeling or paid service.

## Geometry / units / controls

Every dimension is **millimeters**, angles degrees. Tape width 20–32; free tape length 30–52; normal tape thickness 0.8–1.4; transverse crown 2–5; root clamp length 4–8; palm dimples 0–0.6. Numeric out-of-range/nonfinite values block export. Randomization stays within these ranges. Presets vary actual width, length, thickness, crown, root and texture, not just colors.

The transverse section uses two concentric circular arcs: outer radius `W²/(8C)+C/2`, inner radius `R−T`, 64 segments. Thus T is **normal thickness**, not vertical spacing on a sloped sheet. The closed section is extruded along the free direction and robustly unioned into a full-width root clamp and a trimmed round palm landing. Clamp overlaps landing by 0.5 mm. Tape base is 3 mm above the bed. The root begins at Y=7.5; all imported vertices must remain in a radius-6.5 palm well, leaving ≥1 mm of separation. Surface dimples avoid the root to prevent enclosed cavities. No loose moving bodies, bearings, fit interfaces, retention caps or assembly hardware exist.

The preview is undeformed. It deliberately does not fake shell flattening or promise a calibrated snap. Object and print-layout views show the same one-piece orientation. Tap the solid to select it; drag to orbit, pinch/scroll to zoom, Reset/fit or ± to adjust the view. 10 mm ground grid and exact final X/Y/Z export dimensions are visible. Preview colors are **not stored in STL**.

## Image import → real relief

Pick or drop PNG/JPEG, or try synthetic `mark.png` / `waves.jpg`. File size 16 bytes–2 MB; actual header/content checked before decoding, ≤12 megapixels and ≤6,000 px per side. Decoded dimensions must match the header. Processing is entirely local. Source display is normalized to ≤500 px on the longest side; no original input is committed or uploaded.

Canvas composites transparency onto white, applies contain/cover fit and ±25% X/Y crop shifts, then samples a **20×20 luminance grid** (`0.2126R+0.7152G+0.0722B`). Threshold mode raises dark samples below a 1–254 cutoff; grayscale mode uses `depth × (1−luminance/255)`. Depth 0.4–3 mm. The grid is triangulated into a continuous piecewise-linear top (threshold edges interpolate between grid points), with a closed sidewall and 0.4 mm backing sunk 0.15 mm into the palm floor. Manifold performs an actual Boolean union. Empty all-white relief/silhouettes are rejected. This is **2D-to-relief conversion, not full 3D reconstruction from one photo**. Source and exact sampled conversion previews are shown, alongside final model.

Image footprint 4–7 mm; rotation −180–180°; X offset ±1.5, Y offset ±2 mm; final radial safe-zone checking may reject combinations even inside individual input ranges. Errors disable stale export. Change fit/threshold/depth, replace/remove image, reset transforms/image settings, or reset all to recover.

## STL import → integrated grip

Both ASCII and binary STL supported; bundle includes synthetic `wedge-ascii.stl` and `gem-binary.stl` with attribution in `public/samples/ATTRIBUTION.txt` (original mathematical fixtures, no external assets). Each source is displayed separately with dimensions and triangle count. **STL has no unit metadata**: user must explicitly confirm source coordinates are millimeters before integration/export.

Limits: 2 MB, ≤1,500 triangles, coordinates bounded to ±10,000, each source dimension 0.2–250 mm. Only **one closed, outward-wound, convex, broad flat-bottom solid** is accepted. Bed contact must span ≥25% of XY bounding footprint; every projected point must lie within its bottom polygon. Open edges, nonmanifold edges, inconsistent winding, degenerate faces, disconnected bodies, inverted volume, unsupported concavity, overhang/tilted contact, self-intersection and truncation are rejected with guidance. No automatic repair is claimed. This intentionally conservative contract is not a general STL repair or arbitrary-character integration tool.

Parser welds at 0.00001 mm, checks directed edge balance, connectedness, signed volume, triangle intersection via separating axes and convex support planes. Heavy parsing/generation runs in a worker. The mesh is centered, XY uniformly scaled to footprint 4–7 mm and Z independently fitted to 0.6–5 mm height, then rotated around Z and positioned on the palm floor with a 0.15 mm embed. Fitted XY minor span must be ≥1.2 mm. Safe-zone check and one-positive-component Boolean union must pass; unchanged display/re-export of a mesh is not the integration workflow. Thin, tall or unsupported meshes should be redesigned in a modeler. Reset/center transforms, replace/remove, return to defaults are real controls.

## Export / persistence / privacy

Download STL is always reachable. Binary geometry-only STL uses **the same final checked geometry and parameters as the preview**, plus useful source/dimension filename. Entire body and named single-part export are equivalent because this is one connected part; no ZIP of multiple parts is needed. Every edit regenerates geometry in a local worker. Busy, stale, invalid, unconfirmed or failed imports block export.

Save/Open JSON contains all modeling parameters, image controls, transforms and bounded portable source: normalized PNG data URL plus sampling state, or validated STL vertex/index arrays. Restoring checks app/version, size, image headers and topology. Missing image payload explicitly requires reattaching the original file. JSON limit 2 MB; image payload ≤1.8M characters / 250k pixels; saved STL ≤1,500 triangles. User files never leave the browser. Sample fetches load only bundled same-origin files. Undo/redo stores at most 35 bounded modeling snapshots; preview color is presentation state rather than exported geometry.

## Print, calibration and limits

- **TPU 95A**, 0.4 mm nozzle, 0.15–0.2 mm layers, solid thin tape. PLA/PETG are not recommended for repeated flexing of this geometry.
- Palm landing flat at Z=0. **Removable supports required underneath the raised curved tape**. Both lateral sides and underside are accessible; inspect the slicer support toolpaths. TPU supports can be difficult to remove. If clean removal without nicking the tape is not feasible, do not print this orientation.
- No hardware, assembly, captive-body release or running-clearance calibration. Do not claim this supported cantilever is print-in-place or support-free.
- Use **Soft Reed** as a full-size material/support trial. Inspect root and layer adhesion, then gently move tip 2 mm toward open trough, letting the cross-section flatten without a crease. Guide it back. Stop at damage, whitening, permanent deformation or poor return. No universal tolerance, travel limit, spring force, snap threshold or fatigue life is supplied. Printer, layer direction and TPU grade matter.
- Validate in a slicer and physically test before relying on the object. Small features are not child-safe certified. Digital checks do not prove successful printing or elastic behavior.

## Validation

`npm test` independently parses exported binary STL, verifies finite coordinates, nonzero triangles, unit normals agreeing with winding, nondegenerate faces, positive connected volume, welded edge incidence=2 with opposite directed edges, bed plane and exact millimeter bounds. Production worker also checks final manifold/winding/volume after every edit. Robust Manifold solids/Booleans produce actual unions, not intersecting display shells.

78 parameter cases: default, all presets, extrema, all 64 corners, eight deterministic variations. 24 image/STL integration cases cover two STL shapes and two relief methods across defaults/extrema/presets. Analytic checks verify concentric thickness, full-width root embed, safe-zone separation and small upward monotone bending envelopes; CSG sample probes verify tape/root/landing material and open underside/above-shell air. These are **geometry/mechanism envelope checks, not FEA**. Flattening, local strains, force, snap, fatigue and clean support removal remain unverified physically.

`browser-test.cjs`: actual PNG/JPEG and ASCII/binary STL picker imports/downloads, pixel/threshold/depth/scale/placement changes against no-import baseline, exact preview/export fingerprints, invalid dimensions, malformed/oversized/empty/open/nonmanifold/concave inputs, remove/replace/reset, mobile imports/downloads, touch orbit/pinch, 320/390 px widths. `extra-browser.cjs`: all presets/variations through mesh/mechanism checks, portable save/open for all four fixtures, undo/redo, drag/drop and geometry-neutral palette. `mobile-sheet.cjs`: collapse/expand, every tab, fixed export reachability. Gallery and production/public checks have separate scripts/reports. Generated reports state observed outcomes; physical testing has not been performed.
