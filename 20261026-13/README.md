# Catenary Calm

A local browser-based parametric **physical square-wheel rolling fidget studio**, built in React + Vite. Roll a square thumb wheel over its matched inverted-catenary arches, reverse, and lift to reset. Unlike a square on a flat desk, the ideal axle follows a constant-height path. Two individually printable closed solids; no axle, bearings, fasteners or magnets. The wheel is intentionally loose, not captive. Guide it by hand and catch at the open ends.

## Run and export

Node 22.12+; `npm install`, `npm run dev`. `npm run predeploy` builds the static production app. Per-app `deploy` uses gh-pages, but this collection is published using the **root monorepo** deploy flow. All worker code, Manifold WASM, Three.js, Fredoka/Rubik fonts and ZIP/export dependencies are bundled locally. No API keys, CDN generation imports or paid services.

Rotate / zoom / fit the live Three.js preview, choose print plate, assembled rolling stroke, exploded or either isolated part. The see-through control explains the road. Assembled poses are idealized preview-only positions with 0.01 mm clearance; exports use actual separated, bed-flat geometry. Download binary STL per part, a combined separated plate STL, or Everything STL + assembly-notes ZIP. STL stores neither units nor preview colours. Final X/Y/Z dimensions are millimeters and reflect the chosen export selection. Print at 100% scale.

## Controls and mechanical bounds

| Parameter | Range |
| --- | --- |
| Isolated palm diameter | 22–28 mm |
| Number of catenary arches | Integer 2–4, not a length |
| Square half-side `a` | 5–8 mm (10–16 mm square side) |
| Lateral road allowance each side | 2–4 mm |
| Wheel thickness | 3–5 mm |
| Palm dimples | 0–0.6 mm deep |
| Imported XY footprint | 4–7 mm |
| STL grip height | 0.6–5 mm |
| Imported rotation | −180° to 180° |
| Imported placement X / Y | ±1.5 / ±2 mm, further limited by the circular safe zone |

Round, hexagonal and oval palms; three real model-thumbnail presets; bounded variations; undo/redo; six local named designs; portable JSON save/open including bounded image and STL payloads. Missing image payloads explicitly request reattachment. SVG/text/icons reuse the same real geometric relief path. Minimum palm engraving floor is 3.6 mm, road floor is 5 mm. Imported geometry is confined to a 6.5 mm circular palm zone more than 20 mm from the rolling region.

### Matched road

Each arch has half-period `b = a asinh(1)` and profile `z = peak + a − a cosh(u/a)`, for `−b ≤ u ≤ b`. Neighboring arches meet in valleys; `peak = 5 + a(√2−1)` mm ensures a minimum 5 mm road. Each arch is a 96-segment polygonal approximation (bounded chord error under 0.003 mm). The square stands on a broad straight edge, tangent at `u = −a asinh(tan θ)`; its ideal axle height is `peak+a`. A quarter turn spans one arch. At valley junctions contact transitions between adjacent square faces. Preview restarts the equivalent square orientation at a face boundary; it is a pose guide, not a dynamic simulation.

## Image / text / icon / SVG workflow

PNG and JPEG are checked by content before decoding: 2 MB file limit, ≤12 MP, ≤6,000 px per side. A source preview is retained at ≤500 px. The user chooses contain/cover, crop shift ±25%, light-background removal or dark inversion, threshold 1–254, and threshold or grayscale conversion. The exact 20×20 sampled cutout appears on a checkerboard. Transparent pixels composite against the chosen background. This is **2D-to-height relief, not reconstruction of a 3D object from one photo** and not exact vector outline tracing.

A solid triangulated height-map backing is built from the grid: dark samples become 0.4–3 mm raised relief (or proportional grayscale heights); bright holes remain unraised. Adjacent samples have sloped linear transitions. Raised backing is sunk 0.4 mm into the palm floor and Manifold-unioned. Engraved style reflects the same surface and subtracts it, limited to 0.4–0.6 mm depth. Bright interior holes retain their original floor; no through-hole is implied. Empty conversion blocks export. Scaling, rotation, placement, threshold, depth and pixel content all change the exported mesh.

Simple SVG filled paths/shapes are sanitized (≤2,000 elements; no external resources, scripts, references or effects), rasterized locally to 256 px and converted by the same grid method; filled holes survive sampling. Text (up to eight characters, bundled Rubik) and six searchable original inline SVG icons also become relief. Very fine legends are not suitable for a 0.4 mm nozzle; use bold short marks.

## STL import integration

Both ASCII and binary STL, 2 MB, ≤1,500 triangles, dimensions 0.2–250 mm per axis. Source mesh preview and oriented source dimensions are shown. STL has **no unit metadata**: explicit millimeter confirmation gates integration. Choose Z / Y / upside-down up-axis before attachment; changing it clears the source and requests reattachment. Centered XY scale is proportional to footprint; Z is independently fitted to the selected grip height, then Z rotation and X/Y placement apply. Reset transformations, replace, remove or restore built-in defaults.

Supported input is deliberately restricted to **one outward-wound closed convex solid, broad flat-bottomed, with no footprint overhang**. Flat bed area must be at least 25% of its bounding footprint. Checks include finite coordinates, triangle degeneracy, welded edge incidence/opposed winding, connectedness, positive volume, pairwise face intersection, convexity and base projection. Open/nonmanifold, hollow, concave, disconnected, intersecting or too-complex input is rejected with guidance. **No hull substitution and no automatic repair**. Use a mesh editor to simplify/reorient/export a suitable solid.

The original accepted mesh is transformed, sunk 0.15 mm into the isolated palm floor and boolean-unioned. Final integration must yield one connected manifold component. It is not merely a preview or unchanged re-export. Final mesh limits and the safe zone are checked before export; unsupported edits retain a clearly labeled last-good preview but **disable all STL/ZIP exports** until the current state is valid.

## Privacy and sample fixtures

All user content stays in the browser. No uploads, analytics or external service calls. Portable JSON and local named designs contain bounded normalized source payloads; this is intentional local persistence. No personal files are bundled. `public/samples` contains synthetic original PNG, JPEG, ring SVG, ASCII wedge and binary gem fixtures carried forward from this collection; no third-party attribution required. Icons are original inline paths. Fonts are Fontsource SIL OFL; React MIT, Vite MIT, Three.js MIT, Manifold Apache-2.0, fflate MIT, gh-pages MIT. The read-only Keycap Studio reference guided the lavender desk, tactile controls, left parameter rail, phone preview-first layout and worker/current-valid-result pattern; it was not modified.

## Validation and printing

`npm test`: independent binary-STL parser validates byte counts, finite vertices, nondegenerate faces, normals/winding, welded 1e−5 mm edge incidence, connected-component positive volume, Euler characteristic, dimensions and bed-flat orientation. Runs defaults, three presets, all 64 parameter-bound combinations and 30 image/STL-derived cases including extrema. Every individual part and translated combined plate are tested.

Mechanical tests independently boolean-intersect the wheel/road at sampled poses across the complete supported stroke, check tangent contact, ideal constant axle height, lateral margins, minimum road thickness, vertical release, separated plate and isolation of imported customization. These geometric tests do not prove friction/no-slip performance.

`npm run test:browser`: serves actual production output at the deployed base path and runs real Playwright file-picker imports/downloads for PNG/JPEG/ASCII/binary STL, pixel/threshold/depth/scale/placement export changes, invalid/empty/excessive files, resets, undo/redo, every preset, text/icons/SVG hole probes, save/open with assets, ZIP contents, view modes, keyboard focus, saved light/dark theme, worker failure/recovery and stale-result handling. Checks 320/390 px preview-first phone layout, reachable exports, touch orbit and pinch via CDP. Download signatures are compared to the exact preview mesh and regenerated JSON state. Reports and screenshots are included beside the source.

Print PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3 walls, 20–35% infill. Both parts are exported bed-flat, square broad-face down. No supports intended. Remove elephant foot/burrs before rolling. Start with **Gentle Start** as a full-size calibration coupon; lane allowance is generous, not a universal fit specification. The square is not retained—use a soft mat and catch at either end. No forced sliding fits or compliant parts. Printed faceting/layers, material and friction change feel. **No physical print, force, friction, wear, fatigue or durability testing was performed.** Small loose pieces, not for children.
