# Pascal & Align

A browser-based **four-part Pascal-theorem kit-card generator**, not a static STL viewer. Snip a real connected card, stand the engraved conic board in two bonded socket feet, and hold the separate slotted sighting rule over three collinear intersection wells. Circle radius and point asymmetry regenerate the six conic points, crossing hexagon sides, opposite-side intersections, tally labels, dashed Pascal line, board and rule. Different corner silhouettes change the solid outline.

## Run / publish

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. `npm run deploy` exists as requested for the individual app; public monorepo publication uses the **root** predeploy/deploy flow. Vite base is `/daily-app2/20261102-16/`. Generation runs locally in a debounced Web Worker using locally bundled Manifold WASM; React, Three.js/OrbitControls, fflate and Fontsource Fredoka/Rubik are bundled, with no CDN or paid/API service. UI uses the inspected Keycap Studio's 374px control rail, collapsible sections, paired range/numeric fields, saved theme, raised key buttons, checkerboard cutout, source viewer, current-result export gating and preview-first stacked phone layout. The reference project and old gallery remain read-only.

## Inspected STL reference / attribution

Local candidates were inspected first: Keycap Studio's `clicker_template2.stl` (three switch-cavity/stem pieces) and Weave's `diamond-link.stl` (8 mm-high interlocking link). Neither is a suitable flat sheet/slot/carrier reference; their actual mesh hashes, dimensions and rejection reasons are recorded. Project README instructions were inspected. No switch sockets or link mechanisms were imposed on this unrelated kit.

Structural reference: **Mike Kasberg, White Cat Kit Card**, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0** (see REFERENCE-LICENSE.txt). Download URL is in reference-analysis.json. The actual binary STL was downloaded and parsed during this run, not inferred from a listing or previous app. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820 × 178.020 × 3.190 mm assumed. STL has no unit metadata. Cross-sections at Z=.10, .50 and 1.59 mm were generated and inspected in `evidence/reference-sections.png`. The source has 27 edge-adjacent components including tiny defects and is not globally watertight. It is a **design reference, not an imported/automatically repaired base**.

Measured source details: main sheet planes Z=0/1.60 mm, four 4.50 × 1.700012 mm rectangular sockets, segmented carrier rails and low web Z planes .21/.22 mm. Our original reconstruction preserves 1.60 mm default sheet and 4.50 mm tongues; socket width is 4.50+clearance and socket depth is sheet+clearance. The **proposed**, printer-dependent total clearance .10–.35 mm is not a measured source tolerance. Webs are redesigned as stronger .4–.6 mm bed-aligned tabs, not claimed identical to source webs. The original artwork and raw source STL are **not redistributed**. `reference-measure.py` reproduces reference measurements with trimesh/numpy/matplotlib. `reference-analysis.json` maps measured dimensions to actual generator parameters and documents deviations.

This is a new mathematical/physical assembly, not a reskin of the existing logarithmic slide rule, visual-share decoder, pentomino tray or other gallery mechanism. Its distinct construction is a crossing hexagon on a conic, actual opposite-side intersection wells, collinear sight line, two socketed support feet and a hand-held through-slot checker. There is no moving mechanism, captive slider, snap lock or fake motion control.

## Parameters — millimeters unless stated

- Card envelope: width 180–230; height 150–190. Exact closed connected-card envelope and selected sheet thickness are checked.
- Circle radius 30–42; point asymmetry −8…+8 **degrees**. Three real presets have generated model thumbnails.
- Sheet 1.6–2.4; part spacing 3–5; tab width .8–1.4; tab thickness .4–.6. Sixteen actual Boolean-unioned tabs connect four distinct parts to a subdivided carrier. Snip positions are 1.6 mm outside part boundaries, clear of sockets and tongues.
- Two tongue widths 4.50; socket total clearance .10–.35 (not per side). Feet each 22×32; engagement equals selected sheet thickness. Both sockets need compatible adhesive after calibration.
- Sighting rule width 10, length 2×radius+10, through-slot width 1.20 and length 2×radius−4. It remains hand-held, shown beside the assembled stand; no captive retention is claimed.
- Theorem engravings are .3–.5 deep, lines ≥.45 wide. Imported art .4–.6 deep leaves ≥1 mm backing in its protected upper-right apron. Artwork cannot enter the conic or either foot interface.
- Import footprint 4–7, Z engraving depth .4–.6, rotation ±180°, X offset ±1.5, Y offset ±2; keep-in radius 6.5. Impossible settings explicitly block export instead of clipping/substituting the source.

## Image, SVG, text and icon workflow

File picker works on desktop/phone; single-file drag/drop supported. Actual PNG/JPEG header content is checked before decoding: ≤2 MB, ≤12 MP and ≤6,000 px per side. Sources normalize to ≤500 px. Simple SVG ≤2 MB/2,000 elements is checked, rejects scripts/external resources/text/effects, then rasterizes locally to 256px. Six original bundled filled SVG icons are searchable; text (up to 8 characters) uses local Rubik via canvas.

Conversion is explicitly **2D-to-engraved relief, not full 3D reconstruction from a photograph**. Fit/cover, ±25% crop offsets and light/transparent-background removal or dark-background inversion produce a 20×20 luminance grid. Threshold mode maps values below 1–254 to selected depth; grayscale mode maps (1−luminance/255)×depth. The grid becomes an outward closed triangulated height-field cutter with a flat floor; Manifold subtracts it from the board. Triangle interpolation is intentional, not exact vector outline tracing. Bright holes stay full-height solid inside engraved regions, independently checked with solid probes. Source and exact checkerboard cutout-grid previews are shown. All-white/empty silhouettes are rejected. Scale, Z rotation, XY placement and depth change actual exported geometry. Raised marks are deliberately unsupported to keep a flat sheet and safe backing. Replace/remove, reset conversion, reset transforms and built-in defaults are available.

## STL integration / units / supported geometry

Actual binary and ASCII STL files, ≤2 MB, ≤1,500 triangles, .2–250 mm on every axis. Parser verifies complete facets, finite coordinates, nondegenerate faces, 1e−5 mm welded opposite-directed edge pairs, one connected component, positive outward volume and no triangle self-intersection. This studio's deliberately bounded integration supports **one convex, closed, broad-flat-bottom solid**, no concavity, cavity, branches or overhangs; unsupported models get actionable errors and are not repaired or replaced by a hull. At least 25% bottom footprint and no projected overhang are required. This limitation is explicit in the UI.

Choose Z/Y/−Z up **before** attaching. Reorientation requests reattachment. Source dimensions/format and interactive source preview are shown. Explicit checkbox confirmation of millimeters is mandatory because STL has no units. XY scales proportionally to 4–7 mm footprint, Z independently to .4–.6 mm engraving depth, with displayed factors; rotate and place inside the protected apron. The exact parsed solid is Boolean-subtracted as an engraved personal mark, visibly and measurably changing the final board, not merely displayed or re-exported. No fused interfaces or overlapping unfused shells are exported. Transform reset returns the same signature; remove restores the original model.

## Saves, preview and export

Undo/redo bounded to 35 snapshots; up to six local named designs; portable JSON ≤2 MB contains bounded normalized image and mesh payloads. JSON restore revalidates STL and images. Missing image payload explicitly requires reattachment; paths are not pretended restored. Personal files remain in browser memory/local storage or user-chosen downloads, never uploaded or stored in this repository. Bundled synthetic mark/ring/waves/wedge/gem fixtures are for trying both import paths without personal files.

Assembled, exploded, real connected-card, de-tabbed print plate and every isolated part share the same final worker result; exploded positioning is illustrative only. Rotate/pinch/zoom, fit, top view, see-through board and preview-only color swatches work. Export orientation is always real bed-flat printable geometry, not the standing illustration. Export size in mm is shown. A current-state key, request IDs and conversion/import flags disable stale/invalid export even if the last-good preview remains visible. Worker failure displays an error and requires reload.

Binary STL per part, connected-card, four-part de-tabbed plate and Everything ZIP (all five STL files, numbered assembly instructions and current fits). STL contains **no colors**. No mislabeled 3MF is offered. Downloaded bytes are fingerprint-compared to UI geometry, and JSON can reproduce the same current solid in Node.

## Print / assembly

See `ASSEMBLY.txt` and the in-app numbered guide. PLA/PETG, .4 mm nozzle, .16–.20 layers, three walls, 100% mm. All parts bed-flat; no supports intended. First print a board/one foot to calibrate total clearance, then clip sixteen low tabs and file nubs. Align feet, lower board tongues vertically to the shoulders, bond BOTH sockets and cure. No external hardware; compatible adhesive and snips/file required. Hold the rule's slot against the front over all three intersection wells. Tally marks identify points 1–6. Paint recessed lines for contrast if desired. Not a precision-certified instrument or young-child toy; supervise tools and small cutoffs.

## Validation / limitations

`npm test` independently checks binary STL byte lengths, finite nondegenerate triangles, normalized normals matching winding, 1e−5mm welded oriented edges, positive volume per component, dimensions and component counts across presets, silhouettes, each scalar extreme, combined extremes and both imported-image/STL-derived solids. Boolean assembly checks cover pairwise zero overlap, vertical insertion, supported shoulders, true source-derived socket dimensions, card containment, accessible snip paths and five released components (four parts + carrier). Slices verify upper layers stay within bed footprints. Analytical construction checks verify points on the circle, opposite-side intersections, collinearity and sighting-slot coverage; a volume-derived centre-of-mass projection lies inside the feet's support polygon.

Browser scripts test actual file-picker imports/downloads on the production base path, transform/threshold/depth/pixel-content effects, source comparison, PNG/JPEG/ASCII/binary, all icons/text/SVG, invalid files/inputs, unit and axis handling, undo/redo, portable/local saves, real ZIP meshes, views, worker abort/recovery, immediate stale-result blocking, local-only requests, desktop layout and 320/390px phone usability including real touch orbit/pinch. Reports/screenshots are stored beside the app. `VALIDATION.md` records completed runs.

**No physical print, fit, adhesive-strength, stability, snipping-force, durability, legibility or educational-use test has been performed.** Geometric collinearity and collision checks are not evidence of physical accuracy, material behavior or force testing. Preview colors are not filament assignments.
