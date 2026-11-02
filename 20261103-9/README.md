# Poggendorff & Reveal

A React + Vite browser-local **three-part flat-pack optical-illusion kit-card generator**. Snip twelve real runners, seat the oblique-line board in the rear stand sockets and the lift-out occluder in the front sockets. At zero offset the engraved segments are collinear; the screen hides their middle. Lift it out to reveal alignment. Unlike earlier Delboeuf surrounds, parallax sights or Thales arms, this assembly explores **occlusion-dependent apparent line continuation**, with no pivot, fastener, or captive linkage.

No hardware required. Optional contrasting paint/marker improves line visibility. Glue only the fixed board if its fit is loose. The screen is gravity-seated, never glued. No physical printing, fit, strength, durability or perceptual-effect testing has been performed; not a diagnostic instrument or precision tool. Look normal to the panel faces to avoid real parallax from their 6 mm center-plane separation.

## Run and validate

Node 22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app deployment scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public deployment uses the ROOT monorepo combined `deploy/` flow. Base `/daily-app2/20261103-9/`. `python3 serve.py --port 5769` serves production at the correct base path; `--staged` serves the combined deploy tree.

Reproducible checks: `node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node stale-test.cjs`, `node presentation-test.cjs`, `node icons-drop-test.cjs`, `node hole-check.mjs`, `node optical-test.cjs`, `node gallery-test.cjs`, `node public-test.cjs`. Reports and screenshots describe checks actually run; see VALIDATION.md. `TEST_BASE` overrides the base in the main import/studio/orientation scripts.

## Reference-first evidence and attribution

Local STL candidates under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. The actual Keycap Studio clicker template and Weave diamond-link meshes were parsed and their READMEs inspected. Neither offers sheet/socket/carrier interfaces; dimensions, SHA-256 and rejection reasons are recorded in `reference-measurements.json`.

Selected reference: Mike Kasberg's **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Its actual binary STL, README and LICENSE were downloaded anew before final geometry selection. License/README are retained. Raw source STL is NOT redistributed. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820 × 178.020 × 3.190 mm assuming mm (STL has no unit metadata); 27 edge-adjacent components, including defective source faces. Not silently repaired or used as a printable final asset.

Actual Z=.1/.5/1.59 mm cross-sections were generated and inspected (`evidence/reference-sections.png`). The source has 1.60 mm principal sheet planes, 4.50 × 1.700012 mm socket loops and .21/.22 mm runner elevations. We reconstruct original panels, carrier, tongues and stand using Manifold booleans, preserving default 1.60 mm sheet and 4.50 × 1.70 mm sockets. **Proposed**, not measured: 4.40 mm-wide tongues, .10 mm total fit allowance, stronger .4–.6 mm runners, 6 mm front/rear panel spacing, 1.4 mm-wide × .5 mm-deep optical groove, entirely new optical geometry. See `reference-analysis.json` for mapping. No reference art or hull substitution.

Visual/interaction reference: read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, export, imageTrace and STL parser. Concrete patterns used: 374 px left rail, compact sticky brand, tactile pink selected keys, paired range/mm fields, checkerboard cutout/source views, right-hand orbit viewer, phone preview-first layout, saved theme, undo/redo and portable designs. No Git history, reference dependencies or source mesh copied wholesale. Shared studio infrastructure is adapted from earlier daily_app2 work; optical geometry, placement and mechanical checks are new.

## Parameters (mm unless stated)

| Parameter | Range | Purpose |
|---|---|---|
| Card width × height | 130–160 × 220–260 | Actual connected carrier envelope |
| Board width | 80–100 | Visible line span; panels are 74 mm high |
| Oblique angle | 25–35° | Real line slope |
| Occluder width | 16–26 | Real hidden central width |
| Right line offset | −2…+2 | Deliberate vertical offset of right half; 0 is collinear |
| Sheet | 1.6–2.4 | Panels, stand and carrier |
| Part spacing | 3–5 | Carrier bay clearance |
| Runner width / thickness | .8–1.2 / .4–.6 | Twelve bed-contact breakaway tabs |
| Socket total allowance | .10–.25 | Tongue width = 4.5 − allowance; slot depth = sheet + allowance |

Three presets have actual generated thumbnails. Round, square and clipped stand silhouettes change solids. Supported combinations preserve ≥1 mm signature backing and ≥1.1 mm line-groove backing. The nominal .10 mm clearance is only an FDM starting point; calibrate for printer/material. Slots have no snap retention or arbitrary universal fit guarantee. Screen-lift control is explicitly **preview-only** and never changes bed-flat printable orientation.

## Image, SVG and text workflow

Choose/drop PNG, JPEG or simple SVG, or try bundled synthetic fixtures. Both imports actually engrave the stand apron using solid subtraction. The source and exact sampled cutout appear side-by-side on checkerboard. PNG/JPEG ≤2 MB, ≤12 MP, ≤6,000 px side; decoded dimensions are verified before normalization to ≤500 px. Simple safe SVG is locally rasterized to 256 px; scripts/resources/effects are rejected, text must be outlined. Text and six searchable original bundled icons use the same local raster-to-solid route.

Conversion: fit/cover, crop shift ±25%, remove light/transparent background or invert dark background, sample a bounded **20×20 luminance grid**. Threshold selects dark samples; grayscale relief uses `depth × (1−luminance/255)`. A closed piecewise-linear height surface is Boolean-subtracted from the apron. Bright holes remain full-height backing, independently probed in final geometry. This is sampled 2D-to-relief/silhouette conversion, **not exact vector tracing or full 3D reconstruction from one photo**. Empty relief blocks export. Engraved-only .4–.6 mm depth protects the sheet; raised marks deliberately unsupported. Size 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm, entire source must remain inside a protected 6.5 mm radius. Replace/remove/reset are available.

## STL workflow

ASCII and binary .stl ≤2 MB / 1,500 triangles; finite dimensions .2–250 mm each. Select Z, Y or −Z up BEFORE attaching, then explicitly confirm mm (no STL unit metadata). Show oriented source dimensions, triangles, format and interactive source mesh. Set proportional XY footprint, independent .4–.6 mm Z depth, rotation, placement or center/reset. The exact supplied mesh becomes an apron recess through a genuine Manifold subtraction; it measurably changes exports. No unchanged re-export or convex-hull replacement.

Deliberately bounded support contract: **one connected, convex, outward-wound watertight solid**, broad flat bottom ≥25% XY footprint, no projected overhang. Concave/hollow, branched, self-intersecting, open/nonmanifold, inconsistent winding, excessive or degenerate input is rejected with guidance. Convexity checks validate, they do not generate a replacement hull; the bottom footprint hull is used only to reject unsupported overhangs. Unsupported geometry requires editing/re-export in a modeler; no automatic repair claim. Changing axis clears the source and requests reattachment. Source file checks run in the worker before heavy modeling.

## Preview, privacy and exports

All personal files stay local; no APIs, keys, cloud, remote fonts or CDN imports. Manifold WASM, Three.js, fflate, React and OFL Fredoka/Rubik fonts are bundled locally. The geometry worker performs booleans and final closed-manifold checks. Edits are debounced and request-keyed; building/error/conversion/invalid input disables export immediately, even while last-good geometry remains visibly labeled. Preview, per-part STL, selected STL and ZIP share the exact current valid mesh; UI exposes its signature for reproducible tests.

Assembled, exploded, connected card, de-tabbed plate and each isolated part use the same meshes; see-through screen and screen lift explain placement without changing solids. Orbit/zoom/fit/top/front views work on touch and desktop. Light/dark theme is saved. Undo/redo, six local named designs and JSON round trips include bounded image/mesh payloads; missing payloads explicitly request reattachment. Download binary STL of connected card or each clean part; Everything ZIP includes all four STL choices, design JSON and numbered assembly/print instructions. STL stores no colours; no fake 3MF.

## Printing and assembly

1. Print bed-flat PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls, 100% mm scale. No supports intended. Calibrate a clean stand/panel before the full card.
2. Snip twelve runners at the documented cut points, file stubs flush, leave tongues intact.
3. Seat the wide line board at the rear socket pair (Y=6), shoulders down. Optional glue fixed board only. Optional marker/paint in groove.
4. Seat narrow screen at front socket pair (Y=0). Do not glue. Both printable front faces point toward the signature apron.
5. View straight on, compare perceived continuation, lift screen fully out to reveal actual line. Use zero offset vs deliberate offset as controls. Physical fit, viewing effect and durability require real testing.

Computational checks cover all preset/shape/extreme meshes, per-part and connected-card topology, finite outward positive-volume triangles, exact two-face edge incidence at 1e-5 mm weld tolerance, Z bed contact, no unintended solid overlap, insertion paths, screen lift, card bounds, twelve tab cuts/released component counts, preserved parts and analytic line-groove probes. These are geometric checks, not physical print or perceptual tests.
