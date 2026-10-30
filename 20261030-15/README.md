# Roll & Reveal — Scroll Kit Studio

A **seven-part flat-pack kit-card generator**, not a static STL download. Snip 28 runners, stand two cheeks in a mortised plinth, thread two headed spindles through circular bearings, then bond their slotted axial keepers. Tape a paper story between the spindles and turn either finger head while gently feeding the strip. No gearing, automatic tension, spring return or physical winding test is claimed.

## Reference-first provenance

Local files under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. The clicker template and fabric-link meshes were parsed, dimensioned and rejected as unsuitable references for a sheet/card carrier (see `reference-measurements.json`). Their READMEs were inspected read-only. A public sheet-kit reference was then downloaded and actually parsed **before final geometry was chosen**:

**White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. License retained as `reference-LICENSE.txt`. No raw source STL or ship outline is redistributed.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL: **30,616 triangles; 179.820 × 178.020 × 3.190 mm; 27 edge-adjacent components; not watertight**. It is a design reference, not silently repaired or re-exported.
- Sections at Z=.10/.50/1.59 mm are plotted in `evidence/reference-sections.png`. Planes at 0/1.6 mm establish sheet thickness. Four measured socket loops are **4.5 × 1.700012 mm**. STL has no units; millimeters are an explicit assumption corroborated by these interfaces.
- Reconstruction preserves **1.6 mm bed-aligned tongues** and socket law `(tongueWidth + allowance) × (1.6 + allowance)`. At width 4.4 / total allowance .10 this reproduces 4.5 × 1.7 mm. Default .15 mm is a **proposed printer-dependent allowance**, not measured clearance or universal fit.
- Low source .21/.22 mm carrier features informed, but do not dictate, strengthened .4–.6 mm runners. Bodies are 2–2.8 mm. Original scroll spindles, circular bearings, bonded keepers, double-tongued cheeks and seven carrier bays replace the source assembly entirely.

`reference-inspect.py` re-parses the separately downloaded `/tmp/scroll-reference.stl` using trimesh/numpy/matplotlib (`/tmp/kit-analysis-venv/bin/python`). `reference-analysis.json` maps concrete measurements to parameters and distinguishes proposed tolerances from preserved dimensions.

### Visual / interaction reference

Read-only inspection of `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README.md, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Applied its concrete maker-studio patterns: **374 px scrollable left control panel**, sticky compact brand/theme header, paired slider/numeric millimeter fields, collapsible sections, raised tactile key buttons with pink pressed states, lavender-grey desk #e7e9f1, white panels, dark ink #1f2233, coral #e2557a, locally bundled Fredoka/Rubik, saved dark theme, checkerboard image cutout, original STL preview/explicit units, named local designs and current-result export gating. Phones put preview, warnings and exports **before** stacked controls. No source Git history or dependency tree was copied; generic local studio/import utilities were reused from earlier original studios, while the seven-part scroll geometry and assembly tests are new.

## Run

```sh
npm install
npm run dev
npm test
node hole-check.mjs
node import-extremes.mjs
npm run predeploy
node serve-production.cjs
# separate terminal, production base path:
node browser-test.cjs
node studio-test.cjs
node axis-test.cjs
```

Production base `/daily-app2/20261030-15/`, local production server `http://127.0.0.1:5495/daily-app2/20261030-15/`. Scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; public publishing uses the **ROOT combined deploy/** flow. React + Vite, Three.js, Manifold WASM, fflate, Fontsource Fredoka/Rubik are installed locally; no CDN, remote generation, backend, API key or paid service. React/Three/fflate MIT, Manifold Apache-2.0, fonts SIL OFL 1.1. Six original SVG icons and synthetic sample fixtures only.

## Parameters / physical design

Every physical dimension is **millimeters**. Angular controls are labelled degrees. The UI reports actual selected printable export X/Y/Z bounds, not assembled dimensions.

| Parameter | Supported range |
|---|---|
| Card width / height | 240–280 / 115–145 |
| Cheek width | 32–40 |
| Spindle center separation | 32–48 |
| Clear paper span between cheeks | 32–44 |
| Finger head width | 10–14 |
| Tongue / rectangular shaft width | 4.4–6 |
| Body / shaft / keeper thickness | 2–2.8 |
| Tongue thickness | fixed measured 1.6 |
| Socket total allowance | .10–.35 |
| Bearing diameter addition / each axial end gap | .25–.60 |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |

Bore diameter = `hypot(shaftWidth, thickness) + running clearance`. The inscribed radius of the 64-segment circular bore exceeds the shaft corner radius; clearance is verified over 360°. Two external stops per shaft are the integrated head and a **separately bonded keeper**, not unproven press-fit retention. At least 1 mm radial stop overlap remains throughout supported ranges. Four fixed cheek joints also require adhesive. Tongue bed alignment and right-cheek offset are included in actual socket positions and assembly transforms.

Default connected card **250 × 125 × 2.4 mm** is one closed solid with seven pieces, internal rails and 28 removable runners. Safe cuts release eight components: seven intact functional parts plus carrier. No loose print layout is called a kit card. Tabs join safe peripheral lands, not bearing surfaces, functional tongue edges or keeper apertures. Bounds and all supported mixed field extrema are checked; impossible envelopes or invalid settings block exports.

Three real presets (Pocket Story, Studio Scroll, Wide Chronicle) have live model thumbnails; three bevel silhouettes alter actual cheeks/plinth. Bounded variation changes fits and tongues. Undo/redo retains 35 states, up to six named designs are local, and bounded imported assets travel in portable JSON. Assembled, exploded, connected-card, de-tabbed and isolated views use the same final solids. Turning the preview moves spindles **and bonded keepers**, not the fixed cheeks. Paper-edge lines are estimated visual guides; flexible winding and strip contents are not simulated or exported.

## Image / SVG / text / icon geometry

File picker on desktop/phone and drag/drop: **PNG, JPEG, simple SVG**. Try bundled `mark.png`, `waves.jpg`, `ring.svg` without personal files. Signature/content checks before decoding: 16 bytes–2 MB, ≤12 megapixels, ≤6,000 px/side; images normalize to ≤500 px. Simple SVG paths/shapes ≤2,000 elements rasterize locally to 256 px; active/external resources, text and effects are rejected with flattening guidance.

The image is composited against a selected light/dark background, optionally inverted, fit or cover-cropped with ±25% pan, then sampled to **20 × 20 luminance heights**. Threshold 1–254 makes a sampled silhouette relief; grayscale gives variable depth. A closed triangulated height tool is **Boolean-subtracted from the left cheek**, not a texture. This is 2D-to-relief, **not reconstruction of full 3D from one photo or exact vector tracing**. Checkerboard displays the actual sampled foreground. Bright holes remain unengraved on a continuous backing, verified by solid-volume probes. Bold high-contrast marks work best; nozzle/pixel resolution limits small text.

Real controls: footprint 4–7 mm, engraved depth .4–.6 mm, rotation ±180°, X±1.5/Y±2 mm. Every vertex must remain in a protected 6.5 mm-radius landing centered at left-cheek X=0 / height=7, remote from bearings and tongues. Minimum backing 1.4 mm. Empty silhouettes, excessive transforms and unsafe placement disable export. Up to eight text characters and six searchable bundled icons use the same geometry pipeline. Raised relief is intentionally unsupported to keep the lower cheek smooth. Replace/remove/reset return to actual built-in geometry.

## STL integration

Accepts **ASCII and binary .stl**, ≤2 MB, ≤1,500 triangles, each source axis .2–250 mm. Bundled original synthetic `wedge-ascii.stl` and `gem-binary.stl` demonstrate both paths. Shows original oriented mesh, format/count/dimensions and **requires explicit millimeter confirmation** because STL has no unit metadata. Select Z, Y or −Z up before attachment; switching up axis removes the source and clearly requires reattachment. XY is proportionally fit to 4–7 mm, Z is independently set to .4–.6 mm, then rotation and XY placement are applied to **actual source vertices**. It becomes an exact mesh-shaped Boolean engraving in the left cheek, measurably different from default. Reset transforms, replace, remove and built-in defaults work.

Supported contract is deliberately bounded: one closed, outward-wound **convex solid**, broad flat bottom and no overhang beyond its bed footprint. Checks enforce complete binary length / complete ASCII facets, finite coordinates, triangle/file/dimension limits, 1e-5 mm welded edge incidence, opposite winding, positive volume, one component, self-intersection and convexity/bed support. **Open, nonmanifold, concave, hollow, disconnected and unsupported geometry are explicitly rejected**, not repaired by assertion. A bottom hull is used only for support/containment validation; it never replaces source triangles or fills source concavities. All geometry remains original until the exact Boolean operation. Final meshes and their assembly receive the same checks as built-in outputs.

## Worker, export and privacy

A debounced Web Worker performs bounded heavy CSG and final finite/degenerate/manifold/winding/volume checks. Request IDs and an exact parameter/source/transform key gate results; pending, invalid or failed imports/builds disable **all** STL/ZIP actions. A last-good preview is explicitly labelled and cannot silently export stale geometry. Preview/export share exact current model/signature. Worker load failure gives a recoverable reload error, tested against the production path.

Download binary connected-card STL or each clean part. Everything ZIP contains **eight actual binary STLs + ASSEMBLY.txt**, with numbered steps/current dimensions and fit values. Exported parts are bed-flat Z=0; no assembled shell overlap is exported. STL does not store preview colours. No mislabeled 3MF, AR or cloud feature.

All personal files stay local in-browser, never uploaded, placed in the repository or sent to external services. JSON ≤2 MB includes normalized image / original indexed source mesh, which is revalidated on restoration. Missing image payload explicitly requires reattachment. Six local named saves and 35 history states are bounded. Provided fixtures are synthetic original assets, not private uploads or redistributions of third-party STL.

## Print / assembly / interaction

1. Print card or clean parts flat, at 100% mm; PLA/PETG, .16–.20 mm layer height, three walls. No supports intended. Check bed dimensions; large presets exceed a 256 mm bed. First print a cheek/spindle and base to calibrate fits.
2. Snip 28 runners, trim nubs without touching tongues/bearing lands. Seat two cheeks in four plinth mortises; shoulders stop at the top, tongue tips reach the bed. Dry-fit then bond these four fixed joints and cure.
3. Slide each headed spindle from the left through both bores. Slide a keeper onto each right tip. Leave the chosen running clearance at each cheek outer face; bond keeper **to shaft only**, keeping adhesive out of bores. Cure both keeper bonds before handling; without them shafts can slide out.
4. Cut a flexible paper strip ≤(clear span − 4) mm wide, ≤0.15 mm thick and ≤250 mm long. Tape opposite ends to the central shaft sections, clear of bearings. Wind one head while manually feeding/unwinding the other. Reverse direction gently; no tensioning hardware included. Recommended roll radius ≤8 mm; roll envelopes are checked. Paper/tape/adhesive are required external consumables, no metal hardware.
5. Hold the plinth or lower cheeks. Do not force, spin rapidly or load the assembly. Small pieces and sharp snips require adult craft supervision. Exported ASSEMBLY.txt and the in-app instructions give current fits and complete sequence.

## Validation evidence / limits

`validate.mjs`, `validation-report.json`: 34 built-in configurations (every preset/shape, coordinated min/max, every independent field extreme) plus eight image/STL cases. Each actual float32 STL is independently parsed: exact file length, nonempty finite triangles, normalized winding-consistent normals, nondegenerate faces, positive component volumes, expected mm bounds, 1e-5 mm welded edges each with **two opposite-direction faces**, orientable Euler characteristic and bed alignment. Every clean part is checked separately.

Independent Manifold checks inspect all part pairs over a full turn, axial spindle/keeper insertion and downward cheek insertion, four socket gauges, two shoulder contacts, four positive axial stops, safe snips releasing seven pieces/carrier, card bounds, separated flat pieces, 64 bed-column samples and maximum paper-roll envelope clearance. These are geometric checks, **not a physical winding/strength experiment**.

`import-extremes-validation.json` applies full checks to image/ASCII/binary sources at coordinated extrema. `hole-validation.json` probes actual Boolean cavities. Browser scripts use real production file-picker uploads and downloaded bytes for PNG/JPEG/ASCII/binary, pixel/threshold/depth/crop/scale/rotation/placement changes, exact current-preview/export/JSON regeneration signatures, all part STLs and extracted ZIP contents. Recoverable rejection includes truncation, open/nonmanifold/concave/oversize files, excessive pixels/triangles/dimensions, empty images and invalid transforms. Studio tests cover presets, shapes, text/icons/SVG, portable image/mesh JSON, missing payloads, named-save reload, undo/redo, all views, theme persistence/focus/collapsible controls, worker failure/recovery and local-only file processing. Phone checks use 320/390 px, touch orbit/pinch, file imports and reachable exports without horizontal overflow. Axis tests verify actual Y/−Z vertex reorientation.

Reports/screenshots record performed checks; there is **no physical print, adhesive-strength, paper-tension/winding, fatigue or safety certification**. Printer, slicer and material calibration remains necessary.
