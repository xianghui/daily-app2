# Touch & Tangency

A reference-grounded **three-part flat-pack triangle/incircle teaching kit**. Snip twelve actual runners, lower a removable circle gauge into a backed scalene triangle pocket, and compare the three perpendicular contact gaps. A second assembly mounts the panel upright in a socketed signature deck; the loose gauge rests on the deck, **not captured in the vertical pocket**.

This is not the earlier circle-surround illusion kit or a cosmetic pendulum variant: base, altitude and apex regenerate a genuine triangular recess, its side-weighted incenter, matching circle radius and three exact perpendicular contact marks. There is no oscillating blade, axle, switch, spring or simulated dynamics.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Static React/Vite app; all geometry, Three.js preview, locally bundled Fredoka/Rubik fonts, Manifold WASM and fflate exports run locally. No API keys, paid services, CDN imports, backend or user-file uploads. Vite base `/daily-app2/20261103-12/`. Individual `deploy` uses gh-pages, but the combined site is published from the parent monorepo's `deploy/` directory.

## Actual STL reference

Local collections were searched first. The actual local switch template and fabric-link STL were parsed (hashes/dimensions/components in `reference-measurements.json`); neither supplies a suitable sheet/carrier interface. Kit Card Studio's README was inspected; it has no suitable source STL. An accessible public sheet-kit reference was then downloaded and parsed before selecting final geometry:

- Mike Kasberg, **White Cat Kit Card**, Printables 865769, CC BY 4.0. Source: https://github.com/mkasberg/white-cat-kit-card ; downloadable model: https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card . Attribution/license in `REFERENCE-LICENSE.txt`, original README in `REFERENCE-UPSTREAM.md`.
- Binary STL SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**; 30,616 triangles; overall **179.820 × 178.020 × 3.190 mm**. STL lacks unit metadata: mm assumed and corroborated against source sheet dimensions.
- Actual edge-adjacent split: **27 components**, including defective/nonwatertight source fragments. This source is inspected as design evidence, **not repaired or used as printable output**.
- Measured planes/sections: **1.60 mm sheet**, **4.50 × 1.700012 mm sockets**, low runner elevations **0.21/0.22 mm**. See all component bounds, loop measurements and Z planes in `reference-measurements.json`; actual mesh cross-sections Z=.1/.5/1.59 are in `evidence/reference-sections.png`.
- Original parametric reconstruction preserves the 1.6 mm sheet and 4.5 × 1.7 mm default sockets. Proposed, not source measurements: 4.4 × 1.6 mm tongues, .10 mm total fit allowance, .4–.6 mm bed-aligned runners, 1 mm pocket floor, triangle/contact mathematics and removable radius-offset gauge. Raw STL and cat artwork are **not redistributed**.

`reference-measure.py` remeasures the downloaded mesh read-only with trimesh/numpy/matplotlib. `reference-analysis.json` maps source measurements to generator parameters. These are not physical-print measurements.

## Geometry and supported controls

All physical dimensions are **millimeters**; rotation is degrees. Each numeric input is paired with a slider. Three real presets and soft/square/chamfered deck silhouettes are available. Unsupported sizes and insufficient card space disable export.

| Parameter | Range / default |
| --- | --- |
| Card width × height | 130–160 × 245–290 / 140 × 260 |
| Triangle base / altitude | 65–85 / 75; 38–55 / 48 |
| Apex horizontal offset | −15–15 / 9 |
| Gauge radial clearance | .15–.40 / .25 |
| Sheet | 1.6–2.4 / 1.6 |
| Pocket floor | fixed 1.0; pocket depth = sheet − 1 |
| Part spacing | 3–5 / 3.5 |
| Runner width / thickness | .8–1.2 / 1; .4–.6 / .6 |
| Socket TOTAL allowance | .10–.25 / .10 |
| Import footprint | 4–7 / 6 |
| Engraving depth | .4–.6 / .5 |
| Artwork rotation / placement | ±180°; X ±1.5, Y ±2 |

For vertices A/B/C and opposite side lengths a/b/c, I=(aA+bB+cC)/(a+b+c), r=2 area/perimeter. Circle gauge radius is **r − radial clearance**, not r; 128 circle segments add at most r(1−cos(pi/128)) mm inward tessellation deviation. Contact witness marks use perpendicular projections of I onto each triangle side. The gauge's center hole is 4 mm. The floor supports flat comparison; no snap fit, magnet or vertical capture is implied. Socket width stays 4.5; tongue width is 4.5−allowance, socket depth is sheet+allowance.

## Image → real engraving

File picker works on desktop/phone, with desktop drag/drop and downloadable synthetic sample files. PNG, JPEG and simple SVG are supported. File/content checks precede decode: **2 MB**, **12 megapixels**, **6,000 px per axis**; normalized portable image ≤500 px and ≤250,000 pixels. SVG permits bounded simple vector shapes, no scripts/references/external resources, ≤2,000 elements; rasterized locally to 256 px.

Fit/cover, crop shifts ±25%, dark/light background selection and threshold 1–254 control a **20 × 20 sampled luminance grid**. The actual cutout is shown on checkerboard beside the original source. Thresholded heights or grayscale heights form a closed triangulated cutter, Boolean-subtracted from the deck apron. Bright holes remain **unengraved solid backing**, not filled dark marks. This is a documented 2D-to-sampled-relief conversion, **not exact outline tracing or full 3D reconstruction from one photograph**. Fine detail below grid resolution is lost. Text and six searchable bundled icons use the same local image-to-solid path. Raised/cut-through modes are deliberately not offered: every mark preserves at least 1 mm backing and avoids assembly sockets.

## STL → real integrated engraving

ASCII and binary `.stl` supported, ≤2 MB / **1,500 triangles** / **0.2–250 mm each axis**. Parser checks finite coordinates, degeneracy, welded edge incidence/winding, connected positive volume, triangle intersections, convexity, broad flat bottom (≥25% footprint) and unsupported overhangs. Only one closed outward-facing convex solid with a broad bottom is accepted. **Concavities, hollow/open/nonmanifold meshes and unsupported geometry are rejected explicitly; no convex-hull substitution or claimed repair.** This restricted support is shown before file selection.

Original source preview and dimensions are shown. Explicit millimeter confirmation is required, since STL has no units. Select Z, Y or −Z up before reattaching; the axis operation rotates original vertices. XY scales proportionally to the selected footprint; Z scales independently to the engraving depth (both factors shown). Rotation, placement and center/reset controls affect the actual mesh cutter. Exact imported geometry is Boolean-subtracted from the protected apron; this is not unchanged re-export, a texture or interpenetrating shells. A 6.5 mm keep-in radius and ≥1 mm backing guard functional regions. Replace, remove, reset and invalid-import recovery are supported.

## Studio / persistence / exports

374 px scrollable left rail, collapsible sections, tactile selected buttons, focus outlines, saved light/dark theme, reduced motion, live orbit/fit/zoom and phone preview-first stacking. View modes: connected card, de-tabbed parts, flat comparison, upright display, exploded and every isolated part. See-through gauge and lift are preview aids; export stays bed-flat and uses the **same exact final current geometry**. Worker handles heavy CSG/parsing, 100 ms debounce, latest-result guards, current-state signature and invalid-export gating; previous valid preview is labelled when export is paused.

Undo/redo, six local named designs and portable JSON save/open include bounded original mesh or normalized image payloads. Missing image payloads explicitly request reattachment. Files are processed locally; repository fixtures are synthetic only. Browser storage is device/origin-specific.

Downloads: binary connected-card STL, de-tabbed three-component plate, individual STLs, and **Everything ZIP** containing the card, each clean part, portable JSON and numbered assembly/print instructions plus current fits. STL stores geometry, **not preview colours**. No 3MF is claimed.

## Printing and assembly

PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls, 100% scale. No supports intended; inspect slicer first layers. Default card needs a 140 × 260 mm bed; print individual parts on smaller beds. Snip twelve accessible low tabs 1.8 mm away from the part and file stubs flush; preserve functional tongues. Lay the triangle pocket flat, then insert/remove the gauge normal to its face. It sits on the 1 mm floor, proud of the panel, with intentional equal radial gaps. For upright display remove gauge first, insert panel tongues into deck sockets and lay gauge loose in front; optional adhesive on fixed tongues only. **Do not assume the vertical pocket retains the gauge.** No hardware required. Adult teaching/craft kit with small parts.

Calibrate the pocket/gauge and sheet/socket fits first; tolerances depend on actual material, slicer and printer. No physical print, precision, fit, friction, adhesive or upright stability tests have been performed. Computational geometry checks do not replace these tests.

## Verification

See `VALIDATION.md`, reproducible Node/Playwright scripts, JSON reports and screenshots. Production-path browser tests use `python3 serve.py` on port 5792, then `node browser-test.cjs`, `node studio-test.cjs` and the other documented scripts. Independent binary STL validation checks finite nondegenerate faces, outward normals, per-component positive volumes and closed welded edge incidence. CSG checks cover pocket backing, contact equations, insertion paths, upright/flat arrangement separation, carrier connectivity, real tab cuts and clean part survival. No physical test is implied.
