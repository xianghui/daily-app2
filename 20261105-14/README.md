# Butterfly & Bind

A browser-based **parametric butterfly joinery kit-card generator**. Two backed panels receive a separately printed lift-out bowtie key in complementary blind half-pockets. The wider lobes resist lateral spreading when the panels remain coplanar. The key is gravity-seated, **not vertically captive**; lift it to disassemble. This is a joinery/fit demonstrator, not a load-bearing repair, snap joint or structural product. No hardware/glue required; optional adhesive makes it permanent. **Not physically printed or tested.**

Unlike earlier linkages, lacing frames and tile trays, this kit generates actual complementary polygonal blind pockets and a waist-controlled butterfly key. Joint length, waist, end width, backing, seam and fit are independently meaningful. Three model-thumbnail presets, three outer-panel silhouettes, locally bundled text/icons, undo/redo, named local designs and portable JSON are implemented. Generic studio/import/worker/export infrastructure is adapted from prior local studios; physical geometry, assembly transforms, fit and blocking tests are new.

## Run and dependencies

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261105-14/`. React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik. All dependencies/fonts/WASM bundle locally; no CDN, external generation API, key or uploads. Main worker performs bounded CSG and mesh preflight, with 100 ms debounce, sequence guards, loading/failure feedback and current-state export gating. Preview and export share the exact current valid meshes; invalid edits cannot export the old preview.

Primary visual/interaction reference: read-only `keycap_generator2` README, App.tsx, styles.css, Viewer.tsx, worker, imageTrace, STL and export modules. Concrete adaptations: 374 px scrollable left rail, sticky compact brand/theme controls, tactile raised/pressed buttons, collapsible sections, paired numeric/range controls, source/cutout views, saved coherent dark mode, phone preview-first stacking and reachable exports. No switch sockets are imposed on joinery.

## Actual STL reference / attribution

Local candidates inspected first: Keycap Studio `clicker_template2.stl` (SHA-256 `292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9`, 944 triangles, three components, 15.20 × 15.20 × 43.10 mm) and fabric `diamond-link.stl` (`8146cd758a8c0218560a3fe7cdd7b6ad23304fe9e4472ff0259e18266f4ed9fd`, 5,940 triangles, one component, 7.981 × 9.241 × 8 mm). Relevant project READMEs read. Their switch/fabric interfaces are unsuitable for planar joinery; they were rejected rather than treated as interchangeable templates.

Selected public reference: **White Cat Kit Card / Printables 865769**, Mike Kasberg, [upstream source](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Actual STL downloaded and parsed again for this build. Binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles, 179.820 × 178.020 × 3.190 mm. STL has no units: mm assumed. The 27 edge-adjacent components include duplicate/degenerate zero-volume pseudo-components; the complete reference is not wholly manifold. This is disclosed, not a repair or printability claim.

`reference-analysis.py` parses actual triangles, records component bounds, Z planes and measured cross-sections; `reference-analysis.json` and `evidence/reference-sections.png` preserve evidence. `REFERENCE-LICENSE.txt` was checked against the upstream LICENSE, SHA-256 `4d2b8d07bae2cd142601f3e9abbef0d16b39f5020a539217d061aa082161a224`. No raw source STL is redistributed; output is an original reconstruction, not transformed source triangles.

**Measured → redesigned:** source sheet 1.60 mm, rectangular sockets 4.50 × 1.70 mm, runner tops .21–.22 mm. Genuine Boolean-unioned bed-flat frame/runners preserve its carrier strategy. Runners are strengthened to .4–.6 mm. Sheet increases to 2.4–3.2 mm to support 1.2–1.4 mm deep blind pockets with ≥1 mm backing. The measured .10 mm receiver-minus-sheet relationship informs the .10–.30 mm TOTAL XY pocket allowance. New complementary bowtie polygons replace rectangular sockets completely; source 4.50 mm socket length is not reused. Flanks, seam, protected engraving zone and key are original.

## Supported parameters

All linear dimensions mm; angle readout degrees.

| Parameter | Range |
|---|---|
| Card width / height | 150–220 / 160–220 |
| Panel half-span / height | 30–42 / 28–40 |
| Key length / end width / waist | 18–26 / 12–18 / 5–8 |
| Pocket depth / sheet thickness | 1.2–1.4 / 2.4–3.2 |
| TOTAL pocket allowance / seam gap | .10–.30 / .20–.50 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |

Key thickness = pocket depth − .10 mm, so the seated top is .10 mm recessed. Flank angle = atan((end width − waist)/key length). Panel pockets offset the real polygon by half the total allowance in all XY directions, not an axis-aligned hull. Both panels retain full lower backing. Outer silhouettes change only the outside corners; mating geometry is preserved. Generation rejects unsupported ranges, empty art, unsafe placement, degenerate/nonmanifold geometry and undersized card packing.

## Make and assemble

1. Print connected card **or** three clean parts flat, pocket-side UP at Z=0. PLA/PETG, .16–.20 mm layers, .4 mm nozzle; no supports intended. Key prints separately on bed, not suspended in an assembled export.
2. Snip twelve low runners in the accessible free gaps, four per part. Trim scars flush away from the joint faces. Discard carrier.
3. Place panels coplanar on a table, align shared recess and selected seam gap. Lower the butterfly key **vertically**. No elastic bending or sideways dovetail insertion is intended. Reverse by lifting the key first.
4. Use all three clean parts as a full-size calibration coupon; adjust total pocket allowance to printer/material. Do not force a tight key. These values are starting points, not universal tolerances. No hardware or adhesive required.
5. Key geometrically blocks lateral spreading only while seated and panels held coplanar. There is no Z retention; inversion releases the key. No tensile, fatigue or structural strength is claimed.

Assembled, exploded, connected card, clean print plate and isolated-part views all use actual solids. Key lift (0–20 mm), ghost opacity and exploded spacing are explanatory preview-only transforms. Export never uses overlapping assembled placement. Displayed X/Y/Z dimensions correspond to the selected actual export.

## Image / SVG / text / icons

PNG/JPEG ≤2 MB, ≤12 MP, ≤6,000 px side; normalized locally to ≤500 px. Simple self-contained SVG ≤2 MB/2,000 elements rasterizes locally to 256 px. Scripts, active/external resources and unsupported elements are rejected. Six original bundled SVG icons and up-to-eight-character text rasterize through the same pipeline.

Exact conversion: contain/cover plus ±25% crop offsets; remove light/transparent background or invert dark background; luminance samples a **20×20 grid**. Threshold 1–254 produces silhouette heights or grayscale produces proportional depth. A closed triangulated height solid is Boolean-subtracted from the protected left-panel disc at (−.65×half-span, panel-height/2). Footprint 4–7 mm; depth .4–.6 mm; rotation ±180°, X ±1.5/Y ±2 mm, all vertices constrained within 5.8 mm safe radius. At least 1 mm backing remains; art does not invade joint pockets. White holes remain unengraved, tested with a ring SVG centre/band probe. Source and actual checkerboard cutout are visible. This is sampled **2D-to-relief**, not exact vector outline tracing or complete 3D reconstruction from one photo. Raised marks deliberately unavailable to preserve the flat-sheet envelope. Every conversion setting changes real geometry rather than textures.

## STL import and privacy

Both ASCII and binary STL are parsed locally; ≤2 MB, ≤1,500 triangles, .2–250 mm each source axis. Supported contract: **one connected, closed, consistently outward-wound convex broad flat-bottom solid**, no overhang beyond bed footprint. Concave, hollow, open/nonmanifold, disconnected, degenerate, self-intersecting and unsupported sources are rejected with actionable feedback. Convexity is a rejection check, **never a convex-hull substitution or repair**. The actual input triangles form a Boolean engraving cutter.

Select Z/Y/−Z up before upload, inspect oriented source mesh/dimensions, explicitly confirm mm assumption, set footprint scale, independent engraving depth, rotation and placement. Axis changes clear the source and request reattachment. Replace/remove/reset return cleanly to defaults. Image/STL imports measurably change exported solid volume and triangle coordinates. All file processing stays on-device; no uploads, personal assets in repo or external services. Samples are synthetic/original fixtures only.

JSON/named saves contain bounded normalized image or mesh payloads. Missing or invalid payloads explicitly require reattachment rather than claiming restoration. Invalid file/dimension/transform/empty-silhouette edits block stale export; reset recovers. Up to six named designs and 35 history states are local to this browser.

## Export and validation

Binary STL per part, connected card, de-tabbed print plate, and Everything ZIP with four STLs, portable JSON and numbered `ASSEMBLY.txt`. STL has no colours or unit metadata; import in slicer at 100% mm. No disguised 3MF.

`npm test` performs independent binary STL byte/normal/finite/nondegenerate checks, 1e−5 mm welded opposite-directed edge incidence, positive volume of **each** component, millimeter bounds and printed layout checks. All presets, each parameter endpoint, joint extremes, silhouettes, threshold/grayscale image and ASCII/binary STL variants get the same mesh and mechanism checks. CSG tests verify one connected carrier, twelve cuts release exactly carrier+three intact parts without fragments, no flat-part overlap, bed-supported footprints, minimum backing, unblocked clean/card pockets, collision-free vertical insertion at 41 heights, and positive lateral blocking volumes on both panels. These checks establish geometry, **not physical fit or strength**.

Browser scripts exercise production base-path worker/WASM loading, real file-picker PNG/JPEG/ASCII/binary imports and actual STL downloads, pixel/threshold/depth/crop/scale/rotation/placement effects, preview/download byte fingerprints, reset/replace/remove, invalid/truncated/excessive/nonmanifold/concave/empty inputs, text/all icons/SVG holes, JSON/named persistence, undo/redo, stale builds, worker abort/recovery, every view, per-part and actual ZIP contents, saved themes, focus, collapsible controls, drag/drop, 320/390/480 px layouts and touch orbit/pinch. Reports and screenshots accompany reproducible tests. No physical print, assembly fit, fatigue, durability or strength test is implied.
