# Golden & Rosette

A local, browser-based **eleven-part rhomb-rosette kit-card generator**. Snip a genuinely connected carrier, then arrange five thick and five thin rhombs in a shallow decagonal tray. Customize real tile geometry, printer-dependent gaps, rounded tips, sheet and pocket thickness, carrier dimensions and a personal engraving. No hardware, glue, server, account, API key or CDN.

This is a **finite golden-ratio rosette**, not an aperiodicity demonstration or a complete arrow-matching Penrose tile set. It is a new planar tessellation/assembly, not a repeated slider, linkage or cross-lap mechanism. It differs from earlier pentomino/tangram apps through two analytic golden-rhomb families, fivefold radial assembly, a regular-decagon boundary and a single-piece shallow tray.

## Reference-first provenance

Local STLs were found and parsed first: `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles, three MX socket/stem components) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles, one 8 mm-tall interlocking fabric link). Relevant READMEs were inspected. Neither is a suitable flat-sheet kit reference; the local `kit_card_generator` README describes a kit app but its tree contains no STL reference.

The selected, actually downloaded STL is **White Cat Kit Card**, **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream source](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. The upstream LICENSE was fetched and is retained as `REFERENCE-LICENSE.txt`. **Raw source mesh is not redistributed**. All printable geometry here is an original parametric reconstruction.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles; overall **179.820 × 178.020 × 3.190 mm**.
- Units are assumed millimeters; STL has no unit metadata.
- Direct parsing yields **27 edge-adjacent components**, including degenerate/duplicate fragments. The raw source is **not claimed manifold or repaired**.
- Mesh sections at Z = .10, .215 and 1.59 mm show four **4.50 × 1.70 mm** socket loops. Source Z levels and sections identify **1.60 mm sheet** and **.21–.22 mm low runners**.
- See reproducible `reference-analysis.py`, `reference-analysis.json`, component bounds, Z levels, measured socket loops and `evidence/reference-sections.png`. The script expects the documented download at `/tmp/golden-rosette-reference.stl`; Python dependencies: trimesh, numpy, matplotlib, scipy, shapely, networkx.

**Measured → redesigned:** the detachable sheet/carrier and bed-level low-runner construction is retained. Sheet becomes 2–3 mm and runners .4–.6 mm for this larger, rounded-tip tile kit. Measured upright sockets are documented, **not imposed on an unrelated planar puzzle**. New .15–.40 mm total inter-tile gap, the same amount of outward tray rim surplus, .6–.9 mm pocket and .4–.8 mm tip rounding are proposed printer-dependent values, not source measurements. No source cat outlines, clips, sockets or raw triangles are copied.

## Studio reference and implementation

Read-only UI/interaction reference: `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, STL, export and image-conversion modules. Concrete patterns: 374 px scrollable left panel, sticky compact brand/theme header, lavender-grey desk, white panels, coral accents, tactile pressed-state buttons, labelled collapsible sections, paired sliders/mm fields, checkerboard conversion, independent source mesh preview and explicit unit confirmation. Phone preview/toolbar first, exports next, controls stacked below. Dark theme persists. Focus outlines, large targets and reduced-motion handling included.

Generic local importer/editor/viewer/serializer infrastructure is adapted from the existing Daily App Lab studio. The two rhomb families, decagonal pocket, analytic placements, card packing, proof-of-coverage and fit tests are new. No reference project's Git history or dependency tree was copied.

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate and locally bundled Fredoka/Rubik fonts (OFL). Manifold is Apache 2.0. All runtime dependencies are bundled; user files never leave the browser. Heavy CSG, import topology checks and final-mesh validation run in a Web Worker. Requests are debounced and guarded by generation IDs and exact-state keys. Preview and export share the **same current validated triangle result**; invalid/pending states disable all exports and label any last-good preview. No stale export override is offered.

```sh
npm install
npm run dev
npm test
npm run predeploy
python3 serve-production.py  # production base path at localhost:5886
node browser-test.cjs
node studio-test.cjs
node mobile-layout.cjs
node supplemental-test.cjs
```

Individual deploy scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public site publication uses the parent monorepo's combined `deploy/` flow, not individual app deployment.

## Parameters and geometry

All linear dimensions are **millimeters**, rotation degrees.

| Parameter | Range |
| --- | --- |
| Card width / height | 230–280 / 200–280 |
| Nominal rhomb edge E | 14–20 |
| Sheet | 2–3 |
| Tray recess | .6–.9 |
| Total tile gap / outward rim surplus | .15–.40 |
| Tip rounding | .4–.8 |
| Part spacing | 3–5 |
| Tab width / height | .8–1.2 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Art X / Y offset | ±1.5 / ±2 |
| Art rotation | ±180° |

Invalid packing, nonfinite values, out-of-range inputs, unsupported imports and art outside the protected zone are blocked with recoverable messages. Three genuine model-thumbnail presets: **First rosette**, **Pocket sun**, **Gallery bloom**. Rounded, small-chamfer and broad-chamfer tray silhouettes change actual exported perimeter geometry. Bounded variation, reset, undo/redo, six named local saves and portable JSON save/open work. Imported image/mesh payloads are bounded and included; a missing payload explicitly requires reattachment.

Let φ = (1 + √5)/2. Thick rhombs have angles 72°/108°, long diagonal φE. Thin rhombs have angles 36°/144°, long diagonal 2Ecos18°. Five thick acute vertices meet centrally; five thin obtuse vertices fill the outer notches. Their **unoffset nominal union is a regular decagon of circumradius φE**. Printable tiles are inset by gap/2 and their tips rounded: deliberate small holes/gaps remain, so the physical assembly is not a sealed exact tessellation. One/two shallow central dot engravings identify thick/thin families. Tray backing ≥1.1 mm, separate art backing ≥1.4 mm. All tiles protrude above the shallow well and lift out vertically; **loose gravity seating, no press-fit or positive capture**.

## Image, SVG, text and icon conversion

File picker works on desktop/phone; one-file drag/drop on supported devices. CC0 synthetic samples in `public/samples/` include PNG, JPEG, holed SVG and ASCII/binary STLs. No personal files or third-party source meshes are bundled.

- Files ≤2 MB. Actual PNG/JPEG magic/header validation; ≤12 megapixels and ≤6,000 px side before decode; normalized portable bitmap ≤500 px side.
- SVG: ≤2,000 simple local filled path/shape elements; scripts, references, external resources, effects and live text rejected. Locally rasterized at 256 px. This is not a general SVG renderer.
- Fit/cover, ±25% crop, light/transparent or dark/inverted background, threshold 1–254 or grayscale relief. Actual **20 × 20 luminance samples** create a closed piecewise-linear height tool, Boolean-subtracted from the front tray apron. Depth .4–.6 mm. Checkerboard displays the converted mask; bright internal holes retain full top surface above continuous backing. Fine detail may be lost (~.3 mm at the default footprint).
- Text up to eight characters and six searchable bundled SVG icons use the same real conversion. Placement, physical scale and rotation alter the STL. Engraving only: raised marks deliberately excluded to preserve the sheet envelope and continuous backing.
- This is **2D-to-relief/silhouette conversion, not reconstruction of a complete 3D object from one photo**. Empty images fail. Source and converted previews, replace/remove, image reset, transform reset and full defaults are working paths.

## Imported STL integration

Both strict ASCII and exact-length binary STL; ≤1,500 triangles; each source dimension .2–250 mm. Validate finite coordinates, nondegenerate triangles, welded edge incidence with opposite directions, positive volume and exactly one connected outward solid, self-intersection/convexity and broad flat bottom.

Supported contract is deliberately narrow: **one convex closed solid with all XY projections inside its broad bottom footprint**. Open, nonmanifold, hollow, disconnected, concave, overhanging or self-intersecting inputs are explicitly rejected with guidance; no automatic repair or convex-hull substitution. The bottom hull is used only for validation, never as generated output.

Select Z-up, Y-up (+90° X) or upside-down before attaching. Changing orientation removes the source and requests reattachment. Inspect original oriented dimensions and a separate source mesh viewer; explicitly confirm millimeter units. XY scales proportionally into the physical footprint; Z scales independently into engraving depth. Displayed factors, rotation and XY placement affect the exact source triangles used as a Boolean subtraction tool. The result is a new personalized tray body, **not unchanged mesh re-export or overlapping shells**. A protected radius 6.5 mm apron keep-in zone is outside the tile well. Replacement/removal/reset are recoverable; bad imports disable export until resolved.

## Views, printing and assembly

Assembled, exploded, connected flat card, clean print plate and twelve isolated printable views share the same underlying solids. See-through tray exposes seating; tile lift/radial explosion are labelled preview-only. Orbit, zoom, fit, top/front, touch orbit/pinch. STL has **no preview colours or unit metadata**.

1. Print one connected card **or** eleven clean parts, all bed-aligned Z=0, 100% scale. Default **260 × 230 × 2.4 mm** card; use clean parts on smaller beds. PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls. Supports not intended.
2. Snip **44 accessible low runners** about 1.8 mm outside the parts. Trim remnants flush; avoid twisting sharp thin tips. One carrier and eleven intact pieces remain.
3. Place five one-dot thick rhombs centrally with acute corners inward.
4. Place five two-dot thin rhombs with obtuse corners in outer notches. Every piece lowers/lifts vertically in any order. No force-fit, hidden latch, bending, glue or hardware.
5. Print the tray and one thick/thin pair first to calibrate gap on your printer/material. Values are starting points, not universal tolerances. Loose pieces are not captive.

Prominent per-part binary STL actions, selection download, and **Everything ZIP** containing twelve actual STLs (connected card + eleven parts), portable JSON and numbered assembly instructions. ZIP is not labelled 3MF. Exported orientation is the printable flat layout, not assembled overlap.

## Validation evidence

`validate.mjs` independently parses float32 STL, exact byte count, finite vertices, nondegenerate triangles, stored normals, opposite directed edges at 1e-5 mm welding tolerance, expected bounds and positive volume **per connected component**. Kernel outputs use a documented .01 mm modelling/simplification tolerance; invalid faces are not simply discarded.

**65 successful model cases** cover defaults, all presets, all parameter minima/maxima, each bound individually, three silhouettes, image/STL-derived outputs and representative joint extremes. Per-part and combined loose-plate topology are checked. CSG checks actual card envelope/connectivity, support-free slice footprints, all 44 simulated tab cuts, 12 released components, no damaged parts or loose runner fragments, planar and assembled nonintersection, 90 vertical insertion samples per model, continuous apron backing and nominal decagon coverage. Independently expanded tile outlines verify conservative inter-tile clearance after simplification.

Production-base-path Playwright tests exercise actual file-picker PNG/JPEG/ASCII/binary STL uploads; content/threshold/depth/scale/crop/rotation/placement changes; downloaded byte fingerprints matching preview and independently regenerated portable JSON; all part STLs; parsed ZIP contents; malformed/truncated/open/nonmanifold/concave/oversized/empty inputs; reset and replacement; text/icons/SVG; final-solid SVG hole probes; saved image/mesh payloads, undo/redo, named saves/reload; invalid/stale export gating and worker load failure/recovery. Supplemental tests exercise orientation removal/Y-up, dedicated part actions, sample button and JPEG drag/drop. Phone tests cover every tab/expanded guide at 320/390 px, no horizontal overflow, real JSON/STL downloads, touch orbit/pinch, preview-first layout; desktop left/right layout, dark-theme persistence, focus and collapsible sections.

Reports: `geometry-validation.json`, `browser-validation.json`, `studio-validation.json`, `mobile-layout-validation.json`, `supplemental-validation.json`, screenshots under `evidence/`.

**Computational mesh, clearance and assembly checks are not physical print, fit, friction, strength or durability tests. No physical printing has been performed.**
