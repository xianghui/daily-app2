# Duplex & Decode

A browser-based **three-part visual-cryptography kit-card generator**. Clip the connected carrier, lower two independently perforated shares into an open-bottom alignment cradle, and view against diffuse backlight: an encoded heart, ring or lightning symbol appears only in the combined vertical projection. Neither share alone varies its open area by encoded cell. This is an educational deterministic construction, **not secure encryption**.

## Run / build

```sh
npm install
npm run dev
npm run predeploy
npm test
```

React + Vite; Three.js/OrbitControls; Manifold WASM Boolean solids in a worker; fflate ZIP; locally bundled Fredoka/Rubik fonts. All dependencies are local bundles, no CDN/API/key or backend. Vite base `/daily-app2/20261102-13/`. Individual deployment scripts exist, but this app is published through the parent monorepo's combined deploy flow.

## Reference-first evidence and attribution

Read-only local references were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` (three switch components, 15.2 × 15.2 × 43.1 mm combined), and `fidget_fabric_generator/public/templates/diamond-link.stl` (one 7.981 × 9.241 × 8 mm interlocking link). Neither is a suitable sheet/carrier reference. Project README instructions were inspected; the keycap studio's README, styles, App/Viewer, worker, export, image conversion and STL modules informed the interaction design.

Selected geometry reference: **Mike Kasberg, White Cat Kit Card**, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. License retained in REFERENCE-LICENSE.txt. Actual binary STL downloaded and parsed, not inferred from an image. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Bounds 179.819997 × 178.019994 × 3.189999 mm; STL has no units, mm corroborated by source sheet dimensions. 30,616 triangles; 27 edge-adjacent components; source is not watertight. No source mesh is redistributed or claimed repaired.

`reference-measure.py` reproduces source measurements with trimesh/numpy/matplotlib/scipy/networkx; `reference-measurements.json`, `reference-analysis.json` and `evidence/reference-sections.png` contain component details, hashes and actual Z=.10/.50/1.59 mm cross-sections.

Measured 0–1.60 mm sheets and a subdivided carrier with .21/.22 mm low webs informed this **new parametric reconstruction**. New runners are deliberately thicker (.4–.6 mm), not measured source tolerances. Four source slots measure 4.500 × 1.700012 mm; these are documented but not falsely imposed on optical masks. There are no switch sockets. New registration gaps, ledge and optical lattice are original engineering choices, separately labelled. This is not the source cat assembly, a single grille, or a cosmetic reskin of an earlier sliding mechanism. Shared prior studio UI/import/export utilities are reused; the actual mask geometry, encoding, three-part assembly and tests are new.

Concrete studio patterns: 374 px left controls/right rounded gradient viewer, phone preview first, soft lavender desk, tactile raised controls/pressed selection, collapsible sections, paired numeric/range controls, checkerboard conversion, locally saved dark theme, current-result gating and worker errors. No prior project's Git history or dependencies copied wholesale.

## Parametric geometry (all lengths mm)

| Control | Supported range / meaning |
|---|---|
| Card width / height | 300–340 / 140–180; real connected carrier |
| Cells / side | 8–12 whole cells; N² encoded cells |
| Cell pitch | 4.8–5.8 |
| Seed | 1–99 whole indices; rearranges actual aperture pairs |
| Encoded symbol | heart / ring / bolt |
| Cradle/mask silhouette | rounded / square / chamfered |
| Mask sheet | 1.6–2.4; measured source default1.6 |
| Per-side pocket gap | .15–.35; proposed printer-dependent fit |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |

Fixed .80 mm webs divide each cell's four possible sub-apertures. Square aperture width = `(pitch − 3 × .80)/2`, hence1.20–1.70 mm. Every cell opens two squares per share. Bright encoded cells use identical pairs; dark cells use complementary pairs. Union of the actual solid mask sections leaves two open subpixels for bright cells and none for dark cells. Solid borders between cells remain opaque: the diagram displays ideal cell values, not a full optical simulation. Thick holes vignette oblique light; near-normal viewing and opaque filament are required.

The monolithic cradle has a5mm ledge,3mm outer walls,.8mm wall above two stacked sheets, an open bottom and a14mm front finger notch. Masks are **loose, not captive**. Both orientation eyes go upper-left. No bearings, magnets, hardware or glue. Each clean part remains distinct; all twelve bed-aligned tabs truly union them into one carrier. Cutting each tab1.6mm outside its silhouette releases three parts plus the connected carrier. Computed tab cuts avoid functional geometry.

## Local image → geometry

File picker on desktop/phone and drag/drop: PNG, JPEG and simple SVG. Maximum2MB, image ≤12 megapixels and6000px/side, normalized locally to ≤500px. SVG supports safe primitive/path fills, rasterized locally to256px; scripts, external resources and unsupported elements rejected. Source and checkerboard cutout shown. Choose fit/crop, ±25% crop shift, light/dark background, threshold1–254 or grayscale, .4–.6mm depth, footprint4–7mm, rotation ±180°, X ±1.5/Y ±2mm.

Exact method: composite onto selected background, sample a **20 × 20 grayscale heightfield**, threshold if requested, triangulate the top with continuous backing, then Boolean-subtract the relief cutter from the fixed front cradle apron. This is sampled2D-to-relief/silhouette conversion, **not automatic full3D reconstruction or exact vector outline tracing**. Bright holes preserve unengraved backing (tested with an actual ring probe); diagonal samples interpolate as triangles. Text (8characters) and six searchable bundled SVG marks use the same real engraving pipeline. Raised art is intentionally unsupported. A13mm-diameter keep-in zone prevents cuts through cradle walls or optical features; minimum1mm backing. Changing pixel content, threshold, relief depth, transforms and removal changes actual exported geometry.

## Local STL → geometry

ASCII and binary STL, ≤2MB and1500triangles, each dimension.2–250mm. Parser checks format completeness, finite coordinates, nondegenerate triangles, closed/welded oriented edges, one connected positive-volume solid, self-intersection, convexity, broad flat bottom and no footprint overhang. Unsupported concave, hollow, open, disconnected, nonmanifold or self-intersecting inputs get actionable errors. **No repair and no convex-hull replacement.** These explicit restrictions are intentional, not a general mesh editor.

Select Z/Y/−Z up before attachment. Source dimensions/oriented3D preview shown; explicitly confirm **millimeter units**, since STL has none. Footprint scales XY proportionally; depth independently scales Z. Rotation/placement controls integrate the **exact mesh as a Boolean engraving cutter** into the cradle apron, not an unchanged re-export or overlapping shell. Replace/remove/center/reset and return to defaults are supported. The same keep-in and backing constraints apply.

All user files remain in this browser; no upload or external service. Repository samples are synthetic, nonpersonal fixtures from the existing local studio QA set: mark.png, waves.jpg, ring.svg, wedge-ascii.stl and gem-binary.stl. Do not commit personal input assets. JSON/local named designs contain bounded portable image/mesh payloads, not file-system paths; missing images require reattachment and block export. Six named designs, JSON save/open and35-step debounced undo/redo.

## Preview and export

Assembled, exploded, connected card, de-tabbed print plate and every isolated part use the **same generated solids**. Optional see-through base helps explain ledge fit. The lift slider translates only the upper share vertically for explanation, not print placement or mechanical simulation. Orbit/zoom/fit work with mouse and touch. Preview colour does not imply STL colour.

Generation is debounced100ms, bounded and worker-based. Request IDs and a full parameter/source/transform key prevent stale export. Invalid settings/imports keep the last-good preview explicitly labelled and disable all geometry exports. A worker-load failure also blocks exports until reload. Independent final mesh edge/winding/volume checks run on every generated result. BinarySTL uses those exact current vertices/indices; UI fingerprint compared against downloaded bytes in browser tests.

Prominent per-part STL, selected STL and **Everything ZIP**: connected card + cradle + share-a + share-b + numbered ASSEMBLY.txt/current fits. No fake3MF. All export positions bed-flatZ=0; assembled visual overlap never substitutes for printable orientation. Final X/Y/Z displayed for selected export. Default card300×150×5.6mm; use clean parts on smaller beds. STL has neither unit metadata nor colour.

## Printing / assembly

Opaque dark PLA/PETG, .4mm nozzle,.16–.20mm layers, three perimeters,100%mm scale; no intended supports. Print cradle and share-a as a **fit calibration set** first. Clean elephant foot, inspect holes and adjust gap. No universal printer/material fit claim. Clip twelve tabs, file nubs, orient eyes upper-left, lower share-a onto ledge, then share-b. View near-normal against diffuse light; lift through the finger notch to remove. No sun/laser viewing. See ASSEMBLY.txt or the in-app numbered guide for full directions. Adult craft/desk model; cutoffs and small apertures need care.

## Reproducible validation

`npm test`: defaults, all3presets, all3silhouettes, every field endpoint, joint extrema, image threshold/grayscale and both STL formats/transforms. Independent binarySTL parsing checks exact byte lengths, normals, nondegenerate finite triangles, mm bounds, each component's positive volume, 1e-5mm welded edges with exactly two opposite-directed incidents. Every part, combined card and float32-translated clean plate checked.

Actual Manifold tests check all-pair assembly nonintersection, straight top insertion of both shares, ledge/sidewall/stack contact, per-cell subpixel probes and actual cross-section open area, print envelope, no upper material outside bed footprint, twelve collision-free snips and exactly4components after cutting. Card containment comparison accounts for float32 boundary skin (`surfaceArea × envelope × 2^-24`); no coarse geometric simplification.

Browser scripts exercise production assets under the real base prefix, actual file pickers and downloadedSTLs, changed pixel content/settings/transforms vs defaults, preview-byte/JSON-to-Node equivalence, invalid files and state gating, all presets, SVG/text/icons, ring-hole geometry, portable assets, local storage, undo/redo, ZIP contents, all views, dark/focus/collapsible/reduced-motion, worker abort/recovery, and320/390px touch UX. Reports and screenshots accompany this source. `gallery-test.cjs` and `deploy-check.mjs` verify prior entries and all combined deployed files.

**Computational geometry is not physical testing. No physical print, friction, opacity/contrast, toughness or optical-performance test has been performed.**
