# Buffon & Drop

A browser-local React + Vite **three-part flat-pack kit-card generator** for a physical Buffon-needle probability experiment. Snip twelve real runners, seat a boundary fence in two deck sockets, and place/drop a loose blunt strip over equally spaced engraved lines. Customize actual pitch, groove count, needle length, deck silhouette and reference-derived sheet/socket/tab fits. This is not a browser game or a simulated random experiment.

Unlike previous optical occlusion, vernier and Galton-board kits, this kit studies the **intersection probability of a randomly oriented axial segment with parallel lines**. The rear fence is an assembled boundary/tally reminder, not a needle guide. No hardware required; marker optional, glue only the fixed fence if loose. The needle remains loose, not captured. Small parts: adult teaching/craft kit.

**Not physically printed or tested.** Computational geometry checks do not establish fit, strength, friction, throw uniformity, statistical accuracy or durability. The printed strip is 2 mm wide: count its ideal axial centerline crossing a groove centerline, not the strip edges. Ideal independent uniform trials with L < d give P = 2L/(πd); π ≈ 2LN/(dC) is undefined when C=0. Finite field boundaries, hand-placement bias and endpoint judgement limit this educational experiment. Use interior intervals, an explicit edge policy, and extend the line pattern onto paper for rigorous trials; conditioning on complete needle containment biases samples.

## Run / build / reproduce

Node 22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261103-10/`. Per-app scripts exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`; public publication uses the ROOT monorepo combined `deploy/` flow, not per-app deployment.

`python3 serve.py --port 5770` serves actual production output under the real base path; `--staged` serves the combined deploy output. Reproducible checks: `node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node stale-test.cjs`, `node presentation-test.cjs`, `node icons-drop-test.cjs`, `node hole-check.mjs`, `node kit-ui-test.cjs`, `node gallery-test.cjs`, `node public-test.cjs`. Test results and screenshots describe checks actually run; see VALIDATION.md.

## Reference-first provenance

Local `/Volumes/ExternalHD/3d_printing_apps/` STL candidates were searched first. Actual Keycap Studio `clicker_template2.stl` and Weave `diamond-link.stl` were parsed; their project instructions inspected. Neither provides sheet/carrier/socket construction, so they were rejected for this kit (hashes, dimensions and components in `reference-measurements.json`). No reference tree was changed.

Selected public reference: Mike Kasberg's **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Public STL and license were fetched and SHA-256 confirmed in this run. The mesh was parsed and actual Z=.1/.5/1.59 mm cross-sections inspected before choosing final geometry; evidence in `evidence/reference-sections.png`. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820 × 178.020 × 3.190 mm assuming mm (STL contains no unit metadata); 27 edge-adjacent components including defective source faces. No repair or raw mesh redistribution.

Measured source: 1.60 mm sheet planes, 4.50 × 1.700012 mm sockets and .21/.22 mm runner elevations. Our original Manifold reconstruction preserves default 1.60 mm sheet and 4.50 × 1.70 mm sockets. **Proposed**, not measured: 4.40 × 1.60 mm tongues (.10 mm total allowance), .4–.6 mm stronger breakaway tabs, ruled deck, blunt needle and five-window boundary fence. The card is a real boolean-connected carrier with twelve accessible bed-contact tabs, not loose parts around a rectangle. Original cat artwork is not copied. License/README retained; see `reference-analysis.json` for concrete source-to-parameter mapping.

Visual and interaction reference: read-only Keycap Studio README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts were inspected. Used concrete maker patterns: 374 px left rail, compact sticky brand, pink tactile keys, paired slider/numeric fields, collapsible controls, right orbit viewer, checkerboard source/cutout previews, phone preview-first stack, saved theme and portable designs. Shared studio infrastructure is adapted from previous daily_app2 work; statistical-kit geometry, assembly transforms and model-specific checks are new. No reference Git history or dependency tree copied.

## Parameter bounds

All distances in millimeters; final X/Y/Z is shown for the selected export.

| Parameter | Supported range | Real effect |
|---|---|---|
| Card width / height | 130–160 / 180–230 | Connected carrier envelope |
| Line pitch | 12–18 | Actual centerline spacing |
| Needle length | 8–11 | Axial/end-to-end strip length, always shorter than pitch |
| Line count | integer 3–5 | Actual groove count |
| Sheet | 1.6–2.4 | Deck, fence, needle and frame |
| Spacing | 3–5 | Actual part-to-carrier bay spacing |
| Tab width / thickness | .8–1.2 / .4–.6 | Twelve removable runners |
| Socket allowance | .10–.25 TOTAL | Slot depth = sheet + allowance; tongue width = 4.5 − allowance |

Deck is 108 × 96 mm with rounded, square or clipped corners. Grooves .6 mm wide, .5 mm deep, 56 mm long. Needle 2 mm wide, centerline groove .5 mm wide/.4 mm deep. Fence 70 × 18 mm plus tongues, five 1.2 × 8 mm tally windows. Three genuine presets have live generated model thumbnails. Invalid numbers/noninteger line counts block export. Preview needle angle 0–180° changes pose only, not physical dimensions; it is explicitly not a simulated throw. Exploded placements are illustrative. No force/retention guarantee: fence gravity-seated, optional adhesive; needle loose. Default clearance is an FDM starting point, never universal. Calibrate clean deck/fence before printing the card.

## PNG / JPEG / SVG, text and icons

File picker works on desktop and phones; single-file drag/drop where supported. Synthetic fixtures are bundled with attribution. PNG/JPEG ≤2 MB, ≤12 MP, ≤6,000 px side; actual decoded dimensions checked then normalized to ≤500 px. Simple safe SVG ≤2 MB/2,000 elements rasterizes locally to 256 px; scripts/external resources/effects rejected, text must be outlined. Six searchable original bundled icons and up-to-eight-character text feed the same conversion pipeline.

Source image and actual sampled checkerboard cutout are shown. Fit/cover, crop ±25%, background/invert and threshold controls select a bounded **20×20 luminance grid**. Threshold: dark samples have selected depth, bright samples zero. Relief: depth × (1 − luminance/255). A closed piecewise-linear height solid is Boolean-subtracted from the protected front apron at Y=−39 mm. Bright holes preserve full backing, independently probed in final geometry. This is sampled **2D-to-relief/silhouette conversion**, NOT exact SVG outline tracing or automatic reconstruction of a full 3D object from a photo. Empty relief blocks export. Engraved-only .4–.6 mm depth leaves ≥1 mm backing; raised style deliberately unsupported. Footprint 4–7 mm, rotation ±180°, placement X±1.5/Y±2 mm; entire art must remain within a 6.5 mm radius away from field and sockets. Replace/remove/reset return to actual defaults. Pixel content, threshold, depth, scale and crop change exported geometry.

## STL imported-part workflow

ASCII/binary .stl ≤2 MB/1,500 triangles, finite dimensions .2–250 mm per axis. Select Z/Y/−Z up before attaching; explicitly confirm mm because STL has no unit metadata. Source dimensions, format/triangles and interactive source mesh shown. Proportional XY footprint, independent Z engraving depth, rotation, placement and center/reset modify the exact source mesh. Genuine Manifold subtraction integrates its concavities only if supported: **the accepted contract is a single connected convex outward-wound watertight solid, broad flat bottom ≥25% footprint, no projected overhang**. Concave, hollow, open, branched, nonmanifold, self-intersecting, inverted, excessive and unsupported models rejected with actionable messages, never silently repaired, convex-hulled or substituted. Convexity is validation, not replacement geometry. Bottom hull only checks overhang support. Reorient/edit/re-export unsupported files in a modeler. Changing up axis clears import and asks reattachment.

Imports create real deck recesses, not preview textures or unchanged re-exports. Min 1.2 mm transformed XY extent, .4–.6 mm depth and keep-in checks protect backing and assembly. Per-source tests compare outputs to default and apply scale/rotation/placement changes.

## Local processing, views and export

No uploads, APIs, keys, remote fonts or CDN dependencies. Manifold WASM, Three.js, fflate, React and OFL Fredoka/Rubik fonts bundled locally. Heavy booleans and mesh validation run in a Web Worker with debounce, stale-request guards, real build/error status and exact current-state export gating. Invalid inputs disable export immediately; any last-good preview is labeled. Preview and binary STL use the exact same current valid mesh/signature, independently compared to downloaded bytes and Node regeneration.

Assembled, exploded, connected card, de-tabbed plate and isolated clean-part views, ghost needle, orbit/zoom/fit/top/front with touch. Saved light/dark toggle, undo/redo, six named local designs and portable JSON include bounded image/mesh payloads; missing payload explicitly requests reattachment. STL contains no colour. Prominent per-part and selected STL plus Everything ZIP (card, three clean parts, design JSON, numbered assembly/printing instructions). No fake 3MF. All exports bed-flat, unlike the upright assembled fence preview.

## Printing / release / assembly

1. Print PLA/PETG at 100% mm, .4 mm nozzle, .16–.20 mm layers, 3+ walls. No supports intended. Test clean deck/fence fit first; adjust total allowance for your printer/material.
2. Snip twelve tabs 1.8 mm beyond part edges, file stubs flush, do not damage tongues. Needle stubs especially must be flush; clean-part export avoids stubs.
3. Insert fence tongues straight down into deck sockets at Y=40 mm; shoulders seat on deck. Optional glue fence only. Windows remind tallying in fives.
4. Place the loose blunt needle on the ruled deck, optionally mark grooves, record trials/crossings on paper. Read the edge-policy and ideal-model caveats above and in exported ASSEMBLY.txt.

Geometric tests cover per-component manifold/outward winding, expected dimensions, no degeneracy, positive individual volumes, support-free cross-sections, card connectivity, twelve safe tab cuts/released parts, 19 needle poses, 21 fence insertion heights, exact line spacing/count, strip length and ideal probability quadrature. They are **not physical fit, printing or statistical tests**.
