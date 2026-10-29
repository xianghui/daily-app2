# Slide & Poise

A React + Vite maker studio for a **five-part steelyard balance kit card**. Snip twenty real runners, glue a cantilever mast into its plinth, suspend the asymmetric beam and supplied printed load on thread, then slide a cord-hung poise along the long arm. The nominal balancing position is calculated from actual final mesh volumes and centroids, not a decorative animation. This is a miniature moment demonstrator, **not a calibrated weighing instrument**.

## Run / dependencies

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base: `/daily-app2/20261029-27/`. Individual `deploy` is `gh-pages -d dist`; the combined public site uses the parent repository's root deployment.

Locally bundled dependencies: React, Three.js/OrbitControls, Manifold WASM (solid booleans), fflate ZIP, Fredoka/Rubik (Fontsource, SIL OFL). Playwright is a development test dependency. No API, key, paid service, CDN or upload service is required.

## Reference-first provenance and actual inspection

Local STL candidates were found first under `/Volumes/ExternalHD/3d_printing_apps/`. Actual switch-template and fabric-link meshes were parsed: source identifiers, SHA-256, dimensions and components are in `evidence/local-candidate-analysis.json`. Keycap and fabric READMEs and slider rail instructions were inspected; switch sockets/captive links are unsuitable for a bed-flat sheet kit. The local kit-card projects contained generators but no suitable source STL. All reference trees stayed read-only.

Selected public reference: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source project](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). License text was retrieved from the source repository. The actual public binary STL was freshly downloaded outside this repository and parsed this run.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Source envelope: **179.820 × 178.020 × 3.190 mm**, 30,616 triangles, 27 edge-adjacent components (including tiny defective fragments). The reference is **not watertight**; it is not claimed repaired or redistributed.
- STL has no unit metadata. Millimeters are assumed, consistent with its sheet construction and documented 1.6 mm sheet.
- Actual Z=.10/.50/1.59 mm mesh sections were inspected (`evidence/reference-sections.png`). Measured main sheet: 1.6 mm; outer carrier ray width: 1.599999 mm; low bridge planes: .21/.22 mm. Four real pierced slot loops measure 4.5 × 1.700012 mm; bounds and component details are in `reference-analysis.json`.
- **Preserved:** planar sheet, independently assembled parts, pierced interfaces and accessible low sacrificial carrier. Default sheet thickness remains 1.6 mm. The source's 4.5 × 1.7 mm socket cross-section informs a 4.4 mm tongue with sheet-thickness + allowance mortise.
- **Redesigned / proposed, not measured source fits:** entire steelyard geometry, 26 mm short arm, 54–64 mm long arm, 2 mm cord eyes, 4.4 mm mast tongue, .10–.35 mm total socket allowance, 2.4 mm carrier and .4–.6 mm runners. Original spaceship panels are not copied. There is no assertion that a source tenon was measured or that these clearances are universal.
- This is an original parametric reconstruction using actual source sheet/socket/carrier structure. No raw third-party mesh is bundled; no imported geometry is silently replaced by a convex hull.

Reproduce using `reference-inspect.py /path/to/separately-downloaded-source.stl` with Python trimesh/numpy/matplotlib/scipy/networkx. Raw reference assets remain outside the repository.

## Interaction reference

Read-only inspection of `keycap_generator2` included README, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, image tracing, STL read/write, imported-base CSG and export modules. Concrete retained patterns: 374 px scrollable left panel; compact sticky brand/theme header; labelled collapsible sections; paired sliders/numeric millimeter inputs; tactile lower shadows and pressed selections; lavender desk, white panels, coral accents; locally bundled rounded fonts; saved dark theme; right-side large gradient viewer with toolbar/status/dimensions/export below; phone preview-first stacking. Imported mesh dimensions, unit confirmation, orientation, placement and source preview are explicit. No unrelated switch sockets. Shared studio/import infrastructure was adapted from the preceding daily app; the steelyard model and its mechanics tests are new.

## Parameters and geometry

All lengths are millimeters; angles are labelled degrees.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 200–240 / 160–210 |
| Mast height | 62–74 |
| Long arm (pivot to end station) | 54–64 |
| Load / poise diameter | 24–28 / 20–26 |
| Sheet thickness | 1.6–2.4 |
| Mast total allowance | .10–.35 |
| Part spacing | 4–6 |
| Breakaway runner width / thickness | .8–1.4 / .4–.6 |
| Beam distance-tick engraving | 0–.4 |

Plinth is 100 × 44 mm, with soft-rectangle, chamfered or elliptical silhouettes. Mast tongue is 4.4 mm wide and one sheet thickness long; its through socket is `(4.4 + allowance) × (sheet + allowance)`. Shoulders rest on the plinth and the tongue ends flush underneath. Three real presets have generated thumbnails. Bounded random variation changes real physical parameters. Invalid/nonfinite/out-of-range inputs or infeasible card envelopes block export.

Load bore is 26 mm from pivot. Poise is hung from a loose thread loop around the long beam and can slide or lift off its free end; no false captive retention claim. The suspension eye sits 5 mm above the beam centre. Actual signed-tetrahedron integration supplies beam volume/centroid and pendant volumes. Nominal position satisfies `beamVolume × beamCentroidX − loadVolume × 26 + poiseVolume × poiseX = 0`, assuming identical uniform density. Valid position must lie between 8 and `longArm − 5` mm. Tick marks are distance marks, not a mass scale. Beam centre of mass remains below its suspension eye. Loops, knots, friction and real infill are not included in the ideal mass model.

## Local image / text / icon workflow

Pick or drop **PNG, JPEG or simple SVG**; text (up to eight characters) and six searchable bundled SVG marks use the same conversion pipeline. Synthetic sample fixtures under `public/samples/` contain no personal files.

- Max 2 MB; raster headers checked before decode: ≤12 MP, ≤6,000 px per side. Normalize to ≤500 px for bounded portable storage. Simple SVG paths/shapes only, ≤2,000 elements, locally rasterized to 256 px; scripts, references, external resources and effects rejected.
- Original image and actual checkerboard cutout/height grid are shown. Light/dark background, threshold 1–254, grayscale mode, contain/cover crop and ±25% pan affect final geometry.
- A **20 × 20 sampled height grid** becomes a two-triangle-per-cell top surface closed down to a continuous backing; boolean union/subtraction integrates it into a recessed plinth medallion. This is **2D-to-relief, not full-object reconstruction from one photo**, and not exact outline tracing. Clear interior regions preserve unraised/unengraved holes above backing, not through-holes. A real solid probe checks the clear centre of ring artwork.
- Raised depth .4–3 mm; engraving .4–.6 mm; footprint 4–7 mm; rotation ±180°; X ±1.5 and Y ±2 mm. All transformed geometry must stay inside a 13 mm safe zone at plinth X=-25, Y=9. Minimum backing after deepest engraving at thinnest sheet is .8 mm. Fine sampled features may be omitted by a slicer/nozzle; use bold artwork.
- Import changes are real exported geometry, not textures. Colours are preview-only; STL does not store them. Replace, remove and reset are available.

## Local STL workflow and explicit limitations

**Binary and ASCII STL** are parsed in the worker. Max 2 MB, 1,500 triangles, .2–250 mm per source dimension. Checks: finite coordinates, triangle area, welded opposite-directed two-face edge incidence, one connected component, outward winding/positive volume, triangle intersections and support-free bottom contact.

Supported: one outward-wound **convex closed solid with a broad flat bottom**. Concave, hollow, disconnected, thin-branched, open/nonmanifold or unsupported-overhang inputs are explicitly rejected, not silently repaired or replaced by a hull. A hull is used only to validate the bottom contact footprint; the **original mesh triangles** are used for final union.

Choose Z up, Y up or inverted Z before attachment (changing orientation clears the old source and requests reattachment). Source dimensions, format and triangle count are displayed in a source viewer. Explicitly confirm millimeters because STL has no unit metadata. XY scales proportionally to footprint; Z independently fits .6–3 mm height. Exact scale factors, rotation and placement are shown. Source is sunk .15 mm into the .2 mm medallion recess and genuinely solid-unioned with the plinth. It is not unchanged re-export. Safe-zone validation protects the mast joint and hanging mechanism. Reset transforms, remove/replace and built-in defaults work locally.

## Worker / current-state safety / designs

Heavy Manifold/CSG and STL topology work run in a Web Worker with bundled WASM. Debounced edits, generation ids, parse ids and current-state keys discard stale results. Invalid edits or pending conversion/file parsing disable every STL/ZIP action; the last-valid preview is labelled as such. Worker failures show a recoverable reload error. Preview and download use the exact same validated current result; UI mesh signature is checked against actual downloaded bytes.

Undo/redo, six local named designs and JSON save/open retain bounded normalized image/mesh payloads, not nonexistent file paths. Missing image payloads explicitly require reattachment. Restored STL payloads are reparsed and validated. All files stay in the local browser; no user inputs are uploaded or added to the repository. JSON is the portable backup if browser storage is cleared.

## Views, export and assembly

Connected card, de-tabbed print plate, hanging balance, exploded and isolated views share actual part geometry. Ghost view explains fit. Poise-position preview moves the hanging assembly only and stays horizontal: it is **not gravity simulation**. Cord lines are illustrative centre-lines, not printable geometry or exact knot routes. Exports always use real bed-flat meshes, independent of preview pose.

Binary STL for the genuine connected card or each of five parts; Everything ZIP contains six STLs and numbered `ASSEMBLY.txt`. Twenty real low runners connect the card; snipping leaves five parts plus carrier. Trim remnants with cutters without damaging eyes/slots. Check card dimensions against printer bed or export individual parts.

PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls, **100% infill and identical material for beam/pendants**. No supports intended. Calibrate mast tongue/socket first; glue and cure with shoulders seated. Supply three loops of 0.3–0.6 mm soft sewing thread (~300 mm plus knot tails), tie outside movement paths, adjust pendant bottoms ≥4 mm above plinth. Set the poise near its computed nominal position, then slide gently to balance by hand. No magnets, bearings or fasteners. Adhesive and thread are required consumables; there is no claimed cord-free alternative for this mechanism. Adult craft, not a lifting/weighing tool or children's toy.

## Validation

`npm test` independently reparses actual binary STL bytes: exact byte length, finite/nondegenerate faces, unit winding-consistent normals, positive volume per component, welded edge incidence with opposite direction (1e-5 mm weld), bounds and bed orientation. Tests cover card and every part for defaults, presets, min/max and mixed extrema, plus image/engraved/STL cases. Final geometry also has worker-side manifold checks.

Mechanics checks use actual Manifold solids: no assembled intersections, sampled vertical mast insertion, poise travel and ±5° near-horizontal ideal beam/pendant configurations, pendant floor clearance, signed-volume moment equilibrium, beam centroid below pivot, total COM projection inside a conservative support region, flat part separation, twenty accessible cuts, and six resulting components after snipping. Thread mass, flexibility, knot strength and sliding friction are not simulated.

Browser scripts (`browser-test.cjs`, `studio-test.cjs`, `supplemental-test.cjs`) exercise the **production build under its real base prefix**: real file-picker PNG/JPEG/ASCII/binary imports and downloaded STLs; changed pixels/threshold/depth/crop, scale/rotation/placement; replace/remove/reset; malformed/truncated/open/nonmanifold/concave/oversized/empty inputs; all presets/silhouettes; text/icons/SVG and engraving; exact preview/download/JSON-regenerated signatures; every ZIP STL; portable image/mesh/named-design round trips; undo/redo; views, saved theme, focus, collapsible sections; worker abort/recovery; rapid edits/stale export gating; 320/390 px phone layout, touch orbit/pinch and reachable exports. JSON reports and screenshots record observed results.

**No physical print, scale calibration, friction, strength, fatigue, knot, adhesive or durability testing was performed.** Watertightness, ideal balance and geometric fit alone do not prove real-world performance. Print small, calibrate the joint, tune cord lengths and fine-balance by hand.
