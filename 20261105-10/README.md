# Huygens & Cheeks

A local React + Vite maker studio for a **three-part, flat-pack cycloidal-pendulum kit card**: a twin-socket signature plinth, an upright cycloidal guide frame and a thread-hole bob. Twelve low breakaway runners really connect all parts to the carrier. Generate a connected card, clean parts, individual binary STLs or an Everything ZIP containing all four STLs, portable design JSON and numbered assembly instructions.

**External thin flexible thread and removable tape are required. Glue is recommended for the upright seats.** No bearings, magnets or metal hardware are needed. Physical printing, fit, oscillation, adhesion, stability and timing have **not** been tested. This is an educational geometry demonstrator, not a calibrated clock or a claim of verified isochronism.

## Run and reproduce

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node mobile-layout.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node hole-test.cjs
```

Production tests use `http://127.0.0.1:5960/daily-app2/20261105-10/`. Browser tests require installed Playwright Chromium. `TEST_BASE` can override the origin in browser-test and resilience-test. Per-app `predeploy` is exactly `npm run build`, `deploy` is `gh-pages -d dist`; actual publication uses the **root monorepo** `predeploy`/`deploy` and combined `deploy/` directory.

## Reference-first provenance and measurements

Local candidates were checked first under `/Volumes/ExternalHD/3d_printing_apps/`. Keycap Studio's README.md, src/styles.css, src/App.tsx, src/Viewer.tsx, worker.ts, geometry/stl.ts and export.ts were inspected, along with the fabric generator README. Actual local STL meshes were parsed, not inferred from filenames: the MX template has three edge-connected components and is unsuitable for sheet-card joints; the 8 mm-high fabric link is a single interlocking link and unsuitable for planar slots. No unrelated switch socket is imposed on this kit.

Selected reference: **White Cat Kit Card**, **Mike Kasberg**, [upstream repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Upstream README/licence are preserved as `REFERENCE-UPSTREAM.md` / `REFERENCE-LICENSE.txt`. Direct public STL URL, licence hash and detailed analysis are in `reference-analysis.json`.

- Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 1,530,884 bytes, 30,616 triangles, approximately **179.82 × 178.02 × 3.19 mm**. STL has no unit metadata; mm is assumed from sheet/slot dimensions and upstream design.
- 27 edge-adjacent components, including duplicate/degenerate zero-volume pseudo-components. The full source is **nonmanifold**. This is recorded honestly, not a repair or source printability claim.
- Actual sections at Z=.10, .215 and 1.59 mm show repeated **4.50 × 1.70 mm receiving slots**, **1.60 mm sheets** and **.21–.22 mm low runners**. See `evidence/reference-sections.png`.
- Preserved measured default: **1.60 mm panel and 1.70 mm receiving width**. The measured .10 mm TOTAL difference is a starting fit allowance, not a universal printer tolerance.
- Proposed redesign: two **6 mm tongues**, receiving length **6 + clearance**, **3 mm engagement**, full sheet-thickness blind floors; runners strengthened to **.4–.6 mm**. These are new dimensions, not measured source dimensions.
- New original geometry: actual parametric cycloidal cheeks, finite apex notch, lower/upper/side frame beams, pendulum bob and paired plinth seats. This is **not a source mesh re-export or hull substitution**. The source's sheet/slot/carrier construction is adapted, not its fan-art silhouette. No raw source STL or personal mesh is redistributed; reference trees remain read-only.

`reference-analysis.py` parses both local candidate files and the publicly downloaded selected mesh, measures sections and records hashes/components. Python dependencies are trimesh, numpy, matplotlib. The source mesh is expected in `/tmp/huygens-reference.stl`, never in this repository.

## Physical model and parameter contract

All lengths **mm**, artwork rotations degrees. Bounds are enforced in UI and worker; invalid edits disable export, including when a last-good preview remains visible.

| Parameter | Supported range |
|---|---|
| Card width / height | 220–280 / 180–240 |
| Cycloid radius `a` | 8–12 |
| Finite apex opening | .8–1.6 |
| Bob diameter | 8–12 |
| Panel thickness | 1.6–2.4 |
| TOTAL slot allowance | .10–.30 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Art footprint / depth | 4–7 / .4–.6 |
| Art X / Y shift | ±1.5 / ±2 |
| Art rotation | ±180° |

Plinth envelope is 114 × 50 × (sheet+3). Three plinth silhouettes: rounded, clipped, scalloped. Upright width = `2*(π*a+gap/2+12)`, cusp height above plinth = `4*a+18`, full frame height = `4*a+26`, tongue pitch = frame width−18. Bob's 1.6 mm through-hole is at .275 × diameter above its centre; minimum outer wall around it is 1 mm. At rest, the bob-hole centre is 18 mm above the plinth, so the nominal free thread is **L=4a**, 32–48 mm. Three real presets and model thumbnails change actual radius/bob geometry.

Guide edges use `x=±(gap/2+a*(t−sin(t)))`, `drop=a*(1−cos(t))`, 0≤t≤π, sampled at 65 vertices per side. This is not a circular-arc approximation. The classic ideal zero-gap, zero-size string/bob model gives `x=a*(t+sin(t))`, `drop=a*(3+cos(t))`. **The finite notch, thread thickness, knot, tape anchor, layer texture, printed bob and friction depart from that ideal.** No period prediction, precision or tautochrone performance is promised.

The assembled view shows rest position, with a labeled preview-only external thread line. Exploded offsets explain assembly only. No fake animated oscillation, finite-element model or invisible hardware. Exports are always the real bed-flat solids; parts are distinct after snipping. The frame is gravity-seated, not captive; glue recommended. Nominal bob-envelope collision checks are geometric bounds, not a string-contact or dynamics solver.

## Local imports and personalization

Both file-picker and desktop drag/drop work. Bundle includes original synthetic fixtures only in `public/samples`, with attribution. Replace/remove, image reset, transform reset and full reset are explicit and recoverable.

**PNG/JPEG:** extension/signature, 2 MB size, ≤12 MP and ≤6,000 px side are checked before decode. Normalized portable image ≤500 px per side. Contain/cover fit, ±25% crop shift, light/dark background, threshold 1–254 and grayscale modes sample a **20×20 luminance grid**. A triangulated closed height-field cutter is Boolean-subtracted from the solid apron. Threshold mode uses depth for dark pixels; grayscale uses `depth*(1−luminance/255)`. Transparent/light background becomes full backing; bright interior holes remain unengraved. Checkerboard displays the exact sampled cutout. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photo**, and not exact vector tracing.

**SVG:** simple filled vector shapes/paths, ≤2 MB / 2,000 elements, locally rasterized at 256 px, then same sampled conversion. Scripts, references, embedded/external resources, effects and unsupported elements are rejected; convert text to paths. Text up to eight characters and six original searchable bundled SVG icons follow this exact pipeline. Raised art is deliberately unsupported so the plinth retains its envelope and a guaranteed backing.

**ASCII/binary STL:** strict content parsers, ≤2 MB, ≤1,500 triangles, .2–250 mm per source axis. Weld tolerance 1e−5 mm. Accept only one closed, outward-wound **convex, flat-bottom solid** with a broad bed footprint and no unsupported overhang. Convexity is a *validation restriction*, not a hull replacement: unsupported concavities, hollow shells, open/nonmanifold parts and degenerate geometry are rejected with guidance. No repair is claimed. Source preview and actual oriented dimensions are shown; millimeter confirmation gates use because STL has no units. Choose Z-up, Y-up or −Z-up before attaching; changing axis requests reattachment. Proportional XY footprint scaling and separately bounded Z engraving scaling, rotation and XY placement operate on the **actual source vertices**, followed by real Boolean subtraction into the plinth. Not a texture, unchanged re-export or interpenetrating shell.

Art is confined to a 5.8 mm keep-in radius at **plinth (−27,−16)**, away from both functional sockets. Depth .4–.6 leaves ≥4 mm backing. The source and final model are both inspectable; transform bounds and keep-in checks are enforced after rotation/placement. Every import remains browser-local: no uploads, API keys, remote generation or personal files in the repository.

## Studio, persistence and exports

Concrete Keycap Studio patterns: 374 px scrollable LEFT rail, compact sticky branding/theme, labeled collapsible sections, paired sliders/numeric mm fields, raised/pressed tactile buttons, lavender-grey #e7e9f1 desk, white panels, #1f2233 ink, coral #e2557a selection, locally bundled Fredoka/Rubik and a large rounded RIGHT Three.js viewer. Phones stack preview/toolbar, dimensions/warnings/export, then controls. Saved coherent dark theme, visible focus and reduced-motion CSS. Local studio infrastructure is reused; mechanism, fit layout, equations, tests and instructions are new.

Worker-owned Manifold WASM does solid booleans with bounded resolution, 100 ms debounce, request IDs and exact current-state keys. Stale/error/invalid builds cannot export the last-good model. Preview and export share the same final vertex/index arrays; visible FNV mesh fingerprints are checked against downloaded binary bytes and regenerated portable JSON in browser tests. Worker-loading failure disables export; reload recovers.

Undo/redo, six named local designs, portable JSON save/open all include bounded normalized image/accepted mesh payloads. Missing image payload requires explicit reattachment; invalid payloads block export. No fictitious restoration. Orbit/zoom/fit/top/front controls support touch. Assembled/exploded/card/clean plate/isolated views use the same solids. Preview colours are **not stored in STL**. No fake 3MF export.

ZIP contains connected card plus three clean STLs, design JSON and numbered assembly notes. Print at 100% scale, bed-flat Z=0, .16–.20 mm layers, .4 mm nozzle, PLA/PETG starting point. Inspect first layers and use elephant-foot compensation. Cut twelve low runners with flush cutters outside clean outlines, deburr, calibrate seats before glue. Tie bob thread, tape at apex, measure nominal L, keep string in frame plane, and guide only small gentle swings. Detailed numbered notes are embedded in app/ZIP.

## Validation and dependencies

`validate.mjs`: defaults, three presets, every single-field endpoint, simultaneous min/max, all silhouettes, sixteen radius/gap/bob/sheet corners, threshold/relief and accepted ASCII/binary-derived variants. Independent binary checks verify byte lengths, finite coordinates, nondegenerate faces, unit normals, winding, welded two-face edge incidence, component positive volume and actual mm bounds. Each clean part is one closed component, card one connected component, clean plate three. All parts individually checked. Kernel intersections verify no flat/assembled collisions, 41 insertion positions, 65 **nominal** bob-envelope samples, real cycloid edge probes, open sockets/apex/bob hole, backing and bed-footprint support. Snipping all runners must leave exactly carrier+three unharmed parts, no debris.

Production-browser suites exercise real PNG/JPEG/ASCII/binary pickers and downloaded bytes, threshold/depth/pixels/scale/rotation/placement, malformed/oversized/open/nonmanifold/concave/empty input, reset/recovery/stale guards, presets/text/icons/SVG holes, JSON/named designs/undo/redo, all views, per-part/ZIP, worker abort, 320/390/480 px layouts, actual touch orbit/pinch, exports/focus/dark theme. Reports/screenshots alongside source record checks actually run; see `VALIDATION.md`.

Dependencies installed locally: React, Vite, Three.js (MIT), Manifold WASM (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages and test-only Playwright. No CDN imports or service dependencies. Computation does **not** substitute for physical printing, glue adhesion, wear, force, thread-contact, fatigue or dynamics testing.
