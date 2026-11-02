# Ames & Turn

A local-browser React/Vite maker studio for an original **six-part rotating Ames-window kit card**. Snip 24 breakaway runners, assemble two pillars and a bearing lintel on a plinth, then capture the asymmetric window with a **bonded** keeper. Hand-turn it and view with one eye against a plain backdrop: the trapezoid supplies misleading perspective cues and can appear to rock rather than rotate. Perception varies; no illusion guarantee is made.

## Run and build

```sh
npm ci
npm run dev
npm test
npm run predeploy
```

Deploy base: `/daily-app2/20261102-11/`. The app has the required individual `gh-pages` scripts, but combined publication uses the repository root `npm run predeploy` and `npm run deploy`. No server/API key/account/CDN is needed for modelling. Manifold WASM, Three.js, fflate, React and OFL Fredoka/Rubik fonts are bundled locally. Browser WebGL and module Workers are required. `node serve.mjs` serves production output at port5711 under the exact deployment prefix.

## Reference-first provenance

Actual geometry reference: **Mike Kasberg — White Cat Kit Card**, [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), **CC BY4.0** (`REFERENCE-LICENSE.txt`). The downloaded binary STL was parsed, SHA-256 checked and sectioned before this geometry was chosen. The source has nonwatertight defects; it is a design reference, **not an automatically repaired or re-exported base**. No raw third-party STL is bundled.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`
- 30,616 triangles; assumed millimeters;179.820×178.020×3.190mm bounding size.
- 27 edge-adjacent components including small artifacts; original whole mesh not watertight.
- Actual source sections show main sheet planes0–1.60mm, four4.50×1.700012mm socket loops, and low web planes .21–.22mm.
- Reconstruction retains the **4.50mm socket length** and sheet-based tongue construction. Proposed calibrated slots are4.50×(sheet+allowance); tongues(4.50−allowance)×sheet. New carrier webs are deliberately thicker and bed-aligned.
- Rotating trapezoid, rectangular-axle journals, keeper, six-part assembly and all proportions are original redesigns, not copied spacecraft geometry. See the small `reference-analysis.json`, full `reference-measurements.json`, reproducible `reference-measure.py` and inspected `evidence/reference-sections.png`.
- Local clicker/fabric STL candidates were parsed and rejected because their switch/link interfaces do not suit a sheet kit; local kit-card projects contained no suitable STL. Reference trees and old gallery remain read-only.

Visual/interaction reference: read-only `keycap_generator2` README, styles, App, Viewer, worker, STL/image/export modules. Concrete patterns:374px scrollable left rail, compact sticky brand, tactile raised/pressed controls, paired number/range fields, collapsible sections, local theme, checkerboard conversion, right-hand viewer and current-result export gating. This app shares reusable import/studio utilities with an earlier daily kit; **the rotating mechanism and its validation are new**.

## Parameters and mechanical contract

Every physical dimension is in millimeters; the short-edge ratio is explicitly percent and rotation degrees.

| Parameter | Range | Purpose |
| --- | --- | --- |
| Card X / Y |220–260 /240–280|Real connected envelope, internal rails and tabs|
| Window span / tall edge |52–68 /32–42|Actual asymmetric frame|
| Short-edge ratio |50–75%|Perspective trapezoid|
| Frame / horizontal mullion |2.4–3.6|Printable pane bands; central axle mullion4.50|
| Sheet |1.6–2.4|All clean flat parts|
| Radial journal clearance |.20–.45|Bore radius=hypot(2.25,sheet/2)+clearance|
| Total socket allowance |.10–.30|Not per side; tune after a calibration print|
| Part spacing |3–5|Accessible runner/snip lanes|
| Tab width / height |.8–1.4 /.4–.6|Real removable connections, all at Z0|

Circular bearings are64-sided. Inscribed-radius clearance, rather than only nominal diameter, is checked. The bottom journal has .80mm floor. Keeper is fitted **.30mm above the lintel**, bonded to the axle, and rotates with it; lower-axle engagement remains at least .50mm at full endplay. Keeper overlaps the bore by at least3mm radially. The window has roughly4mm lateral sweep clearance to pillars throughout360°. These are geometric checks, not universal material tolerances or physical friction tests.

Print base, one pillar and keeper first to calibrate. Clean elephant foot; adjust allowance and radial clearance independently. Compatible adhesive is **required**, including the keeper-to-axle bond: a loose or unbonded keeper is not retention. Never glue either rotating journal. No purchased bearings, switches, magnets or metal fasteners are required. No snap or guaranteed friction fit is claimed.

## Both core import workflows

Use the phone/desktop file picker, drop one file in Import, or try the bundled synthetic fixtures. Replace/remove/center/reset remain available after errors. Sources and current converted geometry are shown separately.

**Image → real base engraving:** PNG/JPEG content is header-checked before decoding (2MB,≤12MP,≤6000px side), locally normalized to≤500px and stored as bounded PNG. Simple SVG shapes/paths are sanitized and rasterized locally at256px; scripts, external resources, unsupported elements and excessive complexity are rejected. No exact vector tracing is claimed. Fit/cover crop, XY pan, light/dark background, threshold or grayscale mode, depth, physical footprint, placement and rotation all change the final STL.

The conversion samples a **20×20 brightness height grid**. Threshold produces depth or zero; grayscale gives depth×(1−brightness/255). A closed triangular heightfield cutter is reflected into the top surface and Boolean-subtracted. Depth .4–.6mm leaves≥1mm backing. Bright interior holes remain uncut backing; checkerboard shows the removed background. Sampling gives softened/interpolated edges, not photogrammetry or full3D reconstruction from a photograph. Text (up to8 characters) and six searchable bundled icons use the same actual engraving path. Raised decoration is intentionally not offered, keeping a support-free sheet envelope.

**STL → exact mesh-shaped base engraving:** binary and ASCII accepted,≤2MB,≤1500 triangles, each axis.2–250mm. Explicit source-mm confirmation is mandatory because STL stores no units. Choose Z/Y/−Z up **before attachment**; changing axis requests reattachment. Source dimensions and scale factors are shown. XY scales uniformly to a4–7mm footprint; Z separately to.4–.6mm depth. Rotate±180°, place X±1.5/Y±2mm, or center/reset. The parsed mesh is actually subtracted from the protected base patch, not merely displayed or re-exported.

Import contract is deliberately bounded: **one outward-wound closed convex solid with a broad flat base and no projected overhang**. Edge incidence, dimensions, finite coordinates, degenerates, intersections, connectivity, volume, convexity and bed contact are checked. Concave/hollow/open/nonmanifold/multipart input is rejected with guidance. No hull replacement, silent repair or flattening of arbitrary meshes. The only convex hull calculation measures a bottom footprint for acceptance; it does NOT replace the imported model. Safe art radius6.5mm keeps all cutting away from assembly/mechanism interfaces. Impossible transforms/empty images disable export.

Synthetic samples: `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl`; shared original test fixtures from the daily studio, no personal assets. All user content stays in the browser: no upload, telemetry or external model service.

## Studio / views / exports

Three real model-thumbnail presets, three base silhouettes, bounded variations, searchable text/icon marks, local light/dark theme, undo/redo, six named local designs, JSON save/open. Bounded normalized image and verified mesh payloads survive JSON/local-save round trips; missing assets request reattachment explicitly. Files are not committed to this repository. Browser storage may fill: JSON backup remains available.

Assembled, exploded, connected-card, de-tabbed plate and six isolated views use the **same meshes**. Window-turn slider rotates only the exact rigid window and keeper; exploded gaps are illustrative only. Touch orbit/pinch, zoom and fit work on phones. Desktop left rail/right viewer switches to preview/export-first stacked phone layout. Preview colour is not STL colour.

Heavy mesh/CSG work runs in a locally bundled Worker with100ms debounce, request sequence guards, clear failure messages, current-state keys and disabled export while building/invalid. A last-good preview is explicitly labelled and cannot be exported as the new invalid state. Final mesh topology checks run for every edit.

Binary per-part STLs, de-tabbed plate, genuinely connected card and Everything ZIP are downloadable. ZIP contains card+six clean STLs and numbered assembly/calibration instructions. It is a ZIP, **not3MF**. Final X/Y/Z dimensions reflect selected exported geometry. All print exports stay flat at Z0; no assembled overlaps are exported.

## Printing and assembly

PLA/PETG, .4mm nozzle, .16–.20mm layers, three perimeters; no supports intended. Default240×260mm card exceeds some beds: download individual parts rather than globally scaling fits. Cut24 runners1.6mm outside contours and file nubs; keep axle/tongue interfaces intact.

1. Calibrate base/pillar/keeper. Bond both pillars into base and cure square.
2. Lower bottom window axle into the blind bearing; keep it unglued.
3. Lower lintel over upper axle and pillar tongues together, then bond only fixed pillar seats.
4. Fit keeper on upper axle with a temporary .30mm gap shim above lintel. Bond keeper **to axle only**, cure, remove shim. No wicking glue into journal.
5. Turn gently at the central mullion. Stop and recalibrate if binding. Keep the base level. View with one eye from roughly the front at window height. Optical behaviour depends on observer and setting.

Small craft kit, not load-bearing or suitable for young children. Adhesive handling follows its manufacturer. See `ASSEMBLY.txt` and on-page numbered instructions.

## Reproducible validation

`npm test` checks presets, silhouettes, each parameter endpoint, combined extrema and imported image/STL variants. Independent **float32 binary STL** validation checks byte count, finite/nondegenerate faces, unit normals consistent with winding, welded1e−5mm opposite-directed paired edges, per-component positive volume, expected components and exact mm bounds for every part and print plate.

Kernel checks test window+keeper across360° in5° increments at both endplay limits, with independent circumradius bounds for between-sample clearance; assembly paths, bottom/keeper stops, remaining axle engagement, pane probes, pairwise intersections, connected card, removal of all24 tabs without damaging pieces, seven components after cuts (carrier+six parts), card envelope and bed-footprint support. See generated JSON reports.

Real production-browser tests select PNG/JPEG/ASCII/binarySTL files, download actual geometry, compare exact preview signature and JSON regeneration, test threshold/depth/crop/shape/transforms, invalid/truncated/unsupported input, empty silhouettes, import removal/reset, presets, all views, themes/focus, undo/redo, portable payloads, ZIP contents and worker-failure recovery. Phone tests check320/390px layout and real touch orbit/pinch with changed canvas screenshots. Repeat with `node browser-test.cjs`, `node studio-test.cjs` and additional `*-test.cjs` scripts while serving production assets.

**No physical print, optical illusion, friction, fatigue, base tipping or adhesive-strength test has been performed.** Computational watertightness and collision freedom do not prove those outcomes.
