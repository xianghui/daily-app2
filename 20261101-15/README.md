# Edge & Vertex

A React + Vite parametric maker studio generating a **ten-part tetrahedral edge-frame kit card**: four outward-facing three-socket hubs and six doubly clipped edge struts. Forty real bed-level breakaway runners hold all parts in a connected divided carrier. Snip, align the spatial edges using temporary tape/support, slide four hubs inward on their individual normals, then glue twelve seats. **Compatible adhesive and temporary craft tape/support are required.** A geometric miniature, not a load-rated truss. No magnets, bearings, fasteners or electronics.

## Actual STL reference / attribution

Local candidates inspected first, read-only: `keycap_generator2/public/templates/clicker_template2.stl` is a three-part switch-cut/socket template; `fidget_fabric_generator/public/templates/diamond-link.stl` is an 8 mm interlocking link. READMEs and actual meshes were inspected/parsed; they are unsuitable sheet-kit interfaces. Their hashes, dimensions, components and rejection reasons are in `reference-measurements.json`.

Selected accessible reference: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Retrieved license in `REFERENCE-LICENSE.txt`. Raw third-party STL is not bundled. Freshly downloaded binary mesh parsed using `reference-inspect.py`; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Assumed millimeters (STL is unitless); envelope 179.820 × 178.020 × 3.190 mm, 30,616 triangles, 27 edge-connected components, **not watertight**. Its defects are not copied, repaired or claimed suitable for direct export. Actual Z=.1/.5/1.59 sections are recorded in `evidence/reference-sections.png`.

Source loop measurements: **1.6 mm sheet** and **4.5 × 1.700012 mm slots**. This original CSG reconstruction preserves default sheet and 4.5 mm slot length, with new normal-entry tongues and a proposed .15 mm total fit allowance informed by source ~.100012 mm surplus. New runners .4–.6 mm are deliberately thicker than recorded .21/.22 mm low planes. `reference-analysis.json` separates measurements, proposed tolerances and redesigned structure. The source does not supply tetrahedral geometry: six struts are newly clipped against both inward hub planes; every tongue points through its hub, not along its edge.

The read-only visual/interaction reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` was inspected: README, styles, App, Viewer, worker, STL parser/export and image tracing. Applied concrete patterns: lavender-grey desk, white panels, pink pressed tactile keys, 374 px left rail, paired numeric/slider millimeters, collapsibles, source/cutout preview, saved theme, current-result worker gate and preview-first mobile stack. Shared editor/import/export utilities adapted from a previous daily app, **not its radial bowl geometry or tests**. This is a rigid edge-frame assembly, not the earlier laced tetrahedral panels. No reference Git history or dependencies copied wholesale.

## Run / dependencies / exports

`npm install`, `npm run dev`; `npm run predeploy` builds `/daily-app2/20261101-15/`. Per-app `deploy` is configured with gh-pages, but publication uses the root monorepo deploy flow. `node serve.mjs` serves production locally at port 5675 with the actual base prefix.

Locally bundled React, Vite, Three.js, Manifold-3D WASM, fflate, Fredoka/Rubik Fontsource fonts; no CDN code, API key, remote service or user-file upload. Manifold Boolean operations run in a dedicated worker, 100 ms debounce, bounded detail, request IDs/stale-result guards and final closed-solid checks. Invalid edits, parsing/conversion/worker errors and pending builds disable exports. Last-good preview is labeled as such and cannot be silently exported. Preview and download use the exact same checked meshes; UI hash is checked against real downloaded bytes.

Three real presets with actual model thumbnails; circle/square/hex hubs; undo/redo; six named local designs; portable JSON save/open with bounded image/mesh payloads, reparsing on restore, explicit missing-payload errors. Assembled, radial hub insertion, exploded, connected card, de-tabbed layout and all ten isolated-part views. Ghost hub 1, touch orbit/pinch, zoom and fit. Preview-only insertion never alters bed-flat printable geometry. All individual part STLs, the **real connected card** and Everything ZIP with numbered instructions. STL is binary, unitless and colourless; ZIP is not 3MF.

## Parameters — all dimensions in mm

| Control | Supported range |
|---|---|
| Card width / height | 188–230 / 154–200 |
| Vertex radius from centroid | 28–36 |
| Hub radius | 14–17 |
| Radial socket center | 8–10 |
| Strut web width | 5.5–7 |
| Sheet thickness | 1.6–2.4 |
| Total slot allowance | .10–.30 |
| Slot / tongue length | 4.50 / 4.50 minus allowance |
| Part spacing | 3–4 |
| Runner width / height | .8–1.4 / .4–.6 |

Hub socket end walls must stay ≥1.2 mm, including hexagon inradius. Unsupported combinations reject. Tangential slot width = sheet + total allowance; this is not per-side clearance. Web shoulders are cut against two separate hub planes; canonical endpoint normals use sqrt(2/3) and sqrt(1/3), giving 35.264° normal angle. Hubs translate along their own normals for assembly, with three parallel tongues entering together. Assembly requires temporary positioning support and adhesive, not snap deformation. No force/strength/adhesive or physical printing claim.

## Image / text / icon / SVG geometry

Desktop/phone file picker and single-file drag/drop. PNG/JPEG content headers and dimensions checked: ≤2 MB, ≤12 MP, ≤6000 px per side; normalized to ≤500 px for bounded portable storage. Simple safe SVG filled paths/shapes rasterize locally at 256 px; scripts, references, resources and effects reject. Eight-character text and six searchable drawn icons use the same real geometry workflow.

**Exact method:** fit or cover/crop into a 20 × 20 canvas, crop shifts ±25%, remove light/transparent or dark/inverted background. Threshold 1–254 gives binary heights; grayscale gives continuous heights. A triangulated closed heightfield is Boolean-subtracted into hub 1. Checkerboard shows removed background. Bright holes retain full backing, **not through-holes**. This is bounded sampled **2D-to-relief**, not full 3D reconstruction or exact vector tracing. Features below sampling resolution are not promised.

Art footprint 4–7 mm, depth .4–.6 mm, rotation ±180°, X±1.5 / Y±2 mm, circular keep-in radius min(6.5, socket radius − 2.25 − 1) mm, preserving a 1 mm gap to sockets; ≥1 mm backing. Raised mode deliberately omitted for this flat sheet. Replace/remove/reset work and regenerate actual geometry; pixel content, threshold, crop, depth and placement affect exported STL.

## STL imported-part editor

Binary and ASCII parser; ≤2 MB, ≤1500 triangles, .2–250 mm per source axis. Shows actual dimensions, format, triangle count and source preview separately from final frame. Explicitly confirm millimeter coordinates because STL has no units. Z/Y/−Z up selection precedes attachment; changing it requests reattachment. XY scales proportionally to footprint, Z independently to engraving depth; rotation, placement and reset are real transforms.

The **exact source triangle mesh** becomes a Boolean engraving cutter on vertex hub 1, not a display-only mesh, unchanged export or convex hull. Supported contract: one closed, outward-wound **convex solid with broad flat bottom and no footprint overhang**. Edge incidence, connectedness, winding, volume, degeneracy, self-intersections, convexity and bed contact are checked. Open/nonmanifold/concave/hollow/multibody/overhang meshes reject actionably; no arbitrary repair is claimed. Thin scaled footprints or out-of-zone art block exports.

## Printing / assembly

PLA/PETG, .16–.20 mm layers, three walls, 100% mm scale, all parts/card flat at Z=0; supports not intended. Trial-print one hub/strut first; fit depends on printer/material. Snip forty runners 1.6 mm outside parts and trim nubs. Align six struts using temporary craft tape and folded-paper support. Hubs face outward; slide each inward normal to its face over three tongues. Do not try pushing struts along edge axes into a fully fixed closed frame. Glue all twelve joints only after alignment; hold while curing, then remove temporary support and rest on three lower rims. The kit is a small desk sculpture, not load-bearing or a child toy. Full numbered instructions are in-app and ZIP. **No physical print or assembly tests performed.**

## Reproducible computational validation

`npm test`: independent binary STL float32 parsing, nonempty finite triangles, nondegenerate faces, normalized normals, equal-vertex welding at 1e-5 mm, two opposite-oriented incident faces per edge, connected component count and positive signed volume per component, millimeter bounds. All ten separate meshes, connected card and float32-translated loose layout checked. Kernel intersections check all 45 assembled pairs, 21 insertion positions per hub against nine other parts, twelve tongue/socket probes, minimum backing/walls, card bounds, layout separation and containment. Forty cuts must release exactly ten parts plus carrier. Sampled upper footprints must be supported by bed footprint (numerical drift buffer .0001 mm only).

`node browser-test.cjs`, `node studio-test.cjs`, `node mobile-test.cjs`, `node rapid-test.cjs`, `node orientation-test.cjs`: real production file-picker PNG/JPEG/ASCII/binary inputs and downloaded STL bytes; changed image pixels/threshold/depth/crop/scale and STL transforms; reset/removal, malformed/truncated/open/nonmanifold/concave/excessive inputs; units; exact preview/export/JSON match; presets/shapes/text/icons/SVG; undo/redo/local saved designs/portable payloads; worker failure/stale gates; actual per-part and unzipped ZIP meshes; keyboard/collapsibles/saved dark theme/reduced-motion; 320/390 px overflow and reachable exports; actual touch orbit/pinch. Reports in app folder record completed checks, not physical performance. Gallery and combined-root production are checked before publication.
