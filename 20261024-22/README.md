# Band & Pause

A local-first parametric **open-wrap thumb brake** studio. Turn a rigid drum, gently pinch the two tips of its TPU brake to contract the wrap and add drag, then release for a lighter turn. This differs from an endless-belt transmission: there is one independently rotating drum, no follower, and the open brake is held by the user's fingers rather than anchored. It is not a locking or directional brake.

## Studio and exports

React + Vite, locally bundled Three.js/OrbitControls, Manifold WASM CSG, and fflate ZIP. No server, API keys, CDN libraries or file uploads. Live worker-generated geometry drives both preview and binary STL export. Ivory/clay model-first styling takes broad UX inspiration from Vaseverse; no source, branding or assets copied. Three actual-model preset thumbnails; bounded variations; numeric/sliders; undo/redo; portable JSON save/open; tap part selection; assembled versus bed-flat preview; per-part STL and all-part ZIP with assembly notes. Preview colors are not included in STL.

`npm install`, `npm run dev`, `npm run predeploy`, `npm test`. App base `/daily-app2/20261024-22/`. Per-app gh-pages scripts exist, but publication uses the root monorepo deploy flow.

## Local imports

File picker and drag/drop support PNG/JPEG and binary/ASCII STL. Synthetic fixtures in `public/samples` are original project test assets; no personal files are bundled. Maximum file size 2 MB. Replace/remove/reset, source preview, crop controls and final model preview are included. Export pauses on parse, unsafe settings, empty image relief, unit confirmation or failed geometry checks. Parsing and solid modeling run in a worker.

### Image method

Images are checked by magic bytes and dimensions before decoding: at most 12 MP and 6,000 px per side. A bounded 500-pixel-side source payload is retained for portable save/open. Fit/cover and ±25% crop shifts resample to a 20×20 grid, composited over white. Luminance uses 0.2126R + 0.7152G + 0.0722B. Threshold mode raises grid vertices whose luminance is below a threshold of 1–254. Relief mode maps darkness continuously to 0.4–3 mm depth. A triangulated continuous height surface, side walls and closed bottom produce a solid over a 0.4 mm backing. It penetrates the palm floor by 0.15 mm and is genuinely Boolean-unioned. This is **2D relief/silhouette conversion, not single-photo 3D reconstruction**. Empty all-white output is rejected. Source pixels, threshold, depth and placement change the exported geometry.

### STL method and explicit supported subset

STL contains no units: the source XYZ dimensions are shown and users must confirm millimeters. Up to 1,500 triangles, each dimension 0.2–250 mm. Only one connected, outward-wound, positive-volume, convex watertight solid with a broad flat bottom (≥25% of XY box) and all XY projections inside that footprint is supported. Concave, hollow, branching, open, nonmanifold, degenerate, inconsistent, disconnected, intersecting and unsupported-overhang meshes are rejected with guidance; **no automatic repair is claimed**. Content, welded edge incidence/winding, connectedness, pairwise triangle intersections, convexity and bottom contact are checked. XY is proportionally fitted to a 4–7 mm footprint; Z independently fitted to 0.6–5 mm. Rotate around Z ±180°, center, and move ±1.5 mm X / ±2 mm Y. Minimum fitted XY span 1.2 mm. The source is fused into the stationary palm at a real 0.15 mm overlap. It must remain inside a 6.5 mm safe radius and form one connected solid. It cannot alter the drum, axle seat, cap or brake. JSON embeds bounded mesh data and revalidates it on opening; image JSON embeds its bounded source. Missing source data is explicitly rejected, not silently restored.

## Parameters / dimensions

All geometry values are millimeters; image threshold is /255, crop is %, and rotation is degrees.

- Drum diameter: 22–28 mm.
- Brake tab reach beyond nominal drum radius: 5–9 mm.
- TPU brake radial wall: 1.2–1.8 mm.
- Running radial and axial clearance: 0.25–0.50 mm.
- Drum track height: 3–4 mm; brake height is track height minus 0.6 mm.
- Palm dimple depth: 0–0.6 mm, outside the protected import landing.
- Cap socket radial allowance: -0.06 to -0.01 mm (negative means nominal interference).

Tabs have an 8 mm relaxed opening. Flanges overlap the brake bore by 1.2 mm minus running clearance. Minimum drum bore wall exceeds 7 mm. The import's bounding safe circle is over 18 mm from the drum flange. Every part's exported bed is Z=0; visible XYZ dimensions match selected export, not an invented assembled envelope.

## Printing / calibration / interaction

Four separately printed parts: palm-base, thumb-drum, axle-cap in PLA/PETG; tpu-brake in TPU 95A. No hardware. Start with 0.4 mm nozzle, 0.2 mm layers, three rigid perimeters and solid TPU walls. Print all parts in supplied bed-flat layout; cap is socket-up for printing, inverted for assembly. The flange underside is 45°; no supports intended. Put drum over post, flex the open brake over its flange into the track, tabs pointing away from palm, then press cap socket-down on post. Friction cap fit is not a certified lock. Print one cap first as a full-size fit coupon, starting at -0.01 mm radial allowance; adjust to printer/material. Soft Pause is the full-size brake material trial.

Pinch gently while turning the exposed drum crown. Hold the unanchored brake with your fingers. Start below 0.5 mm **total** tab closure; do not close the entire 8 mm opening or force a stall. Release restores slack. The brake is intentionally removable; flanges reduce axial drift but do not make it permanently captive. Stop at cracks, whitening, binding or excessive effort. Small parts are not for children. TPU friction, stiffness, wear and restoring behavior depend on material, printing and surface finish.

## Validation and limitations

Every live generated part is checked for finite coordinates, nondegenerate triangles, welded two-face edge incidence, consistent winding, positive volume and one closed connected solid. Manifold CSG supplies actual unions/differences, not overlapping shells. Post-layout float32 coordinates are rechecked. Worker result identity gates export so stale geometry cannot be downloaded.

`validate.mjs` independently parses exported bytes and verifies normals, components, edge incidence, winding, volume, dimensions, all 128 parameter corners, defaults/presets, deterministic variations, image and STL outputs. It probes rigid assembly at 13 rotation positions using actual solid intersections, checks all six print-layout pairs, intentional cap interference, brake release opening/tab dimensions, running slack, flange overlap and import isolation. Browser tests exercise actual PNG/JPEG/ASCII/binary file selection, malformed files, exports, source/transform changes, JSON round trips, undo/redo, ZIP/per-part outputs, mobile 320/390 px layout and touch orbit/pinch. Reports record actual outcomes.

Rigid pose preview does not simulate elastic contraction, friction or force. Checks of watertight meshes and relaxed rigid clearances do not prove a physically working brake. **No physical print, friction, force, retention, wear or cycle tests have been performed.** Calibrate and evaluate gently before repeated use.
