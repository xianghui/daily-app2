# Routh & Seven

A local React + Vite maker studio for a **real connected, bed-flat kit card**: snip 32 runners, release a recessed tray and seven fitted cells, then assemble a physical illustration of Routh’s theorem. Not a browser game or static model download.

Three independently adjustable directed division ratios change the actual seven polygons. Three 2:1 divisions give an ideal central triangle of exactly 1/7 the parent area. Unequal ratios reshape all the cells. The tray is gravity-seated: **keep it level; tiles are removable, not captured**. No hardware or adhesive is needed. Physical printing, fit and durability have not been tested.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

`npm run deploy` is the required individual-app gh-pages script; publication of the combined gallery uses the **parent repository's** predeploy/deploy flow. Vite base: `/daily-app2/20261105-5/`.

## Actual reference evidence

Local candidates were inspected first: Keycap Studio’s `clicker_template2.stl` (944 triangles, 3 closed components, 15.20 × 15.20 × 43.10 mm overall) and the fabric studio’s `diamond-link.stl` (5,940 triangles, 1 closed component, 7.98 × 9.24 × 8 mm). Their switch sockets / interlocking fabric geometry do not suit this sheet kit. Their source READMEs and the Keycap Studio UI, viewer, import/export and worker modules informed the read-only inspection; no reference project was modified or deployed.

Selected actual STL: **White Cat Kit Card**, Mike Kasberg, [upstream](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Download URL, source SHA-256, unit assumption, triangle/component details, Z planes, socket section measurements and concrete adaptation decisions are in [reference-analysis.json](reference-analysis.json). [REFERENCE-LICENSE.txt](REFERENCE-LICENSE.txt) contains the freshly retrieved upstream licence; [REFERENCE-UPSTREAM.md](REFERENCE-UPSTREAM.md) preserves its README attribution.

- Actual binary source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Bounds: approximately 179.82 × 178.02 × 3.19 mm, assuming millimeters because STL has no units.
- Source has 30,616 triangles and 27 edge-adjacent components, including zero-volume pseudo-components; **it is nonmanifold**. This is not a repair or re-export of that mesh.
- Actual sections at Z = .10, .215, 1.59 mm measured repeated 4.50 × 1.70 mm receiving sockets, 1.60 mm sheet planes and .21–.22 mm low runners. See [measured section views](evidence/reference-sections.png) and reproducible `reference-analysis.py` (requires trimesh, NumPy, matplotlib).
- Preserved construction: 1.60 mm default planar sheet/floor, true low runners connecting separate parts to an enclosing carrier, and a default .10 mm allowance derived from the 1.70 minus 1.60 mm interface. The allowance is **adapted to tile spacing**, not asserted to be an identical socket fit.
- Redesigned: all seven Routh cells, recessed tray, push-out holes and all silhouettes are original parametric reconstruction. The source's 4.50 mm sockets and animal/spacecraft appearance are not copied. Runners are strengthened to .4–.6 mm. No raw third-party or private mesh is bundled.

Reference visual system: read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: lavender-grey desk, white left rail (374 px), coral active states, raised/pressed key-like controls, paired numeric/range fields, collapsible sections, local Fredoka/Rubik, gradient-backed Three.js stage and preview-first phone layout. Saved coherent dark mode, keyboard focus and reduced-motion styles are included. Existing studio shell/import utilities from this repository were reused; **the mechanism/partition and its validation are new**, not a reskinned prior geometry generator.

## Model and ranges

All physical dimensions are **millimeters**. Ratios are dimensionless.

| Parameter | Supported range |
|---|---|
| Card X / Y | 220–280 / 230–290 mm |
| Parent triangle base / altitude | 64–80 / 56–70 mm |
| Directed BC / CA / AB ratios | each 1.8–2.6 |
| Tile and tray floor thickness | 1.6–2.4 mm |
| Tray pocket | 1 mm deep, total tray height = sheet + 1 mm |
| Total neighbouring tile gap | .10–.40 mm |
| Part spacing / carrier width | 3–5 / 2.4 mm |
| Breakaway tab width / height | .8–1.2 / .4–.6 mm |
| Engraving footprint / depth | 4–7 / .4–.6 mm |
| Artwork rotation / translation | ±180° / X ±1.5, Y ±2 mm |

Exact half-plane intersections of the parent triangle with three cevians produce seven convex regions. Each region is inset by half the requested tile gap; a .45 mm morphological rounding removes needle tips. The triangular recess expands by half the gap. Seven 3.2 mm push-out holes sit under the seven cells. Exported tray floor and art backing are validated independently.

For directed ratios r=BD/DC, s=CE/EA, t=AF/FB, the central ideal area fraction is `(rst−1)² / ((rs+r+1)(st+s+1)(tr+t+1))`. The shoelace area of the generated central polygon and coverage of the seven polygons are checked independently. Printable gaps/rounding reduce real tile areas; the theorem applies to the **ideal partition**, not the reduced printed footprints. The numbered diagram is clearly the ideal partition, while the 3D preview and STL share actual rounded geometry.

Invalid dimensions, card packing, geometry or art transforms disable export. Assembled, exploded, connected-card, clean print-plate and isolated-part views use the same meshes; exploded offsets are preview-only. STL always uses actual bed-flat parts with Z=0. Preview colours are not encoded in STL.

## Local image and SVG workflow

Use the file picker on desktop/phone, drag one file into Import, or try/download bundled synthetic samples. PNG/JPEG content and header dimensions are checked **before decoding**: 2 MB, 12 megapixels, 6,000 px per side. Normalized portable source is at most 500 px on its longest side. Simple SVG fills/shapes are locally rasterized to 256 px; holes are preserved by rendering and sampling. External resources, scripts, text/effects, more than 2,000 elements or excessive sizes are rejected.

The current crop/fit, pan and light/dark background are rendered locally onto a bounded 20 × 20 height grid. Luminance becomes either thresholded depth or continuous grayscale depth. A closed triangulated height solid is Boolean-subtracted from the tray apron. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from a photo**, and is sampled rather than exact vector tracing. Bright holes retain the original face/backing; a checkerboard shows the actual converted cutout. Text (up to 8 characters) and six searchable bundled icons use the same pipeline.

Change threshold, background, fit/crop, depth, physical scale, placement and rotation; all affect exported geometry. Only engraving is offered to keep the surface within its protected envelope. The 5.8 mm keep-in disc is centred at (0, −8) mm, away from the pocket and release holes. Replace, remove, reset transformations and reset image settings are working actions. Empty silhouettes and unsafe placement block export.

## STL workflow

ASCII and binary STL are parsed locally in the worker with 1e−5 mm vertex welding. Limits: 2 MB, 1,500 triangles, .2–250 mm per oriented axis, finite bounded coordinates. Require one connected, closed, consistently outward-wound positive-volume solid, no degenerate faces and no nonadjacent self-intersections. The supported integration contract is deliberately narrow: **convex broad flat-bottom solids without overhangs**. Concavities, cavities, branches, disconnected/open/nonmanifold or unsupported inputs are rejected with guidance. **No automatic repair or convex-hull replacement is performed.** The bottom-footprint test uses a 2D hull only for validation, never to substitute source geometry.

Choose Z up, Y up or inverted Z before attachment; changing orientation requests reattachment. The source 3D preview and oriented source dimensions are shown. Explicitly confirm millimeters: STL has no metadata. The footprint control proportionally scales XY; depth independently scales Z, and the exact scale factors are displayed. Rotate, center/reset and nudge the source. Its **actual triangles** are Boolean-subtracted into the protected tray apron; the imported mesh is not merely displayed or unchanged re-exported. Source geometry, scale and placement survive in final STL and bounded portable JSON. Replacing an image with a mesh or vice versa removes the previous source.

## State, performance and privacy

Heavy Manifold WASM modeling/parsing runs in a bundled Web Worker. Bounded resolution, 100 ms debounce, request IDs, import-generation IDs and a current-parameter/source key prevent stale export. Worker failure exposes an error and blocks export until reload. Preview and download use the exact same validated result; a last-good preview is explicitly labelled and not exportable after invalid edits.

Undo/redo (35 states), three real model-thumbnail presets, local named designs (6 entries), JSON save/open and imported asset restoration are implemented. Portable JSON is limited to 2 MB and includes bounded normalized PNG or validated mesh payloads, not paths to personal files. Missing image payloads explicitly request reattachment and block export. Local files are never uploaded, sent to APIs, or added to the repository. Generation/export has no external API, CDN, account or paid service dependency. All fixtures in `public/samples` are synthetic inherited repository test fixtures, not personal or third-party reference meshes.

## Exports and assembly

Binary STL: connected card, eight separate part buttons, or a clean no-tab plate. Everything ZIP contains all nine labelled STLs (card plus eight parts), current design JSON and numbered `ASSEMBLY.txt` with current fits. It is not 3MF. A lightweight fingerprint shown on the stage permits preview/download verification.

Print **one connected card OR eight clean parts**, not both. Card envelope must fit your printer (default 240 × 250 × 2.6 mm; choose clean-part exports for smaller beds). PLA/PETG, .16–.20 mm layers, .4 mm nozzle, bed-flat Z=0; supports not intended. Snip 32 runners outside the clean boundaries and trim scars. Calibrate tray/tile clearance first; allowances are printer/material dependent, not universal. Lower central tile 1 then surrounding tiles vertically using the numbered map. Keep level, press through the floor holes to release. No captive fit, force/fatigue/strength or physical-print performance is claimed.

## Dependencies / checks

React, Vite, Three.js / OrbitControls, Manifold (Apache-2.0), fflate, gh-pages; bundled Fontsource Fredoka/Rubik (SIL OFL). Playwright is test-only. See package-lock for exact versions.

`validate.mjs` independently reads the actual float32 STL bytes and checks size, nonempty finite nondegenerate faces, unit stored normals, winding, 1e−5 mm welded edge incidence, positive volume **per component**, dimensions and Z=0. Manifold intersections check card connectivity, 32 tab cuts yielding carrier + 8 unharmed parts, card envelope, no flat/assembled overlap, each vertical insertion path, seven open release holes in card/parts, true inset cell gaps, complete support-free bed footprints, backing and exact Routh area identity. Defaults, all presets, individual limits, combined limits, 96 ratio/size/silhouette corners and image/STL-derived cases are exercised.

Browser scripts exercise actual file-picker imports and actual saved STL/ZIP downloads against production assets under the real base path. They compare downloaded bytes against current preview signatures and Node regeneration from the saved JSON, check image pixel/threshold/depth and STL transform effects, invalid files/recovery, per-part exports, all views, text/icons/SVG holes, undo/redo, portable JSON, local saved designs, theme/focus/sections, worker loading failure and phone orbit/pinch/no overflow. Evidence and exact results are in `VALIDATION.md` and generated JSON reports. Computational geometry/assembly checks **are not physical print testing**.
