# Pendle — gravity-return fidget STL studio

A React + Vite browser-based parametric generator for an **eccentric pendulum**: hold the oval palm base upright with its axle horizontal, flick the off-center bob and feel gravity return it toward its resting position. Unlike a balanced spinner, its center of mass is intentionally below its axis. No purchased hardware, API, key, server or CDN is required for generation, preview or export.

## Parameters

All geometry dimensions are **millimeters**. The palm aspect control is a dimensionless ratio.

| Control | Range | Default |
| --- | --- | --- |
| Bob radius | 16–24 mm | 20 mm |
| Palm oval X/Y aspect | 1–1.3 | 1.1 |
| Mass offset | 6–10 mm | 8 mm |
| Bob thickness | 4–8 mm | 6 mm |
| Running clearance, radial and each axial face | 0.25–0.60 mm | 0.35 mm |
| Scallop depth | 0–1.2 mm | 0.6 mm |
| Cap interference, radial | 0–0.12 mm | 0.06 mm |

The bob's conservative remaining ligament `radius - offset - (3 + clearance) - grip` must be at least 2.8 mm; impossible combinations disable export and explain why. The fixed base is 3 mm thick. Axle radius is 3 mm; cap outside radius 5.8 mm and depth 3 mm. Base Y radius is `radius + offset + 4`; aspect expands only X, never reducing swing clearance. Presets and reset are included. Exact final X/Y/Z print-layout bounds and assembled envelope are displayed.

## Local operation / dependencies

```sh
npm install
npm run dev
npm run predeploy
```

React/React DOM power controls; locally bundled Three.js and OrbitControls provide orbit, pinch zoom and fit-to-view. Locally bundled `manifold-3d` WebAssembly performs real solid unions and differences. Export writes binary STL directly, no external service. Resolution is bounded at 96 segments per circular feature and 16 grip scallops. Generation is synchronous, bounded and validated in Chromium; no unbounded subdivision is exposed. `@playwright/test` is a development-only browser validation dependency; `gh-pages` supports the required app deployment scripts. The published monorepo uses its **root** deployment flow, not the app's individual deploy command.

Download the three-part separated print kit, individual base/bob/cap, or a smaller three-part calibration kit. The main preview and export use the same generated triangles and current values. STL is unitless by specification: import as mm. Filename records bob radius, offset and part type.

## Printing and assembly

1. Print bodies on the flat Z=0 faces as laid out, no supports. Start with a 0.4 mm nozzle, 0.2 mm layers, four walls. PETG is recommended for axle and friction cap. PLA/PETG is suitable for the bob; use uniform 60–100% infill to approximate the modeled homogeneous mass distribution. No compliant flexure is used. Small cap interference depends on material compliance; excessive interference can crack rigid material.
2. Print the coupon first: short axle stand, running ring of actual bob thickness, actual cap. Clear first-layer elephant foot and deburr bores. Start with 0.25 mm tuned or 0.50 mm loose running gap, then adjust for your printer/material. These values are **not universal**.
3. Put a removable shim of running-gap thickness between bob and base. Slip the bob over the post. Press the cap on the last 3 mm until the post is flush with the cap top. This geometry provides the running gap on **both** bob faces. Remove the shim; do not clamp the bob.
4. Cap fit is friction, not a snap lock. 0.06 mm radial interference means 0.12 mm diametral compression. Adjust in 0.02 mm increments after the coupon. Zero interference is only a fit trial and may not retain. Pull-test the cap; replace loose caps. Pull the cap straight off for service. No glue or hardware is needed.
5. Hold by the outer rim with the base upright. Axle horizontal: the offset weight swings back toward rest. Flat on a table: it is a free rotor without gravity return. Damping and friction determine the actual swing duration; a modeled clearance does not guarantee a particular feel. Keep fingers clear of the bob/base pinch gap. Small detachable parts are not for young children.

All motion is rotational; there are no hidden end stops. The cap overlaps the bob bore by more than 2 mm radially throughout the supported range. The base covers the bob's swept envelope with a 4 mm nominal finger rim; grip removes at most 1.2 mm. Print layout bodies are spaced at least 5 mm apart.

## Validation

```sh
node validate.mjs
# With npm run dev -- --host 127.0.0.1 --port 5189 running:
node browser-test.cjs
node gallery-test.cjs
```

`geometry-validation.json` records defaults, presets and supported min/max corners; invalid ligament combinations are rejected. Exported binary STL is parsed independently: nonempty triangle count and file length, finite coordinates, millimeter bounds, nondegenerate faces, normal consistency, welded edge incidence exactly two, opposed directed edges and positive volume per connected solid. Each part and coupon is also checked independently. Robust CSG creates closed solids rather than overlapping visual meshes.

Mechanical checks sample a complete revolution at 15° increments using solid intersections against the base and retaining cap; also check conservative faceted bore clearance, cap overlap, axial gap, ligament, separated print-layout bounds and computed negative-Y center of mass. Analytical radial envelope symmetry covers the intervals between samples. Intentional cap/axle interference is a **press-fit**, not an accidental merge. There is no undeclared moving-body fusion.

`browser-validation.json` records actual Chromium STL downloads for defaults, presets, minima/maxima, sliders and individual parts; downloaded bytes match the exact parameterized generator output. It also covers invalid/empty inputs, changing preview, reset/fit controls, 320/390 px layout, reachable touch download, and real touch orbit/pinch zoom. `gallery-validation.json` records inline-script compilation, one correct new entry, retained historical entries and browser rendering without runtime exceptions.

These are **digital geometry/mechanism and browser checks, not a physical print test**. No physical print has been performed; friction retention, wear, return feel and printer fit need coupon and real-world verification.
