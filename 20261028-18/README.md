# Saddle & Sway

An original four-part miniature rocking-horse kit-card generator. Snip sixteen real low bridges, stand two matched circular runners, lower the saddle onto four tongues and insert the horse spine. Rock gently on a level desk. Adult desk miniature, not a ride-on toy.

## Run / build

Node 22.12+; `npm ci`, `npm run dev`, `npm run predeploy`. Static base `/daily-app2/20261028-18/`. Per-app deploy scripts exist, but publication uses the ROOT monorepo's combined deploy flow.

## Reference-first evidence

Local `/Volumes/ExternalHD/3d_printing_apps/` STL search preceded design selection. Clicker templates contain switch sockets, slider meshes contain track mechanisms and fabric meshes contain articulated links; they are not suitable sheet/carrier references. Used a publicly available kit-card mesh instead:

- **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card).
- CC BY 4.0, repository LICENSE freshly inspected: https://creativecommons.org/licenses/by/4.0/ . Original model, author and license attribution retained; this generator redesigns the structure and does not imply endorsement.
- Downloaded actual binary mesh: `white-cat-kit-card_kit.stl`, 1,530,884 bytes / 30,616 triangles. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Parsed bounds **179.820 × 178.020 × 3.190 mm**, two edge-adjacent components. Millimeter assumption corroborated by source OpenSCAD `thickness=1.6`; STL contains no unit metadata.
- Measured 1.6 mm sheets and perimeter rails, 0.21–0.22 mm low bridge levels. Three actual triangle/plane sections at Z=0.1,0.5,1.59 mm recorded in `reference-sections.svg`/PNG. Vertex histogram and rail cross-section in `reference-analysis.json`.
- The source has nonmanifold/coplanar artifacts. It is inspected as a construction reference, NOT repaired, imported into this generator, redistributed or claimed print-ready.
- Adaptation: default sheet 1.6 mm; reinforced carrier rail 2.4 mm; redesigned accessible bridges 0.4–0.6 mm high, 0.8–1.4 mm wide. These are stated redesigns, not source measurements. Four parts, sixteen cuts. Runner curvature, horse outlines and shoulder joints are original parametric reconstruction, not a reskin of the source spacecraft or prior sorter.
- Tongues 6 mm wide (runners) / 8 mm (horse), depth equals panel thickness. Mortise growth **0.15–0.45 mm TOTAL** in each mating dimension is a proposed printer/material-dependent starting allowance, not a measured source interface or guaranteed press fit.

Visual/interaction reference inspected read-only: `keycap_generator2` README, styles, App, Viewer, worker, STL parser and export modules. Reused maker-studio patterns: sticky 374 px control rail, labelled collapsible sections, paired ranges/numeric millimeter inputs, key-like raised buttons, pink selected states, pale lavender desk, large right-side viewer, responsive preview-first phones and saved dark mode. Proven local daily-app studio/import infrastructure is reused; the assembly, geometry, checks and documentation are new. No reference Git history/dependencies copied wholesale.

## Parameters and construction

Every physical dimension is mm. Card 160–210 × 210–240; runner length84–100; saddle depth40–50; curvature radius75–95; seat height26–32; sheet1.6–2.4; runner-window border4–6; horse-head width22–30; carrier bias4–7; dimples0–0.4. Fields enforce bounds and reject nonfinite values. Three genuine presets with generated 3D thumbnails; three pierced window/saddle-corner profiles; bounded randomization, undo/redo and reset.

Manifold WASM solid booleans create the connected frame/tabs/card, slots, windows, eye and fused personalization. No convex-hull substitution, interpenetrating-shell export or moving-joint fusion. All four printable parts are separate after tab removal. The ±10° intended rocking envelope keeps contact within both matching circular arcs; equal-density mesh mass calculations check COM below the curvature center and within transverse supports. This is static computational geometry, not a force, friction, strength or dynamic-stability simulation. Fixed joints may require glue after calibration.

## Image, SVG, text and icons

Files are processed **locally**, never uploaded. PNG/JPEG up to2 MB,12 MP,6000 px/side; header checked before decoding, normalized to ≤500 px. Simple local SVG paths/shapes ≤2000 elements, no scripts/external resources/effects; rasterized locally to256 px. Text (up to8 characters) and six searchable bundled original icon paths use the same conversion pipeline.

Exact method: fit/crop/pan source into a20×20 grid; background light/dark and transparency composited; luminance threshold1–254 selects raised cells, or inverse grayscale sets height. Triangulated continuous height-map solid with0.4 mm backing is boolean-unioned onto a protected saddle well. It is **2D-to-relief, not full 3D reconstruction**. Bright interior holes remain unraised/unengraved, not through-holes through the saddle. Actual cutout shown on checkerboard. Raised depth0.4–3; engraving0.4–0.6 preserves≥0.8 mm saddle floor. Placement, rotation and size change exported vertices, not textures.

## STL imported grip

ASCII and binary STL, max2 MB/1500 triangles,0.2–250 mm per source axis. Parser checks strict file length/content, finite vertices, nondegenerate triangles, opposite edge incidence, positive volume, flat bed contact and convexity. **Concave, hollow, open, nonmanifold, disconnected or overhanging meshes are explicitly unsupported/rejected**, not silently repaired or hulled. A deliberately limited supported input is preferable to claiming arbitrary meshes work.

Choose Z-up, Y-up or inverted Z before attaching; changing orientation requests reattachment. Source dimensions/triangles/format and 3D source shown. Explicitly confirm millimeter coordinates (STL is unitless). Scale XY proportionally to4–7 mm footprint; scale Z independently to0.6–3 mm grip height; rotate±180°; offsets X±1.5,Y±2. Broad flat source base overlaps saddle well by0.15 mm, then a genuine solid union integrates its shape. A6.5 mm-radius keep-out zone bounds all imported vertices, protecting joints and horse spine. Export is disabled for unsafe placement, malformed files and invalid/pending/stale geometry. Replace, remove, center/reset transforms and return to defaults are available. Synthetic image, JPEG, SVG-ring, ASCII wedge and binary gem fixtures are included; no personal files or third-party raw mesh bundled.

## Preview, files and privacy

Worker owns WASM and heavy CSG;100 ms debounce, request IDs, async import guards and exact current-state export gate. Preview and STL use the same returned mesh; signature displayed in DOM and compared in tests. Last valid preview may remain after an invalid edit, but cannot export. Worker failure reports a reload recovery action.

Assembled, exploded, connected card, de-tabbed plate and each isolated-part view; optional translucent solids, fit/orbit/zoom/touch. Preview color does NOT exist in STL. Binary per-part STLs, connected card and Everything ZIP with numbered assembly instructions. All exports flat atZ=0. No fake3MF.

JSON and up to6 local named designs retain bounded image/mesh payloads; missing/invalid data explicitly rejected with reattachment guidance. Undo/redo retains imported payloads. No browser input is saved into this repository. Network needed only to load this static app's locally bundled assets; generation/export need no API/service/CDN.

## Printing and validation

PLA/PETG,0.4 mm nozzle,0.2 mm layers,3 walls; supports not intended. Trial-print one runner and saddle before the card; trim elephant foot and tab nubs. Lower saddle straight onto runner tongues, then horse spine into central slot. Fixed-joint glue optional after fit calibration; rocking can otherwise loosen clearance joints. Keep under±10°; no hard stops provided. Small parts/cutters are unsuitable for children.

`npm test` independently parses binary exports: exact length, finite vertices, normal/winding agreement, nonzero faces, expected bounds,1e-5 mm welded edge incidence exactly2 with opposite winding, connected-component positive volume. Every default/preset/extreme and image/STL-derived card/part is checked. Kernel intersections test assembly, insertion paths, no flat overlaps, part inclusion in card,16-cut release into four parts plus carrier; actual tetrahedral COM integral and ground-clearance samples check static rocking envelope.

Browser scripts test production base-path worker/WASM loading, actual PNG/JPEG/ASCII/binary file-picker imports and exported downloads, geometry changes, snapshot regeneration, threshold/depth/scale/rotation/placement, malformed/oversized/open/unsupported rejection, stale-result blocking, replace/remove/reset, JSON/named assets, undo/redo, per-part ZIP, icon/text/SVG holes, desktop/mobile layout, touch orbit/pinch, saved theme and keyboard/reduced-motion. Generated reports document observed results in VALIDATION.md. **No physical model has been printed or tested.**

Dependencies: React/ReactDOM, Vite, Three.js/OrbitControls, Manifold3D(WASM), fflate; bundled Fredoka/Rubik via Fontsource(OFL). Dev verification uses Playwright. Synthetic fixtures are locally authored; original six simple icon paths and original reconstruction.
