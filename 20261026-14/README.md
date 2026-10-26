# Impulse Pause

A local browser-based React + Vite studio for a **two-puck sliding-contact fidget**. Nudge one loose thumb puck into its neighbor, catch the contact, separate and reverse. Three closed printable solids: a shallow lane with isolated palm and two independent pucks. This hand-guided impact shuffle differs from a rolling track, gear train or spring: it explores direct sliding contact. It is **not a Newton cradle** or a claim of efficient momentum transfer. Friction dissipates motion. No bearings, magnets, screws or other hardware.

## Run and export

Node 22.12+; `npm install`, `npm run dev`. `npm run predeploy` builds production output. Per-app deploy scripts and gh-pages are present, but publishing this collection uses the root monorepo deploy flow. Worker code, Manifold WASM, Three.js, Fredoka/Rubik fonts and ZIP dependencies are locally bundled. No API keys or remote generation services.

Rotate, zoom and fit the Three.js preview; print plate, estimated contact stroke, exploded, isolated palm and isolated puck-pair views. See-through base explains the fit. Contact-pair preview has a 0.01 mm floor and 0.02 mm inter-puck display gap; it is a position guide, not dynamic collision simulation. Export always uses the actual three separated, bed-flat solids, not assembled overlap. Per-part binary STL buttons, combined separated plate STL, and Everything STL + assembly-notes ZIP. STL stores neither units nor preview colours. Final X/Y/Z explicitly in mm reflects selected export. Print at 100%.

## Controls and bounds

| Parameter | Range |
| --- | --- |
| Palm diameter | 22–28 mm |
| Lane clear length | 45–65 mm |
| Puck radius | 5–8 mm |
| Side clearance each side | 0.3–0.7 mm |
| Puck thickness | 4–6 mm |
| Palm dimples | 0–0.6 mm |
| Imported XY footprint | 4–7 mm |
| STL grip height | 0.6–5 mm |
| Rotation | −180° to 180° |
| Import placement | X ±1.5 mm, Y ±2 mm; bounded by safe circle |

Lane floor is 5 mm, side/end walls 2 mm thick and 2 mm above floor. Pucks stand at least 2 mm above walls for thumb access and lift straight out: **not captive**, do not invert or shake without catching both. Minimum paired travel is 12.96 mm. The built-in thumb dishes are 0.7 mm deep with closed floors. Pucks are closed cylinders with planar bed faces. Side/end clearance changes real geometry. Starting clearances vary by printer/material; print Gentle Start as a full-size calibration coupon before committing.

Round/hex/oval palms; three actual geometry-thumbnail presets; bounded variations; undo/redo; six local named designs; portable JSON save/open including bounded imported payloads. Personalization remains within a 6.5 mm palm circle at least 27.5 mm from the lane. It cannot fuse or obstruct pucks. Minimum engraved palm floor is 3.6 mm. Robust Manifold unions/subtractions form real connected parts, not overlapping shells. Source import and geometry errors disable all exports, even while last-good preview remains visible.

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

`npm test` runs an independent binary-STL parser (byte count, finite vertices, nondegenerate triangles, outward unit normals, 1e−5 mm welded edges with two opposite-directed faces, each connected-component positive volume, Euler characteristic, millimeter bounds and bed-flat orientation). Defaults, three presets, 64 parameter-bound combinations and 30 image/STL-derived models are checked, including extrema. Every individual part and float32-translated combined plate is validated.

Independent mechanical tests intersect all three solids at 33 representative contact-pair poses per built-in case and 25 per imported case. They verify floor/side/end fit, separated pucks, thumb access, vertical release, separate plate parts and import isolation. This is geometry validation, not a prediction of impact response, friction, noise or tactile feel.

`npm run test:browser` serves the real production output under its deployed prefix. Playwright tests actual file-picker imports and downloaded STL for PNG/JPEG/ASCII/binary STL, image pixel/threshold/depth and mesh scale/rotation/placement changes, replace/remove/reset, invalid/open/concave/nonmanifold/excessive files, bounds and empty silhouettes. Downloads are independently parsed, compared with the exact preview signature and regenerated JSON. Presets, shapes, text/icons/SVG hole probes, local/JSON asset roundtrips, undo/redo, ZIP contents, views, keyboard focus, theme persistence, collapsed sections, reduced motion, worker failure/recovery and stale edits are tested. 320/390 px preview-first phones include real CDP orbit/pinch and imports/downloads. Reports/screenshots are stored with this app. Studio infrastructure was reused from this collection; lane geometry, mechanism-specific tests, documentation and interaction are new. Read-only Keycap Studio guided concrete styling and editor patterns and was not modified.

Print PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3 walls, 20–35% infill, all three broad faces down as exported. No supports intended. Clean elephant foot/burrs and test sliding freely before use. Place both pucks in the lane from above. Push gently into contact, catch and reverse; lift either out to reset. Do not force stuck parts. Friction, layers and material affect the interaction. Loose small parts, not for children. **No physical print, impact, force, friction, wear or durability testing was performed.**
