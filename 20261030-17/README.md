# Loop & Land — Ring-catching Kit-card Studio

A reference-grounded **three-piece physical kit-card generator**, not a browser game. Snip twelve runners to release a paddle, shouldered catch blade and pierced ring. Bond the blade into the paddle, tether the ring with soft cord, gently guide its opening over the tip and lift off again. Paddle shape, ring size, blade height, cord eyes, sheet thickness, fitted interface, runners and engraving are real geometry.

## Reference-first evidence and attribution

Searched local `/Volumes/ExternalHD/3d_printing_apps/` first. Read the keycap and fabric project READMEs and parsed their actual STL candidates. The switch cavity/stem and 8 mm interlocking fabric link are unsuitable sheet-card interfaces; their hashes/dimensions/component counts and rejection reasons are recorded in `reference-measurements.json`. All source trees remained read-only.

Downloaded and inspected **White Cat Kit Card**, Mike Kasberg: [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. See retained source README/license. Raw source mesh and ship outlines are NOT redistributed.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL: 30,616 triangles; **179.820 × 178.020 × 3.190 mm**, **27 edge-adjacent components**, nonwatertight. Source defects are documented, not repaired by assertion.
- Fresh mesh cross-sections Z=.10/.50/1.59 mm: `evidence/reference-sections.png`. Measured sheet planes 0/1.6 mm; four socket loops **4.5 × 1.700012 mm**; carrier features .21/.22 mm. Units assumed millimeters; STL has no unit metadata.
- The new blade tongue preserves **1.6 mm** thickness. Socket `(tongueWidth + total allowance) × (1.6 + total allowance)` reproduces source 4.5 × 1.7 at 4.4/.10. Default allowance .15 mm is proposed, not measured or universal.
- New original ring/paddle/blade outlines, one shoulder-seated joint, cord eyes, safe cut locations and card rails replace the source assembly. Body thickness 2–2.8 and stronger .4–.6 mm runners are deliberate redesigns. No hull or source outline substitution.

`reference-inspect.py` remeasures `/tmp/loop-land-reference.stl` using trimesh/numpy/matplotlib; `reference-analysis.json` maps measurements to parameters. Neither source inspection nor computational assembly checks establish physical print performance.

### Maker-studio interaction reference

Read-only inspection of `keycap_generator2`: README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Applied concrete patterns: 374 px left control panel; sticky compact brand/theme header; labelled collapsible sections; slider/numeric mm pairs; raised tactile buttons and selected down states; #e7e9f1 desk, white panels, #1f2233 ink, #e2557a coral; bundled Fredoka/Rubik; saved dark theme; checkerboard cutout; original STL preview with explicit units; worker status/current-result export gating; named designs. Phones put preview/feedback/export before stacked controls. No source Git history or dependency tree copied. Reused original daily-app studio/import/serializer helpers, with new mechanism, assembly transforms, parts and tests—not a reskin of the mirror-tunnel geometry.

## Run and dependencies

```sh
npm install
npm run dev
npm test
node hole-check.mjs
node import-extremes.mjs
npm run predeploy
node serve-production.cjs
# separate shell, production base path:
node browser-test.cjs
node studio-test.cjs
node axis-test.cjs
node preview-test.cjs
```

React/Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik; Playwright for tests. Runtime/font/worker/WASM assets bundled locally; no API, key, paid service, remote import or CDN. Libraries retain MIT/Apache-2.0 notices; fonts SIL OFL 1.1. Six original bundled SVG icons and synthetic samples. App base `/daily-app2/20261030-17/`, production test port 5497. Per-app `predeploy: npm run build`, `deploy: gh-pages -d dist`; public site uses ROOT combined deploy flow.

## Parameters, fit and assembly

All lengths **millimeters**; rotations degrees. Actual selected STL bounds shown in UI.

| Parameter | Supported range |
|---|---|
| Card width × height | 180–220 × 110–135 |
| Ring outside diameter / bore | 30–38 / outside minus 10 |
| Paddle length | 64–84 |
| Catch blade height | 16–26 |
| Cord eye diameter | 2.2–3 |
| Panel thickness | 2–2.8 |
| Tongue width / thickness | 4.4–6 / fixed measured 1.6 |
| Socket total allowance | .10–.35 |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |

Three actual model-thumbnail presets: Pocket Loop, Studio Catch, Broad Landing. Three paddle silhouettes (capsule, octagon, tapered), bounded variations, reset, 35-state undo/redo, six named local saves and JSON save/open. Imports travel as bounded portable payloads, not inaccessible file paths.

Default connected card **190 × 120 × 2.4**; three full-height bays, outer frame, two internal rails, twelve true bed-flat runners. Twelve safe cuts produce **four components: three parts plus carrier**. De-tabbed exports contain no runners. Impossible dimensions/unsafe engraving block exports.

Paddle nose socket at X=0, Y=paddleLength−12. Blade is printed flat, tongue Z=0..1.6, then rotated into a vertical plane; its shoulders seat at world Z=panelThickness. Tongue is panelThickness long, flush with paddle underside. Socket allowance is total, not per side; adhesive required for ONE fixed joint after calibration. No untested friction retention claim. Ring bore 20–28 clears the blade's 14 mm wide / 2–2.8 mm thick envelope; minimum radial envelope allowance >2.8 mm. Rounded/chamfered entry tip narrows to 2 mm. Cord eye rim ≥1 mm.

Required consumables: **soft cord 0.6–1.0 mm diameter, 150–220 mm finished tether; suitable adhesive**. Tie through heel and ring-rim eyes; knots must exceed bores. No bearing, fastener, magnet or automatic motion. Ring deliberately lifts off; retention is the tied tether, not a captive joint. The assembled ring floats at an illustrative height and slack cord route is **estimated preview-only**, not a dynamic string/catching simulation.

Print flat, PLA/PETG, .16–.20 mm layers, three perimeters; no supports intended. Calibrate tongue against socket before the full card. Trim nubs away from working surfaces; glue only the seated tongue. Detailed numbered directions are in-app and in ZIP `ASSEMBLY.txt`. No physical print, catching, knot-strength or adhesive test has been performed.

## Image, SVG, text and icon personalization

Picker on phones/desktops and drag/drop: **PNG/JPEG/simple SVG**. Try bundled `mark.png`, `waves.jpg`, `ring.svg`. File/content/signature limits: 16 bytes–2 MB; image ≤12 MP, ≤6000 px side; normalized to ≤500 px. SVG ≤2000 simple vector elements, rasterized to 256 px; active/external resources, text and effects rejected with flattening guidance.

Documented conversion: light/dark background selection, fit/cover crop, ±25% pan → **20 × 20 luminance-height grid** → threshold 1–254 sampled silhouette or grayscale relief → closed triangulated cutting tool → genuine Boolean engraving in the solid paddle. This is **2D-to-relief, not full 3D reconstruction or exact outline tracing**. Checkerboard shows actual foreground grid. Bright holes remain unengraved with continuous solid backing; direct solid probes verify them. Resolution/nozzle limits fine letters.

Footprint 4–7; depth .4–.6; rotation ±180°; X±1.5/Y±2. Protected circular landing radius 6.5 centered X=0/Y=24, remote from heel eye and nose joint; backing ≥1.4. Empty foreground and unsafe transforms disable export. Eight-character text and six searchable icons use the same real geometry path. Engraved only: raised art intentionally unsupported to retain smooth paddle. Replace/remove/reset return to defaults. STL does not carry preview colours.

## Imported STL integration

**Binary and ASCII STL**, 16 bytes–2 MB, ≤1500 triangles, each source axis .2–250. Original synthetic wedge/gem fixtures. Show source dimensions/count/format and preview; **explicit millimeter confirmation**. Z, Y, −Z up; changing axis clears source and requests reattachment. XY proportional scale to 4–7 footprint, independent Z depth .4–.6, rotate, position, center/reset. Original input triangles become an **exact Boolean cavity in the paddle**, not an unchanged re-export, texture or hull.

Supported contract: **one closed outward-wound convex solid with broad flat bottom and no unsupported overhang**. Verify binary length/ASCII facets, finite values, degenerate faces, welded 1e−5 edges/opposite winding, positive volume, one component, self-intersection, convexity, support and dimensions. Concave, hollow, disconnected, open, nonmanifold and unsupported shapes are explicitly rejected with actionable errors; no arbitrary repair claim. A footprint hull only verifies support/containment, never replaces input geometry. Same mesh/assembly tests apply to imported results.

## Local files, worker and exports

Files processed only in browser, never uploaded or committed. Portable JSON ≤2 MB contains normalized image/original indexed source, revalidated on open. Missing image payload explicitly requests reattachment. Named saves bounded to six. Only synthetic fixtures are bundled.

Debounced worker owns WASM/CSG; bounded resolution/complexity; request IDs and exact current-state keys prevent stale exports. Invalid input/import/error/worker failure disables every STL/ZIP action. A last-good preview is labelled and cannot export silently. Preview and current binary STL share identical current valid geometry and signature.

Connected card, three per-part binary STLs and **Everything ZIP** containing four real STLs + numbered instructions/current-fit table. Card/clean-parts/assembled/exploded/isolated views share the same solids; exports are bed-flat, not assembled intersecting shells. No 3MF or colour-in-STL claims.

## Verification and limits

`validate.mjs`: 32 built-in cases (presets, silhouettes, coordinated and independent extrema), eight image/STL cases; `import-extremes.mjs` adds six. Validate actual float32 STL bytes independently: nonempty exact length, finite vertices, nondegenerate faces, unit winding-consistent normals, mm dimensions, welded edges exactly two opposite faces, positive volume per component, Euler characteristic and bed alignment. Test each part separately.

Independent CSG checks: all assembled/flat part pairs, full blade insertion, actual source-fit socket gauge, shoulder stop, ring passage through blade height along a leveling descent path at representative tilts/offsets (including paddle clearance), both cord-eye bores, eye/backing wall floors, twelve non-damaging snips producing four parts, and sampled support footprints. Numerics use 1e−5 mm welding and .00002 mm support-footprint expansion solely for float32 noise.

Production-browser scripts upload PNG/JPEG/ASCII/binary through real file pickers, download actual STLs and compare current preview signature and independently regenerated JSON model. Change image pixels/threshold/depth/crop and mesh scale/rotation/position; verify replace/remove/reset. Reject malformed/truncated/oversized/open/nonmanifold/concave and empty sources. Test all presets, silhouettes, text/icon/SVG, image holes, saves/JSON, undo/redo, all views, worker failure/recovery, per-part/ZIP contents, saved theme, focus/collapses, reduced motion, 374 px desktop rail and 320/390 px phone preview-first, no overflow, touch orbit/pinch and reachable exports. Reports/screenshots show performed checks, not implied physical results.

**Computational geometry, fit-path and print-orientation validation is not physical print, catching, fatigue, knot or adhesive-strength testing.** Calibrate for the actual printer/material; no universal fit promise.
