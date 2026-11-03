# Coil & Compass — air-core former kit-card studio

An original six-part flat-pack coil former: two pierced flanges and four longitudinal rails. Snip 24 accessible runners, seat eight shoulder-supported tenons and **glue** the joints. Hand-wind external fine insulated wire or thread around the rails; the center remains open for an optional external compass/core. This makes a passive former, not a powered circuit, calibrated magnetometer or electromagnetic simulation. No physical printing, bonding, winding, electrical, thermal or magnetic testing has been performed.

## Run / publish

Node22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. React+Vite, Three.js/OrbitControls, Manifold WASM and fflate are installed locally. Fredoka/Rubik fonts are bundled via Fontsource (OFL); Manifold Apache2, Three MIT, fflate MIT. The app base is `/daily-app2/20261103-23/`. Per-app gh-pages is installed with `predeploy: npm run build` and `deploy: gh-pages -d dist`; public combined-site publication uses the repository ROOT deployment.

## Reference-first evidence

Inspected local keycap_generator2 README, App.tsx, styles.css, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts, read-only. Concrete studio patterns:374px left rail, collapsible sections, paired range/mm fields, pink tactile selections, worker-owned kernel, checkerboard cutout, source/base transform editor, saved theme and current-result export gating. Preview first on phones, then dimensions/exports and stacked controls. No dependency/history tree copied from that project. Reused this monorepo's local import/editor/export infrastructure; geometry and assembly are new.

Actual local switch-template and diamond-link meshes were parsed and measured before rejecting them as inappropriate sheet-card references (details in reference-measurements.json). Downloaded and parsed **White Cat Kit Card**, Mike Kasberg, [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream instructions](https://github.com/mkasberg/white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Upstream README/LICENSE inspected; attribution retained in REFERENCE-UPSTREAM.md / REFERENCE-LICENSE.txt. This original reconstruction changes the assembly to a coil former and does not redistribute source artwork/raw STL or imply endorsement.

SHA-256:`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary,30,616 triangles,179.82×178.02×3.19mm assuming millimeters (STL carries no units),27 edge-adjacent components, not watertight. Source defects are recorded, not repaired or reused. Actual section views Z=.1/.5/1.59mm are in evidence/reference-sections.png. Measured 1.60mm sheet,4.50×1.70mm sockets in pierced discs and .21–.22mm low runners map to real generator dimensions. See reference-analysis.json for measured versus proposed values. Run `python reference-measure.py /path/to/downloaded.stl` with trimesh,numpy,matplotlib for reproducible read-only analysis.

## Parameters (all physical dimensions mm)

Card width100–160, height220–300; clear bore20–32; inside winding span30–54; rail radial web7–9; sheet1.6–2.4; spacing3–5; tab width.8–1.2; tab thickness.4–.6; socket TOTAL clearance.10–.30 per dimension. Round/hexagon/octagon flanges; three actual mesh-thumbnail presets and bounded variation. Incompatible card sizes are blocked. Default110×260×1.6mm card needs a tall bed; per-part STLs suit smaller beds.

Tongues are4.50mm radial × sheet tangential. Default sockets4.65×1.75mm adapt, rather than duplicate, source4.50×1.70. Shoulders locate open winding span. Clearance joints are **not** positively retained without adhesive. Print a rear-flange and rail first as a fit coupon; allowances depend on printer/material. Eight parallel insertion paths are checked, as are clear bore, nonintersection and tab removal. No switch sockets or motion controls are imposed.

## Image / text / icon / SVG workflow

File picker on phone/desktop and desktop drop. PNG/JPEG actual headers, ≤2MB, ≤12MP and ≤6000px side checked before decoding. Browser normalizes to≤500px, then20×20 heights. Thresholded luminance or grayscale relief uses a continuously triangulated top surface over a solid backing, Boolean-subtracted from the flange's protected maker lug. Fit/cover, crop offsets±25%, threshold1–254, dark/light background, physical footprint4–7mm, depth.4–.6mm, rotation±180° and placement X±1.5/Y±2mm affect exported geometry. Engraving only: raised marks would violate the flat sheet envelope. Cutout checkerboard shows the sampled material mask; bright holes remain uncut but fine outlines are resolution-limited. This is **2D-to-relief, not reconstruction of a full 3D object from one photo**.

Bundled six searchable vector icons and text rasterize locally through the same path. Simple SVG paths/shapes (≤2000 elements) rasterize at256px; scripts, links, text and external resources are rejected. Synthetic ring.svg tests hole preservation; no invisible background slab is engraved. Text should be bold and short for20×20 sampling.

## STL integration

ASCII and binary .stl ≤2MB and≤1500 triangles, each axis.2–250mm. Validates content/length, finite dimensions, nondegenerate triangles, welded edge incidence/opposite winding, single connected positive volume, self-intersections, convexity and broad flat-bottom support. Unsupported concave, hollow, disconnected or overhanging geometry is explicitly rejected; **never hull-replaced or silently repaired**. Although a hull is calculated to validate the bottom footprint, the exact source mesh is used in CSG.

Choose Z/Y/−Z up before attaching and explicitly confirm assumed millimeters. Source preview and measured dimensions are shown. XY scales proportionally into4–7mm footprint; Z independently maps to.4–.6mm engraving depth. Center/reset, rotation and placement are real exact-mesh Boolean cuts into the front flange, not unchanged re-exports or interpenetrating shells. Result keeps≥1mm backing and a6.5mm radial artwork keep-in area. Replace/remove/reset returns to defaults. The body is truly changed in its STL.

## Local state and exact exports

All personal files stay in the browser; no uploads, APIs, keys or CDN generation dependencies. Only synthetic sample fixtures are bundled. Undo/redo, six named local designs and portable JSON include bounded image/mesh payloads. Missing image payload explicitly requests reattachment; saved mesh is revalidated. Invalid source/current parameters or worker failure disable all exports. A stale last-good preview is labelled and cannot export. Worker build IDs and a current-state key guard rapid edits.

Connected-card, de-tabbed print-plate, actual assembled and illustrative exploded views use the same valid meshes, as do isolated-part views. Orbit/zoom, fit, top/front, touch orbit/pinch and see-through rails explain assembly. External wire/compass/glue are omitted. Export defaults to actual connected-card geometry; binary STL per part and Everything ZIP include numbered ASSEMBLY.txt plus portable JSON. STL does not store preview colours. No fake3MF.

## Print / assembly

Print flat, engraved flange outer face DOWN,0.4mm nozzle,0.16–0.20mm layers,3+walls,PLA/PETG,100%scale. No supports intended; inspect shallow engravings in slicer. Snip all24runners away from functional slots/tenon ends. Seat four rails in rear-flange, bond and square, then lower signature-flange over all four upper tenons and bond. Let adhesive fully cure. Deburr before gently winding external0.2–0.3mm insulated wire or thread; tie ends through the two flange holes. Keep bore clear; winding spans unsupported rail gaps and must use low tension. No load-bearing claim.

This passive former has no current/heat rating. Do not connect directly to battery/mains. Any separately designed supervised low-voltage coil experiment needs a current-limited supply and appropriate wire/insulation; disconnect if warm. Thread is a passive hardware-free alternative. See in-app numbered guide and ZIP ASSEMBLY.txt for full steps, fits and disclaimers.

## Reproducible verification

`npm test` runs50mesh/assembly parameter cases (presets, all numeric ends, sixteen geometric corners, silhouettes, real ASCII/binary-derived and threshold/grayscale-derived parts). Independent binary STL checks parse normals, triangles, finite coordinates, dimensions, welded1e-5mm edges, opposing winding, each component's positive volume. CSG checks connected card,24runner cuts yielding carrier+six intact parts, nonoverlap, bed footprint, all8slots, clear bore and seven assembly insertion heights. These are computational geometry checks, **not physical print or magnetic tests**.

Serve production via `python3 serve.py` (5823), then `node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node stale-test.cjs`, `node icons-drop-test.cjs`. Tests use real file-picker uploads/downloads and regenerate saved JSON to compare exact output signatures, not download success alone. Reports/screenshots stored beside source. Browser failures are fixed before publication; see VALIDATION.md for completed results.
