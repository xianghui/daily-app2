# Tilt & Traverse

A React + Vite browser maker studio for an **eight-part flat-pack tilting labyrinth kit card**. Snip32 runners; lower four perimeter walls and three alternating baffles into a signature deck. Gently tilt the flat four-lane path to steer a matching **external5–7mm smooth ball** right/left/right around the baffles. This is a physical kit, not a browser game or a fixed descending ramp. Open top: ball intentionally removable, not captive. Adhesive at14 fixed tongue seats required. Small parts/ball are choking hazards; not for children.

## Run and reproduce

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
# http://127.0.0.1:5550/daily-app2/20261030-30/
node browser-test.cjs
node studio-test.cjs
node axis-test.cjs
node hole-check.mjs
```

Individual scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public monorepo publication uses the ROOT deploy/ flow.

## Actual STL reference / attribution

Before final geometry selection, relevant local STL files were located under `/Volumes/ExternalHD/3d_printing_apps/`. Keycap Studio and Weave project instructions were read, actual clicker-template and diamond-link meshes parsed, hashed, measured and rejected as unsuitable sheet-kit references. See `reference-measurements.json` for their dimensions, components and reasons.

Selected reference: **White Cat Kit Card**, Mike Kasberg, [source project](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY4.0** ([licence](https://creativecommons.org/licenses/by/4.0/), complete local `reference-LICENSE.txt`). Source README/licence and actual binary STL were downloaded for this run. The raw STL is not bundled. SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**;30,616 triangles,179.820×178.020×3.190mm,27 edge-adjacent components, nonwatertight. It is a design reference, not repaired source geometry. STL has no units: millimeters assumed and corroborated by sheet dimensions.

`reference-inspect.py` parses the mesh with trimesh and creates actual cross-sections atZ=.1/.5/1.59mm in `evidence/reference-sections.png`. Measured sheet planes0/1.6mm and four4.5×1.700012mm socket loops inform reconstructed **4.4×1.6mm tongues plus .10mm TOTAL allowance**. Default.15 and range.10–.35mm are proposed printer-dependent tolerances, not measured fits. Carrier connections at.21/.22mm become redesigned.4–.6mm runners. The labyrinth, extended handle,14-joint assembly, packing and ball path are original, not the source spaceship. `reference-analysis.json` maps measurements to real parameters.

Read-only visual/interaction reference: keycap_generator2 README, styles, App, Viewer, worker, image trace, STL parser and exports were inspected. Concrete patterns:374px left editor, compact branding, collapsible labelled sections, paired numeric/sliders, tactile selected buttons, bundled Fredoka/Rubik, lavender desk/coral accent, saved coherent dark theme, checkerboard conversion, oriented source preview, worker-owned CSG and exact-current export gating. Shared studio/import infrastructure was adapted from a previous local app; geometry and mechanical checks are new. No source history/dependency tree or private raw mesh is copied.

## Parametric geometry · all dimensions millimeters

| Control | Supported range |
|---|---|
| Card width×height |190–230 ×160–200|
| Inner maze span |48–56|
| End passage width |9–12|
| External ball diameter |5–7|
| Wall above deck |8–12|
| Deck / wall sheet |2.4–3.2 /1.6–2|
| Tongue width / TOTAL socket allowance |4.4–5.2 /.10–.35|
| Part spacing |3.5–4|
| Tab width / thickness |.8–1.4 /.4–.6|

Three real presets with live model thumbnails; soft/chamfered/rounded handle outlines; bounded variations, reset, undo/redo. Card fits its declared envelope.32 accessible runners are genuine unions to the frame and parts, not a loose print arrangement. De-tabbed parts omit runners. Wall tongues pass through the deck to Z=0 with shoulders seated at deck top. Fourteen fixed socket seats need adhesive; calibration must precede bonding. Four lanes have width `span/4-sheet`, at least3mm more than supported ball size. End passage exceeds ball diameter by at least2mm. Sidewall corner/attached-baffle relief .4mm is smaller than the ball. The open top does not retain the ball against inversion, jumping or steep tilts.

All solids use Manifold WASM Boolean operations. Connected card, de-tabbed plate, assembled, exploded and isolated views use the same printable meshes. Assembly transforms are geometric, not physics. No fake motion slider. Touch orbit/pinch, pan, zoom and fit. STL does not store preview colours.

## Image/SVG → printable handle engraving

PNG/JPEG file-picker and drag/drop:≤2MB,≤12MP,≤6000px side; validate header before decoding. Normalize≤500px, sample to20×20. Simple SVG≤2000 local shapes, rasterized256px; external resources/scripts/effects/text elements rejected. Text≤8 characters and six searchable bundled marks use the same pipeline. Synthetic CC0 fixtures in `public/samples/` provide both import paths.

Exact method: composited luminance/alpha becomes thresholded or grayscale heights; a closed triangulated height solid is Boolean-subtracted .4–.6mm into the extended handle. Fit/cover crop,±25% pan, light/dark background and threshold1–254 control the actual pixel grid. Checkerboard shows the actual sampled cutout. White/transparent holes remain unengraved above continuous backing. This is **2D-to-sampled-relief conversion, not full3D reconstruction from one photo**, and not exact vector outline tracing. Bold marks work best; fine features can be below nozzle resolution.

Footprint4–7mm, rotation±180°, X±1.5/Y±2mm, depth.4–.6mm. A protected6.5mm radial zone beyond the maze rejects oversize transforms and leaves≥1.8mm backing. Engraved-only keeps bed-flat backing; no fake raised/inlay setting. Source/final previews, replace/remove, crop/reset and built-in restoration implemented. Pixel/threshold/relief/depth/placement edits change exported geometry, not textures.

## STL → exact mesh-shaped engraving

Actual ASCII/binary STL≤2MB/1500triangles; dimensions.2–250mm each. A single outward-facing watertight **convex broad-flat-bottom** solid is the explicit supported contract. Concave/hollow/open/nonmanifold/self-intersecting/multipart/overhung input is rejected with actionable errors, not silently repaired or replaced by a hull. This deliberately limited contract is not general-purpose arbitrary-STL editing.

Explicit mm confirmation is mandatory; STL has no unit metadata. Source dimensions/format and3D preview are shown; select Z/Y/negative-Z up before import. Axis change clears source and requests reattachment. Uniform XY footprint scale and independent Z-depth scale are displayed. Rotation, placement, reset, replace/remove all affect the final exact Boolean subtraction. Protected-zone, source topology, finite coordinates, transforms, backing and final mesh checks gate export.

## Persistence / privacy / responsive generation

Portable≤2MB JSON includes normalized image or accepted original mesh payloads; missing assets explicitly request reattachment. Six named designs in localStorage, undo/redo and JSON round trips. User files stay in the browser: no uploads, API keys, CDN or paid service. Only synthetic fixtures enter this repository. React/Vite, Three.js, Manifold WASM, fflate and Fontsource fonts are bundled locally.

Heavy CSG/parsing lives in a module worker;100ms debounce, request ids and exact-state keys reject stale results. Real ready/build/error status. Invalid edits can show clearly-labelled last-good preview but never permit stale export. Worker loading failure disables export with reload recovery. Preview, fingerprint and download share the exact current valid model.

## Exports / printing / assembly

Binary STL: real connected card or each clean part. Everything ZIP contains nine STLs and current numbered `ASSEMBLY.txt`. Exports are bed-aligned, support-free intended; STL is not3MF and carries no colour. PLA/PETG,.16–.20mm layers,3walls,100%mm. Dry-fit deck + one wall as a calibration sample; fit varies with material/printer/first-layer expansion.

1. Snip32 runners1.6mm outside the parts, trim nubs; discard carrier.
2. Lower all four perimeter walls into paired deck sockets; shoulders seat on deck, tongues flush below.
3. Lower three alternating baffles into their numbered south-to-north pairs; check all14 tongue fits.
4. Bond only fixed seats, keep adhesive away from route; cure fully.
5. Supply selected matching smooth5–7mm ball. Start in south dimple, gently tilt right/left/right around baffles to north dimple. Open top allows retrieval; no captivity claim.

## Verification / limits

`validate.mjs` independently parses actual float32 binary exports, welds at1e-5mm, checks nonempty/finite/nondegenerate faces, normals/winding, two opposite face incidences per edge, positive volume per connected component and mm bounds. Every part/card,34 built-in configurations (presets/silhouettes/extremes) and8 import-derived configurations receive mesh and mechanism checks. Kernel intersections test all assembled pairs, vertical insertion paths, swept radius-matched ball route, disjoint print packing and32 safe snips producing8parts+carrier. Upper sections are compared to bed footprint; hole probes check real engraved/white-hole/backing solid volumes.

Production-browser tests exercise real PNG/JPEG/ASCII/binary picker imports, downloaded STL/ZIP parsing, exact UI fingerprints and saved-state Node regeneration, changed image pixels/settings and STL transforms, malformed/open/nonmanifold/concave/excessive/empty rejection, replace/remove/reset, presets, text/icons/SVG holes, persistence, undo/redo, views, worker abort/recovery and320/390px touch orbit/pinch and overflow. Root gallery scripts/entries and combined production assets are independently checked. See `VALIDATION.md` and saved JSON reports/screenshots for observed outcomes.

**Computational checks only. No physical print, assembly, adhesive, rolling, friction, durability or safety test has been performed.** Clearance checks establish a geometric route, not dynamic behaviour or a certified toy. Small ball is external and not captive.
