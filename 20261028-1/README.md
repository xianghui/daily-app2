# Glide & Slot — aircraft display kit-card studio

A local React/Vite maker studio that builds a **genuine connected four-part kit card**: a personalized main wing, upright fuselage, tailplane and socketed display stand. Snip sixteen accessible tabs, seat the fuselage in the stand, and slide both flying surfaces through their respective slots. This is a shelf display model, **not an aerodynamic flying toy**. It is distinct from the previous sliding-lid box, bobbin, chair and other gallery assemblies.

## Run and reproduce

Node 22.12+; `npm ci`, `npm run dev`. `npm run predeploy` builds the production bundle; per-app `deploy` is `gh-pages -d dist`, but public monorepo publication uses the ROOT predeploy/deploy flow. Base `/daily-app2/20261028-1/`.

`npm test` runs independent exported-mesh and assembly tests. `node serve-production.cjs` serves the production build at http://127.0.0.1:5431/daily-app2/20261028-1/ . Run `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node studio-layout-test.cjs`, `node resilience-test.cjs`, `node portable-errors-test.cjs`, and `node stale-import-test.cjs`. Test fixtures are synthetic CC0 files in `public/samples/`; no personal uploads are committed.

## Reference-first evidence and attribution

Searched `/Volumes/ExternalHD/3d_printing_apps/` before choosing geometry. Local switch/clicker STL sockets and slider/fabric link references are not sheet-kit construction references. Used Mike Kasberg's **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)** (verified repository LICENSE, README and kit_frame.scad).

The actual downloaded binary STL was parsed again for this run, not inferred from a listing or old description. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820 × 178.020 × 3.190 mm; two edge-connected components after 0.00001 mm welding. STL has no units: mm is an explicit assumption corroborated by the source's 1.6 mm sheet specification. The mesh has coplanar/nonmanifold artifacts and is used **only as a design reference**, never repaired or re-exported. No raw source STL is bundled.

Measured 1.6 mm sheet and 1.6 mm perimeter rail, plus thin 0.21/0.22 mm bridge levels, inform our sheet/carrier/sacrificial-tab construction. `reference-analysis.json` records exact bounds, hash, component and section data, measured Z histogram and parameter mapping. `reference-analysis.py` reproduces analysis from a separately downloaded STL; `reference-sections.svg` shows actual Z=0.1/0.5/1.59 mm mesh sections, revealing carrier and low-Z connecting wires. Source README and frame code corroborate, rather than replace, mesh inspection.

**Adaptation:** four entirely new aircraft parts; 24 mm and 12 mm enclosed through-slots; 8 mm stand tongue; four-row carrier. New 2.4 mm frame and .4–.6 mm tabs deliberately strengthen the reference's smaller bridges. New slip-fit allowances are proposed FDM starting values, **not measured source interface dimensions**. No switch sockets or source aircraft parts are asserted. All joints remain separately printable solids after tab removal.

Visual/interaction reference inspected read-only: `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/imageTrace.ts`, `src/geometry/stl.ts`, `src/worker.ts`, `src/export.ts`. Concrete patterns used: 374 px left maker rail, sticky compact brand/theme header, collapsible grouped controls, paired mm range/number inputs, raised key-like selection buttons, checkerboard cutout/source previews, editable imported solid placement, large right 3D stage, status/measurements below and reachable exports. Phone becomes preview-first, then export and stacked controls. Dependencies were installed in this app, not copied from the reference.

## Parametric model (all lengths millimeters)

| Parameter | Supported range |
| --- | --- |
| Card width / height | 120–160 / 180–210 |
| Wingspan / fuselage length / height | 70–90 / 72–90 / 18–22 |
| Sheet thickness | 1.6–2.4; default 1.6 |
| TOTAL joint allowance | .15–.45; default .30 |
| Additional row spacing | 0–3 |
| Breakaway width / thickness | .8–1.4 / .4–.6 |
| Wing dimples | 0–.4 deep |

Three real rendered-model presets and three wing/stand silhouettes. Unsupported combinations (e.g. crowded rows) are blocked, not auto-expanded outside the card. The carrier is solid-unioned with all sixteen real tabs and every part, giving exactly one component. Tests make sixteen virtual cuts and require exactly five components (carrier + four parts). Tabs are on exterior nonfunctional edges, with cut lines 2 mm outside each part; trim remaining nubs after release. Keep all parts within the declared card envelope.

Wing and tail slot heights = sheet + total allowance, chord opening = 24 + allowance and 12 + allowance. Stand socket = (8 + allowance) × (sheet + allowance). The mark lives at 0.3 × wingspan on the right wing within a 6.5 mm-radius protected area. It cannot obstruct the interfaces or insertion path. Raised artwork does not go through the fuselage: feed the undecorated left tip from the right, leaving decoration outboard.

## Image workflow — actual geometry, not a texture

PNG/JPEG and constrained SVG, ≤2 MB. PNG/JPEG headers checked **before decode**: ≤12 MP, ≤6000 px per side. Normalize locally to ≤500 px; sample a 20 × 20 grayscale grid, with fit/cover crop, ±25% pan and light/transparent background removal or inverted dark background. Threshold 1–254 creates silhouette relief; grayscale creates height relief .4–3 mm. Triangulated height surface, closed sides/bottom, solid-unioned into the real wing well. Engraving subtracts .4–.6 mm and preserves ≥.8 mm floor at the minimum sheet thickness. Scale 4–7 mm footprint, rotate ±180°, place X ±1.5/Y ±2 mm inside the checked safe zone. Clear source image and actual sampled cutout on a checkerboard.

This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photograph**. White/transparent holes remain unraised/unengraved on the continuous backing; a bounded sampled height field has sloped one-cell transitions, not exact traced vector edges or cut-through holes. Ring-hole tests probe the actual final boolean solid. Simple SVG paths/shapes rasterize locally (≤2000 elements); active/external resources, text, effects and references are rejected. Bundled searchable original icons and text use this same real mesh path. Preview colors are not stored in STL.

## STL workflow — integrate the original mesh

ASCII and binary `.stl`, ≤2 MB, ≤1500 triangles, each oriented axis .2–250 mm. Source dimensions, encoding and triangle count shown; user must explicitly confirm millimeter coordinates because STL carries no units. Choose Z up, Y up (+90° X) or −Z up before attaching; changing this requests reattachment. The source and final model have separate interactive previews.

Finite coordinates, nonzero faces/volume, connectedness, welded edge count/opposite winding and triangle self-intersection checked locally. Supported contract: **one closed, outward-wound convex solid, broad flat bottom ≥25% of footprint, no overhangs, cavities or branches**. Concave/nonmanifold/unsupported files are rejected with guidance, never silently convex-hulled or repaired. The convexity test does NOT replace the source. Original accepted triangles are independently XY-scaled to a 4–7 mm footprint and Z-scaled to .6–3 mm height, rotated, placed, embedded .15 mm and genuinely boolean-unioned into the wing. A minimum 1.2 mm transformed XY feature extent is enforced. Replace/remove/center/reset and built-in defaults work.

## Responsiveness, privacy and portable designs

All modeling runs in a bounded Manifold WASM Web Worker. 100 ms debounce, generation ids and a complete current-state key (including import conversion controls) prevent stale export. Worker failure and invalid edits disable every geometry export; last-good previews are explicitly identified. Three.js orbit/pinch/zoom/fit, isolated parts, actual assembled/exploded geometry, connected card and de-tabbed layout. Wing insertion slider is a **preview-only placement**, never alters the printable card or per-part exports.

Undo/redo, up to six local named designs, portable JSON save/open with bounded normalized PNG or validated original mesh payload. Missing image payloads explicitly request reattachment; malformed saved assets fail recoverably. User files stay local: no uploads, APIs, CDN dependencies or personal files in the repository. Bundled local Fredoka/Rubik fonts (SIL OFL); React/Vite, Three.js, manifold-3d (Apache 2.0), fflate, gh-pages; Playwright for tests. Bundled icons are original simple SVG paths. Light/dark theme saved locally, visible focus, generous touch targets and reduced-motion CSS.

## Exports, calibration and assembly

Binary STL for the connected card and each of four parts; Everything ZIP includes all five STLs and numbered `ASSEMBLY.txt`. Do not print both the card and duplicate loose parts. Every per-part file is at Z=0 in true printable orientation, not assembled overlap. Live X/Y/Z measurements describe the selected export. No fake 3MF or colors-in-STL claims.

PLA/PETG, .4 mm nozzle, .2 mm layers, ≥3 walls, supports not intended. The upright fuselage prints flat; its enclosed slots are through-holes in the bed plane, so no suspended slot roof is printed. Start by printing wing and fuselage loose; confirm fit and first-layer edge expansion. Increase total allowance by .05 mm if tight; printer/material settings differ. All three joints are **removable slip fits**, not captive. Seat the fuselage into the stand, pass wing left tip from the right and center, insert tailplane, optionally add tiny glue dots after dry fitting. No hardware needed. Do not lift an unglued assembly by a wing. Adult cutter/small-part handling.

## Validation and limitations

`geometry-validation.json` and browser reports record performed checks, not physical evidence. Independent binary-STL checks: exact byte count, finite coordinates, nondegenerate triangles, stored normal/winding consistency, mm bounds, 1e-5 mm welded edge incidence (two opposite faces), component positive volumes and Euler characteristic. Every default/preset/extreme/import part and connected card checked. Kernel intersections verify assembled pairs, stand insertion and complete wing/tail insertion sampled paths, restraints, loose part separation and virtual tab release. Protected image/STL geometry tested with the same checks, not download success alone.

Production browser tests use real file pickers and actual downloaded STL bytes; match them against preview fingerprint and JSON-regenerated geometry. PNG/JPEG/ASCII/binary imports, changed pixels, threshold, depth, transforms, SVG/text/icons, holes, malformed/truncated/open/nonmanifold/excessive inputs, worker abort/reload, undo/redo, theme, portable payloads, local designs, ZIP and per-part exports. Touch-enabled 320/390 px checks include orbit/pinch, no overflow, preview-first and reachable export. See `VALIDATION.md` for final observed outcomes.

**No physical print, fit, glue strength, material durability, load-bearing, flight or fatigue testing performed.** Computational watertightness/clearance does not establish physical performance.
