# Glow & Gather

A React + Vite, local-browser **six-part LED-only lantern kit-card generator**. Snip a real connected carrier, insert four pierced screens into a personalized base, then lower a removable vented lid over the upper tongues. This is a static assembly, not a motion fidget or thermal/electrical product. **Never use flame, candles or hot lamps.** An unlit sculpture needs no hardware; an optional user-supplied battery LED tealight is limited to Ø32 × 28 mm.

## Run

```
npm install
npm run dev
npm test
npm run predeploy
npm run preview -- --port 5428
```

Production base: `/daily-app2/20261029-28/`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. The combined public site is published through the parent monorepo's `deploy/` flow, not this app's deploy script.

## Actual reference and provenance

**White Cat Kit Card**, Mike Kasberg, Printables 865769; [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Download URL, complete SHA-256, actual binary-STL parse, components, socket bounds and sections are in `reference-analysis.json`; reproducible inspection is `reference-inspect.py`. Original source STL is not bundled. No endorsement.

The downloaded STL contains 30,616 triangles, bounds 179.820 × 178.020 × 3.190 mm, and 27 edge-adjacent mesh components (including surface fragments). It is **not watertight**; we do not claim repair or use its flawed faces as printable output. Actual sections at Z=.10/.50/1.59 mm were inspected (`evidence/reference-sections.png`). Measurements: 1.6 mm planar sheets/carrier, .21/.22 mm low bridge planes, four actual 4.5 × 1.7 mm pierced sockets. Units are assumed millimeters, corroborated by source SCAD and assembly size, not STL metadata.

**Adaptation:** reconstruct the measured pierced-sheet / removable-carrier concept with true Manifold solids. New 4.4 mm wall tongues and 1.6 mm sheet with .10 mm total allowance reproduce the measured 4.5 × 1.7 socket envelope at one calibration setting. Default allowance is deliberately .15 mm, and thickness/clearance vary for printer calibration. New paired top/bottom joints, vented lid, window mullions, LED keep-out, protected import wing, 2.4 mm frame and .4–.6 mm runners are original redesigns, not measured source dimensions. No switch sockets, convex-hull substitution or source mesh redistribution.

Local STL candidates were inspected first: keycap_generator2 switch template (944 triangles, three bodies, unsuitable switch interfaces) and fidget_fabric_generator complete link (5,940 triangles, 7.981 × 9.241 × 8 mm, unsuitable interlocking textile geometry); local kit-card project has no suitable source STL. Their trees stayed read-only. Keycap Studio's README, styles, editor, viewer, worker, STL parser and export patterns informed the 374 px left maker panel, raised controls, local fonts, paired inputs, saved designs, ghost views and worker status. Reusable studio/import scaffolding comes from earlier Daily Object Lab work; the lantern geometry, assembly, mechanism validation and documentation are new, not a recoloured prior model.

## Parameters (all physical sizes in mm)

| Control | Supported range |
|---|---|
| Card width × height | 200–240 × 210–250 |
| Sheet thickness | 1.6–2.4 |
| Wall height / centre span | 36–48 / 44–50 |
| Window width × height | 20–28 × 18–26 |
| Slot total allowance | .10–.35, not per side |
| Part spacing | 4–6 |
| Breakaway runner width / thickness | .8–1.4 / .4–.6 |
| Lid groove depth | 0–.4 |
| Wing import footprint / height | 4–7 / .6–3 |
| Import translation X / Y | ±1.5 / ±2 |
| Import rotation | ±180 degrees |

The base is 100 × 70 mm; lid is 64 × 64 with a Ø30 mm opening. Four walls each have four 4.4 mm tongues. Windows have a 2 mm mullion and bounded borders. Corner separation is one allowance per side between perpendicular wall ends. Envelope combinations that cannot fit all six parts plus runners are blocked, not clipped or automatically altered. Three real presets have generated 3D thumbnails. Silhouette choices alter base and actual window cutouts.

## Image workflow

PNG and JPEG content is checked before decoding, ≤2 MB, ≤12 MP, ≤6,000 px per side. Normalize locally to ≤500 px, fit/cover/crop with ±25% shift, and sample a **20 × 20 luminance grid**. Transparent/light backgrounds are unraised; inverted dark-background conversion is available. Threshold 1–254 creates a sampled silhouette relief; grayscale maps darkness to height. The grid is triangulated with continuous backing and solid-unioned into the isolated base wing. Raised depth .4–3 mm; engraving .4–.6 mm preserves ≥.8 mm backing. This is **2D-to-relief, not 3D reconstruction from a photo**. White holes stay unraised/unengraved on backing; interpolated boundary cells mean it is not exact vector tracing. Original and transparent checkerboard cutout are shown. Empty silhouettes and unsafe placement block export.

SVG simple paths/shapes are sanitized and rasterized locally (≤2,000 elements, 256 px); no scripts, external references, text or filters. Bundled searchable icons and up-to-eight-character text use the same real relief path. Scale/rotate/place, replace/remove and reset affect actual exported geometry. Synthetic sample PNG, JPEG and even-odd-hole SVG are bundled.

## STL workflow

ASCII and binary STL ≤2 MB, 1–1,500 triangles, each axis .2–250 mm. Confirm **millimeter coordinates explicitly**, since STL has no units. Pick Z-up, Y-up or inverted Z before attaching; changing axis requests reattachment. Show source preview, dimensions, triangle count, XY scale factor and independent Z factor. Preserve the verified original faces; scale XY proportionally to footprint and Z to requested grip height, rotate/place, then **boolean-union** into the protected wing. Base backing and enclosure keep-outs remain unaffected.

Supported contract: one closed outward-facing convex solid, broad flat base ≥25% of XY box, no overhang outside the bottom footprint. Closed concave/hollow models, disconnected bodies, branches, self-intersections, open/nonmanifold/inward/degenerate meshes and excessive sizes are rejected with actionable messages, not repaired or replaced with a hull. Concavity rejection is deliberate, not a general STL editor. The small 7 mm wing import budget is clearly bounded. Original concavities are never silently discarded. Synthetic wedge ASCII and faceted gem binary samples are included; these samples are original test fixtures, not copied third-party assets.

## Local data and state

No user files leave the browser; no APIs, keys, CDN models/fonts or paid services. Manifold WASM, Three.js, fflate, React and Fontsource Fredoka/Rubik are bundled. Heavy parsing, boolean modeling and final manifold verification run in a worker. Debounced builds use request IDs and current-state keys; errors keep the last valid preview visible but **disable all exports**. Preview and export share exactly the current validated meshes; UI records a byte signature checked against real downloads.

Undo/redo, six named local designs, JSON save/open include bounded normalized image or mesh payloads. Missing image payloads require reattachment. localStorage may be cleared by the browser; JSON is portable backup. Theme is saved independently. Files selected for validation are synthetic only.

## Views / export

Connected card, de-tabbed print plate, assembled lantern, exploded assembly, six isolated parts and see-through walls share the same solids. Orbit, fit, zoom and touch pinch work locally. Preview positions never alter bed-flat STL. Choose per-part binary STL or Everything ZIP (connected card, six part STLs, numbered ASSEMBLY.txt). Dimensions are displayed for the selected export in mm; STL cannot store preview colours. No fake 3MF export.

## Printing and assembly

1. Print bed-flat, .4 mm nozzle, .16–.20 mm layers, 3 walls, PLA/PETG. No supports intended; windows are bed-flat cutouts, not bridged holes. Check your bed against the declared card or export parts separately.
2. Print base plus one screen first to calibrate allowance and elephant-foot compensation. Fit is printer/material-dependent, not universal.
3. Snip 24 thin runners outside functional interfaces. Trim nubs; adult cutters and small parts.
4. Lower four screens into the eight base seats; glue the bottom tongues and square while curing. The slots are straight seats, not snaps or guaranteed friction locks.
5. Optional battery LED ≤Ø32 × 28 mm fits the computational clear envelope. Follow its manufacturer's battery/thermal instructions. No hot light, flame or mains wiring. Do not leave powered lights unattended.
6. Lower lid over eight top tongues. Keep it removable for battery access; optional external removable tape if too loose. No adhesive on battery compartment.

Full instructions are also in-app and in ZIP. No physical printing, thermal, electrical, strength, fatigue or child-safety testing is claimed.

## Validation evidence

`npm test` independently parses binary output at 1e-5 mm weld tolerance: exact byte count, finite coordinates, nondegenerate faces, unit normals, opposite edge winding, exactly two incident faces per edge, connected components with **individual positive volume**, and measured bounds. Each part is checked separately; a connected card must be one component. Pure geometry is shared between worker and Node.

Assembly tests use real solid intersections: six parts disjoint in assembled and print layouts; four screen insertion paths, final lid lowering, Ø32 × 28 LED keep-out and pierced-window probes. Twenty-four snips must miss all functional solids and release exactly six parts plus one carrier. `node hole-check.mjs` probes the actual final Boolean solid to confirm unraised / unengraved image holes remain on the backing. Eight built-in/preset/extreme cases and eight image/STL-derived cases run the same checks. Representative invalid dimensions/imports are rejected.

Production browser suites: `node browser-test.cjs`, `node studio-test.cjs`, `node supplemental-test.cjs` with Vite preview on port 5428. They exercise actual PNG/JPEG/ASCII/binary file pickers, changed pixels/threshold/depth/scale/place, real STL downloads, preview byte signatures, JSON regeneration, malformed inputs, recoverable export gating, presets, SVG/text/icons, undo/redo, named saves, ZIP extraction, worker abort/reload, theme/focus, responsive layout, 320/390 px phones and touch gestures. Reports/screenshots are committed. Local combined-gallery and live Pages checks are additional, not substitutions for mesh/assembly tests. Computational fit does not prove printed strength or thermal suitability.

Dependency licenses: Manifold Apache-2.0; Three.js MIT; fflate MIT; React MIT; fonts SIL OFL. Source kit reference CC BY 4.0 as above.
