# Napoleon & Centres

A local-browser, seven-part **flat-pack kit-card STL generator**. Snip a real connected card, place three equilateral insets around a scalene triangle, then lower a removable three-hole gauge: the inset centroids form an equilateral triangle (Napoleon's theorem). Two socketed feet optionally turn the deck into a tabletop display. This is a physical assembly experiment, not a browser game, keycap clone, or precision measuring instrument.

## Run

Node 22.12+; `npm install`, `npm run dev`. `npm test` checks geometry/assembly; `npm run predeploy` builds. Per-app deployment scripts are present, but the public site is published by the **root** monorepo flow. No API keys, CDN imports, remote modeling services, or file uploads.

## Reference-first evidence and attribution

Read-only local candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` (three closed MX switch tooling components, 15.2 × 15.2 × 43.1 mm overall) and `fidget_fabric_generator/public/templates/diamond-link.stl` (one 7.9805 × 9.2412 × 8 mm interlocking fabric link). Their README instructions and actual meshes were inspected; neither interface is appropriate for this sheet assembly.

Selected structure reference: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Upstream README and license were downloaded and inspected; copies are `REFERENCE-UPSTREAM.md` and `REFERENCE-LICENSE.txt`.

- Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Parsed binary STL: **30,616 triangles**, **179.8200 × 178.0200 × 3.1900 mm**, **27 edge-adjacent components**. Source has edge defects: it is not represented as a closed printable mesh or repaired.
- STL has no units; millimeters are explicitly assumed.
- Measured sheet **1.60 mm**, rectangular sockets **4.50 × 1.70 mm**, low runners **.21–.22 mm**. Source male clips are approximately 4 mm wide, not 4.5 mm.
- `reference-analysis.json` records bounds, component dimensions, Z planes and actual section/socket measurements. `evidence/reference-sections.png` shows measured sections at Z=.10/.215/1.59 mm.
- `reference-analysis.py` reproduces the measurements after downloading the documented STL to `/tmp/napoleon-reference.stl` (Python trimesh, numpy, matplotlib; this run used `/tmp/benham-venv/bin/python`). The original source mesh and fan-art imagery are **not bundled or redistributed**.

This original parametric reconstruction adapts the **pierced sheet, perpendicular shouldered joint and low breakaway carrier** structure. New straight **4.50-mm tongues** use the measured source **socket span**, not an assertion that source male clips were copied. Thicker 2.2–3 mm sheets, .10–.30 mm total socket allowances and .4–.6 mm runners are deliberate redesigns. The entire Napoleon construction, pockets, sight holes, gauge, display feet and apron are new.

The separate read-only visual reference, `keycap_generator2`, was inspected through README, `src/styles.css`, App, Viewer, worker, image conversion, STL/import and export modules. Applied patterns: 374-px scrollable left rail; compact sticky brand/theme header; collapsible sections; paired slider/mm fields; raised tactile controls; lavender-grey desk, white panels, coral selections; locally bundled Fredoka/Rubik; saved dark theme. Phone layout puts preview/toolbar, dimensions and exports **before** stacked controls. No source project was edited or deployed; no Git history or dependency tree was copied.

## Real geometry and assembly

For a CCW scalene triangle A,B,C, construct each exterior equilateral apex on edge A→B as `(A+B)/2 + sqrt(3)/2 × (dy,−dx)`. Its centroid is the mean of its three vertices. The three centroids define the removable equilateral gauge; changing base, altitude or apex offset regenerates **all** corresponding geometry.

The deck contains three **.60-mm-deep triangular pockets**. Each matching inset is offset inward by the chosen **.20–.50 mm per-edge** allowance; its 2.8-mm sight hole is at the exact centroid. The gauge has three matching 2.8-mm holes, 2.8-mm-wide connecting strips and 3-mm-radius reinforced corners. Gauge holes align above inset holes and reveal the intact pocket floor. Insets/gauge are loose and removable, **not captive or snap fitted**.

Feet have 4.50-mm straight tongues, sheet-thickness long. They insert **from below**, shoulders meet deck underside at 12 mm, tongue tops finish flush. Adhesive holds optional feet; use the deck flat without them for an adhesive-free alternative. Insert insets before lowering the gauge; remove the gauge before lifting insets. No hardware required.

Every original part is one closed CSG solid. The connected card Boolean-unites frame, shelves, **28 accessible bed-level runners** and seven parts; it is not loose pieces placed beside a rectangle. Runner attachment is measured across the complete tab-width band, avoiding detached remnants on slanted edges. Cut locations are 1.8 mm outside source-part edges; exported clean parts have no runners. Card packing is checked against the declared envelope; impossible layouts are rejected.

Manifold WASM performs actual unions/subtractions; no overlapping shells are exported as fused solids, and no convex hull substitutes for imported geometry. Assembled/exploded/gauge-lift positions are illustrative only. All exports use bed-flat real geometry at Z=0. STL contains no preview colour.

## Supported parameters

All lengths are **millimeters**, rotations degrees.

| Parameter | Range |
|---|---|
| Card width / height | 180–220 / 280–340 |
| Scalene base / altitude | 22–34 / 18–28 |
| Apex X offset | −6…8 |
| Inset edge allowance | .20–.50 per edge |
| Sheet thickness | 2.2–3 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Foot socket allowance | .10–.30 total |
| Art footprint / engraving depth | 4–7 / .4–.6 |
| Art rotation | −180…180° |
| Art X / Y offset | ±1.5 / ±2 |

Three real generated-thumbnail presets; circular, hexagonal and octagonal apron silhouettes; bounded variation; undo/redo; six named local designs; portable JSON save/open. A protected engraving disk of radius 6.5 mm lies away from pockets and sockets. Its position adapts to deck size and keeps inside the hexagonal silhouette. Art leaves **≥1.5 mm** solid backing; pocket floor is **≥1.6 mm**.

## Image, text, icon and SVG personalization

File picker on phones/desktops; desktop drag/drop; bundled original synthetic sample PNG/JPEG/SVG/ASCII STL/binary STL. Imported files remain in the browser, never uploaded or committed.

Accept PNG/JPEG/simple SVG, **16 bytes–2 MB**. Validate raster signatures and declared dimensions before decoding: **≤12 MP, ≤6000 px per side**. Normalize raster to ≤500 px; rasterize simple SVG to 256 px locally, disallowing scripts, external resources, effects and >2000 elements. Sample to a bounded **20×20 grid**, with contain/cover and ±25% crop shifts. Light/transparent versus dark background, threshold 1–254, or grayscale relief plus .4–.6-mm depth are adjustable. Show source and actual sampled cutout on a checkerboard.

A closed triangulated height-field tool is Boolean-subtracted from the upper deck apron. Bright/transparent holes remain solid backing. This is **2D threshold/silhouette or grayscale-relief conversion, not reconstruction of a full 3D object from one photo**, and not exact vector tracing. Text and six searchable bundled icons use the same real CSG path. Art scale/rotation/placement change export triangles. Raised art is intentionally unsupported; engraving is explicitly labeled. Empty images and unsafe transformations block export with recoverable errors.

## Imported STL integration

Accept binary and ASCII STL, ≤2 MB, ≤1500 triangles, .2–250 mm per source axis, one closed connected consistently outward-wound positive-volume solid. Explicit **millimeter confirmation** is required because STL stores no units. Show format, triangle count, source dimensions and a separate interactive source preview. Choose Z/Y/−Z up before attaching; changing axis requests reattachment. XY proportional footprint scale, independently bounded Z engraving depth, Z rotation and XY placement are real transforms.

Supported input contract is **convex broad-flat-bottom solids**, with ≥25% footprint bed contact. Parser checks every original face against the source vertices to establish convexity; it **rejects** concave, open, disconnected, inverted, nonmanifold, degenerate, overhanging, excessive or malformed input with guidance. It neither hull-replaces nor silently repairs. This limited contract is explicit in the editor.

The exact accepted source mesh becomes a **subtractive engraving tool** in the protected deck patch. It is not unchanged re-export, preview-only decoration, or a replacement for functional interfaces. The final closed deck retains safe backing and all pockets/sockets. Replace/remove/reset, explicit units, source/final previews and scales are implemented. JSON stores bounded original triangles and image payloads, revalidating them on open; missing image payloads require reattachment. No pretend restoration from file paths.

## Worker, validation and exports

Local Manifold worker with 100-ms debounce, bounded resolution, request ids, stale-response guards and real loading/success/error states. Current-state keys gate every export, including image-conversion settings. A last-good preview can remain during invalid edits, but **cannot be exported** until the current state passes. Worker-load failures explicitly block export and request reload. Preview and export share the same valid generated mesh; the editor exposes its current binary-STL fingerprint for test comparison.

Prominent connected-card STL, clean print plate, eight individually named STLs (card plus seven clean parts), and **Everything ZIP** containing all eight STLs, portable design JSON and numbered assembly instructions. ZIP is not mislabeled 3MF. STL exports are binary and bed-aligned; final X/Y/Z dimensions are shown for the selected export.

Dependencies are locally bundled: React/Vite, Three.js, Manifold, fflate, Fontsource Fredoka/Rubik; gh-pages for deployment and Playwright for browser checks. Fontsource fonts are SIL OFL; Manifold Apache-2.0; library licenses stay with their authors.

## Verification and limits

`npm test` independently parses float32 STL bytes: exact length, finite coordinates, nondegenerate faces, normalized winding-matched normals, welded edges at 1e-5 mm (exactly two opposite incidents), adjacency components with positive volume, and expected millimeter bounds. Every part and combined clean plate is checked, as well as actual connected-card dimensions. `validate.mjs` uses CSG intersections to check separate flat/assembled parts, bed-footprint support, 28 cuts releasing seven unharmed parts plus carrier, bottom foot insertion, top inset/gauge insertion in the correct assembly order, centroid-side equality and sight-hole registration. Defaults, three presets, individual parameter bounds, joint extrema and all silhouettes are covered, including imported-image and imported-STL outputs.

Playwright scripts exercise the **production bundle at its real base path**: real PNG/JPEG/SVG and ASCII/binary file-picker imports, pixel/threshold/depth/crop changes, source transformations, actual downloads parsed independently, Node regeneration from downloaded JSON, preview/export fingerprint matching, reset, malformed/open/nonmanifold/concave/oversized inputs, empty images, invalid transforms, icons/text, undo/redo, named/portable designs, missing-payload errors, ZIP contents, worker failure/recovery, stale builds, all views, saved dark theme, focus, collapsible sections, 320/390-px no-overflow layouts and touch orbit/pinch. Reports and screenshots live alongside the app. See `VALIDATION.md` for observed results.

These are **computational geometry and browser checks only**. Physical printing, friction fits, adhesive retention, material durability and physical assembly have **not** been tested. Print a foot/deck fit pair first; .10–.30 mm is total socket allowance, not a universal tolerance. Start with PLA/PETG, .4-mm nozzle, .16–.20-mm layers, 3+ walls, 100% mm scale. All parts are bed-flat; no supports intended. Use individual STLs on smaller beds; the default connected card needs a 200 × 310 mm build area. Keep fingers clear when clipping runners.
