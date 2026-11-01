# Plate & Node

A local React + Vite maker studio for a **three-part central-support resonance-plate experiment kit card**. Snip twelve runners, stand the tapered pedestal in its two base sockets, lower the plate onto the top tongue and glue all three seats. Hold the base and tap the free rim to compare shapes and stiffness. This is an exploratory physical kit, not an acoustic simulator or browser game.

## Run / build

```sh
npm install
npm test
npm run predeploy
npm run dev
```

Base `/daily-app2/20261101-18/`; production test server `node serve.mjs`, port 5678. Per-app `predeploy` is exactly `npm run build`, `deploy` exactly `gh-pages -d dist`. Public combined site uses the ROOT monorepo deploy flow. React, Vite, Three.js, Manifold WASM, fflate, Fredoka/Rubik fonts and all sample fixtures are locally bundled; no API, CDN, key or paid service.

## Reference-first evidence

Local candidates under `/Volumes/ExternalHD/3d_printing_apps/` were located FIRST. Read-only `keycap_generator2` README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts were inspected. Its actual three-component switch template and the fidget_fabric_generator link were parsed and measured: they are not suitable thin-sheet kit references. Their hashes, dimensions and rejected-use reasons are in `reference-measurements.json`.

A suitable licensed source was then downloaded and parsed **during this run**: **White Cat Kit Card**, Mike Kasberg, [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source license retained in REFERENCE-LICENSE.txt. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary STL, 30,616 triangles, 179.819997 × 178.019994 × 3.190000 mm. Units assumed mm because STL has no units; sheet dimensions corroborate the assumption. Source has **27 edge-adjacent components and nonwatertight defects**. It is NOT repaired, exported or bundled.

Actual mesh sections at Z=.10/.50/1.59 mm were generated and visually inspected; see `evidence/reference-sections.png`. Measured **1.60 mm sheet and 4.50 × 1.700012 mm sockets** map directly to the real generator. Default sheet and 4.50 mm socket length are retained. Proposed total fit allowance .10–.30 (default .15) differs from the measured ~.100012 mm surplus. Our .4–.6 mm bed-level runners replace the source's unusually thin .21/.22 mm levels. `reference-analysis.json` maps measured facts to deliberate changes. Reproduce with `python reference-measure.py /path/to/downloaded.stl` (numpy, trimesh, scipy/networkx, matplotlib).

This is an original parametric CSG reconstruction: base, tapered central pedestal and square/circular/octagonal plate; no source triangles or source artwork are copied. Unlike prior rotating masks, string frames or acoustic chambers, it has a free plate rim and small central support. It reuses generic Daily Object Lab import/studio/serializer infrastructure only; model geometry, assembly transforms, support checks and interface probes are new.

Concrete Keycap Studio patterns adapted: 374 px scrollable left rail, compact brand/theme header, lavender desk #e7e9f1, white panels, coral #e2557a keycap controls and pressed selections, paired sliders/numbers, collapsible sections, checkerboard cutout, large right 3D viewer, preview-first phones, saved themes and portable local designs. No irrelevant switch sockets.

## Geometry / parameters — millimeters

- Card width/height 150–190; plate span 44–66; pedestal shoulder height 24–40; central support span 8–14; sheet thickness 1.6–2.4; part spacing 3–4. Three actual-model thumbnail presets and bounded variations.
- Square, round or regular octagonal plates with a central 4.50 × (sheet+fit) socket. Base width plate span+18, depth44, clipped comfort corners. Tapered pedestal width32 at bottom; foot centers X±12. No separate hardware.
- Three tongue/socket joints. Tongue length 4.50−fit, thickness sheet; proposed TOTAL allowance .10–.30, not per side. Both foot tips finish flush at base underside; top tongue flush at plate top. Shoulders prevent downward passage; compatible adhesive is REQUIRED to retain all three joints.
- Nominal axial rim reach `(span-support)/2` is shown; it is not a calculated modal node or a force prediction. Larger/thinner sheets generally flex more, but FDM damping, anisotropy, bond and material dominate results. No fatigue, frequency, loudness or nodal-pattern performance guaranteed.
- One connected carrier, twelve accessible tabs, width .8–1.4, thickness .4–.6, all bed-level. Original unequal-width bays keep all parts inside declared envelope. Parts do not overlap. Twelve snips 1.6 mm outside part edges separate three parts plus carrier; avoid functional tongues.
- Assembled, exploded, connected-card, de-tabbed print plate and isolated-part views share exact final solids. Seating-lift slider is only an assembly explanation, not deformation or a moving joint. Export remains bed-flat; preview colors are not stored in STL.

## Local image personalization — PNG / JPEG / simple SVG

Phone/desktop file picker and drag/drop; bundled CC0 synthetic sample files and sample download links. Replace, remove, reset transformations and return to default all work. **Files never leave the browser.** Personal assets are not put in this repository.

PNG/JPEG ≤2 MB, ≤12 MP, ≤6000 px side with header checks before decoding; normalize to ≤500 px. Simple SVG ≤2000 elements, no external/active content; text must be paths. SVG rasterizes locally at256 px. A **20×20 sampled height field** engraves the fixed base's front patch: dark pixels remove .4–.6 mm, leaving ≥1 mm continuous backing. Bright holes remain unengraved backing, NOT through-holes. Threshold1–254 or grayscale relief, light/dark background, contain/cover crop, crop pan±25%; checkerboard shows actual foreground and sampled conversion grid. This is sampled 2D-to-relief, **not exact contour tracing or automatic full 3D reconstruction from a photo**. Details narrower than a grid cell may soften. Text ≤8 characters and six searchable bundled icons use this real geometry route. Raised style is intentionally unavailable, protecting fixed sheet thickness and print support.

Footprint4–7 mm, rotate±180°, X±1.5/Y±2 mm. All vertices must remain within radius6.5 mm around `(0,-14)` on the base. This keep-in zone is separate from joints and the vibrating plate. Imported assets never alter critical socket or plate dimensions.

## Local STL import — exact Boolean engraving

ASCII and binary, ≤2 MB, ≤1500 triangles, .2–250 mm per source axis. Explicit **millimeter confirmation** required because STL carries no unit metadata. Source preview, dimensions, format, triangle count, Z/Y/−Z up, proportional XY scale, independent .4–.6 mm depth, rotation, center/reset and placement. Choose up axis before attaching; changing it clears the source and requests reattachment.

Supported input contract is deliberately narrow: one closed, consistently outward-wound **convex broad-flat-bottom solid**, no overhanging XY footprint, cavities, branches, open/nonmanifold or multiple solids. File/content/count/bounds/finite coordinates/degeneracy/edge incidence/component volume/winding/self-intersection checks run before modeling. Unsupported concave meshes produce an actionable error; **no convex-hull replacement or automatic repair**. The bottom convex envelope is computed only as an input-support validation test, never as generated/exported geometry. Supported original triangles become the exact Manifold Boolean subtraction cutter, genuinely changing the base export, not an unchanged source re-export. XY integration must leave ≥1.2 mm minimum footprint width; safe-zone and backing checks block impossible transforms.

## State / exports

Generation is debounced in a Web Worker using local Manifold WASM, with generation IDs and a current-state key. Stale last-good previews are labeled; invalid edits/imports/worker failure disable export. Preview and binary STL use the exact same current final meshes. Final solids also undergo independent closed-manifold/finite/nondegenerate/positive-volume checks in the worker.

Undo/redo, six local named designs and portable JSON save/open include bounded normalized image/mesh payloads. Missing imported image payloads explicitly request reattachment; no fake restore. Local storage errors recommend JSON export. Exports: connected-card STL, each of three clean-part STLs, and Everything ZIP with all STLs plus numbered current-fit assembly notes. A clean loose-parts preview is not mislabeled as a connected card. STL has no unit or color metadata; print at100% mm scale. No 3MF claim.

## Printing and assembly

See ASSEMBLY.txt and in-app numbered instructions. PLA/PETG, .16–.20 mm layers, three walls, support-free bed-flat orientation intended. Trial-print base/pedestal as a full-size fit coupon; total clearance depends on printer, material and first layer. Snip twelve runners, fit pedestal feet, lower plate, glue all three seats, cure, hold base and tap gently. Do not deliberately bend far or load the stand.

Optional exploratory nodal patterns require an external violin bow or low-power exciter and a little fine dry sand; none included. FDM polymer damping may prevent a useful pattern. Hardware-free alternative is simply tapping and listening/feeling. No acoustic mode/frequency simulation. **No physical print, assembly, vibration, nodal-pattern, glue strength, material or fatigue test performed.**

## Reproducible validation

`npm test`: defaults, all presets and silhouettes, each parameter endpoint, combined extrema, synthetic height fields and both imported-STL formats including image/STL-derived extrema. Independently parses actual float32 binary STL, welds at1e-5 mm, requires finite nondegenerate triangles, normalized normals consistent with winding, two opposite-directed faces per edge and positive volume per component; checks millimeter bounds and bed alignment. Tests all intended solids and loose print plate separately.

Kernel checks: no assembled pair collisions, 63 insertion-path tests, three actual socket/tongue probes, shoulder stop intersections, flush tips, safe snip paths, twelve-cut release to four components, card containment and upper slice support footprint. These are geometric checks, not proofs of stiffness or sound.

`browser-test.cjs`, `studio-test.cjs`, `icons-drop-test.cjs`, `orientation-test.cjs`, `rapid-test.cjs`, `personalization-check.mjs`: real production file-picker PNG/JPEG/SVG/ASCII/binary imports, actual STL/ZIP downloads parsed independently, exact preview/export/state signatures, content/threshold/depth/scale/placement changes, replace/remove/reset, malformed/empty/excessive/unsupported sources, invalid transform recovery, all presets/icons/text, actual hole probes, state round trips, stale/failed worker gates, saved theme, focus, collapsible sections, desktop layout and 320/390 px touch orbit/pinch with reachable exports. Reports/screenshots beside scripts. Gallery inline scripts compiled with new Function, old entries compared and actual root rendering checked before publication.

Dependencies retain their licenses: Manifold Apache-2.0, fflate MIT, Three.js MIT, Fontsource fonts OFL; bundled synthetic samples CC0. Third-party reference source is attributed above and no raw third-party mesh redistributed.
