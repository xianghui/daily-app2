# Wave & Phase

An original **eight-part pendulum-wave kit-card generator**, React + Vite. Snip 32 breakaway runners, stand a pierced portal on two socketed feet, and tie five separately printed bobs to ten soft cords. Different effective lengths gradually drift out of phase and approximately reunite. This is not a collision cradle: each bob has its own lane. Foot-joint adhesive and nonstretch soft cord are required; no magnets, bearings, fasteners, paid service or API key.

## Reference-first provenance

Before selecting this geometry, searched local STL candidates under `/Volumes/ExternalHD/3d_printing_apps/`; read relevant project instructions and parsed actual keycap switch and diamond-link candidates. The switch template is three components, not an appropriate unrelated mechanism; the 8 mm fabric link is not a sheet/socket carrier. Their paths, SHA-256, dimensions, component counts and rejection reasons are in `reference-analysis.json`.

Selected **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0** (`reference-LICENSE.txt`). Freshly downloaded actual binary STL, read the repository README and license, parsed and inspected three horizontal mesh sections before final geometry selection. No source tree was edited and no raw third-party STL is bundled.

SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; assumed millimeters (STL has no unit metadata); 179.820 × 178.020 × 3.190 mm. 27 edge-adjacent components including defective fragments; source is **not watertight**. No repair or printable re-export is claimed. Original CSG reconstruction uses design measurements only. `reference-inspect.py`, `reference-measurements.json`, `reference-analysis.json` and `evidence/reference-sections.png` record the analysis. Reproduction requires Python trimesh/numpy/matplotlib and the public source downloaded to `/tmp/wave-phase-reference.stl`.

**Measured:** sheet planes Z=0/1.6 mm, four rectangular socket loops 4.5 × 1.700012 mm, low feature planes .21/.22 mm. **Preserved fit grammar:** our 4.4 mm tongues and (4.4 + total allowance) × (sheet + total allowance) sockets reproduce those slot dimensions at 1.6/.10 mm. **Proposed:** .15 mm default total allowance, 1.6 mm paired cord eyes, .4–.6 mm runner thickness, 32 runners. **Redesigned:** original pierced portal, two feet, five indexed bobs, actual-mesh centroid offsets, phase-length calculation and safe artwork zone. No aircraft outline or switch socket is imposed on this kit. This adapts an actual measured sheet/socket/carrier system, not a filename or stock primitive described as a reference.

Inspected the read-only **keycap_generator2** visual/interaction reference: README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, geometry/stl.ts, imageTrace.ts and export.ts. Concrete patterns adopted: 374 px left rail, white/lavender desk, coral short-shadow tactile controls, paired numeric/slider fields, collapsible sections, saved coherent dark mode, checkerboard cutout, imported-source transforms and 3D preview, current-result export gating, rounded locally bundled fonts and phone preview-first stacked layout. Shared local studio infrastructure was reused; all pendulum assembly geometry and mechanical validation are new. Old gallery and reference trees remain read-only.

## Run and reproduce checks

```sh
npm install
npm run dev
npm test
node extreme-check.mjs
node hole-check.mjs
npm run predeploy
node serve-production.cjs # production base path, port 5455
node browser-test.cjs
node studio-test.cjs
node motion-check.cjs
# after root npm run predeploy:
node serve-combined.cjs # combined root/app, port 5456
node gallery-browser-test.cjs
TEST_BASE=http://127.0.0.1:5456 TEST_REPORT=combined-browser-validation.json node browser-test.cjs
```

Vite base `/daily-app2/20261030-5/`. Per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`, with gh-pages installed. Actual combined public publication uses ROOT monorepo `npm run predeploy` then `npm run deploy` from `daily_app2`, not per-app deployment.

## Parameters and fits (mm unless noted)

| Parameter | Range |
|---|---|
| Card X/Y | 220–280 / 140–180 |
| Portal span / height | 84–110 / 110–135 |
| Bob lane pitch / diameter | 14–18 / 10–14 |
| Longest effective pendulum | 55–75 |
| Slowest cycles per reunion (integer) | 8–14 cycles |
| Sheet thickness | 1.6–2.4 |
| Socket TOTAL allowance | .10–.35 |
| Part spacing | 3.5–5 |
| Runner width / Z thickness | .8–1.4 / .4–.6 |
| Grip grooves | .2–.5 deep |
| Import footprint / STL height | 4–7 / .6–3 |
| Import rotation / X / Y | ±180° / ±1.5 / ±2 |
| Relief raised / engraved | .4–3 / .4–.6 |

Frame span must cover four pitches + bob diameter +16 mm; lane gap must be at least 3 mm. Too-small card combinations are rejected, not silently repacked outside the declared envelope. Feet are 18 × 28 mm. Neck width 4.4 mm, neck length equals sheet thickness; two shoulders bear on foot tops. Foot joints require adhesive after fit calibration. Three real presets and round-superellipse/chamfered/elliptical bob and foot profiles. Identification grooves number the bobs 1–5. Personalization stays in a 6.5 mm-radius lower-header zone centered at X=0,Y=8, separated from slots and swing paths. .2 mm well and engraving limits preserve ≥.8 mm backing.

## Pendulum calculation and assembly

Effective starting lengths `L_i = L_0 [N/(N+i)]²`, `i=0..4`; ideal point-mass periods `T_i = 2π√(L_i/9810)`. Common reunion is `N*T_0`. Each bob's **actual exported mesh centroid** corrects the geometric eye-to-eye span. The Assembly table and current ZIP instructions give effective lengths, eye spans and ideal periods; add loop/knot allowance yourself. Equal-material fine nonstretch .3–.6 mm cord, ten pieces, is required. Tie long then shorten empirically. This miniature has short strings, so knots and eye friction matter substantially.

1. Print flat Z=0, PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Calibrate the clean frame/feet first; do not force. Large card may exceed your bed: individual exports remain available.
2. Snip four runners per part at indicated outside landing regions; flush-trim. Cut lines are 1.6 mm outside part silhouettes and avoid eyes/tongues. All 32 cuts leave eight separate parts plus the carrier.
3. Lower the frame's tongues vertically into both feet. Bond sockets with appropriate adhesive; cure before hanging. No snap-fit or positive retention is claimed. Adhesive-free alternative is a loose horizontal fit study, not an upright working pendulum display.
4. Thread two cords through each bob's paired 1.6 mm holes and the matching paired header holes. Tie loose loops and adjust actual pivot-to-centroid length from the table; eye span excludes knots. Stand bobs vertically, parallel to the frame, left-to-right 1–5.
5. Release all together at ≤6° toward you, perpendicular to the frame. Keep on a level tray. No bob-to-bob impacts are intended. Re-tie if yaw creates contact; paired cords reduce yaw, not a rigid guide.

**Preview-only idealization:** scrub shows a small-angle, rigid-line point-pendulum model, including bob rotation for explanatory positioning. Real flexible cords allow bob pitch and damping; distributed bob inertia, stretch, eye friction, knots and large angles change timing. Formula is a starting calibration, not a clock or exact physical simulation. Exports remain bed-flat independent of scrub/view state. Never invert or pull cords; external knots retain the bobs. Adult desk craft, small parts and cutters. No physical print, timing, string-release, strength, stability or fatigue test has been performed.

## Image and SVG import

Desktop/phone picker, drag/drop and bundled **synthetic** PNG/JPEG/SVG samples. PNG/JPEG ≤2 MB, ≤12 MP and ≤6,000 px per side; extension/content and header checked before decode, normalized locally to ≤500 px. Simple SVG ≤2 MB/2,000 elements; reject scripts, references, external resources and unsupported effects. Rasterize vector fills locally at 256 px, preserving browser fill-rule holes; convert text to paths first.

Exact geometry method: fit entire image or fill/crop into a **20×20 luminance grid**, alpha-composited on the selected light/dark background with inversion, threshold 1–254 or grayscale heights. A triangulated grid height surface, boundary skirt and closed backing form a genuine solid. Threshold relief has .4 mm carrier below sampled heights; engraving subtracts the mirrored solid while retaining bright holes. Checkerboard shows the actual conversion grid. Thin details may disappear or interpolate between cells: this is sampled 2D-to-relief, **not automatic full 3D reconstruction from one photo**. Holes remain unraised/unengraved **over continuous solid backing**, not through the frame. Empty art fails recoverably. Depth, crop, threshold, scale, rotation and placement alter exported triangles. Text up to eight characters and six searchable original SVG icons follow the same local conversion route.

## STL import and solid integration

ASCII AND binary STL ≤2 MB, ≤1,500 facets, .2–250 mm per axis. Show source dimensions and 3D source preview; require explicit millimeter confirmation because STL has no units. Z-up/Y-up/−Z-up is chosen before attaching; changing axis clears import and asks reattachment. Proportional XY size, independent Z height, Z rotation, X/Y placement, reset, replace/remove and built-in reset are real operations.

Supported subset is explicitly **one closed, outward-wound, convex, non-self-intersecting solid with broad flat bed contact and no overhang footprint**. .00001 mm welding, finite coordinates, nondegenerate triangles, opposite edge incidence, one positive-volume component, triangle intersections, convexity, bottom area and footprint support are checked. Open/nonmanifold, inward, disconnected, concave/hollow, branch-like or overhanging sources are rejected with guidance; no repair claim. Convex hull verifies the bottom support polygon only; it never replaces the original mesh. Actual transformed source triangles are Boolean-unioned into the header with .15 mm embed, producing one solid, not overlapping shells or unchanged re-export. Keep-out checks stop imports from reaching mechanism/eyes. Final image-derived and mesh-derived solids use the same closed-mesh and assembly checks as built-ins.

## Studio, privacy and export

Manifold WASM solid operations in a module Web Worker, bounded resolution/complexity, 100 ms debounce, request IDs and current-state-key guards. Heavy STL validation also runs in the worker. Building/ready/error states and actual mesh errors. Last-good preview may remain visible on an invalid edit, but **all exports disable** until the current state has a valid matching result. Preview uses exactly the current printable geometry; only assembly poses and colors are visual.

Orbit, zoom, fit and touch gestures; connected-card, de-tabbed, assembled, exploded and every isolated-part view; see-through aid; ideal wave scrub. Binary STL per part, connected card and Everything ZIP containing every STL plus numbered assembly instructions **and current length table**. STL does not encode preview color; no fake 3MF export. Undo/redo, six named local designs, portable JSON carrying bounded normalized image/actual mesh payloads. Missing assets request reattachment explicitly; no pretend restoration. All user files process locally, no uploads, remote APIs, CDN dependencies or user-file repository persistence.

Dependencies: React/React DOM, Vite/react plugin, Three.js, Manifold-3D WASM (Apache 2.0), fflate, gh-pages, bundled Fontsource Fredoka/Rubik (OFL); Playwright for tests only. See package licenses. Reference section illustrations attributed to Mike Kasberg under CC BY 4.0. Raw public source and local private meshes are not redistributed. Synthetic fixtures have attribution notes under `public/samples`.

## Executed verification

See `VALIDATION.md`, scripts and JSON reports. Independent exported-float32 STL parser verifies exact byte length, finite vertices, nonzero faces, stored unit normals/winding, .00001 mm-welded two-opposite-face edge incidence, positive volume **per component**, expected component counts and millimeter bounds. Default, every preset, all silhouettes, parameter minima/maxima and representative image/STL variations get the same mesh and assembly checks. CSG verifies two-foot insertion path and shoulder stops, all disjoint assembled/flat parts, ideal bob swing samples and analytically invariant-X lane separation. Probes verify twenty real cord eyes, image relief holes and safe 32-cut separation. These are computational geometry checks, not manufacturing or physical performance tests.
