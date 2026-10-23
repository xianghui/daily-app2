# Breath Vessel — a pneumatic squeeze studio

React + Vite, browser-local parametric STL generator for a hollow TPU thumb bulb. Gently pinch the chamber to displace air through the crown opening; release for elastic refill. This open-vent mechanism is distinct from solid flexures, rolling toys and linkage fidgets. No valve, guaranteed whistle, airtightness, force or timing performance is promised. **No physical print or fatigue testing has been performed.**

## Studio

Large matte 3D editor, three real-model preset thumbnails (Pocket Breath / Breath Vessel / Slow Exhale), bounded variations, Shape / Mechanism / Surface / Import / Print tabs, dimensional readout, orbit/pinch/zoom/fit, active-object selection and preview palette. STL is geometry only, not coloured. Undo/redo is debounced 450 ms (35 snapshots). Save/Open JSON includes bounded portable source payloads, not broken references. On phones the control rail collapses and export remains fixed at the bottom.

Visual direction: https://vaseverse.org/ was fetched as a reference for model-first composition, warm restrained surfaces and compact controls. No branding, source, text or assets copied. Modeling/import/editor plumbing adapted from earlier collection apps; pneumatic chamber geometry and mechanism checks are new.

## Parameters — millimeters unless marked otherwise

| Control | Range |
| --- | --- |
| Chamber radius | 16–22 |
| Chamber height above floor | 34–42 |
| Barrel / radial roof wall | 0.8–1.2 |
| Crown vent radius | 0.8–1.6 |
| Palm and chamber floor | 2–3 |
| Palm dimples | 0–0.6 deep |
| Import footprint | 4–7 |
| STL fitted height | 0.6–5 |
| Import rotation | −180–180 degrees about Z |
| Import offsets | X ±1.5, Y ±2 |
| Image relief | 0.4–3, plus 0.4 backing |

Chamber center is at X = radius + 14. The cylindrical barrel rises 9 mm; the conical roof continues to chamber height. Roof angle and actual **normal** roof thickness are calculated and displayed; normal wall is thinner than radial wall (at least 0.61 mm in supported combinations). Minimum barrel wall 0.8 mm. The palm relief well is 0.8 mm deep with a 6.5 mm safe radius, at least 7.5 mm clear of the chamber. All solids are robustly unioned/subtracted with Manifold WASM; this is not overlapping visual shells. Final coordinates, winding, positive volume, edge incidence and connectivity are checked in the generation worker before export.

## Image import

PNG and JPEG only, actual headers checked before decode: ≤2 MiB, ≤12 million pixels and ≤6000 pixels per side. File picker on desktop/phone and single-file drag/drop. Decoded image is normalized to at most 500 px and resampled to a **20×20 grayscale grid**, composited over white. Fit entire image or fill/crop, with ±25% pan. Luminance uses 0.2126 R + 0.7152 G + 0.0722 B. Threshold mode raises samples darker than a 1–254 threshold to the chosen depth; relief mode uses depth × (1 − luminance/255). The regular grid is triangulated into a continuous, piecewise-linear height surface on a 0.4 mm backing, with closed side/bottom faces. Threshold silhouettes are therefore sampled raised relief, not separate disconnected extrusions. White/empty relief is rejected. The backing sinks 0.15 mm into the palm well and is solid-unioned to it. This is **2D-to-relief**, not single-photo 3D reconstruction. Source and exact conversion-grid previews are shown.

## STL import and integration contract

ASCII and binary STL, 40 bytes–2 MiB, ≤1500 triangles, every bounding axis 0.2–250 mm. **STL has no unit metadata: explicit millimeter confirmation is required.** Dimensions and interactive source preview are shown. Imported solid replaces the default palm grip; it is not merely displayed or re-exported unchanged. XY is proportionally fitted to selected footprint, Z independently to selected height, then centered, rotated about Z, offset and solid-unioned to the palm well. Minimum fitted XY span is 1.2 mm.

Deliberately limited to **one outward-wound, connected, convex, watertight solid with a broad flat Z-down bottom**, at least 25% of bounding footprint, and all XY projections inside that base. Open, self-intersecting, nonmanifold, concave, hollow, disconnected, degenerate, excessive and overhanging meshes are rejected with recovery guidance. No automatic repair or arbitrary X/Y tilt is claimed. Topology/winding, pairwise triangle intersections, convexity, flat-bottom contact, bounded dimensions and transforms are verified before CSG. Out-of-safe-zone transforms or disconnected integration block export. Use a mesh editor to repair/decimate unsupported sources first. Replace, remove and reset transforms are available.

## Local processing and fixtures

No uploads, APIs, keys, paid services or remote runtime/CDN dependencies. Dependencies and WASM are bundled locally. Parsing/generation occur in a worker; complexity is bounded. Saving JSON intentionally includes the ≤500 px normalized PNG and sampled image data, or validated low-poly mesh. JSON reopen revalidates source content and requires a valid portable image payload; missing payloads prompt reattachment, never silently restore a fake import. No personal input files are bundled or committed. Four original synthetic fixtures in `public/samples/`: mark.png, waves.jpg, wedge-ascii.stl and gem-binary.stl, available as in-app samples and downloadable test files; no third-party attribution required.

## Export and printing

The primary Download STL exports binary STL from exactly the geometry used in the preview. Complete-vessel and named-body export refer to the same single connected printable part; ZIP is not applicable. Object and print-layout views are identical because there is no assembly. Export X/Y/Z in mm is measured from final geometry.

TPU 95A only; flat floor at Z=0 down, 0.4 mm nozzle, 0.2 mm layers, support-free conical roof (greater than 45° above horizontal), no hardware or assembly. Ensure thin-wall extrusion and solid wall material, inspect every sliced layer, and do not add infill into the air cavity. Keep vent clear of strings without puncturing walls. Print Pocket Breath first as a full-scale material/air-leakage calibration. Start at ≤1 mm **total diameter** reduction with the vent open. Stop for permanent creases, tearing, whitening or delamination. Do not block the vent, pressurize with your mouth, or treat it as a pressure vessel. This is a hand fidget, not a mouth toy. TPU hardness, layer bonding and leakage affect the tactile response; tolerances are not universal. There are no sliding interfaces or retention fits to calibrate. Opposing-wall gap checks are geometric bounds, **not** nonlinear shell, buckling or fatigue simulation.

## Development and validation

`npm install`, `npm run dev`, `npm run predeploy`, `npm test`. App scripts contain `predeploy: npm run build` and `deploy: gh-pages -d dist`; publication of the collection uses the root monorepo deploy flow, not this per-app deploy.

Dependencies: React, React DOM, Three.js + OrbitControls, manifold-3d and gh-pages. Dev: Vite + React plugin, Playwright. npm audit: no known vulnerabilities at installation. Manifold's optional Node module is externalized in the browser build; browser tests exercise the actual bundled WASM. Main Three.js bundle exceeds Vite's advisory 500 kB limit; no remote code is loaded.

`validate.mjs`: defaults, min/max, 64 parameter corners, all presets, eight deterministic variations, plus both synthetic STL sources and two image modes across six representative designs. Binary STL parsed independently for finite vertices/normals, nonzero faces, positive volume per connected component, welded edge incidence exactly two, opposite edge directions, genus zero, Z=0 and independently expected dimensions. CSG material/void probes verify floor, barrel, roof and continuous open vent; compare imports against the built-in model outside the palm well. Roof angle, normal wall thickness and bounded opposing-wall compression gap are calculated. No prediction of airflow resistance or physical sealing.

`browser-test.cjs`: real PNG/JPEG and ASCII/binary STL file inputs, actual STL downloads, pixel/threshold/depth/crop/scale/placement changes, byte fingerprint equality between preview and export, bad input recovery, mobile touch orbit/pinch, 320/390 px layouts, per-body exports. `extra-browser.cjs`: all presets, four random variations, undo/redo, portable save/open for every import format, preview colour neutrality and drag/drop. `mobile-sheet.cjs`: collapse/expand, all tabs, reachable fixed export. `gallery-test.cjs`: root inline-script compilation, entry uniqueness and preserved entries, browser render/search. JSON validation reports are retained alongside screenshots.
