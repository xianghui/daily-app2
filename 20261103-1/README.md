# Parallax & Range

A local React + Vite **parametric seven-part kit-card STL generator**. Snip a genuine connected carrier, assemble two pivoting slit-sight arms on a marked baseline, and demonstrate triangulation toward a shared target. Not a browser game, a precision survey instrument, or a static STL download.

## Run and build

Node 22.12+, `npm install`, `npm run dev`; production `npm run predeploy`. Base `/daily-app2/20261103-1/`. Per-app `deploy` is `gh-pages -d dist`; public combined publication uses the root monorepo flow. `npm test` runs independent geometry and assembly tests. `python3 serve.py` serves production on localhost:5741 under its real base. Browser scripts use Playwright Chromium.

## Reference-first evidence

Local candidate meshes were parsed before choosing geometry: keycap_generator2 clicker template has three switch components, not a sheet assembly; fidget_fabric_generator diamond-link is an8mm interlocking link, likewise unsuitable. Their hashes/dimensions and rejection reasons are recorded in `reference-analysis.json`. Both projects and old daily_app stayed read-only.

Selected public reference: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY4.0**. Fresh downloaded binary STL parsed by `reference-measure.py`; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Source README and license saved in evidence. Raw STL is NOT redistributed. 30,616triangles;179.820×178.020×3.190mm assumed units,27 edge-adjacent components including tiny defective fragments; source is nonwatertight. No repair claim. Inspect actual sections at Z=.10,.50,1.59mm in `evidence/reference-sections.png` and full `reference-measurements.json`.

**Measured to generated mapping:** source1.60mm sheets become our default sheet. Four source4.50×1.70mm rectangular sockets become the arm’s vane seats at default sheet1.60 + proposed .10mm total fit gap. Tongue width4.40mm is proposed, NOT a measured source dimension. Source low runner planes .21–.22mm become deliberately stronger .4–.6mm breakaways. New base, M3 pivots, sight arms/notches, coarse protractor ticks and triangulation formula are an original solid reconstruction; no source triangles or spacecraft shape reused. Reference panel patterns explicitly inspected: README, styles, App, Viewer, worker, image conversion, STL parser and exports in keycap_generator2. Reuses studio/import utilities from a previous locally authored kit, but replaces all mechanism, assembly, part layout, checks and explanation.

## Parametric controls (millimeters unless noted)

| Parameter | Supported range |
|---|---|
| Card width / height |160–220 /170–230|
| Pivot baseline / arm reach |50–70 /30–42|
| Sheet / socket length |1.6–2.4 /4.5–5.5|
| Total socket/tongue clearance |.10–.30|
| Sight notch width |.8–1.4|
| M3 axle bore / real shim-washer gap |3.3–3.6 /.4–.8|
| Part spacing / frame width |3–5 /2.4 fixed|
| Breakaway width / height |.8–1.2 /.4–.6|
| Symmetric preview angle |3–30degrees, preview-only|

Three genuine presets (Classic baseline, Wide survey, Compact sight), rounded/square/chamfered base silhouettes, bounded variations and paired numeric/slider fields. Card packing and arm-clearance constraints may reject combinations within individual ranges (e.g.50mm baseline with42mm arms). No silent clamp of printable dimensions. 28 actual fused low runners: four per kit part. Vertical section measurements place runners on real material; vane runner centers15%/85% avoid tongues at all connector sizes. Carrier and seven clean parts each one closed manifold. Clean parts remain bed-flat, not assembled/interpenetrating exports.

## Mechanism and assembly

See ASSEMBLY.txt and the UI’s numbered guide. Required external hardware: **2 M3×10 pan-head bolts,2 M3 nuts,4 thin M3 washers**,4 adhesive5mm feet and suitable vane adhesive. Match two under-arm washers to chosen .4–.8mm shim gap; top washers distribute nut load. Bolts enter upward from below; external feet clear the underside heads/nuts. Hardware omitted from printable meshes and preview. No hardware-free alternative is claimed. Tighten only enough to retain without binding; vane tongues are glued clearance fits, not snap joints. Print one arm and vane to calibrate first. Physical fit/material effects are not universal.

Snip/deburr28 runners; seat four upright vanes, glue shoulders; install shim washers, arms, top washers and lightly tensioned nuts; fit external feet. Each arm has two aligned open notches10mm and(armReach−5)mm from its pivot. Rotate the two independent arms toward the same target. On the baseline bisector, ideal D=B/(2tanδ); generally D=B/(tanδL+tanδR), if rays converge. A2mm-wide rear pointer ends at14mm radius; exposed rear protractor ticks at17mm radius are0,5,…30degrees. Straight back is zero; count5degree steps. Rear scales remain readable instead of hiding beneath the broad forward arms. These are not calibrated instrumentation. UI angle is a symmetric explanatory pose, not a measured optical result. Real arms have **no hard angular stops**: use3–30degrees inward as demonstrated, avoid forcing collisions outside this region. Notches limit resolution; verify a known-distance target with a ruler. No claimed physical accuracy. Never sight sun/laser.

## Personalization and local imports

Maker text (8characters), six searchable bundled vector icons, simple SVG, PNG and JPEG produce **actual Boolean engravings** on the protected base apron, centered(0,−11), radius6.5mm, outside both pivot/sight interfaces. Place±1.5mm X/±2mm Y, rotate±180degrees, footprint4–7mm, depth.4–.6mm with>=1mm backing. Raised decoration intentionally unsupported on this thin sheet. Preview colors do not imply STL colors.

**Image method:** validate actual headers and extension, <=2MB, <=12MP/6000px side before decoding. Normalize to<=500px; fit/cover, crop±25%, light/transparent background or dark invert. Sample20×20 luminance cells; threshold1–254 or grayscale h=(1−luminance/255)×depth. Build a closed triangulated height surface, invert and subtract with Manifold from the body. Checkerboard shows actual cutout/grid. Bright interior holes leave backing, checked by a probe. Fine details below this bounded sampling resolution can disappear; no exact trace/smoothing claim. **2D-to-relief/silhouette conversion, NOT full3D reconstruction from one photo.** SVG simple paths/shapes only,<=2000elements,<=6000px side; no scripts, external resources or effects, rasterized locally to256px then same20×20 method.

**STL method:** binary and ASCII,<=2MB,<=1500triangles, .2–250mm per source axis. Parser checks finite positions, nondegenerate faces, welded edge incidence/opposite winding, one outward positive-volume connected component and triangle self-intersections. Explicitly supports only convex broad-flat-bottom solid inputs; concavities, hollow shells, branches/overhangs, nonmanifold/open/truncated files are rejected with recovery guidance. A convex hull is used ONLY to validate flat bed contact, never to replace source geometry. Choose Z/Y/−Zup before attach, confirm mm because STL has no units, then proportionally scale XY to4–7mm footprint, independently scale Z to.4–.6mm depth, rotate/center/place. UI reports source dimensions and real scale factors. **Exact original mesh is Boolean-subtracted**, not unchanged re-exported. Source preview and generated preview both present. Replace/remove/reset return to defaults.

All user files processed locally in browser/worker; no network upload, API, CDN or saved personal fixtures. Bundled PNG,JPEG,SVG,ASCII/binary STL samples are synthetic, with attribution text. JSON/local named designs carry bounded image/mesh payloads; missing images request reattachment. Six named saves, undo/redo, JSON round trips. Worker debouncing, generation ids and full current-state key gate export; invalid edits may show marked last-good preview but never silently export it.

## Views and export

Live Three.js rotate/zoom/fit and phone touch controls; assembled, exploded, connected card, de-tabbed plate, each isolated part and ghost base. Symmetric pose affects transforms only, never STL printable orientation. Prominent binary STL per part and Everything ZIP: connected card, seven clean parts, portable JSON and numbered guide. All dimensions shown as X/Y/Zmm. STL stores geometry only, no color or units; import slicer as mm100%. No fake3MF option.

## Validation and limits

`validate.mjs` independently parses float32 binary exports: exact byte count, finite vertices/normals, nonzero face area, normalized winding-consistent normals, positive volume per component,1e−5mm-welded edge incidence exactly2 and opposite direction, expected mm dimensions and component count. Checks all presets, three silhouettes, representative extrema and each field endpoint; image/relief/hole, ASCII/binary STL and transformed imports get the same checks. Every clean part and translated print plate tested. Manifold intersections cover assembled arm positions3–30degrees, vane top insertion/removal, coaxial M3 clearance, separate-part nonintersection. Validate ray equations, actual card envelope/Z,1connected card,28safe cuts releasing carrier+7parts without cutting any part; sampled upper cross-sections remain inside first-layer footprint. Impossible combinations block export. See generated JSON reports and VALIDATION.md for tests actually run.

Browser tests use real file pickers/downloads, compare geometry signatures with exact Node regeneration, vary pixels/threshold/depth/scale/rotation/placement, malformed/unsupported inputs and recovery, desktop/320/390px phone, touch orbit/pinch, current-result gating, preset/JSON/history/saves, ZIP contents and worker failure. Production base served, not only Vite dev. Dependencies bundled locally: React,Vite,Three.js,Manifold WASM,fflate,Fontsource Fredoka/Rubik. Font licenses bundled by Fontsource; icons original simple SVG paths in icons.js. Source CC BY4.0 evidence retained. No source Git history/dependencies copied.

**Not physically printed or optically tested.** Computational watertightness and static geometric fit do not prove strength, friction, adhesive durability, angle-reading precision or real-world range accuracy. PLA/PETG defaults, supports not intended; calibrate elephant foot and material fits before assembly.
