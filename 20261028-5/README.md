# Pitch & Perch — indexed-rake kit-card studio

A browser-only React + Vite parametric generator for a **five-part, re-indexable miniature display easel**. Snip twenty tabs, seat a marked display and two cross-braces in one cheek, then slide the other cheek over all three free ends. Choose matching **75°, 65° or 55° oblique mortises**. To change rake, withdraw one cheek from all three tongues and re-seat the display; this is not a live hinge, snap lock or load-bearing/phone stand. Hardware-free, manually removable clearance-fit joints.

## Reference-first provenance

Searched actual STL files under `/Volumes/ExternalHD/3d_printing_apps/` before selecting geometry. The local kit-card projects have no STL references; clicker switch cutters, sliders and fabric links do not supply suitable planar carrier/assembly structure. Reference trees and the old `daily_app` gallery remain read-only.

Downloaded and parsed **White Cat Kit Card**, Mike Kasberg (`mkasberg`), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card). Reuse terms: repository **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)** LICENSE was read, alongside README and `kit_frame.scad`.

- Binary STL: 1,530,884 bytes / 30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Assumed mm (STL has no units), corroborated by OpenSCAD sheet dimensions. Bounds: approximately **179.82 × 178.02 × 3.19 mm**, two welded edge-adjacency components.
- Actual mesh Z histogram shows dominant Z=0/1.6 planes and low Z=.21/.22 bridge levels. A Y=100 mesh section measures the perimeter at X=0/1.6 mm. Z=.1/.5/1.59 sections were generated and visually inspected; see `reference-sections.svg/png`.
- Source has coplanar/nonmanifold artifacts: **not repaired, bundled, exported or claimed printable**. Only the measured sheet/carrier strategy is reconstructed.
- Preserved measured sheet default **1.6 mm**. Redesigned carrier rail **2.4 mm**, accessible breakaway tabs **.4–.6 mm** high and **.8–1.4 mm** wide instead of copying fragile low source bridges. Actual Boolean-connected card, not a print layout near a border.
- **New, not source-measured:** paired oblique mortises, five easel parts, tongue interfaces, three rake angles, footprint/display dimensions, .15–.45 mm receiving allowance and twenty-tab row carrier. Unlike prior fixed cross-lap stands or tusk-key frames, this assembly uses selectable closed inclined mortises, requires cheek withdrawal for re-indexing and has no locking keys. No cat/source parts redistributed. `reference-analysis.json` maps measurements to parameters; `reference-analysis.py` reproduces parsing with a local path to the downloaded STL.

Visual/interaction reference: read-only `keycap_generator2` README, styles, App, Viewer, worker, STL/import/image-trace and export modules. Concrete studio patterns: 374 px left rail/sticky compact header, lavender-grey desk `#e7e9f1`, white panels/dark ink, coral raised keycap-like controls and pressed states; locally bundled Fredoka/Rubik; collapsible sections, slider/numeric pairs; right Three.js viewer; saved dark theme; source previews, explicit mm confirmation and transforms; worker-built final geometry; prominent STL/ZIP exports. Phone layout puts viewer, status and export before stacked controls. No inappropriate switch socket/cavity added. Fresh Vite scaffold and npm installation; tested studio/import/parser infrastructure adapted from prior daily apps, with original easel geometry and new assembly-path checks. No source Git history/dependency tree copied.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Base: `/daily-app2/20261028-5/`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public monorepo deployment uses ROOT `npm run predeploy` and `npm run deploy`, not this per-app deploy.

Dependencies: React, Vite, Three.js + OrbitControls, Manifold WASM (Boolean union/difference/intersection), fflate, Fontsource Fredoka/Rubik (SIL OFL), gh-pages. Playwright is used for validation. WASM/fonts/dependencies bundled locally; no CDN, API keys, paid service or server computation.

## Parameters

All dimensions in **millimeters** unless explicitly degrees/index/pixels. Final selected export X/Y/Z is displayed.

| Parameter | Range |
| --- | --- |
| Card width / height | 120–160 / 250–280 |
| Display width / height | 48–68 / 34–44 |
| Footprint depth | 64–76 |
| Sheet thickness | 1.6–2.4 |
| Total receiving fit allowance | .15–.45 |
| Row spacing | 0–1 |
| Tab width / thickness | .8–1.4 / .4–.6 |
| Real display dimple depth | 0–.4 |

Tongue lengths: sheet + 4 mm; tongue in-plane width 8 mm. Receiving mortises are `(8 + allowance) × (sheet + allowance)` at three rake angles, centered at 16 mm height / Y=-14,0,14. Inter-mortise web has conservative lower bound `14 − hypot(8+allowance, sheet+allowance)` (at least 5 mm over supported ranges). Brace shoulder span matches the display width; cheek placement gives half the allowance on either side. Minimum import isolation from a display shoulder is 17.5 mm. Invalid dimensions or protected-zone violations block export.

Three actual presets, soft/chamfered/tapered silhouettes, bounded variations, reset, undo/redo; six local named designs; portable JSON save/open. Text (up to eight characters) and six searchable original vector icons convert to actual solid relief/engraving, not textures. Preview swatches are not STL colour metadata.

## Image → printable geometry

PNG/JPEG: actual signatures; ≤2 MB, ≤12 MP and ≤6,000 px per side checked before decode. Normalize to ≤500 px; contain/cover plus ±25% crop shifts; downsample to a **20×20 luminance grid**. Thresholded silhouette heights or grayscale heights form a closed triangulated height field with .4 mm backing. Union/subtraction integrates it with a .2 mm-deep protected central display well. Bright holes stay unraised/unengraved above the substrate; actual final-solid ring probes test both styles. Checkerboard shows the actual sampled cutout next to the source. Light/transparent or dark/inverted background; threshold 1–254; depth .4–3 mm raised / .4–.6 mm engraved, preserving ≥.8 mm floor.

Simple SVG: validate element/attribute allowlist, reject scripts, external resources/references, text/effects and >2,000 elements; rasterize locally to 256 px and use the same sampled conversion. This is **2D-to-relief**, not exact outline tracing or automatic full 3D reconstruction from a photograph. Physical scale 4–7 mm, rotation ±180°, X ±1.5 / Y ±2 mm affect final geometry.

## STL → integrated display mark

Actual binary and ASCII parsing: ≤2 MB / 1,500 triangles, finite coordinates, every axis .2–250 mm; nondegenerate triangles, welded closed edge incidence/opposed winding, one connected component, positive volume, triangle intersection checks. Supported input is deliberately bounded: **one convex, broad flat-bottom, support-free solid**. Open/nonmanifold, hollow/concave, disconnected, slender branches and unsupported overhang meshes are explicitly rejected; no convex-hull replacement or silent repair. Bottom footprint hull is only a validation test, never a replacement mesh.

Select Z/Y/−Z up before attachment; axis changes request reattachment. Source format/dimensions and separate orbitable source preview. Explicitly confirm **millimeters** because STL has no units. XY scales proportionally to 4–7 mm footprint; Z independently fits .6–3 mm. Rotate ±180°, place X ±1.5 / Y ±2 mm, reset transforms, replace/remove and return to defaults. Minimum XY width 1.2 mm and complete containment in a 13 mm medallion are enforced. The original transformed mesh is Boolean-unioned into the display, never just shown or unchanged-re-exported; it cannot obstruct cheek/brace interfaces.

All user files process locally in the browser and are never uploaded or saved to the repository. Bundled PNG/JPEG/SVG/ASCII/binary fixtures are synthetic. Portable JSON and named designs carry bounded normalized image/mesh payloads, not filesystem paths; missing payloads explicitly request reattachment and restored meshes are revalidated. JSON ≤2 MB.

## Preview and export

Assembled (three indexed poses), exploded, connected card, de-tabbed layout and every isolated part; ghost, orbit, zoom, fit and real touch orbit/pinch. Indexed pose is preview-only; all three slot pairs are in the printable model. Worker CSG, 100 ms debounce, bounded resolution, request IDs/current-state keys, loading/success/error status. Preview and export use the same exact valid result. Last-good preview is labelled and cannot export after invalid edits or pending import conversion. Production worker failure disables export with reload guidance.

Prominent binary STL, per-part STL buttons, Everything ZIP with connected card, five separate part STLs and numbered `ASSEMBLY.txt`. All export bed-flat at Z=0 in real printable orientation. Tabs genuinely union parts to carrier; twenty cuts computationally yield carrier + five parts. No 3MF advertised; STL has neither colours nor units.

## Print and assembly

PLA/PETG, .4 mm nozzle, .2 mm layers, ≥3 walls, no supports intended; inspect in slicer. At .4 mm tab height use ≥2 layers. Snip twenty accessible tabs 2 mm outside bottom nonfunctional edges; trim nubs and discard carrier. Hold marked display at selected angle and insert its tongue plus the two brace tongues into one cheek. Bring the other cheek inward over all three free ends at once. Match the same rake mortise on both sides. To re-index, **slide one cheek outward off all three tongues**, free the display, choose matching slot pair and reassemble. Do not pull a brace shoulder through a seated cheek or twist a tongue in its slot. Parts are removable gravity/friction seats, not captive or force clamps. No hardware required.

Print display + cheek first as full-size fit calibration, tune allowance in .05 mm steps and compensate elephant foot. Fits depend on printer/material; no universal tolerance claim. This is a miniature assembly study, not a load-rated support.

## Validation

`npm test`: 12 default/preset/shape/extreme cases plus 30 imported-STL/threshold/height-map/engraved cases. Independent binary parsing validates exact length, finite coordinates, nonzero triangle areas, normal/winding agreement, 1e-5 mm welded edges with two opposite incident faces, per-component positive volumes and mm bounds for the connected card and all five parts. Manifold intersections test all ten assembled pairs at all three rakes, sampled cheek withdrawal/seating and brace insertion with the second cheek removed, restraint probes, no flat-part overlaps, exact card envelope/inclusion, and six components after simulated cuts. These establish geometric clearance and sequential assembly paths, not friction, assembly force or stability.

Production-browser scripts exercise actual PNG/JPEG/ASCII/binary file pickers and real downloads; pixels/threshold/depth/fit/scale/rotation/placement change STL vs no-import; UI fingerprint equals downloaded STL and JSON-reconstructed geometry. All presets, variations, silhouettes, text/icons/SVG/holes/background, raised/engraved, resets/replacement, invalid/truncated/excessive/open/nonmanifold/concave files, empty silhouettes and protected-zone failures; undo/redo, asset-portable JSON and named save round trips; ZIP contents and each part; current-result gating, delayed import races, worker abort/recovery; desktop rail/right viewer, 320/390 px preview-first/no-overflow, touch orbit/pinch, reachable exports, collapsible sections, focus, theme and reduced motion. Reports and screenshots are beside scripts.

Reproduce after `npm run predeploy`: run `node serve-production.cjs`, then `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node portable-errors-test.cjs`, `node resilience-test.cjs`, `node stale-import-test.cjs`, `node studio-layout-test.cjs`. After root predeploy, `node serve-combined.cjs` serves combined output on 5434; `TEST_BASE=http://127.0.0.1:5434 TEST_REPORT=combined-browser-validation.json node browser-test.cjs` and `TEST_BASE=http://127.0.0.1:5434 node gallery-test.cjs` validate combined delivery. `node gallery-validate.cjs` compiles all root inline scripts and checks entry preservation/uniqueness.

**No physical print, assembly-force, friction, fatigue, stability, load or external slicer test performed.** Computational mesh checks are not a physical-product certification.
