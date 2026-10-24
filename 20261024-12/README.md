# Peel Cadence

A browser-based parametric **physical TPU snap-strip fidget**. Press four yielding sockets over chamfered mushroom studs, then peel the end tab upward to release them sequentially. This is not a sliding zipper, fixed-fixed pluck comb, axial bead passage or a game. Two separate support-conscious prints; no purchased hardware. **No physical print, snap force, retention or fatigue tests have been performed.**

## Run / publish

React + Vite. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Individual-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public deployment uses the root monorepo `npm run predeploy` / `npm run deploy`, not individual app deployment. Base is `/daily-app2/20261024-12/`.

## Modeling and interface

Original warm model-first studio direction informed by https://vaseverse.org/ (public reference fetched during creation): large live 3D canvas, compact tabbed rail, quiet ivory/clay palette, real preset thumbnails, persistent export and phone collapsible controls. No reference branding, assets, source or text copied. Local modeling/import infrastructure is reused from the preceding Daily Object Lab studios; this app's sequential elastic snap mechanism is new.

Controls update actual Manifold CSG geometry in a worker. Exact final triangle data drives both Three.js preview and binary STL export. The default **print layout** keeps parts at least 8 mm apart; **working preview** shows the socket strip seated around the narrower necks below the heads with 0.2 mm axial clearance, NOT a deformation simulation or interpenetrating assembled solid. Click a body to select/highlight it. Orbit, touch orbit/pinch, zoom and reset/fit are available. A 10 mm grid and final export X/Y/Z dimensions establish scale. Colours are preview-only; STL has no colour data.

Three distinct valid presets: Soft Start (light interference/thin sockets), Peel Cadence (balanced), Deep Hold (larger, firmer sockets). Variations sample bounded dimensions. Undo/redo stores up to 35 snapshots. Save/Open JSON includes bounded local source payloads: normalized image PNG plus conversion pixels, or verified STL mesh. Missing image payloads are explicitly rejected with reattachment guidance, never silently restored. JSON is ≤2 MB.

## Units and parameter ranges

All lengths are **millimeters**, rotation degrees. Strip width 14–22; station pitch 12–18; stud neck diameter 3–4; radial snap interference 0.15–0.35; socket strip thickness 1.2–1.8; palm dimple depth 0–0.6. Four stations. Stud-strip floor 2.4; protected relief-well floor 1.6; head radius = neck radius +0.9; hole radius = head radius − interference. Lower head chamfer: 0.9 mm rise / 0.9 mm radial growth. Crown chamfer: 1 mm rise. Strip ends have 3 mm comfort radii.

Socket holes clear seated necks by ≥0.55 mm radially, while larger heads intentionally interfere during elastic passage. Minimum material outside a socket is >4 mm; adjacent heads have ≥6 mm separation. The socket seats at base top +0.2, beneath the flaring heads; the accepted thickness range leaves ≥0.4 mm below the start of the flare. The plain trailing tab permits sequential peeling. No rigid collision-free insertion is claimed: TPU must stretch. Gaps and retention are geometry checks, not force/strength predictions.

## Image import: PNG and JPEG

File picker works on phone/desktop; desktop drag-and-drop is supported. Files: 16 bytes–2 MB; actual PNG/JPEG headers required; ≤12 megapixels, ≤6,000 px per side, verified before decoding. Source preview and exact conversion grid are shown. Synthetic included `mark.png` and `waves.jpg` are original test graphics, no third-party assets or attribution required.

Images become a **20×20 triangulated height map** over a solid 0.4 mm backing. Canvas composites transparency onto white, then luminance is 0.2126R+0.7152G+0.0722B. Threshold mode raises dark samples below threshold (1–254); grayscale relief raises `(1−luminance/255) × depth`. Depth is 0.4–3 mm. Triangles interpolate the bounded sample grid; this is **2D-to-relief / raised-silhouette conversion, not full 3D reconstruction from a photo**. Fit/contain, fill/crop, ±25% X/Y crop shifts, physical footprint, rotation and placement are editable. The backing is sunk 0.15 mm into the palm floor and robustly unioned into it, with no internal shells. Empty white relief is rejected. Replacing/removing imports and resetting conversion/transforms are supported.

## STL import: ASCII and binary

Synthetic `wedge-ascii.stl` and `gem-binary.stl` are original flat-bottom convex solids. Maximum 2 MB / 1,500 triangles; each source dimension 0.2–250 mm. Parser checks complete facets/length, finite coordinates, nondegenerate triangles, welded closed edges (1e-5 mm), opposing neighbor winding, one connected component, positive volume, and triangle intersection. It deliberately accepts **only convex, broad-flat-bottom, support-free grips**: no hollow/open/nonmanifold meshes, concavities, overhangs, tilt, touching shells or automatic repair. The flat bottom must cover ≥25% of source XY bounding footprint; all XY projections must remain inside its bottom hull. Errors explain how to re-export from a modeler.

STL has **no unit metadata**: the user must explicitly confirm millimeters before export unlocks. Original source dimensions, triangle count and source preview are visible. XY is scaled proportionally to a 4–7 mm footprint; Z is independently scaled to a 0.6–5 mm grip height. Rotate around Z ±180°, center/reset and place X ±1.5 / Y ±2 mm. Fitted XY minimum span is 1.2 mm. All vertices must remain within the 6.5 mm palm safe radius; otherwise export is disabled. Transformed mesh is sunk 0.15 mm into the well and exact-CSG unioned into the stationary palm landing. Final integration must be one connected closed solid; it never affects stud roots or socket geometry. The nearest stud root remains ≥11.5 mm from that safe region. Changed image pixels, relief settings, source mesh, scale and placement change exported STL, not merely the display.

## Export and privacy

Primary Download STL stays reachable. Export both separate bodies in print layout, either individual part, or ZIP containing both binary STLs plus assembly guidance. Filenames include product, source type, millimeter settings and selection. Model generation validates final topology before unlocking export, and disables downloads while edits/imports are pending or invalid. No API key, server, CDN runtime dependency, paid service or upload. All user files are decoded/processed locally; save explicitly downloads their bounded portable data. Personal inputs are not written to the repo. Dependencies: React/React DOM, Vite/plugin-react, Three.js, manifold-3d (bundled WASM and worker), fflate; gh-pages for publishing; Playwright for validation. Synthetic samples only are bundled.

## Printing / calibration

TPU 95A starting recommendation. Print both flat backs on bed, studs upward. Rounded strip ends and 45° lower head chamfers aim for support-conscious printing; inspect slicer and add removable support if necessary. Start 0.4 mm nozzle / 0.2 mm layers, inspect thin socket toolpaths. Do not use brittle PLA for elastic snapping. Soft Start is a full-size calibration specimen: test **one station** before pressing all four. Decrease interference and socket thickness if tight, and stop for whitening, tears or permanent set. Printer, extrusion, material and temperature affect fit: no universal tolerance or predicted snap force. Align holes, press gently one at a time, then peel from the plain socket end tab. No assembly hardware. Keep small parts and pinch points away from children.

## Validation

`npm test` parses actual exported binary STL independently: finite vertices/normals, nonzero triangle areas, normalized outward normals, positive volume per connected component, closed welded-edge incidence exactly two with opposing directions, and millimeter bounds. It runs all 64 endpoint combinations, min/default/max, all presets, deterministic variations, and threshold/height-map/ASCII/binary imports across representative designs. Analytic mechanical checks verify neck clearance, intended snap interference, socket wall, head spacing, axial seating, 45° chamfers, isolation and layout gap. Independent exact CSG tests show separated print/export, exploded alignment and seated preview, nonintersecting seated necks, released socket above heads and unchanged geometry outside import region. Elastic passage is intentionally interfering; force and material simulation are not performed.

`browser-test.cjs`, `extra-browser.cjs`, `mobile-sheet.cjs` exercise actual file inputs/downloads, PNG/JPEG/ASCII/binary workflows, pixel/threshold/depth/scale/placement changes, invalid/truncated/oversized/open/nonmanifold/concave files, empty relief, NaN and unsafe transforms, replace/remove/reset, all presets, variations, undo/redo, portable save/open, both individual parts, ZIP, drag/drop, touch orbit/pinch, preview/export fingerprint equality, colours, 320/390 px layouts, all tabs and reachable fixed export. Reports and screenshots are checked in. These computational and browser checks are distinct from physical print testing.
