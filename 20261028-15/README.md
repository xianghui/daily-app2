# Ring & Pitch — reference-first kit-card studio

A local React/Vite/Three.js maker studio generating a **real connected, bed-flat card** with a marked target base, three shouldered upright posts and three free pitch rings. Snip 16 accessible tabs, seat the posts from above, then gently pitch or hand-place the rings. Seven assembly parts; no hardware required. This is a physical kit generator, not a browser game.

## Reference, attribution and reconstruction

Local STL search was performed first under `/Volumes/ExternalHD/3d_printing_apps/`, including keycap, clicker, slider, spring and fabric collections. Those sources supply sockets/sliding/link mechanisms, not appropriate sheet/carrier kit construction; the local kit-card projects contain no suitable STL. The public alternative was downloaded and **parsed, not inferred from a listing image**:

- Mike Kasberg / mkasberg, **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Read repository README, LICENSE and `kit_frame.scad`.
- Binary STL, 1,530,884 bytes, 30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Coordinates assumed **mm** (STL has no units), corroborated by OpenSCAD. Bounds **179.820 × 178.020 × 3.190 mm**; edge-adjacency analysis finds **two components**, and nonmanifold/coplanar source artifacts. The original was not repaired or exported.
- Measured Z planes at 0 and 1.6 mm, perimeter rail width 1.6 mm, low bridge levels 0.21–0.22 mm. Actual sections at Z=0.1,0.5,1.59 mm were inspected; see `reference-sections.svg`, `reference-sections.png`, `reference-analysis.json`, and the reproducible parser `reference-analysis.py` (pass downloaded STL path).
- Adaptation: preserve the source's planar sheet + carrier + low removable-bridge construction. Default sheet stays 1.6 mm. Reinforce the rail to 2.4 mm and bridges to 0.4–0.6 mm thick × 0.8–1.4 mm wide. Source spacecraft parts are **not** reused: the three-post target, annuli, shoulders, mortises, layout and allowance parameters are original parametric geometry. No source socket or joint dimension is claimed. Proposed 0.15–0.45 mm total slot allowance is printer dependent, not a measured source fit. No third-party raw STL is bundled.

The visual/interaction reference is the read-only `keycap_generator2`. Inspected README, App.tsx, styles.css, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts: adopted its 374 px left maker rail, collapsible sections, paired slider/mm inputs, raised tactile buttons, lavender light desk, saved dark theme, right live viewer, import source/transform editor, checkerboard cutout, worker-owned Manifold, stale-result gating, isolated/assembled/exploded/print views and prominent local exports. No source Git history, switch templates or dependency tree copied. Shared daily-app import/editor/validation infrastructure was reused; the seven-part kit geometry and its mechanical checks are new.

## Run, build and publish

Requires modern Node (22.12+) and a WebGL/WASM browser.

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs  # actual production bundle under /daily-app2/20261028-15/, port5465
node browser-test.cjs
node feature-test.cjs
node studio-layout-test.cjs
node hole-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
```

`deploy` is exactly `gh-pages -d dist`; `predeploy` is exactly `npm run build`. Whole-monorepo publication uses the **root** deploy/ flow, not the individual deploy command. Runtime dependencies: React, Three.js, Manifold WASM (Apache2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL). All JS, WASM and fonts are bundled locally. No APIs/CDNs/keys/backend required. Original synthetic sample fixtures: mark.png, waves.jpg, ring.svg, wedge-ascii.stl, gem-binary.stl. None are personal uploads or third-party source meshes.

## Parameters — all physical lengths in millimeters

| Parameter | Supported range |
|---|---|
| Card width × height | 180–220 × 180–210 |
| Post height / center spacing | 24–36 / 24–28 |
| Base half-width | 42–48 |
| Post width / sheet thickness | 6–8 / 1.6–2.4 |
| Total mortise allowance | 0.15–0.45 |
| Loose-part spacing | 4–7 |
| Breakaway tab width / height | 0.8–1.4 / 0.4–0.6 |
| Surface dimple depth | 0–0.4 |
| Ring outer radius / radial wall | 10–12 / 2.5–3.5 |

Ellipse, six-sided and slim-oval base silhouettes; three real presets with model thumbnails and bounded variations. Ring center spacing must be at least ring diameter +1 mm; invalid combinations and too-small layouts are blocked. Rings clear the complete post diagonal by >2.3 mm radially at supported extrema. Tongue depth equals sheet thickness; shoulders sit on the top face and tongues end flush underneath. Mortises have the same total allowance across tongue width and sheet thickness. Front medallion is isolated from all three mortises and ring-lift paths.

## Local image → real model

PNG/JPEG and simple SVG file picker, drag/drop and bundled samples. Validate content/extension, size≤2 MB, PNG/JPEG headers≤12 MP and≤6000 px/side before decoding. Normalize longest side≤500 px for bounded portable saves. SVG≤2000 simple elements, no active/external resources, rasterized locally to256 px.

Fit/contain or fill/crop, ±25% pan, light/transparent removal or inverted dark background, threshold1–254 or grayscale relief. Sample a **20×20 luminance grid** into a closed triangular height field on a 0.4 mm continuous backing. Thresholded foreground becomes raised or engraved relief, grayscale becomes proportional height. Light holes remain unraised/unengraved within the backing; this is **not a through-cut silhouette**, and not full3D reconstruction from one photo. Actual sampled cutout is shown on a checkerboard beside the original. SVG holes and six bundled searchable icons use the same conversion; text up to8 characters is rasterized in locally bundled Rubik. Preserve tiny details only to grid resolution.

Footprint4–7, depth0.4–3 (engraving0.4–0.6), rotation±180°, X±1.5/Y±2 placement within a6.5 mm safe-zone radius relative to the front medallion. Manifold unions/subtracts the relief into the actual target base; no texture-only decoration. Minimum base floor0.8 mm at supported minimum thickness/maximum engraving. Empty silhouettes/invalid transforms disable export. Replace/remove and image/transform reset available.

## Local STL → integrated mark

Binary and ASCII STL≤2 MB /1500 triangles /0.2–250 mm each source axis. Source mesh preview, oriented source dimensions, format and triangle count; explicit user confirmation of **millimeter** units required. Choose Z up, Y up (+90° X), or −Z up before selecting; changing up-axis requests reattachment. XY scales proportionally to4–7 mm footprint, Z independently to0.6–3 mm; rotate±180°, center/place within the protected medallion. Validate transformed wall/keep-out bounds and minimum XY thickness1.2 mm before union.

Contract: **one convex closed outward-wound solid, broad flat bottom covering≥25% of bounding footprint, no overhang footprint**. Finite coordinates, nondegenerate facets, exact binary byte length, complete ASCII facets, edge incidence/direction, connectedness, positive volume, self-intersection and convex half-space checks. Open/nonmanifold, concave, hollow, disconnected, tiny, excessive or unsupported input is rejected with guidance. No silent hull replacement or claimed automatic repair. A footprint hull is used ONLY to validate bottom contact, never to replace the source. The source triangles are imported into Manifold, transformed and **solid-unioned** into the target base; final STL measurably changes. Source is not simply re-exported. Replace/remove/reset return to defaults.

## Views, state and exports

Connected card, de-tabbed print layout, assembled resting target, exploded and each isolated part use the same exact printable meshes. Orbit/zoom/fit including touch pinch; see-through target for fit inspection. No fake throwing simulation or moving retention. Colors are preview-only: STL does not store color. Final export X/Y/Z dimensions shown for selected output, in mm.

100 ms debounced worker builds with generation ids/current-state key: heavy CSG and mesh preflight off main thread. Invalid edits/imports/worker errors disable **all** exports even if the last valid preview remains visible. Ready only means current computationally checked geometry. Per-part binary STL, connected-card STL and Everything ZIP (eight STLs including card + seven parts, numbered ASSEMBLY.txt). Every output is bed-flat Z=0; card includes real fused breakaway runners/tabs, not loose parts near a rectangle.

Undo/redo35 snapshots, six named local designs, JSON save/open≤2 MB. Portable normalized image/pixel and bounded source-mesh payloads are included and revalidated on open; missing image data explicitly requests reattachment, never pretends restoration. All user files stay in browser memory/localStorage/downloads; never uploaded or saved to this repository. Theme saved locally. Font/assets and model generation work without external requests after loading.

## Print / assembly / calibration

1. PLA/PETG,0.4 mm nozzle,0.2 mm layers,3 perimeters; support-free bed-flat design. Slice the low runners with appropriate first-layer expansion. Check card size or use individual pieces.
2. Adult: cut16 tabs at2 mm away from functional edges. Trim nubs/elephant foot. Loose rings are choking hazards, not suitable for small children.
3. First print one post and base or a cropped slicer test containing a matching slot. Start with0.30 mm TOTAL clearance; adjust after measuring. Do not force-fit. Friction depends on material/printer/layer expansion; optional glue at stationary feet only.
4. Slide all three tongues vertically downward into the target until shoulders seat. Base sits flat with tongue bottoms flush. Insert posts before placing rings.
5. Drop one ring over each post. Rings intentionally lift freely off; pitch gently only at short tabletop range or hand-place for quiet interaction. Do not launch toward people. No hardware, compliance, bearing, spring or captive-retention claim.

## Validation scope

`validate.mjs` independently parses final float32 binary STLs: exact byte counts, finite coordinates, nondegenerate faces, normalized normals matching winding, welded1e-5 mm edge incidence exactly2/opposite direction, each component positive volume, Euler characteristic and expected mm bounds. Every card is one component; each de-tabbed part is separately closed and connected. Fourteen parameter cases and30 image/STL-derived cases include all presets/extrema. Kernel checks verify all21 assembled part pairs have no unintended volume intersection, three sampled post insertion paths, three ring lift paths, distinct nonoverlapping flat parts, containment inside card, declared bounds and16 cuts releasing exactly seven parts plus the carrier.

Real production-browser tests select PNG,JPEG,ASCII/binary STL, compare byte fingerprints against current preview and independently regenerate saved JSON; threshold/pixels/depth/scale/rotation/placement affect exported geometry. Also test malformed/open/nonmanifold/concave/truncated/oversize/empty files, invalid dimensions, safe-zone overflow, restore/missing payloads, named designs, undo/redo, every preset/shape/icon, raised/engraved hole probes, ZIP contents, worker abort/reload, stale edit/import races, local requests only, desktop left/right layout, 320/390 px no-overflow preview-first layout and real touch orbit/pinch/downloads. Reports and screenshots accompany the source.

**No physical print, friction, toss, fatigue, strength or child-safety testing was performed.** Computational geometry/assembly checks cannot certify practical friction or throwing performance. Calibrate and inspect a small print first.
