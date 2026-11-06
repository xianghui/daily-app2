# Finger & Corner — right-angle kit-card studio

A React + Vite browser-local parametric **two-wall finger-joint kit card**. Snip eight actual runners, stand the complementary comb walls vertically at **90°**, and translate the signature wall horizontally into the mating wall. Alternating bands share the corner column without solid intersections. Reverse translation releases the dry joint; **adhesive is required for a lasting assembly**. No snap, captive motion, friction-force or structural rating is claimed. **Physical printing, fit and glue strength have not been tested.**

## Reference-first evidence

Inspected local `keycap_generator2` README, styles, App, Viewer, image/STL/import/export and worker modules before implementation. Its switch template was actually parsed: three components, 15.20 × 15.20 × 43.10 mm aggregate. Also parsed `fidget_fabric_generator/public/templates/diamond-link.stl`: one 7.981 × 9.241 × 8 mm link. Their MX/fabric interfaces are unsuitable for a bed-flat sheet kit. Reference trees and the old daily_app tree remain read-only.

Selected public [White Cat Kit Card](https://github.com/mkasberg/white-cat-kit-card), Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Download source is recorded in `reference-analysis.json`; actual cached binary was independently re-parsed this run. Upstream README, license and frame source inspected. **SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`**; 30,616 triangles; 179.820 × 178.020 × 3.190 mm, assumed millimeters; two edge-adjacent components and 57 anomalous edges. Do not mistake the source for a validated printable mesh.

Measured sections Z=.100/.215/1.590 mm show **1.60 mm sheet**, **4.50 × 1.70 mm sockets**, and low runner tops **.21–.22 mm**. See `reference-analysis-raw.json`, `reference-analysis.json`, and `evidence/reference-sections.svg` / PNG. Reproduce: `python3 reference-analysis.py /path/to/public-source.stl`. No raw third-party STL is copied, repaired or redistributed. This is an original parametric reconstruction adapting **thin-sheet assembly, calibrated interfaces, and a removable low-runner carrier**. Source cat outlines/clips are not copied.

Original design differences: perpendicular alternating comb walls instead of source tabs/clips or previous coplanar dovetail/bridle mechanisms; 3–7 equal height bands; independently calibrated vertical and root gaps; variable sheet engagement; remote handle engraving. These new dimensions are proposed printer-dependent designs, **not measured source features or physical test results**.

## Studio

374 px scrollable left editor / large right Three.js viewer. Phone layout puts preview, dimensions and exports before stacked controls. Fredoka/Rubik are bundled locally. Lavender-grey desk, white panels, coral tactile controls, saved dark mode, visible focus, generous touch targets and reduced-motion support. Collapsible sections, three live-model preset thumbnails, rounded/chamfered/notched remote silhouettes, undo/redo, six local named designs and portable JSON.

Views: assembled, exploded (instructional offset only), connected flat card, clean plate and isolated parts. Inspection yaw and preview colours do not change STL. Every print export remains bed-flat, never the interpenetrating/assembled visual layout. STL contains no colour.

## Parameters (millimeters unless stated)

| Parameter | Range | Meaning |
|---|---|---|
| Card | 100–180 × 85–140 | Full frame envelope, checked for packing |
| Wall reach / height | 25–45 / 24–34 | Real wall extents |
| Finger bands | 3–7, integer | Equal alternating comb bands; even counts supported |
| Sheet | 1.8–3.2 | Tooth engagement and panel thickness |
| Vertical gap | .10–.50 | Each complementary band shrinks half-gap at each internal interface |
| Root gap | .10–.30 | Retreat behind the occupied corner column |
| Spacing | 3–5 | Separation between parts/carrier |
| Breakaway runners | .8–1.2 wide × .4–.6 thick | Four per wall; on bed, away from teeth |
| Engraving | .4–.6 deep; 4–7 footprint | Protected remote wall face; ≥1.2 backing |
| Art transform | ±180°, X ±1.5, Y ±2 | Around mark center X=−.55×reach, Y=height/2 |

Minimum full interior tooth height is 2.8 mm; engraving keep-in radius is 5.8 mm. Unsupported combinations, empty silhouettes and unsafe transforms block exports rather than silently clamp or substitute geometry. Card frame/crossbar width is fixed 2.4 mm. Generator verifies a single connected card and one component for each clean wall.

## Image / SVG / text workflow

File picker on desktop/phone, drag-drop, and bundled synthetic PNG, JPEG and ring SVG examples. PNG/JPEG must be actual matching content, **16 bytes–2 MB**, ≤12 MP, ≤6,000 px per side. Images are normalized locally to ≤500 px. Simple SVG filled shapes/paths are safely rasterized at 256 px; external references/scripts/effects/text nodes rejected. Six bundled original searchable icons and text up to eight characters use the same pipeline.

**Documented conversion:** source composites against light/dark background; fit/cover and crop shift ±25% map it to a bounded **20×20 luminance grid**. Threshold 1–254 selects dark pixels, or grayscale creates varying depth. A continuous triangulated height surface is closed with sides/bottom and Boolean-subtracted from the signature wall with Manifold. The checkerboard shows the sampled cutout; bright holes remain full-height backing in the actual solid. This is sampled **2D-to-silhouette/height relief, not reconstruction of a 3D object from a photograph**, and not exact vector tracing. Thin details may disappear. Only engraved art is supported so sheet/card thickness and bed footprint remain consistent. Footprint, threshold, pixels, depth, background and transforms change downloaded geometry.

## STL workflow / limits

Accepts **ASCII and binary STL**, ≤2 MB / **1,500 triangles**, each dimension **.2–250 assumed mm**. STL has no units: explicitly confirm millimeters. Select Z up, Y up (+90° X), or −Z up before choosing file (changing orientation requests reattachment). Source preview reports oriented dimensions, triangle count and format. XY scale is proportional to requested footprint; Z independently maps to .4–.6 mm engraving depth. Both scale factors are displayed. Rotate, center/reset, place, replace/remove or return to defaults.

Exact accepted mesh is Boolean-subtracted into the wall, not merely viewed or re-exported. Supported contract: **one connected, consistently outward-wound, closed convex broad-flat-bottom solid without overhang**; base contact ≥25% of XY bounding rectangle. Checks include finite coordinates, dimensions, triangle size/count, welded opposite edge incidence, component/volume, triangle intersection, convexity and footprint. Open, nonmanifold, inward, self-intersecting, concave/hollow/disconnected or unsupported meshes are **rejected with guidance**, never repaired or replaced with a convex hull. A hull is used only to validate bottom-footprint support; no hull replaces source triangles. Detail must retain a 1.2 mm minimum scaled XY span. Mesh/height cutters cannot enter tooth interfaces or remove the 1.2 mm backing.

## Generation, privacy and saves

Heavy STL parse / all solid operations run in a local Web Worker with locally bundled Manifold WASM. Bounded tessellation and 100 ms debounce; request IDs ignore stale results. Current-state key includes every geometry parameter and source settings; invalid/building edits disable exports even while the last-valid preview remains visible. Preview and STL use the exact same final meshes, with displayed fingerprint. No APIs, CDNs, keys, uploads or remote generation. Synthetic fixtures only; no personal input committed.

Portable JSON and local named designs carry bounded normalized PNG or verified mesh payloads; missing image payload explicitly requires reattachment. Restore revalidates STL and dimensions. Source up-axis retained; no pretended restoration from an inaccessible file path. JSON ≤2 MB; normalized image ≤250k pixels / 1.8m data URL characters. Local storage is on-device only.

## Printing / assembly

1. Print **card OR clean walls**, bed face Z=0, 100% millimeters. PLA/PETG, .16–.20 mm layers, .4 mm nozzle. No supports intended. Everything ZIP includes card, both wall STLs, exact design JSON, numbered instructions and assembly SVG.
2. Snip eight low runners and trim only remote long-edge scars, leaving functional teeth intact. Cut simulation confirms carrier + two undamaged walls, without detached runner fragments.
3. Stand both walls on bottom edges at 90° as previewed. Align alternating bands and move signature wall horizontally inward. The engraved face points toward the inside of the corner. Keep the two bed-faces oriented as shown; do not flip a comb top-to-bottom.
4. Dry-fit, then glue tooth tips/root seams for a lasting corner. No hardware needed, but adhesive is a real requirement. Dry joint is not retained; it releases by reverse translation. No snap or press-fit force asserted. The two clean walls are the calibration coupon.
5. Starting gaps: PLA .30 vertical / .20 roots; PETG .40 / .25. Adjust for printer/material, first-layer expansion and glue line. Never force. Not load-bearing, a structural enclosure or a calibrated square.

## Run / validate

```sh
npm install
npm run dev
npm test
npm run predeploy
node browser-test.cjs
node feature-test.cjs
```

Browser scripts default to local port 5999 and real base `/daily-app2/20261106-9/`; `browser-test.cjs`/resilience tests accept TEST_BASE for production hosting. Chrome channel via Playwright. See `VALIDATION.md` and JSON reports for executed checks. Mesh tests are independent of the modeling kernel: parse actual float32 STL, finite/nonzero triangles, normalized matching normals, positive volume per component, every welded edge exactly two opposite incidents, bed-aligned expected bounds. Also check card connectivity/cuts, tooth bands, root/vertical gaps, noncollision across 81 insertion positions, and support footprint. Computational geometry is **not physical print, glue, force or wear testing**.

Dependencies: React, Vite, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages. Shared studio/import validation infrastructure adapted from earlier daily apps; corner construction, assembly transforms and independent mechanical tests are new. Source `keycap_generator2` provided the interaction/visual pattern, not wholesale dependencies or Git history. Root monorepo predeploy/deploy publishes the combined gallery; per-app gh-pages scripts are retained as requested.
