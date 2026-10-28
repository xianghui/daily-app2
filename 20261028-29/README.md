# Lace & Fold — three-leaf folding-screen kit-card studio

A browser-local **physical kit-card generator**, not a game: print one connected card, snip twelve accessible low tabs, and lace three pierced leaves into a miniature folding screen using six separately tied thread loops. Changes alter closed printable solids. All dimensions are **millimeters**.

## Run and publish

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite, Three.js / OrbitControls, Manifold WASM solid CSG in a module worker, fflate ZIP, locally bundled Fredoka/Rubik (OFL). No CDN, API key, service or user-file uploads. Vite base is `/daily-app2/20261028-29/`. App-specific gh-pages scripts exist; the combined public site is deployed only through the parent's root `npm run predeploy` and `npm run deploy` flow.

## Reference evidence and adaptation

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. Clicker switch cutters, sliding shells and fabric links do not supply an appropriate sheet-and-carrier kit reference; the three local kit-generator projects have no STL reference files. A public alternative was downloaded and freshly parsed, not inferred from a listing image:

- **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card); [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Source supplied as-is; no endorsement.
- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary STL, 30,616 facets; bounds approximately **179.82 × 178.02 × 3.19 mm**, two edge-connected components at 0.00001 mm welding tolerance. STL is unitless; mm is corroborated by the source's OpenSCAD dimensions.
- Actual mesh sections at Z = 0.1, 0.5, 1.59 mm are recorded in `reference-sections.svg/png`; sheet surfaces at 0 and 1.6 mm, a measured perimeter section at Y=100 spans X=0..1.6 mm, and bridge vertices at Z=.21/.22 mm. Source facet/coplanar artifacts fail strict closed-manifold incidence. It is **inspection-only**, not repaired or passed through as printable geometry.
- **Measured → design:** preserve the source's 1.6 mm default sheet (expose 1.6–2.4); reinforce measured 1.6 mm perimeter rails to 2.4 mm; replace the source's low tapered bridges with accessible 0.4–0.6 mm thick, 0.8–1.4 mm wide cut runners. Those are deliberate redesigns, not claimed source-equivalent fits.
- **Entirely new:** three pierced leaves, six tied-loop hinges, their bore and web geometry, 3–6 mm nominal reveal, top silhouettes, panel dimensions and medallion landing. No spacecraft artwork or arbitrary private source meshes are bundled. `reference-analysis.py` reproduces the fresh mesh evidence from the downloaded inspection asset; `reference-analysis.json` maps decisions.

The read-only `keycap_generator2` README, App, Viewer, CSS, worker, STL and export modules were inspected for studio patterns: 374 px left control rail, tactile pressed keys, lavender desk/white panels/coral selection, paired range+mm fields, checkerboard cutout, explicit imported units/orientation, current-result worker gating and bed-flat part export. Generic local studio/import code is adapted from prior daily generators; **the laced folding-screen geometry and assembly are new**, not another switch or slider mechanism. Reference trees, histories and dependency manifests were not modified/copied wholesale.

## Parameters and fit

Three real presets with generated model thumbnails, arch/deco/stepped leaf silhouettes, bounded variation, undo/redo, six named local designs and portable JSON save/open. Main ranges:

| Control | Supported range (mm) |
|---|---|
| Card envelope | 140–180 × 105–135 |
| Leaf width / height | 26–36 / 60–84 |
| Sheet / rail | 1.6–2.4 / fixed 2.4 |
| Window height / sill | 15–25 / 30–34 |
| Lacing bore / station inset | 2–3 / 10–14 |
| Nominal flexible hinge reveal | 3–6 |
| Part spacing | 4–7 |
| Breakaway tab width / thickness | .8–1.4 / .4–.6 |
| Surface dimples | 0–.4 deep |

Window top must leave at least 6 mm web; impossible combinations block generation/export. Bore edge web is at least 3 mm, window side web 10 mm. Two 0.8 mm thread passes have at least .4 mm nominal diameter allowance in the smallest bore. Thread properties, knots, printer expansion and friction vary: print one leaf, try a loop, retie before making the full kit. There is no rigid press-fit connector to misrepresent as universally calibrated.

## Image / SVG workflow

Choose or drop PNG/JPEG/simple SVG (synthetic samples included). Validate actual header, 2 MB size, ≤12 MP and ≤6,000 px per side before decoding. Normalize raster input to ≤500 px, rasterize simple SVG to 256 px; reject SVG scripts, external references, text/effects and >2,000 elements. Files stay in this browser.

Exact method: sample an adjustable contain/cover crop with ±25% shifts to a **20 × 20 luminance grid**; transparent pixels composite onto selected light/dark background. Threshold 1–254 makes a silhouette-height relief, or grayscale maps darkness continuously to height. A welded indexed height-field is closed with a solid backing, then truly unioned/subtracted using Manifold. Checkerboard shows the actual cutout/grid. Bright holes remain unraised/unengraved over the original backing; this is **2D-to-relief conversion, not full 3D reconstruction from a photo** or exact vector tracing. SVG holes are preserved at grid resolution. Features smaller than a sample may disappear.

Raised depth .4–3 mm; engraved depth .4–.6 mm preserves at least .8 mm floor at minimum sheet. Footprint 4–7 mm, Z rotation ±180°, X ±1.5 mm, Y ±2 mm. The 13 mm medallion safe zone is checked against all transformed vertices. Text (up to 8 characters) and six searchable bundled original SVG marks follow this same real conversion path. Preview colours are geometry-neutral and not carried by STL.

## Imported STL workflow

ASCII and binary STL, ≤2 MB, ≤1,500 triangles, one connected outward-wound closed solid, each source axis .2–250 mm. Validate complete facets/byte length, finite vertices, triangle degeneracy, welded edges and opposite winding, per-component positive volume, self-intersections, then a deliberately narrow supported input contract: **convex, broad flat-bottom, support-free grip**, with every XY projection inside the bottom footprint. Unsupported concavity, cavities, branches, multiple parts, overhangs, open/nonmanifold or inward meshes produce actionable errors; no silent repair, convex-hull substitution or discarded concavity. The small hull computed by preflight only verifies bottom contact; it never replaces the source mesh.

Set Z/Y/−Z up before attachment; changing axis explicitly requests reattachment. Source 3D preview, oriented dimensions and ASCII/binary type are shown. Confirm source coordinates are mm (STL has no unit metadata). Scale XY proportionally into the 4–7 mm footprint, scale Z independently to .6–3 mm; actual factors are displayed. Rotate, center and place; reset, replace or remove. The **actual original mesh** becomes a true unioned center-leaf grip with .15 mm insertion overlap, protected from hinge holes and window cuts. No disconnected interpenetrating shells are exported.

Portable JSON and named designs include bounded normalized image/mesh payloads, never personal filesystem paths. Missing images request reattachment; invalid or oversized payloads block export. Uploaded personal input files are not written to this repository.

## Views, export and responsiveness

Assembled, exploded, connected card, de-tabbed print plate and each isolated leaf use the same final solids. Thread lines and 0–100° sweep are **schematic nominal poses only**, not flexible-cord simulation; knots/slack are not modeled. Nearly-flat poses do not stand freely. No fully stacked closure, bearing precision, holding torque or hinge-lock claim. Orbit, pan, zoom and fit work with touch; phone order is preview → dimensions/warnings/export → stacked controls. Saved light/dark theme, visible focus, collapsible sections, reduced-motion CSS and tactile buttons.

Generation uses a debounced WASM worker; sequence ids and parameter/source keys discard stale results. Invalid changes block every export even if a last-good preview remains visible. Preview/export share the exact current checked mesh. Binary STL per part and Everything ZIP (connected card + three bed-flat leaves + numbered assembly instructions). Default main STL is the **real connected card**, not loose pieces near a rectangle. Each underlying union has one connected closed component. No falsely labeled 3MF.

## Printing and assembly

1. PLA/PETG, .4 mm nozzle, .2 mm layers, three walls. Print decoration up; no supports intended. Preview colours do not imply multicolour STL.
2. Snip **12** low tabs with flush cutters; remove nubs/elephant foot, leaving bore webs intact.
3. Lay the marked center between the other leaves, bottoms aligned; place scrap spacers at your chosen reveal.
4. **Required consumable:** ~.6 m of soft .5–.8 mm braided thread, initially six ~100 mm pieces including knot allowance. At each station loop through matching bores, tie a secure double knot on the back, trim tails. Remove spacers. No glue in hinge holes.
5. Test the loops, retie if tight/loose. Stand with both side leaves swept about 45°. Flexible hinges do not lock their angle; stability depends on surface friction. This is a miniature craft display, not a load-bearing screen.
6. Gently reposition; thick marks/knots limit folding. No face-to-face stacked closure is promised. Adult cutter use; keep thread/small parts away from children and pets.

**No physical print, pull, fatigue, knot-security or hand-load tests performed.** Computational collision and manifold checks do not establish real material behavior or stability.

## Reproducible validation

`npm test`: independent exported binary STL parse, finite coordinates, positive volumes, normalized consistent normals, nondegenerate triangles, 0.00001 mm welded two-face edge incidence and outward winding. Default, presets, shapes, valid min/max combinations, invalid cross-combinations and image/STL-derived outputs. Every card and individual part tested. Kernel intersection checks across nominal fold poses, de-tabbed layout separation, bore-axis probes, and simulated 12 snips leaving exactly three leaves plus carrier. Impossible window/height combinations are expected rejections, not successful kits.

Production server: `node serve-production.cjs` → port 5489 at the real base path. Browser regression scripts exercise real PNG/JPEG/ASCII/binary file pickers and downloads; changed pixels/threshold/depth/mesh scale/placement compared to defaults; exact preview/download and JSON-regeneration signatures; invalid files, empty relief, unsupported concavity and stale workers; assets saved/reloaded; ring-hole probes, per-part/ZIP validation, all presets/icons, keyboard/theme, 320/390 px no overflow, phone touch orbit/pinch and reachable downloads. Reports and screenshots are saved next to this README. See `VALIDATION.md` for actual results.
