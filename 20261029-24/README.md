# Stack & Transfer

A **four-ring, three-post physical transfer-tower kit card**. Snip 32 accessible runners, insert and glue three shouldered flat posts into a broad base, then stack and lift the four loose annuli over the uncapped posts. The familiar Hanoi ritual is performed with the printed object, not played in the browser. Four rings admit a 15-move transfer with larger rings always below smaller rings.

The card is one actual Boolean-unioned solid holding **eight separately removable parts**. This is not a loose print layout or an unchanged imported STL. Ring sizes, post dimensions, fit allowances, carrier and base silhouette are parametric. No physical print or fit test has been performed.

## Run / build

Node 22.12+:

```sh
npm install
npm run dev
npm test
npm run predeploy
npm run preview -- --host 127.0.0.1 --port 5404
node browser-test.cjs
node studio-test.cjs
node supplemental-test.cjs
```

Production base: `/daily-app2/20261029-24/`. Browser tests use that exact production prefix; set `TEST_BASE` to change the host/port. The individual scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public publication uses the **parent monorepo's combined root deployment**, not the individual deploy command.

## Actual reference, read-only

Local STL collections were considered first. `keycap_generator2` contains real switch-template meshes, `fidget_fabric_generator` contains interlocked links and `slider_fidget_generator2` contains radial sliding sectors. Their instructions were inspected, but those interfaces are inappropriate for a bed-flat removable kit. Local kit-card projects have no suitable source STL. Neither local reference tree nor the old `daily_app` gallery was changed.

Chosen public mesh: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [public source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution does not imply endorsement; no warranty is inherited. The actual binary STL was downloaded and parsed for this build. It is **not redistributed** in this app.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; 179.819997 × 178.019994 × 3.190000 mm.
- 27 edge-adjacent components including tiny fragments; the reference is not watertight under this analysis. It is not used as exported geometry or claimed repaired.
- STL contains no unit metadata. Millimeters are corroborated by the public source SCAD's sheet/frame conventions.
- Actual Z=.10/.50/1.59 mm sections were generated and visually inspected: `evidence/reference-sections.png`.
- **Measured:** the principal planar sheet is 1.6 mm, carrier rail approximately 1.6 mm, low bridge elevations .21/.22 mm.
- **Retained:** bed-flat sheet construction; a connected surrounding carrier with low removable connections.
- **Redesigned, not measured fits:** 2.4 mm carrier, .4–.6 mm runners, three shouldered post tenons/sockets, four annuli, layout, .10–.35 mm total socket allowance, .35–.8 mm radial ring allowance, personalizable broad base.

This is an original parametric reconstruction of the sheet/carrier design principle, not the source spacecraft or a convex-hull substitute. `reference-analysis.json` includes source, hash, exact bounds, component counts, Z-plane counts and measurement/design distinctions. Reproduce with `python reference-inspect.py /path/to/public-source.stl` using numpy/trimesh/matplotlib; raw source stays outside the repo.

### Studio reference

Read-only `keycap_generator2`: README, `src/styles.css`, `App.tsx`, `Viewer.tsx`, worker, geometry STL reader, image tracing and export modules. Concrete adopted patterns: 374 px left scrollable controls; sticky compact brand/theme header; collapsible labelled sections; paired mm range/numeric inputs; raised key-like buttons with pressed selection; #e7e9f1 desk/#1f2233 ink/#e2557a accents; local Fredoka/Rubik fonts; saved dark theme; broad gradient-backed right viewer with toolbar, dimensions/status and exports; explicit imported-base units/transform editor, source/final previews and worker computation. Phone layout puts the preview and exports ahead of stacked controls. Shared studio plumbing from earlier Daily Object Lab apps is reused, but all eight parts, new assembly, ring paths and validation are specific to this kit. No reference Git history or dependency tree was copied wholesale.

## Dimensions and fit

All length values **mm**; rotation degrees; thresholds 1–254.

| Control | Supported range |
| --- | --- |
| Card width / height | 170–220 / 170–220 |
| Smallest ring outside diameter | 18–22 |
| Diameter increment, four rings | 4–6 |
| Post above-base height / width | 24–38 / 5–7 |
| Radial bore allowance | .35–.8 |
| Total socket allowance | .10–.35 |
| Sheet / spacing | 1.6–2.4 / 4–6 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Label dimples | 0–.4 depth |

Three real mesh presets: Coral Quartet, Pocket Transfer and Generous Stack. Rounded, chamfered and deeply chamfered/tapered base profiles alter the exported solid. Impossible combinations that do not fit the declared card are blocked, never silently rescaled. Bounded variation uses a 220 mm card to accommodate its range.

For ring diameters `d[j]=small+j*step`, let `Dmax=d[3]`, `pitch=Dmax+5`. The base is `3*pitch` wide and `Dmax+34` deep. Socket stations are X=`−pitch, 0, +pitch`, Y=0, leaving 5 mm between maximum-size rings on adjacent posts.

Each post is printed flat with a tenon `postWidth−2` wide and `sheet` long. Its shoulders stop on the base top; tenon ends share the base underside. Through-sockets measure `(postWidth−2+gap) × (sheet+gap)`. `gap` is a **total** fit allowance, not per side. Adhesive at all three sockets is explicitly required; no positive snap capture or universal press fit is claimed.

Each annular bore is `hypot(postWidth,sheet)+2*running`, clearing the **actual rectangular post diagonal**, including ring rotation. A 64-segment cylinder introduces a very small inward chord deviation well below the minimum .35 mm radial allowance. Four sheets stack below every supported post tip. Rings intentionally lift out: removal is the interaction, not a captive-part claim. Artwork is kept outside every ring envelope/socket, on a front medallion centred at Y=`−Dmax/2−9`; a 6.5 mm safe radius leaves at least 2.5 mm between it and the maximum ring envelope.

Connected-card, de-tabbed plate, assembled, exploded and all eight isolated-part views share the same meshes. The small-ring lift control explains vertical removal; lift above the post tip before carrying sideways. Exploded offsets are explanatory only, not print positions. Exports always stay bed-flat; STL does not store preview colours.

## Two local import workflows

Files never leave the browser. Desktop and phone file pickers, desktop drag/drop, replace/remove, transform reset, image reset and return-to-defaults are provided. Original synthetic PNG/JPEG/SVG/ASCII-STL/binary-STL samples are under `public/samples`; no personal or third-party reference meshes are bundled.

### PNG, JPEG and SVG → geometry

Header/content checks precede image decoding. File size 16 bytes–2 MB; ≤12 MP; ≤6,000 px per side; normalize to ≤500 px for portable designs. Simple SVG: ≤2,000 safe shape elements, no scripts/external resources/text/effects, locally rasterized to 256 px. Raster conversion is **2D-to-relief/silhouette**, not full 3D reconstruction from one photograph and not exact vector tracing.

Contain/cover crop, ±25% pan and white/transparent versus dark/inverted background map to a **20×20 luminance grid**. Threshold mode makes binary heights; grayscale mode varies heights continuously. The exact converted cutout is shown on a checkerboard next to the source. A triangulated closed heightfield has .4 mm backing; it is Boolean-unioned into the solid base (raised) or Boolean-subtracted (engraved). Bright holes remain unraised above the continuous base backing; they are not through-holes in the base. Empty silhouettes are blocked. Artwork depth .4–3 mm raised, .4–.6 mm engraved; the thinnest engraved sheet keeps ≥.8 mm backing. Bold art works best; small sampled marks cannot promise fine text legibility.

Text up to eight characters and six searchable bundled vector icons use the same actual local image-to-geometry path. Physical footprint 4–7 mm, Z rotation ±180°, X ±1.5/Y ±2 mm; all transformed vertices must stay inside the 6.5 mm medallion safe radius.

### ASCII / binary STL → integrated solid grip

Complete 40-byte–2 MB input; ≤1,500 triangles; each source dimension .2–250 mm; coordinate absolute values ≤10,000 mm. Binary byte counts and ASCII complete facets are checked. Weld tolerance .00001 mm. Tests require finite/nondegenerate triangles, exactly two opposite-directed faces per edge, one outward positive-volume component, no self-intersections, **convexity, a broad flat bottom and no projected overhang**. Unsupported concave/hollow/branched/disconnected/open/nonmanifold meshes are rejected with guidance, never silently hulled or claimed repaired.

Select Z/Y/−Z up before attachment; changing axis requests reattachment rather than falsely restoring an already transformed source. Source dimensions and format are shown. Explicitly confirm **millimeters**, because STL has no units. XY scale is proportional to a 4–7 mm footprint; independent Z height .6–3 mm; rotation and placement as above. Minimum transformed XY thickness 1.2 mm. Original validated triangles are transformed and Boolean-unioned with .15 mm embed into the front base medallion floor. Import cannot enter a ring, post socket or underside. Source and final solid are both previewable. This deliberately restrictive integration contract is visible in the UI.

## Worker, portable designs and exports

React/Vite + locally bundled Three.js/OrbitControls, Manifold WASM, fflate and Fontsource Fredoka/Rubik (SIL OFL). Playwright is test-only; gh-pages is deployment-only. No API keys, CDN imports, paid services or server generation.

Heavy solid operations and STL parsing run in a worker. 100 ms debounce, generation IDs and exact current-state keys reject stale results. Export is disabled while building, parsing/converting, after invalid edits or missing units/payloads, and on worker failure. Last-good preview is explicitly labelled but not exportable after an invalid edit. The final mesh checker runs in the worker for every generation. Preview/export share the exact valid result; UI signature is compared with downloaded bytes during tests.

Undo/redo holds bounded snapshots. Up to six named designs use localStorage. JSON save/open embeds bounded normalized image payloads and original indexed mesh arrays; STL is reparsed on restoration. Missing image payloads explicitly request reattachment and block export. No missing file is pretended restored. Files are never saved to the repository by the app.

Download real binary connected-card STL, any individual part STL, or **Everything ZIP** containing all nine STL exports (card plus eight parts) and numbered `ASSEMBLY.txt`. No fake 3MF. Selected X/Y/Z bounds are displayed in mm. Every fabrication export is in bed-flat print orientation, independent of assembled/exploded/lift preview.

## Printing and assembly

1. Check the card fits your print bed, or print individual parts. PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls; supports not intended.
2. Print one post and the base first to calibrate socket clearance and compensate elephant foot. Fits vary with printer, material and slicer.
3. Snip the **32** low runners, four per part. Trim the accessible external nubs; never cut ring bores or functional tenons.
4. Insert the three posts vertically until shoulders seat on the base. Check square and **glue** all sockets. Cure adhesive before using rings. No other hardware is required.
5. Stack rings largest-first. Move only the top ring, lifting above the tip before carrying sideways. Keep large rings below smaller ones for a 15-move four-ring transfer ritual.
6. Adult miniature craft: small loose parts, cutters and adhesive. Not for young children; do not use as a load-bearing or measuring tool.

## Validation evidence

`npm test` independently parses generated binary STL bytes: exact byte counts, finite coordinates, normalized outward normals, nonzero triangle areas, expected mm bounds, opposite-directed two-face welded-edge incidence, connected-component counts, positive volume **per component** and valid orientable topology. Cases include defaults, all presets, minima/maxima, mixed extremes and both import-derived outputs. Invalid envelopes/ranges and empty images are rejected. Bright image-ring centre is probed above backing to verify hole preservation.

Actual Manifold intersections test all assembly pairs, each post's vertical insertion, full stacks on all three stations, every ring's lift/turn/carry/lower path, genuine through-bores, layout nonintersection and 32 snips yielding exactly **nine** components (eight parts plus carrier) without damaging functional parts. Tests are independent of the UI's fit labels. See `validation-report.json` and `validate.mjs`.

Production browser tests select real PNG/JPEG/ASCII/binary fixtures and download bytes; compare pixel/threshold/depth/fit/placement/scale/rotation changes against no-import defaults; re-generate the portable state in Node and compare exact preview/download signatures; apply mesh and mechanism checks to imported results. They exercise malformed/open/nonmanifold/concave/excessive files, empty art, invalid dimensions/transforms and recovery; all presets/profiles, text/icons/SVG, named designs, JSON, undo/redo, all views, every per-part STL and parsed ZIP, worker loading failure/recovery, theme persistence, keyboard focus, collapsing sections and reduced motion. Phone 320/390 px checks cover preview-first order, no horizontal overflow, reachable exports, picker imports and actual touch orbit/pinch. Reports: `browser-validation.json`, `studio-validation.json`, `supplemental-validation.json` (Y/−Z orientation and rapid-edit/current-state checks), `combined-browser-validation.json` (full import/download suite against root combined output), `root-deploy-validation.json` and gallery checks; screenshots: `evidence/`, `desktop-validation.png`, `mobile-validation.png`.

**No physical print, fit-force, adhesive strength, stability-under-load, fatigue or durability tests were performed.** Geometric validation does not guarantee a particular printer's fit.

### Live publication verification

The combined root deployment contains all 264 gallery apps with zero failed/skipped builds. GitHub Pages workflow [40846631439](https://github.com/xianghui/daily-app2/actions/runs/40846631439) completed successfully. `live-test.cjs` / `live-validation.json` verify the public gallery and app, bundled WASM worker, actual downloaded built-in/PNG-derived/STL-derived meshes, exact preview/portable-state signatures and the same-file picker reset. Live verification does not imply physical print testing.
