# Catenary & Hang

A React + Vite **four-part flat-pack hanging-chain comparison kit**. Snip sixteen real runners, bond a two-foot gantry into a shaped base, and interchange catenary/parabola gauges in a front socket. A rear socket parks the unused gauge. Span, sag and support height recompute the real gauge edges, eye positions, sockets and ideal free-chain length. This is not another rolling-wheel track, pendulum or reflection diagram.

**External fine flexible uniform chain, two fine thread ties, ruler and gantry adhesive required.** No chain is printed or exported. Gauges stay loose/removable. Printed frame is a miniature demonstration, not load-bearing. Default difference between the two profiles is only about 0.22 mm: shallow examples are difficult to distinguish. No physical printing, assembly or chain experiment was performed.

## Run and publish

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base `/daily-app2/20261103-16/`. To test the actual production output: `python3 serve.py`, then run the `.cjs` browser tests. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public monorepo publication uses the parent's root predeploy/deploy flow, **not** the individual app deploy.

## Reference-first evidence

Local STLs under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. Keycap Studio's actual clicker template and Weave's diamond-link were parsed; their READMEs explain switch interfaces/interlocking links, not thin-sheet kit construction. Hashes, dimensions, components and rejection reasons are in `reference-measurements.json`.

Selected reference: Mike Kasberg's **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Upstream README and licence are preserved. The actual public STL was freshly downloaded, parsed with trimesh and sectioned at Z=.10, .50 and 1.59 mm **before final geometry**. See `reference-measure.py` and `evidence/reference-sections.png`.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles; bounds 179.820 × 178.020 × 3.190 **assumed millimeters** (STL has no units); 27 edge-adjacent components, not watertight.
- Measured sheet planes Z=0/1.60; four socket section loops 4.500 × 1.700012 mm; low runner planes .21/.22 mm.
- **Preserved default dimensions:** 1.60 mm sheet and 4.50 × 1.70 mm sockets. **Proposed:** 4.40 mm tongue, .10 mm TOTAL clearance in each socket dimension, adjustable .10–.25 mm; .8–1.2 mm-wide/.4–.6 mm-high bed-aligned runners instead of fragile source runners.
- **New reconstruction:** 100 × 54 mm signature base, four sockets, paired-eye gantry, mathematically recomputed catenary and parabola ribs, witness marks and connected four-bay carrier. Raw reference mesh and cat artwork are not redistributed, repaired or used as a convex hull.

Read-only visual reference: keycap_generator2 README, styles.css, App.tsx, Viewer.tsx, worker, export, imageTrace and STL parser. Concrete adaptations: 374 px scrollable LEFT rail and RIGHT gradient viewer; compact sticky brand/theme; tactile solid-shadow buttons and pressed selections; lavender #e7e9f1 desk, dark #1f2233 ink, coral #e2557a accents; local Fredoka/Rubik fonts; collapsibles, paired mm controls, checkerboard conversion and separate source preview; worker/current-result export gating. Phones put preview, dimensions and export before stacked controls. Generic local studio/import/serialization infrastructure was adapted from daily-app2; the chain kit geometry, equations, assembly transforms and mechanical tests are new. No reference Git history or dependency tree was copied.

## Parameters

All lengths are **mm**; rotation degrees, image threshold /255, crop shifts %.

| Parameter | Range | Default |
|---|---:|---:|
| Card width / height | 130–160 / 240–300 | 140 / 260 |
| Support span | 52–68 | 60 |
| Chain sag | 10–18 | 14 |
| Eye height above shoulder | 36–48 | 42 |
| Gauge band | 2.4–4.0 | 3 |
| Sheet | 1.6–2.4 | 1.6 |
| Part spacing | 3–5 | 3.5 |
| Runner width / height | .8–1.2 / .4–.6 | 1 / .6 |
| Socket total allowance | .10–.25 | .10 |
| Import footprint / depth | 4–7 / .4–.6 | 6 / .5 |
| Import placement X / Y | ±1.5 / ±2 | 0 / 0 |

Card-overflow combinations and out-of-range/nonfinite inputs are rejected, not clipped. Three real model-thumbnail presets, rounded/square/chamfered base shapes and bounded variations alter solids. Undo/redo, up to six named local designs and portable JSON include bounded image/mesh payloads. Missing image payloads explicitly request reattachment.

## Mathematical/assembly design

Solve `a(cosh(span/(2a))-1)=sag` with 90 bisection steps. Catenary: `y=height-sag+a(cosh(x/a)-1)`; free length `2a sinh(span/(2a))`. Equal-endpoint/sag parabola: `y=height-sag+4 sag x²/span²`. Upper gauge edges sample 64 segments; tested chord error below .02 mm. A continuous lower rail, two end pillars and curve band form each gauge; one or two lower witness ticks identify profiles.

Gantry has two 1.8 mm eyes at the same shoulder-relative height, feet at X=±span/2 and base Y=8. Front gauge socket Y=−3; spare parking socket Y=18. All tongue shoulders seat on the base top; reference-sized clearance fits allow independent vertical insertion/removal. Bond only the gantry feet after calibration; gauges are not captive or guaranteed friction fits. Swapping both gauges is collision-checked. Chain depth is offset from the gauges, so compare straight from the front; finite link pitch, tie lengths, stiffness and parallax affect real results. External uniform flexible fine chain is not equivalent to stiff cord. The 3D preview shows printed parts only; the 2D diagram clearly labels the ideal chain. No fake motion simulation.

## Local image workflow

File picker and drag/drop: PNG/JPEG and bounded simple SVG. Header/type/size checks before decode: 16 bytes–2 MB, ≤12 MP, ≤6,000 px/side; normalize to ≤500 px. Simple SVG shapes/paths ≤2,000 elements rasterize locally to 256 px; no external resources, scripts, filters, text or embedded images. Source preview and actual checkerboard cutout shown.

Fit entire source or fill/crop; shift crop ±25%; remove light/transparent background or invert/remove dark; choose threshold or grayscale. Conversion samples a **20 × 20 field**. Threshold samples become 0/depth; grayscale is `depth*(1-luminance/255)`. Adjacent samples triangulate a continuous piecewise-linear height surface, with closed sides/bottom; the solid Boolean-cuts the apron at Y=−19 mm. This is **2D-to-relief, not automatic 3D reconstruction or exact contour tracing**. Bright holes retain full-height material on ≥1 mm continuous backing. Depth, pixels, threshold, crop, footprint, rotation and placement change the actual STL. Raised marks are deliberately not offered on this thin card. Text and six searchable bundled icons use the same real engraved conversion. Replace/remove/reset restores built-in geometry.

## Local STL workflow

ASCII and binary STL: ≤2 MB, ≤1,500 triangles, one closed outward-wound solid; each source dimension .2–250 mm. Parse actual bytes, exact binary length or ASCII structure; check finite coordinates, nondegenerate faces, welded edge incidence/opposed winding, connectedness, positive volume and self-intersections. Supported inputs are deliberately **convex, broad flat-bottom solids without footprint overhang**. Concave, hollow, branched, open/nonmanifold/disconnected/inverted/unsupported input is rejected with guidance. No repair or hull replacement; a footprint hull is used solely to validate bottom contact, never to replace geometry.

Choose Z, Y or −Z up **before** attachment; changing orientation requests reattachment. See source dimensions and interactive source mesh, explicitly confirm millimeters because STL has no unit metadata. XY scales proportionally to footprint; Z independently scales to engraving depth; rotate/center/place. The exact validated mesh Boolean-subtracts the protected apron, away from every socket. Source/final previews, reset/remove/replacement and portable JSON work. All user files stay on-device; no uploads, APIs, credentials or personal files committed.

## Generation, views, exports

React editor; Three.js orbit/zoom/fit with mouse/touch; Manifold WASM robust solid Booleans in a local worker; bounded resolution, debounced generation, request IDs and exact state keys. Last-good previews may remain visible during errors but **exports are disabled until the exact current state is valid**. Worker errors expose a recoverable reload message. Dependencies/WASM/fonts locally bundled; no CDN/API calls.

Connected card, assembled, exploded, de-tabbed plate and isolated parts all use the same current model; see-through frames explain fit. Exploded spacing is illustrative. Export always bed-flat at Z=0: connected-card binary STL, four clean part STLs, de-tabbed plate, and Everything ZIP containing five STLs, portable JSON and numbered print/assembly instructions. Final X/Y/Z and current signature shown. Preview and downloaded bytes are hash-compared by browser tests and regenerated from downloaded JSON in Node. STL stores geometry, not colours; no fake 3MF.

## Printing and validation

Print at 100%, PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls. Default connected card 140 × 260 mm; individual parts fit smaller beds. No supports intended; sampled upper footprints remain within first-layer footprint. Snip all 16 accessible runners ~1.8 mm outside outlines and file flush without damaging tongues/eyes/profiles. Calibrate socket fit with a clean part/slicer-cut socket coupon before printing the whole card. Full numbered instructions travel in ZIP.

`npm test`: 44 default/preset/shape/extreme/import cases; each STL checks finite nondegenerate triangles, unit normals, outward winding, positive per-component volume, welded 1e−5 mm edge incidence/opposition, component count and millimeter bounds. Tests additionally use actual kernel intersections for assembly, vertical insertion, front/rear gauge exchange, plate separation, runner cut/release and preserved functional solids; socket/tongue datums, continuous backing, chain equations, independent arc-length quadrature and exported curve probes checked. Browser scripts exercise real PNG/JPEG/SVG/ASCII/binary inputs and downloads, changes versus defaults, malformed files, threshold/depth/transforms, source orientation, text/icons/holes, history/portable persistence, ZIP contents, stale edits/worker abort, theme, responsive layout and touch orbit/pinch. Reports and screenshots record actual results in this folder.

Computational checks are **not** physical print, fatigue, adhesive, load, chain-behavior or measurement-accuracy tests. No physical testing was performed. See VALIDATION.md.

## Dependencies/attribution

React, Vite, Three.js, fflate (MIT); Manifold (Apache-2.0); Fredoka/Rubik Fontsource (SIL OFL); Playwright (Apache-2.0, tests). Original synthetic sample PNG/JPEG/SVG and ASCII/binary STL fixtures; no personal uploads or third-party reference STL bundled. Original small icon paths. White Cat Kit Card credit/licence retained in REFERENCE-UPSTREAM.md / REFERENCE-LICENSE.txt. This documented parametric reconstruction adapts measured interfaces, not source artwork.
