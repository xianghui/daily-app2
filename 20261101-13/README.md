# Skew & Saddle

A local **React + Vite parametric kit-card generator** for a six-rib, doubly ruled saddle sculpture. Snip 24 runners and lower three bottom-open ribs into three top-open crossrails. Nine complementary cross-laps reveal a hyperbolic paraboloid using only straight top edges. It is an open mathematical assembly, not a continuous roof, static STL download, browser game or load-bearing structure.

## Run and reproduce

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public combined deployment uses the parent monorepo's root `deploy/` workflow. Vite base: `/daily-app2/20261101-13/`.

`node serve.mjs` serves production assets at http://127.0.0.1:5672/daily-app2/20261101-13/. After building run `node browser-test.cjs`, `node studio-test.cjs`, `node rapid-test.cjs`, `node orientation-test.cjs`, `node icons-drop-test.cjs`, `node visual-test.cjs`, `node mobile-test.cjs`, and `node assembly-test.mjs`. `TEST_BASE` changes the server origin for combined deployment checks. Reports and screenshots are committed, not personal uploads.

Dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fredoka and Rubik (Fontsource/OFL). Generation, imports and exports use no remote APIs, CDN, backend, credentials or paid service. Serve over HTTP for worker/WASM loading. Third-party notices are in `public/licenses/` and `REFERENCE-LICENSE.txt`.

## Reference-first evidence and original reconstruction

Read-only local candidates under `/Volumes/ExternalHD/3d_printing_apps/` were located first. The actual Keycap Studio clicker template and Weave diamond link were parsed; their READMEs inspected. They contain switch cavities/stem or interlocking fabric joints, not suitable sheet-card interfaces. Their hashes, dimensions and component counts appear under `localCandidates` in `reference-measurements.json`.

Selected reference: **White Cat Kit Card**, **Mike Kasberg**, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Download URL is recorded in `reference-measurements.json`. Source README/license fetched during this run and actual binary STL downloaded and parsed, SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Mesh: 30,616 triangles; 179.819997 × 178.019994 × 3.1899996 mm; 27 edge-connected components, some defective/zero-thickness. Source is not wholly watertight and is used only as a measured design reference. No automatic repair or redistribution of its raw STL.

`reference-inspect.py` measures bounds, connected components, Z planes, and sections at .1/.5/1.59 mm. View `evidence/reference-sections.png`. Four receiving loops are 4.5 × 1.700012 mm; main sheet planes are 0/1.6 mm. Bed-level runners and their carrier/parts are visible in sections; low source planes .21/.22 mm are recorded without claiming universal runner suitability. Reproduce with Python environment containing trimesh/numpy/scipy/networkx/matplotlib: `python reference-inspect.py /path/to/downloaded-source.stl`.

**Measured vs proposed:** retain actual 1.6 mm sheet scale. The source's ~.100012 mm thickness surplus informs a new .15 mm **TOTAL**, not per-side, default allowance (.1–.3). Each new slot width is `sheet + fit`; increasing material thickness preserves this fit relation. Source 4.5 mm socket length is recorded but deliberately NOT inherited: complementary long half-laps need a new 9–12 mm datum. Saddle slopes, six-rib grid, 4 mm rail-end margins, 24 reconstructed .4–.6 mm runners, signature engraving and carrier packing are new geometry. We neither reproduce spacecraft parts nor impose keycap switch sockets. Full mapping: `reference-analysis.json`.

**Visual/interaction reference:** read-only Keycap Studio README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts were inspected. Concrete studio patterns: 374 px left rail, compact sticky brand/theme header, range/number pairs, collapsible sections, lavender-grey/white/coral desk, locally bundled rounded fonts, raised tactile selected buttons, saved dark theme, large gradient 3D viewer on right, phone preview-first stack, checkerboard source/cutout comparison, worker-owned solids and current-result export gates. Reusable studio infrastructure and synthetic fixtures are adapted from this monorepo, not source project history/dependency trees. All saddle geometry, half-laps, packing and assembly probes are original for this run.

## Parameters — millimeters unless stated

| Control | Range | Default / effect |
|---|---|---|
| Card width × height | 144–164 × 154–194 | 156 × 178; incompatible packing rejects |
| Saddle X × Y span | 48–62 × 40–54 | 56 × 48; Y rails extend another 8 mm total |
| Centre height H | 30–36 | 32 |
| Corner rise R | 6–10 | 8; corner heights H−R / H+R |
| Rib sheet | 1.6–2.4 | 1.6; same actual thickness on all ribs |
| Slot TOTAL allowance | .1–.3 | .15; source surplus ≈.10 is not a universal calibration |
| Lap datum | 9–12 | 10; measured from desk, not a physical motion stroke |
| Part spacing | 3–4 | 3.5 |
| Runner width / thickness | .8–1.4 / .4–.6 | 1 / .6 |
| End profile | square / soft clip / deep clip | soft clip; preserves joints |

Surface: `z = H + 4 R x y / (X Y)`. Ribs at Y=−Y/2, 0, +Y/2; rails at X=−X/3, 0, +X/3. Their straight rulings meet the analytic saddle at the intersections; minor 1–2 mm end clips are explicitly excluded. The signature rib is level. Extra 4 mm rail ends enclose their outer slots. At every crossing, one part occupies the region below the lap datum and the other above it. There is no overlap intended or spring deformation required.

Three real presets have generated thumbnails. Undo/redo retains bounded portable source state, six locally named designs are saved in localStorage, and JSON saves/opens include image or mesh payloads. Missing image payloads explicitly request reattachment rather than pretending restoration. Saved-data size is bounded to 2 MB, normalized image to ≤500 px side / 250,000 pixels. Browser storage may be unavailable/full; download JSON instead.

## Image, text, icons and SVG → actual engraving

PNG/JPEG: 16 bytes–2 MB, real signature/header validated, max 12 MP and 6,000 px side before decode. Images normalize to ≤500 px; fit/cover, crop pan, background polarity, threshold or grayscale mode produce a **20 × 20 sampled height grid**. The kernel extrudes a closed triangulated height-field cutter, mirrors it into the rib face and Boolean-subtracts it. This is 2D-to-relief, **not full 3D reconstruction from a photograph**, smooth contour tracing or exact SVG extrusion. Transparent pixels become background; bright holes stay unengraved on continuous backing. The exact sampled mask/height preview is shown on a checkerboard alongside the source. Grid resolution is deliberately bounded; thin source features can disappear, so use bold art.

Simple SVG filled paths/basic shapes rasterize locally to 256 px, then follow the same bounded grid method; even-odd holes are retained as bright pixels. Up to 2,000 simple elements; external references, scripts, filters, text and oversized/invalid SVG reject. Text up to eight characters uses bundled Rubik canvas rendering. Six searchable bundled vector marks (heart/sun/wave/star/circle/plus) use the same actual engraving path.

Footprint 4–7 mm, depth .4–.6 mm, Z rotation ±180°, X offset ±1.5 / Y offset ±2 mm. XY points must remain within a protected radius 6.5 mm about `(Xspan/6, .68*H)` on the signature rib. The entire safe zone is above bottom-open slots and below the level top edge. Minimum backing is 1.0 mm at minimum sheet/max engraving. Raised marks are deliberately not offered because they would exceed flat sheet thickness and threaten crossing interfaces. These are true geometry cuts, not preview textures.

## STL → actual mesh-shaped engraving

ASCII and binary `.stl`, 40 bytes–2 MB, ≤1,500 triangles, each source axis .2–250 assumed mm. Weld at 1e−5 mm; require finite coordinates, nondegenerate triangles, two opposite-directed incidents per edge, one connected outward solid, positive volume, no self intersections. A bounded integration contract supports **convex, broad-flat-bottom solids** whose XY projections are within their bottom contact footprint (≥25% of XY bounding rectangle). Open/nonmanifold, concave, hollow, multibody and overhanging geometry reject with actionable guidance. No repair and **no convex-hull substitute**: the exact accepted triangles form the real Boolean cutter. Concavities are rejected explicitly, never silently filled.

Choose Z up, Y up or −Z up before attaching; changing orientation clears the source for reattachment. Source 3D preview shows oriented dimensions and triangle count. **Confirm millimeters** because STL stores no units. XY is scaled proportionally to a 4–7 mm footprint; Z independently to .4–.6 mm depth (scale factors shown); rotate/center/place in the same protected rib zone. The mesh subtracts from the structural rib while preserving at least 1 mm backing and all nine joints. Shape, footprint, placement and depth change exported geometry. Replace/remove/reset return to the built-in mark. JSON round trips retain actual bounded source triangles and validate them again.

All file processing occurs locally. No user images/meshes are uploaded, sent to services or saved in this repository. Bundled sample PNG/JPEG/SVG and ASCII/binary STLs are synthetic CC0 fixtures, not private inputs or the third-party reference.

## Preview, worker, exports and printing

Assembled, exploded, connected card, de-tabbed print plate and every isolated rib use the same final valid solid data. Orbit, zoom, touch pinch and fit controls are local Three.js. Optional see-through signature rib clarifies assembly. Insertion lift is **preview only**: X ribs move vertically to illustrate their removable half-laps; exported meshes stay at Z=0. No physics or load test is implied. Colours are preview only; STL stores neither colours nor units.

Manifold WASM Boolean operations run in a worker. Import parsing also runs there. Edits debounce 100 ms with request IDs/current-state key guards. Export disables immediately on invalid parameters, pending conversion, missing unit confirmation, import/kernel errors or stale results. A last-valid preview can remain visible with an explicit warning, but cannot silently export as the new edit. Worker loading failure shows a recoverable reload error. Heavy work has bounded triangles, pixel count and resolution.

Binary STL per part, connected card and an Everything ZIP with all seven STLs and numbered assembly instructions. No 3MF claim. Filenames identify product/part. All output solids are checked independently for finite nonzero closed/manifold positively wound geometry. The clean ribs in the de-tabbed view occupy the same nonintersecting bed positions as on the card. The connected card contains real Boolean-unioned runners, not merely loose pieces inside a decorative rectangle.

Print flat, .16–.20 mm layers, PLA/PETG, three walls, 100% scale, no supports intended. Trial-print one rib/rail fit pair first. Total clearance is material/printer-dependent. Snip 24 runners 1.6 mm outside parts and trim nubs, protecting slot walls. Stand three top-open Y rails A/B/C left-to-right; lower level signature X rib into middle row, then front/rear sloped ribs in matching orientation. All nine shoulders meet at the lap datum. **No positive lift retention**: gravity/friction locate the grid on a level table; lift ribs to disassemble. Optional adhesive at nine seats makes a permanent sculpture. No hardware required, no load-bearing or child-toy claim. Cutters and small parts require adult care.

## Verification boundaries

`validate.mjs` independently parses float32 exported STL: exact binary length, finite vertices, nondegenerate faces, normalized normals matching winding, welded opposite edge incidence, adjacency and positive volume **per component**, expected millimeter dimensions and bed Z=0. It checks every separately exported part, connected card and six-component clean print plate.

Manifold checks assembled pairs, 25 vertical insertion positions at nine crossings, complementary lap probes, analytic top-edge samples, sheet backing/end webs, nonintersecting packed parts, exact card inclusion/bounds, seven components after simulated 24 runner cuts, and sampled upper footprints contained in the first-layer footprint. Presets, all silhouettes, individual/combined limits, image and imported-STL variations go through the same checks. Browser tests use real file pickers and downloads, regenerate portable JSON in Node, compare byte signatures, exercise invalid/recovery paths, text/all icons/SVG, history, saves, ZIP parts, orientation, stale-result/worker failure, mobile 320/390 px layouts and real touch orbit/pinch. See committed JSON evidence.

**Computational geometry/assembly checks are not physical printing, fit, material strength, wear or assembly tests. None of those physical tests was performed.** Numerical checks are bounded sampling, not a proof of arbitrary malformed input or universal slicer behavior. Any unsupported source/packing combination blocks export rather than being marketed printable.
