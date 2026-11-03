# Cascade & Swing

A React + Vite browser-local **three-part connected kit-card generator** for a hand-held double pendulum. Snip twelve real breakaway runners, assemble a broad grip plus two independent serial links, hold the sheet faces vertically, and gently release the links. Both lengths, distal bob, web width, grip silhouette, sheet, axle fits and carrier dimensions change exported solids. This is not a browser game or a dynamics simulator.

**Not physically printed or tested.** No claims of chaotic behavior, reliable periods, friction, fatigue, fastener security under use or impact safety. Preview angles are independent illustrative poses. Keep the upper link within ±60° from downward in use; no printed stops. The lower link may fold geometrically through ±180°. Use gently, inspect hardware and hold away from faces/children.

## Run and reproduce

Node 22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261103-21/`. App scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publication uses the ROOT monorepo predeploy/deploy flow, not an isolated app publish.

`python3 serve.py` serves the actual production build on port5821 with the correct base path. `--staged` serves root `deploy/`. Run `node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node stale-test.cjs`, `node presentation-test.cjs`, `node icons-drop-test.cjs`, `node hole-check.mjs`, `node pose-test.cjs`. Hole probing consumes the real SVG portable state saved by studio-test. JSON reports/screenshots document checks actually performed; see VALIDATION.md.

## Reference-first evidence

Local collections were inspected first, read-only: Keycap Studio README/import/export/worker/model files and Weave README. The actual clicker_template2.stl and diamond-link.stl were parsed with hashes, dimensions, components and triangle counts, recorded in reference-measurements.json. Switch sockets and 8mm interlocking fabric links do not offer a suitable sheet-carrier construction, so they were rejected for this kit.

Selected public reference: **White Cat Kit Card by Mike Kasberg**, [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream source](https://github.com/mkasberg/white-cat-kit-card), CC BY4.0. Upstream README and license saved as REFERENCE-UPSTREAM.md and REFERENCE-LICENSE.txt. Actual binary STL downloaded this run, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles, 179.820×178.020×3.190mm, 27 edge-adjacent components, not watertight. STL has no units: millimeters assumed from documented kit scale. No source mesh or artwork redistributed and no automatic repair claimed.

Representative actual mesh sections at Z=.1/.5/1.59mm were inspected before selecting the final geometry: evidence/reference-sections.png. Measured sheet planes0/1.60mm and low runner tops .21/.22mm. The default 1.6mm sheet and surrounding carrier/crossbars joined to parts by low removable runners map directly to the generated card. Proposed—not measured—.4–.6mm runner thickness improves handling; width .8–1.2mm. Measured source 4.50×1.700012mm rectangular sockets are recorded but NOT reused. The two round M3 axle joints, serial-link construction and mass shapes are new. Detailed mapping and deviations: reference-analysis.json. Fresh Manifold solids implement the adaptation; no hull or defective reference faces are imported.

Visual/interaction reference: read-only keycap_generator2 README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete patterns used: 374px scrollable left rail, sticky compact brand/theme bar, lavender desk, white panels, pink tactile buttons with solid lower shadows, pressed selections, paired range/number inputs, collapsible sections, large rounded right viewer, checkerboard source/cutout comparison, saved dark theme and phone preview-first stacking. Studio infrastructure adapted from prior daily_app2 work; no reference Git history/dependency tree copied. This mechanism differs from the common-pivot proportional divider and invertible one-link pendulum: its distal axle travels with the first link and the second link rotates independently.

## Parameters (millimeters unless degrees)

| Parameter | Range | Effect |
|---|---|---|
| Card width / height |110–170 /110–150|Real connected carrier envelope; impossible packing blocked|
| Upper pivot span |44–56|Distance between upper-link axle centers|
| Lower bob reach |20–28|Lower pivot to distal bob center|
| Bob radius |7–9|Distal printable mass shape; no predicted period|
| Link web width |6–9|Structural arm width|
| Sheet |1.6–2.4|Every part and full-height carrier|
| Spacing |3–5|Real bays and cutter access|
| Tab width / thickness |.8–1.2 /.4–.6|12 bed-aligned removable runners|
| Pivot diameter allowance |.2–.5 total|Bores3.2–3.5mm for nominal3mm axles|

Grip end/bob silhouettes: round, hexagon, octagon; three real presets and generated model thumbnails. Preview upper angle−60…60° and lower angle−180…180° alter only illustrative poses, never print orientation. Colour is preview-only; STL stores no colours. Undo/redo, bounded variation, reset, six named local designs, portable JSON save/open. Imported image/mesh payloads are bounded and included; missing image payloads explicitly request reattachment. Saves do not pretend missing files were restored.

## Two local import workflows

All user files stay in the browser. No upload, API, key, CDN or paid service. No personal fixtures in this repository. Synthetic bundled samples: mark.png, waves.jpg, ring.svg, wedge-ascii.stl and gem-binary.stl (CC0 original synthetic fixtures). Use the same file picker on desktop/phones; drop one file in Import on supporting browsers. Replace/remove/reset controls restore defaults.

**PNG/JPEG/SVG → actual relief engraving.** Verify content/header/pixel limits before decoding. Images normalized to ≤500px; render simple safe SVG locally at256px. Fit/cover, crop±25%, light/dark background, threshold1–254 or grayscale, engraved depth .4–.6mm. Sample20×20 luminance values into a closed triangular height-field solid, invert Y for image coordinates, then Boolean-subtract from grip bed face. Bright holes remain uncut on continuous backing; checkerboard shows the actual sampled cutout. This is sampled 2D-to-relief, not exact vector-outline tracing or single-photo full3D reconstruction. Text uses bundled Rubik, icons are six bundled original SVG marks; same conversion and real engraving. Raised art is intentionally unsupported to keep flat sheet/card bounds.

**ASCII/binary STL → exact mesh-shaped engraving.** Worker parser validates complete facets/byte length, finite values, nondegenerate faces, welded closed edges and opposing winding, connected positive volume, triangle intersections, convexity and broad flat-bed support. This deliberately bounded integration accepts only one closed convex solid whose XY footprint is supported by its broad bottom. Concave/hollow/open/disconnected/overhanging geometry is rejected with guidance, NEVER substituted with a hull or claimed repaired. Choose Z/Y/−Z up before attaching, inspect source3D/dimensions, explicitly confirm mm (STL has no units), adjust footprint/proportional XY scale and independent Z engraving depth, Zrotation±180° and XY placement. The exact original indexed mesh becomes a Manifold solid and Boolean-subtracts from the protected grip patch. It is not unchanged re-export or preview-only texture.

Common art footprint4–7mm, depth .4–.6mm, placement X±1.5/Y±2mm, radial keep-in6.5mm centered at original gripX=−35. Minimum backing1mm. The two moving joints are far outside this patch. Invalid placement/depth/empty silhouette disables export; no stale last-good export. Source and final model previews are separate.

Limits: file16bytes–2MB; STL1–1500triangles, each dimension .2–250mm, finite coordinates within±10000mm; PNG/JPEG≤12MP/6000px side, verify decoded dimensions; SVG≤2000simple shapes, no scripts/external refs/effects/fonts. Portable JSON≤2MB, image≤250000pixels, payload≤1.8MB. Error recovery retains replace/remove/default actions.

## Geometry and responsiveness

Locally bundled Manifold WASM in a Web Worker, Three.js OrbitControls, React/Vite, fflate ZIP, Fontsource Fredoka/Rubik (OFL). Debounced100ms builds, request IDs/current-state keys and image-conversion keys gate preview/export. Exact current valid model is shared by preview and binary STL; exported float32 triangle bytes have a visible data-geometry-signature. Worker load failure blocks export with reload guidance. No server is required after static hosting.

The card is a genuine single connected solid, not a plate of loose pieces. Four accessible low runners attach each of the three parts to its bay/frame. Connected card, de-tabbed plate, isolated grip/links, assembled and exploded all use the same actual meshes. Assembled placement has real .7mm gaps; exploded offsets are illustrative. Print exports always lie flat at Z=0, never intersecting assembled previews. Per-partSTL, connected-cardSTL, de-tabbed plateSTL and EverythingZIP (all4STLs, designJSON, numbered ASSEMBLY.txt). No3MF advertised.

## Printing and assembly

1. Print the default130×120×1.6mm connected card or three clean parts flat, engraved face down, PLA/PETG, .4mm nozzle, .16–.20mm layers, 3+walls, 100%scale. Inspect short bridges over shallow art. No supports intended, not physically verified.
2. Snip12runners about1.8mm outside part edges, smooth stubs, preserve FOUR total functional bores (grip1, upper2, lower1). Waste carrier plus three distinct clean parts. Adult maker use; small parts/sharp snipped edges.
3. External hardware: TWO M3×12mm pan-head screws, FOUR ~.5mm M3 metal washers, TWO M3 nylon locknuts. Check actual head/nut diameter, stack and screw length. Thread-loop hanging alternative needs no metal but is NOT the checked planar assembly.
4. Each joint: screw enters rear stationary sheet, then separator washer, moving sheet, outer washer and locknut. Top joint joins grip→upper; distal joint joins upper→lower. Target .7mm plane gap (.5mm washer+.2mm free play). Do not clamp moving parts; nylon nuts resist loosening. Heads/nuts provide positive capture, not printed friction pins. Inspect fasteners before use.
5. Print lower-link first as a bore coupon. Diametrical allowance .2–.5mm is proposed, printer/material-dependent. Ream gently or reprint, never force a threaded axle through a tight bore.
6. Hold broad grip firmly with sheet faces VERTICAL. Keep upper link within±60° down; there is no physical stop. Lift links gently and release without throwing. Lower-link shortening ensures ≥7mm conservative distance from top axis across all supported dimensions, leaving≥3.5mm beyond a3.5mm-radius top nut envelope. Lower hinge remains below grip within upper travel. Keep away from faces/children/fragile objects; sheets are not impact-rated.

## Validation scope

Independent binary-STL parser checks exact size/triangle count, finite positions, nondegenerate triangles, normalized stored normals aligned with winding, welded vertices at1e−5mm, exactly two opposite incident faces per edge, per-component positive volume, expected component counts and mm bounds on individual solids, card and float32 de-tabbed plate. Worker separately gates every result on final-solid winding/edge/volume validation.

Mechanical checks independently Boolean-test nonoverlap, bed footprint support, card bounds, twelve cuts yielding waste carrier+three preserved parts, axial assembly insertion, both3mm gauge shafts, conservative head/nut capture, lower head vs grip, top nut vs folded lower link and35independent upper/lower poses per case. Analytic distance/gap bounds complement sampled poses. At least1mm engraving backing retained; bright SVG hole and dark ring probe real final solid. Physical motion, chaos, friction, wear, fastener retention-under-use and print reliability remain untested. See validation reports for actual runs.
