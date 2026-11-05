# Eyelet & Lace

A local React/Vite maker studio for a **three-part shoe-lacing practice kit card**: a personalized sole and two pierced upright eyelet wings. Snip twelve real runners, dry-fit the four blind sockets, glue and cure, then thread external soft cord across the eyelet rows and practice a bow. This is a desktop assembly, not footwear, a load-bearing product or a rope simulation.

## Reference-first construction

Before choosing the final geometry, local clicker and fabric-link STLs were parsed and rejected as unrelated to sheet construction. The selected reference is **White Cat Kit Card**, Mike Kasberg, [source project](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. `REFERENCE-LICENSE.txt`, `REFERENCE-UPSTREAM.md`, `reference-analysis.py`, `reference-analysis.json`, and `evidence/reference-sections.png` preserve source evidence. Raw source STL is **not redistributed**.

Selected binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. It has 30,616 triangles, approximately 179.820 × 178.020 × 3.190 mm bounds. Units are assumed millimeters; STL has no metadata. Edge adjacency reports 27 components including zero-volume duplicate/degenerate pseudo-components; the source as a whole is not manifold. It was inspected, not passed through as printable geometry.

Actual cross-sections at Z=.100, .215 and 1.590 mm show a **1.60 mm sheet**, **4.50 × 1.70 mm slots** and runner tops around **.21–.22 mm**. The original reconstruction keeps the 1.60 mm default sheet and .10 mm total slot allowance, strengthens runners to .4–.6 mm, replaces 4.50 mm slot lengths with **6 mm wide tongues**, and uses **3 mm blind sockets** with a floor equal to the sheet thickness. No source spaceship shape or raw triangles are copied. New eyelet topology, hole count, span, bore and wing gap implement an entirely different assembly/interaction, not a reskin of a prior mechanism.

Read-only visual/interaction reference: `keycap_generator2` README, App.tsx, styles.css, Viewer.tsx, worker.ts, export.ts and STL parser were inspected. Concrete patterns used: 374 px scrollable left studio panel, paired numeric/range controls, collapsible sections, raised key-like selection controls, lavender desk/white panels/coral accents, saved dark theme, checkerboard image cutout, source-aware import editor, worker-owned Manifold, current-state export gating and explanatory assembled views. No reference Git history, dependency tree or raw source mesh was copied. Shared studio infrastructure is adapted from earlier original Daily Object Lab apps; geometry and assembly checks are new for this kit.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
```

Production base is `/daily-app2/20261105-16/`. All generation, preview, import and export dependencies are bundled locally: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fredoka/Rubik (Fontsource, SIL OFL). No API, server processing, CDN, keys or paid service. Publishing is through the parent monorepo deploy, not the individual deploy script.

## Parameters

All lengths below are **mm**. Values outside supported ranges, fractional eyelet counts, unsafe art placement and impossible card packing block export.

| Control | Supported range | Geometry affected |
|---|---|---|
| Card X / Y | 220–280 | Real connected carrier envelope |
| Eyelet row span | 42–64 | First-to-last eyelet centres |
| Wing midplane gap | 18–32 | Actual opposing socket stations |
| Eyelets per wing | 3–6 integers | Number of real through-bores |
| Bore diameter | 3–5 | Cord aperture; recommended 2 mm soft cord |
| Wing sheet | 1.6–2.4 | Panel thickness and socket floor |
| Total socket allowance | .10–.30 | Added once to tongue width and receiver sheet width |
| Part spacing | 3–5 | Card bays / snip access |
| Runner width / thickness | .8–1.2 / .4–.6 | Real removable bed-aligned tabs |

Pitch = span/(count−1); minimum hole web is checked ≥3 mm. Wing rail height is 22 mm, hole centres 15 mm above shoulder, with ≥3 mm upper/lower ligaments. Tongues are 6 × 3 mm with shoulders. Clearance is a starting point, **not universal**; print the sole plus one wing as a full-size calibration sample. Three actual worker-rendered presets, three sole silhouettes, text and six searchable original vector icons, undo/redo, six local named designs and portable JSON save/open are included.

## Image → geometry

Desktop/phone file pickers and drag/drop accept **PNG, JPEG and simple SVG**. 16 bytes–2 MB; raster dimensions ≤6,000 px per side and ≤12 MP, verified from headers before decoding. Images are normalized to ≤500 px on the longest side. Simple SVG is locally sanitized (no scripts, links, external resources, effects or text), rasterized to 256 px, then processed identically.

Contain/cover fit, ±25% crop shift, light/dark background removal, threshold 1–254, threshold/grayscale mode and .4–.6 mm depth change the actual solid. A **20×20 sampled height grid** becomes a closed triangulated solid and is Boolean-subtracted from a protected sole apron. Threshold converts dark samples to depth; grayscale uses depth×(1−luminance/255). Alpha is composited onto the selected background. Bright holes retain original material; interpolation softens sampled boundaries. A checkerboard shows the actual sampled cutout. This is **2D-to-relief**, not reconstruction of a whole 3D object from a photo. Empty silhouettes and invalid controls are recoverable errors; exports stay disabled.

## STL → geometry

Both **ASCII and binary STL** are parsed locally in the worker. Limits: 2 MB, ≤1,500 triangles, .2–250 mm per axis. Accepted contract: one connected closed outward-facing **convex** broad flat-bottom solid whose XY projection stays within its bed footprint. Open/nonmanifold, inverted, degenerate, self-intersecting, concave, hollow, disconnected or unsupported overhanging models are explicitly rejected, never silently repaired or replaced by a convex hull. The hull calculation is only a bed-contact validation, not replacement geometry.

Select Z/Y/−Z up **before** attaching; confirm that source coordinates mean millimeters. The source preview and dimensions are shown. Uniform XY footprint scale (4–7 mm), independent engraving depth (.4–.6 mm), Z rotation and local XY placement transform the actual source triangles. Those triangles are Boolean-subtracted into the sole, changing the exported solid rather than re-exporting an unchanged input. A 5.8 mm keep-in disc avoids sockets/edges; no moving joint is fused and backing remains ≥1 mm. The safe zone contract intentionally rejects unsupported meshes and placements. Replace/remove, centre/reset and built-in defaults are recoverable.

## Privacy and portable designs

All personal files stay in browser memory/localStorage, never uploaded or committed. Only synthetic test fixtures are bundled in `public/samples/`; see their attribution. JSON/named saves include bounded normalized images or verified mesh arrays. Missing image payloads require explicit reattachment. Imported assets are not pretended to exist after a missing-payload restore. Design JSON ≤2 MB; normalized portable image payload ≤1.8 million characters / 250k pixels. Worker request ids, input keys and asynchronous import versions guard stale results; only current valid geometry exports. No stale last-good export option is silently enabled.

## Preview and export

Assembled, exploded, connected flat card, clean print plate and isolated-part views use the same generated geometry. Touch orbit/pinch, fit, top/front and zoom controls are provided. Wing lift and explosion are explanatory only. The external cord map is an **ideal top projection**, not a simulated cord, force or knot. Its centreline length is a lower bound excluding knots, turns and slack, not a cut-length recommendation.

Per-part **binary STL**, connected card STL, clean plate STL and Everything ZIP are real exports. ZIP includes four STLs, portable design JSON and numbered assembly/print instructions with current fits. Preview and export use the same exact checked model; UI signature is tested against downloaded bytes. STL has no colours. No 3MF is claimed.

## Printing and assembly

1. Print the card OR three clean parts flat at Z=0; PLA/PETG, .16–.20 mm layers, .4 mm nozzle. No supports intended. Check your bed size (default card 240×240 mm).
2. Snip all twelve accessible low runners and trim nonfunctional rail scars. Discard carrier; preserve tongues and cord bores.
3. Calibrate sole/one wing first. Lower both tongues of each wing vertically into the blind sockets. Do not bend or force a tight fit. Dry-fit, **glue and allow to cure before lacing**; the gravity-seated joints are not positively retained.
4. Supply ~500–800 mm soft cord around 2 mm diameter and appropriate adhesive. Deburr bores. Thread first opposing pair from outside to inside, equalize ends, cross through successive opposite eyelets and hand-tie a bow. Flexible cord bends at each aperture; no rigid taut-line passage is claimed. Use light hand tension only.
5. No hardware is needed. This is not footwear or load-bearing. Keep small parts/cord away from unsupervised children. Stop if wings bend or loosen.

## Verification versus physical testing

`validate.mjs` independently parses float32 binary exports, checks finite/nondegenerate triangles, normalized normals, bounds, welded-edge two-face incidence/opposite winding, connected-component positive volume and expected component counts. Manifold intersection probes check separately printed parts, all 12 tab cuts (carrier + exactly three intact released parts), card envelope, support-free footprints, clean/connected-card apertures, four socket voids/backing, all insertion positions and 2 mm straight cord passage at each hole. Every preset, shape, per-control bounds, combined extrema and image/STL variations run these checks.

Production Playwright scripts exercise real PNG/JPEG/ASCII/binary file pickers and downloaded STLs, image pixels/threshold/depth, transform changes/reset, malformed files, disabled invalid export, source restoration, ZIP contents, all icons/text/SVG holes, worker failure recovery, stale imports, themes, keyboard focus, reduced motion, desktop panel and 320/390/480 px preview-first layouts, actual touch orbit/pinch and reachable downloads. Reports/screenshots record what actually ran.

**No physical printing, joint fit, adhesive strength, cord wear, lacing or durability testing was performed.** Computational geometry checks do not guarantee those outcomes. See `VALIDATION.md` for actual run results.
