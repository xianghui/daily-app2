# Crosswind — articulated universal-joint fidget studio

A local React + Vite / Three.js / Manifold WASM parametric editor for a physical, hardware-free double-yoke universal joint. Hold the two palm tabs, articulate around the cross's perpendicular axes, then twist both hands together. Unlike the earlier nested-ring gimbal, the two open forks engage an orthogonal blind-bored spider and carry rotation between two palm grips. The preview illustrates two independent hinge angles, not driveline speed or a physics simulation.

## Editor

Model-first warm studio layout, live worker-based robust solid generation, touch orbit/pinch, reset/fit/zoom, millimeter layout dimensions, part selection, assembled and printable layouts, three real geometry preset thumbnails, bounded variations, numeric/range controls, preview-only clay colours, undo/redo, and portable local JSON save/open. Edits are debounced; export is disabled until the worker result matches current settings. STL and preview use identical final meshes. STL contains no colours.

`npm install`, `npm run dev`, `npm run predeploy`. App base `/daily-app2/20261022-17/`. Per-app deployment scripts are provided as requested, but public publishing uses the repository ROOT deploy flow. Dependencies are bundled, including WASM, without CDNs or APIs. Files are never uploaded. Browser downloads: binary STL all-parts bed-flat layout, any of seven individual parts, ZIP with all seven and assembly notes, and a static pin-seat ring coupon.

## Geometry and ranges (millimeters unless noted)

- Cross half-span: 9–11; cross width and thickness 8; minimum bearing wall at maximum clearance 1.5.
- Fork pivot height: 16–20; palm floor: 3–5; fork ear thickness: 3.
- Palm groove depth: 0–0.6 (minimum remaining floor 2.4).
- Radial and axial running gap: 0.20–0.50; starting FDM value 0.30, not universal.
- Static yoke pin-seat radial allowance: −0.04 to +0.08. Negative is press interference; positive may require adhesive at static seats.
- Pin diameter: 4; head diameter: 6.4; head thickness: 1.5.
- Blind cross bores: 4.3 deep; shaft engagement 3.5; end gap 0.8.
- Articulation validation envelope: ±20 degrees at each hinge. Do not force beyond the checked envelope.

Manifold CSG unions/subtractions form every component as one closed connected solid. Moving components remain separate. Layout normalizes each part to Z=0 with 6 mm separation. Imported features stay in a radius-6.5 safe region of the INPUT palm tab, clear of bores and moving surfaces. Output grip remains a built-in palm surface. No overlapping shells are presented as a union.

## Image workflow: PNG and JPEG

File picker on desktop/phone and drag/drop; bundled synthetic `mark.png` and `waves.jpg` with downloadable originals. Inputs: 16 bytes–2 MB, ≤12 million pixels, ≤6000 pixels per side; content header checked before bitmap decoding. Image normalized to a maximum 500 px side for an exactly repeatable bounded portable save. Transparent pixels composite over white.

Fit/contain or crop/cover, ±25% X/Y crop shift, threshold 1–254, or grayscale relief. A 20×20 sample grid is converted to luminance with 0.2126R+0.7152G+0.0722B. Threshold mode raises samples darker than the threshold by the selected 0.4–3 mm depth; grayscale mode raises each sample by `depth*(1-luminance/255)`. Adjacent heights are triangulated, with closed walls and a 0.4 mm backing. The entire relief is CSG-unioned into the rigid tab with 0.15 mm overlap. This is **2D-to-relief/silhouette conversion**, not reconstruction of an entire 3D object from a photograph. Empty results reject export. Source and exact conversion-grid previews are shown alongside the real final 3D model.

Import footprint 4–7, Z rotation ±180 degrees, X placement ±1.5, Y placement ±2. Safe-zone checks reject oversized/rotated combinations instead of clipping them silently.

## STL workflow: ASCII and binary

Synthetic wedge ASCII and gem binary fixtures are authored for this app family (no third-party assets or attribution needed). Inputs 40 bytes–2 MB, ≤1500 triangles, each axis 0.2–250. STL has **no unit metadata**: the user must explicitly confirm source coordinates are millimeters before export. Dimensions, format, triangle count and interactive source preview are shown.

The deliberately supported contract is ONE convex, connected, outward-wound, watertight solid with a broad flat downward Z face (≥25% of XY bounding footprint) and all XY projections inside the bottom footprint. Open/nonmanifold, inconsistent winding, degenerate, disconnected, self-intersecting/touching, concave, hollow and unsupported overhanging meshes are rejected with guidance. Pairwise triangle intersection and convexity checks are bounded by the triangle limit and run in a worker. There is no claimed repair path.

Mesh is centered and fitted proportionally in XY to a 4–7 footprint; Z independently fitted to 0.6–5 grip height. XY minimum fitted span 1.2. Rotation and placement use the same controls as images. The transformed mesh is CSG-unioned into the input palm tab, and a disconnected result or unsafe placement blocks export. Source shape, scaling, height and placement therefore change exported geometry, not just the preview. Replace/remove, center/reset transforms, image reset and return-to-default controls are real. JSON embeds bounded vertices/indices or normalized image payload; no missing source is pretended restored. Reopened STL payloads are parsed and checked again.

## Printing and assembly

1. Print yokes floor-down, spider on a broad flat cross face, four pins head-down/shafts-up. Circular horizontal yoke and spider bores may need small removable supports or carefully tuned short bridging. The design is assembled, not print-in-place, and not universally support-free.
2. PLA or PETG; 0.4 mm nozzle; 0.16–0.20 layers; four walls. No compliant beams or hardware. Avoid resin brittleness. Trial the seat coupon and a pin; calibrate fit for your printer/material and deburr without misaligning axes.
3. Put the spider between input-yoke ears. Insert opposite X pins from the outside through ears into blind bores. Rotate output yoke 90 degrees and invert it above the cross; insert its two pins into the other bores. Heads remain outside.
4. Pins are STATIC in the yokes and rotate inside spider bores. Heads prevent inward travel; calibrated static seats prevent outward travel. If seats are loose use a tiny adhesive spot only in yoke bores, never moving spider bearings. Avoid adhesive until a free-motion dry assembly passes. Unbonded pins can be withdrawn from their heads to service.
5. Bend gently within ±20 degrees per hinge, twist the palms together and reverse. This is not a torque-rated shaft coupling. Keep small parts away from young children.

## Validation / no physical-print claim

`npm test` records geometry-validation.json: defaults, extrema, each individual range edge, all presets, eight deterministic variations, and image/STL imports at defaults/extrema/presets. Every binary STL is parsed to check finite coordinates, nonzero triangles, nondegenerate faces, normalized outward normals, edge incidence exactly two after 1e−5 mm welding, opposed adjacent winding, positive volume for EACH component, expected dimensions and Z=0. Individual parts are checked separately. Analytical checks cover wall, bore separation, blind engagement/end gap, head retention and spaced layout. Manifold intersection checks sample a 5×5 articulation grid on default/extreme/preset and imported models, excluding only intended fixed pin/yoke press-seat contact. Imported grips are included in interference tests.

`node browser-test.cjs` exercises real file pickers, PNG/JPEG conversion changes, ASCII/binary STL scale/rotation/placement changes, downloads parsed for validity and exact preview signature, replace/remove/reset, malformed/truncated/oversized/nonmanifold/concave files, bad image dimensions, empty silhouettes and invalid transforms. Tests include 320/390 px layouts, actual touch orbit/pinch and phone imports/downloads. `node extra-browser.cjs` checks presets/variations, undo/redo, portable import JSON roundtrips, ZIP parts, coupon and drag/drop. `node production-test.cjs` checks built worker/WASM exports, assembly poses, phone controls and larger-image portable roundtrip. Gallery tests compile inline scripts, preserve prior entries and check browser rendering. Test JSON and screenshots record observed results.

Digital geometry and sampled kinematics are **not physical print testing**, torque qualification, universal-fit guarantees or full continuous collision proofs. No physical print has been tested; fit, friction and retention need a real calibration/assembly trial.
