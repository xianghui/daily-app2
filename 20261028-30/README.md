# Rake & Ritual — miniature rake kit-card studio

Generate one connected, bed-flat kit card; snip eight runners and lower a shouldered handle into a toothed rake head. Secure the fixed clearance joint with adhesive. Make quiet parallel tracks in an adult desk sand tray (sand/tray not supplied). This is a real two-part assembly, not a rearranged print plate or a browser game. No physical print or force testing has been performed.

## Run

`npm install`, `npm run dev`, `npm run predeploy`, `npm test`. React + Vite; Three.js/OrbitControls; Manifold WASM solid CSG in a Web Worker; fflate ZIP; locally bundled Fredoka/Rubik OFL fonts. No CDN, API, paid service or user-file uploads. Base: `/daily-app2/20261028-30/`. Per-app predeploy/deploy scripts and gh-pages are installed. Public deployment uses the ROOT monorepo predeploy/deploy, never this app's individual deployment.

## Reference-first evidence and attribution

Searched actual STL files under `/Volumes/ExternalHD/3d_printing_apps/` first. The available switch cutters, telescoping shells and fabric links are unsuitable sheet/carrier references. Local kit-card generators contain no STL source assets. Downloaded and parsed the public **White Cat Kit Card** by **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Repository README, LICENSE and kit_frame.scad were read to corroborate reuse terms and measurements. Source supplied as-is, no endorsement.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 facets, approximately 179.82 × 178.02 × 3.19 mm, two edge-connected components after welding at 0.00001 mm. STL has no units; millimeters corroborated by source OpenSCAD.
- Fresh mesh sections at Z=0.10, 0.50 and 1.59 mm were inspected (`reference-sections.svg/png`). Sheet Z planes are 0/1.6 mm; perimeter section at Y=100 spans X=0..1.6 mm; low runner vertices occur at .21/.22 mm.
- Source has coplanar/nonmanifold facet artifacts. It is inspection-only: not repaired, bundled or passed through as printable geometry.
- Measured **1.6 mm sheet** informs the default/minimum sheet, adjustable to 2.4 mm. Measured **1.6 mm perimeter** is deliberately reinforced to 2.4 mm. Low source runners inform accessible .4–.6 mm thick, .8–1.4 mm wide cut runners; these are redesigns, not source-equivalent fits.
- **Original redesign:** two rake parts, 8 mm tongue with 6 mm shoulders, through mortise 8+clearance by sheet+clearance, adjustable comb teeth, handle hanger eye and protected mark zone. These interfaces were NOT measured from the source. Retention requires adhesive, not a claimed snap. No fan artwork or raw source STL distributed.

`reference-analysis.py /tmp/rake-reference.stl` reproduces the mesh report and sections; source URL is in `reference-analysis.json`. Keep the original STL outside the repository. Generic editor/import infrastructure is adapted from existing daily apps; this comb geometry and joint are new. The read-only `keycap_generator2` README, App, CSS, Viewer, worker, image trace, STL and export modules were inspected: 374 px left controls/right viewer, preview-first phone, raised tactile keys, lavender desk/white panels/coral selection, saved dark theme, paired numeric fields, checkerboard conversion, explicit STL units and current-result worker gating. No reference tree, dependency manifest or Git history was copied wholesale or changed.

## Parameters, assembly and calibration

| Control | Range (mm unless noted) |
|---|---|
| Card envelope | 140–180 × 105–135 |
| Rake width / handle length | 36–54 / 60–84 |
| Tooth count | 5–9 integer teeth |
| Tooth length / width | 10–18 / 45% of width÷count, minimum 1.8 |
| Sheet / rail | 1.6–2.4 / fixed 2.4 |
| Total joint clearance | .10–.35, default .20 (.10 each side) |
| Part spacing | 4–7 |
| Tab width / height | .8–1.4 / .4–.6 |
| Dimple depth | 0–.4 |

Impossible tooth widths or card envelopes are blocked. The mortise is (8+clearance) × (sheet+clearance); tongue width is 8, depth is sheet thickness. The tongue bottom is flush with head bottom when shoulders seat. The smallest slot web exceeds 6.6 mm. Handle relief remains centered at local (0,20), far above its functional tongue. Minimum engraved floor is .8 mm. All per-part exports are bed-flat, decoration up, Z=0.

1. Print the card or individual parts, PLA/PETG, .4 mm nozzle, .2 mm layers, three walls; no supports intended.
2. Adult: snip eight accessible runners and trim nubs/elephant foot. Do not shorten the tongue or shave functional shoulders.
3. Test the two individual parts as a fit coupon. Printer, material and slicer affect fit; clearance is a starting point, not universal.
4. Rotate the handle upright and lower the tongue through the backbar until both shoulders seat. This straight insertion path is checked computationally. Do not force an undersized slot.
5. REQUIRED retention: a tiny dab of suitable adhesive on the fixed joint; allow to cure. Clearance alone is not a snap or positive lock. No hardware required.
6. Gently sweep shallow desk sand; do not lever or bend the teeth. Adult craft miniature, not a garden tool/toy. Sand/tray not included. Keep cutters, glue, sand and small parts away from children/pets.

## Image / SVG workflow

Choose or drop PNG/JPEG/simple SVG (synthetic samples included). Validate actual header, 2 MB size, ≤12 MP and ≤6,000 px per side before decoding. Normalize raster input to ≤500 px, rasterize simple SVG to 256 px; reject SVG scripts, external references, text/effects and >2,000 elements. Files stay in this browser.

Exact method: sample an adjustable contain/cover crop with ±25% shifts to a **20 × 20 luminance grid**; transparent pixels composite onto selected light/dark background. Threshold 1–254 makes a silhouette-height relief, or grayscale maps darkness continuously to height. A welded indexed height-field is closed with a solid backing, then truly unioned/subtracted using Manifold. Checkerboard shows the actual cutout/grid. Bright holes remain unraised/unengraved over the original backing; this is **2D-to-relief conversion, not full 3D reconstruction from a photo** or exact vector tracing. SVG holes are preserved at grid resolution. Features smaller than a sample may disappear.

Raised depth .4–3 mm; engraved depth .4–.6 mm preserves at least .8 mm floor at minimum sheet. Footprint 4–7 mm, Z rotation ±180°, X ±1.5 mm, Y ±2 mm. The 13 mm medallion safe zone is checked against all transformed vertices. Text (up to 8 characters) and six searchable bundled original SVG marks follow this same real conversion path. Preview colours are geometry-neutral and not carried by STL.

## Imported STL workflow

ASCII and binary STL, ≤2 MB, ≤1,500 triangles, one connected outward-wound closed solid, each source axis .2–250 mm. Validate complete facets/byte length, finite vertices, triangle degeneracy, welded edges and opposite winding, per-component positive volume, self-intersections, then a deliberately narrow supported input contract: **convex, broad flat-bottom, support-free grip**, with every XY projection inside the bottom footprint. Unsupported concavity, cavities, branches, multiple parts, overhangs, open/nonmanifold or inward meshes produce actionable errors; no silent repair, convex-hull substitution or discarded concavity. The small hull computed by preflight only verifies bottom contact; it never replaces the source mesh.

Set Z/Y/−Z up before attachment; changing axis explicitly requests reattachment. Source 3D preview, oriented dimensions and ASCII/binary type are shown. Confirm source coordinates are mm (STL has no unit metadata). Scale XY proportionally into the 4–7 mm footprint, scale Z independently to .6–3 mm; actual factors are displayed. Rotate, center and place; reset, replace or remove. The **actual original mesh** becomes a true unioned handle grip with .15 mm insertion overlap, protected from hinge holes and window cuts. No disconnected interpenetrating shells are exported.

Portable JSON and named designs include bounded normalized image/mesh payloads, never personal filesystem paths. Missing images request reattachment; invalid or oversized payloads block export. Uploaded personal input files are not written to this repository.


## Studio, persistence and export

Three presets with generated thumbnails: Fine Garden, Broad Sweep, Pocket Rake. Round/chamfered/stepped handle silhouettes; bounded random variations; undo/redo; six named local saved designs; portable JSON save/open. JSON contains bounded normalized raster and verified mesh data; missing image payload explicitly asks for reattachment. Files never leave the browser and are not stored in the repository. Synthetic fixtures in `public/samples` are independently generated, no private inputs.

Assembled, exploded, connected-card, de-tabbed print layout and isolated-part views use the same final solids. Assembly lift (0–25 mm) is explicitly preview-only; exploded view raises the handle; neither changes printable export. Orbit/zoom/fit with touch and keyboard-accessible controls. See-through handle explains the joint. Preview colors do not imply colored STL.

Per-part binary STL, connected-card STL and Everything ZIP (three STLs plus numbered ASSEMBLY.txt). `all` exports the connected card, not assembled overlaps. Preview and export share the exact validated current model; the UI fingerprint and downloaded bytes are compared in tests. Worker request IDs, parameter/source key and pending conversion/import flags prevent stale export. Invalid settings, imports and worker failures disable export while preserving recoverable last-good preview.

## Validation

`validate.mjs` independently reparses final binary STL: exact byte count, finite vertices, nondegenerate triangles, stored normalized normals consistent with winding, welded edges with exactly two opposite-directed incident faces, each connected component positive volume, millimeter bounds and Z=0 print orientation. Runs defaults, all presets, extrema and imported outputs. Manifold booleans check every part, assembly insertion samples, shoulder stop, tongue flush bottom, hanger eye/mortise cut-through, tooth count/gaps, separated layout, accessible tab cuts and exactly two parts plus carrier after snipping. A watertight mesh is not treated as proof of physical strength or fit.

Production-browser scripts exercise real file pickers and downloaded PNG/JPEG/ASCII/binary-STL derived outputs, exact preview/export/JSON fingerprints, malformed/open/nonmanifold/concave input rejection, threshold/depth/crop/transform changes, remove/reset, every preset, text/icons/SVG holes, ZIP contents, saved designs, portable errors, undo/redo, stale image and worker loading failure. Phone checks use touch orbit/pinch, 320/390 px no-overflow, preview-first layout and reachable exports. See JSON reports and VALIDATION.md for performed results. No physical prints, sand contact, force, adhesive strength or fatigue tests are claimed.

## Dependencies and licences

Manifold Apache-2.0; Three.js MIT; React MIT; Vite MIT; fflate MIT; Fontsource fonts SIL OFL; gh-pages MIT; Playwright Apache-2.0. Bundled SVG icon marks and synthetic image/STL samples are original simple fixtures (CC0). Construction reference attribution and license above. Do not redistribute arbitrary uploaded user meshes.
