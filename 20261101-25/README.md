# Peel & Spiral

A browser-based parametric **five-part kit-card generator** for a stationary cord-peeling drum and pencil wand. Snap no joints: snip 20 sacrificial runners, dry-seat a rear flange on a removable plinth, thread a cord knot into the drum, then glue its three stationary layers. Lift the spool out and tape its flat rear flange to paper to explore a winding-circle involute. This is a physical craft kit, not a browser game.

**External materials:** 0.5–0.8 mm soft low-stretch cord (~400 mm), pencil, paper, removable tape and plastic-compatible adhesive. No metal hardware. The plinth is a removable storage/explanation stand, not the drawing pose or a positively retained mount. Do not glue its sockets. Spool layer retention depends on adhesive; no press-fit retention claim.

The ideal cord endpoint follows `x=R(cos θ+θ sin θ), y=R(sin θ−θ cos θ)`, released length `Rθ`. A 96-sided drum approximates a circle (maximum radial chord error <0.014 mm at R26). The wand's eye is **16 mm away from its pencil bore**: actual pencil paths are offset and depend on wand orientation, play and friction. Do not call this a precision involute instrument. A direct cord tie around the pencil is an optional approximate alternative. Use a single cord layer, keep the anchor-slot sector out of the active peeling path, and pull gently. The diagram is an ideal geometric explanation, not a simulation.

## Reference-first evidence and attribution

Local candidate STLs were parsed before choosing the design: Keycap Studio's switch template is three mechanical-switch parts, while Fabric Studio's 8 mm interlocking link is not a sheet-kit reference. Neither is interchangeable with a sheet assembly.

The selected source is **White Cat Kit Card**, Mike Kasberg, [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0 (verified GitHub LICENSE saved as `REFERENCE-LICENSE.txt`). Download URL, SHA-256, actual dimensions, component statistics, source defects and section measurements are in `reference-analysis.json` / `reference-measurements.json`. `reference-measure.py` reproduces the measurements using trimesh, numpy, scipy, networkx, shapely and matplotlib. `evidence/reference-sections.png` shows actual Z0.1/0.5/1.59 sections.

Measured source: 179.819997 × 178.019994 × 3.190000 mm, 30,616 triangles, 27 edge-adjacent components with defects; **not globally watertight**. We do not repair/re-export it. Source sheet planes 0/1.6 mm and four 4.50 × 1.700012 mm socket loops informed a new original CSG reconstruction. New plinth slots preserve 4.50 mm length; tongues are `4.50-fit` long and `sheet` thick; slot width `sheet+fit`. Default .20 mm total allowance is a proposed change from measured .10 mm, not a universal fit. New runners .4–.6 mm high replace source .21/.22 mm low planes. No raw source mesh or fan art is redistributed.

The entire spool, cord knot pocket, drum, ticked front flange, wand and involute interaction are original to this app, not present in the source. The neighboring daily apps' import/view/save infrastructure is reused, not their product mechanism. Keycap Studio was inspected read-only: README, App.tsx, styles.css, Viewer.tsx, worker, image tracing, STL and export modules. Concrete adopted patterns: 374 px scrollable left rail, preview-first phone layout, tactile selection buttons, lavender/pink light studio, saved dark theme, checkerboard image cutout and worker/current-result export gates. No reference-project files, dependency tree or Git history copied wholesale.

## Run

Node 22.12+ recommended.

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; Three.js OrbitControls; Manifold WASM for genuine solid Boolean operations in a Web Worker; fflate ZIP; locally bundled Fontsource Fredoka/Rubik (OFL). No CDN, API, service, key or paid feature. App base `/daily-app2/20261101-25/`. Individual `deploy` is required scaffolding; public combined publication uses the parent monorepo's `npm run predeploy && npm run deploy`.

## Dimensions and parameters

All physical dimensions in **millimeters**, rotation in degrees. Paired sliders/numeric inputs are bounded; invalid edits disable exports rather than exporting the last-good preview.

| Parameter | Supported range |
|---|---|
| Connected card X / Y | 220–250 each |
| Winding radius | 18–26 |
| Flange overhang | 3–5 |
| Pencil bore | 6.5–8.5 |
| Total socket/drum allowance | .10–.30 |
| Sheet thickness | 1.6–2.4 |
| Part spacing | 3–4 |
| Runner width / height | .8–1.4 / .4–.6 |
| Import footprint / depth | 4–7 / .4–.6 |
| Import XY placement | ±1.5 / ±2 in protected patch |
| Import Z rotation | −180–180° |

Card Z is `3*sheet+.4` due to the rear axle; not simply sheet thickness. Radius and overhang change real solids, ticks and assembled dimensions. Three real presets have live model thumbnails; three plinth/wand silhouettes; bounded variation, undo/redo, six local named designs and portable JSON save/open. JSON stores normalized image/mesh payloads within 2 MB; missing image payloads explicitly request reattachment. Artwork edits, source replacement/removal and reset remain recoverable.

## Local file imports

Everything processes on-device, no personal files saved in the repository. Picker works on phones/desktops, with desktop drag/drop. Synthetic sample PNG, JPEG, simple SVG, ASCII STL and binary STL are bundled under `public/samples`, with attribution. Downloads let users try the same fixtures locally.

### PNG/JPEG/SVG and legends

Actual PNG/JPEG header and dimensions are checked before decoding. Limits: 2 MB, 12 MP, max 6,000 px side, normalized max500 px. Simple safe SVG shapes are rasterized locally at256 px (no scripts, external references, images, effects or live text). SVG circles/holes use their rendered fill rules. Text and six searchable bundled original icons go through the same image conversion.

Fit/cover, crop shift ±25%, light/transparent background removal or dark inversion, threshold1–254, grayscale relief, .4–.6 mm engraving depth, footprint, rotation and XY placement affect the exported solid. The source and actual transparent cutout appear together on a checkerboard. The method is a **20×20 sampled triangulated height field**, not full 3D reconstruction from a photo or exact vector contour tracing. Threshold samples below the cutoff become depth; grayscale depth is `depth*(1-luminance/255)`. White/transparent holes stay uncut within a continuous backing. Zero-height edges interpolate between samples. Empty silhouettes are rejected. Raised decoration is intentionally unsupported on this protected sheet landing.

The exact cutter is Boolean-subtracted from plinth patch `(0,-12)`, within6.5 mm radius, leaving≥1 mm backing. It cannot invade sockets or winding interfaces. STL colours remain preview-only.

### ASCII / binary STL

Limits: 2 MB, 1,500 complete triangles, .2–250 mm in each source dimension, finite coordinates. Exact binary byte length or complete ASCII facets required; degenerate triangles, open/nonmanifold edges, inconsistent winding, negative volume, self-intersection and disconnected bodies rejected. Numerical weld1e-5 mm. Supported integration contract is deliberately narrow: **one convex closed, broad-flat-bottom solid without overhang footprint**. Concavities, cavities, hollow shells, branches and unsupported orientation produce actionable errors. Convexity is validated, never generated by a hull replacement; raw input faces are the Boolean cutter. No automatic repair claims.

Show source preview/dimensions, select Z/Y/−Z up before attaching, explicitly confirm millimeters because STL has no unit metadata, then proportionally size XY, independently scaleZ to engraving depth, rotate/center/place. Changing up-axis clears source and asks reattachment. Exact original mesh is subtracted into the same protected plinth landing, so imports measurably change the final printable geometry instead of unchanged re-export.

## Print, assembly and export

See `ASSEMBLY.txt` and in-app numbered instructions. Export real binary STL for connected card, five de-tabbed parts, each part individually, or Everything ZIP (card + all parts + instructions). The ZIP is not a 3MF. Exact current meshes feed both preview and export, with a visible build/error state, stale-result guard and mesh fingerprint used in browser tests. Print-plate and assembled/exploded/drawing/isolated views use the same solids; preview poses do not alter bed-flat exports.

PLA/PETG starting point: .16–.20 mm layers, three perimeters, flat bed, no supports intended. Print clean test parts to calibrate dimensional allowance, first-layer expansion, glue seats and cord dimensions. Do not force parts. Snip four runners around each part, not its functional tongues. Thread knot before sealing spool. Use .10 mm temporary shims to maintain layer gaps while gluing, and remove after cure. Never glue the removable plinth sockets.

## Validation and limits

`npm test` independently parses float32 binary STL: exact count/length, finite coordinates, nondegenerate faces, stored-normal/winding agreement, 1e-5 welded edge incidence exactly2 with opposite direction, positive volume per connected component, expected millimeter bounds, card envelope and component counts. Kernel checks validate every part, assembled/storage/drawing collisions, complete insertion paths, two socket probes and shoulder stop, representative .8 mm cord-channel clearance, anchor pocket, layer fits, disjoint print placement, full frame connectivity, all20 runner cuts releasing five parts + carrier, and sampled bed-support footprints. Built-ins, all presets, individual and combined parameter extrema, image-derived and both STL-derived geometry are covered.

Production Playwright tests select real files, download actual meshes, compare no-import/edited/export signatures, reconstruct JSON in Node, parse every downloaded part/ZIP, test unsupported/malformed/empty/oversized sources, unit confirmation, transforms, replace/remove/reset, undo/redo, local named design/JSON restoration, holes, all views, worker failure/recovery, keyboard focus, saved themes, narrow phone overflow and touch orbit/pinch. Reports and screenshots are saved alongside this app. Run browser scripts against `PORT=5681 node serve.mjs` using `TEST_BASE=http://127.0.0.1:5681` after building.

**Computational tests are not physical printing, assembly, fatigue, adhesion, cord tracking or drawing tests. None of those physical tests have been performed.**
