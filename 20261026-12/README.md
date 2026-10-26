# Cone Orbit

A browser-based parametric STL studio for a **single tapered roller that free-rolls in a circular orbit**. Roll, reverse, catch and lift to recenter on a flat circular runway. This is a virtual-apex conical rolling interaction, not the prior double-cone diverging-rail illusion, a constant-radius curved rail, or a browser game. The runway does not guide or force an orbit. Two hardware-free separate printable solids; the roller is deliberately loose, not captive.

## Run and dependencies

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`. Per-app scripts are present, but publication uses the ROOT monorepo predeploy/deploy flow. Base: `/daily-app2/20261026-12/`.

React + Vite, Three.js / OrbitControls, Manifold WASM boolean geometry in a bundled Web Worker, fflate ZIP, locally bundled Fontsource Fredoka/Rubik. No APIs, paid services, CDN imports or network generation. Fonts: SIL OFL; Manifold: Apache-2.0; other libraries MIT. Synthetic sample fixtures were authored for the local studios; no personal inputs are committed. Existing studio import/save/view plumbing was reused; conical geometry, placement and mechanism tests are new. Reference Keycap Studio and old gallery remained read-only.

## Parameters / millimeters

| Control | Range |
| --- | --- |
| Palm diameter | 22–28 mm |
| Cone axial height | 12–18 mm |
| Large radius | 5–7 mm |
| Small radius | 2–3 mm |
| Runway edge allowance | 2–4 mm |
| Palm dimple depth | 0–0.6 mm |

Round / hex / oval palm silhouettes. Wide Landing, Cone Orbit and Long Sweep presets have real model thumbnails; bounded variations and undo/redo are implemented. All values are mm except marked degrees, image threshold and crop percent. Final exported X/Y/Z bounds are displayed per part or plate.

For large radius R, small radius r and axial height h, half-angle alpha = atan((R-r)/h). Ideal outer / inner ground-contact radii are R/sin(alpha) and r/sin(alpha). The runway radius is the outer radius plus the edge allowance. The placed large-end center lies at horizontal radius R*cos(alpha)^2/sin(alpha), height 5+R*cos(alpha), with cone axis tilted toward the virtual apex. Preview adds 0.002 mm numerical separation and uses faceted solid geometry. It shows contact poses, **not dynamic rolling, friction, slip or guaranteed physical circularity**. The symmetric roller does not display an axial spin marker. Assembled, exploded, isolated runway/roller, see-through and print-plate views share the final mesh; export always uses bed-flat orientation, never visual overlaps.

No moving joints or bearing fits: edge allowance is a runway margin, not a universal mechanical tolerance. The loose roller is removable at any pose. Grip imports stay within 6.5 mm of the palm center, isolated by at least 22.5 mm from the runway edge. Minimum engraved palm floor 3.6 mm.

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

## Export / printing / calibration

Binary STL buttons for either part or the separated plate. Everything ZIP contains two actual STLs plus ASSEMBLY.txt; there is no mislabeled 3MF. The preview and every export share the exact current valid model. Personalization is solid-unioned/subtracted, not overlapping shells.

Print the runway underside down and cone large circular end down, exactly as exported. Both are support-free rigid PLA/PETG candidates with no hardware, magnets, bearings or flexures. Start with 0.4 mm nozzle, 0.16–0.20 mm layers, 3+ walls, 20–35% infill and 100% mm scale. Deburr the roller edges and smooth the contact runway as needed. Lay the cone on its sloping side; gently guide around its virtual apex, reverse, catch before the edge and lift to recenter. Use a soft mat. **Wide Landing** is the full-size calibration preset: print before adding art and assess rolling friction, surface smoothness and control on your own printer/material. No universal performance or rolling speed is promised. Small loose parts are not for children.

## Validation

`npm test` checks 68 default/preset/extreme cases and 30 imported-output cases. Every part and float32 plate: binary length, finite coordinates, nonzero triangle areas, unit normals matching winding, welded edge incidence at 1e-5 mm, opposite neighbor directions, per-component positive volume, Euler topology and mm bounds. Independent CSG checks sample rolling contact poses and vertical removal, runway coverage, plate separation and import isolation.

`npm run predeploy`, then `npm run test:browser` serves production at its true base and runs real file uploads/downloads, mesh/JSON-signature equivalence, image pixels/threshold/height changes, STL transforms, reset, invalid files, all presets, shapes, text and six icons, SVG holes, worker failure/reload, local/portable saves, ZIP contents, reduced motion, themes, focus, sections, 320/390 px layout and touch orbit/pinch. Reports and screenshots are stored here. Gallery scripts are compiled with new Function and all prior entries are preserved before root publication.

These are computational/browser checks only. **No physical print, rolling-friction, wear, fatigue, force or durability testing was performed.** A manifold mesh is not proof of successful tactile performance.
