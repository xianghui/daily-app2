# Chord Rest — fixed-fixed pluck studio

A local React/Vite parametric STL editor for a hardware-free tactile fidget. Brush a rounded ribbon midpoint **sideways**, then release. Each ribbon is anchored at both ends with tapered roots, unlike the archived cantilever pluck comb. Duet, Trio and Quartet have genuinely different ribbon counts, spans, spacing and stiffness. This is a compliant fidget, not an audio instrument.

## Editor

Large matte Three.js canvas, orbit/pinch/zoom/reset-fit, 10 mm grid, X/Y/Z export dimensions, selectable solid, compact right rail and phone collapsible controls with fixed download area. Shape/Mechanism/Surface/Import/Print tabs, real worker-driven geometry edits, numeric/slider pairs, valid-range variations, geometry thumbnails, undo/redo and portable local JSON save/open. Colours affect preview only; STL has no colour. Object and print layouts use identical geometry; print layout only translates XY into positive coordinates. One solid means no assembly, ZIP or separate moving parts are needed; the individual frame option is also available.

Visual direction: https://vaseverse.org/ was inspected for its model-first canvas, compact controls and quiet warm palette. This is an original fidget studio; no reference branding, assets, text or code is copied.

## Parameters (millimeters unless specified)

- External frame corners have a fixed 3 mm comfort radius.
- Anchor span 44–64; tapered roots consume 4 mm each, leaving 36–56 mm free beam span.
- Ribbon pitch 8–11; count 2–4 (integer).
- Ribbon width 0.8–1.2; ribbon/frame height 2.4–4.
- Palm dimples 0–0.6 deep; palm recess is 0.8 deep, leaving at least 1.6 mm floor.
- Central nub diameter 2.6; closest adjacent nub gap 5.4.
- Recommended gentle lateral pluck ≤0.5 mm, not a hard mechanical stop. Conservative bending screening: strain = 12 × ribbon width × deflection / free span²; maximum within ranges <0.6%. This is a geometry/beam estimate, not finite-element analysis or material certification.

No sliding interfaces or press fits exist, so no universal joint tolerance is claimed. Both ends of each ribbon are intentionally fused to the same rigid frame. Their free spans and slots remain open. Imported geometry stays on the rigid palm rail, not the ribbons.

## Image workflow

PNG and JPEG, actual header/content checked before decoding; 16 bytes–2 MiB, ≤12 MP, ≤6000 px per side. Input is normalized to ≤500 px per side for bounded portable storage. Transparent areas become white. Fit/contain or crop/cover, ±25% crop pan, threshold 1–254, relief depth 0.4–3 mm, physical footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm and Y ±2 mm.

Conversion samples a **20×20 luminance grid**, 0.2126R+0.7152G+0.0722B. Threshold mode raises dark grid vertices by the chosen depth; grayscale mode raises by depth×(1−luminance/255). Top triangles linearly interpolate grid heights, so threshold edges have a one-cell transition rather than infinite vertical pixel walls. A continuous 0.4 mm backing, closed sidewall and bottom make a solid, embedded 0.15 mm into the palm floor and robustly boolean-unioned. Empty silhouettes are rejected. This is **2D-to-relief, not automatic full-3D reconstruction from a photograph**. Source and exact sampled grid are shown separately from the final model.

## STL workflow

Both binary and ASCII STL; one connected outward-wound closed convex solid only. ≤1500 triangles, 40 bytes–2 MiB, each source axis 0.2–250 mm, finite bounded coordinates. No automatic repairs. Open, nonmanifold, degenerate, inconsistent-winding, self-intersecting, disconnected, concave, hollow and unsupported overhanging meshes are rejected with guidance. A broad planar bottom must cover at least 25% of the XY bounding footprint, and the whole XY projection must lie inside that bottom hull. Orient the desired base downward along Z in your modeler before import.

STL carries no unit metadata: dimensions are shown and explicit millimeter confirmation is required. XY is fitted proportionally to 4–7 mm footprint, Z independently to 0.6–5 mm grip height. Rotate Z, scale, center/place and reset are real geometric transforms; minimum fitted XY span is 1.2 mm. A radius-6.5 mm safe region protects the palm recess and keeps imports away from all flexures. The imported solid embeds 0.15 mm into the floor. Manifold CSG union must produce exactly one connected solid, otherwise export is disabled. This is real integrated geometry, not an overlapping display shell or an unchanged mesh re-export.

Replacing/removing/resetting imports restores the built-in palm grip. Save JSON embeds the bounded source mesh or normalized PNG data and settings; reopening validates it again. Missing source payloads are not claimed restored. Maximum JSON size 2 MiB; at most 35 bounded undo snapshots are retained in memory.

## Privacy and dependencies

All user file processing, preview, CSG and binary STL export run in the browser; no uploads, remote modeling services, API keys, CDN runtime imports or paid services. React, Three.js and manifold-3d (bundled WASM) are local dependencies; a module worker bounds modeling and mesh parsing work. Synthetic `public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl` and `gem-binary.stl` are project-created fixtures, not personal uploads. gh-pages is installed for the required deploy scripts; 6.1.1 avoids the audited vulnerable glob chain in later versions at build time. `npm audit` reports zero vulnerabilities at creation (deprecated transitive build packages remain).

## Run and export

```
npm install
npm run dev
npm run test
npm run predeploy
```

Primary Download STL exports a binary geometry-only STL with source type, size and part in the filename. Preview geometry and export share the same model. All dimensions are mm. The app base is `/daily-app2/20261023-4/`; scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public publication uses the **root monorepo deploy**, not individual deployment.

## Printing and release

Print Z=0 face down, no supports for the supported import contract. PETG is a starting point, 0.4 mm nozzle, 0.16–0.2 mm layers, ≥3 walls. Inspect slicer thin-wall paths: 0.8–1.2 mm ribbons must extrude continuously and be bonded to both roots. Keep seams on the frame. Print Duet first as a full material/feel calibration coupon. Printer, extrusion width, material and moisture change stiffness and fatigue behavior.

Cool the bed fully, lift by the frame, clear strings, inspect roots. Hold the rigid palm rail and gently brush a nub sideways by ≤0.5 mm. Do not tug upward, force full slot travel, crease a root or pry with a knife. Stop using it if cracking/whitening appears. No hardware or assembly. Not intended for chewing or children.

## Verification and limits

`validate.mjs` checks default, minimum, maximum, every preset, 64 endpoint combinations and 8 variations; plus image threshold/grayscale and ASCII/binary-STL-derived outputs at representative parameter settings. Exported binary STL is reparsed: nonempty finite nondegenerate triangles, stored normals matching winding, welded edge incidence exactly two with opposite orientation, per-connected-component positive volume, expected bounding dimensions and one solid. Manifold CSG handles solid union rather than leaving internal overlap faces. Mechanical checks cover minimum palm floor, free beam span, root connection by one-solid topology, conservative 0.5 mm bending screening, adjacent swept nub envelopes and end bridge/import separation. Generated geometry does not contain unintended moving bodies.

Browser tests use real PNG/JPEG/ASCII/binary file selection, downloads and exported-geometry signatures; changed source pixels, threshold/depth, mesh scale/rotate/place, replace/remove/reset, malformed/excessive/open/nonmanifold/concave inputs, empty silhouettes, invalid dimensions/transforms, exact preview-export equality, every preset, variations, undo/redo, all four portable save/open paths, drag/drop, preview colour neutrality and 320/390 px phone layouts including touch orbit/pinch and reachable export. Reports are committed alongside the source. They are digital checks only: **no physical print, fatigue or tactile feel test has been performed**.
