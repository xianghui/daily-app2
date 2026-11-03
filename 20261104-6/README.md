# Jansen & Stride

A local React + Vite maker studio for a **genuine connected kit card** holding ten flat parts: a windowed bearing chassis, seven moving links (including two rigid triangle frames), and two socketed feet. Snip forty runners and assemble a hand-turned Jansen-type single-leg mechanism. Its raised foot follows a closed lifted-return / lower-sweep path. **This is not a self-walking robot.**

## Reference-first evidence

The existing local clicker template and diamond fabric link were parsed first and rejected as unsuitable sheet-kit references. The primary visual/interaction reference was inspected read-only: `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, STL/import/export and image modules. Concrete patterns carried forward: 374 px left panel/right viewer, preview-first phones, Fredoka/Rubik local fonts, lavender desk/white panels/coral selection, tactile pressed keys, checkerboard import preview, saved dark theme, paired mm controls, local designs and worker/current-result export gating. No project history or private source meshes copied.

**Geometry/design reference:** [White Cat Kit Card](https://github.com/mkasberg/white-cat-kit-card), Mike Kasberg, Printables 865769, **CC BY 4.0**. Upstream README and license are included separately. Downloaded binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`: 30,616 triangles; approximately **179.820 × 178.020 × 3.190 mm**; 27 edge-adjacent components including two-face defects; not globally watertight. Units assumed mm, corroborated by upstream source. This is inspected design evidence, not an automatic repair or raw-mesh redistribution.

The actual mesh was parsed and sectioned at Z=0.10, 0.50 and 1.59 mm. See `reference-measurements.json` and `evidence/reference-sections.png`: 1.60 mm sheet planes, four measured **4.50 × 1.70 mm socket loops**, and low runner planes at 0.21–0.22 mm. The source `flat_clip(4)` uses a **4.00 mm clip**, with 0.25 mm side tolerance in its 4.50 mm hole. **Our 4.50 mm straight tongue is a redesign using the measured socket span, not a claim that the source male clip was 4.50 mm.** New socket width is 4.50 + chosen total clearance. Thicker sheets and runners are deliberate strengthening changes. Snap clips are not copied; two static joints require glue. The carrier/slot construction is reference-derived; the walking linkage is entirely new relative to the cat.

Factual topology/length ratios follow [Theo Jansen’s linkage](https://en.wikipedia.org/wiki/Jansen%27s_linkage); no Wikimedia diagram or third-party linkage code is bundled. Not affiliated with Strandbeest. `reference-analysis.json` maps every measured value to its actual use and separates proposals from measurements. No physical print, fit, friction, walking, load or fatigue testing has been performed.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
npm run preview -- --host 127.0.0.1 --port 5856
```

Base path `/daily-app2/20261104-6/`. Individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; the published combined site uses the ROOT monorepo deploy flow. Libraries: React, Vite, Three.js, Manifold WASM, fflate, Fontsource Fredoka/Rubik; Playwright for browser checks. No APIs, CDN generation dependencies, login or keys. Fonts and WASM are bundled locally. Dependency licenses remain with authors: Manifold Apache-2.0, Three MIT, fflate MIT, Fontsource fonts SIL OFL, React MIT.

## Parameters / millimeters

| Parameter | Supported range |
|---|---|
| Card width / height | 250–290 / 280–320 mm |
| Linkage scale | 0.60–0.85× |
| Unscaled crank radius | 13–15 mm; scaled by linkage scale |
| Link band width / sheet thickness | 6.5–8.0 / 2.2–3.0 mm |
| Layer air gap | 3.5–5.0 mm |
| M3 bore diametral clearance | 0.20–0.50 mm, bore = 3 + clearance |
| Static socket total clearance | 0.10–0.30 mm, not per side |
| Part spacing | 3–5 mm |
| Runner width / thickness | 0.8–1.2 / 0.4–0.6 mm |
| Engraving footprint / depth | 4–7 / 0.4–0.6 mm |
| Art X/Y offset / rotation | ±1.5 / ±2 mm; ±180° |

Three presets show actual model thumbnails. Chassis silhouette, scale, crank, bands, fits, card and runner controls rebuild real solids. Unsupported combinations, oversized card packing, empty reliefs, invalid transforms and off-zone art block export. Preview phase 0–360° changes only solved rigid assembly poses; printable geometry stays flat. Exploded positions are illustrative. Isolated and de-tabbed/card views share the same parts.

The unscaled distances are a=38, l=7.8, b=41.5, c=39.3, d=40.1, e=55.8, f=39.4, g=36.7, h=65.7, i=49, j=50 and k=61.9 mm. Local shape/angle calculations are explicitly quantized at 1e-7 mm/degrees for reproducible Node/Chromium triangulation. Manifold simplification tolerance is 0.001 mm; STL validation weld tolerance is 0.00001 mm. This does not model printer accuracy.

## Image / SVG / text / icons → real engraving

File picker on desktop/phone plus drag/drop. PNG and JPEG content headers are verified before decode; maximum 2 MB, 12 MP, 6,000 px per side, normalized to ≤500 px. Simple filled SVG paths/shapes are rasterized locally to 256 px; ≤2,000 elements, no scripts, external references, images, text or effects. Flatten text before SVG upload.

Conversion is an explicitly bounded **20 × 20 sampled height field**: light/transparent or dark/inverted background, threshold 1–254 or grayscale relief, contain/cover crop, ±25% crop shift, footprint, Z depth, rotation and placement. Background pixels keep full backing; bright holes remain unengraved. The actual sampled cutout appears on a checkerboard beside the source image. This is **2D-to-relief, not full 3D reconstruction from a photo** and not exact smooth vector tracing. The closed height solid is Boolean-subtracted from the protected lower chassis patch. Minimum backing is ≥1.5 mm. No mechanism/slot can be engraved. Raised features are deliberately unsupported to keep every part/card bed-flat and bound thickness.

Up to eight text characters and six searchable bundled marks (heart, sun, wave, star, circle, plus) use that same actual geometry conversion. Replace, remove, reset transforms/image controls, and return to built-ins work without personal uploads. Bundled fixtures are synthetic; see `public/samples/README.txt` and attribution.

## STL → exact mesh-shaped engraving

Binary and ASCII `.stl` accepted, ≤2 MB / 1,500 triangles, 0.2–250 mm per source axis. Parse occurs in the worker. Source dimensions, format and triangle count are shown with an independent source 3D preview. STL has no unit metadata: **explicit millimeter confirmation is required**. Choose Z/Y/−Z up before attaching; changing axis removes the source and requests reattachment. Proportional XY footprint scale, independently bounded Z depth, in-plane rotation, center/reset and X/Y placement survive into the Boolean result. Both scale factors are displayed.

Supported contract: **one closed, consistently outward-wound convex solid with a broad flat bottom and no projected overhang**. Vertex welding, finite bounds, nondegenerate faces, two opposite incidences per edge, connectedness, positive volume and triangle intersection checks run before integration. Open, hollow, concave, disconnected, self-intersecting, slender or unsupported meshes fail with actionable errors. No arbitrary repair, convex-hull replacement, discarded concavities or unchanged re-export. The original supported mesh is anisotropically transformed into an exact cutter and Boolean-subtracted from the chassis. Personal files never leave the browser or enter the repository.

## Exports, persistence, status

Binary STL for the real connected card, ten de-tabbed parts, individual part buttons and Everything ZIP with every STL, portable design JSON, numbered assembly notes and **current joint table**. UI final X/Y/Z bounds are in mm. Preview colours are not STL colours; no fake 3MF offered. Preview and download use the same current worker result and selected part signature. Debouncing and request IDs drop stale results; invalid, loading, unconfirmed or failed states disable all mesh export. Last valid preview is labelled when blocked.

Undo/redo, up to six named local designs, and JSON save/open include bounded raster/mesh payloads. Missing image payloads explicitly require reattachment, never pretend restoration. Design JSON ≤2 MB; embedded raster ≤250,000 px / 1.8 MB data URL; restored meshes are revalidated. Saved light/dark theme, keyboard focus, reduced-motion support, collapsible sections and touch orbit/pinch are included.

## Printing / assembly / bill of materials

1. Print one card **or** the ten clean parts at Z=0, 100% mm, PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, ≥3 walls. No supports intended. Default card needs a 250 × 280 mm bed; individual parts suit smaller beds. Snip 40 runners 1.8 mm outside part edges; smooth stubs, not bores or tongues.
2. Print crank/upper drive first as a bore/joint coupon, then dry-fit chassis/feet as a slot coupon. Clearance is printer/material dependent. Never force a joint.
3. **External hardware required:** seven M3 bolts, seven locknuts, fourteen thin washers, rigid tubing ID 3.2 mm / OD ≤4 mm cut to ten measured sleeve gaps, and plastic-compatible adhesive. All heads/nuts/washers must fit **≤6.5 mm diameter and ≤3 mm beyond outer plate faces**. Select bolt lengths from the current table, adding actual hardware engagement and cutting excess. No hardware is exported. There is no honest hardware-free equivalent of these rotating retained pivots; do not substitute glue at moving joints.
4. Layer frontward from the chassis: 1 crank O-C, 2 drive C-D, 3 triangle A-D-E, 4 swing A-F, 5 drive C-F, 6 link E-G, 7 foot triangle F-G-H. H is an **unbolted witness hole**. Bolted joints O/A/C/D/E/F/G share the identified plate levels. Add sleeves between successive incident levels. Sleeve gaps include washers: subtract their actual thickness before cutting. Leave rotational end play and secure locknuts without clamping PLA. Use smooth shanks or equivalently retained M3 rod if threads bind. Do not add a motor or load.
5. Feet run across depth; chassis tongues enter from above, shoulders rest on feet. Dry-fit, glue only the two static tongue joints, and cure. Turn crank gently by hand; fingers clear of pinch gaps. The foot intentionally remains raised. This is a single-leg desk demonstrator, not a floor walker.

Only computational assembly checks are claimed: original center distances, branch closure, rigid transforms, two socket alignments/insertion paths, positive stand clearance, plastic-only center-of-mass projection inside the two-foot support polygon, and body/hardware nonintersection. Real friction, backlash, fastener tightening, printer tolerances and forces require physical calibration. External hardware mass is not included in the center-of-mass estimate.

## Reproducible verification

```sh
npm test
# Start the production preview server above, then:
node browser-test.cjs
node studio-test.cjs
node stale-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node isolated-test.cjs
node mobile-layout.cjs
node motion-test.cjs
node gallery-test.cjs
# After publication:
node public-smoke.cjs
```

Reports/screenshots are saved beside these scripts. `validate.mjs` independently parses binary exports for byte counts, finite vertices, nondegenerate faces, normalized outward normals, welded two-face opposite-winding edges, positive volume of **each** component, mm bounds, print-plate component count, bed-support sections, card envelope, real runner cuts/released part count and undamaged parts. It checks defaults, all presets, all shapes, minima/maxima, image threshold/relief and transformed ASCII/binary imports. A ring probe confirms an image hole remains uncut. Every live result also undergoes closed-solid/winding preflight.

Pure kinematics sample all 360 crank degrees. Independent assembled meshes are intersected through representative phases; every joint center is checked against transformed part holes. `motion-test.cjs` tests conservative M3 envelopes against nonincident solids through 216 poses across the three presets. Browser tests really upload PNG/JPEG/ASCII/binary files and download/parse the resulting STL/ZIP, compare preview and portable-regenerated signatures, change threshold/pixels/depth/scale/placement, reject bad inputs, restore designs, test worker loading failure/stale edits, and exercise 320/390 px phone touches with no overflow. Build success alone is not counted as validation. Physical printing remains untested.
