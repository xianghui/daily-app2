# Klann & Trace — six-bar kit-card studio

An original parametric **six-part Klann-topology tracing linkage** on a genuine connected breakaway kit card. Snip 24 runners, bolt five moving links to a ground plate, and turn the short input crank to guide a long foot around a closed loop. This is a horizontal tabletop tracing demonstrator, **not an optimized walking robot** or a load-bearing leg. It differs from the gallery's Jansen walking kit: one rigid triangular coupler, two circle closures and five moving links, rather than the Jansen topology. It is neither a keycap clone nor a static STL re-export.

**Physical printing, fits, friction, fastener selection, tracing and durability have not been tested.** Computational checks establish modeled geometry and ideal kinematics only. The preview omits required external hardware; no dynamic/stress/gait simulation is claimed.

## Build and run

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node mobile-test.cjs
node hole-test.cjs
node portable-errors-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node mechanism-browser.cjs
```

React + Vite, Three.js/OrbitControls, Manifold WASM in a Web Worker, fflate ZIP, locally bundled Fredoka/Rubik (OFL), Playwright test tools. All runtime generation, conversion, fonts, exports and WASM are bundled locally. No API keys, server, CDN or paid service. Node 22.12+ recommended. Base `/daily-app2/20261105-24/`. Per-app `predeploy` is exactly `npm run build`, `deploy` exactly `gh-pages -d dist`; public deployment uses the ROOT combined monorepo flow.

## Reference-first evidence and attribution

Inspected read-only Keycap Studio README, styles.css, App.tsx, Viewer.tsx, imageTrace.ts, worker.ts, export.ts and geometry/stl.ts. Concrete interaction patterns retained: 374 px left panel, compact sticky theme/brand header, collapsible labeled sections, slider/number pairs, generous raised keycap controls with pink selected states/focus, lavender-grey desk, white panels, large right-hand orbit viewer, lower dimensions/warnings/export, saved dark theme, preview-first phone stacking. Shared studio/import/STL/preflight infrastructure is adapted from prior apps; **linkage topology, kinematics, printable parts, pivot layout, physical stack and hardware-envelope checks are new**. No reference source project or old daily_app tree was modified; no Git history or dependencies copied wholesale.

Local candidate STLs were parsed first, not merely named:

- `keycap_generator2/public/templates/clicker_template2.stl`: binary, 944 triangles, three components, aggregate 15.20 × 15.20 × 43.10 mm. SHA-256 `292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9`. Rejected as an MX-specific socket unrelated to a sheet kit.
- `fidget_fabric_generator/public/templates/diamond-link.stl`: binary, 5,940 triangles, one component, 7.981 × 9.241 × 8.00 mm. SHA-256 `8146cd758a8c0218560a3fe7cdd7b6ad23304fe9e4472ff0259e18266f4ed9fd`. Rejected: interlocked fabric is not sheet construction. Its README was inspected.

Selected actual STL: **White Cat Kit Card / Printables 865769**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Fresh upstream README/license stored in `evidence/`; accessible previously downloaded public STL bytes in `/tmp/20261103-white-cat.stl` were freshly parsed and hashed, not inferred from an image. Raw source STL is not redistributed.

SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary, 30,616 triangles; dimensions 179.820 × 178.020 × 3.190 mm. Millimeters are an explicit assumption because STL has no units. Endpoint-welded edge adjacency gives two components and 57 anomalous edges; source includes duplicate/zero-area details. We do not claim it is repaired or printable as-is.

Actual mesh cross-sections at Z=.10/.215/1.59 mm are in `evidence/reference-sections.svg`; reproducible parser `reference-analysis.py` and full reports `reference-analysis.json` / `reference-analysis-raw.json` record hash, bounds, components, z planes and measured loops. **Measured source**: main sheet 1.60 mm, runner tops .21–.22 mm, rectangular socket apertures 4.50 × 1.70 mm. **Retained structure**: pierced bed-flat sheet components, connected carrier/dividers and accessible low breakaway runners. **New design decisions**: 0.4–0.6 mm runners, M3 circular pivots rather than the source's tongue/slot joints, four runners per new part and an original six-bar assembly. Slot dimensions are documented but deliberately not imposed on the unrelated pivot mechanism. No spacecraft silhouette/artwork or private mesh is bundled. Proposed bolt clearances and linkage lengths are not measured source dimensions.

## Parameters (millimeters except stated)

| Parameter | Supported range |
|---|---|
| Card width / height | 210–250 each; default 220 × 220 |
| Linkage scale | .85–1.10×; scales all linkage lengths except input crank |
| Input crank radius | 8–10 mm; default 9 |
| Foot extension past F | .9–1.3× EF; tip distance from E = 32 × scale × (1+extension) |
| Main sheet | 1.6–2.4 |
| M3 diametral allowance | .20–.40; actual bore = 3 + allowance |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Art rotation / local offsets | ±180° / X ±1.5, Y ±2 |

Ground pivots O=(0,0), A=(30s,8s), B=(10s,-24s). Upper rocker AD=18s; coupler CD=32s, CE=48s at −45° to CD; lower rocker BF=30s; leg EF=32s. Selected circle branches remain continuous over a full crank turn. These are original proportions, not an optimized commercial Klann gait. All parts have 4.5 mm-radius pivot bosses, 5 mm coupler/rocker webs, 7 mm leg web; drill cutters are applied **after all bosses are unioned**, preserving minimum-size bores. Card fit and unsupported parameter combinations block export rather than silently changing geometry.

Three real presets have live model thumbnails. Rounded, chamfered and scalloped ground outlines are genuine geometry. Text and six searchable original SVG marks become the same sampled engraving as image uploads. Undo/redo keeps bounded snapshots. Up to six named designs persist locally. Portable JSON includes normalized image pixels/source PNG or bounded validated STL vertices/indices; malformed/missing assets produce reattachment/errors, not fake restores.

## Local image → real solid

PNG, JPEG and simple self-contained SVG (file picker on desktop/phone, drag/drop) are decoded locally. Limits: 16 bytes–2 MB, PNG/JPEG ≤12 MP, ≤6,000 px/side; portable normalized image ≤500 px/side. SVG is limited to 2,000 simple shapes, no scripts/external resources/effects; text must be flattened, rasterized locally to 256 px. Synthetic sample files are bundled with download links.

Contain/cover and crop offsets map image onto a **20 × 20 sample grid**. Transparent/light or dark background handling and luminance threshold select the pattern; grayscale mode varies depth. A closed height-field cutter is Boolean-subtracted into the safe ground apron, centered (−16,15), keep-in radius 5.8 mm. Thresholded relief uses bounded piecewise-linear sample interpolation, not exact vector contour tracing. Bright holes retain backing (ring fixture tested). Source and actual cutout are shown on checkerboard. This is **2D-to-relief, not automatic reconstruction of a 3D object from a photo**. Size, placement, angle, pixel content, threshold and depth measurably change final STL. Engraving only keeps a bed-flat card and ≥1 mm backing; raised/cut-through marks are intentionally unsupported.

## Local STL → real integration

Actual binary and ASCII STL accepted after strict content parsing, limits and topology checks. One connected outward-wound closed **convex, broad flat-bottom, non-overhung** solid, ≤1,500 triangles, .2–250 mm on each source axis, ≤2 MB. Weld tolerance 1e-5 mm. Degenerate/nonfinite/open/nonmanifold/inward/disconnected/self-intersecting/concave/hollow/overhung inputs are rejected with actionable errors; no automatic repair and no hull replacement. The small hull calculation checks bed-contact validity only; it never replaces the source solid.

Choose Z-up, Y-up or −Z-up before attaching; changing axis clears source and requests reattachment. Source dimensions and format are shown in a source 3D preview. Explicitly confirm assumed mm. XY scales proportionally to selected footprint; Z independently maps to engraving depth, and both factors are displayed. Center/reset, rotate and place then Boolean-subtract **the actual imported triangles** into the ground apron. Mechanism/bore/outer-edge keep-outs, depth and final connectivity are checked. Replace/remove/default restoration are functional. Invalid edits block export immediately; the visible last-good preview is labeled, never silently exported.

No user files are uploaded, saved to this repository or sent to services. Images/meshes saved by a user stay in their browser or explicit JSON/ZIP download.

## Physical stack and required external hardware

- Seven M3 bolts, seven locknuts, fourteen washers. Head or nut plus washer per end: **OD ≤7 mm, axial height ≤3 mm**, no protruding bolt tip beyond this envelope. Choose low-profile hardware where needed.
- Sleeve ID fits a 3 mm bolt; **OD ≤4.5 mm**. FIVE 4 mm free-separation sleeves (O/A/B/E/F); TWO `(sheet+8)` mm sleeves (C/D). If washers are inside a free gap, shorten the sleeve by their thickness. Rotation must remain free; not a clamp fit.
- TWO external 5 mm-high blocks under left/right ground margins, taped/clamped to the bench, keep underside heads off the table. Not included in printable files.

Bottom-up stack: ground → **4 mm gap** → crank + upper rocker + lower rocker in the same first plane → **4 mm gap** → extended leg → **4 mm gap** → triangular coupler. This order avoids a long ground axle crossing the coupler sweep. C/D long sleeves cross the otherwise empty middle-leg plane; their exact swept 4.5 mm OD envelopes are tested. Assemble external bolts/sleeves before upper links/locknuts: no snap-through or trapped joint is required. Print input crank first as the full-size M3 calibration piece. No hardware-free version is offered because positively retained revolute joints are essential here. No glue needed for printed joints. Full numbered instructions and stack formulas are in the app and every ZIP.

## Views and real export

Assembled, exploded, flat **connected card**, clean-parts print plate, isolated-part views, see-through parts, orbit/zoom/fit and touch gestures. Pose slider updates exact circle-closure transforms; exploded separation is illustrative, not print orientation. Six separate clean STLs, connected card STL, print-plate STL, Everything ZIP (all seven STLs, bounded design JSON, numbered instructions, assembly map). All prints start Z=0. STL has no colours. No fake 3MF.

Manifold genuine solid unions/differences are owned by the worker, bounded resolution and 100 ms debounce with generation IDs. Every generated part receives finite/face/edge/orientation/volume checks. Preview and export consume the same exact valid indexed meshes; UI fingerprint is compared with actual browser downloads and separately regenerated JSON state. Worker failure, invalid source/settings and stale conversions disable export.

## Verification (computational, not physical)

`validate.mjs` independently parses float32 binary exports, checks byte count, finite coordinates, normalized normals, nondegenerate faces, welded two-opposite-incidence edges, positive volume for EACH component, Euler characteristic and mm/Z=0 bounds. It checks default, every preset, each field endpoint, all-min/all-max, all outlines and image/STL variants. Real carrier cuts must release carrier plus exactly six intact parts; apertures stay open in BOTH card and loose meshes; upper cross-sections remain inside bed footprint. All modeled sheets, M3 shafts, 4.5 mm sleeves and 7 mm × 3 mm fastener-end envelopes are checked through a full turn in 5° increments. Loop residual and toggle margins are independently calculated. Sampling is not a continuous-motion proof, force analysis or physical hardware certification.

Production-base-path Playwright scripts exercise real PNG/JPEG/ASCII/binary picker uploads and actual STL/ZIP downloads; content/settings/transform changes; invalid and unsupported imports; empty silhouette; threshold/grayscale/crop/polarity; SVG holes/text/icons; source remove/replace/reset; stale asynchronous normalization; abort/reload worker failure; named designs and portable JSON; undo/redo; all views; 320/390 px all-tab overflow, preview-first ordering, actual touch orbit/pinch and phone downloads; dark persistence and keyboard focus. Reports and screenshots accompany the source. Root gallery and combined production/public smoke tests are recorded separately.
