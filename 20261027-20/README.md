# Warp & Weft — tabletop loom kit-card studio

A React + Vite, locally generated **four-part weaving loom kit**, not a fidget reskin: an open-window frame with matched yarn notches, two removable closed-slot feet, and a forked yarn shuttle. A true perimeter/runner carrier holds every part with **16 solid breakaway tabs**. Change loom dimensions and warp pitch to make different swatches. Yarn (soft, ≤1 mm diameter) is required; no purchased mechanical hardware.

## Reference-first evidence

Local `/Volumes/ExternalHD/3d_printing_apps/` collections were searched first, including keycap, slider, fabric and kit-generator projects; the local kit projects contained no suitable STL reference. The selected public STL is **Theft of Fire — White Cat Kit Card**, by **Mike Kasberg (mkasberg)**: [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Repository README, LICENSE and `kit_frame.scad` were read. [Actual downloaded STL](https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl) was parsed and sectioned before final geometry implementation.

- Binary STL: 1,530,884 bytes, 30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Measured envelope **179.819997 × 178.019994 × 3.190000 mm**. STL has no unit metadata; mm is corroborated by source OpenSCAD values.
- Welded edge adjacency finds **two components**. Source has nonmanifold/coplanar artifacts and is **not used as a printable imported solid**, repaired or redistributed.
- Sheet planes Z=0/1.6 mm, 1.6 mm perimeter rail at the Y=100 mm section; thin sacrificial bridge layers at Z=0.21/0.22 mm. Sections Z=0.1/0.5/1.59 mm show the actual carrier, separate panels and thinner connections. `reference-sections.png`/`.svg`, `reference-analysis.json`, and the reproducible standard-library `reference-analysis.py` preserve the measurements.
- **Adaptation:** preserve the 1.6 mm default bed-flat sheet construction and actual sacrificial frame connections; reconstruct entirely new open loom, rounded yarn notches, foot tongues, closed foot slots and shuttle. No cat panels, source clips, convex-hull substitution, or raw source asset. Frame increased to 2.4 mm. Tabs increased to 0.4–0.8 mm Z for a proposed FDM-friendly starting point, not copied source fit.
- New fits are deliberately **proposed**, not measured from the cat: total slot allowance 0.1–0.4 mm, tongue width 6–9 mm, foot length 24–34 mm. Every printer/material requires calibration.

Visual/interaction reference: read-only `keycap_generator2` README, `src/styles.css`, App, Viewer, image tracing, STL, worker and export modules. Applied its 374 px left maker rail/right gradient viewer, tactile key buttons, paired mm fields, collapsible controls, checked imported-base integration, source/cutout previews, explicit unit confirmation, per-part export, saved designs and current-result worker gating. Shared studio/import infrastructure was adapted from earlier daily studios; **the loom model, card layout and assembly checks are new**. No reference Git history or dependency tree was copied.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
```

Production base `/daily-app2/20261027-20/`. Local production test server: `http://127.0.0.1:5400/daily-app2/20261027-20/`. Individual `deploy` is `gh-pages -d dist`; the public monorepo is published by **root predeploy/deploy**, not individual deploy.

Create-vite latest 9.3.2 failed because its package lacked `template-react`, including a fresh npm-cache retry. Scaffolding succeeded with create-vite 8.2.0; the resulting app uses Vite 7 and React 19.

## Real customization and views

Three model-thumbnail presets, soft/clipped/scalloped frame outlines, warp pitch, loom and foot dimensions, panel/fit/tab controls, and a lower-rail medallion with dimples. Text (up to 8 characters) and six searchable bundled vector marks feed the same real relief geometry as image import. Placement, size, Z rotation, relief depth and raised/engraved style affect final triangles. STL ignores preview colours.

Assembled, exploded, actual connected card, de-tabbed print layout and isolated loom/feet/shuttle views share the same solids. Assembly separation previews a straight vertical tongue insertion; it is not a moving fidget or physically validated animation. Shuttle is shown loose in front of the loom, not falsely modeled as attached. Orbit, zoom, fit and touch work locally. Light/dark preference persists. Undo/redo, six named local designs and portable JSON include bounded normalized image or verified mesh payloads; missing/invalid assets explicitly require reattachment.

## Parameter bounds — all physical lengths in mm

| Parameter | Supported range |
|---|---|
| Exact card width × height | 110–150 × 150–190 |
| Loom width × height | 54–68 × 70–90 |
| Foot length / tongue width | 24–34 / 6–9 |
| Panel thickness | 1.6–2.4 |
| Warp notch pitch / diameter | 4–6 / fixed 1.6 |
| Total slot allowance | 0.1–0.4, half per side |
| Part spacing | 5–9 |
| Tab width × thickness | 0.8–1.4 × 0.4–0.8 |
| Dimple depth | 0–0.4 |
| Import XY footprint / STL Z height | 4–7 / 0.6–3 |
| Import X/Y offset | ±1.5 / ±2 |
| Rotation | ±180 degrees |
| Image raised depth / engraved depth | 0.4–3 / 0.4–0.6 |

Some independent range combinations do not fit the chosen card. Such combinations **block export** with an actionable message; bounded variations enlarge the envelope as needed. Side/bottom/top rails are 6/18/8 mm; notch fingers ≥2.4 mm. Foot side walls ≥3.8 mm. The lower rail has a 13 mm medallion at local (0,10), 0.2 mm shallow well and minimum 0.8 mm floor after maximum engraving at minimum sheet thickness. It is ≥1.5 mm from the window. Imported geometry is checked against this circle, never allowed on tongues, yarn notches or slots.

## Image → real relief (local, not photo reconstruction)

Picker and drag/drop accept genuine PNG/JPEG, and safe simple SVG rasterized locally. File limit **2 MB**, image dimensions ≤12 megapixels / ≤6,000 px per side; normalized portable source ≤500 px. SVG: ≤2,000 simple shape elements, no scripts/external resources/text/effects/references. Rasterized at 256 px.

1. Alpha-composite source on light or dark background. Choose fit/contain or cover/crop with ±25% pan.
2. Sample a **20 × 20** luminance grid (maximum engine grid 24 × 24). Threshold 1–254 gives a silhouette **relief on a solid rail**, or grayscale produces varying heights. Invert background polarity when appropriate.
3. Triangulate a continuous piecewise-linear height surface with walls and a flat bottom; union to the actual rail using Manifold WASM, or subtract for engraving. The same personalized rail is unioned into the card.
4. Bright internal holes remain unraised/unengraved over the continuous backing; they are not through-holes and the low-resolution conversion is not exact outline tracing. Checkerboard displays the actual sampled cutout. Empty silhouettes are rejected. Image rows are flipped into model Y so text stands upright after assembly.

This is **2D-to-relief conversion, not automatic full 3D reconstruction from a photo**. Bold symbols work better than detailed photos; very small lettering may be below your printer's resolution.

## STL → integrated rail medallion

Both ASCII and binary STL are parsed in the worker, with **≤1,500 triangles, 2 MB, each source axis 0.2–250 mm**. Source dimensions and format are shown. Explicitly confirm **millimeter coordinates**, since STL has no units. Choose Z-up, Y-up or inverted Z before attaching. Change up-axis by clearing and reattaching the source. Scaling fits XY proportionally to the footprint and Z independently to selected height; rotation and placement change final solid geometry.

Require one connected, finite, nondegenerate, outward-wound, closed/manifold **convex, broad flat-bottom, support-free grip**. Verify edge incidence, triangle intersections, positive volume, convexity and bottom-contact coverage (≥25% bounding footprint). Concave/hollow/disconnected meshes, branches, overhangs, open surfaces and unverified repairs are explicitly **unsupported**. A convexity check is not a convex-hull replacement: accepted source triangles themselves enter a real Manifold union with 0.15 mm embed. Integration checks final connectivity, wall/isolation bounds and final mesh manifoldness. Very slender transformed XY (<1.2 mm) is rejected.

Replace, remove, reset transforms and return to defaults. No user files are uploaded or committed. Public fixtures are synthetic original PNG/JPEG/SVG and ASCII wedge/binary gem in `public/samples/`; generated solely for this local workflow, no third-party source mesh. All dependencies/fonts/WASM are bundled; no CDN, API key or paid service.

## Export, print and assemble

Prominent current-state binary STL, individual-part buttons and Everything ZIP (connected card, four clean parts, numbered `ASSEMBLY.txt` with attribution). Export connected card OR separate parts. Downloads use the exact preview result and current parameters. New edits/imports/errors disable export; a last-valid preview never authorizes stale output. 100 ms debounce, worker request ids, image conversion gating, parse/load guards and explicit worker errors protect responsiveness/correctness. Every generated part undergoes finite/triangle/edge/winding/positive-volume preflight.

1. Print connected card flat Z=0, PLA/PETG, 0.4 mm nozzle, 0.20 mm layers, three walls. Support-free geometry is intended; inspect your slicer. Default card **130 × 170 mm**, maximum 150 × 190 mm. Decoration raises total Z above the sheet thickness; read current X/Y/Z.
2. With flush cutters clip four side tabs per part (16 total). Trim nubs; do not cut the yarn notches, foot tongues or slot edges. Discard carrier. Tabs are reached through ≥5 mm layout gaps, not hidden inside slots.
3. Print one loom frame and left foot first as a fit test. Start 0.20 mm total slot allowance, deburr and adjust allowance in studio; do not force. Do not globally scale in the slicer or the fits change.
4. Place both feet bed-side down and align slots, then lower both frame tongues vertically until shoulders rest on foot tops. Feet are **removable clearance fits, not captive/snaps**; hold frame while working.
5. Loop soft yarn up the front/down the back over matching top/bottom notches. Tie off with slack rather than high tension. Wind short weft onto shuttle, weave alternating over/under front strands; reverse each row and pack gently with fingers. Unhook swatch and lift loom out of feet for storage.

## Validation and limits

`validate.mjs` independently parses binary exports and checks exact byte length, finite coordinates, nondegenerate triangles, normalized winding-consistent normals, welded edges (1e-5 mm, two opposite incident faces), positive volume **per component**, expected bounds and bed-flat Z for every part and card. Test defaults/presets/parameter corners and image/STL-derived outputs. CSG tests check nonintersecting four-part layouts, straight tongue insertion at sampled positions, correctly sized foot slots with fitting/oversize gauges, actual open window/notches, shuttle passage, exact card-to-part identity, and **five components after 16 tab cuts** (four parts + one frame).

Browser suites exercise real file selection/downloads, geometry changes vs defaults, JPEG/PNG/ASCII/binary STL, invalid/empty/open/nonmanifold/excessive input recovery, transformations, source JSON round trips, presets/text/icons/SVG/holes, worker failure/stale guards, per-part/ZIP export, undo/redo, named saves, dark mode, keyboard focus, desktop maker layout and 320/390 px touch orbit/pinch/no-overflow/export access. Production worker and WASM are tested under the actual base path. Reproducible reports and screenshots are saved here.

**Computational geometry is not physical testing. No print, force/fatigue, yarn snagging, practical weaving, strength or stability test was performed.** Flexible thin sheets can bow under yarn tension; keep it light and hold the frame. Cutter use/small parts require adult handling.

## Dependencies

React/React DOM, Vite + React plugin, Three.js (MIT), Manifold-3D WASM (Apache-2.0), fflate (MIT), locally bundled Fredoka/Rubik (SIL OFL), Playwright (Apache-2.0, tests) and gh-pages. Icons are six tiny local vector marks. No server is required after static deployment.
