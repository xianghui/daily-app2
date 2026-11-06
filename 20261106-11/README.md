# Trihedral & Lap

A local React + Vite / Manifold WASM maker studio for a genuine three-panel, three-height kit card. Snip 12 low runners, stand the lower-bridge panel, then lower the middle and upper bridge panels into one shared radial node. Default 0/60/120° panels give six equal arms. This is an original three-way crossing, not a cosmetic variant of the earlier two-wall finger joint or four-rail photo frame.

## Reference-first evidence

Local candidates were located and inspected **before final geometry selection**. Keycap Studio's README, App.tsx, Viewer.tsx, styles.css, worker, export, imageTrace and STL modules informed the concrete studio patterns: sticky 374px left rail, tactile keys, paired dimensions, checkerboard conversion, imported-solid controls, multiple views and worker-owned solids. It was kept read-only; its switch geometry is inappropriate for this sheet kit.

Independently parsed local `clicker_template2.stl` (SHA256 `292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9`, 944 triangles, 3 components, 15.2×15.2×43.1 assumed mm) and fabric `diamond-link.stl` (`8146cd758a8c0218560a3fe7cdd7b6ad23304fe9e4472ff0259e18266f4ed9fd`, 5940 triangles, 1 component, 7.981×9.241×8 mm). Rejected them as MX tooling / interlocked fabric, not sheet-card references.

Selected actual STL: **White Cat Kit Card**, Mike Kasberg, [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Upstream README, kit_frame.scad and license inspected. Fresh STL download and binary parse performed this run; no raw third-party mesh distributed. SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820×178.020×3.190 assumed mm; 2 edge-adjacent components, 57 anomalous welded edges. Those source defects were recorded, not silently repaired or copied into the reconstruction.

Sections Z=.100/.215/1.590 show crossing sheet parts, 1.60mm sheet, repeated 4.50×1.70mm sockets and .21–.22mm low carrier runners. See `reference-analysis.json`, independently generated `reference-analysis-raw.json`, `reference-analysis.py`, `reference-inspection.log`, and `evidence/reference-sections.svg/.png`. Script accepts a locally downloaded source path; source STL is intentionally outside the repository. Attribution/license is also locally available inside the deployed app.

### Measured vs proposed

- **Measured** sheet1.60, socket4.50×1.70, .10mm sheet-slot excess. **Redesign** uses sheet1.8–3.2 (default2.4) and three separate retained height-thirds. Oblique crossing envelope is `sheet*cot(minAngle/2)+notchExcess`, NOT merely sheet/sin(angle). Minimum angle is `min(a,180-2a)`, a50–65°. Independent .10–.50mm vertical gap and .10–.50mm notch excess are proposed printer-dependent allowances, not measured source fits or universal tolerances.
- **Measured** low .21–.22mm runners/perimeter. **Redesign** uses .4–.6mm bed-aligned runners, .8–1.2mm wide, two crossbars and a2.4mm perimeter. Four runners per panel meet outer solid arms, never working notches. Actual Boolean-unioned connected card, not a rectangle beside loose parts.
- **Original** three bridge heights, angle-dependent common-node clearance and sequential vertical assembly. No cat outlines or raw source triangles reused.

## Run and deploy

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Node22.12+ recommended. Individual scripts exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; public combined site uses **root** monorepo predeploy/deploy, not this individual deploy script. Base `/daily-app2/20261106-11/`.

## Controls / limits (all physical dimensions mm)

Card100–180 wide ×120–180 high; panel span44–76, standing height22–36; radial angle50–65 degrees; sheet1.8–3.2; vertical band gap .1–.5; notch excess .1–.5; spacing3–5; runner width .8–1.2, thickness .4–.6. Invalid combinations (e.g. tall panels and narrow card) are blocked with a larger-card instruction. Rounded/chamfered/notched ergonomic arm ends, three real presets with current model thumbnails, live numeric/sliders, undo/redo, six named designs and portable JSON. Light/dark persists. Local fonts Fredoka/Rubik. Assembly yaw is explicitly inspection-only, not mechanical motion.

Assembled/exploded, connected card, clean print plate and isolated-part previews use the same generated solids. Exports always use broad-face-down real print orientation at Z=0. Binary per-part STL, connected-card STL and Everything ZIP (4 STLs, design, numbered instructions and assembly-map SVG). STL has no colours; preview colours do not modify geometry. There is no mislabeled 3MF export.

## Local image-to-geometry

PNG/JPEG actual content validated, <=2MB, <=12MP, <=6000px/side before decode. Normalized to <=500px per side and bounded portable payload. Simple SVG <=2000 permitted elements /6000px side, scripts, links, effects and external content rejected; rasterized locally at256px. File picker and drag/drop; synthetic `public/samples/mark.png`, `waves.jpg`, `ring.svg` included.

Exact documented method: fit/cover crop plus ±25% image pan; dark/light background removal; convert to20×20 luminance samples, threshold1–254 or grayscale heights. Two triangles per cell form a closed height cutter with skirt and bottom; Boolean-subtract .4–.6mm into the lower panel outer arm. Bright holes remain unengraved with full backing (tested with final-solid probes). Checkerboard shows the actual sampled cutout. This is **2D-to-relief / sampled silhouette conversion, not full 3D reconstruction or exact vector tracing**. Text(up to8 characters) and six searchable original SVG icons use the same real geometry path.

Footprint4–7mm, rotation±180°, X±1.5/Y±2mm; radius5.8mm keep-in around X=-.30*span,Y=rise/2. Reject artwork outside that zone. Minimum1.2mm remaining backing. Raised art deliberately unavailable to preserve flat sheet envelope. Replace/remove/reset return to defaults. Empty silhouettes, unsupported settings and invalid files disable all geometry downloads rather than exporting an old result.

## Local STL-to-geometry

Both complete binary and ASCII STL <=2MB, <=1500 triangles, one connected closed outward solid, .2–250 assumed mm per axis. STL has no unit metadata: **explicit millimeter confirmation required**. Z up / Y up / upside down before attachment, XY proportional fit4–7mm, independent Z engraving .4–.6mm, Z rotation and XY placement. Displays original oriented source dimensions, triangle count, format and both scale factors; separate source 3D preview.

Supported contract: convex broad-flat-bottom no-overhang solid. Strictly checks finite vertices, dimensions, degenerate triangles, opposite two-edge incidence, connectedness, winding/volume, triangle intersections, convexity and bed footprint. Concave, hollow, open, touching/self-intersecting, multi-component and overhanging meshes rejected with guidance. **Never constructs a convex hull as replacement**; the accepted triangle mesh itself becomes a Manifold solid, transforms, then Boolean-subtracts into the protected arm, visibly/measurably changing final STL without reaching the joint. Synthetic original ASCII wedge and binary gem fixtures included. No repair claim. Axis changes clear source and request reattachment.

## Responsiveness, privacy and persistence

No uploads, keys, paid APIs, CDN dependencies or external processing. React/Three/Manifold WASM/fflate/fonts bundled locally. External attribution links only on intentional navigation. Worker owns geometry/strict STL parsing;100ms debounce and generation-id/state-key guards disable stale export. Worker load errors visibly block export and reload recovers. Preview may show last-valid solids but is explicitly labeled and not exportable after invalid changes. Resolution20×20/48–192 bounded polygon samples.

Undo/redo and named saves/JSON include bounded normalized images or accepted mesh payloads, not filenames pretending to restore files. JSON <=2MB, images <=250000px portable; missing payload asks for reattachment. Imported personal files are not included in repository or sent anywhere. Only synthetic fixtures and automated reports/screenshots are committed.

## Print / assembly / calibration

1. Print card **or** three clean panels face-down Z=0, PLA/PETG, .4mm nozzle, .16–.20mm layers. No supports intended; upper XY footprints checked against bed slices. Card is one manifold connected component, clean plate is three separate manifold components.
2. Snip12 low outer-arm runners,4 per panel; flush-trim scars, discard carrier/two crossbars. Keep center bridge bands intact. Simulated snips yield carrier + exactly3 undamaged parts.
3. Stand lower bridge at0°. Hold upright with engraved face toward you. Lower middle bridge panel vertically at selected a°, then upper bridge panel at180−a°. All bottom edges finish on the table. Open notches pass earlier bridges; each retained bridge occupies a different height third.
4. Gravity-seated/lift-out, **not captive or snap-fit**. No hardware. Optional adhesive for a permanent rigid ornament, no structural rating. Lift upper then middle to release. Do not force a tight fit.
5. Start PLA .30mm band gap/.20mm notch excess; PETG .40/.30. Print all3 clean panels as calibration coupon, adjust to printer/material/elephant foot. Tolerances not universal. Retained center band >=6.5mm, minimum engraving backing1.2mm.

## Validation

`npm test` independently parses serialized float32 binary STLs, finite/nondegenerate faces, normal consistency, welded opposite edge incidence(1e-5mm), positive volume per connected component, dimensions/Z=0, card/clean counts and genus. 61 default/preset/shape/extrema/cross-angle/gap/sheet cases including image/STL-derived extrema. Manifold intersections verify all pairwise assembly and 111 sampled sequential insertion positions per case, real bridge/gap probes, tab placement, snip count, unchanged released parts, card envelope and upper-slice footprint containment.

Playwright scripts test actual production WASM/worker, PNG/JPEG/ASCII/binary file pickers and downloaded bytes, default comparison, conversion/scale/placement/depth, text/icons/SVG holes, malformed files, blocked stale exports, portable/named roundtrips, undo/redo, real ZIP contents, all views, saved dark mode, 320/390px no-overflow preview-first UI, desktop left/right, touch orbit/pinch, errors and worker recovery. See JSON reports and `VALIDATION.md` for completed results.

**Computational inspection is not physical printing, friction, fit, fatigue or strength testing. No physical print/assembly tests performed.**

Dependencies: React/React DOM, Vite/plugin-react, Three.js(MIT), Manifold(Apache2), fflate(MIT), Fontsource fonts(SIL OFL), gh-pages; Playwright development-only. Six icon vectors and sample fixtures are synthetic original assets. Reference CC BY4.0 text is bundled; source mesh is not.
