# Sag & Sphere — curvature demonstrator kit-card studio

A local React + Vite maker studio that generates a **five-part physical kit**: a four-socket tripod deck, three identical narrow-contact feet, and a loose sliding depth probe with real engraved 1 mm scale, long zero, and plus/minus marks. Twenty genuine low breakaway runners join the parts to a five-bay carrier. It is not a browser game or general-purpose mesh tool. Three fixed foot joints require adhesive; no screws, magnets, bearings or other hardware. **Probe is not captive: support it by hand. Physical printing, sliding feel, calibration and accuracy have not been tested.**

## Reference-first provenance

Inspected read-only local `keycap_generator2` README, `src/styles.css`, `App.tsx`, `Viewer.tsx`, worker, image tracing, STL parser and export modules. Concrete interaction patterns retained: 374 px left scroll rail, sticky compact brand, collapsible controls, paired mm inputs/sliders, tactile selected controls, bundled Fredoka/Rubik, saved light/dark toggle, large gradient-backed right preview and preview-first phone stacking, checkerboard source/cutout comparison and exact-current worker/export gating. Generic studio/import infrastructure was adapted from an earlier app in this monorepo; the new tripod/probe/scale mechanism and assembly are original, not a repeated solitaire mechanism. Reference project dependencies/history/deployment were not copied wholesale.

Local clicker-template and fabric-link STLs were parsed and rejected as inappropriate sheet-kit interfaces (hashes and measurements in reference-analysis.json). No suitable local kit reference was found. Downloaded and parsed **Mike Kasberg's White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Source README and full license are in `evidence/`. Actual STL was downloaded into /tmp (not bundled), parsed with `reference-measure.py`, and three measured cross-sections visually inspected before final geometry design.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles, bounds approximately 179.82 × 178.02 × 3.19 mm; mm assumed/corroborated by sheet structure because STL has no units.
- Actual sheet planes 0 / 1.60 mm; four measured 4.50 × 1.700012 mm slot loops; low-runner planes .21 / .22 mm.
- 27 edge-adjacent components: two substantial meshes plus 25 degenerate/surface fragments. The reference as a whole is not watertight. No repair is claimed or used.
- Measured source sheet/socket dimensions map to defaults 1.60 mm and 4.50 × 1.70 mm. Proposed tongue is 4.40 × 1.60 mm; .10–.30 mm total fit clearance is printer-dependent. Runners intentionally strengthened to .4–.6 mm.
- Original CSG reconstruction: four new sockets, 120° foot placement, three downward shoulders, calibrated probe datum and twenty accessible runners. Source spacecraft shapes are not copied, and no raw third-party source mesh is redistributed. Full source measurements and exact parameter mapping are in `reference-analysis.json`.

## Dimensions and mechanics

All physical dimensions in **millimeters**, rotation in degrees; pixel/crop controls labeled separately.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 125–180 / 150–205 |
| Contact circle radius a | 24–32 |
| Foot drop | 10–14 |
| Deck apron extension | 24–30 |
| Sheet | 1.6–2.4 |
| Socket length | 4.5–5.5 |
| Total clearance | .10–.30 |
| Part-to-bay spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Preview-only probe sag | −4 to +4 |

Deck is `(2a+18) × (2a+apron extension)`. Contacts at 90°, 210°, 330° lie on radius a; triangle side is √3a. Feet insert from BELOW: shoulders at deck underside, full-sheet tongues end flush at top. Narrow contact lands are .8 mm wide × sheet thickness, not mathematical points. Three static joints need adhesive after dry-fit/calibration; the probe must remain glue-free. Probe inserts from ABOVE, shaft is socket length minus total clearance wide. Read the 1mm ticks at the deck TOP; long zero is `footDrop + sheet` above its tip. Plus marks the deeper-sag side. At zero, all contact lands and probe tip lie on one plane. The top handle stays accessible over supported travel but is not a captive retention feature.

For an ideal sphere `R=(a²+s²)/(2|s|)`. s=0 is flat / infinite radius. Positive sag lowers the center tip below foot plane (zero mark drops below the reading edge). Pose slider moves only the preview probe, never exported geometry. The calculated radius is explicitly idealized, not a measurement guarantee. Three contact lands, extrusion, first layers and reading parallax cause error. Calibrate on flat rigid stock; not for fragile surfaces, medical or precision metrology use. Print deck, one foot and probe first as a fit coupon; do not force thin tongues. Card combinations that cannot fit bays are blocked with actionable errors.

## Image → real printable engraving

PNG/JPEG file picker on desktop and phones, plus desktop single-file drag/drop; restricted simple SVG also supported. Maximum file 2 MB; raster ≤12 MP and ≤6,000 px per side, verified before full decoding. Source normalized to ≤500 px; SVG simple paths/shapes only ≤2,000 elements, no scripts/external references/embedded images/filters; rasterized locally.

Artwork samples **20 × 20** after contain/cover crop, X/Y shifts ±25%, light/transparent background removal or dark-background inversion. Threshold selects brightness 1–254; grayscale uses inverse luminance. A closed triangulated height-field cutter is Boolean-subtracted into a protected deck apron, with depth .4–.6 mm and ≥1mm continuous backing. Bright holes stay uncut. Source and exact cutout grid appear on checkerboards. This is bounded sampled **2D-to-relief**, not exact vector tracing or reconstruction of full 3D objects from photos. Empty silhouettes block exports. Text up to eight characters and six searchable bundled synthetic SVG marks use this same real geometry path. Raised artwork deliberately unsupported so the sheet remains bounded/flat-backed.

Art footprint 4–7 mm; rotation ±180°; X ±1.5 / Y ±2 mm in a checked radius-6.5-mm keep-in zone away from sockets. Import reset/remove/replace and return-to-defaults available.

## STL → exact custom recess

Both ASCII and binary STL are content parsed. Limit 2 MB / 1,500 triangles, one closed connected outward-wound solid, each oriented dimension .2–250 mm. Validates finite vertices, nondegenerate triangles, positive volume, welded 1e−5-mm edge incidence/opposite winding, connectedness, triangle intersections, convexity and a broad bottom footprint. **Concave, hollow, branched, open/nonmanifold, self-intersecting, multipart and overhanging meshes are explicitly unsupported. No automatic repair or convex-hull substitution.** Convex-hull calculation is used only to validate the bottom footprint, never to replace the input mesh.

Select up-axis Z/Y/−Z before import (changing it requests reattachment). Source dimensions and source 3D preview shown. Explicitly confirm millimeter coordinates: STL has no units. Proportional XY footprint scale and independent Z engraving-depth scale are displayed, with rotation/placement/reset. The original validated solid is transformed and Boolean-subtracted as a custom deck recess, measurably changing output, not just displayed/re-exported. Safe zone and depth checks protect all interfaces and backing.

## Studio, privacy and exports

Everything stays in the browser: no backend, API key, paid service, uploads, analytics or runtime CDN. Three.js/OrbitControls, Manifold WASM, fflate, fonts and generation dependencies are locally bundled. Heavy geometry and STL validation run in a Web Worker, bounded complexity, 100ms debounce, request IDs and exact-current key guards. Preview/export use identical final meshes; displayed fingerprint is verified against downloaded bytes and a regenerated portable JSON. Invalid edits label a last-valid preview and block **all exports**; worker failure also blocks exports until reload/recovery.

Three real generated preset thumbnails, three silhouettes, mechanically bounded variation, undo/redo (35 states), up to six local named designs and JSON save/open. Bounded normalized images and validated mesh arrays restore portably; absent image payload explicitly requests reattachment. Only synthetic sample fixtures in repository: PNG, JPEG, ring SVG, ASCII wedge and binary gem. Preview colors do not imply color in STL.

Connected-card, de-tabbed plate, assembled, exploded, isolated deck and each foot/probe views use identical underlying solids. Exploded is illustrative (feet −14 mm, probe +28 mm); exports always bed-flat. Final X/Y/Z mm bounds shown for selected export. Download binary card STL, plate or individual parts; prominent card/deck/probe buttons and Everything ZIP (card + five part STLs, portable JSON, numbered assembly notes). No fake 3MF.

## Printing and assembly

1. Print bed-flat Z=0, 100% mm, PLA/PETG, .4mm nozzle, .16–.20mm layers, 3+ walls. Supports not intended. Calibrate first with deck, one foot and probe.
2. Snip all20 runners1.8mm beyond each part; finish stubs completely flush, avoiding contacts, tongues and engraved scale. Clean-part exports avoid runner scars.
3. Insert three feet from below; shoulders stop at underside and tongues finish flush with deck top. Dry-fit, zero on flat stock, glue only the three fixed seats, hold level while curing.
4. Insert probe tip from above. Support it by hand (not captive); never glue it or force a tight slot. Small parts; adult supervision.
5. Zero the long center tick at deck TOP on a flat rigid reference. The other ticks are1mm apart; plus side is deeper center sag. Gently compare broad rigid curved surfaces. Not a calibrated instrument; do not use on fragile surfaces.

Full numbered instructions and current numerical fits are in app and ZIP. No physical print, fit, friction, strength or accuracy test has been performed.

## Reproducible validation

```sh
npm install
npm test
npm run predeploy
python3 serve.py # dist at localhost:5754/daily-app2/20261103-4/
node browser-test.cjs
node studio-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node stale-test.cjs
node presentation-test.cjs
node pose-test.cjs
```

`validate.mjs` independently reads actual binary STL bytes, exact length, finite coordinates/normals, positive area, expected mm bounds, outward stored normals, positive signed volume per component, welded 1e−5-mm two-face/opposite-directed edges and component counts. Tests presets, silhouettes, individual/combined extrema, PNG-style/grayscale/hole/STL-derived models; intersects feet on underside insertion paths, probe at33 positions across ±4mm and above-deck insertion, all assembled/flat parts, support-free slices, real20-runner cuts (carrier+five undamaged released parts), card bounds, contact datums and ideal sphere equation. Hole probe checks uncut material in final solid. These are computational geometry/assembly checks, not print tests.

Production Playwright chooses actual PNG/JPEG/ASCII/binary files, downloads/parses exported STLs, verifies changed images/threshold/depth/crop and STL scale/rotation/placement alter final meshes, remove/reset restores bytes, malformed/nonmanifold/excessive/empty inputs block exports recoverably. Checks exact preview/JSON/export signatures, every preset, all icons/text/SVG holes, portable/named design round trips, undo/redo, worker failure/stale guards, all views, real ZIP parts, saved theme/focus/collapses, 320/390px preview-first layouts without overflow, actual touch orbit/pinch and phone imports/downloads. Reports/screenshots stored alongside app; see VALIDATION.md for completed results.

Dependencies: React, ReactDOM, Vite/React plugin, Manifold-3D (Apache2), Three.js (MIT), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for development checks. Source reference CC BY4.0 above; full source license preserved. No private/user file is bundled.
