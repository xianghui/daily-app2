# Wedge & Word — miniature press kit studio

An original **ten-part flat-pack kit card**: two uprights, two headers, a guided platen, four opposed wedges and a personalized base. Slide both upper wedges equally to change the platen height. The wedges are removable, **not captive or guaranteed self-locking**. This is an adult desk demonstration, not a pressure-rated bookbinding tool.

## Reference first

Searched `/Volumes/ExternalHD/3d_printing_apps/` STL inventory and read the local kit-card README first. The local kit-card projects contain no suitable reference STL; switch sockets, telescoping bodies and fabric links do not establish sheet-kit construction. Downloaded and independently parsed **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)). Read source README, LICENSE and `kit_frame.scad`. Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

Actual binary STL: 30,616 triangles, 179.820 × 178.020 × 3.190 mm overall; two edge-connected components after 0.00001 mm welding, with coplanar/nonmanifold facet artifacts. It was **not repaired, bundled or re-exported**. `reference-analysis.py` re-parses an explicitly supplied downloaded file; `reference-analysis.json` records full measurements, component volumes, frame section and source links; `reference-sections.svg/png` show real mesh cuts at Z=0.1, 0.5 and 1.59 mm.

**Measured source:** 1.6 mm sheet and perimeter rail; thin bridge vertex levels at 0.21/0.22 mm, corroborated by 0.2 mm join-layer source code. **Our proposed redesign:** 1.6–2.4 mm sheets, reinforced 2.4 mm frame/crossrunners, forty 0.4–0.6 mm thick, 0.8–1.4 mm wide removable bridges. Press silhouettes, guided slots, header tongues and wedge slopes are new geometry, not source measurements. No cat anatomy is reproduced. Each part connects to the carrier through four genuine boolean-unioned bridges. Ten clean individual parts are available separately.

Visual/interaction reference: read-only `keycap_generator2` README, App, styles, Viewer, worker, STL, image and export modules. Concrete patterns carried forward: 374 px left maker rail, sticky identity/theme header, collapsible labelled sections, paired mm range/numeric inputs, tactile depressed selection controls, pink/lavender light palette and saved dark theme, source-versus-cutout preview, explicit STL-unit gate, worker status, isolated/assembled/exploded/card views, separate-part and ZIP exports. Reused the established daily-app local studio/import infrastructure, **not** the source project's history, dependency tree or switch templates. The press and validation are original for this app.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
```

Vite base is `/daily-app2/20261028-22/`; production test server uses port 5492. Dependencies are installed/bundled locally: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate and Fontsource Fredoka/Rubik. No CDN, API, paid service or key. Geometry generation and STL parsing run in a worker; geometry is debounced 100 ms and stale results are ignored. Per-edit checks enforce finite nondegenerate, outward closed geometry and exactly one connected solid per exported part/card. Export blocks pending, failed or invalid edits; any last-good preview is labelled as such.

## Dimensions and fit

All physical dimensions are **millimeters**. Card 180–220 × 230–260; clear press span 44–56; base depth 36–44; header underside height above base 34–40; sheet 1.6–2.4; wedge rise 6–10; carrier spacing bias 4–7; tab width 0.8–1.4, height 0.4–0.6; base dimples 0–0.4 deep. Three real presets and three corner/crown silhouettes. Invalid or non-fitting combinations are rejected.

Header and foot slots grow 0.15–0.45 mm **total**, not per side. Wedge faces have a proposed 0.2–0.4 mm mating separation in the unloaded pose. Four identical wedge profiles print on their large flat sides. Upper wedges are inverted in assembly. With wedge length `L = span - 12`, slope `s = rise/L`, upper shift `x = -4…+4 mm`, unloaded platen-top height is `sheet + headerHeight - 4 - rise + s*x - allowance`. Travel is `8*s`; paired wedges must move equally. The visible slider only repositions the same generated meshes and does not simulate load, gravity, compression, friction or self-locking. A real paper block must fill the opening before gently seating by hand.

Long upright guide slots constrain the platen tongues. Wedges remain loose; withdraw them to release. The fixed stack can be assembled by sliding loose uprights onto both header and platen tongues, then seating all four base feet simultaneously. See included numbered print instructions in the app and ZIP.

## Image workflow

PNG, JPEG and simple SVG accepted by picker/drop on desktop and phones. Content/size checked before decode: 16 bytes–2 MB, raster ≤12 MP and ≤6,000 px per side. Normalize locally to ≤500 px and sample a **20 × 20 grid** with fit/crop and ±25% pan. Transparent/light backgrounds composite on white; dark mode composites on black then inverts luminance. Threshold 1–254 maps foreground to a chosen height, or grayscale maps luminance continuously. Height-map triangles interpolate adjacent samples; this is a coarse **2D-to-relief conversion**, not exact vector tracing or reconstruction of a full object from one photo. Bright holes remain unraised/unengraved above a continuous base, rather than becoming through-holes. Checkerboard shows the exact sampled cutout. SVG permits only simple filled paths/shapes and rejects active/external resources/effects; it is locally rasterized before the same conversion.

Relief depth 0.4–3 mm raised, 0.4–0.6 engraved, footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 and Y ±2 mm. Mesh union/subtraction puts the result in the 13 mm medallion on the base, away from feet and well below platen travel. Safe-zone and floor checks block impossible placement. Text (8 characters) and six searchable bundled original icons go through the identical actual geometry conversion. Preview colours do not imply colour in STL.

## STL workflow

ASCII and binary STL accepted, 40 bytes–2 MB, ≤1,500 triangles, each axis 0.2–250 mm. Explicitly confirm **millimeter coordinates**: STL has no unit metadata. Choose Z-up, Y-up or inverted Z before attaching; changing orientation clears the import and requests reattachment. Show oriented source dimensions, volume and format plus an interactive source preview. XY scales proportionally to a 4–7 mm footprint, Z independently to 0.6–3 mm; scale factors are shown. Rotation, offsets, reset/center, replacement and removal alter real final geometry.

Strict supported contract: one closed, consistently outward-wound, positive-volume, **convex, broad flat-bottomed solid without overhangs**. Reject open/nonmanifold/self-intersecting/concave/branched/hollow/disconnected/excessive inputs with actionable errors. No arbitrary repair or convex-hull replacement. The actual accepted vertices enter Manifold and are solid-unioned into the base with 0.15 mm overlap. Source footprints under 1.2 mm in XY after scaling are rejected; this bounded contract is not an arbitrary-shape wall-thickness solver.

## Export, privacy and storage

Preview and binary STL use the same current checked mesh. Show actual final X/Y/Z. Connected-card export always stays bed-flat regardless of preview pose; each of the ten clean individual parts has its own STL button. Everything ZIP contains eleven checked STLs (card plus ten parts) and numbered assembly/print instructions; it is **not 3MF**. No STL colour metadata.

User files stay in browser memory/localStorage; never uploaded or copied into the repository. Only synthetic samples are bundled: mark PNG, waves JPEG, ring SVG, wedge ASCII STL and gem binary STL; see sample attribution. Undo/redo, six locally named designs and JSON include bounded portable image/mesh payloads. Revalidate loaded meshes; missing payloads explicitly request reattachment. JSON ≤2 MB, image payload ≤1.8M characters/250k pixels. Browser storage is device/origin specific.

## Validation and printing

`validate.mjs` independently parses final float32 STL, checks length, finite coordinates, nonzero faces, unit normals/winding, exact edge incidence in opposite directions at 0.00001 mm weld tolerance, positive volume per connected component, mm bounds and bed-flat Z. It checks **each part and connected card** at defaults, presets, extremes and imported image/STL cases. Manifold intersections test all component pairs throughout ±4 mm wedge travel, upright/header/platen assembly paths and base seating. Slope algebra verifies mating allowance. Forty simulated tab cuts yield ten parts plus one carrier. Loose flat parts do not overlap; all are contained in the connected card.

Production-browser tests use actual PNG/JPEG/ASCII/binary file-picker imports and actual STL/ZIP downloads, compare final signatures against preview and portable regeneration, test changed pixels/threshold/depth/transforms, bad inputs/recovery, source replacement/removal/reset, personalization, history/design round trips, themes/views and worker failure/stale guards. Mobile checks cover narrow viewports, preview-first stacking, no horizontal overflow, reachable exports, real CDP touch orbit and pinch.

Print PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls, all pieces flat, decoration up; no supports intended. Trim nubs/elephant foot and calibrate small header/upright and foot/base samples before a full card. Glue only fixed joints if needed. Never force wedges. Small parts, adult use. **No physical printing, slicer verification, friction, force, strength, fatigue or pressure test has been performed.** Computational fit is not physical performance proof. See `VALIDATION.md` for actual results.
