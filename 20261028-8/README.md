# Gable & Grove — Pavilion Kit-Card Studio

A browser-local React + Vite parametric generator for a **five-part rigid pitched-roof miniature pavilion**, held in a real connected breakaway card. Four floor tenons locate two portal gables; four tongues normal to the pitched slopes seat two independent roof panes. Customize the pavilion dimensions and roof rise, not just decorative styling. This is a display assembly, **not load-bearing, weatherproof or animal housing**. No physical print, assembly-force, fatigue or load testing has been performed.

## Reference-first evidence and attribution

First searched actual STL files under `/Volumes/ExternalHD/3d_printing_apps/` and read relevant project instructions. Clicker/slider sockets and interlocked links are not suitable sheet/card references. `kit_card_generator`, `kit_card_generator_animals` and `kit_card_generator_robot` contain no local STL reference. Read the kit project README to distinguish its folding-roof construction from this original rigid, normal-insertion design.

Downloaded the public **White Cat Kit Card**, Mike Kasberg, Printables 865769, [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)). Read its README, LICENSE and `kit_frame.scad`; full licence is in `REFERENCE-LICENSE.txt`. Carrier construction is adapted with attribution; the pavilion parts are newly designed. No raw source STL is bundled or published.

Actually parsed binary STL: SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**, 30,616 triangles, 1,530,884 bytes, **179.819997 × 178.019994 × 3.190000 mm**. Units are assumed mm, corroborated by source OpenSCAD thickness, not STL metadata. Edge-adjacency welding yields two components; the source includes coplanar/nonmanifold artifacts. It is an inspected **design reference**, not claimed repaired or printable output.

`reference-analysis.py` reproducibly parses vertices, edge incidence, components, Z histograms, actual Z=0.1/0.5/1.59 mm cross-sections and a Y=100 rail section. Results are in `reference-analysis.json` and `reference-sections.svg`. These sections and numeric measurements—not a filename or listing picture—ground the carrier:

- Measured **1.6 mm sheet** → default sheet 1.6 mm; original supported range 1.6–2.4 mm.
- Measured **1.6 mm perimeter rail** → reinforced 2.4 mm rail and four crossrunners.
- Measured bridge Z levels **0.21/0.22 mm** → twenty redesigned accessible 0.4–0.6 mm high, 0.8–1.4 mm wide tabs. Gable side tabs avoid floor tongues and roof interfaces.
- Pavilion floor, portal gables, pitched roof panes and their interfaces are **original reconstruction**, not copied source geometry. Roof slots follow the actual inclined tongues. **0.15–0.45 mm** total fit allowance is proposed, material/printer-dependent calibration—not a source measurement or universal fit.

## Studio workflow

Read-only primary visual reference: `keycap_generator2` README, `src/styles.css`, `App.tsx`, `Viewer.tsx`, `worker.ts`, `geometry/stl.ts`, image-tracing and engine/import integration code, and `export.ts`. Applied its concrete compact maker sections, paired mm inputs, source/cutout checkerboard, explicit imported-source transforms, tactile selected states, live worker feedback and part-oriented exports. No reference deploy scripts run; no Git history/dependency tree copied. Local shared studio/parser/export infrastructure was adapted from earlier Daily Object Lab apps; all pavilion and assembly checks are new.

Light lavender-grey desk, white panels, coral controls, locally bundled Fredoka/Rubik fonts; persistent dark theme. Desktop: **374 px left control panel**, right live Three.js viewer and exports. Phones: preview and exports first, stacked collapsible controls, touch orbit/pinch, no horizontal rail. Visible keyboard focus and reduced-motion support.

Three real model-thumbnail presets: Little Grove, Garden Pavilion, High Canopy. Three floor/portal silhouettes, bounded variations, shallow floor/roof dimples/grooves, text and six searchable bundled vector marks. Undo/redo, six local named designs, portable JSON with actual bounded image/mesh payloads, not imaginary paths. Missing image payloads explicitly request reattachment. Source and final previews are shown; replace/remove/reset and returning to built-ins are supported.

Views: connected card, assembled pavilion, exploded, de-tabbed print plate and each isolated part. All use the same solid geometry; exploded separation is explanatory positioning. Roofs are rigid; no preview-only hinge or fake motion is included. See-through floor explains placement. Preview colours are not stored in STL.

## Parameters and proposed joints

All lengths in **millimeters**; UI displays exported X × Y × Z.

| Parameter | Supported range |
|---|---|
| Card width / height | 120–160 / 340–400 |
| Pavilion length / width | 44–64 / 40–56 |
| Eave height above floor / roof rise | 24–32 / 14–22 |
| Sheet | 1.6–2.4 |
| Total mortise allowance | 0.15–0.45 |
| Carrier rail | fixed 2.4 |
| Breakaway width / height | 0.8–1.4 / 0.4–0.6 |
| Row offset | 0–1 |
| Floor dimples / roof groove depth | 0–0.4 |
| Artwork footprint / X / Y | 4–7 / ±1.5 / ±2 |
| Artwork rotation | ±180° |
| Image relief depth | 0.4–3 raised, 0.4–0.6 engraved |
| Imported STL height | 0.6–3 |

Floor tenons: **8 mm** wide, sheet-thick; each gable has two, shoulders stop against floor, tips reach table. Four floor holes are `(sheet + allowance) × (8 + allowance)`.

Roof angle is `atan2(rise, width/2)`; slope length is `hypot(width/2, rise)`. Each gable has two roof tongues **6 mm** along slope, extending **sheet + 1.6 mm** along the roof normal. Roof slots are `(sheet + allowance) × (6 + allowance)` centered at 55% slope length. A 3 mm flat-coordinate ridge opening gives a >1.9 mm assembled transverse ridge gap over the supported range. Roof seats stop at the matching gable slopes; no captive latch or snap is claimed. Portal lower rails are 6 mm high; 8 mm side legs and roof sheet keep-out zones preserve interfaces. Roof groove floors remain ≥1.2 mm; engraved floor remains ≥0.8 mm.

Part bounds/card-access checks reject impossible layouts. Calibrate at 100% scale with a floor and one gable before the full card; change total allowance in 0.05 mm increments and compensate elephant foot. Dry friction depends on material/printer, not just nominal geometry.

## Image conversion — PNG / JPEG / simple SVG

File picker on desktop/phone plus drag/drop. Synthetic samples included. PNG/JPEG headers checked **before** decoding: max **2 MB, 12 MP, 6,000 px per side**, portable normalization ≤500 px. Simple SVG is parsed/sanitized, disallows active/external content, and rasterizes locally to 256 px; unsupported vector features fail clearly.

Image is fitted or cropped with X/Y offset, light/transparent background removal or dark inversion, then sampled to an exact **20 × 20 luminance grid**. Threshold foreground is `luminance < threshold` (1–254); grayscale height is `depth × (1 − luminance/255)`. Adjacent grid vertices are triangulated, closed with sidewalls and a bottom, then genuinely Boolean-unioned into or subtracted from the protected floor center. Scale, rotation, placement and depth affect actual exported triangles. Empty images block export.

This is **2D-to-relief/silhouette conversion, not automatic full 3D reconstruction**. It is bounded piecewise-linear sampled relief, not exact outline tracing. Bright/transparent interior holes stay unraised/unengraved over a continuous solid backing; actual final-geometry probe tests check this with a ring fixture. Checkerboard shows the actual converted grid. Text (8 characters) and six original SVG marks use this same solid path. Small raster details can blur below nozzle resolution.

## STL integration — ASCII and binary

Actual format/content validation: **2 MB, ≤1,500 triangles**, each axis **0.2–250 mm**, finite bounded vertices, nondegenerate triangles, opposite-directed two-face edge incidence, one connected outward-wound component, positive volume, no self-intersections. Current deliberately bounded integration supports **convex, broad flat-bottom, support-free solids only**. The flat contact polygon must cover ≥25% footprint and contain all XY projections. Unsupported concave, hollow, branched, disconnected, overhanging or open/nonmanifold meshes are rejected with guidance. **No convex hull replaces the imported mesh; no arbitrary repair is claimed.** The 2D contact hull is only a validation tool, never export geometry.

Select Z-up/Y-up/upside-down before importing; source preview shows oriented dimensions, encoding and triangles. **Explicit millimeter confirmation** is required because STL has no units. XY scales proportionally to chosen footprint, Z independently to chosen height; rotation and X/Y placement apply to the original closed mesh. It is Boolean-unioned into the marked floor center with a 0.15 mm seating overlap. A radius-6.5 mm protected zone prevents interference with joints; unsupported transforms disable export. Reset/center, replace, remove and restore all work. Up-axis change clears the source and requests reattachment.

## Export, privacy and responsiveness

Binary current-card STL, six per-part/card STL buttons, and **Everything ZIP** containing six STLs plus numbered `ASSEMBLY.txt`. Loose parts export bed-flat Z=0, not as intersecting assembled shells. Everything is true Boolean solids; moving/assembled interfaces are not fused. Current state key plus generation IDs gate preview/export; invalid imports/settings and worker failure disable export even if last-good preview remains visible and labelled. Heavy parse/CSG/mesh validation runs in a debounced Web Worker; stale results are ignored. Bounded complexity avoids unbounded pixel/triangle work.

No API key, upload, remote generation, CDN, paid service or personal files in the repository. Files stay in the browser. Images/meshes in local saved designs/JSON are bounded portable payloads; missing assets are not pretended restored. Bundled fixtures are original synthetic CC0, not user inputs or the reference STL. Fonts, Three.js, WASM and ZIP dependencies are bundled locally.

## Print and assemble

1. Print **either** connected card **or** the five loose parts, flat Z=0, PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls; no supports intended. Full card needs a bed fitting its actual **340–400 mm height**. Individual STLs fit smaller printers. Use mm/100%; STL has no colours.
2. Snip twenty thin tabs at accessible necks **2 mm outside** nonfunctional edges; gable tabs are on the outer sides, away from tongues/shoulders. Trim nubs; discard carrier. Adult cutting, small parts, not a toy.
3. Seat both portal gables **downward** through four floor holes, shoulders on floor, tongue tips at table level. Calibrate total fit allowance first.
4. Match the two roof slots to both inclined tongues. Seat east pane **normal to its slope**, inward/down; do not push vertically. Seat west pane similarly. Tongues project 1.6 mm beyond the panes; the ridge gap leaves an unobstructed insertion/removal path.
5. Roofs are noncaptive friction-seated, not snaps. Lift outward/up along each slope normal to remove; lift gables vertically after removing roofs. No hardware, magnets, thread or glue required. Do not load the model or use it as animal housing. No physical print/force/fatigue test performed.

## Reproduce

```sh
npm install
npm test
npm run predeploy
node serve-production.cjs
# separate terminal, actual production URL prefix /daily-app2/20261028-8/:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node resilience-test.cjs
node studio-layout-test.cjs
```

Local production server: `http://127.0.0.1:5438/daily-app2/20261028-8/`. App scripts: `predeploy` exactly `npm run build`, `deploy` exactly `gh-pages -d dist`. Publication uses **root monorepo** staging/deploy, not individual deploy.

Dependencies: React/ReactDOM, Vite/react plugin, Three.js, Manifold WASM (Apache-2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for tests. No reference dependencies/history copied wholesale.

## Validation boundaries

See `VALIDATION.md` and reproducible reports. Independent binary-STL tests cover exact bytes/count, finite vertices, nondegenerate faces, normalized normals, matching outward winding, **positive volume per component**, welded edge incidence two/opposite at 1e-5 mm, expected mm bounds and one component for card and each part. Presets, parameter extrema, cross-extreme roof/sheet/fit cases and image/STL-derived outputs run these same checks.

CSG tests check assembled intersections, gable insertion, both roof normal-insertion paths, shoulder stops, part/card containment, separate flat parts and twenty cuts yielding **five parts + carrier**. These are computational geometric/assembly-path checks, **not physical printing, friction retention force, strength, fatigue or real assembly validation**.
