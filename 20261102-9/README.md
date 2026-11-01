# Euler & Route

A React + Vite, local-only **physical Seven Bridges of Königsberg kit-card generator**. Twelve printable pieces: river base, four land tiles and seven removable bridge strips, all connected to one carrier by 48 accessible breakaway tabs. This is a topology assembly, not a browser game. Its four land degrees are 3, 3, 5, 3: the impossibility of a walk using each bridge exactly once is intentional.

**Compatible adhesive is required for the four fixed land tiles. Bridges stay loose in shallow open seats; no snap fit, captive joint or load-bearing bridge is claimed. No physical print, assembly, fit, friction, strength or fatigue test was performed.**

## Reference-first evidence

Local trees were inspected read-only first: `keycap_generator2/README.md` and its actual `public/templates/clicker_template2.stl`, plus `fidget_fabric_generator/README.md` and actual diamond-link mesh. Fresh parsing of both is recorded in `reference-measurements.json`; their switch cavities / 8 mm interlocking link were unsuitable sheet-kit references.

Selected public STL: **White Cat Kit Card / Printables 865769**, Mike Kasberg, https://github.com/mkasberg/white-cat-kit-card , CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Source README and full license downloaded and read; `REFERENCE-LICENSE.txt` preserves the terms. Fresh binary-STL parsing:

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`
- 30,616 triangles; 179.820 × 178.020 × 3.190 mm assumed envelope; STL itself has no units.
- 27 edge-adjacent components, including source defects; not globally watertight. No automatic source repair or raw mesh redistribution.
- Actual Z=0.10, 0.50 and 1.59 mm sections were plotted and visually inspected: `evidence/reference-sections.png`.
- Measured main sheet 0–1.60 mm, four 4.50 × 1.700012 mm sockets, low carrier webs at 0.21–0.22 mm.

This **original parametric reconstruction** retains the measured 1.60 mm default sheet, 4.50 mm interface-width scale and actual low-web connected-carrier principle. It changes vertical tongue/socket assembly into paired shallow **top-open horizontal bridge seats**, changes spacecraft parts into four lands/seven graph edges, and increases runner height to proposed 0.4–0.6 mm. Source 1.700012 mm socket width is documented, NOT falsely claimed as the new bridge clearance. New printer-dependent total fit 0.10–0.30 mm and seat depth 0.25–0.45 mm are proposed, not measured source tolerances. Detailed mapping: `reference-analysis.json`.

Primary visual/interaction reference, read-only: `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, export, imageTrace and geometry/stl modules. Concrete patterns adopted: 374 px scrolling LEFT editor, compact sticky brand/theme header, tactile raised/pressed controls, paired range/numeric mm fields, collapsible sections, checkerboard cutout, imported-mesh source editor, saved light/dark theme and current-result worker export gating. Phone is preview/dimensions/export first, controls below. Rounded Fredoka/Rubik fonts are locally bundled. Existing Daily Object Lab editor/import/serializer/test infrastructure was adapted; the river model, assembly, contact tests and topology are new, not the prior semaphore mechanism. Reference trees and the old daily_app gallery remain unchanged.

## Run / build / verify

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Production base `/daily-app2/20261102-9/`. `predeploy` is exactly `npm run build`; per-app `deploy` is `gh-pages -d dist`. Public whole-collection publication uses the root monorepo deploy flow. Dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled @fontsource Fredoka/Rubik; Playwright is test-only. No CDN/API key/server or external generation service.

## Parameters (mm unless stated)

| Control | Supported range |
|---|---|
| Card width / height | 300–340 / 210–250 |
| Island / bank water span | 8–14 / 6–10 |
| Sheet thickness | 1.6–2.4 |
| Total bridge seat allowance | 0.10–0.30 |
| Bridge seat depth | 0.25–0.45 |
| Part spacing | 3–5 |
| Runner width / height | 0.8–1.4 / 0.4–0.6 |
| Art footprint / depth | 4–7 / 0.4–0.6 |
| Art rotation / X / Y | ±180° / ±1.5 / ±2 |

Three real presets with model thumbnails, three base silhouettes, bounded variation, reset, undo/redo, six named local designs and portable JSON save/open. Bounded assets are embedded; missing image payload explicitly requires reattachment. Unsupported/invalid/pending/error states block STL and ZIP, even if a last-valid preview remains visible. A worker runs heavy CSG, final-manifold checking and parsing; 100 ms debounce and generation-ID/state-key checks suppress stale results. Model/export share exact final meshes and visible binary-STL fingerprint.

A 300–340 mm carrier requires a large-format bed plus edge/brim margin. **On a typical smaller bed download individual parts instead.** All pieces print flat and bed-supported. Final X/Y/Z is explicit for the selected export.

## Image and mesh imports / privacy

Native desktop/phone picker and drag/drop; replace/remove/reset; bundled original synthetic PNG, JPEG, SVG, ASCII STL and binary STL samples. Files stay local in the browser; no personal file is committed or uploaded.

PNG/JPEG: actual-content and header checks, ≤2 MB, ≤12 MP and ≤6,000 px/side, normalized to ≤500 px. Locally rendered at 20×20 samples after fit/crop, X/Y pan and background polarity. Threshold 1–254 creates sampled silhouette relief; grayscale creates height-field relief. A closed triangulated height-field solid is **Boolean-subtracted** from the base central water patch, not painted on the preview. Footprint/rotation/placement and 0.4–0.6 mm depth affect the actual STL. White/transparent background leaves base material; holes are sampled, not exact vector-traced. Checkerboard shows the processed cutout. Minimum backing 1 mm. Simple SVG ≤2,000 supported elements is sanitized, rasterized at 256 px and converted the same way; scripts/external resources/effects rejected. Text up to eight characters and searchable bundled icons use this same geometry workflow. This is 2D-to-relief conversion, NOT recovery of a full 3D object from one photograph. Raised art deliberately unsupported because this kit requires an unobstructed support plane.

STL: binary and ASCII, ≤2 MB / 1,500 triangles, one closed connected outward-wound solid, source dimensions each 0.2–250 mm. Source dimensions/triangles and source preview shown; **explicit mm confirmation** mandatory because STL has no units. Select Z/Y/−Z up before import; changing axis requests reattachment. XY footprint scales proportionally; Z independently fits 0.4–0.6 mm engraving depth, with scale factors shown. Rotation, centering, placement and reset apply to actual solid. The verified original mesh is Boolean-subtracted into the base. Concavities, cavities, disconnected/open/nonmanifold/self-intersecting meshes, overhangs, slender outlines and insufficient flat bed contact are explicitly unsupported. No silent convex-hull replacement, arbitrary repair or unchanged re-export. Keep-in zone radius 6.5 mm guards placement and base backing.

## Physical assembly / checks

1. Print flat in PLA/PETG, .16–.20 mm layers, .4 mm nozzle, three perimeters; no supports intended. Calibrate one bank and bridge first.
2. Snip 48 runners at accessible cuts 1.6 mm away from part contours; remove burrs/elephant's foot. Clean-part STLs omit runners.
3. Place four land tiles on the base at the **numerical coordinates and diagram in the app**. Dry-fit bridge locations, then bond lands only with compatible adhesive. Broad planar glue seats require manual alignment; no locating pins claimed.
4. Lower seven bridges vertically into their pairs of top-open seats. Bridge width `4.50−allowance`, recess 4.50; each end contact `2−allowance/2` mm. Seat floor ≥1.15 mm; proposed fit depends on printer/material. Loose bridges are gravity-held, not retained. Avoid loads and do not glue them.
5. Attempt the route; lift selected bridges to explore graph parity. Four odd vertices forbid the original seven-edge Euler walk.

Views: connected card, assembled, exploded (illustrative separation), clean print plate and each isolated part. Exports: binary STL for real connected card, clean layout or any part; Everything ZIP with card + twelve clean part STLs and numbered assembly guide/current fits. STL stores no preview colour; no 3MF is claimed.

`validate.mjs` independently parses final float32 STL, welds at 1e-5 mm, checks finite/nondegenerate triangles, stored normal/winding agreement, exactly two opposite-directed incidents per edge, positive volume for EACH component, bounds and expected component counts. CSG checks all assembled pairs, assembly-order insertion, fourteen bridge landing probes and graph edges, seat-floor stops, land support, print-plate nonintersection, 48 snips avoiding parts, thirteen resulting carrier/piece components, support footprint and card envelope. Defaults, three presets, shapes, each/combined extrema, image and STL derivatives are included. Browser tests exercise actual production file pickers/downloads, byte fingerprints against current preview and portable JSON regeneration, PNG/JPEG and ASCII/binary STL, transformed imports, invalid recovery, 320/390 px phone layout, real touch orbit/pinch and zero external requests. Studio tests cover text/icons/SVG, saved assets, undo/redo, ZIP contents, views, dark theme, focus, collapsible controls and failed-worker recovery. Reports and screenshots accompany this app. Final results: 42 geometry/assembly cases passed; production-browser PNG/JPEG/ASCII-STL/binary-STL import and export tests passed; gallery 369 entries (all 368 prior entries preserved). `production-check.mjs` additionally tested the combined deploy folder and probed the actual ring engraving: bright center retains base material, dark ring removes it.

**Computational geometry and assembly-clearance checks do not constitute a physical print or successful real-world assembly test. Adhesion, feel, fit and durability remain untested.**
