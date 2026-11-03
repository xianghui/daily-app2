# Scytale & Wrap

A React + Vite **four-part flat-pack scytale mandrel kit**. Snip sixteen real runners, slide two opposing half-slit ribs together at 90°, and bond two cross-aperture collars onto their reduced-width ends. Wrap an external paper strip between the collars, write along the axis across adjacent turns, and unwrap to scramble the letter order. Rewrap with identical handedness, pitch and registration to read it again. This is a historical transposition demonstration, **not secure encryption**.

This is not a cipher wheel, a rolling fidget or a re-skinned hanging-chain gauge. The new geometry is a cross-lapped clipped-square-section wrapping mandrel, with paper-width-dependent engraved registration ticks, two end-stop collars and actual insertion paths. Paper, removable tape and adhesive are required. **No physical printing, adhesive or paper-wrap test was performed.**

## Run

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base `/daily-app2/20261103-17/`. `python3 serve.py --port 5797` serves the actual production bundle; browser scripts use `TEST_BASE=http://127.0.0.1:5797`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public publication uses the ROOT monorepo predeploy/deploy, not per-app deploy.

## Actual STL reference, inspected first

Local STL collections were searched before final geometry. Keycap Studio's clicker template and Weave's diamond-link were actually parsed and rejected as sheet-kit references (switch interfaces/interlocking links are not interchangeable kit templates). See `reference-measurements.json` for their hashes, dimensions, components and reasons.

Selected public reference: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Upstream README/licence are retained. The actual public STL was freshly downloaded, parsed and sectioned before final geometry; see `reference-measure.py`, `reference-measurements.json`, `reference-analysis.json` and `evidence/reference-sections.png`.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles, 179.820 × 178.020 × 3.190 **assumed mm**; STL has no units. 27 edge-adjacent components; source is not watertight.
- Measured sheet planes Z=0/1.60; four socket loops 4.500 × 1.700012 mm, low runner planes .21/.22 mm.
- **Preserved:** default 1.60 mm sheet and 1.70 mm slot width; bed-flat carrier with removable low tabs.
- **Proposed:** .10–.25 mm TOTAL slot allowance; .4–.6 mm-high, .8–1.2 mm-wide runners. These are printer/material-dependent starting fits, not measured source tolerances.
- **Redesigned:** source 4.50 mm socket length is NOT preserved. New opposing half-length cross-laps, cross-aperture end collars, reduced rib ends and pitch ticks. All scytale geometry is an original parametric solid reconstruction. Source artwork/raw STL is not redistributed, repaired or replaced with a convex hull.

Read-only visual reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles.css, App.tsx, Viewer.tsx, imageTrace.ts, worker, STL parser and export. Concrete adaptations: 374 px scrollable LEFT control rail; RIGHT gradient viewer; sticky brand/theme header; locally bundled Fredoka/Rubik; lavender #e7e9f1 desk, #1f2233 ink, coral #e2557a; tactile solid-shadow/pressed buttons; collapsibles, paired mm controls, checkerboard conversion, separate source preview and worker/current-result export gating. Phones put preview, dimensions and export before stacked controls. Generic local studio/import/export infrastructure is adapted from daily-app2, not the reference project's dependency tree/history. New mandrel geometry, winding equations, assembly transforms and mechanical tests are mechanism-specific.

## Parameters and fits

All lengths **mm**; rotation degrees, threshold /255, crop shift percent.

| Parameter | Supported range | Default |
|---|---:|---:|
| Card width / height | 130–160 / 240–340 | 140 / 280 |
| Mandrel length | 62–86 | 72 |
| Rib half span R | 15–19 | 16 |
| External paper width | 6–12 | 8 |
| Sheet | 1.6–2.4 | 1.6 |
| Part spacing | 3–5 | 3.5 |
| Runner width / height | .8–1.2 / .4–.6 | 1 / .6 |
| Total slot allowance | .10–.25 | .10 |
| Import footprint / depth | 4–7 / .4–.6 | 6 / .5 |
| Import X / Y displacement | ±1.5 / ±2 | 0 / 0 |

Card-overflow or nonfinite/out-of-range combinations are explicitly blocked. Three real model-thumbnail presets; circular, diamond and clipped collar profiles; bounded variations; undo/redo; six named local designs; portable JSON with bounded image/mesh payloads. Missing image payloads explicitly request reattachment.

Each rib's slot has width `sheet + allowance`, with opposing openings extending `L/2 + allowance/2`. One rib inserts **from below** the other; collar insertion occurs afterwards, from opposite ends. Reduced rib end half-span is `R-3`; collar cross-arm reach is `R-3+allowance/2`. Both collar-to-both-rib joints must be bonded after calibration. No snap capture or guaranteed friction retention is claimed. A slicer-cut test of the actual collar/end pair or cross-lap is recommended before the whole card.

The finite-width rib tips define a clipped square: four broad faces `sqrt(2)*(R-sheet/2)`, four tip flats of length `sheet`, perimeter `4*sheet+4*sqrt(2)*(R-sheet/2)`. Rib thickness is included, not silently treated as zero. Winding span is `L-2*sheet`. Full turns `floor(span/paperWidth)`; strip length estimate `turns*hypot(perimeter,paperWidth)`. These assume zero-thickness ideal paper and even manual pitch: cut extra for tape and real thickness. Paper width also changes **actual engraved pitch witness ticks** on the second rib. Collars are outside the paper winding span and do not set its perimeter. No paper is exported or simulated as printable geometry.

## Local image-to-geometry workflow

PNG/JPEG file picker on desktop/phone and drag/drop; bounded simple SVG also supported. Validate header/content/extension/size first: 16 bytes–2 MB, ≤12 MP, ≤6,000 px/side; normalize to ≤500 px. SVG supports simple local shapes/paths ≤2,000 elements, rasterized at 256 px; rejects scripts, external resources, text/images/filters. Synthetic samples are bundled.

Fit entire source or fill/crop, shift ±25%, remove light/transparent background or invert dark, choose threshold or grayscale. A **20 × 20 sampled field** becomes piecewise-linear height geometry: threshold is 0/depth, grayscale `depth*(1-luminance/255)`. Triangulated top, closed sides and bottom form a real solid; Manifold Boolean-subtracts it from the signature rib. This is **2D-to-relief/silhouette engraving, not single-photo full-3D reconstruction or exact contour tracing**. Bright holes remain unengraved on continuous backing ≥1 mm. Source and actual checkerboard cutout are displayed. Pixels, threshold, depth, fit, rotation, scale and placement affect exported geometry. Engraving only: raised marks are intentionally unsupported on these thin flat parts. Text and six searchable bundled icons use the same real conversion.

## Local STL-to-geometry workflow

ASCII and binary STL ≤2 MB, ≤1,500 triangles, each source dimension .2–250 mm. Exact binary length/ASCII structure, finite coordinates, nondegenerate faces, welded edge incidence/opposed winding, positive volume, connectedness and self-intersections are checked. Supported imports are deliberately **convex, broad flat-bottom closed solids without footprint overhang**. Concave, hollow, inverted, disconnected, open/nonmanifold and unsupported overhangs are rejected with guidance, not repaired or converted to a hull. A hull is used only to validate bottom contact, never as output substitution.

Choose Z/Y/−Z up before attachment; changing axis requests reattachment. Interactive source mesh and dimensions; explicitly confirm mm because STL has no unit metadata. XY proportionally fits selected footprint; Z independently fits engraving depth. Rotate, center and place in the protected rib wing. **The exact validated source triangles Boolean-cut the rib**, rather than being merely displayed or re-exported. Keep-in radius 6.5 mm around `(R-7,L/2)` preserves outside edges, cross-lap and end seats; depth leaves ≥1 mm backing. Replace/remove/reset and portable JSON/named state restore actual bounded assets. Every file stays on-device; no uploads, APIs or personal uploads committed.

## Geometry, views and export

Manifold WASM robust solid Booleans in a locally bundled Web Worker, bounded complexity, debounced generation, stale request IDs and exact state keys. Last-good preview may remain during invalid edits, but **export is disabled until the exact current state is valid**. Worker failure requires reload with an actionable error. Three.js orbit, zoom, fit, touch orbit/pinch. Connected card, assembled, exploded, clean print plate and isolated parts use the same solids. See-through collars explain fit; exploded offsets are illustrative.

Download connected-card binary STL, four clean part STLs, clean plate and Everything ZIP with five STLs, portable JSON and numbered assembly/printing instructions. Every export is bed-flat at Z=0, not the assembled preview. Current dimensions and signature displayed; actual download signatures are compared to preview and Node regeneration from JSON. STL does not store preview colour; no fake 3MF. Connected carrier has sixteen accessible real runners, four per part, not loose parts beside a decorative rectangle.

## Printing and validation

100% scale, PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls. Default connected card 140 × 280 mm; use individual parts on smaller beds. No supports intended. Snip runners about 1.8 mm outside outlines and file flush, preserving cross-laps and rib shoulders. External thin paper, tape and suitable adhesive required. Let joints cure before gentle wrapping. Read numbered assembly instructions in app/ZIP.

`npm test` exercises default/presets, every parameter endpoint, eight length/radius/sheet corners, all-low/all-high, profiles and image/STL-derived solids. Independent binary checks: finite nondegenerate triangles, stored unit normals/winding, positive per-component volume, 1e−5 mm welded edge incidence/opposition, part counts and expected mm bounds. Kernel checks: every assembly pair, full sampled upward rib-insertion path and collar paths, slot/shoulder datums, paper-tip contact/perimeter equations, continuous backing, card connectivity, every runner cut, preservation of clean parts, separate plate and support-free sampled upper footprints.

Browser scripts exercise real PNG/JPEG/SVG/ASCII/binary picker imports, geometry changes versus default and transformed imports, actual STL/ZIP downloads and parsing, previews/state signature equivalence, malformed/empty/unsupported inputs, error recovery, presets, history, portable state, themes, desktop/mobile layout, focus, collapsibles, worker failure/stale results and touch gestures. See `VALIDATION.md` and generated JSON reports for actual outcomes.

Computational checks do **not** establish physical print fit, adhesive strength, fatigue, paper tension, cipher legibility, ease of handling or load capacity. No physical testing was performed.

## Dependencies and attribution

React/Vite/Three.js/fflate (MIT); Manifold (Apache-2.0); Fredoka/Rubik Fontsource fonts (SIL OFL); Playwright (Apache-2.0, tests). Original bundled six icon paths and synthetic PNG/JPEG/SVG and ASCII/binary STL fixtures. White Cat Kit Card credit/licence in REFERENCE-UPSTREAM.md / REFERENCE-LICENSE.txt. No third-party reference STL or personal source files bundled. All runtime dependencies/WASM/fonts are local; no CDN or paid service.
