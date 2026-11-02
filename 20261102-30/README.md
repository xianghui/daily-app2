# Simplex & Tension

A local React + Vite maker studio generating a **real connected four-part kit card**: three identical, spatially disconnected compression struts and a notched threading/winding shuttle. Tie nine external cord segments to build an ideal three-strut tensegrity prism. This is a physical construction generator, not a browser game or a generic STL viewer. **Physical printing, knot grip, stability and load capacity have not been tested. Not load-bearing.**

## Run and export

Node22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Local Three.js, Manifold WASM, React, fflate and Fontsource Fredoka/Rubik; no CDN, backend, API key or paid service. Per-app `deploy` exists as requested, but public publication uses the parent monorepo `deploy/` flow. Production base `/daily-app2/20261102-30/`.

Prominent binary STL exports: connected card, de-tabbed bed-flat plate, each separate part; Everything ZIP contains card plus all four clean-part STLs, current portable design JSON and numbered assembly instructions. Three bars are identical but separately named A/B/C. STL is geometry-only; preview colours and external string lines are not exported. All coordinates/dimensions are **millimeters**. Preview/export share the exact worker result, hash and current-state key; invalid edits disable all geometry exports, not a silent last-good export.

## Reference-first evidence

Inspected local projects and actual STL candidates first: `keycap_generator2/public/templates/clicker_template2.stl` (switch/stem cavities, unsuitable as sheet kit), `fidget_fabric_generator/public/templates/diamond-link.stl` (interlinked solid, unsuitable carrier). Their hashes, dimensions and components are in `reference-measurements.json`. Read relevant README/instructions. The keycap studio remains read-only; inspected README, styles, App, Viewer, worker, export, imageTrace and STL modules. Adopted concrete patterns: 374px scrollable left rail, paired numeric/sliders, section accordions, tactile keys, pink selection, checkerboard conversion, theme persistence, worker/error/stale gating, large right preview and preview-first phones. Existing studio infrastructure in daily_app2 is reused; **new mechanism, geometry, assembly topology, preview transforms and checks are original to this app**, not a recoloured old rotor.

With no suitable local sheet/carrier STL, downloaded and parsed **White Cat Kit Card** by **Mike Kasberg**, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY4.0** (source LICENSE saved). SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary30,616 facets;179.819997×178.019994×3.190000mm;27 edge-adjacent components; original is not wholly watertight. No source mesh is bundled, repaired, re-exported or convex-hulled. It is an actual design reference for a new parametric CSG reconstruction, not a printable source asset.

Generated fresh mesh cross-sections at Z=.1,.5,1.59mm in `evidence/reference-sections.png`. Measured main sheet planes0/1.600mm, matching4.500×1.700012mm socket loops, low-runner planes.21/.22mm and subdivided carrier architecture. Preserve1.6mm default sheet and bed-connected carrier/part bays; **proposed**1.6–2.4mm sheet and strengthened.4–.6mm runners. The source sockets do not suit cord topology and are intentionally unused. Exact source defects, components and measurements plus adaptation mapping are in `reference-analysis.json`; reproduce with `reference-measure.py /path/to/downloaded.stl` (Python trimesh/numpy/matplotlib/networkx/scipy). Reference files were read-only.

## Parameters and assembly geometry

|Parameter|Supported range, mm|
|---|---|
|Card width × height|190–250 ×130–180|
|Triangle eye radius R|22–30|
|Triangle eye height H|36–60, **H≥1.4R**|
|Strut width / sheet|6–8 /1.6–2.4|
|Eye diameter|1.8 + clearance.3–.6 =2.1–2.4|
|Part spacing|3–5|
|Runner width / thickness|.8–1.2 /.4–.6|
|Engraving footprint / depth|4–7 /.4–.6|
|Art X / Y / rotation|±1.5 /±2 /±180°|

H/R restriction guards near-eye free cord spans; invalid combinations are blocked explicitly. Min/max geometric corners and supported boundary combinations are tested, not just cosmetically clamped. Three presets rebuild actual lengths, card parts and shuttle silhouettes. Built-in square, rounded and clipped corners, text and six searchable icons alter real Boolean engraving. Undo/redo, six local named designs and JSON save/open preserve bounded portable image/mesh payloads; missing image data requests reattachment. No personal input is uploaded or committed.

At lower vertices A_i and +30° upper vertices B_i, struts connect A_i→B_(i+1 mod3); stays connect A_i→B_i. Six triangle-edge cords complete the nine-string network. Eye-to-eye bar L=sqrt(H²+(2R sin75°)²); rim=sqrt(3)R; stay=sqrt(H²+(2R sin15°)²). Force densities -1 for bars,+1 stays,+1/sqrt(3) rims close ideal equilibrium. This is **not** an elastic stiffness/stability proof. Preview is an ideal tie-point layout, not a tension/motion simulation. Assembled/exploded/connected-card/de-tabbed/isolated views use identical underlying printable geometry. Exploded spread is illustrative only. The threading shuttle stays beside the structure, not a fourth compression member.

See `ASSEMBLY.txt` or in-app numbered instructions. Print flat PLA/PETG,.4mm nozzle,.16–.20mm layers, three walls, no supports. Snip16 accessible runners outside the part envelope, file stubs without cutting functional eyes. Tie six rim segments, then three stays with.5–.8mm low-stretch soft cord; scissors, ruler, temporary tape/helper required, no glue or rigid hardware. Add≥35mm cord per segment for knots and adjust for finite eye thickness. Knot routing within4mm of each eye is **not** modeled or collision-certified; free.8mm-diameter spans beyond it are checked. Test one strut and knots first; do not bend bars or overtighten eyes. A minimum2.8mm nominal end wall and≥1mm engraved shuttle backing are preserved. No universal printer/material fit or certified strength claimed.

## Image, SVG and STL workflows

PNG/JPEG through real file picker or drop; source and actual checkerboard cutout previews; light/dark-background removal, threshold1–254, grayscale relief, fit/crop and pan±25%, footprint, rotation and placement. **2D-to-relief/silhouette conversion, not full3D reconstruction from one photo.** Normalize images to≤500px, sample20×20 grayscale grid, triangulate each pixel-grid cell over a closed backing, invert heights and Boolean-subtract from the shuttle. Interpolation bevels threshold boundaries; this is sampled relief, not exact vector tracing. Bright interior holes retain backing, tested by Boolean probes. SVG simple filled shapes rasterize locally to256px, then the same conversion. Engraving only protects sheet thickness and eyes; no fake raised mode.

File limits2MB, PNG/JPEG≤12MP and6000px side; SVG≤2000 simple elements, no scripts/external resources/text/effects. Empty silhouettes, invalid content/dimensions/transforms and excessive input are recoverable errors disabling export. Synthetic samples include PNG, JPEG, hole-bearing SVG, ASCII wedge and binary gem; their original synthetic authorship is documented in samples/README.txt.

ASCII/binary STL is parsed, welded at1e-5mm and checked for nondegenerate faces, two opposite edge incidences, positive outward volume, one connected component, self-intersections and broad flat bed footprint. Supported **convex closed single solids only**,≤1500 triangles,.2–250mm per axis. Unsupported concavity/cavities/branches/open/nonmanifold meshes rejected with guidance, never replaced with a convex hull or silently repaired. Original accepted mesh is used exactly as Boolean engraving, not an unchanged download. Confirm millimeters explicitly because STL has no unit metadata; choose Z/Y/−Z up before attaching, scale proportional XY, independently set Z engraving depth, rotate, centre and place in6.5mm safe radius. Source/final previews, dimensions, scale factors, replace/remove/reset and portable JSON all work locally. Every engraving stays on the shuttle, away from all structural struts/eyes. Source tree and raw third-party mesh not redistributed.

## Verification and limitations

`validate.mjs` independently parses actual binary float32 STL, checks exact byte lengths, finite coordinates, nonzero triangles, unit normals, winding,1e-5mm welded edge incidence, per-component positive volume, intended component count and mm bounds. Checks each part and combined plate/card. Manifold intersections check separate assembled bars, radial pre-tying placement paths, free cord spans excluding4mm knot regions, flat part nonoverlap and support-free slices. Sixteen simulated tab cuts release carrier plus four undamaged parts. Independent transformed eye centres match analytical endpoints. Default/presets, ranges, geometric corner/boundary cases, image holes/reliefs and actual ASCII/binary-derived results all undergo these checks.

Browser test scripts exercise actual production worker/WASM files under real base path, real file-picker imports/downloads, image content/threshold/depth and STL shape/scale/placement against default byte signatures, invalid input/recovery, presets, icon/text/SVG geometry, JSON/named saves/undo, stale gating, aborted worker recovery, ZIP parsing, theme/focus, all views, desktop left panel and320/390px preview-first/touch orbit/pinch/exports. Saved reports and screenshots document performed runs. Physical printed assembly, manual knot routing, nonlinear stability, tension, durability and strength remain **unperformed**. Review validation reports; do not interpret watertightness as a successfully printed working structure.
