# Triad Accord — local fidget maker studio

A **bounded Schmidt coupling** for a slow, repeated thumb-turn ritual. Two sets of three parallel links transfer equal-angle rotation between parallel, offset axes through a floating middle disc. This is a new linkage mechanism, not a reskin of a slider or an ellipsograph.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
npm run test:browser
```

Node 22.12+; React + Vite, Three.js, Manifold WASM, fflate, locally bundled Fredoka/Rubik fonts. Playwright is a development dependency. No CDN imports, server-side modeling, keys, paid services, uploads or remote image conversion. The app works entirely in the browser after its bundled assets load.

Per-app `predeploy` is `npm run build`, `deploy` is `gh-pages -d dist`. The public combined site is published **only by the parent monorepo deploy flow**. Base path: `/daily-app2/20261026-11/`.

## Physical mechanism and assembly

There are **13 separately printable parts**: chassis, input disc, floating disc, output disc, six links, three spacer washers. Download each STL, the separated print plate, or Everything ZIP with individual STLs and assembly notes. The plate stays within 220 × 220 mm throughout the supported parameter range. Each part begins at Z=0 in the exported print orientation; preview poses do not change that orientation.

1. Print the Fit Study preset without personalization as a full-size calibration coupon. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3+ walls, 100% scale, supports off are starting suggestions.
2. Put the short-pin input disc on the left chassis axle, the tall-pin output disc on the right, and the other tall-pin disc on the third corner. The center disc rests on the chassis deck; its links constrain its lateral position.
3. Aim the input tab toward the middle-disc center (60°). Align the other pin patterns at the same phase.
4. Lower three links onto corresponding input/middle pins. Integral shoulders support this lower plane. Add one 1.2 mm washer on each middle-disc pin. Lower the remaining three links onto corresponding middle/output pins; washers and output shoulders support the upper plane.
5. Gently turn the input tab **52–68°**, reverse at the physical stop posts, and repeat. This is intentionally a ±8° interaction, **not a full-revolution coupling**. Outside this arc the parallel links could cross; do not force, jump the stops or switch the linkage branch.
6. Release by lifting upper links, washers, lower links, then discs. No hardware, snap fitting or tools. Parts are deliberately **not captive**; keep upright. There is no spring return.

Fits vary with printer, material and slicer. Deburr pins/bores, confirm every link drops freely, and increase the radial gap if binding. Pins are 2.8 mm diameter; handle gently. This is not a force, torque, fatigue or physical-print-tested product. Small loose parts are not for children.

## Controls — all linear dimensions are millimeters

| Parameter | Supported range |
| --- | --- |
| Palm diameter | 22–28 mm; round, hexagonal, oval |
| Link / equilateral center spacing | 42–48 mm |
| Disc thickness | 3–4.5 mm |
| Radial pin/bore and axle/bore gap | 0.30–0.60 mm per side |
| Pivot pitch radius | 12–14 mm |
| Palm dimples | 0–0.6 mm depth |
| Disc-to-lower-link shoulder lift | 0.25–0.50 mm |
| Link thickness | fixed 2.4 mm |
| Upper-plane spacer thickness | fixed 1.2 mm |
| Chassis deck | fixed 2 mm |
| Minimum link bore rim | ≥1 mm |
| Supported turn | 52–68°, shared by all discs |

Three actual geometry presets have rendered model thumbnails; bounded variations stay inside these ranges. Numeric inputs and sliders share real state. Undo/redo, six local named designs and JSON save/open are supported. The light/dark preference is saved. Text (up to eight characters) and six searchable bundled icons use the real image-relief pipeline; colours affect the preview only, because STL has no colour field.

## Image → fidget geometry

PNG and JPEG are required workflows; simple SVG paths/shapes are also supported. Pick a file or drop it in Import; synthetic examples are bundled and downloadable. Limits are 2 MB, 12 megapixels, 6,000 pixels per side. Headers and actual decoded dimensions are checked before normalization to at most 500 pixels; SVG is locally rasterized to 256 px and rejects scripts, external resources, effects and unsupported elements (≤2,000 elements).

The source is fit or cropped onto a **20 × 20 luminance grid** with pan controls. Transparent pixels are composited against the chosen light/dark background. Dark foreground threshold is 1–254, or select continuous inverse-luminance relief. Height is 0.4–3 mm raised, or 0.4–0.6 mm engraved. Adjacent samples are triangulated into a closed height-field solid with a backing, then truly boolean-unioned into, or subtracted from, the isolated palm landing. Bright interior holes stay unraised/unengraved over the solid backing; a checked ring example demonstrates this. This is **sampled 2D-to-relief, not exact outline tracing and not reconstruction of a full 3D object from a photo**. Very fine text/details may be lost at this intentionally bounded resolution.

The source and actual sampled cutout appear side by side on checkerboards. Threshold, background, fit/crop, depth, raised/engraved style, footprint, rotation and placement change exported triangles, not textures. Footprint 4–7 mm, rotation ±180°, offsets X ±1.5 mm / Y ±2 mm; all transformed vertices must remain inside a 6.5 mm radius keep-out boundary. Empty masks or out-of-zone transformations block export. Replace/remove/reset always remain available.

## STL → fidget geometry

Both **ASCII and binary STL** are parsed locally, at most 2 MB / 1,500 triangles. Select Z, Y or −Z up before importing. Source dimensions are displayed; confirm millimeter units explicitly because **STL has no unit metadata**. Supported dimensions are 0.2–250 mm on each axis. XY scaling is proportional to a 4–7 mm footprint; Z fits a separately adjustable 0.6–5 mm grip height. Rotate, center and place using the same bounded palm editor.

The original mesh is transformed and **solid-unioned into the chassis palm**, with a small seating overlap. It measurably replaces the built-in grip. It is never substituted with a convex hull or merely displayed/re-exported. The original source preview and final integrated preview are both visible. This bounded editor supports **one connected, outward-wound, closed convex solid with a broad flat lower face and no footprint overhang**. Concave models, cavities, branches, multiple shells, nonmanifold/open meshes, self intersections and poor bed contact are rejected with instructions to correct the source in a mesh editor. No repair is claimed or silently performed. Narrow transformed XY sections below 1.2 mm are rejected. Reset transforms, replace/remove source or return to built-ins.

## Worker, privacy and persistence

Manifold WASM runs in a bundled module worker; mesh resolution is bounded, edits are debounced and request IDs reject stale results. Status distinguishes building, current valid result and errors. The preview and binary STL writer consume the exact same model; a current-state key immediately disables exports during changes, invalid imports or worker failure. A last-good preview is visibly labelled and cannot be exported until the current state validates.

Everything remains on-device. Portable JSON (≤2 MB) includes bounded mesh arrays or a normalized image PNG payload (≤250,000 pixels), not a missing file path. Restoring validates payloads again; missing image bytes explicitly request reattachment. Named designs store up to six entries in this browser. Only synthetic sample fixtures and automated synthetic test outputs belong in this repository; no personal file was used.

## Validation and limitations

`validate.mjs` independently reads the written binary STLs: length, finite coordinates, normalized stored normals, nondegenerate triangles, welded-edge incidence of exactly two with opposite direction, positive volume for **each** connected component, millimeter bounds, bed orientation and separated plate components. The live worker also checks each final solid and float32 plate layout. Modeling uses robust solid CSG rather than overlapping display shells.

Mechanism checks are separate: pairwise solid intersections over the supported stroke, equal-phase rotation, exact link endpoints, physical overtravel stop collisions, lower shoulder / upper spacer support, vertical release sequence, minimum walls, separation and import isolation. Parameter extrema, every preset, image height maps, engraving and both STL formats pass through the same checks. Browser tests exercise actual file pickers and downloaded bytes, exact preview signatures and JSON regeneration, malformed/excessive files, empty masks, transforms, stale jobs, phone touch orbit/pinch, themes, persistence and ZIP contents. Production-path tests verify bundled worker/WASM loading before root publication.

See `VALIDATION.md` and committed JSON reports for observed results. **No physical print, friction, force, fatigue, retention under shaking or durability test has been performed.** Computational clearance checks are not a substitute for printing the calibration preset.

## Credits

Studio layout and interaction patterns were inspected in the read-only local Keycap Studio reference: left maker panel, rounded local fonts, raised tactile controls, source/final import editor, worker status, views and print exports. This app uses the existing daily-app studio infrastructure with a newly implemented Schmidt model, stop constraints, assembly supports and tests. It does not copy the reference's repository history, templates or dependency tree. Synthetic examples were generated for this collection. Manifold: Apache-2.0; Three.js/React/Vite/fflate: their bundled open-source licenses; Fontsource Fredoka/Rubik: SIL OFL.
