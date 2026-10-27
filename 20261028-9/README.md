# Roll & Carry

An original eight-part, hardware-free **rolling handcart kit card**, built with React + Vite. Snip 32 real low breakaway tabs, seat the handled rails over the marked deck, insert the stationary flat axle, slide on both wheels, then lower two T keeper keys. The two circular-bore wheels turn independently around the rectangular axle. Keys prevent axial wheel escape while installed, but can lift out: keep the model upright. Not a toy, load carrier, precision bearing or physically tested product.

## Reference-first evidence

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. Their clicker socket, slider and fabric-link interfaces do not provide appropriate flat-card construction. The public fallback is Mike Kasberg's **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)). Repository README, LICENSE and `kit_frame.scad` were inspected. No source STL is bundled or redistributed.

The downloaded 30,616-triangle binary STL was parsed in this run: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, bounds 179.820 × 178.020 × 3.190 mm (assumed mm, corroborated by OpenSCAD). Edge-weld adjacency finds two components and nonmanifold/coplanar artifacts: this mesh is a **design reference only**, not a repaired base. See `reference-analysis.json`, reproducible `reference-analysis.py`, and actual mesh sections at Z=0.1, 0.5 and 1.59 mm in `reference-sections.svg`/PNG.

Measured 1.6 mm sheet thickness maps to the 1.6 mm default. Measured 1.6 mm perimeter is reinforced to 2.4 mm; source bridges at 0.21/0.22 mm are redesigned as 0.4–0.6 mm low tabs, 0.8–1.4 mm wide. Five shelf rows and supporting runners keep all eight parts in one connected bed-flat card. The cart deck, handled rails, axle, wheel bores, keeper seats and all fit allowances are **new designs**, not source-measured interfaces or a reskinned previous kit.

The read-only visual reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` informed concrete studio patterns: 374 px left editor with sticky compact brand/theme header; collapsible sections; paired slider/mm fields; tactile raised selection buttons; locally bundled Fredoka/Rubik; lavender desk, white panels, pink accents; large right Three.js viewer; source previews; safe-zone imports; real worker build status; current-result export gating; named designs and portable JSON. Its README, styles, App, Viewer, worker, STL/export and image-conversion modules were inspected, not edited or deployed. Shared local studio infrastructure was adapted from an earlier daily app; cart geometry and its checks are new.

## Local development

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node studio-layout-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node hole-test.cjs
```

Production tests use `http://127.0.0.1:5439/daily-app2/20261028-9/`. Per-app `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist`. Public monorepo publication uses **root** `npm run predeploy` then **root** `npm run deploy`, never the per-app deploy command. Vite base is `/daily-app2/20261028-9/`.

## Parametric ranges

All physical dimensions are millimeters. Three real presets and three deck silhouettes alter printable solids. Card width 160–190; card height 230–280; deck length 48–64; deck width 28–40; wheel radius 14–18; sheet thickness 1.6–2.4; total mortise allowance 0.15–0.45; radial rolling allowance 0.25–0.5; row shift 0–1; tab width 0.8–1.4; tab height 0.4–0.6; deck dimples 0–0.4. Impossible/nonfinite settings disable export. Card Z includes the real raised central mark, not just sheet thickness. Final export X/Y/Z are shown explicitly.

Deck tongues are 8 mm wide. Rail slots add total allowance in both dimensions. The axle is 6 mm × sheet thickness, so the circular wheel bore radius is `hypot(6, sheet)/2 + radialAllowance`. This guarantees rotational clearance around axle corners, with intentional small play. Axle ends have `(sheet + allowance) × (2 + allowance)` keeper mortises; T keys have 2 mm necks and 6 × 4 mm heads. Installed keys block outward axial escape; rail faces block inward escape. They are removable friction seats, **not snaps or guaranteed press fits**. Deck joints are supported by their shoulders, but no holding-force or carrying capacity is claimed.

## Image → geometry

PNG and JPEG content is header-validated before decoding: ≤2 MB, ≤12 megapixels, ≤6000 px side. Files normalize locally to ≤500 px side for bounded portable saves. Fit/cover, crop shifts ±25%, light-background removal or dark inversion feed a **20 × 20 grayscale grid**. Threshold 1–254 or grayscale maps heights to 0.4–3 mm relief; raised/engraved, 4–7 mm footprint, rotation ±180° and X/Y offsets ±1.5/±2 mm change real geometry. Engraving is capped at 0.6 mm, leaving at least 0.8 mm backing at minimum sheet thickness. Artwork lives in a 6.5 mm-radius central safe zone isolated from tongues, wheels and axle.

The height surface is triangulated with closed sides and backing, then genuinely unioned/subtracted using Manifold. Bright/transparent holes remain unraised or unengraved inside the continuous deck—not through-holes and not exact outline tracing. Checkerboard cutout shows the actual sampled mask. This is **2D-to-relief conversion, not full 3D reconstruction from a photo**. Simple SVG shapes/paths are locally rasterized at 256 px into the same pipeline, preserving sampled holes. External resources/scripts/effects/text are rejected; maximum 2,000 elements. Bundled text and six searchable original SVG icons use this same exported relief workflow.

## STL → geometry

ASCII and binary `.stl`, 40 bytes–2 MB, ≤1,500 triangles, 0.2–250 mm per axis. STL has **no unit metadata**: the user must explicitly confirm millimeters. Source dimensions, topology and a separate source preview are shown. Select Z-up, Y-up or inverted Z before upload; changing orientation requests reattachment. XY scales proportionally into a 4–7 mm footprint; Z scales separately to 0.6–3 mm. Rotation, placement and reset are explicit.

For a bounded support-free integration contract, inputs must be **one outward-wound, watertight convex solid with broad flat-bottom contact and no overhang beyond that base**. Open/nonmanifold, concave/cavity, disconnected, intersecting, thin or unsupported geometry is rejected with guidance. This is a deliberate supported subset, not silent hull substitution: original accepted vertices/faces are transformed and solid-unioned into the protected deck; no convex hull replaces them and no automatic repair is claimed. Edge welding, opposite incidence, finite coordinates, positive volume and self-intersection/convex support checks precede worker integration. Invalid uploads/edits pause export even while a last-good preview remains visible.

Both workflows include real file pickers on phone/desktop, drag/drop, synthetic sample downloads/buttons, replacement/removal/default reset, and bounded portable payloads. Files remain local in this browser; no API keys, CDN, server upload, analytics or paid service. Personal inputs are never saved into the repository. Named saves retain up to six local designs; JSON includes checked normalized image/mesh data. Missing assets explicitly require reattachment. Undo/redo stores up to 35 state snapshots.

## Views, exports and printing

Connected card, loose print layout, assembled, exploded, isolated parts and see-through deck views share exactly the same printable solids. Wheel-turn is labeled **preview-only positioning**, not an STL orientation change. Three.js supports orbit, zoom, fit and touch orbit/pinch. Preview colours are not STL colours. The mobile layout places preview/exports before stacked full-width editor sections.

Each of the card and eight individual parts has a binary STL button; Everything ZIP contains nine STLs and numbered `ASSEMBLY.txt`. Export uses the exact current valid worker result and state key, never a stale last-good mesh. Heavy CSG/topology work runs in a bundled WASM Web Worker, with 100 ms debounce, stale sequence guards, bounded detail and explicit ready/build/error states. No 3MF claim is made.

Print card or all eight separate parts flat at Z=0, PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls, no supports intended. Full card may exceed your printer; use loose part downloads. Cut 32 accessible tabs **2 mm beyond nonfunctional part edges**, trim nubs and discard carrier. Follow the numbered in-app/ZIP notes: rails over deck, axle sideways, wheels from outside, keepers downward. Calibrate deck/rail friction fit first; adjust total allowance in 0.05 mm steps and compensate elephant foot. Test axle/wheel radial fit before the full card. Keys can lift free, so keep upright. Small parts and cutting require adult handling.

## Validation and limits

`validate.mjs` independently parses float32 binary STL: exact byte count, nonempty finite triangles, normalized winding-consistent normals, nondegenerate faces, 1e-5 mm welded edge incidence (two opposite faces), positive volume per connected component, orientable Euler characteristic and expected mm bounds. Every card/part is one connected closed solid. Default, all presets, min/max and mixed extrema are tested, plus image threshold/relief/engraved and ASCII/binary STL-derived outputs. Manifold intersections check each assembled body, independent full wheel rotations, all assembly insertion paths, keeper/rail escape stops, card containment, loose-part separation and 32-cut separation into **eight parts plus carrier**.

Production Playwright tests upload actual PNG/JPEG/ASCII/binary files and save actual STL/ZIP downloads, compare changed geometry and exact preview fingerprints, regenerate portable JSON independently, exercise presets/shapes/text/icons/SVG holes and safe zones, invalid/truncated/open/nonmanifold/concave/excessive sources, replacement/remove/reset, stale results, worker abort/reload, named saves, themes, keyboard focus and 320/390 px touch orbit/pinch/no-overflow/export reachability. Reports and screenshots are stored beside the source; see `VALIDATION.md` for completed checks. Dependencies: React/ReactDOM, Vite/plugin-react, Three.js, Manifold WASM, fflate, Fontsource Fredoka/Rubik, gh-pages; Playwright is test-only. Fonts retain their package OFL licenses; Manifold Apache-2.0, Three.js MIT, fflate MIT, icons original.

**Computational geometry/assembly checks are not physical print, rolling friction, press-fit force, strength, stability or fatigue tests. None of those physical tests was performed.**
