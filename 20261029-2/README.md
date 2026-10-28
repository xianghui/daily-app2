# Sift & Sort

A six-part **flat-pack sorting-ramp kit-card generator**. Snip 24 runners, seat a sloping pierced deck on two upright supports, secure four joints with adhesive, and hand-guide three graduated flat tokens downhill. Each token spans smaller openings and passes its first matching hole. This is an adult physical craft demonstrator, not a browser game, coin gauge or automatic sorter. Gravity sliding depends on friction: hand centering/guidance is intentional.

## Actual STL reference and original adaptation

First searched `/Volumes/ExternalHD/3d_printing_apps/` for actual STL assets. Read local kit-card/fabric instructions: the kit-card projects contain no reference STL; clicker sockets, telescoping shells and interlocked fabric links do not establish sheet/card construction. All reference trees and the older gallery remain read-only.

Downloaded and parsed **White Cat Kit Card**, Mike Kasberg / mkasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Read repository README, LICENSE and `kit_frame.scad`. The downloaded binary STL is 1,530,884 bytes / 30,616 triangles, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

- Assumed millimeters, corroborated by source sheet settings; STL itself is unitless.
- Measured bounds −0.01..179.81 × −0.01..178.01 × 0..3.19 mm; **179.82 × 178.02 × 3.19 mm** envelope.
- Two edge-connected components after 0.00001 mm vertex welding. The source has nonmanifold/coplanar artifacts: inspection-only, not repaired or exported.
- Mesh Z histograms, actual sections at Z=0.10/0.50/1.59 mm and rail section Y=100 show **1.6 mm sheet/perimeter** and low bridge elevations **0.21–0.22 mm**. See `reference-analysis.py`, `reference-analysis.json` and inspected `reference-sections.png` / SVG.
- **Measured source → generator:** keep 1.6 mm sheet by default, expose 1.6–2.4 mm; reinforce source 1.6 mm carrier to 2.4 mm; redesign delicate runners as accessible 0.4–0.6 mm cut tabs, four per part.
- **New proposed geometry, not source-measured interfaces:** sorting holes/tokens, inclined trapezoidal supports with horizontal feet, four 8 mm tongues and full-depth slots with 0.10–0.35 mm total allowance. This is an original parametric reconstruction of the measured sheet/carrier strategy, not a cat reconstruction, hull, source mesh re-export or artwork adaptation. No raw reference STL is bundled. Cross-section evidence is attributed above; no endorsement.

## Studio and implementation

React + Vite, Three.js OrbitControls, Manifold WASM worker and fflate. Dependencies were independently installed. Existing first-party studio import/export/persistence plumbing is reused; sorting geometry, assembly, controls and mechanical checks are new. Read-only `keycap_generator2` README, App.tsx, styles.css, Viewer.tsx, worker, import/STL, image and export modules informed the concrete studio patterns: 374 px left control rail, sticky header, collapsible sections, paired numeric/range inputs, tactile pressed keys, locally bundled Fredoka/Rubik, checkerboard cutout, source/final previews, explicit STL unit/orientation editor, right viewer and export below. Phone is preview/export first, followed by stacked controls. Saved light/dark theme, keyboard focus, reduced-motion and touch orbit/pinch supported.

```sh
npm install
npm run dev
npm test                  # independent mesh and assembly checks
npm run predeploy         # production build
node serve-production.cjs # http://127.0.0.1:5490/daily-app2/20261029-2/
node browser-test.cjs
node feature-test.cjs
```

Base is `/daily-app2/20261029-2/`. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; combined public deployment must use the monorepo root `predeploy`/`deploy`, not the per-app deployment. Node 22.12+ recommended.

## Parameters and mechanics

All physical dimensions in millimeters except slope/rotation (degrees).

| Parameter | Supported range |
|---|---|
| Card width / height | 210–240 / 145–180 |
| Deck length / width | 106–118 / 30–36 |
| Deck center height / slope | 26–30 / 12–20° |
| Small token diameter | 8–10; medium +4, large +8 |
| Hole diameters | matching token +1; 0.5 nominal radial pass clearance |
| Sheet / fixed rail | 1.6–2.4 / 2.4 |
| Joint total clearance | 0.10–0.35; default 0.20, i.e. 0.10 per side |
| Part spacing | 4–7 |
| Runner width / thickness | 0.8–1.4 / 0.4–0.6 |
| Dimple depth | 0–0.4 |

Three real mesh-thumbnail presets, three deck silhouettes and bounded variation. Combined values that cannot fit a carrier are rejected, not silently scaled. Four support tongues pass full sheet thickness and project 0.45 mm beyond the seated deck. Slots do not intersect sorting holes; narrowest valid shoulder webs are checked by geometry. The supports' bottom edges lie on the same horizontal plane. The deck lowers along its normal onto the four tongues; broad shoulders stop over-insertion. **Adhesive required:** these are clearance joints, not snap retention. Print one deck/support pair as a calibration coupon before the whole card. No universal FDM tolerance is claimed.

## Image, SVG, text and icon workflow

Local PNG/JPEG content signatures and dimensions are checked before decoding: 2 MB, 12 MP, max 6,000 px side. Simple SVG only, ≤2,000 elements and ≤6,000 px declared dimensions; scripts, external resources, text/effects/references rejected. Synthetic CC0 samples are bundled; picker and drag/drop work on desktop, picker works on phones.

Images normalize to ≤500 px and are sampled to an exact **20 × 20 height grid**. Fit/cover, crop shifts ±25%, light/transparent background removal or inversion, threshold 1–254 and grayscale relief change the generated solid. A triangulated continuous height-map with a closed backing is unioned into a protected 13 mm medallion landing near the deck's high end. Threshold produces binary sampled relief; grayscale uses depth × (1−intensity/255). White/transparent holes remain unraised/unengraved above an intact solid backing, not through-holes. This is documented **2D-to-relief**, not automatic 3D reconstruction or exact vector tracing. Checkerboard shows actual conversion. Text (up to 8 characters), searchable bundled SVG marks and imported SVG use the same local conversion.

Raised depth 0.4–3 mm; engraved 0.4–0.6 mm retains at least 0.8 mm floor at minimum sheet. Import footprint 4–7 mm, Z rotation ±180°, X shift ±1.5, Y ±2. Safe-zone violations block export. Change pixels, threshold, depth, placement or rotation to change final STL. Replace/remove/reset return cleanly to defaults.

## STL integration contract

ASCII and binary STL, 2 MB, ≤1,500 triangles, 0.2–250 mm per axis. Parse/validate in worker. Explicit millimeter confirmation; Z up, Y up or inverted Z before attaching. Oriented source dimensions, triangle count, source preview and exact XY/Z scale factors shown. XY scales proportionally to 4–7 mm footprint, Z independently to 0.6–3 mm grip height; rotation and placement are real. The actual mesh is solid-unioned into the deck medallion, **never replaced with a convex hull**.

Supported inputs are one outward-wound closed **convex flat-bottom solid** with broad bed contact. Concave/cavity/branched/open/nonmanifold/self-intersecting/overhanging or disconnected geometry is explicitly unsupported and rejected, not repaired or flattened. Triangle intersections, edge incidence, winding, dimensions, finite coordinates, degeneracy, volume and contact checks precede booleans. Slender XY features below 1.2 mm are rejected. Landing is isolated from slots, holes and supports. Remove, reorient and reattach if needed.

## Local data, state and export

All user files process locally. No API, key, upload service, CDN, analytics or network model calls. Dependencies/fonts/WASM bundled. Do not commit personal inputs. Undo/redo stores 35 snapshots; six named local designs and portable JSON (2 MB) include bounded mesh/pixel payloads. Missing image payload explicitly requires reattachment. Restored STL is independently revalidated. Preview colours are not STL colours.

Worker builds are debounced, request IDs reject stale results, and current-state keys gate every export. Invalid edits/imports, unconfirmed units, loading and worker errors disable exports; last valid preview is labelled, never silently downloaded. Production worker abort/reload and asynchronous import races tested.

Connected-card, assembled, exploded, de-tabbed plate and all six isolated views use the exact same final meshes. View poses and transparency are explanatory only. All exports remain bed-flat: one real connected carrier STL, individual closed part STLs and ZIP containing all seven STLs plus numbered print/assembly notes. Binary STL, exact current mm dimensions and preview/export fingerprint comparison. No fake 3MF. Fit/zoom/orbit and touch controls are local.

## Print, assembly and validation

PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls; every part bed-flat, decoration up, no supports intended. Check bed envelope. Adult: snip 24 runners, trim nubs/elephant foot, dry-fit four tongues, seat deck on both supports, adhesive-fix four joints and cure. Hand-guide flat tokens in the center lane from high to low, catch below. Open sides do not automatically center tokens. Small loose parts, cutters and adhesive are unsuitable for children/pets.

See `VALIDATION.md` and machine-readable reports. Independent exported-float32 checks require nonempty finite nondegenerate triangles, consistent unit normals, outward winding, positive volume per connected component and exactly two opposite incident faces per welded edge (1e-5 mm). Every separate part and connected card checked, including PNG/JPEG/SVG and STL-derived outputs. Assembly uses Manifold intersections, with 0.001 mm³ numerical tolerance at float32-transformed coplanar shoulders; default intersections are zero. Tests verify sampled normal insertion, shoulder stops, feet on ground, nonoverlap, 24 safe snips → six parts plus carrier, actual matching-token passage and larger-token obstruction at earlier holes. Mesh/manifold checks do not prove physical performance.

**No physical print, friction, sorting, fatigue or strength testing performed.** Adhesive/material/printer calibration remains required.

Dependencies: React/MIT, Three.js/MIT, Vite/MIT, Manifold/Apache-2.0, fflate/MIT, Fredoka/Rubik/SIL OFL; package metadata carries their licenses. Source-reference attribution above. Synthetic sample fixtures are CC0.
