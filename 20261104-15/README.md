# Saddle & Weave

A browser-based **seven-part saddle lattice kit-card generator**. Snip a connected carrier, seat three top-slotted X ribs on the deck, then lower three bottom-slotted Y ribs through nine cross-laps. All twelve end tongues fit measured-reference-derived deck sockets. Change actual parabolic curvature, span, height, lattice pitch, joint fit and deck perimeter. No hardware, adhesive, server, account, API key or CDN required. Loose removable construction, not a load-bearing structure.

## Reference first

The actual downloaded **White Cat Kit Card** by **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream](https://github.com/mkasberg/white-cat-kit-card), is CC BY 4.0. Attribution/license are bundled; **the raw STL is not redistributed**. Original parametric reconstruction, not a re-export. See `reference-analysis.json`, reproducible `reference-analysis.py`, and `evidence/reference-sections.png`.

Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL: 30,616 triangles, 179.820 × 178.020 × 3.190 mm overall, millimeter assumption (STL has no units). Parsing without repair yields 27 edge-adjacent components, including duplicate/degenerate surface fragments: **the raw reference is not claimed manifold**. Sections at Z=.10, .215 and 1.59 reveal four 4.50 × 1.70 mm sockets, 1.60 mm sheet and .21–.22 mm low carrier runners. Source reference is inspected, not repaired or physically tested.

Local candidate STLs were found and parsed first: `keycap_generator2/public/templates/clicker_template2.stl` (three MX socket/stem components) and `fidget_fabric_generator/public/templates/diamond-link.stl` (8 mm interlocking link). Neither is a suitable sheet kit interface. Local kit-card project READMEs were inspected; they contain no accessible STL files. Hence the documented public sheet-kit mesh was downloaded and cross-sectioned.

**Measured → redesigned:** retain source slotted-sheet/shoulder and low breakaway-carrier construction. Measured source socket width **4.50 mm** becomes a **new nominal tongue width** (not a claim about the source tongue). Replace 1.60 mm sheet with 2–3 mm, .21–.22 mm runners with .4–.6 mm, and source socket fit with a printer-calibrated .10–.30 mm total surplus. Add original perpendicular complementary half-laps, 12 independently placed deck sockets and six analytic saddle-edge ribs. No cat outlines, clips or source mesh geometry are copied.

UI/interaction reference: read-only `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, STL, image conversion and export modules. Concrete patterns retained: 374 px scrollable left studio, sticky compact header, tactile segmented controls, paired mm fields, checkerboard cutout, separate source viewer, explicit unit confirmation, fit/ghost/print views and exact-current worker-gated export. Shared generic importer/editor/serializer infrastructure is adapted from the existing daily-app2 studio; the saddle model, complementary slots, packing and assembly verification are new. This is not a keycap or a previous ruler reskin.

## Run and dependencies

```sh
npm install
npm run dev
npm test
npm run predeploy
python3 serve-production.py
node browser-test.cjs
node studio-test.cjs
node mobile-layout.cjs
```

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate; locally bundled Fredoka/Rubik fonts (OFL). No remote imports at runtime. Heavy CSG, parsing and final-solid checks run in a worker. Debounced requests carry state keys and monotonically increasing IDs; errors and stale geometry disable exports. Preview and STL use the identical validated result. Main-thread file decoding is bounded. Worker/WASM loading failures require reload, with a clear error and disabled export.

## Parameters, all millimeters unless stated

| Parameter | Supported range |
| --- | --- |
| Card width / height | 230–280 / 220–280 |
| Rib half-span R / lattice pitch | 25–32 / 12–16 |
| Shoulder height H / saddle amplitude A | 22–30 / 4–8 |
| Sheet thickness | 2–3 |
| Total joint surplus | .10–.30 |
| Part spacing | 3–5 |
| Tab width / height | .8–1.2 / .4–.6 |
| Art footprint / engraving depth | 4–7 / .4–.6 |
| Art offset X / Y; rotation | ±1.5 / ±2; ±180° |

Invalid combinations (packing, tongues too near cross-laps, art outside protected zone, nonfinite values) are blocked, not clipped or silently repaired. Three real mesh-thumbnail presets: Gentle saddle, Deep weave and Wide canopy. Three deck silhouettes: rounded, small chamfer and broad chamfer. Undo/redo, bounded variation, six named local saves, portable JSON save/open include actual bounded image/mesh payloads. Missing payloads explicitly require reattachment. STL doesn't store preview colours.

Rib top equation: **z = sheet + H + A(x² − y²)/R²**. Each rib has 48 baseline segments plus exact crossing stations, so nine intersections share analytic heights. X bottom webs end at `H*.45 − clearance/2`; Y top webs start at `H*.45 + clearance/2`. Cross-lap opening width is sheet + clearance. Minimum remaining upper web exceeds 3 mm; independent tests check actual solid intersections at assembly samples. Deck tongues are 4.50 mm long in plan, full sheet thickness, and sheet-depth. Broad shoulders rest on deck; tongue ends reach desk. No force-fit, snap or positive retention.

## Local image and mesh workflows

Files never leave the browser; personal files are not committed or uploaded. Desktop/phone file picker and single-file drag/drop. CC0 synthetic samples in `public/samples/`: PNG, JPEG, holed SVG, ASCII and binary STL. File limit 2 MB. PNG/JPEG magic/headers and dimensions checked before decode; ≤12 MP and 6,000 px per side. Portable images normalized to ≤500 px. SVG: simple local fills/shapes, ≤2,000 elements, no external resources/scripts/text/effects, rasterized locally to 256 px.

**Image → real engraving:** fit/cover and ±25% crop offset, white transparent/light background or dark inversion; luminance sampled at **20×20**. Threshold 1–254 or continuous grayscale controls actual .4–.6 mm depth in a closed piecewise-linear height tool, Boolean-subtracted into the front deck apron at Y=−R−14. Checkerboard shows actual converted cutout; bright internal holes remain uncut above continuous backing. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction or exact vector tracing**. Fine detail may be lost (~.3 mm sampling at default size). Empty masks fail clearly. Text (8 characters) and six searchable bundled icons use this same real conversion. Raised art deliberately unsupported to preserve bed-flat sheet thickness and backing.

**STL → real integrated mesh-shaped engraving:** binary exact length and strict ASCII facet content; ≤1,500 triangles; each dimension .2–250 mm; finite/nondegenerate, equal-vertex welding, exactly two opposite faces per edge, one positive-volume connected component, intersection/convexity and broad flat-bed checks. Narrow supported contract: **one outward convex closed solid, XY contained in its broad bottom footprint**. Concave, hollow, open, nonmanifold, disconnected, self-intersecting and overhanging meshes rejected with actionable guidance. No hull replacement or repair. A hull is used only to validate bottom contact, never as output.

Choose Z-up, Y-up or upside-down before attaching; changing orientation clears source and requests reattachment. Inspect oriented dimensions and source preview; explicitly confirm millimeters. Scale XY proportionally to footprint, Z independently into engraving depth; rotate Z and place XY. Exact original triangles become a Boolean subtraction tool, rather than unchanged re-export or intersecting shells. Replacing, removing and center/reset transformations are working paths. Art restricted to radius 6.5 mm, separated from sockets, with ≥1.4 mm backing. Unsupported imports disable current exports; last-good previews are labelled as such.

## Views, printing and assembly

Assembled, exploded, connected flat card, de-tabbed plate and isolated views use the same printable parts. See-through deck explains tongues. Preview Y-family lift is illustrative only. Orbit/zoom/fit, touch orbit/pinch and view toolbar; phone preview appears first, followed by dimensions/export and stacked controls. Light/dark preference saved; visible keyboard focus and reduced-motion styling.

1. Export connected-card STL **or** seven clean parts (not both to assemble). Each bed-flat at Z=0. Default card needs 250 × 250 mm bed; smaller beds can print clean parts. PLA/PETG, .4 nozzle, .16–.20 layers, three walls, 100% scale, no supports intended.
2. Snip **28** accessible low runners about 1.8 mm outside the parts, trim stubs flush. One carrier + seven intact parts remain. Runner contacts avoid tongues and cross-laps. No floating first-layer connectors.
3. Stand X1/2/3 (top-opening slots, tallies 1/2/3) in deck rows −pitch/0/+pitch. Shoulders rest on deck top.
4. Lower Y1/2/3 (bottom-opening slots and extra family dash) at columns −pitch/0/+pitch. Each passes all three X webs and seats its end tongues in deck sockets. No flexing or impossible final insertion. Remove Y first, then X.
5. Print deck and one X/Y pair to calibrate total joint surplus. .15 mm is only a starting point; no universal fit claim. Loose gravity seating, no glue or hardware, no captive retention. Not a roof, toy for small children or structural part.

Prominent per-part binary STLs and Everything ZIP (eight actual STLs, portable JSON, numbered assembly guide). Connected card includes real unioned breakaway runners, not loose parts near a frame. Colours are preview only; ZIP is not labelled 3MF. All dimensions explicitly millimeters and current X/Y/Z is displayed.

## Validation and limitations

`validate.mjs` independently parses float32 STL bytes, checks exact length, finite/nondegenerate triangles, unit outward normals, opposite edge incidence welded at 1e-5 mm and positive volume **per connected component**. Kernel output is reconstructed with `.01 mm` modelling/simplification tolerance before verification; degenerate faces are never merely discarded from final output. Checks every part and clean plate, defaults, presets, parameter extrema, shapes and image/STL-derived geometry. Robust CSG checks connected card, envelope, support-free slice footprints, 28 simulated tab cuts, eight released components, undamaged parts, twelve open deck sockets, nine cross-lap fits, pairwise assembly nonintersection and vertical assembly/release samples. Invalid packing is explicitly blocked.

Browser scripts exercise actual PNG/JPEG/ASCII/binary file-picker imports, downloaded STLs, independent regeneration from portable JSON, source-content/threshold/depth/transform effects, invalid files and recovery, presets, text/icons/SVG holes, undo/redo, local saves, JSON round trips, ZIP contents, worker failures/stale edits, isolated views and 320/390 px touch layout. Production build is served under its actual base path. Machine-readable reports and screenshots are saved beside the app.

**Computational geometry/assembly checks are not physical print, fit, friction, fatigue, strength or stability testing. No physical printing has been performed.**
