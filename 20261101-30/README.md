# Suspend & Centre

A local React + Vite **flat-pack kit-card generator** for a centre-of-mass suspension experiment. Snip sixteen real breakaway runners, bond a two-tongue portal into a signature base, then hang an asymmetric lamina and separate plumb bob using an external Ø2 ×30 mm bamboo rod and two soft threads. Rehang the lamina from its three eyes and trace gravity lines on removable tape. The lines approach its centre of mass under a homogeneous-material assumption.

This is a physical assembly, not a browser game or simulated measuring instrument. The UI shows three ideal static poses and the actual mesh's calculated centroid. Cord lengths/front offsets are illustrative and adjustable by the maker; the viewer is not a dynamics solver. No physical print, cord-friction, accuracy, strength or tipping test has been performed.

## Run, build and tests

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node personalization-check.mjs
```

Production test server: `http://127.0.0.1:5690/daily-app2/20261101-30/`. `TEST_BASE` overrides browser-test origin. `vite.config.js` has base `/daily-app2/20261101-30/`. App scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public combined publication uses the ROOT monorepo's `deploy/` flow, not per-app deployment.

## Reference-first evidence and attribution

Local collections were inspected **before selecting geometry**. Read-only Keycap Studio's README, `src/styles.css`, `App.tsx`, `Viewer.tsx`, worker, imageTrace, STL and export modules informed the studio layout and workflows. Its actual clicker template was parsed: SHA-256 `292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9`, 944 triangles, 15.20 ×15.20 ×43.10 mm, three components. Fabric Fidget's README and diamond-link STL were also inspected: SHA-256 `8146cd758a8c0218560a3fe7cdd7b6ad23304fe9e4472ff0259e18266f4ed9fd`, 5,940 triangles, 7.9805 ×9.2412 ×8 mm, one component. Neither is a suitable flat-sheet carrier/socket reference. No switch cavities were imposed on this kit.

The selected geometry reference is **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Actual binary STL downloaded and parsed: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.819997 ×178.019994 ×3.190000 mm; 27 edge-adjacent components. Source has defective/nonwatertight components; we do not claim to repair or redistribute it. No spacecraft/fan-art outlines were copied.

`reference-measure.py` parses STL, measures components and Z planes, and cuts actual mesh sections at Z=.10/.50/1.59 mm. Run with Python plus trimesh/numpy/scipy/networkx/matplotlib, passing the downloaded source path. `reference-measurements.json` records raw evidence, `evidence/reference-sections.png` shows inspected sections, and `reference-analysis.json` maps measurements to design. Units are assumed millimeters, corroborated by source sheet sizes; STL contains no units. Source README and CC license were inspected; license is in `REFERENCE-LICENSE.txt`. Raw third-party/private meshes are not bundled.

**Measured versus redesigned:** source sheet planes at 0/1.60 mm and four section loops measuring 4.50 ×1.700012 mm establish the sheet-to-socket interface. New base sockets preserve 4.50 mm length and use `(sheet+total allowance)` width; portal tongues use `(4.50−allowance) ×sheet`. Default .20 mm total allowance makes a 4.50 ×1.80 mm socket, deliberately looser than the source's 1.70 mm. Fit is not universal. Source low webs at .21–.22 mm inform real breakaway connections, redesigned as bed-aligned .4–.6 mm runners. Sheet thickness beyond 1.60 mm, portal/lamina/bob, three-eye gravity interaction, bounds and all tolerances are new. Original robust Boolean reconstruction, not a source re-export or convex hull.

Unlike Grid & Gaze's fixed observation grid, Plumb & Plane's angle indicator or Hang & Trace's draped catenary, this kit rehangs an asymmetric **free lamina** from three different eyes and uses a separate front plumb line to locate a mass centroid. Changing its off-centre opening changes the calculated result.

## Studio and dependencies

Concrete Keycap Studio patterns: 374 px scrollable LEFT control panel, compact sticky branding/theme, collapsible sections, paired sliders/numeric mm inputs, tactile raised controls/pink selected states, lavender-grey desk `#e7e9f1`, white panels, dark ink `#1f2233`, coral `#e2557a`, rounded locally bundled Fredoka/Rubik, checkerboard cutout, large RIGHT Three.js viewport and preview-first stacked phones. Accessible ≥44 px targets, focus outlines, reduced-motion handling, saved coherent dark theme, touch orbit/pinch/zoom/fit. No source project changes, deploy scripts, Git history or dependency trees copied. Shared studio/import infrastructure was adapted from earlier daily-app2 work; this model, centroid calculation, assembly transforms and mechanism checks are new.

Locally installed/bundled React, Vite, Three.js, Manifold WASM, fflate and Fontsource fonts. Playwright is a development dependency. No APIs, server-side geometry, paid services, CDN modules or remote runtime font/model requests.

## Parameters — millimeters

| Parameter | Supported range / function |
|---|---|
| Card width / height | 160–210 / 170–220 |
| Lamina width | 34–44; height = .82 ×width |
| Off-centre opening radius | 4–7; shifts the real volume centroid |
| Portal height | 72–92 |
| Sheet | 1.6–2.4 |
| Total socket allowance | .10–.30, not per side |
| Part-to-carrier spacing | 3–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Socket length / cord-eye diameter | 4.50 / 2.40 |

Base is 88 ×42 mm, portal is 68 mm wide with 8 mm legs/top rail, bob 10 ×18 mm. Three true model-thumbnail presets, real square/rounded/clipped contours, bounded variations, reset, undo/redo, six local named designs and portable JSON. Invalid combinations block export. Three eye poses are preview controls, not printable colours or motion claims.

The lamina volume centroid is computed by signed tetrahedral integration of its actual Boolean mesh, including opening and eye removals. Flat-print origin corrections and rigid eye-alignment transforms put that centroid directly below the selected eye. Nominal placement clears the base, portal and bob. Homogeneous material means **100% infill** is recommended for this experiment; slicer infill, tape, pen and thread forces can alter the physical result.

## Image → actual model geometry

File picker and drag/drop support PNG/JPEG and a restricted simple SVG subset. Files 16 bytes–2 MB; PNG/JPEG ≤12 MP, ≤6,000 px side, normalized to ≤500 px. Header size checks precede decoding. SVG ≤2,000 simple shapes; scripts/text/references/external resources/filters are rejected and supported vectors are rasterized locally to 256 px. Synthetic samples: `mark.png`, `waves.jpg`, `ring.svg`.

The exact documented method is **20 ×20 sampled grayscale height-field extrusion**, closed with sides/bottom and Boolean-subtracted from the base at (0,9). It is **2D-to-relief, not automatic 3D reconstruction from one photo**. Threshold 1–254 or grayscale relief, light/dark background, contain/cover crop and ±25% crop offsets change the sampled surface. Physical footprint4–7 mm, depth.4–.6 mm, rotation±180°, X±1.5/Y±2 mm placement alter exported geometry. Text up to8 characters and six searchable bundled icons use this same conversion route.

Source and actual sampled cutout appear on checkerboards. Bright/transparent holes remain uncut with solid backing, verified by kernel probes of a ring. Boundaries are interpolated slopes at bounded grid resolution, **not exact SVG tracing**. Engraving is confined to radius6.5 mm, separated from sockets. Minimum base backing is1 mm. Raised marks are unsupported to preserve a bed-flat constant-sheet envelope. Replace/remove/reset, scale/rotate/placement and default return work.

## STL → actual model geometry

ASCII and binary `.stl`, ≤2 MB, ≤1,500 triangles; each source extent.2–250 mm. Checks: finite coordinates, nondegenerate faces, welded1e−5 mm two-face/opposite edge incidence, consistent winding, single component, positive volume, triangle intersection, convexity and broad flat-bottom/no-overhang contract. **Concave, hollow, open, self-intersecting, multibody or unsupported meshes are rejected**, not replaced by a hull or claimed repaired. A footprint hull is used solely for support validation, never as generated geometry.

Select Z/Y/−Z up before attaching; changing axis clears the source and requests reattachment. Source preview, oriented dimensions, triangle count and format are visible. Confirm millimeter units explicitly because STL lacks unit metadata. Original source vertices are proportionally scaled in XY to4–7 mm footprint, independently in Z to.4–.6 mm engraving depth, centered, rotated and offset. Both scale factors are shown. The actual mesh is Boolean-subtracted into the protected base patch, not merely displayed or re-exported. Transformed footprint must retain ≥1.2 mm shortest XY dimension. Synthetic ASCII wedge/binary gem samples are bundled. Source transforms measurably survive in downloaded output.

## Responsiveness, saved state and privacy

Heavy CSG and mesh parsing use a Web Worker with bundled WASM, bounded complexity,100 ms debounce, request IDs and exact current-state keys. Every model edit runs final mesh checks. Image-conversion/current-result mismatch, import errors, worker loading errors or invalid parameters disable **all** exports; a last-good visible preview is explicitly labeled, never silently exported. UI fingerprints compare exact preview bytes to real downloaded STL in tests.

All personal files remain on-device in memory or requested local saved designs. No upload, API or repository persistence. JSON/named designs contain bounded normalized image and mesh payloads; missing images explicitly request reattachment. Reopened mesh payloads are revalidated. Theme is local. Imported files are not committed.

## Views, export and assembly

Connected card, de-tabbed print plate, exact assembled/exploded and every isolated-part view use the same checked solids. External bamboo rod and threads are **illustrative preview-only objects**, not printable geometry; exploded offsets are explanatory. Per-part binary STL, real connected-card STL, loose plate STL and Everything ZIP (five STLs plus numbered instructions/current fits). STL carries no preview colours. No fake3MF.

Print all parts bed-flat at100% scale; PLA/PETG,.16–.20 mm layers,3 perimeters; no supports intended. Print base/portal samples to calibrate fit before a full card. Snip sixteen accessible runners1.6 mm outside contours, trim/file nubs, protect functional tongues and eyes. Lower portal straight into both sockets, dry-fit, square, bond and cure. External supplies: **one Ø2 ×30 mm straight bamboo rod/skewer, two soft threads, removable paper tape, fine pencil and compatible adhesive**. No bearings/magnets/fasteners. Glue the rod horizontally through the Ø2.4 mm top portal eye, perpendicular to its sheet, with20 mm projecting forward and10 mm behind. Tie and secure the short plate thread10 mm forward of the portal and the longer bob thread15 mm forward. Both threads hang vertically in separate planes, bob in front. Adjust knot lengths to keep both free; glue knots to stop sliding. Mark plumb line on tape, rehang from another eye, repeat. See `ASSEMBLY.txt` and in-app numbered guide.

## Validation and limitations

`validate.mjs` independently parses float32 STL bytes: exact length/count, finite vertices/normals, nondegenerate triangles, normalized normals consistent with outward winding,1e−5 mm welded edges with exactly two opposite faces, positive volume **per** component, component count/genus and expected mm bounds. Checks cover defaults, three presets/silhouettes, each range endpoint, combined extrema and image/STL variants. Kernel checks: every final part one solid; connected card one solid; four de-tabbed solids disjoint; card contains every part; all16 snips avoid functional parts and release four parts+carrier; card envelope/bed-aligned support footprint; portal insertion at36 positions, both socket/tongue/shoulder stops; all three hanging poses collision-free with centroid below eye.

Browser suites exercise actual PNG/JPEG/ASCII/binary file-picker imports and STL downloads, changed pixels/threshold/depth/crop/scale/rotation/placement against default bytes, malformed/excessive/empty/nonmanifold/unsupported inputs, recoverability/stale gating, real ZIP contents, every preset, text/icons/SVG/holes, undo/redo, named/JSON asset round-trips, worker failure/reload, dark theme/focus/collapsible sections, production worker/WASM paths and touch phone orbit/pinch/downloads. Reports and screenshots are stored alongside the app. Geometry tests are computational evidence, **not physical print or experimental accuracy validation**.
