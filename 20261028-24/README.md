# Pull & Whirr — Cord Fidget Studio

A **three-part two-hole whirligig**: wind a balanced rotor, gently pull two palm handles apart, then relax so the cord rewinds in the opposite direction. The geometry is an original parametric reconstruction grounded in an inspected local cord-loop STL. This is a physical fidget generator, not a game or static STL viewer.

**Consumable required:** one 700–900 mm length of smooth, nonelastic braided cord, 0.7–1.2 mm diameter, tied into one continuous loop after threading. Printed parts are loose without this loop. A hardware-free alternative is to finger-turn the loose disk; it does not reproduce the cord-driven interaction. Adult desk prototype, not a children's toy. Keep cord away from fingers, hair, clothing, children and pets; do not use at high speed or under load. Stop on wobble, cracking or fraying.

## Run

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`.

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik, Playwright for testing. All runtime dependencies/fonts/WASM are bundled locally; no CDN, API key, server modeling, paid service or file upload. The browser processes files locally. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publication uses the parent monorepo's combined deploy**, not the individual app deployment. Vite base `/daily-app2/20261028-24/`.

## Actual reference evidence

Searched the local STL collections first, including fabric, spring and passthrough projects and their instructions. Inspected the fabric-link mesh sections: its separated upper/lower linkage geometry is not an interchangeable cord eye. Selected the actual **keychain_hook.stl** from read-only `/Volumes/ExternalHD/3d_printing_apps/blender_3dmodel_cleaning_addon-main/` after reading that project's README and keychain placement instructions.

- Source identifier: `blender_3dmodel_cleaning_addon-main/keychain_hook.stl` (local user-provided source; no public redistribution license established).
- SHA-256 **`34a053fef8ec89d47727aec20e52c0cbd3cc2e18c9d34ccfb2fa42a10ce0c68e`**.
- Binary STL, **1,019,884 bytes / 20,396 triangles**, **one connected component**, zero nonmanifold edges at 0.00001 mm weld tolerance.
- Original X/Y/Z bounds: **10.812802 × 3.000000 × 7.254696 mm**, original Z offset 62.190830–69.445526. Units assumed mm (STL stores none), consistent with the addon README's millimeter-scale insertion offsets.
- Five real mesh cross-sections through original Y, not listing images, are recorded in `reference-sections.svg/.png` at flattened Z 0.3, 0.8, 1.5, 2.2 and 2.7 mm. Representative views were visually inspected. The source is an **open approximately 220° round-section arc**, not a closed ring.
- At the middle section: outer radius **5.406401 mm**, measured inner radius **2.406282 mm**, wall approximately **3.00012 mm**, print thickness **3 mm**. Horizontal crossings at original Z **64.039125 mm** are ±5.405959 and ±2.406282 mm (triangulated circles).
- Concrete mapping: retain these radii, 220° sweep and 3 mm thickness as both handles' cord interface. Reconstruct an annular sector and **boolean-union its two ends into the palm**, closing its previously open mouth. Palm shapes/size change surrounding grip geometry, not these measured eye dimensions.
- Deliberate redesign: source rounded toroidal section becomes a **constant-height bed-flat sector**, for support-free printing. Its center is 0.3 mm inside the nominal palm extent; resulting free eye height is at least **2.10628 mm** for the round/oval shapes (hex has more room). The embedding and material choice are proposed engineering decisions, not source measurements.
- New interaction: the separate balanced rotor, its two cord bores and alternating pull/relax drive are **not present in the reference**. The reference supplies the structural cord-eye interface, not proof of the new mechanism's forces, strength, durability or physical operation.

See `reference-analysis.json` and reproducible `reference-analysis.py`. The raw private STL is **not copied, bundled, committed or published**. Reference trees, including the old daily_app tree, remain read-only. No hull replacement or source-mesh repair is claimed.

Studio reference: read-only `keycap_generator2` README, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, import/outline and export modules. Adopted concrete patterns: 374 px scrollable LEFT controls, sticky brand/theme strip, collapsible labelled sections, paired range/numeric millimeter inputs, raised tactile selected buttons, lavender-grey #e7e9f1 desk, white panels, dark #1f2233 ink, coral #e2557a accents, saved dark theme, rounded local fonts and a large RIGHT preview with export beneath. Phones show preview/export first, then controls. Existing collection studio import/export/history infrastructure is adapted; this model, cord-eye reconstruction, rotor parameters and fit checks are new, not a reskin of the crane or fabric mechanisms.

## Physical controls — millimeters

| Control | Supported range |
|---|---|
| Palm diameter / round, hex, oval silhouette | 24–28 |
| Rotor diameter | 36–52 |
| Rotor thickness | 3–5 |
| Through-cord bore diameter | 2.4–3.6 |
| Bore center spacing | 6–12 |
| Palm dimple depth | 0–0.6 |
| Fixed measured eye radii / thickness | outer 5.406401; inner 2.406282; Z 3 |
| Import XY footprint / STL Z height | 4–7 / 0.6–5 |
| Import X / Y placement | ±1.5 / ±2 |
| Import Z rotation | ±180° |
| Image raised depth / engraved depth | 0.4–3 / 0.4–0.6 |

Three real generated-model-thumbnail presets: **Gentle Start**, **Everyday Whirr**, **Slow Inertia**. Bounded variations, reset, undo/redo, six named local saves, and portable JSON save/open. All parts remain single connected closed solids; rotor bores have ≥2.4 mm between-hole wall and ≥10.2 mm edge wall. Minimum handle floor after deepest engraving is 1.6 mm. Imported marks are confined to a radius-6.5 mm well on **personal-handle only**; companion and rotor remain unchanged. This avoids introducing rotor imbalance or cutting cord eyes. The built-in symmetric ring dimples and diametrically opposed bores preserve half-turn mass symmetry. No preview colour is embedded in STL.

## Image import — PNG/JPEG/SVG to actual solid relief

Desktop and phone file pickers, drag/drop, replace/remove and reset transforms/settings. Source and exact checkerboard sampled cutout are shown separately. Bundle contains synthetic CC0 `mark.png`, `waves.jpg`, `ring.svg`, ASCII `wedge-ascii.stl` and binary `gem-binary.stl`; no personal test files.

File limit **16 bytes–2 MB**; actual PNG/JPEG signatures and pixel dimensions checked before decoding; ≤**12 MP / 6,000 px** per side, normalized to ≤500 px per side. SVG accepts ≤2,000 simple filled elements/paths, rejects scripts/external references/effects, rasterizes locally to 256 px. Not an exact SVG CAD converter.

Fit or cover-crop with ±25% shifts, remove light/transparent background or invert dark background, adjust threshold (1–254) or grayscale heights. A bounded **20 × 20 luminance grid** is triangulated as a closed height field with a backing, and joined to/subtracted from the actual handle with **Manifold solid booleans**. Bright/transparent internal holes remain unraised/unengraved over continuous backing; they do not become through-holes in the palm. Physical size, depth, placement and rotation change exported triangles. Empty masks, excessive depth, out-of-zone placement and invalid values block export. This is **2D-to-relief/silhouette conversion, not automatic full 3D reconstruction from one photograph**.

## STL import — a real integrated handle grip

ASCII and binary STL parsing with source dimensions/format/triangle count, Z/Y/−Z up orientation, mandatory explicit **millimeter confirmation**, proportional XY footprint scaling, independent Z height, Z rotation, centering and placement. Changing up-axis requests reattachment. A small source 3D view is separate from the final generated model.

Supported contract: **one closed, outward-wound, convex solid with broad flat bottom and no projected overhang**, ≤**1,500 triangles**, ≤2 MB, **0.2–250 mm** on every source axis. Validates finite coordinates, nondegenerate facets, welded edge incidence/directions, connectivity, signed volume, self-intersections, convexity and broad bed contact. Rejects open/nonmanifold, inward, disconnected, concave/cavity/branch or unsupported overhanging input with actionable feedback. This deliberately bounded contract is exposed in the UI; use a modeler to prepare unsupported files. No unverified repair is attempted. Convexity is only a rejection check; the supplied mesh is **never replaced by a convex hull**.

The actual transformed input solid is boolean-unioned into the palm; no unchanged re-export or interpenetrating-shell substitute. Scaled XY features below 1.2 mm are rejected. The final union must remain one connected closed/manifold part and inside the safe zone. Both raw asset types round-trip through bounded portable JSON and named local designs; missing/invalid payloads request reattachment instead of pretending restoration. Named storage stays on this device; Save JSON deliberately downloads a portable copy including normalized assets.

## Views / reliable current-result exports

Assembled cord routing, exploded illustration, print plate, personal handle, companion handle, rotor only; see-through handle; mouse/touch orbit, pinch/zoom and fit. Cord lines, handle separation and rotor pose are **estimated preview-only inspection**, not a twist/force/inertia simulation. The shown cord is not STL geometry. Individual exports always bed-flat Z=0; the plate separates all parts. Per-part binary STL and Everything ZIP (three parts, plate, numbered `ASSEMBLY.txt`). STL has neither units nor colours: select mm / 100% in your slicer.

Debounced heavy CSG, STL parse and final topology checks run in a **Web Worker** with locally bundled WASM. Request IDs ignore stale results; an exact current-state key gates export, including image settings, imports and pending conversions. Last-good previews are explicitly labelled during invalid edits; they **cannot** be exported as if current. The displayed mesh fingerprint is compared to downloaded bytes in browser tests. Preview and export share the same final arrays.

## Print, calibration and assembly

PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, ≥3 walls, 35% infill. Print all parts flat with decoration upward; no supports intended. Inspect in a slicer before printing. Test a short cord sample through a printed bore and eye; it must slide freely after deburring. Bore-to-1.2 mm cord diametral allowance is 1.2–2.4 mm, not a universal FDM fit. Reprint with a larger bore if it catches. Deburr layer edges; cord wear and eye strength are not computationally guaranteed.

1. Print and deburr all three parts, checking both rotor bores and both handle eyes.
2. Route one continuous cord **A eye → rotor hole 1 → B eye → rotor hole 2 → A eye**. Tie the two ends securely at A; equalize strand lengths and check the knot cannot slip. The handles are on opposite sides of the rotor faces; no inaccessible joint or captive rigid insertion is required.
3. Hold the handles, not finger loops. Turn the rotor a few times to wind the cord. Gently pull apart to unwind; relax tension while inertia carries it into the opposite winding. Repeat slowly. Do not apply constant hard tension or run at high speed.
4. Stop on cord fraying, cracks or wobble. Untie and unthread for complete disassembly. Without cord the three rigid bodies have no retention.

## Validation / limits

`npm test` and browser scripts/reports are stored beside the app; see `VALIDATION.md`. Tests distinguish rigid geometry from unmodeled cord dynamics. Independent exported-byte checks include finite vertices, byte/triangle count, nondegenerate triangles, outward unit normals, 1e−5 mm welded-edge two-face incidence and opposite directions, positive volume per component, expected bounds and flat print orientation. Every part and the translated combined plate are checked. Actual image and STL imports undergo the same checks, with changed-file/parameter fingerprints and exact preview/JSON-regeneration/export matching.

Mechanical checks probe all four cord openings for 1.2 mm cord passage, preserve eye wall/interface dimensions, check safe print spacing, rotor half-turn symmetry and rigid-body nonintersection across representative inspection turns/separations. This does **not** model a flexible cord, knots, angular momentum, finger forces or wear. The threading sequence is accessible geometrically; actual cord routing, rhythm, friction and endurance still require a physical prototype.

**No physical print, slicer verification, cord-wear, knot-strength, force, speed or fatigue test has been performed.** Watertight geometry and virtual clearance do not prove physical performance or safe operating speed.
