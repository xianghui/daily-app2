# Bight & Cleat

A **four-part parametric knot-practice kit card**, built with React + Vite. Snip sixteen runners, stand two twin-horn cleats in a pierced deck, bond four tongue seats, and use the separate pierced shuttle to carry soft cord between stations. Wrap figure eights, add a loose reversed bight, then lift and unwind. This is a physical assembly generator, not a browser game or knot simulator.

**No physical print, knot handling, friction, strength, fatigue or durability test has been performed.** Computational fit is not proof of practical knot behavior. Soft1–2mm cord and suitable adhesive are external supplies. Gentle handling only; thin horns can break. Not for mooring, climbing or any load-bearing use.

## Run and dependencies

Node22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base `/daily-app2/20261030-26/`. Per-app `predeploy` is exactly `npm run build`; `deploy` is `gh-pages -d dist`. Public publication uses the root monorepo deploy folder, not individual deployment.

React/ReactDOM, Vite/plugin-react, Three.js, Manifold3D WASM (Apache2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for browser checks. Dependencies, fonts and WASM are locally bundled. Geometry and STL parsing run in a browser Web Worker. No API keys, paid services, CDN imports, upload, backend generation or personal assets in the repository. The bundled image/SVG/STL examples are synthetic local studio fixtures.

## Reference-first evidence

Read-only local STL search preceded final geometry. Keycap Studio's README, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/worker.ts`, `src/export.ts`, `src/imageTrace.ts` and `src/geometry/stl.ts` supplied concrete visual/interaction patterns. Fabric Fidget Studio README and actual link and switch meshes were inspected and measured; neither offers a suitable flat sheet/socket assembly. Their hashes, dimensions and component counts are recorded in `reference-measurements.json`. No reference tree, deploy script, history or dependency tree was modified/copied wholesale.

A fresh public **White Cat Kit Card** STL was downloaded from Printables and parsed, not inferred from a listing image. Credit: **Mike Kasberg**, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Source README and license retained. Attribution is not endorsement; cat/fan-art shapes are not reproduced and raw third-party STL is not redistributed.

Binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.30,616 triangles;179.819997 ×178.019994 ×3.190000 mm;27 edge-adjacent components; **not watertight**. Source units assumed mm from sheet dimensions, because STL has no units. Source defects are disclosed; this app does not repair/re-export that mesh.

`reference-inspect.py` parses the actual downloaded mesh and local candidates; `reference-measurements.json` records bounds, components, Z planes and socket loops; `evidence/reference-sections.png` shows actual cross-sections at Z=.1,.5,1.59mm. `reference-analysis.json` distinguishes measured dimensions from proposed tolerances and new features:

- Measured1.6mm sheet → default cleats and shuttle preserve it; thicker1.8–2mm and2–2.8mm deck are reinforced redesigns.
- Measured4.5 ×1.700012mm sockets → tongue4.4 +.10 TOTAL allowance, sheet1.6 +.10 reproduce them. Default.15 and.10–.35 adjustment are untested printer/material-dependent starts, not universal fits.
- Source low carrier.21/.22mm → sixteen stronger .4–.6mm accessible runners are reconstructed with real Boolean unions.
- Two twin-horn cleats, two-station deck, cord eyes, shuttle, safe engraving zone, assembly and packing are original. No switch socket, hull substitution, source fan-art or previous mechanism is repackaged.

The shared local studio/parser/export infrastructure is adapted from earlier daily-app studios; the cleat/shuttle geometry, assembly transforms and mechanical checks are new. Concrete Keycap Studio patterns:374px scrollable left rail, sticky compact header, lavender-grey desk, white panels, coral selections, tactile lower-shadow buttons, paired numeric/sliders, collapsible sections, checkerboard cutout, imported-source3D preview, saved theme, production worker and exact-current-result export gating. Phones stack preview first, then dimensions/export, then controls. Touch orbit/pinch, focus and reduced-motion are supported.

## Parameters, all in millimeters

| Control | Supported range |
|---|---|
| Card width / height |260–280 /190–210 |
| Deck width / working depth |100–112 /44–52; front extension adds20 depth |
| Horn span / height |26–34 /20–28 |
| Station spacing |46–54 |
| Cord-eye diameter |2.5–4 |
| Deck / cleat sheet thickness |2–2.8 /1.6–2 |
| Tongue width / total socket allowance |4.4–6 /.10–.35 |
| Part spacing |3.5–5 |
| Breakaway width / thickness |.8–1.4 /.4–.6 |
| Import footprint / engraving depth |4–7 /.4–.6 |
| Import X / Y / Z rotation |±1.5 /±2 /±180°; radial6.5mm keep-in check |

Harbor, Bight and Dockside are real geometry presets with generated thumbnails. Three deck silhouettes, bounded variation, undo/redo, six local named designs, and JSON save/open. JSON carries bounded actual mesh or normalized image payloads, never pretend file paths. Missing/corrupt assets block export and request reattachment. Replacing/removing imports, reset transforms and reset all are working paths.

## Genuine card, assembly and interaction

Card frame2.4mm wide with two bay dividers, all parts inside declared envelope. Four bed-aligned runners per part, sixteen total, actually Boolean-connect every part to frame. Snips1.6mm away from part edges release four distinct parts plus carrier without damaging functional tongues or horns. Cleat tab landings sit on straight shoulders and horn sides, not rapidly sloping necks. Per-part STLs have no runners.

Each cleat has two4.4–6 ×1.6–2mm tongues at14mm pitch. Rotate90° X upright: local negative-Y tongues become downward pins, shoulders seat at deck top and tongues reach deck bottom. Four deck sockets add selected total allowance in both axes. No snap lock or calibrated-friction retention claim: **bond all four seats and cure square**. Cleats insert vertically without intersecting deck or each other. Inter-horn clearance≥12mm and under-horn access height≥12mm across supported settings. The loose shuttle rests on the deck in assembled preview, not mechanically attached. Cord/knot topology, tension and force are not simulated.

1. Print at100% mm, flat, PLA/PETG, .16–.20mm layers, three walls as untested FDM starts. No supports intended; check slicer. Individual parts fit smaller beds.
2. Snip16 runners, trim nubs and discard frame; retain four parts.
3. Calibrate tongue/socket trial in.05mm allowance steps before full assembly. Do not globally rescale in slicer; material/printer fits vary.
4. Rotate cleats upright, insert both tongues at each station, seat shoulders, bond and cure square. Keep adhesive off cord.
5. Use soft1–2mm cord loosely: bring around stem, cross crown in figure eights, finish with loose reversed bight over one horn. Lift bight and unwrap to release. Shuttle carries loose cord between stations. Do not tension thin horns.
6. Inspect for cracks and stop if binding/breaking. No load rating or practical knot-performance guarantee.

Assembled, exploded, connected card, de-tabbed plate and four isolated-part views share exact meshes. Exploded positions are explanatory only. All binary STL exports use real bed-flat geometry, not assembled interpenetration or a screenshot. Individual buttons plus Everything ZIP (card +4 clean STLs + numbered ASSEMBLY.txt with current fits). STL does not store preview color. No mislabeled3MF.

## PNG/JPEG/SVG → real geometry

Choose file on desktop/phone or drop one file. PNG/JPEG16bytes–2MB; signature/extension,≤12MP,≤6000px side checked before decode; normalized longest side≤500px. Simple SVG≤2000 elements rasterizes locally at256px; active/external resources, text and unsupported effects rejected. Synthetic examples available without personal uploads.

Exact method: composite on light/dark background, fit/contain or fill/crop with±25% shift; sample20×20 luminance; threshold1–254 makes silhouette depths, or grayscale maps darkness continuously to depth. A closed triangulated height-field is Boolean-subtracted into the front deck signature pad. Checkerboard displays the actual sampled cutout beside source. **This is sampled2D-to-relief/silhouette engraving, not precise vector tracing or reconstruction of a full3D object from a photo.** Bright holes remain unengraved over continuous backing; actual-solid probes verify this. Blank silhouette is an error. Text≤8 chars and six searchable bundled icons use this same real pathway. Raised art intentionally unsupported to keep a bed-flat substrate.

Footprint, depth, rotation, placement, threshold and changed pixel contents measurably alter exported STL. Engraving.4–.6mm leaves≥1.4mm deck thickness;6.5mm safe radial zone cannot reach sockets, cord eyes or horns. No texture-only personalization.

## ASCII/binary STL → exact mesh engraving

≤2MB,≤1500 triangles,.2–250mm per oriented axis. Show source dimensions, format, triangles and source3D preview. Explicitly confirm millimeters (STL has no unit metadata). Select Z/Y/negative-Z up; axis change clears asset and requests reattachment. XY scales proportionally to4–7mm footprint; Z separately to.4–.6mm depth. Display actual scale factors; rotation/center/place/reset/replace/remove all affect geometry.

Strict parser verifies complete facets/bytes, finite bounded coordinates, nondegenerate triangles, one outward positive-volume component, opposite two-face welded edge incidence, triangle self-intersections, convexity, broad flat bottom and no overhang footprint. **Concave, hollow, open/nonmanifold, disconnected, branched or overhung STL is unsupported**, with actionable rejection and no repair claim. A footprint hull is only a validation predicate; accepted original vertices/faces, never a replacement hull, form the real Manifold cutter. Subtraction integrates source shape in the deck; it is not unchanged re-export or overlapping visual shells. Narrow XY features below1.2mm after scale are blocked. Files process locally only.

## Responsiveness and current-result safety

100ms debounce, bounded modeling/image resolution, worker-based WASM CSG and STL parsing, request IDs and exact-state key. Every generated part passes final closed-manifold/winding preflight. Real building/success/error; invalid/pending/import-failed states disable all exports, even when last-good preview is shown. Worker load failure asks reload and blocks export. Preview/export use the exact same current geometry; UI fingerprint is checked against actual download and Node regeneration from saved JSON.

## Reproducible checks (computational only)

- `npm test`:38 default/preset/shape/combined-and-individual-bound cases plus8 image/STL cases. Independent binary byte counts, nonempty finite nondegenerate triangles, normals/winding,1e-5mm welded opposite two-face edges, each component positive volume, expected mm bounds and bed alignment for card and every clean part.
- `node import-extremes.mjs`:105 further imported-image/STL preset/extreme cases, all same mesh/assembly checks; measured4.5×1.7 reference socket reproduced.
- Assembly validation:6 pairwise actual-solid intersections,42 cleat insertion poses,4 socket gauges,2 shoulder overtravel stops,4 under-horn access probes, packed parts disjoint,16 nondamaging cuts release4 parts + carrier,40 upper sections over bed footprints. Assumes cured adhesive; does not test joint strength or knots.
- `node browser-test.cjs`:real production-prefix PNG/JPEG/ASCII/binary file uploads; actual STL downloads parsed, compared against default and regenerated exact JSON. Pixel/threshold/depth/crop/scale/rotate/place changes survive export; invalid/truncated/open/nonmanifold/concave/excessive/blank/bad-transform states recoverably block export.320/390px no overflow, reachable exports, touch orbit/pinch proven by changed canvas captures, phone imports/downloads.
- `node studio-test.cjs`:all presets/shapes, text/icons/SVG, preserved image and mesh JSON, named save/reload, missing payload, undo/redo, every ZIP STL parsed, all views, saved dark theme, keyboard focus, collapsible controls, reduced motion,374px left rail, phone preview first, production-worker abort/reload recovery.
- `node sensitivity-check.mjs`:all15 geometry controls change exported card. `node hole-check.mjs`:actual solid probes preserve image holes. `node axis-test.cjs`:Y/negative-Z transforms survive export. `node stale-test.cjs`:rapid edits and invalid-last-good export blocking.

Reports and screenshots are beside the app. Production-prefix server: `node serve.cjs` (port5531); tests use built `dist`, not only Vite development. Root gallery scripts, prior entries and combined deploy routes validated before publication. **No physical tests performed.**
