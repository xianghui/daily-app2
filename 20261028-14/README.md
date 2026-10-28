# Tether & Float

A local browser **four-part tensegrity kit-card generator**. Two mortised plates and two opposed hooked masts form a tension-balanced decorative display after adding one central lifting cord and three perimeter stays. This is a genuine connected carrier card with 12 removable tabs, not a loose print layout. Round, hexagonal and oval plate silhouettes, three thumbnail presets, tunable mast height, plate separation, radius, sheet, beam, holes and material-dependent fits.

**Requires thread; not a shelf, toy, load-rated structure or hardware-free floating model. No physical print, assembly, knot, stability, stiffness or strength tests were performed.** Computer checks do not establish those properties.

## Reference-first evidence and attribution

Searched actual STL assets under `/Volumes/ExternalHD/3d_printing_apps/` first. Local clicker cavities, slider tracks and fabric links are not sheet/card construction references. Inspected the local kit-card project README; the kit-card trees have no suitable local reference STL. Used an accessible public, licensed alternative and downloaded/parsed it again for this build:

- Mike Kasberg, **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Read repository README, LICENSE and `kit_frame.scad`.
- Binary STL: 1,530,884 bytes, 30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Actual dimensions **179.820 × 178.020 × 3.190 mm**, two welded edge-connected components. STL has no units; millimeters are corroborated by source OpenSCAD.
- Measured source sheet planes Z=0/1.6 mm; perimeter width 1.6 mm at Y=100 section; low bridge vertex levels 0.21/0.22 mm. Actual triangle-plane sections at Z=0.1/0.5/1.59 mm are saved in `reference-sections.svg/png`. Lower sections show bridges attaching flat parts; upper section removes low connections while preserving panels/interfaces.
- **Source defects:** edge incidence detects nonmanifold/coplanar artifacts. Source is a measured design reference, not repaired, bundled or re-exported. Only analytic reconstructed solids are exported.

`reference-analysis.json` records source URL, hash, dimensions, component volumes, vertex-level histogram, sectional measurements and parameter mapping. Reproduce with `python3 reference-analysis.py /path/to/downloaded-reference.stl` from this app directory. Raw third-party STL is deliberately absent from the repository.

Measured 1.6 mm source sheet → default 1.6 mm, supported 1.6–2.4 mm. Source 1.6 mm carrier is deliberately reinforced to 2.4 mm; source low bridges are deliberately thickened to proposed 0.4–0.6 mm removable tabs. Source parts-on-carrier construction informs this card, but **hooked masts, cord suspension, keyed feet, mortises and fit dimensions are original redesigns**, not measurements claimed from the spacecraft reference. No switch socket or convex hull is substituted. Unlike previous rib cross-laps, this has two mast/plate mortises and a cord-tension load path.

Visual/interaction reference (read-only): `keycap_generator2` README, `src/styles.css`, App, Viewer, worker, STL parser, export, imageTrace and geometry modules. Concrete patterns: compact sticky brand, scrollable left controls, tactile pink selected keys, numeric/range mm pairs, gradient viewer, source + checkerboard converted preview, source-unit confirmation and protected solid integration. No reference Git history or dependency tree copied. Shared first-party daily-studio import/editor utilities reused; mechanism builder and assembly checks replaced. Dependencies installed independently.

## Run and dependencies

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve-production.cjs
# Other terminal: node browser-test.cjs (then feature / hole / resilience suites)
```

React/Vite, Three.js/OrbitControls, Manifold WASM, fflate and locally bundled Fontsource Fredoka/Rubik (OFL). No CDN, API key, backend, paid service, uploads or network geometry dependency. All user files stay in the browser. `predeploy` is exactly `npm run build`; `deploy` is exactly `gh-pages -d dist`. Base: `/daily-app2/20261028-14/`. Combined publication uses the root monorepo's deploy flow, not per-app deploy.

## Parameters and fit

All lengths **millimeters**, all angles degrees. Card 170–220 × 150–190; mast 34–42; separation 52–66; plate radius 26–32; beam width 5–7; sheet 1.6–2.4; total mortise allowance 0.15–0.45; part spacing 4–7; tab width 0.8–1.4; tab thickness 0.4–0.6; dimple depth 0–0.4; cord holes 1.8–2.6.

Mast tongue = 8 mm wide × sheet thickness long/deep. Mortise = `(8 + total allowance) × (sheet + total allowance)`, cut through plate. Mast shoulders seat against plate faces; both printed parts remain separate. Fits are clearance-starting values, **not universal press fits**: calibrate one mast and matching plate before printing the card. Friction depends on print/material; a small glue dot at mast feet may be needed, especially the hanging mast. This is not a mechanically locked joint.

Invalid combined parameters block export: `2 × mast height − separation − 2 × beam width ≥ 2 mm` is required between opposing hook beams. The centerline distance between hook holes is `2 × mast height − separation − beam width`. Plate radius anchors are placed at 72% of radius, with Y scaling for oval; three holes form a triangle surrounding the support axis. Beam-hole ligaments ≥1.2 mm; personalization remains inside a 6.5 mm-radius center keep-out, over 2.2 mm away from the nearest slot at supported extremes.

## Print and numbered assembly

1. Print the real connected card or four individual parts, bed-flat at Z=0, 100% scale. PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls; no supports intended. Inspect slicer and bed envelope. Personalization raises overall card Z above sheet thickness.
2. Adult: snip **12 accessible low tabs**, at the documented cut lines 2 mm outside nonfunctional plate/foot edges. Trim nubs and elephant foot. Four intact manifold parts plus carrier remain; cutters do not cross mortises, cord holes or tongues. Cutting tools and small parts are hazards.
3. Calibrate one mast/plate pair. Seat rising mast from above in the lower plate; seat identical hanging mast upside down from below into upper plate, with columns on opposite sides. Shoulders flush, tongues end flush at outer plate faces. Optional glue at these two feet after dry fitting.
4. REQUIRED: nonstretch **0.4–0.8 mm thread**, **four pieces**: approximately **one 150 mm central cord and three 250 mm stays**, including generous knot tails; trim after adjustment. No bearings, magnets, screws or other hardware. There is no honest rigid hardware-free substitute for the floating interaction: without thread, use the flat card as a construction sample only.
5. Support upper plate on a temporary spacer at the selected separation. Tie opposing center-hook holes first, routing thread through their transverse bores and around the front faces, then tie corresponding perimeter holes. The center pulls the upper hook upward; perimeter stays pull down and resist tilt. Adjust knots until level and carefully remove spacer. Do not over-tension or bend arms. Knots are accessible between plates.
6. For disassembly, support upper plate and untie cords before removing unglued masts. Do not treat model as a shelf or lift by the suspended upper plate.

Assembled/exploded views show the same printable solids in rigid placements. **Cords are preview-only ideal centerlines**, slightly outside hook faces; physical knots/bends add length. Numeric ideal lengths are geometric estimates, not a knot or elasticity simulation. Printed stiffness, tension stability, creep, force and durability remain untested.

## Personalization and image import

Text (up to eight characters), six searchable bundled SVG icons and PNG/JPEG/simple SVG become **real upper-plate geometry**, not textures. Sample PNG, JPEG, holed SVG, ASCII STL and binary STL are bundled as synthetic fixtures with no personal files. Pick/replace on desktop or phone; drag/drop one file on supported browsers; remove, reset image or reset transforms to return to defaults.

Files ≤2 MB. PNG/JPEG actual headers validated before decode, ≤12 MP and ≤6,000 px per side, normalized to ≤500 px. Simple SVG ≤2,000 elements; reject external resources, scripts, effects and references; local rasterization to 256 px. Strict STL limits below. No personal input files are saved in the repository or sent off-device.

**Exact conversion:** contain/cover plus ±25% pan; alpha composited against selected light/dark background; luminance sampled on a 20×20 grid. Threshold 1–254 produces two-level sampled silhouette heights; grayscale produces variable heights. The outward-wound closed height-map is boolean-unioned with or subtracted from the plate. Relief 0.4–3 mm; engraving 0.4–0.6 mm preserves ≥0.8 mm floor. White holes stay unraised (or unengraved) on a continuous backing; checkerboard shows the actual kept grid. This is **2D-to-relief/silhouette conversion, not a full 3D reconstruction from a single photo** and not exact vector-outline tracing. Rasterized edges interpolate between samples.

Footprint 4–7 mm; rotation ±180°; center offsets X ±1.5/Y ±2 mm. Unsafe transforms and empty silhouettes block export. Tests probe the final holed ring in raised and engraved solids to confirm the light center is preserved.

## STL import contract

ASCII and binary STL ≤2 MB, ≤1,500 triangles, oriented dimensions 0.2–250 mm each axis. Explicit millimeter confirmation required (STL has no unit metadata). Z-up, Y-up and upside-down selection before attaching; changing axis removes source and requests reattachment. Show original source mesh/dimensions; XY scaled proportionally to 4–7 mm footprint, Z independently to 0.6–3 mm; rotate/center/place/reset. Original source vertices are transformed and **solid-unioned** into upper-plate center with 0.15 mm overlap, not unchanged re-export.

Intentionally supported: **one closed, outward-wound convex, broad flat-bottom, non-overhanging solid**. Reject concave, hollow, branched, disconnected, self-intersecting, open, nonmanifold or overhanging input with guidance, never replace it with a hull or claim arbitrary repair. Parser checks binary lengths/ASCII content, finite vertices, dimensions, degeneracy, two opposite incident faces per edge, connectivity, positive volume, triangle intersections, convexity and bed contact. A bottom hull is only a contact/overhang check, not replacement exported geometry. Minimum transformed XY feature 1.2 mm; protected mark zone guards assembly interfaces.

## State, worker and exports

Heavy CSG stays in a worker with bounded resolution, 100 ms debounce, request IDs and current parameter/source/transform keys. Worker loading failures, invalid numeric edits, pending image conversion, unconfirmed units or errors disable export even if the last valid preview is visible. A last-good mesh is never silently exported as current.

Undo/redo (35 snapshots), six local named designs, saved theme, JSON save/open with bounded normalized image/indexed STL payloads. JSON ≤2 MB. Missing/corrupt payloads request reattachment and block export. All restore paths revalidate source content; paths alone never pretend to restore a file.

Preview/export use the same current checked mesh. Connected card, suspended assembly, exploded, de-tabbed print plate and all four isolated parts. Orbit, zoom, fit, touch orbit/pinch. Preview-only colour/ghost and cord lines do not change STLs. Per-part binary STL and **Everything ZIP** with five STLs (connected card plus four parts) and `ASSEMBLY.txt`. ZIP is not 3MF, STL does not store colours or units. Dimensions and geometry signature shown for chosen export.

## Reproducible validation

- `npm test`: 14 default/preset/min/max/cross-extreme cases + 30 imported-mesh/image cases. Independent binary parser checks length, nonzero faces, finite coordinates, unit outward normals, float32 mm bounds, 1e-5 mm welded edges with exactly two opposite incident triangles, positive volume for every component. Each part and connected-card STL tested separately.
- Assembly checks: all part-pair Manifold intersections; two complete mast insertion paths (13 positions each); protected import zone; wall/hole ligaments; card envelope; original parts contained in connected card; 12 cutter operations produce exactly four parts plus carrier. Straight 0.8 mm cord paths do not cross printed solids.
- Illustrative ideal statics integrates uniform-density upper-part volume/centroid, exhibits positive outer stay tensions balancing gravity/moments with total outer prestress three times upper weight. This is a feasibility calculation, **not a recommended physical tension**, load rating, stability or stiffness test.
- Production-browser suites: real PNG/JPEG/ASCII/binary file picks and downloaded STLs; content/threshold/depth/crop/scale/placement change geometry; downloaded signature equals preview and independent JSON regeneration; invalid/truncated/nonmanifold/excessive/empty inputs and recovery; worker loading failure/stale imports; presets/shapes/text/icons/holed SVG; raised/engraved actual solid probes; undo/redo; local/JSON portable round trips; ZIP unpack + individual STL validation; all views, colour and dark theme; reduced motion, focus, collapsible controls; 320/390 px preview-first layout, no overflow, orbit/pinch and mobile imports/downloads.
- Gallery inline compilation, prior-entry preservation, browser rendering; root combined staging; public worker/import/download smoke tests are recorded separately when executed.

Reports and screenshots live beside the app. See `VALIDATION.md` for executed checks. **No physical print or assembly testing has been performed.**
