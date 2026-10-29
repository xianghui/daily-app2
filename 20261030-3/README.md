# Comb & Curl — Standing Quilling Comb Kit Studio

A distinct three-part **flat-pack kit-card** generator: snip twelve real runners, stand a blunt-tined comb in two calibrated transverse feet, and loop thin paper strips around the tines to form quilled petals. No metal pins, moving joints, switch sockets or hidden hardware. Paper and adhesive are external consumables. This is not a hair comb, clamp or strength-rated tool.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; base `/daily-app2/20261030-3/`. Individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public deployment uses the parent monorepo root `deploy/` flow. Three.js, Manifold WASM, fflate, Fredoka/Rubik fonts are locally bundled. No API keys, server-side generation, uploads, remote font/CDN requests or paid services.

## Reference-first evidence

Actual downloaded and parsed **White Cat Kit Card**, Mike Kasberg, [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. License retained in `reference-LICENSE.txt`. See `reference-analysis.json` for exact download URL, SHA-256, component counts and measured sections; `evidence/reference-sections.png` shows real sections at Z=.1, .5 and 1.59 mm. `reference-inspect.py` independently remeasures the downloaded file in `/tmp/comb-curl-reference.stl` using trimesh/numpy/matplotlib.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles, approximately **179.82 × 178.02 × 3.19 mm**; STL units assumed millimeters, corroborated by the source design.
- 27 edge-adjacent components; source is not watertight. It is a design/measurement reference, not repaired or re-exported.
- Measured dominant sheet planes Z=0/1.6 mm; four sockets **4.5 × 1.700012 mm**. Source low runners have Z planes near .21/.22 mm.
- Reconstruction maps these interfaces to **4.4 mm tongues**, with sockets `(4.4 + total allowance) × (sheet + total allowance)`. Sheet=1.6 and allowance=.10 reproduce source socket dimensions. Default .15 allowance is a **proposed glue/calibration value**, not a measured universal fit.
- Original design: broad spine, 8/10/12 blunt guide tines, two shouldered tongues, two pierced ergonomic feet and a twelve-runner carrier. Foot/tine geometry and .4–.6 mm runner thickness are redesigned, not source measurements. The spacecraft appearance and source raw triangles are not included.

Local STL candidates were found and parsed first: keycap_generator2's three-part switch template and fidget_fabric_generator's diamond link (hashes/dimensions in analysis). Their cavities/interlocking geometry are unsuitable for a sheet-based craft kit, so the attributed public mesh above was downloaded and inspected. All reference trees and the old daily_app tree remain read-only.

Visual/interaction reference: `keycap_generator2` README, styles, App, Viewer, worker, imageTrace, STL and export modules were inspected. This studio carries concrete patterns: 374 px left controls, sticky compact brand, collapsible sections, paired mm inputs/sliders, tactile pressed keys, selection swatches, rounded right viewer, source/cutout previews, current-build export gating and preview-first phone stack. Light lavender/coral and persisted dark theme; local rounded fonts, visible focus, generous touch targets and reduced-motion support. Shared daily-studio infrastructure was adapted, but the kit geometry/assembly and its checks are new; no reference Git history/dependency tree copied.

## Parameters and assembly

All physical dimensions are **millimeters**. Controls validate before geometry work:

| Parameter | Range |
| --- | --- |
| Connected card | 140–190 × 90–120 |
| Sheet thickness | 1.6–2.4 |
| Tines | 8, 10 or 12 |
| Tine pitch / width / height | 4–6 / 1.8–2.6 / 18–30 |
| Foot width / depth | 26–34 / fixed 24 |
| Total joint allowance | .10–.35 |
| Part spacing | 4–6 |
| Breakaway runner width / thickness | .8–1.4 / .4–.6 |
| Grip groove depth | .2–.5 |

Three real presets include geometry-generated model thumbnails. Soft, chamfered and elliptic feet alter solids. Mechanically bounded variation, undo/redo, text, searchable bundled icons, local named designs and JSON save/open are functional. Impossible overlapping feet, too-small card envelopes and invalid dimensions block export. Spine span `(count−1)×pitch+10`; foot centers at `±(span/2−4)`. A minimum 1 mm gap between feet is enforced. Working tine gap is pitch minus tine width, at least 1.4 mm within ranges. Assembled height is sheet+14+tine height.

1. Print face-up, Z=0, PLA/PETG, .16–.20 mm layers, three walls, at 100% mm scale; no supports intended. Print clean comb and one foot first to calibrate both socket axes. Fit depends on printer, material and elephant-foot compensation.
2. Snip **twelve** runners 1.6 mm away from parts, then trim nubs. Four touch the comb lower spine (not working tips or tongues), four each foot. Connected card is one closed solid; clean parts are separately downloadable.
3. Lay feet flat, align sockets and lower both comb tongues together until broad spine shoulders meet foot tops. **Adhesive is required at both fixed joints**; cure before use. There is no snap lock or friction-only retention claim.
4. Hold feet steady. Gently loop thin 2–5 mm wide paper strips around chosen tines, pinch loops near the bottom and lift the loose bundle vertically off the open tips. Glue paper to itself **off** the tool. Do not glue paper to the blades. Blades are rigid plastic guides, not spring elements or metal pins; avoid tension and flexing, especially at thin/tall settings. Smooth layer edges lightly. Lightweight feet do not promise tip resistance.

Assembled, exploded, connected-card, de-tabbed print layout and isolated-part views all use the same solids. Assembled positions are explanatory, not a force/paper simulation. Downloads always use actual bed-flat print geometry. Optional see-through feet explain the sockets. Orbit, pinch/zoom, fit and picking are local Three.js interactions. Preview colours are **not** stored in STL.

## Image and legend workflow

Choose/drop **PNG/JPEG/simple SVG** (≤2 MB). PNG/JPEG header dimensions are checked before decoding: ≤12 MP, ≤6,000 px per side, normalized locally to ≤500 px. SVG allows ≤2,000 simple filled vector elements, dimensions ≤6,000 px; scripts, external resources, effects and references are rejected, text must be flattened. SVG is rasterized locally to 256 px. Source and exact conversion preview are visible side-by-side, with transparent background on a checkerboard.

Fit/cover crop, ±25% pan, light/transparent-background removal or dark inversion, threshold 1–254 and grayscale mode feed a **20 × 20 sampled continuous height-field** triangulation. Threshold selects raised nodes; grayscale maps darkness proportionally to height. Height-field cells are linearly triangulated, not exact contour tracing. Bright/transparent holes remain unraised or unengraved on the continuous solid backing, including ring interiors. This is **2D-to-relief**, not full 3D reconstruction from a photo. Fine detail may disappear at this bounded resolution.

Scale footprint 4–7 mm, rotate ±180°, place X±1.5/Y±2 mm within the protected 6.5 mm radius badge. Raised depth .4–3 mm; engraved depth .4–.6 mm preserves at least .8 mm backing at minimum sheet. The worker uses real CSG union/subtraction. Text up to eight characters and six searchable SVG icons enter the same raster-to-solid route and are included in exports. Replace/remove/reset restores defaults. All-white silhouettes and unsafe placements give actionable errors and block export.

## STL integration

ASCII and binary STL ≤2 MB / **1,500 triangles**; each source axis .2–250 mm. Strict parser checks complete content, finite coordinates, nondegenerate faces, 1e-5 mm welding, exactly two oppositely directed faces per edge, one connected positive-volume solid, triangle intersections and convexity. **Only closed outward convex, broad flat-bottom meshes without overhangs are supported.** Concavities, cavities, branches, open/nonmanifold/oversize/truncated files are rejected with guidance. No repair or convex-hull replacement is performed; the hull used in a bed-contact *test* never replaces export triangles.

Select Z up, Y up (+90° X), or −Z up before attaching; changing it clears the source and explicitly requires reattachment. Source dimensions, format, triangle count and source 3D preview are shown. **Confirm millimeter units explicitly:** STL contains no unit metadata. XY scales proportionally to 4–7 mm chosen footprint; Z independently to .6–3 mm. Scale factors are shown; rotation, centering and placement are adjustable. The actual mesh is embedded .15 mm into the spine badge and **solid-unioned**, not re-exported unchanged or overlaid as intersecting shells. Minimum 1.2 mm XY feature extent and the circular keep-out boundary are enforced. Imports cannot alter working tines, joints or foot spacing.

## State, privacy and export

All files stay in the browser. No personal inputs in repository. Bundled `public/samples` PNG/JPEG/SVG and ASCII/binary STL are synthetic fixtures, original daily-studio test assets. JSON ≤2 MB stores bounded normalized image data plus conversion settings or validated mesh vertices/indices. Reopened mesh assets are revalidated. Missing image payload explicitly requests reattachment and blocks export. Named saves retain six local designs and report quota errors.

Manifold WASM builds on a Web Worker, with 100 ms debounce, sequence guards and exact state-key export gating. Invalid edits or worker errors disable exports; a last-good preview is visibly labeled, never silently exported. Preview and binary STL use the same current valid meshes. Prominent connected-card, every clean part, and Everything ZIP exports include numbered `ASSEMBLY.txt`. No fake 3MF or STL colour claims.

## Validation

```sh
npm test                       # 8 built-in + 8 image/STL cases
node extreme-check.mjs          # 15 imported extreme/mixed cases + rejected impossible states
node hole-check.mjs             # true CSG probes of raised/engraved holes
npm run predeploy
node serve-production.cjs       # actual dist at real base prefix, localhost:5453
# In another terminal:
node browser-test.cjs
node studio-test.cjs
node supplemental-test.cjs
node variation-test.cjs
```

Reports and screenshots are included. Independent binary-STL checks verify byte length, finite/nondegenerate triangles, matching normals/winding, mm bounds, 1e-5 mm welded edges, two opposite incident faces, positive volume per component. Card must be one component, clean parts each one. Separate mechanical checks use real solid intersections for seated parts, 18+ samples of simultaneous tongue insertion, shoulder stops, clear working gaps through/above tine tops, nonoverlapping print parts, twelve distinct runners, accessible snip lines and exactly four components (three parts+carrier) after snipping. Imported and extreme cases receive the same checks.

Production-browser tests select real PNG/JPEG/ASCII/binary STL files, download and independently parse actual STLs, compare exact preview/export signatures and JSON-based reconstruction, vary threshold/depth/pixels/crop/scale/rotation/placement, test errors and recovery, presets, SVG/text/icons, current/stale state, views, per-part/ZIP, undo/redo, portable assets and named saves. UI checks cover desktop left/right layout, 320/390 px phones, touch orbit/pinch, reachable exports, theme persistence, focus/collapsible controls and worker abort/recovery. Gallery and combined deploy checks are separate.

**No physical print, assembly-force, fatigue, blade-strength, tip-stability, adhesive or paper-release tests were performed.** Geometric clearance and open-path checks do not prove physical handling; calibrate, steady the feet and test gently.
