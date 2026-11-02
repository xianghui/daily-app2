# Cipher & Turn

A local React/Vite maker studio for a **three-part rotating alphabet cipher kit card**. Snip twelve runners, pass the T axle down through the dial, then glue its source-derived shouldered tongue into the fixed board. Turn inner A to an outer key letter; read inner plaintext against outer ciphertext. Shift 3 maps HELLO to KHOOR. Educational only, not secure encryption.

## Run / build

Node 22.12+; `npm install`, `npm run dev`. `npm test` validates exported geometry and assembly. `npm run predeploy` builds production assets with base `/daily-app2/20261102-35/`. Per-app `deploy` is provided as requested; public deployment uses the **parent monorepo flow**, not this per-app command.

## Actual STL reference and adaptation

Reference: **White Cat Kit Card**, Mike Kasberg, Printables 865769, [source](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Download URL, SHA-256, complete measurements, rejected local candidates, source license and read-only section-measurement script are beside this README. The source was downloaded and parsed again for this run, not inferred from a listing image. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

Binary STL: 30,616 triangles, **179.820 × 178.020 × 3.190 mm** assumed units. Source sheet planes 0/1.60 mm; four measured rectangular sockets **4.50 × 1.700 mm**; runner low planes .21–.22 mm. It has 27 edge-adjacent components including degenerate scraps and is not globally watertight. Inspect `evidence/reference-sections.png` (Z=.10/.50/1.59 mm), `reference-measurements.json` and `reference-analysis.json`. Source defects are recorded, not called repaired.

This is an **original parametric reconstruction** of the source's sheet/tongue/socket and connected-carrier design strategy, not a ship replica or raw mesh re-export. Default 1.60 mm sheet and 4.50 mm socket length are preserved. Cipher board, 52 pixel-alphabet engravings, scalloped circular dial, retaining T head, carrier partitioning and all fit tolerances are redesigned. Tongue width=4.50−socket clearance; short socket dimension=sheet+clearance. Source's 1.70 mm short socket is measured evidence, **not** a claim that our larger proposed gap matches its fit. Runners are intentionally strengthened to .40–.60 mm. Raw third-party STL is not bundled or published.

Local keycap/clicker and fabric-link meshes were inspected first and rejected as sheet-kit geometry references; concrete measurements are recorded. The read-only `keycap_generator2` README, styles, App, Viewer, image conversion, STL, export and worker modules informed the 374 px left rail, light lavender studio, tactile buttons, checkerboard cutout, saved dark theme, source/final previews and current-result worker/export gating. Shared studio infrastructure is adapted from prior daily_app2 apps, but product geometry and mechanism checks are new. The old daily_app tree and all reference trees remain unchanged.

## Dimensions / mechanical bounds (all mm)

| Control | Supported range |
|---|---|
| Connected card X/Y | 220–260 independently |
| Dial radius | 30–36 |
| Letter height | 4.2–5.6; actual pixel strokes .60–.80 |
| Sheet | 1.6–2.4 |
| Axial head clearance | .30–.60 |
| Minimum bore-envelope gap | .30–.60 |
| Total socket clearance | .30–.60 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |

Three silhouettes and three actual generated-thumbnail presets; bounded variations, undo/redo, named local saves (six), portable JSON save/open, text and six searchable bundled vector marks. Alphabet recesses are an original 5×7 pixel font, .40 mm deep, Boolean-cut into real solids. Preview colours are not STL colours. Slider/numeric bounds and worker validation gate invalid exports.

**Retention:** 8 mm rectangular spine, circular bore radius `hypot(8,sheet)/2 + gap`, integrated 14 mm head. The gap is a minimum circumscribed-envelope gap, **not uniform radial play**: the sheet spine allows greater Y float than X. UI reports conservative circular-envelope float estimates (actual polygonal bore slightly smaller). Rotate/centre and align engraved radial ticks by eye. No precision bearing, detents or secure-lock claim. Dial rests on base; head clearance is independent of socket fit. Axle tongue is deliberately loose and **requires plastic-compatible adhesive**. Capture depends on a fully cured bonded axle, not a friction keeper. Test dry fit first, keep glue away from rotating faces. No physical print, wear, legibility, friction or adhesive-strength tests have been performed.

## Local image / SVG workflow

Desktop/phone file picker, drag/drop and bundled synthetic examples. PNG and JPEG: actual header/content checks before decode, **2 MB**, ≤12 MP, ≤6000 px per side. Normalize ≤500 px; fit/cover plus X/Y crop, light/transparent or dark/inverted background. Sample luminance on a bounded **20×20 grid**. Threshold produces silhouette heights; grayscale mode uses `(1−luminance/255)×depth`. Triangulate this continuous height field over a closed backing, invert and Boolean-subtract from the fixed base. Image pixels, threshold, depth, scale and placement alter exported geometry. Checkerboard shows the actual sampled cutout. Bright interior holes leave unengraved material; features smaller than the grid may disappear. This is **2D-to-relief**, not reconstruction of a full 3D object from a photo and not exact vector tracing.

Simple SVG paths/shapes with holes are validated, locally rasterized to 256 px, then use the same documented sampled pipeline; ≤2000 elements, no scripts, text, external resources or filters. Text and bundled icons follow the same pipeline. Engraving only: raised mode intentionally unavailable to preserve bed-flat sheet geometry. Depth .40–.60; footprint4–7, rotation±180°, X±1.5/Y±2.0. Every vertex must stay inside a6.5 mm protected corner region `(R+8,−R−8)`. At least1 mm backing remains and no dial/label/socket is affected.

## Imported STL workflow

ASCII **and** binary, ≤2 MB, ≤1500 triangles, each source dimension .2–250 mm. Source preview and dimensions; explicit mm confirmation because STL has **no unit metadata**. Choose Z/Y/−Z up **before** attaching (axis changes request reattachment); scale XY proportionally to footprint, independently normalize Z to engraving depth, rotate around Z, centre and place. The exact transformed mesh is subtracted from the protected base corner—**not** merely displayed or re-exported. Replace/remove/reset supported.

Supported contract: one connected, closed, consistently outward-wound, non-self-intersecting **convex broad-flat-bottom solid**, with its entire footprint supported from the bed. Invalid/open/nonmanifold/inward/concave/hollow/branched/overhanging meshes are rejected with actionable messages; no repair or hull replacement. Convexity checking is validation, not conversion to a hull. Limits bound quadratic intersection checks in the worker. JSON restores bounded original vertex/index payloads and revalidates them; images restore normalized payloads. Missing assets explicitly require reattachment. Never pretend a missing file was loaded.

## Preview, exports and privacy

Manifold WASM genuine union/subtraction in a local worker; 100 ms debounce, generation IDs, current-state key and image-conversion gates. Last-good preview is labelled while invalid; **no stale export**. Worker load failure blocks export and can recover by reload. Exact geometry fingerprint is exposed in UI markup and checked against real downloaded bytes. Orbit/zoom/fit and phone touch; assembled, exploded, connected card, de-tabbed and isolated views. Cipher shift is an analytic preview pose only; exports stay in the real bed-flat printable orientation.

Binary STL for connected card or each of three clean parts; de-tabbed layout STL; Everything ZIP includes all four STL files, current design JSON and numbered assembly/print instructions. All geometry, fonts, imports and export dependencies are bundled locally: React, Vite, Three.js, Manifold3D (Apache2), fflate, Fontsource Fredoka/Rubik (OFL). No remote APIs, CDN, account or API key. No uploaded files leave the browser. Named saves use localStorage; no personal source files are written into this repository. Samples are synthetic and attributed in `public/samples/`.

## Print and assemble

See `ASSEMBLY.txt` (also in UI and ZIP). PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three or more walls, bed-flat at100% scale, no supports intended. Calibrate clean axle/dial/base pieces first; tolerances depend on printer, material and elephant foot. Snip runners 1.8 mm outside edges, file flush. Pass narrow tongue/spine through dial **before** bonding to base, head above. Keep glue only in base socket; dry-rotate first and cure completely. Optional wipe-in paint improves letters. Small parts, adult snipping supervision.

## Reproducible validation

`node validate.mjs`: presets, silhouettes, extrema, each field bound, image threshold/relief/holes and transformed ASCII/binary imports. Independent binary STL parser checks length, finite coordinates, nondegenerate triangles, normals, bounds,1e−5 mm welded opposite-direction two-face edges and positive volume for **each** component. Every part, card and translated de-tabbed STL tested. Actual CSG intersections check full360° rotation at53 positions, lateral float extrema, axial play/head capture, axle insertion path, independent parts, support-free sampled slices, card envelope and safe12-runner cuts yielding carrier+three unharmed parts. None of these is physical print testing.

`node serve.mjs` serves built production assets under the exact base prefix on5735. Browser scripts use Playwright real file pickers/downloads (PNG/JPEG/ASCII/binary), compare preview fingerprints and regenerated JSON, validate STL contents and assembly, exercise malformed imports and stale errors, SVG/text/all icons, ZIP contents, preset and saved-design round trips, worker failure/recovery, orientation, desktop/light/dark/accessibility, and320/390px touch orbit/pinch and reachable exports. Reports and screenshots are adjacent. Parent gallery and staged deployment are independently checked before authorized publication.
