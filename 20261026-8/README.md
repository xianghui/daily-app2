# Halo Sway

A local browser maker studio for a physical, hardware-free **guided nutation fidget**. Gently tip a loose annular thumb disc, circle its rim so the contact edge travels around a flat stage, let it settle and repeat. Two separately printable solids: palm/stage/post and thumb halo. The upright post is a radial guard, not a pivot bearing. Unlike the gallery’s captive bearing rings, single-axis rollers and spinning tops, this design uses **tilted annular edge contact on a flat stage** with an oversized central guide bore.

The halo is **loose, removable and not captive**. There is no retaining cap or snap fit. No sustained precession, spontaneous reversal or spin time is promised. The preview is geometric, not a gravity/friction simulation. No physical print or performance test has been performed.

## Run and dependencies

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. The app includes exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`; the published monorepo uses the **root** predeploy/deploy flow. Vite base `/daily-app2/20261026-8/`.

React + Vite, Three.js/OrbitControls, Manifold WASM booleans in a bundled Web Worker, fflate ZIP, locally bundled Fontsource Fredoka/Rubik. No CDN imports, remote generation, API keys or paid services. React/Three.js/Vite/fflate MIT; Manifold Apache-2.0; fonts SIL OFL. Synthetic fixtures in `public/samples/` were authored for these studios, not personal uploads. The previous daily studio’s local UI/import/export infrastructure was reused; halo/stage construction, placements and mechanism tests are new. The Keycap Studio reference and archived gallery were inspected read-only, not modified or deployed.

## Parameter ranges / millimeters

| Parameter | Range |
| --- | --- |
| Palm diameter | 22–28 mm |
| Rocking stage diameter | 36–44 mm |
| Halo outer radius | 11–14 mm |
| Bore radial clearance | 1.2–2.0 mm |
| Halo thickness | 2.4–3.6 mm |
| Palm dimple depth | 0–0.6 mm |

Round, hexagonal and oval palm shapes; **Gentle Wobble**, **Halo Sway** and **Wide Halo** presets with actual model thumbnails. Bounded variations, reset, undo/redo, named local designs, portable JSON and saved light/dark theme. Live X/Y/Z dimensions reflect the actual selected export or separated print plate.

The stage and bridge floor is 5 mm thick. Its center is `palmDiameter / 2 + stageDiameter / 2 + 8` mm from the palm origin. A 2.5 mm-radius post rises 18 mm above the stage. The ring bore radius is `2.5 + clearance`. Ring/stage contact is intentionally loose, without interference or a retaining lip. The stage edge margin is at least 4 mm and the import safe zone is over 16 mm from the halo’s nominal envelope. Minimum engraved palm floor is 3.6 mm; ring radial wall is at least 6.5 mm. The print layout keeps parts separated by at least 8 mm in Y.

### Preview / mechanical envelope

The **Nutation sweep** control illustrates 0–20° tilt plus a full azimuth sweep, not time or simulated dynamics. A Y tilt followed by Z azimuth is applied to the exact final ring vertices; the half-thickness offset keeps the bore’s midplane centered on the post. The lowest transformed vertex is placed 0.001 mm above the stage, a labeled numerical preview separation. Isolated palm/halo, assembled wobble, exploded, see-through and print-plate views are provided. Poses never affect the bed-flat export.

An independent conservative post envelope requires bore radius greater than `postRadius / cos(20°) + haloThickness / 2 × tan(20°)`. The worst-case supported combination retains over 0.35 mm numerical radial margin. Actual Manifold intersection sweeps independently check the faceted ring against the entire base and post through 33 representative poses, plus vertical release and print-plate separation. No physical friction, fatigue, force, retention or wear inference is made from these checks.

## Image → real solid geometry

PNG, JPEG and safe simple SVG are supported. File-picker works on desktop/phone; desktop drop accepts one local file. Source and checkerboard cutout previews are shown. Synthetic PNG/JPEG/SVG sample buttons and downloads are included.

Images must be 16 bytes–2 MB, at most 12 megapixels and 6,000 pixels per side. Content headers and dimensions are checked before decode. Images are normalized to at most 500 px; a bounded **20 × 20** luminance grid is generated after fit/cover crop and ±25% crop shift. Transparent pixels composite onto the chosen light/dark background. Light-background mode uses luminance; dark-background mode inverts it. Threshold 1–254 chooses dark pixels, or grayscale maps darkness to height. Depth 0.4–3 mm raised, or 0.4–0.6 mm engraved. Every cell is triangulated into one closed, backed height field and boolean-unioned/subtracted at the recessed stationary palm landing. White holes remain unraised/unengraved above the solid backing. This is **sampled 2D-to-relief conversion**, not exact vector tracing or reconstruction of a full 3D object from one photo. Empty silhouettes fail recoverably.

SVG supports filled simple shapes/paths (up to 2,000 elements), rasterized locally at 256 px with fill holes preserved. Scripts, external resources, effects, embedded images and SVG text are rejected; outline text first. Text and six searchable bundled marks use the same real height-map geometry. They are not preview textures.

Physical import footprint 4–7 mm, Z rotation ±180°, X shift ±1.5 mm, Y shift ±2 mm. Final vertices must stay within a 6.5 mm-radius palm keep-out well. Artwork never obstructs the rocking stage. Transforms, conversion depth/threshold, replace/remove and reset all change the current geometry or restore the default.

## STL → integrated grip

Both **binary and complete ASCII STL** are parsed locally in the worker. Maximum 2 MB, 1,500 triangles; each source dimension 0.2–250 mm. Explicit confirmation of **millimeter source coordinates** is required because STL has no unit metadata. Select Z up, Y up or −Z up *before attaching*. Source dimensions, format, triangle count and a separate source mesh preview are shown. Changing axis clears the asset and requests reattachment.

The supported contract is intentionally narrow: one closed, connected, consistently outward-wound **convex**, non-self-intersecting solid with a broad flat bed footprint (at least 25% of its XY bounding area) containing all projected vertices. Open/nonmanifold, inward, disconnected, concave, overhanging, degenerate, excessive or malformed geometry is rejected with actionable guidance; **there is no automatic repair or convex-hull replacement**.

XY scales proportionally to a 4–7 mm footprint, Z independently to a 0.6–5 mm grip height. Rotation and XY placement are adjustable. The actual imported mesh is boolean-unioned with the solid palm, with 0.15 mm bed overlap. Only one connected closed result is accepted. The grip's scaled XY dimensions must each be at least 1.2 mm, its vertices must stay inside the safe well, and the whole mechanism retains its original clearances. This is a real grip integration, not re-export of an unchanged source file.

## Local design state and privacy

All personal input is processed locally in this browser. No uploads, external calls or repository storage. JSON and named local designs contain bounded normalized PNG data and/or the bounded original oriented mesh arrays, not unusable file paths. Imported PNG payloads missing from JSON explicitly request reattachment. JSON is limited to 2 MB; image payloads to 1.8 million data-URL characters and 250,000 decoded pixels. Restored STL payloads are reparsed and revalidated. Named designs keep six entries in browser storage; history keeps 35 bounded snapshots. Light/dark preference is saved locally.

Heavy CSG and STL validation run in a bundled worker with bundled WASM. Geometry edits debounce 100 ms; monotonic request IDs and exact current-state keys prevent stale export. Conversion/parse failures disable all exports, even when the last valid model remains visible. Worker load failure shows a reload instruction and blocks export. Preview, binary STL and ZIP all use the identical current valid model. Preview colours are not contained in STL. No fake 3MF export is offered.

## Export / printing / calibration

One-click binary STL per part or the separated print plate, plus direct part buttons and Everything ZIP with both STLs and `ASSEMBLY.txt`. Preview/export share the same current valid checked result. STL stores no colours or unit metadata. No fake 3MF.

Print PLA/PETG, stage underside down and halo flat annular face down, as exported. No supports or hardware intended. Suggested starting point: 0.4 mm nozzle, 0.16–0.20 mm layers, 3+ walls, 20–35% infill. Clear strings from bore and post; smooth any elephant’s foot on the annulus. Lower the halo over the post, gently tip it and guide your thumb around the rim; let it settle or lift it straight up to reset. Do not force a binding tilt. The loose part is not suitable for young children.

Use **Gentle Wobble** first, or a slicer-cut 18 mm-diameter central stage/post segment plus the whole halo as a calibration coupon. The 1.2–2.0 mm radial clearance intentionally permits tilt and is not an ordinary axle-bearing clearance. Printer, material and layer lines affect motion; no universal tolerance or wobble duration is claimed. Personalization never changes the contact plane or bore.

## Reproducible computational validation

- `npm test`: independent final binary-STL checks: exact file length, finite coordinates, stored unit normals, nondegenerate triangles, 1e-5 mm welded edges with exactly two opposite-directed faces, adjacency and positive volume for every connected component, Euler topology and expected millimeter bounds. Includes every intended part and float32-translated print plate, 68 default/preset/parameter-corner cases and 30 image/STL-derived cases; independent CSG checks the complete illustrated nutation sweep, upright removal, stage margins and import isolation.
- `node serve-production.cjs`: serve the built bundle at its real base prefix on port 5328. Run `node browser-test.cjs`, `node feature-test.cjs`, `node additional-test.cjs`, `node hole-test.cjs`, `node interaction-test.cjs`, `node stale-import-test.cjs`. Playwright exercises actual PNG/JPEG/ASCII/binary file selection and downloads, pixel/threshold/depth and mesh-transform changes, JSON regenerated fingerprint equality, independent STL checks, part exports, ZIP contents, malformed/open/nonmanifold/unsupported input recovery, touch orbit/pinch and imports/downloads at 320/390 px, presets, SVG holes, text/icons, undo/redo, named saves, theme, focus, collapsible sections, stale-result protection and worker failure/reload.
- Gallery validation compiles all inline scripts, preserves prior entries exactly and verifies rendering. Root deployment staging is checked before publication.

See `VALIDATION.md` and JSON reports for actual results. **Computational validation is not physical print testing.** No print, nutation performance, force, impact, wear or fatigue test has been performed.
