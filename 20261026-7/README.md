# Cycloid Settle

A local browser maker studio for a physical, hardware-free **cycloidal gravity-runway fidget**. Thumb-roll the flanged spool uphill, release it for a descending roll, catch it before the open end, then lift or roll back and repeat. Two separately printable solid parts. This is a genuinely new mechanism relative to the existing paired ellipse, Reuleaux, linkage, cam and cone generators: a constant-radius roller follows a truncated cycloidal *height profile*. It is not a game or a static STL download.

The roller is **loose and removable, not captive**. Flanges straddle the rail for lateral guidance; there are no end stops or overhead retention. Use a soft mat. The vertically scaled, truncated curve is not advertised as a precision brachistochrone or a timed physics demonstration.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`. `npm run deploy` is available for per-app tooling; the published monorepo uses the **root** predeploy/deploy flow. Vite base: `/daily-app2/20261026-7/`.

React + Vite, Three.js/OrbitControls, Manifold WASM solid booleans in a Web Worker, fflate ZIP, locally bundled Fontsource Fredoka/Rubik fonts. No remote generation APIs, CDN imports, API keys or paid dependencies. Fontsource fonts are SIL OFL; Three.js/React/Vite/fflate are MIT; Manifold is Apache-2.0. Synthetic fixtures in `public/samples/` were authored for these studios and contain no personal files. Existing local studio plumbing was reused; the runway, spool, placements, fit checks and mechanism-specific tests are new. The Keycap Studio reference and archived gallery were read-only.

## Dimensions and presets

All physical values are **millimeters**, unless marked degrees or image threshold/crop percent. The display reports the actual exported X/Y/Z bounds for the selected part or separated print plate.

| Parameter | Supported range |
| --- | --- |
| Palm diameter | 22–28 mm |
| Runway length | 44–60 mm |
| Runway descent | 8–12 mm |
| Flange side clearance, per side | 0.25–0.60 mm |
| Roller neck radius | 4–5 mm |
| Palm dimple depth | 0–0.60 mm |

Round, hexagonal and oval palm silhouettes; Gentle Descent, Cycloid Settle and Short Swoop presets have live mesh thumbnails. Bounded random variations, reset, undo/redo, named local designs and portable JSON are implemented. The rail is 6 mm wide with a 5 mm minimum rail floor (the recessed engraved palm floor stays at least 3.6 mm). Spool flange projection is 1.8 mm; the upper flare is 45 degrees. Its neck width is `6 + 2 × side clearance`.

The profile samples 129 points from `t=0.9` to `π`:

- `x = length × (t − sin(t) − 0.9 + sin(0.9)) / (π − 0.9 + sin(0.9))`
- `z = 5 + descent × (1 + cos(t)) / (1 + cos(0.9))`

The solid beneath this polyline is extruded across the rail width and boolean-unioned into the palm. The spool is a union of closed cylinders and conical flanges, not overlapping unmerged shells. Assembled placement starts at an outward tangent normal and evaluates the upper circle-offset envelope of every segment/vertex to prevent neighboring-facet clipping. It adds 0.001 mm numerical separation in the preview only. It is a geometric pose, **not a friction/gravity simulation**. Isolated-part, exploded, on-runway, see-through and print-plate views are provided. Export always uses separate bed-flat print orientations.

## Image → real solid geometry

PNG, JPEG and safe simple SVG are supported. File-picker works on desktop/phone; desktop drop accepts one local file. Source and checkerboard cutout previews are shown. Synthetic PNG/JPEG/SVG sample buttons and downloads are included.

Images must be 16 bytes–2 MB, at most 12 megapixels and 6,000 pixels per side. Content headers and dimensions are checked before decode. Images are normalized to at most 500 px; a bounded **20 × 20** luminance grid is generated after fit/cover crop and ±25% crop shift. Transparent pixels composite onto the chosen light/dark background. Light-background mode uses luminance; dark-background mode inverts it. Threshold 1–254 chooses dark pixels, or grayscale maps darkness to height. Depth 0.4–3 mm raised, or 0.4–0.6 mm engraved. Every cell is triangulated into one closed, backed height field and boolean-unioned/subtracted at the recessed stationary palm landing. White holes remain unraised/unengraved above the solid backing. This is **sampled 2D-to-relief conversion**, not exact vector tracing or reconstruction of a full 3D object from one photo. Empty silhouettes fail recoverably.

SVG supports filled simple shapes/paths (up to 2,000 elements), rasterized locally at 256 px with fill holes preserved. Scripts, external resources, effects, embedded images and SVG text are rejected; outline text first. Text and six searchable bundled marks use the same real height-map geometry. They are not preview textures.

Physical import footprint 4–7 mm, Z rotation ±180°, X shift ±1.5 mm, Y shift ±2 mm. Final vertices must stay within a 6.5 mm-radius palm keep-out well. Artwork never obstructs the runway. Transforms, conversion depth/threshold, replace/remove and reset all change the current geometry or restore the default.

## STL → integrated grip

Both **binary and complete ASCII STL** are parsed locally in the worker. Maximum 2 MB, 1,500 triangles; each source dimension 0.2–250 mm. Explicit confirmation of **millimeter source coordinates** is required because STL has no unit metadata. Select Z up, Y up or −Z up *before attaching*. Source dimensions, format, triangle count and a separate source mesh preview are shown. Changing axis clears the asset and requests reattachment.

The supported contract is intentionally narrow: one closed, connected, consistently outward-wound **convex**, non-self-intersecting solid with a broad flat bed footprint (at least 25% of its XY bounding area) containing all projected vertices. Open/nonmanifold, inward, disconnected, concave, overhanging, degenerate, excessive or malformed geometry is rejected with actionable guidance; **there is no automatic repair or convex-hull replacement**.

XY scales proportionally to a 4–7 mm footprint, Z independently to a 0.6–5 mm grip height. Rotation and XY placement are adjustable. The actual imported mesh is boolean-unioned with the solid palm, with 0.15 mm bed overlap. Only one connected closed result is accepted. The grip's scaled XY dimensions must each be at least 1.2 mm, its vertices must stay inside the safe well, and the whole mechanism retains its original clearances. This is a real grip integration, not re-export of an unchanged source file.

## Local design state and privacy

All personal input is processed locally in this browser. No uploads, external calls or repository storage. JSON and named local designs contain bounded normalized PNG data and/or the bounded original oriented mesh arrays, not unusable file paths. Imported PNG payloads missing from JSON explicitly request reattachment. JSON is limited to 2 MB; image payloads to 1.8 million data-URL characters and 250,000 decoded pixels. Restored STL payloads are reparsed and revalidated. Named designs keep six entries in browser storage; history keeps 35 bounded snapshots. Light/dark preference is saved locally.

Heavy CSG and STL validation run in a bundled worker with bundled WASM. Geometry edits debounce 100 ms; monotonic request IDs and exact current-state keys prevent stale export. Conversion/parse failures disable all exports, even when the last valid model remains visible. Worker load failure shows a reload instruction and blocks export. Preview, binary STL and ZIP all use the identical current valid model. Preview colours are not contained in STL. No fake 3MF export is offered.

## Export and printing

One-click binary STL for either part or the nonintersecting print plate; direct per-part buttons; Everything ZIP includes the two STLs and `ASSEMBLY.txt`. STL contains millimeter coordinates only, without material metadata.

Print both parts in PLA/PETG, runway underside flat and spool circular flange on the bed. Upper flare expands at 45°; no supports intended. Suggested starting setup: 0.4 mm nozzle, 0.16–0.20 mm layer height, 3+ walls, 20–35% infill. Clear loose strings and inspect the contact path. Lay the spool across the rail with the flanges on either side. It must turn freely and lift straight up; do not force a binding fit. Start with **Gentle Descent** and use a slicer cut of a 15 mm rail segment plus the spool as a calibration coupon. Side clearance is printer/material-dependent, not universal. Layer stair-stepping may require smoothing; roll speed is not guaranteed. Stop it before the end or use a soft mat and lift to reset. No magnets, bearings, fasteners, compliant material or other hardware required. Small removable parts are not suitable for young children.

## Reproducible validation

- `npm test`: independent final binary-STL checks for lengths, finite coordinates, stored normals, nonzero triangle area, 1e-5 mm welded-edge incidence and opposite neighbor directions, per-component positive volume, Euler topology and expected millimeter bounds. Every intended part and float32-translated print plate is checked. 68 default/preset/parameter-corner cases and 30 image/STL-derived cases, including import extrema; independent CSG collision samples cover the full rail, guide gap, vertical removal, plate separation and import keep-out.
- `node serve-production.cjs`: serve the **production** bundle at its real prefix, port 5318. In another terminal run `node browser-test.cjs`, `node feature-test.cjs`, `node additional-test.cjs`, `node hole-test.cjs`, `node interaction-test.cjs`, `node stale-import-test.cjs`. These use Playwright/Chromium and real file-picker uploads/downloads, including PNG/JPEG/ASCII/binary, pixel/threshold/depth/placement changes, geometry signatures matched against portable JSON rebuilds, per-part and unzipped ZIP validation, malformed/open/nonmanifold/unsupported inputs, phone uploads/downloads and touch orbit/pinch at 320/390 px, presets, legends, SVG holes, themes, accessibility focus, collapse, undo/redo, named/portable saves and worker failure recovery.
- Gallery validation compiles every inline script and preserves previous entries; root deployment stages and tests the combined site.

See `VALIDATION.md` and JSON reports for the results of this run. These are **computational geometry/browser/mechanism checks only**. No physical print, rolling performance, fatigue, impact, force, retention or wear test has been performed. A watertight STL is not proof of physical behavior.
