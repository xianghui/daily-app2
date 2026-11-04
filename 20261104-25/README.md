# Dürer & Grid

A **three-part flat-pack perspective-drawing kit card**, generated locally with React/Vite, Three.js and Manifold WASM. Twelve real low runners join a drawing deck, perforated grid frame and small eye-aperture frame to a single connected carrier. Lace the grid with external thread, glue the two frames into four calibrated blind sockets, then copy a stationary subject cell-by-cell to paper. This is a physical assembly kit, not a browser game or automatic drawing system.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Base path: `/daily-app2/20261104-25/`. Per-app `predeploy` and `deploy` scripts are included; the public combined site uses the parent repository's root `deploy/` publication flow. No server, API key, paid service or CDN dependency is needed by the application. Font assets, WASM and all runtime dependencies bundle locally.

## Reference-first evidence

Read-only inspection of `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` covered README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts, geometry/stl.ts and the relevant engine structure. Concrete reused interaction patterns: 374 px scrollable left control panel, compact sticky brand/theme header, lavender-grey desk, white panels, coral/pink raised selected buttons, paired slider/numeric inputs, collapsible labelled sections, source previews, saved theme, right-side Three.js viewer and preview-first phone stacking. Fredoka/Rubik files are bundled. Its switch sockets are deliberately not used for this unrelated kit.

Local STL candidates were actually parsed first:

- `keycap_generator2/public/templates/clicker_template2.stl`: SHA-256 `292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9`, 944 triangles, three edge-adjacent components, 15.20 × 15.20 × 43.10 mm. Rejected: MX switch components are not sheet-card joints.
- `fidget_fabric_generator/public/templates/diamond-link.stl`: SHA-256 `8146cd758a8c0218560a3fe7cdd7b6ad23304fe9e4472ff0259e18266f4ed9fd`, 5,940 triangles, one component, 7.981 × 9.241 × 8.00 mm. Its README and link dimensions describe a nonplanar interlocking fabric, inappropriate for this flat assembly.

Selected public reference: **White Cat Kit Card**, Mike Kasberg, [upstream](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. A fresh STL download was parsed and actual cross-sections inspected before final geometry selection. `reference-analysis.json` records source URL/hash, dimensions, component bounds, section loops, socket measurements and license verification. `reference-analysis.py` reproduces the analysis with trimesh/numpy/matplotlib/scipy/networkx/shapely; `evidence/reference-sections.png` contains measured Z=.10/.215/1.59 mm sections. `REFERENCE-UPSTREAM.md` and `REFERENCE-LICENSE.txt` preserve the inspected upstream documentation/license. **No raw third-party source mesh is redistributed.**

Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles, 179.820 × 178.020 × 3.190 mm overall. Millimeters are an assumption: STL has no units. Edge-adjacent splitting reports 27 components including zero-volume duplicate/degenerate pseudo-components. The full reference is nonmanifold; it is neither silently repaired nor used as output geometry. The generator is an original parametric reconstruction of its sheet/joint/carrier construction, not a re-export of its spacecraft.

### Measured source versus redesign

| Measured source | Actual generator decision |
|---|---|
| 1.60 mm sheet | Default 1.60 mm sheets, adjustable 1.6–2.4 mm |
| 4.50 × 1.70 mm rectangular sockets | Four new 4.40 × 1.60 mm tongues and default 4.50 × 1.70 mm sockets |
| Runner tops near .21–.22 mm | Twelve new .4–.6 mm runners, deliberately strengthened for FDM |
| Narrow planar part interfaces | Four shoulder-seated tongues entering blind deck sockets vertically |

Default **.10 mm total clearance**, .40 mm blind floors and .20 mm tongue-tip relief are proposed design choices, **not measured source tolerances**. Sheet thickness and clearance independently change the real interfaces. Grid, opposing thread holes, eye frame, aperture registration, ergonomic drawing deck, protected engraving apron and cell-by-cell perspective workflow are new. This differs from a ribbon-handling kit or arch/tile model: its functional geometry establishes a gridded picture plane and a separate fixed viewpoint.

## Parameters, units and fit

All physical dimensions are **mm**. Card: 180–240 × 220–300; grid clear width 34–50, height 34–54; eye-to-grid distance 40–70; 3–6 integer divisions; eye aperture Ø.8–2.4; sheet 1.6–2.4; total slot clearance .10–.30; part spacing 3–5; runner width .8–1.2, thickness .4–.6. Rounded, clipped and scalloped deck silhouettes and three thumbnail presets change the exported solid. Invalid dimensions, fractional division counts and impossible layouts block export.

Grid rim is 10 mm; opposing Ø1.60 mm thread holes have ≥3 mm supported webs. Eye height is `10 + gridHeight/2` above the deck. The grid is a selected distance beyond it; the horizontal/vertical field of view is `2 atan(gridSize / (2 eyeDistance))`. This is an ideal geometric field, not calibrated optical measurement. Four tongues are 4.40 × sheet with depth `sheet − .60`; sockets are `(4.40 + clearance) × (sheet + clearance)` and `sheet − .40` deep. Fit is material/printer-dependent. Print the clean eye frame and deck first to calibrate. Glue all four sockets; there is no positive snap retention.

## Personalization and imports

All user files process locally in browser memory. No uploads, external calls or personal source files are saved in this repository. Synthetic bundled fixtures include PNG, JPEG, SVG, binary STL and ASCII STL, with file-picker and drag/drop controls. Replace/remove/reset restores built-in geometry. Source and final-solid previews are separate.

### PNG/JPEG/SVG → actual engraving

PNG/JPEG headers/content, dimensions and file sizes are checked before decode: 16 bytes–2 MB, ≤12 MP, ≤6,000 px side. Normalize locally to ≤500 px, then sample a **20 × 20 grayscale height field**. Contain/cover, crop X/Y ±25%, light-background removal/dark inversion, threshold 1–254 or proportional grayscale relief control the cutter. Transparent pixels composite against the chosen background. The checkerboard shows the actual converted cutout. This is **2D-to-relief, not automatic full-3D reconstruction from a single photo**.

Build a closed height-field cutter and Boolean-subtract it from the deck apron. Engraving .4–.6 mm leaves ≥1 mm backing. Bright internal holes remain unengraved; sampling/interpolation is documented rather than claiming exact vector tracing. Simple SVG filled paths/shapes rasterize locally to 256 px; external resources, scripts, references, effects, unflattened text and >2,000 elements are rejected. Text (up to eight characters) and six searchable synthetic bundled icons use the same geometry path. Raised art is intentionally unsupported to keep this protected apron workflow bounded.

### STL → actual exact-mesh subtraction

Binary and complete ASCII STL are parsed locally with 1e-5 mm vertex welding. Accept one connected, positive-volume, outward-wound, closed convex solid, ≤1,500 triangles, 0.2–250 mm each axis, no self-intersections, a broad flat bottom (≥25% XY footprint) and no unsupported overhang. Reject open/nonmanifold input, concavities, cavities, disconnected parts and unsupported topology with actionable messages; **no mesh repair or convex-hull substitution**. The bottom-footprint polygon is used only for validation, never as a replacement for input geometry.

Show oriented source dimensions, triangle count, format and explicit mm confirmation. Z/Y/−Z up selection requests reattachment. Proportional XY scaling fits a 4–7 mm footprint; Z independently scales to .4–.6 mm engraving depth. Show both scale factors. Allow Z rotation ±180°, X ±1.5 mm and Y ±2 mm offsets around the apron centre at local Y=−10 mm. A 5.8 mm radial keep-in zone prevents art from reaching sockets/edges; slender imports below 1.2 mm XY and invalid transforms are blocked. Exact accepted mesh is Boolean-subtracted and changes the exported deck, not merely displayed or re-exported unchanged.

## State, preview and export

Manifold runs in a Web Worker with bounded mesh resolution, 100 ms edit debounce, request-id stale guards and current-state-key export gating. Invalid or pending edits can show the last valid preview but **cannot export it**. Worker errors disable export and provide reload guidance. Preview and binary STL use the exact current checked meshes; the UI exposes a geometry fingerprint for automated consistency checks. Colours are preview-only, not stored in STL.

Assembled, exploded, flat connected-card, clean print-plate and every isolated part view share the underlying generated geometry. Touch orbit/pinch, zoom buttons, front/top/fit controls and see-through parts explain fit. Threads and the pink sightline are explicitly **preview-only estimated centre lines**; no knots, tension, subject image or optical simulation is claimed. Exploded offsets are explanatory, not the insertion trajectory.

Export a connected-card STL, each clean part, the clean print plate or Everything ZIP (four STL choices including card, portable design JSON and numbered assembly instructions). ZIP is not mislabelled 3MF. All parts are bed-aligned Z=0. Undo/redo, six local named designs and JSON save/open retain bounded normalized image and exact accepted STL payloads; missing image payloads require reattachment rather than pretending to restore files. Personal designs remain in browser local storage unless explicitly downloaded.

## Print and assembly

1. Print connected card **or** clean parts, flat, PLA/PETG, .16–.20 mm layers, .4 mm nozzle. No intended supports or metal hardware.
2. Snip twelve low accessible runners, trim only outside attachment points. Keep tongues and thread holes intact.
3. Lace opposing bottom/top and left/right holes using dark nonstretch thread ≤.5 mm. Tie each line separately behind the grid and trim tails; do not over-tension the frame.
4. Dry-fit both frames vertically into their paired blind deck sockets. Shoulders rest on the deck and tips clear floors by .20 mm. Glue four joints and cure before use.
5. Place a still subject beyond the grid. Close one eye, look through the small eye aperture, keep still and copy visible contours cell-by-cell to paper with matching grid aspect ratio.

Full numbered guidance ships in the app and ZIP. External thread, glue, paper and pencil are required. Physical printing, fit, frame stiffness, knot retention and drawing accuracy are **not tested**. Computational mesh/assembly checks are not physical validation or a universal tolerance claim. This craft kit is not a calibrated optical measuring instrument.

## Validation and dependencies

`validate.mjs` independently parses exported float32 STL: byte length, nonempty finite/nondegenerate triangles, unit normals/winding, 1e-5 mm welded edge incidence of exactly two opposite-directed faces, positive per-component enclosed volume, expected component counts and mm bounds. It checks default/presets, field extrema, shape/size corners and image/STL outputs. CSG checks cut every runner, require carrier + exactly three intact released parts, probe sockets/floors and every grid/eye aperture in clean AND connected meshes, check backing, plate/assembly nonintersection, 20 frame insertion positions and supported bed footprints. Grid webs and eye registration are independent mechanical/assembly checks.

Production-base-path Playwright scripts exercise real file picks and downloaded bytes, all import types and transformations, malformed/open/concave/excessive inputs, threshold/pixel/depth changes, exact export/fingerprint/JSON consistency, portable state, text/icons/SVG holes, ZIP members, dark theme/focus/reduced-motion/collapses, worker failure/recovery, mobile 320/390 px layout and CDP touch orbit/pinch. Reports and synthetic evidence live beside the app. See `VALIDATION.md` for observed results; do not infer physical printing from them.

Runtime: React, React DOM, Three.js, Manifold 3D WASM, fflate, @fontsource Fredoka/Rubik. Development: Vite/React plugin, Playwright, gh-pages. Reusable studio/import/export infrastructure was adapted from the prior local daily studio; geometry, thread-grid workflow, assembled transforms and kit-specific validation were redesigned here.
