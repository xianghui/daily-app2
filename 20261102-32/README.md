# Stave & Halo

A local React/Vite maker studio for an **eight-part flat-pack dry-vessel kit card**: a solid socketed floor, open top halo and six broad windowed staves. Snip the real breakaway runners, seat the six walls, then lower the halo over their upper tongues. Adhesive is required in twelve calibrated loose sockets. No hardware; no load rating, candle use, food or liquid containment. This is a printable physical assembly, not a browser game.

## Reference-first design

Reference: **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. License and source README are preserved as text. Download identifier, SHA-256, mesh bounds, triangles, components, defects and cross-section evidence are in `reference-analysis.json`, `reference-measurements.json`, and `evidence/reference-sections.png`. Reproduce with `python reference-measure.py /path/to/downloaded/reference.stl` in a Python environment with trimesh/numpy/matplotlib. The actual binary STL was downloaded and parsed for this run. Raw source geometry is not bundled.

Measurements: source 179.820 × 178.020 × 3.190 mm, 30,616 triangles, 27 edge-connected components including degenerate/duplicate face fragments; source is not globally watertight. It is a design reference, not an automatically repaired printable asset. Cross-sections at Z=.10/.50/1.59 mm reveal radial sockets, sheet staves and low carrier runners. Measured sheet 1.60 mm, axis-aligned socket 4.50 × 1.700 mm, low runners .21–.22 mm. STL has no unit metadata; mm assumed from documented design scale and interfaces. Local clicker/fabric candidate STLs were also parsed; their switch cuts/8 mm interlocking links are not suitable sheet-card interfaces.

Preserved: default 1.60 mm sheet, 4.50 mm socket length, radial sheet-to-collar construction, subdivided bed-flat carrier. Redesigned: six broad windowed walls, a solid personalized floor and an annular crown, not the reference spacecraft silhouette or its mesh. Unlike an open four-post film cage, broad tangential staves define a segmented dry vessel, with deliberate corner relief and a solid floor. Original CSG reconstruction uses Manifold Boolean unions/subtractions and never convex-hulls source geometry.

**Measured is not proposed:** radial socket width = sheet + selected .30–.60 mm total gap, tongue width = 4.50 − gap, tongue length/thickness = sheet. Runners strengthened to .4–.6 mm tall. These are proposed printer/material-dependent adhesive seats, not universal press fits. Socket circle R = cup diameter/2 − 4.5; stave width = 2(R − sheet/2)tan(π/6) − 2 mm; halo opening diameter = 2(R − 4). Each stave has 3.5 mm window side rails. Collar socket inner web is at least 2.5 mm across supported settings. Stave lower tongues finish flush with floor underside; upper tongues finish flush with halo top. All staves insert vertically, then the top collar is lowered from above. Temporary tape/alignment paper and plastic-compatible adhesive are needed. See `ASSEMBLY.txt` and the in-app guide.

## Studio

Read-only visual reference: `keycap_generator2` README, styles, App, Viewer, worker, STL/import/image conversion and export modules. Concrete patterns carried into this independent app: 374 px left rail, collapsible labeled sections, lavender desk/white panels/coral accents, short solid key shadows and selected states, paired numeric/slider controls, checkerboard cutout, portable designs, worker current-result export gating. It does not use switch sockets or copy the reference repository/dependencies/history. Shared local studio infrastructure (viewer, file checks, history, UI) is adapted from earlier daily-app work; the vessel geometry, packing, assembly and checks are new.

- Three real presets with live model thumbnails, three floor silhouettes, bounded variations.
- Assembled, exploded, connected-card, clean print-plate and all isolated-part views; ghost floor, touch orbit/pinch and fit/zoom controls. The assembly slider raises the halo 0–24 mm along its insertion axis. Exploded radial offsets are illustrative; not a force simulation. Export always remains bed-flat.
- Local named saves (up to six), undo/redo, JSON save/open with bounded embedded PNG/mesh payloads. Missing imported payloads explicitly require reattachment. Theme persists locally.
- Binary STL for every part and whole connected card; Everything ZIP contains nine STLs (card plus eight clean parts), design JSON and numbered instructions. STL has no colour information. No 3MF is claimed.

## Parameter ranges — all linear dimensions in mm

| Control | Supported range |
|---|---|
| Card width / height | 220–280 / 240–300 |
| Cup outside diameter | 52–64 |
| Stave shoulder height / window height | 38–54 / 12–26 |
| Sheet thickness | 1.6–2.4 |
| Total socket clearance | .30–.60 |
| Part spacing | 3–5 |
| Tab width / height | .8–1.2 / .4–.6 |
| Artwork footprint | 4–7 |
| Artwork engraving depth | .4–.6 |
| Artwork rotation | −180–180 degrees |
| Artwork X / Y placement | ±1.5 / ±2 |

Card bounds, floor backing, collar webs, part separation, connectedness, finite transforms and actual output mesh topology are checked. Impossible settings block current-state export; a last-good preview is labeled and never silently exported.

## Image / SVG to actual geometry

PNG and JPEG content is validated before decoding: 2 MB, <=12 megapixels, <=6,000 px per side. Normalize to <=500 px and save bounded PNG payloads. Simple resource-free SVG paths/shapes (<=2,000 elements) are rasterized locally to 256 px; reject scripts, external resources, effects and unflattened text. SVG/PNG/JPEG all feed the same image conversion.

Fit or crop, shift ±25%, light-background removal or dark inversion. Sample luminance on a **20×20 grid**. Threshold 1–254 converts to a silhouette height field; grayscale mode maps darkness linearly to engraving depth. The field forms a closed triangulated solid tool, which is Boolean-subtracted from the floor. White/transparent holes preserve the original floor, with antialiased edge interpolation at the grid resolution. Checkerboard shows the actual converted mask, beside source preview. Bold art works best; fine details below ~0.3 mm may be lost. This is **2D-to-relief/silhouette conversion, not reconstruction of a full 3D object from a photo**. Text (up to eight characters) and six searchable bundled original icons use the same geometry path. Only engraved placement is supported on this thin, protected floor; no fake raised toggle.

## Imported STL to actual geometry

Desktop/phone file pickers and drag-drop; ASCII and binary STL. Synthetic samples supplied for both, plus PNG/JPEG/SVG. Limits: 2 MB, 1,500 triangles, every source dimension .2–250 mm. Reject truncated, nonfinite, degenerate, open, nonmanifold, inward/inconsistently wound, disconnected or self-intersecting meshes. Bounded integration supports **one convex solid with a broad flat bottom and no overhang outside its bed footprint**; unsupported concave/hollow/branched input is explicitly rejected, never replaced by a convex hull. Convexity is only an input-support check, not a remeshing operation. No silent repair.

Show original/oriented dimensions, source mesh preview and units confirmation because STL has no units. Up-axis Z/Y/−Z; changing it requests reattachment. XY footprint scale preserves source aspect; Z independently scales to .4–.6 mm recess, with both scale factors displayed. Rotation/XY placement and reset/replace/remove controls all change real Boolean tools. The transformed mesh is subtracted from the floor inside a 6.5 mm radius keep-in region away from sockets, leaving >=1 mm solid backing. It is not unchanged re-export or decorative preview texture. Files never leave the device or enter this repository. Only synthetic sample inputs are bundled.

## Build and checks

```
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
node presentation-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node stale-test.cjs
```

Production base `/daily-app2/20261102-32/`; local test server port 5732. Dependencies are locally bundled: React, Vite, Three.js, Manifold WASM, fflate, Fontsource Fredoka/Rubik (SIL OFL). Playwright is used for QA. All heavy modeling, source mesh validation and final preflight happen in a Web Worker with debounce, bounded tessellation and stale-result guards. No CDN/API keys/backend/network upload.

Independent tests parse actual binary-STL bytes: triangle count/byte size, finite positions, nonzero faces, normalized normals/winding, equal-vertex welded edges (1e-5 mm) with two opposite face incidents, per-component positive signed volume, expected component count and mm bounds. They also test card/parts and float32-translated loose layout; Boolean collision at assembly and sampled stave/halo insertion paths; real tab connectivity/release with retained intact parts; bed footprint support-free cross-sections; all presets and parameter endpoints, image/STL-derived floors and preserved image holes. Browser tests exercise actual picker inputs/downloads and compare exact preview/export fingerprints plus Node regeneration from saved parameters. Invalid files/empty artwork, mobile touch/overflow, saved designs, worker failure and portable assets are checked against built production assets. Reports and screenshots sit alongside the app; see `VALIDATION.md` for executed results.

**No physical print, assembly, adhesive strength, loaded stability or fatigue test has been performed.** Computational fit and watertightness do not prove successful printing. Calibrate a clean floor/stave pair, compensate elephant foot and inspect in a slicer before a full card. Use lightweight dry decorative contents, not hot objects or liquids.

## Deployment

Individual scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public monorepo publication uses **root** `npm run predeploy` and `npm run deploy`, assembling every gallery app below the combined `deploy/` tree. The old daily_app tree and all reference projects remain read-only.
