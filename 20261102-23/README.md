# Pip & Assemble

A browser-local **six-panel hollow die kit-card generator**. Snip 24 real runners, stand four tongue-bearing walls on a SIX panel, then lower a ONE lid. Sixteen open-edge mortise joints require adhesive. Opposite faces sum to seven. This is an assembly craft / educational die, **not a calibrated fair die or a sealed container**. Printing, fitting, glue strength, durability and rolling fairness have not been physically tested.

## Run and build

Node 22.12+; `npm install`, `npm run dev`. `npm test` runs mesh and assembly checks. `npm run predeploy` builds production output. Base: `/daily-app2/20261102-23/`. `npm run deploy` exists for the requested per-app convention, but the public combined site is deployed from the parent ROOT using its `deploy/` directory.

## Reference-first derivation

Fresh read-only inspection first parsed local `keycap_generator2/public/templates/clicker_template2.stl` and `fidget_fabric_generator/public/templates/diamond-link.stl`, including relevant project READMEs. Those switch/link interfaces were unsuitable for sheet kits; no local kit-card STL was found. The public selected reference is **White Cat Kit Card**, Mike Kasberg, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source licence/readme are preserved; raw STL and spacecraft artwork are NOT bundled.

- Binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; 179.820 × 178.020 × 3.190 mm assumed millimeter envelope; STL itself stores no units.
- 27 edge-adjacent components, including tiny duplicate/degenerate fragments; original source is not used as an input printable solid or claimed repaired.
- Actual sections at Z=0.10, 0.50, 1.59 mm show carrier, low runners, sheet and socket structure. Measured sheet 1.60 mm, socket 4.50 × 1.700012 mm, low runner planes around .21/.22 mm. See `reference-analysis.json`, full `reference-measurements.json` and `evidence/reference-sections.png`. `reference-measure.py /path/to/source.stl` repeats the mesh measurements using trimesh/numpy/matplotlib.
- Source `flat_clip.scad` confirms 4 mm thin clips in 4.5 mm sockets, with .25 mm per-side tolerance and a retaining ledge. We DO NOT claim the source tongue was 4.5 mm. Our **proposed full-sheet 4.50 mm tongue** instead uses the measured socket length as its nominal span. Mortise width is redesigned as 4.50 + G. At the outer face edge, notch depth is sheet + G/2.
- New orthogonal cube closure needs **open edge mortises**, not the source's closed sockets/retaining ramps. All sixteen joints need adhesive. Cube faces, pips, 3×2 card topology, 24 stronger runners, corner reliefs and local customization are original parametric reconstruction. This is not a source re-export or prior mechanism reskin.

The read-only visual reference `keycap_generator2` was inspected at README, styles, App, Viewer, worker, imageTrace, STL and export modules. Concrete adopted studio patterns: 374 px left rail, collapsible labelled controls and paired mm fields, tactile selected buttons, local Fredoka/Rubik fonts, lavender desk/pink ink accents, checkerboard cutout, saved dark theme, large right-side viewer, preview-first phone layout, current-result export gating. No reference Git history, deployment scripts or wholesale dependencies were copied. Existing own studio import/persistence/preview infrastructure is reused; cube construction and assembly checks are new.

## Parameters (millimeters unless shown)

| Control | Supported range |
| --- | --- |
| Card X / Y | 120–170 / 90–130 |
| Assembled cube edge | 24–36 |
| Pip radius / recess | .8–1.4 / .4–.6 |
| Total wall corner seam | .10–.40 |
| Total mortise width clearance G | .10–.35 |
| Sheet | 1.6–2.4 |
| Part spacing | 3–5 |
| Breakaway runner width / thickness | .8–1.2 / .4–.6 |
| Panel corner relief | square, 1.2 mm round, 1.2 mm clipped |

Four walls have two 4.50 mm tongues at both ends; tongue centers sit at ±0.22×cube edge. Full-width TWO/FIVE walls cover the narrow THREE/FOUR wall ends; narrower wall width = edge − 2×sheet − corner seam. Wall shoulder height = edge − 2×sheet. ONE and SIX faces have eight matching open notches each. Tongue engagement = sheet. Tongues close flush at Z=0 and cube edge. No flexing or hidden snap assembly. Rounded/clipped panel corners create visible reveals, NOT fully filleted cube edges. Invalid card/part/spacing combinations are blocked, never silently shrunk. All final X/Y/Z dimensions are explicit.

Classic cube, Big & bold and Pocket chance are real thumbnail presets; bounded variation changes actual parts. Assembled, exploded, connected-card, loose print plate and every isolated face share the current geometry. Exploded spacing illustrates assembly only. See-through ONE lid explains the hollow shell. All exports remain flat and decorated-side up; preview colors are NOT in STL.

## Local image → actual recessed geometry

PNG/JPEG picker and drag/drop, simple SVG, text (8 characters) and six searchable bundled synthetic icons. Max file 2 MB; actual image content is checked before decode, ≤12 MP, ≤6,000 px/side; normalized portable image ≤500 px long side. SVG ≤2,000 simple vector elements, with no scripts, external links, fonts, embeds or filters; locally rasterized to 256 px. No network resources are resolved from SVG.

A 20×20 luminance grid is generated after contain/cover fit, crop shift ±25%, white-background compositing or dark/inverted background removal. Threshold 1–254 selects darkness; grayscale relief instead maps `(1 − luminance/255) × depth`. A closed height-field tool with a 0.4 mm baseline is triangulated and Boolean-subtracted from the ONE face. Tool placement cancels the baseline, leaving a .4–.6 mm recess and ≥1 mm continuous backing. Bright center holes remain unengraved. A checkerboard shows removed background and the sampled cutout. Smooth interpolation between grid nodes means this is **sampled 2D-to-relief, not exact vector tracing or automatic full-3D reconstruction from a photo**. Empty silhouettes block exports. The import replaces the ONE pip; the face remains the ONE face by its assembly position.

Physical artwork footprint 4–7 mm, recess .4–.6 mm, Z rotation ±180°, X ±1.5 mm and Y ±2 mm; all tool vertices must stay inside a protected 6.5 mm radius, separate from edge joints. Some extreme placement/size combinations are invalid and correctly blocked. Raised art is intentionally unsupported to preserve the flat cube envelope. Source and cutout previews, replace/remove, crop/background/threshold/depth, reset transforms and return-to-default controls all work locally and alter the STL.

## Local STL → actual engraving tool

Both binary and ASCII STL, 40 bytes–2 MB, ≤1,500 triangles, .2–250 mm per source axis. Source dimensions, format, triangle count and interactive source mesh preview are shown. Explicit millimeter confirmation is mandatory because STL has no units. Choose Z, Y→Z or −Z up BEFORE attaching (changing axes requests reattachment). Proportional XY footprint scale and independent bounded Z depth are shown with scale factors; rotate/center/place, remove/reset/replace work.

Strict parser checks complete facets/length, finite coordinates, indices, nondegenerate faces, opposite-directed welded edges (1e−5 mm), one connected component, positive volume, triangle self-intersections, convexity, sufficient broad flat bed contact and unsupported overhangs. **Concave, hollow, open, disconnected, nonmanifold or unsupported meshes are rejected with recoverable guidance. No repair, convex-hull substitution or silent concavity loss.** The original accepted triangle solid is scaled/rotated/placed and actually Boolean-subtracted from the ONE face. It is not an unchanged re-export or a texture.

All sources stay in browser memory/localStorage. No upload API, backend, key, paid service or runtime CDN. Sample PNG/JPEG/SVG and ASCII/binary STL files are synthetic fixtures (no personal uploads) with `public/samples/README.md` provenance. No arbitrary third-party input mesh is published.

## Responsive generation, persistence and export

React + Vite; Three.js + OrbitControls, Manifold WASM worker, fflate ZIP, locally bundled Fontsource Fredoka/Rubik. Geometry uses actual robust solid unions/subtractions, not interpenetrating visual shells. Heavy STL validation/CSG runs in the worker; 100 ms debounce, generation IDs and exact state keys reject stale results. Export is disabled during parsing/conversion/build, invalid edits, unsupported input, unconfirmed units or worker failure. A last-good preview is explicitly labelled when blocked; it cannot silently export stale geometry. UI mesh signature matches the actual downloaded bytes.

Undo/redo, six named local designs and JSON save/open include bounded image/mesh payloads, not file paths. Missing image payload asks for reattachment, never pretends restoration. Snapshots validate source bytes again on restoration. LocalStorage is browser/device-specific; portable JSON is the backup. Preview color is not geometry or multicolor metadata.

Export connected-card binary STL, de-tabbed flat print-plate STL, each of six closed-panel STLs, or Everything ZIP containing card + six panels + numbered assembly/printing instructions. No mislabeled 3MF. The connected card is one real Boolean solid with 24 bed-aligned removable runners; it is not loose pieces near a rectangle.

## Printing / assembly

Print a SIX panel and TWO wall calibration pair first, decorated sides UP, .4 mm nozzle, .16–.20 mm layers, three walls, PLA/PETG. No supports/hardware intended. Mortise clearance is a starting range, not universal. Clip four runners per part 1.5 mm outside the clean edge and file flush. Lay SIX outside-down; seat TWO/FIVE full-width walls and THREE/FOUR narrow walls outward, bond eight bottom joints plus corner seams and hold square with temporary tape. After cure, dry fit, bond and lower ONE lid onto eight upper tongues. Use compatible adhesive and follow its curing instructions. All joints are glue-required, not retained by friction alone. Adhesive, tape, snips, file are external consumables. See `ASSEMBLY.txt` or in-app guide for the full numbered sequence.

## Validation and limitations

`npm test`: 38 presets/bounds/import variants; independent final binary STL normals/triangle coordinates/bounds, nonzero areas, welded exactly-two opposite edge incidence and positive volume per component. Each face, carrier card and float32-translated loose print plate are checked. Real Boolean intersections check no assembly/plate overlaps, sixteen full tongue/mortise alignments, vertical wall and lid insertion through representative full-path lifts, exact cube envelope and outward face normals. Card bounds/thickness, four runners per part, post-snipping seven components (frame + six intact panels), preserved clean-part volumes and first-layer support footprints are checked. Image hole probes verify retained backing. Parameter bounds reject impossible inputs.

Browser tests serve actual production `dist` at the real base prefix using `node serve.mjs` (port 5723). Run `node browser-test.cjs`, `node studio-test.cjs`, `node presentation-test.cjs`, `node phone-views-test.cjs`, `node orientation-test.cjs`, `node stale-test.cjs`, `node icons-drop-test.cjs`. They pick real PNG/JPEG/ASCII/binary files, download bytes, compare signatures/default output/scale/placement/threshold/depth, round-trip JSON, reject invalid sources, parse every ZIP member, test all presets/views/isolation, worker failure/stale edits, undo/redo, saved designs, phone 320/390 px overflow, touch orbit/pinch and exports. Reports and screenshots are beside this README and in `evidence/`.

**Computational geometry checks are not physical printing, glue, wear or fairness tests. None of those physical tests has been performed.** Each panel is closed/manifold; corner seams in the assembled hollow shell are intentional. No promise of sealedness or statistical fairness. Small parts and sharp snipped runners require adult handling.
