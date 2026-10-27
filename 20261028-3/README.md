# Tack & Twin — a five-part catamaran kit-card studio

Generate a **real connected, bed-flat card** containing a marked main deck, two hull profiles, a stern bridge and a mast/sail panel. Snip twenty low tabs, seat two horizontal panels over four hull tenons, then insert the sail heel through the deck. Customize hull length, beam, sail height, bow silhouette and calibrated fits. This is an original **dry-display miniature**, not a floating boat, watercraft, load-rated product or watertight toy.

## Run and reproduce

Node 22.12+; `npm ci`, `npm run dev`, `npm run predeploy`. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`. Actual publication uses the ROOT monorepo predeploy/deploy flow. Base: `/daily-app2/20261028-3/`.

`npm test` runs independent STL and assembly checks. `node serve-production.cjs` serves the built app under its real prefix at http://127.0.0.1:5432/daily-app2/20261028-3/ . Browser suites: `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node studio-layout-test.cjs`, `node resilience-test.cjs`, `node portable-errors-test.cjs`, `node stale-import-test.cjs`. Reports and screenshots sit beside this README. Tests use only synthetic CC0 samples under `public/samples/`, not personal files.

## Reference-first construction evidence

First searched actual STL files under `/Volumes/ExternalHD/3d_printing_apps/`, including keycap/clicker, slider, fabric, and kit-card projects. Local kit-card projects have no suitable STL file; switch/socket, radial sliding and interlocking-link references would not ground a sheet-kit assembly. Downloaded and parsed Mike Kasberg’s **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Read source README, LICENSE and `kit_frame.scad` to corroborate actual mesh measurements.

Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL: 1,530,884 bytes, 30,616 triangles, **179.820 × 178.020 × 3.190 mm**, two edge-connected components at 0.00001 mm welding. Units are an explicit millimeter assumption, corroborated by source sheet thickness; STL has no metadata. The source has coplanar/nonmanifold artifacts and is **inspection-only**, not repaired, redistributed or re-exported.

`reference-analysis.json` records source/download URLs, bounds, hash, components/volumes, Z histogram, left-frame section measurements and generator mapping. `reference-sections.svg`/`.png` show real mesh sections at Z=.1/.5/1.59 mm. Reproduce with `python3 reference-analysis.py /path/to/downloaded-reference.stl`.

### Measured source versus proposed redesign

- **Measured:** 1.6 mm sheet and perimeter rail; low bridge Z levels .21/.22 mm. Source sections show sheet parts, slots, carrier and lower runners.
- **Retained:** default 1.6 mm sheet, editable to 2.4 mm. Original solid construction, not source triangles.
- **Redesigned:** 2.4 mm carrier, four crossbars, five size-aware bays; twenty .4–.6 mm thick × .8–1.4 mm wide sacrificial tabs. Larger tabs are an FDM proposal, not measured source dimensions.
- **New assembly:** two 10 mm high hull profiles, deck, stern bridge and integral mast/sail. Four upward hull tenons and one downward sail heel are 8 mm long. Slot length = 8 + total allowance; slot width = sheet thickness + total allowance. The .15–.45 mm total allowance is proposed printer calibration, **not** a source tolerance.
- **Different from earlier kits:** a twin-hull hull/deck/bridge structure with a final upright sail-heel insertion, boat-specific length/beam/sail-height controls and three bow profiles. Not the source spacecraft or a reskin of stair treads, phone supports or storage boxes.

Raw third-party mesh is neither bundled nor required at runtime. Attribution is also included in the app and assembly ZIP.

## Studio reference and architecture

Inspected `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/imageTrace.ts`, `src/geometry/stl.ts`, `src/worker.ts`, and `src/export.ts`, read-only. Applied concrete maker-studio patterns: 374 px left control rail, sticky compact brand/theme header, collapsible labeled sections, paired numeric/range mm fields, tactile raised selection controls, source/cutout previews, imported-solid editing, large right gradient stage and reachable current-state exports. Saved light/dark theme, visible focus, 44 px touch targets and reduced-motion CSS. Phones use preview/toolbar, dimensions/export, then stacked controls, with no narrow side rail.

Reused bounded local import/serialization and studio infrastructure from previous daily apps, not their mechanism. All catamaran solids, placements, joints, compact bay packing and mechanical validation are original for this app.

- `src/geometry.js`: pure Manifold modeling, bounds, placements, serialization and independent final-solid preflight.
- `src/model.worker.js`: locally bundled WASM initialization, strict STL parsing and generation.
- `src/imports.js`: content/header, mesh, self-intersection and support-contract checks.
- `src/App.jsx`: controls, file pickers/drop, history, portable designs and downloads.
- `src/Preview.jsx`: Three.js orbit, touch zoom, fit, assembly/plate/isolated/exploded views.

Heavy operations run in a Web Worker, bounded resolution and triangle counts, 100 ms debounce, generation IDs and complete current-state keys. Invalid edits/errors disable ALL STL/ZIP buttons even if a last-good preview is visible. Preview and downloads share the exact current valid mesh. No server/API keys, CDN runtime, uploaded user data, cloud service or paid dependency.

## Parameter ranges — all geometry in millimeters

| Control | Range | Default |
| --- | --- | --- |
| Card width × height | 120–160 × 190–220 | 140 × 205 |
| Hull length | 64–84 | 74 |
| Deck beam | 44–64 | 54 |
| Sail height above deck | 28–38 | 33 |
| Sheet thickness | 1.6–2.4 | 1.6 |
| Total slot allowance | .15–.45 | .30 |
| Part row position/spacing adjustment | 0–1 | 0 |
| Breakaway width × thickness | .8–1.4 × .4–.6 | 1 × .6 |
| Deck dimple depth | 0–.4 | .2 |

Hull shoulders are 10 mm high, main deck 36 mm deep, stern bridge 12 mm deep, mast web 2.4 mm wide. Hull centers sit 6 mm inside the deck ends. Rear bridge location follows .32 × hull length. Compact bays allocate clearance around actual part bounds instead of wasting equal-height rows. The frame remains within its declared envelope; all twenty links really union into frame and parts. Tabs avoid slots, tenons and mast heel; clip 2 mm outside the part, then trim remaining nubs. Invalid envelopes and impossible inputs fail explicitly rather than silently expanding or repairing the model.

Deck personalization is centered at local (0, −9) in a radius-6.5 mm well, isolated by at least 6 mm from joint openings. Engraving preserves at least .8 mm solid floor. Imports never affect the hull slots or sail insertion path. Sail-lift control is **preview-only** estimated placement along its actual insertion direction; it does not change export geometry. Exploded offsets are illustrative, not a simulation or alternate print orientation.

## Image → real solid relief

PNG/JPEG or constrained simple SVG, ≤2 MB. PNG/JPEG headers checked **before decode**: ≤12 MP, ≤6000 px each side. Normalize locally to ≤500 px, sample a **20 × 20 grayscale grid**, choose contain/cover crop, ±25% pan, remove light/transparent or invert dark background. Threshold 1–254 makes a silhouette relief, or use grayscale heights; depth .4–3 mm raised or .4–.6 mm engraved. Physical footprint 4–7 mm, rotation ±180°, X ±1.5/Y ±2 mm placement relative to the well.

The height field has triangulated top, closed sides and bottom, then genuine union/subtraction with the deck; no overlapping-shell export. White/transparent holes remain unraised or unengraved on the continuous backing. This is bounded **2D-to-relief**, **not full 3D reconstruction from a photograph**, exact vector tracing or through-cut artwork. One-cell transitions are sloped. Source image and actual checkerboard cutout grid are shown. Fine lettering/details may be below nozzle resolution: use bold marks, largest practical footprint and inspect slicer toolpaths. A sampled height field is not a guarantee that every tiny image detail prints.

SVG is rasterized locally, preserves filled holes, and accepts simple paths/shapes only, ≤2000 elements; external resources, scripts, effects, references and unconverted text are rejected. Text and six original searchable bundled icons use the same real geometry workflow. Replace/remove/reset and crop/threshold/depth controls all affect exported solids. Preview colors are not stored in STL.

## STL → original verified mesh integrated in deck

ASCII/binary `.stl`, ≤2 MB, ≤1500 triangles, each oriented axis .2–250 mm. Show source dimensions, format and face count; explicitly confirm millimeters (STL has no units). Choose Z up, Y up (+90° X) or −Z up before attachment; changing axis requests reattachment. Source and final solids have separate interactive previews.

Check finite coordinates, complete facets, nonzero faces/volume, one connected component, welded edge incidence and winding, and triangle self-intersection. Supported contract is deliberately bounded: **one closed outward-facing convex solid, broad flat bottom ≥25% of footprint, no cavities, branches or overhanging footprint**. Unsupported concave/open/nonmanifold meshes get actionable errors. No convex hull replaces the mesh; the bottom-footprint hull is a validation test only. No automatic repair claim.

The **original accepted triangles** scale proportionally in XY to 4–7 mm and independently in Z to .6–3 mm, rotate/place, embed .15 mm in the well and are truly solid-unioned into the deck. Enforce ≥1.2 mm transformed XY extent. Invalid transforms or out-of-safe-zone features disable exports. Scale/rotation/placement survive portable JSON and change final STL. Remove/reset returns to the built-in mark.

## Presets, history and portable assets

Three real presets with live model thumbnails: Harbor Mini, Day Sail and Ocean Display; three bow silhouettes and mechanically bounded variations. Undo/redo keeps 35 states. Six local named designs; JSON save/open includes bounded normalized PNG or validated original mesh payload, never private source paths. Missing image payloads request reattachment explicitly; malformed/missing sources disable export recoverably. All user files stay in the browser; no personal assets saved in this repository. Local fonts Fredoka/Rubik (Fontsource, SIL OFL), React/Vite, Three.js, Manifold (Apache 2.0), fflate, gh-pages; Playwright is a test dependency.

## Export, print and assemble

Connected card STL, five per-part binary STLs, Everything ZIP with six STLs and numbered `ASSEMBLY.txt`. Print **card OR loose parts**, not duplicates. Every exported part lies at Z=0 in real flat orientation regardless of the current view. UI X/Y/Z measurements and fingerprint describe the selected export. Assembled/exploded/de-tabbed/isolated views use the same meshes. No fake 3MF or STL-color claim.

1. Use PLA/PETG, .4 mm nozzle, .2 mm layers, ≥3 walls; no supports intended. Default card 140 × 205 mm; check your usable build area. A 220 mm card needs sufficient skirt/brim margin; use per-part STLs on smaller printers.
2. First print one hull and the main deck loose as a fit coupon. Start at .30 mm total allowance, tune by .05 mm, account for elephant foot and material. Fits are not universal.
3. Snip twenty low tabs, trim nubs and discard carrier. Adult cutter handling and small-part precautions.
4. Stand hulls bow-forward, lower the main deck onto forward tenons; its bottom seats on 10 mm hull shoulders.
5. Lower stern bridge onto rear tenons, then lower mast/sail heel through central deck slot. The heel rests on deck top and its tenon ends at the deck underside; the sail points aft.
6. Removable slip fits, not captive latches. Optional tiny adhesive dots **after** dry fitting. Do not lift an unglued model by the sail. No hardware.

## Validation performed and limitations

`geometry-validation.json`: 12 parameter cases (defaults, all presets, combined minima/maxima and six variations) plus 30 imported-STL/threshold/grayscale/engraved cases. Every card and each loose part independently checked by parsing final binary STL: exact byte count, finite vertices/normals, nondegenerate faces, expected millimeter bounds, normalized normals matching winding, 1e−5 mm welded edge count exactly two opposite-directed faces, positive enclosed volume per component and Euler characteristic. Runtime final-solid preflight also runs on every geometry edit.

Separate real-kernel mechanical checks: ten assembled pairs, 17 seating samples for deck/bridge/sail in the actual assembly order, zero unintended overlap, nine shift/downward shoulder/slot restraint probes; flat parts disjoint and exactly included in the connected card; cutting all twenty links yields six separate components (carrier + five parts). Default and extremes maintain ≥6 mm artwork-to-interface isolation and ≥4 mm deck/bridge separation. These checks establish geometric fit/insertion, not strength, friction, adhesive performance, stability, floating or human cutter usability.

Browser suites run against the **production** worker/WASM beneath the actual base prefix. Real PNG/JPEG/ASCII/binary pickers and downloads, content/threshold/depth/crop/transform differences, reset/replace/remove, exact preview/export fingerprints and JSON-regenerated assembly checks. Invalid/truncated/open/nonmanifold/concave/excessive files, empty images, impossible dimensions/transforms, missing portable payloads and worker abort/reload fail recoverably with disabled export. Tests also cover all presets, random variations, text, six icons, SVG raised/engraved hole probes, JSON/named-design/history round trips, actual per-part and ZIP contents, views/preview-only lift, saved theme, keyboard focus, collapsibles, reduced motion, 374 px rail, preview-first 320/390 px phone layout without overflow, touch orbit/pinch and phone imports/downloads. Reports record actual checks, not compile-only assertions.

**No physical print, fit, force, fatigue, float, stability, strength or cutter-release tests have been performed.** This is a small decorative dry-display assembly. Calibrate on your printer and inspect the slicer before printing. Imported meshes are explicitly restricted; sampled relief cannot reproduce arbitrary fine outlines or reconstruct a full object.
