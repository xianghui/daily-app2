# Cross & Lace — Kit Card Studio

An original three-part **shoelace/bow-practice saddle**, not a wearable shoe: snip twelve runners, stand two pierced eye rails in four calibrated sole joints, bond the seats and thread your own soft lace. Change eye count/pitch/bore, instep spacing, rail height, sole silhouette and actual engraved art. Three genuine thumbnail presets: First crossings, Everyday lace and Five-eye ladder.

## Reference-first evidence / attribution

Local candidates were found and inspected first. Keycap Studio's actual three-component switch template and Weave's actual 8 mm link are unsuitable for a sheet kit (measurements/rejection reasons in the analysis). Therefore the public **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), was downloaded and parsed. [Source](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**: see REFERENCE-LICENSE.txt, REFERENCE-SOURCE.md and [reference-analysis.json](reference-analysis.json). No private/source mesh is redistributed.

- Actual binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles, assumed mm, 179.819997 × 178.019994 × 3.1899996 mm.
- Actual cross-sections Z=.1/.5/1.59 show sheet planes 0/1.6 mm and four receiving loops measuring **4.5 × 1.700012 mm**. Low runner vertices at .21/.22 mm.
- Original is **not watertight**, with 27 edge-adjacent components (including isolated faces). It is a design reference, not an import claimed repaired.
- Our 1.6 mm rail sheet, 4.4 mm tongue and .10 mm total slot allowance reproduce the measured receiving section. **Default .15 mm is proposed clearance**, not a measured or universal printer fit. Sole thickness 2.4–3.2, .4–.6 mm runners, eye rails, twelve-tab carrier, artwork lug and lacing assembly are original redesigns. No spacecraft geometry is re-exported.

[Raw measurements](reference-measurements.json), [actual section plot](evidence/reference-sections.png) and `reference-inspect.py /path/to/reference.stl` reproduce the inspection (Python trimesh/numpy/matplotlib). Reference trees remained read-only.

Keycap Studio `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` was inspected read-only: README, styles, App, Viewer, worker, imageTrace, STL and export modules. Concrete adopted patterns: **374 px left rail**, compact sticky brand/theme header, labelled collapsible sections, slider/numeric pairs, raised tactile buttons/pink selected states, checkerboard conversion, worker/current-result export gating, named designs, and phone preview-first stack. No project history or dependency tree copied wholesale. Shared previously authored local studio/import/export infrastructure is reused; physical geometry is new.

## Run / dependencies

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. React + Vite, Three.js/OrbitControls, Manifold WASM, fflate; locally bundled Fredoka/Rubik fonts (Fontsource, SIL OFL). Playwright is a dev dependency. No API, key, paid service or CDN is required. Browser files never leave the device. Per-app base `/daily-app2/20261031-10/`; exact scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`. Combined public site uses root deploy flow, not individual deployment.

## Dimensions / supported ranges

All lengths **mm**, eye count is integral pairs; rotation is degrees.

| Parameter | Range |
|---|---|
| Card width / height |120–160 / 180–230 |
| Eye pairs / row pitch |3–5 / 8–12 |
| Rail center spacing / height |18–30 / 14–22 |
| Eye bore |3–5 |
| Sole thickness / rail sheet |2.4–3.2 / 1.6–2.0 |
| Tongue width / total socket allowance |4.4–5.2 / .10–.35 |
| Part spacing |3.5–5 |
| Tab width / thickness |.8–1.4 / .4–.6 |
| Art footprint / engraving depth |4–7 / .4–.6 |
| Art rotation / X/Y offsets |±180° / ±1.5 / ±2 |

Rail length = (eyePairs−1)×pitch+16; sole length = rail length+18, width = rail center spacing+18. The safe artwork lug extends 17.5 mm beyond the sole. Top eye ligament ≥2.5 mm, end ligament ≥5.5 mm, adjacent eye bridge ≥3 mm. Clear instep = center spacing−sheet. Impossible/out-of-range/nonfinite values block exports, never clamp invisibly. Card dimensions are exact; smaller beds can print each clean part.

## Image → geometry (PNG/JPEG/SVG)

File picker on phone/desktop and drag/drop; 2 MB/file, actual PNG/JPEG headers, ≤12 MP, ≤6000 px side checked before decode. Normalize image to ≤500 px. Restricted self-contained simple SVG ≤2000 elements rasterizes locally to 256 px; reject scripts, external references, text/effects (convert text to paths first).

Source preview and checkerboard display the actual **20×20 sampled conversion**. Fit/cover crop, pan, dark/light background removal, threshold 1–254 or grayscale heights, scale/rotation/position and depth change exported geometry. A closed triangulated heightfield is **Boolean-subtracted into the protected sole lug**, not a preview texture. Bright interior holes remain unengraved in continuous backing (actual Boolean probe test). This is bounded sampled silhouette/relief engraving, **not exact SVG outline tracing or full 3D reconstruction from one photo**. Fine features are limited by this sampling; broad bold art works best. Raised art is intentionally unsupported to keep all pieces bed-flat. Backing ≥1.8 mm; no art can touch tongues, sockets or eyes.

Text (up to eight characters) and six searchable bundled vector icons use the same real heightfield method. Colour swatches are explicitly preview-only; STL has no colours.

## STL → geometry / explicit units

ASCII and binary .stl ≤1500 triangles/2 MB; each oriented axis .2–250 mm. Source 3D preview, dimensions, format and triangle count. Explicit **millimeter confirmation** since STL has no units. Z/Y/−Z up chosen before attachment; changing it clears the source and requests reattachment. XY scales proportionally to selected physical footprint, Z independently fits engraving depth. Rotate, center, position, replace, remove and reset affect real exported triangles.

Integration deliberately supports **one closed outward-wound convex solid with broad flat bottom and no overhanging footprint**. Checks: content/complete bytes, finite vertices, degenerate facets, welded edge incidence/opposite winding, connectedness, positive volume, triangle intersections, dimensions, convexity, bed contact and transforms. Open/nonmanifold/concave/hollow/disconnected/overhanging/complex inputs get actionable errors; **no convex-hull replacement or invented repair**. Original validated triangles become the exact solid Boolean engraving cutter, changing the sole's volume and surface, not merely re-exporting unchanged input. Safe-zone and backing checks preserve fit.

Only synthetic/public-domain sample PNG/JPEG/ring SVG/ASCII/binary STL fixtures are bundled; attribution in `public/samples/ATTRIBUTION.txt`. Personal inputs are never put in the repository, uploaded or sent to any service.

## Worker, previews, saves, exports

Debounced worker owns locally bundled WASM and bounded CSG. Generation IDs plus complete current-state key block stale results; invalid edits/files or worker failure disable all exports. A last-good preview is labelled and cannot be silently downloaded. Same exact current geometry drives Three.js and binary STL; UI fingerprint is tested against real downloaded bytes.

Views: assembled printed saddle (no simulated/included lace), exploded, connected card, clean flat parts and isolated parts; see-through toggle, touch orbit/zoom and fit controls. Preview assembly transformations never alter bed-flat exports. Per-part STL buttons and **Everything ZIP** contain a true connected card, all three clean parts and numbered assembly notes. ZIP is not labelled 3MF. STL stores neither units nor colours.

Undo/redo; six local named designs; bounded portable JSON save/open including normalized image/validated mesh payloads. Missing image payload explicitly asks for reattachment. JSON limit 2 MB. Originals are not persisted separately. Saved light/dark theme, reduced motion, keyboard focus, 44 px controls and preview-first phone layout.

## Print, calibrate, lace

Read [PRINTING.txt](PRINTING.txt). Default card 140 × 210 × 2.8 mm; print at 100%, PLA/PETG, .16–.20 mm layers, three walls. Bed-aligned parts need no intended supports; inspect slicer. Print sole+one rail first to calibrate fit. Snip all twelve accessible tabs. Stand both rails down into four sockets with shoulders on sole, tongue ends .05 mm above bed; **glue all four seats**, cure fully. No purchased bearings, screws or magnets; adhesive and external lace are required.

Use a soft lace **and aglet ≤ eye bore−1 mm**, start at 500–700 mm length. First pair shares a bridge; outside ends rise UP over rail rims, cross above the instep, lower inside the opposite next eye and exit outwards. Repeat with slack over-rim turns, then tie/untie a bow. Upright rail bores differ from flat shoe eyelets; this is not a precision shoe replica. Deburr gently, do not pull hard. Adults should handle small parts and cords; not a certified children's toy or load-bearing object.

## Verification (computational, not physical)

`npm test`: independent exported binary STL checks (finite/nondegenerate triangles, welded 1e−5 mm edge incidence exactly two, opposite winding, positive volume **per component**, exact mm bounds), every part and connected card. Presets, all silhouettes, combined min/max and every individual field extreme; image threshold/grayscale and ASCII/binary STL outputs at min/default/max with transformations. Independent Boolean assembly checks cover four real sockets/tongues, rail lowering paths, no unintended part intersection, eye/over-rim cylinder routes with 1 mm diameter slack, frame/card bounds, twelve safe snip cutters releasing exactly three parts+carrier, and bed-footprint support sections.

Browser tests use **production dist under the real base path**: actual PNG/JPEG/ASCII/binary pickers, pixel/threshold/depth/scale/placement differences in downloaded STLs vs defaults, same full mesh/assembly checks on imported results, malformed/empty/excessive/nonmanifold/concave input recovery, all presets and views, JSON/named saves/reload, undo/redo, ZIP entries parsed, source up-axis, image-hole probes, worker abort/recovery and stale-result gating. Phone 320/390 px, no overflow, reachable imports/exports, actual touch orbit/pinch. Reproducible scripts/reports/screenshots included; see VALIDATION.md for actual results.

**No physical printing, assembly, cord friction, knot tying, durability, strength or teaching outcome was tested.** Collision-free slack routes establish geometric possibility, not force or usability. Calibrate on your printer/material and inspect slicer before making the full kit.
