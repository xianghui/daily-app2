# Delta Wind

A browser **stepped differential windlass fidget generator**, React + Vite. Turn two unequal coaxial cord drums: one winding takes up cord while the other pays it out, making a return sheave move by their radius difference. Four printable rigid parts. Unlike the gallery's single-pulley return shoe, yo-yo, capstan and belt mechanisms, this combines opposing windings on one stepped spindle to produce differential takeup.

## Studio and local processing

Read-only primary reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`. Inspected README, App.tsx, styles.css, Viewer.tsx, imageTrace, STL/export and worker modules. Implemented its concrete studio patterns: 374 px scrollable left controls, compact sticky header, paired numeric mm/sliders, collapsible sections, thumbnail presets, raised key-like buttons with pressed selection, locally bundled Fredoka/Rubik fonts, lavender-grey desk (#e7e9f1), white panels, coral accent (#e2557a), dark ink (#1f2233), saved dark theme, gradient viewer on the right and phone preview-first stack. No switch sockets, reference edits, deployment or copied Git history. Shared collection import/editor primitives reused; the mechanism and independent mechanism checks are new.

All files remain in the browser. No uploads, APIs, credentials, paid services, CDN imports or runtime font fetches. Dependencies are locally bundled React, Vite, Three.js, Manifold WASM, fflate and Fontsource fonts. Playwright is used for testing; gh-pages for the requested deployment scripts. Synthetic sample images, SVG and STLs are bundled; no personal source files. Font licenses in `public/FONT-LICENSES.txt`; original synthetic icon paths need no third-party attribution. Fontsource fonts use SIL OFL, Manifold Apache-2.0, Three.js and fflate MIT.

## Run and validate

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve-production.cjs
# another terminal, production bundle under /daily-app2/20261027-6/ on port 5376:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node cord-route-test.mjs
node view-motion-test.cjs
```

Pure geometry/parser/serializer modules are shared between worker, browser export and Node tests. Heavy CSG and mesh import run in a Web Worker; image conversion is bounded to 400 samples. 100 ms debounce, request IDs, exact state keys and file-normalization cancellation guards prevent stale exports. Loading, valid, invalid and worker failure are explicit. An invalid edit may leave a labelled last-valid preview, but **all STL/ZIP exports are blocked until current valid geometry exists**. Worker failure requires reload. Preview and export share exact indexed meshes; an export fingerprint lets tests compare the actual downloaded bytes with the preview state.

## Dimensions and controls

All dimensions millimeters, including selected final X/Y/Z bounds. Supported ranges:

| Parameter | Range (mm) |
|---|---|
| Palm diameter | 22–28 |
| Sheave center spacing | 44–50 |
| Large drum radius R | 13–15 |
| Radius difference d | 3–5 |
| Small drum radius r = R−d | 8–12 |
| Radial bore and track side gap | 0.3–0.6 |
| Cord diameter | 0.8–1.2 |
| Palm dimple depth | 0–0.6 |

Round, hexagonal and oval palm shapes; Easy Cadence, Delta Wind and Fine Takeup presets; bounded variations. Floor 4 mm, recessed palm well 0.8 mm, carriage 14 × 22 × 3 mm. Posts radius 2 mm; real thrust shoulder radius 3.5 mm; both wheel bottom planes are 7.2 mm above the frame bottom. The wheel seat is 0.2 mm above its adjacent carriage/shoulder face, not a floating preview offset. Windlass and sheave are each 8.9 mm tall. Flare rise/radius change is 1.2/1.2 mm (45°). Groove guide flanges are 0.7–0.8 mm thick; body walls and anchor surrounding walls remain ≥1.2 mm. Anchor hole diameter 1.2× selected cord diameter, with actual surrounding wall ≥1.38 mm. No flexures or claimed universal fit.

Windlass thumb preview ±60°. Ideal return displacement `x = (R-r) θ / 2`; total illustrated stroke 3.14–5.24 mm. At extreme preview position the carriage has >3 mm clearance to a track stop. **This formula is a near-parallel, taut, no-slip cord approximation**, not an exact rope-length/contact solver. Dashed cord paths, return-sheave rotation and carriage displacement are schematic. They omit helical skew between drum levels, changing tangencies, cord compression, accumulated winding layers, slack and friction. The fidget is hand-guided, not a motorized precise-motion device or self-locking hoist. Use only a short stroke and reverse. This is not a load-bearing tool.

## Required cord and assembly

Four separate PLA/PETG parts: palm-track, stepped-windlass, return-shuttle and return-sheave. Required for differential interaction: **400–600 mm of smooth braided 0.8–1.2 mm cord**, matching the selected diameter, plus scissors. No magnets, bearings, fasteners or purchased springs. A hardware-free alternate interaction is independent wheel turning and hand-sliding the carriage; it **does not provide differential coupling**.

Print flat Z=0 faces down as exported, 0.4 mm nozzle, 0.20 mm layers, at least three walls and 20–35% infill. No supports intended; flares rise at 45°. Check thin flanges in the slicer; use line-width compensation if your slicer omits them. Remove elephant foot and deburr bores, posts, track and cord holes. The separated plate is about 199 mm wide at defaults; use individual-part exports/rearrange for smaller beds.

1. Lower the windlass onto the fixed post. Place the shuttle between the open rails. Lower the return sheave onto the shuttle post.
2. Thread each cord end through the corresponding flange anchor and knot. Wrap a few turns around the large and small drums in **opposite winding senses**. Pass the intervening bight around the broad return sheave groove, one cord leg on each side. The cord changes height between drums; the sheave's broad groove accommodates this skew. Do not cross the legs around the sheave.
3. Start with the carriage centered; hand-guide light tension to remove slack. Keep knots away from the tangency points. Turn only ±60° from this starting position. One drum winds while the other unwinds. Guide the small glide, then reverse. Stop before knots, wrapping overlap, cord climbing a flange or an end stop; unwind/reseat rather than force it.
4. Keep the frame flat: parts are **not vertically captive**. Lift the sheave, shuttle and windlass to release. No snap-fit, deliberate interference or claim of retention upside down.

Easy Cadence is a full-size calibration set. Print it first, check the 0.3–0.6 mm bore/rail clearances and cord fit on your printer/material. Adjust to free motion without forcing. Calibrate friction and anchoring separately: this app cannot predict a cord's feel. Small loose parts and cord: not for children.

## Image, text, icon and SVG personalization

PNG/JPEG file picker on desktop/phone and drag/drop; simple SVG shapes also accepted. Text up to eight characters and six searchable bundled icons rasterize through the same actual geometry workflow. Source image and checkerboard cutout previews shown; replace/remove/reset always available. Built-in thumb grip returns when removed.

Validate image magic/header before decoding: ≤2 MB, ≤12 MP and ≤6,000 px per side. Normalize to ≤500 px per side; fit/cover crop, ±25% pan and light/transparent background or dark inversion. Simple SVG ≤2,000 elements rasterizes locally to 256 px after rejecting scripts, external references, effects, resources and unsupported elements.

Conversion samples a **20 × 20 luminance height grid**, then makes a closed triangulated height-field solid. Threshold 1–254: dark samples rise by chosen depth, bright holes remain at backing level. Grayscale mode scales heights continuously. Raised depth 0.4–3 mm; engraved 0.4–0.6 mm, leaving ≥2.6 mm floor. Manifold robustly unions/subtracts the relief into the actual palm. This is sampled **2D-to-relief, not exact vector tracing, through-cut silhouette or automatic full-3D reconstruction from one photo**. Holes stay unraised/unengraved on a solid backing. Empty conversions block export. Pixel content, threshold, depth, crop, footprint, rotation and placement change exported triangles, not just preview textures.

## STL workflow and supported geometry

ASCII and binary STL file import. Select Z up, Y up (+90° X conversion) or −Z up before attaching. Axis changes clear the old file and request reattachment; they never pretend to transform a missing file. Show oriented source mesh, original dimension numbers and explicit confirmation that coordinates are millimeters, since STL stores no units.

Set proportional XY footprint 4–7 mm, independent Z height 0.6–5 mm, rotation ±180°, X placement ±1.5 mm and Y ±2 mm. Reset transforms, replace/remove and defaults available. Original mesh geometry is solid-unioned into the palm well with 0.15 mm overlap; it is not merely displayed or re-exported unchanged. The 6.5 mm safe zone isolates personalization from the spindle and track; exports block if it escapes. Result must form one connected closed solid. Minimum transformed XY dimension 1.2 mm.

Supported input: **one outward-wound convex solid with broad flat bottom and no projected overhang**, ≤1,500 triangles, each source dimension 0.2–250 mm and ≤2 MB. Checks: content and facet completeness, finite coordinates, nondegenerate faces, welded edges with two opposite incident faces, connectivity, winding, positive volume, triangle intersections, convexity and flat contact area ≥25% of XY footprint. All XY projections must stay inside that contact polygon. Concave, open, nonmanifold, disconnected, hollow, branched, unsupported-overhang and self-intersecting inputs are **explicitly rejected with guidance**, not silently convex-hulled or repaired. Reorient/simplify/export a closed suitable grip in a mesh editor. Bundled wedge-ascii.stl and gem-binary.stl demonstrate the contract.

## Saved designs, views and exports

Undo/redo, up to six local named designs, portable JSON save/open ≤2 MB including bounded normalized PNG or verified indexed STL payloads. Missing image payload explicitly requests reattachment; restored mesh payloads revalidate. Nothing is uploaded or stored as a personal file in this repository. Named-storage capacity errors recommend portable JSON.

Assembled, exploded, print plate, palm, moving parts and each isolated part; see-through base. Three.js drag/touch orbit, pinch, zoom and fit. Exploded and dashed-cord placement are preview-only; exports always use four separate, nonoverlapping bed-flat solids. Per-part binary STL buttons, selected-part/plate STL, and Everything ZIP with four actual STLs plus assembly notes. Not 3MF; STL contains no preview colors or unit metadata. Choose mm and 100% scale in your slicer.

## Validation, limitations and publication

`validate.mjs` independently parses exported float32 STL, checks exact byte/triangle counts, finite vertices, nondegenerate faces, normalized outward normals, mm bounds, two opposite directed incident faces at every welded edge (1e-5 mm tolerance), positive volume per connected component and expected component counts. Every part and separated plate checked, including defaults, presets, parameter extrema and image/STL-derived output. Production worker also checks each final solid and translated layout on every edit.

Schematic cord-route clearance tests sample 335 sphere positions per preset/default against the actual printed solids, using external tangents and a broad-groove skew arc. These prove only geometric clearance of that schematic path, not real winding/contact or anchor security.

Independent mechanism checks sweep representative ±60° positions, test rigid solid intersections, track limits, real printed thrust seats, sequential vertical release, flange anchor opening, isolated personalization and separated plate. The ideal radius-difference arithmetic is checked independently. **Cord tangency/contact, force, anchoring security, friction, wear and fatigue are not simulated or tested. No physical print has been performed.** Rigid watertight geometry alone does not establish tactile quality or a successful printer/cord combination.

Production browser suites use real file pickers and actual downloaded STL/ZIP bytes. They compare imported files, threshold/pixels/depth and mesh transforms against built-in output; regenerate saved JSON and compare exact fingerprints; exercise rejection/recovery, exports, presets, shapes, text/icons/SVG holes, undo/redo, portable/local saves, theme/focus/collapsibles, worker abort/reload, stale async imports and 320/390 px phone touch/orbit/pinch. Reports/screenshots and reproducible scripts accompany the app; see VALIDATION.md for actual outcomes.

Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public publication is via the **root** monorepo `deploy/` flow, never standalone app deployment. Archived gallery and primary reference stay read-only.
