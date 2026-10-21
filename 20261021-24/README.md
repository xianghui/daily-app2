# Parallel Tide — pinned four-bar fidget studio

A local React + Vite parametric STL generator, not a game. Two equal-length pivot cranks carry a thumb bridge around a circular path while keeping it parallel to an elongated palm base. Eight hand-assembled, hardware-free printed parts: base, two cranks, bridge, four caps. New interaction: a rigid pinned parallelogram rather than a linear slide, spherical swivel or elastic parallel-motion stage.

## Run and export

`npm install`, `npm run dev`, `npm run predeploy`. Per-app deployment scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public deployment uses the **parent monorepo** predeploy/deploy flow. Base path `/daily-app2/20261021-24/`.

Large live Three.js editor, orbit/pinch/zoom/fit, assembled pose control, separate printable layout, three rendered geometry thumbnails, constrained variations, preview colours, active-part selection, undo/redo (35 debounced modeling snapshots), and local design JSON save/open. Colour is preview-only; STL stores geometry. Parameter rail is tabbed; phone export remains fixed and touch-accessible. Grid squares are 10 mm. Final export-layout X/Y/Z dimensions appear below the preview. All physical dimensions are mm; rotation is degrees. Changing pose or colour does not modify the printable geometry.

Primary Download STL exports binary STL, all components in a separated bed-down layout or one selected part. ZIP contains all eight individual STLs and assembly notes. Preview/export use the exact same generated final meshes, including imported geometry. Assembled pose is not an export arrangement.

## Image import: PNG and JPEG

File picker, drop zone, and synthetic sample buttons. Maximum 2 MB, 12 megapixels, 6,000 pixels per side; magic/header and dimensions are checked before browser decoding. PNG/JPEG only. Images stay local.

Canvas composites transparency over white, fits/center-crops with ±25% pan, downsamples to **20 × 20** grayscale samples using Rec.709 luminance (0.2126R + 0.7152G + 0.0722B). Threshold mode maps values below a selected 1–254 threshold to the full relief depth, others to zero. Grayscale mode maps darkness linearly to depth. A triangulated continuous height field on a closed 0.4 mm backing is constructed with explicit side/bottom faces; the base is sunk 0.15 mm into the bridge and robustly unioned. Threshold mode is a raised height-field silhouette, not disconnected extruded islands. White/empty results are rejected. Source and exact conversion-grid previews shown.

This is **2D-to-relief conversion, not automatic full 3D reconstruction from a photo**. Relief depth 0.4–3 mm. Footprint 4–7 mm; rotate ±180°, X ±1.5 mm and Y ±2 mm placement. Every transformed vertex must stay within the circular 6.5 mm bridge safe zone. Import is mechanically meaningful as the bridge's thumb-contact grip; it never alters bores, cranks or caps. Fine image detail may be below nozzle resolution: use bold low-frequency art.

## STL import: ASCII and binary

STL has **no unit metadata**. Source dimensions are displayed and explicit millimeter confirmation is required before integration. Maximum 2 MB / 1,500 triangles, each dimension 0.2–250 mm and finite coordinates bounded to ±10,000 mm. Content is parsed rather than trusting extensions; malformed/truncated facets, excess triangle counts, nonfinite or degenerate faces, open/nonmanifold edges, inconsistent winding, multiple components, nonpositive volume and self-intersections are rejected. Welding tolerance for source checks is 0.00001 mm. Pairwise triangle intersection and convexity checks run in a worker.

Deliberately restricted contract: **one convex solid, broad flat Z-down bottom (≥25% of XY bounding footprint), all XY projections inside that bottom footprint**, no unsupported overhangs. No concave, hollow, branching, inverted, disconnected or arbitrary organic meshes. There is no automatic repair; actionable messages ask for decimation, reorientation, simplification or watertight re-export in a modeler. The STL thumbnail shows original dimensions, not an unchanged final export.

XY scales proportionally into a 4–7 mm footprint; Z independently to 0.6–5 mm height. Fitted minor XY span must remain ≥1.2 mm. Rotate about Z, center/reset, and position on the protected bridge pad. Integration uses Manifold solid union with a 0.15 mm overlap and verifies one connected manifold per part. Imported shape, scale, height, rotation and placement survive into the final bridge STL. Unsafe placement is blocked. Replace/remove returns to the built-in raised grip.

## Local save/open and privacy

All modeling, image processing, validation, source previews and exports run in the browser. No API keys, paid services, CDN runtime dependencies, cloud upload or external file processing. WASM and JS are bundled locally. Only synthetic fixtures are committed, no personal inputs.

Explicit Save JSON includes the bounded mesh or image pixels plus a ≤500 px source PNG (≤250k pixels) for editable conversion on reopen. Saved STL is re-preflighted before use. JSON opens are limited to 2 MB; malformed/out-of-range designs fail recoverably. This is a user-triggered download, not remote persistence. Undo/redo restores modeling state and included source, not just the UI. Bitmaps may be reconstructed from their bounded portable local payload.

## Parameters / mechanism

- Fixed-pivot spacing: 38–46 mm.
- Crank/orbit radius: 18–26 mm.
- Bridge thickness: 3–5 mm.
- Palm end radius: 8–11 mm; floor 4 mm.
- Palm edge grooves: 0–0.5 mm depth.
- Radial **and axial** running clearance: 0.25–0.50 mm. Pins Ø4 mm; bores Ø(4 + 2 × clearance) mm.
- Cap radial allowance: −0.08 to −0.01 mm, i.e. nominal 0.16–0.02 mm diametral interference. Positive/loose cap allowances are not offered. Printer errors still require a physical fit trial.
- Crank section 10 × 4 mm, minimum bore wall 2.5 mm. Bridge bearing wall ≥3.5 mm. Cap outer diameter 9 mm, blind socket depth 1.5 mm, closed roof 1 mm, pin engagement 1.4 mm.

All supported parameter combinations preserve at least 12 mm between an extended crank tip and the other fixed pivot. Bridge elevation clears base caps. Captive motion relies on seated friction caps: never glue moving interfaces, never use loose caps, stop if a cap lifts. The ideal four-bar has aligned singular positions: guide both cranks together through alignment instead of forcing a racked joint. No elastic beam, spring, magnet, bearing or fastener.

## Printing / assembly / calibration

Export all eight parts bed-down. Base/crank pins point up, bridge is flat, caps' blind sockets face down. Caps require a **short approximately 4 mm bridge** under the closed socket roof; inspect it. Otherwise support-free geometry is intended. Starting settings: PLA/PETG, 0.4 mm nozzle, 0.16–0.2 mm layers, four walls, 25% infill. Imported convex flat-bottom grips remain within their base footprint; image surfaces are vertical height fields.

First print a base, one crank and one cap via individual downloads as a full-size fit trial (not a scaled coupon). Adjust running clearance for free rotation and cap allowance for secure retention on your printer/material. Fits are not universal. Deburr bores without compromising retaining sockets. Seat both cranks on base pins in the same direction, place bridge on their remote pins, press all four caps into place leaving axial clearance. Check all caps remain seated during gentle movement. Small parts/pinch points: not child-safe.

**No physical print, friction/feel, bridge quality, retention force, fatigue or durability test has been performed.** Digital checks are not physical certification.

## Validation and reproducibility

- `npm test` (`validate.mjs`): defaults, extrema, all 128 parameter corners, PNG-style threshold/grayscale inputs, ASCII/binary STL fixtures, per-part exports, and recoverable invalid states. Each exported component is tested after binary serialization: finite/nondegenerate triangles, normalized face normals, consistent winding, positive signed enclosed volume, welded edge incidence exactly two, connected components, matching millimeter bounds and disjoint print layout.
- 24 assembly angles at 15° increments for defaults/extrema and each imported case: solid intersections among all part pairs, excluding exactly four intentional pin/cap press fits. At 24 nonpressfit pairs per pose this is 576 collision tests per design. Analytical wall/clearance/retention and linkage-spacing constraints supplement samples; samples alone are not a full continuous swept-volume proof.
- Manifold robust CSG, `asOriginal().setTolerance(0.001)` before serialization removes CSG seam slivers within 0.001 mm. No imported mesh is claimed repaired; source meshes still must pass strict preflight.
- `node browser-test.cjs`: real PNG/JPEG/ASCII/binary file-picker imports, geometry fingerprints and actual binary downloads, threshold/depth/crop/scale/rotation/placement changes, reset/remove/replace, invalid/truncated/oversized/open/nonmanifold/concave/empty cases, per-part exports, phone 320/390 px layout, touch orbit/pinch and import/export. Final preview signature must equal downloaded bytes. No remote requests permitted.
- `node extra-browser.cjs`: actual geometry thumbnails/presets/variations, undo/redo, portable JSON round trips for all four import formats, ZIP part validation, colour-neutral geometry, drag/drop, screenshots.
- `node gallery-test.cjs`: inline scripts compile with `new Function`, unique STL entry, preserved baseline entries, category ordering and actual gallery render/search without runtime errors.

Geometry/browser reports and screenshots are committed. Browser tests expect Vite at `127.0.0.1:5210`; set `TEST_BASE` for production preview. Gallery test expects root HTTP server at port 5211. Tests use Playwright Chromium and Node. Synthetic fixtures in `public/samples` are original locally generated geometric images and convex meshes; no attribution required.

Dependencies: React/ReactDOM, Three.js + OrbitControls, Manifold-3D (WASM CSG), fflate (ZIP), Vite + React plugin, gh-pages; Playwright dev/test. UX uses a warm, model-first studio reference from vaseverse.org; no branding, source, text or visual assets copied.
