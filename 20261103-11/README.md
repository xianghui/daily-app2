# Reverse & Time

A browser-local React + Vite **three-part flat-pack kit-card generator** for a reversible compound pendulum. Snip twelve actual runners, bond a windowed tower into the signature deck, and hang an unequal-ended blade on an external M3 axle. Remove and invert the blade to compare its other suspension point. This is a physical assembly, not a browser game or dynamics simulator.

**Not physically printed or tested.** Computational mesh, clearance and mass-centroid checks do not establish friction, fit, timing, strength or stability. Two pivot holes do not imply equal periods; this is not a calibrated Kater pendulum or an instrument for measuring g. Steady the base by hand and time small swings below 10°. Preview poses ±35° are illustrative only. External bolt and washers are omitted from the preview.

## Run / build / reproduce

Node 22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261103-11/`. Per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`; publication uses the ROOT combined `deploy/` flow.

`python3 serve.py` serves the actual production build at port 5781 with its base-path prefix; `--staged` serves the combined root deploy. Reproducible checks: `node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node stale-test.cjs`, `node presentation-test.cjs`, `node icons-drop-test.cjs`, `node hole-check.mjs`, `node kit-ui-test.cjs`. Results in validation JSON and VALIDATION.md describe checks actually run.

## Reference-first evidence

Searched actual local STL collections first and inspected Keycap Studio and Weave instructions. Parsed `keycap_generator2/public/templates/clicker_template2.stl` and `fidget_fabric_generator/public/templates/diamond-link.stl`; measured hashes, dimensions, triangles and components are in `reference-measurements.json`. Neither switch cavities nor interlocking fabric links provide a suitable flat-sheet carrier/socket reference, so they were rejected for this kit. Reference trees stayed read-only.

Selected public reference: **Mike Kasberg, White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Downloaded the actual binary STL in this run, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Parsed 30,616 triangles, 179.820 × 178.020 × 3.190 mm, 27 edge-adjacent components including defective faces. STL has no units; mm assumed from documented sheet scale. No repair or redistribution of the raw mesh.

Inspected actual mesh sections at Z=.1/.5/1.59 mm before final geometry selection: `evidence/reference-sections.png`. Measured sheet planes 0/1.60 mm; rectangular sockets 4.50 × 1.700012 mm; low runner tops .21/.22 mm. Our original reconstruction preserves default 1.60 mm sheet and 4.50 × 1.70 mm sockets. Proposed—not source measurements—4.40 mm-wide tongues, .10 mm TOTAL socket allowance, stronger .4–.6 mm bed-contact runners, M3 bores and new pendulum architecture. Concrete mapping in `reference-analysis.json`. Source cat artwork is not copied.

Visual/interaction reference inspected read-only: Keycap Studio README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete patterns used: 374 px scrollable left rail, compact sticky brand/theme bar, lavender desk, white panels, pink tactile keys with lower shadows, paired numeric/range controls, collapsible sections, right orbit viewer, source/cutout checkerboard and phone preview-first stack. Shared studio infrastructure is adapted from prior daily_app2 work, not the reference dependency tree or Git history. The unequal-ended blade, alternative coaxial placements, tower, assembly instructions and model-specific checks are new; this is not a new paint scheme for the prior probability/illusion kits.

## Millimeter parameter ranges

| Parameter | Supported range | Real effect |
|---|---|---|
| Card width / height | 130–160 / 245–290 | Connected carrier envelope; undersized combinations blocked |
| Blade center span | 50–65 | Distance between end-lobe centers |
| Heavy lobe radius | 8–12 | Unequal mass distribution; light lobe radius fixed 5 |
| Pivot inset | 5–8 | Bore centers inset from lobe centers; pivot separation = span − 2 inset |
| M3 bore diameter | 3.2–3.6 | Actual axle holes in tower and blade |
| Sheet | 1.6–2.4 | All flat structural parts and carrier |
| Spacing | 3–5 | Actual part-to-carrier bay spacing |
| Tab width / thickness | .8–1.2 / .4–.6 | Twelve accessible breakaway runners |
| Socket allowance | .10–.25 TOTAL | Slot depth = sheet + allowance; tongue width = 4.5 − allowance |

Base 108 × 96 mm with three silhouettes. Tower 70 × 85 mm plus tongues, two 18 × 52 mm windows, axle at local height 75 mm. Blade 5 mm spine with reinforced 4 mm-radius bore pads, 5 mm light-end and adjustable heavy-end lobes; two .4 mm-deep witness marks. Both bore positions straddle the exact signed-tetrahedral uniform-density mesh centroid, computed from the real blade. Reported distances are geometrical, not a prediction of the printed part's periods. Nonuniform infill and hardware change mass properties.

Three real presets include generated thumbnails. Bounded variation, undo/redo, six local named designs, JSON save/open with bounded portable assets, explicit errors for missing payloads. No unsupported geometry is silently repaired or hull-replaced.

## Image, SVG, text and icons

PNG/JPEG ≤2 MB, ≤12 MP and ≤6,000 px per side, actual content/header and decoded dimensions checked. Normalize to ≤500 px. Simple safe SVG ≤2 MB/2,000 elements rasterizes locally to 256 px; scripts, references, external resources, effects and unoutlined text rejected. Six searchable original bundled icons and up-to-eight-character text use the same pipeline. Synthetic sample PNG/JPEG/SVG and STL fixtures are bundled with attribution.

Show source and actual checkerboard conversion grid. Fit/cover, crop ±25%, background/invert, threshold 1–254, relief depth .4–.6 mm. A bounded **20 × 20 luminance grid** creates a closed piecewise-linear height solid, genuinely Boolean-subtracted from the fixed front apron at Y=−39 mm. Threshold selects dark heights; grayscale scales depth by 1−luminance/255. Bright holes remain unengraved on continuous backing, independently probed. This is sampled **2D-to-relief/silhouette conversion**, not exact vector tracing or automatic reconstruction of a full 3D object from one photograph.

Footprint 4–7 mm, rotation ±180°, placement X±1.5/Y±2 mm; complete art must fit within a 6.5 mm protected radius. Depth leaves ≥1 mm backing. Only engraving is supported so art cannot obstruct motion or change the blade's mass. Replace/remove/reset are real and affect export. Empty art or impossible placement blocks export.

## Imported STL workflow

ASCII and binary STL ≤2 MB/1,500 triangles; finite source dimensions .2–250 mm per axis. Explicitly confirm millimeters: STL has no unit metadata. Before attaching, choose Z/Y/−Z up; changing axis clears source and asks reattachment. Source dimensions/format/triangles, interactive source preview, proportional XY footprint, independent engraving depth, rotation, placement and reset are shown. Original mesh is genuinely Boolean-subtracted from the protected base apron; not merely displayed or re-exported.

Deliberately supported contract: one closed outward-wound **convex** solid, broad flat bottom ≥25% footprint, no projected overhang. Concave/hollow/branched/disconnected/self-intersecting/open/nonmanifold/inverted/excessive meshes are rejected with actionable feedback, not changed to a hull. Convexity is validation only; a bottom-footprint hull is used only for support checking. Minimum transformed XY extent 1.2 mm. Unsupported sources should be edited/reoriented in a modeler and reattached. Parsing and heavy work run in the worker.

## Local processing and exports

No APIs, uploads, keys, external services, fonts or CDN generation dependencies. React, Three.js, Manifold WASM, fflate and OFL Fredoka/Rubik fonts are bundled locally. Heavy solid booleans and final edge/winding preflight run in a worker with 100 ms debounce, request IDs, stale-result guard and current-state export key. Invalid edits block exports immediately; retained last-good previews are labeled. Preview and downloaded binary STL share exact meshes and tested signatures.

Connected card, de-tabbed print plate, assembled, exploded and isolated parts; alternate mounting pivot, ghost blade, orbit/zoom/fit/top/front. Exploded positions are illustrative. Bed-flat exports do not use assembled overlap. Prominent per-part STL buttons and Everything ZIP contain connected card, three clean parts, portable design JSON and numbered assembly/printing instructions. STL has geometry, not preview color. No fake 3MF.

## Print / release / assembly

1. Print clean tower and blade first to calibrate M3 bores and socket/tongue fits. PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls, uniform solid infill preferred for comparisons. No supports intended. Default card is 140 × 260 mm: use clean-part exports on smaller beds.
2. Snip twelve tabs 1.8 mm outside part edges; file stubs flush without harming tongues or bores. Adult teaching/craft kit with small parts.
3. Dry-fit tower shoulders to base; bond both fixed tongues with suitable adhesive and allow full cure. Not load-bearing.
4. Supply one **M3 × 16 mm bolt, one M3 locknut, two M3 washers** nominally 1 mm each. Bolt through tower; washers between tower and blade; hang light-end bore; retain with locknut without clamping. Preview face gap 2.5 mm includes washers and about .5 mm axial play. Prefer smooth shank through blade; check actual thread engagement. Do not force tight printed bores, adjust and reprint. Hardware omitted from preview.
5. Steady base, release blade gently below 10°, time ten full oscillations and divide by ten. Remove nut/blade, invert blade, remount via heavy-end bore and compare. Both suspensions have the centroid below the pivot at rest; equal periods are not guaranteed. No simulation, physical timing or accuracy claim.
6. Ideal rigid-body relation T=2π√((I_com+m d²)/(m g d)); UI reports mesh-centroid distances, not physical periods. Infill, axle drag, flexibility and alignment matter. Never glue moving blade. See exported ASSEMBLY.txt for full notes.

Tests separately cover closed manifolds, outward winding, dimensions, positive per-component volumes, support-free slices, 30 poses across both pivots, coaxial alignment, tower insertion and axial blade removal, continuous apron backing, real bores, source interfaces, card connectivity and safe tab cuts. These are computational checks, **not physical print, assembly, strength or timing tests**.
