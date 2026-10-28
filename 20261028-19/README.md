# Slide & Count

A parametric, fifteen-part miniature counting-frame **kit card**: snip 60 accessible low bridges, seat two cheeks in a personalized base, thread three beads onto each of two rails, then insert four printed transverse keeper keys. Slide beads manually between cheeks. Three real bead silhouettes and three presets; this is a physical assembly, not a browser counting game. Choose your own counting convention; no automatic numerical readout.

## Run / build

Node22.12+; `npm ci`, `npm run dev`, `npm test`, `npm run predeploy`. React + Vite; base `/daily-app2/20261028-19/`. Per-app gh-pages scripts exist; combined publication uses the ROOT monorepo `deploy/` flow.

## Reference-first evidence

Local `/Volumes/ExternalHD/3d_printing_apps/` STL search preceded design selection. Clicker templates contain switch sockets, slider meshes contain track mechanisms and fabric meshes contain articulated links; they are not suitable sheet/carrier references. Used a publicly available kit-card mesh instead:

- **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card).
- CC BY 4.0, repository LICENSE freshly inspected: https://creativecommons.org/licenses/by/4.0/ . Original model, author and license attribution retained; this generator redesigns the structure and does not imply endorsement.
- Downloaded actual binary mesh: `white-cat-kit-card_kit.stl`, 1,530,884 bytes / 30,616 triangles. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Parsed bounds **179.820 × 178.020 × 3.190 mm**, two edge-adjacent components. Millimeter assumption corroborated by source OpenSCAD `thickness=1.6`; STL contains no unit metadata.
- Measured 1.6 mm sheets and perimeter rails, 0.21–0.22 mm low bridge levels. Three actual triangle/plane sections at Z=0.1,0.5,1.59 mm recorded in `reference-sections.svg`/PNG. Vertex histogram and rail cross-section in `reference-analysis.json`.
- The source has nonmanifold/coplanar artifacts. It is inspected as a construction reference, NOT repaired, imported into this generator, redistributed or claimed print-ready.
- Adaptation: default sheet 1.6 mm; reinforced carrier rail 2.4 mm; redesigned accessible bridges 0.4–0.6 mm high, 0.8–1.4 mm wide. These are stated redesigns, not source measurements. Fifteen parts, sixty cuts. Counting-frame profiles, rail/bead interfaces and transverse keeper keys are original parametric reconstruction, not the source spacecraft or prior rocking-horse assembly.
Visual/interaction reference inspected read-only: `keycap_generator2` README, styles, App, Viewer, worker, STL parser and export modules. Reused maker-studio patterns: sticky 374 px control rail, labelled collapsible sections, paired ranges/numeric millimeter inputs, key-like raised buttons, pink selected states, pale lavender desk, large right-side viewer, responsive preview-first phones and saved dark mode. Proven local daily-app studio/import infrastructure is reused; the assembly, geometry, checks and documentation are new. No reference Git history/dependencies copied wholesale.

## Parameters, joints and assembly

All physical dimensions are **millimeters**. Card180–220 ×220–250; rail support span64–84; foot depth34–42; rail height6–7; bead diameter12–16; cheek height44–54; sheet1.6–2.4; carrier bias4–7; tab width0.8–1.4; tab height0.4–0.6; dimples0–0.4. Round, hexagonal and oval beads have the same deliberate rectangular running bore; different silhouettes and preset dimensions change real exported geometry.

Four 6 mm-wide cheek tongues seat in base mortises, with shoulders resting on top. Two rails pass through cheek slots and three beads each. Four flat transverse keys pass through closed rail end windows from the front; heads stop key insertion and lateral projections stop rail withdrawal at cheeks. Beads cannot pass the cheeks. These are rigid, clearance-fit parts, not snap joints. No hardware required; optional adhesive is explicitly limited to calibrated fixed feet/keeper joints if loose. Never glue moving bead interfaces. Unglued keys allow reverse disassembly.

Fixed-slot allowance0.15–0.45 mm **TOTAL** in each dimension. Bead running allowance0.4–0.8 mm **TOTAL** in each aperture dimension. These are proposed FDM starting settings, not measured source interfaces or universal press fits. Minimum bead rim2.1 mm and rail-window skin1.575 mm over supported extrema. At least0.8 mm remains under deepest allowed engraving. Trial-print a cheek/base and bead/rail pair before a whole card.

Manifold WASM booleans produce one genuinely connected card/frame/bridge solid. The fifteen de-tabbed parts each remain separate closed solids; union is used for marks, and actual cuts create holes/slots. No convex-hull substitution, overlapping-shell union, or fused moving bodies. Card envelope includes all parts/tabs. Bridges attach away from foot tongues, rail windows and bead bores; 60 modeled cuts release fifteen parts plus carrier. Bead travel slider is labelled preview-only and leaves exported flat orientations unchanged.

## Personalization and image conversion

PNG/JPEG≤2 MB,≤12 MP,≤6000 px per side, header-checked before decode and normalized to≤500 px. Simple local SVG shapes≤2000 elements; scripts, external links/effects rejected; locally rasterized at256 px. Eight-character text and six searchable original SVG icons use the same relief pipeline.

**Exact method:** contain/cover and crop/pan source into a20×20 grid; background light/dark and alpha are composited. Luminance threshold1–254 selects raised heights, or inverse grayscale sets continuous relief height. A triangulated height-map with0.4 mm backing is boolean-unioned into a protected front-base recess. This is **2D-to-relief**, not reconstruction of a complete3D object. Bright enclosed holes remain unraised/unengraved; they are not through-holes through the base. Actual cutout appears on checkerboard beside source preview. Raised depth0.4–3; engraving0.4–0.6 preserves≥0.8 mm floor. Scale4–7 mm, rotation±180°, X±1.5,Y±2 placement change exported vertices. Invalid/empty images block export.

## STL-to-model import

Both ASCII and binary STL≤2 MB/1500 triangles; source axes0.2–250 mm. Explicit confirmation of **millimeter coordinates** is mandatory: STL has no unit metadata. Source dimensions, triangle count and3D source preview shown. Choose Z-up,Y-up or invertedZ before attaching; changing orientation requests reattachment. Proportional XY fit4–7 mm; independent height0.6–3 mm; rotation and offsets as above; reset/replace/remove supported.

Strict parser checks content/length, finite coordinates, nondegenerate faces, welded opposite edge incidence, connectedness, positive volume, triangle intersections, convexity and broad flat bottom. Concave, hollow, open/nonmanifold, disconnected, overhanging or unsupported meshes are **rejected with guidance**, never silently repaired or replaced by hulls. Convex hull of bed-contact points is used only to VALIDATE support footprint, not as replacement geometry. The actual accepted source mesh is scaled/transformed and boolean-unioned0.15 mm into the front-base recess. All vertices stay inside a6.5 mm-radius safe zone protecting feet/rails/beads. Thin XY grips are rejected below1.2 mm. Export gates on actual valid current geometry.

Samples: locally authored mark.png, waves.jpg, ring.svg, wedge-ascii.stl, gem-binary.stl and malformed/unsupported fixtures. No arbitrary private reference mesh or personal upload is bundled. PNG/JPEG and STL file-picker paths work on phones/desktop; drag/drop available.

## Studio, exports and privacy

374 px left controls/right viewer, collapsible sections, paired numeric/range inputs, tactile raised buttons, pale lavender light theme and saved dark theme. Phone preview-first stacking, compact isolated-part selector, accessible exports. Interactive orbit/zoom/fit/touch, assembled/exploded/connected card/de-tabbed plate and all isolated parts; optional translucent frame explains fit. Preview colors are not stored in STL.

Heavy CSG and STL parsing run in bundled WASM Web Worker; bounded resolution,100 ms debounce, monotonic IDs, async import guards, build/error status, current-state export gate. A retained last-good preview cannot export after invalid edits. Worker failure reports reload recovery. Preview/export use the identical returned mesh; byte signature tested against real downloaded STL.

Per-part binary STLs and connected-card STL, plus Everything ZIP containing16 STLs and numbered ASSEMBLY.txt. All outputs bed-flat atZ=0. No fake3MF. Undo/redo; six local named designs; portable versioned JSON includes bounded normalized image/mesh payloads. Missing/invalid imported assets explicitly request reattachment. No personal file saved to repository. Files process locally in browser, never upload; dependencies/fonts bundled, no CDN, API/key or paid service.

## Printing and computational validation

PLA/PETG,0.4 mm nozzle,0.2 mm layers,3 walls, no supports intended. Snip low bridges with cutters; remove nubs and elephant foot. Seat cheeks, thread rails/beads, insert keys. Calibrate friction and fixed joints; optional glue only as described above. Small parts/tools: adult desk miniature, not a children's toy or load-bearing device. Check bed envelope or print separate parts.

`npm test`:14 default/preset/extreme cases and30 image/STL-derived cases. Independent binary-STL parsing checks exact length, finite positions, nonzero faces, normals/winding,1e-5 mm welded edges exactly2 opposite incidences, positive volume per closed component, Euler characteristic and millimeter bounds. Every separate part and connected card checked. Kernel intersections test assembled clearance, rail/foot/key insertion paths, full supported bead travel, positive retention stops, no flat overlaps, part inclusion in card and60-cut release into16 components. Bounds and wall/fit calculations are independent of mesh closure. These are geometry/assembly checks, not force or friction simulation.

Browser scripts exercise real file uploads/downloads on production-base bundle, PNG/JPEG/ASCII/binary fixtures, image content/threshold/depth and STL transforms, exact snapshot regeneration, all presets/shapes/representative variations, text/icons/SVG holes, malformed/excessive/unsupported rejection, stale edit/import guards, worker failure/recovery, portable/named designs and undo/redo, ZIP contents, isolated/assembly/print views, saved theme/focus/reduced motion, phone320/390 px with orbit/pinch and downloads. Reports/screenshots beside app record observed results; VALIDATION.md summarizes them. **No physical print has been tested.**

Dependencies: React/ReactDOM,Vite,Three.js/OrbitControls,Manifold3D(WASM),fflate; Fredoka/Rubik via Fontsource(OFL). Playwright for verification. Reference CC BY4.0 attribution retained above; original reconstruction and synthetic fixtures locally authored.
