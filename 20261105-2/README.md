# Pratt & Span

A five-part **Pratt truss bridge kit-card generator**: one deck, two triangulated side trusses and two cross-lapped transverse ties. Snip twenty real breakaway runners, seat four deck tongues, then lower both end ties into four open half-laps. No hardware; suitable adhesive is required after dry fitting. **This is an unrated desktop model. Physical printing, fit, structural strength, stability and adhesive performance have NOT been tested.**

## Reference first / provenance

Local candidates were inspected and parsed first, with their project instructions: Keycap Studio's three-body switch template and Weave Fabric Studio's 8 mm-high interlocking link are inappropriate for planar sheet interfaces. For this kit, the selected public STL is **White Cat Kit Card**, Mike Kasberg, [upstream](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Upstream README and license are preserved in REFERENCE-UPSTREAM.md / REFERENCE-LICENSE.txt. No raw reference mesh, private asset or fan-art silhouette is redistributed.

Downloaded binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Coordinates are assumed **millimeters**; STL has no unit metadata. Parsed envelope is about **179.82 × 178.02 × 3.19 mm**. Edge-adjacency splits it into 27 components including duplicate/degenerate zero-volume pseudo-components. The source is not a validated manifold print. It is used for measured design evidence, not directly exported or silently repaired. See `reference-analysis.json`, reproducible `reference-analysis.py`, and `evidence/reference-sections.png`: actual mesh sections at Z=.10, .215 and 1.59 mm measure **4.50 × 1.70001 mm sockets**; the principal sheet plane is **1.60 mm**; low runners end at **.21–.22 mm**.

### Measured versus reconstructed

- Measured: source sheet, socket rectangles, low carrier/runner construction and separate sheet parts.
- Proposed: **4.40 × sheet** tongues; default sockets = **(4.40 + total clearance) × (sheet + total clearance)**, matching the measured 4.50 × 1.70 mm socket at default .10 mm clearance. Tongue depth = sheet − .60; blind floor .40; tip gap .20 mm. These floor/depth changes are NOT source measurements.
- Proposed: stronger .40–.60 mm runners, 2.4 mm carrier ribs, original Pratt diagonal topology and two opposing 4.10 mm cross-lap cuts in an 8 mm overlap. Lap width = sheet + total clearance; the .20 mm vertical lap gap is deliberate. Clearances are not universal press fits.
- The generator reconstructs the reference's actual **sheet / fitted-slot / breakaway-carrier** architecture as a new triangulated bridge. It does not reuse the cat geometry, switch sockets or a convex hull. Four/six bays change topology, span/rise change diagonal angles, breadth changes truss separation and tie lengths. This is not a reskinned rotor, a loose print-plate layout or a repeat of an earlier bridge-deflection jig.

## Studio

React + Vite, locally bundled Three.js/OrbitControls, Manifold WASM, fflate, Fredoka/Rubik fonts. The read-only Keycap Studio README, App, styles, Viewer, import/export and worker modules were inspected. Concrete patterns retained: a 374 px left rail, compact sticky brand/theme header, collapsible labelled sections, tactile raised controls, paired sliders / numeric mm inputs, saved light/dark theme and a large right gradient viewer. Phone preview / dimensions / export come first, with stacked controls below.

Three real thumbnail presets; rounded/clipped/scalloped deck profiles; text and six searchable bundled icons; source and final previews; assembled/exploded/connected-card/clean-plate/all isolated parts; see-through view; touch orbit/pinch, fit, front/top and zoom. Exploded displacement is preview-only, not an export transform. STL has no colours. Undo/redo, six named local designs, bounded portable JSON with embedded image/mesh payloads; missing images explicitly request reattachment.

## PNG / JPEG / SVG → real engraved geometry

File picker on desktop/phone and single-file drag/drop. Actual PNG/JPEG content, at most **2 MB, 12 MP, 6,000 px per side**, decoded locally and normalized to at most 500 px. Simple SVG paths/shapes: 2 MB / 2,000 elements, no scripts, external resources, references or text; rasterized locally at 256 px. Flatten unsupported SVG text/effects before use.

The exact displayed **20 × 20 luminance sample grid** drives a closed triangular height-field cutter. Fit or cover/crop, ±25% crop shift, light/dark background inversion, threshold 1–254, binary threshold or grayscale heights; .40–.60 mm maximum engraving depth. The solid cutter is Boolean-subtracted from the deck. Bright holes are retained as unengraved islands with continuous backing; interpolated pixel boundaries are not exact vector outlines. Checkerboard shows the actual sampled cutout. This is **2D-to-silhouette/relief conversion, not automatic full 3D reconstruction from a photo**. Text/icons use the same tested method. Raised marks are deliberately unsupported on this bed-flat, bounded deck.

Artwork footprint 4–7 mm, rotation ±180°, X ±1.5 / Y ±2 mm, deck-local centre (0,0), keep-in radius 5.8 mm. At least **1.0 mm backing** remains, and all sockets/trusses/ties stay untouched. Empty conversion, bad transformations or keep-in violations block export rather than exporting a stale preview.

## ASCII / binary STL → integrated mesh engraving

Actual source dimensions and format are shown, followed by explicit **millimeter confirmation**. Select Z-up, Y-up or inverted-Z before attaching; changing axis requests reattachment. Center, XY proportional footprint scale, independent Z engraving depth, Z rotation and placement affect the final Boolean-subtracted engraving. Source preview remains distinct. No unchanged re-export and no convex-hull replacement.

A deliberately bounded supported subset: **one closed, outward-wound, positive-volume, convex, broad flat-bottom solid**, ≤1,500 triangles, ≤2 MB, .2–250 mm per source axis. The original accepted mesh is used exactly. The parser checks finite coordinates, nondegenerate faces, welded edge incidence and opposite winding, single adjacency component, positive volume, pairwise self-intersection, convexity and a flat bed contact ≥25% of XY bounding area, with all XY projection inside that footprint. Concavities, cavities, disconnected bodies, overhangs, open/nonmanifold or intersecting meshes are **rejected with guidance**, not repaired or discarded. The small bottom footprint hull is only a support/containment check, never a substitute output mesh. Bounds and keep-in checks precede CSG; aspect ratios that create <1.2 mm engraving width are rejected. Reset transformations, remove, replace or restore defaults at any time.

## Ranges — millimeters except bay count / degrees

| Parameter | Range |
|---|---|
| Card width / height | 140–200 / 200–280 |
| Bridge span / deck breadth | 72–100 / 32–44 |
| Truss rise / bays per side | 24–40 / exactly 4 or 6 |
| Diagonal width / sheet | 2.2–3.2 / 1.6–2.4 |
| Total socket / lap clearance | .10–.30 |
| Part spacing | 3–5 |
| Runner width / height | .8–1.2 / .4–.6 |

Card packing enforces its actual envelope and spacing. Minimum top end-post ligament is ≥1.65 mm across the supported range; bottom/top chords are 6/8 mm tall. Impossible dimensions, unsupported bay counts and unsafe imports are recoverable errors with disabled exports.

## Printing and assembly

Print **either** one connected card **or** five clean parts, Z=0, PLA/PETG, .16–.20 mm layers, .4 mm nozzle. All parts are bed-flat; no supports intended. Start with a deck/truss fit calibration; total XY clearance .10–.30 mm depends on printer and material. Test cross-laps too. Snip twenty accessible side runners; leave tongues and slots intact. Seat both trusses in four blind mortises, open top slots UP. Lower each transverse tie with slots DOWN over both trusses simultaneously. Square the frame, then bond four mortises and four cross-laps. No snap retention or load rating is claimed. Detailed numbered instructions appear in the app and Everything ZIP.

## Generation, export and privacy

Heavy CSG and STL parsing run in a local Web Worker, 100 ms debounce with request-id / exact state-key stale-result protection and worker error handling. Bounded mesh/detail and numerical tolerance .001 mm. Every generated part is checked for closed manifold edges, opposite winding, finite vertices, nondegenerate triangles and positive volume. Preview and binary STL share the exact current valid geometry; signature is shown in the DOM for independent download checks. Invalid states explicitly label the last-valid preview and block every export.

Per-part buttons, connected card, clean plate and Everything ZIP (all six STL exports including the connected card, portable design JSON and numbered ASSEMBLY.txt). All dimensions in mm; UI shows the chosen export X/Y/Z. ZIP is not mislabeled as 3MF. Files stay on this device: no upload, API, account, key, remote CDN or paid service. Repository fixtures are synthetic examples only; do not commit personal inputs.

## Development and validation

```
npm install
npm run dev
npm test
npm run predeploy
python3 serve-production.py
node browser-test.cjs
node studio-test.cjs
node personalization-test.cjs
node orientation-test.cjs
node mobile-layout.cjs
node extra-validation.mjs
```

Production tests use the actual `/daily-app2/20261105-2/` prefix on port 5942, not the Vite development server. `validate.mjs` independently parses serialized float32 STL, checks exact byte lengths, finite vertices, bounds, nondegenerate faces, stored normals, 1e-5 mm welded edges (two opposite incidents each), adjacency and positive volume **per component**. It checks every separate part, connected card and five-component clean plate over presets, extrema and imported outputs. Manifold intersections independently test packing, intact release after all twenty runner cuts (carrier + exactly five parts), four blind mortises/floors, eight cross-lap openings in both card and clean parts, bed footprints, all assembly pairs and sampled vertical insertion paths. These computational checks do not establish physical strength, friction or printing success.

Browser tests use actual file-picker PNG/JPEG/ASCII/binary uploads and actual downloaded STLs/ZIPs; compare no-import, threshold/pixels/depth and scale/rotation/placement; regenerate saved state in Node to match the exact preview/export signature; test malformed/open/nonmanifold/excessive input, remove/reset, empty conversions, invalid exports, portable JSON/named restoration, undo/redo, icons/SVG holes, all views, worker abort/recovery, desktop left rail, focus/collapsible sections, saved theme, 320/390 px overflow and touch orbit/pinch. Evidence reports/screenshots are stored alongside the app. See VALIDATION.md for completed runs. Physical print and load tests remain unperformed.

Fonts: Fontsource Fredoka/Rubik, SIL OFL. Manifold: Apache 2.0; Three.js/fflate/React/Vite: their distributed licenses. Reference attribution is separate from this original reconstruction.
