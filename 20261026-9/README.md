# Tangent Turn

A browser-based parametric STL studio for a **one-piece tangential-ligament squeeze-to-twist fidget**. Four same-handed bending ligaments join a rigid center hub to four outer thumb pads. Gently squeeze opposite pads while lightly guiding the other pair: bending couples radial pad movement to a small hub turn, then elastic return. This is not a free spinner, a snap-clicker, a pinned linkage or a spiral torsion spring.

**TPU 95A only as the starting flexible material.** No physical print, measured rotation, force, fatigue or durability testing has been performed. The preview is exact **undeformed rest geometry**, not elastic simulation. Response depends on material, printing and how the pads are held; no turn angle or safe fatigue life is guaranteed.

## Local development and dependencies

Node 22.12+, `npm install`, `npm run dev`; `npm test` runs computational mesh/mechanism checks. `npm run predeploy` builds the app. Exact per-app deployment scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Base `/daily-app2/20261026-9/`; publishing the combined site uses the repository-root deployment, not individual-app deployment.

React/Vite, Three.js + OrbitControls, Manifold WASM CSG in a bundled Web Worker, fflate ZIP and locally bundled Fredoka/Rubik fonts. No CDN, server generation, remote API, paid service or API key. Runtime dependencies bundle locally. MIT for React/Three/Vite/fflate, Apache-2.0 for Manifold, SIL OFL for fonts.

The Keycap Studio reference was inspected read-only for the left studio rail, tactile controls, image checkerboard, imported-model editor and worker/export patterns. Generic UI/import/export infrastructure from the earlier daily studio is reused; the mechanism, construction and mechanical checks are new. The archived gallery and reference project were not changed. Bundled sample assets are synthetic fixtures, not personal uploads.

## Controls, presets and units

All linear dimensions are **millimeters**. The three actual geometry presets are **Soft Start**, **Tangent Turn** and **Firm Touch**, with live model thumbnails. Round, hexagonal and oval outer thumb pads alter exported geometry. Numeric inputs pair with sliders; variations stay bounded. Reset, undo/redo, named local designs, portable JSON, saved dark theme and preview-only colors are included.

| Parameter | Supported range |
| --- | --- |
| Rigid hub diameter | 22–28 mm |
| Outer pad center radius | 30–38 mm |
| Tangential ligament width | 1.2–1.8 mm |
| Thumb-pad dish depth | 0.4–1.2 mm |
| Flexible sheet thickness | 2.4–3.2 mm |
| Hub dimple depth | 0–0.6 mm |

Hub/pads are 5 mm thick. The central decoration well is 0.8 mm deep, radius 7.5 mm, with an import keep-in radius of 6.5 mm. The pad dishes leave at least 3.8 mm floor; maximum engraving leaves at least 3.6 mm center floor. Each arm centerline is tangent to a circle 0.6 mm inside the hub radius; its rounded root and outer end are solid-unioned into the rigid hub and pads. All four ligaments have the same handedness. The final body is one connected manifold solid, not overlapping shells. Gaps beside the ligaments remain open.

The computational mechanism guard uses a conservative free beam length (subtracting a 7.1 mm pad envelope and rigid-root intersection), which stays above 13 mm. A small-deflection bending estimate `3 × webWidth × 1 mm / (2 × freeLength²)` stays below 2% at the 1 mm calibration displacement. **This is a rough beam estimate, not FEA, a measured material limit, or a prediction of rotation/force.** Never use it to justify forced travel. There are no loose moving joints or retention fits; the continuous printed ligaments retain every pad.

## Image → real printable relief

Choose/replace a PNG, JPEG or simple SVG, or drop one desktop file. Source image and actual sampled checkerboard cutout previews are provided. Try the bundled `mark.png`, `waves.jpg` and `ring.svg` without personal uploads.

Limits: 16 bytes–2 MB; PNG/JPEG at most 12 MP and 6,000 px per side. Verify content signature and dimensions before decode. Normalize to at most 500 px, then sample a **20 × 20** luminance grid after contain/cover crop and ±25% crop shifts. Light-background mode uses luminance, dark-background mode inverts it; transparent input composites onto the selected background. Threshold 1–254 produces a silhouette relief; grayscale maps darkness to continuous sampled height. Every grid cell becomes two triangles in a closed backed height field, solid-unioned or subtracted at the central well.

Raised depth 0.4–3 mm; engraved depth 0.4–0.6 mm. White holes remain unraised/unengraved over the continuous backing, verified with solid-volume probes. It is **sampled 2D-to-relief conversion**, not exact outline tracing and not automatic reconstruction of a full 3D object from one photograph. Empty results block export. The preview is not a texture substituted for printable geometry.

SVG supports simple filled paths/shapes, at most 2,000 elements, rasterized locally to 256 px. Text/effects/scripts/external resources/embedded images are rejected; outline text first. Text marks and six searchable bundled icons use the same real relief pipeline. Footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm, Y offset ±2 mm. Every resulting vertex must remain inside the 6.5 mm safe circle; invalid placement blocks export. Artwork cannot bridge or obstruct flexible ligaments. Replace/remove/reset restore defaults or change the actual generated solid.

## STL → real integrated grip

Complete ASCII and binary `.stl` are parsed locally in the worker. Limits: 2 MB, 1,500 triangles, each source dimension 0.2–250 mm. Select Z up, Y up or −Z up before attaching; source dimensions, triangle count, format and a separate source preview are shown. Changing up-axis clears the asset and asks for reattachment. **Explicitly confirm source coordinates are millimeters**, since STL stores no units.

Supported geometry is one connected, closed, consistently outward-wound, convex, non-self-intersecting solid, with a broad flat bottom (at least 25% of bounding footprint) containing all projected vertices. Open/nonmanifold, inward, disconnected, concave, overhanging, degenerate, too-large and malformed meshes are rejected with actionable guidance. No automatic repair, convex-hull substitution or silent discarded concavities.

The imported original mesh is scaled proportionally in XY to a 4–7 mm footprint, independently in Z to 0.6–5 mm height, rotated/placed in the rigid center, and **boolean-unioned** with 0.15 mm overlap. Minimum scaled XY extent is 1.2 mm on both axes. Only a single connected closed resulting body is accepted. The original mesh shape and transformations visibly/measurably survive export; it is not merely displayed or re-exported unchanged. Synthetic ASCII wedge and binary gem samples are bundled.

## Current state, portable saves and privacy

All personal input is processed locally in the browser. No uploads, external calls, or user input files saved to this repository. JSON/local named designs include bounded normalized PNG data and/or original oriented mesh arrays, not unusable file paths. Restored mesh arrays are reparsed and revalidated. Missing image payload explicitly requests reattachment. Limits: JSON 2 MB, PNG data URL 1.8 million characters and 250,000 decoded pixels. Six named designs and 35 history states are bounded in local storage/memory.

Heavy CSG and STL parsing run in a Web Worker with bundled WASM. 100 ms debounce, generation IDs, async import guards and exact current-state keys prevent stale exports. Invalid edits, failed imports, conversion, worker errors and loading disable all export buttons even while a last-valid preview remains visible. Worker load failure requests a reload. Preview, STL and ZIP use the same valid generated solid and parameters; downloaded fingerprints are compared to preview signatures in tests.

## Views and exports

Interactive perspective, top and underside camera views, orbit/zoom/fit, see-through and touch pinch. These are alternate views of the same single body; no fake exploded assembly or simulated flex. Actual selected STL dimensions X/Y/Z are shown. Binary STL whole-body download, direct body STL, and ZIP with STL + print notes. No false 3MF or STL color claim. All exports have broad flat underside at Z=0. STL is unitless: use millimeters in the slicer.

## Print / material / calibration

One part, no assembly or hardware. Print underside down as exported, TPU 95A, 0.4 mm nozzle, 0.16–0.20 mm layers, 3+ walls, 100% infill and slow TPU profile. No supports intended. Clear strings from all four arm gaps. **Do not use rigid PLA for flexible use.** Keep the web width 1.2–1.8 mm and thickness 2.4–3.2 mm; do not scale down in the slicer.

Print **Soft Start** first as a full-size material/line-width calibration coupon. Check every ligament is continuous. Start with 0.5 mm inward pad movement, release, then cautiously try at most 1 mm. Stop if material whitens, delaminates, takes a permanent set or tears. Never force a hard fold/twist. Material, layer adhesion and settings govern return and fatigue; no universal force, travel, tolerance or lifetime is promised.

## Reproducible verification

- `npm test`: 68 defaults/preset/all parameter-corner cases and 30 imported-output cases, per-body and whole export. Independent binary-STL length, finite coordinates, nondegenerate faces, normalized outward normals, positive component volume, 1e-5 mm welded edges with exactly two opposite-directed incident faces, topology and expected millimeter bounds.
- Mechanism checks are separate: four continuous arm probes, eight open-side clearance probes, conservative beam length/strain estimate, rigid center floor and root embed, and CSG differences verifying every import stays clear of the flexible region. These do **not** simulate deformed bodies or certify flexible performance.
- `node serve-production.cjs`, then `node browser-test.cjs`, `node feature-test.cjs`, `node additional-test.cjs`, `node hole-test.cjs`, `node interaction-test.cjs`, `node stale-import-test.cjs`: real production-bundle file-picker PNG/JPEG/ASCII/binary uploads, actual downloads parsed/rebuilt independently, image pixel/threshold/depth and mesh transform changes, failures/reset, holes, portable JSON, named designs, undo/redo, ZIP contents, presets, text/icons, themes, keyboard focus, sections, desktop/phone layout, touch orbit/pinch and worker failure/recovery.

See saved validation reports and screenshots. **Computational geometry validation is not a physical print test.**
