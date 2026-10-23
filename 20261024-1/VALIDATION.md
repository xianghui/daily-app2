# Facet Drift — observed software validation

Run: 2026-10-24. **No physical print, squeeze, force, automatic-return or fatigue test performed.**

## Geometry and mechanism

`npm test` passed **78 parameter cases** (default, minimum, maximum, three presets, all 64 parameter-range corners, eight deterministic variations) and **24 import-derived cases** (threshold/relief and ASCII/binary STL across defaults, bounds and presets).

Every exported solid was independently parsed: finite coordinates and normals, nondegenerate triangles, outward-consistent winding, positive enclosed component volume, correct independently derived millimeter bounds, one connected component, and welded edge incidence exactly two with opposite directions. Manifold CSG produces a real union. Final preflight also runs in the worker for every editor edit.

Mechanical checks cover conservative projected normal membrane thickness >0.7 mm, all twelve reinforcement/membrane material probes, base/stem attachment, open lumen, and exact CSG differences proving import isolation from the sleeve. Nine affine squeeze/turn states check simple nested cross-sections at seven axial slices, cyclic vertex order, remaining height and a conservative lumen bound. These are bounded geometric checks, **not a compatible rigid-fold solver, nonlinear deformation prediction, FEA, safe-travel certification or proof of restoring force**. Initial overly thin twist settings were narrowed; the supported range passes all parameter corners.

## Real browser editor

`node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs` passed in Chromium with actual picker uploads and downloaded binary STL bytes.

- PNG/JPEG and changed pixels, threshold, relief depth/mode, crop shifts and image footprint alter exported geometry versus no import.
- Both ASCII/binary STL sources integrate into the real palm landing. Explicit mm confirmation gates export; scale, height, rotation and placement change exports. Center/reset restores the earlier signature.
- Replace/remove/full reset, bad dimensions, missing/unsafe transforms, empty silhouettes, wrong type, fake image, truncated/open/nonmanifold mesh, oversized file/pixels/triangle count, bad source bounds and unsupported concavity all fail recoverably with export disabled.
- Every download matches the final-preview geometry fingerprint and displayed millimeter dimensions; each sole-part export passes mesh checks.
- All three presets and four browser Variations were downloaded and checked against mesh/mechanism checks, including imported output probes. Undo/redo, all four portable import JSON save/open round trips, sample buttons, drag/drop and colour-neutral geometry passed.
- 320/390 px phones: no horizontal overflow, real touch orbit/pinch, PNG/STL imports and downloads, collapse/expand, every tab and fixed export remain usable.
- Zero app runtime errors or external processing requests observed. Desktop and mobile screenshots visually inspected.

## Build and gallery

Per-app `npm run predeploy` passed. Gallery validation compiled its nonempty inline script using `new Function`, verified the new entry exactly once/newest with area stl, preserved all **104 earlier entries**, and rendered **105 cards** with STL Generators first. Search and rendering had zero runtime errors.

Root `npm run predeploy` packaged **105 apps, zero failures/skips**. Root deployment HTML matched the source gallery and all 105 linked app indexes existed. The archived daily_app tree was only read, never changed or built.

Build advisories: Vite externalizes Manifold's Node-only module branch and reports its >500 kB Three.js/React bundle. Bundled browser WASM is exercised by the browser tests. npm install reported zero vulnerabilities; an optional fsevents install-script warning was observed (Vite starts and builds successfully).

Machine-readable results: geometry-validation.json, browser-validation.json, extra-validation.json, mobile-sheet-validation.json and gallery-validation.json. Production/live verification is recorded separately as completed.

## Publication observed

Production-bundle browser suite passed with **23 validated downloads**, zero app runtime errors, zero remote processing requests, malformed-file recovery and phone touch tests. GitHub Pages workflow [39984227763](https://github.com/xianghui/daily-app2/actions/runs/39984227763) concluded **success** after the root deploy.

The public [Facet Drift studio](https://xianghui.github.io/daily-app2/20261024-1/) loaded successfully, converted its bundled PNG locally, and downloaded a closed-manifold positive-volume STL. The public root gallery showed Facet Drift newest. See public-validation.json for the live test's exported dimensions and results.
