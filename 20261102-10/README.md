# Square & Sum

A React + Vite **nine-part Pythagorean proof kit-card generator**. Snip 36 real breakaway runners, then move the SAME four congruent right triangles between two trays. One arrangement leaves a rotated c-square, the other leaves a- and b-squares: subtracting the same four triangles from the same enclosure gives **c² = a² + b²**. Three separate square tiles fill the openings. This is a physical rearrangement assembly, not a browser game or a static STL download.

No glue, hardware, force fit or captive joint. Trays hold tiles by gravity; keep level. Removable soft tape tabs can assist lifting. **No physical print, assembly, fit, friction, strength or fatigue test was performed.** Computational checks are listed below.

## Reference-first evidence / attribution

Local candidates were inspected read-only BEFORE choosing final geometry: `keycap_generator2/README.md` and actual `public/templates/clicker_template2.stl`, `fidget_fabric_generator/README.md` and `public/templates/diamond-link.stl`, plus `kit_card_generator/README.md`. Fresh STL measurements rejected switch cavities/stem (3 components) and an 8 mm articulated link as sheet-kit references.

Selected public reference: **Mike Kasberg, White Cat Kit Card / Printables 865769**, https://github.com/mkasberg/white-cat-kit-card , **CC BY 4.0**, https://creativecommons.org/licenses/by/4.0/ . Source README and full licence were downloaded/read. Full licence: `REFERENCE-LICENSE.txt`. The downloaded actual STL was freshly parsed and sectioned for this build; it is not bundled or redistributed.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles, assumed mm envelope **179.820 × 178.020 × 3.190**. STL has no unit metadata.
- **27 edge-adjacent components**, including defects; globally not watertight. No automatic source repair is claimed.
- Actual Z=0.10, 0.50, 1.59 mm sections plotted and visually inspected: `evidence/reference-sections.png`.
- Measured main sheet 0–1.60 mm, four 4.50 × 1.700012 mm sockets, low carrier webs at 0.21–0.22 mm.

This original reconstruction retains the **1.60 mm default sheet and connected low-web carrier structure**. It increases removable webs to proposed .4–.6 mm, and rebuilds all solids with Manifold. Source sockets are measured evidence but deliberately NOT imposed on a no-socket tile kit. Tile gaps .20–.50 mm and tray rim .8–1.2 mm are new printer-dependent design decisions, not source measurements. The spacecraft model becomes two geometric proof trays and seven reconfigurable tiles; no raw third-party mesh is included. Full data and mapping: `reference-measurements.json`, `reference-analysis.json`; repeat with `reference-measure.py /path/to/source.stl` in a Python environment containing trimesh/numpy/matplotlib.

Read-only visual/interaction reference: `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, export, imageTrace and geometry/stl modules. Concrete adopted patterns: 374 px scrollable LEFT editor, compact sticky brand/theme header, lavender-grey/white/pink light studio, saved coherent dark theme, raised/pressed tactile controls, paired mm inputs, collapsible sections, checkerboard cutout, imported-mesh source editor, local fonts, current-state worker export gating. Phones stack preview/toolbar/dimensions/export BEFORE controls. Existing Daily Object Lab editor/import/STL/test infrastructure is reused; both proof arrangements, exact area checks, trays, geometry and assembly are new. This differs from the earlier seven-tangram target puzzle: two mathematically constrained layouts transfer one shared four-triangle set, with continuously changing leg ratios and square areas, not cosmetic target silhouettes. Reference trees and old daily_app remain read-only.

## Run / build / tests

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Production base `/daily-app2/20261102-10/`; production test server port5700. `predeploy` exactly `npm run build`; `deploy` exactly `gh-pages -d dist`. Combined public publication MUST use root monorepo predeploy/deploy. Dependencies bundled locally: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, @fontsource Fredoka/Rubik (OFL); Playwright is test-only. No CDN, server, API key, paid service or external file processing. Modern WebGL/Web Worker/WASM browser required.

## Parameters — all dimensions mm

| Control | Supported range |
|---|---|
| Card width / height | 300–340 / 270–300 |
| Triangle legs a / b | 16–20 / 22–26 |
| Sheet thickness | 1.6–2.4 |
| Nominal total tile gap | .20–.50 |
| Tray rim above floor | .8–1.2 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Art footprint / engraving depth | 4–7 / .4–.6 |
| Art rotation / X / Y | ±180° / ±1.5 / ±2 |

Square well side L=a+b. Triangle and square outlines are offset inward gap/2 per edge, so actual printed areas are intentionally smaller than IDEAL proof areas. c=sqrt(a²+b²); default18/24/30mm is a3–4–5 ratio. Very acute tips are not structural joints: clean them gently and never wedge/force tiles. A full connected carrier needs a LARGE bed plus brim margin; download individual parts for a normal smaller printer. Final selected-export X/Y/Z is displayed; card Z=sheet+rim.

Three real presets with live-model thumbnails, three tray silhouettes, bounded variation, undo/redo, six local named designs and JSON save/open. JSON embeds bounded image/mesh payloads; missing image payload explicitly requests reattachment. No personal files are committed. A 100ms-debounced worker performs CSG/final mesh checks; request IDs and full-state keys reject stale builds. Invalid, pending, failed or unconfirmed inputs disable every export even when last-good preview remains. Exact current binary-STL fingerprint is exposed on `.stage` and compared with real downloads in tests.

## Local image workflow

Native desktop/phone picker, drag/drop, replace/remove/reset; original synthetic/public-to-this-app fixtures in `public/samples/`: PNG, JPEG, hole-bearing SVG, ASCII and binary STL. No private mesh or source-reference STL bundled.

PNG/JPEG actual-content/header checks, ≤2MB, ≤12MP and6000px/side. Normalize locally to≤500px, fit/crop and X/Ypan±25%; sample a20×20 grid. Remove light/transparent background or invert dark background. Threshold1–254 creates a sampled silhouette relief; grayscale creates varying heights. A closed triangulated height-field solid is Boolean-SUBTRACTED in the c-tray front apron, outside both wells, with at least1mm backing. Footprint,depth,rotation,placement,threshold,background and crop alter the exported STL. Checkerboard shows the processed cutout; bright holes retain full backing. Raster holes are sampled, not exact vector tracing. This is **2D-to-relief, not reconstruction of a full3D object from one photo**.

Simple sanitized SVG≤2000elements is rasterized locally256px then converted the same way; scripts/external resources/effects rejected. Text≤8characters and six searchable bundled icons use the same physical engraving path. Raised art is deliberately unsupported to preserve backing and flat tile floors. Preview colour never implies STL colour.

## Local STL workflow

ASCII/binary `.stl`,≤2MB/1500triangles, one connected closed outward-wound solid, each oriented source axis .2–250mm. Show source dimensions,triangles,format and 3D source preview. **Explicit millimeter confirmation** is required; STL has no units. Choose Z/Y/−Zup before attaching; axis change clears source and requests reattachment. XY scales proportionally to4–7mm footprint; Z independently fits .4–.6mm engraving depth, with explicit scale factors. Rotate/center/place/reset transforms then subtract the ACTUAL supported solid into the c-tray apron. It is not unchanged re-export, a texture, overlapping shells or silent convex-hull replacement.

Strict unsupported-input contract: concave/cavity/disconnected/open/nonmanifold/inward/self-intersecting/overhang meshes are rejected with actionable messages, as are slender results and inadequate flat bed contact. Bottom-footprint hull is used only to CHECK projection support, never substitute geometry. No arbitrary repair. Keep-in radius6.5mm protects well and backing. All user assets stay local in browser; portable payloads remain bounded. Export is blocked until valid and units confirmed.

## Assembly / print

Full numbered instructions are in-app and inside Everything ZIP. Print flat,100%scale, PLA/PETG,.16–.20mm layers,.4mm nozzle,three perimeters; no supports intended. Snip36tabs outside part boundaries and clean elephant-foot/burrs. Each clean part is a separate printable closed solid. No adhesive or hardware required.

First tray: put four shared triangles at corner origins(0,0),(L,0),(L,L),(0,L),rotated0/90/180/270°. Drop c-square in the middle. Second tray: move those same triangles to right-angle origins(L,0),(a,a),(0,a),(a,L),rotated90/−90/0/180°. Seat a-square at(0,0), b-square at(a,a). c-square remains on first tray; shared triangles occupy ONLY one tray at a time. Both wells support all installed tiles. Lift vertically; do not slide pointed tiles into a jam. Open rims give gravity guidance only, no captive or friction-lock retention. Calibrate one triangle on your actual printer/material before printing whole card.

## Validation performed

`geometry-validation.json`:42cases covering3presets,3silhouettes,every field bound,combined extrema,threshold/grayscale and verified ASCII/binary STL derivatives. Every generated edit runs independent closed-manifold/winding/positive-volume checks in the worker. Test serializer independently parses float32 binary STL, verifies exact length,finite vertices,nondegenerate faces,normals,welded1e-5mm edge incidence2 with opposite directions,positive volume per component,expected component counts and mm bounds. All individual parts,connected card and9-component de-tabbed plate tested.

Independent Manifold checks: both full assembled arrangements have no unwanted part-pair intersection; all7tiles have unobstructed vertical insertion at17heights/arrangement and rest wholly on intended tray; IDEAL polygons cover their enclosure exactly without overlap in both layouts; c²=a²+b². Print plates have no part overlap.36simulated cuts avoid part bodies and yield9clean parts+carrier. Sampled Zsections stay inside first-layer footprint; card envelope matches declared dimensions and Z=sheet+rim. The initial rounded-rim overhang was found by this test and fixed by intersecting rim outer geometry with the actual backing footprint.

Production `browser-validation.json`:real picker PNG/JPEG/ASCII/binary imports,actual downloads compared to baseline and current mesh fingerprint,threshold/depth/pixels/scale/rotation/placement/crop changes,replace/remove/reset,invalid/truncated/nonmanifold/concave/excessive meshes,empty images,unsupported transforms,export gating,per-part STL,phone uploads/downloads,320/390px no overflow and actual touch orbit/pinch.

`studio-validation.json`:allpresets,silhouettes,text/icons/holeSVG,portable image+mesh JSON,missing-payload error,named-save reload,undo/redo,ZIP unzipped and every STL parsed,allviews including alternate proof,ghost base,saved dark theme,keyboard focus,collapsed sections,reducedmotion,374px desktop rail,preview-first phone,worker loading failure/reload recovery. `evidence/` includes reference sections and screenshots. Gallery and root-deploy reports are separate.

Computational checks do NOT certify printer fit,material stiffness,tip strength,safety or real physical assembly. No physical tests claimed.
