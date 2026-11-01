# Curve & Tempo

A browser-only React + Vite **four-part cycloidal-cheek pendulum experiment kit-card generator**. Snip sixteen real runners, glue a two-foot fork into a plinth, and hang a pierced bob using your own soft thread. A separate notched gauge measures nominal free cord length. This is an experimental geometric guide, **not a precision clock or a validated tautochrone**.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Node 22.12+. Production base `/daily-app2/20261101-21/`; `serve.mjs` serves the real built assets under that prefix on port 5678. Individual scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages is installed. Whole-gallery publication uses **parent monorepo** predeploy/deploy, never the per-folder deploy over the gallery.

## Reference-first provenance

Local candidates under `/Volumes/ExternalHD/3d_printing_apps/` were examined before selecting final geometry. Keycap Studio and Weave READMEs explain their mechanisms. The actual keycap template has 944 triangles, 3 components, 15.20 × 15.20 × 43.10 mm combined envelope; diamond-link has 5,940 triangles, 1 component, 7.981 × 9.241 × 8 mm. Neither provides a flat-sheet card/socket reference; switch sockets are not imposed on this unrelated kit.

Selected public STL: **White Cat Kit Card**, **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Source README and license were retrieved this run. Actual binary mesh SHA-256:

`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`

30,616 triangles; 179.819997 × 178.019994 × 3.190000 mm; 27 edge-adjacent components, nonwatertight source defects. Units assumed mm, corroborated by sheet fits; STL itself has no units. Source was downloaded to temporary storage, parsed, split and sectioned at Z=.1/.5/1.59 mm. Representative section plots were visually inspected. Evidence: `reference-analysis.json`, `reference-measurements.json`, `evidence/reference-sections.png`. Reproduce using trimesh/numpy/matplotlib: `python reference-measure.py /path/to/source.stl`.

**Measured:** 1.6 mm sheet, 4.50 × 1.700012 mm sockets, .21/.22 mm low runner planes. **Retained:** default sheet and 4.50 mm socket length. **Proposed tolerances:** .10–.30 mm TOTAL allowance (default .15, not source ~.100012); tongue length 4.50 minus allowance; bed-level runners .4–.6 mm thick. **Original redesign:** two-foot fork, mirrored sampled cycloidal cheeks, bob, gauge, four-bay carrier and all CSG. No source triangles or spacecraft artwork copied, no arbitrary private mesh redistributed, no repair claimed. Attribution/license included in `REFERENCE-LICENSE.txt`.

Read-only visual reference `keycap_generator2`: inspected README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, geometry/stl.ts and imageTrace.ts. Applied concrete patterns: 374px scrolling LEFT rail, sticky compact header, tactile raised/pressed controls, paired numeric/sliders, labelled collapsible sections, lavender-grey desk `#e7e9f1`, white panels, ink `#1f2233`, coral `#e2557a`, checkerboard cutout, saved light/dark toggle, worker/current-result gates, part views and portable designs. Phone is preview/exports first, controls stacked. Local Fredoka/Rubik, visible focus, generous touch targets, reduced-motion CSS. Reference files/history/dependencies/deploy scripts untouched.

## Geometry and parameters

Every dimension is **millimeters**; final selected export X/Y/Z is shown.

| Control | Supported range |
|---|---|
| Card width / height | 200–240 / 180–220 |
| Cycloid radius a | 7–10 |
| Fork height H | 64–80, plus 6 mm top band |
| Bob radius | 5–7 |
| Sheet | 1.6–2.4 |
| Total socket allowance | .10–.30, not per side |
| Part spacing | 3–4 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Artwork placement | Z rotation ±180°, X±1.5 / Y±2, keep-in radius 6.5 |

Three presets with real generated 3D thumbnails: **Quiet curve**, **Long cadence**, **Pocket arc**. Rounded, square and chamfered fork/bob silhouettes; bounded variation. Radius changes real cheeks and gauge, height changes real support, bob radius changes real hanging profile.

Cheeks: `x = ±[.6 + a(t − sin t)]`, downward drop `a(1 − cos t)`, t=0..π, 64 segments per side. Cusp sits at H−5 above the fork shoulders. A central 1.2 mm channel avoids a zero-width cusp; suspension eye is 4 mm above it. Fork leg centers ±(πa+5). Two feet have sheet-deep tongues, 4.50−allowance wide, seated in measured-length sockets; shoulders rest on plinth and tips end flush under it. Both loose-fit joints require glue.

Gauge side-notch centers are **4a apart** (28–40 mm). Initial eye-to-eye cord length is approximately 4a+4 mm; knots and finite eyes require adjustment. This finite, front-rim guide is NOT an ideal point suspension. No exact period, isochronism, force, wear, contact tracking, stability or material simulation is claimed. The dashed thread is an explanatory external supply at rest, not an exported solid or fake animation.

Connected-card, de-tabbed, assembled, exploded and isolated-part views all use the same actual parts. Assembly view parks the setup gauge beside the model; exports are always bed-flat, not overlapping assembled shells. The real card is a Boolean union of a frame, four separate intended parts and sixteen accessible runners, not a loose print-plate layout. Snip cuts are outside functional profiles.

## Local image import

Desktop and phone file pickers plus drag/drop. Actual PNG/JPEG: ≤2 MB, ≤12 MP, ≤6000 px side; content/header validation before decoding, normalized to ≤500 px. Simple SVG: ≤2000 allowed vector elements, ≤6000px declared side, scripts/external references/effects rejected; rasterized locally at 256px. Browser fill rules retain SVG holes.

Conversion is **20×20 sampled threshold or grayscale height-field relief**, not exact vector tracing and **not full 3D reconstruction from one photo**. Transparency composites over chosen light/dark background; luminance becomes height. Threshold 1–254, crop/fit and crop shifts ±25%, physical footprint, rotation, depth and placement affect geometry. Source and actual cutout on checkerboard are shown. A closed triangulated cutter is Boolean-subtracted from the protected front plinth, away from both foot joints. Bright holes keep the original surface and backing, not through-holes; dark ring preservation is independently probed in the final solid. At least 1 mm backing remains. Empty silhouettes and unsafe transforms block export.

Text up to eight characters and six searchable bundled icons use the same real conversion. Engraved-only style deliberately preserves flat sheet thickness; raised decoration is not offered. Preview palette colour is not STL colour. Synthetic CC0 PNG/JPEG/SVG fixtures are bundled with attribution.

## Local STL import

Actual binary or ASCII STL, 40 bytes–2 MB, ≤1500 triangles, .2–250 mm per source axis, finite bounded coordinates. Strict parser welds coincident vertices at 1e-5 mm, checks edge incidence/winding, one connected positive volume, nondegenerate triangles and self-intersections. Supported contract: **one convex outward-wound broad-flat-bottom solid**, no hollow/concave/branched/multiple bodies or overhangs. Unsupported input is explicitly rejected, not hulled, silently simplified into another shape or claimed repaired.

Select Z/Y/−Z up before attaching; see actual source 3D, dimensions and triangle count; **confirm mm explicitly** since STL has no unit metadata. Changing up axis clears source and asks for reattachment. Proportional XY footprint scale, independently fitted Z engraving depth, rotation and placement transform the exact accepted mesh into a real Boolean plinth cutter. Keep-in/backing checks protect the two sockets and cord area. This is meaningful source-shaped integration, not unchanged re-export. Replace/remove/reset return to defaults. Binary and ASCII synthetic fixtures are bundled.

All processing stays in the browser. No uploads, remote API/CDN, key or paid service. User files are not saved in the repository. Bounded normalized images/mesh payloads travel in JSON and local named designs; missing image payload explicitly requests reattachment. Restored STL is revalidated. Undo/redo, six named local designs, JSON save/open; clearing browser storage removes local saves.

## Modeling, exports and validation

Manifold WASM genuine solid operations in a Web Worker, bounded circular segments/import grid, 100ms debounce, generation ids and exact-current-state key gate. Build/error/success status; invalid edits disable exports even while the last valid preview remains visible. Preview and binary STL share the exact valid result. Worker/WASM/fonts are locally bundled. Heavy STL checks run in worker.

Prominent connected-card STL, per-part STL buttons, Everything ZIP with card, four clean part STLs and numbered `ASSEMBLY.txt` plus current dimensions. Print card OR clean parts, not both unless desired. No fake 3MF label. STL stores neither colours nor units; slicer at 100% mm.

`validate.mjs`: independent float32 STL byte-length, finite coordinate, nonzero area, normalized outward normal, expected dimensions, 1e-5 mm welded opposite-direction edge incidence, per-component positive volume and component counts. Checks every individual solid, one-component card and four-component loose layout. Tests defaults, every preset/shape, individual and combined parameter bounds, image threshold/grayscale inputs, ASCII/binary inputs and transforms, including imports at bounds.

Separate mechanical tests: assembled pair intersections, 21-step foot insertion, two socket probes and shoulder stops, flush tongue tips, print-layout containment/separation, card X/Y/Z envelope, bed-footprint support, sixteen safe snips releasing five components (four parts + carrier). Initial free bob swing sampled at −15..15°; **not** simulated cheek wrapping/contact dynamics. Cycloid samples and gauge notches checked independently. See `geometry-validation.json`.

`browser-test.cjs`: real production-browser PNG/JPEG/ASCII/binary file uploads and downloads, pixel/threshold/depth/crop and STL shape/scale/rotation/placement changes compared to defaults; actual bytes match UI fingerprint and Node regeneration of downloaded JSON, with mesh/mechanical checks on imported models. Replace/remove/reset; truncated, malformed, empty, excessive, open/nonmanifold, concave and unsafe inputs block export recoverably. 320/390px phone, touch orbit/pinch, phone imports/exports, no runtime errors/external requests.

`studio-test.cjs`: presets, silhouettes, text/icons/SVG, portable JSON and named-save reload, missing payload rejection, undo/redo, every view, ZIP members parsed, saved theme, focus, collapsing, reduced motion, left desktop rail and phone preview-first, worker abort/recovery. Additional personalization, orientation, icons/drop, rapid gates and phone-expanded-section tests provide focused evidence. Screenshots and JSON reports are computational evidence only.

## Print / assembly

1. PLA/PETG, .16–.20 mm layer, three walls, 100% mm scale, flat on bed, no supports intended. Check slicer first layers. Trial-print plinth/fork as a calibration coupon before a full card.
2. Cut sixteen runners 1.6 mm outside part boundaries, deburr without damaging sockets, tongues, eyes or guide curves. Adults only: cutters and small loose parts.
3. Seat both feet together, check fit/first-layer swelling, square and glue using plastic-compatible adhesive. Allow to cure. No friction-only or snap retention claim.
4. Tie .3–.5 mm soft thread through the upper eye and route down the **front face**, not through solid sheet, to the cusp. Tie the bob's upper eye using the gauge as an approximate length setup. Smooth guide edges. Put on a level stable table.
5. Gently try a small swing under 15°. Stop and rethread if binding, edge escape or collision occurs; do not force or suspend loads. The guide's larger-amplitude cord contact and timing remain experimental.

Required external supplies: **thread and adhesive**. No metal hardware, magnets or bearings. No physical print, assembly, glue strength, cord-tracking, fatigue, stability, oscillation or timing test has been performed. A watertight mesh is not proof of physical performance.

## Dependencies / credits

React/ReactDOM, Vite/React plugin, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for verification. Simple bundled icon paths and shared Daily Object Lab synthetic fixtures are original. Studio infrastructure is adapted from existing monorepo apps; fork/cheek/bob/gauge geometry, assembly map and mechanism checks are new. Read-only reference trees and old daily_app were not modified.
