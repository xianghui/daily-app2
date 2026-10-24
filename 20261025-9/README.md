# Unfurl Lift

A local parametric **one-piece TPU concentric kirigami lift fidget**. Hold the rigid palm tab / fixed outer rim and gently lift the center knob perpendicular to the flat sheet. Four nested annular bands connect through two bridges each, with bridge axes alternating X/Y. The rings tilt and unfurl, then settle as you lower and release. This is an out-of-plane pop-up interaction, distinct from the gallery's in-plane torsion spiral and longitudinal staggered-slit tensile sheet. No moving bearing surfaces or loose parts.

## Run and publish

Node 22.12+: `npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261025-9/`. Individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Publication uses the parent monorepo `deploy/` flow.

## Maker studio

The read-only Keycap Studio reference informed the 374 px left editor, compact sticky brand, collapsible sections, raised tactile controls, lavender-grey desk, white panels, coral selected states, paired sliders/mm fields, large right viewer, export panel and phone preview-first stack. Fredoka/Rubik fonts are bundled locally. Three generated model-thumbnail presets, three palm outlines, bounded random variations, undo/redo, six named local designs and portable JSON with bounded imported assets are implemented. Source and final previews, exact dimensions, light/dark persistence and accessible keyboard focus are included. Colour is preview-only, not STL data.

## Parameters and constraints

All lengths in millimeters: palm diameter 22–28; outer ring radius 26–32; bridge width 1.2–1.8; annular slot clearance 1.5–2.5; ring/bridge thickness 1.2–1.8; dimple depth 0–0.6; ring band width 2–3. Four bands use radial step = band width + slot clearance; center pad radius = outer radius − 4 × step (minimum 4 mm). Eight bridges span the slots with 0.4 mm nominal overlap on each end (curvature-aware minimum overlap checked). The palm neck intersects only the fixed outer band. Final X/Y/Z is displayed; for this bed-flat outline X = 2 × outer radius + palm diameter + 5 and Y = 2 × outer radius.

These are manufacturing geometry bounds, not verified elastic or force limits. Imported geometry remains within the 6.5 mm-radius rigid palm zone, at least 9.5 mm from the flexible ring envelope. The palm is 4 mm thicker than the flexible sheet. All unsupported or out-of-range edits block export.

## Image workflow

Pick or drop PNG/JPEG (2 MiB maximum, ≤12 MP, ≤6,000 px per side). Content signatures and encoded dimensions are checked before decoding. Images normalize to ≤500 px, then sample a bounded 20×20 luminance grid. Fit/cover, crop shift ±25%, light background removal/dark inversion, threshold 1–254, grayscale height and raised/engraved modes affect geometry. Raised depth 0.4–3 mm; engraving 0.4–0.6 mm. Physical footprint 4–7 mm, rotation ±180°, X ±1.5 mm/Y ±2 mm placement are bounded by the safe zone. Original and checkerboard cutout previews are shown.

A triangulated height surface with 0.4 mm solid backing is boolean-unioned or subtracted in the recessed palm. Light areas—including holes inside artwork—remain low/unengraved; they are not filled with a convex hull. This is sampled **2D-to-relief**, not exact vector tracing or automatic 3D reconstruction from a photo. Empty silhouettes block export. SVG is supported for simple safe filled shapes, rasterized locally to 256 px and passed through the same method; scripts/external resources/references/effects are rejected. Text and a searchable six-mark library use the same conversion.

## STL workflow and supported geometry

ASCII/binary STL: 40 bytes–2 MiB; ≤1,500 triangles; 0.2–250 mm per source axis. Choose Z/Y/−Z up before attaching; source dimensions and a source-model preview are shown. STL has no unit metadata: explicitly confirm millimeters before integration. XY scales proportionally to a 4–7 mm footprint; Z independently to 0.6–5 mm height. Rotate, place, center/reset, replace/remove and restore defaults are available. Changing up-axis requests reattachment.

The supported contract is deliberately bounded: **one convex, connected, closed, consistently outward-wound solid**, with broad flat bottom contact ≥25% of its footprint and no projections outside that bottom. Validation rejects open/nonmanifold meshes, degenerate faces, self-intersections, reversed winding, hollow/disconnected/concave shapes, excessive dimensions/triangles and slender grips. Unsupported inputs receive guidance; there is no repair claim or convex-hull substitution. Accepted original mesh geometry is actually transformed and solid-unioned into the palm, not merely displayed/re-exported. Final connectivity must remain one closed solid.

## Responsiveness, privacy and export

All files process locally; no uploads, remote API/CDN, keys or paid services. Only synthetic artwork/solid fixtures are bundled in `public/samples` (original project-generated fixtures, no personal files). Dependencies and WASM are bundled locally. Manifold CSG and mesh checks run in a Web Worker with bounded tessellation, 100 ms debounce and request-ID stale-result guards. Export is blocked while busy, invalid, or showing a labelled last-good preview. Preview and binary STL share the exact current validated mesh. Download the whole object or named solid; ZIP contains STL plus printing notes, not a 3MF. This single-body design has undeformed and print-plate views; no fictitious assembly or elastic animation is offered.

JSON contains bounded normalized image or mesh payloads, not inaccessible local paths. Restored meshes are revalidated; missing/corrupt images request reattachment. Named designs remain browser-local. Invalid file errors can be recovered by replacing/removing the source or Reset all.

## Printing and calibration

Print exactly bed-flat, flexible TPU 95A starting material; **PLA/PETG are unsuitable** for the bending bridges. Start with 0.4 mm nozzle, 0.2 mm layers and enough perimeters to fill the narrow bridges. Avoid slicer gap-fill voids; remove brim/elephant-foot from annular slots without nicking a bridge. No hardware, supports, assembly or trapped-part release.

Use **Pocket Unfurl as a full-size material/slot calibration coupon**. Begin below 0.5 mm axial lift, inspect bridges and layer adhesion, then only progress gently toward 3 mm total lift if the material returns without whitening or permanent set. This is cautious usage guidance, **not a verified safe travel range**. There is no rigid travel stop. Do not invert, hard-twist or stretch the center. Clearances, return force, creep and fatigue depend on printer/material. Keep skin out of closing slots. No physical print, fatigue test, finite-element analysis or universal-fit claim has been made.

## Validation

`npm test` exercises defaults, all presets and all 128 parameter range corners, plus image relief/threshold/engraving and both STL fixtures across representative parameters. Binary export checks include finite positions, normalized normals, nondegenerate faces, welded edge incidence exactly two, opposite neighboring directions, each component's positive volume, component count and independent millimeter dimensions. Runtime worker preflight repeats final-mesh validity checks. CSG differences verify imports cannot reach any flexible ring. Sixteen actual-solid slot probes confirm open quadrants; eight bridge probes confirm the alternating X/Y connections; a knob probe verifies center integration. The final mesh retains eight intended slot holes. These are undeformed geometric/connectivity checks, not a deformation simulation or proof of spring force, stable pop-up shape or fatigue life.

`node browser-test.cjs` and `node feature-test.cjs` target Vite port 5289: actual file pickers and binary downloads for PNG/JPEG/ASCII/binary STL; changed pixels, thresholds, depth, scale, crop and placement change exported geometry; replace/remove/reset; malformed, huge, open, nonmanifold and unsupported meshes; empty silhouettes; presets and variations; text/icons/SVG ring holes, background inversion and engraving; source payload roundtrips, undo/redo, named designs, saved theme, ZIP/per-solid STL, rapid worker updates and invalid-export blocking. Phone checks cover 320/390 px, touch orbit/pinch zoom and real imports/downloads. Reports record observed results separately from physical printing. Production and gallery browser tests cover packaged worker/WASM and preservation of gallery entries.

## Dependencies

React/React DOM, Vite/React plugin, Three.js (MIT), manifold-3d (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for validation. Studio/import infrastructure is reused from sibling Pincer Pause, with new concentric kirigami geometry and independent annular-slot/alternating-bridge checks. Reference source and archived gallery were not modified.
