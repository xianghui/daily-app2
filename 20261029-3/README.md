# Plumb & Plane

A browser-based **four-part gravity-angle kit-card generator**: snip sixteen runners, cross-lap a marked upright onto two feet, and hang a printed bob from supplied thread. Center long tick is zero; short ticks are equal 10° or 15° steps and long indices repeat every 30°, across ±60°. Gently tilt the assembly in its plane to compare the gravity line with the ticks. This is an adult craft demonstrator, **not a calibrated measuring instrument**. Thread and adhesive are required.

## Reference-first evidence

Searched actual STL assets under `/Volumes/ExternalHD/3d_printing_apps/` first. Read the local kit-card README; the three local kit-card projects contain no reference STL. Existing switch cavities, telescoping shells and fabric links do not establish flat sheet/carrier construction. Reference trees and `/daily_app/` remain read-only.

Downloaded and parsed **White Cat Kit Card**, Mike Kasberg (mkasberg), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Read its README, LICENSE and `kit_frame.scad`. Actual binary STL: 1,530,884 bytes, 30,616 triangles, SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Assumed millimeters, corroborated by OpenSCAD sheet settings; STL itself has no units.

Measured envelope **179.82 × 178.02 × 3.19 mm**. Two edge-connected components after 1e-5 mm welding, with nonmanifold/coplanar artifacts: the source is an inspection-only reference, not a repaired or verified printable mesh. Actual Z=0.10/0.50/1.59 sections, Z histograms and the Y=100 rail section establish **1.6 mm sheet and perimeter rails** and low **0.21–0.22 mm** bridge elevations. See `reference-analysis.py`, `reference-analysis.json`, `reference-sections.svg` and inspected PNG.

### Measured construction → original redesign

- Keep measured 1.6 mm sheet by default; expose 1.6–2.4 mm.
- Reinforce measured 1.6 mm carrier to 2.4 mm.
- Redesign source low runners as accessible 0.4–0.6 mm-thick × 0.8–1.4 mm-wide snip tabs, four per part.
- **New proposed dimensions, not source-measured fits:** 90–104 × 72–84 mm angle board, two 42–54 × 10 mm feet, opposing 5 mm cross-laps, 12–16 mm bob, 2.4–3.6 mm cord eyes, 38–46 mm arc, a 3 mm-high stand-off eye boss (7 mm outer diameter) and equal-angle tick positions. Total cross-lap slot allowance is 0.10–0.35 mm.

This is an original parametric reconstruction of the measured carrier/sheet strategy, not a cat reconstruction, cosmetic reskin, hull or unchanged source re-export. Neither raw source mesh nor cat artwork is bundled. Attribution does not imply endorsement.

## Run and implementation

```sh
npm install
npm run dev
npm test                  # independent exported-STL and assembly checks
npm run predeploy         # npm run build
node serve-production.cjs # http://127.0.0.1:5491/daily-app2/20261029-3/
node browser-test.cjs
node feature-test.cjs
```

React + Vite, Three.js OrbitControls, Manifold WASM worker, fflate, locally bundled Fredoka/Rubik. Independently scaffolded and installed dependencies. Reuses first-party studio import/export/persistence plumbing; primary kit geometry, assembly and checks are original to this app. Read-only `keycap_generator2` README, App.tsx, styles.css, Viewer.tsx, worker, STL/image/export modules informed the concrete maker patterns: 374 px left controls, sticky compact brand/theme header, tactile selected buttons, paired millimeter sliders/numbers, collapsible sections, source/cutout preview, imported-mesh orientation/units editor, large right viewer and exports below. Phone stacks preview/export before controls. Keyboard focus, reduced motion, saved dark theme and touch orbit/pinch supported.

Vite base `/daily-app2/20261029-3/`. Per-app scripts exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public monorepo publication uses the **root** `predeploy` and `deploy`, never the individual app deployment. Node 22.12+ recommended.

## Parameters, all physical dimensions in mm

| Control | Supported range |
| --- | --- |
| Card width / height | 170–210 / 110–140 |
| Board width / height | 90–104 / 72–84 |
| Arc radius | 38–46 |
| Bob diameter | 12–16 |
| Foot length / fixed height | 42–54 / 10 |
| Opposing cross-lap depths | fixed 5, board opening +0.1 vertical allowance |
| Cord bore | 2.4–3.6 |
| Tick pitch | 10° or 15°; span ±60°, long index every 30° |
| Sheet / fixed carrier rail | 1.6–2.4 / 2.4 |
| Joint total clearance | 0.10–0.35; default 0.20 (0.10 per side) |
| Part spacing | 4–7 |
| Runner width / thickness | 0.8–1.4 / 0.4–0.6 |
| Dimple depth | 0–0.4 |

Three real mesh-thumbnail presets, three board silhouettes, bounded variation, reset. Combinations that cannot fit the card are blocked, never silently scaled. Feet are at ±40% of board width; widened stance and 10 mm height prevent bob interference at the tested extrema. Bob bottom clearance is at least 3 mm for the supported combinations. The board lowers vertically over the two open slots; shoulders stop overtravel. All feet and the board baseline contact the desk. **Adhesive required** at the two clearance joints for handling, no snap/friction-retention claim. Print one foot and board as a calibration pair; tolerance is printer/material-dependent, not universal.

## Local image, SVG, text and icon conversion

PNG/JPEG signatures and dimensions checked before decode: 16 bytes–2 MB, ≤12 MP, ≤6,000 px per side. Normalize to ≤500 px. Simple SVG ≤2,000 elements and ≤6,000 px declared dimensions; reject scripts, references, external resources, text and effects. Rasterize supported vector fills locally; even-odd holes retained in the sampled relief. All bundled fixtures are original synthetic CC0.

The image is sampled to an exact **20 × 20 height grid** with fit/cover and ±25% crop placement. Light/transparent background removal or inversion, threshold 1–254 and grayscale mode affect actual mesh heights. Threshold chooses depth or zero; grayscale height is depth × (1−intensity/255). A closed triangulated height surface with backing is **solid-unioned** into the board's isolated upper-right 13 mm medallion. Engraving subtracts the height geometry. White/transparent holes remain unraised/unengraved over a continuous backing: not through-holes and not exact vector tracing. Checkerboard shows actual converted pixels. **2D-to-relief, not automatic full 3D reconstruction from one photo.**

Text up to 8 characters and six searchable bundled SVG marks use the same geometry path. Raised depth 0.4–3 mm; engraved 0.4–0.6 mm preserves at least 0.8 mm floor at the minimum sheet. Footprint 4–7 mm, Z rotation ±180°, X shift ±1.5 mm, Y ±2 mm. A radial safe-zone check rejects protrusions. Marks do not approach cord eyes, ticks or cross-laps. Replace/remove/reset work with picker on phones and desktop; drag/drop supported on desktop.

## STL import contract

ASCII and binary .stl, ≤2 MB / 1,500 triangles, each axis 0.2–250 mm. Parse and validate in the worker. Confirm coordinates are millimeters explicitly; choose Z, Y or inverted-Z up before attaching. Show oriented source dimensions, triangle count, source preview and XY/Z scale factors. XY scales proportionally to 4–7 mm footprint, Z independently to 0.6–3 mm grip height. Rotation and offsets are real. The actual input mesh is boolean-unioned into the board landing; never replaced by a convex hull.

Supported: one outward-wound closed **convex, broad flat-bottom solid without XY overhangs**. Concave/cavity/branched/open/nonmanifold/disconnected/self-intersecting geometry is **explicitly rejected**, not discarded, flattened or claimed repaired. Checks include finite coordinates, bounds, triangles, orientation, edge incidence, intersections, positive volume and bed contact. XY thickness below 1.2 mm after scale is rejected. Changing up axis clears the asset and requests reattachment. Bounding hull computation only validates contact; it never replaces source geometry.

## State, preview, privacy and export

All files process on-device. No upload, API/key, remote CDN, analytics or paid service. Fonts/dependencies/WASM bundled. No personal inputs saved to this repository. Undo/redo has 35 snapshots, six named local designs and portable JSON ≤2 MB carry bounded image/mesh payloads. Missing image payload requests reattachment; restored STL is independently revalidated.

Debounced worker builds have request IDs/stale guards and current-state keys on exports. Loading, invalid edits/imports, unconfirmed units and worker failure block downloads; a last-valid preview is labelled, never silently exported. The exact same current mesh generates preview and STL; exported fingerprint compared with the UI and regenerated JSON state.

Connected card, assembled, exploded, de-tabbed print plate and all four isolated views use the same printable parts. The thread is a labelled estimated preview-only line; it is **not exported**, and bob deflection/insertion controls are manually posed explanations, not force simulations. STL is geometry-only, not coloured. Exports remain real bed-flat geometry regardless of view. Binary connected-card STL, four part STLs and Everything ZIP containing all five STLs plus numbered `ASSEMBLY.txt`. No fake 3MF.

## Print and assembly

1. PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls. Bed-flat, relief up, no supports intended. Check bed envelope.
2. Adult: snip sixteen tabs, trim nubs and elephant foot. Do not cut functional slots or eyes.
3. Stand both feet parallel, slots upward; lower board into opposing cross-laps. Calibrate a pair first, adhesive-fix and cure both joints.
4. Supply about 150 mm of **0.5–1 mm nonstretch thread**. Pass through the **raised 3 mm stand-off board eye**, knot securely behind. Its front lip holds the hanging cord clear of the board. Tie bob through its eye, with free eye-to-eye length equal to the arc radius. Adjust knots so the thread stays at least 3 mm in front of the board and clears decoration. The bob **eye**, not center, sits on the tick arc.
5. Center long index is zero when board baseline is horizontal. Count ticks to either side; short steps 10°/15°, long every 30°. Gently tilt in plane while holding the kit. Read the cord, not bob center. Printed sheets, thread friction, knots and printer errors limit accuracy. Contact on the bore lip shifts the effective pivot from the ideal centered-eye preview; the marks are illustrative, not a calibrated scale.
6. Small bob, thread, cutters and adhesive: adult craft, keep away from children/pets.

## Validation

See `VALIDATION.md` and reproducible scripts/reports. Separate exported float32 STL checks require finite nondegenerate triangles, matching unit normals, outward winding and positive volume **per connected component**, exactly two opposite faces per welded edge at 1e-5 mm, bed Z=0 and declared mm envelope. Check every part and connected card for built-in/preset/extreme and imported-source cases. Independent Manifold tests verify nonintersecting parts, vertical insertion, cross-lap shoulder stops, grounded feet/baseline, actual through cord eyes, sampled ±60° bob sweep, tick angles/radius, safe snips and four parts plus carrier after cutting.

**No physical print, swing, accuracy, strength, friction or material testing performed.** Computational manifold/fit checks are not a physical test or performance guarantee. Thread and adhesive are user-supplied consumables.

Dependencies: React/MIT, Three.js/MIT, Vite/MIT, Manifold/Apache-2.0, fflate/MIT, Fredoka/Rubik/SIL OFL. Source-reference attribution above; synthetic fixtures CC0.
