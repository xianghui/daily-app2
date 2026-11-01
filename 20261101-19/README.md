# Loop & Lather

A local **three-part soap-film loop kit-card generator**. Snip twelve real runners, park two removable handled loops in a two-socket docking base, then lift them out, dip in external bubble solution and draw apart by hand. This is a physical printable kit, not a browser game or a film simulation. No hardware or adhesive required; bubble solution and a suitably sized shallow tray are external supplies.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite base `/daily-app2/20261101-19/`. Per-app scripts: `predeploy` exactly `npm run build`; `deploy` exactly `gh-pages -d dist`. Public publication uses the **root** monorepo deploy folder, not this app's deploy command. `PORT=5684 node serve.mjs` serves the actual production base path. `TEST_BASE=http://127.0.0.1:5684 node browser-test.cjs` tests browser imports and downloads.

## Reference-first evidence and differences

Read-only local STL candidates under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. The keycap switch-template and fabric-link meshes were actually parsed; measurements/hashes and reasons they are unsuitable thin-sheet references are recorded in `reference-measurements.json`. The keycap project's README, styles, App, Viewer, worker, STL, export and image tracing modules were inspected read-only. Concrete studio patterns retained: 374 px collapsible left rail, raised selection buttons, light lavender/pink desk, Fredoka/Rubik local fonts, saved dark mode, checkerboard cutout, current-result worker gating and preview-first phone layout. Generic local studio/import/validation infrastructure is adapted from Daily Object Lab; the new mechanical product and geometry are original. No reference project's dependencies or Git history were copied.

**White Cat Kit Card**, Mike Kasberg: [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). README and LICENSE were fetched during this run; license retained in `REFERENCE-LICENSE.txt`. Actual binary STL downloaded, SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**; 30,616 triangles; **179.819997 × 178.019994 × 3.190000 mm**. STL has no units: mm assumed and corroborated by sheet dimensions. The mesh has 27 edge-adjacent components and nonwatertight defects. It is not repaired, redistributed or re-exported.

`reference-measure.py` parsed the actual mesh, enumerated component bounds, measured socket loops and generated sections at Z=.10/.50/1.59 mm. Those views were visually inspected (`evidence/reference-sections.png`). Source sheet is **1.60 mm**, socket **4.50 × 1.700012 mm**. Source low runner planes include .21/.22 mm. Concrete mapping:

- Retain 1.6 mm default sheet, adjustable 1.6–2.4 mm.
- Retain 4.50 mm socket length at both docks. Socket width = sheet + fit allowance; tongue length = 4.50 − allowance, sheet-thick tongue inserts sheet-depth and stops on a 10 mm handle shoulder.
- Proposed total allowance .10–.30 mm, default .15; this deliberately differs from source ~.100012 mm surplus. It is not a universal tolerance.
- Twelve original .4–.6 mm bed-level runners and a bay-separated carrier replace the very thin source runners.
- Original geometry: two same-size circular/square/octagonal open film loops with integral handles and independent removable dock. No source triangles/artwork copied. Unlike fixed resonance plates, this has two free apertures and intentionally removable handles for liquid-film exploration; no plate support, tapping mechanism or glue seats.

Small provenance/design map in `reference-analysis.json`; all source dimensions vs proposed changes explicitly separated. Reproduce measurements using Python with numpy/trimesh/scipy/networkx/matplotlib and a fresh downloaded reference file. Raw reference is outside this repository.

## Geometry, fit and ranges

All dimensions **millimeters**. Card 150–190 × 150–190; aperture flat-to-flat span 24–40; handle reach 18–26; band width 2.4–4; docking midplane spacing 8–20; sheet 1.6–2.4; total fit .10–.30; part spacing 3–4; tab width .8–1.4 and thickness .4–.6. Packing combinations that do not fit are blocked rather than clipped. Three actual presets have generated model thumbnails; bounded variation, reset, paired numeric/sliders and undo/redo.

Manifold WASM performs real difference/union operations in a debounced Web Worker. Every clean part and connected card is one closed outward solid; moving/removable parts remain separate. Card includes two bays of loops, a base bay, carrier and four accessible runners per part. Bed-Z=0 runners attach only outer edges away from tongues/socket interfaces. Twelve cuts release three functional parts plus carrier. Base sockets receive separate tongues with positive total clearance. Shoulders stop downward insertion; tips finish flush underneath. There is **no positive retention**: deliberately loose parking fit; lift each handle straight out. FDM fit, wobble and first-layer expansion need calibration. Print dock plus one loop first as a full-size coupon. Dock is for dry parking, not a liquid tray.

Exact assembled/exploded/isolated/de-tabbed/connected-card views, fit, orbit, zoom, touch and see-through base. The loop lift slider explains insertion only and never changes printable exports. No fake liquid/film simulation. All printable outputs are the same current geometry, bed-flat. Old last-good preview is labelled; invalid edits/imports/loading/worker errors disable every export. Current geometry byte fingerprint appears as `data-geometry-signature` and is compared to real downloads in tests.

## Image / SVG conversion

PNG/JPEG content signature and pixel dimensions checked before decode: **16 bytes–2 MB; ≤12 MP; ≤6,000 px per side**. Normalize to at most 500 px, then sample **20×20 luminance**. Fit entire image or fill/crop with X/Y pan ±25%; remove light/transparent background or invert dark background. Threshold 1–254 creates a sampled silhouette relief; grayscale maps brightness linearly to depth. A continuous triangulated height-field cutter engraves .4–.6 mm in the protected front of the base. Bright holes remain unengraved backing; the final aperture/holes of the film loops remain untouched. Cutout shown on checkerboard alongside original. This is **2D-to-relief**, not full 3D reconstruction from one photo or exact vector tracing.

Simple SVG paths/shapes are locally rasterized at 256 px; external resources/scripts/text/effects rejected, maximum 2,000 elements. Six bundled searchable icons and up-to-eight-character text use the same actual engraving path. Footprint 4–7 mm; rotation ±180°; placement X±1.5/Y±2; keep-in radius 6.5 mm. Engraving leaves ≥1 mm backing and stays away from both sockets. Raised art is intentionally not offered so the protected sheet and bed-flat support remain valid. No cut-through or decorative preview-only image textures.

## STL integration

Actual binary AND ASCII STL accepted: **40 bytes–2 MB, ≤1,500 triangles, source dimensions .2–250 mm per axis**. Explicit mm confirmation required, because STL contains no unit metadata. Source dimensions, triangle count and format displayed, with source 3D preview. Z up/Y up/−Z up selection before import; changing axis requests reattachment. Proportional XY scaling to 4–7 mm footprint, independent engraving depth .4–.6, Z rotation and placement integrate the exact original mesh via Boolean subtraction into the dock. It is not an unchanged re-export.

Supported contract is deliberately narrow: **one closed outward convex broad-flat-bottom solid, without cavities, branches or overhangs**. Welded edge incidence, connectedness, finite coordinates, winding/volume, degeneracy, triangle intersections, convexity and broad bed contact checked before heavy work. Unsupported concave/hollow/open/nonmanifold/multiple/overhanging models give actionable errors; they are **not** replaced by convex hulls or claimed repaired. A hull is used only to test the bottom contact polygon, not to alter the imported mesh. Exact geometry is kept for integration. File-picker on phones/desktops, drop zone, replace/remove/reset. Try bundled synthetic PNG, JPEG, ring SVG, ASCII wedge and binary gem fixtures without personal uploads.

## Privacy and saved designs

All imports, modeling and exports process locally. No API/CDN/remote upload. Do not commit personal inputs. Named localStorage designs (six maximum) and portable JSON (≤2 MB) include bounded normalized image/mesh payloads, units/axis and settings. Restores revalidate meshes. Missing image data explicitly asks for reattachment and blocks export; never pretend absent assets restored. Undo/redo snapshots include imported payloads. Theme saved locally.

## Export and printing

Prominent binary STL for connected card, dock and each loop; Everything ZIP includes those exact four meshes and numbered `ASSEMBLY.txt` with current fits. Choose connected card OR clean parts, not both unless duplicates wanted. STL stores no preview colours or unit metadata. No fake 3MF option. PLA/PETG, .16–.20 mm layers, three walls, no supports intended, bed-flat orientation. All wet parts must be rinsed lightly and dried; FDM grooves retain liquid. Not food-safe, not a mouthpiece or bath toy. Avoid eyes/ingestion and follow external bubble solution directions.

Soap films depend on polymer wetting, solution, temperature, pull speed and surface texture. No bubble yield, catenoid shape, stability, lifetime, force or fatigue guarantee. No physical print, assembly, fit, wetting, film or durability test performed. Computational checks do not prove bubble formation. Three rigid manufactured parts and their assembly paths are verified; use and calibrate with care.

## Dependencies / validation

Locally bundled React, Vite, Three.js, Manifold (Apache-2.0), fflate and Fontsource Fredoka/Rubik (SIL OFL); npm installs, no runtime service. Scripts/reports/screenshots retained beside the app. `npm test`: independent float32 STL edge welding at 1e-5 mm, exactly two opposite incident faces, normal/winding/positive volume per component, expected bounds, actual card connectivity, support footprints, release cuts, nonintersection, aperture probes and full insertion/removal paths across defaults/presets/shapes/extrema and image/STL-derived outputs. Browser suites exercise actual file pickers and downloaded bytes against Node regeneration and preview hash, every part/ZIP, malformed files and recovery, portable saves, undo/redo, worker errors, saved themes, keyboard focus, desktop and 320/390 px touch orbit/pinch. See `VALIDATION.md` for actual completed runs. No physical testing claimed.
