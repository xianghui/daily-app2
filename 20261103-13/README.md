# Focus & Difference

A browser-based parametric **flat-pack hyperbola drawing kit**, not a general-purpose tool or browser game. Snip a real connected card into a paper deck, slotted radial ruler and socketed cord anchor. An external M3 pivot and taut thread constrain an ideal pencil point by **distance to pivot − distance to fixed focus = 2a**. All fabrication and imports run locally.

## Run, build and export

Node 22.12+; `npm install`, `npm run dev`; `npm run predeploy` builds Vite under `/daily-app2/20261103-13/`. The app includes the requested independent `predeploy: npm run build` and `deploy: gh-pages -d dist` scripts and installed gh-pages; publication of the complete gallery uses the parent repository's ROOT deployment flow.

One-click binary STL for connected card, de-tabbed plate or each part; Everything ZIP includes all four STLs, portable design JSON and numbered instructions. Preview and downloads share the exact current worker result, with a visible model fingerprint in `data-geometry-signature`. Invalid or pending edits disable ALL STL/ZIP exports, even if the last good preview is visible. STL has no units or colours; values are millimeters. No fake 3MF export.

## Actual reference and design mapping

Reference-first: local candidate collections and their READMEs were inspected before choosing geometry. Actual keycap switch and diamond-link meshes were parsed (hashes, bounds and components in `reference-measurements.json`); neither provides a sheet/carrier interface for this kit. A public suitable reference was therefore downloaded and parsed: **Mike Kasberg, White Cat Kit Card, Printables 865769**, https://github.com/mkasberg/white-cat-kit-card , **CC BY 4.0**. Upstream README and full license are preserved here. Raw third-party STL/artwork is NOT redistributed.

Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL: 30,616 triangles, 179.820 × 178.020 × 3.190 mm, 27 edge-adjacent components. Units assumed mm, corroborated by source sheet dimensions. The source has mesh defects and is NOT treated as a printable repaired asset. See the per-component bounds and sections at Z=.1/.5/1.59 in `reference-measurements.json` and `evidence/reference-sections.png`. Reproduce with `/path/to/python-with-trimesh reference-measure.py /path/to/downloaded.stl` (requires numpy, trimesh, matplotlib).

Measured source sheet **1.60 mm**, actual rectangular sockets **4.50 × 1.700012 mm**, low runner planes **.21/.22 mm**. New default cord-anchor socket preserves 4.50 × 1.70; the proposed tongue is **4.40 × 1.60 mm**, using **.10 mm TOTAL** allowance in both dimensions. Allowance adjusts to .10–.25, and the slot thickness follows sheet + allowance. Source micro-runners are redesigned to .4–.6 mm thick and .8–1.2 mm wide; no source reliability is claimed. New deck/ruler/anchor and three-bay carrier are original Manifold CSG reconstruction, not a hull or unchanged source re-export. `reference-analysis.json` distinguishes measured and proposed dimensions.

The current visual/interaction reference is read-only **keycap_generator2**: README, CSS, App, Viewer, worker, STL, export and image modules inspected. Concrete patterns: 374 px scrollable left studio rail, sticky compact header, collapsible labelled sections, paired mm sliders/numbers, soft pink selected raised buttons, light lavender desk, dark ink, saved dark theme, checkerboard conversion, imported source viewer, debounced worker and current-key export gating. Shared independent local import, viewer and studio infrastructure is adapted from previous Daily Object Lab studios; the ruler, focus/cord constraints, assembly, validation and guide are new. No source project history, deploy scripts or dependency tree was copied.

## Parameters and physics contract

- Card width 130–160, card height 150–200, default 140 × 165 mm. Deck 108 × 80 mm.
- Focus half-spacing c=16–22 mm; actual focus separation 2c.
- Distance half-difference a=7–10 mm; actual fixed difference 2a. c>a is maintained throughout bounds.
- Moving cord-eye reach L=75–90 mm; taut working thread length L−2a (exclude extra thread for knots).
- Sheet 1.6–2.4, part spacing 3–5, socket TOTAL allowance .10–.25, runner width .8–1.2, runner height .4–.6 mm.
- M3 pivot bore 3.2–3.6 mm. Pencil slot 3 mm wide, ruler side webs 3.5 mm, fixed cord eye 1.3 mm.
- Square, rounded and chamfered decks; three real geometry presets with rendered thumbnails, bounded randomization, undo/redo, six local named designs and JSON save/open.

Ideal polar pencil radius is r=(c²−a²)/(c cosθ−a), measured from the left focus. Only **15–35° hand-guided sweep** is supported. There are engraved witness ticks, NOT hard stops. A straight, taut thread from moving ruler eye B around pencil P to fixed focus F2 has length (L−r)+|P−F2| = L−2a. The entire allowed sector is checked for ruler/anchor clearance and pencil staying inside its actual cut-through slot and drawing deck. A constant-height string is idealized: finite cord radius, eye thickness, pencil cone, knots and slot lateral play cause error. Keep pencil centered; no physical accuracy, tension, friction or automatic drawing claim. Cord and pencil guides in the viewer are explicitly preview-only, not printed plastic. Turning the preview never rotates fabrication exports away from the bed.

## Imports: local and bounded

**Both image and STL are core working geometry paths**, not texture-only views or unchanged downloads. Both replace the recessed maker mark on the fixed deck apron centered at Y=−30 mm, away from joints and the traced region. Engravings are .4–.6 mm deep and leave at least 1 mm backing, with a 6.5 mm circular keep-in zone. Replace/remove, center/reset and original source versus final preview are available. File picker on desktop/phone and desktop drag/drop. Synthetic fixtures in `public/samples` exercise PNG, JPEG, SVG, ASCII and binary STL without personal files.

### PNG / JPEG / simple SVG / text / bundled icons

Limits: actual PNG/JPEG headers, ≤2 MB, ≤12 megapixels, ≤6,000 px side, decode then normalize to ≤500 px. SVG supports bounded simple filled paths/shapes (≤2,000 elements), no external resources, scripts, references or effects; rasterize locally to 256 px. Text (8 characters) and six searchable bundled original marks use the same local conversion.

Image conversion: composite alpha over selected light/dark background, contain or cover crop plus ±25% shifts, sample a **20 × 20 luminance grid**. Threshold 1–254 maps dark samples to selected engraving depth; grayscale maps (1−luminance/255) to depth. The top grid is triangulated, side walls and a bottom seal form one closed cutter, mirrored and Boolean-subtracted. This is **2D-to-height-relief, not automatic full-3D reconstruction**. It is a sampled height surface, not claimed exact vector outline tracing. Bright holes remain unengraved solid islands on continuous backing; the checkerboard shows which grid values become cuts. Sampling can soften narrow features; use bold marks. Source pixels, threshold, grayscale, fit, crop, depth, scale, rotation and placement actually affect STL.

### ASCII / binary STL

≤2 MB; ≤1,500 triangles; per-axis source size .2–250 mm, finite coordinates, positive volume, welded closed edges exactly twice with opposed orientation, one connected component, no degenerate triangles or self intersections. Explicit source bounds, format, triangles and millimeter confirmation: STL contains no unit metadata. Select Z/Y/−Z up before attachment, then transform footprint 4–7 mm, depth .4–.6 mm, Z rotation ±180°, X ±1.5 and Y ±2 mm. XY scales proportionally; Z independently fits the engraving, with displayed scale factors. Reorientation clears the source and requires reattachment. All transformed vertices must stay in the protected zone.

This integration deliberately supports **convex, broad flat-bottom, no-overhang solids only**. Concave/hollow/branched/open/nonmanifold meshes and unsupported bed contact are rejected with guidance, never silently convex-hulled, discarded or claimed repaired. Accepted original triangles are transformed into Manifold and genuinely Boolean-subtracted into the fixed deck, so exported result is one closed solid rather than overlapping shells. An unsupported mesh must be simplified/reoriented externally and reattached.

### Designs and privacy

No API key, server generation, paid service, uploads, remote fonts, CDN runtime imports or tracking. Dependencies/WASM/fonts bundled locally. JSON ≤2 MB stores bounded original normalized image data and conversion settings, or bounded mesh coordinates/indices. Restored meshes are revalidated; missing image payload explicitly requires reattachment. Named designs use localStorage and report quota errors. User files are never saved into this repository.

## Printing, hardware and assembly

See numbered in-app guide / `ASSEMBLY.txt` inside every ZIP. Print connected card or three clean parts flat, PLA/PETG, .4 nozzle, .16–.20 layers, 3+ walls, 100% scale. No supports intended. Tab cuts are 1.8 mm outside part boundaries; flush filing required. The card is a REAL single connected CSG solid, not loose parts near a decorative frame; after 12 cuts it separates into carrier plus three unharmed components. Tabs avoid the tongue and functional holes. Print ruler and anchor first as a fit calibration; tolerances are not universal.

External items: **1 × M3×12 bolt, 1 × M3 nut, 2 × M3 washers** (lower washer/shims must place ruler **0.50 mm** above deck); thin soft thread; paper, pencil, tape, scrap risers for bolt-head clearance, and adhesive for the fixed anchor. No hardware-free equivalent is claimed for this adjustable retained pivot. Anchor inserts vertically before bonding. Thread ties to moving and fixed eyes; knots need extra length. Fit nut loosely enough to turn, without releasing it. Lay paper on deck, punch required openings and trace gently within the witness sector. Do not hard-tension or rotate into the anchor. Adult craft/teaching kit; small parts, not load bearing.

## Verification

`npm test`: independent binary STL parsing (byte count, finite vertices, nondegenerate faces, normals, bounds, welded edges, directed winding, positive volume PER component), defaults, all presets, each endpoint and simultaneous extremes, silhouettes, real image/STL-derived solids; Manifold collision/intersection checks through ruler sweep, tongue insertion and axle path, pencil-slot/cord-eye probes, support-free cross-sections, exact card bounds, part separation and safe cuts. Further cross-combinations and import extremes in `extended-validation.json`.

`python3 serve.py --port 5793` serves PRODUCTION dist at the real base path. `node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node icons-drop-test.cjs`, `node stale-test.cjs`, `node hole-check.mjs`: real file pickers and downloads, exact preview/Node/export fingerprint checks, invalid/truncated/unsupported input, replace/remove/reset, settings, saved assets, ZIP contents, all views, worker failure/recovery, touch orbit/pinch, phone imports/exports, 320/390 px no overflow and desktop left controls. See validation reports/screenshots and VALIDATION.md for actually completed results.

Computational validation is **not physical printing**. Physical fit, force, fatigue, drawing accuracy, thread behavior, glue strength and material durability have NOT been tested.

## Dependencies / licenses

React + Vite; Three.js (MIT); Manifold WASM (Apache-2.0), fflate (MIT), locally bundled Fredoka/Rubik through Fontsource (SIL OFL). Six marks are local original simple SVG shapes. Reference attribution/license above. Raw source mesh, artwork, personal inputs and dependency trees are not bundled in the repository.
