# Conchoid & Trace

A local React/Vite maker studio for a **three-part Nicomedes conchoid drawing kit card**. Print the connected carrier, clip twelve real breakaway runners, assemble a slotted arm over a fixed pole and a straight-line guide shoe, and trace an outer conchoid branch with a pencil. This is a physical kit generator, not a browser drawing game.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
PORT=5728 node serve.mjs
node browser-test.cjs
node studio-test.cjs
node orientation-test.cjs
node stale-test.cjs
node presentation-test.cjs
```

Production base: `/daily-app2/20261102-28/`. Per-app deploy scripts are installed as required; public publication uses the parent repository’s combined root deploy flow, not the individual deploy command.

## Real mechanism and assembly

For pole O=(0,0), line pivot P=(x,a), tracing offset b, the pencil Q=P+bP/|P|. The arm’s round pivot follows the straight guide; its long slot absorbs the changing pole distance. This is **not** the earlier two-perpendicular-slider trammel or a cord ellipse. Only the outer conchoid branch and bounded x travel are implemented.

Three printable parts: windowed guide base, tracing arm, guide shoe. The card contains all three, fused to a perimeter/subframe by twelve bed-aligned runners. Clean-part exports omit runner stubs entirely. Flat card, assembled, exploded, de-tabbed plate and isolated views share the same actual solids. Preview sweep is an analytic pose, not a print transform; hardware, feet, paper and pencil are intentionally omitted. External-hardware positions are estimates, not an installation drawing.

**Required hardware:** 2 × M3 × 16 mm screws, 4 × M3 nuts, 6 × M3 washers with 7–8 mm OD, four adhesive riser feet ≥6 mm high, pencil/tape sleeve, paper, tape, snips and file. Lower hardware must clear paper. Leave at least .8 mm arm/base clearance, adjust washer stacks and jam the two nuts against each other without clamping motion. No hardware-free alternative is claimed for this retained slotted arm. See [ASSEMBLY.txt](ASSEMBLY.txt) for numbered instructions and safety/fit notes.

## Reference-first evidence

Before final geometry, local keycap switch and fabric-link STL candidates were parsed; neither is a suitable sheet carrier. Their dimensions, hashes and rejection reasons are in `reference-measurements.json`. The actual public **White Cat Kit Card**, Mike Kasberg, [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), is licensed **CC BY 4.0**, verified against its repository LICENSE saved here. Source README retained separately.

Mesh SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL, 30,616 triangles; assumed mm dimensions 179.820 × 178.020 × 3.190. Actual triangle adjacency found 27 components, including source defects; the whole source is not watertight. It is a **design reference, not an automatically repaired or re-exported asset**. `reference-measure.py` and `evidence/reference-sections.png` record actual mesh sections at Z=.1, .5 and 1.59 mm. Raw source downloaded only to `/tmp/conchoid-reference.stl`, not bundled.

**Measured:** 1.60 mm sheet planes, perimeter/subframe part bays and low .21–.22 mm runner regions; 4.50 × 1.700 mm socket loops. **Preserved:** default 1.60 mm sheet and real carrier/run­ner organization. **Not imposed:** source sockets, irrelevant to bolted linkage. **Redesigned:** all drawing components, windows, pole slot, shoe, supports and layout; runners strengthened to .4–.6 mm. **Proposed**, printer-dependent clearances are not source measurements. Concrete parameter mapping appears in `reference-analysis.json`. No source artwork, raw mesh or private asset redistributed.

Read-only visual/interaction reference: `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/worker.ts`, `src/export.ts`, `src/imageTrace.ts`, `src/geometry/stl.ts`. Adapted maker-studio patterns: 374 px scrollable left rail, compact sticky branding, tactile raised/selected controls, labelled collapsible groups, paired mm sliders/numbers, large right viewer, mobile preview-first flow, saved theme, checkerboard cutout, actual per-part/ZIP exports and worker-current-result gating. Shared generic studio/parser/export infrastructure adapted from earlier locally authored studios; mechanism geometry is new. No reference project modifications or copied dependency/Git trees.

## Parameter bounds — millimeters

| Parameter | Range |
|---|---|
| Card width / height | 190–250 / 130–190 |
| Pole-to-guide a | 24–32 |
| Pencil offset b | 16–24 |
| Half slider travel | 16–24 |
| Pencil bore diameter | 6.5–9 |
| Total shoe/slot running gap | .30–.60 |
| Sheet | 1.6–2.4 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |

M3 pivot bores are 3.40 mm. Pole-slot width is 3 + running gap; guide is 6 + gap for a 6 mm shoe. Washer OD≥7 mm covers slots throughout supported travel. Print the arm/shoe first to calibrate; all tolerances depend on material, printer, orientation and first-layer expansion. Do not scale in the slicer to tune only one fit. Three real presets and three base silhouettes affect printable solids. Numeric invalid inputs and insufficient card envelope block generation/export.

## Local image / SVG conversion

File picker on desktop and phone, plus drop onto Import. PNG/JPEG validated by actual content, dimensions and extension before decode: ≤2 MB, ≤12 MP, ≤6,000 px per side; normalize locally to ≤500 px. Simple passive SVG shapes, ≤2,000 elements, no scripts/external resources, rasterized locally to 256 px. Text and six searchable bundled SVG marks use the same pipeline.

Fit/cover crop and ±25% shift sample a **20 × 20 luminance grid**. Light/transparent background or dark-background inversion, threshold 1–254 or grayscale mode produce a connected triangulated height-field cutter, Boolean-subtracted from the protected lower-right base apron. Bright holes remain uncut in a continuous backing. This is bounded sampled **2D-to-relief**, not exact vector tracing and not full 3D object reconstruction from one photo. .4–.6 mm engraving preserves ≥1 mm backing; raised decoration is intentionally unavailable on these sheet parts. Checkerboard displays the actual sampling cutout; source preview retained. Physical footprint 4–7 mm, Z rotation ±180°, X ±1.5 mm and Y ±2 mm; maximum radius 6.5 mm keep-in protects pole/guide/windows. Replace/remove/reset and reset transforms are implemented.

## Local STL integration

ASCII and binary STL ≤2 MB / 1,500 triangles; actual content and complete facets validated. Every axis must be .2–250 mm; coordinates finite and ≤10,000 in absolute value. Weld tolerance 1e-5 mm; require opposite-oriented two-face edge incidence, one connected outward-wound positive-volume solid, no degenerate or self-intersecting faces. The bounded supported contract is **convex, broad flat-bottom, no overhang beyond its base footprint**. Concave/cavity/branch/disconnected/open/nonmanifold input is explicitly rejected with guidance; **no silent convex hull or unverified repair**.

Choose Z-up, Y-up (+90° X) or upside-down before attaching. Show oriented source dimensions, triangle count, original mesh preview and explicit millimeter confirmation (STL has no unit metadata). Exact imported triangles become a real Boolean engraving cutter: proportional XY scale to 4–7 mm footprint, independent Z fit .4–.6 mm, rotation/placement and keep-in validation. This visibly and measurably changes the base and connected-card STL, never an unchanged re-export or preview-only texture.

## State, performance, privacy and export

All personal files stay local in memory/browser storage or explicit portable JSON. No APIs, uploads, CDN imports, paid services, analytics or keys. Only synthetic fixtures bundled. Fontsource Fredoka/Rubik font files ship locally (SIL OFL); six original simple icon paths; Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), React (MIT), Vite (MIT), gh-pages (MIT). Heavy CSG and mesh import checks run in a Web Worker with local WASM, bounded detail, debouncing, request IDs and stale-result guards. Worker errors disable exports with recovery guidance. Last-good preview is labelled and cannot be exported while current input is invalid.

Preview/current export share exact generated mesh and a UI byte fingerprint. Binary STL per part, actual connected card, de-tabbed print plate; Everything ZIP includes all four STLs, portable design JSON and numbered instructions. STL has no preview colour. Undo/redo, six local named designs and JSON include bounded normalized images/mesh payloads, not inaccessible file paths; missing image payload explicitly asks for reattachment.

## Validation and limitations

`npm test` validates 38 variants: presets, each field minimum/maximum, combined extrema across all shapes, image-derived, image hole and ASCII/binary STL-derived/transformed models. Independent serialized-STL checks verify finite/nondegenerate triangles, expected mm bounds, unit normals/winding, positive volume per component and exactly two opposite-directed edge incidences after 1e-5 mm welding. Both connected-card and clean-part/translated plate exports checked. CSG probes test bed-footprint support, 12-tab connectivity and clipping release into carrier + 3 intact parts, plate nonoverlap, and 41 assembled positions including extremes: 3 mm bolt paths, 7 mm washer retention coverage, paper-window pencil clearance, .8 mm base clearance, vertical arm insertion and exact constant pencil offset.

Real Chromium production tests download and parse PNG/JPEG/ASCII/binary-derived outputs, compare default, changed pixels/threshold/depth, scale/rotation/placement and reset, regenerate portable JSON in Node and match exact UI/export signatures. Invalid/truncated/nonmanifold/concave/oversized files, empty silhouettes and bad transforms block export and recover. Presets, SVG/text/icons, image/mesh JSON, local named designs, undo/redo, ZIP contents, worker failure/recovery and stale edits tested. Phone 320/390 px, preview-first ordering, touch orbit/pinch screenshots, no overflow, imports, reachable downloads, dark theme, focus and collapse tested. Reproducible scripts/reports/screenshots saved alongside app.

**No physical print, actual pencil friction, washer-stack fit, fatigue, drawing precision or material strength test has been performed.** Mesh inspection/computational fit is not physical validation or a universal tolerance guarantee. Educational small-part kit; supervise pencil use.
