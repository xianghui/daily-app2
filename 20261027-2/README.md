# Quadrature Glide

A local React + Vite parametric STL studio for a **double Scotch-yoke fidget**. Two perpendicular open sliders share the eccentric pin of a crank disc. Alternate thumb strokes: X = e cos θ and Y = e sin θ. At one slider’s dead center, the other can drive the orbit. This is not a ratchet, spring-return toy, or motorized mechanism.

## Run and export

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`. Generation, files, WASM, fonts, preview and binary-STL serialization run locally, without CDN, API, accounts or uploads. React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik; Playwright is used for validation. Fonts retain their bundled SIL OFL licences; six simple bundled icons and sample images/meshes are synthetic fixtures.

The **left 372px studio rail** has collapsible controls and a sticky brand/theme header; the right stage has assembled, exploded, isolated and separated print-plate views. Phone layout puts preview/export before stacked controls. Colours are preview-only and are not stored in STL. Both source and final model previews are available. Theme persists locally. Undo/redo, six local named designs and portable JSON keep bounded mesh/image payloads; missing payloads require reattachment, not fictitious restoration.

## Parameters, all lengths in millimeters

| Setting | Supported range |
| --- | --- |
| Palm diameter | 22–28 mm, round/hex/oval |
| Full slider stroke | 12–18 mm (eccentricity = stroke/2) |
| Yoke half length | 24–28 mm |
| Running fit | 0.3–0.6 mm, radial at bore/pin slots, per-side at guides |
| Yoke thickness | 2.6–3.2 mm |
| Palm dimples | 0–0.6 mm deep |
| Import footprint | 4–7 mm, XY proportional for STL |
| Imported STL height | 0.6–5 mm, independent Z scaling |
| Import rotation / offsets | ±180°, X ±1.5 mm, Y ±2 mm |
| Raised image relief | 0.4–3 mm |
| Engraving | 0.4–0.6 mm, minimum remaining palm floor 2.6 mm |

A radius-6.5mm well bounds imports, with per-vertex checks after transforms. The palm is physically isolated from the mechanism. Impossible transforms block exports. Final X/Y/Z dimensions reflect the selected export, including the print-plate layout. Easy Exchange, Quadrature Glide and Wide Orbit are real geometry presets with generated model thumbnails; bounded variations stay within supported ranges.

## Image → printable relief

Use file picker, desktop drop, or **Try mark.png / waves.jpg / ring.svg**. PNG and JPEG contents, extension, byte size and dimensions are validated before decoding. Limits: 2 MB, ≤12 megapixels and ≤6000px per side; portable sources normalize to ≤500px. Simple safe SVG shapes/paths are rasterized locally at 256px; scripts, external resources, effects, text, references and >2000 elements are rejected. No input is saved to this repository.

The source is contain-fit or cover-cropped with ±25% XY shifts, composited onto the selected light/dark background, sampled to **20 × 20 luminance values**, thresholded (1–254) or converted to inverse-luminance heights, and triangulated as a closed continuous height field. The backing is fused into the palm with a real Manifold boolean. Raised/engraved, depth, scale, rotation and offsets all alter exported triangles. Transparent checkerboard shows the exact sampled cutout. Light holes remain unraised/unengraved on continuous backing: **not exact silhouette tracing or a through-hole**, and **not automatic full-3D reconstruction from one photograph**. Threshold changes do not affect grayscale mode, where every pixel sets height. Empty images and excessive settings block export. Text (eight characters) and six searchable bundled marks use the same bounded conversion pipeline. Reset controls, replace, remove and return-to-default are supported.

## STL → integrated palm grip

Try **wedge-ascii.stl** or **gem-binary.stl**, or select/drop a local file. Binary and ASCII are parsed with welded topology. Limits: 2 MB, ≤1500 triangles, each source dimension 0.2–250 mm. The source must be one consistently outward-wound, closed convex solid with a broad planar bed and support-free side profile. Open/nonmanifold, degenerate, inverted, concave, hollow, branched, disconnected or overhanging meshes are explicitly rejected with guidance: reorient, simplify, close and export a supported flat-bottom solid. **There is no repair path, convex-hull substitution or discarded concavity.** This intentionally bounded editor does not support arbitrary sculptural meshes.

Select Z, Y or inverted-Z up before attaching. The oriented source dimensions, triangle count and units are displayed. Confirm that source coordinates are millimeters: **STL has no unit metadata**. Footprint scales XY proportionally; independent grip height scales Z. Center/reset, rotate and place within the protected well. The complete verified input mesh is boolean-unioned to the palm, including a 0.15mm overlap at the floor; it is not merely displayed/re-exported or left interpenetrating. Minimum XY thickness is 1.2mm. Final integration must produce exactly one closed connected palm component. Up-axis changes clear the source for reattachment. JSON stores the bounded mesh and revalidates it on open.

## Print and assembly

Four separately printable PLA/PETG parts: palm-frame, eccentric-crank, x-yoke, y-yoke. Per-part binary STL buttons, separated-plate STL, and Everything STL+assembly-notes ZIP are available. Every part is Z=0-down in print orientation. No support roofs, fasteners, bearings, magnets or glue are intended. Start with 0.4mm nozzle, 0.20mm layers and three walls. No flexible material required.

1. Print Easy Exchange as the full-size fit calibration. Deburr elephant foot and verify bores/slots/guides without force. Fit is printer/material dependent, never universal.
2. Put crank bore over the central post.
3. Put X yoke on lower ledges, eccentric pin through its Y-oriented slot.
4. Put Y yoke on upper ledges, long pin through its X-oriented slot.
5. Keep level and alternate thumb strokes. Do not force a slider at dead center; move the other. All parts are deliberately **noncaptive** and can lift out. No claim of retention when inverted.
6. Lift Y, X and crank in that order to disassemble.

The floor is 4mm, crank 3mm and pin diameter 4mm. Two yokes occupy different height levels with 0.4mm nominal clearance. Preview has an approximately 0.2mm vertical ledge gap for explanatory rigid motion: unloaded parts settle onto ledges in reality. No flexible deformation, force, friction, wear or fatigue is simulated. Moving parts remain separate; the export is never the visually assembled intersection of meshes. Small loose parts: not for children.

## Geometry and browser validation

`npm test` generates defaults, three presets, 16 representative mixed extrema, and 35 image/STL-derived combinations. Independent binary-STL parsing checks exact byte lengths, finite coordinates, normal alignment, nondegenerate faces, 1e-5mm welded edge incidence (two opposite-directed faces per edge), per-component positive volume, expected component counts and millimeter bounds, including float32 print-plate translation and each isolated part.

Independent Manifold intersection tests sample the complete 360° cycle, check each moving pair, sequential vertical disassembly, nonoverlapping print layout and import isolation. The analytical model verifies quadrature and safe slot end webs, guide clearances, ledge/crank separation and thickness bounds. Browser tests select PNG/JPEG/ASCII/binary files, download actual STL, regenerate the saved state in Node, compare exact mesh fingerprints, probe SVG ring holes, verify invalid input recovery and worker failure/stale-result handling. Tests cover presets/marks/text/views, per-part/ZIP/portable JSON/named saves, mobile orbit/pinch and no overflow at 320/390px, theme, focus and collapse.

See validation JSON, scripts, screenshots and VALIDATION.md for observed results. **Computational geometry checks are not physical print tests. No physical printing has been performed.**

## Reference and implementation

Visual/interaction reference inspected read-only: Keycap Studio README, styles, App, Viewer, worker, STL parser, image conversion and export modules. Concrete borrowed patterns: lavender desk/white panel palette, pink pressed raised-key controls, locally bundled rounded typography, paired range/number inputs, source editor, checkerboard conversion, saved theme, view toolbar and nearby export feedback. No switch sockets were imposed on this unrelated mechanism. Shared daily-app editor infrastructure was adapted; the mechanism, rigid motion and cycle/disassembly checks are specific to this app.

Root monorepo `npm run predeploy` / `npm run deploy` publishes the combined gallery and all apps. The app’s own gh-pages scripts exist as requested but root deployment owns publication.
