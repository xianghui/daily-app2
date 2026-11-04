# Dirac & Ribbon

A local React + Vite maker studio for a **three-part, bed-flat Dirac belt-trick kit card**: a free-held paddle, a two-tongue anchor portal and a socketed dock. Twelve accessible low runners genuinely connect the parts to their carrier. Alternate exports provide clean parts without tabs. This is a spatial ribbon-handling demonstration, not an automatic untwisting mechanism or a browser game.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Published base: `/daily-app2/20261104-24/`. Per-app deploy scripts are supplied, but the combined site is published using the parent repository's root `deploy/` flow.

## Reference-first evidence and attribution

The local `keycap_generator2` README, styles, App, Viewer, image tracing, STL parser, export and worker/engine modules were inspected read-only. Concrete studio patterns used here: 374 px left control panel, sticky compact brand/theme header, raised key-like selected controls, labelled collapsible sections, paired slider/mm inputs, right-side Three.js viewer, assembled/exploded/print/isolated views, persistent theme, source preview, local image conversion and worker-based solid building. Phone layout places viewer and exports first; controls stack below. Fredoka/Rubik font files are bundled locally.

Local candidate STLs were **actually parsed** before selecting the sheet-kit reference:

- `keycap_generator2/public/templates/clicker_template2.stl`: SHA-256 `292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9`; 944 triangles, three edge-connected components, overall 15.20 × 15.20 × 43.10 mm. MX switch parts are irrelevant to this kit and were rejected; no switch socket is imposed here.
- `fidget_fabric_generator/public/templates/diamond-link.stl`: SHA-256 `8146cd758a8c0218560a3fe7cdd7b6ad23304fe9e4472ff0259e18266f4ed9fd`; 5,940 triangles, one component, 7.981 × 9.241 × 8.00 mm. Its interlocking nonplanar fabric interface is inappropriate for a sheet card and was rejected.

Selected public geometry: **White Cat Kit Card**, Mike Kasberg, [upstream project](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. A fresh public STL download was inspected, not just the listing image. Download URL, source hash, license verification/hash, component bounds and cross-sections are recorded in `reference-analysis.json`; `reference-analysis.py` reproduces the inspection (Python trimesh/numpy/matplotlib/scipy/networkx/shapely). `REFERENCE-LICENSE.txt` contains the verified license. No raw third-party STL is bundled.

Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820 × 178.020 × 3.190 mm overall, millimeters **assumed** because STL has no units. Trimesh's edge-adjacent split reports 27 components including zero-volume, duplicate/degenerate pseudo-components. The full source is not closed-manifold. It is not repaired, copied into the app, or represented as printable output. The visual cross-sections in `evidence/reference-sections.png` show actual inspected geometry at Z=.10, .215 and 1.59 mm.

### Measured source → deliberate reconstruction

| Measured source | Mapping to this generator |
|---|---|
| 1.60 mm sheet regions | Default 1.60 mm paddle/portal/dock; adjustable 1.6–2.4 mm |
| Four 4.50 × 1.70 mm rectangular sockets across inspected sections | Default new 4.40 × 1.60 mm portal tongues and 4.50 × 1.70 mm dock sockets |
| Thin runners ending near .21–.22 mm | Original carrier with twelve stronger .4–.6 mm runners, a proposed FDM adaptation |
| Sheet parts assembled through narrow rectangular interfaces | Two new shouldered tongues lowered into blind sockets; .40 mm floors and .20 mm tip relief are **proposed**, not measured source dimensions |

The **.10 mm default total socket clearance** is a design choice, not a measured source tolerance. It increases to .30 mm for calibration. Paddle silhouettes, double-slot ribbon routing, portal/dock geometry, art keep-out zone, three-part layout and the Dirac handling interaction are original; no spacecraft geometry is reused. Ribbon slot length is selected ribbon width + .60 mm, slot height 1.60 mm; paired slot centres are 4 mm apart, leaving a 2.40 mm bridge. Portal slot end webs are ≥9.70 mm. Geometry tests also check narrower paddle-side webs, four open routing slots and both source-derived sockets in **connected-card and clean-part meshes**.

## Parameters and interaction

All model dimensions are **millimeters**. Card 180–240 × 220–300; paddle width 34–46 and height 1.4× width; ribbon width 10–18; anchor height 34–54; sheet 1.6–2.4; total socket clearance .10–.30; spacing 3–5; runner width .8–1.2; runner thickness .4–.6. Three real model-thumbnail presets and oval, clipped and scalloped paddle shapes change exported geometry. Inputs outside supported ranges block exports instead of being silently clamped.

The dock fixes the anchor; the paddle remains free in the hand. A slack ribbon can demonstrate the 720° belt trick: two full twists can be removed by a spatial loop of the free paddle while restoring its end orientation. This requires practice. The translucent preview ribbon is **estimated explanatory positioning only**, not a physics simulation or an exported part. Exploded positioning is also explanatory. There are no fake motion controls or claims of computed ribbon dynamics.

## Image, SVG, text and icon workflow

PNG/JPEG content and headers are checked before decoding: ≤2 MB, ≤12 million pixels, ≤6,000 pixels per side. Images normalize locally to ≤500 px, then sample onto a bounded **20 × 20 height grid**. Choose contain/cover crop, X/Y crop shift ±25%, light-background removal or dark-background inversion. Threshold 1–254 gives a sampled silhouette relief; grayscale mode gives height proportional to `1 − luminance/255`. Transparent pixels composite against the selected background. Preview shows source and exact converted cutout on a checkerboard. This is **2D-to-relief, not reconstruction of a full 3D object from one photo**.

The closed height-field cutter is subtracted with Manifold from the paddle; no texture-only decoration or interpenetrating-shell export. Engraving .4–.6 mm leaves at least 1 mm backing. Bright holes preserve unengraved material (sampling/linear interpolation, not exact vector tracing). Simple SVG filled geometry is validated and rasterized locally to 256 px; external resources, scripts, text, references and unsupported effects are rejected. SVG holes survive this sampling when larger than grid resolution. Text (up to eight characters) and six searchable bundled synthetic icons go through the same image pipeline. Raised artwork is deliberately unsupported in this protected engraving workflow.

Artwork footprint 4–7 mm; placement X ±1.5 and Y ±2 mm; Z rotation ±180°. A radial keep-in check at 5.8 mm prevents cutting ribbon routing or the grip edge. Empty silhouettes, invalid transforms and artwork leaving the protected zone disable export; replace/remove/reset are available.

## Imported STL workflow

Actual ASCII and binary STL supported, ≤2 MB and ≤1,500 triangles; each oriented axis must measure .2–250 mm. **Explicit millimeter confirmation is required**. Choose Z-up, Y-up or upside-down before attaching; changing orientation clears the asset and requests reattachment. The source viewer displays actual original triangles and dimensions. XY scale is proportional to footprint (4–7 mm); Z independently fits the proposed engraving depth (.4–.6 mm), and both scale factors are disclosed. Rotate, center, place and reset the exact accepted solid. It is Boolean-subtracted from the protected paddle, materially changing the final STL.

The supported integration contract is deliberately narrow: **one connected, outward-wound, closed convex solid, broad flat base and no unsupported overhang**. Content, finite coordinates, counts, edge incidence, neighbor winding, positive volume, triangle intersections, dimensions, convexity and bed footprint are checked. Concave/cavity, open, nonmanifold, self-touching, disconnected and unsuitable overhang inputs are rejected with guidance, **never replaced by a convex hull or silently repaired**. Convex hull calculations in the parser only validate the bottom footprint; they do not replace source geometry. Return to defaults or attach a suitable file to recover.

File-picker works on phones/desktops; drag/drop is provided. `public/samples/` contains only synthetic PNG, JPEG, SVG, binary and ASCII STL fixtures, with attribution. No user files are sent to a server or saved in this repository. Portable JSON and up to six local named designs include bounded image/mesh payloads; malformed or missing payloads are rejected and request reattachment. Undo/redo preserves actual design state.

## Export, print and assembly

Preview and binary STL serializer share exactly the current worker-produced solids. Exports are gated by state key, request id, valid current import conversion and worker status. Invalid edits may show a labelled last-good preview, but **cannot export it as the current design**. UI exposes a printable-mesh fingerprint for automated preview/download checks. STL is geometry-only; preview colours are not encoded.

Download the connected card, clean print plate or any individual part. Everything ZIP includes the card and all three clean STLs, portable JSON and numbered assembly instructions/current fits. Choose **card OR clean parts**, not both. All print at Z=0; .4 mm nozzle and .16–.20 mm layers, PLA/PETG, supports not intended. Calibrate the dock/anchor before a full card; printer, material, first-layer compensation and slicer affect fit.

1. Snip twelve accessible low runners. Preserve functional tongues and slot bridges.
2. Lower the two anchor tongues into the dock, with shoulders resting on the top face. Glue both sockets. Clamp or tape the light dock to the bench.
3. Supply a soft **250–400 mm ribbon, chosen 10–18 mm width, ≤.5 mm thick**, tape and glue. No metal hardware needed.
4. At each end weave through both routing slots; fold at least 15 mm back and tape securely. Slots alone are **not** a calibrated friction clamp.
5. Hold the paddle freely and practise the untwisting handling sequence in the app/ZIP guide using slack, never force. Small craft demonstration, not a restraint, lifting attachment or structural anchor.

## Validation and limits of evidence

`npm test` independently reads float32 binary STL, verifies length, finite vertices, nondegenerate triangles, unit normals, opposite paired edge incidence with 1e-5 mm welding, positive volume **per component**, expected components and mm dimensions. Every separate part, connected card and translated loose plate is checked across defaults, presets, all parameter bounds/corners, image-derived and STL-derived examples. Manifold intersections independently check bed footprint support, pairwise assembled/plate separation, eight vertical insertion positions, socket floors/clearance, ribbon apertures/bridges, minimum backing and safe runner cuts yielding exactly carrier + three intact parts. Model simplification uses a .001 mm tolerance before serialization, far below printable feature sizes.

Browser scripts exercise actual file inputs/downloads, image content/threshold/depth/transform geometry differences, ASCII/binary source transforms, errors and recovery, all presets/icons, SVG hole/backing probes, saved JSON/designs, undo/redo, ZIP contents, stale-result gating, worker failure/recovery, theme/focus/collapsible controls and 320/390 px touch/mobile layouts. Tests run against the **production bundle at the real base path**, not only Vite dev. Reports/screenshots accompany the app.

**No physical print, socket fit, adhesive strength, ribbon retention or belt-trick handling was tested.** Mesh validity and assembly collision checks do not prove those properties. The external ribbon is not modelled as a solid or simulated.

## Dependencies

React/React DOM, Vite/React plugin, Three.js, Manifold WASM, fflate, locally bundled Fontsource Fredoka/Rubik (OFL); gh-pages publishing, Playwright test runner. No APIs, remote CDNs, keys or paid services. Geometry/CSG and strict STL parsing run in a Web Worker with bounded complexity, 100 ms edit debounce and stale-result rejection. All generation assets are bundled locally.

### Reproduce browser checks

After `npm run predeploy`, run `python3 serve-production.py` (local port 5901), then in another terminal run `node browser-test.cjs`, `node studio-test.cjs`, `node personalization-test.cjs`, `node advanced-test.cjs`, `node mobile-layout.cjs` and `node extra-validation.mjs`. Run serially because scripts share synthetic evidence filenames. `TEST_BASE=http://127.0.0.1:5902 TEST_REPORT=combined-browser-validation.json node browser-test.cjs` checks root deploy output while `python3 serve-combined.py` serves it. `node gallery-test.cjs` compares every preserved entry against the bundled public gallery baseline; `node gallery-browser.cjs` exercises rendered search/category/order. `node public-test.cjs` verifies the public Pages route and real imported geometry downloads after publication. Playwright requires a Chromium installation (`npx playwright install chromium` if absent).
