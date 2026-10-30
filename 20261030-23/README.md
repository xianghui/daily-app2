# Breeze & Bearing

A local React + Vite parametric **five-part weather-vane kit card**: compass deck, shouldered mast, circular-journal arrow, upright aft tail and adhesive-retained keeper. Snip twenty runners, assemble the physical parts, then turn gently by hand. Tail area is behind the pivot; actual wind response is **not tested or guaranteed**. This is an indoor educational assembly, not a calibrated weather instrument or outdoor product.

## Run and export

Node22.12+; `npm install`, `npm run dev`. `npm run predeploy` builds the fully local production bundle at `/daily-app2/20261030-23/`. Three.js preview and Manifold WASM worker use the same current meshes as the binary STL downloads. Fonts, dependencies and sample fixtures are bundled, with no CDN, external generation API, backend or API key. fflate produces Everything ZIP containing the actual connected card, five individual STLs and numbered `ASSEMBLY.txt`. Individual exports are bed-flat, not assembled/interpenetrating shells. STL does not preserve preview colors. Root monorepo deploy publishes the combined site; individual `deploy` script exists but is not used for combined publication.

## Reference-first provenance

Read-only local STL candidates were found under `/Volumes/ExternalHD/3d_printing_apps/` before geometry selection. Keycap Studio's README and actual three-component switch-template mesh and Fabric Fidget Studio's README and actual link mesh were inspected/parsed. Neither supplies a bed-flat sheet/socket carrier. Candidate dimensions, SHA-256, connected components and rejection reasons are recorded in `reference-measurements.json`.

Downloaded and parsed **White Cat Kit Card**, Mike Kasberg: [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Source README and license retained. Attribution does not imply endorsement. Raw source STL is **not redistributed**.

Actual binary mesh:30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`;179.819997 ×178.019994 ×3.190000 mm;27 edge-adjacent components; not watertight. This is a design reference, not a repaired/re-exported source. Units assumed millimeters, corroborated by source sheet dimensions; STL has no unit metadata. See `reference-inspect.py`, fresh `reference-measurements.json`, `reference-analysis.json` and actual mesh sections in `evidence/reference-sections.png`.

**Measured versus redesigned:**

- Sections at Z=.1,.5,1.59 establish source1.6 mm sheet,4.5 ×1.700012 mm socket loops, and low carrier levels.21/.22 mm.
- Default sheet1.6 preserves the measurement. Set blade/tongue4.4 and TOTAL allowance.10 to reconstruct4.5 ×1.7 sockets. Default.15 and supported.10–.35 allowances are proposed printer/material-dependent fits, not source-derived universal tolerances.
- Deck2–2.8, sheet1.8–2 and twenty.4–.6 mm runners are strengthened redesigns. Original geometry reconstructs carrier and sheet/socket interfaces using solid Boolean operations.
- All weather-vane structure is new: vertical mast with rectangular blade and broad shoulder, horizontal arrow, round bore clearing the blade's diagonal, aft vertical fin with two tongues, adhesive-positioned square keeper. No cat geometry, switch cavities, old weaving mechanism or hull substitution.
- Arrow bore `sqrt(blade²+sheet²)+2×radialAllowance`, cap and shoulder overlaps, axial end play and fit parameters map to actual generated geometry. This is intentionally a loose round-over-flat journal, not a precision cylinder bearing. Printed friction can prevent wind response.

Primary visual/interaction reference (read-only): `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/worker.ts`, `src/export.ts`, `src/imageTrace.ts`, `src/geometry/stl.ts`. Concrete patterns:374px scrollable left controls, sticky brand/theme, paired numeric sliders, collapsible labelled sections, raised keycap controls, coral selections, lavender desk/white panels, saved dark theme, checkerboard/source import comparison, request-id/current-result gating, local rounded fonts and preview-first phone layout. Local reusable studio/parser/export scaffolding was adapted from prior apps; vane geometry, packing, transforms and assembly checks are new.

## Parameters — millimeters unless noted

| Parameter | Range |
|---|---|
| Card width / height |240–260 each; large bed |
| Arrow length |72–84 |
| Mast shoulder height above deck |40–48 |
| Tail height / longitudinal extent |18–28 /24 |
| Deck / sheet thickness |2–2.8 /1.6–2 |
| Mast spindle blade and all tongue widths |4.4–6 |
| TOTAL rectangular socket allowance |.10–.35 |
| Journal radial allowance |.25–.60 |
| Keeper axial end play |.3–.8 |
| Part spacing |3.5–5 |
| Breakaway width / height |.8–1.4 /.4–.6 |
| Art footprint / engraving depth |4–7 /.4–.6 |
| Art X / Y offset / rotation |±1.5 /±2 /±180°; additional radial safe-zone check |

Three real presets and deck silhouettes (rounded, chamfered hexagonal, capsule), generated thumbnails, bounded variations, undo/redo, six local named designs and portable JSON. Actual imported image/mesh payloads are bounded and included in JSON; missing/corrupt payloads require reattachment and disable export. No fake restoration from file paths. Last-good preview may remain visible after invalid edits but all exports are disabled until exact current state is valid. Worker load errors disable exports and request reload.

## Image / SVG to geometry

Desktop/phone native file-picker, desktop single-file drag/drop and synthetic downloadable examples. PNG/JPEG16bytes–2MB, max12MP and6000px per side, validated before decoding; normalized to≤500px. Restricted simple SVG≤2000 elements, locally rasterized to256px; external resources/scripts/references, text and effects rejected. Samples are original synthetic fixtures, no personal uploads included.

This is **sampled 2D-to-relief/silhouette engraving**, NOT automatic full3D reconstruction, NOT an exact vector-outline trace. Fit/contain or fill/crop, crop shifts±25%, light/transparent-background removal or dark inversion, threshold1–254 or grayscale relief, footprint, rotation, placement and depth. A20×20 luminance grid becomes a closed triangulated height-field cutter, then a true Manifold Boolean difference in the protected front-deck badge. White holes remain unengraved on continuous backing; solid probes verify this. Threshold and source pixels change the exported STL. Text (up to8 characters, best1–3 bold letters) and six searchable icons go through the same real conversion. Preview shows original image and actual sampled checkerboard cutout. Raised art intentionally unsupported to keep bed-flat support-free structure.

## STL to geometry

Actual binary AND ASCII STL≤2MB/1500 triangles; dimensions.2–250 mm per oriented axis. Explicit source mm confirmation required. Set Z/Y/negative-Z up before attaching; changing axis clears source and requests reattachment. Source dimensions/format/triangles and original3D source preview shown. XY scales proportionally to selected physical footprint; Z independently normalizes to engraving depth. Center/reset, replace/remove, rotate and XY-place controls change the **exact accepted source vertices/faces** used as a deck engraving cutter.

Validation before heavy modeling: complete file/byte layout, finite coordinates, nondegenerate faces, single outward positive-volume closed component, welded two-opposite-face edge incidence, triangle self-intersections, convexity and broad flat-bottom footprint. Concave, hollow, branched, overhung, disconnected, open or nonmanifold models are unsupported and rejected with guidance; no hull replacement or automatic repair. A bottom-footprint hull is used only as an input-validation predicate, never as replacement exported geometry. Exact Boolean cut stays inside6.5 mm badge radius, away from sockets and moving parts, with≥1.4 mm backing. No through-cuts, overlaps disguised as unions or fused moving bodies.

All file processing occurs locally in browser. No user files uploaded or written into repository. Keep originals independently; portable JSON/local designs contain only normalized bounded payloads.

## Print, calibration and assembly

Print100% mm, broad faces atZ=0, PLA/PETG, .16–.20mm layers and three walls as untested starting settings. Inspect slicer for thin runner layers. Connected card requires240–260mm bed; separate parts fit smaller beds. No supports intended. No bearings, magnets, metal fasteners or purchased motion hardware. **Adhesive and a removable spacer are required.** Do not claim hardware-free retention means glue-free.

1. Snip twenty accessible carrier runners1.6mm beyond part edge; trim nubs, preserve functional tongues/bore/slots.
2. Calibrate deck/mast and arrow/tail joints first; change total allowance by.05mm. Calibrate radial and axial play for your printer, not by global slicer scaling.
3. Bond mast's lower tongue into deck socket with shoulders on deck; cure square.
4. Lower horizontal arrow over upper blade to its broad shoulder. The circular bore clears the rectangular blade diagonal for a full turn. Gravity seats it; bearing friction is not simulated.
5. Seat/bond two tail tongues in aft arrow slots, shoulders on arrow. Tail remains wholly behind pivot. Keep adhesive away from journal.
6. After arrow installation, bond keeper to top blade with top faces flush. Insert a removable spacer equal to selected end play while curing, then remove. Keeper has **no independent axial stop, snap or interference retention**: cured adhesive is essential to hold the specified position. It retains the rotor only after correct bonding. No glue on moving parts.
7. Gently hand-turn through360°. Deburr/reprint if binding. Align long north witness with an external compass; model contains no magnet and cannot find north. The45° ticks are visual guides only. Do not spin fast, blow hard or treat as an outdoor/weather-certified device. Wind response, tipping stability under airflow and strength are untested.

Assembled, exploded, connected-card, de-tabbed print plate and isolated views share the same part meshes. Azimuth is preview-only, not an airflow simulation. Arrow is rotated90° only for card packing; individual arrow STL stays bed-flat with its own print orientation. Exact print exports never include assembled collisions or preview-only transforms.

## Reproducible computational validation

`npm test` / `validate.mjs`:36 built-in cases (all presets, silhouettes, simultaneous extrema, each parameter bound) and8 image/STL cases; independent binary STL byte size, finite vertices/normals, nondegenerate faces, outward consistent winding,1e-5mm welded two-face incidence, positive volume **per component**, declared bounds and single connected card/individual parts. Every worker result also checks final closure/winding.

`node import-extremes.mjs`:99 more image/STL preset/extreme cases with the same full checks; exact measured4.5×1.7 fit reconstruction. `collisionCheck`:25 azimuths over360°,250 pairwise assembled checks, lower shoulder and upper bonded-cap withdrawal prevention, axial travel, open straight assembly paths,3 socket gauges,2 shoulder stops, disjoint packed pieces,20 nondamaging snips yielding5 parts+carrier,48 sampled bed-footprint checks. These checks assume correctly bonded fixed joints, not adhesive strength.

`node browser-test.cjs`, `node studio-test.cjs`, `node axis-test.cjs`, `node stale-test.cjs`, `node hole-check.mjs` run against actual production base path. Real file-picker PNG/JPEG/ASCII/binary STL, actual STL downloads and parsed ZIP contents; image/threshold/depth and mesh/scale/rotation/placement signatures differ from default, and preview signatures match downloaded bytes + regenerated portable JSON. Invalid/truncated/open/nonmanifold/excessive/concave files, empty art, out-of-range transforms and bad dimensions disable export recoverably. Presets, text/icon/SVG holes, undo/redo, named saves/reload, portable payloads, missing-file guidance, all views, worker failure/reload, saved theme, keyboard focus, collapse,374px left rail,320/390px preview-first phone layout, touch orbit/pinch and reachable mobile imports/exports are exercised. Reports and screenshots saved beside app.

**No physical print, fit-force, adhesive strength, fatigue, aerodynamic, wind-alignment or long-term durability testing has been performed.** Computational geometry checks are not physical product certification.

Dependencies: React/ReactDOM, Vite/plugin-react, Three.js, Manifold3D (Apache2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL); gh-pages for deployment, Playwright for browser checks. See package licenses. Source attribution and modifications are documented above and in reference-analysis.
