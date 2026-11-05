# Tau & Array

A **seven-part, bed-flat kit card** for a geometric-progression array sculpture: two longitudinal rails and five graduated transverse bars, joined with ten complementary open half-laps. Snip 28 real runners, stand the rails with their notches up, and lower each bar with its notches down. No hardware or glue is required for a gentle tabletop display. Joints are lift-out/gravity seated, **not positively retained**; adhesive is optional for a permanent display.

This is a physical mathematical teaching assembly, **not a functioning radio antenna**. Plastic is nonconductive. No RF, electrical, strength or physical-print performance is claimed.

## Reference-first evidence

Read-only local candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` (three MX-specific components, rejected as unrelated) and `fidget_fabric_generator/public/templates/diamond-link.stl` (8 mm tall interlocking link, not a planar kit reference). Relevant project READMEs were inspected. The selected sheet reference is **White Cat Kit Card**, Mike Kasberg, [project](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Attribution/license and upstream README are included; the raw third-party STL is **not redistributed**.

The actual downloaded binary mesh was parsed before selecting final geometry. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; assumed mm bounds **179.820 × 178.020 × 3.190**. STL has no unit metadata. Edge-adjacent splitting gives 27 components including degenerate/zero-volume pseudo-components. The full source has nonmanifold anomalies: inspection is **not** a claim that it is printable, and no source triangles are passed through or repaired.

`reference-analysis.py`, `reference-analysis.json`, and `evidence/reference-sections.png` record fresh parsing and actual sections at Z=.100, .215, 1.590 mm. Measured construction: **1.60 mm sheet**, **4.50 × 1.70 mm receivers**, runner tops about **.21–.22 mm**. Measurements are distinguished from this original redesign:

- Keep 1.60 mm sheet default and .10 mm total receiving allowance.
- Replace bounded 4.50 mm source sockets with **open complementary 9 mm half-laps** in 18 mm high panels. An independently proposed **.15 mm vertical relief** prevents lap-floor interference.
- Strengthen runners to .4–.6 mm. Four accessible bed-aligned runners hold every part to a real connected frame.
- Original bar lengths **Lᵢ = L₀ τⁱ** and station increments **dᵢ = pitch τⁱ** change the assembly's real graded structure. This is not the spaceship shape or a re-export of its mesh.
- Unlike previous socketed-upright kits, this has no base/pocket/adhesive dependency: all seven structural parts cross-lap into an open lattice, and assembly/removal is checked through their straight insertion paths.

Visual/interaction reference `keycap_generator2` README, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts and geometry/stl.ts were read without editing the project or copying its history/dependency tree. Concrete patterns: 374 px left studio, paired numeric/range inputs, collapsible sections, raised key-like controls, lavender desk/white panels/coral selections, local fonts, saved dark theme, checkerboard image conversion, source-aware import editor, worker-owned geometry, and current-state export gating. Shared original Daily Object Lab studio/import/test infrastructure was adapted; the array construction and fit validation are specific to this new kit.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node mobile-test.cjs
```

Production base `/daily-app2/20261105-17/`. Standalone production test server: `http://127.0.0.1:5967/daily-app2/20261105-17/`. Publishing uses the **parent monorepo** deployment, not the per-app deploy script.

Locally bundled dependencies: React/Vite, Three.js and OrbitControls, Manifold WASM (Apache-2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL). No remote API, CDN import, keys, payments or server geometry processing. Manifold lives in a Web Worker. Debounced request ids, import versions and exact input keys prevent stale builds or asynchronous images overwriting current settings.

## Parameters / mm

| Control | Supported range | Actual effect |
|---|---|---|
| Card X / Y | 220–280 / 180–260 | Connected carrier envelope |
| Longest bar L₀ | 64–84 | First crossbar's true length |
| Ratio τ | .86–.94, dimensionless | Five bar lengths AND four station intervals |
| Initial station pitch | 14–18 | First-to-second centre spacing |
| Rail midplane gap | 18–26 | Actual paired crossbar lap stations |
| Panel sheet | 1.6–2.4 | Every part's thickness |
| Total lap clearance | .10–.30 | Receiver width = sheet + allowance |
| Part spacing | 3–5 | Frame bays and snip access |
| Runner width / height | .8–1.2 / .4–.6 | Real removable connectors |

Five crossbars are intentional and fixed; 18 mm panel height, complementary 9 mm half-laps and .15 mm vertical relief. Shortest-bar outer webs must remain ≥2.4 mm. Presets use real worker-rendered model thumbnails. Rounded, clipped and scalloped end silhouettes change exported solids. Impossible parameters, unsafe import transforms and packing errors disable export.

## Image → actual geometry

Desktop/phone file picker and drag/drop: **PNG, JPEG and simple SVG**, 16 bytes–2 MB. Image header checked before decode; ≤12 MP, ≤6,000 px per side. Normalize to ≤500 px longest side; SVG is restricted to simple shapes, with scripts, links, references/effects/text rejected, then locally rasterized at 256 px.

Contain/cover, ±25% crop shift, light/dark background, threshold 1–254, threshold/grayscale mode and .4–.6 mm depth change a **20×20 sampled closed height solid**. Threshold uses dark samples; grayscale height = depth × (1 − luminance/255). Alpha composites onto the selected background. That exact solid is Boolean-subtracted into the first rail tail. Bright interior holes keep the original backing (verified using the bundled ring SVG). Interpolation softens sampled edges; this is not exact vector contour tracing. Checkerboard displays the actual sampled cutout. This is **2D-to-relief, not full 3D reconstruction from a photo**. Empty silhouettes produce a recoverable error, never a substitute shape.

Text (up to 8 characters) and six bundled searchable original SVG marks use the same local conversion. Engraving-only is deliberate: .4–.6 mm removal leaves ≥1.0 mm continuous backing at the thinnest sheet. No fake raised-mode control is offered.

## STL → actual geometry

**ASCII and binary STL** are parsed in the worker: ≤2 MB, ≤1,500 triangles, .2–250 mm per axis. Supported contract: **one closed, outward-wound, convex solid with broad flat bed contact and supported XY footprint**. Concave, hollow, disconnected, open/nonmanifold, inverted, degenerate, self-intersecting and unsupported overhanging meshes are explicitly rejected. No automatic repair is claimed. Bed-contact hull calculations validate geometry only; the original triangles are used as the Boolean cutter, **never replaced by a hull**.

Select Z/Y/−Z up before attachment, inspect source dimensions and 3D preview, explicitly confirm millimeters (STL has no metadata). XY footprint 4–7 mm scales uniformly; Z engraving .4–.6 mm is independent. Scale, rotation ±180°, X ±1.5 mm and Y ±2 mm placement change the actual Boolean subtraction in the rail tail. A 5.8 mm circular keep-in region around **original rail coordinates (−9, 9)** avoids all lap interfaces/edges. Transforms that leave this region are blocked. Replace/remove, center/reset and built-in defaults work without a page reload.

## Privacy, persistence and export

Personal input stays on the device in browser memory/localStorage; nothing is uploaded or committed. Only synthetic sample fixtures are bundled, with attribution. Portable JSON and up to six named local designs include bounded normalized images or validated mesh arrays. Design JSON ≤2 MB, portable image ≤1.8 million characters / 250k pixels. Missing image payloads explicitly request reattachment; files are never pretended restored. Undo/redo includes settings and imports.

Assembled, exploded, connected flat card, loose print plate and each isolated part share the current generated solids. Bar lift/explosion are **preview-only explanatory positioning**, not printable motion. Touch orbit/pinch, fit/top/front/zoom work on phones and desktops. Mobile shows viewer/toolbars first, then dimensions/warnings/export, then stacked controls. Dark theme persists. Preview colours do not imply STL colours.

One-click binary STL, per-part STL and Everything ZIP. ZIP contains the real connected carrier, seven clean part STLs, portable JSON and numbered assembly notes. Print card **or** clean parts. All exports use bed-flat Z=0 orientation. Exact current-state gating blocks export after invalid edits rather than silently using a last-good mesh. The UI mesh signature is compared with downloaded bytes in tests.

## Printing / assembly

PLA/PETG, .4 mm nozzle, .16–.20 mm layers, support-free intended. Print a rail and the shortest bar as a **full-size fit coupon** first; .10–.30 mm clearance is printer/material dependent, never universal. Snip 28 runners, deburr scars, stand rail notches up, then lower bars slots down, longest-to-shortest. Bottom edges all rest on the tabletop. Joints permit vertical removal; no positive capture. Optional adhesive only for permanent display. No external hardware, consumables or conductive material needed. Keep small parts away from unsupervised children.

## Validation

See `VALIDATION.md` and JSON reports. Independent exported-binary checks verify triangle byte count, finite coordinates, nondegenerate triangles, stored normal/winding agreement, welded opposite-directed two-face edge incidence, positive volume **per component**, dimensions and bed alignment. Every part, card and float32-translated loose plate is checked. Manifold intersections verify no assembly/plate collisions, 105 bar insertion samples, ten clear joint apertures in both clean parts and connected card, carrier envelope, supported layer footprints, 28-cut release into carrier + exactly seven unharmed parts, and progression dimensions. Defaults, all presets/shapes, parameter corners and image/STL-derived outputs are exercised.

Real production-browser file pickers/downloads test PNG, JPEG, ASCII/binary STL, changed pixels/threshold/depth, import scale/rotation/placement, unsupported/malformed files, reset/replace/remove, unit confirmation, persistence/JSON, icons/SVG holes, stale builds/imports, worker abort/reload, ZIP contents, desktop and touch phone layouts. These are computational and UX checks only: **no physical prints, fit, strength, friction, stability, durability or RF tests were performed**.
