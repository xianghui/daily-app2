# Bone & Product

A local React + Vite maker studio for a **seven-part Napier multiplication-rod kit card**. Snip28 runners, bond two socketed fences into a tray, then lower/reorder four genuinely numbered rods. Choose four digits0–9; all36 diagonal product cells and headers are **engraved solids**, not textures. Three real presets and three tray/fence silhouettes. This is a physical kit-card generator, not a browser calculator or game.

## Reference first

Inspected the read-only local candidate STL collections and their instructions first. MX switch cutters and the8mm diamond link were inappropriate for this sheet assembly. Downloaded and parsed Mike Kasberg's **White Cat Kit Card / Printables865769**, public source https://github.com/mkasberg/white-cat-kit-card, **CC BY4.0**. License in REFERENCE-LICENSE.txt. Source SHA-256:

`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`

Binary STL30,616 triangles; mm assumed (no STL unit metadata), envelope179.820×178.020×3.190mm,27 edge-adjacent components, nonwatertight. Source was analyzed, not repaired or re-exported. Measured main sheet0–1.60mm; four socket loops4.50×1.700012mm; low web planes0.21–0.22mm. Representative actual mesh sections at Z0.10,0.50,1.59mm are in evidence/reference-sections.png. `reference-measure.py` reproduces read-only measurements (`pip install trimesh numpy matplotlib scipy`). `reference-measurements.json` keeps raw measurements; `reference-analysis.json` distinguishes measurements, proposed tolerances, and original redesign. Source asset is not bundled.

This new construction preserves the source's sheet/socket and connected low-runner principles, **not its spacecraft geometry**. Napier arithmetic, fences, tray, loose rods, packing and glyphs are original reconstructions. Default1.6mm sheet and4.5mm socket length are measured; variable thickness,0.1–0.3mm seat allowance, rod gaps and thicker runners are proposed, uncalibrated values. Four fixed joints require compatible adhesive. Rods deliberately remain loose, not captured moving bodies. Each fixed tongue projects1.2mm below the tray: support on scraps during insertion, then optionally file flush. No hardware otherwise required.

Visual interaction reference: read README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts in read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`. Concrete patterns:374px scrolling left rail, sticky compact header, tactile raised/pressed buttons, source/cutout checkerboard, paired slider/mm fields, collapse sections, saved light/dark theme, worker builds and current-result gating. Phone layout puts preview, dimensions and exports before the stacked controls. Locally bundled Fredoka/Rubik; no remote fonts. Reused earlier studio infrastructure, not a keycap clone.

## Run and export

```
npm install
npm run dev
npm run predeploy
npm test
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Production base `/daily-app2/20261102-6/`. Per-app deploy scripts installed as requested; public combined publication is through the **root** deploy/ flow. No runtime server/API/key/CDN. Generation uses local Manifold WASM in a Web Worker, debounced100ms with request IDs and state keys. Error or stale builds disable **every export**, even if last-good geometry remains visible. Worker failure gives recoverable reload instructions. Preview and export consume the exact current model. STL serialization canonicalizes cyclic triangle starts, normalizes signed zeros and sorts triangles for consistent Node/Chromium bytes while retaining winding.

Download the connected-card, de-tabbed seven-part print plate, individual parts, or Everything ZIP (card+7part STLs+numbered guide). All exports are real binary STL in mm and bed-flat orientation. Assembled, exploded, isolated and connected-card views use the same underlying geometry; exploded offsets are illustrative. Colours are preview-only, not stored in STL. Fit/orientation guidance and arithmetic example are in ASSEMBLY.txt and visible in the app.

## Supported parameters (all sizes mm)

| Control | Range |
|---|---|
| Card width / height |220–250 /160–210|
| Row pitch / rod width |8–10 /12–14|
| Sheet / total fixed-seat allowance |1.6–2.4 /0.10–0.30|
| Rod side gaps |0.3–0.7|
| Part spacing |3–5|
| Runner width / height |0.8–1.4 /0.4–0.6|
| Four digit headers |integer0–9 each|
| Import footprint / depth |4–7 /0.4–0.6|
| Art rotation / X / Y |±180° /±1.5 /±2|

Unsupported packing or keep-in combinations block generation/export rather than clipping or distorting parts. Sockets4.50×(sheet+allowance); tongues(4.50−allowance)×sheet. Rods fit a corridor4×width+5×gap, leaving the stated side and inter-rod gaps.

## Real image and STL workflows

Choose/replace with native desktop/phone file picker or drag one file onto Import. Source and final geometry are shown; remove/reset restores built-in defaults. Synthetic CC0 samples for PNG,JPEG,SVG,ASCII STL and binary STL are bundled in public/samples. No personal inputs or private references are in the repository.

- **PNG/JPEG:** actual signatures and dimensions validated;16bytes–2MB,≤12MP,≤6000px side. Normalize to≤500px, composite transparency against selected light/dark background, contain/cover and crop±25%; luminance sample to20×20. Threshold1–254 or grayscale gives a triangulated height surface, closed with sides/back, then Boolean-cut into the protected tray tag. Threshold height is linear between samples, not exact vector tracing. Bright/transparent holes leave untouched backing. Actual checkerboard shows sampled cutout. Depth0.4–0.6mm,≥1mm backing. **2D-to-relief, not full3D reconstruction from one photo.**
- **Simple SVG:**≤2MB,≤2000allowed basic shapes,≤6000px side. Reject scripts, external resources, effects and references. Rasterize locally256×256 then same sampled process; ring holes preserved in final cuts. Text(up to8characters) and six searchable local icons go through this same real geometry workflow. Only engraving supported, to keep sheet thickness and printable backing.
- **ASCII/binary STL:** complete content and topology validated,≤2MB,≤1500triangles,0.2–250mm each source axis. Explicitly confirm **millimeters** because STL is unitless. Z/Y/−Z orientation selected before attachment (axis change clears source and requests reattachment); show oriented source dimensions and real3D source. XY proportional footprint scale, independent Z engraving depth, rotation, placement, reset. Exact mesh solid is Boolean-subtracted into tag; never replaced by a convex hull. **Deliberately supports one closed outward connected convex broad-flat-bottom solid only**. Reject nonmanifold/open, inward, disconnected, self-touching/intersecting, concave, cavity, slender/overhanging or inadequately bed-supported inputs with actionable errors. No silent repairs. Parser uses a bottom hull only as a validation boundary, never as replacement geometry.

Safe tag is radius6.5mm at tray y−12, away from four sockets and loose rod corridor. All source processing is local browser-only. JSON save/open and six named local designs include bounded source payloads; missing images request reattachment, never pretend to be restored. Undo/redo includes assets. Source metadata is not uploaded or committed.

## Printing and limitations

PLA/PETG, flat on bed,100%scale,.16–.20mm layers,.4mm nozzle,3perimeters. .48mm numeral strokes and .4mm engraving: inspect slicer and try one rod for legibility, optionally rub contrasting pigment into cuts. Calibrate one fence/tray pair before a full card; material/printer-dependent allowance is not universal. Snip1.6mm beyond contours and clean nubs. Compatible adhesive at4fence seats. Loose rods may fall out if tilted; no load-bearing use or child-safety claim. No physical printing, fit, legibility, strength or assembly testing performed.

Read headers at back; rows1–9 run toward front. Tens are upper-left, units lower-right. Sum diagonals from right with carrying.1684×3 gives03|18|24|12 →5052. Leading zeros supported. This is an educational arithmetic assembly, not a precision calculating instrument.

## Validation and dependencies

See VALIDATION.md and reproducible scripts/reports. Independent float32 STL parser checks finite coordinates, normalized matching normals, no degenerate faces,1e−5mm welded edge incidence(two opposite faces), positive volume **per component**, expected mm bounds and bed alignment. Kernel checks assembled collisions, full fence/rod insertion paths, shoulders, actual side gaps, four sockets, no plate overlaps,28 safe runner cuts releasing7parts+carrier, connected card envelope and support footprints. Default, presets, each scalar extreme, combined extremes, image-derived and STL-derived cases are exercised. Actual numeral cross-sections are probed for all ten digits and90 product cells. Browser checks include real picker files/downloads, failures/recovery, transforms, stale-result gating, ZIP contents, portable assets, mobile touch orbit/pinch,320/390px no overflow, themes/focus and production worker/WASM paths. Computational checks do not establish physical performance.

Dependencies: React, Vite, Three.js/OrbitControls, Manifold3D(Apache2), fflate, local Fontsource Fredoka/Rubik(SIL OFL). Playwright is development-only. Six icon paths and bitmap digits are local studio assets; sample fixtures CC0. No source project's Git history or dependencies copied wholesale.
