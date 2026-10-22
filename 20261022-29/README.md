# Sarrus Still — spatial folding fidget studio

A hardware-free **spatial Sarrus six-bar linkage**: lift and settle a parallel thumb platform using two perpendicular two-link folding chains. Unlike a scissor or slider mechanism, the two sets of parallel hinge axes constrain straight vertical motion without a guide rail. Eighteen separately printable parts: two platforms, four links, six headed pins, six retaining caps. No spring return or detents; modest hinge friction may hold a pose. No hardware needed.

## Run and dependencies

`npm install`, `npm run dev`, `npm run predeploy`, `npm test`. Vite base `/daily-app2/20261022-29/`. Publication uses the parent monorepo's root deploy flow; per-app predeploy/deploy scripts are also supplied. React, Vite, Three.js, manifold-3d WASM robust solid Booleans, fflate ZIP. Playwright is development-only. All generation/export dependencies bundle locally: no CDN, server, API key or paid service. Worker handles mesh generation and strict STL preflight. Original warm studio UI inspired by Vaseverse's model-first composition, without its branding, assets, copy or source.

## Parameters and mechanism

All lengths are **millimeters**. Link length L: 28–34; platform half span: 22–26; top crown radius 4.8–6; palm tab radius 7–9; palm-edge groove depth 0–0.5; radial and axial running gap 0.25–0.50; cap radial allowance −0.08 to −0.01. Negative allowance produces a press fit. Hinge pins Ø4, bearing barrels Ø8, heads/caps Ø7.2, cap pegs Ø2.8. Bearing wall stays at least 1.5 mm. Rigid link plate thickness 2.8 mm, platform 3 mm. No compliant parts.

Preview fold angle θ runs **40–70°**. Each knee moves outward by L cos θ and up by L sin θ; platform rise is 2 L sin θ. Orthogonal chains constrain XY position and platform orientation. This avoids collapsed/extended singularities but **does not provide physical hard stops**. Stay within the illustrated range; do not straighten, flatten, twist, power or load the linkage. Platform rise, not a calibrated force, is the tactile interaction. Six interleaved knuckle joints have headed pins retained by shoulder-seated caps. Caps do not clamp rotating faces.

Three actual model thumbnails/presets (Balanced, Tall fold, Pocket fold), bounded Variations, live geometry edits, undo/redo, local JSON save/open, matte preview colours, touch orbit/pinch, zoom/fit and part selection. Preview colours never appear in STL. Assembly view is a visualization; exports always use the bed-oriented separate-parts layout with matching geometry/parameters. UI reports selected export X/Y/Z dimensions.

## PNG / JPEG to geometry

16 bytes–2 MB, at most 12 megapixels / 6000 pixels per side. Signatures/header dimensions checked before decode. Alpha composites onto white. Source is normalized to ≤500 pixels per side for portable saves. Fit/cover and ±25% XY crop shift resample to **20×20** luminance samples, using 0.2126 R + 0.7152 G + 0.0722 B. Threshold 1–254 raises dark samples by depth 0.4–3 mm; grayscale relief height is depth × (1 − luminance/255). A triangulated height field, perimeter walls and bottom form a closed solid on a continuous **0.4 mm backing**, Boolean-unioned 0.15 mm into the palm tab. Threshold boundaries interpolate between samples; this is not traced pixel-edge extrusion.

This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from a photo**. White/empty relief is blocked. Source and exact conversion grid are visible. Footprint 4–7 mm, rotation ±180°, placement X ±1.5 / Y ±2 mm. All transformed vertices must stay inside the protected radius-6.5 mm palm-tab zone, outside folding-chain swept volumes. Imports cannot alter hinges. Replace/remove/reset controls are provided.

## ASCII / binary STL to grip

≤2 MB, ≤1500 triangles, each source axis 0.2–250 mm. **STL has no unit metadata: explicitly confirm millimeters before integration.** Source preview shows measured dimensions, triangle count and encoding. Strict checks: finite coordinates, nondegenerate faces, welded edge incidence exactly two, balanced winding, one connected solid, positive volume, pairwise triangle intersections, convexity, broad flat-bottom contact and footprint containment. Open/nonmanifold/concave/hollow/disconnected/overhanging inputs are rejected with corrective guidance. No arbitrary automatic mesh repair is claimed.

Only one convex broad flat-bottom solid is supported. At least 25% footprint area must be bed-facing; all XY projections must lie within the bottom footprint. Reorient/repair/simplify externally if needed. XY scales proportionally into a 4–7 mm footprint; Z independently fits 0.6–5 mm. Minimum fitted XY span 1.2 mm. Z rotation/center/placement affect the **final robust Boolean union** with the stationary palm tab, not just a displayed mesh. Integration must remain one connected solid and within the protected zone. Unsupported imports disable export rather than producing interpenetrating shells.

## Privacy and portable settings

All personal files process locally in the browser, with no uploads or external services. JSON explicitly embeds a bounded normalized PNG or validated STL payload; reopening revalidates it and restores the real source, never a pretend missing import. Settings file limit 2 MB. Repository fixtures are synthetic original project samples only: `mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`. No personal files or third-party assets are bundled. Use the sample buttons or download links to try both workflows without uploading personal material.

## Printing, export and assembly

One-click local binary STL, individual-part selector, ZIP with all eighteen parts and assembly notes. Combined export is spaced on the bed, approximately 190 mm wide or less within supported ranges; arrange ZIP parts in your slicer if your bed is smaller. Export does not fuse moving bodies or use the assembled pose. A separate socket coupon tests the fit on a Ø2.8 mm peg. Starting clearances 0.25/0.35/0.45 mm are material/printer dependent, not universal.

PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. Platforms broad side down, links barrel-first, pins upright, caps flat. Link webs are elevated 2.6 mm above the bed and require support underneath, along with barrel undersides; horizontal bores may also need localized support if bridging quality is insufficient. Inspect slicer paths. Remove support and clear bores without indiscriminately drilling away retention. No claim of universally support-free output.

1. Seat each lower link's narrow ground knuckle between a palm-platform fork.
2. Place an upper link narrow knuckle in each lower link's forked outer knee.
3. Seat remaining upper knuckles in the matching upper-platform forks. Chains face outward on perpendicular edges, not inward across the platform.
4. Align six joints and insert six headed pins. Press six caps onto the narrow end pegs until shoulders seat; keep all rotating faces free.
5. Verify retained pins and free travel. Hold palm tab, lift/settle top at 40–70° fold angle. Pull caps to service; reprint a different fit rather than forcing.

Small removable parts are not for young children. Not structural or precision guidance. No physical print or tactile testing has been performed.

## Actual validation

`npm test`: default, all 128 parameter corners, min/max, three presets, eight deterministic variations; image relief/threshold and both STL samples across six parameter cases. Binary export parsing checks nonempty finite triangles, unit normals, nondegenerate areas, expected mm bounds, welded closed edges with two incident faces, coherent outward winding and positive volume separately for every connected component. Checks bed-oriented nonintersecting layouts, link closure, pure vertical platform travel, bearing walls and retaining margins. Robust CSG intersections sample 13 mechanism positions for representative built-in and all import cases; only six intentional cap/peg press fits are excluded.

`browser-test.cjs`: real file pickers and actual STL downloads for PNG/JPEG/ASCII/binary; pixel-content, threshold, relief, scale/rotation/placement export differences, preview/export fingerprint equality, source/transform reset/remove/replace, invalid/truncated/oversized/open/nonmanifold/concave inputs, empty silhouettes, bad dimensions, per-part downloads, 320/390 px layout and real touch orbit/pinch. `extra-browser.cjs`: all presets/variations, undo/redo, portable import JSON round trips, sample/drag-drop paths, ZIP, coupon, colour-neutral geometry. Reports and screenshots record executed checks. Digital mesh/mechanism checks are not a physical print test.
