# Schwarz & Lantern

A local React + Vite maker studio for a **real connected 24-panel kit card**. Snip 96 low runners and tape two staggered triangular bands into an open-ended mathematical lantern. Radius, height, middle-ring twist, panel apertures, sheet thickness, seam allowance, card envelope and breakaways alter the exported solids. This is not a browser game, an unchanged STL download, a smooth-cylinder re-export or a functioning lamp.

The three vertex rings have six vertices each. Bottom/top angles are `i × 60°`; the middle ring is rotated by the chosen twist and lies at `H/2`. At **30°** this is the canonical two-band Schwarz-lantern triangulation; 15–29° are generalized skewed variants. Twenty-four actual 3D triangles are independently flattened into printable panels. The area readout compares **ideal triangle area** with `2πRH`; it does not confuse inset plastic coverage with mathematical surface area, and a fixed two-band model alone does not demonstrate the paradox's refinement limit.

## Reference-first evidence and attribution

Read-only local collections were searched first. The Keycap Studio README, `src/styles.css`, `App.tsx`, `Viewer.tsx`, `worker.ts`, `export.ts`, and `geometry/stl.ts` were inspected. Its three-component switch STL was parsed and rejected as an unrelated interface; the Fabric Fidget Studio README and actual 8 mm-high interlocking link STL were likewise inspected and rejected as a planar-card reference. No reference project was modified, deployed, or copied wholesale.

Selected publicly available reference: **White Cat Kit Card**, Mike Kasberg, [GitHub project](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Upstream README and the verified license are in `REFERENCE-UPSTREAM.md` and `REFERENCE-LICENSE.txt`. The raw third-party mesh is **not redistributed**.

Fresh download and binary STL parsing: **30,616 triangles**, SHA-256 **`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`**, assumed millimeter bounds **179.820 × 178.020 × 3.190**. STL has no unit metadata. Edge-adjacent splitting produces 27 components, including degenerate zero-volume pseudo-components. The full source has nonmanifold anomalies; inspection does not establish source printability or claim that source triangles were repaired.

`reference-analysis.py`, `reference-analysis.json`, and `evidence/reference-sections.png` record actual mesh sections at Z=.100, .215, 1.590 mm. Measured source decisions versus original reconstruction:

- **Measured:** 1.60 mm planar sheet, 4.50 × 1.70 mm receivers, .21–.22 mm runner tops.
- **Retained structure:** bed-flat 1.60 mm default sheet, connected carrier, thin accessible breakaways. All output is new Manifold solid geometry, not copied/repaired source triangles.
- **Redesigned:** 24 triangular panels, two staggered open-ended bands, 30 labelled seams, 96 strengthened .4–.6 mm runners. Source socket dimensions are documented but **not imposed on an unrelated taped shell**.
- **Proposed thickness compensation:** inset every triangle edge by `1.2 × sheet + extra seam gap/2`. This is a conservative independently chosen allowance, not a measured source miter, calibrated friction fit or universal printer tolerance.
- Unlike the earlier tetrahedral/bipyramid shells, this is an open cylindrical triangulation with alternating vertex-ring phase, two 12-panel strips, six middle-ring connections and an actual ideal-area comparison. The 3D topology, panel flattening, mathematical controls, seam graph and outside assembly paths are specific to this design.

The UI follows concrete maker-studio patterns from Keycap Studio: 374 px left controls/right viewer, lavender desk #e7e9f1, white panels, ink #1f2233, coral #e2557a, raised tactile controls, local rounded Fredoka/Rubik fonts, paired millimeter inputs/ranges, collapsible sections, checkerboard conversion, imported-source editor, saved dark mode, worker-owned solid modelling, and current-state export gating. Original Daily Object Lab studio/import/preflight utilities were adapted; no reference Git history or dependency tree was copied.

## Run and reproducible verification

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
# in another terminal, from this app directory:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node mobile-test.cjs
node map-test.cjs
node mixed-extremes-test.mjs
```

Production base: `/daily-app2/20261105-18/`. The standalone production test server uses `http://127.0.0.1:5968/daily-app2/20261105-18/`. Publish the combined site using **the parent monorepo** deploy, not the per-app script. Each app nevertheless includes `gh-pages`, `predeploy: npm run build`, and `deploy: gh-pages -d dist`.

Dependencies are locally bundled: React/Vite, Three.js/OrbitControls, Manifold WASM (Apache-2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL). License notices are in `public/licenses/`. No CDN imports, remote geometry services, keys, paid APIs or file uploads. Heavy generation and STL parsing run in a Web Worker. Bounded resolution, 100 ms debounce, request IDs, import version guards and exact input-state keys prevent stale results from exporting.

## Parameters

| Parameter | Supported range | Real geometry effect |
|---|---|---|
| Card width / height | 280–340 / 220–300 mm | Connected carrier envelope |
| Vertex-ring radius | 32–40 mm | All three vertex rings |
| Lantern height | 60–80 mm | Middle Z=H/2 and top Z=H |
| Middle twist | 15–30 degrees | True triangle vertices and target seam angles |
| Aperture diameter | 4–7 mm | Round/diamond through-ports on panels 2–24; inactive on solid panels |
| Sheet thickness | 1.6–2.4 mm | Every panel/carrier thickness |
| Additional seam gap | .3–.8 mm | Edge inset in addition to sheet compensation; not a press fit |
| Part spacing | 3–5 mm | Packing/snipping corridors |
| Tab width / thickness | .8–1.2 / .4–.6 mm | Four real bed-aligned removable runners per triangle |

Three real presets have worker-rendered thumbnails. Solid, round-port and diamond-port variants change exported geometry; panel 1 always retains its center for engraving. Six sectors/two bands are intentionally fixed. Invalid dimensions, unsafe transforms and impossible packing disable export. All displayed linear dimensions are mm; final export X/Y/Z reflects the selected card, loose plate or part, not estimated assembled dimensions.

## Image / text / icon to geometry

Desktop/phone file-picker and drag/drop: **PNG, JPEG and simple SVG**, 16 bytes–2 MB. Image content/header checked before decoding; ≤12 MP and ≤6,000 px/side. Normalize to ≤500 px longest side. SVG supports simple filled shapes only, ≤2,000 elements; scripts, external resources, references, text and effects are rejected, then rasterized locally at 256 px.

Contain/cover, ±25% crop shift, background inversion, threshold 1–254, threshold/grayscale mode and .4–.6 mm depth build a **closed 20×20 sampled height solid**. Threshold samples dark pixels; grayscale depth is `depth × (1 − luminance/255)`. Alpha composites against the chosen background. That same height solid is Boolean-subtracted into panel 1's incenter. Interpolation softens edges; this is **sampled 2D-to-relief, not exact vector tracing or full 3D reconstruction from one photograph**. Checkerboard shows the actual sampled cutout. Bright interior holes retain full backing; the bundled ring SVG and final Boolean probes verify this. Empty silhouettes yield recoverable errors, not substitute shapes.

Up to 8 text characters and six searchable, original bundled SVG marks use this same conversion. Engraving only is deliberate: removal ≤.6 mm leaves ≥1.0 mm continuous backing at minimum sheet thickness. No fake raised-mode or texture-only controls. Replace/remove, reset image settings and reset transforms are available.

## STL to geometry

**ASCII and binary .stl**, ≤2 MB, ≤1,500 triangles, .2–250 mm per axis. Explicitly supported: **one outward-wound closed convex solid with broad flat bed contact and all XY projections inside its bottom footprint**. Concave, hollow, disconnected, open/nonmanifold, self-intersecting, inverted, degenerate or unsupported-overhanging inputs produce actionable errors. No automatic repair is claimed. Bottom-footprint hull calculations validate support only: **the source mesh triangles are the actual Boolean cutter, never replaced by a convex hull**.

Choose Z/Y/−Z up before attachment, inspect the source 3D view and dimensions, and explicitly confirm millimeters. STL has no unit metadata. XY footprint 4–7 mm scales proportionally; independent Z .4–.6 mm fits engraving depth. Rotation ±180°, X ±1.5 mm and Y ±2 mm change actual mesh integration. A 5.8 mm-radius keep-in region around panel 1's original incenter protects all three seams. Overlarge/off-center settings are blocked; no silent clipping. XY dimensions after scaling must remain ≥1.2 mm. Reset transforms, replace/remove and returning to built-ins require no reload.

## Views, privacy, persistence and downloads

Assembled, exploded, connected card, loose print plate and every isolated panel share the exact current result. Exploded positions are explanatory, **not a folding simulation**. Orbit, zoom, fit/top/front work with mouse and touch; mobile shows preview/toolbars first, then dimensions/export, then stacked controls. Dark mode persists; reduced motion and visible keyboard focus are supported. Preview colours are not STL colours.

Files stay on the device, in browser memory/localStorage only. Portable JSON and six named local designs include bounded normalized image or validated mesh payloads. JSON ≤2 MB; portable images ≤1.8 million characters /250k pixels. Missing payloads explicitly request reattachment. Undo/redo includes settings/imports. No personal input is placed in this repository; only synthetic CC0 samples are bundled.

One-click binary STL for connected card, loose plate or chosen part; direct per-part STLs; Everything ZIP contains **25 STLs** (connected carrier +24 clean panels), portable JSON, numbered instructions and **`assembly-map.svg`**. The proportional map shows actual inset panel outlines and paired **S01–S30** edge labels. OPEN labels mark the twelve unmatched end edges. The map can also be downloaded individually. No ZIP is mislabelled as 3MF. The exact current geometry signature is checked against downloads and Node regeneration from saved JSON. Last-good previews cannot silently export after invalid edits.

## Printing and real assembly

Print the card **or** clean panels flat at Z=0. PLA/PETG, .4 mm nozzle and .16–.20 mm layers are starting suggestions; supports not intended. Print adjacent panels 1+2 first to calibrate tape, seam gaps and printer expansion. Thickness compensation is not a tested tolerance profile.

1. Use the map to label IDs and seam labels on inside faces **before snipping**. Drawings show the printed top/outside. Cut all 96 runners; deburr without cutting the three functional seam edges.
2. Tape outer diagonal seams into lower strip `1→2→…→12` and upper strip `13→14→…→24`. Do not force the deliberate gaps closed.
3. Hold strips in arcs and mate six middle seams: **2↔13, 4↔15, 6↔17, 8↔19, 10↔21, 12↔23**. Identical S-labels are partners.
4. Close strip side seams **12↔1** and **24↔13**. Bottom/top ends remain open. Add panels from outside; no threading through a closed shell. A temporary paper former based on the three vertex-ring coordinates can help support construction.
5. Thin external tape is required for temporary holding. For a rigid permanent display, use compatible gap-filling two-part epoxy along the inside seams, with the external tape acting as backing; a thin instant-glue bead cannot bridge these gaps. Tape and epoxy are not supplied. Use ≥10–12 mm tape spanning gaps, not a nominal edge-to-edge butt bond. Follow the adhesive manufacturer’s plastic compatibility/cure instructions and let it cure before removing the temporary former. No hardware, friction lock, positive capture or mechanical fold is claimed.

A mathematical lantern is not a certified luminaire. No flame/hot bulb. Keep small parts and cutters away from unsupervised children.

## Validation boundaries

`validate.mjs` independently parses exported binary bytes, checks exact triangle length, finite vertices, nondegenerate faces, normal/winding consistency, **1e−5 mm** welded edge incidence (exactly two opposite-directed triangles), positive volume per connected component, dimensions and Z=0 bed alignment. All 24 panels, the connected card and the float32-translated loose plate are checked. Manifold .001 mm simplification avoids sub-feature artifacts without deleting failed faces.

Kit-specific solid checks verify 96 simulated cuts yield carrier+24 unharmed parts, exact card bounds/thickness, clear ports in card and clean panels, disjoint print packing, supported XY layer footprints, no assembled collisions, 30 correctly wound ideal seams/12 boundary edges, correct two-strip/middle-ring connectivity and exterior insertion samples for every panel. Defaults/presets/aperture shapes, parameter endpoints and image/STL-derived variants receive the same checks. Browser scripts exercise actual production imports/downloads, threshold/content/depth/transform changes, malformed files, stale builds/imports, worker abort/reload, JSON/named designs, undo/redo, real ZIP/per-part exports, SVG hole probes, light/dark/focus and desktop/touch layouts. See `VALIDATION.md` and generated reports for exact observed results.

**No physical print, tape assembly, glue bond, fit, material strength, durability or thermal test was performed.** Computational collision-free panels do not establish adhesive strength or ease of hand assembly.
