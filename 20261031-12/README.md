# Petal & Preserve — Botanical Kit-Card Studio

A six-part **ventilated botanical drying cassette**: perforated lower plate, guided lift-off lid, two shouldered posts and two headed transverse cross-keys. A real bed-flat carrier holds all six parts with **24 removable low tabs**. Customize three plate profiles, footprint, vent bores, paper-stack allowance and calibrated interfaces. This is a new assembly, not a keycap, paper mould, loose-parts layout or unchanged source re-export.

**No physical print, assembly, band-force, strength or drying test was performed.** Computational mesh and assembly-path checks are not physical performance tests. **Absorbent paper/blotter pads, two soft elastic bands and filament-compatible adhesive are required.** Keys alone are loose lift stops, not clamps or positive latches. No archival-quality or drying-time claim.

## Reference-first evidence

Local STL candidates were located first. Read-only Keycap Studio README and template guidance plus Weave README were inspected. Their actual switch mesh (three components) and interlocking link (8 mm high) were parsed and rejected for sheet-kit interfaces. A public reference was then freshly downloaded: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. See REFERENCE-SOURCE.md and REFERENCE-LICENSE.txt.

- Actual binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; assumed mm; **179.819997 × 178.019994 × 3.1899996 mm**.
- Parsed actual sections at Z .1/.5/1.59 mm. Sheet planes 0/1.6 mm; four measured receiving loops **4.5 × 1.700012 mm**; low-runner vertices .21/.22 mm.
- Original is nonwatertight with 27 edge-adjacent components/fragments. Used as a design reference only, not silently repaired. No raw reference STL is redistributed.
- Default sheet 1.6 mm; 4.4 mm tenon/key + .10 mm TOTAL allowance reconstructs the measured receiving section. **Default .15 mm allowance is proposed**, printer/material-dependent. Wider lid guide slots, vented cassette, stack space, headed keys, thicker runners and carrier are new original geometry.

[Raw mesh measurements](reference-measurements.json), [design mapping](reference-analysis.json), [actual sections](evidence/reference-sections.png). Reproduce using `reference-inspect.py /path/to/reference.stl` with trimesh/numpy/matplotlib. Reference directories remain read-only.

Primary visual/interaction reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: inspected README, styles, App, Viewer, worker, export, imageTrace and STL parser. Concrete adopted patterns: **374 px left rail**, compact sticky brand/theme header, collapsible labelled sections, paired slider/numeric controls, tactile raised keys with pressed pink states, checkerboard cutout, original-STL editor, saved theme, worker/current-result export gating and phone preview-first stack. Prior authored studio/import/export infrastructure reused; product geometry and assembly checks are new. No reference Git history/dependency tree copied wholesale. Both existing galleries checked for duplicate mechanisms.

## Run / local dependencies

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`.
React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, local Fontsource Fredoka/Rubik (SIL OFL); Playwright for browser checks. No CDN, remote API, account, key or paid service. After hosting, all generation/export and user-file processing happen locally in the browser. Personal files are never uploaded or saved in the repository.

Base `/daily-app2/20261031-12/`; per-app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public whole-site deployment uses the **root** monorepo flow.

## Actual geometry / millimeter ranges

| Control | Supported range |
|---|---|
| Connected card width / height | 170–190 / 180–210 mm |
| Plate width / length | 56–66 / 36–46 mm |
| Paper/pad/specimen stack space | 4–8 mm |
| Nine vent bores per plate | Ø 2–3 mm |
| Lower plate / sheet thickness | 3.6–4.2 / 1.6–2.0 mm |
| Tenon / key width | 4.4–5.2 mm |
| TOTAL socket allowance | .10–.35 mm |
| Part spacing | 3.5–5 mm |
| Breakaway width / thickness | .8–1.4 / .4–.6 mm |
| Mark footprint / depth | 4–7 / .4–.6 mm |
| Mark rotation / X/Y | ±180° / ±1.5 / ±2 mm |

Square, rounded and clipped plate silhouettes; real mesh thumbnail presets **Meadow pocket**, **Fern folio**, **Tiny clover**. Bounded variation and reset. All printed parts are bed-flat and support-free by intended orientation. Inspect your slicer and calibrate first.

Post broad width 10 mm; bottom tenon 4.4–5.2 mm wide, sheet thickness, depth lower-plate minus .05 mm. Post shoulders rest on the lower plate. Lid slots use 10 mm + TOTAL allowance by sheet + TOTAL allowance. Upper post windows use key width + allowance by sheet + allowance. Key underside is **.20 mm above nominal lid top**; its wider head blocks over-insertion. Two clearance-fit removable keys limit lid lifting but may slide out when tilted. Two external elastic bands retain keys and provide compression; pad thickness/band force require trials. Fixed post seats require adhesive, moving lid/keys must remain unglued. Slot allowance is total, not per-side. No fictitious positive capture or guaranteed friction fit.

## Image → actual engraving

PNG/JPEG/simple self-contained SVG file picker on desktop/phones, plus drag/drop. 2 MB input; actual PNG/JPEG headers; ≤12 MP, ≤6000 px side; normalize ≤500 px. SVG ≤2000 elements, simple paths/shapes; reject scripts, external resources, unsupported text/effects. Rasterize at 256 px. Only synthetic/public-domain fixtures are bundled in `public/samples` with attribution.

Source preview and checkerboard show the **20×20 sampled conversion**. Threshold silhouette or grayscale heights, light/dark background, contain/cover crop, pan, physical scale, depth, rotation and placement alter final mesh triangles. A closed triangulated heightfield is Boolean-subtracted from the protected **outboard base lug**, never from vents, post seats or paper area. Bright interior holes remain unengraved with continuous backing, checked by actual Boolean probes. This is bounded **2D-to-relief/silhouette engraving**, not exact SVG tracing or full 3D reconstruction from a photo. Fine detail is sampling-limited. Raised art deliberately unsupported to preserve bed-flat parts. Text up to eight characters and six searchable bundled icons use the same real conversion.

## STL → exact Boolean cutter

Both ASCII/binary .stl, ≤1500 triangles / 2 MB, each oriented source axis .2–250 mm. Original mesh preview, source dimensions/format/count; explicit millimeter confirmation (STL has no unit metadata). Select Z/Y/−Z up before attaching; changing axis clears source and asks for reattachment. XY scale fits proportional physical footprint, Z independently fits bounded engraving depth. Rotation, centering, placement, replace/remove/reset change real export geometry. These are intentional engraving transforms, not uniform rescaling of mechanical parts.

Supported input is **one outward-wound closed convex solid, broad flat bottom, no overhanging XY footprint**. Validate byte/content completeness, finite coordinates, dimensions, degeneracies, welded manifold edges/opposite winding, positive volume, connectedness, triangle intersections, convexity and bed contact. Open/nonmanifold/concave/hollow/disconnected/overhanging/complex input is rejected with actionable guidance. **No hull substitution or claimed automatic repair.** Original validated mesh triangles are the exact Boolean engraving tool, not an unchanged download. Concave art should use image/SVG relief or be simplified externally.

## Responsive studio / exact-current export

Debounced worker owns bundled WASM and bounded CSG. Full-state key and increasing request IDs gate exports. Pending conversion, invalid input/parameters, stale result or worker error disable downloads; last-good preview is labelled, never silently exportable. Same exact current model drives preview and binary STL; fingerprint compared to real downloads and JSON-regenerated meshes in tests. All dimensions explicitly mm; STL stores neither units nor preview colours.

Assembled, exploded, connected card, de-tabbed layout and all isolated parts, see-through toggle, orbit/zoom/touch pinch and fit. Assembly is a geometric explanatory pose, not force/elastic/drying simulation; external consumables omitted. Light/dark toggle persists. Large touch targets, keyboard focus, reduced motion and phone preview-first stack with reachable exports.

Undo/redo; six local named designs; JSON save/open with bounded normalized image/validated mesh payloads. Missing payload requests reattachment, never pretends assets restored. Replace/remove/reset work. No personal source files bundled or transmitted.

Export actual connected-card STL, six clean-part STLs, and Everything ZIP with all seven STLs and numbered assembly/current-fit notes. Not labelled 3MF. Binary STL uses the exact current valid printable geometry, not assembled intersections or screenshots. Every intended exported part is separately closed/manifold, finite and positive volume. Card stays in declared envelope.

## Print / assemble / use

See [PRINTING.txt](PRINTING.txt). Default connected card **180 × 190 × 3.8 mm**. PLA/PETG, .16–.20 mm layers, three walls, 100% mm scale. Print a base/post and post/key pair to calibrate; fits depend on filament, first-layer expansion and slicer. Snip 24 accessible tabs; glue only post tenons in lower plate. Put a dry thin specimen inside paper/blotter sandwich; lower lid, slide keys in front-to-back, add two soft bands over keys/plate ends. Change damp paper regularly; remove bands/keys before lifting lid. No universal force, drying time, durability or preservation result.

## Validation

`npm test` independently parses binary STL bytes, checks finite/nondegenerate faces and normals, welds at **1e−5 mm**, requires two opposite-directed incident faces per edge, positive volume per component and expected mm bounds. Every part/card; three presets/profiles, all individual field extrema and combined extrema; threshold/grayscale image and transformed ASCII/binary source at min/default/max. Independent Boolean assembly checks: 15 part pairs, vertical post paths, vertical lid path with keys removed, horizontal key paths, actual key/lid lift stops and head stops, sockets/tenons, stack space, nine vent passages, 24 damage-free snips yielding six parts plus carrier, envelope and sampled support-free cross-sections.

Browser tests serve actual production `dist` under the real base prefix: PNG/JPEG/ASCII/binary picker imports, changed pixel/threshold/depth/crop/scale/placement outputs against defaults, actual download parsing and preview fingerprint, malformed/empty/excessive/open/nonmanifold/unsupported inputs, replace/remove/reset, every preset/profile and personalization, all views, JSON/named saves/undo/redo, parsed ZIP parts, source axes, stale guards, worker abort/recovery, light/dark/focus/collapse, 320/390 px no-overflow and real touch orbit/pinch. See VALIDATION.md and machine-readable reports for completed checks. No physical printing or botanical trial is claimed.
